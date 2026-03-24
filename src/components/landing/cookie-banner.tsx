'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const COOKIE_CONSENT_KEY = 'opinafy-cookie-consent'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const pathname = usePathname()
  const isEnglish = pathname.startsWith('/en')

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
    <>
      {/* Spacer to prevent banner from overlapping page content */}
      <div className="h-16 sm:h-20" />
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white px-3 py-2.5 shadow-lg sm:p-4">
        <div className="mx-auto flex max-w-5xl items-center gap-3 sm:gap-4">
          <p className="flex-1 text-xs leading-snug text-gray-600 sm:text-sm sm:leading-relaxed">
            {isEnglish ? (
              <>
                We use cookies to improve your experience. By continuing, you accept our{' '}
                <Link
                  href="/en/cookies"
                  className="font-medium text-indigo-600 underline hover:text-indigo-800"
                >
                  Cookie Policy
                </Link>
                .
              </>
            ) : (
              <>
                Utilizamos cookies para mejorar tu experiencia. Consulta nuestra{' '}
                <Link
                  href="/cookies"
                  className="font-medium text-indigo-600 underline hover:text-indigo-800"
                >
                  Pol&iacute;tica de Cookies
                </Link>
                .
              </>
            )}
          </p>
          <div className="flex shrink-0 gap-2 sm:gap-3">
            <button
              onClick={handleReject}
              className="rounded-lg border border-gray-300 px-3 py-1.5 text-xs font-medium text-gray-700 transition-colors hover:bg-gray-50 sm:px-5 sm:py-2.5 sm:text-sm"
            >
              {isEnglish ? 'Reject' : 'Rechazar'}
            </button>
            <button
              onClick={handleAccept}
              className="rounded-lg bg-indigo-600 px-4 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:px-6 sm:py-2.5 sm:text-sm"
            >
              {isEnglish ? 'Accept' : 'Aceptar'}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
