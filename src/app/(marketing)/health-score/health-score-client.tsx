'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Navbar } from '@/components/landing/navbar'
import { Footer } from '@/components/landing/footer'

interface HealthCheck {
  id: string
  label: string
  labelEn: string
  passed: boolean
  score: number
  recommendation: string
  recommendationEn: string
  ctaLink?: string
}

interface HealthResult {
  url: string
  score: number
  maxScore: number
  checks: HealthCheck[]
  analyzedAt: string
}

export default function HealthScoreClient() {
  const [url, setUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<HealthResult | null>(null)
  const [error, setError] = useState('')

  async function handleAnalyze(e: React.FormEvent) {
    e.preventDefault()
    if (!url.trim()) return
    setLoading(true)
    setError('')
    setResult(null)

    try {
      const res = await fetch(`/api/health-score?url=${encodeURIComponent(url.trim())}`)
      const data = await res.json()
      if (!res.ok) {
        setError(data.error || 'Error al analizar')
        return
      }
      setResult(data)
    } catch {
      setError('Error de conexion. Intenta de nuevo.')
    } finally {
      setLoading(false)
    }
  }

  function getScoreColor(score: number): string {
    if (score >= 80) return 'text-green-600'
    if (score >= 50) return 'text-yellow-600'
    return 'text-red-600'
  }

  function getScoreBg(score: number): string {
    if (score >= 80) return 'bg-green-50 border-green-200'
    if (score >= 50) return 'bg-yellow-50 border-yellow-200'
    return 'bg-red-50 border-red-200'
  }

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Analiza la Prueba Social de tu Web
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Descubre como de bien aprovecha tu sitio web los testimonios y la prueba social.
            Recibe recomendaciones personalizadas para mejorar tu puntuación.
          </p>
        </div>

        <form onSubmit={handleAnalyze} className="mx-auto mt-10 flex max-w-xl gap-3">
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="ejemplo.com"
            className="flex-1 rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
          />
          <button
            type="submit"
            disabled={loading || !url.trim()}
            className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-700 disabled:opacity-50"
          >
            {loading ? (
              <>
                <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Analizando...
              </>
            ) : (
              'Analizar'
            )}
          </button>
        </form>

        {error && (
          <div className="mx-auto mt-6 max-w-xl rounded-lg border border-red-200 bg-red-50 p-4 text-center text-sm text-red-600">
            {error}
          </div>
        )}

        {result && (
          <div className="mt-12 space-y-8">
            {/* Score */}
            <div className={`mx-auto max-w-sm rounded-2xl border-2 p-8 text-center ${getScoreBg(result.score)}`}>
              <p className="text-sm font-medium text-gray-500">Puntuacion de Prueba Social</p>
              <p className={`mt-2 text-7xl font-bold ${getScoreColor(result.score)}`}>
                {result.score}
              </p>
              <p className="mt-1 text-lg text-gray-500">/ {result.maxScore}</p>
              <p className="mt-2 text-xs text-gray-500">{result.url}</p>
            </div>

            {/* Checks */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-gray-900">Desglose por categoria</h2>
              {result.checks.map((check) => (
                <div
                  key={check.id}
                  className={`flex items-start gap-3 rounded-lg border p-4 ${
                    check.passed ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'
                  }`}
                >
                  <span className="mt-0.5 text-lg">
                    {check.passed ? '\u2705' : '\u274C'}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="font-medium text-gray-900">{check.label}</p>
                      <span className={`text-sm font-semibold ${check.passed ? 'text-green-600' : 'text-red-500'}`}>
                        {check.passed ? `+${check.score}` : '0'} pts
                      </span>
                    </div>
                    {!check.passed && (
                      <p className="mt-1 text-sm text-gray-600">
                        {check.recommendation}
                        {check.ctaLink && (
                          <>
                            {' '}
                            <Link href={check.ctaLink} className="font-medium text-indigo-600 hover:text-indigo-700">
                              Ver como &rarr;
                            </Link>
                          </>
                        )}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Embeddable badge */}
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h2 className="text-lg font-bold text-gray-900">Comparte tu puntuación</h2>
              <p className="mt-1 text-sm text-gray-500">
                Inserta este badge en tu web para mostrar tu puntuación de prueba social.
              </p>
              <div className="mt-4 flex items-center gap-3 rounded-lg bg-gray-50 p-4">
                <div
                  className={`inline-flex items-center gap-2 rounded-full border-2 px-4 py-2 text-sm font-bold ${getScoreBg(result.score)} ${getScoreColor(result.score)}`}
                >
                  Social Proof Score: {result.score}/{result.maxScore}
                  <span className="text-xs font-normal text-gray-500">Powered by Opinafy</span>
                </div>
              </div>
              <div className="mt-3 overflow-hidden rounded-lg border border-gray-200 bg-gray-900 p-4">
                <p className="mb-2 text-xs font-medium text-gray-500">Codigo para insertar:</p>
                <code className="block text-xs text-green-400 whitespace-pre-wrap break-all">
                  {`<a href="https://opinafy.com/health-score?url=${encodeURIComponent(result.url)}" target="_blank" rel="noopener">\n  <img src="https://img.shields.io/badge/Social_Proof_Score-${result.score}%2F100-${result.score >= 80 ? 'brightgreen' : result.score >= 50 ? 'yellow' : 'red'}?style=for-the-badge&label=Social%20Proof%20Score&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJ3aGl0ZSI+PHBhdGggZD0iTTEyIDJsMS45IDUuOUgyMGwtNC4xIDMgMS42IDUuOS00LjUtMy4zTDguNSAxNi44bDEuNi01LjlMMiA3LjloNi4xeiIvPjwvc3ZnPg==" alt="Social Proof Score: ${result.score}/100 — Powered by Opinafy" />\n</a>`}
                </code>
              </div>
            </div>

            {/* CTA */}
            <div className="rounded-2xl bg-indigo-600 p-8 text-center text-white">
              <h2 className="text-2xl font-bold">Mejora tu puntuación con Opinafy</h2>
              <p className="mx-auto mt-2 max-w-lg text-indigo-100">
                Recopila testimonios verificados, muestralos con widgets profesionales y sube tu puntuación de prueba social.
              </p>
              <Link
                href="/registro"
                className="mt-6 inline-block rounded-lg bg-white px-8 py-3 text-sm font-semibold text-indigo-600 transition-colors hover:bg-indigo-50"
              >
                Empieza gratis
              </Link>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  )
}
