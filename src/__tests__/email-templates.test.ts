import {
  emailTemplate,
  welcomeEmail,
  testimonialVerificationEmail,
  testimonialApprovedEmail,
  ticketCreatedEmail,
  ticketReplyEmail,
  ticketUserReplyEmail,
  stripHtmlToText,
} from '@/lib/email-templates'

describe('emailTemplate', () => {
  it('returns valid HTML', () => {
    const html = emailTemplate({ title: 'Test', body: '<p>Hello</p>' })
    expect(html).toContain('<!DOCTYPE html>')
    expect(html).toContain('</html>')
  })

  it('contains the Opinafy logo', () => {
    const html = emailTemplate({ title: 'Test', body: '<p>Hello</p>' })
    expect(html).toContain('logo-opinafy.png')
    expect(html).toContain('Opinafy')
  })

  it('contains footer with copyright', () => {
    const html = emailTemplate({ title: 'Test', body: '<p>Hello</p>' })
    expect(html).toContain('&copy;')
    expect(html).toContain('Todos los derechos reservados')
  })

  it('escapes title to prevent XSS', () => {
    const html = emailTemplate({ title: '<script>alert("xss")</script>', body: '<p>Hello</p>' })
    expect(html).not.toContain('<script>')
    expect(html).toContain('&lt;script&gt;')
  })

  it('renders button when buttonText and buttonUrl provided', () => {
    const html = emailTemplate({
      title: 'Test',
      body: '<p>Hello</p>',
      buttonText: 'Click Me',
      buttonUrl: 'https://example.com',
    })
    expect(html).toContain('Click Me')
    expect(html).toContain('https://example.com')
  })

  it('does not render button when no buttonText', () => {
    const html = emailTemplate({ title: 'Test', body: '<p>Hello</p>' })
    expect(html).not.toContain('display:inline-block;background-color:#4f46e5')
  })

  it('contains opinafy.com link in footer', () => {
    const html = emailTemplate({ title: 'Test', body: '<p>Hello</p>' })
    expect(html).toContain('https://opinafy.com')
  })
})

describe('template functions return strings', () => {
  it('welcomeEmail returns HTML string', () => {
    const result = welcomeEmail('Juan')
    expect(typeof result).toBe('string')
    expect(result).toContain('Juan')
    expect(result).toContain('Bienvenido')
  })

  it('testimonialVerificationEmail returns HTML string', () => {
    const result = testimonialVerificationEmail('Mi Proyecto', 'https://verify.com/token', 'Juan')
    expect(typeof result).toBe('string')
    expect(result).toContain('Mi Proyecto')
    expect(result).toContain('https://verify.com/token')
    expect(result).toContain('Verificar testimonio')
  })

  it('testimonialApprovedEmail returns HTML string', () => {
    const result = testimonialApprovedEmail('Mi Proyecto', 'Juan')
    expect(typeof result).toBe('string')
    expect(result).toContain('aprobado')
    expect(result).toContain('Juan')
  })

  it('ticketCreatedEmail returns HTML string', () => {
    const result = ticketCreatedEmail('Bug report', 'ticket-123')
    expect(typeof result).toBe('string')
    expect(result).toContain('Bug report')
    expect(result).toContain('ticket-123')
  })

  it('ticketReplyEmail returns HTML string', () => {
    const result = ticketReplyEmail('Bug report', 'We fixed it', 'ticket-123')
    expect(typeof result).toBe('string')
    expect(result).toContain('Bug report')
    expect(result).toContain('We fixed it')
  })

  it('ticketUserReplyEmail returns HTML string', () => {
    const result = ticketUserReplyEmail('Bug report', 'Thanks', 'user@test.com', 'ticket-123')
    expect(typeof result).toBe('string')
    expect(result).toContain('user@test.com')
  })
})

describe('stripHtmlToText', () => {
  it('strips HTML tags', () => {
    expect(stripHtmlToText('<p>Hello <strong>World</strong></p>')).toContain('Hello World')
  })

  it('converts <br> to newline', () => {
    expect(stripHtmlToText('Hello<br>World')).toContain('Hello\nWorld')
  })

  it('decodes HTML entities', () => {
    const result = stripHtmlToText('&amp; &lt; &gt; &quot;')
    expect(result).toContain('&')
    expect(result).toContain('<')
    expect(result).toContain('>')
    expect(result).toContain('"')
  })

  it('converts &copy; to (c)', () => {
    expect(stripHtmlToText('&copy; 2026')).toContain('(c) 2026')
  })
})
