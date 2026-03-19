import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Opinafy - Recopila y Muestra Testimonios de Clientes | La Plataforma #1 en Español',
  description:
    'Opinafy es la plataforma líder en español para recopilar, gestionar y mostrar testimonios de clientes. Aumenta la confianza, mejora las conversiones y destaca con prueba social auténtica. Widgets personalizables, muro de amor, formularios de recopilación y mucho más.',
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
    title: 'Opinafy - Recopila y Muestra Testimonios de Clientes | La Plataforma #1 en Español',
    description:
      'La plataforma líder en español para recopilar, gestionar y mostrar testimonios de clientes. Aumenta la confianza y las conversiones con prueba social.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Opinafy - Plataforma de Testimonios de Clientes',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Opinafy - Recopila y Muestra Testimonios de Clientes',
    description:
      'La plataforma #1 en español para recopilar, gestionar y mostrar testimonios de clientes. Prueba social que convierte.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://opinafy.com',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
