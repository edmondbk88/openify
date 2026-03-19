import { createAdminClient } from '@/lib/supabase/admin'

export default async function AdminDashboardPage() {
  const admin = createAdminClient()

  // Fetch all stats in parallel
  const [
    profilesRes,
    projectsRes,
    testimonialsRes,
    freeRes,
    proRes,
    businessRes,
    pendingRes,
    approvedRes,
    rejectedRes,
    recentUsersRes,
    recentTestimonialsRes,
    impressionsRes,
  ] = await Promise.all([
    admin.from('profiles').select('*', { count: 'exact', head: true }),
    admin.from('projects').select('*', { count: 'exact', head: true }),
    admin.from('testimonials').select('*', { count: 'exact', head: true }),
    admin.from('profiles').select('*', { count: 'exact', head: true }).eq('plan', 'free'),
    admin.from('profiles').select('*', { count: 'exact', head: true }).eq('plan', 'pro'),
    admin.from('profiles').select('*', { count: 'exact', head: true }).eq('plan', 'business'),
    admin.from('testimonials').select('*', { count: 'exact', head: true }).eq('status', 'pending'),
    admin.from('testimonials').select('*', { count: 'exact', head: true }).eq('status', 'approved'),
    admin.from('testimonials').select('*', { count: 'exact', head: true }).eq('status', 'rejected'),
    admin.from('profiles').select('id, full_name, email, plan, is_admin, created_at').order('created_at', { ascending: false }).limit(10),
    admin.from('testimonials').select('id, author_name, content, rating, status, created_at, project_id').order('created_at', { ascending: false }).limit(10),
    admin.from('widget_impressions').select('count').gte('impression_date', new Date(new Date().getFullYear(), new Date().getMonth(), 1).toISOString()),
  ])

  const totalUsers = profilesRes.count || 0
  const totalProjects = projectsRes.count || 0
  const totalTestimonials = testimonialsRes.count || 0
  const freeCount = freeRes.count || 0
  const proCount = proRes.count || 0
  const businessCount = businessRes.count || 0
  const pendingCount = pendingRes.count || 0
  const approvedCount = approvedRes.count || 0
  const rejectedCount = rejectedRes.count || 0
  const recentUsers = recentUsersRes.data || []
  const recentTestimonials = recentTestimonialsRes.data || []

  const totalImpressions = (impressionsRes.data || []).reduce(
    (sum: number, row: { count: number }) => sum + (row.count || 0),
    0
  )
  const mrr = proCount * 9 + businessCount * 19

  const stats = [
    { label: 'Total usuarios', value: totalUsers, color: 'bg-blue-500' },
    { label: 'Proyectos', value: totalProjects, color: 'bg-green-500' },
    { label: 'Testimonios', value: totalTestimonials, color: 'bg-purple-500' },
    { label: 'MRR estimado', value: `${mrr}\u20AC`, color: 'bg-yellow-500' },
    { label: 'Plan Free', value: freeCount, color: 'bg-gray-500' },
    { label: 'Plan Pro', value: proCount, color: 'bg-indigo-500' },
    { label: 'Plan Business', value: businessCount, color: 'bg-pink-500' },
    { label: 'Impresiones (mes)', value: totalImpressions, color: 'bg-teal-500' },
    { label: 'Pendientes', value: pendingCount, color: 'bg-orange-500' },
    { label: 'Aprobados', value: approvedCount, color: 'bg-emerald-500' },
    { label: 'Rechazados', value: rejectedCount, color: 'bg-red-500' },
  ]

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard de Administracion</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
            <div className="flex items-center gap-3">
              <div className={`w-3 h-3 rounded-full ${stat.color}`} />
              <p className="text-sm text-gray-500">{stat.label}</p>
            </div>
            <p className="text-2xl font-bold text-gray-900 mt-2">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Recent Users */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Registros recientes</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left py-2 text-gray-500 font-medium">Nombre</th>
                  <th className="text-left py-2 text-gray-500 font-medium">Email</th>
                  <th className="text-left py-2 text-gray-500 font-medium">Plan</th>
                  <th className="text-left py-2 text-gray-500 font-medium">Fecha</th>
                </tr>
              </thead>
              <tbody>
                {recentUsers.map((u: { id: string; full_name: string | null; email: string; plan: string; is_admin: boolean; created_at: string }) => (
                  <tr key={u.id} className="border-b border-gray-50">
                    <td className="py-2 text-gray-900">{u.full_name || '-'}</td>
                    <td className="py-2 text-gray-600">{u.email}</td>
                    <td className="py-2">
                      <span className={`inline-block text-xs px-2 py-0.5 rounded-full font-medium ${
                        u.plan === 'business' ? 'bg-pink-100 text-pink-700' :
                        u.plan === 'pro' ? 'bg-indigo-100 text-indigo-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {u.plan}
                      </span>
                    </td>
                    <td className="py-2 text-gray-500">{new Date(u.created_at).toLocaleDateString('es-ES')}</td>
                  </tr>
                ))}
                {recentUsers.length === 0 && (
                  <tr><td colSpan={4} className="py-4 text-center text-gray-400">Sin usuarios</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Testimonials */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Testimonios recientes</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left py-2 text-gray-500 font-medium">Autor</th>
                  <th className="text-left py-2 text-gray-500 font-medium">Estado</th>
                  <th className="text-left py-2 text-gray-500 font-medium">Rating</th>
                  <th className="text-left py-2 text-gray-500 font-medium">Fecha</th>
                </tr>
              </thead>
              <tbody>
                {recentTestimonials.map((t: { id: string; author_name: string; content: string; rating: number; status: string; created_at: string }) => (
                  <tr key={t.id} className="border-b border-gray-50">
                    <td className="py-2 text-gray-900">{t.author_name}</td>
                    <td className="py-2">
                      <span className={`inline-block text-xs px-2 py-0.5 rounded-full font-medium ${
                        t.status === 'approved' ? 'bg-green-100 text-green-700' :
                        t.status === 'rejected' ? 'bg-red-100 text-red-700' :
                        'bg-yellow-100 text-yellow-700'
                      }`}>
                        {t.status}
                      </span>
                    </td>
                    <td className="py-2 text-gray-600">{'★'.repeat(t.rating)}{'☆'.repeat(5 - t.rating)}</td>
                    <td className="py-2 text-gray-500">{new Date(t.created_at).toLocaleDateString('es-ES')}</td>
                  </tr>
                ))}
                {recentTestimonials.length === 0 && (
                  <tr><td colSpan={4} className="py-4 text-center text-gray-400">Sin testimonios</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
