import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react'
import { blogArticlesEn } from '@/lib/blog-data-en'
import { collectionPageSchema, breadcrumbSchema } from '@/lib/schema'
import { BlogSearchEn } from '@/components/landing/blog-search-en'
import { NavbarEn } from '@/components/landing/navbar-en'
import { FooterEn } from '@/components/landing/footer-en'

const ARTICLES_PER_PAGE = 12

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; q?: string; cat?: string }>
}): Promise<Metadata> {
  const params = await searchParams
  const page = Math.max(1, parseInt(params.page || '1', 10) || 1)
  const totalPages = Math.ceil(blogArticlesEn.length / ARTICLES_PER_PAGE)
  const clampedPage = Math.min(page, totalPages)

  const canonical = clampedPage === 1 ? '/en/blog' : `/en/blog?page=${clampedPage}`

  return {
    title: 'Blog - Opinafy | Tips on Testimonials and Social Proof',
    description:
      'Articles, guides, and strategies on customer testimonials, social proof, and how to increase your business conversions. Content by the Opinafy team.',
    keywords: [
      'testimonial blog',
      'social proof guide',
      'customer review tips',
      'testimonial marketing',
      'conversion strategies',
    ],
    alternates: {
      canonical,
      languages: {
        'es': 'https://opinafy.com/blog',
        'en': 'https://opinafy.com/en/blog',
        'x-default': 'https://opinafy.com/blog',
      },
    },
    openGraph: {
      title: 'Blog - Opinafy | Tips on Testimonials and Social Proof',
      url: 'https://opinafy.com/en/blog',
      type: 'website',
      siteName: 'Opinafy',
      locale: 'en_US',
      images: [{ url: '/og.png', width: 1200, height: 630 }],
    },
  }
}

const categoryColors: Record<string, string> = {
  Guides: 'bg-blue-100 text-blue-700',
  Strategies: 'bg-green-100 text-green-700',
  Marketing: 'bg-purple-100 text-purple-700',
  'Web Design': 'bg-pink-100 text-pink-700',
  Templates: 'bg-yellow-100 text-yellow-700',
  Video: 'bg-red-100 text-red-700',
  Technical: 'bg-gray-100 text-gray-700',
  Data: 'bg-indigo-100 text-indigo-700',
  Ecommerce: 'bg-orange-100 text-orange-700',
  SEO: 'bg-teal-100 text-teal-700',
  Industries: 'bg-cyan-100 text-cyan-700',
  Conversion: 'bg-amber-100 text-amber-700',
  B2B: 'bg-slate-100 text-slate-700',
  Trends: 'bg-violet-100 text-violet-700',
  Startups: 'bg-lime-100 text-lime-700',
  Legal: 'bg-stone-100 text-stone-700',
  Copywriting: 'bg-fuchsia-100 text-fuchsia-700',
  Apps: 'bg-sky-100 text-sky-700',
  UX: 'bg-rose-100 text-rose-700',
  Psychology: 'bg-emerald-100 text-emerald-700',
  Analytics: 'bg-blue-100 text-blue-700',
  Automation: 'bg-cyan-100 text-cyan-700',
  'Email Marketing': 'bg-amber-100 text-amber-700',
  'Social Media': 'bg-pink-100 text-pink-700',
  'Case Studies': 'bg-green-100 text-green-700',
  Metrics: 'bg-indigo-100 text-indigo-700',
}

export default async function BlogPageEn({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; q?: string; cat?: string }>
}) {
  const params = await searchParams
  const query = (params.q || '').toLowerCase().trim()
  const category = params.cat || ''

  // Filter articles
  let filtered = blogArticlesEn
  if (query) {
    filtered = filtered.filter(
      (a) =>
        a.title.toLowerCase().includes(query) ||
        a.excerpt.toLowerCase().includes(query) ||
        a.category.toLowerCase().includes(query) ||
        a.keywords.some((k) => k.toLowerCase().includes(query))
    )
  }
  if (category && category !== 'All') {
    filtered = filtered.filter((a) => a.category === category)
  }

  const currentPage = Math.max(1, parseInt(params.page || '1', 10) || 1)
  const totalPages = Math.max(1, Math.ceil(filtered.length / ARTICLES_PER_PAGE))
  const page = Math.min(currentPage, totalPages)
  const start = (page - 1) * ARTICLES_PER_PAGE
  const paginatedArticles = filtered.slice(start, start + ARTICLES_PER_PAGE)

  const collectionJsonLd = collectionPageSchema({
    name: 'Opinafy Blog',
    url: 'https://opinafy.com/en/blog',
    description:
      'Articles, guides, and strategies on customer testimonials, social proof, and how to increase your business conversions.',
    lang: 'en',
  })

  const breadcrumbJsonLd = breadcrumbSchema([
    { name: 'Home', url: 'https://opinafy.com/en' },
    { name: 'Blog', url: 'https://opinafy.com/en/blog' },
  ])

  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: paginatedArticles.map((article, index) => ({
      '@type': 'ListItem',
      position: start + index + 1,
      url: `https://opinafy.com/en/blog/${article.slug}`,
      name: article.title,
    })),
  }

  // Build pagination URL helper
  function paginationHref(pageNum: number): string {
    const p = new URLSearchParams()
    if (query) p.set('q', query)
    if (category && category !== 'All') p.set('cat', category)
    if (pageNum > 1) p.set('page', String(pageNum))
    const qs = p.toString()
    return qs ? `/en/blog?${qs}` : '/en/blog'
  }

  return (
    <>
      <NavbarEn />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />

      <div className="mx-auto max-w-7xl px-4 pt-24 pb-16 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Opinafy Blog
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Tips, strategies, and guides on customer testimonials, social proof, and how to
            boost your business conversions.
          </p>
        </div>

        {/* Search + Category Filter */}
        <Suspense fallback={null}>
          <BlogSearchEn />
        </Suspense>

        {/* Results count */}
        {(query || category) && (
          <p className="mt-6 text-center text-sm text-gray-500">
            {filtered.length} {filtered.length === 1 ? 'article found' : 'articles found'}
            {query && <> for &ldquo;{params.q}&rdquo;</>}
            {category && category !== 'All' && <> in {category}</>}
          </p>
        )}

        {/* Articles Grid */}
        {paginatedArticles.length > 0 ? (
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {paginatedArticles.map((article, index) => (
              <Link
                key={article.slug}
                href={`/en/blog/${article.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-shadow hover:shadow-lg"
              >
                <Image
                  src={article.image}
                  alt={article.title}
                  width={600}
                  height={340}
                  className="w-full h-48 object-cover"
                  {...(page === 1 && index === 0 && !query ? { priority: true } : {})}
                />
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3">
                    <span
                      className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${categoryColors[article.category] || 'bg-gray-100 text-gray-700'}`}
                    >
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-500">{article.readTime} read</span>
                  </div>
                  <h2 className="mt-3 text-lg font-semibold text-gray-900 transition-colors group-hover:text-indigo-600">
                    {article.title}
                  </h2>
                  <p className="mt-2 flex-1 text-sm text-gray-600 line-clamp-3">{article.excerpt}</p>
                  <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
                    <span className="text-xs text-gray-500">
                      {new Date(article.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                    <span className="text-sm font-medium text-indigo-600 transition-colors group-hover:text-indigo-700">
                      Read article &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="mt-16 text-center">
            <svg className="mx-auto h-12 w-12 text-gray-300" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">No articles found</h3>
            <p className="mt-2 text-sm text-gray-500">Try different search terms or category.</p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <nav aria-label="Blog pagination" className="mt-16 flex items-center justify-center gap-2">
            {page > 1 ? (
              <Link
                href={paginationHref(page - 1)}
                className="inline-flex h-10 items-center rounded-lg border border-gray-300 bg-white px-4 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                &larr; Previous
              </Link>
            ) : (
              <span className="inline-flex h-10 items-center rounded-lg border border-gray-200 bg-gray-50 px-4 text-sm font-medium text-gray-500 cursor-not-allowed">
                &larr; Previous
              </span>
            )}

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
              <Link
                key={pageNum}
                href={paginationHref(pageNum)}
                className={`inline-flex h-10 w-10 items-center justify-center rounded-lg text-sm font-medium ${
                  pageNum === page
                    ? 'bg-indigo-600 text-white'
                    : 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                {pageNum}
              </Link>
            ))}

            {page < totalPages ? (
              <Link
                href={paginationHref(page + 1)}
                className="inline-flex h-10 items-center rounded-lg border border-gray-300 bg-white px-4 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Next &rarr;
              </Link>
            ) : (
              <span className="inline-flex h-10 items-center rounded-lg border border-gray-200 bg-gray-50 px-4 text-sm font-medium text-gray-500 cursor-not-allowed">
                Next &rarr;
              </span>
            )}
          </nav>
        )}
      </div>
      <FooterEn />
    </>
  )
}
