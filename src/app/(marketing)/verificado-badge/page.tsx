import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/landing/navbar'
import { Footer } from '@/components/landing/footer'
import { breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Badge Verificado por Opinafy - Testimonios Verificados y Confiables',
  description:
    'El badge "Verificado por Opinafy" garantiza que los testimonios de un sitio web son reales, verificados por email y revisados. Aumenta la confianza de tus visitantes.',
  keywords: [
    'badge verificado testimonios',
    'testimonios verificados',
    'sello de confianza testimonios',
    'verificación testimonios',
    'opinafy verificado',
    'prueba social verificada',
  ],
  alternates: {
    canonical: 'https://opinafy.com/verificado-badge',
    languages: {
      es: 'https://opinafy.com/verificado-badge',
      en: 'https://opinafy.com/en/verified',
      'x-default': 'https://opinafy.com/verificado-badge',
    },
  },
  openGraph: {
    title: 'Badge Verificado por Opinafy - Testimonios Verificados',
    description:
      'El badge que garantiza testimonios reales y verificados en tu web. Aumenta la confianza y las conversiones.',
    url: 'https://opinafy.com/verificado-badge',
    type: 'website',
    siteName: 'Opinafy',
    locale: 'es_ES',
    images: [{ url: '/og.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Badge Verificado por Opinafy',
    description:
      'Testimonios reales y verificados. El badge de confianza para tu web.',
    images: ['/og.png'],
  },
}

const trustStats = [
  { value: '92%', label: 'de consumidores confian mas en testimonios verificados' },
  { value: '3.2x', label: 'mas conversiones con prueba social verificada' },
  { value: '76%', label: 'de compradores buscan senales de confianza antes de comprar' },
]

const verificationSteps = [
  {
    title: 'Verificacion por email',
    description: 'Cada persona que deja un testimonio recibe un email de confirmacion. Solo los testimonios verificados por email son publicados.',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    title: 'Revision del negocio',
    description: 'El propietario del negocio revisa y aprueba cada testimonio, asegurando que es de un cliente real.',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
      </svg>
    ),
  },
  {
    title: 'Badge automatico',
    description: 'Una vez que tienes testimonios verificados, el badge aparece automaticamente en tu widget y mini sitio.',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
]

export default function VerificadoBadgePage() {
  const breadcrumbJsonLd = breadcrumbSchema([
    { name: 'Inicio', url: 'https://opinafy.com' },
    { name: 'Badge Verificado', url: 'https://opinafy.com/verificado-badge' },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-b from-green-50 to-white px-4 pb-16 pt-24 sm:pb-24 sm:pt-32">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-block rounded-full bg-green-100 px-4 py-1.5 text-sm font-medium text-green-700">
            Confianza verificada
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Badge Verificado por Opinafy
          </h1>
          <p className="mt-6 text-lg text-gray-600 sm:text-xl">
            El sello que garantiza que los testimonios de tu web son reales, verificados por email y revisados por el negocio.
          </p>
        </div>
      </section>

      {/* Badge Preview */}
      <section className="bg-white px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Asi luce el badge
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Un sello visual que transmite confianza a tus visitantes
          </p>
          {/* Badge mockup */}
          <div className="mt-12 flex justify-center">
            <div className="inline-flex items-center gap-3 rounded-xl border-2 border-green-200 bg-gradient-to-r from-green-50 to-emerald-50 px-6 py-4 shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500">
                <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-green-800">Verificado por Opinafy</p>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-1 text-sm text-gray-600">4.9 (127 testimonios)</span>
                </div>
              </div>
            </div>
          </div>
          <p className="mt-6 text-sm text-gray-500">
            El badge muestra la valoración media y el número de testimonios verificados de tu proyecto.
          </p>
        </div>
      </section>

      {/* What it means */}
      <section className="bg-gray-50 px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">
            Que significa el badge
          </h2>
          <p className="mt-4 text-center text-lg text-gray-600">
            Un proceso de verificación en tres pasos para garantizar la autenticidad
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {verificationSteps.map((step) => (
              <div key={step.title} className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-green-600">
                  {step.icon}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{step.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For consumers */}
      <section className="bg-white px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl border border-green-200 bg-green-50 p-8 sm:p-12">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-500">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-green-900">Para consumidores</h2>
                <p className="mt-3 text-lg text-green-800">
                  Si ves este badge en un sitio web, significa que los testimonios que aparecen son reales y verificados.
                  Cada testimonio ha sido confirmado por email y revisado por el negocio antes de ser publicado.
                </p>
                <p className="mt-3 text-green-700">
                  No son testimonios inventados ni manipulados. Puedes confiar en ellos para tomar tu decision de compra.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust statistics */}
      <section className="bg-gray-50 px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">
            La confianza importa
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {trustStats.map((stat) => (
              <div key={stat.value} className="text-center">
                <p className="text-4xl font-extrabold text-indigo-600">{stat.value}</p>
                <p className="mt-2 text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to get it */}
      <section className="bg-white px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">
            Como obtener el badge
          </h2>
          <div className="mt-12 space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-600 text-sm font-bold text-white">1</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Registrate en Opinafy</h3>
                <p className="mt-1 text-gray-600">Crea tu cuenta gratuita y configura tu primer proyecto de testimonios.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-600 text-sm font-bold text-white">2</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Recopila testimonios verificados</h3>
                <p className="mt-1 text-gray-600">Tus clientes recibirán un email de verificación. Solo los testimonios verificados cuentan para el badge.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-600 text-sm font-bold text-white">3</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">El badge aparece automaticamente</h3>
                <p className="mt-1 text-gray-600">Una vez que tengas testimonios aprobados, puedes insertar el badge en tu web usando un simple codigo HTML.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Embed code preview */}
      <section className="bg-gray-50 px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">
            Facil de integrar
          </h2>
          <p className="mt-4 text-center text-lg text-gray-600">
            Copia y pega este codigo en tu web para mostrar el badge
          </p>
          <div className="mt-8 overflow-hidden rounded-xl border border-gray-200 bg-gray-900 p-6">
            <code className="block text-sm text-green-400">
              {'<a href="https://opinafy.com/verificado-badge">'}<br />
              {'  <img src="https://opinafy.com/api/badge/TU_PROYECTO"'}<br />
              {'       alt="Verificado por Opinafy" />'}<br />
              {'</a>'}
            </code>
          </div>
          <p className="mt-4 text-center text-sm text-gray-500">
            Sustituye TU_PROYECTO por el ID de tu proyecto. Encontraras el codigo exacto en tu dashboard.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-600 px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Aumenta la confianza en tu web
          </h2>
          <p className="mt-4 text-lg text-indigo-100">
            Empieza a recopilar testimonios verificados hoy y muestra el badge de confianza a tus visitantes.
          </p>
          <Link
            href="/registro"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-base font-semibold text-indigo-600 shadow-lg transition-all hover:bg-indigo-50 hover:shadow-xl"
          >
            Crear cuenta gratis
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
