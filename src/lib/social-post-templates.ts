interface TestimonialData {
  content: string
  author_name: string
  author_company: string | null
  author_role: string | null
  rating: number
}

function starEmojis(rating: number): string {
  return '\u2B50'.repeat(Math.min(rating, 5))
}

function truncate(text: string, maxLen: number): string {
  if (text.length <= maxLen) return text
  return text.slice(0, maxLen - 3) + '...'
}

export function generateInstagramPost(t: TestimonialData, projectUrl?: string): string {
  const author = t.author_company ? `${t.author_name}, ${t.author_company}` : t.author_name
  return `\u2728 Lo que dicen nuestros clientes:\n\n"${t.content}"\n\n\u2014 ${author}\n\n${starEmojis(t.rating)} ${t.rating}/5\n\n${projectUrl ? `\uD83D\uDD17 ${projectUrl}\n\n` : ''}#testimonios #pruebasocial #clientesfelices #opiniones #reseñas #confianza`
}

export function generateTwitterPost(t: TestimonialData, projectUrl?: string): string {
  const author = t.author_company ? `${t.author_name} de ${t.author_company}` : t.author_name
  const quote = truncate(t.content, 180)
  return `"${quote}" \u2014 ${author} ${starEmojis(t.rating)}${projectUrl ? `\n\n${projectUrl}` : ''}\n\n#testimonios #pruebasocial`
}

export function generateLinkedInPost(t: TestimonialData, projectUrl?: string): string {
  const author = t.author_company
    ? `${t.author_name}${t.author_role ? `, ${t.author_role}` : ''} en ${t.author_company}`
    : t.author_name
  return `\uD83D\uDCAC La opinion de nuestros clientes es lo que más nos importa.\n\nQuiero compartir lo que dice ${author}:\n\n"${t.content}"\n\nValoración: ${starEmojis(t.rating)} (${t.rating}/5)\n\nEstos testimonios nos motivan a seguir mejorando cada dia. Gracias por confiar en nosotros.${projectUrl ? `\n\n\uD83D\uDC49 ${projectUrl}` : ''}\n\n#testimonios #pruebasocial #clientes #confianza`
}

export function generateFacebookPost(t: TestimonialData, projectUrl?: string): string {
  const author = t.author_company ? `${t.author_name} de ${t.author_company}` : t.author_name
  return `\u2764\uFE0F Nos encanta recibir este tipo de mensajes:\n\n"${t.content}"\n\n\u2014 ${author}\n${starEmojis(t.rating)} ${t.rating}/5\n\nGracias por confiar en nosotros \uD83D\uDE4F${projectUrl ? `\n\n${projectUrl}` : ''}`
}

export function generateEmailSnippet(t: TestimonialData): string {
  const author = t.author_company
    ? `${t.author_name}${t.author_role ? `, ${t.author_role}` : ''} en ${t.author_company}`
    : t.author_name
  return `<blockquote style="border-left: 3px solid #6366f1; padding-left: 16px; margin: 16px 0; color: #374151;">\n  <p style="font-style: italic; font-size: 16px;">"${t.content}"</p>\n  <footer style="margin-top: 8px; font-size: 14px; color: #6B7280;">\n    \u2014 ${author} | ${starEmojis(t.rating)} ${t.rating}/5\n  </footer>\n</blockquote>`
}

// English versions
export function generateInstagramPostEn(t: TestimonialData, projectUrl?: string): string {
  const author = t.author_company ? `${t.author_name}, ${t.author_company}` : t.author_name
  return `\u2728 What our customers say:\n\n"${t.content}"\n\n\u2014 ${author}\n\n${starEmojis(t.rating)} ${t.rating}/5\n\n${projectUrl ? `\uD83D\uDD17 ${projectUrl}\n\n` : ''}#testimonials #socialproof #happycustomers #reviews #trust`
}

export function generateTwitterPostEn(t: TestimonialData, projectUrl?: string): string {
  const author = t.author_company ? `${t.author_name} from ${t.author_company}` : t.author_name
  const quote = truncate(t.content, 180)
  return `"${quote}" \u2014 ${author} ${starEmojis(t.rating)}${projectUrl ? `\n\n${projectUrl}` : ''}\n\n#testimonials #socialproof`
}

export function generateLinkedInPostEn(t: TestimonialData, projectUrl?: string): string {
  const author = t.author_company
    ? `${t.author_name}${t.author_role ? `, ${t.author_role}` : ''} at ${t.author_company}`
    : t.author_name
  return `\uD83D\uDCAC Our customers' opinion matters most to us.\n\nHere's what ${author} has to say:\n\n"${t.content}"\n\nRating: ${starEmojis(t.rating)} (${t.rating}/5)\n\nTestimonials like these motivate us to keep improving every day. Thank you for your trust.${projectUrl ? `\n\n\uD83D\uDC49 ${projectUrl}` : ''}\n\n#testimonials #socialproof #customers #trust`
}

export function generateFacebookPostEn(t: TestimonialData, projectUrl?: string): string {
  const author = t.author_company ? `${t.author_name} from ${t.author_company}` : t.author_name
  return `\u2764\uFE0F We love receiving messages like this:\n\n"${t.content}"\n\n\u2014 ${author}\n${starEmojis(t.rating)} ${t.rating}/5\n\nThank you for trusting us \uD83D\uDE4F${projectUrl ? `\n\n${projectUrl}` : ''}`
}

export function generateEmailSnippetEn(t: TestimonialData): string {
  const author = t.author_company
    ? `${t.author_name}${t.author_role ? `, ${t.author_role}` : ''} at ${t.author_company}`
    : t.author_name
  return `<blockquote style="border-left: 3px solid #6366f1; padding-left: 16px; margin: 16px 0; color: #374151;">\n  <p style="font-style: italic; font-size: 16px;">"${t.content}"</p>\n  <footer style="margin-top: 8px; font-size: 14px; color: #6B7280;">\n    \u2014 ${author} | ${starEmojis(t.rating)} ${t.rating}/5\n  </footer>\n</blockquote>`
}
