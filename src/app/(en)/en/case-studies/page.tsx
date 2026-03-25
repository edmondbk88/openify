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
    images: [{ url: '/og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Opinafy Case Studies',
    description: 'Customer success stories with verified testimonials.',
    images: ['/og.jpg'],
  },
}

const platformStats = [
  { value: '100+', label: 'Widget templates' },
  { value: '7', label: 'Available layouts' },
  { value: '30+', label: 'Mini site templates' },
  { value: '160+', label: 'Industries covered' },
]

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

            <span className="inline-block rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-semibold text-indigo-700 mb-6">
              Coming Soon
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Coming Soon: Case Studies
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 leading-relaxed">
              We are gathering our first customer success stories. Soon we will share real
              stories from businesses that have transformed their online reputation with Opinafy.
            </p>
          </div>
        </section>

        {/* What Opinafy Offers */}
        <section className="mx-auto max-w-5xl px-4 pb-12 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-gray-900 mb-8">
            What we offer our customers
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {platformStats.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-gray-200 bg-gray-50 p-6 text-center">
                <p className="text-3xl font-extrabold text-indigo-600">{stat.value}</p>
                <p className="mt-2 text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900">Verified testimonials</h3>
              <p className="mt-2 text-sm text-gray-600">
                Collect written, video, and audio testimonials with identity verification to
                build real trust with your visitors.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900">Embeddable widgets</h3>
              <p className="mt-2 text-sm text-gray-600">
                Display your testimonials on any website with customizable widgets in 7 different
                layouts: carousel, grid, masonry, list, and more.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900">Public mini site</h3>
              <p className="mt-2 text-sm text-gray-600">
                Your own public testimonials page, perfect for sharing on social media,
                commercial proposals, and email signatures.
              </p>
            </div>
          </div>
        </section>

        {/* CTAs */}
        <section className="bg-gradient-to-r from-indigo-600 to-purple-700">
          <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-white">
              Want to be one of our first success stories?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-indigo-200">
              Start for free and transform your business online reputation with verified
              testimonials. No credit card required.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/en/register"
                className="inline-flex items-center rounded-xl bg-white px-8 py-4 text-lg font-bold text-indigo-700 shadow-lg transition-all hover:bg-gray-50 hover:shadow-xl"
              >
                Create free account
              </Link>
            </div>

            <div className="mt-8 border-t border-white/20 pt-8">
              <p className="text-indigo-200">
                Already an Opinafy user? Get in touch to share your story.
              </p>
              <Link
                href="/en/contact"
                className="mt-4 inline-flex items-center rounded-xl border-2 border-white/30 px-6 py-3 text-base font-bold text-white transition-all hover:bg-white/10"
              >
                Contact us
              </Link>
            </div>
          </div>
        </section>
      </main>

      <FooterEn />
    </>
  )
}
