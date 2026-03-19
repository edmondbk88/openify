'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const COOKIE_CONSENT_KEY = 'opinafy-cookie-consent'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY)
    if (consent === 'accepted') {
      grantConsent()
    } else if (!consent) {
      setIsVisible(true)
    }
  }, [])

  function grantConsent() {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'granted',
      })
    }
  }

  function handleAccept() {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted')
    grantConsent()
    setIsVisible(false)
  }

  function handleReject() {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'rejected')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white p-4 shadow-lg sm:p-6">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <p className="text-center text-sm leading-relaxed text-gray-600 sm:text-left">
          Utilizamos cookies para mejorar tu experiencia y analizar el tráfico. Consulta nuestra{' '}
          <Link
            href="/cookies"
            className="font-medium text-indigo-600 underline hover:text-indigo-800"
          >
            Política de Cookies
          </Link>{' '}
          para más información.
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            onClick={handleReject}
            className="rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
          >
            Rechazar
          </button>
          <button
            onClick={handleAccept}
            className="rounded-lg bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  )
}
