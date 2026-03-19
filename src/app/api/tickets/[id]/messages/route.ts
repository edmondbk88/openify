import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const supabase = await createClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
    }

    const { data: messages, error } = await supabase
      .from('ticket_messages')
      .select('*')
      .eq('ticket_id', id)
      .order('created_at', { ascending: true })

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ messages })
  } catch {
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 })
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const supabase = await createClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
    }

    const body = await request.json()
    const { message } = body

    if (!message || message.trim().length === 0) {
      return NextResponse.json({ error: 'El mensaje es requerido' }, { status: 400 })
    }

    // Verify ticket ownership via RLS - try to read it first
    const { data: ticket, error: ticketError } = await supabase
      .from('support_tickets')
      .select('id, subject, status')
      .eq('id', id)
      .single()

    if (ticketError || !ticket) {
      return NextResponse.json({ error: 'Ticket no encontrado' }, { status: 404 })
    }

    if (ticket.status === 'closed' || ticket.status === 'resolved') {
      return NextResponse.json({ error: 'Este ticket está cerrado' }, { status: 403 })
    }

    const { data: msg, error: msgError } = await supabase
      .from('ticket_messages')
      .insert({
        ticket_id: id,
        user_id: user.id,
        message: message.trim(),
        is_admin: false,
      })
      .select()
      .single()

    if (msgError) {
      return NextResponse.json({ error: msgError.message }, { status: 500 })
    }

    // Update ticket updated_at and set status to open if it was waiting
    await supabase
      .from('support_tickets')
      .update({
        status: ticket.status === 'waiting' ? 'open' : ticket.status,
      })
      .eq('id', id)

    // Notify admin
    try {
      await resend.emails.send({
        from: 'Opinafy <hola@opinafy.com>',
        to: 'hola@opinafy.com',
        subject: `Nueva respuesta en ticket: ${ticket.subject}`,
        html: `
          <h2>Nueva respuesta en ticket de soporte</h2>
          <p><strong>Asunto:</strong> ${ticket.subject}</p>
          <p><strong>Usuario:</strong> ${user.email}</p>
          <p><strong>Mensaje:</strong></p>
          <p>${message}</p>
        `,
      })
    } catch (emailError) {
      console.error('Error sending admin notification:', emailError)
    }

    return NextResponse.json({ message: msg }, { status: 201 })
  } catch {
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 })
  }
}
