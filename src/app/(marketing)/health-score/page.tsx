import type { Metadata } from 'next'
import HealthScoreClient from './health-score-client'

export const metadata: Metadata = {
  title: 'Analizar Prueba Social Web Gratis - Verificador de Prueba Social | Opinafy',
  description:
    'Analiza gratis la prueba social de tu web. Descubre si tienes testimonios, valoraciones, datos estructurados y mas. Recibe una puntuación y recomendaciones para mejorar.',
  keywords: [
    'analizar prueba social web gratis',
    'social proof checker',
    'analizar testimonios web',
    'puntuación prueba social',
    'health score web',
    'verificar testimonios sitio web',
    'herramienta seo testimonios',
  ],
  alternates: {
    canonical: 'https://opinafy.com/health-score',
    languages: {
      es: 'https://opinafy.com/health-score',
      en: 'https://opinafy.com/en/health-score',
      'x-default': 'https://opinafy.com/health-score',
    },
  },
  openGraph: {
    title: 'Analizar Prueba Social Web Gratis | Opinafy',
    description:
      'Descubre como de bien aprovecha tu web los testimonios y la prueba social. Puntuacion gratuita + recomendaciones.',
    url: 'https://opinafy.com/health-score',
    type: 'website',
    siteName: 'Opinafy',
    locale: 'es_ES',
    images: [{ url: '/og.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Analizar Prueba Social Web Gratis | Opinafy',
    description:
      'Analiza gratis tu web y descubre tu puntuación de prueba social.',
    images: ['/og.png'],
  },
}

export default function HealthScorePage() {
  return <HealthScoreClient />
}
