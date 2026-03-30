import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { cities, topIndustrySlugs } from '@/lib/cities-data'
import { industries } from '@/lib/industry-data'
import { collectionPageSchema, breadcrumbSchema } from '@/lib/schema'

interface CityPageProps {
  params: Promise<{ city: string }>
}

const topIndustries = industries.filter((i) => topIndustrySlugs.includes(i.slug as typeof topIndustrySlugs[number]))

export async function generateStaticParams() {
  return cities.map((city) => ({
    city: city.slug,
  }))
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const { city: citySlug } = await params
  const city = cities.find((c) => c.slug === citySlug)

  if (!city) {
    return { title: 'Ciudad no encontrada' }
  }

  const title = `Testimonios para negocios en ${city.name} | Opinafy`
  const description = `Recopila y muestra testimonios de clientes para tu negocio en ${city.name}. Soluciones adaptadas a ${topIndustrySlugs.length} industrias locales. Widgets personalizables y prueba social.`

  return {
    title,
    description,
    keywords: [
      `testimonios ${city.name}`,
      `opiniones clientes ${city.name}`,
      `prueba social ${city.name}`,
      `testimonios negocios ${city.name}`,
      `reseñas clientes ${city.name}`,
    ],
    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'es_ES',
      url: `https://opinafy.com/testimonios-en/${city.slug}`,
      siteName: 'Opinafy',
      images: [{ url: '/og.png', width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: `https://opinafy.com/testimonios-en/${city.slug}`,
    },
  }
}

export default async function CityPage({ params }: CityPageProps) {
  const { city: citySlug } = await params
  const city = cities.find((c) => c.slug === citySlug)

  if (!city) {
    notFound()
  }

  const pageJsonLd = collectionPageSchema({
    name: `Testimonios para negocios en ${city.name}`,
    url: `https://opinafy.com/testimonios-en/${city.slug}`,
    description: `Soluciones de testimonios para negocios locales en ${city.name}.`,
  })

  const breadcrumbJsonLd = breadcrumbSchema([
    { name: 'Inicio', url: 'https://opinafy.com' },
    { name: 'Testimonios por Ciudad', url: 'https://opinafy.com/testimonios-en' },
    { name: city.name, url: `https://opinafy.com/testimonios-en/${city.slug}` },
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
              <Link href="/testimonios-en" className="hover:text-indigo-600">
                Testimonios por Ciudad
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-gray-300">&gt;</span>
              <span className="text-gray-900 font-medium">{city.name}</span>
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-b from-indigo-50 to-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Testimonios para negocios en {city.name}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Opinafy ayuda a negocios en {city.name}{city.región ? `, ${city.región}` : ''}{' '}
            a recopilar y mostrar testimonios de clientes que generan confianza y aumentan
            las ventas. Elige tu industria para descubrir cómo.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Industrias en {city.name}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {topIndustries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/testimonios-en/${city.slug}/${industry.slug}`}
                className="group flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:border-indigo-300 hover:shadow-md"
              >
                <span className="text-3xl flex-shrink-0">{industry.icon}</span>
                <div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-indigo-600">
                    {industry.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Testimonios en {city.name}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why testimonials in this city */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            ¿Por qué los negocios en {city.name} necesitan testimonios?
          </h2>
          <div className="prose prose-lg prose-indigo mx-auto">
            <p>
              En {city.name}, {city.country}, la competencia entre negocios locales es
              intensa. Los consumidores buscan opiniones reales antes de tomar decisiones de
              compra, y los testimonios de clientes satisfechos son la herramienta más
              poderosa para generar confianza.
            </p>
            <p>
              Con Opinafy, los negocios en {city.name} pueden recopilar testimonios de
              forma sencilla, mostrarlos en su web con widgets personalizables y convertir
              la satisfacción de sus clientes en nuevas ventas.
            </p>
            <ul>
              <li>
                <strong>Confianza local:</strong> Los testimonios de clientes de{' '}
                {city.name} generan más credibilidad que cualquier anuncio publicitario
              </li>
              <li>
                <strong>SEO local:</strong> Las opiniones mejoran tu posicionamiento en
                búsquedas como &ldquo;mejor [negocio] en {city.name}&rdquo;
              </li>
              <li>
                <strong>Decisión de compra:</strong> El 92% de los consumidores lee
                opiniones online antes de visitar un negocio local
              </li>
              <li>
                <strong>Diferenciación:</strong> Destaca frente a tu competencia en{' '}
                {city.name} mostrando prueba social auténtica
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-600 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Empieza a recopilar testimonios en {city.name}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-indigo-100">
            Crea tu cuenta gratuita en menos de 2 minutos y muestra la confianza que
            generan tus clientes en {city.name}.
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
