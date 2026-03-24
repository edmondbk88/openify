export const revalidate = 3600 // revalidate every hour — homepage content rarely changes

import dynamic from 'next/dynamic'
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
