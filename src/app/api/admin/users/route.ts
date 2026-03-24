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
  const plan = searchParams.get('plan') || ''

  const admin = createAdminClient()
  let query = admin
    .from('profiles')
    .select('*')
    .order('created_at', { ascending: false })

  if (search) {
    const escaped = search.replace(/[%_\\]/g, '\\$&')
    query = query.or(`full_name.ilike.%${escaped}%,email.ilike.%${escaped}%`)
  }

  if (plan && ['free', 'minisite', 'pro', 'business'].includes(plan)) {
    query = query.eq('plan', plan)
  }

  const { data, error } = await query

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ users: data })
}

export async function PATCH(request: NextRequest) {
  const adminUser = await verifyAdmin()
  if (!adminUser) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 403 })
  }

  const body = await request.json()
  const { userId, plan, is_admin, gifted_plan, gifted_days } = body

  if (!userId) {
    return NextResponse.json({ error: 'userId requerido' }, { status: 400 })
  }

  const admin = createAdminClient()
  const updates: Record<string, unknown> = {}

  if (plan && ['free', 'minisite', 'pro', 'business'].includes(plan)) {
    updates.plan = plan
  }
  if (typeof is_admin === 'boolean') {
    updates.is_admin = is_admin
  }

  // Handle gift plan
  if (gifted_plan !== undefined) {
    if (gifted_plan === null) {
      // Revoke gift
      updates.gifted_plan = null
      updates.gifted_plan_expires_at = null
      updates.gifted_by = null
    } else if (['minisite', 'pro', 'business'].includes(gifted_plan) && gifted_days > 0) {
      // Grant gift
      const expiresAt = new Date()
      expiresAt.setDate(expiresAt.getDate() + gifted_days)
      updates.gifted_plan = gifted_plan
      updates.gifted_plan_expires_at = expiresAt.toISOString()

      // Get admin email
      const supabase = await createClient()
      const { data: { user: adminUser } } = await supabase.auth.getUser()
      updates.gifted_by = adminUser?.email || 'admin'
    }
  }

  if (Object.keys(updates).length === 0) {
    return NextResponse.json({ error: 'Nada que actualizar' }, { status: 400 })
  }

  const { error } = await admin
    .from('profiles')
    .update(updates)
    .eq('id', userId)

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
  const userId = searchParams.get('userId')

  if (!userId) {
    return NextResponse.json({ error: 'userId requerido' }, { status: 400 })
  }

  // Don't allow deleting yourself
  if (userId === adminUser.id) {
    return NextResponse.json({ error: 'No puedes eliminarte a ti mismo' }, { status: 400 })
  }

  const admin = createAdminClient()

  // Delete testimonials for user's projects
  const { data: projects } = await admin
    .from('projects')
    .select('id')
    .eq('user_id', userId)

  if (projects && projects.length > 0) {
    const projectIds = projects.map((p: { id: string }) => p.id)
    await admin.from('testimonials').delete().in('project_id', projectIds)
    await admin.from('widget_configs').delete().in('project_id', projectIds)
    await admin.from('widget_impressions').delete().in('project_id', projectIds)
    await admin.from('projects').delete().eq('user_id', userId)
  }

  // Delete profile
  await admin.from('profiles').delete().eq('id', userId)

  // Delete auth user
  await admin.auth.admin.deleteUser(userId)

  return NextResponse.json({ success: true })
}
