'use client'

import { useState } from 'react'
import { getCollectionTexts, type CollectionLocale } from '@/lib/collection-translations'

interface Props {
  testimonialId: string
  locale?: CollectionLocale
}

export function ResendVerificationButton({ testimonialId, locale = 'es' }: Props) {
  const t = getCollectionTexts(locale)
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleResend() {
    setLoading(true)
    setError(null)

    try {
      const res = await fetch('/api/testimonials/resend-verification', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ testimonialId }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || t.verificadoResendError)
        return
      }

      setSent(true)
    } catch {
      setError(t.verificadoResendRetry)
    } finally {
      setLoading(false)
    }
  }

  if (sent) {
    return (
      <p className="text-sm font-medium text-green-600">
        {t.verificadoResent}
      </p>
    )
  }

  return (
    <div>
      <button
        onClick={handleResend}
        disabled={loading}
        className="inline-flex items-center gap-2 rounded-lg bg-amber-600 px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {loading ? t.verificadoResending : t.verificadoResend}
      </button>
      {error && (
        <p className="mt-3 text-sm text-red-600">{error}</p>
      )}
    </div>
  )
}
