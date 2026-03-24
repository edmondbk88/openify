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
  const [categoryTemplates, setCategoryTemplates] = useState<Record<string, TemplatePreviewData[]>>({})
  const [categoryTotals, setCategoryTotals] = useState<Record<string, number>>({})

  // Get templates for current view
  const currentTemplates = activeCategory === 'Todas' ? allTemplates : (categoryTemplates[activeCategory] || [])
  const currentTotal = activeCategory === 'Todas' ? totalCount : (categoryTotals[activeCategory] ?? 0)

  const visible = currentTemplates.slice(0, visibleCount)
  const hasMore = visibleCount < currentTotal

  const fetchCategoryTemplates = useCallback(async (category: string) => {
    if (categoryTemplates[category]) return // Already loaded
    setLoading(true)
    try {
      const res = await fetch(`/api/templates?category=${encodeURIComponent(category)}&limit=200`)
      const data = await res.json()
      if (data.templates?.length) {
        setCategoryTemplates((prev) => ({ ...prev, [category]: data.templates }))
        setCategoryTotals((prev) => ({ ...prev, [category]: data.total }))
      } else {
        setCategoryTemplates((prev) => ({ ...prev, [category]: [] }))
        setCategoryTotals((prev) => ({ ...prev, [category]: 0 }))
      }
    } catch {
      // Silently fail
    } finally {
      setLoading(false)
    }
  }, [categoryTemplates])

  const handleShowMore = useCallback(async () => {
    const nextVisible = visibleCount + LOAD_BATCH

    // If viewing "Todas" and need more than loaded, fetch next batch
    if (activeCategory === 'Todas' && nextVisible > allTemplates.length && allTemplates.length < totalCount) {
      setLoading(true)
      try {
        const res = await fetch(`/api/templates?offset=${allTemplates.length}&limit=24`)
        const data = await res.json()
        if (data.templates?.length) {
          setAllTemplates((prev) => [...prev, ...data.templates])
        }
      } catch {
        // Silently fail
      } finally {
        setLoading(false)
      }
    }

    setVisibleCount(nextVisible)
  }, [visibleCount, activeCategory, allTemplates.length, totalCount])

  function handleCategoryChange(category: string) {
    setActiveCategory(category)
    setVisibleCount(INITIAL_COUNT)
    if (category !== 'Todas') {
      fetchCategoryTemplates(category)
    }
  }

  const remaining = Math.max(0, currentTotal - visibleCount)

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
        Mostrando {visible.length} de {currentTotal} plantilla{currentTotal !== 1 ? 's' : ''}
        {activeCategory !== 'Todas' ? ` en "${activeCategory}"` : ''}
      </p>

      {loading && visible.length === 0 ? (
        <div className="py-16 text-center">
          <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-gray-300 border-t-indigo-600" />
          <p className="mt-3 text-sm text-gray-500">Cargando plantillas...</p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((template) => (
            <div key={template.id} style={{ contentVisibility: 'auto', containIntrinsicSize: '0 400px' }}>
              <TemplateCard template={template} />
            </div>
          ))}
        </div>
      )}

      {hasMore && remaining > 0 && (
        <div className="mt-10 text-center">
          <button
            onClick={handleShowMore}
            disabled={loading}
            className="inline-flex h-12 items-center rounded-lg border border-gray-300 bg-white px-8 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50 disabled:opacity-50"
          >
            {loading ? 'Cargando...' : `Ver más plantillas (${remaining} restantes)`}
          </button>
        </div>
      )}

      {!loading && visible.length === 0 && (
        <p className="py-16 text-center text-gray-500">
          No se encontraron plantillas en esta categoría.
        </p>
      )}
    </>
  )
}
