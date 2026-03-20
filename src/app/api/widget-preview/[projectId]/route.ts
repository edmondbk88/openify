import { NextRequest, NextResponse } from 'next/server'

/**
 * Widget Preview API Endpoint
 *
 * Returns a full HTML page that loads the real widget.js script.
 * Used by the dashboard widget configurator to show an accurate preview
 * that matches the actual embedded widget (Shadow DOM + vanilla CSS).
 *
 * Query params:
 * - config: JSON-encoded widget config overrides (for instant preview without saving)
 *
 * When config overrides are provided, the page intercepts the widget's fetch
 * call to /api/widget/[projectId] and merges the overrides into the response.
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ projectId: string }> }
) {
  const { projectId } = await params
  const configOverrides = request.nextUrl.searchParams.get('config') || ''

  // Determine base URL for the widget script and API calls
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
  <div id="opinafy-widget" data-project="${projectId}"></div>

  <script>
  // Intercept fetch to merge config overrides into the widget API response
  (function() {
    var configOverrides = ${configOverrides ? JSON.stringify(configOverrides) : 'null'};
    if (!configOverrides) return;

    var parsed;
    try { parsed = JSON.parse(configOverrides); } catch(e) { return; }

    var originalFetch = window.fetch;
    window.fetch = function(url, opts) {
      var urlStr = typeof url === 'string' ? url : url.toString();

      // Only intercept the widget data API call
      if (urlStr.includes('/api/widget/') && opts && opts.method !== 'POST') {
        return originalFetch.apply(this, arguments).then(function(res) {
          if (!res.ok) return res;
          return res.json().then(function(data) {
            // Merge config overrides
            if (data.config) {
              Object.assign(data.config, parsed);
            } else {
              data.config = parsed;
            }
            return new Response(JSON.stringify(data), {
              status: 200,
              headers: { 'Content-Type': 'application/json' }
            });
          });
        });
      }

      return originalFetch.apply(this, arguments);
    };
  })();
  </script>

  <script src="${baseUrl}/widget.js" defer></script>

  <script>
  // Notify parent frame when the widget finishes loading (for auto-resize)
  (function() {
    var observer = new MutationObserver(function() {
      var widget = document.getElementById('opinafy-widget');
      if (widget && widget.shadowRoot) {
        // Wait a tick for the shadow DOM content to render
        setTimeout(function() {
          var height = document.documentElement.scrollHeight;
          window.parent.postMessage({ type: 'opinafy-preview-height', height: height }, '*');
        }, 100);
        // Keep observing for content changes (e.g. carousel init)
        setTimeout(function() {
          var height = document.documentElement.scrollHeight;
          window.parent.postMessage({ type: 'opinafy-preview-height', height: height }, '*');
        }, 500);
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
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
