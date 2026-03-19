'use client'

import { useState } from 'react'
import { WidgetTemplate } from '@/lib/widget-templates'
import { TemplateFilter } from '@/components/landing/template-filter'
import { TemplateCard } from '@/components/landing/template-card'

const INITIAL_COUNT = 12

export function PlantillasGallery({
  templates,
  categories,
}: {
  templates: WidgetTemplate[]
  categories: string[]
}) {
  const [activeCategory, setActiveCategory] = useState('Todas')
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT)

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
      <div className="mb-10">
        <TemplateFilter
          categories={categories}
          activeCategory={activeCategory}
          onChange={handleCategoryChange}
        />
      </div>

      <p className="mb-6 text-center text-sm text-gray-500">
        Mostrando {visible.length} de {filtered.length} plantilla{filtered.length !== 1 ? 's' : ''}
        {activeCategory !== 'Todas' ? ` en "${activeCategory}"` : ''}
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((template) => (
          <div key={template.id} style={{ contentVisibility: 'auto', containIntrinsicSize: '0 400px' }}>
            <TemplateCard template={template} />
          </div>
        ))}
      </div>

      {hasMore && (
        <div className="mt-10 text-center">
          <button
            onClick={() => setVisibleCount((prev) => prev + 12)}
            className="inline-flex h-12 items-center rounded-lg border border-gray-300 bg-white px-8 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
          >
            Ver mas plantillas ({filtered.length - visibleCount} restantes)
          </button>
        </div>
      )}

      {filtered.length === 0 && (
        <p className="py-16 text-center text-gray-400">
          No se encontraron plantillas en esta categoría.
        </p>
      )}
    </>
  )
}
