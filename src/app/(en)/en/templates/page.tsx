import type { Metadata } from 'next'
import Link from 'next/link'
import { NavbarEn } from '@/components/landing/navbar-en'
import { FooterEn } from '@/components/landing/footer-en'
import { widgetTemplates, TEMPLATE_CATEGORIES } from '@/lib/widget-templates'
import { TemplatesGalleryEn } from './gallery-en'
import { collectionPageSchema, breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Testimonial Templates | 80+ Ready-to-Use Designs - Opinafy',
  description:
    'Explore 80+ testimonial widget templates ready to use. Minimalist, corporate, colorful, dark, and more styles. Customize your testimonials with Opinafy.',
  keywords: [
    'testimonial templates',
    'testimonial widget templates',
    'testimonial widget designs',
    'review display templates',
    'testimonial carousel template',
    'testimonial grid template',
    'testimonial wall design',
    'customer review widget',
    'social proof templates',
    'opinafy templates',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://opinafy.com/en/templates',
    siteName: 'Opinafy',
    title: '80+ Testimonial Templates Ready to Use - Opinafy',
    description:
      'Discover 80+ professional designs to display customer testimonials on your website. Minimalist, corporate, colorful, dark, and more.',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Opinafy Testimonial Templates',
      },
    ],
  },
  alternates: {
    canonical: 'https://opinafy.com/en/templates',
    languages: {
      'es': 'https://opinafy.com/plantillas',
      'en': 'https://opinafy.com/en/templates',
      'x-default': 'https://opinafy.com/plantillas',
    },
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function TemplatesPageEn() {
  const collectionJsonLd = collectionPageSchema({
    name: '80+ Testimonial Templates - Opinafy',
    url: 'https://opinafy.com/en/templates',
    description:
      'Explore 80+ testimonial widget templates ready to use. Minimalist, corporate, colorful, dark, and more styles.',
  })

  const breadcrumbJsonLd = breadcrumbSchema([
    { name: 'Home', url: 'https://opinafy.com/en' },
    { name: 'Templates', url: 'https://opinafy.com/en/templates' },
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
            Template Gallery
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            80+ Testimonial Templates{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Ready to Use
            </span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 sm:text-xl">
            Choose from 80+ professional designs to showcase your customer testimonials.
            Every template is fully customizable and adapts to any website.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm text-gray-500">
            <span className="flex items-center gap-1.5">
              <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              8 design categories
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
              Find the perfect template for your testimonials
            </h2>
            <p className="mt-4 leading-relaxed">
              The way you present customer testimonials can make a big difference in your conversions.
              A well-designed testimonial conveys trust, professionalism, and authenticity. That is why
              we have created a collection of 80+ professional templates organized into 8 design categories,
              so you can find exactly the style that matches your brand identity.
            </p>
            <p className="mt-4 leading-relaxed">
              Our categories include <strong>minimalist</strong> styles for clean and modern websites,
              <strong> corporate</strong> for conveying seriousness and professionalism, <strong>colorful</strong> for
              vibrant and creative brands, and <strong>dark</strong> for sites with dark mode design. You will
              also find templates with <strong>glassmorphism</strong> style, gradients, and rounded designs
              that add warmth and approachability.
            </p>
            <p className="mt-4 leading-relaxed">
              To choose the right layout, think about how many testimonials you want to show at once.
              The <strong>carousel</strong> is ideal if you prefer to highlight one testimonial at a time with
              smooth transitions. The <strong>grid</strong> works well when you have several testimonials and want to show
              3 to 6 at once in an organized format. The <strong>wall</strong> (masonry) style is perfect for creating
              a visually impactful social proof section with testimonials of different lengths.
            </p>
            <p className="mt-4 leading-relaxed">
              All templates are fully customizable: you can adjust colors, fonts, borders,
              shadows, and spacing from the Opinafy visual editor, without writing any code. Plus,
              each widget automatically adapts to mobile devices and loads asynchronously so it
              does not affect your site performance.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Nunito:wght@400;600;700&family=DM+Sans:wght@400;600;700&family=Space+Grotesk:wght@400;600;700&family=Caveat:wght@400;600;700&family=JetBrains+Mono:wght@400;600;700&family=Cormorant+Garamond:wght@400;600;700&display=swap"
      />
      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <TemplatesGalleryEn
            templates={widgetTemplates}
            categories={[...TEMPLATE_CATEGORIES]}
          />
        </div>
      </section>

      {/* Mini Site Cross-link */}
      <section className="relative overflow-hidden border-t border-indigo-200/50 bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-700 px-4 py-20 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-white/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-purple-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-5xl text-center">
          <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-indigo-100">
            Opinafy Mini Site
          </span>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Looking for a full testimonial page?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-indigo-100">
            With Opinafy&apos;s mini site, you get your own professional page to collect and display
            verified testimonials. Perfect if you do not have a website or want a dedicated landing page.
            Choose from 30 templates designed by profession.
          </p>

          <Link
            href="/en/minisite-templates"
            className="mt-10 inline-flex h-12 items-center rounded-lg bg-white px-8 text-base font-semibold text-indigo-700 shadow-lg transition-all hover:bg-indigo-50 hover:shadow-xl"
          >
            View 30 mini site templates
            <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
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
            Sign up for free and start using any of these templates in minutes.
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
