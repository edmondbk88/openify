import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Convierte las opiniones de tus clientes en tu mejor herramienta de ventas
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-600 sm:text-xl">
            Recopila, gestiona y muestra testimonios auténticos en tu web con widgets
            personalizables. Aumenta la confianza de tus visitantes y mejora tus conversiones
            sin esfuerzo.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/registro"
              className="inline-flex h-12 w-full items-center justify-center rounded-lg bg-indigo-600 px-8 text-base font-semibold text-white shadow-lg shadow-indigo-200 transition-all hover:bg-indigo-700 hover:shadow-xl hover:shadow-indigo-200 sm:w-auto"
            >
              Empezar Gratis
            </Link>
            <a
              href="#como-funciona"
              className="inline-flex h-12 w-full items-center justify-center rounded-lg border border-gray-300 bg-white px-8 text-base font-semibold text-gray-700 transition-colors hover:bg-gray-50 sm:w-auto"
            >
              Ver Demo
            </a>
          </div>
        </div>

        {/* Widget mockup area */}
        <div className="mx-auto mt-16 max-w-4xl sm:mt-20">
          <div className="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-2xl shadow-indigo-100 sm:p-10">
            {/* Fake browser chrome */}
            <div className="mb-6 flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
              <span className="ml-3 h-6 flex-1 rounded-md bg-gray-100" />
            </div>

            {/* Product demo label */}
            <p className="mb-4 text-center text-xs font-medium uppercase tracking-wider text-indigo-500">
              Vista previa del widget
            </p>

            {/* Mockup testimonial cards */}
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                {
                  name: 'María López',
                  role: 'CEO, Florería Bella',
                  text: '"Opinafy nos ayudó a mostrar las reseñas de nuestros clientes de forma profesional."',
                },
                {
                  name: 'Carlos Ruiz',
                  role: 'Fundador, TechSoluciones',
                  text: '"Desde que instalamos el widget, nuestras conversiones aumentaron un 30%."',
                },
                {
                  name: 'Ana García',
                  role: 'Directora, Estudio Creativo',
                  text: '"La integración fue increíblemente fácil. En 5 minutos lo teníamos funcionando."',
                },
              ].map((t) => (
                <div
                  key={t.name}
                  className="rounded-xl border border-gray-100 bg-gray-50 p-4"
                >
                  <div className="mb-2 flex text-yellow-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">{t.text}</p>
                  <div className="mt-3">
                    <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-80 w-80 rounded-full bg-indigo-100 opacity-40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-purple-100 opacity-40 blur-3xl" />
    </section>
  )
}
