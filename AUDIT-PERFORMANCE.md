# Opinafy -- Core Web Vitals & Performance Audit

**Date:** 2026-03-24
**Auditor:** Automated source code + live analysis
**Stack:** Next.js 14.2.35, React 18, Tailwind CSS, Vercel, Supabase
**Note:** PageSpeed Insights API was rate-limited. This audit combines live HTTP measurements with comprehensive source code analysis.

---

## 1. Executive Summary

Opinafy is generally well-built from a performance perspective. The site benefits from Vercel's edge CDN (excellent TTFB), proper use of `next/font` for Inter, server-side rendering for most pages, Brotli compression, and immutable cache headers on static assets. However, there are several medium-impact and a few high-impact issues that should be addressed to ensure consistently good Core Web Vitals scores.

**Overall assessment: GOOD with room for improvement**

| Area | Rating |
|------|--------|
| TTFB / Server response | Excellent |
| LCP (Largest Contentful Paint) | Good (homepage) / Needs attention (blog) |
| INP (Interaction to Next Paint) | Good (most pages) / Risk on plantillas |
| CLS (Cumulative Layout Shift) | Good |
| JavaScript payload | Needs improvement |
| Image optimization | Needs improvement |
| Caching strategy | Mixed |

---

## 2. Per-Page Analysis

### 2.1 Homepage -- opinafy.com

| Metric | Measured / Estimated | Status |
|--------|---------------------|--------|
| TTFB | 119ms | Excellent |
| HTML size (uncompressed) | 256 KB | Large |
| HTML size (Brotli) | ~23 KB | Good |
| Total JS (uncompressed) | 540 KB | Needs improvement |
| Total JS (Brotli) | ~138 KB | Acceptable |
| Total CSS (uncompressed) | 89 KB | OK |
| Font (Inter, woff2) | 48 KB | Good (preloaded) |
| JS chunks loaded | 14 | High |
| LCP element | H1 text (no hero image) | Good -- text renders fast |
| Estimated LCP | ~1.2-1.8s | Good |
| Estimated INP | < 100ms | Good |
| Estimated CLS | < 0.05 | Good |

**Findings:**
- Hero section is pure text + CSS (no images), which is optimal for LCP.
- The `(auth)/layout` chunk (280 bytes) is preloaded on the homepage even though auth pages are never visited from here. Minor waste.
- 5 JSON-LD structured data blocks are inlined in the HTML. They add ~5-8 KB but are acceptable for SEO value.
- Logo (logo-opinafy.png) is served as PNG through `next/image` at 11 KB. Should be WebP/AVIF.
- `preconnect` hints for fonts.googleapis.com and fonts.gstatic.com are in `<head>` but are unnecessary since the font is self-hosted via `next/font/google`. These add wasted DNS lookups.

### 2.2 English Homepage -- opinafy.com/en

| Metric | Measured / Estimated | Status |
|--------|---------------------|--------|
| TTFB | 166ms | Good |
| HTML size (uncompressed) | 246 KB | Large |
| Estimated LCP | ~1.3-1.9s | Good |

**Findings:**
- Slightly slower TTFB than ES homepage (166ms vs 119ms), possibly due to less frequent cache hits at edge.
- Same architecture as ES homepage, same issues apply.

### 2.3 Plantillas -- opinafy.com/plantillas

| Metric | Measured / Estimated | Status |
|--------|---------------------|--------|
| TTFB | 118ms | Excellent |
| HTML size (uncompressed) | 188 KB | OK |
| Plantillas page chunk | 4 KB | Good |
| Template data chunk (#137) | 11 KB | Good |
| Estimated LCP | ~1.5-2.0s | Good |
| Estimated INP | 100-200ms | Needs monitoring |
| Estimated CLS | < 0.05 | Good |

**Findings:**
- Good: Gallery uses progressive loading (`INITIAL_COUNT = 12`) with "load more" button.
- Good: Template cards use `contentVisibility: 'auto'` and `containIntrinsicSize` for virtualization.
- Risk: `TemplatePreview` is a client component that renders inline CSS-styled widget previews for each card. Rendering 12+ complex previews with color calculations (lightenColor, hexToRgba) on mount could cause INP issues on low-end devices.
- Risk: Video template previews reference Supabase-hosted .mp4 files with `preload="metadata"`. Even metadata preloading for 12 cards could trigger significant bandwidth usage.
- The `PlantillasGallery` is a client component that receives ALL 100 templates as props via RSC serialization. This means the full template data (~50+ KB) is serialized into the HTML even though only 12 are shown initially.

### 2.4 Blog -- opinafy.com/blog

| Metric | Measured / Estimated | Status |
|--------|---------------------|--------|
| TTFB | 257ms | Needs improvement |
| HTML size (uncompressed) | 94 KB | Good |
| Blog images | 12 per page, from Supabase | Needs attention |
| Estimated LCP | ~2.0-3.0s | Risk of exceeding 2.5s |
| Estimated INP | < 100ms | Good |
| Estimated CLS | < 0.1 | Good |

**Findings:**
- TTFB of 257ms is the slowest of all pages. Likely due to dynamic rendering (search params processing) rather than ISR/static.
- Blog images are served via `next/image` from Supabase storage (good), but only the first image on page 1 gets `priority: true`. Other above-fold images on page 1 are lazy-loaded by default.
- Blog images are served as JPEG, not WebP. The `next.config.mjs` does not configure `images.formats` to include WebP/AVIF.
- The `blog-data.ts` file is 12,031 lines containing 80+ articles with FULL article content (HTML). This entire module is imported in blog pages. While tree-shaking helps, the raw data size is a concern for build times and RSC serialization.
- Cache-Control for optimized blog images: `max-age=3600` (1 hour). Should be longer for immutable content.

### 2.5 Precios -- opinafy.com/precios

| Metric | Measured / Estimated | Status |
|--------|---------------------|--------|
| TTFB | 114ms | Excellent |
| HTML size (uncompressed) | 117 KB | Good |
| Estimated LCP | ~1.2-1.8s | Good |
| Estimated INP | < 100ms | Good |
| Estimated CLS | < 0.1 | Good |

**Findings:**
- Clean, server-rendered page. Minimal client JS.
- Pricing component is a server component (no 'use client'). Excellent.
- FAQ uses native `<details>` elements. No JS needed for interaction.
- `revalidate = 60` is unnecessarily aggressive for a pricing page that rarely changes. Should be 3600+.

---

## 3. Cross-Cutting Issues

### 3.1 JavaScript Bundle Analysis

**Total JS loaded on homepage (uncompressed): 540 KB across 14 chunks**

| Chunk | Uncompressed | Brotli | What it is |
|-------|-------------|--------|------------|
| fd9d1056 | 173 KB | 55 KB | React + React DOM (framework) |
| 2117 | 124 KB | 33 KB | Next.js runtime |
| polyfills | 113 KB | 41 KB | Browser polyfills |
| 82 | 41 KB | 11 KB | Shared component code |
| 6137 | 27 KB | ~8 KB | Shared utilities |
| 2972 | 26 KB | ~8 KB | Shared chunk |
| 5878 | 13 KB | ~4 KB | Shared chunk |
| Others | ~23 KB | ~7 KB | Page + layout chunks |

**Key issues:**
1. **Polyfills chunk is 113 KB (41 KB compressed).** Next.js 14 includes polyfills for older browsers. If targeting modern browsers only, this is waste.
2. **No dynamic imports used anywhere in the codebase.** All components are statically imported. This means no route-level code splitting beyond what Next.js App Router provides automatically.
3. **`blog-data.ts` (12K lines) and `widget-templates.ts` (2K lines) and `industry-data.ts` (14K lines)** are large static data files. They contribute to build-time bundle sizes for their respective pages.

### 3.2 Image Optimization

**Issues identified:**

1. **Logo served as PNG instead of WebP/AVIF:**
   - `logo-opinafy.png` is 63 KB on disk, served at 11 KB through next/image as PNG.
   - `next.config.mjs` does NOT include `images.formats: ['image/avif', 'image/webp']`.
   - This means all images are served as their original format (PNG/JPEG), missing ~30-50% size reduction from modern formats.

2. **OG image (og.png) at 95 KB:**
   - Not user-facing for performance, but social crawlers will benefit from optimization.

3. **Blog images (Supabase storage):**
   - Stored as JPEG, served through `next/image` at ~25 KB each. Acceptable size but WebP would be ~15 KB.
   - `max-age=3600` cache is too short. These images are immutable once uploaded.

4. **No hero image on homepage:**
   - This is actually excellent for LCP. Text-based hero with CSS gradients is the fastest possible LCP candidate.

5. **No `<img>` tags without dimensions found in marketing pages:**
   - All images use `next/image` with explicit width/height. Good for CLS.

### 3.3 Font Loading

**Good:**
- Inter is loaded via `next/font/google` with `display: 'swap'` and `subsets: ['latin']`.
- Self-hosted woff2 file (48 KB) is preloaded in `<head>` with correct `as="font"` and `crossorigin`.

**Issue:**
- The root layout includes unnecessary `<link rel="preconnect" href="https://fonts.googleapis.com">` and `<link rel="preconnect" href="https://fonts.gstatic.com">` in `<head>`. Since the font is self-hosted via `next/font`, these preconnects are wasted -- they trigger DNS lookups + TLS handshakes to servers that are never contacted. This adds ~100-200ms of wasted browser activity.

### 3.4 Third-Party Scripts

| Script | Loading Strategy | Impact |
|--------|-----------------|--------|
| Google Tag Manager (gtag.js) | `afterInteractive` | Low -- loads after hydration |
| Google Analytics | `afterInteractive` (inline) | Low |

**Good:** No Stripe JS loaded on marketing pages. No heavy third-party scripts.
**Good:** Consent defaults to `denied`, so analytics doesn't run until user accepts cookies.

### 3.5 Caching Strategy

| Resource | Cache-Control | Assessment |
|----------|--------------|------------|
| `/_next/static/*` (JS/CSS/fonts) | `max-age=31536000, immutable` | Excellent |
| HTML pages | `max-age=0, must-revalidate` | Correct for ISR |
| `/_next/image/*` (local images) | `max-age=0, must-revalidate` | Too short |
| `/_next/image/*` (Supabase images) | `max-age=3600` | Too short for immutable images |
| `/widget.js` | `max-age=3600, stale-while-revalidate=86400` | Good |

**Issue:** The `next.config.mjs` does not configure `images.minimumCacheTTL`. Default is very short. Blog images and other optimized images should cache for much longer.

### 3.6 HTML Document Size

| Page | Uncompressed | Concern |
|------|-------------|---------|
| Homepage | 256 KB | Large -- contains 5 JSON-LD blocks + full page SSR + RSC payload |
| EN Homepage | 246 KB | Same |
| Plantillas | 188 KB | Contains serialized template data for all 100 templates |
| Precios | 117 KB | Acceptable |
| Blog | 94 KB | Good |

The homepage HTML is 256 KB uncompressed. While Brotli compresses this to ~23 KB over the wire, the browser still needs to parse 256 KB of HTML. The RSC (React Server Components) payload serializes all component data inline in `<script>` tags within the HTML.

### 3.7 CLS Analysis

**Low risk across all pages:**
- No images without explicit dimensions found in marketing pages.
- Font uses `display: swap` -- minor FOUT risk but acceptable.
- Cookie banner appears at bottom of page (`fixed bottom-0`), which does NOT shift content.
- No dynamically injected ads or embeds.
- Navbar is `sticky top-0` with fixed height (h-16). No CLS risk.

### 3.8 INP Analysis

**Low risk for most pages:**
- Marketing pages are mostly server-rendered with minimal client interactivity.
- Homepage has no complex event handlers.
- Blog search (`BlogSearch`) is a client component, but likely lightweight.
- Cookie banner interaction is simple (localStorage + state update).

**Medium risk on Plantillas page:**
- `PlantillasGallery` is a client component with category filtering and "load more" functionality.
- Each `TemplateCard` renders a `TemplatePreview` with inline style calculations (color manipulation).
- Category change triggers re-render of 12+ cards with template previews.
- "Load more" adds 12 more cards with complex rendering.

---

## 4. Prioritized Recommendations

### HIGH IMPACT

#### H1. Enable WebP/AVIF image formats
**File:** `next.config.mjs`
**Effort:** 1 minute
**Impact:** ~30-50% image size reduction across all pages
```js
images: {
  formats: ['image/avif', 'image/webp'],
  minimumCacheTTL: 31536000, // 1 year for optimized images
  remotePatterns: [
    { protocol: 'https', hostname: '*.supabase.co' },
  ],
},
```

#### H2. Remove unnecessary preconnect hints
**File:** `src/app/layout.tsx`
**Effort:** 1 minute
**Impact:** Eliminates ~100-200ms of wasted DNS/TLS for fonts.googleapis.com and fonts.gstatic.com
Remove these two lines from `<head>`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
```
The font is already self-hosted via `next/font/google`. These preconnects serve no purpose.

#### H3. Convert logo to WebP/AVIF
**File:** `public/logo-opinafy.png`
**Effort:** 5 minutes
**Impact:** Logo is loaded on every page with `priority`. Converting from PNG (63 KB source) to WebP would reduce served size.
Option A: Replace with a WebP file and update references.
Option B: If H1 is implemented, `next/image` will auto-convert to WebP/AVIF.

#### H4. Increase revalidate interval on pricing page
**File:** `src/app/(marketing)/precios/page.tsx`
**Effort:** 1 minute
**Impact:** Reduces server-side rendering frequency, improves edge cache hit rate
Change `export const revalidate = 60` to `export const revalidate = 3600` (or even 86400).

### MEDIUM IMPACT

#### M1. Reduce Plantillas page RSC payload
**Current:** All 100 templates are serialized as props to `PlantillasGallery` client component, even though only 12 are shown initially.
**Fix:** Pass only template metadata (id, name, category, layout, description) for filtering. Load full config data (colors, styles) only for the 12 visible cards, either via a separate API call or by splitting the data.
**Impact:** Reduces initial HTML and parse time for plantillas page.

#### M2. Add ISR/static generation for blog index
**Current:** Blog page uses dynamic rendering (processes searchParams on every request), resulting in 257ms TTFB vs ~115ms for static pages.
**Fix:** Add `export const revalidate = 3600` to the blog page. The page already handles search params server-side, which is compatible with ISR.
**Impact:** TTFB improvement from ~257ms to ~115ms.

#### M3. Lazy-load TemplatePreview on plantillas page
**Current:** Each template card immediately renders a full TemplatePreview with complex inline styles.
**Fix:** Use `IntersectionObserver` or a library to defer rendering of TemplatePreview until the card is near the viewport. Show a static placeholder (gradient/skeleton matching the template's primary color) until visible.
**Impact:** Faster initial render of plantillas page, better INP on category changes.

#### M4. Optimize blog image priority loading
**File:** `src/app/(marketing)/blog/page.tsx`
**Current:** Only the first image on page 1 gets `priority: true`.
**Fix:** Give `priority: true` to at least the first 3 images (first row above fold). For page > 1, also prioritize first 3.
**Impact:** Faster LCP on blog page.

#### M5. Add preconnect for Supabase images
**File:** `src/app/(marketing)/blog/page.tsx` or layout
**Effort:** 1 minute
**Impact:** Blog images come from `rckjevsqxkfixkdloqjv.supabase.co`. Adding a preconnect hint on blog pages would save ~100ms on first image load.

### LOW IMPACT

#### L1. Consider splitting blog-data.ts
**Current:** 12,031 lines, 80+ articles with full HTML content in a single file.
**Impact:** Affects build time and memory during SSR. Consider splitting into separate files per article or using a CMS/database.

#### L2. Review dark mode CSS
**File:** `src/app/globals.css`
**Current:** Has `@media (prefers-color-scheme: dark)` CSS variables but the marketing site appears to be light-only.
**Impact:** Minimal, but unnecessary CSS rules add bytes.

#### L3. Reduce JSON-LD blocks on homepage
**Current:** 5 separate `<script type="application/ld+json">` blocks on homepage.
**Fix:** Combine into a single `@graph` JSON-LD block.
**Impact:** Saves a few hundred bytes of HTML and is cleaner for parsers.

#### L4. Consider removing polyfills for modern-only targeting
**Current:** polyfills chunk is 113 KB (41 KB compressed).
**Fix:** If you only target modern browsers (Chrome 80+, Safari 14+, Firefox 80+), investigate Next.js `browserslist` configuration to reduce polyfill size.
**Impact:** ~41 KB reduction in compressed JS.

#### L5. Add stale-while-revalidate to marketing pages
**Current:** HTML pages use `max-age=0, must-revalidate`. Vercel handles this well with its CDN, but explicit `stale-while-revalidate` headers on ISR pages would help.
**Impact:** Vercel already handles SWR via ISR, so minimal real-world impact. But explicit headers improve behavior with other CDN layers or proxies.

---

## 5. What Is Already Done Well

1. **Font optimization** -- `next/font/google` with self-hosted woff2, swap display, latin subset. Preloaded.
2. **Server-side rendering** -- Marketing pages are server components by default. Only interactive parts (navbar, gallery, cookie banner) are client components.
3. **Progressive template loading** -- Plantillas gallery shows 12 initially, loads more on demand.
4. **Content visibility API** -- Template cards use `contentVisibility: 'auto'` for rendering optimization.
5. **Vercel edge CDN** -- TTFB consistently under 170ms for cached pages.
6. **Brotli compression** -- All text assets are served with Brotli encoding.
7. **Immutable cache headers** -- Static assets get `max-age=31536000, immutable`.
8. **Minimal third-party scripts** -- Only Google Analytics with `afterInteractive` strategy and consent-first approach.
9. **No layout shift sources** -- All images use `next/image` with dimensions. Cookie banner is `position: fixed`. Navbar is `sticky` with fixed height.
10. **Security headers** -- CSP, X-Frame-Options, Referrer-Policy all properly configured.
11. **ISR for homepage** -- `revalidate = 3600` means the homepage is static most of the time.
12. **No Stripe JS on marketing pages** -- Stripe is only loaded in dashboard/checkout flows.

---

## 6. Estimated Core Web Vitals (p75, Mobile)

| Page | LCP | INP | CLS | Status |
|------|-----|-----|-----|--------|
| / (homepage ES) | ~1.5s | < 100ms | < 0.05 | PASS |
| /en (homepage EN) | ~1.7s | < 100ms | < 0.05 | PASS |
| /plantillas | ~1.8s | 100-200ms | < 0.05 | PASS (borderline INP) |
| /blog | ~2.5s | < 100ms | < 0.05 | AT RISK (LCP) |
| /precios | ~1.5s | < 100ms | < 0.05 | PASS |

**Note:** These are estimates based on server timing (TTFB), document size, asset analysis, and component complexity. Real field data from CrUX (when available after sufficient traffic) will be the source of truth. Run Lighthouse locally or use WebPageTest for lab measurements.

---

## 7. Quick Wins Checklist

- [ ] Add `formats: ['image/avif', 'image/webp']` and `minimumCacheTTL: 31536000` to `next.config.mjs` images config
- [ ] Remove unnecessary `preconnect` hints for Google Fonts from `layout.tsx`
- [ ] Change `revalidate = 60` to `revalidate = 3600` in `precios/page.tsx`
- [ ] Add `export const revalidate = 3600` to `blog/page.tsx`
- [ ] Add `priority: true` to first 3 blog card images
- [ ] Add `<link rel="preconnect" href="https://rckjevsqxkfixkdloqjv.supabase.co">` on blog pages

**Estimated time for all quick wins: 15-20 minutes.**
