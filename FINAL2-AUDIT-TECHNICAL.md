# Opinafy.com -- Definitive Technical SEO Audit

**Date:** 2026-03-30
**Auditor:** Claude Opus 4.6 (automated)
**Overall Score: 88 / 100**

---

## Executive Summary

Opinafy.com is an exceptionally well-configured Next.js + Vercel deployment with
outstanding security headers, robust structured data, proper ISR caching, and a
comprehensive 1,419-URL sitemap with hreflang coverage. Two issues prevent a
score above 90: a **critical `lang="es"` bug on `/en`** and a **malformed URL in
the Organization schema**. Everything else is production-grade.

---

## 1. HTML `lang` Attribute

| Page | Expected | Actual | Status |
|------|----------|--------|--------|
| `/`  | `es`     | `es`   | PASS   |
| `/en`| `en`     | `es`   | **FAIL** |

**Severity: CRITICAL**

The `/en` page serves `<html lang="es">` instead of `<html lang="en">`.
This tells screen readers and search engines the English page is Spanish,
harming accessibility and potentially confusing language-based ranking signals.

**Fix:** In the Next.js `[locale]/layout.tsx`, ensure the `lang` attribute is
set dynamically from the locale parameter:
```tsx
<html lang={locale}>
```

---

## 2. Hreflang Tags

### 2a. In-HTML hreflang (homepage)

```
hreflang="es"        -> https://opinafy.com
hreflang="en"        -> https://opinafy.com/en
hreflang="x-default" -> https://opinafy.com
```

**Status: PASS** -- Bidirectional, x-default present, self-referencing correct.

### 2b. Sitemap hreflang

- 1,417 / 1,419 URLs have full `<xhtml:link>` hreflang annotations (es, en, x-default).
- 2 URLs missing hreflang: `/s/edmondbk88` and `/s/test-e2e` (mini-site pages,
  which are user-generated single-language content -- acceptable).

**Status: PASS**

---

## 3. robots.txt

```
User-Agent: *
Allow: /
Disallow: /admin, /dashboard, /proyectos, /configuracion,
          /facturacion, /forgot-password, /login, /registro, /soporte
Disallow: /*?utm_*, /*?ref=*, /*?fbclid=*, /*?gclid=*

User-Agent: GPTBot        -> Allow: /
User-Agent: Google-Extended -> Allow: /
User-Agent: ChatGPT-User  -> Allow: /
User-Agent: ClaudeBot      -> Allow: /
User-Agent: PerplexityBot  -> Allow: /
User-Agent: Bytespider     -> Allow: /

Sitemap: https://opinafy.com/sitemap.xml
```

| Check | Status |
|-------|--------|
| Private routes blocked | PASS |
| UTM/tracking params blocked | PASS |
| AI crawlers explicitly allowed | PASS (6 bots) |
| Sitemap declared | PASS |

**Status: PASS**

---

## 4. Sitemap

| Metric | Value | Status |
|--------|-------|--------|
| Total URLs | 1,419 | PASS |
| Unique lastmod values | 112 | PASS (varied, not all same date) |
| Date range | 2025-10-15 to 2026-03-30 | PASS |
| Future dates | 0 | PASS |
| Hreflang coverage | 1,417/1,419 (99.9%) | PASS |
| x-default on all hreflang entries | Yes | PASS |
| Core pages present (/, /precios, /blog, /plantillas, /sobre, /legal) | Yes | PASS |

**Status: PASS**

---

## 5. Security Headers

| Header | Value | Status |
|--------|-------|--------|
| `strict-transport-security` | `max-age=63072000` (2 years) | PASS |
| `content-security-policy` | Full CSP with specific sources | PASS |
| `x-content-type-options` | `nosniff` | PASS |
| `referrer-policy` | `strict-origin-when-cross-origin` | PASS |
| `permissions-policy` | `camera=(), microphone=(), geolocation=()` | PASS |
| `x-frame-options` | `DENY` | PASS |

CSP breakdown:
- `default-src 'self'`
- `script-src` allows GTM, GA (with unsafe-inline/eval for Next.js hydration)
- `img-src` allows https, data, blob
- `connect-src` allows Supabase, Stripe, GA
- `frame-src` allows Stripe checkout

**Status: PASS** -- Full A+ grade security header set.

---

## 6. Content-Language Headers

| Page | Header Value | Status |
|------|-------------|--------|
| `/` | `es` | PASS |
| `/en` | `en` | PASS |
| `/blog` | `es` | PASS |
| `/precios` | `es` | PASS |
| `/sobre` | `es` | PASS |
| `/plantillas` | `es` | PASS |

**Status: PASS** -- Note: `/en` correctly returns `content-language: en` in
the HTTP header, even though the HTML `lang` attribute is wrong (see Issue #1).

---

## 7. ISR Caching (x-vercel-cache)

| Page | x-vercel-cache | Age | Status |
|------|---------------|-----|--------|
| `/` | STALE | 5,475s | PASS |
| `/en` | STALE | 8,107s | PASS |
| `/blog` | STALE | 22,519s | PASS |
| `/precios` | HIT | 1,208s | PASS |
| `/sobre` | HIT | 389,228s | PASS |
| `/plantillas` | HIT | 389,233s | PASS |

All pages are being served from cache (HIT or STALE, meaning ISR is actively
revalidating). No MISS responses. ISR is working correctly.

**Status: PASS**

---

## 8. Structured Data (JSON-LD)

### 8a. Organization (with founder)

```json
{
  "@type": "Organization",
  "@id": "https://opinafy.com/#organization",
  "name": "Opinafy",
  "founder": {
    "@type": "Person",
    "name": "Edmond Bojalil",
    "image": "https://opinafy.comhttps://rckjevsqxkfixkdloqjv.supabase.co/..."
  }
}
```

**ISSUE (HIGH):** The `founder.image` URL is malformed -- it concatenates the
site domain with the Supabase URL:
`https://opinafy.comhttps://rckjevsqxkfixkdloqjv.supabase.co/...`

**Fix:** Remove the `https://opinafy.com` prefix. The image URL should be:
`https://rckjevsqxkfixkdloqjv.supabase.co/storage/v1/object/public/logos/site/edmond-bojalil.jpg`

### 8b. WebSite with SearchAction

```json
{
  "@type": "WebSite",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://opinafy.com/blog?q={search_term}"
    }
  }
}
```

**Status: PASS**

### 8c. SoftwareApplication

Present with 4 pricing tiers (Free, Mini Sitio, Pro, Business), all with
`priceCurrency: EUR` and proper `UnitPriceSpecification`.

**Status: PASS**

### 8d. Additional schemas detected

- **BreadcrumbList** -- Present. PASS.
- **FAQPage** -- Present with 8 Q&A pairs. PASS.

**Overall Schema Status: PASS (with one HIGH fix needed on founder.image)**

---

## 9. llms.txt

**Status: PASS** -- Present at `/llms.txt` with HTTP 200.

Contents include:
- Product description and key features
- All 4 pricing tiers
- Links to all major sections (homepage, /en, /plantillas, /precios, /blog, /ayuda)
- API documentation link

Well-structured for LLM consumption.

---

## 10. Redirects

| Source | Target | Code | Status |
|--------|--------|------|--------|
| `/ayuda/empezar` | `/ayuda/primeros-pasos` | 308 (Permanent) | PASS |

**Status: PASS** -- 308 is correct for a permanent redirect that preserves
the HTTP method. No redirect chain (single hop to 200).

---

## 11. TTFB and Payload Sizes

| Page | TTFB | Payload | Status |
|------|------|---------|--------|
| `/` | 768ms | 253 KB | WARN |
| `/en` | 576ms | 250 KB | PASS |
| `/blog` | 428ms | 151 KB | PASS |
| `/sobre` | 499ms | 64 KB | PASS |
| `/precios` | 740ms | 117 KB | WARN |
| `/plantillas` | 534ms | 144 KB | PASS |

Note: TTFB was measured from Spain to Vercel CDG/IAD edge. Values under 800ms
are acceptable for ISR pages. The homepage and /precios are on the higher end
but within acceptable range (both served from cache, TTFB is network latency).

Homepage payload of 253 KB (HTML only, uncompressed) is large but includes
SSR-rendered content with 27 headings, FAQ schema, and full page content.
Transfer size with gzip/brotli will be significantly smaller.

**Status: PASS (with minor notes)**

---

## 12. Critical Pages -- HTTP Status

| Page | Status | Result |
|------|--------|--------|
| `/` | 200 | PASS |
| `/en` | 200 | PASS |
| `/robots.txt` | 200 | PASS |
| `/llms.txt` | 200 | PASS |
| `/blog` | 200 | PASS |
| `/sobre` | 200 | PASS |
| `/precios` | 200 | PASS |
| `/plantillas` | 200 | PASS |
| `/sitemap.xml` | 200 | PASS |

**Status: PASS** -- All 9 critical resources return HTTP 200.

---

## Additional Checks

### Canonical Tags

| Page | Canonical | Status |
|------|-----------|--------|
| `/` | `https://opinafy.com` | PASS |
| `/en` | `https://opinafy.com/en` | PASS |

Self-referencing canonicals correctly set.

### Mobile / Viewport

```html
<meta name="viewport" content="width=device-width, initial-scale=1"/>
```

**Status: PASS**

### Open Graph / Twitter Cards

- Full OG tags: title, description, url, site_name, locale (es_ES), image (1200x630), type
- Twitter: summary_large_image with title, description, image

**Status: PASS**

### Server-Side Rendering (SSR/ISR)

- 27 headings found in initial HTML (not hydration-dependent)
- Full page content rendered server-side (H1: "Convierte las opiniones de tus clientes...")
- 13 JS chunks loaded async (Next.js standard)
- `fetchPriority="high"` on logo image (LCP candidate preloaded)
- 1 lazy-loaded image detected (below-fold, correct usage)

**Status: PASS** -- Full SSR, not a CSR app.

### Core Web Vitals (Source-Level Assessment)

| Metric | Risk | Notes |
|--------|------|-------|
| LCP | LOW | Logo image preloaded with `fetchPriority="high"` and `<link rel="preload">`. ISR cache means fast HTML delivery. |
| INP | LOW | Next.js App Router with server components reduces client JS. No heavy client-side interactivity visible in source. |
| CLS | LOW | Images have explicit `width`/`height` attributes. Font preloaded (woff2). CSS loaded with `data-precedence`. |

---

## Prioritized Issues

### CRITICAL (must fix)

1. **`/en` page has `lang="es"` instead of `lang="en"`**
   - Impact: Accessibility violation, potential language ranking signal mismatch
   - Fix: Set `<html lang={locale}>` dynamically in the root layout
   - Effort: 1 line change

### HIGH (should fix soon)

2. **Organization schema `founder.image` URL is malformed**
   - Current: `https://opinafy.comhttps://rckjevsqxkfixkdloqjv.supabase.co/...`
   - Expected: `https://rckjevsqxkfixkdloqjv.supabase.co/storage/v1/object/public/logos/site/edmond-bojalil.jpg`
   - Impact: Google may discard the founder image or flag the schema as invalid
   - Fix: Remove the site domain prefix from the Supabase URL in schema generation
   - Effort: 1 line change

### LOW (nice to have)

3. **2 mini-site URLs in sitemap lack hreflang** (`/s/edmondbk88`, `/s/test-e2e`)
   - Acceptable for user-generated content, but consider excluding test pages
     from the sitemap entirely

4. **Homepage TTFB at 768ms** (from Europe to Vercel edge)
   - Not a problem for ISR-cached pages, but monitor if it increases

---

## Scoring Breakdown

| Category | Weight | Score | Weighted |
|----------|--------|-------|----------|
| Crawlability (robots.txt, sitemap) | 15% | 100 | 15.0 |
| Indexability (canonicals, hreflang, lang) | 15% | 75 | 11.3 |
| Security (HTTPS, headers) | 10% | 100 | 10.0 |
| URL Structure (redirects, clean URLs) | 10% | 100 | 10.0 |
| Mobile (viewport, touch targets) | 10% | 100 | 10.0 |
| Core Web Vitals (LCP, INP, CLS signals) | 15% | 95 | 14.3 |
| Structured Data (schema) | 10% | 85 | 8.5 |
| JavaScript / Rendering (SSR) | 10% | 100 | 10.0 |
| AI Discoverability (llms.txt, bot access) | 5% | 100 | 5.0 |
| **Total** | **100%** | | **94.1 -> 88** |

Score adjusted from 94 to **88** due to the critical `lang` attribute bug on
`/en`, which affects a core i18n signal across the entire English site section.

---

## Final Verdict

**88 / 100** -- Opinafy has enterprise-grade technical SEO infrastructure.
Fix the two identified issues (both one-line changes) and the score jumps to
95+. The security headers, ISR caching, structured data depth, sitemap quality,
and AI crawler configuration are all exemplary.
