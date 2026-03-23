import type { Metadata } from 'next'
import { NavbarEn } from '@/components/landing/navbar-en'
import { FooterEn } from '@/components/landing/footer-en'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Press Kit - Opinafy',
  description:
    'Opinafy press kit. Download logos, screenshots, and find media information about the testimonial platform for Spanish-speaking businesses.',
  alternates: {
    canonical: 'https://opinafy.com/en/press',
    languages: {
      'es': 'https://opinafy.com/prensa',
      'en': 'https://opinafy.com/en/press',
      'x-default': 'https://opinafy.com/prensa',
    },
  },
  openGraph: {
    title: 'Press Kit - Opinafy',
    description:
      'Opinafy press kit. Logos, screenshots, and media resources.',
    url: 'https://opinafy.com/en/press',
    locale: 'en_US',
  },
}

const stats = [
  { label: 'Widget templates', value: '80+' },
  { label: 'Mini-site templates', value: '30+' },
  { label: 'Languages supported', value: '2' },
  { label: 'Blog articles', value: '320+' },
  { label: 'Industry pages', value: '320+' },
  { label: 'City+industry pages', value: '421' },
  { label: 'Integrations', value: '8+' },
  { label: 'Free plan', value: 'Yes' },
]

const screenshots = [
  {
    title: 'Main dashboard',
    description: 'Control panel with testimonial metrics, active widgets, and recent activity.',
  },
  {
    title: 'Widget editor',
    description: 'Customization interface with 80+ templates: grid, masonry, carousel, terminal, polaroid, and more.',
  },
  {
    title: 'Collection form',
    description: 'Testimonial submission form with email verification and video/audio recording.',
  },
  {
    title: 'Professional mini-site',
    description: 'Standalone testimonial page for professionals and businesses without their own website.',
  },
  {
    title: 'A/B Testing',
    description: 'A/B testing panel showing performance comparison between different widgets.',
  },
  {
    title: 'Review import',
    description: 'Import tool compatible with Google Business, TripAdvisor, Trustpilot, and more.',
  },
]

export default function PressPage() {
  return (
    <>
      <NavbarEn />
      <div className="min-h-screen bg-gray-50 pt-28">
        {/* Hero */}
        <div className="bg-white border-b border-gray-100">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 mb-4">
              <Link
                href="/prensa"
                className="text-sm text-indigo-600 hover:text-indigo-700 font-medium"
              >
                &larr; Version en espanol
              </Link>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Press Kit
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl">
              Official Opinafy resources for journalists, bloggers, and media outlets.
              Here you will find logos, stats, and all the information you need.
            </p>
            <div className="mt-6">
              <a
                href="mailto:hola@opinafy.com"
                className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 transition-colors"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Press contact: hola@opinafy.com
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 space-y-16">
          {/* Boilerplate */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">About Opinafy</h2>
            <div className="rounded-xl bg-white p-6 sm:p-8 shadow-sm border border-gray-100">
              <p className="text-gray-700 leading-relaxed mb-4">
                Opinafy is the first customer testimonial management platform built natively in Spanish.
                It enables businesses and professionals to collect, verify, and display authentic testimonials
                on their websites through embeddable widgets with over 80 professional templates.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The platform offers double verification (by email and company domain matching), webcam-only
                video testimonial recording (no file uploads to guarantee authenticity), professional mini-sites
                for those without their own website, built-in A/B testing, sentiment analysis, and review import
                from Google Business, TripAdvisor, and other platforms.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Founded in March 2026, Opinafy was created to fill the gap in social proof tools for the
                580+ million Spanish speakers worldwide. While all existing alternatives (Testimonial.to,
                Senja, Famewall) operate exclusively in English, Opinafy offers a fully native Spanish
                experience along with English support. Plans start at 5 euros per month, making it 3-4 times
                more affordable than competitors.
              </p>
            </div>
          </section>

          {/* Stats */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key numbers</h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl bg-white p-5 shadow-sm border border-gray-100 text-center"
                >
                  <p className="text-2xl font-bold text-indigo-600">{stat.value}</p>
                  <p className="mt-1 text-sm text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Logos */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Logos</h2>
            <p className="text-gray-600 mb-6">
              Download official Opinafy logos. Please do not modify colors or proportions.
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100">
                <div className="flex h-24 items-center justify-center rounded-lg bg-gray-50 mb-4">
                  <span className="text-2xl font-bold text-indigo-600">Opinafy</span>
                </div>
                <p className="text-sm font-medium text-gray-900">Primary logo</p>
                <p className="text-xs text-gray-500 mt-1">Light background - PNG / SVG</p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100">
                <div className="flex h-24 items-center justify-center rounded-lg bg-indigo-600 mb-4">
                  <span className="text-2xl font-bold text-white">Opinafy</span>
                </div>
                <p className="text-sm font-medium text-gray-900">Inverted logo</p>
                <p className="text-xs text-gray-500 mt-1">Dark background - PNG / SVG</p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100">
                <div className="flex h-24 items-center justify-center rounded-lg bg-gray-50 mb-4">
                  <div className="h-12 w-12 rounded-xl bg-indigo-600 flex items-center justify-center">
                    <span className="text-xl font-bold text-white">O</span>
                  </div>
                </div>
                <p className="text-sm font-medium text-gray-900">Icon / Favicon</p>
                <p className="text-xs text-gray-500 mt-1">Square - PNG / SVG</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              For high-resolution files, contact{' '}
              <a href="mailto:hola@opinafy.com" className="text-indigo-600 hover:text-indigo-700">
                hola@opinafy.com
              </a>
            </p>
          </section>

          {/* Screenshots */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Screenshots</h2>
            <p className="text-gray-600 mb-6">
              Screenshots of key platform features. Request high-resolution versions by email.
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              {screenshots.map((shot) => (
                <div
                  key={shot.title}
                  className="rounded-xl bg-white shadow-sm border border-gray-100 overflow-hidden"
                >
                  <div className="h-48 bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center">
                    <div className="text-center px-4">
                      <svg className="mx-auto h-10 w-10 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                      </svg>
                      <p className="mt-2 text-sm text-indigo-400">{shot.title}</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900">{shot.title}</h3>
                    <p className="mt-1 text-sm text-gray-600">{shot.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Founder */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Founder</h2>
            <div className="rounded-xl bg-white p-6 sm:p-8 shadow-sm border border-gray-100">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="h-24 w-24 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">EB</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Edmond Bojalil</h3>
                  <p className="text-indigo-600 font-medium">Founder & CEO</p>
                  <p className="mt-3 text-gray-700 leading-relaxed">
                    Full-stack developer based in Spain. He created Opinafy after realizing that no native
                    Spanish testimonial platform existed, despite the Spanish-speaking SaaS market growing
                    at 19% annually. His goal is to democratize access to social proof tools for the
                    580+ million Spanish speakers worldwide.
                  </p>
                  <div className="mt-4 flex gap-4">
                    <a
                      href="mailto:hola@opinafy.com"
                      className="text-sm text-indigo-600 hover:text-indigo-700 font-medium"
                    >
                      hola@opinafy.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Key Facts */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key facts</h2>
            <div className="rounded-xl bg-white p-6 sm:p-8 shadow-sm border border-gray-100">
              <dl className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:gap-4">
                  <dt className="text-sm font-semibold text-gray-900 sm:w-48 flex-shrink-0">Product name</dt>
                  <dd className="text-sm text-gray-700">Opinafy</dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:gap-4 border-t border-gray-50 pt-4">
                  <dt className="text-sm font-semibold text-gray-900 sm:w-48 flex-shrink-0">Website</dt>
                  <dd className="text-sm text-gray-700">
                    <a href="https://opinafy.com" className="text-indigo-600 hover:text-indigo-700">opinafy.com</a>
                  </dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:gap-4 border-t border-gray-50 pt-4">
                  <dt className="text-sm font-semibold text-gray-900 sm:w-48 flex-shrink-0">Founded</dt>
                  <dd className="text-sm text-gray-700">March 2026</dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:gap-4 border-t border-gray-50 pt-4">
                  <dt className="text-sm font-semibold text-gray-900 sm:w-48 flex-shrink-0">Headquarters</dt>
                  <dd className="text-sm text-gray-700">Spain</dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:gap-4 border-t border-gray-50 pt-4">
                  <dt className="text-sm font-semibold text-gray-900 sm:w-48 flex-shrink-0">Category</dt>
                  <dd className="text-sm text-gray-700">SaaS - Customer Testimonial Management</dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:gap-4 border-t border-gray-50 pt-4">
                  <dt className="text-sm font-semibold text-gray-900 sm:w-48 flex-shrink-0">Target market</dt>
                  <dd className="text-sm text-gray-700">Spanish-speaking businesses (580M+ speakers)</dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:gap-4 border-t border-gray-50 pt-4">
                  <dt className="text-sm font-semibold text-gray-900 sm:w-48 flex-shrink-0">Pricing</dt>
                  <dd className="text-sm text-gray-700">Free plan available. Paid plans from 5 euros/month</dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:gap-4 border-t border-gray-50 pt-4">
                  <dt className="text-sm font-semibold text-gray-900 sm:w-48 flex-shrink-0">Tech stack</dt>
                  <dd className="text-sm text-gray-700">Next.js 14, Supabase, Stripe, Vercel, Tailwind CSS</dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:gap-4 border-t border-gray-50 pt-4">
                  <dt className="text-sm font-semibold text-gray-900 sm:w-48 flex-shrink-0">Press contact</dt>
                  <dd className="text-sm text-gray-700">
                    <a href="mailto:hola@opinafy.com" className="text-indigo-600 hover:text-indigo-700">hola@opinafy.com</a>
                  </dd>
                </div>
              </dl>
            </div>
          </section>
        </div>
      </div>
      <FooterEn />
    </>
  )
}
