import { NextRequest, NextResponse } from 'next/server'

// Simple in-memory rate limiter
const rateLimit = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT_MAX = 10
const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimit.get(ip)
  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW })
    return true
  }
  if (entry.count >= RATE_LIMIT_MAX) return false
  entry.count++
  return true
}

interface HealthCheck {
  id: string
  label: string
  labelEn: string
  passed: boolean
  score: number
  recommendation: string
  recommendationEn: string
  ctaLink?: string
}

export async function GET(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Demasiadas solicitudes. Intenta de nuevo en un minuto.', errorEn: 'Too many requests. Try again in a minute.' },
        { status: 429 }
      )
    }

    const { searchParams } = new URL(request.url)
    let url = searchParams.get('url')
    if (!url) {
      return NextResponse.json({ error: 'Se requiere el parametro url', errorEn: 'url parameter is required' }, { status: 400 })
    }

    // Normalize URL
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      url = 'https://' + url
    }

    let html: string
    try {
      const controller = new AbortController()
      const timeout = setTimeout(() => controller.abort(), 10000)
      const res = await fetch(url, {
        signal: controller.signal,
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; OpinafyBot/1.0; +https://opinafy.com)',
          'Accept': 'text/html',
        },
      })
      clearTimeout(timeout)
      if (!res.ok) {
        return NextResponse.json(
          { error: `No se pudo acceder al sitio (HTTP ${res.status})`, errorEn: `Could not access site (HTTP ${res.status})` },
          { status: 400 }
        )
      }
      html = await res.text()
    } catch {
      return NextResponse.json(
        { error: 'No se pudo conectar con el sitio web', errorEn: 'Could not connect to the website' },
        { status: 400 }
      )
    }

    const htmlLower = html.toLowerCase()

    const checks: HealthCheck[] = []

    // 1. Testimonials/reviews section
    const testimonialKeywords = ['testimonios', 'testimonials', 'reviews', 'opiniones', 'resenas', 'reseñas', 'lo que dicen', 'what they say', 'what our customers', 'nuestros clientes dicen']
    const hasTestimonials = testimonialKeywords.some(k => htmlLower.includes(k))
    checks.push({
      id: 'testimonials',
      label: 'Sección de testimonios',
      labelEn: 'Testimonials section',
      passed: hasTestimonials,
      score: 25,
      recommendation: 'Añade una sección de testimonios de clientes en tu web para aumentar la confianza.',
      recommendationEn: 'Add a customer testimonials section to your website to build trust.',
      ctaLink: '/caracteristicas',
    })

    // 2. Star ratings
    const hasStars = htmlLower.includes('star') || htmlLower.includes('rating') || htmlLower.includes('estrella') || htmlLower.includes('valoración') || /\d(\.\d)?\s*\/\s*5/.test(html) || htmlLower.includes('fa-star') || htmlLower.includes('★') || htmlLower.includes('⭐')
    checks.push({
      id: 'stars',
      label: 'Valoraciones con estrellas',
      labelEn: 'Star ratings',
      passed: hasStars,
      score: 15,
      recommendation: 'Muestra valoraciones con estrellas junto a tus testimonios para mayor impacto visual.',
      recommendationEn: 'Display star ratings alongside your testimonials for greater visual impact.',
      ctaLink: '/plantillas',
    })

    // 3. Structured data
    const hasStructuredData = htmlLower.includes('schema.org/review') || htmlLower.includes('aggregaterating') || htmlLower.includes('"@type":"review"') || htmlLower.includes('"@type": "review"')
    checks.push({
      id: 'structured-data',
      label: 'Datos estructurados (Schema.org)',
      labelEn: 'Structured data (Schema.org)',
      passed: hasStructuredData,
      score: 15,
      recommendation: 'Añade datos estructurados de tipo Review o AggregateRating para aparecer con estrellas en Google.',
      recommendationEn: 'Add Review or AggregateRating structured data to show stars in Google results.',
      ctaLink: '/caracteristicas',
    })

    // 4. Social proof widgets
    const widgetPatterns = ['trustpilot', 'yotpo', 'judge.me', 'stamped.io', 'loox', 'opinafy', 'testimonial.to', 'senja', 'wall-of-love', 'shoutout']
    const hasWidgets = widgetPatterns.some(p => htmlLower.includes(p))
    checks.push({
      id: 'widgets',
      label: 'Widget de prueba social',
      labelEn: 'Social proof widget',
      passed: hasWidgets,
      score: 15,
      recommendation: 'Instala un widget de testimonios como Opinafy para mostrar opiniones reales de forma atractiva.',
      recommendationEn: 'Install a testimonial widget like Opinafy to display real reviews attractively.',
      ctaLink: '/plantillas',
    })

    // 5. Trust badges
    const trustPatterns = ['trust', 'verified', 'certificado', 'verificado', 'secure', 'seguro', 'ssl', 'garantia', 'guarantee', 'money-back', 'devolucion']
    const hasTrustBadges = trustPatterns.some(p => htmlLower.includes(p))
    checks.push({
      id: 'trust-badges',
      label: 'Insignias de confianza',
      labelEn: 'Trust badges',
      passed: hasTrustBadges,
      score: 10,
      recommendation: 'Añade insignias de confianza (verificado, seguro, garantia) para reducir la fricción de compra.',
      recommendationEn: 'Add trust badges (verified, secure, guarantee) to reduce purchase friction.',
      ctaLink: '/verificado-badge',
    })

    // 6. HTTPS
    const isHttps = url.startsWith('https://')
    checks.push({
      id: 'https',
      label: 'Conexion segura (HTTPS)',
      labelEn: 'Secure connection (HTTPS)',
      passed: isHttps,
      score: 10,
      recommendation: 'Activa HTTPS en tu sitio. Es fundamental para la confianza del usuario y el SEO.',
      recommendationEn: 'Enable HTTPS on your site. It is essential for user trust and SEO.',
    })

    // 7. Meta description with trust keywords
    const metaMatch = html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']+)["']/i)
    const metaContent = metaMatch ? metaMatch[1].toLowerCase() : ''
    const trustMetaKeywords = ['confianza', 'trust', 'review', 'testimonio', 'opinión', 'valoración', 'rating', 'verified', 'verificado']
    const hasMetaTrust = trustMetaKeywords.some(k => metaContent.includes(k))
    checks.push({
      id: 'meta-trust',
      label: 'Meta descripción con confianza',
      labelEn: 'Meta description mentions trust',
      passed: hasMetaTrust,
      score: 10,
      recommendation: 'Incluye palabras como "testimonios", "opiniones verificadas" o "confianza" en tu meta descripción.',
      recommendationEn: 'Include words like "testimonials", "verified reviews" or "trust" in your meta description.',
    })

    const totalScore = checks.reduce((sum, c) => sum + (c.passed ? c.score : 0), 0)

    return NextResponse.json({
      url,
      score: totalScore,
      maxScore: 100,
      checks,
      analyzedAt: new Date().toISOString(),
    })
  } catch {
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 })
  }
}
