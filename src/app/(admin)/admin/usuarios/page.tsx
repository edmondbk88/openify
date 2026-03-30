'use client'

import { useEffect, useState, useCallback, useRef } from 'react'

interface UserRow {
  id: string
  full_name: string | null
  email: string
  plan: string
  username: string | null
  avatar_url: string | null
  is_admin: boolean
  created_at: string
  gifted_plan: string | null
  gifted_plan_expires_at: string | null
  gifted_by: string | null
}

const PLAN_COLORS: Record<string, string> = {
  business: 'bg-pink-100 text-pink-700',
  pro: 'bg-indigo-100 text-indigo-700',
  minisite: 'bg-emerald-100 text-emerald-700',
  free: 'bg-gray-100 text-gray-700',
}

export default function AdminUsuariosPage() {
  const [users, setUsers] = useState<UserRow[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [debouncedSearch, setDebouncedSearch] = useState('')
  const [planFilter, setPlanFilter] = useState('')
  const [giftModal, setGiftModal] = useState<UserRow | null>(null)
  const [giftPlan, setGiftPlan] = useState('pro')
  const [giftDays, setGiftDays] = useState(30)
  const [giftLoading, setGiftLoading] = useState(false)
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Debounce search input (400ms)
  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(() => setDebouncedSearch(search), 400)
    return () => { if (debounceRef.current) clearTimeout(debounceRef.current) }
  }, [search])

  const fetchUsers = useCallback(async () => {
    setLoading(true)
    const params = new URLSearchParams()
    if (debouncedSearch) params.set('search', debouncedSearch)
    if (planFilter) params.set('plan', planFilter)

    const res = await fetch(`/api/admin/users?${params.toString()}`)
    const data = await res.json()
    setUsers(data.users || [])
    setLoading(false)
  }, [debouncedSearch, planFilter])

  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])

  const handleChangePlan = async (userId: string, plan: string) => {
    await fetch('/api/admin/users', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, plan }),
    })
    fetchUsers()
  }

  const handleToggleAdmin = async (userId: string, currentAdmin: boolean) => {
    await fetch('/api/admin/users', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, is_admin: !currentAdmin }),
    })
    fetchUsers()
  }

  const handleDelete = async (userId: string, email: string) => {
    if (!confirm(`Eliminar usuario ${email}? Esta acción es irreversible.`)) return
    await fetch(`/api/admin/users?userId=${userId}`, { method: 'DELETE' })
    fetchUsers()
  }

  const handleGiftPlan = async () => {
    if (!giftModal) return
    setGiftLoading(true)
    await fetch('/api/admin/users', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId: giftModal.id,
        gifted_plan: giftPlan,
        gifted_days: giftDays,
      }),
    })
    setGiftLoading(false)
    setGiftModal(null)
    fetchUsers()
  }

  const handleRevokeGift = async (userId: string) => {
    if (!confirm('Revocar plan regalado?')) return
    await fetch('/api/admin/users', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId,
        gifted_plan: null,
        gifted_days: 0,
      }),
    })
    fetchUsers()
  }

  const getEffectivePlan = (u: UserRow) => {
    if (u.gifted_plan && u.gifted_plan_expires_at) {
      const expires = new Date(u.gifted_plan_expires_at)
      if (expires > new Date()) return u.gifted_plan
    }
    return u.plan
  }

  const formatDate = (d: string) => new Date(d).toLocaleDateString('es-ES')

  const daysRemaining = (expiresAt: string) => {
    const diff = new Date(expiresAt).getTime() - Date.now()
    return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)))
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Gestion de Usuarios</h1>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <input
          type="text"
          placeholder="Buscar por nombre o email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <select
          value={planFilter}
          onChange={(e) => setPlanFilter(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">Todos los planes</option>
          <option value="free">Free</option>
          <option value="minisite">Mini Sitio</option>
          <option value="pro">Pro</option>
          <option value="business">Business</option>
        </select>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-4 py-3 text-gray-500 font-medium">Avatar</th>
                <th className="text-left px-4 py-3 text-gray-500 font-medium">Nombre</th>
                <th className="text-left px-4 py-3 text-gray-500 font-medium">Email</th>
                <th className="text-left px-4 py-3 text-gray-500 font-medium">Plan</th>
                <th className="text-left px-4 py-3 text-gray-500 font-medium">Regalo</th>
                <th className="text-left px-4 py-3 text-gray-500 font-medium">Username</th>
                <th className="text-left px-4 py-3 text-gray-500 font-medium">Admin</th>
                <th className="text-left px-4 py-3 text-gray-500 font-medium">Creado</th>
                <th className="text-left px-4 py-3 text-gray-500 font-medium">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr><td colSpan={9} className="px-4 py-8 text-center text-gray-400">Cargando...</td></tr>
              ) : users.length === 0 ? (
                <tr><td colSpan={9} className="px-4 py-8 text-center text-gray-400">Sin resultados</td></tr>
              ) : (
                users.map((u) => {
                  const effective = getEffectivePlan(u)
                  const hasActiveGift = u.gifted_plan && u.gifted_plan_expires_at && new Date(u.gifted_plan_expires_at) > new Date()

                  return (
                    <tr key={u.id} className="border-t border-gray-100 hover:bg-gray-50">
                      <td className="px-4 py-3">
                        {u.avatar_url ? (
                          <img src={u.avatar_url} alt="" className="w-8 h-8 rounded-full object-cover" />
                        ) : (
                          <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 text-xs font-bold">
                            {(u.full_name || u.email)[0]?.toUpperCase()}
                          </div>
                        )}
                      </td>
                      <td className="px-4 py-3 text-gray-900 font-medium">{u.full_name || '-'}</td>
                      <td className="px-4 py-3 text-gray-600">{u.email}</td>
                      <td className="px-4 py-3">
                        <select
                          value={u.plan}
                          onChange={(e) => handleChangePlan(u.id, e.target.value)}
                          className={`text-xs px-2 py-1 rounded-full font-medium border-0 cursor-pointer ${
                            PLAN_COLORS[effective] || PLAN_COLORS.free
                          }`}
                        >
                          <option value="free">free</option>
                          <option value="minisite">minisite</option>
                          <option value="pro">pro</option>
                          <option value="business">business</option>
                        </select>
                      </td>
                      <td className="px-4 py-3">
                        {hasActiveGift ? (
                          <div className="flex flex-col gap-1">
                            <span className="text-xs font-medium text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full inline-block w-fit">
                              {u.gifted_plan} ({daysRemaining(u.gifted_plan_expires_at!)}d)
                            </span>
                            <button
                              onClick={() => handleRevokeGift(u.id)}
                              className="text-xs text-red-500 hover:text-red-700 underline w-fit"
                            >
                              Revocar
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => { setGiftModal(u); setGiftPlan('pro'); setGiftDays(30) }}
                            className="text-xs text-indigo-600 hover:text-indigo-800 font-medium"
                          >
                            Regalar
                          </button>
                        )}
                      </td>
                      <td className="px-4 py-3 text-gray-500">{u.username || '-'}</td>
                      <td className="px-4 py-3">
                        <button
                          onClick={() => handleToggleAdmin(u.id, u.is_admin)}
                          className={`text-xs px-2 py-1 rounded-full font-medium ${
                            u.is_admin ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-500'
                          }`}
                        >
                          {u.is_admin ? 'Si' : 'No'}
                        </button>
                      </td>
                      <td className="px-4 py-3 text-gray-500 whitespace-nowrap">
                        {formatDate(u.created_at)}
                      </td>
                      <td className="px-4 py-3">
                        <button
                          onClick={() => handleDelete(u.id, u.email)}
                          className="text-xs text-red-600 hover:text-red-800 font-medium"
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  )
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
      <p className="text-sm text-gray-400 mt-3">Total: {users.length} usuarios</p>

      {/* Gift Plan Modal */}
      {giftModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md mx-4 p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-1">Regalar Plan</h2>
            <p className="text-sm text-gray-500 mb-5">
              Regalar tiempo de un plan a <strong>{giftModal.full_name || giftModal.email}</strong>
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Plan</label>
                <select
                  value={giftPlan}
                  onChange={(e) => setGiftPlan(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="minisite">Mini Sitio (€5/mes)</option>
                  <option value="pro">Pro (€9/mes)</option>
                  <option value="business">Business (€19/mes)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Duracion</label>
                <div className="grid grid-cols-4 gap-2">
                  {[7, 14, 30, 90].map((d) => (
                    <button
                      key={d}
                      type="button"
                      onClick={() => setGiftDays(d)}
                      className={`px-3 py-2 text-sm rounded-lg font-medium transition-colors ${
                        giftDays === d
                          ? 'bg-indigo-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {d} dias
                    </button>
                  ))}
                </div>
                <input
                  type="number"
                  min={1}
                  max={365}
                  value={giftDays}
                  onChange={(e) => setGiftDays(Number(e.target.value) || 1)}
                  className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="O escribe días personalizados..."
                />
              </div>

              <div className="bg-indigo-50 rounded-lg px-4 py-3">
                <p className="text-sm text-indigo-800">
                  Se activara el plan <strong>{giftPlan}</strong> por <strong>{giftDays} dias</strong>.
                  {giftModal.plan !== 'free' && (
                    <> El plan actual ({giftModal.plan}) se mantiene como base.</>
                  )}
                </p>
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setGiftModal(null)}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg"
              >
                Cancelar
              </button>
              <button
                onClick={handleGiftPlan}
                disabled={giftLoading}
                className="px-5 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg disabled:opacity-50"
              >
                {giftLoading ? 'Aplicando...' : 'Regalar Plan'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
