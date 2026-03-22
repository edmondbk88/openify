import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Opinafy - Testimonios de Clientes que Convierten' },
  description:
    'Recopila, gestiona y muestra testimonios de clientes en tu web. Widgets personalizables, prueba social auténtica y más conversiones.',
  keywords: [
    'testimonios de clientes',
    'recopilar testimonios',
    'mostrar reseñas',
    'prueba social',
    'widgets de testimonios',
    'plataforma de testimonios en español',
    'opiniones de clientes',
    'muro de testimonios',
    'social proof',
    'aumentar conversiones',
    'reputación online',
    'opinafy',
  ],
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://opinafy.com',
    siteName: 'Opinafy',
    title: 'Opinafy - Testimonios de Clientes que Convierten',
    description:
      'Recopila, gestiona y muestra testimonios de clientes en tu web. Widgets personalizables, prueba social y mas conversiones.',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Opinafy - Plataforma de Testimonios de Clientes',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Opinafy - Testimonios de Clientes que Convierten',
    description:
      'Recopila, gestiona y muestra testimonios de clientes en tu web. Prueba social que convierte.',
    images: ['/og.png'],
  },
  alternates: {
    canonical: 'https://opinafy.com',
    languages: {
      'es': 'https://opinafy.com',
      'en': 'https://opinafy.com/en',
      'x-default': 'https://opinafy.com',
    },
  },
  robots: {
    index: true,
    follow: true,
  },
}

import { CookieBanner } from '@/components/landing/cookie-banner'

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
      <CookieBanner />
    </>
  )
}
