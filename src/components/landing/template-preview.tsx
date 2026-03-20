'use client'

import { WidgetTemplate } from '@/lib/widget-templates'

const FAKE_TESTIMONIALS = [
  {
    name: 'María García López',
    company: 'Estudio Creativo Luna',
    text: 'Increíble herramienta. En solo dos semanas conseguimos duplicar las conversiones de nuestra página de servicios gracias a los testimonios.',
    rating: 5,
    date: '15 mar 2026',
    initials: 'MG',
    is_company_verified: true,
  },
  {
    name: 'Carlos Rodríguez Pérez',
    company: 'TechSolutions Madrid',
    text: 'Lo mejor es la facilidad de uso. Configuramos el widget en menos de 5 minutos y el resultado es muy profesional. Nuestros clientes lo adoran.',
    rating: 5,
    date: '12 mar 2026',
    initials: 'CR',
    is_company_verified: true,
  },
  {
    name: 'Ana Martínez Ruiz',
    company: 'Coaching Vital',
    text: 'Mis alumnos dejan testimonios fácilmente y se muestran de forma espectacular en mi web. Ha sido un cambio total para mi negocio.',
    rating: 4,
    date: '10 mar 2026',
    initials: 'AM',
    is_company_verified: false,
  },
]

function StarRating({ rating, color }: { rating: number; color: string }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className="h-4 w-4"
          viewBox="0 0 20 20"
          fill={star <= rating ? color : '#d1d5db'}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function Avatar({
  initials,
  color,
  bgColor,
}: {
  initials: string
  color: string
  bgColor: string
}) {
  return (
    <div
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold"
      style={{ backgroundColor: bgColor, color }}
    >
      {initials}
    </div>
  )
}

function TestimonialCard({
  testimonial,
  config,
}: {
  testimonial: (typeof FAKE_TESTIMONIALS)[0]
  config: WidgetTemplate['config']
}) {
  const FONT_MAP: Record<string, string> = {
    modern: '"Inter", system-ui, -apple-system, sans-serif',
    serif: '"Playfair Display", Georgia, "Times New Roman", serif',
    rounded: '"Nunito", system-ui, sans-serif',
    minimal: '"DM Sans", system-ui, sans-serif',
    bold: '"Space Grotesk", system-ui, sans-serif',
    handwritten: '"Caveat", cursive',
    mono: '"JetBrains Mono", "Fira Code", monospace',
    elegant: '"Cormorant Garamond", Georgia, serif',
  }
  const fontFamily = FONT_MAP[config.font_style] || FONT_MAP.modern

  const cardBg = config.theme === 'dark' ? lightenColor(config.background_color, 8) : '#ffffff'
  const borderColor = config.theme === 'dark' ? lightenColor(config.background_color, 15) : '#e5e7eb'

  return (
    <div
      className="flex flex-col gap-3 border p-5 shadow-sm transition-shadow hover:shadow-md"
      style={{
        borderRadius: `${config.border_radius}px`,
        backgroundColor: cardBg,
        borderColor,
        fontFamily,
        color: config.text_color,
      }}
    >
      {config.show_rating && (
        <StarRating rating={testimonial.rating} color={config.primary_color} />
      )}
      <p className="text-sm leading-relaxed" style={{ color: config.text_color }}>
        &ldquo;{testimonial.text}&rdquo;
      </p>
      <div className="mt-auto flex items-center gap-3 pt-2">
        {config.show_avatar && (
          <Avatar
            initials={testimonial.initials}
            color={config.primary_color}
            bgColor={config.theme === 'dark' ? lightenColor(config.background_color, 20) : hexToRgba(config.primary_color, 0.1)}
          />
        )}
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold" style={{ color: config.text_color }}>
            {testimonial.name}
          </p>
          {config.show_company && (
            <div className="flex items-center gap-1 truncate">
              <p className="truncate text-xs opacity-70">{testimonial.company}</p>
              {testimonial.is_company_verified && (
                <svg className="h-3.5 w-3.5 shrink-0 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.403 12.652a3 3 0 010-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
              )}
            </div>
          )}
          {config.show_date && (
            <p className="text-xs opacity-50">{testimonial.date}</p>
          )}
        </div>
      </div>
    </div>
  )
}

function lightenColor(hex: string, amount: number): string {
  const cleanHex = hex.replace('#', '')
  if (cleanHex.length !== 6) return hex
  const r = Math.min(255, parseInt(cleanHex.slice(0, 2), 16) + amount)
  const g = Math.min(255, parseInt(cleanHex.slice(2, 4), 16) + amount)
  const b = Math.min(255, parseInt(cleanHex.slice(4, 6), 16) + amount)
  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`
}

function hexToRgba(hex: string, alpha: number): string {
  const cleanHex = hex.replace('#', '')
  if (cleanHex.length !== 6) return hex
  const r = parseInt(cleanHex.slice(0, 2), 16)
  const g = parseInt(cleanHex.slice(2, 4), 16)
  const b = parseInt(cleanHex.slice(4, 6), 16)
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

function VideoPlayOverlay({ config }: { config: WidgetTemplate['config'] }) {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
      <div
        className="flex h-12 w-12 items-center justify-center rounded-full shadow-lg"
        style={{
          backgroundColor: config.theme === 'dark' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.15)',
          backdropFilter: 'blur(4px)',
        }}
      >
        <svg
          className="ml-0.5 h-5 w-5"
          viewBox="0 0 20 20"
          fill={config.theme === 'dark' ? '#ffffff' : '#1f2937'}
        >
          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
        </svg>
      </div>
    </div>
  )
}

export function TemplatePreview({
  template,
  compact = false,
}: {
  template: WidgetTemplate
  compact?: boolean
}) {
  const { config, layout } = template
  const isVideo = template.category === 'Video'
  const testimonials = compact ? FAKE_TESTIMONIALS.slice(0, 2) : FAKE_TESTIMONIALS

  const containerPadding = compact ? 'p-3' : 'p-6'

  return (
    <div
      className={`w-full overflow-hidden ${containerPadding}`}
      style={{
        backgroundColor: config.background_color,
        borderRadius: `${Math.min(config.border_radius, 16)}px`,
      }}
    >
      {layout === 'grid' && (
        <div className={`grid gap-4 ${compact ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
          {testimonials.map((t, i) => (
            <div key={i} className="relative">
              <TestimonialCard testimonial={t} config={config} />
              {isVideo && i === 0 && <VideoPlayOverlay config={config} />}
            </div>
          ))}
        </div>
      )}

      {layout === 'carousel' && (
        <div className="flex gap-4 overflow-hidden">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`relative ${compact ? 'w-full shrink-0' : 'w-full shrink-0 md:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.75rem)]'}`}
            >
              <TestimonialCard testimonial={t} config={config} />
              {isVideo && i === 0 && <VideoPlayOverlay config={config} />}
            </div>
          ))}
        </div>
      )}

      {layout === 'wall' && (
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {testimonials.map((t, i) => (
            <div key={i} className="relative mb-4 break-inside-avoid">
              <TestimonialCard testimonial={t} config={config} />
              {isVideo && i === 0 && <VideoPlayOverlay config={config} />}
            </div>
          ))}
        </div>
      )}

      {layout === 'single' && (
        <div className="relative mx-auto max-w-xl">
          <TestimonialCard testimonial={testimonials[0]} config={config} />
          {isVideo && <VideoPlayOverlay config={config} />}
        </div>
      )}

      {layout === 'badge' && (
        <div className="flex items-center gap-3">
          <div
            className="flex items-center gap-2 rounded-full border px-4 py-2 shadow-sm"
            style={{
              backgroundColor: config.theme === 'dark' ? lightenColor(config.background_color, 10) : '#ffffff',
              borderColor: config.theme === 'dark' ? lightenColor(config.background_color, 20) : '#e5e7eb',
            }}
          >
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className="h-3.5 w-3.5"
                  viewBox="0 0 20 20"
                  fill={config.primary_color}
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-xs font-semibold" style={{ color: config.text_color }}>
              4.9/5
            </span>
            <span className="text-xs opacity-60" style={{ color: config.text_color }}>
              · 127 opiniones
            </span>
          </div>
        </div>
      )}
    </div>
  )
}
