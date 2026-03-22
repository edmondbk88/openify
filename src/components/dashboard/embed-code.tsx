'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { useLocale } from '@/components/dashboard/locale-context'
import { t } from '@/lib/i18n'

interface EmbedCodeProps {
  projectId: string
}

export default function EmbedCode({ projectId }: EmbedCodeProps) {
  const locale = useLocale()
  const [copied, setCopied] = useState(false)

  const code = `<div id="opinafy-widget" data-project="${projectId}"></div>\n<script src="https://opinafy.com/widget.js" defer></script>`

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback for older browsers
      const textarea = document.createElement('textarea')
      textarea.value = code
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className="rounded-xl border border-gray-200 bg-white">
      <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3">
        <h3 className="text-sm font-semibold text-gray-900">{t('embed.title', locale)}</h3>
        <button
          onClick={handleCopy}
          className={cn(
            'inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors',
            copied
              ? 'bg-green-50 text-green-700'
              : 'bg-indigo-600 text-white hover:bg-indigo-700'
          )}
        >
          {copied ? (
            <>
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
              {t('embed.copied', locale)}
            </>
          ) : (
            <>
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9.75a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
              </svg>
              {t('embed.copyCode', locale)}
            </>
          )}
        </button>
      </div>
      <div className="overflow-x-auto bg-gray-900 p-4">
        <pre className="text-sm leading-relaxed text-gray-100">
          <code>{code}</code>
        </pre>
      </div>
      <div className="px-4 py-3">
        <p className="text-xs text-gray-500">
          {t('embed.instructions', locale)}
        </p>
      </div>
    </div>
  )
}
