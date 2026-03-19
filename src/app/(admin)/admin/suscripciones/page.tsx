import { createAdminClient } from '@/lib/supabase/admin'

export default async function AdminSuscripcionesPage() {
  const admin = createAdminClient()

  const [freeRes, proRes, businessRes, payingUsersRes] = await Promise.all([
    admin.from('profiles').select('*', { count: 'exact', head: true }).eq('plan', 'free'),
    admin.from('profiles').select('*', { count: 'exact', head: true }).eq('plan', 'pro'),
    admin.from('profiles').select('*', { count: 'exact', head: true }).eq('plan', 'business'),
    admin
      .from('profiles')
      .select('id, full_name, email, plan, stripe_customer_id, created_at')
      .in('plan', ['pro', 'business'])
      .order('created_at', { ascending: false }),
  ])

  const freeCount = freeRes.count || 0
  const proCount = proRes.count || 0
  const businessCount = businessRes.count || 0
  const payingUsers = payingUsersRes.data || []

  const mrrPro = proCount * 9
  const mrrBusiness = businessCount * 19
  const mrrTotal = mrrPro + mrrBusiness

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Suscripciones</h1>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
          <p className="text-sm text-gray-500">Usuarios Free</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{freeCount}</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
          <p className="text-sm text-gray-500">Usuarios Pro</p>
          <p className="text-2xl font-bold text-indigo-600 mt-1">{proCount}</p>
          <p className="text-xs text-gray-400 mt-1">MRR: {mrrPro}&euro;/mes</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
          <p className="text-sm text-gray-500">Usuarios Business</p>
          <p className="text-2xl font-bold text-pink-600 mt-1">{businessCount}</p>
          <p className="text-xs text-gray-400 mt-1">MRR: {mrrBusiness}&euro;/mes</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
          <p className="text-sm text-gray-500">MRR Total</p>
          <p className="text-2xl font-bold text-green-600 mt-1">{mrrTotal}&euro;</p>
          <p className="text-xs text-gray-400 mt-1">{proCount + businessCount} suscriptores</p>
        </div>
      </div>

      {/* Paying Users Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Usuarios de pago</h2>
        {payingUsers.length === 0 ? (
          <p className="text-gray-400 text-sm">No hay usuarios de pago todavia.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left py-2 text-gray-500 font-medium">Nombre</th>
                  <th className="text-left py-2 text-gray-500 font-medium">Email</th>
                  <th className="text-left py-2 text-gray-500 font-medium">Plan</th>
                  <th className="text-left py-2 text-gray-500 font-medium">Stripe ID</th>
                  <th className="text-left py-2 text-gray-500 font-medium">Desde</th>
                </tr>
              </thead>
              <tbody>
                {payingUsers.map((u: { id: string; full_name: string | null; email: string; plan: string; stripe_customer_id: string | null; created_at: string }) => (
                  <tr key={u.id} className="border-b border-gray-50">
                    <td className="py-2 text-gray-900">{u.full_name || '-'}</td>
                    <td className="py-2 text-gray-600">{u.email}</td>
                    <td className="py-2">
                      <span className={`inline-block text-xs px-2 py-0.5 rounded-full font-medium ${
                        u.plan === 'business' ? 'bg-pink-100 text-pink-700' : 'bg-indigo-100 text-indigo-700'
                      }`}>
                        {u.plan}
                      </span>
                    </td>
                    <td className="py-2 text-gray-500 font-mono text-xs">{u.stripe_customer_id || '-'}</td>
                    <td className="py-2 text-gray-500">{new Date(u.created_at).toLocaleDateString('es-ES')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
