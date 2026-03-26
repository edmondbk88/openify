'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface TicketWithProfile {
  id: string
  subject: string
  category: string
  priority: string
  status: string
  created_at: string
  updated_at: string
  profiles: { full_name: string; email: string; plan: string } | null
}

interface Stats {
  open: number
  in_progress: number
  waiting: number
  resolved: number
  total: number
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

export default function AdminTicketsPage() {
  const [tickets, setTickets] = useState<TicketWithProfile[]>([])
  const [stats, setStats] = useState<Stats>({ open: 0, in_progress: 0, waiting: 0, resolved: 0, total: 0 })
  const [loading, setLoading] = useState(true)
  const [statusFilter, setStatusFilter] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('')
  const [priorityFilter, setPriorityFilter] = useState('')
  const [search, setSearch] = useState('')

  const fetchTickets = async () => {
    setLoading(true)
    try {
      const params = new URLSearchParams()
      if (statusFilter) params.set('status', statusFilter)
      if (categoryFilter) params.set('category', categoryFilter)
      if (priorityFilter) params.set('priority', priorityFilter)
      if (search) params.set('search', search)

      const res = await fetch(`/api/admin/tickets?${params.toString()}`)
      const data = await res.json()
      if (res.ok) {
        setTickets(data.tickets || [])
        setStats(data.stats || { open: 0, in_progress: 0, waiting: 0, resolved: 0, total: 0 })
      }
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchTickets()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [statusFilter, categoryFilter, priorityFilter])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    fetchTickets()
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Tickets de Soporte</h1>
        <p className="text-gray-500 text-sm mt-1">Gestiona las solicitudes de ayuda de los usuarios</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div className="bg-white rounded-xl p-4 border border-gray-100">
          <p className="text-sm text-gray-500">Total</p>
          <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
        </div>
        <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
          <p className="text-sm text-blue-600">Abiertos</p>
          <p className="text-2xl font-bold text-blue-700">{stats.open}</p>
        </div>
        <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-100">
          <p className="text-sm text-yellow-600">En progreso</p>
          <p className="text-2xl font-bold text-yellow-700">{stats.in_progress}</p>
        </div>
        <div className="bg-purple-50 rounded-xl p-4 border border-purple-100">
          <p className="text-sm text-purple-600">Esperando</p>
          <p className="text-2xl font-bold text-purple-700">{stats.waiting}</p>
        </div>
        <div className="bg-green-50 rounded-xl p-4 border border-green-100">
          <p className="text-sm text-green-600">Resueltos</p>
          <p className="text-2xl font-bold text-green-700">{stats.resolved}</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl p-4 border border-gray-100">
        <form onSubmit={handleSearch} className="flex flex-wrap items-center gap-3">
          <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
          </svg>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
          >
            <option value="">Todos los estados</option>
            <option value="open">Abierto</option>
            <option value="in_progress">En progreso</option>
            <option value="waiting">Esperando</option>
            <option value="resolved">Resuelto</option>
            <option value="closed">Cerrado</option>
          </select>
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
          >
            <option value="">Todas las categorias</option>
            <option value="billing">Facturacion</option>
            <option value="technical">Técnico</option>
            <option value="feature">Sugerencia</option>
            <option value="account">Cuenta</option>
            <option value="widget">Widget</option>
            <option value="other">Otro</option>
          </select>
          <select
            value={priorityFilter}
            onChange={(e) => setPriorityFilter(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
          >
            <option value="">Todas las prioridades</option>
            <option value="urgent">Urgente</option>
            <option value="high">Alta</option>
            <option value="medium">Media</option>
            <option value="low">Baja</option>
          </select>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar por asunto o email..."
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none flex-1 min-w-[200px]"
          />
          <button
            type="submit"
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors"
          >
            Buscar
          </button>
          {(statusFilter || categoryFilter || priorityFilter || search) && (
            <button
              type="button"
              onClick={() => {
                setStatusFilter('')
                setCategoryFilter('')
                setPriorityFilter('')
                setSearch('')
              }}
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Limpiar filtros
            </button>
          )}
        </form>
      </div>

      {/* Tickets List */}
      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
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
            <p className="text-gray-500">No hay tickets que mostrar</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <th className="text-left px-4 py-3 font-medium text-gray-500">Asunto</th>
                  <th className="text-left px-4 py-3 font-medium text-gray-500">Usuario</th>
                  <th className="text-left px-4 py-3 font-medium text-gray-500">Categoria</th>
                  <th className="text-left px-4 py-3 font-medium text-gray-500">Prioridad</th>
                  <th className="text-left px-4 py-3 font-medium text-gray-500">Estado</th>
                  <th className="text-left px-4 py-3 font-medium text-gray-500">Actualizado</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {tickets.map((ticket) => {
                  const statusCfg = STATUS_CONFIG[ticket.status] || STATUS_CONFIG.open
                  const priorityCfg = PRIORITY_CONFIG[ticket.priority] || PRIORITY_CONFIG.medium
                  return (
                    <tr key={ticket.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3">
                        <Link
                          href={`/admin/tickets/${ticket.id}`}
                          className="font-medium text-gray-900 hover:text-indigo-600 transition-colors"
                        >
                          {ticket.subject}
                        </Link>
                      </td>
                      <td className="px-4 py-3">
                        <div>
                          <p className="text-gray-900">{ticket.profiles?.full_name || 'Sin nombre'}</p>
                          <p className="text-gray-400 text-xs">{ticket.profiles?.email}</p>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-gray-600">
                        {CATEGORY_LABELS[ticket.category] || ticket.category}
                      </td>
                      <td className="px-4 py-3">
                        <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${priorityCfg.color}`}>
                          {priorityCfg.label}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${statusCfg.color}`}>
                          {statusCfg.label}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-gray-400 text-xs whitespace-nowrap">
                        {new Date(ticket.updated_at).toLocaleDateString('es-ES', {
                          day: 'numeric',
                          month: 'short',
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
