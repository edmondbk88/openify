'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { useLocale } from '@/components/dashboard/locale-context'
import { t } from '@/lib/i18n'

export default function IntegracionesPage() {
  const params = useParams()
  const slug = params.slug as string
  const locale = useLocale()

  const WEBHOOK_EVENTS = [
    { id: 'new_testimonial', label: t('integrations.eventNewTestimonial', locale) },
    { id: 'testimonial_approved', label: t('integrations.eventApproved', locale) },
    { id: 'testimonial_rejected', label: t('integrations.eventRejected', locale) },
  ]

  const [projectId, setProjectId] = useState<string | null>(null)
  const [webhookUrl, setWebhookUrl] = useState('')
  const [webhookEvents, setWebhookEvents] = useState<string[]>([])
  const [saving, setSaving] = useState(false)
  const [testing, setTesting] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)
  const [loading, setLoading] = useState(true)

  // Load project data
  useEffect(() => {
    async function loadProject() {
      try {
        const res = await fetch('/api/projects')
        if (res.ok) {
          const data = await res.json()
          const projects = Array.isArray(data) ? data : []
          const project = projects.find((p: { slug: string }) => p.slug === slug)
          if (project) {
            setProjectId(project.id)
            setWebhookUrl(project.webhook_url || '')
            setWebhookEvents(project.webhook_events || [])
          }
        }
      } catch {
        // ignore
      } finally {
        setLoading(false)
      }
    }
    loadProject()
  }, [slug])

  const toggleEvent = (eventId: string) => {
    setWebhookEvents((prev) =>
      prev.includes(eventId) ? prev.filter((e) => e !== eventId) : [...prev, eventId]
    )
  }

  const handleSave = async () => {
    if (!projectId) return
    setSaving(true)
    setMessage(null)

    try {
      const res = await fetch(`/api/projects/${projectId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          webhook_url: webhookUrl.trim() || null,
          webhook_events: webhookEvents,
        }),
      })

      if (res.ok) {
        setMessage({ type: 'success', text: 'Configuración guardada correctamente.' })
      } else {
        const data = await res.json().catch(() => null)
        setMessage({ type: 'error', text: data?.error || 'Error al guardar.' })
      }
    } catch {
      setMessage({ type: 'error', text: 'Error de conexion.' })
    } finally {
      setSaving(false)
    }
  }

  const handleTest = async () => {
    if (!webhookUrl.trim()) {
      setMessage({ type: 'error', text: 'Introduce una URL de webhook primero.' })
      return
    }
    setTesting(true)
    setMessage(null)

    try {
      const res = await fetch(webhookUrl.trim(), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          event: 'test',
          data: {
            message: 'Este es un evento de prueba de Opinafy.',
            project_slug: slug,
          },
          timestamp: new Date().toISOString(),
        }),
      })

      if (res.ok) {
        setMessage({ type: 'success', text: 'Webhook de prueba enviado correctamente.' })
      } else {
        setMessage({
          type: 'error',
          text: `El webhook respondio con estado ${res.status}. Verifica la URL.`,
        })
      }
    } catch {
      setMessage({
        type: 'error',
        text: 'No se pudo conectar con el webhook. Verifica la URL y que el servidor este accesible.',
      })
    } finally {
      setTesting(false)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-gray-300 border-t-indigo-600" />
      </div>
    )
  }

  return (
    <div>
      {/* Breadcrumb */}
      <div className="mb-6">
        <Link
          href={`/proyectos/${slug}`}
          className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
          {t('projects.backToProject', locale)}
        </Link>
      </div>

      <h1 className="text-2xl font-bold text-gray-900">{t('integrations.title', locale)}</h1>
      <p className="mt-2 text-sm text-gray-600">
        {t('integrations.subtitle', locale)}
      </p>

      <div className="mt-8 max-w-2xl space-y-6">
        {/* Webhook URL */}
        <div>
          <label htmlFor="webhook_url" className="block text-sm font-medium text-gray-700">
            {t('integrations.webhookUrl', locale)}
          </label>
          <input
            id="webhook_url"
            type="url"
            placeholder="https://hooks.zapier.com/hooks/catch/..."
            value={webhookUrl}
            onChange={(e) => setWebhookUrl(e.target.value)}
            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
          <p className="mt-1 text-xs text-gray-500">
            {t('integrations.webhookUrlHint', locale)}
          </p>
        </div>

        {/* Events */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            {t('integrations.eventsToNotify', locale)}
          </label>
          <div className="space-y-3">
            {WEBHOOK_EVENTS.map((event) => (
              <label
                key={event.id}
                className="flex items-center gap-3 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={webhookEvents.includes(event.id)}
                  onChange={() => toggleEvent(event.id)}
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <span className="text-sm text-gray-700">{event.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Message */}
        {message && (
          <div
            className={`rounded-lg border p-3 text-sm ${
              message.type === 'success'
                ? 'border-green-200 bg-green-50 text-green-700'
                : 'border-red-200 bg-red-50 text-red-700'
            }`}
          >
            {message.text}
          </div>
        )}

        {/* Buttons */}
        <div className="flex flex-wrap gap-3">
          <button
            onClick={handleSave}
            disabled={saving}
            className="inline-flex items-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-700 disabled:opacity-50"
          >
            {saving ? t('integrations.saving', locale) : t('integrations.saveConfig', locale)}
          </button>
          <button
            onClick={handleTest}
            disabled={testing || !webhookUrl.trim()}
            className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 disabled:opacity-50"
          >
            {testing ? t('integrations.sending', locale) : t('integrations.testWebhook', locale)}
          </button>
        </div>

        {/* Info */}
        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
          <h3 className="text-sm font-semibold text-gray-900 mb-2">{t('integrations.payloadFormat', locale)}</h3>
          <pre className="overflow-x-auto rounded bg-gray-900 p-3 text-xs text-gray-100">
{`{
  "event": "new_testimonial",
  "data": {
    "id": "uuid",
    "author_name": "Maria Garcia",
    "rating": 5,
    "content": "Excelente servicio...",
    ...
  },
  "timestamp": "2026-03-22T10:00:00.000Z"
}`}
          </pre>
        </div>
      </div>
    </div>
  )
}
