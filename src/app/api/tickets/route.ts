import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function GET() {
  try {
    const supabase = await createClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
    }

    const { data: tickets, error } = await supabase
      .from('support_tickets')
      .select('*')
      .eq('user_id', user.id)
      .order('updated_at', { ascending: false })

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    // Get last message for each ticket
    const ticketIds = tickets?.map((t: { id: string }) => t.id) || []
    const lastMessages: Record<string, string> = {}

    if (ticketIds.length > 0) {
      const admin = createAdminClient()
      const { data: messages } = await admin
        .from('ticket_messages')
        .select('ticket_id, message, created_at')
        .in('ticket_id', ticketIds)
        .order('created_at', { ascending: false })

      if (messages) {
        const seen = new Set<string>()
        for (const msg of messages) {
          if (!seen.has(msg.ticket_id)) {
            lastMessages[msg.ticket_id] = msg.message
            seen.add(msg.ticket_id)
          }
        }
      }
    }

    const ticketsWithPreview = (tickets || []).map((t: { id: string }) => ({
      ...t,
      last_message: lastMessages[t.id] || null,
    }))

    return NextResponse.json({ tickets: ticketsWithPreview })
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
    const { subject, category, priority, message } = body

    if (!subject || !category || !message) {
      return NextResponse.json({ error: 'Faltan campos requeridos' }, { status: 400 })
    }

    if (message.length < 20) {
      return NextResponse.json({ error: 'El mensaje debe tener al menos 20 caracteres' }, { status: 400 })
    }

    const validCategories = ['billing', 'technical', 'feature', 'account', 'widget', 'other']
    const validPriorities = ['low', 'medium', 'high', 'urgent']

    if (!validCategories.includes(category)) {
      return NextResponse.json({ error: 'Categoría inválida' }, { status: 400 })
    }

    if (priority && !validPriorities.includes(priority)) {
      return NextResponse.json({ error: 'Prioridad inválida' }, { status: 400 })
    }

    // Create ticket
    const { data: ticket, error: ticketError } = await supabase
      .from('support_tickets')
      .insert({
        user_id: user.id,
        subject,
        category,
        priority: priority || 'medium',
      })
      .select()
      .single()

    if (ticketError) {
      return NextResponse.json({ error: ticketError.message }, { status: 500 })
    }

    // Create first message
    const { error: msgError } = await supabase
      .from('ticket_messages')
      .insert({
        ticket_id: ticket.id,
        user_id: user.id,
        message,
        is_admin: false,
      })

    if (msgError) {
      return NextResponse.json({ error: msgError.message }, { status: 500 })
    }

    // Send email notification to admin
    try {
      await resend.emails.send({
        from: 'Opinafy <hola@opinafy.com>',
        to: 'hola@opinafy.com',
        subject: `Nuevo ticket de soporte: ${subject}`,
        html: `
          <h2>Nuevo ticket de soporte</h2>
          <p><strong>Asunto:</strong> ${subject}</p>
          <p><strong>Categoría:</strong> ${category}</p>
          <p><strong>Prioridad:</strong> ${priority || 'medium'}</p>
          <p><strong>Usuario:</strong> ${user.email}</p>
          <p><strong>Mensaje:</strong></p>
          <p>${message}</p>
        `,
      })
    } catch (emailError) {
      console.error('Error sending admin notification:', emailError)
    }

    return NextResponse.json({ ticket }, { status: 201 })
  } catch {
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 })
  }
}
