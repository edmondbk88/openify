'use client'

import { useState, useEffect, useRef } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import type { TicketMessage } from '@/types'

interface TicketWithProfile {
  id: string
  subject: string
  category: string
  priority: string
  status: string
  created_at: string
  updated_at: string
  profiles: { id: string; full_name: string; email: string; plan: string; avatar_url: string | null } | null
}

const STATUS_CONFIG: Record<string, { label: string; color: string }> = {
  open: { label: 'Abierto', color: 'bg-blue-100 text-blue-700' },
  in_progress: { label: 'En progreso', color: 'bg-yellow-100 text-yellow-700' },
  waiting: { label: 'Esperando', color: 'bg-purple-100 text-purple-700' },
  resolved: { label: 'Resuelto', color: 'bg-green-100 text-green-700' },
  closed: { label: 'Cerrado', color: 'bg-gray-100 text-gray-600' },
}

const PRIORITY_CONFIG: Record<string, { label: string; color: string }> = {
  low: { label: 'Baja', color: 'bg-gray-100 text-gray-600' },
  medium: { label: 'Media', color: 'bg-blue-100 text-blue-700' },
  high: { label: 'Alta', color: 'bg-orange-100 text-orange-700' },
  urgent: { label: 'Urgente', color: 'bg-red-100 text-red-700' },
}

const CATEGORY_LABELS: Record<string, string> = {
  billing: 'Facturación',
  technical: 'Técnico',
  feature: 'Sugerencia',
  account: 'Cuenta',
  widget: 'Widget',
  other: 'Otro',
}

const PLAN_LABELS: Record<string, string> = {
  free: 'Gratis',
  pro: 'Pro',
  business: 'Business',
}

export default function AdminTicketDetailPage() {
  const params = useParams()
  const id = params.id as string
  const [ticket, setTicket] = useState<TicketWithProfile | null>(null)
  const [messages, setMessages] = useState<TicketMessage[]>([])
  const [reply, setReply] = useState('')
  const [loading, setLoading] = useState(true)
  const [sending, setSending] = useState(false)
  const [updatingStatus, setUpdatingStatus] = useState(false)
  const [updatingPriority, setUpdatingPriority] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const fetchTicket = async () => {
    try {
      const res = await fetch(`/api/admin/tickets/${id}`)
      const data = await res.json()
      if (res.ok) {
        setTicket(data.ticket)
        setMessages(data.messages || [])
      }
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchTicket()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleReply = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!reply.trim()) return

    setSending(true)
    try {
      const res = await fetch(`/api/admin/tickets/${id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: reply }),
      })

      if (res.ok) {
        setReply('')
        await fetchTicket()
      }
    } catch (err) {
      console.error(err)
    } finally {
      setSending(false)
    }
  }

  const handleStatusChange = async (newStatus: string) => {
    setUpdatingStatus(true)
    try {
      const res = await fetch('/api/admin/tickets', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ticketId: id, status: newStatus }),
      })
      if (res.ok) {
        await fetchTicket()
      }
    } catch (err) {
      console.error(err)
    } finally {
      setUpdatingStatus(false)
    }
  }

  const handlePriorityChange = async (newPriority: string) => {
    setUpdatingPriority(true)
    try {
      const res = await fetch('/api/admin/tickets', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ticketId: id, priority: newPriority }),
      })
      if (res.ok) {
        await fetchTicket()
      }
    } catch (err) {
      console.error(err)
    } finally {
      setUpdatingPriority(false)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-indigo-600 border-r-transparent" />
      </div>
    )
  }

  if (!ticket) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-500">Ticket no encontrado</p>
        <Link href="/admin/tickets" className="text-indigo-600 text-sm mt-2 inline-block hover:underline">
          Volver a tickets
        </Link>
      </div>
    )
  }

  const statusCfg = STATUS_CONFIG[ticket.status] || STATUS_CONFIG.open
  const priorityCfg = PRIORITY_CONFIG[ticket.priority] || PRIORITY_CONFIG.medium
  const profile = ticket.profiles

  return (
    <div className="space-y-6">
      {/* Back */}
      <Link
        href="/admin/tickets"
        className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
        </svg>
        Volver a tickets
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Ticket header */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center gap-2 flex-wrap mb-3">
              <h1 className="text-xl font-bold text-gray-900">{ticket.subject}</h1>
              <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${statusCfg.color}`}>
                {statusCfg.label}
              </span>
              <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${priorityCfg.color}`}>
                {priorityCfg.label}
              </span>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-gray-500">
              <span>{CATEGORY_LABELS[ticket.category] || ticket.category}</span>
              <span>Creado: {new Date(ticket.created_at).toLocaleString('es-ES')}</span>
            </div>
          </div>

          {/* Messages */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="p-4 border-b border-gray-100">
              <h2 className="font-semibold text-gray-900 text-sm">
                Conversacion ({messages.length} {messages.length === 1 ? 'mensaje' : 'mensajes'})
              </h2>
            </div>

            <div className="p-4 space-y-4 max-h-[500px] overflow-y-auto">
              {messages.length === 0 ? (
                <div className="text-center py-8 text-gray-400 text-sm">
                  No hay mensajes todavia
                </div>
              ) : (
                messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`p-4 rounded-xl ${
                      msg.is_admin ? 'bg-indigo-50 border border-indigo-100' : 'bg-gray-50 border border-gray-100'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                        msg.is_admin ? 'bg-indigo-600 text-white' : 'bg-gray-300 text-gray-600'
                      }`}>
                        {msg.is_admin ? 'A' : profile?.full_name?.[0]?.toUpperCase() || 'U'}
                      </div>
                      <span className="font-medium text-gray-900 text-sm">
                        {msg.is_admin ? 'Soporte Opinafy' : (profile?.full_name || profile?.email || 'Usuario')}
                      </span>
                      {msg.is_admin && (
                        <span className="text-xs bg-indigo-600 text-white px-1.5 py-0.5 rounded">Admin</span>
                      )}
                      <span className="text-xs text-gray-400">
                        {new Date(msg.created_at).toLocaleString('es-ES')}
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 whitespace-pre-wrap ml-9">{msg.message}</p>
                  </div>
                ))
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Reply form */}
            {ticket.status !== 'closed' && (
              <form onSubmit={handleReply} className="p-4 border-t border-gray-100 bg-gray-50">
                <div className="space-y-3">
                  <textarea
                    value={reply}
                    onChange={(e) => setReply(e.target.value)}
                    placeholder="Escribe tu respuesta como admin..."
                    rows={3}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-colors resize-none"
                  />
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      disabled={sending || !reply.trim()}
                      className="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      {sending ? 'Enviando...' : 'Enviar respuesta'}
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* User info */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 text-sm mb-4">Información del usuario</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-sm font-bold text-indigo-600">
                  {profile?.full_name?.[0]?.toUpperCase() || 'U'}
                </div>
                <div>
                  <p className="font-medium text-gray-900 text-sm">{profile?.full_name || 'Sin nombre'}</p>
                  <p className="text-gray-500 text-xs">{profile?.email}</p>
                </div>
              </div>
              <div className="pt-2 border-t border-gray-100">
                <p className="text-xs text-gray-500">Plan</p>
                <p className="text-sm font-medium text-gray-900">
                  {PLAN_LABELS[profile?.plan || 'free'] || profile?.plan}
                </p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 text-sm mb-4">Acciones</h3>
            <div className="space-y-4">
              {/* Status */}
              <div>
                <label className="block text-xs text-gray-500 mb-1.5">Estado</label>
                <select
                  value={ticket.status}
                  onChange={(e) => handleStatusChange(e.target.value)}
                  disabled={updatingStatus}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none disabled:opacity-50"
                >
                  <option value="open">Abierto</option>
                  <option value="in_progress">En progreso</option>
                  <option value="waiting">Esperando</option>
                  <option value="resolved">Resuelto</option>
                  <option value="closed">Cerrado</option>
                </select>
              </div>

              {/* Priority */}
              <div>
                <label className="block text-xs text-gray-500 mb-1.5">Prioridad</label>
                <select
                  value={ticket.priority}
                  onChange={(e) => handlePriorityChange(e.target.value)}
                  disabled={updatingPriority}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none disabled:opacity-50"
                >
                  <option value="low">Baja</option>
                  <option value="medium">Media</option>
                  <option value="high">Alta</option>
                  <option value="urgent">Urgente</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
