import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { PLAN_LIMITS, getEffectivePlan } from '@/lib/constants'
import { z } from 'zod'

const importTestimonialSchema = z.object({
  author_name: z.string().min(1, 'Nombre requerido').max(100),
  content: z.string().min(3, 'El testimonio debe tener al menos 3 caracteres').max(5000),
  rating: z.number().int().min(1).max(5),
  author_company: z.string().max(100).optional().or(z.literal('')),
  author_role: z.string().max(100).optional().or(z.literal('')),
  source_platform: z.string().min(1, 'Plataforma requerida'),
  source_url: z.string().url('URL invalida').optional().or(z.literal('')),
})

const importRequestSchema = z.object({
  project_id: z.string().uuid(),
  testimonials: z.array(importTestimonialSchema).min(1, 'Se requiere al menos un testimonio').max(100),
})

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
    }

    const body = await request.json()
    const parsed = importRequestSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Datos inválidos', details: parsed.error.flatten().fieldErrors },
        { status: 400 }
      )
    }

    const adminClient = createAdminClient()

    // Verify project ownership
    const { data: project } = await supabase
      .from('projects')
      .select('id, user_id')
      .eq('id', parsed.data.project_id)
      .eq('user_id', user.id)
      .single()

    if (!project) {
      return NextResponse.json({ error: 'Proyecto no encontrado' }, { status: 404 })
    }

    // Check plan limits
    const { data: profile } = await adminClient
      .from('profiles')
      .select('plan, gifted_plan, gifted_plan_expires_at')
      .eq('id', user.id)
      .single()

    const plan = getEffectivePlan(profile || { plan: 'free' })
    const limits = PLAN_LIMITS[plan]

    const { count } = await adminClient
      .from('testimonials')
      .select('*', { count: 'exact', head: true })
      .eq('project_id', parsed.data.project_id)

    const currentCount = count ?? 0
    const newCount = parsed.data.testimonials.length
    const remaining = limits.testimonials - currentCount

    if (newCount > remaining) {
      return NextResponse.json(
        {
          error: `Solo puedes importar ${remaining} testimonios más. Tu plan ${plan} permite ${limits.testimonials} en total.`,
        },
        { status: 403 }
      )
    }

    // Prepare testimonials for insert
    const testimonialsToInsert = parsed.data.testimonials.map((t) => ({
      project_id: parsed.data.project_id,
      author_name: t.author_name,
      content: t.content,
      rating: t.rating,
      author_company: t.author_company || null,
      author_role: t.author_role || null,
      author_email: null,
      author_avatar_url: null,
      video_url: null,
      source: t.source_platform,
      source_platform: t.source_platform,
      source_url: t.source_url || null,
      status: 'approved' as const,
      is_featured: false,
      is_company_verified: false,
      tags: [],
    }))

    const { data: inserted, error: insertError } = await adminClient
      .from('testimonials')
      .insert(testimonialsToInsert)
      .select('id')

    if (insertError) {
      return NextResponse.json({ error: insertError.message }, { status: 500 })
    }

    return NextResponse.json(
      { success: true, count: inserted?.length ?? 0 },
      { status: 201 }
    )
  } catch {
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 })
  }
}
