import type { Metadata } from 'next'
import { Navbar } from '@/components/landing/navbar'
import { Pricing } from '@/components/landing/pricing'
import { Faq } from '@/components/landing/faq'
import { Footer } from '@/components/landing/footer'
import { webPageSchema, breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Precios - Opinafy',
  description:
    'Consulta los planes y precios de Opinafy. Empieza gratis y escala según tus necesidades. Planes flexibles para autónomos, pequeñas empresas y agencias.',
  alternates: {
    canonical: 'https://opinafy.com/precios',
  },
  openGraph: {
    title: 'Precios - Opinafy',
    description:
      'Planes flexibles para recopilar y mostrar testimonios de clientes. Empieza gratis.',
    url: 'https://opinafy.com/precios',
  },
}

export default function PreciosPage() {
  const pageJsonLd = webPageSchema({
    name: 'Precios - Opinafy',
    url: 'https://opinafy.com/precios',
    description:
      'Consulta los planes y precios de Opinafy. Empieza gratis y escala según tus necesidades.',
  })

  const breadcrumbJsonLd = breadcrumbSchema([
    { name: 'Inicio', url: 'https://opinafy.com' },
    { name: 'Precios', url: 'https://opinafy.com/precios' },
  ])

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
      <Navbar />
      <div className="pt-16">
        <Pricing />
      </div>
      <Faq />
      <Footer />
    </>
  )
}
