import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import { ToastProvider } from '@/components/ui/toast'
import { CookieBanner } from '@/components/landing/cookie-banner'
import '@/app/globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://opinafy.com'),
  title: {
    template: '%s | Opinafy',
    default: 'Opinafy - Customer Testimonials That Convert',
  },
  description:
    'Collect, manage, and display customer testimonials on your website. Customizable widgets, authentic social proof, and more conversions.',
  keywords: [
    'customer testimonials',
    'collect testimonials',
    'display reviews',
    'social proof',
    'testimonial widgets',
    'testimonial platform',
    'customer reviews',
    'testimonial wall',
    'social proof software',
    'increase conversions',
    'online reputation',
    'opinafy',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://opinafy.com/en',
    siteName: 'Opinafy',
    title: 'Opinafy - Customer Testimonials That Convert',
    description:
      'Collect, manage, and display customer testimonials on your website. Customizable widgets, social proof, and more conversions.',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Opinafy - Customer Testimonial Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Opinafy - Customer Testimonials That Convert',
    description:
      'Collect, manage, and display customer testimonials on your website. Social proof that converts.',
    images: ['/og.png'],
  },
  alternates: {
    canonical: 'https://opinafy.com/en',
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
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  other: {
    'content-language': 'en',
    'theme-color': '#4f46e5',
  },
  verification: {
    google: 'gGUwTZCtjWm42xaPy0yhzhmxEP0tfCPjLD4e0WBMNnw',
  },
}

export default function EnglishRootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
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
        <ToastProvider>
          {children}
          <CookieBanner />
        </ToastProvider>
      </body>
    </html>
  )
}
