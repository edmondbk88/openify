import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'

async function verifyAdmin() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return null

  const admin = createAdminClient()
  const { data: profile } = await admin
    .from('profiles')
    .select('is_admin')
    .eq('id', user.id)
    .single()

  if (!profile?.is_admin) return null
  return user
}

export async function GET(request: NextRequest) {
  const adminUser = await verifyAdmin()
  if (!adminUser) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 403 })
  }

  const { searchParams } = new URL(request.url)
  const search = searchParams.get('search') || ''

  const admin = createAdminClient()
  let query = admin
    .from('projects')
    .select('*, profiles(email, full_name)')
    .order('created_at', { ascending: false })

  if (search) {
    const escaped = search.replace(/[%_\\]/g, '\\$&')
    query = query.ilike('name', `%${escaped}%`)
  }

  const { data, error } = await query

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  // Get testimonial counts
  const projectIds = (data || []).map((p: { id: string }) => p.id)
  const countsMap: Record<string, number> = {}

  if (projectIds.length > 0) {
    const { data: testimonials } = await admin
      .from('testimonials')
      .select('project_id')
      .in('project_id', projectIds)

    if (testimonials) {
      for (const t of testimonials) {
        countsMap[t.project_id] = (countsMap[t.project_id] || 0) + 1
      }
    }
  }

  const projects = (data || []).map((p: Record<string, unknown>) => ({
    ...p,
    testimonial_count: countsMap[(p as { id: string }).id] || 0,
  }))

  return NextResponse.json({ projects })
}

export async function PATCH(request: NextRequest) {
  const adminUser = await verifyAdmin()
  if (!adminUser) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 403 })
  }

  const body = await request.json()
  const { projectId, is_active } = body

  if (!projectId) {
    return NextResponse.json({ error: 'projectId requerido' }, { status: 400 })
  }

  const admin = createAdminClient()
  const updates: Record<string, unknown> = {}

  if (typeof is_active === 'boolean') {
    updates.is_active = is_active
  }

  if (Object.keys(updates).length === 0) {
    return NextResponse.json({ error: 'Nada que actualizar' }, { status: 400 })
  }

  const { error } = await admin
    .from('projects')
    .update(updates)
    .eq('id', projectId)

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}

export async function DELETE(request: NextRequest) {
  const adminUser = await verifyAdmin()
  if (!adminUser) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 403 })
  }

  const { searchParams } = new URL(request.url)
  const projectId = searchParams.get('projectId')

  if (!projectId) {
    return NextResponse.json({ error: 'projectId requerido' }, { status: 400 })
  }

  const admin = createAdminClient()

  await admin.from('testimonials').delete().eq('project_id', projectId)
  await admin.from('widget_configs').delete().eq('project_id', projectId)
  await admin.from('widget_impressions').delete().eq('project_id', projectId)
  await admin.from('projects').delete().eq('id', projectId)

  return NextResponse.json({ success: true })
}
