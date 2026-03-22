import type { Metadata } from 'next'
import { NavbarEn } from '@/components/landing/navbar-en'
import { FooterEn } from '@/components/landing/footer-en'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Widget Templates - Opinafy',
  description:
    'Explore 60+ customizable testimonial widget templates. Carousel, grid, wall, and more layouts to showcase customer reviews on your website.',
  alternates: {
    canonical: 'https://opinafy.com/en/templates',
    languages: {
      'es': 'https://opinafy.com/plantillas',
      'en': 'https://opinafy.com/en/templates',
      'x-default': 'https://opinafy.com/plantillas',
    },
  },
  openGraph: {
    title: 'Widget Templates - Opinafy',
    description:
      'Explore 60+ customizable testimonial widget templates for your website.',
    url: 'https://opinafy.com/en/templates',
    type: 'website',
    siteName: 'Opinafy',
    locale: 'en_US',
    images: [{ url: '/og.png', width: 1200, height: 630 }],
  },
}

export default function TemplatesPageEn() {
  return (
    <>
      <NavbarEn />
      <div className="min-h-screen bg-gray-50 pt-16">
        <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Widget Templates
            </h1>
            <p className="mt-4 text-lg text-gray-600 sm:text-xl">
              Choose from over 60 customizable templates to display customer testimonials
              on your website. Carousel, grid, wall, and more.
            </p>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-2xl border border-gray-200 bg-white p-12 text-center shadow-sm">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100">
                <svg className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                Browse our template gallery
              </h2>
              <p className="mt-4 text-gray-600">
                Our full template gallery is available in Spanish. All templates work with any language
                and are fully customizable through the dashboard.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link
                  href="/plantillas"
                  className="inline-flex h-11 items-center rounded-lg bg-indigo-600 px-6 text-sm font-semibold text-white transition-colors hover:bg-indigo-700"
                >
                  View all templates
                </Link>
                <Link
                  href="/registro"
                  className="inline-flex h-11 items-center rounded-lg border border-gray-300 bg-white px-6 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
                >
                  Get started free
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Template categories overview */}
        <section className="px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-center text-2xl font-bold text-gray-900">
              Template categories
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: 'Carousel',
                  description: 'Highlight testimonials one by one with smooth transitions. Perfect for hero sections.',
                  count: '15+ templates',
                },
                {
                  name: 'Grid',
                  description: 'Show multiple testimonials at once in an organized grid format.',
                  count: '15+ templates',
                },
                {
                  name: 'Wall',
                  description: 'Masonry-style layout for an impressive testimonial wall effect.',
                  count: '15+ templates',
                },
                {
                  name: 'Minimal',
                  description: 'Clean, simple designs that blend seamlessly with any website.',
                  count: '10+ templates',
                },
                {
                  name: 'Badge & Stars',
                  description: 'Highlight star ratings and verified badges for maximum trust.',
                  count: '5+ templates',
                },
                {
                  name: 'Dark Mode',
                  description: 'Elegant dark-themed templates for modern websites.',
                  count: '5+ templates',
                },
              ].map((cat) => (
                <div key={cat.name} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900">{cat.name}</h3>
                  <p className="mt-2 text-sm text-gray-600">{cat.description}</p>
                  <p className="mt-3 text-xs font-medium text-indigo-600">{cat.count}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <FooterEn />
    </>
  )
}
