import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { miniSiteTemplates, getMiniSiteTemplateById } from '@/lib/minisite-templates'
import { breadcrumbSchema, webPageSchema } from '@/lib/schema'

interface PageProps {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return miniSiteTemplates.map((t) => ({ id: t.id }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params
  const template = getMiniSiteTemplateById(id)
  if (!template) return {}

  return {
    title: `Plantilla "${template.name}" - Mini Sitio de Testimonios | Opinafy`,
    description: `${template.description} Plantilla de mini sitio para ${template.category.toLowerCase()} con layout ${template.config.layout}. Crea tu pagina de testimonios profesional.`,
    keywords: [
      `plantilla mini sitio ${template.name.toLowerCase()}`,
      `pagina testimonios ${template.category.toLowerCase()}`,
      `plantilla pagina testimonios ${template.config.layout}`,
      'mini sitio profesional testimonios',
      'pagina publica testimonios',
    ],
    openGraph: {
      type: 'website',
      locale: 'es_ES',
      url: `https://opinafy.com/plantillas-minisitio/${template.id}`,
      siteName: 'Opinafy',
      title: `Plantilla "${template.name}" - Mini Sitio Opinafy`,
      description: template.description,
    },
    alternates: {
      canonical: `https://opinafy.com/plantillas-minisitio/${template.id}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

const layoutLabels: Record<string, string> = {
  masonry: 'Masonry',
  grid: 'Cuadricula',
  list: 'Lista',
  cards: 'Tarjetas',
  timeline: 'Linea temporal',
}

const headerLabels: Record<string, string> = {
  centered: 'Centrada',
  left: 'Izquierda',
  hero: 'Hero',
  minimal: 'Minimalista',
  banner: 'Banner',
}

const fontLabels: Record<string, string> = {
  modern: 'Moderna',
  serif: 'Serif Clasica',
  rounded: 'Redondeada',
  minimal: 'Minimalista',
  bold: 'Negrita',
}

const cardLabels: Record<string, string> = {
  rounded: 'Redondeada',
  sharp: 'Recta',
  pill: 'Pastilla',
  bordered: 'Con borde',
  shadow: 'Con sombra',
  glass: 'Glassmorphism',
}

export default async function MiniSiteTemplateDetailPage({ params }: PageProps) {
  const { id } = await params
  const template = getMiniSiteTemplateById(id)

  if (!template) {
    notFound()
  }

  const { config } = template

  const breadcrumbJsonLd = breadcrumbSchema([
    { name: 'Inicio', url: 'https://opinafy.com' },
    { name: 'Plantillas Mini Sitio', url: 'https://opinafy.com/plantillas-minisitio' },
    { name: template.name, url: `https://opinafy.com/plantillas-minisitio/${template.id}` },
  ])

  const pageJsonLd = webPageSchema({
    name: `Plantilla "${template.name}" - Mini Sitio de Testimonios`,
    url: `https://opinafy.com/plantillas-minisitio/${template.id}`,
    description: template.description,
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />

      <div className="px-4 pb-24 pt-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 text-sm text-gray-500">
            <Link href="/plantillas-minisitio" className="hover:text-indigo-600 transition-colors">
              Plantillas Mini Sitio
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
                  {layoutLabels[config.layout] || config.layout}
                </span>
                {config.dark_mode && (
                  <span className="inline-block rounded-full bg-gray-800 px-3 py-1 text-xs font-medium text-gray-200">
                    Dark Mode
                  </span>
                )}
              </div>
              <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                {template.name}
              </h1>
              <p className="mt-3 max-w-2xl text-lg text-gray-600">
                {template.description}
              </p>
            </div>
            <Link
              href="/registro"
              className="inline-flex h-12 shrink-0 items-center rounded-lg bg-indigo-600 px-8 text-base font-semibold text-white transition-colors hover:bg-indigo-700"
            >
              Usar esta plantilla
            </Link>
          </div>

          {/* Live preview */}
          <div className="mb-12 overflow-hidden rounded-2xl border border-gray-200 shadow-lg">
            <div className="border-b border-gray-200 bg-gray-50 px-5 py-3">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />
                <span className="ml-3 text-xs text-gray-400">Vista previa del mini sitio</span>
              </div>
            </div>
            <div
              className="p-8"
              style={{ backgroundColor: config.background_color }}
            >
              {/* Simulated mini site preview */}
              <div className="mx-auto max-w-2xl">
                {/* Header simulation */}
                <div className={config.header_style === 'centered' ? 'text-center' : ''}>
                  <div
                    className="mb-2 h-4 w-32 rounded"
                    style={{ backgroundColor: config.accent_color, opacity: 0.7 }}
                  />
                  <div
                    className="mb-1 h-3 w-48 rounded"
                    style={{ backgroundColor: config.text_color, opacity: 0.3 }}
                  />
                  <div
                    className="h-2 w-36 rounded"
                    style={{ backgroundColor: config.text_color, opacity: 0.15 }}
                  />
                </div>

                {/* Stats simulation */}
                {config.show_stats && (
                  <div className="mt-6 flex justify-center gap-6">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="text-center">
                        <div
                          className="mx-auto mb-1 h-5 w-8 rounded"
                          style={{ backgroundColor: config.accent_color, opacity: 0.5 }}
                        />
                        <div
                          className="mx-auto h-2 w-12 rounded"
                          style={{ backgroundColor: config.text_color, opacity: 0.2 }}
                        />
                      </div>
                    ))}
                  </div>
                )}

                {/* Cards simulation */}
                <div className={`mt-8 grid gap-4 ${config.layout === 'list' ? 'grid-cols-1' : 'grid-cols-2'}`}>
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="p-4"
                      style={{
                        backgroundColor: config.dark_mode
                          ? 'rgba(255,255,255,0.06)'
                          : 'rgba(0,0,0,0.03)',
                        borderRadius:
                          config.card_style === 'sharp' ? '0px'
                          : config.card_style === 'pill' ? '16px'
                          : config.card_style === 'glass' ? '12px'
                          : '8px',
                        border: config.card_style === 'bordered'
                          ? `1px solid ${config.accent_color}40`
                          : 'none',
                        boxShadow: config.card_style === 'shadow'
                          ? '0 2px 8px rgba(0,0,0,0.1)'
                          : config.card_style === 'glass'
                          ? '0 4px 12px rgba(0,0,0,0.05)'
                          : 'none',
                      }}
                    >
                      {/* Stars */}
                      <div className="flex gap-0.5">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <div
                            key={s}
                            className="h-2.5 w-2.5 rounded-sm"
                            style={{ backgroundColor: '#fbbf24' }}
                          />
                        ))}
                      </div>
                      {/* Text lines */}
                      <div
                        className="mt-2 h-2 w-full rounded"
                        style={{ backgroundColor: config.text_color, opacity: 0.15 }}
                      />
                      <div
                        className="mt-1.5 h-2 w-3/4 rounded"
                        style={{ backgroundColor: config.text_color, opacity: 0.1 }}
                      />
                      {/* Author */}
                      <div className="mt-3 flex items-center gap-2">
                        <div
                          className="h-5 w-5 rounded-full"
                          style={{ backgroundColor: config.accent_color, opacity: 0.4 }}
                        />
                        <div
                          className="h-2 w-16 rounded"
                          style={{ backgroundColor: config.text_color, opacity: 0.2 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Config details */}
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h2 className="mb-4 text-lg font-semibold text-gray-900">Configuracion del Diseno</h2>
              <dl className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <dt className="text-gray-500">Color de acento</dt>
                  <dd className="flex items-center gap-2 font-medium text-gray-900">
                    <span className="inline-block h-4 w-4 rounded border border-gray-200" style={{ backgroundColor: config.accent_color }} />
                    {config.accent_color}
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
                  <dt className="text-gray-500">Estilo de tarjeta</dt>
                  <dd className="font-medium text-gray-900">{cardLabels[config.card_style] || config.card_style}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-500">Tipografia</dt>
                  <dd className="font-medium text-gray-900">{fontLabels[config.font_style] || config.font_style}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-500">Modo oscuro</dt>
                  <dd className="font-medium text-gray-900">{config.dark_mode ? 'Si' : 'No'}</dd>
                </div>
              </dl>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h2 className="mb-4 text-lg font-semibold text-gray-900">Opciones del Sitio</h2>
              <dl className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <dt className="text-gray-500">Layout</dt>
                  <dd className="font-medium text-gray-900">{layoutLabels[config.layout] || config.layout}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-500">Estilo de cabecera</dt>
                  <dd className="font-medium text-gray-900">{headerLabels[config.header_style] || config.header_style}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-500">Mostrar estadisticas</dt>
                  <dd className="font-medium text-gray-900">{config.show_stats ? 'Si' : 'No'}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-500">Mostrar contacto</dt>
                  <dd className="font-medium text-gray-900">{config.show_contact ? 'Si' : 'No'}</dd>
                </div>
              </dl>

              <div className="mt-6 rounded-lg bg-indigo-50 p-4">
                <p className="text-sm text-indigo-800">
                  <strong>Todos los ajustes son personalizables.</strong>{' '}
                  Cambia colores, tipografias y opciones desde tu panel de Opinafy.
                </p>
              </div>
            </div>
          </div>

          {/* Back + CTA */}
          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <Link
              href="/plantillas-minisitio"
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
    </>
  )
}
