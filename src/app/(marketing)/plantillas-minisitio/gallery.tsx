'use client'

import { useState } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import type { MiniSiteTemplate } from '@/lib/minisite-templates'

const INITIAL_COUNT = 12

export function MiniSiteGallery({
  templates,
  categories,
}: {
  templates: MiniSiteTemplate[]
  categories: readonly string[] | string[]
}) {
  const [activeCategory, setActiveCategory] = useState('Todas')
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT)

  const allCategories = ['Todas', ...categories]

  const filtered =
    activeCategory === 'Todas'
      ? templates
      : templates.filter((t) => t.category === activeCategory)

  const visible = filtered.slice(0, visibleCount)
  const hasMore = visibleCount < filtered.length

  function handleCategoryChange(category: string) {
    setActiveCategory(category)
    setVisibleCount(INITIAL_COUNT)
  }

  return (
    <>
      {/* Category filter */}
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {allCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            className={cn(
              'rounded-full px-4 py-2 text-sm font-medium transition-colors',
              activeCategory === cat
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <p className="mb-6 text-center text-sm text-gray-500">
        Mostrando {visible.length} de {filtered.length} plantilla{filtered.length !== 1 ? 's' : ''}
        {activeCategory !== 'Todas' ? ` en "${activeCategory}"` : ''}
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((template) => (
          <Link
            key={template.id}
            href={`/plantillas-minisitio/${template.id}`}
            className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition-all hover:border-gray-300 hover:shadow-lg"
          >
            {/* Mini preview */}
            <div
              className="relative h-36 w-full p-4"
              style={{ backgroundColor: template.config.background_color }}
            >
              {/* Simulated header */}
              <div
                className="mb-3 h-3 w-20 rounded-full opacity-60"
                style={{ backgroundColor: template.config.accent_color }}
              />
              {/* Simulated cards */}
              <div className="flex gap-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-14 flex-1"
                    style={{
                      backgroundColor: template.config.dark_mode
                        ? 'rgba(255,255,255,0.08)'
                        : 'rgba(0,0,0,0.04)',
                      borderRadius:
                        template.config.card_style === 'sharp' ? '0px'
                        : template.config.card_style === 'pill' ? '12px'
                        : template.config.card_style === 'glass' ? '8px'
                        : '6px',
                      border: template.config.card_style === 'bordered'
                        ? `1px solid ${template.config.accent_color}40`
                        : 'none',
                      boxShadow: template.config.card_style === 'shadow'
                        ? '0 2px 4px rgba(0,0,0,0.1)'
                        : 'none',
                    }}
                  />
                ))}
              </div>
              {/* Layout indicator */}
              <div className="absolute bottom-2 right-2 rounded bg-black/20 px-1.5 py-0.5 text-[9px] font-medium text-white">
                {template.config.layout}
              </div>
            </div>

            {/* Template info */}
            <div className="border-t border-gray-100 p-4">
              <div className="flex items-center gap-2">
                <span
                  className="inline-block h-3 w-3 rounded-full"
                  style={{ backgroundColor: template.config.accent_color }}
                />
                <h3 className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                  {template.name}
                </h3>
              </div>
              <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                {template.description}
              </p>
              <div className="mt-3 flex items-center gap-2">
                <span className="inline-block rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600">
                  {template.category}
                </span>
                <span className="inline-block rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600">
                  {template.config.card_style}
                </span>
                {template.config.dark_mode && (
                  <span className="inline-block rounded-full bg-gray-800 px-2.5 py-0.5 text-xs font-medium text-gray-200">
                    Dark
                  </span>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {hasMore && (
        <div className="mt-10 text-center">
          <button
            onClick={() => setVisibleCount((prev) => prev + 12)}
            className="inline-flex h-12 items-center rounded-lg border border-gray-300 bg-white px-8 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
          >
            Ver más plantillas ({filtered.length - visibleCount} restantes)
          </button>
        </div>
      )}

      {filtered.length === 0 && (
        <p className="py-16 text-center text-gray-500">
          No se encontraron plantillas en esta categoría.
        </p>
      )}
    </>
  )
}
