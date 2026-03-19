'use client'

import { useState, useEffect, useRef, use } from 'react'
import Link from 'next/link'
import type { SupportTicket, TicketMessage } from '@/types'

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
  billing: 'Facturacion',
  technical: 'Tecnico',
  feature: 'Sugerencia',
  account: 'Cuenta',
  widget: 'Widget',
  other: 'Otro',
}

export default function TicketDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const [ticket, setTicket] = useState<SupportTicket | null>(null)
  const [messages, setMessages] = useState<TicketMessage[]>([])
  const [reply, setReply] = useState('')
  const [loading, setLoading] = useState(true)
  const [sending, setSending] = useState(false)
  const [closing, setClosing] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const fetchTicket = async () => {
    try {
      const res = await fetch(`/api/tickets/${id}`)
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
      const res = await fetch(`/api/tickets/${id}/messages`, {
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

  const handleClose = async () => {
    if (!confirm('Estas seguro de que quieres cerrar este ticket?')) return
    setClosing(true)
    try {
      const res = await fetch(`/api/tickets/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: 'closed' }),
      })
      if (res.ok) {
        await fetchTicket()
      }
    } catch (err) {
      console.error(err)
    } finally {
      setClosing(false)
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
        <Link href="/soporte" className="text-indigo-600 text-sm mt-2 inline-block hover:underline">
          Volver a soporte
        </Link>
      </div>
    )
  }

  const statusCfg = STATUS_CONFIG[ticket.status] || STATUS_CONFIG.open
  const priorityCfg = PRIORITY_CONFIG[ticket.priority] || PRIORITY_CONFIG.medium
  const isClosed = ticket.status === 'closed' || ticket.status === 'resolved'

  return (
    <div className="max-w-3xl mx-auto space-y-6">
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

      {/* Ticket header */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 flex-wrap mb-2">
              <h1 className="text-xl font-bold text-gray-900">{ticket.subject}</h1>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${statusCfg.color}`}>
                {statusCfg.label}
              </span>
              <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${priorityCfg.color}`}>
                {priorityCfg.label}
              </span>
              <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
                {CATEGORY_LABELS[ticket.category] || ticket.category}
              </span>
              <span className="text-xs text-gray-400">
                {new Date(ticket.created_at).toLocaleString('es-ES')}
              </span>
            </div>
          </div>
          {!isClosed && (
            <button
              onClick={handleClose}
              disabled={closing}
              className="text-sm text-gray-500 hover:text-red-600 transition-colors whitespace-nowrap"
            >
              {closing ? 'Cerrando...' : 'Cerrar ticket'}
            </button>
          )}
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
                className={`flex ${msg.is_admin ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] rounded-xl px-4 py-3 ${
                    msg.is_admin
                      ? 'bg-gray-100 text-gray-800'
                      : 'bg-indigo-600 text-white'
                  }`}
                >
                  {msg.is_admin && (
                    <p className={`text-xs font-semibold mb-1 ${msg.is_admin ? 'text-indigo-600' : 'text-indigo-200'}`}>
                      Soporte Opinafy
                    </p>
                  )}
                  <p className="text-sm whitespace-pre-wrap">{msg.message}</p>
                  <p className={`text-xs mt-1 ${msg.is_admin ? 'text-gray-400' : 'text-indigo-200'}`}>
                    {new Date(msg.created_at).toLocaleString('es-ES', {
                      day: 'numeric',
                      month: 'short',
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </p>
                </div>
              </div>
            ))
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Reply or closed message */}
        {isClosed ? (
          <div className="p-4 border-t border-gray-100 bg-gray-50 text-center">
            <p className="text-sm text-gray-500">
              Este ticket esta cerrado. Abre uno nuevo si necesitas mas ayuda.
            </p>
            <Link
              href="/soporte/nuevo"
              className="inline-block mt-2 text-sm text-indigo-600 hover:underline"
            >
              Crear nuevo ticket
            </Link>
          </div>
        ) : (
          <form onSubmit={handleReply} className="p-4 border-t border-gray-100 bg-gray-50">
            <div className="flex gap-3">
              <textarea
                value={reply}
                onChange={(e) => setReply(e.target.value)}
                placeholder="Escribe tu respuesta..."
                rows={2}
                className="flex-1 rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-colors resize-none"
              />
              <button
                type="submit"
                disabled={sending || !reply.trim()}
                className="self-end rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {sending ? 'Enviando...' : 'Enviar'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
