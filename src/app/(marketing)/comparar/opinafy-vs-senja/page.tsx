import type { Metadata } from 'next'
import Link from 'next/link'
import { webPageSchema, breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Opinafy vs Senja: Comparativa completa 2026',
  description:
    'Comparativa detallada entre Opinafy y Senja. Funcionalidades, precios, video testimonios, verificacion y soporte en espanol frente a frente.',
  keywords: [
    'opinafy vs senja',
    'alternativa senja',
    'senja en español',
    'comparativa senja opinafy',
    'herramientas testimonios 2026',
    'senja alternativa español',
  ],
  alternates: {
    canonical: 'https://opinafy.com/comparar/opinafy-vs-senja',
  },
  openGraph: {
    title: 'Opinafy vs Senja: Comparativa completa 2026',
    description:
      'Descubre las diferencias clave entre Opinafy y Senja. Analisis honesto de funcionalidades, precios y soporte.',
    url: 'https://opinafy.com/comparar/opinafy-vs-senja',
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
  { feature: 'Interfaz en espanol', opinafy: 'check', competitor: 'cross' },
  { feature: 'Soporte en espanol', opinafy: 'check', competitor: 'cross' },
  { feature: 'Precios en EUR', opinafy: 'check', competitor: 'cross' },
  { feature: 'Verificacion de email', opinafy: 'check', competitor: 'check' },
  { feature: 'Verificacion de empresa', opinafy: 'check', competitor: 'cross' },
  { feature: 'Widget embebible', opinafy: 'check', competitor: 'check' },
  { feature: 'Testimonios en video', opinafy: 'check', competitor: 'check' },
  { feature: 'Formularios personalizables', opinafy: 'check', competitor: 'check' },
  { feature: 'Muro de testimonios', opinafy: 'check', competitor: 'check' },
  { feature: 'Importar de Google/redes', opinafy: 'check', competitor: 'check' },
  { feature: 'Schema markup SEO', opinafy: 'check', competitor: 'partial' },
  { feature: 'Plan gratuito', opinafy: 'check', competitor: 'check' },
  { feature: 'Integraciones nativas', opinafy: 'partial', competitor: 'check' },
  { feature: 'Compartir en redes sociales', opinafy: 'check', competitor: 'check' },
  { feature: 'API publica', opinafy: 'check', competitor: 'check' },
  { feature: 'GDPR/RGPD compliance', opinafy: 'check', competitor: 'check' },
  { feature: 'Multiples layouts de widget', opinafy: 'check', competitor: 'check' },
  { feature: 'Pagina publica de testimonios', opinafy: 'check', competitor: 'check' },
]

function StatusIcon({ status }: { status: string }) {
  if (status === 'check') return <CheckIcon />
  if (status === 'cross') return <CrossIcon />
  return <PartialIcon />
}

const faqs = [
  {
    q: '¿Puedo migrar mis testimonios de Senja a Opinafy?',
    a: 'Si, puedes migrar tus testimonios existentes a Opinafy. Senja permite exportar datos, y luego puedes añadirlos al panel de Opinafy. Si tienes un gran volumen de testimonios, nuestro equipo de soporte te puede ayudar con la migracion para que sea lo mas fluida posible.',
  },
  {
    q: '¿Senja tiene interfaz en espanol?',
    a: 'No, Senja solo esta disponible en ingles. Su panel de administracion, formularios de recopilacion y documentacion estan enteramente en ingles. Esto puede suponer una barrera para tus clientes hispanohablantes a la hora de dejar testimonios.',
  },
  {
    q: '¿Cual es mas barata, Opinafy o Senja?',
    a: 'Opinafy ofrece planes mas economicos en EUR. El plan Pro de Opinafy cuesta 9 EUR/mes, mientras que el plan de pago de Senja empieza alrededor de 29 USD/mes. Ademas, con Opinafy evitas las comisiones de cambio de divisa si operas en euros.',
  },
  {
    q: '¿Senja ofrece video testimonios?',
    a: 'Si, Senja permite recopilar testimonios en video. Esta es una de sus funcionalidades mas destacadas. Opinafy tambien ofrece video testimonios en sus planes de pago, permitiendote crear contenido de prueba social mas autentico y persuasivo.',
  },
  {
    q: '¿Cual tiene mejor diseno de interfaz?',
    a: 'Senja es reconocida por tener una interfaz moderna y atractiva. Opinafy tambien ofrece una interfaz limpia y profesional, optimizada para el usuario hispanohablante. Ambas plataformas priorizan la facilidad de uso, aunque el diseno es subjetivo y depende de las preferencias de cada usuario.',
  },
  {
    q: '¿Opinafy es buena alternativa a Senja para el mercado hispanohablante?',
    a: 'Opinafy es la mejor alternativa a Senja si tu negocio opera en español. Toda la experiencia esta diseñada nativamente en español, desde los formularios hasta el soporte. Ademas, la verificacion de empresa de Opinafy anade una capa de credibilidad que Senja no ofrece.',
  },
]

export default function OpinafyVsSenjaPage() {
  const pageJsonLd = webPageSchema({
    name: 'Opinafy vs Senja: Comparativa completa 2026',
    url: 'https://opinafy.com/comparar/opinafy-vs-senja',
    description:
      'Comparativa detallada entre Opinafy y Senja. Funcionalidades, precios, video testimonios, verificacion y soporte en espanol.',
  })

  const breadcrumbJsonLd = breadcrumbSchema([
    { name: 'Inicio', url: 'https://opinafy.com' },
    { name: 'Comparativas', url: 'https://opinafy.com/comparar' },
    { name: 'Opinafy vs Senja', url: 'https://opinafy.com/comparar/opinafy-vs-senja' },
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
            <li className="font-medium text-gray-900">Opinafy vs Senja</li>
          </ol>
        </nav>

        {/* Header */}
        <header>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Opinafy vs Senja: Comparativa completa 2026
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Senja es una plataforma de testimonios moderna y bien diseñada que ha ganado popularidad en el mercado
            anglosajón. Pero, ¿como se compara con Opinafy para negocios que operan en español? Analizamos ambas
            herramientas en profundidad para ayudarte a tomar la mejor decision.
          </p>
        </header>

        {/* Resumen */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900">Resumen rapido</h2>
          <p className="mt-4 text-gray-600 leading-7">
            <strong>Senja</strong> es una herramienta de gestion de testimonios que destaca por su interfaz moderna y
            atractiva. Ofrece funcionalidades solidas para recopilar testimonios en texto y video, compartirlos en redes
            sociales y mostrarlos en tu web. Sin embargo, esta completamente en ingles, sus precios estan en dolares y
            no ofrece soporte en español.
          </p>
          <p className="mt-4 text-gray-600 leading-7">
            <strong>Opinafy</strong> es la plataforma de testimonios creada para el mercado hispanohablante. Ofrece una
            experiencia completa en español, precios en euros, verificacion de empresa y un enfoque centrado en la
            autenticidad y la credibilidad de los testimonios. Es la solucion ideal para negocios en España y
            Latinoamerica que quieren maximizar su prueba social.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-6">
              <h3 className="font-semibold text-indigo-900">Elige Opinafy si...</h3>
              <ul className="mt-3 space-y-2 text-sm text-indigo-800">
                <li>Tu negocio y tus clientes hablan español</li>
                <li>Quieres precios transparentes en EUR</li>
                <li>Necesitas verificacion de empresa para credibilidad B2B</li>
                <li>Valoras el soporte tecnico en tu idioma</li>
                <li>Buscas optimizacion SEO con schema markup</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
              <h3 className="font-semibold text-gray-900">Elige Senja si...</h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                <li>Tu mercado principal es anglosajón</li>
                <li>Priorizas integraciones con muchas herramientas</li>
                <li>Valoras especialmente el diseno de la interfaz</li>
                <li>Necesitas compartir testimonios activamente en redes sociales</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Tabla comparativa */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900">Tabla comparativa de funcionalidades</h2>
          <p className="mt-4 text-gray-600">
            Comparativa detallada de las funcionalidades principales. Marcamos honestamente donde cada herramienta
            destaca y donde tiene margen de mejora.
          </p>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-4 pr-4 font-semibold text-gray-900">Funcionalidad</th>
                  <th className="px-4 py-4 text-center font-semibold text-indigo-700">Opinafy</th>
                  <th className="px-4 py-4 text-center font-semibold text-gray-700">Senja</th>
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
            El coste es un factor clave para cualquier negocio. Veamos como se comparan los planes de ambas plataformas
            y que valor obtienes por tu inversion.
          </p>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-4 pr-4 font-semibold text-gray-900">Plan</th>
                  <th className="px-4 py-4 text-center font-semibold text-indigo-700">Opinafy</th>
                  <th className="px-4 py-4 text-center font-semibold text-gray-700">Senja</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-50">
                  <td className="py-3 pr-4 text-gray-700">Gratis</td>
                  <td className="px-4 py-3 text-center text-gray-900">0 EUR (10 testimonios, 1 proyecto)</td>
                  <td className="px-4 py-3 text-center text-gray-900">0 USD (15 testimonios, limitado)</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-gray-700">Plan inicial de pago</td>
                  <td className="px-4 py-3 text-center text-gray-900">9 EUR/mes (Pro)</td>
                  <td className="px-4 py-3 text-center text-gray-900">~29 USD/mes (Premium)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 pr-4 text-gray-700">Plan avanzado</td>
                  <td className="px-4 py-3 text-center text-gray-900">19 EUR/mes (Business)</td>
                  <td className="px-4 py-3 text-center text-gray-900">~49 USD/mes (Agency)</td>
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
            Opinafy ofrece una ventaja significativa en precio. Por 9 EUR/mes obtienes acceso a 3 proyectos, testimonios
            ilimitados y todos los layouts disponibles. El plan comparable de Senja cuesta mas del triple. Ademas, al
            operar en euros, los negocios en España y Europa evitan las comisiones de cambio de divisa que supone pagar
            en dolares americanos. A lo largo de un año, esto puede suponer un ahorro de varios cientos de euros.
          </p>
        </section>

        {/* Ventajas de Opinafy */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900">Ventajas de Opinafy frente a Senja</h2>
          <div className="mt-6 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">1. Experiencia nativa en español</h3>
              <p className="mt-2 text-gray-600 leading-7">
                Opinafy esta construida desde cero para el mercado hispanohablante. Esto no se limita a traducir la
                interfaz: los formularios, correos, notificaciones, documentacion y soporte estan pensados en español.
                Cuando tus clientes reciben un formulario de Opinafy, lo entienden perfectamente sin necesidad de
                traduccion. Esto mejora la tasa de respuesta y la calidad de los testimonios recibidos.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">2. Verificacion de email y empresa</h3>
              <p className="mt-2 text-gray-600 leading-7">
                Opinafy ofrece un sistema de doble verificacion: por email y por empresa. Esto significa que cada
                testimonio puede ir acompañado de una insignia de verificacion que confirma la autenticidad del
                remitente. Para negocios B2B, esta funcionalidad es extremadamente valiosa ya que genera una capa
                extra de confianza que puede ser decisiva en el proceso de compra. Senja ofrece verificacion de email
                pero no de empresa.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">3. Precios en EUR sin sorpresas</h3>
              <p className="mt-2 text-gray-600 leading-7">
                Con planes a partir de 9 EUR/mes, Opinafy es considerablemente mas asequible. No hay costes ocultos
                ni fluctuaciones por tipo de cambio. Para negocios en la zona euro, esto significa facturas predecibles
                y sin comisiones de conversion de divisa que pueden sumar entre un 2% y un 4% adicional en cada pago.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">4. Video testimonios</h3>
              <p className="mt-2 text-gray-600 leading-7">
                Al igual que Senja, Opinafy ofrece la posibilidad de recopilar testimonios en video. Los video
                testimonios generan hasta un 80% mas de confianza que los testimonios en texto, segun estudios de
                marketing. Con Opinafy, tus clientes pueden grabar su testimonio directamente desde el formulario, sin
                necesidad de aplicaciones externas, y todo el proceso se realiza en español.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">5. Soporte tecnico en español</h3>
              <p className="mt-2 text-gray-600 leading-7">
                Resolver un problema tecnico es mucho mas rapido cuando puedes explicarlo en tu idioma. El equipo de
                soporte de Opinafy atiende en español, lo que elimina la barrera idiomatica y agiliza la resolucion de
                cualquier incidencia. Senja solo ofrece soporte en ingles, lo que puede ser frustrante si no dominas
                el idioma o necesitas explicar algo complejo.
              </p>
            </div>
          </div>
        </section>

        {/* Ventajas de Senja */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900">Ventajas de Senja frente a Opinafy</h2>
          <p className="mt-4 text-gray-600 leading-7">
            Reconocemos que Senja tiene puntos fuertes reales que merece la pena destacar:
          </p>
          <div className="mt-6 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">1. Integraciones nativas mas amplias</h3>
              <p className="mt-2 text-gray-600 leading-7">
                Senja ofrece un catalogo de integraciones nativas mas amplio que Opinafy. Puedes conectar Senja con
                herramientas como Slack, Zapier, HubSpot y diversas plataformas de marketing. Si tu flujo de trabajo
                depende de automatizaciones complejas entre multiples herramientas, Senja tiene ventaja en este aspecto.
                Opinafy esta ampliando activamente sus integraciones, pero a dia de hoy Senja lleva la delantera.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">2. Interfaz moderna y cuidada</h3>
              <p className="mt-2 text-gray-600 leading-7">
                Senja es reconocida en la industria por tener un diseño de interfaz limpio y moderno. La experiencia
                de usuario es fluida y visualmente atractiva. Opinafy tambien ofrece una interfaz profesional y
                funcional, pero Senja ha invertido especialmente en este apartado y se nota en los detalles.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">3. Funcionalidades de redes sociales</h3>
              <p className="mt-2 text-gray-600 leading-7">
                Senja facilita la creacion de contenido visual a partir de tus testimonios para compartir en redes
                sociales. Genera automaticamente imagenes optimizadas para Instagram, Twitter y LinkedIn. Esta
                funcionalidad es util si tu estrategia de marketing se apoya mucho en redes sociales y quieres
                maximizar el alcance de cada testimonio recibido.
              </p>
            </div>
          </div>
        </section>

        {/* Veredicto */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900">Nuestro veredicto</h2>
          <p className="mt-4 text-gray-600 leading-7">
            Senja y Opinafy son dos herramientas solidas para gestionar testimonios de clientes. Ambas ofrecen
            funcionalidades similares en su nucleo: recopilar testimonios, mostrarlos con widgets y compartirlos.
            La diferencia fundamental esta en el enfoque y el publico objetivo.
          </p>
          <p className="mt-4 text-gray-600 leading-7">
            Si tu negocio se dirige al mercado hispanohablante, <strong>Opinafy es la opcion mas logica</strong>.
            La experiencia completamente en español, la verificacion de empresa, los precios en euros y el soporte en
            tu idioma crean una ventaja competitiva clara. Tus clientes tendran una experiencia sin fricciones, lo que
            se traduce directamente en mas testimonios recibidos y de mayor calidad.
          </p>
          <p className="mt-4 text-gray-600 leading-7">
            Si tu mercado es anglosajón y necesitas un gran catalogo de integraciones nativas o priorizas el diseño
            de interfaz sobre todo lo demas, Senja puede ser una buena eleccion. Pero ten en cuenta que pagaras
            significativamente mas por ello.
          </p>
          <div className="mt-8 rounded-2xl bg-indigo-50 p-6 sm:p-8">
            <p className="text-lg font-semibold text-indigo-900">
              Para negocios hispanohablantes, Opinafy ofrece mejor relacion calidad-precio, experiencia nativa en
              español y verificacion de empresa: tres ventajas decisivas frente a Senja.
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
            Prueba Opinafy gratis y descubre la diferencia
          </h2>
          <p className="mt-4 text-indigo-100">
            Crea tu cuenta en menos de 2 minutos. Sin tarjeta de credito. Testimonios que generan confianza real.
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
