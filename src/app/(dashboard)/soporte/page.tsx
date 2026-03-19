'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import type { SupportTicket } from '@/types'

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

export default function SoportePage() {
  const [tickets, setTickets] = useState<(SupportTicket & { last_message?: string })[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/tickets')
      .then((r) => r.json())
      .then((data) => {
        setTickets(data.tickets || [])
      })
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Soporte</h1>
          <p className="text-gray-500 text-sm mt-1">
            Gestiona tus tickets de soporte
          </p>
        </div>
        <Link
          href="/soporte/nuevo"
          className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-indigo-700 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          Nuevo Ticket
        </Link>
      </div>

      {/* List */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        {loading ? (
          <div className="p-12 text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-indigo-600 border-r-transparent" />
            <p className="mt-3 text-gray-500 text-sm">Cargando tickets...</p>
          </div>
        ) : tickets.length === 0 ? (
          <div className="p-12 text-center">
            <svg className="w-12 h-12 text-gray-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
            </svg>
            <p className="text-gray-500 font-medium">No tienes tickets de soporte</p>
            <p className="text-gray-400 text-sm mt-1">Crea uno nuevo si necesitas ayuda</p>
          </div>
        ) : (
          <div className="divide-y divide-gray-100">
            {tickets.map((ticket) => {
              const statusCfg = STATUS_CONFIG[ticket.status] || STATUS_CONFIG.open
              const priorityCfg = PRIORITY_CONFIG[ticket.priority] || PRIORITY_CONFIG.medium
              return (
                <Link
                  key={ticket.id}
                  href={`/soporte/${ticket.id}`}
                  className="flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors"
                >
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-indigo-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                    </svg>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-semibold text-gray-900 truncate">{ticket.subject}</h3>
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${statusCfg.color}`}>
                        {statusCfg.label}
                      </span>
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${priorityCfg.color}`}>
                        {priorityCfg.label}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 mt-1 text-sm text-gray-500">
                      <span>{CATEGORY_LABELS[ticket.category] || ticket.category}</span>
                      <span>
                        {new Date(ticket.created_at).toLocaleDateString('es-ES', {
                          day: 'numeric',
                          month: 'short',
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </span>
                    </div>
                    {ticket.last_message && (
                      <p className="text-sm text-gray-400 mt-1 truncate">{ticket.last_message}</p>
                    )}
                  </div>

                  {/* Arrow */}
                  <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
