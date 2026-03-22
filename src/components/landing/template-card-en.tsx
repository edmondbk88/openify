'use client'

import Link from 'next/link'
import { WidgetTemplate } from '@/lib/widget-templates'
import { TemplatePreview } from './template-preview'

const categoryBadgeColors: Record<string, string> = {
  Minimalista: 'bg-gray-100 text-gray-700',
  Corporativo: 'bg-blue-100 text-blue-700',
  Colorido: 'bg-pink-100 text-pink-700',
  Oscuro: 'bg-zinc-800 text-zinc-200',
  Moderno: 'bg-violet-100 text-violet-700',
  Elegante: 'bg-amber-100 text-amber-700',
  Divertido: 'bg-green-100 text-green-700',
  Profesional: 'bg-indigo-100 text-indigo-700',
}

const layoutLabels: Record<string, string> = {
  carousel: 'Carousel',
  grid: 'Grid',
  wall: 'Wall',
  single: 'Featured',
  badge: 'Badge',
}

export function TemplateCardEn({ template }: { template: WidgetTemplate }) {
  return (
    <Link
      href={`/en/templates/${template.id}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-lg hover:-translate-y-1"
      style={{ contentVisibility: 'auto', containIntrinsicSize: '0 320px' }}
    >
      {/* Preview thumbnail */}
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 scale-[0.6] origin-top-left" style={{ width: '166.67%', height: '166.67%' }}>
          <TemplatePreview template={template} compact />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      </div>

      {/* Info */}
      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-center gap-2">
          <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${categoryBadgeColors[template.category] || 'bg-gray-100 text-gray-700'}`}>
            {template.category}
          </span>
          <span className="text-xs text-gray-400">
            {layoutLabels[template.layout]}
          </span>
        </div>
        <h3 className="text-base font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
          {template.name}
        </h3>
        <p className="text-sm text-gray-500 line-clamp-2">{template.description}</p>
      </div>
    </Link>
  )
}
