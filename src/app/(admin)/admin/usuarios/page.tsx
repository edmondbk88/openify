'use client'

import { useEffect, useState, useCallback } from 'react'

interface UserRow {
  id: string
  full_name: string | null
  email: string
  plan: string
  username: string | null
  avatar_url: string | null
  is_admin: boolean
  created_at: string
}

export default function AdminUsuariosPage() {
  const [users, setUsers] = useState<UserRow[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [planFilter, setPlanFilter] = useState('')

  const fetchUsers = useCallback(async () => {
    setLoading(true)
    const params = new URLSearchParams()
    if (search) params.set('search', search)
    if (planFilter) params.set('plan', planFilter)

    const res = await fetch(`/api/admin/users?${params.toString()}`)
    const data = await res.json()
    setUsers(data.users || [])
    setLoading(false)
  }, [search, planFilter])

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
    if (!confirm(`Eliminar usuario ${email}? Esta accion es irreversible.`)) return
    await fetch(`/api/admin/users?userId=${userId}`, { method: 'DELETE' })
    fetchUsers()
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
                <th className="text-left px-4 py-3 text-gray-500 font-medium">Username</th>
                <th className="text-left px-4 py-3 text-gray-500 font-medium">Admin</th>
                <th className="text-left px-4 py-3 text-gray-500 font-medium">Creado</th>
                <th className="text-left px-4 py-3 text-gray-500 font-medium">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr><td colSpan={8} className="px-4 py-8 text-center text-gray-400">Cargando...</td></tr>
              ) : users.length === 0 ? (
                <tr><td colSpan={8} className="px-4 py-8 text-center text-gray-400">Sin resultados</td></tr>
              ) : (
                users.map((u) => (
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
                          u.plan === 'business' ? 'bg-pink-100 text-pink-700' :
                          u.plan === 'pro' ? 'bg-indigo-100 text-indigo-700' :
                          'bg-gray-100 text-gray-700'
                        }`}
                      >
                        <option value="free">free</option>
                        <option value="pro">pro</option>
                        <option value="business">business</option>
                      </select>
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
                      {new Date(u.created_at).toLocaleDateString('es-ES')}
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
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
      <p className="text-sm text-gray-400 mt-3">Total: {users.length} usuarios</p>
    </div>
  )
}
