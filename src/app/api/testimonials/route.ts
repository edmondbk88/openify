import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { testimonialSchema } from '@/lib/validations'
import { PLAN_LIMITS } from '@/lib/constants'
import { Plan } from '@/types'
import { Resend } from 'resend'
import { isCompanyEmailMatch } from '@/lib/utils'

const resend = new Resend(process.env.RESEND_API_KEY)

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
      .select('id, user_id, is_active, name')
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
      .select('plan')
      .eq('id', project.user_id)
      .single()

    const plan = (profile?.plan as Plan) || 'free'
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

    const hasEmail = parsed.data.author_email && parsed.data.author_email.trim() !== ''
    const initialStatus = hasEmail ? 'pending_verification' : 'pending'

    // Auto-verify company if email domain matches company name
    const isCompanyVerified = hasEmail && parsed.data.author_company
      ? isCompanyEmailMatch(parsed.data.author_email!, parsed.data.author_company)
      : false

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

    // Send verification email if author provided an email
    if (hasEmail && testimonial.verification_token) {
      const verificationUrl = `https://opinafy.com/api/testimonials/verify?token=${testimonial.verification_token}&id=${testimonial.id}`

      try {
        await resend.emails.send({
          from: 'Opinafy <hola@opinafy.com>',
          to: parsed.data.author_email!,
          subject: `Verifica tu testimonio para ${project.name}`,
          html: buildVerificationEmail({
            authorName: parsed.data.author_name,
            projectName: project.name as string,
            verificationUrl,
          }),
        })
      } catch (emailError) {
        // Log the error but don't fail the request — the testimonial is saved
        console.error('Error sending verification email:', emailError)
      }
    }

    return NextResponse.json(
      { success: true, id: testimonial.id, verification_pending: hasEmail },
      { status: 201 }
    )
  } catch {
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 })
  }
}

function buildVerificationEmail({
  authorName,
  projectName,
  verificationUrl,
}: {
  authorName: string
  projectName: string
  verificationUrl: string
}): string {
  return `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #f3f4f6; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f3f4f6;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width: 480px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #4f46e5, #6366f1); padding: 32px 40px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 22px; font-weight: 700;">Opinafy</h1>
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="padding: 40px;">
              <h2 style="margin: 0 0 16px; color: #111827; font-size: 20px; font-weight: 600;">
                Verifica tu testimonio
              </h2>
              <p style="margin: 0 0 16px; color: #4b5563; font-size: 15px; line-height: 1.6;">
                Hola ${authorName},
              </p>
              <p style="margin: 0 0 24px; color: #4b5563; font-size: 15px; line-height: 1.6;">
                Gracias por dejar tu testimonio para <strong>${projectName}</strong>. Para completar el proceso, por favor verifica tu email haciendo clic en el siguiente botón:
              </p>
              <!-- Button -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td align="center">
                    <a href="${verificationUrl}" style="display: inline-block; background-color: #4f46e5; color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-size: 15px; font-weight: 600;">
                      Verificar testimonio
                    </a>
                  </td>
                </tr>
              </table>
              <p style="margin: 24px 0 0; color: #9ca3af; font-size: 13px; line-height: 1.5;">
                Si no has dejado ningún testimonio, puedes ignorar este email.
              </p>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="padding: 24px 40px; background-color: #f9fafb; border-top: 1px solid #e5e7eb; text-align: center;">
              <p style="margin: 0; color: #9ca3af; font-size: 12px;">
                &copy; ${new Date().getFullYear()} Opinafy. Todos los derechos reservados.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim()
}
