import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { createAdminClient } from '@/lib/supabase/admin'
import { createClient } from '@/lib/supabase/server'
import { PLAN_LIMITS, getEffectivePlan } from '@/lib/constants'
import { formatDate, getInitials } from '@/lib/utils'
import type { Profile, Project, Testimonial } from '@/types'

// Force dynamic rendering - user config changes must be reflected immediately
export const dynamic = 'force-dynamic'

interface PageProps {
  params: Promise<{ username: string }>
}

interface MiniSiteConfig {
  template_id?: string
  accent_color?: string
  background_color?: string
  text_color?: string
  card_style?: 'rounded' | 'sharp' | 'pill' | 'bordered' | 'shadow' | 'glass'
  layout?: 'masonry' | 'grid' | 'list' | 'cards' | 'timeline'
  header_style?: 'centered' | 'left' | 'hero' | 'minimal' | 'banner'
  font_style?: 'modern' | 'serif' | 'rounded' | 'minimal' | 'bold'
  show_stats?: boolean
  show_contact?: boolean
  dark_mode?: boolean
}

async function getProfileByUsername(username: string) {
  const supabase = createAdminClient()
  const { data } = await supabase
    .from('profiles')
    .select('id, email, full_name, avatar_url, plan, username, bio, website_url, minisite_config, minisite_testimonial_limit, is_admin, stripe_customer_id, stripe_subscription_id, created_at, updated_at')
    .eq('username', username)
    .single()
  return data as (Profile & { minisite_testimonial_limit?: number }) | null
}

async function getProjectsAndTestimonials(userId: string) {
  const supabase = createAdminClient()

  const { data: projects } = await supabase
    .from('projects')
    .select('*')
    .eq('user_id', userId)
    .eq('is_active', true)
    .eq('show_on_minisite', true)
    .order('created_at', { ascending: false })

  if (!projects || projects.length === 0) {
    return { projects: [] as Project[], testimonials: [] as (Testimonial & { project_name: string })[] }
  }

  const projectIds = projects.map((p: Project) => p.id)
  const { data: testimonials } = await supabase
    .from('testimonials')
    .select('*')
    .in('project_id', projectIds)
    .eq('status', 'approved')
    .order('created_at', { ascending: false })

  const projectMap = new Map(projects.map((p: Project) => [p.id, p.name]))
  const testimonialsWithProject = (testimonials || []).map((t: Testimonial) => ({
    ...t,
    project_name: projectMap.get(t.project_id) || '',
  }))

  return {
    projects: projects as Project[],
    testimonials: testimonialsWithProject,
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { username } = await params
  const profile = await getProfileByUsername(username)

  if (!profile) {
    return { title: 'No encontrado' }
  }

  const { testimonials } = await getProjectsAndTestimonials(profile.id)
  const avgRating = testimonials.length > 0
    ? (testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length).toFixed(1)
    : null

  const description = avgRating
    ? `${profile.full_name || username} tiene ${testimonials.length} testimonios verificados con una valoracion media de ${avgRating}/5 en Opinafy.`
    : `Testimonios verificados de ${profile.full_name || username} en Opinafy.`

  return {
    title: { absolute: `${profile.full_name || username} - Testimonios verificados | Opinafy` },
    description,
    robots: { index: true, follow: true },
    alternates: {
      canonical: `https://opinafy.com/s/${username}`,
    },
    openGraph: {
      title: `${profile.full_name || username} - Testimonios verificados`,
      description,
      url: `https://opinafy.com/s/${username}`,
      siteName: 'Opinafy',
      type: 'profile',
      locale: 'es_ES',
      images: [{ url: '/og.png', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${profile.full_name || username} - Testimonios verificados`,
      description,
      images: ['/og.png'],
    },
  }
}

function StarRating({ rating, size = 'sm' }: { rating: number; size?: 'sm' | 'md' }) {
  const sizeClass = size === 'md' ? 'h-5 w-5' : 'h-4 w-4'
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          className={`${sizeClass} ${i < rating ? 'text-yellow-400' : 'text-gray-200'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function getCardBorderRadius(cardStyle?: string): string {
  switch (cardStyle) {
    case 'sharp': return '0px'
    case 'pill': return '24px'
    case 'glass': return '16px'
    case 'rounded': return '12px'
    case 'bordered': return '8px'
    case 'shadow': return '12px'
    default: return '12px'
  }
}

function getCardExtraStyles(cardStyle?: string, accentColor?: string): React.CSSProperties {
  switch (cardStyle) {
    case 'bordered':
      return { border: `2px solid ${accentColor || '#6366f1'}40` }
    case 'shadow':
      return { boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }
    case 'glass':
      return {
        background: 'rgba(255,255,255,0.6)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: '1px solid rgba(255,255,255,0.3)',
      }
    default:
      return {}
  }
}

function getFontFamily(fontStyle?: string): string {
  switch (fontStyle) {
    case 'serif': return '"Georgia", "Times New Roman", serif'
    case 'rounded': return '"Nunito", "Quicksand", system-ui, sans-serif'
    case 'minimal': return '"Inter", system-ui, -apple-system, sans-serif'
    case 'bold': return '"Inter", system-ui, -apple-system, sans-serif'
    case 'modern':
    default: return 'system-ui, -apple-system, sans-serif'
  }
}

function getLayoutClasses(layout?: string, count?: number): string {
  const n = count ?? 99
  switch (layout) {
    case 'grid':
      if (n <= 2) return 'grid grid-cols-1 gap-6 max-w-xl mx-auto'
      if (n <= 5) return 'grid grid-cols-1 gap-6 sm:grid-cols-2'
      return 'grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'
    case 'list': return 'flex flex-col gap-5 max-w-2xl mx-auto'
    case 'cards':
      if (n <= 2) return 'grid grid-cols-1 gap-8 max-w-xl mx-auto'
      return 'grid grid-cols-1 gap-8 sm:grid-cols-2'
    case 'timeline': return 'flex flex-col gap-6 max-w-2xl mx-auto'
    case 'masonry':
    default:
      if (n <= 2) return 'columns-1 gap-6 max-w-xl mx-auto'
      if (n <= 5) return 'columns-1 gap-6 sm:columns-2'
      return 'columns-1 gap-6 sm:columns-2 lg:columns-3'
  }
}

function getHeaderAlignment(headerStyle?: string): string {
  switch (headerStyle) {
    case 'left': return 'text-left'
    case 'minimal': return 'text-center'
    case 'hero': return 'text-center'
    case 'banner': return 'text-center'
    case 'centered':
    default: return 'text-center'
  }
}

export default async function MiniSitePage({ params }: PageProps) {
  const { username } = await params
  const profile = await getProfileByUsername(username)

  if (!profile) {
    notFound()
  }

  const plan = getEffectivePlan(profile)
  const limits = PLAN_LIMITS[plan]

  // Check if user is on free plan - show upgrade page
  if (!limits.miniSite) {
    // Check if the viewer is the profile owner (logged in)
    const serverSupabase = await createClient()
    const { data: { user: currentUser } } = await serverSupabase.auth.getUser()
    const isOwner = currentUser?.id === profile.id

    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100">
            <svg className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">
            {isOwner
              ? 'Activa tu plan Mini Sitio, Pro o Business para tener tu página pública de testimonios'
              : `Esta página estara disponible cuando ${profile.full_name || username} active su plan Mini Sitio, Pro o Business`
            }
          </h1>
          <p className="mt-3 text-gray-500">
            Las páginas publicas de testimonios estan disponibles en los planes Mini Sitio, Pro y Business de Opinafy.
          </p>
          {isOwner ? (
            <Link
              href="/facturacion"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
            >
              Mejorar mi plan
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          ) : (
            <Link
              href="/registro"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
            >
              Crea tu propia página de testimonios
            </Link>
          )}
        </div>
      </div>
    )
  }

  const { projects, testimonials } = await getProjectsAndTestimonials(profile.id)

  const totalTestimonials = testimonials.length
  const avgRating = totalTestimonials > 0
    ? testimonials.reduce((sum, t) => sum + t.rating, 0) / totalTestimonials
    : 0
  const projectCount = projects.length

  // Use the user's configured testimonial limit (default 30)
  const testimonialLimit = (profile as { minisite_testimonial_limit?: number }).minisite_testimonial_limit || 30
  const displayedTestimonials = testimonials.slice(0, testimonialLimit)
  const hasMoreTestimonials = totalTestimonials > testimonialLimit

  // Parse minisite config
  // Handle both string and object types (Supabase may return JSONB as string in some cases)
  let rawConfig = profile.minisite_config
  if (typeof rawConfig === 'string') {
    try { rawConfig = JSON.parse(rawConfig) } catch { rawConfig = {} }
  }
  const msConfig = (rawConfig || {}) as MiniSiteConfig

  // Use config colors or fallback to defaults
  const accentColor = msConfig.accent_color || projects[0]?.brand_color || '#6366f1'
  const bgColor = msConfig.background_color || '#ffffff'
  const textColor = msConfig.text_color || '#111827'
  const isDark = msConfig.dark_mode || false
  const cardStyle = msConfig.card_style
  const layout = msConfig.layout
  const headerStyle = msConfig.header_style
  const fontStyle = msConfig.font_style
  const showStats = msConfig.show_stats !== false
  const showContact = msConfig.show_contact !== false

  const fontFamily = getFontFamily(fontStyle)
  const headerAlign = getHeaderAlignment(headerStyle)
  const layoutClasses = getLayoutClasses(layout, Math.min(totalTestimonials, testimonialLimit))
  const cardRadius = getCardBorderRadius(cardStyle)

  // Derived colors for dark mode cards
  const cardBg = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.02)'
  const cardBorder = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'
  const subtextColor = isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.45)'
  const dividerColor = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)'

  // Find a website URL from projects or profile
  const websiteUrl = profile.website_url || projects.find(p => p.website_url)?.website_url || null

  // JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.full_name || username,
    url: `https://opinafy.com/s/${username}`,
    ...(profile.bio && { description: profile.bio }),
    ...(profile.avatar_url && { image: profile.avatar_url }),
    ...(websiteUrl && { sameAs: [websiteUrl] }),
    ...(totalTestimonials > 0 && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: avgRating.toFixed(1),
        reviewCount: totalTestimonials,
        bestRating: 5,
        worstRating: 1,
      },
    }),
  }

  // Header padding based on style
  const headerPadding = headerStyle === 'hero' ? 'py-16' : headerStyle === 'minimal' ? 'py-8' : 'py-12'
  const headerBorderStyle = headerStyle === 'banner'
    ? { borderBottom: `3px solid ${accentColor}` }
    : { borderBottom: `1px solid ${dividerColor}` }

  return (
    <div className="min-h-screen" style={{ backgroundColor: bgColor, color: textColor, fontFamily }}>
      {/* JSON-LD: Person + AggregateRating */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* JSON-LD: BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://opinafy.com' },
            { '@type': 'ListItem', position: 2, name: 'Perfiles', item: 'https://opinafy.com/s' },
            { '@type': 'ListItem', position: 3, name: profile.full_name || username, item: `https://opinafy.com/s/${username}` },
          ],
        }) }}
      />

      {/* JSON-LD: Individual Review schemas (limited to displayed testimonials) */}
      {displayedTestimonials.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(
            displayedTestimonials.map((t) => ({
              '@context': 'https://schema.org',
              '@type': 'Review',
              author: { '@type': 'Person', name: t.author_name },
              reviewRating: { '@type': 'Rating', ratingValue: t.rating, bestRating: 5 },
              reviewBody: t.content,
              datePublished: t.created_at.split('T')[0],
              itemReviewed: { '@type': 'Person', name: profile.full_name || username },
            }))
          ) }}
        />
      )}

      {/* Header */}
      <header style={headerBorderStyle}>
        <div className={`mx-auto max-w-4xl px-4 ${headerPadding} sm:px-6 ${headerAlign}`}>
          {/* Avatar */}
          {profile.avatar_url ? (
            <Image
              src={profile.avatar_url}
              alt={profile.full_name || username}
              width={96}
              height={96}
              className={`${headerStyle === 'left' ? '' : 'mx-auto'} h-24 w-24 rounded-full object-cover shadow-lg`}
              style={{ boxShadow: `0 0 0 4px ${bgColor}, 0 0 0 6px ${accentColor}40` }}
            />
          ) : (
            <div
              className={`${headerStyle === 'left' ? '' : 'mx-auto'} flex h-24 w-24 items-center justify-center rounded-full text-2xl font-bold text-white shadow-lg`}
              style={{ backgroundColor: accentColor }}
            >
              {getInitials(profile.full_name || username)}
            </div>
          )}

          <h1
            className="mt-5 text-3xl text-gray-900"
            style={{
              color: textColor,
              fontWeight: fontStyle === 'bold' ? 800 : 700,
              fontFamily,
            }}
          >
            {profile.full_name || username}
          </h1>

          {profile.bio && (
            <p
              className="mt-2 text-lg max-w-xl"
              style={{
                color: subtextColor,
                ...(headerStyle !== 'left' ? { marginLeft: 'auto', marginRight: 'auto' } : {}),
              }}
            >
              {profile.bio}
            </p>
          )}

          {websiteUrl && (
            <a
              href={websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:opacity-80"
              style={{ color: accentColor }}
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
              </svg>
              {websiteUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')}
            </a>
          )}
        </div>
      </header>

      {/* Stats bar */}
      {showStats && totalTestimonials > 0 && (
        <div style={{ borderBottom: `1px solid ${dividerColor}`, backgroundColor: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)' }}>
          <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold" style={{ color: textColor }}>{totalTestimonials}</p>
                <p className="text-sm" style={{ color: subtextColor }}>Testimonios</p>
              </div>
              <div>
                <div className="flex items-center justify-center gap-1.5">
                  <p className="text-2xl font-bold" style={{ color: textColor }}>{avgRating.toFixed(1)}</p>
                  <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <p className="text-sm" style={{ color: subtextColor }}>Valoracion media</p>
              </div>
              <div>
                <p className="text-2xl font-bold" style={{ color: textColor }}>{projectCount}</p>
                <p className="text-sm" style={{ color: subtextColor }}>{projectCount === 1 ? 'Proyecto' : 'Proyectos'}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Testimonial wall */}
      <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        {testimonials.length === 0 ? (
          <div className="text-center py-16">
            <svg className="mx-auto h-12 w-12" style={{ color: subtextColor }} fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
            </svg>
            <p className="mt-4" style={{ color: subtextColor }}>Aun no hay testimonios para mostrar.</p>
          </div>
        ) : (
          <>
            {/* Timeline left border for timeline layout */}
            {layout === 'timeline' && (
              <style dangerouslySetInnerHTML={{ __html: `
                .timeline-item { position: relative; padding-left: 28px; }
                .timeline-item::before { content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 2px; background: ${accentColor}40; }
                .timeline-item::after { content: ''; position: absolute; left: -4px; top: 20px; width: 10px; height: 10px; border-radius: 50%; background: ${accentColor}; }
              `}} />
            )}
            <div className={layout === 'masonry' ? layoutClasses : layoutClasses}>
              {displayedTestimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className={`${layout === 'masonry' ? 'mb-6 break-inside-avoid' : ''} ${layout === 'timeline' ? 'timeline-item' : ''} p-5 transition-shadow hover:shadow-md`}
                  style={{
                    backgroundColor: cardStyle === 'glass' ? undefined : cardBg,
                    border: `1px solid ${cardBorder}`,
                    borderRadius: cardRadius,
                    ...getCardExtraStyles(cardStyle, accentColor),
                  }}
                >
                  {/* Video */}
                  {testimonial.video_url && (
                    <div className="-mx-5 -mt-5 mb-4 overflow-hidden" style={{ borderRadius: `${cardRadius} ${cardRadius} 0 0` }}>
                      <video
                        src={testimonial.video_url}
                        controls
                        preload="metadata"
                        playsInline
                        className="w-full aspect-video object-cover"
                      />
                    </div>
                  )}

                  {/* Rating */}
                  <StarRating rating={testimonial.rating} />

                  {/* Content */}
                  <p className="mt-3 text-sm leading-relaxed" style={{ color: textColor }}>
                    {testimonial.content}
                  </p>

                  {/* Author */}
                  <div className="mt-4 flex items-center gap-3 pt-4" style={{ borderTop: `1px solid ${dividerColor}` }}>
                    {testimonial.author_avatar_url ? (
                      <Image
                        src={testimonial.author_avatar_url}
                        alt={testimonial.author_name}
                        width={36}
                        height={36}
                        className="h-9 w-9 rounded-full object-cover"
                      />
                    ) : (
                      <div
                        className="flex h-9 w-9 items-center justify-center rounded-full text-xs font-medium text-white"
                        style={{ backgroundColor: accentColor }}
                      >
                        {getInitials(testimonial.author_name)}
                      </div>
                    )}
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium truncate" style={{ color: textColor }}>
                        {testimonial.author_name}
                      </p>
                      {(testimonial.author_company || testimonial.author_role) && (
                        <p className="text-xs truncate" style={{ color: subtextColor }}>
                          {testimonial.author_role}
                          {testimonial.author_role && testimonial.author_company && ' en '}
                          {testimonial.author_company}
                          {testimonial.is_company_verified && (
                            <span className="ml-1 inline-flex items-center gap-0.5 text-green-600">
                              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                              </svg>
                            </span>
                          )}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Footer: date + project */}
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-xs" style={{ color: subtextColor }}>
                      {formatDate(testimonial.created_at)}
                    </span>
                    <span
                      className="inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium"
                      style={{ backgroundColor: `${accentColor}15`, color: accentColor }}
                    >
                      {testimonial.project_name}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Show notice when there are more testimonials than displayed */}
            {hasMoreTestimonials && (
              <div className="mt-10 text-center">
                <p className="text-sm" style={{ color: subtextColor }}>
                  Mostrando {testimonialLimit} de {totalTestimonials} testimonios
                </p>
                <Link
                  href={`/s/${username}/todos`}
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:opacity-80"
                  style={{ color: accentColor }}
                >
                  Ver todos los testimonios
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            )}
          </>
        )}
      </main>

      {/* Contact section */}
      {showContact && websiteUrl && (
        <section style={{ borderTop: `1px solid ${dividerColor}`, backgroundColor: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)' }}>
          <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 text-center">
            <h2 className="text-xl font-semibold" style={{ color: textColor }}>Contacto</h2>
            <a
              href={websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-medium text-white transition-colors hover:opacity-90"
              style={{ backgroundColor: accentColor }}
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>
              Visitar sitio web
            </a>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer style={{ borderTop: `1px solid ${dividerColor}` }}>
        <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 text-center">
          <Link href="/registro" className="group inline-flex items-center gap-2 text-sm transition-colors" style={{ color: subtextColor }}>
            <Image src="/logo-opinafy.png?v=2" alt="Opinafy" width={80} height={24} className="h-5 w-auto opacity-50 group-hover:opacity-100 transition-opacity" />
          </Link>
          <p className="mt-2">
            <Link href="/registro" className="text-xs transition-colors hover:text-indigo-600" style={{ color: subtextColor }}>
              Crea tu propia página de testimonios gratis
            </Link>
          </p>
        </div>
      </footer>
    </div>
  )
}
