'use client'

import { cn } from '@/lib/utils'
import type { WidgetConfig, WidgetLayout } from '@/types'

type PreviewConfig = Pick<
  WidgetConfig,
  | 'layout'
  | 'theme'
  | 'primary_color'
  | 'background_color'
  | 'text_color'
  | 'border_radius'
  | 'show_rating'
  | 'show_date'
  | 'show_avatar'
  | 'show_company'
  | 'show_branding'
>

interface WidgetPreviewProps {
  config: PreviewConfig
}

const mockTestimonials = [
  {
    name: 'Ana García',
    company: 'TechStartup SL',
    role: 'CEO',
    content: 'Excelente servicio. Nos ayudó a aumentar la confianza de nuestros clientes y las conversiones mejoraron un 40%.',
    rating: 5,
    date: '12 mar 2026',
    initials: 'AG',
  },
  {
    name: 'Carlos López',
    company: 'Diseño Digital',
    role: 'Director',
    content: 'Muy fácil de integrar. El widget se adapta perfectamente al diseño de nuestra web.',
    rating: 4,
    date: '8 mar 2026',
    initials: 'CL',
  },
  {
    name: 'María Ruiz',
    company: 'Consultoría MR',
    role: 'Fundadora',
    content: 'La mejor herramienta de testimonios que hemos probado. Recomendada al 100%.',
    rating: 5,
    date: '1 mar 2026',
    initials: 'MR',
  },
]

function Stars({ rating, color }: { rating: number; color: string }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          className="h-3.5 w-3.5"
          fill={i < rating ? color : '#e5e7eb'}
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function MockCard({
  testimonial,
  config,
  compact = false,
}: {
  testimonial: (typeof mockTestimonials)[0]
  config: PreviewConfig
  compact?: boolean
}) {
  const isDark = config.theme === 'dark'
  const bg = isDark ? '#1f2937' : config.background_color
  const text = isDark ? '#f9fafb' : config.text_color
  const subtext = isDark ? '#9ca3af' : '#6b7280'

  return (
    <div
      className={cn('border p-4', compact && 'p-3')}
      style={{
        backgroundColor: bg,
        color: text,
        borderRadius: `${config.border_radius}px`,
        borderColor: isDark ? '#374151' : '#e5e7eb',
      }}
    >
      {config.show_rating && (
        <Stars rating={testimonial.rating} color={config.primary_color} />
      )}
      <p className={cn('mt-2 leading-relaxed', compact ? 'text-xs' : 'text-sm')} style={{ color: text }}>
        {compact ? testimonial.content.slice(0, 60) + '...' : testimonial.content}
      </p>
      <div className={cn('mt-3 flex items-center gap-2', compact && 'mt-2')}>
        {config.show_avatar && (
          <div
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-medium text-white"
            style={{ backgroundColor: config.primary_color }}
          >
            {testimonial.initials}
          </div>
        )}
        <div>
          <p className={cn('font-medium', compact ? 'text-xs' : 'text-sm')} style={{ color: text }}>
            {testimonial.name}
          </p>
          {config.show_company && (
            <p className="text-xs" style={{ color: subtext }}>
              {testimonial.role} en {testimonial.company}
            </p>
          )}
        </div>
      </div>
      {config.show_date && (
        <p className="mt-2 text-xs" style={{ color: subtext }}>
          {testimonial.date}
        </p>
      )}
    </div>
  )
}

function CarouselPreview({ config }: { config: PreviewConfig }) {
  return (
    <div className="space-y-3">
      <MockCard testimonial={mockTestimonials[0]} config={config} />
      <div className="flex justify-center gap-1.5">
        {mockTestimonials.map((_, i) => (
          <span
            key={i}
            className="inline-block h-2 w-2 rounded-full"
            style={{
              backgroundColor: i === 0 ? config.primary_color : '#d1d5db',
            }}
          />
        ))}
      </div>
    </div>
  )
}

function GridPreview({ config }: { config: PreviewConfig }) {
  return (
    <div className="grid grid-cols-2 gap-2">
      {mockTestimonials.slice(0, 2).map((t, i) => (
        <MockCard key={i} testimonial={t} config={config} compact />
      ))}
    </div>
  )
}

function WallPreview({ config }: { config: PreviewConfig }) {
  return (
    <div className="columns-2 gap-2 space-y-2">
      {mockTestimonials.map((t, i) => (
        <div key={i} className="break-inside-avoid">
          <MockCard testimonial={t} config={config} compact />
        </div>
      ))}
    </div>
  )
}

function SinglePreview({ config }: { config: PreviewConfig }) {
  return <MockCard testimonial={mockTestimonials[0]} config={config} />
}

function BadgePreview({ config }: { config: PreviewConfig }) {
  const isDark = config.theme === 'dark'
  const bg = isDark ? '#1f2937' : config.background_color
  const text = isDark ? '#f9fafb' : config.text_color

  return (
    <div
      className="inline-flex items-center gap-3 border p-3"
      style={{
        backgroundColor: bg,
        color: text,
        borderRadius: `${config.border_radius}px`,
        borderColor: isDark ? '#374151' : '#e5e7eb',
      }}
    >
      <div className="flex flex-col items-center">
        <span className="text-2xl font-bold" style={{ color: config.primary_color }}>
          4.8
        </span>
        <Stars rating={5} color={config.primary_color} />
        <span className="mt-1 text-xs" style={{ color: isDark ? '#9ca3af' : '#6b7280' }}>
          24 opiniones
        </span>
      </div>
    </div>
  )
}

const layoutRenderers: Record<WidgetLayout, React.FC<{ config: PreviewConfig }>> = {
  carousel: CarouselPreview,
  grid: GridPreview,
  wall: WallPreview,
  single: SinglePreview,
  badge: BadgePreview,
}

export default function WidgetPreview({ config }: WidgetPreviewProps) {
  const LayoutComponent = layoutRenderers[config.layout]
  const isDark = config.theme === 'dark'

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 border-b border-gray-200 bg-gray-50 px-4 py-2.5">
        <span className="h-3 w-3 rounded-full bg-red-400" />
        <span className="h-3 w-3 rounded-full bg-yellow-400" />
        <span className="h-3 w-3 rounded-full bg-green-400" />
        <span className="ml-3 text-xs text-gray-400">Vista previa del widget</span>
      </div>

      {/* Preview area */}
      <div
        className="p-6"
        style={{
          backgroundColor: isDark ? '#111827' : '#ffffff',
          minHeight: 200,
        }}
      >
        <LayoutComponent config={config} />

        {config.show_branding && (
          <p className="mt-4 text-center text-xs" style={{ color: isDark ? '#6b7280' : '#9ca3af' }}>
            Desarrollado con{' '}
            <span style={{ color: config.primary_color, fontWeight: 600 }}>Opinafy</span>
          </p>
        )}
      </div>
    </div>
  )
}
