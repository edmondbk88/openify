import type { Metadata } from 'next'
import Link from 'next/link'
import { industriesEn } from '@/lib/industry-data-en'
import { IndustrySearchEn } from '@/components/landing/industry-search-en'

export const metadata: Metadata = {
  title: 'Testimonials by Industry',
  description:
    'Discover how Opinafy helps every industry collect and display customer testimonials. Tailored solutions for over 80 different industries.',
  keywords: [
    'testimonials for businesses',
    'testimonials by industry',
    'customer reviews by sector',
    'social proof by industry',
    'industry testimonials platform',
    'sector-specific testimonials',
  ],
  alternates: {
    canonical: 'https://opinafy.com/en/testimonials-for',
    languages: {
      'es': 'https://opinafy.com/testimonios-para',
      'en': 'https://opinafy.com/en/testimonials-for',
      'x-default': 'https://opinafy.com/testimonios-para',
    },
  },
  openGraph: {
    title: 'Testimonials by Industry',
    description:
      'Discover how Opinafy helps every industry collect and display customer testimonials.',
    url: 'https://opinafy.com/en/testimonials-for',
    type: 'website',
    locale: 'en_US',
    siteName: 'Opinafy',
    images: [{ url: '/og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Testimonials by Industry',
    description:
      'Tailored testimonial solutions for over 80 different industries.',
    images: ['/og.jpg'],
  },
}

export default function TestimonialsByIndustryPage() {
  const pageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Testimonials by Industry',
    url: 'https://opinafy.com/en/testimonials-for',
    description:
      'Discover how Opinafy helps every industry collect and display customer testimonials.',
    isPartOf: {
      '@type': 'WebSite',
      name: 'Opinafy',
      url: 'https://opinafy.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Opinafy',
      url: 'https://opinafy.com',
    },
    inLanguage: 'en',
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://opinafy.com/en' },
      { '@type': 'ListItem', position: 2, name: 'Testimonials by Industry', item: 'https://opinafy.com/en/testimonials-for' },
    ],
  }

  const industryItems = industriesEn.map((i) => ({
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
              <Link href="/en" className="hover:text-indigo-600">
                Home
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-gray-300">&gt;</span>
              <span className="text-gray-900 font-medium">Testimonials by Industry</span>
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-b from-indigo-50 to-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Testimonials by Industry
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Every industry has its own challenges and needs. Discover how Opinafy helps
            your sector collect, manage, and display testimonials that build trust and
            increase sales.
          </p>
        </div>
      </section>

      {/* Editorial Content */}
      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-gray mx-auto max-w-none text-gray-600">
            <h2 className="text-2xl font-bold text-gray-900">
              Why industry-specific testimonials make all the difference
            </h2>
            <p className="mt-4 leading-relaxed">
              Not all testimonials work the same across every sector. A restaurant needs to
              convey the dining experience and service quality, while a dental clinic must
              build trust around treatments that involve patient health. An online fashion
              store needs customers to talk about fabric quality and shipping speed, and a
              professional coach needs testimonials reflecting personal transformation.
              Generic testimonials do not connect; specific ones convert.
            </p>
            <p className="mt-4 leading-relaxed">
              According to industry data, <strong>92% of consumers</strong> read online reviews
              before making a purchase or hiring a service, and businesses that display
              relevant testimonials on their websites experience an average increase of{' '}
              <strong>34% in conversion rates</strong>. Moreover, industry-specific testimonials
              generate up to <strong>58% more trust</strong> than generic reviews, as potential
              customers identify with situations and needs similar to their own.
            </p>
            <p className="mt-4 leading-relaxed">
              Every industry faces its own challenges when collecting and displaying reviews.
              Service professionals need forms tailored to the client experience, local
              businesses benefit from physical QR codes, and B2B companies require testimonials
              that highlight measurable results and ROI. Opinafy adapts to each of these
              scenarios with templates, forms, and widgets designed for the specific needs of
              over 80 different industries.
            </p>
            <p className="mt-4 leading-relaxed">
              Below you will find a guide for each sector with specific tips, testimonial
              examples, and best practices for collecting reviews that truly drive your
              business forward. Select your industry to discover how Opinafy can help you.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Grid with Search */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <IndustrySearchEn industries={industryItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-600 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to collect testimonials for your industry?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-indigo-100">
            Start for free today and discover how testimonials can transform your business.
          </p>
          <Link
            href="/en/register"
            className="mt-8 inline-flex items-center rounded-lg bg-white px-6 py-3 text-base font-semibold text-indigo-600 shadow-sm transition-colors hover:bg-indigo-50"
          >
            Create free account
          </Link>
        </div>
      </section>
    </>
  )
}
