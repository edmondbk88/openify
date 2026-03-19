export const revalidate = 60 // revalidate every 60 seconds

import { Navbar } from '@/components/landing/navbar'
import { Hero } from '@/components/landing/hero'
import { Features } from '@/components/landing/features'
import { HowItWorks } from '@/components/landing/how-it-works'
import { TestimonialsPreview } from '@/components/landing/testimonials-preview'
import { Pricing } from '@/components/landing/pricing'
import { Faq } from '@/components/landing/faq'
import { CtaSection } from '@/components/landing/cta-section'
import { Footer } from '@/components/landing/footer'
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
      <TestimonialsPreview />
      <Pricing />
      <Faq />
      <CtaSection />
      <Footer />
    </>
  )
}
