import type { Metadata } from 'next'
import Link from 'next/link'
import { NavbarEn } from '@/components/landing/navbar-en'
import { FooterEn } from '@/components/landing/footer-en'
import { breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Opinafy for Agencies - Manage All Your Clients\' Testimonials',
  description:
    'Manage all your clients\' testimonials from one place. Multi-project, white-label, centralized dashboard, PDF reports and more. Business plan from EUR 19/month.',
  keywords: [
    'testimonials for agencies',
    'agency testimonial management',
    'white label testimonial platform',
    'agency testimonial tool',
    'opinafy agencies',
    'multi project testimonials',
    'agency client testimonials',
  ],
  alternates: {
    canonical: 'https://opinafy.com/en/agencies',
    languages: {
      es: 'https://opinafy.com/agencias',
      en: 'https://opinafy.com/en/agencies',
      'x-default': 'https://opinafy.com/agencias',
    },
  },
  openGraph: {
    title: 'Opinafy for Agencies - All Your Clients\' Testimonials',
    description:
      'Multi-project, white-label, centralized dashboard and PDF reports. Everything your agency needs from EUR 19/month.',
    url: 'https://opinafy.com/en/agencies',
    type: 'website',
    siteName: 'Opinafy',
    locale: 'en_US',
    images: [{ url: '/og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Opinafy for Agencies',
    description:
      'Manage all your clients\' testimonials from one place. Business plan from EUR 19/month.',
    images: ['/og.jpg'],
  },
}

const agencyFeatures = [
  {
    title: 'Multi-project',
    description: 'Up to 20 projects with the Business plan. One project per agency client.',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25a2.25 2.25 0 0 1-2.25-2.25v-2.25Z" />
      </svg>
    ),
  },
  {
    title: 'White-label',
    description: 'No Opinafy branding on paid plans. Your clients see your brand, not ours.',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
      </svg>
    ),
  },
  {
    title: 'Centralized dashboard',
    description: 'See all testimonials for all your clients in one panel. Filter by project, status, or date.',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
  },
  {
    title: 'Exportable PDF reports',
    description: 'Generate professional PDF reports to present to your clients with their testimonials and metrics.',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
      </svg>
    ),
  },
  {
    title: 'Webhooks for automation',
    description: 'Connect Opinafy with your favorite tools. Receive real-time notifications for new testimonials.',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
      </svg>
    ),
  },
  {
    title: 'Client-specific templates',
    description: 'Choose from 65+ templates and customize colors, fonts, and styles for each agency client.',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z" />
      </svg>
    ),
  },
  {
    title: 'Client mini sites',
    description: 'Each project has its own public mini site with all the verified testimonials for that client.',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
]

const testimonials = [
  {
    name: 'Carlos Mendez',
    role: 'Director, Impulsa Digital Agency',
    text: 'Opinafy lets us manage testimonials for our 15 clients from a single dashboard. The Business plan is perfect for agencies.',
    rating: 5,
  },
  {
    name: 'Laura Fernandez',
    role: 'CEO, Marketing360',
    text: 'White-label is a huge differentiator. Our clients see our brand and don\'t know we use Opinafy behind the scenes. Excellent tool.',
    rating: 5,
  },
  {
    name: 'Miguel Torres',
    role: 'Founder, GrowthLab Agency',
    text: 'The PDF reports we generate for our clients are professional and they love them. Opinafy has become an essential part of our stack.',
    rating: 5,
  },
]

export default function AgenciesPage() {
  const breadcrumbJsonLd = breadcrumbSchema([
    { name: 'Home', url: 'https://opinafy.com/en' },
    { name: 'Agencies', url: 'https://opinafy.com/en/agencies' },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <NavbarEn />

      {/* Hero */}
      <section className="bg-gradient-to-b from-indigo-50 to-white px-4 pb-16 pt-24 sm:pb-24 sm:pt-32">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-block rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-medium text-indigo-700">
            For agencies
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Opinafy for Agencies
          </h1>
          <p className="mt-6 text-lg text-gray-600 sm:text-xl">
            Manage all your clients&apos; testimonials from one place.
            Multi-project, white-label, and centralized dashboard.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/en/register"
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-indigo-700 hover:shadow-xl"
            >
              Start with the Business plan
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              href="/en/pricing"
              className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-8 py-3.5 text-base font-semibold text-gray-700 shadow-sm transition-all hover:bg-gray-50"
            >
              View pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Features for agencies */}
      <section className="bg-white px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">
            Everything your agency needs
          </h2>
          <p className="mt-4 text-center text-lg text-gray-600">
            Features designed specifically for marketing agencies
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {agencyFeatures.map((feature) => (
              <div key={feature.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
                  {feature.icon}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-gray-50 px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            The Business plan is perfect for agencies
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Everything you need for just EUR 19/month
          </p>
          <div className="mt-12 rounded-2xl border-2 border-indigo-500 bg-white p-8 shadow-lg">
            <div className="text-center">
              <p className="text-sm font-medium uppercase tracking-wide text-indigo-600">Business Plan</p>
              <p className="mt-4 flex items-baseline justify-center gap-1">
                <span className="text-5xl font-extrabold text-gray-900">19</span>
                <span className="text-xl text-gray-500">EUR/month</span>
              </p>
            </div>
            <ul className="mt-8 space-y-3 text-left">
              {[
                'Up to 20 projects (one project per client)',
                'Unlimited testimonials per project',
                'White-label (no Opinafy branding)',
                'All widget layouts',
                '65+ customizable templates',
                'Public mini site per project',
                'Exportable PDF reports',
                'Webhooks for automation',
                'Priority support',
                'Video testimonials',
                'Import from Google, Trustpilot and more',
              ].map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/en/register"
              className="mt-8 block w-full rounded-xl bg-indigo-600 py-3.5 text-center text-base font-semibold text-white transition-colors hover:bg-indigo-700"
            >
              Start with the Business plan
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials from agencies */}
      <section className="bg-white px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">
            What agencies say
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex gap-0.5">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="mt-4 text-gray-600">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="mt-4">
                  <p className="text-sm font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-600 px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Take your clients&apos; testimonials to the next level
          </h2>
          <p className="mt-4 text-lg text-indigo-100">
            Join the agencies already using Opinafy to manage their clients&apos; testimonials. Business plan from EUR 19/month.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/en/register"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-base font-semibold text-indigo-600 shadow-lg transition-all hover:bg-indigo-50 hover:shadow-xl"
            >
              Start with the Business plan
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              href="/en/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-white/10"
            >
              Contact sales
            </Link>
          </div>
        </div>
      </section>

      <FooterEn />
    </>
  )
}
