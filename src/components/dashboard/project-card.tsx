import Link from 'next/link'
import { cn } from '@/lib/utils'
import type { Project } from '@/types'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <span
            className="inline-block h-3 w-3 rounded-full"
            style={{ backgroundColor: project.brand_color }}
            aria-label={`Color de marca: ${project.brand_color}`}
          />
          <div>
            <h3 className="font-semibold text-gray-900">{project.name}</h3>
            <p className="text-sm text-gray-500">/p/.../{project.slug}</p>
          </div>
        </div>
        <span
          className={cn(
            'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
            project.is_active
              ? 'bg-green-50 text-green-700'
              : 'bg-gray-100 text-gray-600'
          )}
        >
          {project.is_active ? 'Activo' : 'Inactivo'}
        </span>
      </div>

      <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.399-.498c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
        </svg>
        <span>
          {project.testimonial_count ?? 0}{' '}
          {project.testimonial_count === 1 ? 'testimonio' : 'testimonios'}
        </span>
      </div>

      <div className="mt-4 flex items-center gap-2">
        <Link
          href={`/proyectos/${project.slug}`}
          className="inline-flex items-center rounded-lg bg-indigo-600 px-3.5 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
        >
          Ver
        </Link>
        <Link
          href={`/proyectos/${project.slug}/editar`}
          className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-3.5 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
        >
          Editar
        </Link>
      </div>
    </div>
  )
}
