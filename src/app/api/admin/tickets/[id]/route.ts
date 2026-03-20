import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { Resend } from 'resend'
import { ticketReplyEmail } from '@/lib/email-templates'

const resend = new Resend(process.env.RESEND_API_KEY)

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

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const adminUser = await verifyAdmin()
  if (!adminUser) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 403 })
  }

  const { id } = await params
  const admin = createAdminClient()

  const { data: ticket, error: ticketError } = await admin
    .from('support_tickets')
    .select('*, profiles!support_tickets_user_id_fkey(id, full_name, email, plan, avatar_url)')
    .eq('id', id)
    .single()

  if (ticketError || !ticket) {
    return NextResponse.json({ error: 'Ticket no encontrado' }, { status: 404 })
  }

  const { data: messages, error: msgError } = await admin
    .from('ticket_messages')
    .select('*')
    .eq('ticket_id', id)
    .order('created_at', { ascending: true })

  if (msgError) {
    return NextResponse.json({ error: msgError.message }, { status: 500 })
  }

  return NextResponse.json({ ticket, messages })
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const adminUser = await verifyAdmin()
  if (!adminUser) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 403 })
  }

  const { id } = await params
  const body = await request.json()
  const { message } = body

  if (!message || message.trim().length === 0) {
    return NextResponse.json({ error: 'El mensaje es requerido' }, { status: 400 })
  }

  const admin = createAdminClient()

  // Get ticket with user info
  const { data: ticket, error: ticketError } = await admin
    .from('support_tickets')
    .select('*, profiles!support_tickets_user_id_fkey(email, full_name)')
    .eq('id', id)
    .single()

  if (ticketError || !ticket) {
    return NextResponse.json({ error: 'Ticket no encontrado' }, { status: 404 })
  }

  // Insert admin reply
  const { data: msg, error: msgError } = await admin
    .from('ticket_messages')
    .insert({
      ticket_id: id,
      user_id: adminUser.id,
      message: message.trim(),
      is_admin: true,
    })
    .select()
    .single()

  if (msgError) {
    return NextResponse.json({ error: msgError.message }, { status: 500 })
  }

  // Update ticket status to in_progress if it was open
  if (ticket.status === 'open') {
    await admin
      .from('support_tickets')
      .update({ status: 'in_progress' })
      .eq('id', id)
  }

  // Send email notification to user
  const profile = ticket.profiles as { email: string; full_name: string } | null
  if (profile?.email) {
    try {
      await resend.emails.send({
        from: 'Opinafy <hola@opinafy.com>',
        to: profile.email,
        replyTo: 'hola@opinafy.com',
        subject: `Respuesta a tu ticket: ${ticket.subject}`,
        html: ticketReplyEmail(ticket.subject, message, id),
        headers: {
          'List-Unsubscribe': '<mailto:hola@opinafy.com?subject=unsubscribe>',
        },
      })
    } catch (emailError) {
      console.error('Error sending user notification:', emailError)
    }
  }

  return NextResponse.json({ message: msg }, { status: 201 })
}
