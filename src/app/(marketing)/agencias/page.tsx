import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/landing/navbar'
import { Footer } from '@/components/landing/footer'
import { breadcrumbSchema, organizationSchema, webPageSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Opinafy para Agencias - Gestiona testimonios de todos tus clientes',
  description:
    'Gestiona los testimonios de todos tus clientes desde un solo lugar. Multi-proyecto, white-label, dashboard centralizado, reportes PDF y mas. Plan Business desde 19 EUR/mes.',
  keywords: [
    'testimonios para agencias',
    'gestión testimonios agencia marketing',
    'plataforma testimonios white label',
    'herramienta testimonios agencias',
    'opinafy agencias',
    'multi proyecto testimonios',
    'testimonios clientes agencia',
  ],
  alternates: {
    canonical: 'https://opinafy.com/agencias',
    languages: {
      es: 'https://opinafy.com/agencias',
      en: 'https://opinafy.com/en/agencies',
      'x-default': 'https://opinafy.com/agencias',
    },
  },
  openGraph: {
    title: 'Opinafy para Agencias - Testimonios de todos tus clientes',
    description:
      'Multi-proyecto, white-label, dashboard centralizado y reportes PDF. Todo lo que tu agencia necesita desde 19 EUR/mes.',
    url: 'https://opinafy.com/agencias',
    type: 'website',
    siteName: 'Opinafy',
    locale: 'es_ES',
    images: [{ url: '/og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Opinafy para Agencias',
    description:
      'Gestiona los testimonios de todos tus clientes desde un solo lugar. Plan Business desde 19 EUR/mes.',
    images: ['/og.jpg'],
  },
}

const agencyFeatures = [
  {
    title: 'Multi-proyecto',
    description: 'Hasta 20 proyectos con el plan Business. Un proyecto por cada cliente de tu agencia.',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25a2.25 2.25 0 0 1-2.25-2.25v-2.25Z" />
      </svg>
    ),
  },
  {
    title: 'White-label',
    description: 'Sin marca Opinafy en los planes de pago. Tus clientes ven tu marca, no la nuestra.',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
      </svg>
    ),
  },
  {
    title: 'Dashboard centralizado',
    description: 'Ve todos los testimonios de todos tus clientes en un solo panel. Filtra por proyecto, estado o fecha.',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
  },
  {
    title: 'Reportes PDF exportables',
    description: 'Genera reportes profesionales en PDF para presentar a tus clientes con sus testimonios y metricas.',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
      </svg>
    ),
  },
  {
    title: 'Webhooks para automatización',
    description: 'Conecta Opinafy con tus herramientas favoritas. Recibe notificaciones en tiempo real de nuevos testimonios.',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
      </svg>
    ),
  },
  {
    title: 'Plantillas personalizables por cliente',
    description: 'Elige entre 65+ plantillas y personaliza colores, fuentes y estilos para cada cliente de tu agencia.',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z" />
      </svg>
    ),
  },
  {
    title: 'Mini sitios por cliente',
    description: 'Cada proyecto tiene su propio mini sitio publico con todos los testimonios verificados del cliente.',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
]

const testimonials = [
  {
    name: 'Carlos Mendez',
    role: 'Director, Agencia Digital Impulsa',
    text: 'Opinafy nos permite gestionar los testimonios de nuestros 15 clientes desde un solo dashboard. El plan Business es perfecto para agencias.',
    rating: 5,
  },
  {
    name: 'Laura Fernandez',
    role: 'CEO, Marketing360',
    text: 'El white-label es un gran diferencial. Nuestros clientes ven nuestra marca y no saben que usamos Opinafy detras. Excelente herramienta.',
    rating: 5,
  },
  {
    name: 'Miguel Torres',
    role: 'Fundador, GrowthLab Agency',
    text: 'Los reportes PDF que generamos para nuestros clientes son profesionales y les encantan. Opinafy se ha convertido en parte esencial de nuestro stack.',
    rating: 5,
  },
]

export default function AgenciasPage() {
  const breadcrumbJsonLd = breadcrumbSchema([
    { name: 'Inicio', url: 'https://opinafy.com' },
    { name: 'Agencias', url: 'https://opinafy.com/agencias' },
  ])
  const orgJsonLd = organizationSchema()
  const webPageJsonLd = webPageSchema({
    name: 'Opinafy para Agencias - Gestiona testimonios de todos tus clientes',
    url: 'https://opinafy.com/agencias',
    description: 'Gestiona los testimonios de todos tus clientes desde un solo lugar. Multi-proyecto, white-label, dashboard centralizado y mas.',
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-b from-indigo-50 to-white px-4 pb-16 pt-24 sm:pb-24 sm:pt-32">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-block rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-medium text-indigo-700">
            Para agencias
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Opinafy para Agencias
          </h1>
          <p className="mt-6 text-lg text-gray-600 sm:text-xl">
            Gestiona los testimonios de todos tus clientes desde un solo lugar.
            Multi-proyecto, white-label y dashboard centralizado.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/registro"
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-indigo-700 hover:shadow-xl"
            >
              Empieza con el plan Business
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              href="/precios"
              className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-8 py-3.5 text-base font-semibold text-gray-700 shadow-sm transition-all hover:bg-gray-50"
            >
              Ver precios
            </Link>
          </div>
        </div>
      </section>

      {/* Features for agencies */}
      <section className="bg-white px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">
            Todo lo que tu agencia necesita
          </h2>
          <p className="mt-4 text-center text-lg text-gray-600">
            Funcionalidades disenadas especificamente para agencias de marketing
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {agencyFeatures.map((feature) => (
              <div key={feature.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
                  {feature.icon}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-gray-50 px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            El plan Business es perfecto para agencias
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Todo lo que necesitas por solo 19 EUR/mes
          </p>
          <div className="mt-12 rounded-2xl border-2 border-indigo-500 bg-white p-8 shadow-lg">
            <div className="text-center">
              <p className="text-sm font-medium uppercase tracking-wide text-indigo-600">Plan Business</p>
              <p className="mt-4 flex items-baseline justify-center gap-1">
                <span className="text-5xl font-extrabold text-gray-900">19</span>
                <span className="text-xl text-gray-500">EUR/mes</span>
              </p>
            </div>
            <ul className="mt-8 space-y-3 text-left">
              {[
                'Hasta 20 proyectos (un proyecto por cliente)',
                'Testimonios ilimitados por proyecto',
                'White-label (sin marca Opinafy)',
                'Todos los layouts de widget',
                '65+ plantillas personalizables',
                'Mini sitio publico por proyecto',
                'Reportes PDF exportables',
                'Webhooks para automatización',
                'Soporte prioritario',
                'Video testimonios',
                'Importación desde Google, Trustpilot y más',
              ].map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/registro"
              className="mt-8 block w-full rounded-xl bg-indigo-600 py-3.5 text-center text-base font-semibold text-white transition-colors hover:bg-indigo-700"
            >
              Empieza con el plan Business
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials from agencies */}
      <section className="bg-white px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">
            Lo que dicen las agencias
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex gap-0.5">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="mt-4 text-gray-600">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="mt-4">
                  <p className="text-sm font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-600 px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Lleva los testimonios de tus clientes al siguiente nivel
          </h2>
          <p className="mt-4 text-lg text-indigo-100">
            Unete a las agencias que ya usan Opinafy para gestionar los testimonios de sus clientes. Plan Business desde 19 EUR/mes.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/registro"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-base font-semibold text-indigo-600 shadow-lg transition-all hover:bg-indigo-50 hover:shadow-xl"
            >
              Empieza con el plan Business
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-white/10"
            >
              Contactar ventas
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
