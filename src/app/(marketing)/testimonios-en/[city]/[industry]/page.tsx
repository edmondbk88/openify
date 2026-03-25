import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { cities, topIndustrySlugs } from '@/lib/cities-data'
import { industries } from '@/lib/industry-data'
import { webPageSchema, breadcrumbSchema } from '@/lib/schema'
import {
  getCityDescription,
  generateCityIndustryFAQs,
  getCityProfile,
  getIndustryInsight,
  getIndustryBlogLinks,
  getRelatedIndustries,
  getNearbyRelatedCities,
  formatPopulation,
  generateUniqueIntro,
  generateWhyTestimonialsMatter,
  getCityTier,
} from '@/lib/city-industry-content'

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
    return { title: 'Página no encontrada' }
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
  const industryLower = industry.name.toLowerCase()

  // Gather all unique data
  const cityProfile = getCityProfile(city.slug)
  const industryInsight = getIndustryInsight(industry.slug)
  const blogLinks = getIndustryBlogLinks(industry.slug)
  const relatedIndustrySlugs = getRelatedIndustries(industry.slug)
  const nearbyRelatedCitySlugs = getNearbyRelatedCities(city.slug)
  const cityTier = getCityTier(city.slug)
  const cityDescription = getCityDescription(city.slug)
  const cityFAQs = generateCityIndustryFAQs(city.slug, city.name, industry.slug, industry.name)
  const uniqueIntro = generateUniqueIntro(city.slug, city.name, city.country, industry.slug, industry.name)
  const whyBullets = generateWhyTestimonialsMatter(city.slug, city.name, industry.slug, industry.name)

  // Resolve related industries to full objects (3 related + up to 3 others = max 6)
  const relatedIndustryObjects = relatedIndustrySlugs
    .map((slug) => topIndustries.find((i) => i.slug === slug))
    .filter(Boolean) as typeof topIndustries

  // Add a few more industries for variety (seeded by city+industry for consistency)
  const relatedSet = new Set([industry.slug, ...relatedIndustrySlugs])
  const otherIndustries = topIndustries
    .filter((i) => !relatedSet.has(i.slug))
    .sort((a, b) => {
      // Deterministic shuffle based on city+industry slug
      const seedA = (citySlug + industrySlug + a.slug).split('').reduce((acc, c) => acc + c.charCodeAt(0), 0)
      const seedB = (citySlug + industrySlug + b.slug).split('').reduce((acc, c) => acc + c.charCodeAt(0), 0)
      return seedA - seedB
    })
    .slice(0, 3)
  const allRelatedIndustries = [...relatedIndustryObjects, ...otherIndustries]

  // Resolve nearby cities
  const nearbyCityObjects = nearbyRelatedCitySlugs
    .map((slug) => cities.find((c) => c.slug === slug))
    .filter(Boolean) as typeof cities

  const pageJsonLd = webPageSchema({
    name: pageTitle,
    url: `https://opinafy.com/testimonios-en/${city.slug}/${industry.slug}`,
    description: `Recopila y muestra testimonios de clientes para ${industryLower} en ${city.name}.`,
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

  const collectionJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `Testimonios para ${industry.name} en ${city.name}`,
    description: `Recopilación de testimonios de clientes para ${industryLower} en ${city.name}, ${city.country}`,
    url: `https://opinafy.com/testimonios-en/${city.slug}/${industry.slug}`,
    inLanguage: 'es',
    about: {
      '@type': 'Service',
      name: `Gestión de testimonios para ${industryLower}`,
      areaServed: {
        '@type': 'City',
        name: city.name,
      },
    },
  }

  // Tier label for display
  const tierLabel =
    cityTier === 'grande'
      ? 'Mercado grande y competitivo'
      : cityTier === 'mediana'
        ? 'Mercado en crecimiento'
        : 'Mercado local especializado'

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
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
          {/* City quick stats */}
          {cityProfile && (
            <div className="mt-8 flex flex-wrap justify-center gap-6">
              <div className="rounded-lg bg-white px-4 py-2 shadow-sm border border-gray-100">
                <span className="text-sm text-gray-500">Población</span>
                <p className="font-semibold text-gray-900">{formatPopulation(cityProfile.population)}</p>
              </div>
              <div className="rounded-lg bg-white px-4 py-2 shadow-sm border border-gray-100">
                <span className="text-sm text-gray-500">Tipo de mercado</span>
                <p className="font-semibold text-gray-900">{tierLabel}</p>
              </div>
              <div className="rounded-lg bg-white px-4 py-2 shadow-sm border border-gray-100">
                <span className="text-sm text-gray-500">Sectores clave</span>
                <p className="font-semibold text-gray-900">{cityProfile.keyIndustries.slice(0, 2).join(', ')}</p>
              </div>
            </div>
          )}
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

      {/* Unique intro + city economic context */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-indigo mx-auto">
            <h2>
              {industryLower.charAt(0).toUpperCase() + industryLower.slice(1)} en {city.name}: el papel de los testimonios en tu crecimiento
            </h2>
            <p>{uniqueIntro}</p>
            {cityDescription && (
              <p>
                {city.name}, {cityDescription}, ofrece un entorno singular para el sector de{' '}
                {industryLower}. Comprender esta dinámica local es clave para aprovechar al máximo
                la prueba social como herramienta de captación y fidelización de clientes.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Why testimonials matter - unique per city+industry */}
      {whyBullets.length > 0 && (
        <section className="bg-indigo-50 py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl mb-8">
              ¿Por qué los testimonios son decisivos para {industryLower} en {city.name}?
            </h2>
            <div className="space-y-6">
              {whyBullets.map((bullet, index) => (
                <div
                  key={index}
                  className="flex gap-4 rounded-xl bg-white p-6 shadow-sm border border-indigo-100"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 leading-relaxed">{bullet}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Statistics callout - industry specific metric */}
      {industryInsight && (
        <section className="py-12">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl bg-gradient-to-r from-indigo-600 to-indigo-700 p-8 text-center shadow-lg">
              <p className="text-lg text-indigo-100 font-medium mb-2">Dato clave para {industryLower}</p>
              <p className="text-xl text-white font-semibold leading-relaxed">
                {industryInsight.metrics}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Best practices - industry specific */}
      {industryInsight && (
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
              Mejores prácticas de testimonios para {industryLower}
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-center text-lg text-gray-600">
              Consejos específicos para maximizar el impacto de los testimonios en el sector de {industryLower} en {city.name}.
            </p>
            <div className="space-y-6">
              {industryInsight.bestPractices.map((practice, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-700 font-bold">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 leading-relaxed">{practice}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Industry challenges */}
            <div className="mt-12">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Retos específicos de {industryLower} con la reputación online
              </h3>
              <div className="space-y-4">
                {industryInsight.challenges.map((challenge, index) => (
                  <div key={index} className="flex gap-3">
                    <span className="shrink-0 text-amber-500 mt-1">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <p className="text-gray-600">{challenge}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* How Opinafy works - city-contextualized */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-indigo mx-auto">
            <h2>¿Cómo funciona Opinafy para {industryLower} en {city.name}?</h2>
            <ol>
              <li>
                <strong>Recopila testimonios fácilmente:</strong> Crea formularios
                personalizados y compártelos con tus clientes en {city.name} vía enlace,
                QR, email o WhatsApp.
              </li>
              <li>
                <strong>Gestiona y modera:</strong> Revisa y aprueba cada testimonio
                antes de publicarlo. Tú tienes el control total.
              </li>
              <li>
                <strong>Muestra con estilo:</strong> Elige entre más de 60 widgets
                personalizables para mostrar los testimonios en tu web.
              </li>
              <li>
                <strong>Mejora tu SEO local:</strong> Los testimonios generan contenido
                fresco con palabras clave naturales sobre {industryLower} en{' '}
                {city.name}.
              </li>
            </ol>
            <h3>Ventaja competitiva en {city.name}</h3>
            <p>
              {cityTier === 'grande'
                ? `En un mercado masivo como ${city.name}, los testimonios de clientes reales te ayudan a sobresalir entre la multitud. Mientras cientos de negocios de ${industryLower} dependen solo de redes sociales, tú puedes mostrar prueba social verificada directamente en tu web, donde los clientes toman la decisión final. Con ${cityProfile ? formatPopulation(cityProfile.population) + ' de potenciales clientes' : 'millones de consumidores'}, cada testimonio adicional amplifica tu alcance.`
                : cityTier === 'mediana'
                  ? `${city.name} es un mercado en crecimiento donde los negocios que invierten en reputación digital hoy serán los líderes de mañana. Tu negocio de ${industryLower} puede aprovechar el momento: la competencia aún no ha saturado el espacio de testimonios online, y posicionarte ahora te dará una ventaja difícil de replicar cuando el mercado madure.`
                  : `En ${city.name}, la cercanía y la confianza son valores fundamentales. Los testimonios digitales traducen el boca a boca local al mundo online, donde cada vez más residentes y visitantes buscan servicios de ${industryLower}. Al ser un mercado más compacto, cada testimonio positivo tiene un peso específico mayor y contribuye a consolidarte como la referencia de ${industryLower} en la zona.`}
            </p>
          </div>
        </div>
      </section>

      {/* Example Testimonials */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">
            Así se verían los testimonios de {industryLower} en {city.name}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-600">
            Ejemplos de cómo se mostrarían los testimonios de tus clientes con Opinafy.
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
            * Los testimonios mostrados son ejemplos ilustrativos de cómo se verían los
            testimonios reales de tus clientes.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl mb-12">
            Preguntas frecuentes sobre testimonios para {industryLower} en{' '}
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

      {/* Blog articles - industry specific */}
      {blogLinks.length > 0 && (
        <section className="bg-gray-50 py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Artículos relacionados con {industryLower}
            </h2>
            <p className="text-gray-600 mb-8">
              Profundiza en estrategias de testimonios específicas para {industryLower} con estos recursos de nuestro blog.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {blogLinks.map((link) => (
                <Link
                  key={link.slug}
                  href={`/blog/${link.slug}`}
                  className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:border-indigo-300 hover:shadow-md transition-all"
                >
                  <p className="font-semibold text-gray-900 hover:text-indigo-600">{link.title}</p>
                  <p className="mt-2 text-sm text-indigo-600">Leer artículo &rarr;</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related pages - curated links */}
      <section className="py-16 sm:py-24">
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
              Ver página completa de {industry.name}
            </Link>
          </div>

          {/* Related industries in same city - curated 6 */}
          {allRelatedIndustries.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Industrias relacionadas en {city.name}
              </h2>
              <p className="text-gray-600 mb-6">
                Si te interesa {industryLower}, también podrían interesarte estas industrias cercanas en {city.name}.
              </p>
              <div className="flex flex-wrap gap-3">
                {allRelatedIndustries.map((otherIndustry) => (
                  <Link
                    key={otherIndustry.slug}
                    href={`/testimonios-en/${city.slug}/${otherIndustry.slug}`}
                    className="rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700 hover:bg-indigo-100 transition-colors"
                  >
                    {otherIndustry.name} en {city.name}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Same industry in nearby/related cities - curated 2-3 */}
          {nearbyCityObjects.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {industry.name} en ciudades cercanas
              </h2>
              <p className="text-gray-600 mb-6">
                Explora cómo los testimonios impulsan a los negocios de {industryLower} en otras ciudades relacionadas con {city.name}.
              </p>
              <div className="flex flex-wrap gap-3">
                {nearbyCityObjects.map((otherCity) => (
                  <Link
                    key={otherCity.slug}
                    href={`/testimonios-en/${otherCity.slug}/${industry.slug}`}
                    className="rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-medium text-green-700 hover:bg-green-100 transition-colors"
                  >
                    {industry.name} en {otherCity.name}
                  </Link>
                ))}
              </div>
            </div>
          )}

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
