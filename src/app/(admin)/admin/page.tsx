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
    sentimentDataRes,
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
    admin.from('testimonials').select('sentiment_score, sentiment_label, key_phrases').not('sentiment_label', 'is', null),
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

  // Sentiment analysis data
  const sentimentData = (sentimentDataRes.data || []) as { sentiment_score: number | null; sentiment_label: string | null; key_phrases: string[] | null }[]
  const sentimentScores = sentimentData.filter(t => t.sentiment_score != null).map(t => t.sentiment_score as number)
  const avgSentiment = sentimentScores.length > 0
    ? Math.round((sentimentScores.reduce((a, b) => a + b, 0) / sentimentScores.length) * 100) / 100
    : 0
  const sentimentDistribution: Record<string, number> = {}
  for (const t of sentimentData) {
    if (t.sentiment_label) {
      sentimentDistribution[t.sentiment_label] = (sentimentDistribution[t.sentiment_label] || 0) + 1
    }
  }
  const sentimentLabelNames: Record<string, string> = {
    muy_positivo: 'Muy positivo',
    positivo: 'Positivo',
    neutral: 'Neutral',
    negativo: 'Negativo',
    muy_negativo: 'Muy negativo',
  }
  const sentimentLabelColors: Record<string, string> = {
    muy_positivo: 'bg-green-500',
    positivo: 'bg-green-300',
    neutral: 'bg-yellow-400',
    negativo: 'bg-red-300',
    muy_negativo: 'bg-red-500',
  }
  // Count key phrases
  const phraseCount: Record<string, number> = {}
  for (const t of sentimentData) {
    if (t.key_phrases) {
      for (const phrase of t.key_phrases) {
        const words = phrase.toLowerCase().split(/\s+/)
        for (const w of words) {
          if (w.length > 4) {
            phraseCount[w] = (phraseCount[w] || 0) + 1
          }
        }
      }
    }
  }
  const topPhrases = Object.entries(phraseCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)

  const totalImpressions = (impressionsRes.data || []).reduce(
    (sum: number, row: { count: number }) => sum + (row.count || 0),
    0
  )
  const mrr = proCount * 9 + businessCount * 19

  // Fetch storage stats
  const bucketNames = ['blog-images', 'avatars', 'videos', 'logos']
  const bucketResults = await Promise.all(
    bucketNames.map(async (bucketName) => {
      try {
        const { data: files } = await admin.storage
          .from(bucketName)
          .list('', { limit: 1000 })
        const realFiles = (files || []).filter(
          (f) => f.metadata && f.metadata.size != null
        )
        const totalBytes = realFiles.reduce(
          (sum, f) => sum + (f.metadata?.size || 0),
          0
        )
        return {
          name: bucketName,
          fileCount: realFiles.length,
          totalSizeBytes: totalBytes,
          totalSizeMB: Math.round((totalBytes / (1024 * 1024)) * 100) / 100,
        }
      } catch {
        return { name: bucketName, fileCount: 0, totalSizeBytes: 0, totalSizeMB: 0 }
      }
    })
  )
  const storageTotalFiles = bucketResults.reduce((s, b) => s + b.fileCount, 0)
  const storageTotalBytes = bucketResults.reduce((s, b) => s + b.totalSizeBytes, 0)
  const storageTotalMB = Math.round((storageTotalBytes / (1024 * 1024)) * 100) / 100
  const freeTierLimitMB = 1024
  const storageUsagePercent = Math.round((storageTotalMB / freeTierLimitMB) * 10000) / 100

  // Cost estimates
  const activeSubscribers = proCount + businessCount
  const stripeFees = mrr * 0.029 + activeSubscribers * 0.25
  const stripeFeesFmt = Math.round(stripeFees * 100) / 100
  const supabaseTier = storageTotalMB > 1024 || totalUsers > 50000 ? 'Pro (25$/mes)' : 'Free'
  const supabaseCost = supabaseTier === 'Free' ? 0 : 25
  const vercelTier = 'Free'
  const vercelCost = 0
  const totalCosts = stripeFeesFmt + supabaseCost + vercelCost
  const netRevenue = Math.round((mrr - totalCosts) * 100) / 100

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

      {/* Sentiment Overview */}
      <div className="mt-6 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Sentiment Overview</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Average Sentiment */}
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-2">Sentimiento promedio</p>
            <p className={`text-3xl font-bold ${avgSentiment > 0.2 ? 'text-green-600' : avgSentiment < -0.2 ? 'text-red-600' : 'text-yellow-600'}`}>
              {avgSentiment > 0 ? '+' : ''}{avgSentiment}
            </p>
            <p className="text-xs text-gray-400 mt-1">{sentimentScores.length} testimonios analizados</p>
          </div>

          {/* Distribution */}
          <div>
            <p className="text-sm text-gray-500 mb-3">Distribución por sentimiento</p>
            <div className="space-y-2">
              {['muy_positivo', 'positivo', 'neutral', 'negativo', 'muy_negativo'].map(label => {
                const count = sentimentDistribution[label] || 0
                const total = sentimentScores.length || 1
                const pct = Math.round((count / total) * 100)
                return (
                  <div key={label} className="flex items-center gap-2 text-sm">
                    <span className="w-24 text-gray-600 text-xs">{sentimentLabelNames[label]}</span>
                    <div className="flex-1 bg-gray-100 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${sentimentLabelColors[label]}`}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    <span className="text-xs text-gray-500 w-8 text-right">{count}</span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Top Key Phrases */}
          <div>
            <p className="text-sm text-gray-500 mb-3">Palabras clave frecuentes</p>
            {topPhrases.length > 0 ? (
              <div className="flex flex-wrap gap-1.5">
                {topPhrases.map(([word, count]) => (
                  <span
                    key={word}
                    className="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs font-medium text-indigo-700"
                  >
                    {word}
                    <span className="text-indigo-400">({count})</span>
                  </span>
                ))}
              </div>
            ) : (
              <p className="text-xs text-gray-400">Sin datos de sentimiento aún</p>
            )}
          </div>
        </div>
      </div>

      {/* Storage & Costs */}
      <div className="grid lg:grid-cols-2 gap-6 mt-6">
        {/* Storage Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Almacenamiento Supabase</h2>
          <div className="space-y-3 mb-4">
            {bucketResults.map((b) => (
              <div key={b.name} className="flex items-center justify-between text-sm">
                <span className="text-gray-700 font-medium">{b.name}</span>
                <span className="text-gray-500">
                  {b.fileCount} archivos &middot; {b.totalSizeMB} MB
                </span>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-100 pt-4">
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="font-semibold text-gray-900">
                Total: {storageTotalFiles} archivos &middot; {storageTotalMB} MB
              </span>
              <span className="text-gray-500">{freeTierLimitMB} MB free tier</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className={`h-3 rounded-full transition-all ${
                  storageUsagePercent > 80 ? 'bg-red-500' :
                  storageUsagePercent > 50 ? 'bg-yellow-500' :
                  'bg-green-500'
                }`}
                style={{ width: `${Math.min(storageUsagePercent, 100)}%` }}
              />
            </div>
            <p className="text-xs text-gray-500 mt-1">{storageUsagePercent}% usado</p>
          </div>
        </div>

        {/* Costs Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Costes Estimados</h2>
          <div className="space-y-3 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-gray-700">MRR suscripciones</span>
              <span className="font-semibold text-green-600">+{mrr}&euro;/mes</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Stripe (2.9% + 0.25&euro;/tx)</span>
              <span className="font-semibold text-red-500">-{stripeFeesFmt}&euro;/mes</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Supabase ({supabaseTier})</span>
              <span className={`font-semibold ${supabaseCost > 0 ? 'text-red-500' : 'text-gray-500'}`}>
                {supabaseCost > 0 ? `-${supabaseCost}\u20AC/mes` : 'Gratis'}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Vercel ({vercelTier})</span>
              <span className={`font-semibold ${vercelCost > 0 ? 'text-red-500' : 'text-gray-500'}`}>
                {vercelCost > 0 ? `-${vercelCost}\u20AC/mes` : 'Gratis'}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Resend (email)</span>
              <span className="font-semibold text-gray-500">Gratis (3000/mes)</span>
            </div>
            <div className="border-t border-gray-100 pt-3 flex items-center justify-between">
              <span className="font-semibold text-gray-900">Beneficio neto estimado</span>
              <span className={`text-lg font-bold ${netRevenue >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {netRevenue >= 0 ? '+' : ''}{netRevenue}&euro;/mes
              </span>
            </div>
          </div>
          <div className="mt-4 p-3 bg-gray-50 rounded-lg">
            <p className="text-xs text-gray-500">
              <strong>Limites free tier:</strong> Supabase: 1GB storage, 50K auth, 500MB DB &middot;
              Stripe: 2.9% + 0.25&euro;/tx &middot;
              Vercel: 100GB bandwidth &middot;
              Resend: 3000 emails/mes
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
