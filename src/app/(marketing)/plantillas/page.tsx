import type { Metadata } from 'next'
import { widgetTemplates, TEMPLATE_CATEGORIES } from '@/lib/widget-templates'
import { PlantillasGallery } from './gallery'
import { collectionPageSchema, breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Plantillas de Testimonios | 50 Disenos Listos para Usar - Opinafy',
  description:
    'Explora 50 plantillas de widgets de testimonios listas para usar. Estilos minimalistas, corporativos, coloridos, oscuros y mas. Personaliza tus testimonios con Opinafy.',
  keywords: [
    'plantillas testimonios',
    'templates widget testimonios',
    'disenos testimonios web',
    'widgets testimonios plantillas',
    'testimonios diseno personalizado',
    'plantillas resenas clientes',
    'widget opiniones plantilla',
    'plantilla carrusel testimonios',
    'testimonios grid plantilla',
    'muro testimonios diseno',
  ],
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://opinafy.com/plantillas',
    siteName: 'Opinafy',
    title: '50 Plantillas de Testimonios Listas para Usar - Opinafy',
    description:
      'Descubre 50 disenos profesionales para mostrar testimonios en tu web. Minimalistas, corporativos, coloridos, oscuros y mas.',
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
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PlantillasPage() {
  const collectionJsonLd = collectionPageSchema({
    name: 'Plantillas de Testimonios - Opinafy',
    url: 'https://opinafy.com/plantillas',
    description:
      'Explora 50 plantillas de widgets de testimonios listas para usar. Estilos minimalistas, corporativos, coloridos, oscuros y mas.',
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
            50 Plantillas de Testimonios{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Listas para Usar
            </span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 sm:text-xl">
            Elige entre 50 disenos profesionales para mostrar los testimonios de tus clientes.
            Cada plantilla es totalmente personalizable y se adapta a cualquier sitio web.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm text-gray-500">
            <span className="flex items-center gap-1.5">
              <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              8 categorias de diseno
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
              hemos creado una colección de 50 plantillas profesionales organizadas en 8 categorías de diseño, para que
              encuentres exactamente el estilo que se adapta a la identidad visual de tu marca.
            </p>
            <p className="mt-4 leading-relaxed">
              Nuestras categorías incluyen estilos <strong>minimalistas</strong> para webs limpias y modernas,
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
            templates={widgetTemplates}
            categories={[...TEMPLATE_CATEGORIES]}
          />
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
            Sin tarjeta de credito, sin compromiso.
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
