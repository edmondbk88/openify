import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { testimonialSchema } from '@/lib/validations'
import { PLAN_LIMITS, getEffectivePlan } from '@/lib/constants'
import { Resend } from 'resend'
import { getVerificationLevel } from '@/lib/utils'
import { getEmailTemplates } from '@/lib/email-templates'
import { analyzeSentiment } from '@/lib/sentiment'
import { triggerWebhook } from '@/lib/webhook'

function getResend() { return new Resend(process.env.RESEND_API_KEY) }

export async function GET(request: NextRequest) {
  try {
    const supabase = await createClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
    }

    const projectId = request.nextUrl.searchParams.get('projectId')

    if (!projectId) {
      return NextResponse.json({ error: 'projectId es requerido' }, { status: 400 })
    }

    // Verify project ownership
    const { data: project } = await supabase
      .from('projects')
      .select('id')
      .eq('id', projectId)
      .eq('user_id', user.id)
      .single()

    if (!project) {
      return NextResponse.json({ error: 'Proyecto no encontrado' }, { status: 404 })
    }

    const { data: testimonials, error } = await supabase
      .from('testimonials')
      .select('*')
      .eq('project_id', projectId)
      .order('created_at', { ascending: false })

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json(testimonials)
  } catch {
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    // PUBLIC endpoint - no auth required
    // Use admin client to bypass RLS for validation queries (project existence,
    // plan limits) and for the insert itself, since anonymous users cannot
    // pass RLS policies that require auth.uid().
    const body = await request.json()
    const parsed = testimonialSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Datos inválidos', details: parsed.error.flatten().fieldErrors },
        { status: 400 }
      )
    }

    const supabase = createAdminClient()

    // Verify project exists and is active
    const { data: project } = await supabase
      .from('projects')
      .select('id, user_id, is_active, name, slug, webhook_url, webhook_events')
      .eq('id', parsed.data.project_id)
      .single()

    if (!project) {
      return NextResponse.json({ error: 'Proyecto no encontrado' }, { status: 404 })
    }

    if (!project.is_active) {
      return NextResponse.json({ error: 'Este proyecto no está aceptando testimonios' }, { status: 403 })
    }

    // Check duplicate: 1 testimonial per email per project
    if (parsed.data.author_email && parsed.data.author_email.trim() !== '') {
      const { data: existing } = await supabase
        .from('testimonials')
        .select('id')
        .eq('project_id', parsed.data.project_id)
        .eq('author_email', parsed.data.author_email)
        .limit(1)
        .maybeSingle()

      if (existing) {
        return NextResponse.json(
          { error: 'Ya has enviado un testimonio para este proyecto. Solo se permite uno por correo electrónico.' },
          { status: 409 }
        )
      }
    }

    // Check testimonial limit per plan
    const { data: profile } = await supabase
      .from('profiles')
      .select('plan, locale, gifted_plan, gifted_plan_expires_at')
      .eq('id', project.user_id)
      .single()

    const plan = getEffectivePlan(profile || { plan: 'free' })
    const ownerLocale = (profile?.locale === 'en' ? 'en' : 'es') as 'es' | 'en'
    const limits = PLAN_LIMITS[plan]

    const { count } = await supabase
      .from('testimonials')
      .select('*', { count: 'exact', head: true })
      .eq('project_id', parsed.data.project_id)

    if ((count ?? 0) >= limits.testimonials) {
      return NextResponse.json(
        { error: 'Este proyecto ha alcanzado el límite de testimonios permitidos.' },
        { status: 403 }
      )
    }

    // Reject video_url if the owner's plan doesn't support video testimonials
    if (parsed.data.video_url && !limits.video) {
      return NextResponse.json(
        { error: 'Los testimonios en vídeo no están disponibles en el plan actual del proyecto.' },
        { status: 403 }
      )
    }

    const hasEmail = parsed.data.author_email && parsed.data.author_email.trim() !== ''
    const initialStatus = hasEmail ? 'pending_verification' : 'pending'

    // Auto-verify company if email domain matches company name + person name
    const verificationLevel = hasEmail && parsed.data.author_company
      ? getVerificationLevel(parsed.data.author_email!, parsed.data.author_company, parsed.data.author_name)
      : 'none'
    const isCompanyVerified = verificationLevel !== 'none'

    const { data: testimonial, error } = await supabase
      .from('testimonials')
      .insert({
        ...parsed.data,
        status: initialStatus,
        source: 'form',
        is_company_verified: isCompanyVerified,
      })
      .select()
      .single()

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    // Run sentiment analysis and update the record
    try {
      const sentiment = analyzeSentiment(parsed.data.content)
      await supabase.from('testimonials').update({
        sentiment_score: sentiment.score,
        sentiment_label: sentiment.label,
        key_phrases: sentiment.keyPhrases,
        ai_summary: sentiment.summary,
      }).eq('id', testimonial.id)
    } catch (sentimentError) {
      // Log but don't fail the request
      console.error('Error running sentiment analysis:', sentimentError)
    }

    // Create in-app notification for project owner
    try {
      await supabase.from('notifications').insert({
        user_id: project.user_id,
        type: 'new_testimonial',
        title: 'Nuevo testimonio recibido',
        message: `Nuevo testimonio recibido en ${project.name} de ${parsed.data.author_name}.`,
        link: `/proyectos/${project.slug}`,
      })
    } catch (notifError) {
      console.error('Error creating notification:', notifError)
    }

    // Send verification email if author provided an email
    if (hasEmail && testimonial.verification_token) {
      const verificationUrl = `https://opinafy.com/api/testimonials/verify?token=${testimonial.verification_token}&id=${testimonial.id}`

      try {
        const templates = getEmailTemplates(ownerLocale)
        const verifySubject = ownerLocale === 'en'
          ? `Verify your testimonial for ${project.name}`
          : `Verifica tu testimonio para ${project.name}`
        await getResend().emails.send({
          from: 'Opinafy <hola@opinafy.com>',
          to: parsed.data.author_email!,
          replyTo: 'hola@opinafy.com',
          subject: verifySubject,
          html: templates.testimonialVerification(project.name as string, verificationUrl, parsed.data.author_name),
          headers: {
            'List-Unsubscribe': '<mailto:hola@opinafy.com?subject=unsubscribe>',
          },
        })
      } catch (emailError) {
        // Log the error but don't fail the request — the testimonial is saved
        console.error('Error sending verification email:', emailError)
      }
    }

    // Trigger webhook for new testimonial
    try {
      await triggerWebhook(
        { webhook_url: project.webhook_url, webhook_events: project.webhook_events || [] },
        'new_testimonial',
        { id: testimonial.id, author_name: parsed.data.author_name, rating: parsed.data.rating, content: parsed.data.content, project_name: project.name }
      )
    } catch {
      // silent fail
    }

    return NextResponse.json(
      { success: true, id: testimonial.id, verification_pending: hasEmail },
      { status: 201 }
    )
  } catch {
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 })
  }
}

