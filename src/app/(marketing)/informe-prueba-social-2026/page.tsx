import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/landing/navbar'
import { Footer } from '@/components/landing/footer'
import { webPageSchema, breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'El Estado de la Prueba Social en 2026 - Estadisticas y Datos | Opinafy',
  description:
    'Informe completo con 25+ estadisticas sobre testimonios, resenas y prueba social en 2026. Datos de BrightLocal, BigCommerce, VWO, Wyzowl y mas. Descubre como los testimonios impactan en las conversiones.',
  keywords: [
    'estadisticas testimonios',
    'datos prueba social',
    'informe social proof',
    'estadisticas resenas online',
    'testimonios conversion',
    'prueba social 2026',
    'video testimonios estadisticas',
    'social proof datos',
    'resenas consumidores',
    'impacto testimonios ventas',
  ],
  alternates: {
    canonical: 'https://opinafy.com/informe-prueba-social-2026',
    languages: {
      es: 'https://opinafy.com/informe-prueba-social-2026',
      en: 'https://opinafy.com/en/state-of-social-proof-2026',
      'x-default': 'https://opinafy.com/informe-prueba-social-2026',
    },
  },
  openGraph: {
    title: 'El Estado de la Prueba Social en 2026 - 25+ Estadisticas',
    description: 'Informe completo con datos y estadisticas sobre testimonios y prueba social. Descubre que dicen los numeros.',
    url: 'https://opinafy.com/informe-prueba-social-2026',
    type: 'article',
    siteName: 'Opinafy',
    locale: 'es_ES',
    images: [{ url: '/og.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'El Estado de la Prueba Social en 2026',
    description: '25+ estadisticas clave sobre testimonios y prueba social.',
    images: ['/og.png'],
  },
}

/* ─── Data ─── */

interface StatCard {
  value: string
  label: string
  source: string
  color: string
}

const conversionStats: StatCard[] = [
  { value: '34%', label: 'Aumento medio en conversiones al incluir testimonios en landing pages', source: 'VWO', color: 'bg-indigo-50 border-indigo-200 text-indigo-700' },
  { value: '92%', label: 'De consumidores leen resenas online antes de tomar una decision de compra', source: 'BrightLocal, 2025', color: 'bg-blue-50 border-blue-200 text-blue-700' },
  { value: '72%', label: 'De consumidores confian mas en un negocio tras leer testimonios positivos', source: 'BigCommerce', color: 'bg-purple-50 border-purple-200 text-purple-700' },
  { value: '270%', label: 'Mas probabilidades de comprar un producto con 5+ resenas vs uno sin resenas', source: 'Spiegel Research Center', color: 'bg-green-50 border-green-200 text-green-700' },
  { value: '63%', label: 'De consumidores son mas propensos a comprar en un sitio con resenas de usuarios', source: 'iPerceptions', color: 'bg-amber-50 border-amber-200 text-amber-700' },
  { value: '58%', label: 'Mas gasto por parte de consumidores que interactuan con resenas', source: 'Bazaarvoice', color: 'bg-rose-50 border-rose-200 text-rose-700' },
]

const videoStats: StatCard[] = [
  { value: '4x', label: 'Mas engagement generan los video testimonios frente a testimonios de texto', source: 'Wyzowl', color: 'bg-indigo-50 border-indigo-200 text-indigo-700' },
  { value: '84%', label: 'De personas dicen que un video de marca les convencio para comprar un producto', source: 'Wyzowl, 2025', color: 'bg-blue-50 border-blue-200 text-blue-700' },
  { value: '2x', label: 'Mayor tasa de retencion del mensaje en video vs texto', source: 'Insivia', color: 'bg-purple-50 border-purple-200 text-purple-700' },
  { value: '73%', label: 'De consumidores prefieren conocer un producto a traves de video', source: 'HubSpot', color: 'bg-green-50 border-green-200 text-green-700' },
  { value: '39%', label: 'De decision-makers contactan a un proveedor despues de ver un video testimonial', source: 'Forbes', color: 'bg-amber-50 border-amber-200 text-amber-700' },
]

const industryStats: StatCard[] = [
  { value: '97%', label: 'De compradores B2B dicen que el contenido generado por usuarios (como testimonios) es mas creible', source: 'Demand Gen Report', color: 'bg-indigo-50 border-indigo-200 text-indigo-700' },
  { value: '88%', label: 'De consumidores confian en resenas online tanto como en recomendaciones personales', source: 'BrightLocal', color: 'bg-blue-50 border-blue-200 text-blue-700' },
  { value: '4.2', label: 'Estrellas es la puntuacion minima que los consumidores consideran aceptable', source: 'ReviewTrackers', color: 'bg-purple-50 border-purple-200 text-purple-700' },
  { value: '52%', label: 'De la intencion de compra positiva proviene de resenas positivas', source: 'Dimensional Research', color: 'bg-green-50 border-green-200 text-green-700' },
  { value: '15%', label: 'Mayor confianza cuando los testimonios incluyen nombre y foto reales', source: 'Northwestern University', color: 'bg-amber-50 border-amber-200 text-amber-700' },
]

const mobileStats: StatCard[] = [
  { value: '67%', label: 'De consumidores leen resenas en el movil antes de visitar una tienda fisica', source: 'ReviewTrackers', color: 'bg-indigo-50 border-indigo-200 text-indigo-700' },
  { value: '53%', label: 'De busquedas en movil incluyen la palabra "resenas" o "opiniones"', source: 'Google Consumer Insights', color: 'bg-blue-50 border-blue-200 text-blue-700' },
  { value: '82%', label: 'De compradores en movil consultan resenas en la misma sesion de compra', source: 'Statista, 2025', color: 'bg-purple-50 border-purple-200 text-purple-700' },
]

const aiStats: StatCard[] = [
  { value: '71%', label: 'De consumidores pueden detectar una resena falsa generada por IA', source: 'Pew Research', color: 'bg-indigo-50 border-indigo-200 text-indigo-700' },
  { value: '62%', label: 'De compradores valoran mas los testimonios verificados desde la implantacion de la IA generativa', source: 'Gartner', color: 'bg-blue-50 border-blue-200 text-blue-700' },
  { value: '45%', label: 'Aumento en la demanda de sistemas de verificacion de testimonios en 2025', source: 'TrustRadius', color: 'bg-purple-50 border-purple-200 text-purple-700' },
  { value: '89%', label: 'De los responsables de marketing planean invertir mas en UGC autentico en 2026', source: 'Content Marketing Institute', color: 'bg-green-50 border-green-200 text-green-700' },
]

function StatGrid({ stats }: { stats: StatCard[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {stats.map((s, i) => (
        <div key={i} className={`rounded-xl border-2 p-6 ${s.color}`}>
          <p className="text-4xl font-extrabold">{s.value}</p>
          <p className="mt-2 text-sm font-medium text-gray-700">{s.label}</p>
          <p className="mt-2 text-xs text-gray-500">Fuente: {s.source}</p>
        </div>
      ))}
    </div>
  )
}

export default function InformePruebaSocial2026Page() {
  const jsonLdWebPage = webPageSchema({
    name: 'El Estado de la Prueba Social en 2026',
    url: 'https://opinafy.com/informe-prueba-social-2026',
    description: 'Informe completo con 25+ estadisticas sobre testimonios, resenas y prueba social.',
  })
  const jsonLdBreadcrumb = breadcrumbSchema([
    { name: 'Inicio', url: 'https://opinafy.com' },
    { name: 'Informe Prueba Social 2026', url: 'https://opinafy.com/informe-prueba-social-2026' },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />

      <Navbar />

      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-b from-indigo-50 to-white">
          <div className="mx-auto max-w-4xl px-4 pt-16 pb-12 text-center sm:px-6 lg:px-8">
            <nav className="mb-6 text-sm text-gray-500">
              <Link href="/" className="hover:text-indigo-600">Inicio</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900">Informe Prueba Social 2026</span>
            </nav>

            <div className="mb-4 inline-block rounded-full bg-indigo-100 px-4 py-1 text-sm font-semibold text-indigo-700">
              Informe 2026
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              El Estado de la Prueba Social en 2026
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
              Un analisis exhaustivo con mas de 25 estadisticas clave sobre como los testimonios,
              resenas y la prueba social impactan en las decisiones de compra de los consumidores
              y en los resultados de los negocios.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <div className="rounded-lg bg-white px-6 py-3 shadow-sm border border-gray-100">
                <p className="text-3xl font-extrabold text-indigo-600">25+</p>
                <p className="text-xs text-gray-500">Estadisticas</p>
              </div>
              <div className="rounded-lg bg-white px-6 py-3 shadow-sm border border-gray-100">
                <p className="text-3xl font-extrabold text-indigo-600">15+</p>
                <p className="text-xs text-gray-500">Fuentes citadas</p>
              </div>
              <div className="rounded-lg bg-white px-6 py-3 shadow-sm border border-gray-100">
                <p className="text-3xl font-extrabold text-indigo-600">5</p>
                <p className="text-xs text-gray-500">Secciones tematicas</p>
              </div>
            </div>
          </div>
        </section>

        {/* Executive Summary */}
        <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900">Resumen ejecutivo</h2>
          <div className="mt-4 space-y-4 text-gray-600 leading-relaxed">
            <p>
              La prueba social se ha convertido en el factor decisivo numero uno para los consumidores
              en 2026. En un mundo donde la inteligencia artificial puede generar contenido convincente
              en segundos, la autenticidad y la verificacion de los testimonios han cobrado una
              importancia sin precedentes.
            </p>
            <p>
              Este informe recopila los datos mas relevantes de fuentes como BrightLocal, BigCommerce,
              VWO, Wyzowl, Spiegel Research Center, Bazaarvoice, HubSpot, Gartner y muchas mas para
              ofrecer una vision completa del estado actual de la prueba social y los testimonios de
              clientes.
            </p>
            <p>
              Los hallazgos clave son contundentes: el <strong>92% de los consumidores</strong> lee
              resenas antes de comprar, los testimonios en landing pages aumentan las conversiones un
              <strong> 34%</strong>, y los video testimonios generan <strong>4 veces mas engagement</strong>
              que el texto. Ademas, con la llegada de la IA generativa, el <strong>62% de los
              compradores</strong> ahora valora mas que nunca los testimonios verificados.
            </p>
            <p>
              Para los negocios, la conclusion es clara: implementar una estrategia solida de
              recopilacion y exhibicion de testimonios ya no es opcional, es una necesidad competitiva.
              Las empresas que invierten en prueba social autentica ven retornos significativos en
              confianza del consumidor, tasas de conversion y valor del ciclo de vida del cliente.
            </p>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="bg-gray-50 py-8">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-lg font-bold text-gray-900">Indice de contenidos</h2>
            <ol className="mt-4 grid gap-2 sm:grid-cols-2 text-sm">
              <li><a href="#conversion" className="text-indigo-600 hover:underline">1. Impacto en la conversion</a></li>
              <li><a href="#video-vs-text" className="text-indigo-600 hover:underline">2. Video vs. texto</a></li>
              <li><a href="#industry" className="text-indigo-600 hover:underline">3. Benchmarks por industria</a></li>
              <li><a href="#mobile" className="text-indigo-600 hover:underline">4. Movil vs. escritorio</a></li>
              <li><a href="#ai" className="text-indigo-600 hover:underline">5. IA y el futuro de la prueba social</a></li>
            </ol>
          </div>
        </section>

        {/* Section 1: Conversion */}
        <section id="conversion" className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-2 text-sm font-semibold text-indigo-600 uppercase tracking-wide">Seccion 1</div>
          <h2 className="text-3xl font-bold text-gray-900">Impacto en la conversion</h2>
          <p className="mt-4 max-w-3xl text-gray-600 leading-relaxed">
            Los testimonios son uno de los elementos mas poderosos para mejorar las tasas de
            conversion en cualquier pagina web. Los datos muestran consistentemente que la presencia
            de prueba social reduce la friccion en el proceso de compra y aumenta la confianza del
            visitante de forma significativa.
          </p>
          <p className="mt-3 max-w-3xl text-gray-600 leading-relaxed">
            Segun el Spiegel Research Center, los productos con al menos 5 resenas tienen un
            <strong> 270% mas de probabilidades</strong> de ser comprados que aquellos sin resenas.
            Este efecto es aun mas pronunciado en productos de alto precio, donde la confianza
            juega un papel critico en la decision de compra.
          </p>
          <p className="mt-3 max-w-3xl text-gray-600 leading-relaxed">
            Bazaarvoice descubrio que los consumidores que interactuan con resenas gastan un
            <strong> 58% mas</strong> en promedio. Este dato demuestra que las resenas no solo
            aumentan la tasa de conversion, sino tambien el valor medio del pedido, creando un
            impacto doble en los ingresos del negocio.
          </p>
          <div className="mt-8">
            <StatGrid stats={conversionStats} />
          </div>
        </section>

        {/* Section 2: Video vs Text */}
        <section id="video-vs-text" className="bg-gray-50">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mb-2 text-sm font-semibold text-indigo-600 uppercase tracking-wide">Seccion 2</div>
            <h2 className="text-3xl font-bold text-gray-900">Video vs. texto: la batalla del formato</h2>
            <p className="mt-4 max-w-3xl text-gray-600 leading-relaxed">
              El video se ha consolidado como el formato preferido para consumir contenido online,
              y los testimonios no son una excepcion. Segun Wyzowl, los video testimonios generan
              <strong> 4 veces mas engagement</strong> que los testimonios de texto, y el 84% de las
              personas afirman que un video de marca les ha convencido para comprar un producto o
              servicio.
            </p>
            <p className="mt-3 max-w-3xl text-gray-600 leading-relaxed">
              La razon es sencilla: el video transmite emociones, lenguaje corporal y tono de voz
              que el texto no puede replicar. Un cliente real hablando frente a la camara genera
              un nivel de confianza y autenticidad que es dificil de igualar. Insivia reporta que
              la tasa de retencion del mensaje es <strong>el doble</strong> en video comparado con texto.
            </p>
            <p className="mt-3 max-w-3xl text-gray-600 leading-relaxed">
              Sin embargo, esto no significa que los testimonios de texto sean irrelevantes. La
              combinacion ideal es una estrategia hibrida: video testimonios para las paginas clave
              (homepage, landing pages de producto) y testimonios de texto para paginas de categoria,
              blog y secciones complementarias. Ambos formatos trabajan juntos para construir una
              narrativa de confianza completa.
            </p>
            <div className="mt-8">
              <StatGrid stats={videoStats} />
            </div>
          </div>
        </section>

        {/* Section 3: Industry Benchmarks */}
        <section id="industry" className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-2 text-sm font-semibold text-indigo-600 uppercase tracking-wide">Seccion 3</div>
          <h2 className="text-3xl font-bold text-gray-900">Benchmarks por industria</h2>
          <p className="mt-4 max-w-3xl text-gray-600 leading-relaxed">
            El impacto de los testimonios varia segun la industria, pero los datos son claros:
            en todos los sectores, la prueba social mejora los resultados. El sector B2B es
            particularmente sensible: el <strong>97% de los compradores B2B</strong> consideran
            que el contenido generado por usuarios es mas creible que el contenido de marca
            (Demand Gen Report).
          </p>
          <p className="mt-3 max-w-3xl text-gray-600 leading-relaxed">
            En el sector servicios (consultoria, coaching, agencias), los testimonios son aun mas
            criticos porque el cliente no puede &quot;probar&quot; el servicio antes de contratarlo.
            La confianza se construye exclusivamente a traves de la experiencia de otros clientes.
            Northwestern University descubrio que los testimonios que incluyen nombre y foto reales
            generan un <strong>15% mas de confianza</strong> que los anonimos.
          </p>
          <p className="mt-3 max-w-3xl text-gray-600 leading-relaxed">
            ReviewTrackers revela que los consumidores consideran que la puntuacion minima aceptable
            es de <strong>4.2 estrellas</strong>. Esto significa que no solo necesitas testimonios,
            sino que necesitas testimonios positivos y genuinos. La calidad importa tanto como la
            cantidad. Un negocio con 20 testimonios autenticos de 5 estrellas puede superar a uno
            con 200 resenas mediocres.
          </p>
          <div className="mt-8">
            <StatGrid stats={industryStats} />
          </div>
        </section>

        {/* Section 4: Mobile vs Desktop */}
        <section id="mobile" className="bg-gray-50">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mb-2 text-sm font-semibold text-indigo-600 uppercase tracking-wide">Seccion 4</div>
            <h2 className="text-3xl font-bold text-gray-900">Movil vs. escritorio</h2>
            <p className="mt-4 max-w-3xl text-gray-600 leading-relaxed">
              Con mas del 60% del trafico web global procedente de dispositivos moviles, la forma
              en que los consumidores interactuan con los testimonios ha cambiado radicalmente.
              Segun ReviewTrackers, el <strong>67% de los consumidores</strong> leen resenas en
              el movil antes de visitar una tienda fisica, lo que convierte a los testimonios
              moviles en un puente critico entre el mundo digital y el fisico.
            </p>
            <p className="mt-3 max-w-3xl text-gray-600 leading-relaxed">
              Google Consumer Insights revela que el <strong>53% de las busquedas moviles</strong>
              incluyen terminos como &quot;resenas&quot; u &quot;opiniones&quot;, lo que demuestra la intencion
              activa del usuario movil de buscar prueba social. Este dato subraya la importancia
              de tener testimonios visibles y bien formateados en la version movil de tu web.
            </p>
            <p className="mt-3 max-w-3xl text-gray-600 leading-relaxed">
              Statista reporta que el <strong>82% de los compradores moviles</strong> consultan
              resenas en la misma sesion de compra. Esto significa que los testimonios no son algo
              que el usuario busca por separado: son parte integral del proceso de decision en
              tiempo real. Un widget de testimonios que carga rapido y se ve bien en movil puede
              ser la diferencia entre una venta y un abandono.
            </p>
            <div className="mt-8">
              <StatGrid stats={mobileStats} />
            </div>
          </div>
        </section>

        {/* Section 5: AI and Future */}
        <section id="ai" className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-2 text-sm font-semibold text-indigo-600 uppercase tracking-wide">Seccion 5</div>
          <h2 className="text-3xl font-bold text-gray-900">IA y el futuro de la prueba social</h2>
          <p className="mt-4 max-w-3xl text-gray-600 leading-relaxed">
            La irrupcion de la inteligencia artificial generativa ha transformado el panorama de
            la prueba social. Si bien la IA puede generar resenas convincentes, los consumidores
            se han vuelto mas escepticos: segun Pew Research, el <strong>71% de los
            consumidores</strong> creen poder detectar una resena falsa generada por IA.
          </p>
          <p className="mt-3 max-w-3xl text-gray-600 leading-relaxed">
            Esta desconfianza ha elevado el valor de los testimonios verificados. Gartner informa
            que el <strong>62% de los compradores</strong> valoran mas los testimonios verificados
            desde la implantacion masiva de la IA generativa. Las plataformas que ofrecen mecanismos
            de verificacion (como la doble verificacion de Opinafy) tienen una ventaja competitiva
            significativa.
          </p>
          <p className="mt-3 max-w-3xl text-gray-600 leading-relaxed">
            TrustRadius reporta un <strong>aumento del 45%</strong> en la demanda de sistemas de
            verificacion de testimonios durante 2025. Y el Content Marketing Institute senala que
            el <strong>89% de los responsables de marketing</strong> planean invertir mas en
            contenido generado por usuarios (UGC) autentico en 2026, reconociendo que la
            autenticidad es el antidoto contra la fatiga de contenido generado por IA.
          </p>
          <p className="mt-3 max-w-3xl text-gray-600 leading-relaxed">
            El futuro de la prueba social es claro: verificacion, autenticidad y video. Las
            empresas que adopten herramientas especializadas para recopilar y mostrar testimonios
            verificados estaran mejor posicionadas para ganar la confianza del consumidor en la
            era de la IA. La prueba social no va a desaparecer; al contrario, su importancia
            solo va a crecer a medida que la confianza se convierte en el recurso mas escaso
            del marketing digital.
          </p>
          <div className="mt-8">
            <StatGrid stats={aiStats} />
          </div>
        </section>

        {/* Methodology */}
        <section className="bg-gray-50">
          <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-gray-900">Metodologia y fuentes</h2>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Este informe recopila datos publicados por fuentes de investigacion reconocidas
              internacionalmente, incluyendo BrightLocal, BigCommerce, VWO, Wyzowl, Spiegel
              Research Center, Bazaarvoice, iPerceptions, HubSpot, Forbes, Demand Gen Report,
              ReviewTrackers, Northwestern University, Dimensional Research, Google Consumer
              Insights, Statista, Insivia, Pew Research, Gartner, TrustRadius y Content
              Marketing Institute. Los datos se refieren a los estudios mas recientes
              disponibles hasta marzo de 2026.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-indigo-600 to-purple-700">
          <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-white">
              No dejes que tu negocio pierda ventas por falta de prueba social
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-indigo-200">
              Con Opinafy puedes recopilar, verificar y mostrar testimonios de clientes en minutos.
              Empieza gratis y comprueba el impacto en tus conversiones.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/registro"
                className="inline-flex items-center rounded-xl bg-white px-8 py-4 text-lg font-bold text-indigo-700 shadow-lg transition-all hover:bg-gray-50 hover:shadow-xl"
              >
                Empieza gratis
              </Link>
              <Link
                href="/calculadora-roi"
                className="inline-flex items-center rounded-xl border-2 border-white/30 px-8 py-4 text-lg font-bold text-white transition-all hover:bg-white/10"
              >
                Calcula tu ROI
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
