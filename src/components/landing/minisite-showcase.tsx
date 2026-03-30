import Link from 'next/link'

function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg className="h-5 w-5 shrink-0 text-emerald-400" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  )
}

function FakeMiniSite() {
  return (
    <div className="mx-auto w-full max-w-md overflow-hidden rounded-xl border border-white/20 bg-white shadow-2xl">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 border-b border-gray-100 bg-gray-50 px-4 py-2.5">
        <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
        <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
        <div className="ml-3 flex-1 rounded-md bg-white px-3 py-1 text-xs text-gray-500">
          opinafy.com/s/laura-coach
        </div>
      </div>

      {/* Mini site content */}
      <div className="bg-gradient-to-b from-indigo-50 to-white p-6">
        {/* Header */}
        <div className="text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-indigo-100 text-lg font-bold text-indigo-600">
            LM
          </div>
          <h3 className="mt-3 text-base font-bold text-gray-900">Laura Martinez</h3>
          <p className="text-xs text-gray-500">Coach de Negocios</p>
          <div className="mt-1.5 flex items-center justify-center gap-0.5">
            {[1, 2, 3, 4, 5].map((i) => (
              <StarIcon key={i} className="h-3.5 w-3.5 text-amber-400" />
            ))}
            <span className="ml-1 text-xs font-medium text-gray-600">4.9</span>
            <span className="text-xs text-gray-500">(47)</span>
          </div>
        </div>

        {/* Testimonial cards */}
        <div className="mt-5 space-y-3">
          {[
            { name: 'Pedro R.', text: 'Gracias a Laura he triplicado mis ingresos en 6 meses.', rating: 5, verified: true },
            { name: 'Ana G.', text: 'Sesiones claras y muy bien estructuradas. 100% recomendable.', rating: 5, verified: false },
            { name: 'Carlos M.', text: 'Excelente profesional, resultados desde la primera semana.', rating: 4, verified: true },
          ].map((t, i) => (
            <div key={i} className="rounded-lg border border-gray-100 bg-white p-3 shadow-sm">
              <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <StarIcon key={s} className={`h-3 w-3 ${s <= t.rating ? 'text-amber-400' : 'text-gray-200'}`} />
                ))}
              </div>
              <p className="mt-1.5 text-xs leading-relaxed text-gray-600">&ldquo;{t.text}&rdquo;</p>
              <div className="mt-2 flex items-center gap-1">
                <span className="text-xs font-medium text-gray-800">{t.name}</span>
                {t.verified && (
                  <svg className="h-3 w-3 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.403 12.652a3 3 0 010-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const FEATURES = [
  {
    title: 'URL personalizada',
    description: 'opinafy.com/s/tu-nombre',
  },
  {
    title: '30 plantillas por profesión',
    description: 'Disenos adaptados a cada sector profesional',
  },
  {
    title: 'Verificación de empresa automática',
    description: 'Sello de confianza para tus clientes',
  },
  {
    title: 'QR code + compartir por WhatsApp',
    description: 'Recopila testimonios sin esfuerzo',
  },
  {
    title: 'Desde solo 5 EUR/mes',
    description: 'Planes accesibles para cualquier profesional',
  },
]

export function MiniSiteShowcase() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-900 px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-14 text-center">
          <span className="inline-block rounded-full bg-indigo-500/20 px-4 py-1.5 text-sm font-semibold text-indigo-200">
            Mini Sitio Opinafy
          </span>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Tu página profesional de testimonios
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-indigo-200">
            No tienes web? No la necesitas. Con Opinafy tu mini sitio recopila y muestra testimonios
            verificados. Perfecto para profesionales independientes.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: mockup */}
          <div className="order-2 lg:order-1">
            <FakeMiniSite />
          </div>

          {/* Right: features */}
          <div className="order-1 lg:order-2">
            <ul className="space-y-5">
              {FEATURES.map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckIcon />
                  <div>
                    <p className="text-base font-semibold text-white">{f.title}</p>
                    <p className="mt-0.5 text-sm text-indigo-200">{f.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <Link
                href="/registro"
                className="inline-flex h-12 items-center rounded-lg bg-white px-8 text-base font-semibold text-indigo-700 shadow-lg transition-all hover:bg-indigo-50 hover:shadow-xl"
              >
                Crea tu mini sitio gratis
              </Link>
              <p className="mt-3 text-sm text-indigo-300">
                Sin tarjeta de crédito. Configura tu página en 2 minutos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
