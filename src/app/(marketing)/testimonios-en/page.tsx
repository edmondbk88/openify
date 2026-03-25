import type { Metadata } from 'next'
import Link from 'next/link'
import { cities, topIndustrySlugs } from '@/lib/cities-data'
import { collectionPageSchema, breadcrumbSchema } from '@/lib/schema'
import { CitySearch } from '@/components/landing/city-search'

export const metadata: Metadata = {
  title: 'Testimonios por Ciudad | Opinafy',
  description:
    'Encuentra soluciones de testimonios adaptadas a tu ciudad. Opinafy ayuda a negocios locales en más de 20 ciudades a recopilar y mostrar opiniones de clientes.',
  keywords: [
    'testimonios por ciudad',
    'testimonios negocios locales',
    'opiniones clientes ciudad',
    'prueba social local',
    'testimonios empresas locales',
  ],
  alternates: {
    canonical: 'https://opinafy.com/testimonios-en',
  },
  openGraph: {
    title: 'Testimonios por Ciudad | Opinafy',
    description:
      'Encuentra soluciones de testimonios adaptadas a tu ciudad. Más de 20 ciudades disponibles.',
    url: 'https://opinafy.com/testimonios-en',
    type: 'website',
    locale: 'es_ES',
    siteName: 'Opinafy',
    images: [{ url: '/og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Testimonios por Ciudad | Opinafy',
    description:
      'Soluciones de testimonios para negocios locales en más de 20 ciudades.',
    images: ['/og.jpg'],
  },
}

export default function TestimoniosPorCiudadPage() {
  const pageJsonLd = collectionPageSchema({
    name: 'Testimonios por Ciudad',
    url: 'https://opinafy.com/testimonios-en',
    description:
      'Directorio de ciudades con soluciones de testimonios para negocios locales.',
  })

  const breadcrumbJsonLd = breadcrumbSchema([
    { name: 'Inicio', url: 'https://opinafy.com' },
    { name: 'Testimonios por Ciudad', url: 'https://opinafy.com/testimonios-en' },
  ])

  // Group cities by country
  const citiesByCountry: Record<string, typeof cities> = {}
  for (const city of cities) {
    if (!citiesByCountry[city.country]) {
      citiesByCountry[city.country] = []
    }
    citiesByCountry[city.country].push(city)
  }

  const industriesCount = topIndustrySlugs.length

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
              <span className="text-gray-900 font-medium">Testimonios por Ciudad</span>
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-b from-indigo-50 to-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Testimonios por Ciudad
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Descubre cómo Opinafy ayuda a negocios locales en {cities.length} ciudades a
            recopilar, gestionar y mostrar testimonios de clientes que generan confianza y
            aumentan las conversiones.
          </p>
        </div>
      </section>

      {/* Search */}
      <section className="py-8">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <CitySearch cities={cities} />
        </div>
      </section>

      {/* Cities by Country */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {Object.entries(citiesByCountry).map(([country, countryCities]) => (
            <div key={country} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{country}</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {countryCities.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/testimonios-en/${city.slug}`}
                    className="group flex flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:border-indigo-300 hover:shadow-md"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600">
                      {city.name}
                    </h3>
                    {city.region && (
                      <p className="mt-1 text-sm text-gray-500">{city.region}</p>
                    )}
                    <p className="mt-2 text-sm text-indigo-600 font-medium">
                      {industriesCount} industrias disponibles
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-600 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Empieza a recopilar testimonios en tu ciudad
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-indigo-100">
            Crea tu cuenta gratuita en menos de 2 minutos y muestra la confianza que
            generan tus clientes locales.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/registro"
              className="inline-flex items-center rounded-lg bg-white px-6 py-3 text-base font-semibold text-indigo-600 shadow-sm transition-colors hover:bg-indigo-50"
            >
              Crear cuenta gratis
            </Link>
            <Link
              href="/precios"
              className="inline-flex items-center rounded-lg border border-indigo-400 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-indigo-700"
            >
              Ver planes y precios
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
