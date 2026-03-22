'use client'

import { useEffect, useState } from 'react'
import { createBrowserClient } from '@supabase/ssr'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useLocale } from '@/components/dashboard/locale-context'
import { t as tr } from '@/lib/i18n'

interface TestimonialAnalytics {
  id: string
  author_name: string
  content: string
  rating: number
  click_count: number
  impression_count: number
  ctr: number
}

export default function AnalyticsPage() {
  const params = useParams()
  const slug = params.slug as string
  const locale = useLocale()
  const [testimonials, setTestimonials] = useState<TestimonialAnalytics[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchData() {
      const supabase = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
      )

      // Get project by slug
      const { data: project, error: projectError } = await supabase
        .from('projects')
        .select('id')
        .eq('slug', slug)
        .single()

      if (projectError || !project) {
        setError(tr('analytics.projectNotFound', locale))
        setLoading(false)
        return
      }

      // Fetch testimonials with analytics data
      const { data: testimonialsData, error: testimonialsError } = await supabase
        .from('testimonials')
        .select('id, author_name, content, rating, click_count, impression_count')
        .eq('project_id', project.id)
        .eq('status', 'approved')
        .order('created_at', { ascending: false })

      if (testimonialsError) {
        setError(testimonialsError.message)
        setLoading(false)
        return
      }

      const withCtr = (testimonialsData || []).map((t) => ({
        ...t,
        click_count: t.click_count || 0,
        impression_count: t.impression_count || 0,
        ctr: t.impression_count > 0 ? (t.click_count / t.impression_count) * 100 : 0,
      }))

      // Sort by CTR descending
      withCtr.sort((a, b) => b.ctr - a.ctr)
      setTestimonials(withCtr)
      setLoading(false)
    }

    fetchData()
  }, [slug])

  const best = testimonials.length > 0 ? testimonials[0] : null
  const worst = testimonials.length > 1 ? testimonials[testimonials.length - 1] : null
  const maxImpressions = Math.max(...testimonials.map((t) => t.impression_count), 1)

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-gray-300 border-t-indigo-600" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="py-12 text-center">
        <p className="text-red-600">{error}</p>
      </div>
    )
  }

  return (
    <div>
      {/* Breadcrumb */}
      <div className="mb-6">
        <Link
          href={`/proyectos/${slug}`}
          className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
          {tr('projects.backToProject', locale)}
        </Link>
      </div>

      <h1 className="text-2xl font-bold text-gray-900">{tr('analytics.title', locale)}</h1>
      <p className="mt-1 text-sm text-gray-500">
        {tr('analytics.subtitle', locale)}
      </p>

      {/* Highlights */}
      {testimonials.length > 0 && (
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {best && (
            <div className="rounded-lg border border-green-200 bg-green-50 p-4">
              <p className="text-xs font-semibold uppercase text-green-700">{tr('analytics.bestPerformance', locale)}</p>
              <p className="mt-1 font-medium text-gray-900">{best.author_name}</p>
              <p className="mt-0.5 text-sm text-gray-600">
                CTR: {best.ctr.toFixed(1)}% ({best.click_count} clics / {best.impression_count} impresiones)
              </p>
            </div>
          )}
          {worst && (
            <div className="rounded-lg border border-red-200 bg-red-50 p-4">
              <p className="text-xs font-semibold uppercase text-red-700">{tr('analytics.worstPerformance', locale)}</p>
              <p className="mt-1 font-medium text-gray-900">{worst.author_name}</p>
              <p className="mt-0.5 text-sm text-gray-600">
                CTR: {worst.ctr.toFixed(1)}% ({worst.click_count} clics / {worst.impression_count} impresiones)
              </p>
            </div>
          )}
        </div>
      )}

      {/* Bar Chart */}
      {testimonials.length > 0 && (
        <div className="mt-8">
          <h2 className="mb-4 text-lg font-semibold text-gray-900">{tr('analytics.impressionsVsClicks', locale)}</h2>
          <div className="space-y-3">
            {testimonials.map((t) => (
              <div key={t.id} className="rounded-lg border border-gray-200 bg-white p-3">
                <p className="mb-2 text-sm font-medium text-gray-800 truncate">
                  {t.author_name} - &quot;{t.content.substring(0, 60)}{t.content.length > 60 ? '...' : ''}&quot;
                </p>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-24 text-xs text-gray-500">{tr('analytics.impressions', locale)}</span>
                    <div className="flex-1 h-5 rounded-full bg-gray-100 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-indigo-400 transition-all duration-500"
                        style={{ width: `${(t.impression_count / maxImpressions) * 100}%`, minWidth: t.impression_count > 0 ? '4px' : '0' }}
                      />
                    </div>
                    <span className="w-12 text-right text-xs font-medium text-gray-700">{t.impression_count}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-24 text-xs text-gray-500">{tr('analytics.clicks', locale)}</span>
                    <div className="flex-1 h-5 rounded-full bg-gray-100 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-green-400 transition-all duration-500"
                        style={{ width: `${(t.click_count / maxImpressions) * 100}%`, minWidth: t.click_count > 0 ? '4px' : '0' }}
                      />
                    </div>
                    <span className="w-12 text-right text-xs font-medium text-gray-700">{t.click_count}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Table */}
      <div className="mt-8">
        <h2 className="mb-4 text-lg font-semibold text-gray-900">{tr('analytics.performanceTable', locale)}</h2>
        {testimonials.length === 0 ? (
          <p className="text-sm text-gray-500">{tr('analytics.noData', locale)}</p>
        ) : (
          <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase text-gray-500">{tr('import.author', locale)}</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase text-gray-500">{tr('analytics.stars', locale)}</th>
                  <th className="px-4 py-3 text-right text-xs font-semibold uppercase text-gray-500">{tr('analytics.impressions', locale)}</th>
                  <th className="px-4 py-3 text-right text-xs font-semibold uppercase text-gray-500">{tr('analytics.clicks', locale)}</th>
                  <th className="px-4 py-3 text-right text-xs font-semibold uppercase text-gray-500">CTR</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                {testimonials.map((t) => (
                  <tr key={t.id}>
                    <td className="whitespace-nowrap px-4 py-3 text-sm font-medium text-gray-900">{t.author_name}</td>
                    <td className="whitespace-nowrap px-4 py-3 text-sm text-yellow-500">
                      {'★'.repeat(Math.min(t.rating, 5))}{'☆'.repeat(Math.max(5 - t.rating, 0))}
                    </td>
                    <td className="whitespace-nowrap px-4 py-3 text-right text-sm text-gray-700">{t.impression_count}</td>
                    <td className="whitespace-nowrap px-4 py-3 text-right text-sm text-gray-700">{t.click_count}</td>
                    <td className="whitespace-nowrap px-4 py-3 text-right text-sm font-semibold text-gray-900">
                      {t.ctr.toFixed(1)}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
