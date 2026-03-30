'use client'

import type { TemplatePreviewData } from '@/lib/widget-templates'

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
  config: TemplatePreviewData['config']
}) {
  const fontMap: Record<string, string> = {
    modern: 'system-ui, -apple-system, sans-serif',
    serif: '"Playfair Display", Georgia, "Times New Roman", serif',
    rounded: '"Nunito", "Varela Round", system-ui, sans-serif',
    mínimal: '"DM Sans", "Inter", system-ui, sans-serif',
    bold: '"Space Grotesk", system-ui, sans-serif',
    handwritten: '"Caveat", cursive, sans-serif',
    mono: '"JetBrains Mono", "Fira Code", monospace',
    elegant: '"Cormorant Garamond", Georgia, serif',
  }
  const fontFamily = fontMap[config.font_style] || fontMap.modern

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

const DEMO_VIDEOS = [
  'https://rckjevsqxkfixkdloqjv.supabase.co/storage/v1/object/public/videos/testimonio-video-1.mp4',
  'https://rckjevsqxkfixkdloqjv.supabase.co/storage/v1/object/public/videos/demos/demo-testimonial-1.mp4',
  'https://rckjevsqxkfixkdloqjv.supabase.co/storage/v1/object/public/videos/demos/demo-testimonial-2.mp4',
]

function VideoTestimonialCard({
  testimonial,
  config,
  videoIndex = 0,
}: {
  testimonial: (typeof FAKE_TESTIMONIALS)[0]
  config: TemplatePreviewData['config']
  videoIndex?: number
}) {
  const fontMap: Record<string, string> = {
    modern: 'system-ui, -apple-system, sans-serif',
    serif: '"Playfair Display", Georgia, "Times New Roman", serif',
    rounded: '"Nunito", "Varela Round", system-ui, sans-serif',
    mínimal: '"DM Sans", "Inter", system-ui, sans-serif',
    bold: '"Space Grotesk", system-ui, sans-serif',
    handwritten: '"Caveat", cursive, sans-serif',
    mono: '"JetBrains Mono", "Fira Code", monospace',
    elegant: '"Cormorant Garamond", Georgia, serif',
  }
  const fontFamily = fontMap[config.font_style] || fontMap.modern
  const cardBg = config.theme === 'dark' ? lightenColor(config.background_color, 8) : '#ffffff'
  const borderColor = config.theme === 'dark' ? lightenColor(config.background_color, 15) : '#e5e7eb'
  const videoUrl = DEMO_VIDEOS[videoIndex % DEMO_VIDEOS.length]

  return (
    <div
      className="overflow-hidden border shadow-sm"
      style={{
        borderRadius: `${config.border_radius}px`,
        backgroundColor: cardBg,
        borderColor,
        fontFamily,
        color: config.text_color,
      }}
    >
      <div className="relative" style={{ aspectRatio: '16/9', background: '#000' }}>
        <video
          src={videoUrl}
          className="h-full w-full object-cover"
          controls
          playsInline
          preload="metadata"
          muted
        />
      </div>
      <div className="p-4">
        {config.show_rating && (
          <div className="mb-2">
            <StarRating rating={testimonial.rating} color={config.primary_color} />
          </div>
        )}
        <p className="text-sm leading-relaxed" style={{ color: config.text_color }}>
          &ldquo;{testimonial.text.substring(0, 100)}...&rdquo;
        </p>
        <div className="mt-3 flex items-center gap-2">
          {config.show_avatar && (
            <Avatar
              initials={testimonial.initials}
              color={config.primary_color}
              bgColor={config.theme === 'dark' ? lightenColor(config.background_color, 20) : hexToRgba(config.primary_color, 0.1)}
            />
          )}
          <div>
            <p className="text-sm font-semibold" style={{ color: config.text_color }}>{testimonial.name}</p>
            {config.show_company && (
              <p className="text-xs opacity-70">{testimonial.company}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export function TemplatePreview({
  template,
  compact = false,
}: {
  template: TemplatePreviewData
  compact?: boolean
}) {
  const { config, layout } = template
  const isVideo = template.category === 'Video'
  const testimonials = layout === 'popup' ? FAKE_TESTIMONIALS.slice(0, 1) : (compact ? FAKE_TESTIMONIALS.slice(0, 2) : FAKE_TESTIMONIALS)

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
        <div style={{ display: 'grid', gridTemplateColumns: compact ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)', gap: '16px' }}>
          {testimonials.map((t, i) => (
            <div key={i}>
              {isVideo && i < 2 ? (
                <VideoTestimonialCard testimonial={t} config={config} videoIndex={i} />
              ) : (
                <TestimonialCard testimonial={t} config={config} />
              )}
            </div>
          ))}
        </div>
      )}

      {layout === 'carousel' && (
        <div className="flex gap-4 overflow-hidden">
          {testimonials.map((t, i) => (
            <div
              key={i}
              style={{ flex: compact ? '0 0 90%' : '0 0 calc(33.333% - 11px)', minWidth: 0 }}
            >
              {isVideo && i < 2 ? (
                <VideoTestimonialCard testimonial={t} config={config} videoIndex={i} />
              ) : (
                <TestimonialCard testimonial={t} config={config} />
              )}
            </div>
          ))}
        </div>
      )}

      {layout === 'wall' && (
        <div style={{ columnCount: compact ? 2 : 3, columnGap: '16px' }}>
          {testimonials.map((t, i) => (
            <div key={i} className="mb-4 break-inside-avoid">
              {isVideo && i < 2 ? (
                <VideoTestimonialCard testimonial={t} config={config} videoIndex={i} />
              ) : (
                <TestimonialCard testimonial={t} config={config} />
              )}
            </div>
          ))}
        </div>
      )}

      {layout === 'single' && (
        <div className="mx-auto max-w-xl">
          {isVideo ? (
            <VideoTestimonialCard testimonial={testimonials[0]} config={config} videoIndex={0} />
          ) : (
            <TestimonialCard testimonial={testimonials[0]} config={config} />
          )}
        </div>
      )}

      {layout === 'badge' && (() => {
        const cardBg = config.theme === 'dark' ? lightenColor(config.background_color, 8) : '#ffffff'
        const borderColor = config.theme === 'dark' ? lightenColor(config.background_color, 15) : '#e5e7eb'
        const fontMap: Record<string, string> = {
          modern: 'system-ui, -apple-system, sans-serif',
          serif: '"Playfair Display", Georgia, "Times New Roman", serif',
          rounded: '"Nunito", "Varela Round", system-ui, sans-serif',
          mínimal: '"DM Sans", "Inter", system-ui, sans-serif',
          bold: '"Space Grotesk", system-ui, sans-serif',
          handwritten: '"Caveat", cursive, sans-serif',
          mono: '"JetBrains Mono", "Fira Code", monospace',
          elegant: '"Cormorant Garamond", Georgia, serif',
        }
        const fontFamily = fontMap[config.font_style] || fontMap.modern
        const latest = testimonials[0]

        return (
          <div
            className="border shadow-lg"
            style={{
              maxWidth: compact ? '100%' : '300px',
              borderRadius: `${config.border_radius}px`,
              backgroundColor: cardBg,
              borderColor,
              fontFamily,
              padding: compact ? '12px' : '16px',
            }}
          >
            <div className="flex items-center gap-2.5" style={{ marginBottom: '8px' }}>
              <span
                className="font-bold"
                style={{
                  fontSize: compact ? '24px' : '28px',
                  lineHeight: 1,
                  color: config.primary_color,
                }}
              >
                4.9
              </span>
              <div>
                <StarRating rating={5} color={config.primary_color} />
                <span className="text-xs opacity-60" style={{ color: config.text_color }}>
                  127 opiniones
                </span>
              </div>
            </div>
            {latest && (
              <div style={{ marginTop: '8px' }}>
                <p
                  className="text-xs italic leading-relaxed"
                  style={{
                    color: config.text_color,
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical' as const,
                    overflow: 'hidden',
                  }}
                >
                  &ldquo;{latest.text.substring(0, 80)}{latest.text.length > 80 ? '...' : ''}&rdquo;
                </p>
                <p className="mt-1 text-xs opacity-60" style={{ color: config.text_color }}>
                  — {latest.name}
                </p>
              </div>
            )}
          </div>
        )
      })()}

      {layout === 'popup' && (() => {
        const cardBg = config.theme === 'dark' ? lightenColor(config.background_color, 8) : '#ffffff'
        const borderColor = config.theme === 'dark' ? lightenColor(config.background_color, 15) : '#e5e7eb'
        const fontMap: Record<string, string> = {
          modern: 'system-ui, -apple-system, sans-serif',
          serif: '"Playfair Display", Georgia, "Times New Roman", serif',
          rounded: '"Nunito", "Varela Round", system-ui, sans-serif',
          mínimal: '"DM Sans", "Inter", system-ui, sans-serif',
          bold: '"Space Grotesk", system-ui, sans-serif',
          handwritten: '"Caveat", cursive, sans-serif',
          mono: '"JetBrains Mono", "Fira Code", monospace',
          elegant: '"Cormorant Garamond", Georgia, serif',
        }
        const fontFamily = fontMap[config.font_style] || fontMap.modern
        const t = testimonials[0]

        return (
          <div className="flex items-end justify-start" style={{ minHeight: compact ? '80px' : '100px' }}>
            <div
              className="border shadow-lg"
              style={{
                maxWidth: compact ? '220px' : '280px',
                borderRadius: `${config.border_radius}px`,
                backgroundColor: cardBg,
                borderColor,
                fontFamily,
                padding: compact ? '10px' : '12px',
              }}
            >
              <div className="flex items-start gap-2.5">
                {config.show_avatar && (
                  <Avatar
                    initials={t.initials}
                    color={config.primary_color}
                    bgColor={config.theme === 'dark' ? lightenColor(config.background_color, 20) : hexToRgba(config.primary_color, 0.1)}
                  />
                )}
                <div className="min-w-0">
                  <p className="text-xs font-medium" style={{ color: config.text_color }}>
                    {t.name.split(' ').slice(0, 2).join(' ')} dejó una reseña de{' '}
                    <span style={{ color: config.primary_color }}>★★★★★</span>
                  </p>
                  <p className="mt-0.5 text-xs opacity-50" style={{ color: config.text_color }}>
                    Hace 2 minutos
                  </p>
                </div>
              </div>
            </div>
          </div>
        )
      })()}
    </div>
  )
}
