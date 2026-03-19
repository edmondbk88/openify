import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { createAdminClient } from '@/lib/supabase/admin'
import { createClient } from '@/lib/supabase/server'
import { PLAN_LIMITS } from '@/lib/constants'
import { formatDate, getInitials } from '@/lib/utils'
import type { Plan, Profile, Project, Testimonial } from '@/types'

interface PageProps {
  params: Promise<{ username: string }>
}

async function getProfileByUsername(username: string) {
  const supabase = createAdminClient()
  const { data } = await supabase
    .from('profiles')
    .select('*')
    .eq('username', username)
    .single()
  return data as Profile | null
}

async function getProjectsAndTestimonials(userId: string) {
  const supabase = createAdminClient()

  const { data: projects } = await supabase
    .from('projects')
    .select('*')
    .eq('user_id', userId)
    .eq('is_active', true)
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
    title: `${profile.full_name || username} - Testimonios verificados | Opinafy`,
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

export default async function MiniSitePage({ params }: PageProps) {
  const { username } = await params
  const profile = await getProfileByUsername(username)

  if (!profile) {
    notFound()
  }

  const plan = profile.plan as Plan
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
              ? 'Activa tu plan Pro para tener tu pagina publica de testimonios'
              : `Esta pagina estara disponible cuando ${profile.full_name || username} active su plan Pro o Business`
            }
          </h1>
          <p className="mt-3 text-gray-500">
            Las paginas publicas de testimonios estan disponibles en los planes Pro y Business de Opinafy.
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
              Crea tu propia pagina de testimonios
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

  // Use first project's brand_color as accent, fallback to indigo
  const accentColor = projects[0]?.brand_color || '#6366f1'

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

  return (
    <div className="min-h-screen bg-white">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 text-center">
          {/* Avatar */}
          {profile.avatar_url ? (
            <Image
              src={profile.avatar_url}
              alt={profile.full_name || username}
              width={96}
              height={96}
              className="mx-auto h-24 w-24 rounded-full object-cover ring-4 ring-white shadow-lg"
            />
          ) : (
            <div
              className="mx-auto flex h-24 w-24 items-center justify-center rounded-full text-2xl font-bold text-white shadow-lg"
              style={{ backgroundColor: accentColor }}
            >
              {getInitials(profile.full_name || username)}
            </div>
          )}

          <h1 className="mt-5 text-3xl font-bold text-gray-900">
            {profile.full_name || username}
          </h1>

          {profile.bio && (
            <p className="mt-2 text-lg text-gray-600 max-w-xl mx-auto">
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
      {totalTestimonials > 0 && (
        <div className="border-b border-gray-100 bg-gray-50">
          <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-gray-900">{totalTestimonials}</p>
                <p className="text-sm text-gray-500">Testimonios</p>
              </div>
              <div>
                <div className="flex items-center justify-center gap-1.5">
                  <p className="text-2xl font-bold text-gray-900">{avgRating.toFixed(1)}</p>
                  <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <p className="text-sm text-gray-500">Valoracion media</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{projectCount}</p>
                <p className="text-sm text-gray-500">{projectCount === 1 ? 'Proyecto' : 'Proyectos'}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Testimonial wall */}
      <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        {testimonials.length === 0 ? (
          <div className="text-center py-16">
            <svg className="mx-auto h-12 w-12 text-gray-300" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
            </svg>
            <p className="mt-4 text-gray-500">Aun no hay testimonios para mostrar.</p>
          </div>
        ) : (
          <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="mb-6 break-inside-avoid rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
              >
                {/* Video */}
                {testimonial.video_url && (
                  <div className="-mx-5 -mt-5 mb-4 overflow-hidden rounded-t-xl">
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
                <p className="mt-3 text-sm leading-relaxed text-gray-700">
                  {testimonial.content}
                </p>

                {/* Author */}
                <div className="mt-4 flex items-center gap-3 border-t border-gray-100 pt-4">
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
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {testimonial.author_name}
                    </p>
                    {(testimonial.author_company || testimonial.author_role) && (
                      <p className="text-xs text-gray-500 truncate">
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
                  <span className="text-xs text-gray-400">
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
        )}
      </main>

      {/* Contact section */}
      {websiteUrl && (
        <section className="border-t border-gray-100 bg-gray-50">
          <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 text-center">
            <h2 className="text-xl font-semibold text-gray-900">Contacto</h2>
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
      <footer className="border-t border-gray-100">
        <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 text-center">
          <Link href="/registro" className="group inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-indigo-600">
            <Image src="/logo-opinafy.png?v=2" alt="Opinafy" width={80} height={24} className="h-5 w-auto opacity-50 group-hover:opacity-100 transition-opacity" />
          </Link>
          <p className="mt-2">
            <Link href="/registro" className="text-xs text-gray-400 hover:text-indigo-600 transition-colors">
              Crea tu propia pagina de testimonios gratis
            </Link>
          </p>
        </div>
      </footer>
    </div>
  )
}
