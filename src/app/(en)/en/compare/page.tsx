import type { Metadata } from 'next'
import Link from 'next/link'
import { webPageSchema, breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Testimonial Tool Comparisons 2026',
  description:
    'Compare Opinafy with the best testimonial tools on the market. Detailed analysis, pricing, and features to help you choose the best option.',
  keywords: [
    'best testimonial tools 2026',
    'testimonial comparison',
    'testimonial.to alternative',
    'senja alternative',
    'social proof tools',
    'testimonial platform',
    'opinafy comparison',
  ],
  alternates: {
    canonical: 'https://opinafy.com/en/compare',
    languages: {
      'es': 'https://opinafy.com/comparar',
      'en': 'https://opinafy.com/en/compare',
      'x-default': 'https://opinafy.com/comparar',
    },
  },
  openGraph: {
    title: 'Testimonial Tool Comparisons 2026',
    description:
      'Compare Opinafy with the best testimonial tools. Detailed and honest analysis.',
    url: 'https://opinafy.com/en/compare',
    type: 'website',
    siteName: 'Opinafy',
    locale: 'en_US',
    images: [{ url: '/og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Testimonial Tool Comparisons 2026',
    description:
      'Compare Opinafy with the best testimonial tools. Detailed and honest analysis.',
    images: ['/og.jpg'],
  },
}

const comparisons = [
  {
    slug: 'opinafy-vs-testimonial-to',
    title: 'Opinafy vs Testimonial.to',
    description:
      'Full comparison between Opinafy and Testimonial.to. Features, pricing, languages, and support head to head.',
    badge: 'Popular',
  },
  {
    slug: 'opinafy-vs-senja',
    title: 'Opinafy vs Senja',
    description:
      'Discover the differences between Opinafy and Senja. Integrations, video testimonials, verification, and pricing compared.',
    badge: 'New',
  },
  {
    slug: 'best-testimonial-tools',
    title: '7 Best Testimonial Tools in 2026',
    description:
      'Complete ranking of the best testimonial and review platforms. Opinafy, Testimonial.to, Senja, Famewall, TrustPilot, and more.',
    badge: 'Guide',
  },
]

export default function ComparePage() {
  const pageJsonLd = webPageSchema({
    name: 'Testimonial Tool Comparisons 2026',
    url: 'https://opinafy.com/en/compare',
    description:
      'Compare Opinafy with the best testimonial tools on the market. Detailed analysis, pricing, and features.',
    lang: 'en',
  })

  const breadcrumbJsonLd = breadcrumbSchema([
    { name: 'Home', url: 'https://opinafy.com/en' },
    { name: 'Comparisons', url: 'https://opinafy.com/en/compare' },
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

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li>
              <Link href="/en" className="hover:text-indigo-600">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="font-medium text-gray-900">Comparisons</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Testimonial Tool Comparisons 2026
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We analyze the leading testimonial platforms on the market so you can choose the one
            that best fits your business. Honest comparisons with real data and no fine print.
          </p>
        </div>

        {/* Editorial Content */}
        <div className="mx-auto mt-12 max-w-3xl text-gray-600">
          <h2 className="text-xl font-bold text-gray-900">How we conduct our comparisons</h2>
          <p className="mt-4 leading-relaxed">
            Each comparison is created by testing the tools in real scenarios: we create projects,
            add testimonials, customize widgets, and integrate the code into test websites.
            We evaluate each platform based on six key criteria:
            <strong> features</strong> (widget types, testimonial formats, customization),
            <strong> ease of use</strong> (learning curve, dashboard UX),
            <strong> performance</strong> (widget load speed, script weight),
            <strong> pricing</strong> (value for money, free plan limits),
            <strong> language support</strong> (interface language, documentation, customer service),
            and <strong>integrations</strong> available.
          </p>
          <p className="mt-4 leading-relaxed">
            Unlike other rankings, our comparisons are transparent: we show both the strengths
            and limitations of each tool, including Opinafy. We update comparisons periodically
            to reflect pricing changes and new features. Our goal is to help you make an informed
            decision, not to convince you that one tool is better than another without data to back it up.
          </p>

          {/* Mini Summary Table */}
          <div className="mt-8 overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="px-4 py-3 font-semibold text-gray-900">Tool</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">Multilingual</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">Free plan</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">From</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="bg-indigo-50/50">
                  <td className="px-4 py-2.5 font-medium text-indigo-700">Opinafy</td>
                  <td className="px-4 py-2.5 text-green-600">Yes</td>
                  <td className="px-4 py-2.5 text-green-600">Yes</td>
                  <td className="px-4 py-2.5">&euro;0/mo</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-gray-900">Testimonial.to</td>
                  <td className="px-4 py-2.5 text-yellow-500">English only</td>
                  <td className="px-4 py-2.5 text-green-600">Yes</td>
                  <td className="px-4 py-2.5">$20/mo</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-gray-900">Senja</td>
                  <td className="px-4 py-2.5 text-yellow-500">English only</td>
                  <td className="px-4 py-2.5 text-green-600">Yes</td>
                  <td className="px-4 py-2.5">$29/mo</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Comparison Cards */}
        <div className="mx-auto mt-16 grid max-w-4xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {comparisons.map((comparison) => (
            <Link
              key={comparison.slug}
              href={`/en/compare/${comparison.slug}`}
              className="group relative flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:border-indigo-300 hover:shadow-md"
            >
              <span className="mb-4 inline-flex w-fit rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                {comparison.badge}
              </span>
              <h2 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600">
                {comparison.title}
              </h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600">
                {comparison.description}
              </p>
              <span className="mt-6 inline-flex items-center text-sm font-semibold text-indigo-600">
                Read comparison
                <svg
                  className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mx-auto mt-20 max-w-2xl rounded-2xl bg-indigo-50 p-8 text-center sm:p-12">
          <h2 className="text-2xl font-bold text-gray-900">
            Try Opinafy free and decide for yourself
          </h2>
          <p className="mt-4 text-gray-600">
            No credit card required. Set up your first project in less than 2 minutes.
          </p>
          <Link
            href="/en/pricing"
            className="mt-6 inline-flex h-12 items-center rounded-lg bg-indigo-600 px-8 text-sm font-semibold text-white transition-colors hover:bg-indigo-700"
          >
            Create free account
          </Link>
        </div>
      </div>
    </>
  )
}
