import type { Metadata } from 'next'
import Link from 'next/link'
import { webPageSchema, breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Opinafy vs Testimonial.to: Comparativa 2026',
  description:
    'Comparativa detallada entre Opinafy y Testimonial.to. Funcionalidades, precios, idioma, soporte y verificación frente a frente para elegir la mejor plataforma.',
  keywords: [
    'opinafy vs testimonial.to',
    'alternativa testimonial.to',
    'testimonial.to en español',
    'comparativa herramientas testimonios',
    'testimonial.to alternativa español',
    'plataforma testimonios 2026',
  ],
  alternates: {
    canonical: 'https://opinafy.com/comparar/opinafy-vs-testimonial-to',
  },
  openGraph: {
    title: 'Opinafy vs Testimonial.to: Comparativa completa 2026',
    description:
      'Descubre las diferencias clave entre Opinafy y Testimonial.to. Análisis honesto de funcionalidades, precios y soporte.',
    url: 'https://opinafy.com/comparar/opinafy-vs-testimonial-to',
  },
}

function CheckIcon() {
  return (
    <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}

function CrossIcon() {
  return (
    <svg className="h-5 w-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

function PartialIcon() {
  return (
    <svg className="h-5 w-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
    </svg>
  )
}

const featureComparison = [
  { feature: 'Interfaz en español', opinafy: 'check', competitor: 'cross' },
  { feature: 'Soporte en español', opinafy: 'check', competitor: 'cross' },
  { feature: 'Precios en EUR', opinafy: 'check', competitor: 'cross' },
  { feature: 'Verificación de email', opinafy: 'check', competitor: 'check' },
  { feature: 'Verificación de empresa', opinafy: 'check', competitor: 'cross' },
  { feature: 'Widget embebible', opinafy: 'check', competitor: 'check' },
  { feature: 'Testimonios en video', opinafy: 'check', competitor: 'check' },
  { feature: 'Formularios personalizables', opinafy: 'check', competitor: 'check' },
  { feature: 'Muro de testimonios', opinafy: 'check', competitor: 'check' },
  { feature: 'Importar testimonios', opinafy: 'check', competitor: 'check' },
  { feature: 'Schema markup SEO', opinafy: 'check', competitor: 'partial' },
  { feature: 'Plan gratuito', opinafy: 'check', competitor: 'check' },
  { feature: 'Integraciones Zapier/Webhooks', opinafy: 'partial', competitor: 'check' },
  { feature: 'Integracion Slack', opinafy: 'partial', competitor: 'check' },
  { feature: 'API pública', opinafy: 'check', competitor: 'check' },
  { feature: 'GDPR/RGPD compliance', opinafy: 'check', competitor: 'check' },
  { feature: 'Multiple layouts de widget', opinafy: 'check', competitor: 'check' },
  { feature: 'Página pública de testimonios', opinafy: 'check', competitor: 'check' },
]

function StatusIcon({ status }: { status: string }) {
  if (status === 'check') return <CheckIcon />
  if (status === 'cross') return <CrossIcon />
  return <PartialIcon />
}

const faqs = [
  {
    q: '¿Puedo migrar mis testimonios de Testimonial.to a Opinafy?',
    a: 'Si, puedes migrar tus testimonios existentes a Opinafy. El proceso es sencillo: exporta tus testimonios desde Testimonial.to y añadelos manualmente desde el panel de Opinafy. Si tienes un volumen alto, nuestro equipo de soporte puede asistirte en la migracion.',
  },
  {
    q: '¿Testimonial.to tiene interfaz en español?',
    a: 'No, Testimonial.to está disponible únicamente en inglés. Tanto su panel de administración como los formularios de recopilación están en inglés, lo que puede ser una barrera para negocios hispanohablantes y sus clientes.',
  },
  {
    q: '¿Cual es más barata, Opinafy o Testimonial.to?',
    a: 'Opinafy ofrece precios más competitivos en EUR. El plan Pro de Opinafy cuesta 9 EUR/mes (sin cambio de divisa), mientras que Testimonial.to parte de $20 USD/mes en su plan básico de pago. Además, Opinafy incluye un plan gratuito generoso con hasta 10 testimonios.',
  },
  {
    q: '¿Testimonial.to ofrece verificación de empresas?',
    a: 'No, Testimonial.to no ofrece un sistema de verificación de empresa. Opinafy permite verificar que el testimonio proviene de una empresa real, añadiendo una capa extra de credibilidad y confianza para los visitantes de tu web.',
  },
  {
    q: '¿Cual tiene mejores integraciones?',
    a: 'Testimonial.to actualmente ofrece más integraciones nativas con herramientas de terceros como Slack, Zapier y plataformas CMS. Opinafy esta ampliando activamente su ecosistema de integraciones, pero ya ofrece widget embebible, API pública y webhooks.',
  },
  {
    q: '¿Opinafy es buena alternativa a Testimonial.to para el mercado hispanohablante?',
    a: 'Opinafy es la mejor alternativa a Testimonial.to si tu mercado principal es hispanohablante. Toda la plataforma, desde los formularios que reciben tus clientes hasta el panel de control y el soporte, esta pensada nativamente en español. Esto elimina fricciones y mejora la tasa de respuesta de tus clientes.',
  },
]

export default function OpinafyVsTestimonialToPage() {
  const pageJsonLd = webPageSchema({
    name: 'Opinafy vs Testimonial.to: Comparativa completa 2026',
    url: 'https://opinafy.com/comparar/opinafy-vs-testimonial-to',
    description:
      'Comparativa detallada entre Opinafy y Testimonial.to. Funcionalidades, precios, idioma, soporte y verificación frente a frente.',
  })

  const breadcrumbJsonLd = breadcrumbSchema([
    { name: 'Inicio', url: 'https://opinafy.com' },
    { name: 'Comparativas', url: 'https://opinafy.com/comparar' },
    { name: 'Opinafy vs Testimonial.to', url: 'https://opinafy.com/comparar/opinafy-vs-testimonial-to' },
  ])

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li>
              <Link href="/" className="hover:text-indigo-600">Inicio</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/comparar" className="hover:text-indigo-600">Comparativas</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="font-medium text-gray-900">Opinafy vs Testimonial.to</li>
          </ol>
        </nav>

        {/* Header */}
        <header>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Opinafy vs Testimonial.to: Comparativa completa 2026
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Testimonial.to es una de las plataformas de testimonios más populares del mercado anglosajón.
            Pero, ¿es la mejor opción para negocios que operan en español? En esta comparativa analizamos
            punto por punto ambas herramientas para que tomes la mejor decisión.
          </p>
        </header>

        {/* Resumen */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900">Resumen rápido</h2>
          <p className="mt-4 text-gray-600 leading-7">
            <strong>Testimonial.to</strong> es una herramienta consólidada, fundada en 2021, que permite recopilar y mostrar
            testimonios de clientes mediante widgets embebibles. Cuenta con un amplio ecosistema de integraciones y una base de
            usuarios global. Sin embargo, toda su plataforma esta en inglés, los precios están en dólares estadounidenses y no
            ofrece soporte en español.
          </p>
          <p className="mt-4 text-gray-600 leading-7">
            <strong>Opinafy</strong> es una plataforma de testimonios diseñada desde cero para el mercado hispanohablante.
            Ofrece una experiencia completamente en español, precios en euros, verificación de empresa, y un enfoque claro
            en la autenticidad de los testimonios. Es ideal para autonomos, pymes y agencias que operan en España y
            Latinoamérica.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-6">
              <h3 className="font-semibold text-indigo-900">Elige Opinafy si...</h3>
              <ul className="mt-3 space-y-2 text-sm text-indigo-800">
                <li>Tu negocio opera en español</li>
                <li>Quieres precios en EUR sin comisiónes por cambio de divisa</li>
                <li>Necesitas verificación de empresa para mayor credibilidad</li>
                <li>Prefieres soporte en tu idioma</li>
                <li>Buscas la mejor relacion calidad-precio</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
              <h3 className="font-semibold text-gray-900">Elige Testimonial.to si...</h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                <li>Tu mercado es exclusivamente anglosajón</li>
                <li>Necesitas integraciones avanzadas con muchas herramientas</li>
                <li>Llevas años usandolo y no quieres migrar</li>
                <li>Prefieres un ecosistema más maduro</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Tabla comparativa */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900">Tabla comparativa de funcionalidades</h2>
          <p className="mt-4 text-gray-600">
            A continuacion puedes ver una comparativa detallada de las funcionalidades más importantes de ambas plataformas.
            Hemos sido honestos y transparentes: donde Testimonial.to es mejor, lo indicamos.
          </p>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-4 pr-4 font-semibold text-gray-900">Funcionalidad</th>
                  <th className="px-4 py-4 text-center font-semibold text-indigo-700">Opinafy</th>
                  <th className="px-4 py-4 text-center font-semibold text-gray-700">Testimonial.to</th>
                </tr>
              </thead>
              <tbody>
                {featureComparison.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? 'bg-gray-50' : ''}>
                    <td className="py-3 pr-4 text-gray-700">{row.feature}</td>
                    <td className="px-4 py-3 text-center">
                      <span className="inline-flex justify-center">
                        <StatusIcon status={row.opinafy} />
                      </span>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <span className="inline-flex justify-center">
                        <StatusIcon status={row.competitor} />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-gray-500">
            Leyenda: verde = disponible, rojo = no disponible, amarillo = parcial o en desarrollo. Datos actualizados a marzo 2026.
          </p>
        </section>

        {/* Precios */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900">Comparativa de precios</h2>
          <p className="mt-4 text-gray-600 leading-7">
            Uno de los aspectos más relevantes al elegir una herramienta es su coste. Aquí comparamos los planes de ambas
            plataformas para que puedas evaluar cual se ajusta mejor a tu presupuesto.
          </p>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-4 pr-4 font-semibold text-gray-900">Plan</th>
                  <th className="px-4 py-4 text-center font-semibold text-indigo-700">Opinafy</th>
                  <th className="px-4 py-4 text-center font-semibold text-gray-700">Testimonial.to</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-50">
                  <td className="py-3 pr-4 text-gray-700">Gratis</td>
                  <td className="px-4 py-3 text-center text-gray-900">0 EUR (10 testimonios, 1 proyecto)</td>
                  <td className="px-4 py-3 text-center text-gray-900">0 USD (limite de 2 videos)</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-gray-700">Plan inicial de pago</td>
                  <td className="px-4 py-3 text-center text-gray-900">9 EUR/mes (Pro)</td>
                  <td className="px-4 py-3 text-center text-gray-900">~20 USD/mes (Starter)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 pr-4 text-gray-700">Plan avanzado</td>
                  <td className="px-4 py-3 text-center text-gray-900">19 EUR/mes (Business)</td>
                  <td className="px-4 py-3 text-center text-gray-900">~50 USD/mes (Premium)</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-gray-700">Moneda</td>
                  <td className="px-4 py-3 text-center text-gray-900">EUR</td>
                  <td className="px-4 py-3 text-center text-gray-900">USD</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-gray-600 leading-7">
            Como puedes ver, Opinafy es significativamente más economica. A 9 EUR/mes por el plan Pro, obtienes 3 proyectos,
            testimonios ilimitados y acceso a todos los layouts. El plan equivalente de Testimonial.to cuesta más del doble,
            y además tendrás que asumir comisiónes de cambio de divisa si operas en euros. Para negocios en España y
            Latinoamérica, esto supone un ahorro considerable a lo largo del año.
          </p>
        </section>

        {/* Ventajas de Opinafy */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900">Ventajas de Opinafy frente a Testimonial.to</h2>
          <div className="mt-6 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">1. Nativo en español</h3>
              <p className="mt-2 text-gray-600 leading-7">
                Opinafy no es una herramienta traducida: esta construida desde cero pensando en el usuario hispanohablante.
                Los formularios que reciben tus clientes, el panel de control, los correos de notificación y el soporte
                técnico están completamente en español. Esto reduce la fricción para tus clientes al dejar un testimonio
                y mejora la tasa de respuesta.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">2. Verificación de empresa</h3>
              <p className="mt-2 text-gray-600 leading-7">
                Una funcionalidad única de Opinafy es la verificación de empresa. Cuando un cliente deja un testimonio,
                se puede verificar que pertenece a una empresa real. Esto añade una capa de credibilidad que Testimonial.to
                no ofrece, y que es especialmente valiosa en sectores B2B donde la confianza es determinante.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">3. Precios más competitivos en EUR</h3>
              <p className="mt-2 text-gray-600 leading-7">
                Con planes desde 9 EUR/mes, Opinafy es más asequible que Testimonial.to para el mercado europeo y
                latinoamericano. No hay sorpresas con el tipo de cambio ni comisiónes ocultas de conversión de divisa.
                Pagas en tu moneda y sabes exactamente cuanto te cuesta cada mes.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">4. Soporte en español</h3>
              <p className="mt-2 text-gray-600 leading-7">
                Si necesitas ayuda, el equipo de Opinafy te atiende en español. No tendrás que escribir correos en inglés
                ni esperar a que el soporte traduzca tu consulta. La comunicacion directa en tu idioma agiliza la resolución
                de problemas y mejora la experiencia general.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">5. Schema markup para SEO</h3>
              <p className="mt-2 text-gray-600 leading-7">
                Opinafy genera automáticamente datos estructurados (Schema.org) para tus testimonios, lo que ayuda a
                que aparezcan como rich snippets en los resultados de Google. Esto no solo mejora tu visibilidad sino
                que aumenta el CTR de tus páginas. Testimonial.to ofrece esto de forma más limitada.
              </p>
            </div>
          </div>
        </section>

        {/* Ventajas de Testimonial.to */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900">Ventajas de Testimonial.to frente a Opinafy</h2>
          <p className="mt-4 text-gray-600 leading-7">
            Ser honestos es importante. Testimonial.to tiene ventajas reales que debemos reconocer:
          </p>
          <div className="mt-6 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">1. Más tiempo en el mercado</h3>
              <p className="mt-2 text-gray-600 leading-7">
                Testimonial.to lleva operando desde 2021, lo que le da una ventaja en madurez de producto. Ha tenido
                más tiempo para pulir funcionalidades, resolver bugs y optimizar la experiencia de usuario. Como plataforma
                más joven, Opinafy esta en constante mejora y evoluciona rápidamente, pero Testimonial.to tiene la ventaja
                de la experiencia acumulada.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">2. Más integraciones nativas</h3>
              <p className="mt-2 text-gray-600 leading-7">
                Testimonial.to ofrece integraciones nativas con un mayor número de herramientas de terceros, incluyendo
                Slack, Zapier, Notion, Figma y diversas plataformas CMS. Si tu flujo de trabajo depende de multiples
                herramientas conectadas, esta ventaja puede ser relevante. Opinafy esta ampliando su catálogo de
                integraciones, pero por ahora Testimonial.to lleva la delantera en este apartado.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">3. Comunidad internacional más grande</h3>
              <p className="mt-2 text-gray-600 leading-7">
                Al ser una herramienta global en inglés, Testimonial.to cuenta con una comunidad de usuarios más amplia.
                Esto se traduce en más tutoriales, videos y recursos de terceros disponibles. Si te desenvuelves bien
                en inglés y priorizas tener acceso a una comunidad grande, esto puede ser un factor a considerar.
              </p>
            </div>
          </div>
        </section>

        {/* Veredicto */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900">Nuestro veredicto</h2>
          <p className="mt-4 text-gray-600 leading-7">
            Ambas plataformas son sólidas y cumplen con su proposito principal: ayudarte a recopilar y mostrar testimonios
            de clientes. Sin embargo, la elección depende de tu contexto específico.
          </p>
          <p className="mt-4 text-gray-600 leading-7">
            Si tu negocio opera en el mercado hispanohablante, ya sea en España o en Latinoamérica, <strong>Opinafy es
            la mejor opción</strong>. La experiencia nativa en español, la verificación de empresa, los precios en euros
            y el soporte en tu idioma hacen que sea una herramienta pensada para ti. Tus clientes tendrán una experiencia
            sin fricciones al dejar testimonios, lo que se traduce en más respuestas y mejor calidad.
          </p>
          <p className="mt-4 text-gray-600 leading-7">
            Si tu mercado es exclusivamente anglosajón y necesitas un gran ecosistema de integraciones, Testimonial.to es
            una buena alternativa que lleva años en el mercado y tiene una base de usuarios consólidada.
          </p>
          <div className="mt-8 rounded-2xl bg-indigo-50 p-6 sm:p-8">
            <p className="text-lg font-semibold text-indigo-900">
              Para el mercado hispanohablante, Opinafy gana en 5 de los 6 criterios más importantes: idioma, precios,
              verificación, soporte y relación calidad-precio.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900">Preguntas frecuentes</h2>
          <div className="mt-8 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-xl border border-gray-200 bg-white"
              >
                <summary className="flex cursor-pointer items-center justify-between px-6 py-4 text-gray-900 font-medium hover:text-indigo-600">
                  {faq.q}
                  <svg
                    className="ml-4 h-5 w-5 shrink-0 text-gray-500 transition-transform group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-4 text-gray-600 leading-7">{faq.a}</div>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16 rounded-2xl bg-gradient-to-br from-indigo-600 to-indigo-700 p-8 text-center sm:p-12">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Prueba Opinafy gratis y compruebalo tu mismo
          </h2>
          <p className="mt-4 text-indigo-100">
            Crea tu cuenta en menos de 2 minutos. Sin tarjeta de crédito. Empieza a recopilar testimonios hoy.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/registro"
              className="inline-flex h-12 items-center rounded-lg bg-white px-8 text-sm font-semibold text-indigo-700 transition-colors hover:bg-indigo-50"
            >
              Crear cuenta gratis
            </Link>
            <Link
              href="/precios"
              className="inline-flex h-12 items-center rounded-lg border border-white/30 px-8 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Ver precios
            </Link>
          </div>
        </section>
      </article>
    </>
  )
}
