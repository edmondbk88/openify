import { createClient } from '@/lib/supabase/server'
import { redirect, notFound } from 'next/navigation'
import Link from 'next/link'
import type { Project, Testimonial, TestimonialStatus } from '@/types'
import TestimonialListClient from './testimonial-list-client'
import MinisiteToggle from './minisite-toggle'
import DeleteProjectButton from './delete-project-button'
import { getUserLocale } from '@/lib/get-locale'
import { t } from '@/lib/i18n'

export const metadata = {
  title: 'Detalle del proyecto - Opinafy',
}

export default async function ProyectoDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  const locale = await getUserLocale()

  // Fetch project and user profile in parallel
  const [{ data: project, error: projectError }, { data: profile }] = await Promise.all([
    supabase
      .from('projects')
      .select('*')
      .eq('slug', slug)
      .eq('user_id', user.id)
      .single(),
    supabase
      .from('profiles')
      .select('username')
      .eq('id', user.id)
      .single(),
  ])

  if (!project || projectError) {
    notFound()
  }

  const username = profile?.username || ''

  // Fetch all testimonials for this project
  const { data: testimonials } = await supabase
    .from('testimonials')
    .select('*')
    .eq('project_id', project.id)
    .order('created_at', { ascending: false })

  const allTestimonials: Testimonial[] = (testimonials as Testimonial[]) ?? []

  // Count by status
  const counts: Record<TestimonialStatus, number> = {
    pending_verification: allTestimonials.filter((t) => t.status === 'pending_verification').length,
    pending: allTestimonials.filter((t) => t.status === 'pending').length,
    approved: allTestimonials.filter((t) => t.status === 'approved').length,
    rejected: allTestimonials.filter((t) => t.status === 'rejected').length,
  }

  return (
    <div>
      {/* Breadcrumb */}
      <div className="mb-6">
        <Link
          href="/proyectos"
          className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
          {t('projects.backToProjects', locale)}
        </Link>
      </div>

      {/* Project Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span
            className="inline-block h-4 w-4 rounded-full"
            style={{ backgroundColor: (project as Project).brand_color }}
          />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              {(project as Project).name}
            </h1>
            <p className="mt-0.5 text-sm text-gray-500">
              Slug: {(project as Project).slug}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Link
            href={`/p/${username}/${(project as Project).slug}`}
            target="_blank"
            className="inline-flex items-center gap-1.5 rounded-lg border border-gray-300 bg-white px-3.5 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
            {t('projects.collectionPage', locale)}
          </Link>
          <Link
            href={`/proyectos/${(project as Project).slug}/widget`}
            className="inline-flex items-center gap-1.5 rounded-lg border border-gray-300 bg-white px-3.5 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
              />
            </svg>
            {t('projects.configureWidget', locale)}
          </Link>
          <Link
            href={`/proyectos/${(project as Project).slug}/importar`}
            className="inline-flex items-center gap-1.5 rounded-lg border border-gray-300 bg-white px-3.5 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
              />
            </svg>
            {t('projects.importTestimonials', locale)}
          </Link>
          <Link
            href={`/proyectos/${(project as Project).slug}/solicitar`}
            className="inline-flex items-center gap-1.5 rounded-lg border border-gray-300 bg-white px-3.5 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
              />
            </svg>
            {t('projects.requestTestimonials', locale)}
          </Link>
          <Link
            href={`/proyectos/${(project as Project).slug}/analytics`}
            className="inline-flex items-center gap-1.5 rounded-lg border border-gray-300 bg-white px-3.5 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
              />
            </svg>
            {t('projects.analytics', locale)}
          </Link>
          <Link
            href={`/proyectos/${(project as Project).slug}/exportar`}
            className="inline-flex items-center gap-1.5 rounded-lg border border-gray-300 bg-white px-3.5 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
              />
            </svg>
            {t('projects.exportPdf', locale)}
          </Link>
          <Link
            href={`/proyectos/${(project as Project).slug}/integraciones`}
            className="inline-flex items-center gap-1.5 rounded-lg border border-gray-300 bg-white px-3.5 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
              />
            </svg>
            {t('projects.integrations', locale)}
          </Link>
          <Link
            href={`/proyectos/${(project as Project).slug}/automatizacion`}
            className="inline-flex items-center gap-1.5 rounded-lg border border-gray-300 bg-white px-3.5 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
          >
            <svg
              className="h-4 w-4"
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
            {locale === 'en' ? 'Automation' : 'Automatizacion'}
          </Link>
          <Link
            href={`/proyectos/${(project as Project).slug}/recopilar`}
            className="inline-flex items-center gap-1.5 rounded-lg bg-indigo-600 px-3.5 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
            {t('projects.collectionSettings', locale)}
          </Link>
          <DeleteProjectButton projectId={(project as Project).id} />
        </div>
      </div>

      {/* Minisite Toggle */}
      <div className="mt-6">
        <MinisiteToggle
          projectId={(project as Project).id}
          initialValue={(project as Project).show_on_minisite ?? true}
        />
      </div>

      {/* Status Counts */}
      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
        <div className="rounded-lg border border-purple-200 bg-purple-50 px-4 py-3 text-center">
          <p className="text-2xl font-bold text-purple-700">{counts.pending_verification}</p>
          <p className="text-sm text-purple-600">{t('projects.verification', locale)}</p>
        </div>
        <div className="rounded-lg border border-yellow-200 bg-yellow-50 px-4 py-3 text-center">
          <p className="text-2xl font-bold text-yellow-700">{counts.pending}</p>
          <p className="text-sm text-yellow-600">{t('projects.pendingStatus', locale)}</p>
        </div>
        <div className="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-center">
          <p className="text-2xl font-bold text-green-700">{counts.approved}</p>
          <p className="text-sm text-green-600">{t('projects.approved', locale)}</p>
        </div>
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-center">
          <p className="text-2xl font-bold text-red-700">{counts.rejected}</p>
          <p className="text-sm text-red-600">{t('projects.rejected', locale)}</p>
        </div>
      </div>

      {/* Badge de verificacion */}
      <div className="mt-6 rounded-lg border border-gray-200 bg-white p-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100">
            <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
            </svg>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              {t('projects.verificationBadge', locale) || 'Badge de verificacion'}
            </h2>
            <p className="text-sm text-gray-500">
              {locale === 'en'
                ? 'Embed this badge on your website to show your testimonials are verified.'
                : 'Inserta este badge en tu web para mostrar que tus testimonios estan verificados.'}
            </p>
          </div>
        </div>
        <div className="mt-4 overflow-hidden rounded-lg border border-gray-200 bg-gray-50 p-4">
          <p className="mb-2 text-xs font-medium text-gray-500">
            {locale === 'en' ? 'Preview:' : 'Vista previa:'}
          </p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`/api/badge/${(project as Project).id}`}
            alt="Verificado por Opinafy"
            className="h-[70px] w-[220px]"
          />
        </div>
        <div className="mt-4 overflow-hidden rounded-lg border border-gray-200 bg-gray-900 p-4">
          <p className="mb-2 text-xs font-medium text-gray-400">
            {locale === 'en' ? 'Embed code:' : 'Codigo para insertar:'}
          </p>
          <code className="block text-xs text-green-400 whitespace-pre-wrap break-all">
            {`<a href="https://opinafy.com/verificado-badge">\n  <img src="https://opinafy.com/api/badge/${(project as Project).id}" alt="Verificado por Opinafy" />\n</a>`}
          </code>
        </div>
      </div>

      {/* Testimonials List (client component) */}
      <div className="mt-8">
        <TestimonialListClient initialTestimonials={allTestimonials} />
      </div>
    </div>
  )
}
