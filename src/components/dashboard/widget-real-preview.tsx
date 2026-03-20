'use client'

import { useEffect, useRef, useState, useMemo } from 'react'

interface WidgetRealPreviewProps {
  projectId: string
  config: Record<string, unknown>
}

/**
 * Renders the ACTUAL widget inside an iframe, using the real widget.js
 * (Shadow DOM + vanilla CSS). This ensures the preview matches exactly
 * what users see when embedding the widget on their sites.
 *
 * When config changes, the iframe src is updated with the new config
 * as a query param, so the widget re-renders with the overrides applied
 * (without needing to save to the database first).
 */
export default function WidgetRealPreview({ projectId, config }: WidgetRealPreviewProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [iframeHeight, setIframeHeight] = useState(400)

  // Serialize config to a stable string for the iframe src
  const configStr = useMemo(() => {
    try {
      return JSON.stringify(config)
    } catch {
      return '{}'
    }
  }, [config])

  // Build iframe src with config as query param
  const iframeSrc = useMemo(() => {
    const params = new URLSearchParams()
    params.set('config', configStr)
    // Add a cache-buster based on config hash to force reload
    params.set('_t', String(simpleHash(configStr)))
    return `/api/widget-preview/${projectId}?${params.toString()}`
  }, [projectId, configStr])

  // Listen for height messages from the iframe
  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      if (event.data?.type === 'opinafy-preview-height' && typeof event.data.height === 'number') {
        setIframeHeight(Math.max(200, event.data.height + 16))
      }
    }

    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 border-b border-gray-200 bg-gray-50 px-4 py-2.5">
        <span className="h-3 w-3 rounded-full bg-red-400" />
        <span className="h-3 w-3 rounded-full bg-yellow-400" />
        <span className="h-3 w-3 rounded-full bg-green-400" />
        <span className="ml-3 text-xs text-gray-400">Vista previa real del widget</span>
      </div>

      {/* Real widget iframe */}
      <div className="bg-white">
        <iframe
          ref={iframeRef}
          src={iframeSrc}
          title="Vista previa del widget"
          className="w-full border-0"
          style={{ height: `${iframeHeight}px`, minHeight: 200 }}
          sandbox="allow-scripts allow-same-origin"
        />
      </div>
    </div>
  )
}

/** Simple hash for cache-busting */
function simpleHash(str: string): number {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash |= 0
  }
  return Math.abs(hash)
}
