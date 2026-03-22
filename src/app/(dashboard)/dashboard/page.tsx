import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import StatsCard from '@/components/dashboard/stats-card'
import TestimonialCard from '@/components/dashboard/testimonial-card'
import { PLAN_LIMITS } from '@/lib/constants'
import { getUserLocale } from '@/lib/get-locale'
import { t } from '@/lib/i18n'
import type { Plan, Testimonial } from '@/types'

export const metadata = {
  title: 'Dashboard - Opinafy',
}

export default async function DashboardPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  const locale = await getUserLocale()

  // Fetch user profile and projects
  const [{ data: profile }, { data: projects }] = await Promise.all([
    supabase.from('profiles').select('plan').eq('id', user.id).single(),
    supabase.from('projects').select('id, is_active').eq('user_id', user.id),
  ])

  const userPlan = (profile?.plan as Plan) || 'free'
  const planLimits = PLAN_LIMITS[userPlan]
  const projectIds = projects?.map((p) => p.id) ?? []
  const totalProjectCount = projects?.length ?? 0
  const inactiveProjectCount = projects?.filter((p) => !p.is_active).length ?? 0
  const hasDowngradeWarning =
    planLimits.projects !== Infinity && totalProjectCount > planLimits.projects

  // Fetch stats in parallel
  const [
    { count: totalProjects },
    totalTestimonialsResult,
    pendingTestimonialsResult,
    impressionsResult,
    recentTestimonialsResult,
  ] = await Promise.all([
    // Total projects
    supabase
      .from('projects')
      .select('*', { count: 'exact', head: true })
      .eq('user_id', user.id),
    // Total testimonials
    projectIds.length > 0
      ? supabase
          .from('testimonials')
          .select('*', { count: 'exact', head: true })
          .in('project_id', projectIds)
      : Promise.resolve({ count: 0 }),
    // Pending testimonials count
    projectIds.length > 0
      ? supabase
          .from('testimonials')
          .select('*', { count: 'exact', head: true })
          .in('project_id', projectIds)
          .eq('status', 'pending')
      : Promise.resolve({ count: 0 }),
    // Widget impressions this month
    projectIds.length > 0
      ? supabase
          .from('widget_impressions')
          .select('count')
          .in('project_id', projectIds)
          .gte(
            'impression_date',
            new Date(new Date().getFullYear(), new Date().getMonth(), 1)
              .toISOString()
              .split('T')[0]
          )
      : Promise.resolve({ data: [] }),
    // Recent pending testimonials (last 5)
    projectIds.length > 0
      ? supabase
          .from('testimonials')
          .select('*')
          .in('project_id', projectIds)
          .eq('status', 'pending')
          .order('created_at', { ascending: false })
          .limit(5)
      : Promise.resolve({ data: [] }),
  ])

  const totalTestimonials = totalTestimonialsResult.count ?? 0
  const pendingTestimonials = pendingTestimonialsResult.count ?? 0
  const totalImpressions =
    (impressionsResult.data as { count: number }[] | null)?.reduce(
      (sum, row) => sum + row.count,
      0
    ) ?? 0
  const recentTestimonials =
    (recentTestimonialsResult.data as Testimonial[] | null) ?? []

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">{t('dashboard.title', locale)}</h1>
        <p className="mt-1 text-sm text-gray-500">
          {t('dashboard.subtitle', locale)}
        </p>
      </div>

      {/* Downgrade Warning Banner */}
      {hasDowngradeWarning && (
        <div className="mb-6 rounded-lg border border-amber-300 bg-amber-50 p-4">
          <div className="flex">
            <svg
              className="h-5 w-5 flex-shrink-0 text-amber-400"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
              />
            </svg>
            <div className="ml-3">
              <p className="text-sm text-amber-800">
                {t('dashboard.downgradeWarning', locale)
                  .replace('{limit}', String(planLimits.projects))
                  .replace('{total}', String(totalProjectCount))
                  .replace('{inactive}', String(inactiveProjectCount))}{' '}
                <Link
                  href="/precios"
                  className="font-medium text-amber-800 underline hover:text-amber-900"
                >
                  {t('dashboard.upgradeCta', locale)}
                </Link>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          icon={
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
              />
            </svg>
          }
          label={t('dashboard.totalProjectsLabel', locale)}
          value={totalProjects ?? 0}
        />
        <StatsCard
          icon={
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.399-.498c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
              />
            </svg>
          }
          label={t('dashboard.totalTestimonialsLabel', locale)}
          value={totalTestimonials}
        />
        <StatsCard
          icon={
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          }
          label={t('dashboard.pendingTestimonialsLabel', locale)}
          value={pendingTestimonials}
        />
        <StatsCard
          icon={
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          }
          label={t('dashboard.impressionsThisMonth', locale)}
          value={totalImpressions.toLocaleString(locale === 'en' ? 'en-US' : 'es-ES')}
        />
      </div>

      {/* Recent Pending Testimonials */}
      <div className="mt-10">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">
            {t('dashboard.pendingReview', locale)}
          </h2>
          {recentTestimonials.length > 0 && (
            <Link
              href="/proyectos"
              className="text-sm font-medium text-indigo-600 hover:text-indigo-700"
            >
              {t('dashboard.viewAll', locale)}
            </Link>
          )}
        </div>

        {recentTestimonials.length === 0 ? (
          <div className="mt-6 rounded-xl border border-dashed border-gray-300 bg-white p-12 text-center">
            <svg
              className="mx-auto h-12 w-12 text-gray-300"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <h3 className="mt-3 text-sm font-semibold text-gray-900">
              {t('dashboard.noPending', locale)}
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              {t('dashboard.allReviewed', locale)}
            </p>
          </div>
        ) : (
          <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
            {recentTestimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
