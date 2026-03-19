'use client'

import { useState } from 'react'
import { WidgetTemplate } from '@/lib/widget-templates'
import { TemplateFilter } from '@/components/landing/template-filter'
import { TemplateCard } from '@/components/landing/template-card'

export function PlantillasGallery({
  templates,
  categories,
}: {
  templates: WidgetTemplate[]
  categories: string[]
}) {
  const [activeCategory, setActiveCategory] = useState('Todas')

  const filtered =
    activeCategory === 'Todas'
      ? templates
      : templates.filter((t) => t.category === activeCategory)

  return (
    <>
      <div className="mb-10">
        <TemplateFilter
          categories={categories}
          activeCategory={activeCategory}
          onChange={setActiveCategory}
        />
      </div>

      <p className="mb-6 text-center text-sm text-gray-500">
        Mostrando {filtered.length} plantilla{filtered.length !== 1 ? 's' : ''}
        {activeCategory !== 'Todas' ? ` en "${activeCategory}"` : ''}
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((template) => (
          <TemplateCard key={template.id} template={template} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-16 text-center text-gray-400">
          No se encontraron plantillas en esta categoría.
        </p>
      )}
    </>
  )
}
