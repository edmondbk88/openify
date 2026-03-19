'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useToast } from '@/components/ui/toast'
import { projectSchema } from '@/lib/validations'
import {
  DEFAULT_BRAND_COLOR,
  DEFAULT_COLLECTION_TITLE,
  DEFAULT_THANK_YOU_MESSAGE,
} from '@/lib/constants'
import Link from 'next/link'

export default function NuevoProyectoPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const [form, setForm] = useState({
    name: '',
    website_url: '',
    brand_color: DEFAULT_BRAND_COLOR,
    collection_title: DEFAULT_COLLECTION_TITLE,
    collection_description: '',
    thank_you_message: DEFAULT_THANK_YOU_MESSAGE,
  })

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

    setLoading(true)
    try {
      const res = await fetch('/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(result.data),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || 'Error al crear el proyecto')
      }

      const { slug } = await res.json()
      toast('Proyecto creado correctamente', 'success')
      router.push(`/proyectos/${slug}`)
    } catch (err: unknown) {
      toast(err instanceof Error ? err.message : 'Error al crear el proyecto', 'error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="mx-auto max-w-2xl">
      {/* Header */}
      <div className="mb-8">
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
        <h1 className="mt-3 text-2xl font-bold text-gray-900">
          Nuevo Proyecto
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          Configura los datos básicos de tu proyecto para empezar a recopilar
          testimonios.
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
            Nombre del proyecto *
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
            URL del sitio web
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
            Color de marca *
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
            Título de la página de recopilación *
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
            Descripción de la página de recopilación
          </label>
          <textarea
            id="collection_description"
            rows={3}
            value={form.collection_description}
            onChange={(e) =>
              updateField('collection_description', e.target.value)
            }
            placeholder="Cuéntanos tu experiencia con nuestro servicio..."
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
            Mensaje de agradecimiento *
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
            disabled={loading}
            className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading && (
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
            {loading ? 'Creando...' : 'Crear proyecto'}
          </button>
          <Link
            href="/proyectos"
            className="rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
          >
            Cancelar
          </Link>
        </div>
      </form>
    </div>
  )
}
