/**
 * Schema.org JSON-LD structured data generators for Opinafy.
 *
 * Usage: import the functions you need, call them in your page component,
 * and render via <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
 */

// ──────────────────────────────────────────────
// 1. Organization -- site-wide, render in root layout or homepage
// ──────────────────────────────────────────────
export function organizationSchema(opts?: { lang?: string }) {
  const lang = opts?.lang || 'es'
  const description =
    lang === 'en'
      ? 'Opinafy is the #1 platform for collecting, managing, and displaying customer testimonials.'
      : 'Opinafy es la plataforma #1 en español para recopilar, gestionar y mostrar testimonios de clientes.'

  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://opinafy.com/#organization',
    name: 'Opinafy',
    url: 'https://opinafy.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://opinafy.com/logo-opinafy.png',
      width: 512,
      height: 512,
    },
    description,
    foundingDate: '2026',
    founder: {
      '@type': 'Person',
      name: 'Edmond Bojalil',
      url: 'https://www.linkedin.com/in/edmondbojalil/',
      image: 'https://rckjevsqxkfixkdloqjv.supabase.co/storage/v1/object/public/logos/site/edmond-bojalil.jpg',
    },
    sameAs: [
      'https://www.linkedin.com/company/opinafy',
      'https://www.linkedin.com/in/edmondbojalil/',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: 'hola@opinafy.com',
      availableLanguage: ['Spanish', 'English'],
    },
  }
}

// ──────────────────────────────────────────────
// 2. WebSite -- enables sitelinks search box in Google
// ──────────────────────────────────────────────
export function webSiteSchema(opts?: { lang?: string }) {
  const lang = opts?.lang || 'es'
  const searchPath = lang === 'en' ? '/en/blog' : '/blog'

  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': lang === 'en' ? 'https://opinafy.com/en#website' : 'https://opinafy.com/#website',
    name: 'Opinafy',
    url: 'https://opinafy.com',
    inLanguage: lang,
    publisher: {
      '@type': 'Organization',
      name: 'Opinafy',
      url: 'https://opinafy.com',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `https://opinafy.com${searchPath}?q={search_term}`,
      },
      'query-input': 'required name=search_term',
    },
  }
}

// ──────────────────────────────────────────────
// 3. SoftwareApplication -- describes the SaaS product
// ──────────────────────────────────────────────
export function softwareApplicationSchema(opts?: { lang?: string }) {
  const lang = opts?.lang || 'es'
  const isEn = lang === 'en'

  const description = isEn
    ? 'SaaS platform to collect, manage, and display customer testimonials with customizable widgets.'
    : 'Plataforma SaaS para recopilar, gestionar y mostrar testimonios de clientes con widgets personalizables.'

  const pricingUrl = isEn ? 'https://opinafy.com/en/pricing' : 'https://opinafy.com/precios'

  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Opinafy',
    url: 'https://opinafy.com',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description,
    offers: [
      {
        '@type': 'Offer',
        name: isEn ? 'Free' : 'Gratis',
        price: '0',
        priceCurrency: 'EUR',
        url: pricingUrl,
        description: isEn
          ? 'Perfect for trying the platform. 1 project, 10 testimonials, 2 layouts.'
          : 'Perfecto para probar la plataforma. 1 proyecto, 10 testimonios, 2 layouts.',
      },
      {
        '@type': 'Offer',
        name: 'Mini Sitio',
        price: '5',
        priceCurrency: 'EUR',
        url: pricingUrl,
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '5',
          priceCurrency: 'EUR',
          billingDuration: {
            '@type': 'QuantitativeValue',
            value: 1,
            unitCode: 'MON',
          },
        },
        description: isEn
          ? 'Professional mini site for testimonials. Customizable public page with custom domain.'
          : 'Mini sitio profesional para testimonios. Página pública personalizable con dominio propio.',
      },
      {
        '@type': 'Offer',
        name: 'Pro',
        price: '9',
        priceCurrency: 'EUR',
        url: pricingUrl,
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '9',
          priceCurrency: 'EUR',
          billingDuration: {
            '@type': 'QuantitativeValue',
            value: 1,
            unitCode: 'MON',
          },
        },
        description: isEn
          ? 'For businesses that want to grow. 3 projects, unlimited testimonials, all layouts.'
          : 'Para negocios que quieren crecer. 3 proyectos, testimonios ilimitados, todos los layouts.',
      },
      {
        '@type': 'Offer',
        name: 'Business',
        price: '19',
        priceCurrency: 'EUR',
        url: pricingUrl,
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '19',
          priceCurrency: 'EUR',
          billingDuration: {
            '@type': 'QuantitativeValue',
            value: 1,
            unitCode: 'MON',
          },
        },
        description: isEn
          ? 'For teams and agencies. Unlimited projects, video testimonials, 3 team seats.'
          : 'Para equipos y agencias. Proyectos ilimitados, testimonios en video, 3 asientos de equipo.',
      },
    ],
  }
}

// ──────────────────────────────────────────────
// 4. BreadcrumbList -- reusable for any page
// ──────────────────────────────────────────────
export interface BreadcrumbItem {
  name: string
  url: string
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

// ──────────────────────────────────────────────
// 5. WebPage -- for key landing pages
// ──────────────────────────────────────────────
export function webPageSchema(opts: {
  name: string
  url: string
  description: string
  lang?: string
}) {
  const lang = opts.lang || 'es'
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: opts.name,
    url: opts.url,
    description: opts.description,
    isPartOf: {
      '@type': 'WebSite',
      name: 'Opinafy',
      url: 'https://opinafy.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Opinafy',
      url: 'https://opinafy.com',
      logo: 'https://opinafy.com/logo-opinafy.png',
    },
    inLanguage: lang,
  }
}

// ──────────────────────────────────────────────
// 6. CollectionPage -- for /blog and /plantillas listing pages
// ──────────────────────────────────────────────
export function collectionPageSchema(opts: {
  name: string
  url: string
  description: string
  lang?: string
}) {
  const lang = opts.lang || 'es'
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: opts.name,
    url: opts.url,
    description: opts.description,
    isPartOf: {
      '@type': 'WebSite',
      name: 'Opinafy',
      url: 'https://opinafy.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Opinafy',
      url: 'https://opinafy.com',
    },
    inLanguage: lang,
  }
}

// ──────────────────────────────────────────────
// 7. FAQPage -- for homepage FAQ section
// ──────────────────────────────────────────────
export function faqSchema() {
  const faqs = [
    {
      question: '¿Qué es Opinafy?',
      answer:
        'Opinafy es una plataforma SaaS que te permite recopilar, gestionar y mostrar testimonios de tus clientes en tu sitio web. Con formularios personalizables y widgets embebibles, puedes mostrar prueba social de forma profesional y aumentar tus conversiones.',
    },
    {
      question: '¿Cómo instalo el widget en mi web?',
      answer:
        'Es muy sencillo. Una vez que tengas testimonios aprobados, ve a la sección de widget en tu panel, elige el layout que prefieras, personaliza los colores y copia el fragmento de código. Pégalo en el HTML de tu web donde quieras que aparezcan los testimonios.',
    },
    {
      question: '¿Puedo personalizar el diseño?',
      answer:
        'Sí. Puedes personalizar los colores, la tipografía, el layout (carrusel, cuadrícula o muro) y otros aspectos visuales del widget para que se integre perfectamente con el diseño de tu web.',
    },
    {
      question: '¿Hay plan gratuito?',
      answer:
        'Sí, ofrecemos un plan gratuito que incluye 1 proyecto, hasta 10 testimonios y 2 layouts. Es perfecto para probar la plataforma sin compromiso. Puedes mejorar a un plan de pago en cualquier momento.',
    },
    {
      question: '¿Los testimonios afectan al SEO?',
      answer:
        'Sí. Los testimonios se renderizan como contenido HTML real en tu página, lo que los hace indexables por los motores de búsqueda. Además, utilizamos datos estructurados (schema markup) para mejorar la visibilidad en los resultados de búsqueda.',
    },
    {
      question: '¿Puedo migrar desde otra plataforma?',
      answer:
        'Sí, puedes importar testimonios existentes de forma manual desde tu panel de control. Si necesitas una migración masiva, nuestro equipo de soporte puede ayudarte con el proceso.',
    },
    {
      question: '¿Qué métodos de pago aceptan?',
      answer:
        'Aceptamos tarjetas de crédito y débito (Visa, Mastercard, American Express) a través de Stripe, nuestra pasarela de pago segura. Todos los pagos están protegidos con encriptación SSL.',
    },
    {
      question: '¿Funciona con WordPress/Shopify?',
      answer:
        'Sí, el widget de Opinafy es compatible con cualquier plataforma web, incluyendo WordPress, Shopify, Wix, Squarespace y cualquier sitio HTML personalizado. Solo necesitas pegar un fragmento de código.',
    },
  ]

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

// ──────────────────────────────────────────────
// 8. FAQPage (custom) -- for any page with FAQ content
// ──────────────────────────────────────────────
export function faqPageSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

// ──────────────────────────────────────────────
// 9. Article -- improved version with image and language support
// ──────────────────────────────────────────────
export function articleSchema(opts: {
  title: string
  description: string
  slug: string
  date: string
  keywords: string[]
  image?: string
  lang?: string
}) {
  const lang = opts.lang || 'es'
  const blogPrefix = lang === 'en' ? '/en/blog/' : '/blog/'

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.title,
    description: opts.description,
    image: opts.image || 'https://opinafy.com/og.png',
    author: {
      '@type': 'Person',
      name: 'Edmond Bojalil',
      url: 'https://www.linkedin.com/in/edmondbojalil/',
      image: 'https://rckjevsqxkfixkdloqjv.supabase.co/storage/v1/object/public/logos/site/edmond-bojalil.jpg',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Opinafy',
      url: 'https://opinafy.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://opinafy.com/logo-opinafy.png',
      },
    },
    datePublished: opts.date,
    dateModified: opts.date,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://opinafy.com${blogPrefix}${opts.slug}`,
    },
    keywords: opts.keywords.join(', '),
    inLanguage: lang,
  }
}
