import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import { ToastProvider } from '@/components/ui/toast'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://opinafy.com'),
  title: {
    template: '%s | Opinafy',
    default: 'Opinafy - Recopila y Muestra Testimonios de Clientes',
  },
  description:
    'Opinafy es la plataforma #1 en español para recopilar, gestionar y mostrar testimonios de clientes. Aumenta la confianza y las conversiones con prueba social auténtica. Widgets personalizables, integración sencilla y mucho más.',
  keywords: [
    'testimonios',
    'reseñas',
    'opiniones de clientes',
    'prueba social',
    'widgets de testimonios',
    'recopilar testimonios',
    'plataforma de testimonios',
    'testimonios en español',
    'social proof',
    'opinafy',
    'valoraciones',
    'reputación online',
    'confianza del cliente',
    'SaaS testimonios',
  ],
  authors: [{ name: 'Opinafy' }],
  creator: 'Opinafy',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://opinafy.com',
    siteName: 'Opinafy',
    title: 'Opinafy - Recopila y Muestra Testimonios de Clientes',
    description:
      'La plataforma #1 en español para recopilar, gestionar y mostrar testimonios de clientes. Aumenta tu confianza y conversiones.',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Opinafy - Plataforma de Testimonios',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Opinafy - Recopila y Muestra Testimonios de Clientes',
    description:
      'La plataforma #1 en español para recopilar, gestionar y mostrar testimonios de clientes.',
    images: ['/og.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  verification: {
    google: 'gGUwTZCtjWm42xaPy0yhzhmxEP0tfCPjLD4e0WBMNnw',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <head />
      <body className={`${inter.className} antialiased`}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CPLGLSLYHR"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('consent', 'default', {
              'analytics_storage': 'denied',
              'ad_storage': 'denied'
            });
            gtag('config', 'G-CPLGLSLYHR');
          `}
        </Script>
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  )
}
