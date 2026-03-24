import type { Metadata } from 'next'
import Link from 'next/link'
import { webPageSchema, breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Las 7 mejores herramientas de testimonios 2026',
  description:
    'Ranking de las mejores plataformas de testimonios y resenas en 2026. Opinafy, Testimonial.to, Senja, Famewall, TrustPilot, Google Reviews y Capterra comparadas.',
  keywords: [
    'mejores herramientas testimonios 2026',
    'plataformas testimonios',
    'herramientas prueba social',
    'recopilar testimonios clientes',
    'mejores plataformas resenas',
    'opinafy vs competidores',
    'herramientas testimonios español',
  ],
  alternates: {
    canonical: 'https://opinafy.com/comparar/mejores-herramientas-testimonios',
  },
  openGraph: {
    title: 'Las 7 mejores herramientas de testimonios en 2026',
    description:
      'Ranking completo de las mejores plataformas de testimonios. Comparativa honesta con precios, pros y contras.',
    url: 'https://opinafy.com/comparar/mejores-herramientas-testimonios',
  },
}

const tools = [
  {
    rank: 1,
    name: 'Opinafy',
    tagline: 'La mejor plataforma de testimonios en español',
    description:
      'Opinafy es una plataforma de testimonios diseñada desde cero para el mercado hispanohablante. Ofrece formularios de recopilación, widgets embebibles, muro de testimonios, video testimonios, verificación de email y empresa, y schema markup para SEO. Toda la experiencia, desde el panel de administracion hasta los formularios que reciben tus clientes, esta nativamente en español.',
    pricing: 'Gratis (10 testimonios) / Pro 9 EUR/mes / Business 19 EUR/mes',
    bestFor: 'Negocios hispanohablantes, autonomos, pymes y agencias en España y Latinoamerica',
    pros: [
      'Completamente en español (interfaz, formularios, soporte)',
      'Precios en EUR, los mas competitivos del mercado',
      'Verificación de empresa única en el sector',
      'Schema markup SEO automatico',
      'Video testimonios incluidos',
      'Plan gratuito generoso',
    ],
    cons: [
      'Plataforma mas nueva (menos tiempo en el mercado)',
      'Menos integraciones nativas que competidores anglosajones',
      'Comunidad de usuarios en crecimiento',
    ],
    url: '/',
  },
  {
    rank: 2,
    name: 'Testimonial.to',
    tagline: 'Popular herramienta anglosajona de testimonios',
    description:
      'Testimonial.to es una de las herramientas de testimonios mas establecidas del mercado. Fundada en 2021, permite recopilar testimonios en texto y video, mostrarlos con widgets personalizables e integrarlos con multiples herramientas de terceros. Es una opcion solida para el mercado anglosajón con un ecosistema maduro de integraciones.',
    pricing: 'Gratis (limitado) / Starter ~20 USD/mes / Premium ~50 USD/mes',
    bestFor: 'Negocios del mercado anglosajón que necesitan muchas integraciones',
    pros: [
      'Amplio ecosistema de integraciones (Zapier, Slack, Notion)',
      'Años de experiencia y producto maduro',
      'Comunidad internacional grande',
      'Video testimonios',
      'Multiples layouts de widget',
    ],
    cons: [
      'Solo disponible en ingles',
      'Precios en USD (comision de cambio para zona euro)',
      'Sin verificación de empresa',
      'Sin soporte en español',
      'Precios mas elevados',
    ],
    url: '/comparar/opinafy-vs-testimonial-to',
  },
  {
    rank: 3,
    name: 'Senja',
    tagline: 'Herramienta moderna con buen diseño',
    description:
      'Senja es una plataforma de testimonios que destaca por su interfaz moderna y cuidada. Ofrece funcionalidades para recopilar, gestionar y compartir testimonios, con un enfoque especial en la creación de contenido para redes sociales. Su diseño visual es uno de sus puntos fuertes.',
    pricing: 'Gratis (15 testimonios) / Premium ~29 USD/mes / Agency ~49 USD/mes',
    bestFor: 'Negocios anglosajones que priorizan diseño y redes sociales',
    pros: [
      'Interfaz visual moderna y atractiva',
      'Buenas funcionalidades para redes sociales',
      'Video testimonios',
      'Integraciones con herramientas populares',
      'Plan gratuito disponible',
    ],
    cons: [
      'Solo en ingles',
      'Precios en USD, mas caros que Opinafy',
      'Sin verificación de empresa',
      'Sin soporte en español',
    ],
    url: '/comparar/opinafy-vs-senja',
  },
  {
    rank: 4,
    name: 'Famewall',
    tagline: 'Muro de testimonios sencillo',
    description:
      'Famewall se centra en crear muros de testimonios visualmente atractivos. Es una herramienta sencilla y enfocada que permite recopilar testimonios de multiples fuentes y mostrarlos en un muro embebible. Ideal para quienes buscan simplicidad, aunque le faltan funcionalidades avanzadas como video testimonios o verificación.',
    pricing: 'Gratis (limitado) / Pro ~19 USD/mes / Business ~49 USD/mes',
    bestFor: 'Freelancers y negocios pequeños que quieren un muro de testimonios basico',
    pros: [
      'Interfaz sencilla y facil de usar',
      'Importacion de testimonios desde varias fuentes',
      'Muro de testimonios visualmente atractivo',
      'Precio accesible en el plan basico',
    ],
    cons: [
      'Solo en ingles',
      'Sin video testimonios',
      'Funcionalidades limitadas comparado con alternativas',
      'Sin verificación de empresa ni email',
      'Sin soporte en español',
    ],
    url: null,
  },
  {
    rank: 5,
    name: 'Trustpilot',
    tagline: 'Plataforma de reseñas global',
    description:
      'Trustpilot es una de las plataformas de reseñas mas grandes del mundo. A diferencia de las herramientas anteriores, Trustpilot es un marketplace de reseñas publico donde los consumidores pueden dejar opiniones sobre cualquier negocio. Ofrece widgets para mostrar tu puntuación y reseñas en tu web, pero el control sobre el contenido es limitado ya que las reseñas son publicas.',
    pricing: 'Gratis (basico) / Planes de pago desde ~199 USD/mes',
    bestFor: 'Empresas grandes que necesitan reputacion publica y reseñas verificadas',
    pros: [
      'Reconocimiento de marca global',
      'Disponible parcialmente en español',
      'Las reseñas son publicas (genera confianza externa)',
      'Integración con Google Shopping y anuncios',
      'Alto volumen de reseñas potenciales',
    ],
    cons: [
      'Planes de pago muy caros para pymes',
      'No puedes controlar que reseñas se muestran',
      'Reseñas negativas son publicas e imposibles de eliminar',
      'Enfocado en reseñas generales, no testimonios curados',
      'No es ideal para prueba social personalizada en tu web',
    ],
    url: null,
  },
  {
    rank: 6,
    name: 'Google Reviews',
    tagline: 'Reseñas integradas con Google',
    description:
      'Google Reviews forma parte del ecosistema de Google Business Profile (antes Google My Business). Permite que los clientes dejen reseñas publicas que aparecen en Google Maps y en los resultados de busqueda. Es gratuito y tiene un alcance enorme, pero no ofrece control sobre la presentacion ni funcionalidades para curar testimonios en tu web.',
    pricing: 'Gratuito',
    bestFor: 'Negocios locales que quieren visibilidad en Google Maps',
    pros: [
      'Totalmente gratuito',
      'Aparece en Google Maps y busquedas locales',
      'Disponible en español',
      'Alto volumen de usuarios que dejan reseñas',
      'Impacto directo en SEO local',
    ],
    cons: [
      'Sin control sobre la presentacion en tu web',
      'No puedes curar o seleccionar testimonios',
      'Reseñas negativas publicas y dificiles de gestionar',
      'Sin widgets personalizables',
      'Sin video testimonios',
      'No es una herramienta de gestión de testimonios',
    ],
    url: null,
  },
  {
    rank: 7,
    name: 'Capterra',
    tagline: 'Plataforma de reseñas de software',
    description:
      'Capterra es una plataforma de reseñas especializada en software y herramientas B2B. Es propiedad de Gartner y ayuda a las empresas a encontrar el software adecuado basandose en reseñas de usuarios reales. Si tu producto es un software o SaaS, tener presencia en Capterra puede generar leads cualificados. Sin embargo, no es una herramienta para gestionar testimonios en tu propia web.',
    pricing: 'Gratuito para listar / PPC para posicionamiento destacado',
    bestFor: 'Empresas SaaS y B2B que quieren generar leads desde una plataforma de comparacion',
    pros: [
      'Plataforma de comparacion reconocida en B2B',
      'Parcialmente disponible en español',
      'Reseñas verificadas de usuarios reales',
      'Genera leads cualificados',
      'Buena visibilidad SEO para busquedas de software',
    ],
    cons: [
      'Solo para software/SaaS (no sirve para otros negocios)',
      'Sin control sobre la presentacion de las reseñas',
      'No permite curar testimonios para tu web',
      'Sin widgets embebibles personalizables',
      'PPC necesario para destacar (puede ser caro)',
    ],
    url: null,
  },
]

const summaryTable = [
  { name: 'Opinafy', language: 'Español', price: 'Desde 0 EUR', video: 'Si', verification: 'Email + Empresa', best: 'Mercado hispano' },
  { name: 'Testimonial.to', language: 'Ingles', price: 'Desde 0 USD', video: 'Si', verification: 'Email', best: 'Mercado anglosajón' },
  { name: 'Senja', language: 'Ingles', price: 'Desde 0 USD', video: 'Si', verification: 'Email', best: 'Diseño + RRSS' },
  { name: 'Famewall', language: 'Ingles', price: 'Desde 0 USD', video: 'No', verification: 'No', best: 'Muro basico' },
  { name: 'Trustpilot', language: 'Multi', price: 'Desde 199 USD', video: 'No', verification: 'Si', best: 'Reputacion global' },
  { name: 'Google Reviews', language: 'Multi', price: 'Gratis', video: 'No', verification: 'Google', best: 'SEO local' },
  { name: 'Capterra', language: 'Multi', price: 'Gratis + PPC', video: 'No', verification: 'Si', best: 'B2B / SaaS' },
]

const faqs = [
  {
    q: '¿Cual es la mejor herramienta de testimonios para negocios en español?',
    a: 'Opinafy es la mejor opcion para negocios que operan en español. Es la unica plataforma de testimonios con experiencia completa en español, precios en euros y verificación de empresa. Las demas alternativas (Testimonial.to, Senja, Famewall) estan solo en ingles.',
  },
  {
    q: '¿Puedo usar varias herramientas de testimonios a la vez?',
    a: 'Si, muchos negocios combinan herramientas. Por ejemplo, puedes usar Opinafy para gestionar y mostrar testimonios curados en tu web, mientras mantienes presencia en Google Reviews para SEO local y en Trustpilot para reputacion publica. Lo ideal es centralizar la gestión en una plataforma principal.',
  },
  {
    q: '¿Merece la pena pagar por una herramienta de testimonios?',
    a: 'Si tu negocio depende de la confianza del cliente (que es casi cualquier negocio), si. Los testimonios bien presentados pueden aumentar las conversiones entre un 15% y un 34% segun estudios del sector. El retorno de inversion suele ser muy rapido, especialmente con herramientas asequibles como Opinafy que empiezan desde 9 EUR/mes.',
  },
  {
    q: '¿Cual es la diferencia entre una plataforma de testimonios y una de reseñas?',
    a: 'Las plataformas de testimonios (Opinafy, Testimonial.to, Senja) te permiten recopilar, curar y mostrar testimonios seleccionados en tu web con widgets personalizables. Las plataformas de reseñas (Trustpilot, Google Reviews, Capterra) son marketplaces publicos donde cualquier persona puede dejar una opinion, positiva o negativa, y tu control es limitado.',
  },
  {
    q: '¿Los video testimonios realmente convierten mas?',
    a: 'Si. Segun multiples estudios de marketing digital, los video testimonios generan hasta un 80% mas de confianza que los testimonios en texto. El video permite ver la expresion y escuchar el tono del cliente, lo que crea una conexion emocional mas fuerte con el visitante de tu web.',
  },
  {
    q: '¿Qué es la verificación de empresa en Opinafy?',
    a: 'Es una funcionalidad única de Opinafy que permite verificar que el testimonio proviene de una empresa real. El remitente del testimonio recibe una insignia de verificación que confirma que su empresa ha sido validada. Esto anade una capa extra de credibilidad, especialmente relevante en el mercado B2B.',
  },
]

export default function MejoresHerramientasTestimoniosPage() {
  const pageJsonLd = webPageSchema({
    name: 'Las 7 mejores herramientas de testimonios en 2026',
    url: 'https://opinafy.com/comparar/mejores-herramientas-testimonios',
    description:
      'Ranking completo de las mejores plataformas de testimonios y reseñas en 2026. Opinafy, Testimonial.to, Senja, Famewall, TrustPilot, Google Reviews y Capterra.',
  })

  const breadcrumbJsonLd = breadcrumbSchema([
    { name: 'Inicio', url: 'https://opinafy.com' },
    { name: 'Comparativas', url: 'https://opinafy.com/comparar' },
    { name: 'Mejores herramientas de testimonios', url: 'https://opinafy.com/comparar/mejores-herramientas-testimonios' },
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
            <li className="font-medium text-gray-900">Mejores herramientas de testimonios</li>
          </ol>
        </nav>

        {/* Header */}
        <header>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Las 7 mejores herramientas de testimonios en 2026
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Elegir la herramienta de testimonios adecuada puede marcar la diferencia entre una web que genera confianza
            y otra que deja dudas. En esta guia analizamos las 7 mejores plataformas del mercado para que encuentres la
            que mejor se adapta a tu negocio. Incluimos herramientas de gestión de testimonios y plataformas de reseñas
            publicas para cubrir todas las necesidades.
          </p>
        </header>

        {/* Summary Table */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900">Tabla resumen</h2>
          <p className="mt-4 text-gray-600">
            Antes de entrar en detalle, aqui tienes un resumen rapido de las 7 herramientas que analizamos:
          </p>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-4 pr-3 font-semibold text-gray-900">#</th>
                  <th className="px-3 py-4 font-semibold text-gray-900">Herramienta</th>
                  <th className="px-3 py-4 font-semibold text-gray-900">Idioma</th>
                  <th className="px-3 py-4 font-semibold text-gray-900">Precio</th>
                  <th className="px-3 py-4 font-semibold text-gray-900">Video</th>
                  <th className="px-3 py-4 font-semibold text-gray-900">Verificacion</th>
                  <th className="px-3 py-4 font-semibold text-gray-900">Ideal para</th>
                </tr>
              </thead>
              <tbody>
                {summaryTable.map((tool, i) => (
                  <tr key={tool.name} className={i % 2 === 0 ? 'bg-gray-50' : ''}>
                    <td className="py-3 pr-3 font-medium text-gray-900">{i + 1}</td>
                    <td className={`px-3 py-3 font-medium ${i === 0 ? 'text-indigo-700' : 'text-gray-900'}`}>
                      {tool.name}
                    </td>
                    <td className="px-3 py-3 text-gray-600">{tool.language}</td>
                    <td className="px-3 py-3 text-gray-600">{tool.price}</td>
                    <td className="px-3 py-3 text-gray-600">{tool.video}</td>
                    <td className="px-3 py-3 text-gray-600">{tool.verification}</td>
                    <td className="px-3 py-3 text-gray-600">{tool.best}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Detailed Reviews */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900">Analisis detallado de cada herramienta</h2>
          <p className="mt-4 text-gray-600">
            A continuacion, analizamos cada herramienta en profundidad. Incluimos descripcion, precios, pros, contras
            y para quien es ideal cada una.
          </p>

          <div className="mt-12 space-y-16">
            {tools.map((tool) => (
              <div key={tool.name} id={tool.name.toLowerCase().replace(/[\s.]/g, '-')}>
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-lg font-bold text-indigo-700">
                    {tool.rank}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {tool.name}
                      {tool.rank === 1 && (
                        <span className="ml-3 inline-flex rounded-full bg-indigo-100 px-3 py-0.5 text-xs font-semibold text-indigo-700">
                          Mejor para mercado hispano
                        </span>
                      )}
                    </h3>
                    <p className="text-sm text-gray-500">{tool.tagline}</p>
                  </div>
                </div>

                <p className="mt-4 text-gray-600 leading-7">{tool.description}</p>

                <div className="mt-4 rounded-lg bg-gray-50 p-4">
                  <p className="text-sm">
                    <span className="font-semibold text-gray-900">Precios:</span>{' '}
                    <span className="text-gray-600">{tool.pricing}</span>
                  </p>
                  <p className="mt-1 text-sm">
                    <span className="font-semibold text-gray-900">Ideal para:</span>{' '}
                    <span className="text-gray-600">{tool.bestFor}</span>
                  </p>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div>
                    <h4 className="text-sm font-semibold text-green-700">Ventajas</h4>
                    <ul className="mt-2 space-y-1.5">
                      {tool.pros.map((pro) => (
                        <li key={pro} className="flex items-start gap-2 text-sm text-gray-600">
                          <svg className="mt-0.5 h-4 w-4 shrink-0 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-red-700">Desventajas</h4>
                    <ul className="mt-2 space-y-1.5">
                      {tool.cons.map((con) => (
                        <li key={con} className="flex items-start gap-2 text-sm text-gray-600">
                          <svg className="mt-0.5 h-4 w-4 shrink-0 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {tool.url && (
                  <div className="mt-4">
                    <Link
                      href={tool.url}
                      className="text-sm font-semibold text-indigo-600 hover:text-indigo-700"
                    >
                      {tool.url === '/' ? 'Probar Opinafy gratis' : `Ver comparativa completa: Opinafy vs ${tool.name}`}
                      {' '}→
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* How to choose */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900">¿Como elegir la herramienta adecuada?</h2>
          <p className="mt-4 text-gray-600 leading-7">
            La eleccion de la herramienta de testimonios depende de varios factores clave. Aqui te damos una guia
            rapida para tomar la decision correcta:
          </p>
          <div className="mt-6 space-y-4">
            <div className="rounded-xl border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900">Si tu mercado es hispanohablante → Opinafy</h3>
              <p className="mt-2 text-sm text-gray-600">
                Es la unica plataforma con experiencia completa en español. Tus clientes recibiran formularios en
                su idioma, lo que aumenta significativamente la tasa de respuesta. Ademas, los precios en EUR y
                el soporte en español lo convierten en la opcion mas logica.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900">Si necesitas muchas integraciones → Testimonial.to o Senja</h3>
              <p className="mt-2 text-sm text-gray-600">
                Ambas herramientas ofrecen un catalogo amplio de integraciones con herramientas de terceros. Si tu
                flujo de trabajo depende de automatizaciones complejas, estas opciones pueden ser relevantes, aunque
                estan solo en ingles.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900">Si quieres reputacion publica → Trustpilot o Google Reviews</h3>
              <p className="mt-2 text-sm text-gray-600">
                Si tu objetivo es tener reseñas publicas visibles en buscadores, estas plataformas son las indicadas.
                Ten en cuenta que no tendras control total sobre las reseñas y los planes de pago de Trustpilot son
                caros para pymes.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900">Si vendes software B2B → Capterra + Opinafy</h3>
              <p className="mt-2 text-sm text-gray-600">
                La combinacion ideal es tener presencia en Capterra para generar leads y usar Opinafy para gestionar
                y mostrar testimonios curados en tu propia web. Asi cubres tanto la captacion como la conversion.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900">Conclusion</h2>
          <p className="mt-4 text-gray-600 leading-7">
            El mercado de herramientas de testimonios ha madurado considerablemente en los ultimos años, y en 2026
            hay opciones para todos los presupuestos y necesidades. Sin embargo, la gran mayoria de estas herramientas
            estan diseñadas para el mercado anglosajón, lo que deja una brecha importante para los negocios
            hispanohablantes.
          </p>
          <p className="mt-4 text-gray-600 leading-7">
            <strong>Opinafy llena esa brecha.</strong> Es la unica plataforma de testimonios construida nativamente
            en español, con precios en euros, verificación de empresa y soporte en tu idioma. Para cualquier negocio
            que opere en España o Latinoamerica, es la opcion que ofrece la mejor experiencia tanto para ti como para
            tus clientes.
          </p>
          <p className="mt-4 text-gray-600 leading-7">
            Dicho esto, cada negocio es diferente. Si operas exclusivamente en ingles o necesitas funcionalidades muy
            especificas como un amplio catalogo de integraciones, herramientas como Testimonial.to o Senja pueden ser
            buenas alternativas. Y si necesitas reputacion publica, combinar Opinafy con Google Reviews o Trustpilot
            puede ser la estrategia mas completa.
          </p>
          <p className="mt-4 text-gray-600 leading-7">
            Lo importante es empezar a recopilar testimonios. La prueba social es uno de los factores mas influyentes
            en la decision de compra, y cuanto antes empieces a construir tu base de testimonios, antes veras
            resultados en tus conversiones.
          </p>
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
            Empieza a recopilar testimonios hoy
          </h2>
          <p className="mt-4 text-indigo-100">
            Crea tu cuenta de Opinafy en menos de 2 minutos. Plan gratuito disponible. Sin tarjeta de credito.
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
