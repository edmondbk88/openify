import { createAdminClient } from '@/lib/supabase/admin'

export default async function AdminConfiguraciónPage() {
  const admin = createAdminClient()

  const [profilesRes, projectsRes, testimonialsRes] = await Promise.all([
    admin.from('profiles').select('*', { count: 'exact', head: true }),
    admin.from('projects').select('*', { count: 'exact', head: true }),
    admin.from('testimonials').select('*', { count: 'exact', head: true }),
  ])

  const stats = {
    users: profilesRes.count || 0,
    projects: projectsRes.count || 0,
    testimonials: testimonialsRes.count || 0,
  }

  const links = [
    {
      label: 'Supabase Dashboard',
      url: 'https://supabase.com/dashboard/project/rckjevsqxkfixkdloqjv',
      description: 'Base de datos, auténticacion, storage',
    },
    {
      label: 'Stripe Dashboard',
      url: 'https://dashboard.stripe.com',
      description: 'Pagos, suscripciones, facturas',
    },
    {
      label: 'Vercel Dashboard',
      url: 'https://vercel.com',
      description: 'Deploys, dominios, logs',
    },
    {
      label: 'Google Analytics',
      url: 'https://analytics.google.com',
      description: 'Trafico, conversiones, audiencia',
    },
    {
      label: 'Google Search Console',
      url: 'https://search.google.com/search-console',
      description: 'Indexacion, SEO, rendimiento',
    },
  ]

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Configuración</h1>

      {/* System Stats */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Estado del sistema</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <p className="text-3xl font-bold text-gray-900">{stats.users}</p>
            <p className="text-sm text-gray-500 mt-1">Usuarios</p>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <p className="text-3xl font-bold text-gray-900">{stats.projects}</p>
            <p className="text-sm text-gray-500 mt-1">Proyectos</p>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <p className="text-3xl font-bold text-gray-900">{stats.testimonials}</p>
            <p className="text-sm text-gray-500 mt-1">Testimonios</p>
          </div>
        </div>
      </div>

      {/* Environment */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Entorno</h2>
        <div className="space-y-3 text-sm">
          <div className="flex justify-between py-2 border-b border-gray-100">
            <span className="text-gray-500">Supabase Project ID</span>
            <span className="text-gray-900 font-mono">rckjevsqxkfixkdloqjv</span>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-100">
            <span className="text-gray-500">Dominio</span>
            <span className="text-gray-900">opinafy.com</span>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-100">
            <span className="text-gray-500">Framework</span>
            <span className="text-gray-900">Next.js 14 (App Router)</span>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-100">
            <span className="text-gray-500">Base de datos</span>
            <span className="text-gray-900">Supabase (PostgreSQL)</span>
          </div>
          <div className="flex justify-between py-2">
            <span className="text-gray-500">Pagos</span>
            <span className="text-gray-900">Stripe</span>
          </div>
        </div>
      </div>

      {/* External Links */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Enlaces rápidos</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors group"
            >
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">
                  {link.label}
                </p>
                <p className="text-xs text-gray-400 mt-0.5">{link.description}</p>
              </div>
              <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
