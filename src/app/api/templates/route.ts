import { NextRequest, NextResponse } from 'next/server'
import { widgetTemplates } from '@/lib/widget-templates'
import type { TemplatePreviewData } from '@/lib/widget-templates'

/**
 * GET /api/templates?offset=24&limit=24&category=Minimalista
 * Returns slimmed-down template data for the gallery.
 */
export function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl
  const offset = Math.max(0, parseInt(searchParams.get('offset') || '0', 10))
  const limit = Math.min(200, Math.max(1, parseInt(searchParams.get('limit') || '24', 10)))
  const category = searchParams.get('category') || ''

  let source = widgetTemplates
  if (category) {
    source = widgetTemplates.filter((t) => t.category === category)
  }

  const slim: TemplatePreviewData[] = source.slice(offset, offset + limit).map((t) => ({
    id: t.id,
    name: t.name,
    description: t.description,
    category: t.category,
    layout: t.layout,
    config: t.config,
  }))

  return NextResponse.json({ templates: slim, total: source.length })
}
