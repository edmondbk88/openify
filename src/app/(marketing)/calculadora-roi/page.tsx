'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Navbar } from '@/components/landing/navbar'
import { Footer } from '@/components/landing/footer'

/* ─── Animated counter ─── */
function AnimatedNumber({ value, prefix = '', suffix = '', duration = 800 }: { value: number; prefix?: string; suffix?: string; duration?: number }) {
  const [display, setDisplay] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const start = 0
    const end = value
    if (end === 0) { setDisplay(0); return }
    const startTime = performance.now()

    function animate(now: number) {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.round(start + (end - start) * eased)
      setDisplay(current)
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [value, duration])

  return (
    <span ref={ref}>
      {prefix}{display.toLocaleString('es-ES')}{suffix}
    </span>
  )
}

/* ─── JSON-LD (rendered client-side) ─── */
function JsonLd() {
  const webPage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Calculadora ROI de Testimonios',
    url: 'https://opinafy.com/calculadora-roi',
    description: 'Calcula cuánto dinero pierdes sin testimonios en tu web. Descubre el ROI de implementar prueba social con Opinafy.',
    isPartOf: { '@type': 'WebSite', name: 'Opinafy', url: 'https://opinafy.com' },
    publisher: { '@type': 'Organization', name: 'Opinafy', url: 'https://opinafy.com', logo: 'https://opinafy.com/logo-opinafy.png' },
    inLanguage: 'es',
  }
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://opinafy.com' },
      { '@type': 'ListItem', position: 2, name: 'Calculadora ROI', item: 'https://opinafy.com/calculadora-roi' },
    ],
  }
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </>
  )
}

const PLAN_COST_MONTHLY = 9 // Pro plan
const PLAN_COST_ANNUAL = PLAN_COST_MONTHLY * 12

export default function CalculadoraROIPage() {
  const [visitors, setVisitors] = useState(5000)
  const [conversionRate, setConversionRate] = useState(2)
  const [avgOrder, setAvgOrder] = useState(50)

  const currentRevenue = Math.round(visitors * (conversionRate / 100) * avgOrder)
  const improvedRevenue = Math.round(visitors * ((conversionRate * 1.34) / 100) * avgOrder)
  const additionalMonthly = improvedRevenue - currentRevenue
  const additionalAnnual = additionalMonthly * 12
  const roi = additionalAnnual > 0 ? Math.round(((additionalAnnual - PLAN_COST_ANNUAL) / PLAN_COST_ANNUAL) * 100) : 0

  return (
    <>
      <JsonLd />
      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-white">
        {/* Hero */}
        <section className="mx-auto max-w-4xl px-4 pt-16 pb-8 text-center sm:px-6 lg:px-8">
          <nav className="mb-6 text-sm text-gray-500">
            <Link href="/" className="hover:text-indigo-600">Inicio</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Calculadora ROI</span>
          </nav>

          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Calculadora ROI de Testimonios
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Descubre cuanto dinero pierdes sin testimonios en tu web.
            Los estudios demuestran que los testimonios aumentan las conversiones hasta un <strong className="text-indigo-600">34%</strong>.
          </p>
        </section>

        {/* Calculator */}
        <section className="mx-auto max-w-5xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Inputs */}
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <h2 className="mb-6 text-xl font-bold text-gray-900">Tus datos actuales</h2>

              <div className="space-y-6">
                <div>
                  <label htmlFor="visitors" className="block text-sm font-medium text-gray-700">
                    Visitantes mensuales
                  </label>
                  <input
                    id="visitors"
                    type="number"
                    min={0}
                    value={visitors}
                    onChange={(e) => setVisitors(Number(e.target.value) || 0)}
                    className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 text-lg font-semibold text-gray-900 focus:border-indigo-500 focus:ring-indigo-500"
                  />
                  <p className="mt-1 text-xs text-gray-400">Visitas unicas a tu web por mes</p>
                </div>

                <div>
                  <label htmlFor="convRate" className="block text-sm font-medium text-gray-700">
                    Tasa de conversion actual (%)
                  </label>
                  <input
                    id="convRate"
                    type="number"
                    min={0}
                    max={100}
                    step={0.1}
                    value={conversionRate}
                    onChange={(e) => setConversionRate(Number(e.target.value) || 0)}
                    className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 text-lg font-semibold text-gray-900 focus:border-indigo-500 focus:ring-indigo-500"
                  />
                  <p className="mt-1 text-xs text-gray-400">Porcentaje de visitantes que compran o contratan</p>
                </div>

                <div>
                  <label htmlFor="avgOrder" className="block text-sm font-medium text-gray-700">
                    Valor medio del pedido / servicio
                  </label>
                  <div className="relative mt-1">
                    <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-lg text-gray-400">&euro;</span>
                    <input
                      id="avgOrder"
                      type="number"
                      min={0}
                      step={1}
                      value={avgOrder}
                      onChange={(e) => setAvgOrder(Number(e.target.value) || 0)}
                      className="w-full rounded-lg border border-gray-300 py-3 pl-10 pr-4 text-lg font-semibold text-gray-900 focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                  <p className="mt-1 text-xs text-gray-400">Ingreso medio por cliente / pedido</p>
                </div>
              </div>

              <div className="mt-8 rounded-lg bg-gray-50 p-4">
                <p className="text-xs text-gray-500">
                  * Basado en el estudio de VWO que muestra un aumento medio del 34% en conversiones
                  al incluir testimonios en landing pages. Resultados reales pueden variar.
                </p>
              </div>
            </div>

            {/* Results */}
            <div className="flex flex-col gap-6">
              {/* Current */}
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Revenue mensual actual</p>
                <p className="mt-2 text-3xl font-extrabold text-gray-900">
                  <AnimatedNumber value={currentRevenue} prefix="€" />
                </p>
              </div>

              {/* With testimonials */}
              <div className="rounded-2xl border-2 border-indigo-200 bg-indigo-50 p-6 shadow-sm">
                <p className="text-sm font-medium text-indigo-600 uppercase tracking-wide">Revenue mensual con testimonios</p>
                <p className="mt-2 text-3xl font-extrabold text-indigo-700">
                  <AnimatedNumber value={improvedRevenue} prefix="€" />
                </p>
                <p className="mt-1 text-sm text-indigo-500">+34% en conversion</p>
              </div>

              {/* Additional monthly */}
              <div className="rounded-2xl border border-green-200 bg-green-50 p-6 shadow-sm">
                <p className="text-sm font-medium text-green-700 uppercase tracking-wide">Revenue adicional mensual</p>
                <p className="mt-2 text-3xl font-extrabold text-green-700">
                  +<AnimatedNumber value={additionalMonthly} prefix="€" />
                </p>
              </div>

              {/* Annual highlight */}
              <div className="rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-700 p-8 text-white shadow-lg">
                <p className="text-sm font-medium uppercase tracking-wide text-indigo-200">Con Opinafy podrias ganar</p>
                <p className="mt-3 text-5xl font-extrabold">
                  +<AnimatedNumber value={additionalAnnual} prefix="€" /><span className="text-2xl font-bold">/ano</span>
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <span className="text-sm text-indigo-200">ROI de tu inversion:</span>
                  <span className="text-2xl font-extrabold">
                    <AnimatedNumber value={roi} suffix="%" />
                  </span>
                </div>
                <p className="mt-1 text-xs text-indigo-300">Basado en el plan Pro (9 &euro;/mes)</p>
              </div>

              {/* CTA */}
              <Link
                href="/registro"
                className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:bg-indigo-700 hover:shadow-xl"
              >
                Empieza gratis
                <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Supporting stats */}
          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            {[
              { stat: '92%', desc: 'de consumidores leen resenas online antes de comprar', src: 'BrightLocal, 2025' },
              { stat: '34%', desc: 'mas conversiones con testimonios en landing pages', src: 'VWO' },
              { stat: '72%', desc: 'confian mas en negocios con testimonios positivos', src: 'BigCommerce' },
            ].map((item) => (
              <div key={item.stat} className="rounded-xl border border-gray-100 bg-white p-6 text-center shadow-sm">
                <p className="text-4xl font-extrabold text-indigo-600">{item.stat}</p>
                <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
                <p className="mt-1 text-xs text-gray-400">Fuente: {item.src}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
