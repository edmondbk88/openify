import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { widgetTemplates, getTemplateById } from '@/lib/widget-templates'
import { TemplateDetailClient } from './detail-client'

interface PageProps {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return widgetTemplates.map((t) => ({ id: t.id }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params
  const template = getTemplateById(id)
  if (!template) return {}

  return {
    title: `Plantilla "${template.name}" - Widget de Testimonios | Opinafy`,
    description: `${template.description} Plantilla de estilo ${template.category.toLowerCase()} con layout ${template.layout}. Perfecta para mostrar testimonios de clientes en tu web.`,
    keywords: [
      `plantilla testimonios ${template.name.toLowerCase()}`,
      `widget testimonios ${template.category.toLowerCase()}`,
      `template ${template.layout} testimonios`,
      'plantilla widget opiniones',
      'diseño testimonios web',
    ],
    openGraph: {
      type: 'website',
      locale: 'es_ES',
      url: `https://opinafy.com/plantillas/${template.id}`,
      siteName: 'Opinafy',
      title: `Plantilla "${template.name}" - Opinafy`,
      description: template.description,
    },
    alternates: {
      canonical: `https://opinafy.com/plantillas/${template.id}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

const layoutLabels: Record<string, string> = {
  carousel: 'Carrusel',
  grid: 'Cuadrícula',
  wall: 'Muro (Masonry)',
  single: 'Destacado',
  badge: 'Badge Flotante',
}

const fontLabels: Record<string, string> = {
  modern: 'Moderna',
  serif: 'Serif Clásica',
  rounded: 'Redondeada',
  minimal: 'Minimalista',
}

export default async function TemplateDetailPage({ params }: PageProps) {
  const { id } = await params
  const template = getTemplateById(id)

  if (!template) {
    notFound()
  }

  const { config } = template

  return (
    <div className="px-4 pb-24 pt-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/plantillas" className="hover:text-indigo-600 transition-colors">
            Plantillas
          </Link>
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-gray-900 font-medium">{template.name}</span>
        </nav>

        {/* Header */}
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <span className="inline-block rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700">
                {template.category}
              </span>
              <span className="inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                {layoutLabels[template.layout]}
              </span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              {template.name}
            </h1>
            <p className="mt-3 max-w-2xl text-lg text-gray-600">
              {template.description}
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Link
              href={`/plantillas/${id}/demo`}
              className="inline-flex h-12 items-center rounded-lg border-2 border-indigo-600 px-6 text-base font-semibold text-indigo-600 transition-colors hover:bg-indigo-50"
            >
              <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 010 1.972l-11.54 6.347a1.125 1.125 0 01-1.667-.986V5.653z" />
              </svg>
              Ver demo en vivo
            </Link>
            <Link
              href="/registro"
              className="inline-flex h-12 items-center rounded-lg bg-indigo-600 px-8 text-base font-semibold text-white transition-colors hover:bg-indigo-700"
            >
              Usar esta plantilla
            </Link>
          </div>
        </div>

        {/* Live preview */}
        <div className="mb-12 overflow-hidden rounded-2xl border border-gray-200 shadow-lg">
          <div className="border-b border-gray-200 bg-gray-50 px-5 py-3">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-yellow-400" />
              <div className="h-3 w-3 rounded-full bg-green-400" />
              <span className="ml-3 text-xs text-gray-400">Vista previa en vivo</span>
            </div>
          </div>
          <TemplateDetailClient template={template} />
        </div>

        {/* Config details */}
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <h2 className="mb-4 text-lg font-semibold text-gray-900">Configuración del Diseño</h2>
            <dl className="space-y-3 text-sm">
              <div className="flex justify-between">
                <dt className="text-gray-500">Tema</dt>
                <dd className="font-medium text-gray-900">{config.theme === 'dark' ? 'Oscuro' : 'Claro'}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-500">Color principal</dt>
                <dd className="flex items-center gap-2 font-medium text-gray-900">
                  <span className="inline-block h-4 w-4 rounded border border-gray-200" style={{ backgroundColor: config.primary_color }} />
                  {config.primary_color}
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-500">Color de fondo</dt>
                <dd className="flex items-center gap-2 font-medium text-gray-900">
                  <span className="inline-block h-4 w-4 rounded border border-gray-200" style={{ backgroundColor: config.background_color }} />
                  {config.background_color}
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-500">Color de texto</dt>
                <dd className="flex items-center gap-2 font-medium text-gray-900">
                  <span className="inline-block h-4 w-4 rounded border border-gray-200" style={{ backgroundColor: config.text_color }} />
                  {config.text_color}
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-500">Bordes redondeados</dt>
                <dd className="font-medium text-gray-900">{config.border_radius}px</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-500">Tipografía</dt>
                <dd className="font-medium text-gray-900">{fontLabels[config.font_style]}</dd>
              </div>
            </dl>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <h2 className="mb-4 text-lg font-semibold text-gray-900">Elementos Visibles</h2>
            <dl className="space-y-3 text-sm">
              <div className="flex justify-between">
                <dt className="text-gray-500">Estrellas de valoración</dt>
                <dd className="font-medium text-gray-900">{config.show_rating ? 'Sí' : 'No'}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-500">Fecha del testimonio</dt>
                <dd className="font-medium text-gray-900">{config.show_date ? 'Sí' : 'No'}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-500">Avatar del autor</dt>
                <dd className="font-medium text-gray-900">{config.show_avatar ? 'Sí' : 'No'}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-500">Empresa</dt>
                <dd className="font-medium text-gray-900">{config.show_company ? 'Sí' : 'No'}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-500">Layout</dt>
                <dd className="font-medium text-gray-900">{layoutLabels[template.layout]}</dd>
              </div>
            </dl>

            <div className="mt-6 rounded-lg bg-indigo-50 p-4">
              <p className="text-sm text-indigo-800">
                <strong>Todos los ajustes son personalizables.</strong>{' '}
                Cambia colores, tipografías, bordes y elementos visibles desde el panel de Opinafy.
              </p>
            </div>
          </div>
        </div>

        {/* Back + CTA */}
        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <Link
            href="/plantillas"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Volver a todas las plantillas
          </Link>
          <Link
            href="/registro"
            className="inline-flex h-12 items-center rounded-lg bg-indigo-600 px-8 text-base font-semibold text-white transition-colors hover:bg-indigo-700"
          >
            Usar esta plantilla — Gratis
          </Link>
        </div>
      </div>
    </div>
  )
}
