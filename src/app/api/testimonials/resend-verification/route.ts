import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { Resend } from 'resend'
import { getEmailTemplates } from '@/lib/email-templates'
import { randomUUID } from 'crypto'

function getResend() { return new Resend(process.env.RESEND_API_KEY) }

// Rate limit: 1 resend per testimonial per hour (in-memory, resets on deploy)
const resendTimestamps = new Map<string, number>()
const RATE_LIMIT_MS = 60 * 60 * 1000 // 1 hour

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { testimonialId } = body

    if (!testimonialId || typeof testimonialId !== 'string') {
      return NextResponse.json(
        { error: 'testimonialId es requerido' },
        { status: 400 }
      )
    }

    // Rate limit check
    const lastSent = resendTimestamps.get(testimonialId)
    if (lastSent && Date.now() - lastSent < RATE_LIMIT_MS) {
      const minutesLeft = Math.ceil((RATE_LIMIT_MS - (Date.now() - lastSent)) / 60000)
      return NextResponse.json(
        { error: `Solo puedes reenviar una vez por hora. Inténtalo en ${minutesLeft} minutos.` },
        { status: 429 }
      )
    }

    const supabase = createAdminClient()

    // Find the testimonial
    const { data: testimonial } = await supabase
      .from('testimonials')
      .select('id, status, author_email, author_name, project_id, created_at')
      .eq('id', testimonialId)
      .single()

    if (!testimonial) {
      return NextResponse.json(
        { error: 'Testimonio no encontrado' },
        { status: 404 }
      )
    }

    if (testimonial.status !== 'pending_verification') {
      return NextResponse.json(
        { error: 'Este testimonio ya ha sido verificado o no requiere verificación.' },
        { status: 400 }
      )
    }

    if (!testimonial.author_email) {
      return NextResponse.json(
        { error: 'Este testimonio no tiene email asociado.' },
        { status: 400 }
      )
    }

    // Get project info for the email
    const { data: project } = await supabase
      .from('projects')
      .select('name, user_id')
      .eq('id', testimonial.project_id)
      .single()

    if (!project) {
      return NextResponse.json(
        { error: 'Proyecto no encontrado' },
        { status: 404 }
      )
    }

    // Get owner locale
    const { data: profile } = await supabase
      .from('profiles')
      .select('locale')
      .eq('id', project.user_id)
      .single()

    const ownerLocale = (profile?.locale === 'en' ? 'en' : 'es') as 'es' | 'en'

    // Generate a new verification token
    const newToken = randomUUID()

    const { error: updateError } = await supabase
      .from('testimonials')
      .update({ verification_token: newToken })
      .eq('id', testimonialId)

    if (updateError) {
      console.error('Error updating verification token:', updateError)
      return NextResponse.json(
        { error: 'Error al generar nuevo token de verificación' },
        { status: 500 }
      )
    }

    // Send the verification email
    const verificationUrl = `https://opinafy.com/api/testimonials/verify?token=${newToken}&id=${testimonialId}`
    const templates = getEmailTemplates(ownerLocale)
    const verifySubject = ownerLocale === 'en'
      ? `Verify your testimonial for ${project.name}`
      : `Verifica tu testimonio para ${project.name}`

    await getResend().emails.send({
      from: 'Opinafy <hola@opinafy.com>',
      to: testimonial.author_email,
      replyTo: 'hola@opinafy.com',
      subject: verifySubject,
      html: templates.testimonialVerification(
        project.name as string,
        verificationUrl,
        testimonial.author_name
      ),
      headers: {
        'List-Unsubscribe': '<mailto:hola@opinafy.com?subject=unsubscribe>',
      },
    })

    // Update rate limit timestamp
    resendTimestamps.set(testimonialId, Date.now())

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Resend verification error:', err)
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}
