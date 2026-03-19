'use client'

import { useEffect, useState, useCallback } from 'react'

interface ProjectRow {
  id: string
  name: string
  slug: string
  is_active: boolean
  created_at: string
  testimonial_count: number
  profiles: { email: string; full_name: string | null } | null
}

export default function AdminProyectosPage() {
  const [projects, setProjects] = useState<ProjectRow[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')

  const fetchProjects = useCallback(async () => {
    setLoading(true)
    const params = new URLSearchParams()
    if (search) params.set('search', search)

    const res = await fetch(`/api/admin/projects?${params.toString()}`)
    const data = await res.json()
    setProjects(data.projects || [])
    setLoading(false)
  }, [search])

  useEffect(() => {
    fetchProjects()
  }, [fetchProjects])

  const handleToggleActive = async (projectId: string, currentActive: boolean) => {
    await fetch('/api/admin/projects', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ projectId, is_active: !currentActive }),
    })
    fetchProjects()
  }

  const handleDelete = async (projectId: string, name: string) => {
    if (!confirm(`Eliminar proyecto "${name}" y todos sus testimonios? Esta accion es irreversible.`)) return
    await fetch(`/api/admin/projects?projectId=${projectId}`, { method: 'DELETE' })
    fetchProjects()
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Gestion de Proyectos</h1>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Buscar por nombre..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-4 py-3 text-gray-500 font-medium">Nombre</th>
                <th className="text-left px-4 py-3 text-gray-500 font-medium">Propietario</th>
                <th className="text-left px-4 py-3 text-gray-500 font-medium">Slug</th>
                <th className="text-left px-4 py-3 text-gray-500 font-medium">Testimonios</th>
                <th className="text-left px-4 py-3 text-gray-500 font-medium">Activo</th>
                <th className="text-left px-4 py-3 text-gray-500 font-medium">Creado</th>
                <th className="text-left px-4 py-3 text-gray-500 font-medium">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr><td colSpan={7} className="px-4 py-8 text-center text-gray-400">Cargando...</td></tr>
              ) : projects.length === 0 ? (
                <tr><td colSpan={7} className="px-4 py-8 text-center text-gray-400">Sin resultados</td></tr>
              ) : (
                projects.map((p) => (
                  <tr key={p.id} className="border-t border-gray-100 hover:bg-gray-50">
                    <td className="px-4 py-3 text-gray-900 font-medium">{p.name}</td>
                    <td className="px-4 py-3 text-gray-600">
                      {p.profiles?.email || '-'}
                    </td>
                    <td className="px-4 py-3 text-gray-500 font-mono text-xs">{p.slug}</td>
                    <td className="px-4 py-3 text-gray-600">{p.testimonial_count}</td>
                    <td className="px-4 py-3">
                      <button
                        onClick={() => handleToggleActive(p.id, p.is_active)}
                        className={`text-xs px-2 py-1 rounded-full font-medium ${
                          p.is_active ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                        }`}
                      >
                        {p.is_active ? 'Si' : 'No'}
                      </button>
                    </td>
                    <td className="px-4 py-3 text-gray-500 whitespace-nowrap">
                      {new Date(p.created_at).toLocaleDateString('es-ES')}
                    </td>
                    <td className="px-4 py-3">
                      <button
                        onClick={() => handleDelete(p.id, p.name)}
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
      <p className="text-sm text-gray-400 mt-3">Total: {projects.length} proyectos</p>
    </div>
  )
}
