import type { Metadata } from 'next'

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
        url: '/og.jpg',
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
    images: ['/og.jpg'],
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

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: 'document.documentElement.lang="en"' }} />
      {children}
    </>
  )
}
