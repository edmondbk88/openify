import Link from 'next/link'

export function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-indigo-600 py-20 sm:py-28">
      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Empieza a recopilar testimonios hoy
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-indigo-100">
          Únete a cientos de negocios que ya usan Opinafy para convertir las opiniones de
          sus clientes en ventas. Sin tarjeta de crédito.
        </p>
        <div className="mt-10">
          <Link
            href="/registro"
            className="inline-flex h-12 items-center rounded-lg bg-white px-8 text-base font-semibold text-indigo-600 shadow-lg transition-all hover:bg-indigo-50 hover:shadow-xl"
          >
            Crear cuenta gratis
          </Link>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-indigo-500 opacity-30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-indigo-700 opacity-30 blur-3xl" />
    </section>
  )
}
