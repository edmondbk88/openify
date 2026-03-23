import Link from 'next/link'

const sampleTestimonials = [
  {
    name: 'Elena R.',
    role: 'Cliente verificado',
    company: 'Florería Bella',
    avatar: 'ER',
    text: 'El servicio fue excelente, superó todas mis expectativas. Totalmente recomendable.',
    rating: 5,
    is_company_verified: true,
  },
  {
    name: 'Pablo M.',
    role: 'Cliente habitual',
    company: 'TechSoluciones',
    avatar: 'PM',
    text: 'Rápido, profesional y con una atención al detalle impresionante. Repetiré seguro.',
    rating: 5,
    is_company_verified: true,
  },
  {
    name: 'Lucía S.',
    role: 'Primera compra',
    company: 'Coaching Vital',
    avatar: 'LS',
    text: 'Todo perfecto desde el primer momento. La calidad del producto es insuperable.',
    rating: 4,
    is_company_verified: false,
  },
  {
    name: 'Marco D.',
    role: 'Cliente verificado',
    company: 'Estudio Creativo Luna',
    avatar: 'MD',
    text: 'Una experiencia de compra fantástica. El envío llegó antes de lo esperado.',
    rating: 5,
    is_company_verified: true,
  },
  {
    name: 'Sara T.',
    role: 'Cliente frecuente',
    company: 'Academia Norte',
    avatar: 'ST',
    text: 'Llevamos meses trabajando con ellos y siempre cumplen. Muy profesionales.',
    rating: 5,
    is_company_verified: false,
  },
  {
    name: 'Andrés G.',
    role: 'Cliente nuevo',
    company: 'Restaurante El Buen Sabor',
    avatar: 'AG',
    text: 'Me encantó el resultado final. Sin duda volveré a confiar en este equipo.',
    rating: 5,
    is_company_verified: false,
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 text-yellow-400">
      {Array.from({ length: rating }).map((_, i) => (
        <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
        </svg>
      ))}
    </div>
  )
}

function VerifiedBadge() {
  return (
    <span className="inline-flex items-center gap-0.5 rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700">
      <svg className="h-3 w-3 text-green-600" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M16.403 12.652a3 3 0 010-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
      </svg>
      Verificada
    </span>
  )
}

function TestimonialCard({ t }: { t: typeof sampleTestimonials[number] }) {
  return (
    <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
      <StarRating rating={t.rating} />
      <p className="mt-2 text-sm leading-relaxed text-gray-600">
        &ldquo;{t.text}&rdquo;
      </p>
      <div className="mt-3 flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-xs font-semibold text-indigo-600">
          {t.avatar}
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-900">{t.name}</p>
          <div className="flex items-center gap-1.5">
            <p className="text-xs text-gray-500">{t.company}</p>
            {t.is_company_verified && <VerifiedBadge />}
          </div>
          <p className="text-xs text-gray-400">{t.role}</p>
        </div>
      </div>
    </div>
  )
}

export function TestimonialsPreview() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Mira Opinafy en acción
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Descubre cómo se ven los testimonios de tus clientes con nuestros diferentes layouts.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl gap-8 lg:grid-cols-3">
          {/* Carousel Layout */}
          <div className="flex flex-col rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
            <span className="mb-1 inline-block text-xs font-semibold uppercase tracking-wider text-indigo-600">
              Layout Carrusel
            </span>
            <p className="mb-4 text-sm text-gray-500">
              Ideal para destacar testimonios uno a uno con transiciones suaves.
            </p>
            <div className="relative flex-1 overflow-hidden rounded-xl border border-gray-200 bg-white p-4">
              <div className="space-y-3">
                <TestimonialCard t={sampleTestimonials[0]} />
              </div>
              <div className="mt-3 flex justify-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-indigo-600" />
                <span className="h-2 w-2 rounded-full bg-gray-300" />
                <span className="h-2 w-2 rounded-full bg-gray-300" />
              </div>
            </div>
          </div>

          {/* Grid Layout */}
          <div className="flex flex-col rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
            <span className="mb-1 inline-block text-xs font-semibold uppercase tracking-wider text-indigo-600">
              Layout Cuadrícula
            </span>
            <p className="mb-4 text-sm text-gray-500">
              Muestra varios testimonios a la vez en un formato organizado.
            </p>
            <div className="flex-1 overflow-hidden rounded-xl border border-gray-200 bg-white p-4">
              <div className="grid grid-cols-2 gap-2">
                {sampleTestimonials.slice(0, 4).map((t) => (
                  <div key={t.name} className="rounded-lg border border-gray-100 bg-gray-50 p-2">
                    <div className="flex gap-0.5 text-yellow-400">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <svg key={i} className="h-3 w-3 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
                        </svg>
                      ))}
                    </div>
                    <p className="mt-1 text-xs text-gray-600 line-clamp-2">&ldquo;{t.text}&rdquo;</p>
                    <div className="mt-1 flex items-center gap-1">
                      <p className="text-xs font-medium text-gray-900">{t.name}</p>
                      {t.is_company_verified && (
                        <svg className="h-3 w-3 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.403 12.652a3 3 0 010-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Wall Layout */}
          <div className="flex flex-col rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
            <span className="mb-1 inline-block text-xs font-semibold uppercase tracking-wider text-indigo-600">
              Layout Muro
            </span>
            <p className="mb-4 text-sm text-gray-500">
              Estilo masonry para crear un muro de testimonios impactante.
            </p>
            <div className="flex-1 overflow-hidden rounded-xl border border-gray-200 bg-white p-4">
              <div className="columns-2 gap-2 space-y-2">
                {sampleTestimonials.slice(1, 5).map((t, idx) => (
                  <div
                    key={t.name}
                    className="break-inside-avoid rounded-lg border border-gray-100 bg-gray-50 p-2"
                  >
                    <div className="flex gap-0.5 text-yellow-400">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <svg key={i} className="h-3 w-3 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
                        </svg>
                      ))}
                    </div>
                    <p className={`mt-1 text-xs text-gray-600 ${idx % 2 === 0 ? 'line-clamp-3' : 'line-clamp-2'}`}>
                      &ldquo;{t.text}&rdquo;
                    </p>
                    <div className="mt-1 flex items-center gap-1">
                      <p className="text-xs font-medium text-gray-900">{t.name}</p>
                      {t.is_company_verified && (
                        <svg className="h-3 w-3 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.403 12.652a3 3 0 010-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-xs italic text-gray-400">
          * Los testimonios mostrados son ejemplos demostrativos de cómo se verían en tu web.
        </p>

        <div className="mt-12 text-center">
          <Link
            href="/plantillas"
            className="inline-flex items-center gap-2 text-base font-semibold text-indigo-600 hover:text-indigo-700"
          >
            Explora las 100 plantillas disponibles
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
