import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { Resend } from 'resend'

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
        from: 'Opinafy Soporte <hola@opinafy.com>',
        to: profile.email,
        subject: `Respuesta a tu ticket: ${ticket.subject}`,
        html: `
<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background-color:#f3f4f6;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:#f3f4f6;">
    <tr>
      <td align="center" style="padding:40px 20px;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:480px;background-color:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.1);">
          <tr>
            <td style="background:linear-gradient(135deg,#4f46e5,#6366f1);padding:32px 40px;text-align:center;">
              <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:700;">Opinafy</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:40px;">
              <h2 style="margin:0 0 16px;color:#111827;font-size:20px;font-weight:600;">Respuesta a tu ticket</h2>
              <p style="margin:0 0 16px;color:#4b5563;font-size:15px;line-height:1.6;">
                Hola ${profile.full_name || 'usuario'},
              </p>
              <p style="margin:0 0 8px;color:#4b5563;font-size:15px;line-height:1.6;">
                Hemos respondido a tu ticket <strong>"${ticket.subject}"</strong>:
              </p>
              <div style="background-color:#f9fafb;border-left:4px solid #4f46e5;padding:16px;margin:16px 0;border-radius:0 8px 8px 0;">
                <p style="margin:0;color:#374151;font-size:14px;line-height:1.6;white-space:pre-wrap;">${message}</p>
              </div>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-top:24px;">
                <tr>
                  <td align="center">
                    <a href="https://opinafy.com/soporte/${id}" style="display:inline-block;background-color:#4f46e5;color:#ffffff;text-decoration:none;padding:14px 32px;border-radius:8px;font-size:15px;font-weight:600;">
                      Ver ticket
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:24px 40px;background-color:#f9fafb;border-top:1px solid #e5e7eb;text-align:center;">
              <p style="margin:0;color:#9ca3af;font-size:12px;">&copy; ${new Date().getFullYear()} Opinafy. Todos los derechos reservados.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
        `.trim(),
      })
    } catch (emailError) {
      console.error('Error sending user notification:', emailError)
    }
  }

  return NextResponse.json({ message: msg }, { status: 201 })
}
