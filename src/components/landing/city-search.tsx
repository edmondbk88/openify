'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'

interface CityItem {
  slug: string
  name: string
  country: string
  region?: string
}

export function CitySearch({ cities }: { cities: CityItem[] }) {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    if (!query.trim()) return cities
    const q = query.trim().toLowerCase()
    return cities.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.country.toLowerCase().includes(q) ||
        (c.region && c.region.toLowerCase().includes(q))
    )
  }, [query, cities])

  return (
    <>
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
          placeholder="Buscar ciudad..."
          className="w-full rounded-xl border border-gray-300 bg-white py-3 pl-12 pr-4 text-sm text-gray-900 placeholder-gray-400 shadow-sm transition-colors focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
        />
        {query && (
          <button
            onClick={() => setQuery('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-600"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
      {query.trim() && (
        <p className="mt-3 text-center text-sm text-gray-500">
          {filtered.length} {filtered.length === 1 ? 'ciudad encontrada' : 'ciudades encontradas'}
        </p>
      )}

      {/* Results (only shown when searching) */}
      {query.trim() && (
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {filtered.map((city) => (
            <Link
              key={city.slug}
              href={`/testimonios-en/${city.slug}`}
              className="group flex flex-col rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all hover:border-indigo-300 hover:shadow-md"
            >
              <span className="font-semibold text-gray-900 group-hover:text-indigo-600">
                {city.name}
              </span>
              <span className="text-sm text-gray-500">
                {city.region ? `${city.region}, ` : ''}{city.country}
              </span>
            </Link>
          ))}
          {filtered.length === 0 && (
            <div className="col-span-2 py-8 text-center">
              <p className="text-gray-500">No se encontraron ciudades para &quot;{query}&quot;</p>
            </div>
          )}
        </div>
      )}
    </>
  )
}
