'use client'

import { useEffect, useRef, useState, useMemo } from 'react'

interface WidgetRealPreviewProps {
  projectId: string
  config: Record<string, unknown>
}

// The iframe renders at this width internally so media queries work correctly
const VIRTUAL_WIDTH = 1024

export default function WidgetRealPreview({ projectId, config }: WidgetRealPreviewProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [containerWidth, setContainerWidth] = useState(400)
  const [iframeHeight, setIframeHeight] = useState(400)

  // Measure container width
  useEffect(() => {
    if (!containerRef.current) return
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setContainerWidth(entry.contentRect.width)
      }
    })
    observer.observe(containerRef.current)
    setContainerWidth(containerRef.current.offsetWidth)
    return () => observer.disconnect()
  }, [])

  const scale = containerWidth / VIRTUAL_WIDTH
  const scaledIframeHeight = iframeHeight * scale

  const configStr = useMemo(() => {
    try { return JSON.stringify(config) } catch { return '{}' }
  }, [config])

  const iframeSrc = useMemo(() => {
    const params = new URLSearchParams()
    params.set('config', configStr)
    params.set('_t', String(simpleHash(configStr)))
    return `/api/widget-preview/${projectId}?${params.toString()}`
  }, [projectId, configStr])

  // Listen for height messages from iframe
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

      {/* Scaled iframe container */}
      <div
        ref={containerRef}
        className="bg-white overflow-hidden"
        style={{ height: `${scaledIframeHeight}px` }}
      >
        <iframe
          ref={iframeRef}
          src={iframeSrc}
          title="Vista previa del widget"
          style={{
            width: `${VIRTUAL_WIDTH}px`,
            height: `${iframeHeight}px`,
            border: 'none',
            transform: `scale(${scale})`,
            transformOrigin: 'top left',
          }}
          sandbox="allow-scripts allow-same-origin"
        />
      </div>
    </div>
  )
}

function simpleHash(str: string): number {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash |= 0
  }
  return Math.abs(hash)
}
