'use client'

import { WidgetTemplate } from '@/lib/widget-templates'
import { TemplatePreview } from '@/components/landing/template-preview'

export function TemplateDetailClient({ template }: { template: WidgetTemplate }) {
  return <TemplatePreview template={template} />
}
