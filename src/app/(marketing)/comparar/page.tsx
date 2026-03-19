import type { Metadata } from 'next'
import Link from 'next/link'
import { webPageSchema, breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Comparativas de herramientas de testimonios 2026',
  description:
    'Compara Opinafy con las mejores herramientas de testimonios del mercado. Análisis detallados, precios y funcionalidades para elegir la mejor opción.',
  keywords: [
    'mejores herramientas testimonios 2026',
    'comparativa testimonios',
    'alternativa testimonial.to',
    'alternativa senja',
    'herramientas prueba social',
    'plataforma testimonios español',
    'opinafy comparativa',
  ],
  alternates: {
    canonical: 'https://opinafy.com/comparar',
  },
  openGraph: {
    title: 'Comparativas de herramientas de testimonios 2026',
    description:
      'Compara Opinafy con las mejores herramientas de testimonios. Análisis detallados y honestos.',
    url: 'https://opinafy.com/comparar',
  },
}

const comparisons = [
  {
    slug: 'opinafy-vs-testimonial-to',
    title: 'Opinafy vs Testimonial.to',
    description:
      'Comparativa completa entre Opinafy y Testimonial.to. Funcionalidades, precios, idiomas y soporte frente a frente.',
    badge: 'Popular',
  },
  {
    slug: 'opinafy-vs-senja',
    title: 'Opinafy vs Senja',
    description:
      'Descubre las diferencias entre Opinafy y Senja. Integraciones, vídeo testimonios, verificación y precios comparados.',
    badge: 'Nuevo',
  },
  {
    slug: 'mejores-herramientas-testimonios',
    title: 'Las 7 mejores herramientas de testimonios en 2026',
    description:
      'Ranking completo de las mejores plataformas de testimonios y reseñas. Opinafy, Testimonial.to, Senja, Famewall, TrustPilot y más.',
    badge: 'Guía',
  },
]

export default function CompararPage() {
  const pageJsonLd = webPageSchema({
    name: 'Comparativas de herramientas de testimonios 2026',
    url: 'https://opinafy.com/comparar',
    description:
      'Compara Opinafy con las mejores herramientas de testimonios del mercado. Análisis detallados, precios y funcionalidades.',
  })

  const breadcrumbJsonLd = breadcrumbSchema([
    { name: 'Inicio', url: 'https://opinafy.com' },
    { name: 'Comparativas', url: 'https://opinafy.com/comparar' },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li>
              <Link href="/" className="hover:text-indigo-600">
                Inicio
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="font-medium text-gray-900">Comparativas</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Comparativa de herramientas de testimonios 2026
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Analizamos las principales plataformas de testimonios del mercado para que puedas elegir
            la que mejor se adapte a tu negocio. Comparativas honestas, con datos reales y sin letra
            pequeña.
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="mx-auto mt-16 grid max-w-4xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {comparisons.map((comparison) => (
            <Link
              key={comparison.slug}
              href={`/comparar/${comparison.slug}`}
              className="group relative flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:border-indigo-300 hover:shadow-md"
            >
              <span className="mb-4 inline-flex w-fit rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                {comparison.badge}
              </span>
              <h2 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600">
                {comparison.title}
              </h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600">
                {comparison.description}
              </p>
              <span className="mt-6 inline-flex items-center text-sm font-semibold text-indigo-600">
                Leer comparativa
                <svg
                  className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mx-auto mt-20 max-w-2xl rounded-2xl bg-indigo-50 p-8 text-center sm:p-12">
          <h2 className="text-2xl font-bold text-gray-900">
            Prueba Opinafy gratis y decide por ti mismo
          </h2>
          <p className="mt-4 text-gray-600">
            Sin tarjeta de credito. Configura tu primer proyecto en menos de 2 minutos.
          </p>
          <Link
            href="/registro"
            className="mt-6 inline-flex h-12 items-center rounded-lg bg-indigo-600 px-8 text-sm font-semibold text-white transition-colors hover:bg-indigo-700"
          >
            Crear cuenta gratis
          </Link>
        </div>
      </div>
    </>
  )
}
