import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { industries } from '@/lib/industry-data'
import { webPageSchema, breadcrumbSchema } from '@/lib/schema'

interface IndustryPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return industries.map((industry) => ({
    slug: industry.slug,
  }))
}

export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
  const { slug } = await params
  const industry = industries.find((i) => i.slug === slug)

  if (!industry) {
    return { title: 'Industria no encontrada' }
  }

  return {
    title: industry.title,
    description: industry.metaDescription,
    keywords: industry.keywords,
    openGraph: {
      title: industry.title,
      description: industry.metaDescription,
      type: 'website',
      locale: 'es_ES',
      url: `https://opinafy.com/testimonios-para/${industry.slug}`,
      siteName: 'Opinafy',
      images: [
        {
          url: '/og.png',
          width: 1200,
          height: 630,
          alt: industry.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: industry.title,
      description: industry.metaDescription,
    },
    alternates: {
      canonical: `https://opinafy.com/testimonios-para/${industry.slug}`,
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

export default async function IndustryPage({ params }: IndustryPageProps) {
  const { slug } = await params
  const industry = industries.find((i) => i.slug === slug)

  if (!industry) {
    notFound()
  }

  const pageJsonLd = webPageSchema({
    name: industry.title,
    url: `https://opinafy.com/testimonios-para/${industry.slug}`,
    description: industry.metaDescription,
  })

  const breadcrumbJsonLd = breadcrumbSchema([
    { name: 'Inicio', url: 'https://opinafy.com' },
    { name: 'Testimonios por Industria', url: 'https://opinafy.com/testimonios-para' },
    {
      name: industry.name,
      url: `https://opinafy.com/testimonios-para/${industry.slug}`,
    },
  ])

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: industry.faqItems.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Breadcrumbs */}
      <nav className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-sm text-gray-500">
          <li>
            <Link href="/" className="hover:text-indigo-600">
              Inicio
            </Link>
          </li>
          <li>
            <span className="mx-1">/</span>
            <Link href="/testimonios-para" className="hover:text-indigo-600">
              Testimonios por Industria
            </Link>
          </li>
          <li>
            <span className="mx-1">/</span>
            <span className="text-gray-900 font-medium">{industry.name}</span>
          </li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-b from-indigo-50 to-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-6">{industry.icon}</div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            {industry.heroTitle}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            {industry.heroSubtitle}
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
            ¿Por qué los testimonios son clave para {industry.name.toLowerCase()}?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-600">
            Descubre las ventajas específicas de usar testimonios en tu sector.
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

      {/* Content */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div
            className="prose prose-lg prose-indigo mx-auto prose-headings:font-bold prose-a:text-indigo-600 prose-li:text-gray-700"
            dangerouslySetInnerHTML={{ __html: industry.content }}
          />
        </div>
      </section>

      {/* Example Testimonials */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">
            Lo que dicen los profesionales de {industry.name.toLowerCase()}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-600">
            Profesionales de tu sector ya confían en Opinafy para gestionar sus testimonios.
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
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-gray-400 italic">
            * Los testimonios mostrados son ejemplos ilustrativos de como se verian los testimonios reales de tus clientes.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">
            Preguntas frecuentes
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-600">
            Resolvemos las dudas más comunes sobre testimonios para {industry.name.toLowerCase()}.
          </p>
          <div className="mt-12 space-y-4">
            {industry.faqItems.map((faq, index) => (
              <details
                key={index}
                className="group rounded-xl border border-gray-200 bg-white shadow-sm"
              >
                <summary className="flex cursor-pointer items-center justify-between px-6 py-4 text-left font-semibold text-gray-900 hover:text-indigo-600">
                  <span>{faq.question}</span>
                  <svg
                    className="ml-4 h-5 w-5 flex-shrink-0 text-gray-400 transition-transform group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </summary>
                <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-600 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            {industry.ctaText}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-indigo-100">
            Crea tu cuenta gratuita en menos de 2 minutos y empieza a recopilar testimonios
            de tus clientes con Opinafy.
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
