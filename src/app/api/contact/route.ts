import { NextResponse } from 'next/server'

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

    // TODO: Integrate with an email service (e.g. Resend, SendGrid, Nodemailer)
    // For now, log the contact form submission
    console.log('Contact form submission:', { name, email, message })

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
