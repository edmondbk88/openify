import type { Metadata } from 'next'
import Link from 'next/link'
import { NavbarEn } from '@/components/landing/navbar-en'
import { FooterEn } from '@/components/landing/footer-en'

export const metadata: Metadata = {
  title: 'Product Updates - Changelog',
  description:
    'All the latest features, improvements, and fixes in Opinafy. Stay up to date with the latest updates to the testimonial platform.',
  keywords: [
    'opinafy updates',
    'opinafy changelog',
    'testimonial platform updates',
    'new features opinafy',
    'product updates',
  ],
  alternates: {
    canonical: 'https://opinafy.com/en/changelog',
    languages: {
      es: 'https://opinafy.com/actualizaciones',
      en: 'https://opinafy.com/en/changelog',
      'x-default': 'https://opinafy.com/actualizaciones',
    },
  },
  openGraph: {
    title: 'Product Updates',
    description: 'All the latest features, improvements, and fixes in Opinafy.',
    url: 'https://opinafy.com/en/changelog',
    type: 'website',
    siteName: 'Opinafy',
    locale: 'en_US',
    images: [{ url: '/og.jpg', width: 1200, height: 630 }],
  },
}

type UpdateCategory = 'new' | 'improved' | 'fixed'

interface ProductUpdate {
  date: string
  title: string
  description: string
  category: UpdateCategory
}

const categoryConfig: Record<UpdateCategory, { label: string; color: string }> = {
  new: { label: 'New', color: 'bg-green-100 text-green-700 border-green-200' },
  improved: { label: 'Improved', color: 'bg-blue-100 text-blue-700 border-blue-200' },
  fixed: { label: 'Fixed', color: 'bg-orange-100 text-orange-700 border-orange-200' },
}

const updates: ProductUpdate[] = [
  {
    date: '2026-03-23',
    title: 'Business leaderboard ranking',
    description: 'New public ranking page showing the top-rated businesses on Opinafy, sorted by average rating and testimonial count.',
    category: 'new',
  },
  {
    date: '2026-03-23',
    title: 'Email templates for testimonial requests',
    description: '6 pre-built email templates to request testimonials from clients: post-purchase, reminder, milestone, seasonal, positive feedback, and video request. Available in Spanish and English with customizable variables.',
    category: 'new',
  },
  {
    date: '2026-03-23',
    title: 'Product changelog page',
    description: 'New public changelog where we share all product updates, improvements, and fixes.',
    category: 'new',
  },
  {
    date: '2026-03-22',
    title: 'Social media post generator',
    description: 'Turn your best testimonials into ready-to-share posts for Instagram, Twitter/X, LinkedIn, and Facebook with professional designs.',
    category: 'new',
  },
  {
    date: '2026-03-22',
    title: 'Testimonial request automation',
    description: 'Set up automatic emails to request testimonials from clients after a purchase or service. Sequences with automatic reminders.',
    category: 'new',
  },
  {
    date: '2026-03-21',
    title: 'Certification program with badges',
    description: 'Certification system with Bronze, Silver, Gold, and Platinum badges based on verified testimonial count. Embed badges on your website.',
    category: 'new',
  },
  {
    date: '2026-03-21',
    title: 'Testimonial health score',
    description: 'Automatic assessment of your testimonial strategy with a score and personalized recommendations for improvement.',
    category: 'new',
  },
  {
    date: '2026-03-20',
    title: 'Professional PDF export',
    description: 'Export your testimonials as a professional branded PDF report for presentations, commercial proposals, and documentation.',
    category: 'new',
  },
  {
    date: '2026-03-20',
    title: 'Third-party integrations',
    description: 'Connect Opinafy with Zapier, Slack, Google Sheets, and more. Customizable webhooks to automate your workflow.',
    category: 'new',
  },
  {
    date: '2026-03-20',
    title: 'Advanced analytics and statistics',
    description: 'Analytics dashboard with testimonial metrics, conversion tracking, sentiment analysis, and temporal trends for each project.',
    category: 'new',
  },
  {
    date: '2026-03-19',
    title: '100+ widget templates',
    description: 'Library of over 100 customizable widget templates: carousels, grids, walls, badges, and more. Each template with multiple themes.',
    category: 'new',
  },
  {
    date: '2026-03-19',
    title: '30 mini site templates',
    description: 'Professional themes for your testimonial mini site: corporate, creative, startup, minimal, and many more.',
    category: 'new',
  },
  {
    date: '2026-03-19',
    title: 'JavaScript widget with Shadow DOM',
    description: 'Lightweight widget (~25KB) that embeds on any website with a single line of code. Shadow DOM for total CSS isolation.',
    category: 'new',
  },
  {
    date: '2026-03-19',
    title: 'Video testimonials',
    description: 'Full support for video testimonials: record from the browser, play in widgets and mini sites.',
    category: 'new',
  },
  {
    date: '2026-03-18',
    title: 'Author email verification',
    description: 'Identity verification system for testimonial authors. Verified testimonials display an authenticity seal.',
    category: 'new',
  },
  {
    date: '2026-03-18',
    title: 'Testimonial mini sites',
    description: 'Dedicated public page for each user with their testimonials, accessible at /s/your-username. SEO optimized with schema markup.',
    category: 'new',
  },
  {
    date: '2026-03-18',
    title: 'Testimonial import',
    description: 'Import testimonials from CSV, Google Reviews, and other platforms to centralize all your reviews in one place.',
    category: 'new',
  },
  {
    date: '2026-03-18',
    title: 'Testimonial request links',
    description: 'Generate unique links to send to your clients and collect testimonials easily with a customizable form.',
    category: 'new',
  },
  {
    date: '2026-03-18',
    title: 'SEO pages by industry and city',
    description: 'Over 160 industry pages and 400+ city-industry combination pages for local search engine positioning.',
    category: 'new',
  },
  {
    date: '2026-03-18',
    title: 'Blog with 160+ articles',
    description: 'Complete blog with over 160 articles in Spanish and English about testimonials, social proof, marketing, and conversion.',
    category: 'new',
  },
  {
    date: '2026-03-18',
    title: 'Integration guides',
    description: 'Step-by-step guides to integrate Opinafy with WordPress, Shopify, Wix, Squarespace, Webflow, and Google Tag Manager.',
    category: 'new',
  },
  {
    date: '2026-03-18',
    title: 'Full bilingual support',
    description: 'Entire platform available in Spanish and English, including dashboard, widgets, mini sites, and all documentation.',
    category: 'new',
  },
  {
    date: '2026-03-18',
    title: 'Verified by Opinafy badge',
    description: 'Dynamic SVG badge showing your verified testimonial count. Embeddable on any website.',
    category: 'new',
  },
  {
    date: '2026-03-18',
    title: 'Opinafy launch',
    description: 'Official platform launch with Free, Mini Site, Pro, and Business plans. Collect, manage, and display customer testimonials.',
    category: 'new',
  },
]

function formatDate(dateStr: string): string {
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default function ChangelogPage() {
  const grouped = updates.reduce<Record<string, ProductUpdate[]>>((acc, update) => {
    if (!acc[update.date]) acc[update.date] = []
    acc[update.date].push(update)
    return acc
  }, {})

  const dates = Object.keys(grouped).sort((a, b) => b.localeCompare(a))

  return (
    <>
      <NavbarEn />
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <span className="inline-block rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-medium text-indigo-700">
            Changelog
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Product Updates
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-600">
            All the latest features, improvements, and fixes in Opinafy. We love building new things.
          </p>
        </div>

        {/* Legend */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {Object.entries(categoryConfig).map(([key, config]) => (
            <span
              key={key}
              className={`inline-flex rounded-full border px-3 py-1 text-xs font-medium ${config.color}`}
            >
              {config.label}
            </span>
          ))}
        </div>

        {/* Timeline */}
        <div className="mt-12 space-y-12">
          {dates.map((date) => (
            <div key={date}>
              <div className="sticky top-0 z-10 bg-white/80 py-2 backdrop-blur-sm">
                <h2 className="text-lg font-semibold text-gray-900">
                  {formatDate(date)}
                </h2>
              </div>
              <div className="mt-4 space-y-4">
                {grouped[date].map((update, index) => {
                  const config = categoryConfig[update.category]
                  return (
                    <div
                      key={`${date}-${index}`}
                      className="rounded-xl border border-gray-200 bg-white p-5 transition-shadow hover:shadow-sm"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className={`inline-flex rounded-full border px-2 py-0.5 text-xs font-medium ${config.color}`}>
                              {config.label}
                            </span>
                            <h3 className="font-semibold text-gray-900">{update.title}</h3>
                          </div>
                          <p className="mt-2 text-sm leading-relaxed text-gray-600">
                            {update.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 p-8 text-center text-white sm:p-12">
          <h2 className="text-2xl font-bold sm:text-3xl">Have a suggestion?</h2>
          <p className="mx-auto mt-3 max-w-lg text-indigo-100">
            We love hearing from our users. If you have ideas for new features or improvements, let us know.
          </p>
          <Link
            href="/en/contact"
            className="mt-6 inline-flex rounded-lg bg-white px-6 py-3 text-sm font-semibold text-indigo-600 transition-colors hover:bg-indigo-50"
          >
            Contact us
          </Link>
        </div>
      </main>
      <FooterEn />
    </>
  )
}
