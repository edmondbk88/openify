'use client'

import { useState, useCallback } from 'react'
import type { TemplatePreviewData } from '@/lib/widget-templates'
import { TemplateFilter } from '@/components/landing/template-filter'
import { TemplateCard } from '@/components/landing/template-card'

const INITIAL_COUNT = 12
const LOAD_BATCH = 12

export function PlantillasGallery({
  templates: initialTemplates,
  categories,
  totalCount,
}: {
  templates: TemplatePreviewData[]
  categories: string[]
  totalCount: number
}) {
  const [allTemplates, setAllTemplates] = useState<TemplatePreviewData[]>(initialTemplates)
  const [activeCategory, setActiveCategory] = useState('Todas')
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT)
  const [loading, setLoading] = useState(false)

  const filtered =
    activeCategory === 'Todas'
      ? allTemplates
      : allTemplates.filter((t) => t.category === activeCategory)

  const visible = filtered.slice(0, visibleCount)
  const hasMore = activeCategory === 'Todas'
    ? visibleCount < totalCount
    : visibleCount < filtered.length

  const handleShowMore = useCallback(async () => {
    const nextVisible = visibleCount + LOAD_BATCH

    // If we need more templates than we have loaded and viewing "all", fetch from API
    if (activeCategory === 'Todas' && nextVisible > allTemplates.length && allTemplates.length < totalCount) {
      setLoading(true)
      try {
        const res = await fetch(`/api/templates?offset=${allTemplates.length}&limit=24`)
        const data = await res.json()
        if (data.templates?.length) {
          setAllTemplates((prev) => [...prev, ...data.templates])
        }
      } catch {
        // Silently fail — user can retry
      } finally {
        setLoading(false)
      }
    }

    setVisibleCount(nextVisible)
  }, [visibleCount, activeCategory, allTemplates.length, totalCount])

  function handleCategoryChange(category: string) {
    setActiveCategory(category)
    setVisibleCount(INITIAL_COUNT)
  }

  // For filtered views, calculate remaining from loaded data
  const remaining = activeCategory === 'Todas'
    ? totalCount - visibleCount
    : filtered.length - visibleCount

  return (
    <>
      <div className="mb-10">
        <TemplateFilter
          categories={categories}
          activeCategory={activeCategory}
          onChange={handleCategoryChange}
        />
      </div>

      <p className="mb-6 text-center text-sm text-gray-500">
        Mostrando {visible.length} de {activeCategory === 'Todas' ? totalCount : filtered.length} plantilla{(activeCategory === 'Todas' ? totalCount : filtered.length) !== 1 ? 's' : ''}
        {activeCategory !== 'Todas' ? ` en "${activeCategory}"` : ''}
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((template) => (
          <div key={template.id} style={{ contentVisibility: 'auto', containIntrinsicSize: '0 400px' }}>
            <TemplateCard template={template} />
          </div>
        ))}
      </div>

      {hasMore && remaining > 0 && (
        <div className="mt-10 text-center">
          <button
            onClick={handleShowMore}
            disabled={loading}
            className="inline-flex h-12 items-center rounded-lg border border-gray-300 bg-white px-8 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50 disabled:opacity-50"
          >
            {loading ? 'Cargando...' : `Ver mas plantillas (${Math.max(0, remaining)} restantes)`}
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
