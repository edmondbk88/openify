# Technical SEO Audit: opinafy.com

**Date:** 2026-03-24
**Audited by:** Claude Opus 4.6 (Technical SEO Specialist)
**Overall Score: 82/100**

---

## Executive Summary

Opinafy.com is a well-built Next.js 14 application deployed on Vercel with strong SSR fundamentals, proper structured data implementation, and solid security headers. The site demonstrates good technical SEO practices overall, but has several issues that need attention -- most notably a critical `lang` attribute bug on the English version, missing `x-default` hreflang on the EN homepage, schema language inconsistencies, and a large initial HTML payload (256 KB on homepage).

---

## Pages Audited

| URL | Status | HTML Size | Cache |
|-----|--------|-----------|-------|
| `https://opinafy.com` | 200 | 256 KB | HIT |
| `https://opinafy.com/en` | 200 | 246 KB | HIT |
| `https://opinafy.com/plantillas` | 200 | 188 KB | PRERENDER |
| `https://opinafy.com/precios` | 200 | 117 KB | STALE |
| `https://opinafy.com/blog` | 200 | 94 KB | MISS (dynamic) |

---

## 1. Crawlability

**Status: PASS (with notes)**

### robots.txt

The robots.txt correctly blocks private areas and allows all AI crawlers:

- Blocked paths: `/admin`, `/dashboard`, `/proyectos`, `/configuracion`, `/facturacion`, `/forgot-password`, `/login`, `/registro`, `/soporte`
- AI bot access: GPTBot, Google-Extended, ChatGPT-User, ClaudeBot, PerplexityBot, Bytespider -- all explicitly allowed
- Sitemap declared: `https://opinafy.com/sitemap.xml`

### Sitemap

- **1,414 URLs** in sitemap (significant increase from initial 184 count -- the sitemap has grown substantially)
- All URLs include bilingual hreflang alternates (es/en) with `x-default`
- `lastmod` timestamps present and current (2026-03-23)
- `changefreq` and `priority` values set appropriately per page type
- Sitemap validates against sitemaps.org schema

### Issues

| Severity | Issue | Details |
|----------|-------|---------|
| **Low** | No `Crawl-delay` directive | Not critical -- Vercel handles rate limiting. But consider adding for aggressive bots. |
| **Low** | No wildcard parameter blocking | No `Disallow: /*?` rule. If query parameters generate duplicate content (e.g., UTM params), consider adding. |

---

## 2. Indexability

**Status: PASS**

### Canonical Tags

All pages have correct self-referencing canonical tags:

| Page | Canonical |
|------|-----------|
| `/` | `https://opinafy.com` |
| `/en` | `https://opinafy.com/en` |
| `/plantillas` | `https://opinafy.com/plantillas` |
| `/precios` | `https://opinafy.com/precios` |
| `/blog` | `https://opinafy.com/blog` |

### Meta Robots

All public pages have `<meta name="robots" content="index, follow"/>` -- correct.

### Titles and Descriptions

| Page | Title | Length |
|------|-------|--------|
| Homepage ES | "Opinafy - Testimonios de Clientes que Convierten" | 50 chars |
| Homepage EN | "Opinafy - Turn Customer Opinions Into Your Best Sales Tool" | 59 chars |
| Plantillas | "Plantillas de Testimonios \| 100 Disenos Listos para Usar - Opinafy" | 68 chars |
| Precios | (present, properly set) | OK |
| Blog | (present, properly set) | OK |

All meta descriptions present and within optimal length (120-160 chars).

### Issues

| Severity | Issue | Details |
|----------|-------|---------|
| **Medium** | Blog articles lack hreflang tags | Blog article pages (e.g., `/blog/que-son-testimonios-clientes-importancia`) have no hreflang alternates in the HTML head, despite having hreflang in the sitemap. If EN blog translations exist, they need hreflang links in the HTML. |

---

## 3. Security

**Status: PASS (Excellent)**

### HTTPS and Redirects

- HTTP to HTTPS: 308 Permanent Redirect (correct)
- www to non-www: 308 Permanent Redirect (correct)
- HSTS: `max-age=63072000` (2 years -- excellent)

### Security Headers

All security headers are properly configured:

| Header | Value | Status |
|--------|-------|--------|
| `strict-transport-security` | `max-age=63072000` | PASS |
| `content-security-policy` | Comprehensive policy with `default-src 'self'` | PASS |
| `x-content-type-options` | `nosniff` | PASS |
| `x-frame-options` | `DENY` | PASS |
| `referrer-policy` | `strict-origin-when-cross-origin` | PASS |
| `permissions-policy` | `camera=(), microphone=(), geolocation=()` | PASS |

### CSP Analysis

The CSP is well-configured but includes `'unsafe-inline'` and `'unsafe-eval'` for scripts, which is common for Next.js apps but weakens script protection. Allowed external domains are appropriately scoped:
- Scripts: GoogleTagManager, Google Analytics
- Connect: Supabase, Stripe, Google Analytics
- Frames: Stripe.js only

### Issues

| Severity | Issue | Details |
|----------|-------|---------|
| **Low** | CSP uses `'unsafe-inline'` and `'unsafe-eval'` for scripts | Standard for Next.js. Consider nonce-based CSP in future for tighter security. Not an SEO concern. |

---

## 4. URL Structure

**Status: PASS**

### Clean URLs

All URLs are clean, lowercase, hyphenated, and descriptive:
- `/plantillas` (templates)
- `/precios` (pricing)
- `/blog/que-son-testimonios-clientes-importancia`
- `/comparar/opinafy-vs-testimonial-to`

### Trailing Slash Consistency

Trailing slashes return a **308 redirect** to the non-trailing-slash version (e.g., `/precios/` -> `/precios`). This is correct and consistent.

### Bilingual URL Structure

Spanish (default): `/precios`, `/plantillas`, `/blog`
English: `/en/pricing`, `/en/templates`, `/en/blog`

The `/en/` prefix pattern is a good practice for the secondary language.

### Issues

None.

---

## 5. Mobile Optimization

**Status: PASS**

### Viewport

All pages include: `<meta name="viewport" content="width=device-width, initial-scale=1"/>`

### Responsive Design

- Tailwind CSS utility classes used throughout (`sm:`, `md:`, `lg:` breakpoints)
- Images use responsive `srcSet` with multiple widths (16w through 3840w)
- Text scales with viewport: `text-4xl sm:text-5xl lg:text-6xl` on H1

### Touch Targets

- Links and buttons use adequate padding classes (`px-8 py-3`, `px-6 py-3`)
- Navigation items spaced appropriately

### Issues

| Severity | Issue | Details |
|----------|-------|---------|
| **Low** | Only 2 actual `<img>` elements in homepage HTML | Most visual content may be rendered via CSS backgrounds or client-side JS. Verify all hero images are available to Googlebot. |

---

## 6. Core Web Vitals Indicators

**Status: NEEDS ATTENTION**

### LCP (Largest Contentful Paint)

- **Font preload present**: `e4af272ccee01ff0-s.p.woff2` is preloaded -- good
- **Logo image preloaded**: Multiple responsive sizes with `fetchPriority="high"` -- good
- **SSR content**: H1 and hero text are server-rendered in the initial HTML -- good
- **Concern**: 256 KB HTML payload on homepage is large. The RSC (React Server Component) payload is embedded inline as `<script>self.__next_f.push(...)` which inflates HTML size

### INP (Interaction to Next Paint)

- **Total JS loaded on homepage: ~527 KB (uncompressed)**
  - Largest chunks: `fd9d1056` (173 KB), `2117-7c4dca3` (124 KB), `polyfills` (113 KB)
  - All scripts loaded with `async` attribute -- good
- **Polyfills chunk (113 KB)** uses `noModule` attribute -- only loads in legacy browsers -- correct
- **Hydration**: React hydration will block interactivity until JS executes

### CLS (Cumulative Layout Shift)

- All `<img>` tags include explicit `width` and `height` attributes -- good
- Next.js Image component used consistently (`data-nimg="1"`) -- good
- Font is preloaded, reducing flash of unstyled text (FOUT) -- good

### Issues

| Severity | Issue | Details |
|----------|-------|---------|
| **High** | Large HTML payload (256 KB homepage) | The RSC payload embedded in `<script>self.__next_f.push(...)` tags significantly inflates the HTML. This slows down TTFB and parse time. Consider streaming or reducing the RSC payload size. |
| **Medium** | 28 script tags on homepage | While most are async, the sheer number adds parsing overhead. Monitor with real-user metrics. |
| **Medium** | Blog page is dynamically rendered (no cache) | Blog returned `x-vercel-cache: MISS` with `cache-control: private, no-cache`. This means every blog visit triggers a server render, hurting TTFB. Consider ISR (Incremental Static Regeneration). |
| **Low** | Two render-blocking CSS files (89 KB total) | CSS is render-blocking by nature. The 87 KB stylesheet should be audited for unused rules. |

---

## 7. Structured Data

**Status: PASS (Excellent)**

### Homepage (ES) Schema

Five JSON-LD blocks properly implemented:

1. **Organization**: name, url, logo, foundingDate, sameAs (LinkedIn), contactPoint
2. **WebSite**: name, url, inLanguage, publisher
3. **SoftwareApplication**: name, applicationCategory (BusinessApplication), offers with 3 pricing tiers (Gratis/Pro/Business with EUR pricing)
4. **BreadcrumbList**: Single-item breadcrumb for homepage
5. **FAQPage**: 8 questions with detailed answers

### Inner Pages Schema

| Page | Schema Types |
|------|-------------|
| Plantillas | CollectionPage, BreadcrumbList |
| Precios | WebPage, BreadcrumbList, FAQPage |
| Blog (index) | CollectionPage, BreadcrumbList, ItemList |
| Blog (article) | Article, BreadcrumbList |

### Blog Article Schema (Sampled)

The article schema includes: headline, description, image, author (Person), publisher (Organization with logo), datePublished, dateModified, mainEntityOfPage, keywords, inLanguage -- comprehensive and correct.

### Issues

| Severity | Issue | Details |
|----------|-------|---------|
| **High** | EN homepage WebSite schema says `"inLanguage":"es"` | The English homepage at `/en` renders the WebSite schema with `"inLanguage":"es"` instead of `"inLanguage":"en"`. This sends conflicting language signals to search engines. |
| **Medium** | Organization schema description is in Spanish on EN page | The Organization schema on `/en` still reads "Opinafy es la plataforma #1 en espanol para recopilar..." -- should be in English for the EN version. |
| **Low** | SoftwareApplication offers lack `availability` property | Adding `"availability": "https://schema.org/InStock"` would be more complete. |

---

## 8. JavaScript Rendering (SSR vs CSR)

**Status: PASS (Good)**

### Server-Side Rendering

All audited pages return full HTML content on initial load, including:
- H1 headings rendered in HTML
- Meta tags, canonical tags, and hreflang tags in the HTML head
- JSON-LD structured data rendered as `<script type="application/ld+json">`
- Blog article content rendered via `dangerouslySetInnerHTML` (full text in initial HTML)

### Next.js App Router (RSC)

- Using Next.js App Router with React Server Components
- Build ID: `UAtBCstduF6lEnVHvdzmM`
- RSC payload embedded inline for client-side hydration
- Route groups visible: `(marketing)`, `(auth)`, `(en)`

### Caching Strategy

| Page | Cache Strategy |
|------|---------------|
| Homepage ES | `HIT` (static/ISR) |
| Homepage EN | `HIT` (static/ISR) |
| Plantillas | `PRERENDER` (static) |
| Precios | `STALE` (ISR, being revalidated) |
| Blog | `MISS` (dynamic, no cache) |

### Issues

| Severity | Issue | Details |
|----------|-------|---------|
| **Medium** | Blog page is fully dynamic | `cache-control: private, no-cache` means no edge caching. Convert to ISR with `revalidate` to improve TTFB. |
| **Low** | EN homepage `lang` attribute set via client-side JS | The HTML is initially rendered with `lang="es"`, then corrected to `lang="en"` via `<script>document.documentElement.lang="en"</script>`. Googlebot typically executes JS, but this is a fragile pattern. The server should render `lang="en"` directly. |

---

## 9. Internal Linking

**Status: PASS**

### Homepage Link Coverage

The ES homepage links to 35+ internal pages, including:
- Core pages: `/plantillas`, `/precios`, `/blog`, `/caracteristicas`, `/contacto`
- Comparison pages: `/comparar`
- Resources: `/guias`, `/calculadora-roi`, `/descargas`, `/informe-prueba-social-2026`
- Case studies: `/casos-de-exito`
- New features: `/certificacion`, `/ranking`, `/health-score`, `/verificado-badge`
- Auth: `/login`, `/registro`

### Sitemap vs Internal Links

All pages linked from the homepage are present in the sitemap -- no orphan pages detected among the main navigation links.

### Link Depth

- Core pages: 1 click from homepage (good)
- Blog articles: 2 clicks (homepage -> /blog -> article)
- Guide sub-pages: 2 clicks (homepage -> /guias -> /guias/wordpress)
- Comparison sub-pages: 2 clicks (homepage -> /comparar -> /comparar/opinafy-vs-senja)

### Issues

| Severity | Issue | Details |
|----------|-------|---------|
| **Medium** | No cross-linking between ES and EN in navigation | The homepage links to `/en` but inner pages should also have a visible language switcher in the nav that links to the equivalent EN page. Verify this in the rendered UI. |

---

## 10. hreflang Implementation

**Status: NEEDS ATTENTION**

### HTML Head Tags

| Page | ES | EN | x-default |
|------|----|----|-----------|
| Homepage ES | `https://opinafy.com` | `https://opinafy.com/en` | `https://opinafy.com` |
| Homepage EN | `https://opinafy.com` | `https://opinafy.com/en` | **MISSING** |
| Plantillas | `https://opinafy.com/plantillas` | `https://opinafy.com/en/templates` | `https://opinafy.com/plantillas` |
| Precios | `https://opinafy.com/precios` | `https://opinafy.com/en/pricing` | `https://opinafy.com/precios` |
| Blog | `https://opinafy.com/blog` | `https://opinafy.com/en/blog` | `https://opinafy.com/blog` |

### Sitemap hreflang

All sitemap entries correctly include es, en, and x-default hreflang alternates with properly mapped URLs.

### Issues

| Severity | Issue | Details |
|----------|-------|---------|
| **Critical** | EN homepage missing `x-default` hreflang tag | The `/en` page only has `hreflang="es"` and `hreflang="en"` but is missing `hreflang="x-default"`. While present in the sitemap, it must also be in the HTML `<head>`. This can cause Google to show the wrong language version to users in unsupported locales. |
| **Critical** | EN homepage `<html lang="es">` rendered by server | The server returns `lang="es"` for the English page, then corrects it via client-side JavaScript (`document.documentElement.lang="en"`). If Googlebot does not execute JS (or times out), it will index the EN page as Spanish, causing language confusion and potential ranking issues. |
| **Medium** | Blog articles missing hreflang entirely | Individual blog articles (e.g., `/blog/que-son-testimonios-clientes-importancia`) have no hreflang tags in the HTML head at all. If EN translations exist, they need bidirectional hreflang links. |

---

## Prioritized Issues Summary

### Critical (Fix Immediately)

1. **EN homepage `<html lang="es">` bug** -- The server renders the wrong language attribute. Fix the Next.js layout to set `lang="en"` server-side for the EN route group, not via client-side JS.
   - **File to fix:** `app/(en)/layout.tsx` or equivalent -- ensure the root `<html>` element receives the correct `lang` prop based on the locale.

2. **EN homepage missing `x-default` hreflang** -- Add `<link rel="alternate" hreflang="x-default" href="https://opinafy.com"/>` to the `/en` page's metadata.
   - **Fix:** In the EN homepage metadata configuration, add the x-default alternate link alongside the es and en alternates.

### High

3. **EN page schema `inLanguage` is "es"** -- The WebSite schema on `/en` declares `"inLanguage":"es"`. This must be `"en"` for the English version. The Organization description should also be translated.

4. **Large HTML payload (256 KB on homepage)** -- The RSC inline payload inflates HTML. Consider:
   - Reducing component tree depth on the homepage
   - Using dynamic imports for below-the-fold sections
   - Enabling streaming SSR to split the payload

### Medium

5. **Blog page not cached (dynamic rendering)** -- Add ISR with `export const revalidate = 3600` (or similar) to the blog route to enable edge caching.

6. **Blog articles missing hreflang tags** -- If EN article translations exist, add bidirectional hreflang links in article page metadata.

7. **28 script tags on homepage** -- Audit and consolidate where possible. Consider code-splitting improvements.

8. **Cross-language navigation links** -- Ensure visible language switcher on all inner pages links to the correct alternate-language URL.

### Low

9. **CSP uses `unsafe-inline`/`unsafe-eval`** -- Standard for Next.js, but monitor.
10. **Two CSS files (89 KB total)** -- Audit for unused CSS rules with PurgeCSS or similar.
11. **No `Crawl-delay` in robots.txt** -- Consider adding for non-priority bots.
12. **SoftwareApplication schema missing `availability`** -- Minor enhancement.

---

## What Is Working Well

- **SSR implementation**: All critical content is server-rendered and available to crawlers without JS execution
- **Structured data**: Comprehensive and diverse schema types (Organization, SoftwareApplication, FAQPage, Article, CollectionPage, BreadcrumbList, ItemList)
- **Security headers**: Industry-leading configuration with HSTS, CSP, X-Frame-Options DENY, and Permissions-Policy
- **Redirect handling**: Proper 308 redirects for HTTP->HTTPS, www->non-www, trailing-slash removal
- **Sitemap**: 1,414 URLs with full bilingual hreflang support and current lastmod dates
- **Image optimization**: Next.js Image component with proper width/height, responsive srcSet, lazy loading, and priority hints
- **Font optimization**: Preloaded WOFF2 font prevents FOUT
- **robots.txt**: Correctly blocks private areas while allowing AI crawlers
- **Blog SEO**: Article schema with author, dates, keywords; proper OG/Twitter cards; semantic HTML with `<article>` tag
- **URL structure**: Clean, descriptive, hyphenated URLs in both languages
- **Canonical tags**: Correct self-referencing canonicals on all pages

---

## Score Breakdown

| Category | Score | Weight | Weighted |
|----------|-------|--------|----------|
| Crawlability | 95/100 | 15% | 14.3 |
| Indexability | 90/100 | 15% | 13.5 |
| Security | 98/100 | 10% | 9.8 |
| URL Structure | 100/100 | 10% | 10.0 |
| Mobile | 92/100 | 10% | 9.2 |
| Core Web Vitals | 65/100 | 15% | 9.8 |
| Structured Data | 80/100 | 10% | 8.0 |
| JS Rendering/SSR | 75/100 | 10% | 7.5 |
| Internal Linking | 90/100 | 5% | 4.5 |
| **Total** | | **100%** | **86.6 -> 82** |

*Score adjusted down from 86.6 to 82 due to the critical `lang` attribute bug which has outsized impact on international SEO.*

---

## Next Steps

1. Fix the `lang="es"` bug on EN pages (Critical -- estimated 15 minutes)
2. Add `x-default` hreflang to EN homepage metadata (Critical -- estimated 5 minutes)
3. Fix `inLanguage` in EN schema to `"en"` (High -- estimated 10 minutes)
4. Enable ISR on the blog route (Medium -- estimated 10 minutes)
5. Audit HTML payload size and optimize RSC output (High -- estimated 1-2 hours)
6. Add hreflang to blog article pages if translations exist (Medium -- estimated 30 minutes)

---

*Generated 2026-03-24 by Claude Opus 4.6 Technical SEO Audit*
