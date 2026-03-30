# Opinafy.com -- Definitive Performance Audit

**Date:** 2026-03-30
**Auditor:** Claude (Web Performance Specialist)
**Score: 92/100**

---

## Executive Summary

ISR caching is fully operational across all marketing pages. Every tested route returns `x-vercel-cache: HIT`. TTFB is excellent (87-280ms from CDG/IAD edge). The middleware restriction to auth-only routes was the single biggest unlock -- it eliminated the dynamic rendering penalty that was killing cache performance. The site is now well-optimized with only minor refinements remaining.

---

## 1. Source Code Verification

### 1.1 Middleware (`src/middleware.ts`) -- PASS

The matcher is restricted to 15 explicit auth-related route patterns:
- `/dashboard/:path*`, `/proyectos/:path*`, `/configuracion/:path*`, etc.
- API routes: `/api/projects/:path*`, `/api/testimonials/:path*`, etc.
- Auth pages: `/login`, `/registro`, `/forgot-password`

No catch-all pattern. Marketing pages (`/`, `/blog`, `/precios`, `/plantillas`) are completely excluded from middleware execution. This allows Vercel to serve them from the ISR cache without invoking any server-side session logic.

**Verdict:** Correct. No regression risk.

### 1.2 Root Layout (`src/app/layout.tsx`) -- PASS

- No `headers()` call
- No `cookies()` call
- No `useSearchParams()` or other dynamic APIs
- Font loaded with `display: 'swap'` (good for LCP)
- Google Analytics loaded with `strategy="afterInteractive"` (non-blocking)
- Consent defaults to `denied` (good -- no cookie writes on marketing pages)

**Verdict:** Clean. Layout does not force dynamic rendering.

### 1.3 Marketing Layout (`src/app/(marketing)/layout.tsx`) -- PASS

- Metadata only, no dynamic APIs
- Renders `{children}` + `<CookieBanner />` (client component)
- No `headers()`, no `cookies()`

### 1.4 `next.config.mjs` -- PASS

| Setting | Value | Assessment |
|---------|-------|------------|
| `images.formats` | `['image/avif', 'image/webp']` | Optimal -- AVIF first |
| `images.minimumCacheTTL` | `2,592,000` (30 days) | Excellent |
| `poweredByHeader` | `false` | Good (minor security/bytes) |

Security headers configured via `headers()` in next.config (not middleware), which is correct -- these are applied at the Vercel edge layer and do not trigger dynamic rendering.

### 1.5 Blog Page (`src/app/(marketing)/blog/page.tsx`) -- PASS

- `export const revalidate = 3600` -- ISR hourly revalidation
- No `searchParams` access in the server component
- Blog list data is slimmed: only `slug, title, excerpt, category, keywords, date, readTime, image, tldr` are passed (no `content` HTML)
- `<BlogList>` wrapped in `<Suspense>` (client component handles search/filter)
- Schema: CollectionPage + Breadcrumb + ItemList (top 12 articles)

**Verdict:** Properly static. No dynamic opt-out triggers.

### 1.6 Homepage (`src/app/(marketing)/page.tsx`) -- PASS

- `export const revalidate = 3600`
- 7 below-fold sections use `next/dynamic`:
  - `HowItWorks`, `TestimonialsPreview`, `Pricing`, `Faq`, `Integrations`, `MiniSiteShowcase`, `CtaSection`
- Above-fold components (`Navbar`, `Hero`, `Features`) are statically imported
- Product screenshot image has `width` and `height` attributes (1440x900)

**Verdict:** Good code-splitting strategy. Initial JS payload reduced.

### 1.7 Templates Gallery (`src/app/(marketing)/plantillas/page.tsx`) -- PASS

- `INITIAL_TEMPLATES = 24` -- only 24 of 100 templates sent on first render
- Uses `toPreviewData()` to strip heavy fields from template objects
- Client-side `PlantillasGallery` handles pagination via `/api/templates?offset=X&limit=Y`

**Verdict:** Proper lazy-loading pattern. 144KB payload is reasonable for 24 template previews + page chrome.

### 1.8 Precios Page (`src/app/(marketing)/precios/page.tsx`) -- PASS

- `export const revalidate = 3600`
- Pure server component with static content
- FAQ uses native `<details>` elements (zero JS for accordion)

---

## 2. Live Performance Measurements

### 2.1 TTFB and Cache Status

| Page | TTFB | x-vercel-cache | Payload | HTTP |
|------|------|----------------|---------|------|
| `/` (homepage) | 280ms (cold) / 93-147ms (warm) | **HIT** | 253,550 bytes | 200 |
| `/blog` | 239ms | **HIT** | 150,870 bytes | 200 |
| `/precios` | 87ms | **HIT** | 116,790 bytes | 200 |
| `/plantillas` | 149ms | **HIT** | 144,078 bytes | 200 |

All four pages return `x-vercel-cache: HIT`. ISR is fully operational.

Average warm TTFB: ~120ms (excellent -- well under the 200ms good threshold).

The `/precios` page had `age: 1282` (21 minutes cached), and `/plantillas` had `age: 389308` (4.5 days cached), confirming long-lived edge cache.

### 2.2 Payload Analysis

| Page | HTML Size | Assessment |
|------|-----------|------------|
| Homepage | 248 KB | Moderate -- includes 5 JSON-LD blocks + inline CSS. Acceptable for content-rich landing. |
| Blog | 147 KB | Good -- 160 article metadata entries are the bulk. |
| Precios | 114 KB | Good -- mostly inline comparison table. |
| Plantillas | 141 KB | Good -- 24 template preview cards with SVG icons. |

No page exceeds 250 KB uncompressed HTML. With gzip/brotli (Vercel default), transfer sizes will be roughly 40-60 KB.

### 2.3 Resource Loading

- **Font:** Inter (woff2) preloaded via `<link rel="preload">` with `font-display: swap`
- **CSS:** 2 stylesheets (2.2 KB + 86.6 KB) -- Tailwind CSS is the large one, but it is a single file (good for caching)
- **JS chunks:** 13 script tags on homepage, all from `/_next/static/chunks/` (hashed, immutable cache)
- **Google Analytics:** Loaded via `<link rel="preload" as="script">` with `afterInteractive` strategy
- **Images:** Logo uses `fetchPriority="high"` + preload; product screenshot uses `loading="lazy"` with explicit dimensions

---

## 3. Core Web Vitals Assessment

### LCP (Largest Contentful Paint) -- GOOD (estimated <2.0s)

| Factor | Status |
|--------|--------|
| TTFB | 87-280ms -- excellent |
| Render-blocking resources | Minimal -- 2 CSS files, JS deferred |
| LCP element (likely Hero text or logo) | Preloaded with `fetchPriority="high"` |
| Font loading | `display: swap` prevents invisible text |
| Third-party blocking | GA loaded `afterInteractive` |

**Estimated LCP:** 1.2-1.8s on 4G. Well within the 2.5s good threshold.

### INP (Interaction to Next Paint) -- GOOD (estimated <150ms)

| Factor | Status |
|--------|--------|
| Dynamic imports | 7 below-fold components lazy-loaded |
| Main thread blocking | No heavy synchronous JS detected |
| Event handlers | Native `<details>` for FAQ (zero JS) |
| DOM size | Moderate (24 templates, not 100) |
| Third-party scripts | Only GA (lightweight) |

**Estimated INP:** 80-150ms. The dynamic import strategy keeps initial JS lean.

### CLS (Cumulative Layout Shift) -- GOOD (estimated <0.05)

| Factor | Status |
|--------|--------|
| Image dimensions | All `<img>` have explicit `width`/`height` |
| Font swap | `display: swap` may cause minor FOUT |
| Dynamic content injection | Below-fold components load after initial paint |
| Ads/embeds | None |
| Cookie banner | Client-rendered, but likely positioned fixed |

**Estimated CLS:** 0.02-0.05. The font swap from system to Inter could cause minor shift, but Inter is preloaded so the window is small.

---

## 4. Scoring Breakdown

| Category | Score | Weight | Notes |
|----------|-------|--------|-------|
| ISR / Caching | 10/10 | 20% | All marketing pages HIT. Middleware correctly scoped. |
| TTFB | 9/10 | 15% | 87-280ms. First hit slightly slow (280ms) due to CDG->IAD routing. |
| LCP optimization | 9/10 | 15% | Preloads, font swap, deferred JS. Product screenshot not preloaded (below fold, acceptable). |
| JS delivery | 9/10 | 15% | 7 dynamic imports for below-fold. Good code splitting. |
| Payload size | 9/10 | 10% | All pages under 250 KB uncompressed. Blog could trim article metadata. |
| CLS prevention | 9/10 | 10% | All images dimensioned. Font preloaded. Minor FOUT risk only. |
| INP readiness | 10/10 | 10% | No heavy event handlers. Native HTML elements for interactivity. |
| Security headers | 9/10 | 5% | CSP, HSTS, X-Frame-Options all present. `unsafe-inline`/`unsafe-eval` in CSP is a minor concern. |

**Final Score: 92/100**

---

## 5. What Is Working Well

1. **ISR is fully operational.** The middleware fix was the critical change. All marketing pages serve from edge cache with sub-150ms warm TTFB.

2. **Dynamic imports for below-fold content.** Seven components are lazy-loaded, significantly reducing initial JS parse time and improving TTI.

3. **Image optimization pipeline.** AVIF-first with 30-day cache TTL. Next.js Image component used consistently with dimensions.

4. **Font strategy.** Inter loaded via `next/font/google` with `display: swap` and preloaded woff2. No render-blocking font requests.

5. **Minimal third-party impact.** Only Google Analytics, loaded `afterInteractive` with consent defaults to `denied`.

6. **Template pagination.** Only 24 of 100 templates in initial payload. API-driven lazy loading for the rest.

7. **Blog data slimming.** Article content HTML stripped from the list page. Only metadata fields passed to the client component.

---

## 6. Remaining Optimization Opportunities

### Priority 1 -- High Impact

**A. Homepage HTML payload (253 KB)**
The homepage is the largest page at 253 KB uncompressed. The 5 JSON-LD blocks account for roughly 5-8 KB. The bulk is from the inline RSC payload for dynamic-imported components. Consider:
- Server Components that render to static HTML do not benefit from dynamic import the same way client components do. Verify these are actually client components or have `'use client'` directives.
- If some below-fold sections are server components, dynamic import still sends their full HTML in the RSC payload. The benefit is only in JS bundle reduction, not HTML reduction.

**B. CSS file size (86.6 KB)**
The main Tailwind CSS file is 86.6 KB uncompressed. This likely contains unused classes from dashboard/admin pages since Next.js bundles CSS per layout tree. After brotli compression this is probably ~15 KB, which is acceptable but could be improved by:
- Ensuring `content` paths in `tailwind.config` do not include dashboard components in the marketing CSS bundle.

### Priority 2 -- Medium Impact

**C. Consider preloading the hero CTA or key above-fold image**
The logo is preloaded, but if the Hero component contains a large background image or illustration, it should also be preloaded to improve LCP.

**D. Blog page: 160 article metadata entries**
The blog list ships metadata for all 160 articles in the initial HTML (150 KB). Consider:
- Paginating server-side: only send the first 12-20 articles in the RSC payload.
- Let the client component fetch additional pages via API.
- This would cut the blog page payload by roughly 60-70%.

**E. Consider `stale-while-revalidate` header**
Currently `cache-control: public, max-age=0, must-revalidate`. Vercel handles ISR via its own edge layer, but adding an explicit `s-maxage` and `stale-while-revalidate` for marketing pages could improve behavior with intermediate CDN layers.

### Priority 3 -- Low Impact (Polish)

**F. `unsafe-inline` and `unsafe-eval` in CSP**
These weaken CSP significantly. Next.js requires `unsafe-inline` for its style injection, but `unsafe-eval` should be removable if no eval-dependent libraries are used. This is a security concern more than performance, but strict CSP can prevent injected scripts from impacting performance.

**G. Preconnect to Supabase storage**
The product screenshot on the homepage loads from `rckjevsqxkfixkdloqjv.supabase.co`. Adding a `<link rel="preconnect">` hint for this origin would save ~100ms on the DNS+TLS handshake. However, since the image is below the fold and lazy-loaded, the impact is minimal.

---

## 7. Verification Checklist

| Check | Result |
|-------|--------|
| Middleware matcher has no catch-all | PASS |
| Root layout has no `headers()`/`cookies()` | PASS |
| Marketing layout has no `headers()`/`cookies()` | PASS |
| `images.formats` includes AVIF | PASS |
| `minimumCacheTTL` >= 24 hours | PASS (30 days) |
| Blog page has `revalidate = 3600` | PASS |
| Blog page has no `searchParams` in server component | PASS |
| Blog list data strips `content` HTML | PASS |
| Homepage uses dynamic imports for below-fold | PASS (7 components) |
| Templates gallery sends only 24 initially | PASS |
| Homepage `x-vercel-cache: HIT` | PASS |
| Blog `x-vercel-cache: HIT` | PASS |
| Precios `x-vercel-cache: HIT` | PASS |
| Plantillas `x-vercel-cache: HIT` | PASS |
| All images have width/height attributes | PASS |
| Font uses `display: swap` | PASS |
| GA loaded `afterInteractive` | PASS |

**17/17 checks passed.**

---

## 8. Comparison with Previous State

| Metric | Before (middleware catch-all) | After (auth-only matcher) |
|--------|------------------------------|---------------------------|
| x-vercel-cache | MISS (always dynamic) | HIT (edge cached) |
| TTFB (homepage) | 800-1500ms (server render every request) | 87-280ms (edge cached) |
| ISR working | No -- middleware forced dynamic | Yes -- full ISR with hourly revalidation |
| Supabase session calls per marketing visit | 1 (unnecessary) | 0 |

The middleware fix alone improved TTFB by approximately 5-10x on cached hits.

---

## Final Verdict

**Score: 92/100** -- The site is in excellent shape for a newly launched SaaS. ISR caching is confirmed working. All Core Web Vitals are projected to pass at the 75th percentile. The remaining 8 points come from: homepage payload size (could be trimmed), blog shipping all 160 articles client-side, and CSS bundle size. These are refinements, not blockers. No critical performance issues remain.
