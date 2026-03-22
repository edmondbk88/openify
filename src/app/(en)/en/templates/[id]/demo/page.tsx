import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { widgetTemplates, getTemplateById } from '@/lib/widget-templates'
import { DemoWidgetClient } from './demo-client'

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
    title: `Live Demo - "${template.name}" with 30 Testimonials | Opinafy`,
    description: `See how the "${template.name}" template looks with 30 real testimonials. Interactive demo of the Opinafy testimonial widget.`,
    robots: {
      index: true,
      follow: true,
    },
  }
}

export default async function DemoPageEn({ params }: PageProps) {
  const { id } = await params
  const template = getTemplateById(id)

  if (!template) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top bar */}
      <div className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link
            href={`/en/templates/${id}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-indigo-600"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to template
          </Link>

          <div className="flex items-center gap-3">
            <span className="hidden text-sm text-gray-500 sm:inline">
              Demo: <strong className="text-gray-900">{template.name}</strong> — 30 testimonials
            </span>
            <Link
              href="/en/register"
              className="inline-flex h-9 items-center rounded-lg bg-indigo-600 px-5 text-sm font-semibold text-white transition-colors hover:bg-indigo-700"
            >
              Use this template
            </Link>
          </div>
        </div>
      </div>

      {/* Demo widget area */}
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Live Demo — {template.name}
          </h1>
          <p className="mt-2 text-gray-600">
            This is how this template would look on your website with real customer testimonials.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
          {/* Browser chrome */}
          <div className="border-b border-gray-200 bg-gray-50 px-5 py-3">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-yellow-400" />
              <div className="h-3 w-3 rounded-full bg-green-400" />
              <span className="ml-3 text-xs text-gray-400">your-website.com — Demo with 30 testimonials</span>
            </div>
          </div>
          <DemoWidgetClient templateId={id} />
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="border-t border-gray-200 bg-white px-4 py-12 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900">Like how it looks?</h2>
        <p className="mt-3 text-gray-600">
          Sign up for free and use this template with your own testimonials in minutes.
        </p>
        <Link
          href="/en/register"
          className="mt-6 inline-flex h-12 items-center rounded-lg bg-indigo-600 px-8 text-base font-semibold text-white transition-colors hover:bg-indigo-700"
        >
          Use this template — Free
        </Link>
      </div>
    </div>
  )
}
