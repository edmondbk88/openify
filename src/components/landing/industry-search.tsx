'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'

interface IndustryItem {
  slug: string
  name: string
  icon: string
  metaDescription: string
}

const ITEMS_PER_PAGE = 24

export function IndustrySearch({ industries }: { industries: IndustryItem[] }) {
  const [query, setQuery] = useState('')
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE)

  const filtered = useMemo(() => {
    if (!query.trim()) return industries
    const q = query.trim().toLowerCase()
    return industries.filter(
      (i) =>
        i.name.toLowerCase().includes(q) ||
        i.metaDescription.toLowerCase().includes(q)
    )
  }, [query, industries])

  const visible = filtered.slice(0, visibleCount)
  const hasMore = visibleCount < filtered.length

  return (
    <>
      {/* Search bar */}
      <div className="mb-10">
        <div className="relative mx-auto max-w-xl">
          <svg
            className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
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
            onChange={(e) => {
              setQuery(e.target.value)
              setVisibleCount(ITEMS_PER_PAGE)
            }}
            placeholder="Buscar industria..."
            className="w-full rounded-xl border border-gray-300 bg-white py-3 pl-12 pr-4 text-sm text-gray-900 placeholder-gray-400 shadow-sm transition-colors focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
          />
          {query && (
            <button
              onClick={() => {
                setQuery('')
                setVisibleCount(ITEMS_PER_PAGE)
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
        {query.trim() && (
          <p className="mt-3 text-center text-sm text-gray-500">
            {filtered.length} {filtered.length === 1 ? 'industria encontrada' : 'industrias encontradas'}
          </p>
        )}
      </div>

      {/* Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((industry) => (
          <Link
            key={industry.slug}
            href={`/testimonios-para/${industry.slug}`}
            className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-indigo-300 hover:shadow-md"
          >
            <div className="text-4xl">{industry.icon}</div>
            <h2 className="mt-4 text-lg font-semibold text-gray-900 group-hover:text-indigo-600">
              Testimonios para {industry.name}
            </h2>
            <p className="mt-2 text-sm text-gray-500 line-clamp-2">
              {industry.metaDescription}
            </p>
            <span className="mt-4 inline-flex items-center text-sm font-medium text-indigo-600">
              Ver más
              <svg
                className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </span>
          </Link>
        ))}
      </div>

      {/* No results */}
      {filtered.length === 0 && (
        <div className="py-12 text-center">
          <p className="text-gray-500">No se encontraron industrias para &quot;{query}&quot;</p>
        </div>
      )}

      {/* Load more */}
      {hasMore && (
        <div className="mt-10 text-center">
          <button
            onClick={() => setVisibleCount((prev) => prev + ITEMS_PER_PAGE)}
            className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 shadow-sm transition-colors hover:bg-gray-50"
          >
            Ver más industrias ({filtered.length - visibleCount} restantes)
          </button>
        </div>
      )}
    </>
  )
}
