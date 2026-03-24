# Opinafy Technical SEO Re-Audit

**Date:** 2026-03-24
**Auditor:** Claude Opus 4.6 (Automated)
**Previous Score:** 82/100 (prior audit)
**Current Score:** 85/100

---

## Summary

Several fixes from the prior audit have been implemented successfully (hreflang x-default added, EN WebSite schema corrected, robots.txt UTM blocking, llms.txt deployed). However, the most critical issue -- the `<html lang="es">` attribute on English pages -- remains unfixed and continues to send a wrong language signal to search engines. Two new pages (/sobre, /en/about) exist but are missing from the sitemap. The blog page is not using ISR caching as expected.

---

## Previous Critical Issues -- Verification Status

### 1. EN pages render lang="es" server-side -- NOT FIXED

**Status: FAIL (Critical)**

The `<html>` tag on `/en` still reads:

```
<html lang="es" class="__variable_f367f3">
```

Every page on the site, including `/en`, `/en/about`, `/sobre`, and the Spanish homepage, renders with `lang="es"` on the root `<html>` element. There is exactly 1 occurrence of `lang="en"` deeper in the /en page body (likely on a wrapper div), but search engines rely on the `<html>` tag attribute. This is the same critical bug reported in the prior audit and it has not been resolved.

**Impact:** Google may misclassify English pages as Spanish, harming English organic rankings and potentially triggering hreflang confusion warnings in Search Console.

**Fix:** In the Next.js root layout for the `/en` route segment, set the `lang` attribute dynamically:
```tsx
// app/[locale]/layout.tsx
export default function LocaleLayout({ children, params }) {
  return <html lang={params.locale === 'en' ? 'en' : 'es'}>{children}</html>;
}
```

### 2. EN homepage missing x-default hreflang -- FIXED

**Status: PASS**

Both the homepage and `/en` now include all three required hreflang link tags:

```
<link rel="alternate" hrefLang="es" href="https://opinafy.com"/>
<link rel="alternate" hrefLang="en" href="https://opinafy.com/en"/>
<link rel="alternate" hrefLang="x-default" href="https://opinafy.com"/>
```

The sitemap also includes matching `xhtml:link` hreflang annotations with x-default for all bilingual page pairs. This is correctly implemented.

### 3. EN WebSite schema declared inLanguage: "es" -- FIXED

**Status: PASS**

The `/en` page WebSite schema now correctly declares:

```json
"inLanguage": "en"
```

The Spanish homepage correctly declares `"inLanguage": "es"`. The Organization and SoftwareApplication schemas are consistent across both languages.

### 4. Homepage HTML payload was 256KB -- NOT IMPROVED

**Status: FAIL (Medium)**

| Page | Payload Size |
|------|-------------|
| `/` (homepage) | 249 KB |
| `/en` | 249 KB |
| `/precios` | 117 KB |
| `/blog` | 94 KB |
| `/sobre` | 49 KB |
| `/en/about` | 51 KB |

The homepage payload dropped only marginally from 256 KB to 249 KB (~3% reduction). This is still excessive for a marketing landing page. The homepage contains approximately 243 KB of inlined Next.js hydration data. Target should be under 150 KB.

---

## New Items Verification

### robots.txt UTM/fbclid/gclid blocking -- FIXED

**Status: PASS**

The robots.txt now correctly blocks tracking parameters:

```
Disallow: /*?utm_*
Disallow: /*?ref=*
Disallow: /*?fbclid=*
Disallow: /*?gclid=*
```

Additionally, AI crawler access is properly configured with explicit `Allow: /` rules for GPTBot, Google-Extended, ChatGPT-User, ClaudeBot, PerplexityBot, and Bytespider.

### Blog page ISR caching (revalidate=3600) -- NOT WORKING

**Status: FAIL (High)**

The blog page returns aggressive no-cache headers:

```
cache-control: private, no-cache, no-store, max-age=0, must-revalidate
x-vercel-cache: MISS
```

This indicates the blog page is rendering dynamically on every request with no ISR/caching at all. If `revalidate: 3600` was configured, the page should show `x-vercel-cache: HIT` or `STALE` on subsequent requests, not `MISS` with `private, no-cache`. This is likely caused by a dynamic function in the blog page component (e.g., `cookies()`, `headers()`, or a `searchParams` access) that forces dynamic rendering regardless of the revalidate setting.

**Fix:** Audit the blog page and its data-fetching functions for dynamic opt-outs. Ensure no `cookies()`, `headers()`, or `searchParams` usage at the page level. Use `export const dynamic = 'force-static'` or ensure all data fetching uses `fetch()` with `next: { revalidate: 3600 }`.

### Pricing page revalidation changed to 3600s -- LIKELY WORKING

**Status: PASS (Inferred)**

The pricing page shows:

```
x-vercel-cache: PRERENDER (on first load) / HIT (on cache hit)
cache-control: public, max-age=0, must-revalidate
```

The `PRERENDER` and `HIT` status with an `age` of 51 seconds indicates ISR is active. The exact revalidation interval cannot be confirmed from headers alone, but the behavior is consistent with ISR (not dynamic rendering), suggesting the change from 60s to 3600s was deployed.

### /sobre and /en/about pages -- ACCESSIBLE

**Status: PASS (with caveat)**

Both pages return HTTP 200 with proper content:

| Page | Title | Status | Size |
|------|-------|--------|------|
| `/sobre` | "Sobre Nosotros - Opinafy" | 200 OK | 49 KB |
| `/en/about` | "About Us - Opinafy \| Opinafy" | 200 OK | 51 KB |

**Caveat:** Neither `/sobre` nor `/en/about` appears in the sitemap.xml. They should be added with proper hreflang cross-references.

**Minor issue:** The `/en/about` title contains a redundant "Opinafy" -- it reads "About Us - Opinafy | Opinafy". Should be "About Us | Opinafy".

### llms.txt file -- EXISTS

**Status: PASS**

The `/llms.txt` file exists and returns well-structured content following the emerging standard. It includes:

- Product name and description
- Key features summary
- Pricing tiers with exact amounts
- Links to all major pages in both languages

---

## Full Audit by Category

### 1. Crawlability (Score: 9/10)

| Check | Result |
|-------|--------|
| robots.txt | PASS -- well structured, blocks private routes and tracking params |
| sitemap.xml | PASS -- present, includes hreflang annotations, lastmod dates |
| AI crawler access | PASS -- explicitly allows major AI crawlers |
| Missing pages in sitemap | FAIL -- /sobre and /en/about not in sitemap |

### 2. Indexability (Score: 8/10)

| Check | Result |
|-------|--------|
| Canonical tags | PASS -- self-referencing canonicals on all pages |
| Hreflang tags | PASS -- es, en, x-default present on all bilingual pages |
| Hreflang in sitemap | PASS -- consistent with HTML link tags |
| Duplicate content risk | LOW -- canonicals and hreflang properly configured |

### 3. Security (Score: 10/10)

| Check | Result |
|-------|--------|
| HTTPS | PASS -- all pages served over HTTPS |
| HSTS | PASS -- max-age=63072000 (2 years) |
| Content-Security-Policy | PASS -- comprehensive CSP with specific source allowlists |
| X-Content-Type-Options | PASS -- nosniff |
| X-Frame-Options | PASS -- DENY |
| Referrer-Policy | PASS -- strict-origin-when-cross-origin |
| Permissions-Policy | PASS -- camera, microphone, geolocation denied |

Security headers are excellent. Full marks.

### 4. URL Structure (Score: 9/10)

| Check | Result |
|-------|--------|
| Clean URLs | PASS -- descriptive, no query parameters for content |
| Locale structure | PASS -- /en/ prefix for English, root for Spanish |
| Trailing slashes | PASS -- consistent (no trailing slash) |
| Redirect chains | NOT TESTED (would require browser-level redirect tracing) |

### 5. Mobile (Score: 9/10)

| Check | Result |
|-------|--------|
| Viewport meta | PASS -- `width=device-width, initial-scale=1` |
| Responsive images | PASS -- next/image srcSet with multiple breakpoints |
| Font preloading | PASS -- woff2 font preloaded |
| Touch targets | CANNOT VERIFY from HTML alone (requires rendered DOM) |

### 6. Core Web Vitals (Score: 7/10)

| Metric | Risk Assessment |
|--------|----------------|
| LCP | MEDIUM RISK -- 249 KB HTML payload will slow initial paint. Font and logo preloaded (good), but heavy inlined JS data may block rendering. |
| INP | LOW RISK -- Next.js with async script loading. No heavy inline JS handlers observed. |
| CLS | LOW RISK -- next/image with explicit sizing. CSS preloaded. Font preloaded reducing FOIT. |

**Key concern:** The 249 KB homepage payload is the primary LCP risk. The `__NEXT_DATA__` or RSC payload embedded in the HTML is the main contributor.

### 7. Structured Data (Score: 9/10)

| Schema Type | Present | Valid |
|-------------|---------|-------|
| Organization | Yes | Correct -- logo, contact, sameAs |
| WebSite | Yes | Correct -- inLanguage matches locale, SearchAction present |
| SoftwareApplication | Yes | Correct -- 4 pricing offers with EUR currency |
| BreadcrumbList | Yes | Correct |
| FAQPage | Yes | Correct -- 8 Q&A pairs, localized per language |

The SoftwareApplication offer descriptions remain in Spanish even on the /en page. This is a minor inconsistency but not a schema validation error.

### 8. JavaScript Rendering (Score: 8/10)

| Check | Result |
|-------|--------|
| Server-side rendering | PASS -- full HTML content in initial response |
| Next.js App Router | PASS -- RSC payloads with streaming support |
| Script loading | PASS -- async scripts, no render-blocking JS |
| CSS delivery | PASS -- preloaded stylesheets with data-precedence |
| Blog page rendering | FAIL -- dynamic rendering instead of ISR |

---

## Scoring Breakdown

| Category | Weight | Score | Weighted |
|----------|--------|-------|----------|
| Crawlability | 15% | 9/10 | 13.5 |
| Indexability | 15% | 8/10 | 12.0 |
| Security | 10% | 10/10 | 10.0 |
| URL Structure | 10% | 9/10 | 9.0 |
| Mobile | 10% | 9/10 | 9.0 |
| Core Web Vitals | 15% | 7/10 | 10.5 |
| Structured Data | 10% | 9/10 | 9.0 |
| JS Rendering | 15% | 8/10 | 12.0 |
| **Total** | **100%** | | **85.0** |

---

## Comparison: Previous 82 vs Current 85

The score improved by 3 points, driven by:

**Improvements (+):**
- x-default hreflang added on all pages (+1.5)
- WebSite schema inLanguage corrected for /en (+1)
- robots.txt now blocks tracking parameters (+0.5)
- llms.txt deployed for AI crawler discoverability (+0.5)
- New /sobre and /en/about pages expand content coverage (+0.5)
- AI crawler rules explicitly configured (+0.5)

**Regressions or unfixed (-):**
- `<html lang="es">` still on English pages (persistent critical issue, caps Indexability score)
- Blog page lost ISR caching (new regression, -1)
- Homepage payload barely reduced (249 KB vs 256 KB, minimal progress)
- /sobre and /en/about missing from sitemap (-0.5)

**Net change: +3 points (82 --> 85)**

---

## Prioritized Action Items

### Critical

1. **Fix `<html lang>` attribute on /en pages** -- The root `<html>` element on all English pages still renders `lang="es"`. This is the single most impactful i18n SEO bug. In the Next.js App Router, the locale layout must dynamically set the lang attribute based on the route segment. This was the #1 issue in the prior audit and remains unresolved.

### High

2. **Fix blog page ISR caching** -- The blog page returns `private, no-cache, no-store` headers and `x-vercel-cache: MISS` on every request. Investigate whether `cookies()`, `headers()`, or `searchParams` access in the blog page or its layout is forcing dynamic rendering. Remove or isolate any dynamic function calls so ISR with `revalidate: 3600` can take effect.

3. **Reduce homepage HTML payload** -- The 249 KB payload is still far above the recommended 150 KB target. Strategies:
   - Move non-critical data to client-side fetching
   - Lazy-load below-the-fold sections
   - Audit the RSC/hydration payload for unnecessary data
   - Consider streaming with `loading.tsx` boundaries

### Medium

4. **Add /sobre and /en/about to sitemap.xml** -- Both pages return 200 OK with proper content but are absent from the sitemap. Add them with hreflang cross-references linking `/sobre` <-> `/en/about`.

5. **Fix /en/about page title** -- Currently reads "About Us - Opinafy | Opinafy" with a redundant brand name. Should be "About Us | Opinafy".

6. **Translate SoftwareApplication schema offers for /en** -- The offer descriptions within the SoftwareApplication schema on the /en page are still in Spanish. While not a validation error, Google may use these descriptions in rich results.

### Low

7. **Consider adding `<html lang="es">` override on /sobre** -- While /sobre is a Spanish page so `lang="es"` is technically correct, it would be cleaner to have locale-aware layout logic that explicitly sets the correct lang for all routes.

---

## Technical Details

**Fetch date:** 2026-03-24T19:57 UTC
**Server:** Vercel (CDG1/IAD1 edges)
**Framework:** Next.js App Router with RSC
**Protocol:** HTTP/2 over TLS

**Headers verified on all pages:**
- Strict-Transport-Security: max-age=63072000
- Content-Security-Policy: comprehensive
- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy: camera=(), microphone=(), geolocation=()
