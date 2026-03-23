import Link from 'next/link'

const plans = [
  {
    name: 'Gratis',
    price: '0',
    description: 'Perfecto para probar la plataforma.',
    features: [
      '1 proyecto',
      '10 testimonios',
      '2 layouts disponibles',
      'Audio y foto testimonios',
      'Análisis de sentimiento',
      'Health Score gratuito',
      'Verificación de empresa',
      'Marca Opinafy en el widget',
    ],
    cta: 'Empezar Gratis',
    highlighted: false,
  },
  {
    name: 'Mini Sitio',
    price: '5',
    description: 'Ideal para profesionales y freelancers.',
    features: [
      '1 proyecto',
      '20 testimonios',
      'Mini sitio personalizable',
      '30 plantillas por profesión',
      '2 layouts disponibles',
      'Audio y foto testimonios',
      'Análisis de sentimiento',
      'Health Score gratuito',
      'Verificación de empresa',
    ],
    cta: 'Elegir Mini Sitio',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '9',
    description: 'Para negocios que quieren crecer.',
    features: [
      '3 proyectos',
      'Testimonios ilimitados',
      'Todos los layouts + FOMO popup',
      'A/B testing + analytics',
      'Importar desde 7 plataformas',
      'Automatización de solicitudes',
      'Generador posts sociales (IA)',
      '6 plantillas de email',
      'Webhooks (Zapier/Make)',
      'Exportación PDF',
      'Sin marca Opinafy',
      'Soporte prioritario',
    ],
    cta: 'Elegir Pro',
    highlighted: true,
    badge: 'Más Popular',
  },
  {
    name: 'Business',
    price: '19',
    description: 'Para equipos y agencias.',
    features: [
      'Proyectos ilimitados',
      'Testimonios ilimitados',
      'Vídeo testimonios (webcam)',
      '100 plantillas (35 creativas)',
      'Badge certificación verificada',
      'Ranking / Leaderboard',
      '4 modos de vídeo',
      'Smart widget (data-tags)',
      'Respuesta a testimonios',
      'Testimonios destacados/fijados',
      '3 asientos de equipo',
      'Soporte dedicado',
    ],
    cta: 'Elegir Business',
    highlighted: false,
  },
]

export function Pricing() {
  return (
    <section id="precios" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Precios simples y transparentes
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Empieza gratis y escala cuando lo necesites. Sin sorpresas ni costes ocultos.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-8 ${
                plan.highlighted
                  ? 'border-indigo-600 shadow-xl shadow-indigo-100 ring-1 ring-indigo-600'
                  : 'border-gray-200 shadow-sm'
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-indigo-600 px-4 py-1 text-xs font-semibold text-white">
                  {plan.badge}
                </span>
              )}

              <h3 className="text-lg font-semibold text-gray-900">{plan.name}</h3>
              <p className="mt-1 text-sm text-gray-500">{plan.description}</p>

              <div className="mt-6 flex items-baseline">
                <span className="text-4xl font-extrabold text-gray-900">
                  &euro;{plan.price}
                </span>
                <span className="ml-1 text-base text-gray-500">/mes</span>
              </div>

              <ul className="mt-8 flex-1 space-y-3" role="list">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-gray-600">
                    <svg
                      className="mt-0.5 h-5 w-5 flex-shrink-0 text-indigo-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="/registro"
                className={`mt-8 inline-flex h-11 items-center justify-center rounded-lg text-sm font-semibold transition-colors ${
                  plan.highlighted
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                    : 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
