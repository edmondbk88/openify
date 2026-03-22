import type { Metadata } from 'next'
import Link from 'next/link'
import { webPageSchema, breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: '7 Best Testimonial Tools in 2026 | Opinafy',
  description:
    'Ranking of the best testimonial and review platforms in 2026. Opinafy, Testimonial.to, Senja, Famewall, TrustPilot, Google Reviews, and Capterra compared.',
  keywords: [
    'best testimonial tools 2026',
    'testimonial platforms',
    'social proof tools',
    'collect customer testimonials',
    'best review platforms',
    'opinafy vs competitors',
    'testimonial software',
  ],
  alternates: {
    canonical: 'https://opinafy.com/en/compare/best-testimonial-tools',
    languages: {
      es: 'https://opinafy.com/comparar/mejores-herramientas-testimonios',
      en: 'https://opinafy.com/en/compare/best-testimonial-tools',
    },
  },
  openGraph: {
    title: '7 Best Testimonial Tools in 2026',
    description: 'Complete ranking of the best testimonial platforms. Honest comparison with pricing, pros, and cons.',
    url: 'https://opinafy.com/en/compare/best-testimonial-tools',
  },
}

const tools = [
  {
    rank: 1,
    name: 'Opinafy',
    tagline: 'The best testimonial platform with multilingual support',
    description: 'Opinafy is a testimonial platform designed to serve businesses globally with native Spanish and English support. It offers collection forms, embeddable widgets, testimonial walls, video testimonials, email and company verification, and Schema markup for SEO. The entire experience, from the admin dashboard to customer-facing forms, is available in multiple languages.',
    pricing: 'Free (10 testimonials) / Pro 9 EUR/mo / Business 19 EUR/mo',
    bestFor: 'Businesses needing multilingual support, freelancers, SMBs, and agencies across Spanish and English markets',
    pros: ['Native multilingual support (Spanish + English)', 'Most competitive pricing in EUR', 'Unique company verification feature', 'Automatic SEO Schema markup', 'Video testimonials included', 'Generous free plan'],
    cons: ['Newer platform (less time in market)', 'Fewer native integrations than English-only competitors', 'Growing user community'],
    highlight: true,
  },
  {
    rank: 2,
    name: 'Testimonial.to',
    tagline: 'Popular platform with a broad integration ecosystem',
    description: 'Testimonial.to is one of the most established testimonial platforms, founded in 2021. It offers a comprehensive suite of features including video testimonials, customizable widgets, and a Wall of Love display. Its broad integration ecosystem includes connections to Slack, Zapier, Notion, and many CMS platforms.',
    pricing: 'Free (limited) / $20/mo / $50/mo',
    bestFor: 'English-speaking businesses that need extensive third-party integrations',
    pros: ['Established platform with large user base', 'Extensive integration ecosystem', 'Strong video testimonial features', 'Multiple widget layouts'],
    cons: ['English only - no multilingual support', 'Pricing in USD only', 'No company verification', 'Higher price point'],
    highlight: false,
  },
  {
    rank: 3,
    name: 'Senja',
    tagline: 'Clean design with strong video capabilities',
    description: 'Senja stands out for its clean, modern interface and strong video testimonial recording features. The platform offers in-browser recording, multiple import sources, and social proof notification widgets. It is well-suited for businesses that prioritize video testimonials and want a polished user experience.',
    pricing: 'Free (limited) / $29/mo / $59/mo',
    bestFor: 'Businesses that prioritize video testimonials and modern design',
    pros: ['Excellent video recording interface', 'Clean modern design', 'Import from multiple platforms', 'Social proof notification widgets'],
    cons: ['English only', 'Higher pricing than alternatives', 'No company verification', 'Limited multilingual support'],
    highlight: false,
  },
  {
    rank: 4,
    name: 'Famewall',
    tagline: 'Simple and affordable testimonial collection',
    description: 'Famewall offers a straightforward approach to testimonial collection and display. Its simplicity is both its strength and limitation: easy to set up and use, but with fewer advanced features than more comprehensive platforms. It is a solid choice for solopreneurs and small businesses that want basic testimonial functionality without complexity.',
    pricing: 'Free (limited) / $9/mo / $19/mo',
    bestFor: 'Solopreneurs and small businesses wanting simplicity',
    pros: ['Very easy to set up', 'Affordable pricing', 'Clean widget designs', 'Good for beginners'],
    cons: ['Fewer advanced features', 'Limited customization options', 'Smaller user community', 'English only'],
    highlight: false,
  },
  {
    rank: 5,
    name: 'TrustPilot',
    tagline: 'Enterprise review platform with global reach',
    description: 'TrustPilot is a major player in the review ecosystem, particularly strong in European markets. It functions more as a review platform than a testimonial collection tool, with a focus on verified purchase reviews, trust scores, and integration with Google seller ratings. It is well-suited for larger businesses that need a comprehensive reputation management solution.',
    pricing: 'Free basic / Custom enterprise pricing',
    bestFor: 'Medium to large businesses needing verified review infrastructure',
    pros: ['Strong brand recognition', 'Google seller rating integration', 'Verified review system', 'Strong in European markets'],
    cons: ['Expensive for small businesses', 'Not specialized for testimonials', 'Complex setup process', 'Negative reviews cannot be removed'],
    highlight: false,
  },
  {
    rank: 6,
    name: 'Google Business Profile',
    tagline: 'Essential for local SEO and discovery',
    description: 'Google Business Profile (formerly Google My Business) is not a testimonial tool per se, but its review system is essential for local businesses. Google reviews directly impact local search rankings and appear prominently in search results. For businesses with a physical location, Google reviews are a non-negotiable part of their social proof strategy.',
    pricing: 'Free',
    bestFor: 'Local businesses that depend on search visibility',
    pros: ['Free to use', 'Directly impacts local SEO', 'High consumer trust', 'Appears in search results'],
    cons: ['Cannot curate or remove reviews', 'Limited display customization', 'Not embeddable on your website', 'No testimonial collection workflow'],
    highlight: false,
  },
  {
    rank: 7,
    name: 'Capterra / G2',
    tagline: 'B2B software review platforms',
    description: 'Capterra and G2 are specialized review platforms for B2B software products. They are essential for SaaS companies because many B2B buyers consult these platforms during their evaluation process. Reviews on these platforms carry significant weight in enterprise purchasing decisions.',
    pricing: 'Free to collect / Paid for enhanced listings',
    bestFor: 'B2B SaaS companies targeting enterprise buyers',
    pros: ['Trusted by B2B buyers', 'Detailed comparison features', 'Strong SEO for software searches', 'Verified user reviews'],
    cons: ['Only relevant for software products', 'Pay-to-play enhanced listings', 'Cannot control review display', 'Not suitable for non-software businesses'],
    highlight: false,
  },
]

export default function BestTestimonialToolsPage() {
  const pageJsonLd = webPageSchema({
    name: '7 Best Testimonial Tools in 2026',
    url: 'https://opinafy.com/en/compare/best-testimonial-tools',
    description: 'Complete ranking of the best testimonial and review platforms in 2026.',
  })

  const breadcrumbJsonLd = breadcrumbSchema([
    { name: 'Home', url: 'https://opinafy.com/en' },
    { name: 'Comparisons', url: 'https://opinafy.com/en/compare' },
    { name: '7 Best Testimonial Tools', url: 'https://opinafy.com/en/compare/best-testimonial-tools' },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link href="/en" className="hover:text-indigo-600">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/en/compare" className="hover:text-indigo-600">Comparisons</Link></li>
            <li aria-hidden="true">/</li>
            <li className="font-medium text-gray-900">7 Best Testimonial Tools</li>
          </ol>
        </nav>

        <header>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            7 Best Testimonial Tools in 2026
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Looking for the best platform to collect, manage, and display customer testimonials?
            We have tested the leading options and ranked them based on features, pricing, ease of use,
            and overall value. Here is our definitive guide for 2026.
          </p>
        </header>

        {/* Methodology */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900">How we evaluated</h2>
          <p className="mt-4 text-gray-600 leading-7">
            We tested each platform by creating projects, collecting real testimonials, customizing widgets,
            and embedding them on test websites. We evaluated six key criteria: feature depth, ease of use,
            performance, pricing, language support, and integrations. Our rankings reflect our honest assessment
            based on hands-on testing, not paid placements or affiliate arrangements.
          </p>
        </section>

        {/* Quick comparison table */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900">Quick comparison</h2>
          <div className="mt-6 overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="px-4 py-3 font-semibold text-gray-900">#</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">Tool</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">Best for</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">Starting price</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {tools.map((tool) => (
                  <tr key={tool.rank} className={tool.highlight ? 'bg-indigo-50/50' : ''}>
                    <td className="px-4 py-2.5 font-bold text-gray-500">{tool.rank}</td>
                    <td className={`px-4 py-2.5 font-medium ${tool.highlight ? 'text-indigo-700' : 'text-gray-900'}`}>{tool.name}</td>
                    <td className="px-4 py-2.5 text-gray-600 text-xs">{tool.bestFor}</td>
                    <td className="px-4 py-2.5 text-gray-600 text-xs">{tool.pricing.split('/')[0]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Detailed reviews */}
        <section className="mt-16 space-y-16">
          {tools.map((tool) => (
            <div
              key={tool.rank}
              className={`rounded-2xl border p-8 ${tool.highlight ? 'border-indigo-300 bg-indigo-50/30' : 'border-gray-200 bg-white'}`}
            >
              <div className="flex items-start gap-4">
                <span className={`flex h-10 w-10 items-center justify-center rounded-full text-lg font-bold ${tool.highlight ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700'}`}>
                  {tool.rank}
                </span>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{tool.name}</h2>
                  <p className="mt-1 text-sm text-gray-500">{tool.tagline}</p>
                </div>
              </div>

              <p className="mt-6 text-gray-600 leading-7">{tool.description}</p>

              <div className="mt-6">
                <p className="text-sm font-semibold text-gray-900">Pricing: <span className="font-normal text-gray-600">{tool.pricing}</span></p>
                <p className="mt-1 text-sm font-semibold text-gray-900">Best for: <span className="font-normal text-gray-600">{tool.bestFor}</span></p>
              </div>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div>
                  <h3 className="text-sm font-semibold text-green-700">Pros</h3>
                  <ul className="mt-2 space-y-1">
                    {tool.pros.map((pro) => (
                      <li key={pro} className="flex items-start gap-2 text-sm text-gray-600">
                        <svg className="mt-0.5 h-4 w-4 shrink-0 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-red-700">Cons</h3>
                  <ul className="mt-2 space-y-1">
                    {tool.cons.map((con) => (
                      <li key={con} className="flex items-start gap-2 text-sm text-gray-600">
                        <svg className="mt-0.5 h-4 w-4 shrink-0 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Conclusion */}
        <section className="mt-16 prose prose-gray max-w-none">
          <h2>How to choose the right testimonial tool</h2>
          <p>The best testimonial tool for your business depends on your specific needs, budget, and market. Here are our recommendations based on common scenarios:</p>
          <ul>
            <li><strong>If you serve multilingual markets:</strong> Opinafy is the clear choice with its native Spanish and English support and competitive EUR pricing.</li>
            <li><strong>If you need extensive integrations:</strong> Testimonial.to offers the broadest integration ecosystem with connections to dozens of third-party tools.</li>
            <li><strong>If video testimonials are your priority:</strong> Senja has the most mature in-browser video recording features.</li>
            <li><strong>If simplicity is key:</strong> Famewall offers the most straightforward setup for basic testimonial needs.</li>
            <li><strong>If you are an enterprise SaaS:</strong> Combine G2/Capterra for B2B discovery with Opinafy or Testimonial.to for your website display.</li>
            <li><strong>If you are a local business:</strong> Google Business Profile is essential, complemented by Opinafy for your website testimonials.</li>
          </ul>
          <p>Whatever tool you choose, the most important step is to start collecting testimonials today. Social proof compounds over time, and every day without a testimonial collection system is a day of lost trust-building potential.</p>
        </section>

        {/* CTA */}
        <div className="mt-16 rounded-2xl bg-gradient-to-br from-indigo-600 to-indigo-700 p-8 text-center text-white sm:p-12">
          <h2 className="text-2xl font-bold sm:text-3xl">Start with Opinafy for free</h2>
          <p className="mx-auto mt-4 max-w-xl text-indigo-100">
            No credit card required. Set up your first project in under 2 minutes and see why Opinafy
            is the best value testimonial platform in 2026.
          </p>
          <Link href="/en/pricing" className="mt-6 inline-block rounded-lg bg-white px-8 py-3 text-sm font-semibold text-indigo-600 shadow-sm transition-colors hover:bg-indigo-50">Create free account</Link>
        </div>
      </article>
    </>
  )
}
