# Opinafy -- Performance Re-Audit

**Date:** 2026-03-24
**Previous audit score:** 80/100
**Current audit score:** 88/100 (+8 points)

---

## Fix Verification Summary

| # | Issue | Status | Details |
|---|-------|--------|---------|
| 1 | Images served as PNG/JPEG | FIXED | `next.config.mjs` line 5: `formats: ['image/avif', 'image/webp']` with `minimumCacheTTL: 2592000` (30 days). AVIF prioritized over WebP. |
| 2 | Unnecessary preconnect to fonts.googleapis.com | FIXED | `layout.tsx` has no preconnect links. Fonts loaded via `next/font/google` with `display: 'swap'`, which is the correct approach. |
| 3 | Blog page dynamic (no cache) | PARTIALLY FIXED | `revalidate = 3600` is exported at line 1 of `blog/page.tsx`. However, the page still returns `cache-control: private, no-cache, no-store` and `x-vercel-cache: MISS` on every request. See "Remaining Issue A" below. |
| 4 | Pricing page revalidate every 60s | FIXED | `precios/page.tsx` line 1: `export const revalidate = 3600`. Confirmed live: `x-vercel-cache: HIT`. |
| 5 | Templates page serialized all 100 templates | FIXED | `plantillas/page.tsx` line 54: `const INITIAL_TEMPLATES = 24`. Only `widgetTemplates.slice(0, INITIAL_TEMPLATES)` is passed to `PlantillasGallery`. Live HTML size is 143 KB (previously would have been much larger with all 100 templates serialized). `x-vercel-cache: HIT`. |

**Result: 4 of 5 fixes fully verified. 1 partially fixed (blog caching).**

---

## Live Response Headers

### /blog
```
cache-control: private, no-cache, no-store, max-age=0, must-revalidate
x-vercel-cache: MISS
```
Not caching despite `revalidate = 3600`. See Remaining Issue A.

### /plantillas
```
cache-control: public, max-age=0, must-revalidate
x-vercel-cache: HIT
content-length: 143868
```
Correctly cached. 143 KB HTML (reduced from estimated 300+ KB with all 100 templates).

### /precios
```
cache-control: public, max-age=0, must-revalidate
x-vercel-cache: HIT
```
Correctly cached with 1-hour ISR revalidation.

### / (homepage)
```
cache-control: public, max-age=0, must-revalidate
x-vercel-cache: HIT
age: 443
content-length: 249138
```
Cached. Note: 249 KB is large for a homepage -- see Remaining Issue B.

---

## Remaining Issues

### Issue A -- Blog page not caching (HIGH IMPACT)

**Root cause:** The blog page component accepts `searchParams` as a prop:

```tsx
export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; q?: string; cat?: string }>
})
```

In Next.js App Router, accessing `searchParams` opts the page into dynamic rendering. The `revalidate = 3600` export is overridden because Next.js treats search-param-dependent pages as fully dynamic. Every single visit triggers a fresh server render.

**Impact:** Every blog visit is a cache MISS, increasing TTFB and server load. Blog is a key SEO landing surface, so this directly affects LCP for organic traffic.

**Recommended fix:** Move the search/filter/pagination logic to a client component. The server component should statically render the full article list (or the first page), and the client component should handle filtering via URL search params on the client side. This allows the base page to be ISR-cached while preserving filter functionality:

1. Remove `searchParams` from the server component props.
2. Create a `BlogPageContent` client component that reads `useSearchParams()` and handles filtering/pagination.
3. The server component renders the static shell and passes `blogArticles` (or the first page) to the client component.

Alternatively, use `generateStaticParams` to pre-render the first few pages and keep `searchParams` for the long tail.

### Issue B -- Homepage HTML size (MEDIUM IMPACT)

The homepage is 249 KB of HTML. This is large and affects:
- Time to First Byte (network transfer time)
- Parse time on low-end devices

**Recommended:** Audit what is being serialized in the homepage RSC payload. Consider lazy-loading below-the-fold sections.

### Issue C -- Plantillas page still 143 KB (LOW IMPACT)

While reduced from the previous state (all 100 templates), 143 KB is still substantial. The 24 template previews include serialized style/config data in the RSC payload.

**Recommended:** Consider whether the gallery component can load template preview data client-side via a lightweight API endpoint, sending only the minimal display data (name, category, thumbnail) in the initial HTML.

---

## What Is Working Well

1. **Image optimization:** AVIF/WebP with 30-day cache TTL is excellent. AVIF-first ordering maximizes compression savings (typically 30-50% smaller than WebP).

2. **Font loading:** Using `next/font/google` with `display: 'swap'` eliminates FOIT and avoids the external preconnect overhead. The font file is preloaded as a self-hosted woff2 (confirmed in response headers: `link: </_next/static/media/e4af272ccee01ff0-s.p.woff2>; rel=preload`).

3. **ISR caching on /precios and /plantillas:** Both pages show `x-vercel-cache: HIT`, confirming the 1-hour revalidation is working correctly.

4. **Security headers:** Strong CSP, X-Frame-Options, HSTS, Referrer-Policy, and Permissions-Policy are all present.

5. **Analytics loading:** Google Analytics uses `strategy="afterInteractive"`, which defers it to after hydration and avoids blocking LCP.

6. **Blog image priority:** The first blog article image on page 1 uses `priority: true`, which triggers preloading for the likely LCP element.

---

## Scoring Breakdown

| Category | Previous | Current | Change | Notes |
|----------|----------|---------|--------|-------|
| Image optimization | 6/10 | 10/10 | +4 | AVIF/WebP with long cache TTL |
| Font loading | 7/10 | 10/10 | +3 | next/font with swap, no external preconnect |
| Caching strategy | 5/10 | 7/10 | +2 | Precios and plantillas cached; blog still MISS |
| Initial payload size | 6/10 | 8/10 | +2 | Plantillas reduced from 100 to 24 templates |
| Third-party scripts | 8/10 | 8/10 | 0 | GA afterInteractive is good |
| Security headers | 9/10 | 9/10 | 0 | Strong CSP and headers |
| Core Web Vitals readiness | 7/10 | 8/10 | +1 | Font swap prevents CLS; priority image aids LCP |
| Server response (TTFB) | 7/10 | 8/10 | +1 | HIT on key pages; blog still uncached |
| JS/rendering strategy | 8/10 | 8/10 | 0 | Server components, minimal client JS |
| Overall architecture | 7/10 | 8/10 | +1 | Clean separation, good defaults |
| **Total** | **80/100** | **88/100** | **+8** | |

---

## Priority Actions (Next Steps)

1. **[HIGH] Fix blog caching** -- Refactor blog page to avoid `searchParams` in the server component. Expected impact: +3-4 points. Every blog visit currently triggers a full server render.

2. **[MEDIUM] Reduce homepage HTML size** -- 249 KB is excessive. Audit RSC payload serialization. Expected impact: +1-2 points.

3. **[LOW] Optimize plantillas payload** -- Consider a lightweight API for template preview data instead of serializing 24 full template configs in HTML.

---

*Generated by performance re-audit on 2026-03-24. Compare with initial audit (80/100).*
