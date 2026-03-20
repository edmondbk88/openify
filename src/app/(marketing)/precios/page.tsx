export const revalidate = 60 // revalidate every 60 seconds

import type { Metadata } from 'next'
import { Navbar } from '@/components/landing/navbar'
import { Pricing } from '@/components/landing/pricing'
import { Faq } from '@/components/landing/faq'
import { Footer } from '@/components/landing/footer'
import { webPageSchema, breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Precios - Opinafy',
  description:
    'Consulta los planes y precios de Opinafy. Empieza gratis y escala según tus necesidades. Planes flexibles para autónomos, pequeñas empresas y agencias.',
  alternates: {
    canonical: 'https://opinafy.com/precios',
  },
  openGraph: {
    title: 'Precios - Opinafy',
    description:
      'Planes flexibles para recopilar y mostrar testimonios de clientes. Empieza gratis.',
    url: 'https://opinafy.com/precios',
    type: 'website',
    siteName: 'Opinafy',
    locale: 'es_ES',
    images: [{ url: '/og.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Precios - Opinafy',
    description:
      'Planes flexibles para recopilar y mostrar testimonios de clientes. Empieza gratis.',
    images: ['/og.png'],
  },
}

export default function PreciosPage() {
  const pageJsonLd = webPageSchema({
    name: 'Precios - Opinafy',
    url: 'https://opinafy.com/precios',
    description:
      'Consulta los planes y precios de Opinafy. Empieza gratis y escala según tus necesidades.',
  })

  const breadcrumbJsonLd = breadcrumbSchema([
    { name: 'Inicio', url: 'https://opinafy.com' },
    { name: 'Precios', url: 'https://opinafy.com/precios' },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Navbar />
      <div className="pt-16">
        {/* H1 Header */}
        <section className="bg-white px-4 pb-0 pt-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Planes y Precios
            </h1>
            <p className="mt-4 text-lg text-gray-600 sm:text-xl">
              Elige el plan perfecto para tu negocio. Empieza gratis, escala cuando lo necesites.
            </p>
          </div>
        </section>

        <Pricing />
      </div>

      {/* Feature Comparison Table */}
      <section className="bg-gray-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
            Comparativa detallada de planes
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="px-6 py-4 font-semibold text-gray-900">Característica</th>
                  <th className="px-6 py-4 text-center font-semibold text-gray-900">Gratis</th>
                  <th className="px-6 py-4 text-center font-semibold text-teal-600">Mini Sitio</th>
                  <th className="px-6 py-4 text-center font-semibold text-indigo-600">Pro</th>
                  <th className="px-6 py-4 text-center font-semibold text-gray-900">Business</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-6 py-3.5 text-gray-700">Proyectos</td>
                  <td className="px-6 py-3.5 text-center text-gray-600">1</td>
                  <td className="px-6 py-3.5 text-center text-gray-600">1</td>
                  <td className="px-6 py-3.5 text-center text-gray-600">3</td>
                  <td className="px-6 py-3.5 text-center text-gray-600">Ilimitados</td>
                </tr>
                <tr className="bg-gray-50/50">
                  <td className="px-6 py-3.5 text-gray-700">Testimonios</td>
                  <td className="px-6 py-3.5 text-center text-gray-600">10</td>
                  <td className="px-6 py-3.5 text-center text-gray-600">20</td>
                  <td className="px-6 py-3.5 text-center text-gray-600">Ilimitados</td>
                  <td className="px-6 py-3.5 text-center text-gray-600">Ilimitados</td>
                </tr>
                <tr>
                  <td className="px-6 py-3.5 text-gray-700">Mini sitio público</td>
                  <td className="px-6 py-3.5 text-center text-gray-400">&mdash;</td>
                  <td className="px-6 py-3.5 text-center text-teal-600">&#10003;</td>
                  <td className="px-6 py-3.5 text-center text-indigo-600">&#10003;</td>
                  <td className="px-6 py-3.5 text-center text-indigo-600">&#10003;</td>
                </tr>
                <tr className="bg-gray-50/50">
                  <td className="px-6 py-3.5 text-gray-700">Layouts disponibles</td>
                  <td className="px-6 py-3.5 text-center text-gray-600">2</td>
                  <td className="px-6 py-3.5 text-center text-gray-600">2</td>
                  <td className="px-6 py-3.5 text-center text-gray-600">Todos</td>
                  <td className="px-6 py-3.5 text-center text-gray-600">Todos</td>
                </tr>
                <tr>
                  <td className="px-6 py-3.5 text-gray-700">Plantillas premium</td>
                  <td className="px-6 py-3.5 text-center text-gray-400">&mdash;</td>
                  <td className="px-6 py-3.5 text-center text-gray-400">&mdash;</td>
                  <td className="px-6 py-3.5 text-center text-indigo-600">&#10003;</td>
                  <td className="px-6 py-3.5 text-center text-indigo-600">&#10003;</td>
                </tr>
                <tr className="bg-gray-50/50">
                  <td className="px-6 py-3.5 text-gray-700">Sin marca Opinafy</td>
                  <td className="px-6 py-3.5 text-center text-gray-400">&mdash;</td>
                  <td className="px-6 py-3.5 text-center text-gray-400">&mdash;</td>
                  <td className="px-6 py-3.5 text-center text-indigo-600">&#10003;</td>
                  <td className="px-6 py-3.5 text-center text-indigo-600">&#10003;</td>
                </tr>
                <tr>
                  <td className="px-6 py-3.5 text-gray-700">Testimonios en vídeo</td>
                  <td className="px-6 py-3.5 text-center text-gray-400">&mdash;</td>
                  <td className="px-6 py-3.5 text-center text-gray-400">&mdash;</td>
                  <td className="px-6 py-3.5 text-center text-gray-400">&mdash;</td>
                  <td className="px-6 py-3.5 text-center text-indigo-600">&#10003;</td>
                </tr>
                <tr className="bg-gray-50/50">
                  <td className="px-6 py-3.5 text-gray-700">Asientos de equipo</td>
                  <td className="px-6 py-3.5 text-center text-gray-600">1</td>
                  <td className="px-6 py-3.5 text-center text-gray-600">1</td>
                  <td className="px-6 py-3.5 text-center text-gray-600">1</td>
                  <td className="px-6 py-3.5 text-center text-gray-600">3</td>
                </tr>
                <tr>
                  <td className="px-6 py-3.5 text-gray-700">Soporte prioritario</td>
                  <td className="px-6 py-3.5 text-center text-gray-400">&mdash;</td>
                  <td className="px-6 py-3.5 text-center text-gray-400">&mdash;</td>
                  <td className="px-6 py-3.5 text-center text-indigo-600">&#10003;</td>
                  <td className="px-6 py-3.5 text-center text-indigo-600">&#10003;</td>
                </tr>
                <tr className="bg-gray-50/50">
                  <td className="px-6 py-3.5 text-gray-700">Soporte dedicado</td>
                  <td className="px-6 py-3.5 text-center text-gray-400">&mdash;</td>
                  <td className="px-6 py-3.5 text-center text-gray-400">&mdash;</td>
                  <td className="px-6 py-3.5 text-center text-gray-400">&mdash;</td>
                  <td className="px-6 py-3.5 text-center text-indigo-600">&#10003;</td>
                </tr>
                <tr>
                  <td className="px-6 py-3.5 text-gray-700">Exportación de datos</td>
                  <td className="px-6 py-3.5 text-center text-gray-400">&mdash;</td>
                  <td className="px-6 py-3.5 text-center text-gray-400">&mdash;</td>
                  <td className="px-6 py-3.5 text-center text-gray-400">&mdash;</td>
                  <td className="px-6 py-3.5 text-center text-indigo-600">&#10003;</td>
                </tr>
                <tr className="bg-gray-50/50">
                  <td className="px-6 py-3.5 text-gray-700">Personalización CSS</td>
                  <td className="px-6 py-3.5 text-center text-gray-400">&mdash;</td>
                  <td className="px-6 py-3.5 text-center text-gray-400">&mdash;</td>
                  <td className="px-6 py-3.5 text-center text-indigo-600">&#10003;</td>
                  <td className="px-6 py-3.5 text-center text-indigo-600">&#10003;</td>
                </tr>
                <tr>
                  <td className="px-6 py-3.5 font-medium text-gray-900">Precio</td>
                  <td className="px-6 py-3.5 text-center font-semibold text-gray-900">&euro;0/mes</td>
                  <td className="px-6 py-3.5 text-center font-semibold text-teal-600">&euro;5/mes</td>
                  <td className="px-6 py-3.5 text-center font-semibold text-indigo-600">&euro;9/mes</td>
                  <td className="px-6 py-3.5 text-center font-semibold text-gray-900">&euro;19/mes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Garantía de devolución de 14 días
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            14 días de garantía de devolución. Si no estás satisfecho, te devolvemos tu dinero sin preguntas.
            Queremos que pruebes Opinafy con total tranquilidad y sin ningún riesgo.
          </p>
        </div>
      </section>

      {/* Pricing FAQ */}
      <section id="faq" className="bg-gray-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-10 text-center text-3xl font-bold text-gray-900">
            Preguntas frecuentes sobre precios
          </h2>
          <div className="space-y-4">
            <details className="group rounded-xl border border-gray-200 bg-white">
              <summary className="flex cursor-pointer items-center justify-between px-6 py-4 text-base font-medium text-gray-900">
                Puedo cambiar de plan en cualquier momento?
                <svg className="h-5 w-5 shrink-0 text-gray-400 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm leading-relaxed text-gray-600">
                Sí, puedes actualizar o reducir tu plan en cualquier momento desde tu panel de control.
                Si actualizas, el cambio se aplica inmediatamente y se prorratea el coste. Si reduces tu plan,
                el cambio se aplicará al inicio del siguiente ciclo de facturación.
              </div>
            </details>
            <details className="group rounded-xl border border-gray-200 bg-white">
              <summary className="flex cursor-pointer items-center justify-between px-6 py-4 text-base font-medium text-gray-900">
                Qué métodos de pago aceptan?
                <svg className="h-5 w-5 shrink-0 text-gray-400 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm leading-relaxed text-gray-600">
                Aceptamos todas las tarjetas de crédito y débito principales (Visa, Mastercard, American Express).
                Los pagos se procesan de forma segura a través de Stripe. No almacenamos datos de tarjetas en nuestros servidores.
              </div>
            </details>
            <details className="group rounded-xl border border-gray-200 bg-white">
              <summary className="flex cursor-pointer items-center justify-between px-6 py-4 text-base font-medium text-gray-900">
                Hay descuento por pago anual?
                <svg className="h-5 w-5 shrink-0 text-gray-400 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm leading-relaxed text-gray-600">
                Sí, ofrecemos un descuento del 20% en todos los planes si eliges facturación anual.
                Esto significa que el plan Pro pasa de 9&euro;/mes a 7,20&euro;/mes y el plan Business
                de 19&euro;/mes a 15,20&euro;/mes. Puedes cambiar entre facturación mensual y anual en cualquier momento.
              </div>
            </details>
            <details className="group rounded-xl border border-gray-200 bg-white">
              <summary className="flex cursor-pointer items-center justify-between px-6 py-4 text-base font-medium text-gray-900">
                Qué pasa si supero el límite de testimonios del plan gratuito?
                <svg className="h-5 w-5 shrink-0 text-gray-400 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm leading-relaxed text-gray-600">
                Si alcanzas el límite de 10 testimonios en el plan gratuito, los testimonios existentes
                seguirán mostrándose con normalidad, pero no podrás añadir nuevos hasta que actualices a
                un plan de pago. Tus datos nunca se eliminan.
              </div>
            </details>
            <details className="group rounded-xl border border-gray-200 bg-white">
              <summary className="flex cursor-pointer items-center justify-between px-6 py-4 text-base font-medium text-gray-900">
                Puedo cancelar mi suscripción en cualquier momento?
                <svg className="h-5 w-5 shrink-0 text-gray-400 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm leading-relaxed text-gray-600">
                Por supuesto. Puedes cancelar tu suscripción en cualquier momento sin penalizaciones.
                Seguirás teniendo acceso a las funciones de tu plan hasta el final del periodo de
                facturación actual. Después, tu cuenta pasará automáticamente al plan gratuito.
              </div>
            </details>
          </div>
        </div>
      </section>

      <Faq />
      <Footer />
    </>
  )
}
