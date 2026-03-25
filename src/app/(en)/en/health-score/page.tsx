import type { Metadata } from 'next'
import HealthScoreEnClient from './health-score-en-client'

export const metadata: Metadata = {
  title: 'Free Social Proof Checker - Analyze Your Website',
  description:
    'Analyze your website social proof for free. Check if you have testimonials, ratings, structured data and more. Get a score and recommendations to improve.',
  keywords: [
    'social proof checker',
    'analyze website social proof',
    'testimonial score',
    'social proof audit',
    'website trust score',
    'free social proof tool',
  ],
  alternates: {
    canonical: 'https://opinafy.com/en/health-score',
    languages: {
      es: 'https://opinafy.com/health-score',
      en: 'https://opinafy.com/en/health-score',
      'x-default': 'https://opinafy.com/health-score',
    },
  },
  openGraph: {
    title: 'Free Social Proof Checker',
    description:
      'Discover how well your website leverages testimonials and social proof. Free score + recommendations.',
    url: 'https://opinafy.com/en/health-score',
    type: 'website',
    siteName: 'Opinafy',
    locale: 'en_US',
    images: [{ url: '/og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Social Proof Checker',
    description:
      'Analyze your website for free and discover your social proof score.',
    images: ['/og.jpg'],
  },
}

export default function HealthScoreEnPage() {
  return <HealthScoreEnClient />
}
