import type { Metadata } from 'next'
import Link from 'next/link'
import { NavbarEn } from '@/components/landing/navbar-en'
import { FooterEn } from '@/components/landing/footer-en'
import { webPageSchema, breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Opinafy Features - All Testimonial Platform Features',
  description:
    'Discover all Opinafy features: embeddable widgets, video testimonials, double verification, 65+ templates, public mini site, Google import and more. The most complete testimonial platform.',
  keywords: [
    'opinafy features',
    'testimonial platform features',
    'embeddable testimonial widget',
    'video testimonials',
    'testimonial verification',
    'testimonial templates',
    'testimonial mini site',
    'import google reviews',
    'social proof features',
    'testimonial software',
  ],
  alternates: {
    canonical: 'https://opinafy.com/en/features',
    languages: {
      'es': 'https://opinafy.com/caracteristicas',
      'en': 'https://opinafy.com/en/features',
      'x-default': 'https://opinafy.com/caracteristicas',
    },
  },
  openGraph: {
    title: 'Opinafy Features - All Testimonial Platform Features',
    description:
      'Embeddable widgets, video testimonials, double verification, 65+ templates, mini site and more. Everything you need to manage testimonials.',
    url: 'https://opinafy.com/en/features',
    type: 'website',
    siteName: 'Opinafy',
    locale: 'en_US',
    images: [{ url: '/og.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Opinafy Features - All Testimonial Platform Features',
    description:
      'Embeddable widgets, video testimonials, double verification, 65+ templates and more. The most complete testimonial platform.',
    images: ['/og.png'],
  },
}

/* ────────────────────────────────────────────── */
/*  Data arrays for feature sections              */
/* ────────────────────────────────────────────── */

const heroStats = [
  { value: '130+', label: 'Industries covered' },
  { value: '65+', label: 'Customizable templates' },
  { value: '7', label: 'Widget layouts' },
  { value: '8', label: 'Import platforms' },
]

const coreFeatures = [
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    title: 'Embeddable Widget with Shadow DOM',
    description:
      'Add testimonials to any website with a lightweight widget (~25KB) using Shadow DOM for perfect CSS isolation. 7 layouts available: grid, masonry, carousel, list, ticker, badge, and FOMO popup.',
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    title: '65+ Customizable Templates',
    description:
      'Choose from over 65 professionally designed templates for widgets and mini sites. Customize colors, fonts (8 Google Fonts), borders, shadows and more to match your brand.',
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: 'Email Verification',
    description:
      'Every testimonial is automatically verified by email. Authors must confirm their email address before the testimonial is published, ensuring authenticity and reducing spam.',
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
    title: 'Automatic Company Verification',
    description:
      'Opinafy automatically cross-references the author\'s email domain with the mentioned company. Double verification (email + company) for maximum testimonial credibility.',
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 9.75c0 .746-.092 1.47-.264 2.16M12 10.5c2.998 0 5.74 1.1 7.843 2.918M3.264 11.91a8.959 8.959 0 00-.264 2.16" />
      </svg>
    ),
    title: 'Public Mini Site',
    description:
      'Every account gets a public mini site at opinafy.com/s/your-username with all your verified testimonials. Perfect for sharing on WhatsApp, email or social media. 30+ mini site templates.',
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: 'Video Testimonials (Webcam)',
    description:
      'Record video testimonials directly from the browser using the customer\'s webcam. No external apps, no complications. Mandatory webcam recording maximizes authenticity.',
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
      </svg>
    ),
    title: 'Audio Testimonials',
    description:
      'For customers who prefer to speak, offer direct audio recording from the browser. Perfect for capturing genuine emotions and more detailed testimonials.',
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
      </svg>
    ),
    title: 'Photo Testimonials',
    description:
      'Customers can upload a photo with their testimonial. Real photos increase trust and conversions by up to 35% compared to text-only testimonials.',
  },
]

const differentiators = [
  {
    icon: '🌍',
    title: 'Native Spanish + English',
    description: 'Full interface, emails, forms and support in Spanish and English. Bilingual dashboard. The first testimonial platform built for the Spanish-speaking market.',
  },
  {
    icon: '💰',
    title: 'Pricing from $5/month',
    description: 'Up to 3x cheaper than Testimonial.to or Senja. Free plan with no time limit. No tricks, no surprises.',
  },
  {
    icon: '✅',
    title: 'Double Verification (Email + Company)',
    description: 'The only platform that verifies both the author\'s email and the associated company. Testimonials with maximum credibility.',
  },
  {
    icon: '🎥',
    title: 'Mandatory Webcam Recording',
    description: 'Option to require video in the collection form. Video testimonials generate 2x more trust than text alone.',
  },
  {
    icon: '🌐',
    title: 'Customizable Mini Site',
    description: 'Every account includes a public page with all testimonials. Short URL for sharing via WhatsApp, email, LinkedIn or Instagram.',
  },
  {
    icon: '🔔',
    title: 'FOMO Popup Widget',
    description: 'Notification-style widget that shows recent testimonials as discreet popups. Ideal for boosting conversions on sales pages.',
  },
]

const businessFeatures = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
      </svg>
    ),
    title: 'Import from 8 Platforms',
    description: 'Import existing reviews from Google Maps, TripAdvisor, Trustpilot, Facebook, Yelp, Capterra, G2 and Clutch. Centralize all your social proof.',
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: 'A/B Testing for Testimonials',
    description: 'Test different testimonials in your widget and discover which ones generate the most conversions. Optimize your social proof with real data.',
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
    title: 'Sentiment Analysis',
    description: 'Automatic sentiment analysis for every testimonial, optimized for Spanish and English. Identify recurring themes and trends in your feedback.',
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
      </svg>
    ),
    title: 'Conversion Analytics',
    description: 'Measure impressions, clicks and conversions of your widgets. Understand which testimonials and layouts generate the most impact on your sales.',
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
    title: 'Webhooks (Zapier, Make)',
    description: 'Receive automatic notifications when a new testimonial arrives. Connect with Zapier, Make, n8n or any automation tool.',
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    title: 'PDF Export',
    description: 'Export your best testimonials as a professional PDF. Ideal for sales presentations, proposals and marketing materials.',
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z" />
      </svg>
    ),
    title: 'QR Code + WhatsApp Sharing',
    description: 'Generate QR codes for your collection form. Share via WhatsApp with one tap. Perfect for local businesses, restaurants and shops.',
  },
]

const devFeatures = [
  { title: 'Shadow DOM Widget (~25KB)', description: 'Total CSS isolation, no conflicts with your site. Ultra-fast loading.' },
  { title: '8 Google Fonts Included', description: 'Inter, Poppins, Roboto, Open Sans, Lato, Montserrat, Playfair Display and Raleway.' },
  { title: 'Full REST API', description: 'Access testimonials, widgets and analytics programmatically.' },
  { title: 'WordPress Plugin', description: 'Install the widget in WordPress with a dedicated plugin. No code required.' },
  { title: 'Shopify App', description: 'Integrate testimonials in your Shopify store with a native block.' },
  { title: 'Wix, Squarespace, Webflow', description: 'Step-by-step guides and embed code for each platform.' },
  { title: 'PrestaShop & WooCommerce', description: 'Full compatibility with the most popular e-commerce platforms.' },
  { title: 'Google Tag Manager', description: 'Integrate the widget via GTM without touching your website code.' },
  { title: 'Embed Code (1 Line)', description: 'Copy and paste a single line of HTML. Works on any website.' },
]

const securityFeatures = [
  { title: 'GDPR Compliant', description: 'Full compliance with the EU General Data Protection Regulation. Explicit consent, right to be forgotten and data portability.' },
  { title: 'Integrated Cookie Consent', description: 'Cookie banner compliant with European regulations included in all widgets and mini sites.' },
  { title: 'HTTPS Encryption', description: 'All communications encrypted with TLS 1.3. Data in transit always protected.' },
  { title: 'Database RLS', description: 'Row Level Security in PostgreSQL (Supabase). Each user can only access their own data, at the database level.' },
  { title: 'Stripe Payments', description: 'Payment processing via Stripe, PCI DSS Level 1 certified. We never store card data.' },
]

const supportFeatures = [
  { title: 'Ticket System', description: 'Technical support with ticket tracking from the dashboard. Response in less than 24 hours.' },
  { title: 'In-App Notifications', description: 'Receive alerts when new testimonials arrive, get verified or require moderation.' },
  { title: 'Bilingual Dashboard (ES/EN)', description: 'Switch dashboard language with one click. Full interface in Spanish and English.' },
  { title: 'Installation Guides', description: 'Step-by-step guides for WordPress, Shopify, Wix, Squarespace, Webflow and Google Tag Manager.' },
]

export default function FeaturesPage() {
  const pageJsonLd = webPageSchema({
    name: 'Opinafy Features - All Testimonial Platform Features',
    url: 'https://opinafy.com/en/features',
    description:
      'Discover all Opinafy features: embeddable widgets, video testimonials, double verification, 65+ templates, public mini site, Google import and more.',
  })

  const breadcrumbJsonLd = breadcrumbSchema([
    { name: 'Home', url: 'https://opinafy.com/en' },
    { name: 'Features', url: 'https://opinafy.com/en/features' },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <NavbarEn />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-700 py-24 text-white sm:py-32">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <span className="mb-4 inline-block rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
            Complete testimonial platform
          </span>
          <h1 className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Everything you need to manage testimonials
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-indigo-100 sm:text-xl">
            The most complete testimonial platform with native Spanish support. Collect, verify, manage and display social proof that turns visitors into customers.
          </p>

          {/* Stats */}
          <div className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-6 sm:grid-cols-4">
            {heroStats.map((stat) => (
              <div key={stat.label} className="rounded-2xl bg-white/10 px-4 py-5 backdrop-blur-sm">
                <p className="text-3xl font-bold">{stat.value}</p>
                <p className="mt-1 text-sm text-indigo-200">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/en/register"
              className="inline-flex h-12 items-center rounded-xl bg-white px-8 text-base font-semibold text-indigo-700 shadow-lg transition-all hover:bg-indigo-50 hover:shadow-xl"
            >
              Get started free
            </Link>
            <Link
              href="/en/pricing"
              className="inline-flex h-12 items-center rounded-xl border-2 border-white/30 px-8 text-base font-semibold text-white transition-all hover:bg-white/10"
            >
              View pricing
            </Link>
          </div>
        </div>
      </section>

      {/* ── Core Features ── */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-indigo-600">Core features</span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need, nothing you don&apos;t
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Every feature designed to maximize the collection and impact of your testimonials.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {coreFeatures.map((feature) => (
              <div
                key={feature.title}
                className="group relative rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:border-indigo-200 hover:shadow-lg"
              >
                <div className="mb-4 inline-flex rounded-xl bg-indigo-50 p-3 text-indigo-600 transition-colors group-hover:bg-indigo-100">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Differentiators ── */}
      <section className="bg-gray-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-indigo-600">What makes us different</span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why choose Opinafy
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              We&apos;re not just another copy of English-only tools. We&apos;re the alternative built for you.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:border-indigo-200 hover:shadow-lg"
              >
                <span className="text-3xl">{item.icon}</span>
                <h3 className="mt-3 text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── For Businesses ── */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-indigo-600">For businesses</span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Advanced tools to grow
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Import reviews, analyze sentiment, automate processes and measure the impact of your testimonials on sales.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {businessFeatures.map((feature) => (
              <div
                key={feature.title}
                className="flex gap-4 rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition-all hover:border-indigo-200 hover:shadow-md"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── For Developers ── */}
      <section className="bg-gray-900 py-20 text-white sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-indigo-400">For developers</span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Integration in minutes, not days
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
              One line of code to get started. REST API, native plugins and complete documentation for when you need more.
            </p>
          </div>

          {/* Code snippet */}
          <div className="mx-auto mt-12 max-w-2xl overflow-hidden rounded-xl border border-gray-700 bg-gray-800">
            <div className="flex items-center gap-2 border-b border-gray-700 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-500" />
              <span className="h-3 w-3 rounded-full bg-yellow-500" />
              <span className="h-3 w-3 rounded-full bg-green-500" />
              <span className="ml-3 text-xs text-gray-400">index.html</span>
            </div>
            <pre className="overflow-x-auto p-4 text-sm leading-relaxed">
              <code className="text-green-400">{'<script src="https://opinafy.com/widget.js" data-id="YOUR_ID"></script>'}</code>
            </pre>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {devFeatures.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-gray-700 bg-gray-800/50 p-5 transition-all hover:border-indigo-500/50 hover:bg-gray-800"
              >
                <h3 className="font-semibold text-white">{feature.title}</h3>
                <p className="mt-1 text-sm text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center">
            <Link
              href="/en/guides"
              className="text-sm font-medium text-indigo-400 transition-colors hover:text-indigo-300"
            >
              View installation guides &rarr;
            </Link>
          </p>
        </div>
      </section>

      {/* ── Security & Legal ── */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-indigo-600">Security & legal</span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Your data, always protected
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              European regulatory compliance, encryption at every layer and database-level security.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {securityFeatures.map((feature) => (
              <div
                key={feature.title}
                className="flex items-start gap-3 rounded-xl border border-gray-100 bg-gray-50 p-5"
              >
                <svg className="mt-0.5 h-5 w-5 shrink-0 text-green-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Support ── */}
      <section className="bg-gray-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-indigo-600">Support</span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              You&apos;re never alone
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Bilingual support, complete documentation and step-by-step guides for every platform.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-2">
            {supportFeatures.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm"
              >
                <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Start collecting testimonials today
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-indigo-100">
            Free plan with no time limit. No credit card required. Set up your first widget in under 5 minutes.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/en/register"
              className="inline-flex h-12 items-center rounded-xl bg-white px-8 text-base font-semibold text-indigo-700 shadow-lg transition-all hover:bg-indigo-50 hover:shadow-xl"
            >
              Get started free
            </Link>
            <Link
              href="/en/pricing"
              className="inline-flex h-12 items-center rounded-xl border-2 border-white/30 px-8 text-base font-semibold text-white transition-all hover:bg-white/10"
            >
              Compare plans
            </Link>
          </div>
        </div>
      </section>

      <FooterEn />
    </>
  )
}
