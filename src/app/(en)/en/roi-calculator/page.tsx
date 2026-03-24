import type { Metadata } from 'next'
import ROICalculatorClient from './roi-calculator-client'

export const metadata: Metadata = {
  title: 'Testimonial ROI Calculator - Discover how much revenue you lose without social proof',
  description:
    'Calculate how much revenue you are losing without testimonials on your website. Studies show testimonials increase conversions by up to 34%. Discover your ROI with Opinafy.',
  keywords: [
    'testimonial roi calculator',
    'social proof roi',
    'calculate testimonial return',
    'how much money losing without testimonials',
    'opinafy roi',
  ],
  alternates: {
    canonical: 'https://opinafy.com/en/roi-calculator',
    languages: {
      es: 'https://opinafy.com/calculadora-roi',
      en: 'https://opinafy.com/en/roi-calculator',
      'x-default': 'https://opinafy.com/calculadora-roi',
    },
  },
  openGraph: {
    title: 'Testimonial ROI Calculator',
    description:
      'Calculate how much revenue you are losing without testimonials. Discover the ROI of implementing social proof with Opinafy.',
    url: 'https://opinafy.com/en/roi-calculator',
    type: 'website',
    siteName: 'Opinafy',
    locale: 'en_US',
    images: [{ url: '/og.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Testimonial ROI Calculator',
    description:
      'Calculate how much revenue you lose without testimonials. Discover your ROI with Opinafy.',
    images: ['/og.png'],
  },
}

export default function ROICalculatorPage() {
  return <ROICalculatorClient />
}
