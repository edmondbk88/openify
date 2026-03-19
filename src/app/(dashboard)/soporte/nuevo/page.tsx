'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function NuevoTicketPage() {
  const router = useRouter()
  const [subject, setSubject] = useState('')
  const [category, setCategory] = useState('')
  const [priority, setPriority] = useState('medium')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!subject.trim()) {
      setError('El asunto es requerido')
      return
    }
    if (!category) {
      setError('Selecciona una categoria')
      return
    }
    if (message.length < 20) {
      setError('El mensaje debe tener al menos 20 caracteres')
      return
    }

    setLoading(true)

    try {
      const res = await fetch('/api/tickets', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ subject, category, priority, message }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || 'Error al crear el ticket')
        return
      }

      router.push(`/soporte/${data.ticket.id}`)
    } catch {
      setError('Error al crear el ticket')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Back */}
      <Link
        href="/soporte"
        className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
        </svg>
        Volver a soporte
      </Link>

      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h1 className="text-xl font-bold text-gray-900 mb-6">Nuevo Ticket de Soporte</h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Subject */}
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1.5">
              Asunto *
            </label>
            <input
              id="subject"
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Describe brevemente tu problema"
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-colors"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1.5">
              Categoria *
            </label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-colors"
              required
            >
              <option value="">Selecciona una categoria</option>
              <option value="billing">Facturacion</option>
              <option value="technical">Tecnico</option>
              <option value="feature">Sugerencia</option>
              <option value="account">Cuenta</option>
              <option value="widget">Widget</option>
              <option value="other">Otro</option>
            </select>
          </div>

          {/* Priority */}
          <div>
            <label htmlFor="priority" className="block text-sm font-medium text-gray-700 mb-1.5">
              Prioridad
            </label>
            <select
              id="priority"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-colors"
            >
              <option value="low">Baja</option>
              <option value="medium">Media</option>
              <option value="high">Alta</option>
              <option value="urgent">Urgente</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
              Mensaje *
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Describe tu problema o consulta en detalle (min. 20 caracteres)"
              rows={6}
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-colors resize-none"
              required
              minLength={20}
            />
            <p className="text-xs text-gray-400 mt-1">{message.length}/20 caracteres minimo</p>
          </div>

          {/* Error */}
          {error && (
            <div className="rounded-lg bg-red-50 border border-red-200 p-3">
              <p className="text-sm text-red-600">{error}</p>
            </div>
          )}

          {/* Submit */}
          <div className="flex justify-end gap-3 pt-2">
            <Link
              href="/soporte"
              className="rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancelar
            </Link>
            <button
              type="submit"
              disabled={loading}
              className="rounded-lg bg-indigo-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {loading ? 'Enviando...' : 'Enviar Ticket'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
