const steps = [
  {
    number: '1',
    title: 'Crea tu proyecto y personaliza tu formulario',
    description:
      'Regístrate gratis, crea un proyecto y configura el formulario de recopilación con tu marca, colores y los campos que necesites.',
  },
  {
    number: '2',
    title: 'Comparte el enlace con tus clientes',
    description:
      'Envía el enlace único de tu formulario por email, WhatsApp o redes sociales. Tus clientes podrán dejar su testimonio en segundos.',
  },
  {
    number: '3',
    title: 'Aprueba los testimonios y muestra tu widget',
    description:
      'Revisa y aprueba los testimonios desde tu panel. Copia el código del widget y pégalo en tu web para mostrarlos al instante.',
  },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-gray-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Así de fácil funciona
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            En tres sencillos pasos tendrás testimonios reales en tu web.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <div className="relative grid gap-12 md:grid-cols-3 md:gap-8">
            {/* Connecting line (desktop) */}
            <div className="absolute left-0 right-0 top-8 hidden h-0.5 bg-indigo-200 md:block" />

            {steps.map((step) => (
              <div key={step.number} className="relative flex flex-col items-center text-center">
                {/* Numbered circle */}
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-600 text-2xl font-bold text-white shadow-lg shadow-indigo-200">
                  {step.number}
                </div>
                <h3 className="mt-6 text-lg font-semibold text-gray-900">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
