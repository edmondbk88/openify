import type { Metadata } from 'next'
import Link from 'next/link'
import { NavbarEn } from '@/components/landing/navbar-en'
import { FooterEn } from '@/components/landing/footer-en'
import { breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Verified by Opinafy Badge - Trusted and Verified Testimonials',
  description:
    'The "Verified by Opinafy" badge guarantees that testimonials on a website are real, email-verified, and reviewed. Increase visitor trust.',
  keywords: [
    'verified testimonials badge',
    'verified testimonials',
    'trust seal testimonials',
    'testimonial verification',
    'opinafy verified',
    'verified social proof',
  ],
  alternates: {
    canonical: 'https://opinafy.com/en/verified',
    languages: {
      es: 'https://opinafy.com/verificado-badge',
      en: 'https://opinafy.com/en/verified',
      'x-default': 'https://opinafy.com/verificado-badge',
    },
  },
  openGraph: {
    title: 'Verified by Opinafy Badge - Trusted Testimonials',
    description:
      'The badge that guarantees real and verified testimonials on your website. Increase trust and conversions.',
    url: 'https://opinafy.com/en/verified',
    type: 'website',
    siteName: 'Opinafy',
    locale: 'en_US',
    images: [{ url: '/og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Verified by Opinafy Badge',
    description:
      'Real and verified testimonials. The trust badge for your website.',
    images: ['/og.jpg'],
  },
}

const trustStats = [
  { value: '92%', label: 'of consumers trust verified testimonials more' },
  { value: '3.2x', label: 'more conversions with verified social proof' },
  { value: '76%', label: 'of buyers look for trust signals before purchasing' },
]

const verificationSteps = [
  {
    title: 'Email verification',
    description: 'Every person who leaves a testimonial receives a confirmation email. Only email-verified testimonials are published.',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    title: 'Business review',
    description: 'The business owner reviews and approves each testimonial, ensuring it comes from a real customer.',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
      </svg>
    ),
  },
  {
    title: 'Automatic badge',
    description: 'Once you have verified testimonials, the badge appears automatically on your widget and mini site.',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
]

export default function VerifiedBadgePage() {
  const breadcrumbJsonLd = breadcrumbSchema([
    { name: 'Home', url: 'https://opinafy.com/en' },
    { name: 'Verified Badge', url: 'https://opinafy.com/en/verified' },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <NavbarEn />

      {/* Hero */}
      <section className="bg-gradient-to-b from-green-50 to-white px-4 pb-16 pt-24 sm:pb-24 sm:pt-32">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-block rounded-full bg-green-100 px-4 py-1.5 text-sm font-medium text-green-700">
            Verified trust
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Verified by Opinafy Badge
          </h1>
          <p className="mt-6 text-lg text-gray-600 sm:text-xl">
            The seal that guarantees testimonials on your website are real, email-verified, and reviewed by the business.
          </p>
        </div>
      </section>

      {/* Badge Preview */}
      <section className="bg-white px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            What the badge looks like
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            A visual seal that conveys trust to your visitors
          </p>
          <div className="mt-12 flex justify-center">
            <div className="inline-flex items-center gap-3 rounded-xl border-2 border-green-200 bg-gradient-to-r from-green-50 to-emerald-50 px-6 py-4 shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500">
                <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-green-800">Verified by Opinafy</p>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-1 text-sm text-gray-600">4.9 (127 testimonials)</span>
                </div>
              </div>
            </div>
          </div>
          <p className="mt-6 text-sm text-gray-500">
            The badge shows the average rating and number of verified testimonials for your project.
          </p>
        </div>
      </section>

      {/* What it means */}
      <section className="bg-gray-50 px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">
            What the badge means
          </h2>
          <p className="mt-4 text-center text-lg text-gray-600">
            A three-step verification process to guarantee authenticity
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {verificationSteps.map((step) => (
              <div key={step.title} className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-green-600">
                  {step.icon}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{step.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For consumers */}
      <section className="bg-white px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl border border-green-200 bg-green-50 p-8 sm:p-12">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-500">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-green-900">For consumers</h2>
                <p className="mt-3 text-lg text-green-800">
                  If you see this badge on a website, it means the testimonials shown are real and verified.
                  Each testimonial has been confirmed via email and reviewed by the business before being published.
                </p>
                <p className="mt-3 text-green-700">
                  These are not fabricated or manipulated testimonials. You can trust them to make your purchasing decision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust statistics */}
      <section className="bg-gray-50 px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">
            Trust matters
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {trustStats.map((stat) => (
              <div key={stat.value} className="text-center">
                <p className="text-4xl font-extrabold text-indigo-600">{stat.value}</p>
                <p className="mt-2 text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to get it */}
      <section className="bg-white px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">
            How to get the badge
          </h2>
          <div className="mt-12 space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-600 text-sm font-bold text-white">1</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Sign up for Opinafy</h3>
                <p className="mt-1 text-gray-600">Create your free account and set up your first testimonial project.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-600 text-sm font-bold text-white">2</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Collect verified testimonials</h3>
                <p className="mt-1 text-gray-600">Your customers will receive a verification email. Only verified testimonials count toward the badge.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-600 text-sm font-bold text-white">3</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">The badge appears automatically</h3>
                <p className="mt-1 text-gray-600">Once you have approved testimonials, you can embed the badge on your website using a simple HTML code.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Embed code preview */}
      <section className="bg-gray-50 px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">
            Easy to integrate
          </h2>
          <p className="mt-4 text-center text-lg text-gray-600">
            Copy and paste this code on your website to display the badge
          </p>
          <div className="mt-8 overflow-hidden rounded-xl border border-gray-200 bg-gray-900 p-6">
            <code className="block text-sm text-green-400">
              {'<a href="https://opinafy.com/en/verified">'}<br />
              {'  <img src="https://opinafy.com/api/badge/YOUR_PROJECT"'}<br />
              {'       alt="Verified by Opinafy" />'}<br />
              {'</a>'}
            </code>
          </div>
          <p className="mt-4 text-center text-sm text-gray-500">
            Replace YOUR_PROJECT with your project ID. You&apos;ll find the exact code in your dashboard.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-600 px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Increase trust on your website
          </h2>
          <p className="mt-4 text-lg text-indigo-100">
            Start collecting verified testimonials today and display the trust badge to your visitors.
          </p>
          <Link
            href="/en/register"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-base font-semibold text-indigo-600 shadow-lg transition-all hover:bg-indigo-50 hover:shadow-xl"
          >
            Create free account
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>

      <FooterEn />
    </>
  )
}
