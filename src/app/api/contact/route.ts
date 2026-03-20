import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { emailTemplate } from '@/lib/email-templates'

function getResend() {
  return new Resend(process.env.RESEND_API_KEY)
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Todos los campos son obligatorios.' },
        { status: 400 }
      )
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'El email proporcionado no es válido.' },
        { status: 400 }
      )
    }

    // Send email notification to admin
    try {
      await getResend().emails.send({
        from: 'Opinafy <hola@opinafy.com>',
        to: 'hola@opinafy.com',
        replyTo: email,
        subject: `Contacto desde opinafy.com: ${name}`,
        html: emailTemplate({
          title: 'Nuevo mensaje de contacto',
          body: `
            <p style="margin:0 0 12px;color:#4b5563;font-size:15px;line-height:1.7;">
              <strong>Nombre:</strong> ${escapeHtml(name)}
            </p>
            <p style="margin:0 0 12px;color:#4b5563;font-size:15px;line-height:1.7;">
              <strong>Email:</strong> ${escapeHtml(email)}
            </p>
            <div style="background-color:#f9fafb;border-left:4px solid #4f46e5;padding:16px;margin:16px 0;border-radius:0 8px 8px 0;">
              <p style="margin:0;color:#374151;font-size:14px;line-height:1.6;white-space:pre-wrap;">${escapeHtml(message)}</p>
            </div>
          `,
        }),
        headers: {
          'List-Unsubscribe': '<mailto:hola@opinafy.com?subject=unsubscribe>',
        },
      })
    } catch (emailError) {
      console.error('Error sending contact email:', emailError)
    }

    return NextResponse.json(
      { success: true, message: 'Mensaje enviado correctamente.' },
      { status: 200 }
    )
  } catch {
    return NextResponse.json(
      { error: 'Error al procesar la solicitud.' },
      { status: 500 }
    )
  }
}
