import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { NavbarEn } from '@/components/landing/navbar-en'
import { FooterEn } from '@/components/landing/footer-en'
import { webPageSchema, breadcrumbSchema, organizationSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Meet the team behind Opinafy, the leading Spanish-native platform for customer testimonials.',
  alternates: {
    canonical: 'https://opinafy.com/en/about',
    languages: {
      es: 'https://opinafy.com/sobre',
      en: 'https://opinafy.com/en/about',
      'x-default': 'https://opinafy.com/sobre',
    },
  },
  openGraph: {
    title: 'About Us',
    description:
      'Meet the team behind Opinafy, the leading Spanish-native platform for customer testimonials.',
    url: 'https://opinafy.com/en/about',
    type: 'website',
    siteName: 'Opinafy',
    locale: 'en_US',
    images: [{ url: '/og.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us',
    description:
      'Meet the team behind Opinafy, the leading Spanish-native platform for customer testimonials.',
    images: ['/og.png'],
  },
}

const values = [
  {
    icon: (
      <svg className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
    title: 'Simplicity',
    description:
      'We believe managing testimonials should not require a manual. Our platform is intuitive from the very first minute.',
  },
  {
    icon: (
      <svg className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Transparency',
    description:
      'Clear pricing, no hidden costs, and real verification of every testimonial. What you see is what you get.',
  },
  {
    icon: (
      <svg className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: 'Accessibility',
    description:
      'Professional tools within reach of any business, from freelancers to large enterprise teams.',
  },
  {
    icon: (
      <svg className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: 'Innovation',
    description:
      '100+ templates, double verification, video testimonials, A/B testing — features that competitors charge much more for.',
  },
]

const stats = [
  { value: '100+', label: 'Widget templates' },
  { value: '7', label: 'Different layouts' },
  { value: '30', label: 'Mini site templates' },
  { value: '10+', label: 'Integrations' },
]

export default function AboutPage() {
  const pageJsonLd = webPageSchema({
    name: 'About Us - Opinafy',
    url: 'https://opinafy.com/en/about',
    description:
      'Meet the team behind Opinafy, the leading Spanish-native platform for customer testimonials.',
    lang: 'en',
  })

  const breadcrumbJsonLd = breadcrumbSchema([
    { name: 'Home', url: 'https://opinafy.com/en' },
    { name: 'About', url: 'https://opinafy.com/en/about' },
  ])

  const orgJsonLd = {
    ...organizationSchema({ lang: 'en' }),
    founder: {
      '@type': 'Person',
      name: 'Edmond Bojalil',
      url: 'https://www.linkedin.com/in/edmondbojalil/',
      image: 'https://opinafy.comhttps://rckjevsqxkfixkdloqjv.supabase.co/storage/v1/object/public/logos/site/edmond-bojalil.jpg',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <NavbarEn />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-700 py-24 text-white sm:py-32">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            About Opinafy
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-indigo-100 sm:text-xl">
            We were born with a mission: to help Spanish-speaking businesses turn
            the voice of their customers into their most powerful growth tool.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Mission
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-gray-600">
            <p>
              When we started researching the customer testimonial market, we noticed
              something obvious: there was no native Spanish tool. All the leading
              platforms — Testimonial.to, Senja, Famewall — are built for the
              English-speaking market. English interface, English support, English
              templates.
            </p>
            <p>
              Spanish-speaking businesses deserve a tool that speaks their language,
              understands their market, and is designed from the ground up for their
              needs. That tool is <strong>Opinafy</strong>.
            </p>
            <p>
              Our mission is to democratize access to professional social proof for
              any Spanish-speaking business, whether you are a freelancer just starting
              out, an established SMB, or an enterprise with distributed teams. We want
              managing testimonials to be as simple as sending a message and as powerful
              as an advertising campaign.
            </p>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="bg-gray-50 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Founder
          </h2>
          <div className="mt-10 flex flex-col items-center gap-8 sm:flex-row sm:items-start">
            <Image
              src="https://rckjevsqxkfixkdloqjv.supabase.co/storage/v1/object/public/logos/site/edmond-bojalil.webp"
              alt="Edmond Bojalil — Founder of Opinafy"
              width={96}
              height={96}
              className="rounded-full object-cover"
              priority
            />
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">Edmond Bojalil</h3>
              <p className="text-lg font-medium text-indigo-600">Founder &amp; Lead Developer</p>
              <div className="mt-4 space-y-3 text-lg leading-relaxed text-gray-600">
                <p>
                  Mexican-born developer with 15+ years of experience, based in Madrid, Spain.
                  Currently Senior Backend &amp; Full Stack Developer at Rankia, one of the largest
                  Spanish-speaking financial communities. Holds a degree in Design &amp; New
                  Technologies from IBERO Puebla, graduating with the highest GPA medal in his class.
                </p>
                <p>
                  Creator of{' '}
                  <a href="https://recetasmexas.com" className="font-medium text-indigo-600 underline hover:text-indigo-800" target="_blank" rel="noopener noreferrer">
                    RecetasMexas.com
                  </a>
                  , the largest Mexican cuisine reference in Spain, featuring 400+ adapted recipes,
                  150+ mapped stores, and 550+ restaurants. He built Opinafy because he spotted an
                  obvious gap in the market: no testimonial platform existed natively in Spanish.
                </p>
              </div>
              <a
                href="https://www.linkedin.com/in/edmondbojalil/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-base font-medium text-indigo-600 hover:text-indigo-800"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Values
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              The principles that guide every decision we make.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900">{value.title}</h3>
                <p className="mt-2 text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gray-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Opinafy by the Numbers
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Everything you need to turn customer satisfaction into real growth.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl font-extrabold text-indigo-600 sm:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-lg font-medium text-gray-700">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Product */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Product
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              A complete platform to collect, manage, and display customer testimonials.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="overflow-hidden rounded-xl border border-gray-200 shadow-lg">
              <Image src="https://rckjevsqxkfixkdloqjv.supabase.co/storage/v1/object/public/logos/site/screenshots/dashboard.png" alt="Opinafy dashboard" width={1440} height={900} className="w-full" />
              <div className="p-4">
                <h3 className="font-semibold text-gray-900">Intuitive dashboard</h3>
                <p className="mt-1 text-sm text-gray-600">Manage all your testimonials and projects from a centralized panel.</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-xl border border-gray-200 shadow-lg">
              <Image src="https://rckjevsqxkfixkdloqjv.supabase.co/storage/v1/object/public/logos/site/screenshots/plantillas.png" alt="Opinafy templates gallery" width={1440} height={900} className="w-full" />
              <div className="p-4">
                <h3 className="font-semibold text-gray-900">100+ templates</h3>
                <p className="mt-1 text-sm text-gray-600">Choose from over 100 professional templates for widgets and mini sites.</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-xl border border-gray-200 shadow-lg">
              <Image src="https://rckjevsqxkfixkdloqjv.supabase.co/storage/v1/object/public/logos/site/screenshots/collection-form.png" alt="Testimonial collection form" width={1440} height={900} className="w-full" />
              <div className="p-4">
                <h3 className="font-semibold text-gray-900">Collection form</h3>
                <p className="mt-1 text-sm text-gray-600">Collect testimonials with text, photo, video, and audio directly from the browser.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-600 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Have questions?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-indigo-100">
            We are here to help. Write to us and we will get back to you as soon as
            possible.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/en/contact"
              className="inline-flex items-center rounded-lg bg-white px-8 py-3 text-base font-semibold text-indigo-600 shadow-sm transition-colors hover:bg-indigo-50"
            >
              Contact Us
            </Link>
            <Link
              href="/en/register"
              className="inline-flex items-center rounded-lg border-2 border-white px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              Start for free
            </Link>
          </div>
        </div>
      </section>

      <FooterEn />
    </>
  )
}
