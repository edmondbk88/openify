import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/landing/navbar'
import { Footer } from '@/components/landing/footer'
import { createAdminClient } from '@/lib/supabase/admin'
import { getCertificationTier, getTierLabel, getTierColor } from '@/lib/certification'
import type { CertificationTier } from '@/lib/certification'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Empresas con Mejores Testimonios - Ranking Verificado | Opinafy',
  description:
    'Descubre las empresas mejor valoradas por sus clientes. Ranking de testimonios verificados con puntuaciones reales y certificaciones de confianza.',
  keywords: [
    'mejores empresas valoradas',
    'ranking testimonios verificados',
    'empresas mejor puntuadas',
    'testimonios de clientes ranking',
    'mejores negocios opiniones',
    'ranking prueba social',
  ],
  alternates: {
    canonical: 'https://opinafy.com/ranking',
    languages: {
      es: 'https://opinafy.com/ranking',
      en: 'https://opinafy.com/en/ranking',
      'x-default': 'https://opinafy.com/ranking',
    },
  },
  openGraph: {
    title: 'Empresas con Mejores Testimonios - Ranking Verificado',
    description:
      'Descubre las empresas mejor valoradas por sus clientes en Opinafy.',
    url: 'https://opinafy.com/ranking',
    type: 'website',
    siteName: 'Opinafy',
    locale: 'es_ES',
    images: [{ url: '/og.png', width: 1200, height: 630 }],
  },
}

interface RankedProject {
  project_name: string
  slug: string
  username: string
  brand_color: string
  logo_url: string | null
  certification_tier: string
  testimonial_count: number
  avg_rating: number
}

async function getRanking(): Promise<RankedProject[]> {
  try {
    const admin = createAdminClient()

    const { data: projects } = await admin
      .from('projects')
      .select('id, name, slug, user_id, brand_color, logo_url, certification_tier')
      .eq('show_on_minisite', true)
      .eq('is_active', true)

    if (!projects || projects.length === 0) return []

    const userIds = Array.from(new Set(projects.map((p) => p.user_id)))
    const { data: profiles } = await admin
      .from('profiles')
      .select('id, username, plan')
      .in('id', userIds)
      .neq('plan', 'free')

    if (!profiles || profiles.length === 0) return []

    const paidUserMap = new Map(profiles.map((p) => [p.id, p]))
    const paidProjects = projects.filter((p) => paidUserMap.has(p.user_id))
    if (paidProjects.length === 0) return []

    const projectIds = paidProjects.map((p) => p.id)
    const { data: testimonials } = await admin
      .from('testimonials')
      .select('project_id, rating')
      .eq('status', 'approved')
      .in('project_id', projectIds)

    if (!testimonials || testimonials.length === 0) return []

    const statsMap = new Map<string, { count: number; totalRating: number }>()
    for (const t of testimonials) {
      const existing = statsMap.get(t.project_id) || { count: 0, totalRating: 0 }
      existing.count++
      existing.totalRating += t.rating || 5
      statsMap.set(t.project_id, existing)
    }

    return paidProjects
      .map((p) => {
        const stats = statsMap.get(p.id)
        if (!stats || stats.count < 5) return null
        const profile = paidUserMap.get(p.user_id)
        return {
          project_name: p.name,
          slug: p.slug,
          username: profile?.username || '',
          brand_color: p.brand_color,
          logo_url: p.logo_url,
          certification_tier: p.certification_tier || 'none',
          testimonial_count: stats.count,
          avg_rating: Math.round((stats.totalRating / stats.count) * 10) / 10,
        }
      })
      .filter((p): p is RankedProject => p !== null)
      .sort((a, b) => {
        if (b.avg_rating !== a.avg_rating) return b.avg_rating - a.avg_rating
        return b.testimonial_count - a.testimonial_count
      })
      .slice(0, 50)
  } catch {
    return []
  }
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`h-4 w-4 ${star <= Math.round(rating) ? 'text-yellow-400' : 'text-gray-200'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="ml-1 text-sm font-medium text-gray-600">{rating}</span>
    </div>
  )
}

export default async function RankingPage() {
  const ranking = await getRanking()

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <span className="inline-block rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-medium text-indigo-700">
            Ranking Verificado
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Empresas con Mejores Testimonios en Opinafy
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Las empresas mejor valoradas por sus clientes, con testimonios verificados y certificaciones de confianza.
          </p>
        </div>

        {/* Ranking Table */}
        <div className="mt-12">
          {ranking.length > 0 ? (
            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">#</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">Empresa</th>
                    <th className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-wider text-gray-500">Valoracion</th>
                    <th className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-wider text-gray-500">Testimonios</th>
                    <th className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-wider text-gray-500">Certificacion</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {ranking.map((item, index) => {
                    const tier = (item.certification_tier as CertificationTier) || getCertificationTier(item.testimonial_count)
                    const tierLabel = getTierLabel(tier, 'es')
                    const tierColors = getTierColor(tier)
                    return (
                      <tr key={`${item.username}-${item.slug}`} className="transition-colors hover:bg-gray-50">
                        <td className="whitespace-nowrap px-4 py-4">
                          <span className={`inline-flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${index < 3 ? 'bg-indigo-100 text-indigo-700' : 'bg-gray-100 text-gray-600'}`}>
                            {index + 1}
                          </span>
                        </td>
                        <td className="px-4 py-4">
                          <Link
                            href={`/s/${item.username}`}
                            className="group flex items-center gap-3"
                          >
                            <span
                              className="inline-block h-8 w-8 rounded-lg"
                              style={{ backgroundColor: item.brand_color }}
                            />
                            <span className="font-medium text-gray-900 group-hover:text-indigo-600">
                              {item.project_name}
                            </span>
                          </Link>
                        </td>
                        <td className="px-4 py-4 text-center">
                          <StarRating rating={item.avg_rating} />
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-center">
                          <span className="inline-flex items-center gap-1 text-sm font-medium text-gray-700">
                            <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                            </svg>
                            {item.testimonial_count}
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-center">
                          {tier !== 'none' ? (
                            <span className={`inline-flex rounded-full ${tierColors.bg} ${tierColors.text} border ${tierColors.border} px-2.5 py-0.5 text-xs font-bold`}>
                              {tierLabel}
                            </span>
                          ) : (
                            <span className="text-xs text-gray-400">-</span>
                          )}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="rounded-xl border border-dashed border-gray-300 bg-gray-50 px-8 py-16 text-center">
              <svg className="mx-auto h-12 w-12 text-gray-300" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0 1 16.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.023 6.023 0 0 1-2.27.977m0 0a6.004 6.004 0 0 1-2.27-.977" />
              </svg>
              <h3 className="mt-4 text-lg font-semibold text-gray-700">Pronto habra empresas en el ranking</h3>
              <p className="mt-2 text-sm text-gray-500">
                Las empresas necesitan al menos 5 testimonios aprobados para aparecer aqui.
              </p>
              <Link
                href="/precios"
                className="mt-6 inline-flex rounded-lg bg-indigo-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
              >
                Empieza a recopilar testimonios
              </Link>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 p-8 text-center text-white sm:p-12">
          <h2 className="text-2xl font-bold sm:text-3xl">Quieres aparecer en el ranking?</h2>
          <p className="mx-auto mt-3 max-w-lg text-indigo-100">
            Empieza a recopilar testimonios verificados de tus clientes y posiciona tu negocio entre los mejor valorados.
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/precios"
              className="inline-flex rounded-lg bg-white px-6 py-3 text-sm font-semibold text-indigo-600 transition-colors hover:bg-indigo-50"
            >
              Ver planes
            </Link>
            <Link
              href="/certificacion"
              className="inline-flex rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Programa de certificacion
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
