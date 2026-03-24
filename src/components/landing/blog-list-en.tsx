'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState, useCallback, useEffect, useMemo } from 'react'
import type { BlogArticle } from '@/lib/blog-data'

const ARTICLES_PER_PAGE = 12

const CATEGORIES = [
  'All',
  'Guides',
  'Strategies',
  'Marketing',
  'Web Design',
  'SEO',
  'Ecommerce',
  'Industries',
  'Conversion',
  'B2B',
  'Technical',
  'Trends',
  'Startups',
  'Legal',
  'Copywriting',
  'Apps',
  'UX',
  'Metrics',
  'Analytics',
  'Automation',
]

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

export function BlogListEn({ articles }: { articles: BlogArticle[] }) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [query, setQuery] = useState(searchParams.get('q') || '')
  const activeCategory = searchParams.get('cat') || 'All'
  const pageParam = parseInt(searchParams.get('page') || '1', 10) || 1

  const updateParams = useCallback(
    (newQuery: string, newCategory: string, newPage?: number) => {
      const params = new URLSearchParams()
      if (newQuery.trim()) params.set('q', newQuery.trim())
      if (newCategory && newCategory !== 'All') params.set('cat', newCategory)
      if (newPage && newPage > 1) params.set('page', String(newPage))
      const qs = params.toString()
      router.push(qs ? `/en/blog?${qs}` : '/en/blog', { scroll: false })
    },
    [router]
  )

  // Debounced search
  useEffect(() => {
    const timer = setTimeout(() => {
      updateParams(query, activeCategory)
    }, 400)
    return () => clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query])

  // Filter articles
  const filtered = useMemo(() => {
    let result = articles
    const q = query.toLowerCase().trim()
    if (q) {
      result = result.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.excerpt.toLowerCase().includes(q) ||
          a.category.toLowerCase().includes(q) ||
          a.keywords.some((k) => k.toLowerCase().includes(q))
      )
    }
    if (activeCategory && activeCategory !== 'All') {
      result = result.filter((a) => a.category === activeCategory)
    }
    return result
  }, [articles, query, activeCategory])

  const totalPages = Math.max(1, Math.ceil(filtered.length / ARTICLES_PER_PAGE))
  const page = Math.min(Math.max(1, pageParam), totalPages)
  const start = (page - 1) * ARTICLES_PER_PAGE
  const paginatedArticles = filtered.slice(start, start + ARTICLES_PER_PAGE)

  function handleCategoryClick(cat: string) {
    updateParams(query, cat)
  }

  function paginationHref(pageNum: number): string {
    const p = new URLSearchParams()
    if (query) p.set('q', query)
    if (activeCategory && activeCategory !== 'All') p.set('cat', activeCategory)
    if (pageNum > 1) p.set('page', String(pageNum))
    const qs = p.toString()
    return qs ? `/en/blog?${qs}` : '/en/blog'
  }

  return (
    <>
      {/* Search + Category Filter */}
      <div className="mt-10 space-y-4">
        <div className="relative mx-auto max-w-xl">
          <svg
            className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles..."
            className="w-full rounded-xl border border-gray-300 bg-white py-3 pl-12 pr-4 text-sm text-gray-900 placeholder-gray-400 shadow-sm transition-colors focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
          />
          {query && (
            <button
              onClick={() => { setQuery(''); updateParams('', activeCategory) }}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-600"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryClick(cat)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results count */}
      {(query || (activeCategory && activeCategory !== 'All')) && (
        <p className="mt-6 text-center text-sm text-gray-500">
          {filtered.length} {filtered.length === 1 ? 'article found' : 'articles found'}
          {query && <> for &ldquo;{query}&rdquo;</>}
          {activeCategory && activeCategory !== 'All' && <> in {activeCategory}</>}
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
    </>
  )
}
