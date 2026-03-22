'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { useToast } from '@/components/ui/toast'
import { projectSchema } from '@/lib/validations'
import { createClient } from '@/lib/supabase/client'
import Link from 'next/link'
import type { Project } from '@/types'
import { useLocale } from '@/components/dashboard/locale-context'
import { t } from '@/lib/i18n'

export default function EditarProyectoPage() {
  const params = useParams()
  const slug = params.slug as string
  const router = useRouter()
  const { toast } = useToast()
  const locale = useLocale()

  const [project, setProject] = useState<Project | null>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const [form, setForm] = useState({
    name: '',
    website_url: '',
    brand_color: '#6366f1',
    collection_title: '',
    collection_description: '',
    thank_you_message: '',
  })

  useEffect(() => {
    async function load() {
      const supabase = createClient()
      const { data } = await supabase
        .from('projects')
        .select('*')
        .eq('slug', slug)
        .single()

      if (!data) {
        router.push('/proyectos')
        return
      }

      const p = data as Project
      setProject(p)
      setForm({
        name: p.name,
        website_url: p.website_url || '',
        brand_color: p.brand_color,
        collection_title: p.collection_title,
        collection_description: p.collection_description || '',
        thank_you_message: p.thank_you_message,
      })
      setLoading(false)
    }

    load()
  }, [slug, router])

  function updateField(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }))
    setErrors((prev) => {
      const next = { ...prev }
      delete next[field]
      return next
    })
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!project) return
    setErrors({})

    const result = projectSchema.safeParse(form)
    if (!result.success) {
      const fieldErrors: Record<string, string> = {}
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as string
        if (!fieldErrors[field]) {
          fieldErrors[field] = issue.message
        }
      })
      setErrors(fieldErrors)
      return
    }

    setSaving(true)
    try {
      const res = await fetch(`/api/projects/${project.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(result.data),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || 'Error al guardar los cambios')
      }

      toast('Proyecto actualizado correctamente', 'success')
      router.push(`/proyectos/${slug}`)
    } catch (err: unknown) {
      toast(
        err instanceof Error ? err.message : 'Error al guardar los cambios',
        'error'
      )
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <svg
          className="h-8 w-8 animate-spin text-indigo-600"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-2xl">
      {/* Header */}
      <div className="mb-8">
        <Link
          href={`/proyectos/${slug}`}
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
          {t('projects.backToProject', locale)}
        </Link>
        <h1 className="mt-3 text-2xl font-bold text-gray-900">
          {t('projects.editTitle', locale)}
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          {t('projects.editSubtitle', locale)}
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            {t('projects.name', locale)}
          </label>
          <input
            id="name"
            type="text"
            value={form.name}
            onChange={(e) => updateField('name', e.target.value)}
            placeholder="Mi negocio"
            className="mt-1.5 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name}</p>
          )}
        </div>

        {/* Website URL */}
        <div>
          <label
            htmlFor="website_url"
            className="block text-sm font-medium text-gray-700"
          >
            {t('projects.websiteUrl', locale)}
          </label>
          <input
            id="website_url"
            type="url"
            value={form.website_url}
            onChange={(e) => updateField('website_url', e.target.value)}
            placeholder="https://mi-negocio.com"
            className="mt-1.5 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
          {errors.website_url && (
            <p className="mt-1 text-sm text-red-600">{errors.website_url}</p>
          )}
        </div>

        {/* Brand Color */}
        <div>
          <label
            htmlFor="brand_color"
            className="block text-sm font-medium text-gray-700"
          >
            {t('projects.brandColor', locale)}
          </label>
          <div className="mt-1.5 flex items-center gap-3">
            <input
              type="color"
              value={form.brand_color}
              onChange={(e) => updateField('brand_color', e.target.value)}
              className="h-10 w-10 cursor-pointer rounded border border-gray-300"
            />
            <input
              id="brand_color"
              type="text"
              value={form.brand_color}
              onChange={(e) => updateField('brand_color', e.target.value)}
              className="w-32 rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>
          {errors.brand_color && (
            <p className="mt-1 text-sm text-red-600">{errors.brand_color}</p>
          )}
        </div>

        {/* Collection Title */}
        <div>
          <label
            htmlFor="collection_title"
            className="block text-sm font-medium text-gray-700"
          >
            {t('projects.collectionTitle', locale)}
          </label>
          <input
            id="collection_title"
            type="text"
            value={form.collection_title}
            onChange={(e) => updateField('collection_title', e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
          {errors.collection_title && (
            <p className="mt-1 text-sm text-red-600">
              {errors.collection_title}
            </p>
          )}
        </div>

        {/* Collection Description */}
        <div>
          <label
            htmlFor="collection_description"
            className="block text-sm font-medium text-gray-700"
          >
            {t('projects.collectionDescription', locale)}
          </label>
          <textarea
            id="collection_description"
            rows={3}
            value={form.collection_description}
            onChange={(e) =>
              updateField('collection_description', e.target.value)
            }
            placeholder="Cuentanos tu experiencia con nuestro servicio..."
            className="mt-1.5 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
          {errors.collection_description && (
            <p className="mt-1 text-sm text-red-600">
              {errors.collection_description}
            </p>
          )}
        </div>

        {/* Thank You Message */}
        <div>
          <label
            htmlFor="thank_you_message"
            className="block text-sm font-medium text-gray-700"
          >
            {t('projects.thankYouMessage', locale)}
          </label>
          <textarea
            id="thank_you_message"
            rows={2}
            value={form.thank_you_message}
            onChange={(e) => updateField('thank_you_message', e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
          {errors.thank_you_message && (
            <p className="mt-1 text-sm text-red-600">
              {errors.thank_you_message}
            </p>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 border-t border-gray-200 pt-6">
          <button
            type="submit"
            disabled={saving}
            className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {saving && (
              <svg
                className="h-4 w-4 animate-spin"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                />
              </svg>
            )}
            {saving ? t('projects.saving', locale) : t('projects.saveChanges', locale)}
          </button>
          <Link
            href={`/proyectos/${slug}`}
            className="rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
          >
            {t('common.cancel', locale)}
          </Link>
        </div>
      </form>
    </div>
  )
}
