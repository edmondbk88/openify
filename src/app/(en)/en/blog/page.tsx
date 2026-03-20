import type { Metadata } from 'next'
import { NavbarEn } from '@/components/landing/navbar-en'
import { FooterEn } from '@/components/landing/footer-en'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog - Opinafy',
  description:
    'Tips, guides, and best practices for collecting, managing, and displaying customer testimonials. Learn how to boost conversions with social proof.',
  alternates: {
    canonical: 'https://opinafy.com/en/blog',
    languages: {
      'es': 'https://opinafy.com/blog',
      'en': 'https://opinafy.com/en/blog',
    },
  },
  openGraph: {
    title: 'Blog - Opinafy',
    description:
      'Tips, guides, and best practices for customer testimonials and social proof.',
    url: 'https://opinafy.com/en/blog',
    type: 'website',
    siteName: 'Opinafy',
    locale: 'en_US',
    images: [{ url: '/og.png', width: 1200, height: 630 }],
  },
}

export default function BlogPageEn() {
  return (
    <>
      <NavbarEn />
      <div className="min-h-screen bg-gray-50 pt-16">
        <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Blog
            </h1>
            <p className="mt-4 text-lg text-gray-600 sm:text-xl">
              Tips, guides, and best practices to make the most of customer testimonials
              and boost your conversions with social proof.
            </p>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-2xl border border-gray-200 bg-white p-12 text-center shadow-sm">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100">
                <svg className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6V7.5z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                English articles coming soon
              </h2>
              <p className="mt-4 text-gray-600">
                We are working on translating our best content into English.
                In the meantime, check out our Spanish blog for guides and tips on testimonials.
              </p>
              <div className="mt-8">
                <Link
                  href="/blog"
                  className="inline-flex h-11 items-center rounded-lg border border-gray-300 bg-white px-6 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
                >
                  Visit Spanish blog
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <FooterEn />
    </>
  )
}
