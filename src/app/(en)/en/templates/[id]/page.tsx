import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { NavbarEn } from '@/components/landing/navbar-en'
import { FooterEn } from '@/components/landing/footer-en'
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
    title: `"${template.name}" Template - Testimonial Widget | Opinafy`,
    description: `${template.description} A ${template.category.toLowerCase()} style template with ${template.layout} layout. Perfect for displaying customer testimonials on your website.`,
    keywords: [
      `testimonial template ${template.name.toLowerCase()}`,
      `testimonial widget ${template.category.toLowerCase()}`,
      `${template.layout} testimonial template`,
      'review widget template',
      'testimonial design',
    ],
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: `https://opinafy.com/en/templates/${template.id}`,
      siteName: 'Opinafy',
      title: `"${template.name}" Template - Opinafy`,
      description: template.description,
    },
    alternates: {
      canonical: `https://opinafy.com/en/templates/${template.id}`,
      languages: {
        'es': `https://opinafy.com/plantillas/${template.id}`,
        'en': `https://opinafy.com/en/templates/${template.id}`,
      },
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

const layoutLabels: Record<string, string> = {
  carousel: 'Carousel',
  grid: 'Grid',
  wall: 'Wall (Masonry)',
  single: 'Featured',
  badge: 'Floating Badge',
}

const fontLabels: Record<string, string> = {
  modern: 'Modern',
  serif: 'Classic Serif',
  rounded: 'Rounded',
  minimal: 'Minimalist',
}

export default async function TemplateDetailPageEn({ params }: PageProps) {
  const { id } = await params
  const template = getTemplateById(id)

  if (!template) {
    notFound()
  }

  const { config } = template

  return (
    <>
      <NavbarEn />
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Nunito:wght@400;600;700&family=DM+Sans:wght@400;600;700&family=Space+Grotesk:wght@400;600;700&family=Caveat:wght@400;600;700&family=JetBrains+Mono:wght@400;600;700&family=Cormorant+Garamond:wght@400;600;700&display=swap"
      />
      <div className="px-4 pb-24 pt-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 text-sm text-gray-500">
            <Link href="/en/templates" className="hover:text-indigo-600 transition-colors">
              Templates
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
                href={`/en/templates/${id}/demo`}
                className="inline-flex h-12 items-center rounded-lg border-2 border-indigo-600 px-6 text-base font-semibold text-indigo-600 transition-colors hover:bg-indigo-50"
              >
                <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 010 1.972l-11.54 6.347a1.125 1.125 0 01-1.667-.986V5.653z" />
                </svg>
                View live demo
              </Link>
              <Link
                href="/en/register"
                className="inline-flex h-12 items-center rounded-lg bg-indigo-600 px-8 text-base font-semibold text-white transition-colors hover:bg-indigo-700"
              >
                Use this template
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
                <span className="ml-3 text-xs text-gray-400">Live preview</span>
              </div>
            </div>
            <TemplateDetailClient template={template} />
          </div>

          {/* Config details */}
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h2 className="mb-4 text-lg font-semibold text-gray-900">Design Configuration</h2>
              <dl className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <dt className="text-gray-500">Theme</dt>
                  <dd className="font-medium text-gray-900">{config.theme === 'dark' ? 'Dark' : 'Light'}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-500">Primary color</dt>
                  <dd className="flex items-center gap-2 font-medium text-gray-900">
                    <span className="inline-block h-4 w-4 rounded border border-gray-200" style={{ backgroundColor: config.primary_color }} />
                    {config.primary_color}
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-500">Background color</dt>
                  <dd className="flex items-center gap-2 font-medium text-gray-900">
                    <span className="inline-block h-4 w-4 rounded border border-gray-200" style={{ backgroundColor: config.background_color }} />
                    {config.background_color}
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-500">Text color</dt>
                  <dd className="flex items-center gap-2 font-medium text-gray-900">
                    <span className="inline-block h-4 w-4 rounded border border-gray-200" style={{ backgroundColor: config.text_color }} />
                    {config.text_color}
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-500">Border radius</dt>
                  <dd className="font-medium text-gray-900">{config.border_radius}px</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-500">Font</dt>
                  <dd className="font-medium text-gray-900">{fontLabels[config.font_style]}</dd>
                </div>
              </dl>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h2 className="mb-4 text-lg font-semibold text-gray-900">Visible Elements</h2>
              <dl className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <dt className="text-gray-500">Star ratings</dt>
                  <dd className="font-medium text-gray-900">{config.show_rating ? 'Yes' : 'No'}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-500">Testimonial date</dt>
                  <dd className="font-medium text-gray-900">{config.show_date ? 'Yes' : 'No'}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-500">Author avatar</dt>
                  <dd className="font-medium text-gray-900">{config.show_avatar ? 'Yes' : 'No'}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-500">Company</dt>
                  <dd className="font-medium text-gray-900">{config.show_company ? 'Yes' : 'No'}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-500">Layout</dt>
                  <dd className="font-medium text-gray-900">{layoutLabels[template.layout]}</dd>
                </div>
              </dl>

              <div className="mt-6 rounded-lg bg-indigo-50 p-4">
                <p className="text-sm text-indigo-800">
                  <strong>All settings are customizable.</strong>{' '}
                  Change colors, fonts, borders, and visible elements from the Opinafy dashboard.
                </p>
              </div>
            </div>
          </div>

          {/* Back + CTA */}
          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <Link
              href="/en/templates"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Back to all templates
            </Link>
            <Link
              href="/en/register"
              className="inline-flex h-12 items-center rounded-lg bg-indigo-600 px-8 text-base font-semibold text-white transition-colors hover:bg-indigo-700"
            >
              Use this template — Free
            </Link>
          </div>
        </div>
      </div>
      <FooterEn />
    </>
  )
}
