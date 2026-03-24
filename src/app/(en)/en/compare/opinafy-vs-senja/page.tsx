import type { Metadata } from 'next'
import Link from 'next/link'
import { webPageSchema, breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Opinafy vs Senja: Full Comparison 2026',
  description:
    'Detailed comparison between Opinafy and Senja. Features, pricing, video testimonials, verification, and support head to head.',
  keywords: [
    'opinafy vs senja',
    'senja alternative',
    'senja comparison',
    'testimonial platform comparison',
    'best testimonial tools 2026',
    'senja competitor',
  ],
  alternates: {
    canonical: 'https://opinafy.com/en/compare/opinafy-vs-senja',
    languages: {
      es: 'https://opinafy.com/comparar/opinafy-vs-senja',
      en: 'https://opinafy.com/en/compare/opinafy-vs-senja',
    },
  },
  openGraph: {
    title: 'Opinafy vs Senja: Full Comparison 2026',
    description: 'Discover the key differences between Opinafy and Senja. Honest analysis of features, pricing, and support.',
    url: 'https://opinafy.com/en/compare/opinafy-vs-senja',
  },
}

function CheckIcon() {
  return (<svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>)
}
function CrossIcon() {
  return (<svg className="h-5 w-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>)
}
function PartialIcon() {
  return (<svg className="h-5 w-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" /></svg>)
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
  { feature: 'Import from platforms', opinafy: 'check', competitor: 'check' },
  { feature: 'Schema markup SEO', opinafy: 'check', competitor: 'partial' },
  { feature: 'Free plan', opinafy: 'check', competitor: 'check' },
  { feature: 'Social proof notifications', opinafy: 'partial', competitor: 'check' },
  { feature: 'Rich snippet stars', opinafy: 'check', competitor: 'partial' },
  { feature: 'GDPR compliance', opinafy: 'check', competitor: 'check' },
  { feature: 'Multiple widget layouts', opinafy: 'check', competitor: 'check' },
  { feature: 'Public testimonial page', opinafy: 'check', competitor: 'check' },
  { feature: 'Custom branding', opinafy: 'check', competitor: 'check' },
]

function StatusIcon({ status }: { status: string }) {
  if (status === 'check') return <CheckIcon />
  if (status === 'cross') return <CrossIcon />
  return <PartialIcon />
}

const faqs = [
  {
    q: 'Can I migrate from Senja to Opinafy?',
    a: 'Yes, you can export your testimonials from Senja and import them into Opinafy. The migration process is straightforward, and our support team is available to help with large-scale migrations.',
  },
  {
    q: 'Does Senja support Spanish?',
    a: 'No, Senja is available only in English. Both the admin panel and customer-facing forms are in English, which can reduce testimonial collection rates for non-English-speaking audiences.',
  },
  {
    q: 'Which is more affordable?',
    a: 'Opinafy is more affordable, with the Pro plan at 9 EUR/month compared to Senja\'s paid plans starting at $29/month. Opinafy also offers a generous free tier.',
  },
  {
    q: 'Which has better video testimonial support?',
    a: 'Both platforms support video testimonials. Senja has more mature video recording features built into its collection forms. Opinafy supports video uploads and is continuously improving its video collection capabilities.',
  },
  {
    q: 'Does Opinafy offer company verification like no other?',
    a: 'Yes, Opinafy\'s company verification is a unique feature in the testimonial platform space. It verifies that testimonials come from real businesses, adding a trust badge that increases credibility with your website visitors.',
  },
]

export default function OpinafyVsSenjaPage() {
  const pageJsonLd = webPageSchema({
    name: 'Opinafy vs Senja: Full Comparison 2026',
    url: 'https://opinafy.com/en/compare/opinafy-vs-senja',
    description: 'Detailed comparison between Opinafy and Senja. Features, pricing, video testimonials, and verification.',
    lang: 'en',
  })

  const breadcrumbJsonLd = breadcrumbSchema([
    { name: 'Home', url: 'https://opinafy.com/en' },
    { name: 'Comparisons', url: 'https://opinafy.com/en/compare' },
    { name: 'Opinafy vs Senja', url: 'https://opinafy.com/en/compare/opinafy-vs-senja' },
  ])

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({ '@type': 'Question', name: faq.q, acceptedAnswer: { '@type': 'Answer', text: faq.a } })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link href="/en" className="hover:text-indigo-600">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/en/compare" className="hover:text-indigo-600">Comparisons</Link></li>
            <li aria-hidden="true">/</li>
            <li className="font-medium text-gray-900">Opinafy vs Senja</li>
          </ol>
        </nav>

        <header>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Opinafy vs Senja: Full Comparison 2026</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Senja is a popular testimonial platform known for its clean design and video testimonial features.
            But how does it compare to Opinafy? In this detailed comparison, we analyze both platforms across
            every important dimension to help you make the right choice.
          </p>
        </header>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900">Quick summary</h2>
          <p className="mt-4 text-gray-600 leading-7">
            <strong>Senja</strong> is a testimonial collection and display platform that excels in video testimonial collection
            and offers a clean, modern interface. It supports importing reviews from multiple platforms and offers social proof
            notification widgets. However, it is English-only, priced in USD, and does not offer company verification.
          </p>
          <p className="mt-4 text-gray-600 leading-7">
            <strong>Opinafy</strong> provides a comprehensive testimonial management solution with native multilingual support,
            competitive EUR pricing, and unique company verification. It is designed for businesses that value authenticity and
            need a platform that works across multiple language markets.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-6">
              <h3 className="font-semibold text-indigo-900">Choose Opinafy if...</h3>
              <ul className="mt-3 space-y-2 text-sm text-indigo-800">
                <li>You need multilingual support</li>
                <li>Company verification matters to your audience</li>
                <li>You want the most competitive pricing in EUR</li>
                <li>You value automatic SEO Schema markup</li>
                <li>You serve Spanish and English-speaking markets</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
              <h3 className="font-semibold text-gray-900">Choose Senja if...</h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                <li>Video testimonial recording is your top priority</li>
                <li>You need social proof notification popups</li>
                <li>You want to import reviews from many platforms</li>
                <li>You prefer a more established ecosystem</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Feature Table */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900">Feature-by-feature comparison</h2>
          <div className="mt-8 overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="px-4 py-3 font-semibold text-gray-900">Feature</th>
                  <th className="px-4 py-3 text-center font-semibold text-indigo-700">Opinafy</th>
                  <th className="px-4 py-3 text-center font-semibold text-gray-700">Senja</th>
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
                  <th className="px-4 py-3 text-center font-semibold text-gray-700">Senja</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr><td className="px-4 py-3">Free</td><td className="px-4 py-3 text-center">&euro;0 (10 testimonials)</td><td className="px-4 py-3 text-center">$0 (limited)</td></tr>
                <tr><td className="px-4 py-3">Pro / Starter</td><td className="px-4 py-3 text-center">&euro;9/mo</td><td className="px-4 py-3 text-center">$29/mo</td></tr>
                <tr><td className="px-4 py-3">Business / Growth</td><td className="px-4 py-3 text-center">&euro;19/mo</td><td className="px-4 py-3 text-center">$59/mo</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Detailed content */}
        <section className="mt-16 prose prose-gray max-w-none">
          <h2>Video testimonials</h2>
          <p>Senja has built a strong reputation for its video testimonial collection features. The platform offers in-browser video recording that allows customers to record testimonials directly from the collection form without downloading any software. The recording interface is clean and user-friendly, with customizable prompts that guide the customer through the recording process.</p>
          <p>Opinafy also supports video testimonials through its collection forms, with video upload functionality and mobile-friendly recording. While Senja&apos;s video recording interface is currently more mature, Opinafy&apos;s video capabilities are actively being expanded. For businesses that consider video testimonials their primary format, Senja has a current advantage. For businesses that use a mix of text and video, both platforms serve the need well.</p>

          <h2>Company verification and authenticity</h2>
          <p>Where Opinafy clearly leads is in testimonial authentication. The company verification feature is unique to Opinafy and provides a verifiable trust badge on testimonials from confirmed businesses. In an era where fake reviews are a growing concern, this verification capability provides genuine competitive differentiation that Senja does not offer.</p>
          <p>The verification process is straightforward: when a customer submits a testimonial through an Opinafy form, the platform can verify the company&apos;s existence against business databases. Verified testimonials display a distinctive badge that website visitors can interact with, increasing trust and conversion impact.</p>

          <h2>Multilingual capabilities</h2>
          <p>Senja, like Testimonial.to, is built exclusively in English. The admin interface, collection forms, and documentation are all in English. While this is perfectly adequate for businesses operating in English-only markets, it creates friction for multilingual operations.</p>
          <p>Opinafy&apos;s native bilingual support (Spanish and English, with more languages coming) provides a seamless experience for both administrators and customers across language boundaries. Collection forms automatically adapt to the appropriate language, and the admin dashboard supports language switching. This multilingual architecture is built into the platform&apos;s core, not bolted on as an afterthought.</p>

          <h2>SEO and structured data</h2>
          <p>Opinafy includes automatic Schema.org markup in its embeddable widgets, which enables search engines to display rich snippet results with star ratings. This SEO advantage can significantly increase click-through rates from search results. Senja offers basic structured data support but with less comprehensive implementation.</p>

          <h2>Widget technology</h2>
          <p>Opinafy&apos;s widget uses Shadow DOM technology for complete CSS isolation, ensuring that the testimonial display looks exactly the same regardless of the host website&apos;s styling. This eliminates the styling conflicts that can occur with other widget approaches. The widget weighs approximately twenty-five kilobytes, making it one of the lightest testimonial widgets available.</p>
          <p>Senja also offers lightweight widgets with multiple layout options. Both platforms provide carousel, grid, masonry, and list layouts. Both support full color and typography customization to match brand identities.</p>
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
          <h2 className="text-2xl font-bold sm:text-3xl">Try Opinafy free and compare for yourself</h2>
          <p className="mx-auto mt-4 max-w-xl text-indigo-100">No credit card required. See why businesses choose Opinafy over Senja.</p>
          <Link href="/en/pricing" className="mt-6 inline-block rounded-lg bg-white px-8 py-3 text-sm font-semibold text-indigo-600 shadow-sm transition-colors hover:bg-indigo-50">Create free account</Link>
        </div>
      </article>
    </>
  )
}
