const YEAR = new Date().getFullYear()

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export function emailTemplate(options: {
  title: string
  body: string
  buttonText?: string
  buttonUrl?: string
}): string {
  const { title, body, buttonText, buttonUrl } = options

  const buttonHtml = buttonText && buttonUrl
    ? `
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-top:28px;">
        <tr>
          <td align="center">
            <a href="${buttonUrl}" target="_blank" style="display:inline-block;background-color:#4f46e5;color:#ffffff;text-decoration:none;padding:14px 36px;border-radius:8px;font-size:15px;font-weight:600;line-height:1;">
              ${escapeHtml(buttonText)}
            </a>
          </td>
        </tr>
      </table>`
    : ''

  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(title)}</title>
</head>
<body style="margin:0;padding:0;background-color:#f3f4f6;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:#f3f4f6;">
    <tr>
      <td align="center" style="padding:40px 16px;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:520px;background-color:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.08);">
          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#4f46e5 0%,#6366f1 100%);padding:28px 40px;text-align:center;">
              <h1 style="margin:0;color:#ffffff;font-size:24px;font-weight:700;letter-spacing:-0.3px;">Opinafy</h1>
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="padding:36px 40px 40px;">
              <h2 style="margin:0 0 20px;color:#111827;font-size:20px;font-weight:600;line-height:1.3;">
                ${escapeHtml(title)}
              </h2>
              <div style="color:#4b5563;font-size:15px;line-height:1.7;">
                ${body}
              </div>
              ${buttonHtml}
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="padding:20px 40px;background-color:#f9fafb;border-top:1px solid #e5e7eb;text-align:center;">
              <p style="margin:0;color:#9ca3af;font-size:12px;line-height:1.5;">
                &copy; ${YEAR} Opinafy. Todos los derechos reservados.
              </p>
              <p style="margin:6px 0 0;color:#9ca3af;font-size:11px;">
                <a href="https://opinafy.com" style="color:#9ca3af;text-decoration:underline;">opinafy.com</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}

export function ticketCreatedEmail(subject: string, ticketId: string): string {
  return emailTemplate({
    title: 'Nuevo ticket de soporte',
    body: `
      <p style="margin:0 0 12px;color:#4b5563;font-size:15px;line-height:1.7;">
        Se ha creado un nuevo ticket de soporte:
      </p>
      <div style="background-color:#f9fafb;border-left:4px solid #4f46e5;padding:16px;margin:16px 0;border-radius:0 8px 8px 0;">
        <p style="margin:0;color:#374151;font-size:14px;font-weight:600;">${escapeHtml(subject)}</p>
      </div>
    `,
    buttonText: 'Ver ticket',
    buttonUrl: `https://opinafy.com/admin/soporte/${ticketId}`,
  })
}

export function ticketReplyEmail(subject: string, message: string, ticketId: string): string {
  return emailTemplate({
    title: 'Nueva respuesta en tu ticket',
    body: `
      <p style="margin:0 0 12px;color:#4b5563;font-size:15px;line-height:1.7;">
        Hay una nueva respuesta en tu ticket <strong>${escapeHtml(subject)}</strong>:
      </p>
      <div style="background-color:#f9fafb;border-left:4px solid #4f46e5;padding:16px;margin:16px 0;border-radius:0 8px 8px 0;">
        <p style="margin:0;color:#374151;font-size:14px;line-height:1.6;white-space:pre-wrap;">${escapeHtml(message)}</p>
      </div>
    `,
    buttonText: 'Ver ticket',
    buttonUrl: `https://opinafy.com/soporte/${ticketId}`,
  })
}

export function ticketUserReplyEmail(subject: string, message: string, userEmail: string, ticketId: string): string {
  return emailTemplate({
    title: 'Nueva respuesta en ticket de soporte',
    body: `
      <p style="margin:0 0 12px;color:#4b5563;font-size:15px;line-height:1.7;">
        <strong>${escapeHtml(userEmail)}</strong> ha respondido al ticket <strong>${escapeHtml(subject)}</strong>:
      </p>
      <div style="background-color:#f9fafb;border-left:4px solid #4f46e5;padding:16px;margin:16px 0;border-radius:0 8px 8px 0;">
        <p style="margin:0;color:#374151;font-size:14px;line-height:1.6;white-space:pre-wrap;">${escapeHtml(message)}</p>
      </div>
    `,
    buttonText: 'Ver ticket',
    buttonUrl: `https://opinafy.com/admin/soporte/${ticketId}`,
  })
}

export function welcomeEmail(name: string): string {
  return emailTemplate({
    title: 'Bienvenido a Opinafy',
    body: `
      <p style="margin:0 0 12px;color:#4b5563;font-size:15px;line-height:1.7;">
        Hola ${escapeHtml(name)},
      </p>
      <p style="margin:0 0 12px;color:#4b5563;font-size:15px;line-height:1.7;">
        Gracias por registrarte en Opinafy. Ya puedes empezar a recopilar testimonios verificados de tus clientes y mostrarlos en tu sitio web.
      </p>
      <p style="margin:0 0 0;color:#4b5563;font-size:15px;line-height:1.7;">
        Crea tu primer proyecto para empezar a recibir testimonios.
      </p>
    `,
    buttonText: 'Ir al panel',
    buttonUrl: 'https://opinafy.com/proyectos',
  })
}

export function testimonialVerificationEmail(projectName: string, verificationUrl: string, authorName?: string): string {
  return emailTemplate({
    title: 'Verifica tu testimonio',
    body: `
      <p style="margin:0 0 12px;color:#4b5563;font-size:15px;line-height:1.7;">
        Hola${authorName ? ` ${escapeHtml(authorName)}` : ''},
      </p>
      <p style="margin:0 0 12px;color:#4b5563;font-size:15px;line-height:1.7;">
        Gracias por dejar tu testimonio para <strong>${escapeHtml(projectName)}</strong>. Para completar el proceso, por favor verifica tu email haciendo clic en el siguiente boton:
      </p>
      <p style="margin:24px 0 0;color:#9ca3af;font-size:13px;line-height:1.5;">
        Si no has dejado ningun testimonio, puedes ignorar este email.
      </p>
    `,
    buttonText: 'Verificar testimonio',
    buttonUrl: verificationUrl,
  })
}

export function testimonialApprovedEmail(projectName: string, authorName: string): string {
  return emailTemplate({
    title: 'Tu testimonio ha sido aprobado',
    body: `
      <p style="margin:0 0 12px;color:#4b5563;font-size:15px;line-height:1.7;">
        Hola ${escapeHtml(authorName)},
      </p>
      <p style="margin:0 0 12px;color:#4b5563;font-size:15px;line-height:1.7;">
        Tu testimonio para <strong>${escapeHtml(projectName)}</strong> ha sido aprobado y ya es visible publicamente. Gracias por compartir tu experiencia.
      </p>
    `,
  })
}

/**
 * Generates a plain-text version from the email body for multipart emails.
 */
export function stripHtmlToText(html: string): string {
  return html
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/p>/gi, '\n\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&copy;/g, '(c)')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}
