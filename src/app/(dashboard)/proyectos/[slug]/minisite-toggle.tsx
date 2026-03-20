'use client'

import { useState } from 'react'
import { useToast } from '@/components/ui/toast'

interface MinisiteToggleProps {
  projectId: string
  initialValue: boolean
}

export default function MinisiteToggle({ projectId, initialValue }: MinisiteToggleProps) {
  const { toast } = useToast()
  const [enabled, setEnabled] = useState(initialValue)
  const [saving, setSaving] = useState(false)

  async function handleToggle() {
    const newValue = !enabled
    setSaving(true)
    try {
      const res = await fetch(`/api/projects/${projectId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ show_on_minisite: newValue }),
      })
      if (!res.ok) throw new Error('Error al actualizar')
      setEnabled(newValue)
      toast(
        newValue ? 'Proyecto visible en tu sitio' : 'Proyecto oculto de tu sitio',
        'success'
      )
    } catch {
      toast('Error al actualizar la visibilidad', 'error')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white px-4 py-3">
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900">Mostrar en mi sitio</p>
        <p className="text-xs text-gray-500">
          {enabled
            ? 'Los testimonios de este proyecto aparecen en tu pagina publica'
            : 'Este proyecto esta oculto de tu pagina publica'}
        </p>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={enabled}
        disabled={saving}
        onClick={handleToggle}
        className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 disabled:opacity-50 ${
          enabled ? 'bg-indigo-600' : 'bg-gray-200'
        }`}
      >
        <span
          className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
            enabled ? 'translate-x-5' : 'translate-x-0'
          }`}
        />
      </button>
    </div>
  )
}
