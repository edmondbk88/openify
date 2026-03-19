/**
 * Schema.org JSON-LD structured data generators for Opinafy.
 *
 * Usage: import the functions you need, call them in your page component,
 * and render via <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
 */

// ──────────────────────────────────────────────
// 1. Organization -- site-wide, render in root layout or homepage
// ──────────────────────────────────────────────
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Opinafy',
    url: 'https://opinafy.com',
    logo: 'https://opinafy.com/logo-opinafy.png',
    description:
      'Opinafy es la plataforma #1 en espanol para recopilar, gestionar y mostrar testimonios de clientes.',
    foundingDate: '2026',
    sameAs: [
      'https://www.linkedin.com/company/opinafy',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      availableLanguage: ['Spanish'],
    },
  }
}

// ──────────────────────────────────────────────
// 2. WebSite -- enables sitelinks search box in Google
// ──────────────────────────────────────────────
export function webSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Opinafy',
    url: 'https://opinafy.com',
    inLanguage: 'es',
    publisher: {
      '@type': 'Organization',
      name: 'Opinafy',
      url: 'https://opinafy.com',
    },
  }
}

// ──────────────────────────────────────────────
// 3. SoftwareApplication -- describes the SaaS product
// ──────────────────────────────────────────────
export function softwareApplicationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Opinafy',
    url: 'https://opinafy.com',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description:
      'Plataforma SaaS para recopilar, gestionar y mostrar testimonios de clientes con widgets personalizables.',
    offers: [
      {
        '@type': 'Offer',
        name: 'Gratis',
        price: '0',
        priceCurrency: 'EUR',
        url: 'https://opinafy.com/precios',
        description: 'Perfecto para probar la plataforma. 1 proyecto, 10 testimonios, 2 layouts.',
      },
      {
        '@type': 'Offer',
        name: 'Pro',
        price: '9',
        priceCurrency: 'EUR',
        url: 'https://opinafy.com/precios',
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
        description:
          'Para negocios que quieren crecer. 3 proyectos, testimonios ilimitados, todos los layouts.',
      },
      {
        '@type': 'Offer',
        name: 'Business',
        price: '19',
        priceCurrency: 'EUR',
        url: 'https://opinafy.com/precios',
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
        description:
          'Para equipos y agencias. Proyectos ilimitados, testimonios en video, 3 asientos de equipo.',
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
}) {
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
    inLanguage: 'es',
  }
}

// ──────────────────────────────────────────────
// 6. CollectionPage -- for /blog and /plantillas listing pages
// ──────────────────────────────────────────────
export function collectionPageSchema(opts: {
  name: string
  url: string
  description: string
}) {
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
    inLanguage: 'es',
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
// 8. Article -- improved version with image support
// ──────────────────────────────────────────────
export function articleSchema(opts: {
  title: string
  description: string
  slug: string
  date: string
  keywords: string[]
  image?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.title,
    description: opts.description,
    image: opts.image || 'https://opinafy.com/og.png',
    author: {
      '@type': 'Person',
      name: 'Equipo Opinafy',
      url: 'https://opinafy.com',
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
      '@id': `https://opinafy.com/blog/${opts.slug}`,
    },
    keywords: opts.keywords.join(', '),
    inLanguage: 'es',
  }
}
