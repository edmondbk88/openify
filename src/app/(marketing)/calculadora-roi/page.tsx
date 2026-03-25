import type { Metadata } from 'next'
import CalculadoraROIClient from './calculadora-roi-client'

export const metadata: Metadata = {
  title: 'Calculadora ROI de Testimonios - Descubre cuanto dinero pierdes sin prueba social | Opinafy',
  description:
    'Calcula cuanto dinero pierdes sin testimonios en tu web. Los estudios demuestran que los testimonios aumentan las conversiones hasta un 34%. Descubre tu ROI con Opinafy.',
  keywords: [
    'calculadora roi testimonios',
    'roi prueba social',
    'calcular retorno testimonios',
    'cuanto dinero pierdo sin testimonios',
    'roi opinafy',
  ],
  alternates: {
    canonical: 'https://opinafy.com/calculadora-roi',
    languages: {
      es: 'https://opinafy.com/calculadora-roi',
      en: 'https://opinafy.com/en/roi-calculator',
      'x-default': 'https://opinafy.com/calculadora-roi',
    },
  },
  openGraph: {
    title: 'Calculadora ROI de Testimonios | Opinafy',
    description:
      'Calcula cuanto dinero pierdes sin testimonios en tu web. Descubre el ROI de implementar prueba social con Opinafy.',
    url: 'https://opinafy.com/calculadora-roi',
    type: 'website',
    siteName: 'Opinafy',
    locale: 'es_ES',
    images: [{ url: '/og.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Calculadora ROI de Testimonios | Opinafy',
    description:
      'Calcula cuanto dinero pierdes sin testimonios. Descubre tu ROI con Opinafy.',
    images: ['/og.png'],
  },
}

export default function CalculadoraROIPage() {
  return <CalculadoraROIClient />
}
