import { createClient } from '@/lib/supabase/server'
import { redirect, notFound } from 'next/navigation'
import Link from 'next/link'
import type { Project, Testimonial, TestimonialStatus } from '@/types'
import TestimonialListClient from './testimonial-list-client'

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

  // Fetch project by slug
  const { data: project, error: projectError } = await supabase
    .from('projects')
    .select('*')
    .eq('slug', slug)
    .eq('user_id', user.id)
    .single()

  if (!project || projectError) {
    notFound()
  }

  // Fetch all testimonials for this project
  const { data: testimonials } = await supabase
    .from('testimonials')
    .select('*')
    .eq('project_id', project.id)
    .order('created_at', { ascending: false })

  const allTestimonials: Testimonial[] = (testimonials as Testimonial[]) ?? []

  // Count by status
  const counts: Record<TestimonialStatus, number> = {
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
          Volver a proyectos
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
            href={`/p/${(project as Project).slug}`}
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
            Página de recopilación
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
            Configurar widget
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
            Ajustes recopilación
          </Link>
        </div>
      </div>

      {/* Status Counts */}
      <div className="mt-6 grid grid-cols-3 gap-4">
        <div className="rounded-lg border border-yellow-200 bg-yellow-50 px-4 py-3 text-center">
          <p className="text-2xl font-bold text-yellow-700">{counts.pending}</p>
          <p className="text-sm text-yellow-600">Pendientes</p>
        </div>
        <div className="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-center">
          <p className="text-2xl font-bold text-green-700">{counts.approved}</p>
          <p className="text-sm text-green-600">Aprobados</p>
        </div>
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-center">
          <p className="text-2xl font-bold text-red-700">{counts.rejected}</p>
          <p className="text-sm text-red-600">Rechazados</p>
        </div>
      </div>

      {/* Testimonials List (client component) */}
      <div className="mt-8">
        <TestimonialListClient initialTestimonials={allTestimonials} />
      </div>
    </div>
  )
}
