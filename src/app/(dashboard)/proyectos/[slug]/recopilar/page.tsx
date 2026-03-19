'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { useToast } from '@/components/ui/toast'
import { createClient } from '@/lib/supabase/client'
import type { Project } from '@/types'

export default function RecopilarPage() {
  const params = useParams()
  const slug = params.slug as string
  const router = useRouter()
  const { toast } = useToast()

  const [project, setProject] = useState<Project | null>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [copied, setCopied] = useState(false)
  const [username, setUsername] = useState('')

  const [form, setForm] = useState({
    collection_title: '',
    collection_description: '',
    thank_you_message: '',
  })

  const publicUrl = typeof window !== 'undefined'
    ? `${window.location.origin}/p/${username}/${slug}`
    : `/p/${username}/${slug}`

  useEffect(() => {
    async function load() {
      const supabase = createClient()

      // Fetch project and current user's profile in parallel
      const [{ data: projectData }, { data: { user } }] = await Promise.all([
        supabase.from('projects').select('*').eq('slug', slug).single(),
        supabase.auth.getUser(),
      ])

      if (!projectData) {
        router.push('/proyectos')
        return
      }

      // Fetch username
      if (user) {
        const { data: profile } = await supabase
          .from('profiles')
          .select('username')
          .eq('id', user.id)
          .single()
        setUsername(profile?.username || '')
      }

      setProject(projectData as Project)
      setForm({
        collection_title: projectData.collection_title || '',
        collection_description: projectData.collection_description || '',
        thank_you_message: projectData.thank_you_message || '',
      })
      setLoading(false)
    }

    load()
  }, [slug, router])

  function updateField(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  async function handleCopyUrl() {
    try {
      await navigator.clipboard.writeText(publicUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
      toast('URL copiada al portapapeles', 'success')
    } catch {
      toast('Error al copiar la URL', 'error')
    }
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault()
    if (!project) return
    setSaving(true)

    try {
      const res = await fetch(`/api/projects/${project.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || 'Error al guardar los cambios')
      }

      toast('Ajustes de recopilación guardados', 'success')
    } catch (err: unknown) {
      toast(err instanceof Error ? err.message : 'Error al guardar los cambios', 'error')
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
        <h1 className="text-2xl font-bold text-gray-900">
          Ajustes de recopilación
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          Configura la página pública donde tus clientes dejan testimonios.
        </p>
      </div>

      {/* Public URL */}
      <div className="rounded-xl border border-gray-200 bg-white p-6">
        <h2 className="text-sm font-semibold text-gray-900">
          URL pública de recopilación
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          Comparte este enlace con tus clientes para que dejen sus testimonios.
        </p>
        <div className="mt-4 flex items-center gap-2">
          <input
            type="text"
            readOnly
            value={publicUrl}
            className="flex-1 rounded-lg border border-gray-300 bg-gray-50 px-4 py-2.5 text-sm text-gray-700"
          />
          <button
            onClick={handleCopyUrl}
            className={`inline-flex items-center gap-1.5 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
              copied
                ? 'bg-green-50 text-green-700'
                : 'bg-indigo-600 text-white hover:bg-indigo-700'
            }`}
          >
            {copied ? (
              <>
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
                Copiado
              </>
            ) : (
              <>
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
                    d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9.75a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
                  />
                </svg>
                Copiar
              </>
            )}
          </button>
        </div>
      </div>

      {/* QR Code Placeholder */}
      <div className="mt-6 rounded-xl border border-gray-200 bg-white p-6">
        <h2 className="text-sm font-semibold text-gray-900">Código QR</h2>
        <p className="mt-1 text-sm text-gray-500">
          Usa este código QR para compartir la página de recopilación de forma
          física.
        </p>
        <div className="mt-4 flex items-center justify-center rounded-lg border border-dashed border-gray-300 bg-gray-50 p-8">
          <div className="text-center">
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
                d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z"
              />
            </svg>
            <p className="mt-2 text-sm text-gray-400">
              Código QR disponible próximamente
            </p>
          </div>
        </div>
      </div>

      {/* Edit Collection Form */}
      <form onSubmit={handleSave} className="mt-6 space-y-6">
        <div className="rounded-xl border border-gray-200 bg-white p-6">
          <h2 className="text-sm font-semibold text-gray-900">
            Personalizar página de recopilación
          </h2>

          <div className="mt-4 space-y-4">
            {/* Collection Title */}
            <div>
              <label
                htmlFor="collection_title"
                className="block text-sm font-medium text-gray-700"
              >
                Título
              </label>
              <input
                id="collection_title"
                type="text"
                value={form.collection_title}
                onChange={(e) =>
                  updateField('collection_title', e.target.value)
                }
                className="mt-1.5 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
            </div>

            {/* Collection Description */}
            <div>
              <label
                htmlFor="collection_description"
                className="block text-sm font-medium text-gray-700"
              >
                Descripción
              </label>
              <textarea
                id="collection_description"
                rows={3}
                value={form.collection_description}
                onChange={(e) =>
                  updateField('collection_description', e.target.value)
                }
                className="mt-1.5 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
            </div>

            {/* Thank You Message */}
            <div>
              <label
                htmlFor="thank_you_message"
                className="block text-sm font-medium text-gray-700"
              >
                Mensaje de agradecimiento
              </label>
              <textarea
                id="thank_you_message"
                rows={2}
                value={form.thank_you_message}
                onChange={(e) =>
                  updateField('thank_you_message', e.target.value)
                }
                className="mt-1.5 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
              <p className="mt-1 text-xs text-gray-400">
                Este mensaje se mostrará después de que el cliente envíe su
                testimonio.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
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
            {saving ? 'Guardando...' : 'Guardar cambios'}
          </button>
        </div>
      </form>
    </div>
  )
}
