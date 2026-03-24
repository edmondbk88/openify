import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { helpGuidesEn } from '@/lib/help-data-en'
import { webPageSchema, breadcrumbSchema } from '@/lib/schema'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return helpGuidesEn.map((guide) => ({ slug: guide.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const guide = helpGuidesEn.find((g) => g.slug === slug)
  if (!guide) return {}

  return {
    title: `${guide.title} - Help Center`,
    description: guide.description,
    alternates: {
      canonical: `https://opinafy.com/en/help/${guide.slug}`,
      languages: {
        es: `https://opinafy.com/ayuda/${guide.slugEs}`,
      },
    },
    openGraph: {
      type: 'article',
      title: `${guide.title} - Help`,
      description: guide.description,
      url: `https://opinafy.com/en/help/${guide.slug}`,
    },
  }
}

export default async function HelpGuidePage({ params }: Props) {
  const { slug } = await params
  const guide = helpGuidesEn.find((g) => g.slug === slug)

  if (!guide) notFound()

  const webPageJsonLd = webPageSchema({
    name: `${guide.title} - Help Center | Opinafy`,
    url: `https://opinafy.com/en/help/${guide.slug}`,
    description: guide.description,
    lang: 'en',
  })

  const breadcrumbJsonLd = breadcrumbSchema([
    { name: 'Home', url: 'https://opinafy.com/en' },
    { name: 'Help Center', url: 'https://opinafy.com/en/help' },
    { name: guide.title, url: `https://opinafy.com/en/help/${guide.slug}` },
  ])

  // Find prev/next guides
  const idx = helpGuidesEn.findIndex((g) => g.slug === slug)
  const prev = idx > 0 ? helpGuidesEn[idx - 1] : null
  const next = idx < helpGuidesEn.length - 1 ? helpGuidesEn[idx + 1] : null

  return (
    <div className="bg-gradient-to-b from-indigo-50/50 to-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Breadcrumb */}
      <div className="mx-auto max-w-3xl px-4 pt-24 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-sm text-gray-500">
          <Link href="/en" className="hover:text-indigo-600 transition-colors">Home</Link>
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
          <Link href="/en/help" className="hover:text-indigo-600 transition-colors">Help Center</Link>
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
          <span className="text-gray-900 font-medium truncate">{guide.title}</span>
        </nav>
      </div>

      {/* Content */}
      <article className="mx-auto max-w-3xl px-4 pb-16 pt-8 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {guide.title}
        </h1>
        <p className="mt-4 text-lg text-gray-600">{guide.description}</p>

        <div
          className="prose prose-indigo mt-10 max-w-none prose-headings:scroll-mt-20 prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-lg prose-h3:font-semibold prose-h3:mt-8 prose-h3:mb-3 prose-p:text-gray-600 prose-li:text-gray-600 prose-a:text-indigo-600 prose-a:font-medium hover:prose-a:text-indigo-700 prose-code:rounded prose-code:bg-gray-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:text-sm prose-code:font-normal prose-code:text-gray-800 prose-code:before:content-none prose-code:after:content-none prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-strong:text-gray-900"
          dangerouslySetInnerHTML={{ __html: guide.content }}
        />
      </article>

      {/* Prev/Next navigation */}
      <div className="mx-auto max-w-3xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="flex items-stretch gap-4 border-t border-gray-200 pt-8">
          {prev ? (
            <Link
              href={`/en/help/${prev.slug}`}
              className="flex flex-1 flex-col rounded-xl border border-gray-200 bg-white p-5 transition-all hover:border-indigo-200 hover:shadow-md"
            >
              <span className="text-xs font-medium text-gray-500">Previous</span>
              <span className="mt-1 text-sm font-semibold text-gray-900">{prev.title}</span>
            </Link>
          ) : <div className="flex-1" />}
          {next ? (
            <Link
              href={`/en/help/${next.slug}`}
              className="flex flex-1 flex-col items-end rounded-xl border border-gray-200 bg-white p-5 text-right transition-all hover:border-indigo-200 hover:shadow-md"
            >
              <span className="text-xs font-medium text-gray-500">Next</span>
              <span className="mt-1 text-sm font-semibold text-gray-900">{next.title}</span>
            </Link>
          ) : <div className="flex-1" />}
        </div>
      </div>

      {/* CTA */}
      <section className="border-t border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900">Need more help?</h2>
          <p className="mx-auto mt-3 max-w-xl text-gray-600">
            If you have any questions, contact us and we will get back to you as soon as possible.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/en/contact"
              className="rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-700"
            >
              Contact support
            </Link>
            <Link
              href="/en/help"
              className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
            >
              Back to Help Center
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
