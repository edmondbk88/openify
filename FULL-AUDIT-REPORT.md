# Full SEO Audit Report — opinafy.com

**Date:** 2026-03-19
**Business Type:** SaaS — Customer Testimonial Platform
**Stack:** Next.js 14 (App Router), Vercel, Supabase, Stripe
**Target Market:** Spanish-speaking (lang="es")

---

## Executive Summary

### Overall SEO Health Score: 72/100

| Category | Weight | Score | Weighted |
|----------|--------|-------|----------|
| Technical SEO | 25% | 82 | 20.5 |
| Content Quality | 25% | 68 | 17.0 |
| On-Page SEO | 20% | 75 | 15.0 |
| Schema / Structured Data | 10% | 95 | 9.5 |
| Performance (CWV) | 10% | 80 | 8.0 |
| Images | 5% | 70 | 3.5 |
| AI Search Readiness | 5% | 72 | 3.6 |
| **TOTAL** | **100%** | | **77.1** |

### Top 5 Critical Issues
1. **Homepage has fabricated testimonials** — destroys trust for a testimonial platform
2. **"Cientos de negocios" claim is false** — site launched yesterday
3. **Missing LSSI-CE legal data** — no NIF/CIF, no physical address (legally required in Spain)
4. **www.opinafy.com not redirecting to non-www** — duplicate content risk
5. **No Content-Security-Policy header** — security gap

### Top 5 Quick Wins
1. Add www → non-www redirect via vercel.json
2. Add `noindex` to /login and /registro pages
3. Move GA script from `<head>` to `<body>` (perf improvement)
4. Add `priority` to navbar logo image
5. Add FAQPage schema to FAQ sections

---

## 1. Technical SEO — 82/100

### Crawlability (90/100)
- ✅ robots.txt present and properly configured
- ✅ Sitemap with 77 URLs, valid XML
- ✅ Dashboard routes blocked in robots.txt
- ⚠️ No AI crawler directives (GPTBot, ClaudeBot, etc.)
- ⚠️ /login and /registro not blocked

### Indexability (88/100)
- ✅ Canonical tags correct on all pages
- ✅ Meta robots: index, follow on public pages
- ❌ www.opinafy.com returns 200 instead of redirecting (duplicate content)
- ⚠️ Title tag repeats "Opinafy" twice
- ⚠️ /login and /registro are indexable (should be noindex)

### Security Headers (85/100)
- ✅ HTTPS enforced (308 redirect)
- ✅ HSTS: max-age=63072000
- ✅ X-Content-Type-Options: nosniff
- ✅ X-Frame-Options: DENY
- ✅ Referrer-Policy: strict-origin-when-cross-origin
- ✅ Permissions-Policy configured
- ❌ Content-Security-Policy: MISSING

### URL Structure (92/100)
- ✅ Clean Spanish-language slugs
- ✅ No trailing slashes (properly redirected)
- ✅ Max 2 levels deep
- ✅ All lowercase, hyphenated

### Mobile Optimization (88/100)
- ✅ Viewport meta tag correct
- ✅ Responsive Tailwind CSS throughout
- ⚠️ Navbar logo uses loading="lazy" (should be priority)

### Core Web Vitals (72/100)
- ⚠️ 155KB HTML payload on homepage (above 100KB threshold)
- ⚠️ GA script preloaded in `<head>` (wastes bandwidth)
- ✅ Font preloaded correctly (Inter woff2)
- ✅ CSS well-optimized (10.5KB Brotli)

### Structured Data (95/100)
- ✅ Organization schema with contact info
- ✅ WebSite schema with language
- ✅ SoftwareApplication with 3 price offers
- ✅ BreadcrumbList on all pages
- ✅ Article schema on blog posts
- ⚠️ Organization sameAs array is empty
- ⚠️ No FAQPage schema despite having FAQ content

### JavaScript Rendering (78/100)
- ✅ Full SSR with React Server Components
- ✅ Vercel edge caching active
- ⚠️ Only 2 images in SSR HTML for 155KB page
- ⚠️ 11+ JS chunks on homepage

---

## 2. Content Quality — 68/100

### Page Scores
| Page | Score | Key Issue |
|------|-------|-----------|
| Homepage | 58 | Fabricated testimonials, false claims |
| /precios | 72 | Slightly thin, duplicate FAQ |
| /blog listing | 64 | Thin hub, no filtering |
| Blog articles (50) | 65 | No named author, no source links |
| /plantillas | 71 | Good content, needs real examples |
| /contacto | 55 | Non-functional form, missing address |
| Legal pages | 62 | Missing NIF, address |

### E-E-A-T Assessment — 42.6/100
| Factor | Weight | Score |
|--------|--------|-------|
| Experience | 20% | 35 |
| Expertise | 25% | 55 |
| Authoritativeness | 25% | 25 |
| Trustworthiness | 30% | 52 |

### AI Content Risk: HIGH
- 50 articles published within days of launch
- Repetitive structural patterns across articles
- No first-person experience voice
- No original research or data

### Duplicate Content Issues
- FAQ component renders identically on homepage and /precios
- Pricing component renders on both pages
- All blog articles end with identical CTA copy

---

## 3. Performance — 80/100

### Estimated Core Web Vitals
| Page | LCP | INP | CLS |
|------|-----|-----|-----|
| / | ~1.0-1.5s (GOOD) | <100ms (GOOD) | <0.05 (GOOD) |
| /blog | ~2.0-2.5s (NEEDS WORK) | <100ms (GOOD) | <0.05 (GOOD) |
| /precios | ~0.8-1.2s (GOOD) | <100ms (GOOD) | <0.05 (GOOD) |
| /plantillas | ~2.0-3.0s (POOR) | ~150-300ms (AT RISK) | <0.05 (GOOD) |

### Key Performance Issues
- /plantillas: 353KB HTML, 2,242 DOM elements (too heavy)
- GA preloaded in `<head>` — wastes critical bandwidth
- Blog first image lacks `priority` prop
- No `preconnect` for Supabase storage domain

---

## 4. Schema / Structured Data — 95/100

### Implemented
- ✅ Organization (name, URL, logo, contact)
- ✅ WebSite (name, language, publisher)
- ✅ SoftwareApplication (3 offers with EUR pricing)
- ✅ BreadcrumbList (all pages)
- ✅ Article (blog posts with image, author, dates)
- ✅ CollectionPage (blog listing, templates listing)

### Missing
- ❌ FAQPage schema (content exists, schema doesn't)
- ❌ HowTo schema for "Cómo funciona" section
- ⚠️ Empty sameAs array in Organization

---

## 5. AI Search Readiness — 72/100

### Positive
- Clean HTML hierarchy with semantic headings
- Quotable statistics with specific numbers
- JSON-LD structured data on all major pages
- Spanish-language niche (less competition)
- Well-formatted bullet lists and bold terms

### Negative
- Statistics lack source attribution links
- No original research or proprietary data
- No dateModified updates on articles
- Article author is Organization, not Person

---

## 6. Images — 70/100

- ✅ 50 blog images from Unsplash stored in Supabase
- ✅ Next.js Image component with srcSet and dimensions
- ✅ Blog images have alt text matching article title
- ⚠️ Navbar logo uses lazy loading instead of priority
- ⚠️ No preconnect for Supabase image CDN
- ⚠️ No hero image on homepage (text-only hero)
