import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/landing/navbar'
import { Footer } from '@/components/landing/footer'
import { webPageSchema, breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Casos de Éxito - Historias de Clientes que Crecieron con Opinafy',
  description:
    'Descubre como empresas reales usan Opinafy para recopilar testimonios, aumentar conversiones y generar confianza. Casos de éxito con resultados medibles.',
  keywords: [
    'casos de éxito opinafy',
    'testimonios clientes',
    'aumentar conversiones testimonios',
    'historias de éxito testimonios',
    'prueba social resultados',
    'opinafy resultados',
  ],
  alternates: {
    canonical: 'https://opinafy.com/casos-de-exito',
    languages: {
      es: 'https://opinafy.com/casos-de-exito',
      en: 'https://opinafy.com/en/case-studies',
      'x-default': 'https://opinafy.com/casos-de-exito',
    },
  },
  openGraph: {
    title: 'Casos de Éxito de Opinafy - Historias que Inspiran',
    description: 'Empresas reales que aumentaron sus conversiones con testimonios verificados.',
    url: 'https://opinafy.com/casos-de-exito',
    type: 'website',
    siteName: 'Opinafy',
    locale: 'es_ES',
    images: [{ url: '/og.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Casos de Éxito de Opinafy',
    description: 'Historias de clientes que crecieron con testimonios verificados.',
    images: ['/og.png'],
  },
}

const platformStats = [
  { value: '100+', label: 'Plantillas de widget' },
  { value: '7', label: 'Layouts disponibles' },
  { value: '30+', label: 'Plantillas de mini sitio' },
  { value: '160+', label: 'Industrias cubiertas' },
]

export default function CasosDeExitoPage() {
  const jsonLdWebPage = webPageSchema({
    name: 'Casos de Éxito - Opinafy',
    url: 'https://opinafy.com/casos-de-exito',
    description: 'Descubre como empresas reales aumentaron sus conversiones con testimonios verificados de Opinafy.',
  })
  const jsonLdBreadcrumb = breadcrumbSchema([
    { name: 'Inicio', url: 'https://opinafy.com' },
    { name: 'Casos de Éxito', url: 'https://opinafy.com/casos-de-exito' },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />

      <Navbar />

      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-b from-indigo-50 to-white">
          <div className="mx-auto max-w-4xl px-4 pt-16 pb-12 text-center sm:px-6 lg:px-8">
            <nav className="mb-6 text-sm text-gray-500">
              <Link href="/" className="hover:text-indigo-600">Inicio</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900">Casos de Éxito</span>
            </nav>

            <span className="inline-block rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-semibold text-indigo-700 mb-6">
              Próximamente
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Próximamente: Casos de Éxito
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 leading-relaxed">
              Estamos recopilando los primeros casos de éxito de nuestros clientes. Pronto
              compartiremos historias reales de negocios que han transformado su reputación
              online con Opinafy.
            </p>
          </div>
        </section>

        {/* What Opinafy Offers */}
        <section className="mx-auto max-w-5xl px-4 pb-12 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-gray-900 mb-8">
            Lo que ofrecemos a nuestros clientes
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {platformStats.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-gray-200 bg-gray-50 p-6 text-center">
                <p className="text-3xl font-extrabold text-indigo-600">{stat.value}</p>
                <p className="mt-2 text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900">Testimonios verificados</h3>
              <p className="mt-2 text-sm text-gray-600">
                Recopila testimonios escritos, en video y audio con verificacion de identidad para
                generar confianza real en tus visitantes.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900">Widgets embebibles</h3>
              <p className="mt-2 text-sm text-gray-600">
                Muestra tus testimonios en cualquier web con widgets personalizables en 7 layouts
                diferentes: carousel, grid, masonry, lista y mas.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900">Mini sitio publico</h3>
              <p className="mt-2 text-sm text-gray-600">
                Tu propia pagina publica de testimonios, perfecta para compartir en redes sociales,
                propuestas comerciales y firmas de email.
              </p>
            </div>
          </div>
        </section>

        {/* CTAs */}
        <section className="bg-gradient-to-r from-indigo-600 to-purple-700">
          <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-white">
              ¿Quieres ser uno de nuestros primeros casos de éxito?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-indigo-200">
              Empieza gratis y transforma la reputación online de tu negocio con testimonios
              verificados. Sin tarjeta de credito.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/registro"
                className="inline-flex items-center rounded-xl bg-white px-8 py-4 text-lg font-bold text-indigo-700 shadow-lg transition-all hover:bg-gray-50 hover:shadow-xl"
              >
                Crear cuenta gratis
              </Link>
            </div>

            <div className="mt-8 border-t border-white/20 pt-8">
              <p className="text-indigo-200">
                ¿Ya eres usuario de Opinafy? Contactanos para compartir tu historia.
              </p>
              <Link
                href="/contacto"
                className="mt-4 inline-flex items-center rounded-xl border-2 border-white/30 px-6 py-3 text-base font-bold text-white transition-all hover:bg-white/10"
              >
                Contactar con nosotros
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
