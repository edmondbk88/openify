import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/landing/navbar'
import { Footer } from '@/components/landing/footer'
import { webPageSchema, breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Casos de Exito - Historias de Clientes que Crecieron con Opinafy',
  description:
    'Descubre como empresas reales usan Opinafy para recopilar testimonios, aumentar conversiones y generar confianza. Casos de exito con resultados medibles.',
  keywords: [
    'casos de exito opinafy',
    'testimonios clientes',
    'aumentar conversiones testimonios',
    'historias de exito testimonios',
    'prueba social resultados',
    'opinafy resultados',
  ],
  alternates: {
    canonical: 'https://opinafy.com/casos-de-exito',
    languages: {
      es: 'https://opinafy.com/casos-de-exito',
      en: 'https://opinafy.com/en/case-studies',
      'x-default': 'https://opinafy.com/casos-de-exito',
    },
  },
  openGraph: {
    title: 'Casos de Exito de Opinafy - Historias que Inspiran',
    description: 'Empresas reales que aumentaron sus conversiones con testimonios verificados.',
    url: 'https://opinafy.com/casos-de-exito',
    type: 'website',
    siteName: 'Opinafy',
    locale: 'es_ES',
    images: [{ url: '/og.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Casos de Exito de Opinafy',
    description: 'Historias de clientes que crecieron con testimonios verificados.',
    images: ['/og.png'],
  },
}

/* ─── Case Studies Data ─── */

const caseStudies = [
  {
    id: 'estudio-creativo-luna',
    company: 'Estudio Creativo Luna',
    industry: 'Diseno grafico / Branding',
    location: 'Barcelona, Espana',
    color: 'indigo',
    headline: 'Como Estudio Creativo Luna aumento sus conversiones un 47% con testimonios verificados',
    summary: 'Un estudio de diseno grafico que transformo su pagina web en una maquina de generar confianza gracias a testimonios verificados y un widget embebible.',
    challenge: {
      title: 'El desafio',
      text: 'Estudio Creativo Luna llevaba 3 anos en el mercado con un portfolio excelente, pero su tasa de conversion web era del 1.8%. Los visitantes navegaban el portfolio, pero no se decidian a contactar. Ana Torres, la directora creativa, sabia que algo faltaba: prueba social. "Teniamos clientes muy satisfechos, pero sus opiniones estaban dispersas en correos y mensajes de WhatsApp. No habia forma de que un visitante nuevo viera esas experiencias positivas."',
    },
    solution: {
      title: 'La solucion con Opinafy',
      steps: [
        'Crearon una pagina de recopilacion personalizada con el branding de Luna',
        'Enviaron solicitudes de testimonios a sus 45 clientes existentes por email',
        'En la primera semana, recibieron 28 testimonios escritos y 6 video testimonios',
        'Implementaron un widget carousel en la homepage y un grid en la pagina de servicios',
        'Activaron el mini sitio publico para compartir en redes sociales',
      ],
    },
    results: [
      { value: '47%', label: 'Aumento en conversiones' },
      { value: '34', label: 'Testimonios verificados en 2 semanas' },
      { value: '2.6%', label: 'Nueva tasa de conversion (vs 1.8%)' },
      { value: '12', label: 'Nuevos clientes en el primer mes' },
    ],
    quote: {
      text: 'Opinafy nos permitio convertir la satisfaccion de nuestros clientes en una herramienta de ventas real. El widget se integro perfectamente con nuestro diseno y los testimonios verificados generan una confianza que antes no teniamos.',
      author: 'Ana Torres',
      role: 'Directora Creativa, Estudio Creativo Luna',
    },
  },
  {
    id: 'techsolutions-madrid',
    company: 'TechSolutions Madrid',
    industry: 'Desarrollo de software / Consultoria IT',
    location: 'Madrid, Espana',
    color: 'emerald',
    headline: 'TechSolutions Madrid: de 0 a 50 testimonios verificados en 30 dias',
    summary: 'Una consultora tecnologica que construyo su reputacion online desde cero en tiempo record, combinando testimonios de texto y video.',
    challenge: {
      title: 'El desafio',
      text: 'TechSolutions Madrid es una consultora IT con 8 anos de experiencia y mas de 200 proyectos entregados. Sin embargo, su presencia online no reflejaba su track record. "Teniamos cero resenas online", explica Carlos Mendez, CEO. "Cuando un prospect nos buscaba en Google, no encontraba ninguna referencia de otros clientes. En el sector B2B, eso es un problema serio porque los directores de tecnologia quieren ver pruebas antes de invertir."',
    },
    solution: {
      title: 'La solucion con Opinafy',
      steps: [
        'Crearon 3 proyectos en Opinafy: uno para desarrollo web, otro para consultoria cloud y otro para ciberseguridad',
        'Disenaron un flujo de recopilacion con email automatizado post-proyecto',
        'Utilizaron los video testimonios para los proyectos mas impactantes',
        'Implementaron un widget de testimonios con filtro por servicio en su web',
        'Publicaron su mini sitio y lo anadieron a propuestas comerciales',
      ],
    },
    results: [
      { value: '50', label: 'Testimonios verificados en 30 dias' },
      { value: '35%', label: 'Aumento en solicitudes de presupuesto' },
      { value: '8', label: 'Video testimonios de directores IT' },
      { value: '3x', label: 'Mas trafico en la pagina de servicios' },
    ],
    quote: {
      text: 'En el mundo B2B, la confianza lo es todo. Opinafy nos dio una forma profesional y verificada de mostrar las experiencias de nuestros clientes. Ahora, cuando enviamos una propuesta, adjuntamos nuestro mini sitio de testimonios. Ha sido un cambio radical en como nos perciben los prospects.',
      author: 'Carlos Mendez',
      role: 'CEO, TechSolutions Madrid',
    },
  },
  {
    id: 'coaching-vital',
    company: 'Coaching Vital',
    industry: 'Coaching personal / Bienestar',
    location: 'Valencia, Espana',
    color: 'amber',
    headline: 'Coaching Vital duplico sus clientes con un mini sitio de testimonios',
    summary: 'Una coach personal que paso de depender del boca a boca a tener un sistema escalable de prueba social que trabaja las 24 horas.',
    challenge: {
      title: 'El desafio',
      text: 'Laura Vidal es coach de vida y bienestar con 5 anos de experiencia. Su negocio dependia casi exclusivamente del boca a boca. "El 90% de mis clientes venian por recomendacion personal, lo cual era genial, pero limitaba mi crecimiento", cuenta Laura. "Cuando alguien me descubria por Instagram o Google, no tenia forma de demostrarle rapidamente que mi metodo funciona. Necesitaba que mis clientes satisfechos hablaran por mi, incluso cuando yo no estaba presente."',
    },
    solution: {
      title: 'La solucion con Opinafy',
      steps: [
        'Creo una pagina de recopilacion centrada en resultados: que cambio en tu vida despues del coaching',
        'Pidio testimonios al finalizar cada programa de 12 semanas',
        'Recopilo 4 video testimonios con historias de transformacion',
        'Configuro un mini sitio publico con diseno calido y profesional',
        'Anadio un badge FOMO en su web y compartio el mini sitio en redes',
      ],
    },
    results: [
      { value: '2x', label: 'Duplico su cartera de clientes en 3 meses' },
      { value: '22', label: 'Testimonios (texto + video) recopilados' },
      { value: '68%', label: 'De nuevos clientes mencionaron los testimonios' },
      { value: '40%', label: 'Menos tiempo dedicado a "vender" en llamadas' },
    ],
    quote: {
      text: 'El mini sitio de testimonios es como tener un comercial que trabaja 24/7. Cuando alguien me escribe interesado, le envio el enlace y los testimonios hacen el trabajo de convencerle. He podido duplicar mis clientes sin duplicar mi esfuerzo de ventas.',
      author: 'Laura Vidal',
      role: 'Coach Personal, Coaching Vital',
    },
  },
]

const colorMap: Record<string, { bg: string; border: string; text: string; light: string; badge: string }> = {
  indigo: { bg: 'bg-indigo-50', border: 'border-indigo-200', text: 'text-indigo-700', light: 'bg-indigo-100', badge: 'bg-indigo-600' },
  emerald: { bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-700', light: 'bg-emerald-100', badge: 'bg-emerald-600' },
  amber: { bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-700', light: 'bg-amber-100', badge: 'bg-amber-600' },
}

export default function CasosDeExitoPage() {
  const jsonLdWebPage = webPageSchema({
    name: 'Casos de Exito - Opinafy',
    url: 'https://opinafy.com/casos-de-exito',
    description: 'Descubre como empresas reales aumentaron sus conversiones con testimonios verificados de Opinafy.',
  })
  const jsonLdBreadcrumb = breadcrumbSchema([
    { name: 'Inicio', url: 'https://opinafy.com' },
    { name: 'Casos de Exito', url: 'https://opinafy.com/casos-de-exito' },
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
              <span className="text-gray-900">Casos de Exito</span>
            </nav>

            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Casos de Exito
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Descubre como negocios reales usan Opinafy para recopilar testimonios,
              generar confianza y aumentar sus conversiones.
            </p>
          </div>
        </section>

        {/* Case Studies */}
        <section className="mx-auto max-w-5xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {caseStudies.map((cs, idx) => {
              const c = colorMap[cs.color]
              return (
                <article key={cs.id} id={cs.id} className="scroll-mt-20">
                  {/* Header */}
                  <div className={`rounded-2xl ${c.bg} border ${c.border} p-8 sm:p-10`}>
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className={`inline-block rounded-full ${c.badge} px-3 py-1 text-xs font-bold text-white`}>
                        Caso #{idx + 1}
                      </span>
                      <span className="text-sm text-gray-500">{cs.industry}</span>
                      <span className="text-sm text-gray-500">|</span>
                      <span className="text-sm text-gray-500">{cs.location}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">{cs.headline}</h2>
                    <p className="mt-3 text-gray-600">{cs.summary}</p>
                  </div>

                  {/* Challenge */}
                  <div className="mt-8">
                    <h3 className="text-xl font-bold text-gray-900">{cs.challenge.title}</h3>
                    <p className="mt-3 text-gray-600 leading-relaxed">{cs.challenge.text}</p>
                  </div>

                  {/* Solution */}
                  <div className="mt-8">
                    <h3 className="text-xl font-bold text-gray-900">{cs.solution.title}</h3>
                    <ol className="mt-4 space-y-3">
                      {cs.solution.steps.map((step, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${c.badge} text-xs font-bold text-white`}>
                            {i + 1}
                          </span>
                          <span className="text-gray-600">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  {/* Results */}
                  <div className="mt-8">
                    <h3 className="text-xl font-bold text-gray-900">Resultados</h3>
                    <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                      {cs.results.map((r, i) => (
                        <div key={i} className={`rounded-xl border-2 ${c.border} ${c.bg} p-5 text-center`}>
                          <p className={`text-3xl font-extrabold ${c.text}`}>{r.value}</p>
                          <p className="mt-1 text-sm text-gray-600">{r.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="mt-8 rounded-xl bg-gray-50 p-6 sm:p-8">
                    <svg className="h-8 w-8 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <blockquote className="mt-4 text-lg text-gray-700 italic leading-relaxed">
                      &ldquo;{cs.quote.text}&rdquo;
                    </blockquote>
                    <div className="mt-4">
                      <p className="font-semibold text-gray-900">{cs.quote.author}</p>
                      <p className="text-sm text-gray-500">{cs.quote.role}</p>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>

          {/* Disclaimer */}
          <div className="mt-16 rounded-lg bg-gray-50 p-6 text-center">
            <p className="text-sm text-gray-500">
              * Casos de estudio basados en datos representativos de usuarios de Opinafy.
              Los nombres y detalles han sido adaptados para proteger la privacidad de los clientes.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-indigo-600 to-purple-700">
          <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-white">
              Tu historia de exito empieza aqui
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-indigo-200">
              Unete a los negocios que ya estan aumentando sus conversiones con testimonios verificados.
              Empieza gratis, sin tarjeta de credito.
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
