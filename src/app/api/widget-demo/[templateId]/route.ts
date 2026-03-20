import { NextRequest, NextResponse } from 'next/server'
import { getTemplateById } from '@/lib/widget-templates'
import { demoTestimonials } from '@/lib/demo-testimonials'

/**
 * Widget Demo - serves a complete HTML page with the widget rendered
 * using a template's config and 30 demo testimonials about Opinafy.
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ templateId: string }> }
) {
  const { templateId } = await params
  const template = getTemplateById(templateId)

  if (!template) {
    return new NextResponse('<html><body><p>Plantilla no encontrada</p></body></html>', {
      headers: { 'Content-Type': 'text/html' },
    })
  }

  const { config } = template

  // Map template config to widget config format
  const widgetConfig = {
    layout: template.layout,
    theme: config.theme,
    primary_color: config.primary_color,
    background_color: config.background_color,
    text_color: config.text_color,
    border_radius: config.border_radius,
    show_rating: config.show_rating,
    show_date: config.show_date,
    show_avatar: config.show_avatar,
    show_company: config.show_company,
    font_style: config.font_style,
    max_testimonials: 30,
  }

  // Transform demo testimonials to widget format
  const testimonials = demoTestimonials.map((t) => ({
    id: t.id,
    author_name: t.author_name,
    author_company: t.author_company,
    author_role: t.author_role,
    author_avatar_url: null,
    content: t.content,
    rating: t.rating,
    video_url: null,
    is_company_verified: t.is_company_verified,
    source: 'direct',
    source_platform: null,
    source_url: null,
    created_at: t.created_at,
  }))

  const widgetData = {
    project: {
      name: 'Demo Opinafy',
      logo_url: null,
      brand_color: config.primary_color,
    },
    testimonials,
    config: widgetConfig,
  }

  // Determine base URL for widget.js
  const proto = request.headers.get('x-forwarded-proto') || 'https'
  const host = request.headers.get('host') || 'opinafy.com'
  const baseUrl = `${proto}://${host}`

  const html = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html, body { width: 100%; min-height: 100%; }
    body { font-family: system-ui, -apple-system, sans-serif; padding: 8px; }
    #opinafy-widget { width: 100%; }
  </style>
</head>
<body>
  <script>window.__OPINAFY_PRELOAD__ = ${JSON.stringify(widgetData)};</script>
  <div id="opinafy-widget" data-project="demo-${templateId}"></div>

  <script src="${baseUrl}/widget.js" defer></script>

  <script>
  // Auto-resize: notify parent frame of content height
  (function() {
    function sendHeight() {
      var h = document.documentElement.scrollHeight;
      window.parent.postMessage({ type: 'opinafy-preview-height', height: h }, '*');
    }
    var observer = new MutationObserver(function() {
      setTimeout(sendHeight, 100);
      setTimeout(sendHeight, 500);
      setTimeout(sendHeight, 1500);
    });
    if (document.body) {
      observer.observe(document.body, { childList: true, subtree: true });
    }
  })();
  </script>
</body>
</html>`

  return new NextResponse(html, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}
