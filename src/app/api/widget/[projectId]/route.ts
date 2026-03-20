import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { PLAN_LIMITS } from '@/lib/constants'
import { Plan, WidgetData } from '@/types'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: corsHeaders })
}

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ projectId: string }> }
) {
  try {
    const { projectId } = await params
    // Public endpoint - use admin client to bypass RLS since there is
    // no authenticated user when a widget is embedded on a third-party site.
    const supabase = createAdminClient()

    // Fetch project (include user_id to look up owner's plan)
    const { data: project, error: projectError } = await supabase
      .from('projects')
      .select('name, logo_url, brand_color, is_active, user_id')
      .eq('id', projectId)
      .single()

    if (projectError || !project) {
      return NextResponse.json(
        { error: 'Proyecto no encontrado' },
        { status: 404, headers: corsHeaders }
      )
    }

    if (!project.is_active) {
      return NextResponse.json(
        { error: 'Proyecto inactivo' },
        { status: 403, headers: corsHeaders }
      )
    }

    // Fetch widget config
    const { data: config } = await supabase
      .from('widget_configs')
      .select('*')
      .eq('project_id', projectId)
      .single()

    // Fetch approved testimonials
    let query = supabase
      .from('testimonials')
      .select('id, author_name, author_company, author_role, author_avatar_url, content, rating, video_url, is_company_verified, source, source_platform, source_url, created_at')
      .eq('project_id', projectId)
      .eq('status', 'approved')
      .order('is_featured', { ascending: false })
      .order('created_at', { ascending: false })

    // Apply config filters
    if (config) {
      if (config.min_rating > 1) {
        query = query.gte('rating', config.min_rating)
      }

      if (config.filter_tags && config.filter_tags.length > 0) {
        query = query.overlaps('tags', config.filter_tags)
      }

      if (config.max_testimonials) {
        query = query.limit(config.max_testimonials)
      }
    }

    const { data: testimonials, error: testimonialsError } = await query

    if (testimonialsError) {
      return NextResponse.json(
        { error: testimonialsError.message },
        { status: 500, headers: corsHeaders }
      )
    }

    // Look up owner's plan for runtime enforcement
    const { data: ownerProfile } = await supabase
      .from('profiles')
      .select('plan')
      .eq('id', project.user_id)
      .single()

    const ownerPlan = (ownerProfile?.plan as Plan) || 'free'
    const planLimits = PLAN_LIMITS[ownerPlan]

    // Enforce plan limits on the config at render time
    let enforcedConfig = config || null
    if (enforcedConfig) {
      // Force branding if plan doesn't allow removal
      if (!planLimits.removeBranding) {
        enforcedConfig = { ...enforcedConfig, show_branding: true }
      }

      // Force layout to an allowed one if current layout is premium-only
      if (!planLimits.layouts.includes(enforcedConfig.layout)) {
        enforcedConfig = { ...enforcedConfig, layout: 'carousel' as const }
      }
    }

    // Strip video_url from testimonials if plan doesn't support video
    let processedTestimonials = testimonials || []
    if (!planLimits.video) {
      processedTestimonials = processedTestimonials.map(t => ({ ...t, video_url: null }))
    }

    const widgetData: WidgetData = {
      project: {
        name: project.name,
        logo_url: project.logo_url,
        brand_color: project.brand_color,
      },
      testimonials: processedTestimonials,
      config: enforcedConfig,
    }

    return NextResponse.json(widgetData, { headers: corsHeaders })
  } catch {
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500, headers: corsHeaders }
    )
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ projectId: string }> }
) {
  try {
    const { projectId } = await params
    // Public endpoint - use admin client to bypass RLS for impression tracking.
    const supabase = createAdminClient()

    const body = await request.json().catch(() => ({}))
    const type = body.type || 'impression'

    // Handle click tracking on individual testimonial
    if (type === 'click' && body.testimonialId) {
      await supabase.rpc('increment_field', {
        row_id: body.testimonialId,
        table_name: 'testimonials',
        field_name: 'click_count',
      }).then(null, async () => {
        // Fallback: direct update
        const { data: current } = await supabase
          .from('testimonials')
          .select('click_count')
          .eq('id', body.testimonialId)
          .single()
        await supabase
          .from('testimonials')
          .update({ click_count: (current?.click_count || 0) + 1 })
          .eq('id', body.testimonialId)
      })
      return NextResponse.json({ success: true }, { headers: corsHeaders })
    }

    // Handle impression tracking on displayed testimonials
    if (type === 'impression' && body.testimonialIds && Array.isArray(body.testimonialIds)) {
      // Increment impression_count on each displayed testimonial
      for (const tid of body.testimonialIds) {
        await supabase.rpc('increment_field', {
          row_id: tid,
          table_name: 'testimonials',
          field_name: 'impression_count',
        }).then(null, async () => {
          const { data: current } = await supabase
            .from('testimonials')
            .select('impression_count')
            .eq('id', tid)
            .single()
          await supabase
            .from('testimonials')
            .update({ impression_count: (current?.impression_count || 0) + 1 })
            .eq('id', tid)
        })
      }
    }

    // Also track widget-level impressions (existing logic)
    const referrerDomain = body.referrer_domain || null
    const today = new Date().toISOString().split('T')[0]

    const { error } = await supabase.rpc('upsert_widget_impression', {
      p_project_id: projectId,
      p_referrer_domain: referrerDomain,
      p_impression_date: today,
    })

    // Fallback if RPC doesn't exist: try direct upsert
    if (error) {
      await supabase
        .from('widget_impressions')
        .upsert(
          {
            project_id: projectId,
            referrer_domain: referrerDomain,
            impression_date: today,
            count: 1,
          },
          { onConflict: 'project_id,referrer_domain,impression_date' }
        )
    }

    return NextResponse.json({ success: true }, { headers: corsHeaders })
  } catch {
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500, headers: corsHeaders }
    )
  }
}
