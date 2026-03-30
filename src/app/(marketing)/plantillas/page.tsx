import type { Metadata } from 'next'
import Link from 'next/link'
import { widgetTemplates, TEMPLATE_CATEGORIES, toPreviewData } from '@/lib/widget-templates'
import { PlantillasGallery } from './gallery'
import { collectionPageSchema, breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Plantillas de Testimonios | 100 Diseños Listos para Usar - Opinafy',
  description:
    'Explora 100 plantillas de widgets de testimonios listas para usar. Estilos mínimalistas, corporativos, coloridos, oscuros y más. Personaliza tus testimonios con Opinafy.',
  keywords: [
    'plantillas testimonios',
    'templates widget testimonios',
    'diseños testimonios web',
    'widgets testimonios plantillas',
    'testimonios diseño personalizado',
    'plantillas reseñas clientes',
    'widget opiniones plantilla',
    'plantilla carrusel testimonios',
    'testimonios grid plantilla',
    'muro testimonios diseño',
  ],
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://opinafy.com/plantillas',
    siteName: 'Opinafy',
    title: '100 Plantillas de Testimonios Listas para Usar - Opinafy',
    description:
      'Descubre 100 diseños profesionales para mostrar testimonios en tu web. Minimalistas, corporativos, coloridos, oscuros y más.',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Plantillas de Testimonios Opinafy',
      },
    ],
  },
  alternates: {
    canonical: 'https://opinafy.com/plantillas',
    languages: {
      'es': 'https://opinafy.com/plantillas',
      'en': 'https://opinafy.com/en/templates',
      'x-default': 'https://opinafy.com/plantillas',
    },
  },
  robots: {
    index: true,
    follow: true,
  },
}

const INITIAL_TEMPLATES = 24

export default function PlantillasPage() {
  const collectionJsonLd = collectionPageSchema({
    name: '100 Plantillas de Testimonios - Opinafy',
    url: 'https://opinafy.com/plantillas',
    description:
      'Explora 100 plantillas de widgets de testimonios listas para usar. Estilos mínimalistas, corporativos, coloridos, oscuros y más.',
  })

  const breadcrumbJsonLd = breadcrumbSchema([
    { name: 'Inicio', url: 'https://opinafy.com' },
    { name: 'Plantillas', url: 'https://opinafy.com/plantillas' },
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
            Galeria de Plantillas
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            100 Plantillas de Testimonios{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Listas para Usar
            </span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 sm:text-xl">
            Elige entre 100 diseños profesionales para mostrar los testimonios de tus clientes.
            Cada plantilla es totalmente personalizable y se adapta a cualquier sitio web.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm text-gray-500">
            <span className="flex items-center gap-1.5">
              <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              8 categorías de diseño
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
              Encuentra la plantilla perfecta para tus testimonios
            </h2>
            <p className="mt-4 leading-relaxed">
              La forma en que presentas los testimonios de tus clientes puede marcar una gran diferencia en tus
              conversiones. Un testimonio bien diseñado transmite confianza, profesionalidad y autenticidad. Por eso
              hemos creado una colección de 100 plantillas profesionales organizadas en 15 categorías de diseño, para que
              encuentres exactamente el estilo que se adapta a la identidad visual de tu marca.
            </p>
            <p className="mt-4 leading-relaxed">
              Nuestras categorías incluyen estilos <strong>mínimalistas</strong> para webs limpias y modernas,
              <strong> corporativos</strong> para transmitir seriedad y profesionalidad, <strong>coloridos</strong> para
              marcas vibrantes y creativas, y <strong>oscuros</strong> para sitios con diseño dark mode. También
              encontrarás plantillas con estilo <strong>glassmorphism</strong>, degradados y diseños con bordes
              redondeados que aportan calidez y cercanía.
            </p>
            <p className="mt-4 leading-relaxed">
              Para elegir el layout adecuado, piensa en cuántos testimonios quieres mostrar simultáneamente.
              El <strong>carrusel</strong> es ideal si prefieres destacar un testimonio a la vez con transiciones
              animadas. La <strong>cuadrícula</strong> funciona bien cuando tienes varios testimonios y quieres mostrar
              entre 3 y 6 a la vez de forma organizada. El <strong>muro</strong> estilo masonry es perfecto para crear
              una sección de social proof visualmente impactante con testimonios de diferentes longitudes. Los layouts
              de <strong>lista</strong> y <strong>destacado</strong> ofrecen opciones adicionales para adaptarse a
              cualquier sección de tu web, ya sea una página de producto, una landing page o tu página de inicio.
            </p>
            <p className="mt-4 leading-relaxed">
              Todas las plantillas son totalmente personalizables: puedes ajustar colores, tipografías, bordes,
              sombras y espaciado desde el editor visual de Opinafy, sin necesidad de escribir código. Además,
              cada widget se adapta automáticamente a dispositivos móviles y se carga de forma asíncrona para no
              afectar el rendimiento de tu sitio.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <PlantillasGallery
            templates={toPreviewData(widgetTemplates.slice(0, INITIAL_TEMPLATES))}
            categories={[...TEMPLATE_CATEGORIES]}
            totalCount={widgetTemplates.length}
          />
        </div>
      </section>

      {/* Mini Site Cross-link */}
      <section className="relative overflow-hidden border-t border-indigo-200/50 bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-700 px-4 py-20 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-white/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-purple-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-5xl text-center">
          <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-indigo-100">
            Mini Sitio Opinafy
          </span>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Buscas una página completa de testimonios?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-indigo-100">
            Con el mini sitio de Opinafy tienes tu propia página profesional para recopilar y mostrar
            testimonios verificados. Perfecto si no tienes web o quieres una landing dedicada.
            Elige entre 30 plantillas diseñadas por profesión.
          </p>

          {/* Template thumbnails */}
          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-3 gap-4 sm:gap-6">
            {[
              { label: 'Salud', gradient: 'from-sky-400 to-blue-500', icon: 'Consultorio' },
              { label: 'Creativos', gradient: 'from-pink-400 to-rose-500', icon: 'Estudio' },
              { label: 'Negocios', gradient: 'from-emerald-400 to-teal-500', icon: 'Empresa' },
            ].map((t) => (
              <div key={t.label} className="group overflow-hidden rounded-xl bg-white/10 p-1 backdrop-blur-sm transition-all hover:bg-white/20">
                <div className={`flex aspect-[4/3] items-center justify-center rounded-lg bg-gradient-to-br ${t.gradient}`}>
                  <div className="text-center">
                    <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-lg font-bold text-white">
                      {t.icon[0]}
                    </div>
                    <p className="mt-2 text-xs font-semibold text-white/90">{t.icon}</p>
                  </div>
                </div>
                <p className="py-2 text-center text-xs font-medium text-indigo-100">{t.label}</p>
              </div>
            ))}
          </div>

          <Link
            href="/plantillas-minisitio"
            className="mt-10 inline-flex h-12 items-center rounded-lg bg-white px-8 text-base font-semibold text-indigo-700 shadow-lg transition-all hover:bg-indigo-50 hover:shadow-xl"
          >
            Ver 30 plantillas de mini sitio
            <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-gray-100 bg-gradient-to-b from-indigo-50 to-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Te gusta alguna plantilla?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Registrate gratis y empieza a usar cualquiera de estas plantillas en minutos.
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
