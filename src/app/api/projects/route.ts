import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { projectSchema } from '@/lib/validations'
import { generateSlug } from '@/lib/utils'
import { PLAN_LIMITS, getEffectivePlan } from '@/lib/constants'

export async function GET() {
  try {
    const supabase = await createClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
    }

    const { data: projects, error } = await supabase
      .from('projects')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false })

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json(projects)
  } catch {
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
    }

    const body = await request.json()
    const parsed = projectSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Datos inválidos', details: parsed.error.flatten().fieldErrors },
        { status: 400 }
      )
    }

    // Check plan limits
    const { data: profile } = await supabase
      .from('profiles')
      .select('plan, gifted_plan, gifted_plan_expires_at')
      .eq('id', user.id)
      .single()

    const plan = getEffectivePlan(profile || { plan: 'free' })
    const limits = PLAN_LIMITS[plan]

    const { count } = await supabase
      .from('projects')
      .select('*', { count: 'exact', head: true })
      .eq('user_id', user.id)

    if ((count ?? 0) >= limits.projects) {
      return NextResponse.json(
        { error: `Has alcanzado el límite de ${limits.projects} proyecto(s) en tu plan ${plan}. Mejora tu plan para crear más.` },
        { status: 403 }
      )
    }

    // Generate unique slug
    let slug = generateSlug(parsed.data.name)

    const { data: existingSlug } = await supabase
      .from('projects')
      .select('id')
      .eq('slug', slug)
      .single()

    if (existingSlug) {
      const suffix = Math.random().toString(36).substring(2, 8)
      slug = `${slug}-${suffix}`
    }

    const { data: project, error } = await supabase
      .from('projects')
      .insert({
        user_id: user.id,
        slug,
        ...parsed.data,
      })
      .select()
      .single()

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json(project, { status: 201 })
  } catch {
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 })
  }
}
