'use client'

import { useRef, useState } from 'react'
import { WidgetTemplate } from '@/lib/widget-templates'

// Demo video URLs from Supabase storage
const DEMO_VIDEO = 'https://rckjevsqxkfixkdloqjv.supabase.co/storage/v1/object/public/videos/testimonio-video-1.mp4'

const FAKE_TESTIMONIALS = [
  {
    name: 'María García López',
    company: 'Estudio Creativo Luna',
    text: 'Increíble herramienta. En solo dos semanas conseguimos duplicar las conversiones de nuestra página de servicios.',
    rating: 5,
    date: '15 mar 2026',
    initials: 'MG',
    is_company_verified: true,
  },
  {
    name: 'Carlos Rodríguez Pérez',
    company: 'TechSolutions Madrid',
    text: 'Lo mejor es la facilidad de uso. Configuramos el widget en menos de 5 minutos y el resultado es muy profesional.',
    rating: 5,
    date: '12 mar 2026',
    initials: 'CR',
    is_company_verified: true,
  },
  {
    name: 'Ana Martínez Ruiz',
    company: 'Coaching Vital',
    text: 'Mis alumnos dejan testimonios fácilmente y se muestran de forma espectacular en mi web.',
    rating: 4,
    date: '10 mar 2026',
    initials: 'AM',
    is_company_verified: false,
  },
  {
    name: 'Pedro Sánchez Gil',
    company: 'Digital Pro Agency',
    text: 'Herramienta imprescindible. Nuestros clientes confían más en nosotros gracias a los testimonios verificados.',
    rating: 5,
    date: '8 mar 2026',
    initials: 'PS',
    is_company_verified: true,
  },
]

const FONT_IMPORTS: Record<string, string> = {
  modern: '',
  serif: "@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&display=swap');",
  rounded: "@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap');",
  minimal: "@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;600;700&display=swap');",
  bold: "@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&display=swap');",
  handwritten: "@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;600;700&display=swap');",
  mono: "@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600;700&display=swap');",
  elegant: "@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&display=swap');",
}

const FONT_FAMILIES: Record<string, string> = {
  modern: 'Inter, system-ui, -apple-system, sans-serif',
  serif: '"Playfair Display", Georgia, serif',
  rounded: 'Nunito, system-ui, sans-serif',
  minimal: '"DM Sans", system-ui, sans-serif',
  bold: '"Space Grotesk", system-ui, sans-serif',
  handwritten: 'Caveat, cursive',
  mono: '"JetBrains Mono", monospace',
  elegant: '"Cormorant Garamond", Georgia, serif',
}

function StarRating({ rating, color }: { rating: number; color: string }) {
  return (
    <div style={{ display: 'flex', gap: '2px' }}>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          style={{ width: '16px', height: '16px', color: star <= rating ? '#f59e0b' : (color === 'dark' ? '#4b5563' : '#d1d5db') }}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function Avatar({ initials, primaryColor, isDark, bgColor }: { initials: string; primaryColor: string; isDark: boolean; bgColor: string }) {
  return (
    <div
      style={{
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        backgroundColor: isDark ? primaryColor : bgColor,
        color: isDark ? '#fff' : primaryColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '14px',
        fontWeight: 600,
        flexShrink: 0,
      }}
    >
      {initials}
    </div>
  )
}

function TestimonialCard({
  testimonial,
  config,
  hasVideo = false,
  videoUrl,
}: {
  testimonial: (typeof FAKE_TESTIMONIALS)[0]
  config: WidgetTemplate['config']
  hasVideo?: boolean
  videoUrl?: string
}) {
  const isDark = config.theme === 'dark'
  const cardBg = isDark ? lighten(config.background_color, 8) : '#ffffff'
  const borderColor = isDark ? lighten(config.background_color, 15) : '#e5e7eb'
  const fontFamily = FONT_FAMILIES[config.font_style] || FONT_FAMILIES.modern
  const secondaryColor = isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.45)'

  return (
    <div
      style={{
        borderRadius: `${config.border_radius}px`,
        backgroundColor: cardBg,
        border: `1px solid ${borderColor}`,
        fontFamily,
        color: config.text_color,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: isDark ? '0 1px 3px rgba(0,0,0,0.4)' : '0 1px 3px rgba(0,0,0,0.1)',
        minHeight: hasVideo ? undefined : '180px',
      }}
    >
      {hasVideo && videoUrl && (
        <div style={{ position: 'relative', aspectRatio: '16/9', background: '#000' }}>
          <video
            src={videoUrl}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            controls
            playsInline
            preload="metadata"
          />
        </div>
      )}
      <div style={{ padding: hasVideo ? '16px' : '20px', display: 'flex', flexDirection: 'column', flex: 1, gap: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {config.show_avatar && (
            <Avatar
              initials={testimonial.initials}
              primaryColor={config.primary_color}
              isDark={isDark}
              bgColor={hexToRgba(config.primary_color, 0.1)}
            />
          )}
          <div style={{ minWidth: 0, flex: 1 }}>
            <div style={{ fontSize: '14px', fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {testimonial.name}
            </div>
            {config.show_company && (
              <div style={{ fontSize: '12px', color: secondaryColor, display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{testimonial.company}</span>
                {testimonial.is_company_verified && (
                  <svg style={{ width: '14px', height: '14px', color: '#16a34a', flexShrink: 0 }} viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.403 12.652a3 3 0 010-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
            )}
          </div>
        </div>
        {config.show_rating && <StarRating rating={testimonial.rating} color={isDark ? 'dark' : 'light'} />}
        <p style={{ fontSize: '13px', lineHeight: 1.65, flex: 1 }}>
          &ldquo;{testimonial.text}&rdquo;
        </p>
        {config.show_date && (
          <div style={{ fontSize: '11px', color: secondaryColor }}>{testimonial.date}</div>
        )}
      </div>
    </div>
  )
}

function lighten(hex: string, amount: number): string {
  const clean = hex.replace('#', '')
  if (clean.length !== 6) return hex
  const r = Math.min(255, parseInt(clean.slice(0, 2), 16) + amount)
  const g = Math.min(255, parseInt(clean.slice(2, 4), 16) + amount)
  const b = Math.min(255, parseInt(clean.slice(4, 6), 16) + amount)
  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`
}

function hexToRgba(hex: string, alpha: number): string {
  const clean = hex.replace('#', '')
  if (clean.length !== 6) return hex
  const r = parseInt(clean.slice(0, 2), 16)
  const g = parseInt(clean.slice(2, 4), 16)
  const b = parseInt(clean.slice(4, 6), 16)
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
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
  const fontImport = FONT_IMPORTS[config.font_style] || ''
  const fontFamily = FONT_FAMILIES[config.font_style] || FONT_FAMILIES.modern

  // Always use all 4 testimonials for carousel (scrollable), 3 for others
  const testimonials = layout === 'carousel'
    ? FAKE_TESTIMONIALS
    : compact ? FAKE_TESTIMONIALS.slice(0, 2) : FAKE_TESTIMONIALS.slice(0, 3)

  const scrollRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollStart, setScrollStart] = useState(0)

  function onMouseDown(e: React.MouseEvent) {
    setIsDragging(true)
    setStartX(e.pageX)
    setScrollStart(scrollRef.current?.scrollLeft || 0)
  }
  function onMouseMove(e: React.MouseEvent) {
    if (!isDragging || !scrollRef.current) return
    e.preventDefault()
    scrollRef.current.scrollLeft = scrollStart - (e.pageX - startX)
  }
  function onMouseUp() {
    setIsDragging(false)
  }

  const containerPad = compact ? '12px' : '24px'

  return (
    <div style={{ width: '100%', overflow: 'hidden', fontFamily }}>
      {fontImport && <style>{fontImport}</style>}
      <div
        style={{
          backgroundColor: config.background_color,
          borderRadius: `${Math.min(config.border_radius, 16)}px`,
          padding: containerPad,
        }}
      >
        {/* Grid layout */}
        {layout === 'grid' && (
          <div style={{ display: 'grid', gridTemplateColumns: compact ? '1fr' : 'repeat(3, 1fr)', gap: '16px' }}>
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} testimonial={t} config={config} hasVideo={isVideo && i === 0} videoUrl={DEMO_VIDEO} />
            ))}
          </div>
        )}

        {/* Carousel layout - scrollable with drag */}
        {layout === 'carousel' && (
          <div style={{ position: 'relative' }}>
            <div
              ref={scrollRef}
              onMouseDown={onMouseDown}
              onMouseMove={onMouseMove}
              onMouseUp={onMouseUp}
              onMouseLeave={onMouseUp}
              style={{
                display: 'flex',
                gap: '16px',
                overflowX: 'auto',
                scrollSnapType: 'x mandatory',
                scrollBehavior: isDragging ? 'auto' : 'smooth',
                cursor: isDragging ? 'grabbing' : 'grab',
                scrollbarWidth: 'none',
                padding: '4px',
              }}
            >
              {testimonials.map((t, i) => (
                <div key={i} style={{ flex: `0 0 ${compact ? '85%' : 'calc(33.333% - 11px)'}`, scrollSnapAlign: 'start', minWidth: 0 }}>
                  <TestimonialCard testimonial={t} config={config} hasVideo={isVideo && i === 0} videoUrl={DEMO_VIDEO} />
                </div>
              ))}
            </div>
            {/* Hide scrollbar */}
            <style>{`div::-webkit-scrollbar { display: none; }`}</style>
          </div>
        )}

        {/* Wall / Masonry layout */}
        {layout === 'wall' && (
          <div style={{ columnCount: compact ? 1 : 3, columnGap: '16px' }}>
            {testimonials.map((t, i) => (
              <div key={i} style={{ breakInside: 'avoid', marginBottom: '16px', display: 'inline-block', width: '100%' }}>
                <TestimonialCard testimonial={t} config={config} hasVideo={isVideo && i === 0} videoUrl={DEMO_VIDEO} />
              </div>
            ))}
          </div>
        )}

        {/* Single layout */}
        {layout === 'single' && (
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <TestimonialCard testimonial={testimonials[0]} config={config} hasVideo={isVideo} videoUrl={DEMO_VIDEO} />
          </div>
        )}

        {/* Badge layout */}
        {layout === 'badge' && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                borderRadius: '9999px',
                border: `1px solid ${config.theme === 'dark' ? lighten(config.background_color, 20) : '#e5e7eb'}`,
                padding: '8px 16px',
                backgroundColor: config.theme === 'dark' ? lighten(config.background_color, 10) : '#ffffff',
                boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
              }}
            >
              <span style={{ fontSize: '20px', fontWeight: 700, color: config.primary_color }}>4.7</span>
              <StarRating rating={5} color={config.theme === 'dark' ? 'dark' : 'light'} />
              <span style={{ fontSize: '12px', color: config.theme === 'dark' ? '#9ca3af' : '#6b7280' }}>3 opiniones</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
