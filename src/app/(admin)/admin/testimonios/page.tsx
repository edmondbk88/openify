'use client'

import { useEffect, useState, useCallback } from 'react'

interface TestimonialRow {
  id: string
  author_name: string
  author_company: string | null
  content: string
  rating: number
  status: string
  is_company_verified: boolean
  video_url: string | null
  created_at: string
  projects: { name: string; slug: string } | null
}

export default function AdminTestimoniosPage() {
  const [testimonials, setTestimonials] = useState<TestimonialRow[]>([])
  const [loading, setLoading] = useState(true)
  const [statusFilter, setStatusFilter] = useState('')

  const fetchTestimonials = useCallback(async () => {
    setLoading(true)
    const params = new URLSearchParams()
    if (statusFilter) params.set('status', statusFilter)

    const res = await fetch(`/api/admin/testimonials?${params.toString()}`)
    const data = await res.json()
    setTestimonials(data.testimonials || [])
    setLoading(false)
  }, [statusFilter])

  useEffect(() => {
    fetchTestimonials()
  }, [fetchTestimonials])

  const handleChangeStatus = async (testimonialId: string, status: string) => {
    await fetch('/api/admin/testimonials', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ testimonialId, status }),
    })
    fetchTestimonials()
  }

  const handleDelete = async (testimonialId: string, authorName: string) => {
    if (!confirm(`Eliminar testimonio de "${authorName}"?`)) return
    await fetch(`/api/admin/testimonials?testimonialId=${testimonialId}`, { method: 'DELETE' })
    fetchTestimonials()
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Gestion de Testimonios</h1>

      <div className="mb-6">
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">Todos los estados</option>
          <option value="pending">Pendiente</option>
          <option value="pending_verification">Verificacion pendiente</option>
          <option value="approved">Aprobado</option>
          <option value="rejected">Rechazado</option>
        </select>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-4 py-3 text-gray-500 font-medium">Autor</th>
                <th className="text-left px-4 py-3 text-gray-500 font-medium">Proyecto</th>
                <th className="text-left px-4 py-3 text-gray-500 font-medium">Rating</th>
                <th className="text-left px-4 py-3 text-gray-500 font-medium">Estado</th>
                <th className="text-left px-4 py-3 text-gray-500 font-medium">Empresa</th>
                <th className="text-left px-4 py-3 text-gray-500 font-medium">Video</th>
                <th className="text-left px-4 py-3 text-gray-500 font-medium">Creado</th>
                <th className="text-left px-4 py-3 text-gray-500 font-medium">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr><td colSpan={8} className="px-4 py-8 text-center text-gray-400">Cargando...</td></tr>
              ) : testimonials.length === 0 ? (
                <tr><td colSpan={8} className="px-4 py-8 text-center text-gray-400">Sin resultados</td></tr>
              ) : (
                testimonials.map((t) => (
                  <tr key={t.id} className="border-t border-gray-100 hover:bg-gray-50">
                    <td className="px-4 py-3">
                      <div>
                        <p className="text-gray-900 font-medium">{t.author_name}</p>
                        {t.author_company && (
                          <p className="text-gray-400 text-xs">{t.author_company}</p>
                        )}
                      </div>
                    </td>
                    <td className="px-4 py-3 text-gray-600">{t.projects?.name || '-'}</td>
                    <td className="px-4 py-3 text-yellow-500 whitespace-nowrap">
                      {'★'.repeat(t.rating)}{'☆'.repeat(5 - t.rating)}
                    </td>
                    <td className="px-4 py-3">
                      <select
                        value={t.status}
                        onChange={(e) => handleChangeStatus(t.id, e.target.value)}
                        className={`text-xs px-2 py-1 rounded-full font-medium border-0 cursor-pointer ${
                          t.status === 'approved' ? 'bg-green-100 text-green-700' :
                          t.status === 'rejected' ? 'bg-red-100 text-red-700' :
                          'bg-yellow-100 text-yellow-700'
                        }`}
                      >
                        <option value="pending">pending</option>
                        <option value="pending_verification">pending_verification</option>
                        <option value="approved">approved</option>
                        <option value="rejected">rejected</option>
                      </select>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        t.is_company_verified ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-500'
                      }`}>
                        {t.is_company_verified ? 'Verificada' : 'No'}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-500">
                      {t.video_url ? (
                        <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full">Si</span>
                      ) : (
                        <span className="text-xs text-gray-400">No</span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-gray-500 whitespace-nowrap">
                      {new Date(t.created_at).toLocaleDateString('es-ES')}
                    </td>
                    <td className="px-4 py-3">
                      <button
                        onClick={() => handleDelete(t.id, t.author_name)}
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
      <p className="text-sm text-gray-400 mt-3">Total: {testimonials.length} testimonios</p>
    </div>
  )
}
