import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase/admin'

/**
 * Widget Preview - serves a complete HTML page with the widget rendered
 * using the REAL widget data from the API, with config overrides applied server-side.
 *
 * This avoids fetch interception issues by injecting the data directly.
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ projectId: string }> }
) {
  const { projectId } = await params
  const configOverridesStr = request.nextUrl.searchParams.get('config') || '{}'

  let configOverrides: Record<string, unknown> = {}
  try {
    configOverrides = JSON.parse(configOverridesStr)
  } catch {
    configOverrides = {}
  }

  // Fetch real widget data server-side
  const supabase = createAdminClient()

  const { data: project } = await supabase
    .from('projects')
    .select('name, logo_url, brand_color, user_id, is_active')
    .eq('id', projectId)
    .single()

  if (!project) {
    return new NextResponse('<html><body><p>Proyecto no encontrado</p></body></html>', {
      headers: { 'Content-Type': 'text/html' },
    })
  }

  const { data: dbConfig } = await supabase
    .from('widget_configs')
    .select('*')
    .eq('project_id', projectId)
    .single()

  // Merge DB config with overrides (overrides take priority)
  const mergedConfig = { ...(dbConfig || {}), ...configOverrides }

  // Fetch approved testimonials
  const { data: testimonials } = await supabase
    .from('testimonials')
    .select('id, author_name, author_company, author_role, author_avatar_url, content, rating, video_url, is_company_verified, source, source_platform, source_url, created_at')
    .eq('project_id', projectId)
    .eq('status', 'approved')
    .order('is_featured', { ascending: false })
    .order('created_at', { ascending: false })
    .limit(mergedConfig.max_testimonials || 10)

  const widgetData = {
    project: {
      name: project.name,
      logo_url: project.logo_url,
      brand_color: project.brand_color,
    },
    testimonials: testimonials || [],
    config: mergedConfig,
  }

  // Determine base URL for widget.js
  const proto = request.headers.get('x-forwarded-proto') || 'https'
  const host = request.headers.get('host') || 'opinafy.com'
  const baseUrl = `${proto}://${host}`

  // Build HTML that injects data directly instead of fetching
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
  <div id="opinafy-widget" data-project="${projectId}"></div>

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
      'Cache-Control': 'no-store',
    },
  })
}
