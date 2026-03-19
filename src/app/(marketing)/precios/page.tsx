import type { Metadata } from 'next'
import { Navbar } from '@/components/landing/navbar'
import { Pricing } from '@/components/landing/pricing'
import { Faq } from '@/components/landing/faq'
import { Footer } from '@/components/landing/footer'

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
  return (
    <>
      <Navbar />
      <div className="pt-16">
        <Pricing />
      </div>
      <Faq />
      <Footer />
    </>
  )
}
