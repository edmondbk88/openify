import type { Metadata } from 'next'
import Link from 'next/link'
import { industries } from '@/lib/industry-data'
import { collectionPageSchema, breadcrumbSchema } from '@/lib/schema'
import { IndustrySearch } from '@/components/landing/industry-search'

export const metadata: Metadata = {
  title: 'Testimonios por Industria | Opinafy',
  description:
    'Descubre cómo Opinafy ayuda a cada sector a recopilar y mostrar testimonios de clientes. Soluciones adaptadas a más de 80 industrias diferentes.',
  keywords: [
    'testimonios para empresas',
    'testimonios por sector',
    'opiniones de clientes por industria',
    'prueba social por sector',
    'testimonios clientes industria',
    'plataforma testimonios sectorial',
  ],
  alternates: {
    canonical: 'https://opinafy.com/testimonios-para',
  },
  openGraph: {
    title: 'Testimonios por Industria | Opinafy',
    description:
      'Descubre cómo Opinafy ayuda a cada sector a recopilar y mostrar testimonios de clientes.',
    url: 'https://opinafy.com/testimonios-para',
    type: 'website',
    locale: 'es_ES',
    siteName: 'Opinafy',
    images: [{ url: '/og.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Testimonios por Industria | Opinafy',
    description:
      'Soluciones de testimonios adaptadas a más de 80 industrias diferentes.',
    images: ['/og.png'],
  },
}

export default function TestimoniosPorIndustriaPage() {
  const pageJsonLd = collectionPageSchema({
    name: 'Testimonios por Industria',
    url: 'https://opinafy.com/testimonios-para',
    description:
      'Descubre cómo Opinafy ayuda a cada sector a recopilar y mostrar testimonios de clientes.',
  })

  const breadcrumbJsonLd = breadcrumbSchema([
    { name: 'Inicio', url: 'https://opinafy.com' },
    { name: 'Testimonios por Industria', url: 'https://opinafy.com/testimonios-para' },
  ])

  const industryItems = industries.map((i) => ({
    slug: i.slug,
    name: i.name,
    icon: i.icon,
    metaDescription: i.metaDescription,
  }))

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

      {/* Breadcrumbs */}
      <nav className="border-b border-gray-200 bg-gray-50" aria-label="Breadcrumb">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li>
              <Link href="/" className="hover:text-indigo-600">
                Inicio
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-gray-300">&gt;</span>
              <span className="text-gray-900 font-medium">Testimonios por Industria</span>
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-b from-indigo-50 to-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Testimonios por Industria
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Cada sector tiene sus propios desafíos y necesidades. Descubre cómo Opinafy ayuda
            a tu industria a recopilar, gestionar y mostrar testimonios que generan confianza y
            aumentan las ventas.
          </p>
        </div>
      </section>

      {/* Editorial Content */}
      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-gray mx-auto max-w-none text-gray-600">
            <h2 className="text-2xl font-bold text-gray-900">
              Por que los testimonios especificos de tu sector marcan la diferencia
            </h2>
            <p className="mt-4 leading-relaxed">
              No todos los testimonios funcionan igual en todos los sectores. Un restaurante necesita
              transmitir la experiencia gastronomica y la calidad del servicio, mientras que una
              clinica dental debe generar confianza en tratamientos que implican la salud del
              paciente. Un ecommerce de moda necesita que sus clientes hablen de la calidad de las
              prendas y la rapidez del envio, y un coach profesional necesita testimonios que
              reflejen la transformacion personal de sus clientes. Los testimonios genericos no
              conectan; los especificos convierten.
            </p>
            <p className="mt-4 leading-relaxed">
              Segun datos del sector, el <strong>92% de los consumidores</strong> lee opiniones
              online antes de realizar una compra o contratar un servicio, y los negocios que
              muestran testimonios relevantes en sus paginas web experimentan un incremento medio
              del <strong>34% en sus tasas de conversion</strong>. Ademas, los testimonios
              especificos del sector generan hasta un <strong>58% mas de confianza</strong> que las
              resenas genericas, ya que los potenciales clientes se identifican con situaciones y
              necesidades similares a las suyas.
            </p>
            <p className="mt-4 leading-relaxed">
              Cada industria tiene sus propios desafios a la hora de recopilar y mostrar opiniones.
              Los profesionales de servicios necesitan formularios adaptados a la experiencia del
              cliente; los negocios locales se benefician de codigos QR fisicos; y las empresas
              B2B requieren testimonios que destaquen resultados medibles y ROI. Opinafy se adapta
              a cada uno de estos escenarios con plantillas, formularios y widgets disenados
              pensando en las particularidades de mas de 80 industrias diferentes.
            </p>
            <p className="mt-4 leading-relaxed">
              A continuacion encontraras una guia para cada sector con consejos especificos,
              ejemplos de testimonios y las mejores practicas para recopilar opiniones que
              realmente impulsen tu negocio. Selecciona tu industria para descubrir como Opinafy
              puede ayudarte.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Grid with Search */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <IndustrySearch industries={industryItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-600 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            ¿Listo para recopilar testimonios en tu sector?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-indigo-100">
            Empieza gratis hoy y descubre cómo los testimonios pueden transformar tu negocio.
          </p>
          <Link
            href="/registro"
            className="mt-8 inline-flex items-center rounded-lg bg-white px-6 py-3 text-base font-semibold text-indigo-600 shadow-sm transition-colors hover:bg-indigo-50"
          >
            Crear cuenta gratis
          </Link>
        </div>
      </section>
    </>
  )
}
