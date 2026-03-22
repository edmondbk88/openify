import type { Metadata } from 'next'
import Link from 'next/link'
import { webPageSchema, breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Opinafy vs Testimonial.to: Full Comparison 2026',
  description:
    'Detailed comparison between Opinafy and Testimonial.to. Features, pricing, language support, and verification head to head to help you choose the best testimonial platform.',
  keywords: [
    'opinafy vs testimonial.to',
    'testimonial.to alternative',
    'testimonial platform comparison',
    'best testimonial tool 2026',
    'testimonial.to competitor',
    'testimonial collection platform',
  ],
  alternates: {
    canonical: 'https://opinafy.com/en/compare/opinafy-vs-testimonial-to',
    languages: {
      es: 'https://opinafy.com/comparar/opinafy-vs-testimonial-to',
      en: 'https://opinafy.com/en/compare/opinafy-vs-testimonial-to',
    },
  },
  openGraph: {
    title: 'Opinafy vs Testimonial.to: Full Comparison 2026',
    description:
      'Discover the key differences between Opinafy and Testimonial.to. Honest analysis of features, pricing, and support.',
    url: 'https://opinafy.com/en/compare/opinafy-vs-testimonial-to',
  },
}

function CheckIcon() {
  return (
    <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}

function CrossIcon() {
  return (
    <svg className="h-5 w-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

function PartialIcon() {
  return (
    <svg className="h-5 w-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
    </svg>
  )
}

const featureComparison = [
  { feature: 'Multilingual interface', opinafy: 'check', competitor: 'cross' },
  { feature: 'Spanish-native support', opinafy: 'check', competitor: 'cross' },
  { feature: 'Pricing in EUR', opinafy: 'check', competitor: 'cross' },
  { feature: 'Email verification', opinafy: 'check', competitor: 'check' },
  { feature: 'Company verification', opinafy: 'check', competitor: 'cross' },
  { feature: 'Embeddable widget', opinafy: 'check', competitor: 'check' },
  { feature: 'Video testimonials', opinafy: 'check', competitor: 'check' },
  { feature: 'Customizable forms', opinafy: 'check', competitor: 'check' },
  { feature: 'Testimonial wall', opinafy: 'check', competitor: 'check' },
  { feature: 'Import testimonials', opinafy: 'check', competitor: 'check' },
  { feature: 'Schema markup SEO', opinafy: 'check', competitor: 'partial' },
  { feature: 'Free plan', opinafy: 'check', competitor: 'check' },
  { feature: 'Zapier/Webhooks', opinafy: 'partial', competitor: 'check' },
  { feature: 'Slack integration', opinafy: 'partial', competitor: 'check' },
  { feature: 'Public API', opinafy: 'check', competitor: 'check' },
  { feature: 'GDPR compliance', opinafy: 'check', competitor: 'check' },
  { feature: 'Multiple widget layouts', opinafy: 'check', competitor: 'check' },
  { feature: 'Public testimonial page', opinafy: 'check', competitor: 'check' },
]

function StatusIcon({ status }: { status: string }) {
  if (status === 'check') return <CheckIcon />
  if (status === 'cross') return <CrossIcon />
  return <PartialIcon />
}

const faqs = [
  {
    q: 'Can I migrate my testimonials from Testimonial.to to Opinafy?',
    a: 'Yes, you can migrate your existing testimonials to Opinafy. The process is straightforward: export your testimonials from Testimonial.to and add them manually from the Opinafy dashboard. For large volumes, our support team can assist with the migration.',
  },
  {
    q: 'Does Testimonial.to have a multilingual interface?',
    a: 'No, Testimonial.to is available only in English. Both the admin panel and collection forms are in English, which can be a barrier for businesses targeting non-English-speaking markets.',
  },
  {
    q: 'Which is cheaper, Opinafy or Testimonial.to?',
    a: 'Opinafy offers more competitive pricing. The Pro plan costs 9 EUR/month, while Testimonial.to starts at $20 USD/month. Opinafy also includes a generous free plan with up to 10 testimonials.',
  },
  {
    q: 'Does Testimonial.to offer company verification?',
    a: 'No, Testimonial.to does not offer a company verification system. Opinafy lets you verify that a testimonial comes from a real company, adding an extra layer of credibility and trust for website visitors.',
  },
  {
    q: 'Which has better integrations?',
    a: 'Testimonial.to currently offers more native integrations with third-party tools like Slack, Zapier, and CMS platforms. Opinafy is actively expanding its integration ecosystem and already offers embeddable widgets, a public API, and webhooks.',
  },
  {
    q: 'Is Opinafy a good alternative to Testimonial.to?',
    a: 'Opinafy is an excellent alternative to Testimonial.to, especially if you need multilingual support, company verification, competitive EUR pricing, and a platform designed to serve global markets including Spanish-speaking businesses.',
  },
]

export default function OpinafyVsTestimonialToPage() {
  const pageJsonLd = webPageSchema({
    name: 'Opinafy vs Testimonial.to: Full Comparison 2026',
    url: 'https://opinafy.com/en/compare/opinafy-vs-testimonial-to',
    description:
      'Detailed comparison between Opinafy and Testimonial.to. Features, pricing, language support, and verification head to head.',
  })

  const breadcrumbJsonLd = breadcrumbSchema([
    { name: 'Home', url: 'https://opinafy.com/en' },
    { name: 'Comparisons', url: 'https://opinafy.com/en/compare' },
    { name: 'Opinafy vs Testimonial.to', url: 'https://opinafy.com/en/compare/opinafy-vs-testimonial-to' },
  ])

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link href="/en" className="hover:text-indigo-600">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/en/compare" className="hover:text-indigo-600">Comparisons</Link></li>
            <li aria-hidden="true">/</li>
            <li className="font-medium text-gray-900">Opinafy vs Testimonial.to</li>
          </ol>
        </nav>

        {/* Header */}
        <header>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Opinafy vs Testimonial.to: Full Comparison 2026
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Testimonial.to is one of the most popular testimonial platforms in the English-speaking market.
            But is it the best option for your business? In this comparison, we analyze both tools
            point by point so you can make the best decision.
          </p>
        </header>

        {/* Summary */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900">Quick summary</h2>
          <p className="mt-4 text-gray-600 leading-7">
            <strong>Testimonial.to</strong> is an established tool founded in 2021 that lets you collect and display
            customer testimonials through embeddable widgets. It has a broad integration ecosystem and a global user base.
            However, the entire platform is in English only, prices are in US dollars, and it does not offer
            company verification.
          </p>
          <p className="mt-4 text-gray-600 leading-7">
            <strong>Opinafy</strong> is a testimonial platform designed to serve businesses globally, with native
            Spanish and English support. It offers competitive EUR pricing, company verification, and a clear focus
            on testimonial authenticity. It is ideal for freelancers, SMBs, and agencies operating across markets.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-6">
              <h3 className="font-semibold text-indigo-900">Choose Opinafy if...</h3>
              <ul className="mt-3 space-y-2 text-sm text-indigo-800">
                <li>You need multilingual support (Spanish + English)</li>
                <li>You want pricing in EUR without currency conversion fees</li>
                <li>You need company verification for extra credibility</li>
                <li>You prefer support in your language</li>
                <li>You want the best value for money</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
              <h3 className="font-semibold text-gray-900">Choose Testimonial.to if...</h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                <li>Your market is exclusively English-speaking</li>
                <li>You need advanced integrations with many tools</li>
                <li>You have been using it for years and do not want to migrate</li>
                <li>You prefer a more mature ecosystem</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Detailed Comparison */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900">Feature-by-feature comparison</h2>
          <p className="mt-4 text-gray-600">Detailed analysis of the features each platform offers.</p>

          <div className="mt-8 overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="px-4 py-3 font-semibold text-gray-900">Feature</th>
                  <th className="px-4 py-3 text-center font-semibold text-indigo-700">Opinafy</th>
                  <th className="px-4 py-3 text-center font-semibold text-gray-700">Testimonial.to</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {featureComparison.map((row) => (
                  <tr key={row.feature}>
                    <td className="px-4 py-3 text-gray-900">{row.feature}</td>
                    <td className="px-4 py-3"><div className="flex justify-center"><StatusIcon status={row.opinafy} /></div></td>
                    <td className="px-4 py-3"><div className="flex justify-center"><StatusIcon status={row.competitor} /></div></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Pricing */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900">Pricing comparison</h2>
          <div className="mt-8 overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="px-4 py-3 font-semibold text-gray-900">Plan</th>
                  <th className="px-4 py-3 text-center font-semibold text-indigo-700">Opinafy</th>
                  <th className="px-4 py-3 text-center font-semibold text-gray-700">Testimonial.to</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 text-gray-900">Free</td>
                  <td className="px-4 py-3 text-center">&euro;0 (10 testimonials)</td>
                  <td className="px-4 py-3 text-center">$0 (limited)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-gray-900">Starter / Pro</td>
                  <td className="px-4 py-3 text-center">&euro;9/mo</td>
                  <td className="px-4 py-3 text-center">$20/mo</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-gray-900">Business / Premium</td>
                  <td className="px-4 py-3 text-center">&euro;19/mo</td>
                  <td className="px-4 py-3 text-center">$50/mo</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-gray-500">Prices as of March 2026. Check each platform for current pricing.</p>
        </section>

        {/* Detailed content */}
        <section className="mt-16 prose prose-gray max-w-none">
          <h2>Language and localization</h2>
          <p>One of the most significant differences between Opinafy and Testimonial.to is language support. Testimonial.to is built exclusively in English, from the admin dashboard to the collection forms that your customers interact with. This means that if your customers prefer to communicate in Spanish, French, German, or any other language, the collection experience may feel foreign and reduce response rates.</p>
          <p>Opinafy is designed as a multilingual platform from the ground up. The admin interface, collection forms, email templates, and support are all available in both Spanish and English, with more languages planned. This native multilingual approach eliminates language barriers between your business and your customers, resulting in higher testimonial collection rates and more natural, authentic testimonials written in your customers&apos; preferred language.</p>

          <h2>Company verification: a unique differentiator</h2>
          <p>Opinafy offers a feature that Testimonial.to does not: company verification. This feature allows you to verify that a testimonial comes from a real, verified company, adding a visible verification badge to the testimonial display. In an era of increasing skepticism about online reviews, this verification layer provides an additional trust signal that can meaningfully increase the conversion impact of your testimonials.</p>
          <p>Company verification works by cross-referencing the testimonial provider&apos;s company information against business databases. When verified, the testimonial displays a verification badge that visitors can click to learn more about the verification process. This transparency builds trust not just in the individual testimonial but in your entire testimonial collection.</p>

          <h2>Widget performance and technology</h2>
          <p>Both platforms offer embeddable widgets for displaying testimonials on your website. Opinafy&apos;s widget is built with Shadow DOM technology, weighing approximately twenty-five kilobytes, which ensures complete CSS isolation from your website&apos;s styles and minimal impact on page load speed. Testimonial.to&apos;s widget is also lightweight but does not use Shadow DOM, which can occasionally cause styling conflicts with certain website themes and frameworks.</p>
          <p>Both platforms offer multiple widget layouts including carousels, grids, masonry, and list displays. Both support customization of colors, fonts, and spacing to match your brand identity. Opinafy additionally includes automatic Schema.org markup in its widgets for SEO benefits.</p>

          <h2>Integration ecosystem</h2>
          <p>This is an area where Testimonial.to currently holds an advantage. With more years in the market, Testimonial.to has built a broader ecosystem of native integrations, including connections to Slack, Zapier, Notion, and various CMS platforms. These integrations make it easy to incorporate testimonials into existing workflows and tools.</p>
          <p>Opinafy offers embeddable widgets, a public API, and webhook support, which cover the most essential integration needs. The platform is actively expanding its integration ecosystem, with new connections being added regularly. For businesses that need a specific integration that Opinafy does not yet offer, the API and webhook support often provide a viable alternative through automation tools like Zapier or Make.</p>

          <h2>Pricing and value</h2>
          <p>Opinafy offers significantly more competitive pricing, especially for businesses operating in euro-denominated markets. The Pro plan at nine euros per month includes unlimited testimonials, multiple projects, and all premium features. Testimonial.to&apos;s comparable plan starts at twenty US dollars per month, which, after currency conversion and potential bank fees, can cost European businesses twenty-five euros or more per month.</p>
          <p>Both platforms offer free plans, but Opinafy&apos;s free plan is more generous, allowing up to ten testimonials and one project with no time limit. This makes it an excellent starting point for businesses that want to evaluate the platform before committing to a paid plan.</p>
        </section>

        {/* FAQ */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900">Frequently asked questions</h2>
          <div className="mt-8 space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-xl border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900">{faq.q}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="mt-16 rounded-2xl bg-gradient-to-br from-indigo-600 to-indigo-700 p-8 text-center text-white sm:p-12">
          <h2 className="text-2xl font-bold sm:text-3xl">Try Opinafy free and decide for yourself</h2>
          <p className="mx-auto mt-4 max-w-xl text-indigo-100">
            No credit card required. Set up your first project in less than 2 minutes and see why businesses
            choose Opinafy over Testimonial.to.
          </p>
          <Link
            href="/en/pricing"
            className="mt-6 inline-block rounded-lg bg-white px-8 py-3 text-sm font-semibold text-indigo-600 shadow-sm transition-colors hover:bg-indigo-50"
          >
            Create free account
          </Link>
        </div>
      </article>
    </>
  )
}
