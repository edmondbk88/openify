import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { cities, topIndustrySlugs } from '@/lib/cities-data'
import { industries } from '@/lib/industry-data'
import { webPageSchema, breadcrumbSchema } from '@/lib/schema'
import { getCityDescription, generateCityIndustryFAQs } from '@/lib/city-industry-content'

interface CityIndustryPageProps {
  params: Promise<{ city: string; industry: string }>
}

const topIndustries = industries.filter((i) =>
  topIndustrySlugs.includes(i.slug as typeof topIndustrySlugs[number])
)

export async function generateStaticParams() {
  const params: { city: string; industry: string }[] = []
  for (const city of cities) {
    for (const slug of topIndustrySlugs) {
      params.push({ city: city.slug, industry: slug })
    }
  }
  return params
}

export async function generateMetadata({ params }: CityIndustryPageProps): Promise<Metadata> {
  const { city: citySlug, industry: industrySlug } = await params
  const city = cities.find((c) => c.slug === citySlug)
  const industry = topIndustries.find((i) => i.slug === industrySlug)

  if (!city || !industry) {
    return { title: 'Pagina no encontrada' }
  }

  const title = `Testimonios para ${industry.name} en ${city.name} | Opinafy`
  const description = `Recopila y muestra testimonios de clientes para ${industry.name.toLowerCase()} en ${city.name}. Aumenta la confianza y las conversiones con opiniones reales de tus clientes.`

  return {
    title,
    description,
    keywords: [
      `testimonios ${industry.name.toLowerCase()} ${city.name}`,
      `opiniones ${industry.name.toLowerCase()} ${city.name}`,
      `reseñas ${industry.name.toLowerCase()} ${city.name}`,
      `${industry.name.toLowerCase()} ${city.name} opiniones`,
      `prueba social ${industry.name.toLowerCase()} ${city.name}`,
      `testimonios para ${industry.name.toLowerCase()} en ${city.name}`,
    ],
    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'es_ES',
      url: `https://opinafy.com/testimonios-en/${city.slug}/${industry.slug}`,
      siteName: 'Opinafy',
      images: [{ url: '/og.png', width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: `https://opinafy.com/testimonios-en/${city.slug}/${industry.slug}`,
    },
  }
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`h-5 w-5 ${i < rating ? 'text-yellow-400' : 'text-gray-200'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default async function CityIndustryPage({ params }: CityIndustryPageProps) {
  const { city: citySlug, industry: industrySlug } = await params
  const city = cities.find((c) => c.slug === citySlug)
  const industry = topIndustries.find((i) => i.slug === industrySlug)

  if (!city || !industry) {
    notFound()
  }

  const pageTitle = `Testimonios para ${industry.name} en ${city.name}`

  const pageJsonLd = webPageSchema({
    name: pageTitle,
    url: `https://opinafy.com/testimonios-en/${city.slug}/${industry.slug}`,
    description: `Recopila y muestra testimonios de clientes para ${industry.name.toLowerCase()} en ${city.name}.`,
  })

  const breadcrumbJsonLd = breadcrumbSchema([
    { name: 'Inicio', url: 'https://opinafy.com' },
    { name: 'Testimonios por Industria', url: 'https://opinafy.com/testimonios-para' },
    {
      name: industry.name,
      url: `https://opinafy.com/testimonios-para/${industry.slug}`,
    },
    {
      name: city.name,
      url: `https://opinafy.com/testimonios-en/${city.slug}/${industry.slug}`,
    },
  ])

  const cityDescription = getCityDescription(city.slug)
  const cityFAQs = generateCityIndustryFAQs(city.slug, city.name, industry.slug, industry.name)

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: cityFAQs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `${industry.name} en ${city.name}`,
    description: `Testimonios de clientes para ${industry.name.toLowerCase()} en ${city.name}, ${city.country}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: city.name,
      ...(city.region ? { addressRegion: city.region } : {}),
      addressCountry: city.country,
    },
    areaServed: {
      '@type': 'City',
      name: city.name,
    },
  }

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Breadcrumbs */}
      <nav className="border-b border-gray-200 bg-gray-50" aria-label="Breadcrumb">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
            <li>
              <Link href="/" className="hover:text-indigo-600">
                Inicio
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-gray-300">&gt;</span>
              <Link href="/testimonios-para" className="hover:text-indigo-600">
                Testimonios por Industria
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-gray-300">&gt;</span>
              <Link
                href={`/testimonios-para/${industry.slug}`}
                className="hover:text-indigo-600"
              >
                {industry.name}
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
          <div className="text-6xl mb-6">{industry.icon}</div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            {pageTitle}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            {industry.heroSubtitle} En {city.name}
            {city.region ? `, ${city.region}` : ''}, {city.country}, los clientes buscan
            opiniones reales antes de elegir. Muestra la confianza que genera tu negocio.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/registro"
              className="inline-flex items-center rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-indigo-700"
            >
              {industry.ctaText}
            </Link>
            <Link
              href="/precios"
              className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-semibold text-gray-700 shadow-sm transition-colors hover:bg-gray-50"
            >
              Ver precios
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">
            ¿Por que los testimonios son clave para {industry.name.toLowerCase()} en{' '}
            {city.name}?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-600">
            Ventajas especificas de usar testimonios para tu negocio de{' '}
            {industry.name.toLowerCase()} en {city.name}.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {industry.benefits.map((benefit, index) => (
              <div
                key={index}
                className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600 font-bold">
                  {index + 1}
                </div>
                <p className="mt-4 text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* City-specific content */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-indigo mx-auto">
            <h2>
              Testimonios para {industry.name} en {city.name}: guia completa
            </h2>
            <p>
              Si tienes un negocio de {industry.name.toLowerCase()} en {city.name},{' '}
              {city.country}, sabes lo importante que es la reputacion online. Los clientes
              locales en {city.name} confian en las opiniones de otros clientes antes de
              tomar decisiones, y tener testimonios autenticos puede marcar la diferencia
              entre ganar o perder un cliente.
            </p>
            {cityDescription && (
              <p>
                {city.name}, {cityDescription}, ofrece un entorno unico para los negocios de{' '}
                {industry.name.toLowerCase()}. La dinamica del mercado local hace que la
                confianza digital sea un factor decisivo para captar y retener clientes.
                Mostrar testimonios reales de clientes en {city.name} te posiciona como una
                opcion fiable frente a la competencia local.
              </p>
            )}
            <h3>¿Como funciona Opinafy para {industry.name.toLowerCase()}?</h3>
            <ol>
              <li>
                <strong>Recopila testimonios facilmente:</strong> Crea formularios
                personalizados y compartelos con tus clientes en {city.name} via enlace,
                QR, email o WhatsApp.
              </li>
              <li>
                <strong>Gestiona y modera:</strong> Revisa y aprueba cada testimonio
                antes de publicarlo. Tu tienes el control total.
              </li>
              <li>
                <strong>Muestra con estilo:</strong> Elige entre mas de 60 widgets
                personalizables para mostrar los testimonios en tu web.
              </li>
              <li>
                <strong>Mejora tu SEO local:</strong> Los testimonios generan contenido
                fresco con palabras clave naturales sobre {industry.name.toLowerCase()} en{' '}
                {city.name}.
              </li>
            </ol>
            <h3>Ventaja competitiva en {city.name}</h3>
            <p>
              En un mercado competitivo como {city.name}, los testimonios de clientes
              reales te ayudan a destacar. Mientras otros negocios de{' '}
              {industry.name.toLowerCase()} dependen solo de redes sociales, tu puedes
              mostrar prueba social directamente en tu web, donde los clientes toman la
              decision final.
            </p>
          </div>
        </div>
      </section>

      {/* Example Testimonials */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">
            Asi se verian los testimonios de {industry.name.toLowerCase()} en {city.name}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-600">
            Ejemplos de como se mostrarian los testimonios de tus clientes con Opinafy.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {industry.testimonialExamples.map((testimonial, index) => (
              <div
                key={index}
                className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <StarRating rating={testimonial.rating} />
                <p className="mt-4 flex-1 text-gray-700 italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="mt-6 border-t border-gray-100 pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-gray-500 italic">
            * Los testimonios mostrados son ejemplos ilustrativos de como se verian los
            testimonios reales de tus clientes.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl mb-12">
            Preguntas frecuentes sobre testimonios para {industry.name.toLowerCase()} en{' '}
            {city.name}
          </h2>
          <div className="space-y-8">
            {cityFAQs.map((faq, index) => (
              <div key={index} className="rounded-xl border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Link to industry main page */}
          <div className="mb-12 text-center">
            <p className="text-gray-600 mb-4">
              Descubre todo sobre testimonios para esta industria:
            </p>
            <Link
              href={`/testimonios-para/${industry.slug}`}
              className="inline-flex items-center rounded-lg border-2 border-indigo-600 bg-white px-6 py-3 text-base font-semibold text-indigo-600 shadow-sm transition-colors hover:bg-indigo-50"
            >
              Ver pagina completa de {industry.name}
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {industry.name} en otras ciudades
          </h2>
          <div className="flex flex-wrap gap-3">
            {cities
              .filter((c) => c.slug !== city.slug)
              .map((otherCity) => (
                <Link
                  key={otherCity.slug}
                  href={`/testimonios-en/${otherCity.slug}/${industry.slug}`}
                  className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700 hover:border-indigo-300 hover:text-indigo-600 transition-colors"
                >
                  {industry.name} en {otherCity.name}
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Other industries in this city */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Otras industrias en {city.name}
          </h2>
          <div className="flex flex-wrap gap-3">
            {topIndustries
              .filter((i) => i.slug !== industry.slug)
              .map((otherIndustry) => (
                <Link
                  key={otherIndustry.slug}
                  href={`/testimonios-en/${city.slug}/${otherIndustry.slug}`}
                  className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700 hover:border-indigo-300 hover:text-indigo-600 transition-colors"
                >
                  {otherIndustry.name} en {city.name}
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-600 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            {industry.ctaText} en {city.name}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-indigo-100">
            Crea tu cuenta gratuita en menos de 2 minutos y empieza a recopilar
            testimonios de tus clientes en {city.name} con Opinafy.
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
