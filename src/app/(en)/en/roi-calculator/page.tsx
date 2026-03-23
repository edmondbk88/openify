'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { NavbarEn } from '@/components/landing/navbar-en'
import { FooterEn } from '@/components/landing/footer-en'

function AnimatedNumber({ value, prefix = '', suffix = '', duration = 800 }: { value: number; prefix?: string; suffix?: string; duration?: number }) {
  const [display, setDisplay] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const end = value
    if (end === 0) { setDisplay(0); return }
    const startTime = performance.now()
    function animate(now: number) {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.round(end * eased))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [value, duration])

  return <span ref={ref}>{prefix}{display.toLocaleString('en-US')}{suffix}</span>
}

function JsonLd() {
  const webPage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Testimonial ROI Calculator',
    url: 'https://opinafy.com/en/roi-calculator',
    description: 'Calculate how much revenue you are losing without testimonials. Discover the ROI of implementing social proof with Opinafy.',
    isPartOf: { '@type': 'WebSite', name: 'Opinafy', url: 'https://opinafy.com' },
    publisher: { '@type': 'Organization', name: 'Opinafy', url: 'https://opinafy.com', logo: 'https://opinafy.com/logo-opinafy.png' },
    inLanguage: 'en',
  }
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://opinafy.com/en' },
      { '@type': 'ListItem', position: 2, name: 'ROI Calculator', item: 'https://opinafy.com/en/roi-calculator' },
    ],
  }
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </>
  )
}

const PLAN_COST_ANNUAL = 9 * 12

export default function ROICalculatorPage() {
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
      <NavbarEn />

      <main className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-white">
        <section className="mx-auto max-w-4xl px-4 pt-16 pb-8 text-center sm:px-6 lg:px-8">
          <nav className="mb-6 text-sm text-gray-500">
            <Link href="/en" className="hover:text-indigo-600">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">ROI Calculator</span>
          </nav>

          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Testimonial ROI Calculator
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Discover how much revenue you are losing without testimonials.
            Studies show testimonials increase conversions by up to <strong className="text-indigo-600">34%</strong>.
          </p>
        </section>

        <section className="mx-auto max-w-5xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <h2 className="mb-6 text-xl font-bold text-gray-900">Your current data</h2>
              <div className="space-y-6">
                <div>
                  <label htmlFor="visitors" className="block text-sm font-medium text-gray-700">Monthly visitors</label>
                  <input id="visitors" type="number" min={0} value={visitors} onChange={(e) => setVisitors(Number(e.target.value) || 0)} className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 text-lg font-semibold text-gray-900 focus:border-indigo-500 focus:ring-indigo-500" />
                  <p className="mt-1 text-xs text-gray-400">Unique visits to your website per month</p>
                </div>
                <div>
                  <label htmlFor="convRate" className="block text-sm font-medium text-gray-700">Current conversion rate (%)</label>
                  <input id="convRate" type="number" min={0} max={100} step={0.1} value={conversionRate} onChange={(e) => setConversionRate(Number(e.target.value) || 0)} className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 text-lg font-semibold text-gray-900 focus:border-indigo-500 focus:ring-indigo-500" />
                  <p className="mt-1 text-xs text-gray-400">Percentage of visitors who buy or hire</p>
                </div>
                <div>
                  <label htmlFor="avgOrder" className="block text-sm font-medium text-gray-700">Average order value</label>
                  <div className="relative mt-1">
                    <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-lg text-gray-400">&euro;</span>
                    <input id="avgOrder" type="number" min={0} step={1} value={avgOrder} onChange={(e) => setAvgOrder(Number(e.target.value) || 0)} className="w-full rounded-lg border border-gray-300 py-3 pl-10 pr-4 text-lg font-semibold text-gray-900 focus:border-indigo-500 focus:ring-indigo-500" />
                  </div>
                  <p className="mt-1 text-xs text-gray-400">Average revenue per customer / order</p>
                </div>
              </div>
              <div className="mt-8 rounded-lg bg-gray-50 p-4">
                <p className="text-xs text-gray-500">* Based on VWO study showing an average 34% conversion increase when including testimonials on landing pages. Actual results may vary.</p>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Current monthly revenue</p>
                <p className="mt-2 text-3xl font-extrabold text-gray-900"><AnimatedNumber value={currentRevenue} prefix="&euro;" /></p>
              </div>
              <div className="rounded-2xl border-2 border-indigo-200 bg-indigo-50 p-6 shadow-sm">
                <p className="text-sm font-medium text-indigo-600 uppercase tracking-wide">Monthly revenue with testimonials</p>
                <p className="mt-2 text-3xl font-extrabold text-indigo-700"><AnimatedNumber value={improvedRevenue} prefix="&euro;" /></p>
                <p className="mt-1 text-sm text-indigo-500">+34% conversion uplift</p>
              </div>
              <div className="rounded-2xl border border-green-200 bg-green-50 p-6 shadow-sm">
                <p className="text-sm font-medium text-green-700 uppercase tracking-wide">Additional monthly revenue</p>
                <p className="mt-2 text-3xl font-extrabold text-green-700">+<AnimatedNumber value={additionalMonthly} prefix="&euro;" /></p>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-700 p-8 text-white shadow-lg">
                <p className="text-sm font-medium uppercase tracking-wide text-indigo-200">With Opinafy you could earn</p>
                <p className="mt-3 text-5xl font-extrabold">+<AnimatedNumber value={additionalAnnual} prefix="&euro;" /><span className="text-2xl font-bold">/year</span></p>
                <div className="mt-4 flex items-center gap-2">
                  <span className="text-sm text-indigo-200">Investment ROI:</span>
                  <span className="text-2xl font-extrabold"><AnimatedNumber value={roi} suffix="%" /></span>
                </div>
                <p className="mt-1 text-xs text-indigo-300">Based on the Pro plan (&euro;9/mo)</p>
              </div>
              <Link href="/en/register" className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:bg-indigo-700 hover:shadow-xl">
                Start for free
                <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
              </Link>
            </div>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            {[
              { stat: '92%', desc: 'of consumers read online reviews before buying', src: 'BrightLocal, 2025' },
              { stat: '34%', desc: 'more conversions with testimonials on landing pages', src: 'VWO' },
              { stat: '72%', desc: 'trust businesses more when they have positive testimonials', src: 'BigCommerce' },
            ].map((item) => (
              <div key={item.stat} className="rounded-xl border border-gray-100 bg-white p-6 text-center shadow-sm">
                <p className="text-4xl font-extrabold text-indigo-600">{item.stat}</p>
                <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
                <p className="mt-1 text-xs text-gray-400">Source: {item.src}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <FooterEn />
    </>
  )
}
