'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useState, useCallback, useEffect } from 'react'

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

export function BlogSearchEn() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [query, setQuery] = useState(searchParams.get('q') || '')
  const activeCategory = searchParams.get('cat') || 'All'

  const updateParams = useCallback(
    (newQuery: string, newCategory: string) => {
      const params = new URLSearchParams()
      if (newQuery.trim()) params.set('q', newQuery.trim())
      if (newCategory && newCategory !== 'All') params.set('cat', newCategory)
      const qs = params.toString()
      router.push(qs ? `/en/blog?${qs}` : '/en/blog')
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

  function handleCategoryClick(cat: string) {
    updateParams(query, cat)
  }

  return (
    <div className="mt-10 space-y-4">
      {/* Search bar */}
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

      {/* Category filter */}
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
  )
}
