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

  const filtered =
    activeCategory === 'All'
      ? allTemplates
      : allTemplates.filter((t) => (CATEGORY_TRANSLATIONS[t.category] || t.category) === activeCategory)

  const visible = filtered.slice(0, visibleCount)
  const hasMore = activeCategory === 'All'
    ? visibleCount < totalCount
    : visibleCount < filtered.length

  const englishCategories = ['All', ...categories.map(c => CATEGORY_TRANSLATIONS[c] || c)]

  const handleShowMore = useCallback(async () => {
    const nextVisible = visibleCount + LOAD_BATCH

    // If we need more templates than we have loaded and viewing "all", fetch from API
    if (activeCategory === 'All' && nextVisible > allTemplates.length && allTemplates.length < totalCount) {
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

  const remaining = activeCategory === 'All'
    ? totalCount - visibleCount
    : filtered.length - visibleCount

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
        Showing {visible.length} of {activeCategory === 'All' ? totalCount : filtered.length} template{(activeCategory === 'All' ? totalCount : filtered.length) !== 1 ? 's' : ''}
        {activeCategory !== 'All' ? ` in "${activeCategory}"` : ''}
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((template) => (
          <div key={template.id} style={{ contentVisibility: 'auto', containIntrinsicSize: '0 400px' }}>
            <TemplateCardEn template={template} />
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
            {loading ? 'Loading...' : `Show more templates (${Math.max(0, remaining)} remaining)`}
          </button>
        </div>
      )}

      {filtered.length === 0 && (
        <p className="py-16 text-center text-gray-500">
          No templates found in this category.
        </p>
      )}
    </>
  )
}
