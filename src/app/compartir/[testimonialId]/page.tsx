import { createAdminClient } from '@/lib/supabase/admin'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

interface PageProps {
  params: Promise<{ testimonialId: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { testimonialId } = await params
  const supabase = createAdminClient()

  const { data: testimonial } = await supabase
    .from('testimonials')
    .select('author_name, content, author_company, rating')
    .eq('id', testimonialId)
    .eq('status', 'approved')
    .single()

  if (!testimonial) {
    return { title: 'Testimonio no encontrado - Opinafy' }
  }

  const stars = '★'.repeat(Math.min(testimonial.rating, 5))
  const description = `${stars} "${testimonial.content.substring(0, 150)}${testimonial.content.length > 150 ? '...' : ''}" — ${testimonial.author_name}${testimonial.author_company ? `, ${testimonial.author_company}` : ''}`

  return {
    title: `Testimonio de ${testimonial.author_name} - Opinafy`,
    description,
    openGraph: {
      title: `${stars} Testimonio de ${testimonial.author_name}`,
      description,
      type: 'website',
      siteName: 'Opinafy',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${stars} Testimonio de ${testimonial.author_name}`,
      description,
    },
  }
}

export default async function CompartirTestimonioPage({ params }: PageProps) {
  const { testimonialId } = await params
  const supabase = createAdminClient()

  const { data: testimonial } = await supabase
    .from('testimonials')
    .select('id, author_name, author_company, author_role, content, rating, is_company_verified, created_at, project_id')
    .eq('id', testimonialId)
    .eq('status', 'approved')
    .single()

  if (!testimonial) {
    notFound()
  }

  // Fetch project brand color
  const { data: project } = await supabase
    .from('projects')
    .select('brand_color, name')
    .eq('id', testimonial.project_id)
    .single()

  const brandColor = project?.brand_color || '#6366f1'
  const projectName = project?.name || ''
  const stars = '★'.repeat(Math.min(testimonial.rating, 5))
  const emptyStars = '☆'.repeat(Math.max(5 - testimonial.rating, 0))
  const initials = testimonial.author_name.split(' ').map((n: string) => n[0]).join('').toUpperCase().slice(0, 2)

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      {/* Vertical 9:16 card */}
      <div
        className="relative flex w-full max-w-[360px] flex-col overflow-hidden rounded-3xl shadow-2xl"
        style={{
          aspectRatio: '9 / 16',
          background: `linear-gradient(160deg, ${brandColor}, ${brandColor}dd, ${brandColor}88)`,
        }}
      >
        {/* Decorative circles */}
        <div
          className="absolute -right-12 -top-12 h-48 w-48 rounded-full opacity-20"
          style={{ background: '#ffffff' }}
        />
        <div
          className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full opacity-15"
          style={{ background: '#ffffff' }}
        />

        {/* Content */}
        <div className="relative flex flex-1 flex-col items-center justify-center px-8 py-12 text-center">
          {/* Stars */}
          <div className="mb-6">
            <span className="text-3xl tracking-wider text-yellow-300">{stars}</span>
            <span className="text-3xl tracking-wider text-white/30">{emptyStars}</span>
          </div>

          {/* Quote */}
          <div className="mb-8 flex-1 flex items-center">
            <p className="text-lg font-medium leading-relaxed text-white" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.2)' }}>
              &ldquo;{testimonial.content.length > 300
                ? testimonial.content.substring(0, 300) + '...'
                : testimonial.content}&rdquo;
            </p>
          </div>

          {/* Author */}
          <div className="flex flex-col items-center gap-3">
            <div
              className="flex h-14 w-14 items-center justify-center rounded-full text-xl font-bold"
              style={{ background: 'rgba(255,255,255,0.25)', color: '#ffffff' }}
            >
              {initials}
            </div>
            <div>
              <p className="text-base font-semibold text-white">
                {testimonial.author_name}
                {testimonial.is_company_verified && (
                  <span className="ml-1.5 inline-flex items-center justify-center rounded-full bg-white/25 px-1.5 py-0.5 text-xs font-bold text-white">
                    ✓
                  </span>
                )}
              </p>
              {(testimonial.author_role || testimonial.author_company) && (
                <p className="mt-0.5 text-sm text-white/80">
                  {testimonial.author_role}
                  {testimonial.author_role && testimonial.author_company && ' en '}
                  {testimonial.author_company}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Branding footer */}
        <div className="relative border-t border-white/15 bg-black/10 px-6 py-3 text-center">
          <p className="text-xs text-white/60">
            {projectName ? `${projectName} · ` : ''}Powered by{' '}
            <a
              href="https://opinafy.com?ref=share"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white/80 hover:text-white"
            >
              Opinafy
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
