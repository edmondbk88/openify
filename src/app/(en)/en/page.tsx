export const revalidate = 3600

import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { NavbarEn } from '@/components/landing/navbar-en'
import { FooterEn } from '@/components/landing/footer-en'
import {
  organizationSchema,
  webSiteSchema,
  softwareApplicationSchema,
  breadcrumbSchema,
} from '@/lib/schema'

export const metadata: Metadata = {
  title: { absolute: 'Opinafy - Testimonial Software to Collect, Manage & Display Reviews' },
  description:
    'The testimonial management software built for Europe. Collect, manage, and display authentic customer testimonials with customizable widgets. Automate testimonial collection and boost conversions.',
  keywords: [
    'testimonial software',
    'testimonial management software',
    'testimonial software europa',
    'testimonial tool europa',
    'automated testimonial collection',
    'collect customer testimonials',
    'testimonial widgets',
    'social proof software',
  ],
  alternates: {
    canonical: 'https://opinafy.com/en',
    languages: {
      'es': 'https://opinafy.com',
      'en': 'https://opinafy.com/en',
      'x-default': 'https://opinafy.com',
    },
  },
  openGraph: {
    title: 'Opinafy - Testimonial Software to Collect, Manage & Display Reviews',
    description:
      'The testimonial management software built for Europe. Collect and display authentic customer testimonials with customizable widgets.',
    url: 'https://opinafy.com/en',
    type: 'website',
    siteName: 'Opinafy',
    locale: 'en_US',
    images: [{ url: '/og.png', width: 1200, height: 630 }],
  },
}

/* ── Inline section components ── */

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Turn customer opinions into your best sales tool
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-600 sm:text-xl">
            Collect, manage, and display authentic testimonials on your website with
            customizable widgets. Build trust with your visitors and boost your conversions
            effortlessly.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/en/register"
              className="inline-flex h-12 w-full items-center justify-center rounded-lg bg-indigo-600 px-8 text-base font-semibold text-white shadow-lg shadow-indigo-200 transition-all hover:bg-indigo-700 hover:shadow-xl hover:shadow-indigo-200 sm:w-auto"
            >
              Get Started Free
            </Link>
            <Link
              href="/en/templates"
              className="inline-flex h-12 w-full items-center justify-center rounded-lg border border-gray-300 bg-white px-8 text-base font-semibold text-gray-700 transition-colors hover:bg-gray-50 sm:w-auto"
            >
              View Templates
            </Link>
          </div>
        </div>

        {/* Widget mockup */}
        <div className="mx-auto mt-16 max-w-4xl sm:mt-20">
          <div className="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-2xl shadow-indigo-100 sm:p-10">
            <div className="mb-6 flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
              <span className="ml-3 h-6 flex-1 rounded-md bg-gray-100" />
            </div>
            <p className="mb-4 text-center text-xs font-medium uppercase tracking-wider text-indigo-500">
              Widget Preview
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                {
                  name: 'Sarah Johnson',
                  company: 'Bloom Florals',
                  role: 'CEO',
                  text: '"Opinafy helped us showcase our customer reviews in a professional way."',
                  is_company_verified: true,
                },
                {
                  name: 'James Carter',
                  company: 'TechBridge',
                  role: 'Founder',
                  text: '"Since we installed the widget, our conversions increased by 30%."',
                  is_company_verified: true,
                },
                {
                  name: 'Emily Davis',
                  company: 'Creative Studio',
                  role: 'Director',
                  text: '"The integration was incredibly easy. We had it running in 5 minutes."',
                  is_company_verified: false,
                },
              ].map((t) => (
                <div key={t.name} className="rounded-xl border border-gray-100 bg-gray-50 p-4">
                  <div className="mb-2 flex text-yellow-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">{t.text}</p>
                  <div className="mt-3">
                    <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                    <div className="flex items-center gap-1">
                      <p className="text-xs text-gray-500">{t.role}, {t.company}</p>
                      {t.is_company_verified && (
                        <span className="inline-flex items-center gap-0.5 rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700">
                          <svg className="h-3 w-3 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.403 12.652a3 3 0 010-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                          </svg>
                          Verified
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute -left-40 -top-40 h-80 w-80 rounded-full bg-indigo-100 opacity-40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-purple-100 opacity-40 blur-3xl" />
    </section>
  )
}

const features = [
  {
    title: 'Double Verification (Email + Company)',
    description:
      'The only platform that verifies both the author\'s email and the associated company. Maximum testimonial credibility.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: '100 Templates + Mini Site',
    description:
      '100 widget templates (incl. 35 creative) and 30 mini site templates by profession. Customize colors, fonts and more.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    title: 'Video, Audio & Photo Testimonials',
    description:
      'Record video/audio directly from the browser or upload photos. 4 video display modes for your website.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  {
    title: 'Import from 7 Platforms',
    description:
      'Centralize reviews from Google Maps, TripAdvisor, Trustpilot, Facebook, Yelp, Capterra and G2 in one place.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
      </svg>
    ),
  },
  {
    title: 'A/B Testing + Analytics',
    description:
      'Test different testimonials and measure impressions, clicks and conversions. Optimize social proof with real data.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    title: 'Smart Automation',
    description:
      'Automated testimonial request emails, AI social post generator, and webhooks for Zapier/Make integration.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
      </svg>
    ),
  },
]

function Features() {
  return (
    <section id="features" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to manage testimonials
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Powerful and easy-to-use tools to collect, manage, and display
            your customer reviews.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:border-indigo-100 hover:shadow-md"
            >
              <div className="mb-4 inline-flex rounded-lg bg-indigo-50 p-3 text-indigo-600 transition-colors group-hover:bg-indigo-100">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const steps = [
  {
    number: '1',
    title: 'Create your project and customize your form',
    description:
      'Sign up for free, create a project, and configure your collection form with your branding, colors, and the fields you need.',
  },
  {
    number: '2',
    title: 'Share the link with your customers',
    description:
      'Send the unique link to your form via email, WhatsApp, or social media. Your customers can leave a testimonial in seconds.',
  },
  {
    number: '3',
    title: 'Approve testimonials and display your widget',
    description:
      'Review and approve testimonials from your dashboard. Copy the widget code and paste it on your website to display them instantly.',
  },
]

function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-gray-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            It&apos;s that easy
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            In three simple steps you&apos;ll have real testimonials on your website.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <div className="relative grid gap-12 md:grid-cols-3 md:gap-8">
            <div className="absolute left-0 right-0 top-8 hidden h-0.5 bg-indigo-200 md:block" />
            {steps.map((step) => (
              <div key={step.number} className="relative flex flex-col items-center text-center">
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-600 text-2xl font-bold text-white shadow-lg shadow-indigo-200">
                  {step.number}
                </div>
                <h3 className="mt-6 text-lg font-semibold text-gray-900">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg className="h-5 w-5 shrink-0 text-emerald-400" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  )
}

function MiniSiteShowcase() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-900 px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="pointer-events-none absolute -left-40 -top-40 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <span className="inline-block rounded-full bg-indigo-500/20 px-4 py-1.5 text-sm font-semibold text-indigo-200">
            Opinafy Mini Site
          </span>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Your professional testimonials page
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-indigo-200">
            Don&apos;t have a website? You don&apos;t need one. With Opinafy, your mini site collects and displays
            verified testimonials. Perfect for freelancers and independent professionals.
          </p>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: mockup */}
          <div className="order-2 lg:order-1">
            <div className="mx-auto w-full max-w-md overflow-hidden rounded-xl border border-white/20 bg-white shadow-2xl">
              <div className="flex items-center gap-2 border-b border-gray-100 bg-gray-50 px-4 py-2.5">
                <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
                <div className="ml-3 flex-1 rounded-md bg-white px-3 py-1 text-xs text-gray-500">
                  opinafy.com/s/sarah-coach
                </div>
              </div>
              <div className="bg-gradient-to-b from-indigo-50 to-white p-6">
                <div className="text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-indigo-100 text-lg font-bold text-indigo-600">
                    SJ
                  </div>
                  <h3 className="mt-3 text-base font-bold text-gray-900">Sarah Johnson</h3>
                  <p className="text-xs text-gray-500">Business Coach</p>
                  <div className="mt-1.5 flex items-center justify-center gap-0.5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <StarIcon key={i} className="h-3.5 w-3.5 text-amber-400" />
                    ))}
                    <span className="ml-1 text-xs font-medium text-gray-600">4.9</span>
                    <span className="text-xs text-gray-500">(47)</span>
                  </div>
                </div>
                <div className="mt-5 space-y-3">
                  {[
                    { name: 'Peter R.', text: 'Thanks to Sarah I tripled my income in 6 months.', rating: 5, verified: true },
                    { name: 'Anna G.', text: 'Clear and well-structured sessions. 100% recommended.', rating: 5, verified: false },
                    { name: 'Carlos M.', text: 'Excellent professional, results from the first week.', rating: 4, verified: true },
                  ].map((t, i) => (
                    <div key={i} className="rounded-lg border border-gray-100 bg-white p-3 shadow-sm">
                      <div className="flex items-center gap-0.5">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <StarIcon key={s} className={`h-3 w-3 ${s <= t.rating ? 'text-amber-400' : 'text-gray-200'}`} />
                        ))}
                      </div>
                      <p className="mt-1.5 text-xs leading-relaxed text-gray-600">&ldquo;{t.text}&rdquo;</p>
                      <div className="mt-2 flex items-center gap-1">
                        <span className="text-xs font-medium text-gray-800">{t.name}</span>
                        {t.verified && (
                          <svg className="h-3 w-3 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.403 12.652a3 3 0 010-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: features */}
          <div className="order-1 lg:order-2">
            <ul className="space-y-5">
              {[
                { title: 'Custom URL', description: 'opinafy.com/s/your-name' },
                { title: '30 templates by profession', description: 'Designs tailored to every professional sector' },
                { title: 'Automatic company verification', description: 'Trust seal for your customers' },
                { title: 'QR code + WhatsApp sharing', description: 'Collect testimonials effortlessly' },
                { title: 'Starting at just 5 EUR/month', description: 'Affordable plans for every professional' },
              ].map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckIcon />
                  <div>
                    <p className="text-base font-semibold text-white">{f.title}</p>
                    <p className="mt-0.5 text-sm text-indigo-200">{f.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <Link
                href="/en/register"
                className="inline-flex h-12 items-center rounded-lg bg-white px-8 text-base font-semibold text-indigo-700 shadow-lg transition-all hover:bg-indigo-50 hover:shadow-xl"
              >
                Create your mini site free
              </Link>
              <p className="mt-3 text-sm text-indigo-300">
                No credit card required. Set up your page in 2 minutes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const sampleTestimonials = [
  {
    name: 'Elena R.',
    role: 'Verified customer',
    company: 'Bloom Florals',
    avatar: 'ER',
    text: 'The service was excellent, it exceeded all my expectations. Totally recommended.',
    rating: 5,
    is_company_verified: true,
  },
  {
    name: 'Paul M.',
    role: 'Regular customer',
    company: 'TechBridge',
    avatar: 'PM',
    text: 'Fast, professional, and with an impressive attention to detail. I will definitely come back.',
    rating: 5,
    is_company_verified: true,
  },
  {
    name: 'Lucy S.',
    role: 'First purchase',
    company: 'Vital Coaching',
    avatar: 'LS',
    text: 'Everything was perfect from the start. The product quality is unbeatable.',
    rating: 4,
    is_company_verified: false,
  },
  {
    name: 'Mark D.',
    role: 'Verified customer',
    company: 'Luna Creative Studio',
    avatar: 'MD',
    text: 'A fantastic purchasing experience. The delivery arrived earlier than expected.',
    rating: 5,
    is_company_verified: true,
  },
  {
    name: 'Sara T.',
    role: 'Frequent customer',
    company: 'North Academy',
    avatar: 'ST',
    text: 'We have been working with them for months and they always deliver. Very professional.',
    rating: 5,
    is_company_verified: false,
  },
  {
    name: 'Andrew G.',
    role: 'New customer',
    company: 'The Good Taste Restaurant',
    avatar: 'AG',
    text: 'I loved the final result. I will definitely trust this team again.',
    rating: 5,
    is_company_verified: false,
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 text-yellow-400">
      {Array.from({ length: rating }).map((_, i) => (
        <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
        </svg>
      ))}
    </div>
  )
}

function VerifiedBadge() {
  return (
    <span className="inline-flex items-center gap-0.5 rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700">
      <svg className="h-3 w-3 text-green-600" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M16.403 12.652a3 3 0 010-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
      </svg>
      Verified
    </span>
  )
}

function TestimonialCard({ t }: { t: typeof sampleTestimonials[number] }) {
  return (
    <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
      <StarRating rating={t.rating} />
      <p className="mt-2 text-sm leading-relaxed text-gray-600">
        &ldquo;{t.text}&rdquo;
      </p>
      <div className="mt-3 flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-xs font-semibold text-indigo-600">
          {t.avatar}
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-900">{t.name}</p>
          <div className="flex items-center gap-1.5">
            <p className="text-xs text-gray-500">{t.company}</p>
            {t.is_company_verified && <VerifiedBadge />}
          </div>
          <p className="text-xs text-gray-500">{t.role}</p>
        </div>
      </div>
    </div>
  )
}

function TestimonialsPreview() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            See Opinafy in action
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Discover how your customer testimonials look with our different layouts.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl gap-8 lg:grid-cols-3">
          {/* Carousel Layout */}
          <div className="flex flex-col rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
            <span className="mb-1 inline-block text-xs font-semibold uppercase tracking-wider text-indigo-600">
              Carousel Layout
            </span>
            <p className="mb-4 text-sm text-gray-500">
              Ideal for highlighting testimonials one by one with smooth transitions.
            </p>
            <div className="relative flex-1 overflow-hidden rounded-xl border border-gray-200 bg-white p-4">
              <div className="space-y-3">
                <TestimonialCard t={sampleTestimonials[0]} />
              </div>
              <div className="mt-3 flex justify-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-indigo-600" />
                <span className="h-2 w-2 rounded-full bg-gray-300" />
                <span className="h-2 w-2 rounded-full bg-gray-300" />
              </div>
            </div>
          </div>

          {/* Grid Layout */}
          <div className="flex flex-col rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
            <span className="mb-1 inline-block text-xs font-semibold uppercase tracking-wider text-indigo-600">
              Grid Layout
            </span>
            <p className="mb-4 text-sm text-gray-500">
              Show multiple testimonials at once in an organized format.
            </p>
            <div className="flex-1 overflow-hidden rounded-xl border border-gray-200 bg-white p-4">
              <div className="grid grid-cols-2 gap-2">
                {sampleTestimonials.slice(0, 4).map((t) => (
                  <div key={t.name} className="rounded-lg border border-gray-100 bg-gray-50 p-2">
                    <div className="flex gap-0.5 text-yellow-400">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <svg key={i} className="h-3 w-3 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
                        </svg>
                      ))}
                    </div>
                    <p className="mt-1 text-xs text-gray-600 line-clamp-2">&ldquo;{t.text}&rdquo;</p>
                    <div className="mt-1 flex items-center gap-1">
                      <p className="text-xs font-medium text-gray-900">{t.name}</p>
                      {t.is_company_verified && (
                        <svg className="h-3 w-3 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.403 12.652a3 3 0 010-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Wall Layout */}
          <div className="flex flex-col rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
            <span className="mb-1 inline-block text-xs font-semibold uppercase tracking-wider text-indigo-600">
              Wall Layout
            </span>
            <p className="mb-4 text-sm text-gray-500">
              Masonry style to create an impressive testimonial wall.
            </p>
            <div className="flex-1 overflow-hidden rounded-xl border border-gray-200 bg-white p-4">
              <div className="columns-2 gap-2 space-y-2">
                {sampleTestimonials.slice(1, 5).map((t, idx) => (
                  <div key={t.name} className="break-inside-avoid rounded-lg border border-gray-100 bg-gray-50 p-2">
                    <div className="flex gap-0.5 text-yellow-400">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <svg key={i} className="h-3 w-3 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
                        </svg>
                      ))}
                    </div>
                    <p className={`mt-1 text-xs text-gray-600 ${idx % 2 === 0 ? 'line-clamp-3' : 'line-clamp-2'}`}>
                      &ldquo;{t.text}&rdquo;
                    </p>
                    <div className="mt-1 flex items-center gap-1">
                      <p className="text-xs font-medium text-gray-900">{t.name}</p>
                      {t.is_company_verified && (
                        <svg className="h-3 w-3 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.403 12.652a3 3 0 010-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-xs italic text-gray-500">
          * The testimonials shown are demo examples of how they would look on your website.
        </p>

        <div className="mt-12 text-center">
          <Link
            href="/en/templates"
            className="inline-flex items-center gap-2 text-base font-semibold text-indigo-600 hover:text-indigo-700"
          >
            Explore all 100 available templates
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

const plans = [
  {
    name: 'Free',
    price: '0',
    description: 'Perfect for trying out the platform.',
    features: [
      '1 project',
      '10 testimonials',
      '2 available layouts',
      'Audio & photo testimonials',
      'Sentiment analysis',
      'Free Health Score',
      'Company verification',
      'Opinafy branding on widget',
    ],
    cta: 'Get Started Free',
    highlighted: false,
  },
  {
    name: 'Mini Site',
    price: '5',
    description: 'Ideal for professionals and freelancers.',
    features: [
      '1 project',
      '20 testimonials',
      'Customizable mini site',
      '30 templates by profession',
      '2 available layouts',
      'Audio & photo testimonials',
      'Sentiment analysis',
      'Free Health Score',
      'Company verification',
    ],
    cta: 'Choose Mini Site',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '9',
    description: 'For businesses that want to grow.',
    features: [
      '3 projects',
      'Unlimited testimonials',
      'All layouts + FOMO popup',
      'A/B testing + analytics',
      'Import from 7 platforms',
      'Request automation',
      'AI social post generator',
      '6 email templates',
      'Webhooks (Zapier/Make)',
      'PDF export',
      'No Opinafy branding',
      'Priority support',
    ],
    cta: 'Choose Pro',
    highlighted: true,
    badge: 'Most Popular',
  },
  {
    name: 'Business',
    price: '19',
    description: 'For teams and agencies.',
    features: [
      'Unlimited projects',
      'Unlimited testimonials',
      'Video testimonials (webcam)',
      '100 templates (35 creative)',
      'Verified certification badge',
      'Ranking / Leaderboard',
      '4 video display modes',
      'Smart widget (data-tags)',
      'Owner reply to testimonials',
      'Featured/pinned testimonials',
      '3 team seats',
      'Dedicated support',
    ],
    cta: 'Choose Business',
    highlighted: false,
  },
]

function Pricing() {
  return (
    <section id="pricing" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Simple and transparent pricing
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Start for free and scale when you need to. No surprises or hidden costs.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-8 ${
                plan.highlighted
                  ? 'border-indigo-600 shadow-xl shadow-indigo-100 ring-1 ring-indigo-600'
                  : 'border-gray-200 shadow-sm'
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-indigo-600 px-4 py-1 text-xs font-semibold text-white">
                  {plan.badge}
                </span>
              )}
              <h3 className="text-lg font-semibold text-gray-900">{plan.name}</h3>
              <p className="mt-1 text-sm text-gray-500">{plan.description}</p>
              <div className="mt-6 flex items-baseline">
                <span className="text-4xl font-extrabold text-gray-900">&euro;{plan.price}</span>
                <span className="ml-1 text-base text-gray-500">/mo</span>
              </div>
              <ul className="mt-8 flex-1 space-y-3" role="list">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-gray-600">
                    <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/en/register"
                className={`mt-8 inline-flex h-11 items-center justify-center rounded-lg text-sm font-semibold transition-colors ${
                  plan.highlighted
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                    : 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const faqs = [
  {
    question: 'What is Opinafy?',
    answer:
      'Opinafy is a SaaS platform that lets you collect, manage, and display customer testimonials on your website. With customizable forms and embeddable widgets, you can showcase authentic social proof and boost conversions.',
  },
  {
    question: 'How do I install the widget on my website?',
    answer:
      'It is very simple. Once you have approved testimonials, go to the widget section in your dashboard, choose the layout you prefer, customize the colors, and copy the code snippet. Paste it in your website HTML where you want the testimonials to appear.',
  },
  {
    question: 'Can I customize the design?',
    answer:
      'Yes. You can customize the colors, typography, layout (carousel, grid, or wall), and other visual aspects of the widget so it integrates perfectly with your website design.',
  },
  {
    question: 'Is there a free plan?',
    answer:
      'Yes, we offer a free plan that includes 1 project, up to 10 testimonials, and 2 layouts. It is perfect for trying out the platform with no commitment. You can upgrade to a paid plan at any time.',
  },
  {
    question: 'Do testimonials help with SEO?',
    answer:
      'Yes. Testimonials are rendered as real HTML content on your page, making them indexable by search engines. We also use structured data (schema markup) to improve visibility in search results.',
  },
  {
    question: 'Can I migrate from another platform?',
    answer:
      'Yes, you can manually import existing testimonials from your dashboard. If you need a bulk migration, our support team can help you with the process.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept credit and debit cards (Visa, Mastercard, American Express) through Stripe, our secure payment gateway. All payments are protected with SSL encryption.',
  },
  {
    question: 'Does it work with WordPress/Shopify?',
    answer:
      'Yes, the Opinafy widget is compatible with any web platform, including WordPress, Shopify, Wix, Squarespace, and any custom HTML site. You just need to paste a code snippet.',
  },
]

const integrationPlatforms = [
  { name: 'WordPress', letter: 'W', bg: '#21759b' },
  { name: 'Shopify', letter: 'S', bg: '#96bf48' },
  { name: 'WooCommerce', letter: 'Woo', bg: '#7f54b3' },
  { name: 'Wix', letter: 'Wix', bg: '#0C6EFC' },
  { name: 'Squarespace', letter: 'Sq', bg: '#000000' },
  { name: 'Webflow', letter: 'Wf', bg: '#4353FF' },
  { name: 'PrestaShop', letter: 'Ps', bg: '#DF0067' },
  { name: 'GTM', letter: 'GTM', bg: '#4285F4' },
  { name: 'React / Next.js', letter: 'R', bg: '#61DAFB' },
  { name: 'HTML', letter: '</>', bg: '#E44D26' },
]


function IntegrationsPlatforms() {
  return (
    <section className="bg-gray-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Integrates with any platform
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Install Opinafy on your website in under 2 minutes. Compatible with all platforms.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-5">
          {integrationPlatforms.map((platform) => (
            <div
              key={platform.name}
              className="group flex flex-col items-center gap-3 transition-colors duration-200"
            >
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl text-lg font-bold text-white transition-transform group-hover:scale-110"
                style={{ backgroundColor: platform.bg }}
              >
                {platform.letter}
              </div>
              <span className="text-sm font-medium text-gray-500 transition-colors group-hover:text-gray-900">
                {platform.name}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/en/downloads"
            className="inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 transition-colors hover:text-indigo-700"
          >
            View all integrations
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

function Faq() {
  return (
    <section id="faq" className="bg-gray-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Find answers to the most common questions about Opinafy.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-3xl divide-y divide-gray-200">
          {faqs.map((faq, index) => (
            <details key={index} className="group py-5">
              <summary className="flex w-full cursor-pointer items-center justify-between text-left list-none [&::-webkit-details-marker]:hidden">
                <span className="text-base font-medium text-gray-900">{faq.question}</span>
                <svg
                  className="ml-4 h-5 w-5 flex-shrink-0 text-gray-500 transition-transform duration-200 group-open:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-indigo-600 py-20 sm:py-28">
      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Start collecting testimonials today
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-indigo-100">
          Start collecting testimonials today and turn your customer opinions
          into sales. No credit card required.
        </p>
        <div className="mt-10">
          <Link
            href="/en/register"
            className="inline-flex h-12 items-center rounded-lg bg-white px-8 text-base font-semibold text-indigo-600 shadow-lg transition-all hover:bg-indigo-50 hover:shadow-xl"
          >
            Create free account
          </Link>
        </div>
      </div>
      <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-indigo-500 opacity-30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-indigo-700 opacity-30 blur-3xl" />
    </section>
  )
}

/* ── Page ── */

export default function HomePageEn() {
  const orgJsonLd = organizationSchema({ lang: 'en' })
  const siteJsonLd = webSiteSchema({ lang: 'en' })
  const appJsonLd = softwareApplicationSchema({ lang: 'en' })
  const breadcrumbJsonLd = breadcrumbSchema([
    { name: 'Home', url: 'https://opinafy.com/en' },
  ])

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <NavbarEn />
      <Hero />
      <Features />
      <HowItWorks />

      {/* Product screenshot */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Meet the dashboard
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-lg text-gray-600">
              Manage all your testimonials, projects, and widgets from an intuitive dashboard.
            </p>
          </div>
          <div className="mt-10 overflow-hidden rounded-xl border border-gray-200 shadow-2xl">
            <Image src="https://rckjevsqxkfixkdloqjv.supabase.co/storage/v1/object/public/logos/site/screenshots/plantillas.png" alt="Opinafy testimonial templates gallery" width={1440} height={900} className="w-full" />
          </div>
        </div>
      </section>

      <MiniSiteShowcase />
      <TestimonialsPreview />
      <Pricing />
      <IntegrationsPlatforms />
      <Faq />
      <CtaSection />
      <FooterEn />
    </>
  )
}
