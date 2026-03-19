const testimonials = [
  {
    name: 'Laura Martínez',
    role: 'Fundadora de Dulce Hogar',
    avatar: 'LM',
    text: 'Desde que instalamos Opinafy, las reseñas de nuestros clientes se muestran de forma profesional en nuestra tienda online. Las ventas han aumentado un 25% en solo dos meses.',
    rating: 5,
  },
  {
    name: 'Javier Fernández',
    role: 'CEO de DigitalPro Agency',
    avatar: 'JF',
    text: 'Gestionar los testimonios de nuestros clientes era un caos. Con Opinafy todo está centralizado y el widget se integra sin problemas en las webs de nuestros clientes.',
    rating: 5,
  },
  {
    name: 'Sofía Herrera',
    role: 'Directora de Clínica Bienestar',
    avatar: 'SH',
    text: 'Nuestros pacientes confían más en nosotros gracias a los testimonios visibles en la web. La instalación fue rápida y el diseño es impecable. Totalmente recomendable.',
    rating: 5,
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 text-yellow-400">
      {Array.from({ length: rating }).map((_, i) => (
        <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
        </svg>
      ))}
    </div>
  )
}

export function TestimonialsPreview() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Lo que dicen nuestros usuarios
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Negocios reales que ya confían en Opinafy para mostrar sus testimonios.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <StarRating rating={t.rating} />
              <p className="mt-4 flex-1 text-sm leading-relaxed text-gray-600">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-sm font-semibold text-indigo-600">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
