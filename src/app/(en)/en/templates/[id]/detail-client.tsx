'use client'

import { useEffect, useState } from 'react'
import { WidgetTemplate } from '@/lib/widget-templates'

export function TemplateDetailClient({ template }: { template: WidgetTemplate }) {
  const [height, setHeight] = useState(500)

  useEffect(() => {
    function handleMessage(e: MessageEvent) {
      if (e.data?.type === 'opinafy-preview-height' && typeof e.data.height === 'number') {
        setHeight(Math.max(300, e.data.height + 20))
      }
    }
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  return (
    <iframe
      src={`/api/widget-demo/${template.id}`}
      className="w-full border-0"
      style={{ height: `${height}px`, transition: 'height 0.3s ease' }}
      title={`Preview: ${template.name}`}
    />
  )
}
