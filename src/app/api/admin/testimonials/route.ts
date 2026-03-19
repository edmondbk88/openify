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
  const status = searchParams.get('status') || ''

  const admin = createAdminClient()
  let query = admin
    .from('testimonials')
    .select('*, projects(name, slug)')
    .order('created_at', { ascending: false })

  if (status && ['pending', 'pending_verification', 'approved', 'rejected'].includes(status)) {
    query = query.eq('status', status)
  }

  const { data, error } = await query

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ testimonials: data })
}

export async function PATCH(request: NextRequest) {
  const adminUser = await verifyAdmin()
  if (!adminUser) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 403 })
  }

  const body = await request.json()
  const { testimonialId, status } = body

  if (!testimonialId) {
    return NextResponse.json({ error: 'testimonialId requerido' }, { status: 400 })
  }

  if (!status || !['pending', 'pending_verification', 'approved', 'rejected'].includes(status)) {
    return NextResponse.json({ error: 'Estado invalido' }, { status: 400 })
  }

  const admin = createAdminClient()
  const { error } = await admin
    .from('testimonials')
    .update({ status })
    .eq('id', testimonialId)

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
  const testimonialId = searchParams.get('testimonialId')

  if (!testimonialId) {
    return NextResponse.json({ error: 'testimonialId requerido' }, { status: 400 })
  }

  const admin = createAdminClient()
  const { error } = await admin
    .from('testimonials')
    .delete()
    .eq('id', testimonialId)

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
