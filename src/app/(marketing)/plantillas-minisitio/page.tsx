import type { Metadata } from 'next'
import Link from 'next/link'
import { miniSiteTemplates, MINISITE_CATEGORIES } from '@/lib/minisite-templates'
import { collectionPageSchema, breadcrumbSchema } from '@/lib/schema'
import { MiniSiteGallery } from './gallery'

export const metadata: Metadata = {
  title: 'Plantillas de Mini Sitio por Profesión | 30 Diseños - Opinafy',
  description:
    'Explora 30 plantillas de mini sitio de testimonios organizadas por profesión. Salud, legal, creativos, educación y más. Crea tu página de testimonios profesional con Opinafy.',
  keywords: [
    'plantilla página testimonios',
    'mini sitio profesional testimonios',
    'página testimonios por profesión',
    'plantilla mini sitio testimonios',
    'página pública testimonios',
    'testimonios verificados página',
    'mini sitio reseñas clientes',
    'plantilla página opiniones',
    'página testimonios profesional',
    'sitio web testimonios',
  ],
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://opinafy.com/plantillas-minisitio',
    siteName: 'Opinafy',
    title: '30 Plantillas de Mini Sitio de Testimonios por Profesión - Opinafy',
    description:
      'Descubre 30 diseños profesionales para tu página pública de testimonios. Organizadas por profesión: salud, legal, creativos, educación y más.',
    images: [
      {
        url: '/og.jpg',
        width: 1200,
        height: 630,
        alt: 'Plantillas de Mini Sitio Opinafy',
      },
    ],
  },
  alternates: {
    canonical: 'https://opinafy.com/plantillas-minisitio',
    languages: {
      'es': 'https://opinafy.com/plantillas-minisitio',
      'en': 'https://opinafy.com/en/minisite-templates',
      'x-default': 'https://opinafy.com/plantillas-minisitio',
    },
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PlantillasMinisitioPage() {
  const collectionJsonLd = collectionPageSchema({
    name: '30 Plantillas de Mini Sitio de Testimonios - Opinafy',
    url: 'https://opinafy.com/plantillas-minisitio',
    description:
      'Explora 30 plantillas de mini sitio de testimonios organizadas por profesión. Crea tu página de testimonios profesional.',
  })

  const breadcrumbJsonLd = breadcrumbSchema([
    { name: 'Inicio', url: 'https://opinafy.com' },
    { name: 'Plantillas Mini Sitio', url: 'https://opinafy.com/plantillas-minisitio' },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-indigo-50 via-white to-white px-4 pb-12 pt-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-block rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-semibold text-indigo-700">
            Galería de Mini Sitios
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Plantillas de Mini Sitio{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              por Profesión
            </span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 sm:text-xl">
            Elige entre 30 diseños profesionales para tu página pública de testimonios.
            Cada plantilla está pensada para una profesión o sector específico.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm text-gray-500">
            <span className="flex items-center gap-1.5">
              <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              9 categorías profesionales
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              5 tipos de layout
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              100% personalizables
            </span>
          </div>
        </div>
      </section>

      {/* Introductory Content */}
      <section className="bg-white px-4 pb-8 pt-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="prose prose-gray mx-auto max-w-none text-gray-600">
            <h2 className="text-2xl font-bold text-gray-900">
              Tu página de testimonios profesional en minutos
            </h2>
            <p className="mt-4 leading-relaxed">
              Un mini sitio de testimonios es tu página pública donde tus clientes potenciales pueden ver
              todos tus testimonios verificados en un solo lugar. Es perfecto para compartir en redes sociales,
              email, tarjetas de visita y cualquier canal donde quieras generar confianza.
            </p>
            <p className="mt-4 leading-relaxed">
              Hemos creado 30 plantillas organizadas por <strong>profesión y sector</strong>, para que encuentres
              exactamente el estilo que transmite la identidad de tu negocio. Desde <strong>médicos y dentistas</strong> hasta
              <strong> abogados y contables</strong>, pasando por <strong>fotógrafos, diseñadores, coaches</strong> y
              muchos más.
            </p>
            <p className="mt-4 leading-relaxed">
              Cada plantilla incluye configuraciones optimizadas de colores, tipografía, estilo de tarjetas,
              layout y cabecera. Puedes personalizar todos los aspectos desde tu panel de Opinafy sin escribir
              una sola línea de código. Además, tu mini sitio se adapta automáticamente a dispositivos móviles
              y se carga de forma rápida.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <MiniSiteGallery
            templates={miniSiteTemplates}
            categories={[...MINISITE_CATEGORIES]}
          />
        </div>
      </section>

      {/* Cross-link banner */}
      <section className="border-t border-gray-100 bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-lg font-medium text-gray-700">
            ¿Buscas plantillas para widgets?
          </p>
          <Link
            href="/plantillas"
            className="mt-3 inline-flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-700 transition-colors"
          >
            Ver plantillas de widget
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-gray-100 bg-gradient-to-b from-indigo-50 to-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            ¿Te gusta alguna plantilla?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Regístrate gratis y crea tu mini sitio de testimonios en minutos.
            Sin tarjeta de crédito, sin compromiso.
          </p>
          <a
            href="/registro"
            className="mt-8 inline-flex h-12 items-center rounded-lg bg-indigo-600 px-8 text-base font-semibold text-white transition-colors hover:bg-indigo-700"
          >
            Empezar Gratis
          </a>
        </div>
      </section>
    </>
  )
}
