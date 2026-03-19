import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { WidgetData } from '@/types'

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
    const supabase = await createClient()

    // Fetch project
    const { data: project, error: projectError } = await supabase
      .from('projects')
      .select('name, logo_url, brand_color, is_active')
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
      .select('id, author_name, author_company, author_role, author_avatar_url, content, rating, created_at')
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

    const widgetData: WidgetData = {
      project: {
        name: project.name,
        logo_url: project.logo_url,
        brand_color: project.brand_color,
      },
      testimonials: testimonials || [],
      config: config || null,
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
    const supabase = await createClient()

    const body = await request.json().catch(() => ({}))
    const referrerDomain = body.referrer_domain || null
    const today = new Date().toISOString().split('T')[0]

    // Upsert impression count for today
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
