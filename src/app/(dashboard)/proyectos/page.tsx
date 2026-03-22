import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import ProjectCard from '@/components/dashboard/project-card'
import { getUserLocale } from '@/lib/get-locale'
import { t } from '@/lib/i18n'
import type { Project } from '@/types'

export const metadata = {
  title: 'Proyectos - Opinafy',
}

export default async function ProyectosPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  const locale = await getUserLocale()

  // Fetch projects with testimonial counts
  const { data: projects } = await supabase
    .from('projects')
    .select('*, testimonials(count)')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false })

  const projectsWithCounts: Project[] =
    projects?.map((p) => ({
      ...p,
      testimonial_count: (p as unknown as { testimonials: { count: number }[] }).testimonials?.[0]?.count ?? 0,
    })) as unknown as Project[] ?? []

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{t('projects.title', locale)}</h1>
          <p className="mt-1 text-sm text-gray-500">
            {t('projects.subtitle', locale)}
          </p>
        </div>
        <Link
          href="/proyectos/nuevo"
          className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
        >
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
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          {t('projects.new', locale)}
        </Link>
      </div>

      {/* Projects Grid or Empty State */}
      {projectsWithCounts.length === 0 ? (
        <div className="mt-10 rounded-xl border border-dashed border-gray-300 bg-white p-16 text-center">
          <svg
            className="mx-auto h-16 w-16 text-gray-300"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
            />
          </svg>
          <h3 className="mt-4 text-lg font-semibold text-gray-900">
            {t('projects.emptyTitle', locale)}
          </h3>
          <p className="mt-2 text-sm text-gray-500">
            {t('projects.emptyDescription', locale)}
          </p>
          <Link
            href="/proyectos/nuevo"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
          >
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
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            {t('projects.createFirst', locale)}
          </Link>
        </div>
      ) : (
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {projectsWithCounts.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  )
}
