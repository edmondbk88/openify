import type { Metadata } from 'next'
import Link from 'next/link'
import { NavbarEn } from '@/components/landing/navbar-en'
import { FooterEn } from '@/components/landing/footer-en'

export const metadata: Metadata = {
  title: 'Case Studies - Customer Success Stories with Opinafy',
  description:
    'Discover how real businesses use Opinafy to collect testimonials, increase conversions and build trust. Case studies with measurable results.',
  keywords: [
    'opinafy case studies',
    'testimonial success stories',
    'increase conversions testimonials',
    'social proof results',
    'opinafy results',
  ],
  alternates: {
    canonical: 'https://opinafy.com/en/case-studies',
    languages: {
      es: 'https://opinafy.com/casos-de-exito',
      en: 'https://opinafy.com/en/case-studies',
      'x-default': 'https://opinafy.com/casos-de-exito',
    },
  },
  openGraph: {
    title: 'Opinafy Case Studies - Success Stories That Inspire',
    description: 'Real businesses that boosted conversions with verified testimonials.',
    url: 'https://opinafy.com/en/case-studies',
    type: 'website',
    siteName: 'Opinafy',
    locale: 'en_US',
    images: [{ url: '/og.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Opinafy Case Studies',
    description: 'Customer success stories with verified testimonials.',
    images: ['/og.png'],
  },
}

const caseStudies = [
  {
    id: 'estudio-creativo-luna',
    company: 'Estudio Creativo Luna',
    industry: 'Graphic Design / Branding',
    location: 'Barcelona, Spain',
    color: 'indigo',
    headline: 'How Estudio Creativo Luna increased conversions by 47% with verified testimonials',
    summary: 'A graphic design studio that turned their website into a trust-building machine through verified testimonials and an embeddable widget.',
    challenge: {
      title: 'The Challenge',
      text: 'Estudio Creativo Luna had been in the market for 3 years with an excellent portfolio, but their web conversion rate was just 1.8%. Visitors browsed the portfolio but didn\'t follow through to make contact. Ana Torres, the creative director, knew something was missing: social proof. "We had very satisfied clients, but their opinions were scattered across emails and WhatsApp messages. There was no way for a new visitor to see those positive experiences."',
    },
    solution: {
      title: 'The Opinafy Solution',
      steps: [
        'Created a branded testimonial collection page with Luna\'s visual identity',
        'Sent testimonial requests to their 45 existing clients via email',
        'Received 28 written and 6 video testimonials in the first week',
        'Implemented a carousel widget on the homepage and a grid on the services page',
        'Activated the public mini site to share on social media',
      ],
    },
    results: [
      { value: '47%', label: 'Increase in conversions' },
      { value: '34', label: 'Verified testimonials in 2 weeks' },
      { value: '2.6%', label: 'New conversion rate (vs 1.8%)' },
      { value: '12', label: 'New clients in the first month' },
    ],
    quote: {
      text: 'Opinafy allowed us to turn our clients\' satisfaction into a real sales tool. The widget integrated perfectly with our design and verified testimonials generate a level of trust we didn\'t have before.',
      author: 'Ana Torres',
      role: 'Creative Director, Estudio Creativo Luna',
    },
  },
  {
    id: 'techsolutions-madrid',
    company: 'TechSolutions Madrid',
    industry: 'Software Development / IT Consulting',
    location: 'Madrid, Spain',
    color: 'emerald',
    headline: 'TechSolutions Madrid: from 0 to 50 verified testimonials in 30 days',
    summary: 'A tech consulting firm that built its online reputation from scratch in record time, combining text and video testimonials.',
    challenge: {
      title: 'The Challenge',
      text: 'TechSolutions Madrid is an IT consulting firm with 8 years of experience and over 200 delivered projects. However, their online presence didn\'t reflect their track record. "We had zero online reviews," explains CEO Carlos Mendez. "When a prospect searched for us on Google, they found no client references. In the B2B sector, that\'s a serious problem because CTOs want to see proof before investing."',
    },
    solution: {
      title: 'The Opinafy Solution',
      steps: [
        'Created 3 projects in Opinafy: web development, cloud consulting, and cybersecurity',
        'Designed a collection flow with automated post-project emails',
        'Used video testimonials for the most impactful projects',
        'Implemented a testimonial widget with service filters on their website',
        'Published their mini site and added it to commercial proposals',
      ],
    },
    results: [
      { value: '50', label: 'Verified testimonials in 30 days' },
      { value: '35%', label: 'Increase in quote requests' },
      { value: '8', label: 'Video testimonials from IT directors' },
      { value: '3x', label: 'More traffic to services page' },
    ],
    quote: {
      text: 'In the B2B world, trust is everything. Opinafy gave us a professional, verified way to showcase our clients\' experiences. Now, when we send a proposal, we attach our testimonial mini site. It\'s been a game changer in how prospects perceive us.',
      author: 'Carlos Mendez',
      role: 'CEO, TechSolutions Madrid',
    },
  },
  {
    id: 'coaching-vital',
    company: 'Coaching Vital',
    industry: 'Personal Coaching / Wellness',
    location: 'Valencia, Spain',
    color: 'amber',
    headline: 'Coaching Vital doubled their clients with a testimonial mini site',
    summary: 'A personal coach who went from relying on word-of-mouth to having a scalable social proof system that works 24/7.',
    challenge: {
      title: 'The Challenge',
      text: 'Laura Vidal is a life and wellness coach with 5 years of experience. Her business relied almost exclusively on word-of-mouth. "90% of my clients came through personal recommendations, which was great but limited my growth," Laura explains. "When someone discovered me through Instagram or Google, I had no way to quickly prove my method works. I needed my satisfied clients to speak for me, even when I wasn\'t there."',
    },
    solution: {
      title: 'The Opinafy Solution',
      steps: [
        'Created a collection page focused on results: what changed in your life after coaching',
        'Requested testimonials at the end of each 12-week program',
        'Collected 4 video testimonials with transformation stories',
        'Set up a public mini site with a warm, professional design',
        'Added a FOMO badge on her website and shared the mini site on social media',
      ],
    },
    results: [
      { value: '2x', label: 'Doubled client base in 3 months' },
      { value: '22', label: 'Testimonials (text + video) collected' },
      { value: '68%', label: 'Of new clients mentioned the testimonials' },
      { value: '40%', label: 'Less time spent "selling" on calls' },
    ],
    quote: {
      text: 'The testimonial mini site is like having a salesperson who works 24/7. When someone reaches out interested, I send them the link and the testimonials do the convincing. I doubled my clients without doubling my sales effort.',
      author: 'Laura Vidal',
      role: 'Personal Coach, Coaching Vital',
    },
  },
]

const colorMap: Record<string, { bg: string; border: string; text: string; badge: string }> = {
  indigo: { bg: 'bg-indigo-50', border: 'border-indigo-200', text: 'text-indigo-700', badge: 'bg-indigo-600' },
  emerald: { bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-700', badge: 'bg-emerald-600' },
  amber: { bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-700', badge: 'bg-amber-600' },
}

export default function CaseStudiesPage() {
  const jsonLdWebPage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Case Studies - Opinafy',
    url: 'https://opinafy.com/en/case-studies',
    description: 'Discover how real businesses increased conversions with verified testimonials from Opinafy.',
    isPartOf: { '@type': 'WebSite', name: 'Opinafy', url: 'https://opinafy.com' },
    publisher: { '@type': 'Organization', name: 'Opinafy', url: 'https://opinafy.com', logo: 'https://opinafy.com/logo-opinafy.png' },
    inLanguage: 'en',
  }
  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://opinafy.com/en' },
      { '@type': 'ListItem', position: 2, name: 'Case Studies', item: 'https://opinafy.com/en/case-studies' },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />

      <NavbarEn />

      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-b from-indigo-50 to-white">
          <div className="mx-auto max-w-4xl px-4 pt-16 pb-12 text-center sm:px-6 lg:px-8">
            <nav className="mb-6 text-sm text-gray-500">
              <Link href="/en" className="hover:text-indigo-600">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900">Case Studies</span>
            </nav>

            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Case Studies
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Discover how real businesses use Opinafy to collect testimonials,
              build trust and increase conversions.
            </p>
          </div>
        </section>

        {/* Case Studies */}
        <section className="mx-auto max-w-5xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {caseStudies.map((cs, idx) => {
              const c = colorMap[cs.color]
              return (
                <article key={cs.id} id={cs.id} className="scroll-mt-20">
                  <div className={`rounded-2xl ${c.bg} border ${c.border} p-8 sm:p-10`}>
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className={`inline-block rounded-full ${c.badge} px-3 py-1 text-xs font-bold text-white`}>
                        Case #{idx + 1}
                      </span>
                      <span className="text-sm text-gray-500">{cs.industry}</span>
                      <span className="text-sm text-gray-500">|</span>
                      <span className="text-sm text-gray-500">{cs.location}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">{cs.headline}</h2>
                    <p className="mt-3 text-gray-600">{cs.summary}</p>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-xl font-bold text-gray-900">{cs.challenge.title}</h3>
                    <p className="mt-3 text-gray-600 leading-relaxed">{cs.challenge.text}</p>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-xl font-bold text-gray-900">{cs.solution.title}</h3>
                    <ol className="mt-4 space-y-3">
                      {cs.solution.steps.map((step, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${c.badge} text-xs font-bold text-white`}>
                            {i + 1}
                          </span>
                          <span className="text-gray-600">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-xl font-bold text-gray-900">Results</h3>
                    <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                      {cs.results.map((r, i) => (
                        <div key={i} className={`rounded-xl border-2 ${c.border} ${c.bg} p-5 text-center`}>
                          <p className={`text-3xl font-extrabold ${c.text}`}>{r.value}</p>
                          <p className="mt-1 text-sm text-gray-600">{r.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 rounded-xl bg-gray-50 p-6 sm:p-8">
                    <svg className="h-8 w-8 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <blockquote className="mt-4 text-lg text-gray-700 italic leading-relaxed">
                      &ldquo;{cs.quote.text}&rdquo;
                    </blockquote>
                    <div className="mt-4">
                      <p className="font-semibold text-gray-900">{cs.quote.author}</p>
                      <p className="text-sm text-gray-500">{cs.quote.role}</p>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>

          <div className="mt-16 rounded-lg bg-gray-50 p-6 text-center">
            <p className="text-sm text-gray-500">
              * Case studies based on representative data from Opinafy users.
              Names and details have been adapted to protect client privacy.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-indigo-600 to-purple-700">
          <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-white">
              Your success story starts here
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-indigo-200">
              Join the businesses already boosting conversions with verified testimonials.
              Start for free, no credit card required.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link href="/en/register" className="inline-flex items-center rounded-xl bg-white px-8 py-4 text-lg font-bold text-indigo-700 shadow-lg transition-all hover:bg-gray-50 hover:shadow-xl">
                Start for free
              </Link>
              <Link href="/en/roi-calculator" className="inline-flex items-center rounded-xl border-2 border-white/30 px-8 py-4 text-lg font-bold text-white transition-all hover:bg-white/10">
                Calculate your ROI
              </Link>
            </div>
          </div>
        </section>
      </main>

      <FooterEn />
    </>
  )
}
