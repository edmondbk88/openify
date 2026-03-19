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
  const category = searchParams.get('category') || ''
  const priority = searchParams.get('priority') || ''
  const search = searchParams.get('search') || ''

  const admin = createAdminClient()

  let query = admin
    .from('support_tickets')
    .select('*, profiles!support_tickets_user_id_fkey(full_name, email, plan)')
    .order('updated_at', { ascending: false })

  if (status) query = query.eq('status', status)
  if (category) query = query.eq('category', category)
  if (priority) query = query.eq('priority', priority)

  const { data: tickets, error } = await query

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  // Filter by search if provided
  let filtered = tickets || []
  if (search) {
    const lower = search.toLowerCase()
    filtered = filtered.filter((t: Record<string, unknown>) => {
      const profile = t.profiles as { full_name?: string; email?: string } | null
      return (
        (t.subject as string).toLowerCase().includes(lower) ||
        profile?.email?.toLowerCase().includes(lower) ||
        profile?.full_name?.toLowerCase().includes(lower)
      )
    })
  }

  // Get stats
  const { data: allTickets } = await admin
    .from('support_tickets')
    .select('status')

  const stats = { open: 0, in_progress: 0, waiting: 0, resolved: 0, total: 0 }
  allTickets?.forEach((t: { status: string }) => {
    stats.total++
    if (t.status === 'open') stats.open++
    if (t.status === 'in_progress') stats.in_progress++
    if (t.status === 'waiting') stats.waiting++
    if (t.status === 'resolved') stats.resolved++
  })

  return NextResponse.json({ tickets: filtered, stats })
}

export async function PATCH(request: NextRequest) {
  const adminUser = await verifyAdmin()
  if (!adminUser) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 403 })
  }

  const body = await request.json()
  const { ticketId, status, priority } = body

  if (!ticketId) {
    return NextResponse.json({ error: 'ticketId requerido' }, { status: 400 })
  }

  const validStatuses = ['open', 'in_progress', 'waiting', 'resolved', 'closed']
  const validPriorities = ['low', 'medium', 'high', 'urgent']

  const updates: Record<string, string> = {}
  if (status && validStatuses.includes(status)) updates.status = status
  if (priority && validPriorities.includes(priority)) updates.priority = priority

  if (Object.keys(updates).length === 0) {
    return NextResponse.json({ error: 'Nada que actualizar' }, { status: 400 })
  }

  const admin = createAdminClient()
  const { error } = await admin
    .from('support_tickets')
    .update(updates)
    .eq('id', ticketId)

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
