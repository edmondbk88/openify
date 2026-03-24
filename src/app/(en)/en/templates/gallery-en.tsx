'use client'

import { useState, useCallback } from 'react'
import type { TemplatePreviewData } from '@/lib/widget-templates'
import { TemplateCardEn } from '@/components/landing/template-card-en'

const INITIAL_COUNT = 12
const LOAD_BATCH = 12

const CATEGORY_TRANSLATIONS: Record<string, string> = {
  'Minimalista': 'Minimalist',
  'Corporativo': 'Corporate',
  'Colorido': 'Colorful',
  'Oscuro': 'Dark',
  'Moderno': 'Modern',
  'Elegante': 'Elegant',
  'Divertido': 'Fun',
  'Profesional': 'Professional',
  'Video': 'Video',
  'Popup': 'Popup',
  'Creativo': 'Creative',
  'Bento': 'Bento',
  'Social': 'Social',
  'Premium': 'Premium',
  'Retro': 'Retro',
}

// Reverse map: English → Spanish (for API calls since categories are stored in Spanish)
const REVERSE_TRANSLATIONS: Record<string, string> = Object.fromEntries(
  Object.entries(CATEGORY_TRANSLATIONS).map(([es, en]) => [en, es])
)

export function TemplatesGalleryEn({
  templates: initialTemplates,
  categories,
  totalCount,
}: {
  templates: TemplatePreviewData[]
  categories: string[]
  totalCount: number
}) {
  const [allTemplates, setAllTemplates] = useState<TemplatePreviewData[]>(initialTemplates)
  const [activeCategory, setActiveCategory] = useState('All')
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT)
  const [loading, setLoading] = useState(false)
  const [categoryTemplates, setCategoryTemplates] = useState<Record<string, TemplatePreviewData[]>>({})
  const [categoryTotals, setCategoryTotals] = useState<Record<string, number>>({})

  const englishCategories = ['All', ...categories.map(c => CATEGORY_TRANSLATIONS[c] || c)]

  // Get templates for current view
  const currentTemplates = activeCategory === 'All' ? allTemplates : (categoryTemplates[activeCategory] || [])
  const currentTotal = activeCategory === 'All' ? totalCount : (categoryTotals[activeCategory] ?? 0)

  const visible = currentTemplates.slice(0, visibleCount)
  const hasMore = visibleCount < currentTotal

  const fetchCategoryTemplates = useCallback(async (enCategory: string) => {
    if (categoryTemplates[enCategory]) return
    setLoading(true)
    try {
      // API uses Spanish category names
      const esCategory = REVERSE_TRANSLATIONS[enCategory] || enCategory
      const res = await fetch(`/api/templates?category=${encodeURIComponent(esCategory)}&limit=200`)
      const data = await res.json()
      if (data.templates?.length) {
        setCategoryTemplates((prev) => ({ ...prev, [enCategory]: data.templates }))
        setCategoryTotals((prev) => ({ ...prev, [enCategory]: data.total }))
      } else {
        setCategoryTemplates((prev) => ({ ...prev, [enCategory]: [] }))
        setCategoryTotals((prev) => ({ ...prev, [enCategory]: 0 }))
      }
    } catch {
      // Silently fail
    } finally {
      setLoading(false)
    }
  }, [categoryTemplates])

  const handleShowMore = useCallback(async () => {
    const nextVisible = visibleCount + LOAD_BATCH

    if (activeCategory === 'All' && nextVisible > allTemplates.length && allTemplates.length < totalCount) {
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
    if (category !== 'All') {
      fetchCategoryTemplates(category)
    }
  }

  const remaining = Math.max(0, currentTotal - visibleCount)

  return (
    <>
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {englishCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
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

      <p className="mb-6 text-center text-sm text-gray-500">
        Showing {visible.length} of {currentTotal} template{currentTotal !== 1 ? 's' : ''}
        {activeCategory !== 'All' ? ` in "${activeCategory}"` : ''}
      </p>

      {loading && visible.length === 0 ? (
        <div className="py-16 text-center">
          <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-gray-300 border-t-indigo-600" />
          <p className="mt-3 text-sm text-gray-500">Loading templates...</p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((template) => (
            <div key={template.id} style={{ contentVisibility: 'auto', containIntrinsicSize: '0 400px' }}>
              <TemplateCardEn template={template} />
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
            {loading ? 'Loading...' : `Show more templates (${remaining} remaining)`}
          </button>
        </div>
      )}

      {!loading && visible.length === 0 && (
        <p className="py-16 text-center text-gray-500">
          No templates found in this category.
        </p>
      )}
    </>
  )
}
