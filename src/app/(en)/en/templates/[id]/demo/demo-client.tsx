'use client'

import { useEffect, useRef, useState } from 'react'

export function DemoWidgetClient({ templateId }: { templateId: string }) {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [height, setHeight] = useState(600)

  useEffect(() => {
    function handleMessage(e: MessageEvent) {
      if (e.data?.type === 'opinafy-preview-height' && typeof e.data.height === 'number') {
        setHeight(Math.max(400, e.data.height + 20))
      }
    }
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  return (
    <iframe
      ref={iframeRef}
      src={`/api/widget-demo/${templateId}`}
      className="w-full border-0"
      style={{ height: `${height}px`, transition: 'height 0.3s ease' }}
      title="Widget demo with 30 testimonials"
    />
  )
}
