export const revalidate = 3600 // revalidate every hour — homepage content rarely changes

import dynamic from 'next/dynamic'
import Image from 'next/image'
import { Navbar } from '@/components/landing/navbar'
import { Hero } from '@/components/landing/hero'
import { Features } from '@/components/landing/features'
import { Footer } from '@/components/landing/footer'

// Dynamic imports for below-the-fold sections to reduce initial HTML payload
const HowItWorks = dynamic(() => import('@/components/landing/how-it-works').then(m => ({ default: m.HowItWorks })))
const TestimonialsPreview = dynamic(() => import('@/components/landing/testimonials-preview').then(m => ({ default: m.TestimonialsPreview })))
const Pricing = dynamic(() => import('@/components/landing/pricing').then(m => ({ default: m.Pricing })))
const Faq = dynamic(() => import('@/components/landing/faq').then(m => ({ default: m.Faq })))
const Integrations = dynamic(() => import('@/components/landing/integrations').then(m => ({ default: m.Integrations })))
const MiniSiteShowcase = dynamic(() => import('@/components/landing/minisite-showcase').then(m => ({ default: m.MiniSiteShowcase })))
const CtaSection = dynamic(() => import('@/components/landing/cta-section').then(m => ({ default: m.CtaSection })))
import {
  organizationSchema,
  webSiteSchema,
  softwareApplicationSchema,
  breadcrumbSchema,
  faqSchema,
} from '@/lib/schema'

export default function HomePage() {
  const orgJsonLd = organizationSchema()
  const siteJsonLd = webSiteSchema()
  const appJsonLd = softwareApplicationSchema()
  const breadcrumbJsonLd = breadcrumbSchema([
    { name: 'Inicio', url: 'https://opinafy.com' },
  ])
  const faqJsonLd = faqSchema()

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
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />

      {/* Product screenshot */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Conoce el panel de control
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-lg text-gray-600">
              Gestiona todos tus testimonios, proyectos y widgets desde un dashboard intuitivo.
            </p>
          </div>
          <div className="mt-10 overflow-hidden rounded-xl border border-gray-200 shadow-2xl">
            <Image src="/screenshots/dashboard.png" alt="Panel de control de Opinafy mostrando estadísticas y testimonios" width={1440} height={900} className="w-full" />
          </div>
        </div>
      </section>

      <MiniSiteShowcase />
      <TestimonialsPreview />
      <Pricing />
      <Integrations />
      <Faq />
      <CtaSection />
      <Footer />
    </>
  )
}
