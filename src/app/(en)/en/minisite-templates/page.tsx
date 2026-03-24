import type { Metadata } from 'next'
import Link from 'next/link'
import { NavbarEn } from '@/components/landing/navbar-en'
import { FooterEn } from '@/components/landing/footer-en'
import { miniSiteTemplates, MINISITE_CATEGORIES } from '@/lib/minisite-templates'
import { collectionPageSchema, breadcrumbSchema } from '@/lib/schema'
import { MiniSiteGalleryEn } from './gallery-en'

export const metadata: Metadata = {
  title: 'Mini Site Templates by Profession | 30 Designs',
  description:
    'Explore 30 mini site testimonial templates organized by profession. Health, legal, creatives, education, and more. Create your professional testimonial page with Opinafy.',
  keywords: [
    'testimonial page template',
    'mini site professional testimonials',
    'testimonial page by profession',
    'testimonial mini site template',
    'public testimonial page',
    'verified testimonials page',
    'mini site customer reviews',
    'review page template',
    'professional testimonial page',
    'testimonial website',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://opinafy.com/en/minisite-templates',
    siteName: 'Opinafy',
    title: '30 Mini Site Testimonial Templates by Profession',
    description:
      'Discover 30 professional designs for your public testimonial page. Organized by profession: health, legal, creatives, education, and more.',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Opinafy Mini Site Templates',
      },
    ],
  },
  alternates: {
    canonical: 'https://opinafy.com/en/minisite-templates',
    languages: {
      'es': 'https://opinafy.com/plantillas-minisitio',
      'en': 'https://opinafy.com/en/minisite-templates',
      'x-default': 'https://opinafy.com/plantillas-minisitio',
    },
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function MiniSiteTemplatesPageEn() {
  const collectionJsonLd = collectionPageSchema({
    name: '30 Mini Site Testimonial Templates - Opinafy',
    url: 'https://opinafy.com/en/minisite-templates',
    description:
      'Explore 30 mini site testimonial templates organized by profession. Create your professional testimonial page.',
    lang: 'en',
  })

  const breadcrumbJsonLd = breadcrumbSchema([
    { name: 'Home', url: 'https://opinafy.com/en' },
    { name: 'Mini Site Templates', url: 'https://opinafy.com/en/minisite-templates' },
  ])

  return (
    <>
      <NavbarEn />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-indigo-50 via-white to-white px-4 pb-12 pt-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-block rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-semibold text-indigo-700">
            Mini Site Gallery
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Mini Site Templates{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              by Profession
            </span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 sm:text-xl">
            Choose from 30 professional designs for your public testimonial page.
            Each template is tailored for a specific profession or industry.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm text-gray-500">
            <span className="flex items-center gap-1.5">
              <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              9 professional categories
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              5 layout types
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              100% customizable
            </span>
          </div>
        </div>
      </section>

      {/* Introductory Content */}
      <section className="bg-white px-4 pb-8 pt-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="prose prose-gray mx-auto max-w-none text-gray-600">
            <h2 className="text-2xl font-bold text-gray-900">
              Your professional testimonial page in minutes
            </h2>
            <p className="mt-4 leading-relaxed">
              A testimonial mini site is your public page where potential customers can see
              all your verified testimonials in one place. Perfect for sharing on social media,
              email, business cards, and any channel where you want to build trust.
            </p>
            <p className="mt-4 leading-relaxed">
              We have created 30 templates organized by <strong>profession and industry</strong>, so you can find
              exactly the style that conveys your business identity. From <strong>doctors and dentists</strong> to
              <strong> lawyers and accountants</strong>, including <strong>photographers, designers, coaches</strong>, and
              many more.
            </p>
            <p className="mt-4 leading-relaxed">
              Each template includes optimized configurations for colors, typography, card style,
              layout, and header. You can customize every aspect from your Opinafy dashboard without writing
              a single line of code. Plus, your mini site automatically adapts to mobile devices
              and loads quickly.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <MiniSiteGalleryEn
            templates={miniSiteTemplates}
            categories={[...MINISITE_CATEGORIES]}
          />
        </div>
      </section>

      {/* Cross-link banner */}
      <section className="border-t border-gray-100 bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-lg font-medium text-gray-700">
            Looking for widget templates?
          </p>
          <Link
            href="/en/templates"
            className="mt-3 inline-flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-700 transition-colors"
          >
            View widget templates
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-gray-100 bg-gradient-to-b from-indigo-50 to-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Like a template?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Sign up for free and create your testimonial mini site in minutes.
            No credit card required, no commitment.
          </p>
          <a
            href="/en/register"
            className="mt-8 inline-flex h-12 items-center rounded-lg bg-indigo-600 px-8 text-base font-semibold text-white transition-colors hover:bg-indigo-700"
          >
            Get Started Free
          </a>
        </div>
      </section>
      <FooterEn />
    </>
  )
}
