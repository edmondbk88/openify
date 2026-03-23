'use client'

import { useState } from 'react'

interface Props {
  testimonialId: string
}

export function ResendVerificationButton({ testimonialId }: Props) {
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
        setError(data.error || 'Error al reenviar el email')
        return
      }

      setSent(true)
    } catch {
      setError('Error al reenviar el email. Inténtalo de nuevo.')
    } finally {
      setLoading(false)
    }
  }

  if (sent) {
    return (
      <p className="text-sm font-medium text-green-600">
        ¡Email de verificación reenviado! Revisa tu bandeja de entrada.
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
        {loading ? 'Reenviando...' : 'Reenviar email de verificación'}
      </button>
      {error && (
        <p className="mt-3 text-sm text-red-600">{error}</p>
      )}
    </div>
  )
}
