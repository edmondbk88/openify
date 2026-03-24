# Opinafy.com — Full SEO Audit Report

**Date:** 2026-03-24
**Site:** https://opinafy.com
**Business Type:** SaaS (Spanish testimonial management platform)
**Stack:** Next.js 14, Supabase, Stripe, Vercel
**Total Pages:** ~1,414 URLs in sitemap
**Audited by:** 6 parallel specialist agents (Technical, Content, Schema, Sitemap, Performance, Visual)

---

## SEO Health Score: 68/100

| Category | Weight | Score | Weighted |
|----------|--------|-------|----------|
| Technical SEO | 25% | 82/100 | 20.5 |
| Content Quality | 25% | 62/100 | 15.5 |
| On-Page SEO | 20% | 75/100 | 15.0 |
| Schema / Structured Data | 10% | 60/100 | 6.0 |
| Performance (CWV) | 10% | 80/100 | 8.0 |
| Images | 5% | 55/100 | 2.8 |
| AI Search Readiness | 5% | 72/100 | 3.6 |
| **TOTAL** | **100%** | | **71.4** |

**Adjusted Score: 68/100** (penalty applied for critical i18n issues affecting ~30% of pages)

---

## Executive Summary

Opinafy has an impressive technical foundation for a site launched less than a week ago. Vercel delivers excellent TTFB (~120ms), SSR ensures all content is crawlable, and the structured data implementation covers more schema types than most SaaS competitors. However, several critical issues drag the score down significantly:

### Top 5 Critical Issues

1. **190 blog articles with future `lastmod` dates (up to 2027)** — Google may distrust ALL lastmod values sitewide
2. **English pages render `<html lang="es">` server-side** — Googlebot may index EN content as Spanish
3. **No real social proof for Opinafy itself** — A testimonial platform with zero real testimonials is a major credibility gap
4. **English blog/schema uses Spanish language, URLs, and descriptions** — Confuses Google's language classification
5. **420 city+industry programmatic pages risk doorway page penalty** — Template-based pages with only city/industry name swapped

### Top 5 Quick Wins (< 30 min each)

1. **Fix `lang="en"` on EN layout** — Change `src/app/(en)/en/layout.tsx` to render `<html lang="en">`
2. **Filter future dates from sitemap** — Add `blogArticles.filter(a => new Date(a.date) <= now)` in `sitemap.ts`
3. **Enable WebP/AVIF images** — Add `images: { formats: ['image/avif', 'image/webp'] }` to `next.config.mjs`
4. **Remove unnecessary Google Fonts preconnect** — Delete 2 `<link rel="preconnect">` tags from `layout.tsx`
5. **Add `revalidate = 3600` to blog page** — Currently renders dynamically on every request

---

## 1. Technical SEO — 82/100

**Source:** AUDIT-TECHNICAL.md

### What's Working Well
- SSR on all pages — content visible without JS
- Correct canonical tags on all sampled pages
- Security headers are industry-leading (HSTS 2 years, CSP, X-Frame-Options)
- Proper redirects: HTTP→HTTPS (308), www→non-www (308)
- 1,414 URLs in sitemap with bilingual hreflang support
- AI bot access explicitly allowed (GPTBot, ClaudeBot, PerplexityBot)
- Clean URL structure in both languages

### Critical Issues

| # | Issue | Impact | Fix |
|---|-------|--------|-----|
| T1 | EN pages render `<html lang="es">` server-side | Google may index EN content as Spanish | Fix in `src/app/(en)/en/layout.tsx` |
| T2 | EN homepage missing `x-default` hreflang in HTML head | Wrong language shown to users in unsupported locales | Add to EN layout metadata |

### High Issues

| # | Issue | Impact | Fix |
|---|-------|--------|-----|
| T3 | Homepage HTML payload 256KB (uncompressed) | Slow parse time on mobile | Reduce RSC inline payloads |
| T4 | EN WebSite schema declares `inLanguage: "es"` | Conflicting language signals | Add `lang` param to schema functions |

### Medium Issues

| # | Issue | Impact |
|---|-------|--------|
| T5 | No UTM parameter blocking in robots.txt | Potential duplicate content from campaigns |
| T6 | Blog page renders dynamically (no cache) | 257ms TTFB vs 119ms for cached pages |

---

## 2. Content Quality — 62/100

**Source:** AUDIT-CONTENT.md

### E-E-A-T Breakdown

| Signal | Score | Severity |
|--------|-------|----------|
| Experience | 35/100 | CRITICAL |
| Expertise | 55/100 | HIGH |
| Authoritativeness | 30/100 | CRITICAL |
| Trustworthiness | 65/100 | MEDIUM |

### Critical Issues

| # | Issue | Impact |
|---|-------|--------|
| C1 | No real customer testimonials about Opinafy itself | Destroys credibility for a testimonial platform |
| C2 | No About/Team page with real founder identity | Visitors can't verify who built the product |
| C3 | Fabricated case studies at `/casos-de-exito` | Google QRG explicitly penalizes fake testimonials |
| C4 | Missing company NIF/CIF per Spanish LSSI law | Legal requirement for Spanish businesses |
| C5 | No product screenshots in any marketing page | Can't demonstrate the product is real |

### High Issues

| # | Issue | Impact |
|---|-------|--------|
| C6 | All 162 blog articles by anonymous "Equipo Opinafy" | No author identity = low E-E-A-T for YMYL content |
| C7 | Statistics in blog posts lack source hyperlinks | Claims without verification reduce trust |
| C8 | City programmatic pages are thin content (boilerplate + city swap) | Risk of doorway page penalty |
| C9 | 162 blog articles published in 2-3 days | Clear AI-generated content signal |
| C10 | No internal linking within blog article bodies | Missed topical clustering opportunity |

---

## 3. Schema / Structured Data — 60/100

**Source:** AUDIT-SCHEMA.md

### What Exists (Good)
- Organization, WebSite, SoftwareApplication, FAQPage, BreadcrumbList on homepage
- Article schema on blog posts
- CollectionPage schema on templates/industry pages
- ItemList schema on gallery pages

### Critical Issues

| # | Issue | Impact |
|---|-------|--------|
| S1 | EN blog `articleSchema()` hardcodes `/blog/` instead of `/en/blog/` | Wrong URL in structured data |
| S2 | EN blog articles have `inLanguage: "es"` | Tells Google English content is Spanish |
| S3 | EN homepage reuses Spanish Organization/WebSite schemas | All descriptions in Spanish on EN page |
| S4 | SoftwareApplication missing `aggregateRating` or `review` | Zero chance of rich results in SERPs |

### High Issues

| # | Issue | Impact |
|---|-------|--------|
| S5 | Missing Mini Sitio plan (€5) in SoftwareApplication offers | Incomplete pricing data |
| S6 | No `SearchAction` on WebSite schema | Can't get sitelinks search box |
| S7 | No `@id` properties on any entities | Potential duplicate entity conflicts |

---

## 4. Sitemap — Grade C+

**Source:** AUDIT-SITEMAP.md

### What's Working
- Valid XML, correct namespaces
- All sampled URLs return 200
- 1,414 URLs with good bilingual coverage
- Properly referenced in robots.txt

### Critical Issues

| # | Issue | Impact |
|---|-------|--------|
| SM1 | 190 blog articles with future lastmod dates (up to 2027) | Google distrusts all lastmod values |
| SM2 | 1,000 URLs share identical lastmod `2026-03-18` | Signals unreliable date data |

### High Issues

| # | Issue | Impact |
|---|-------|--------|
| SM3 | 422 URLs (30%) missing hreflang annotations | Google can't determine language targeting |
| SM4 | EN blog/industry paths use Spanish slugs | Hurts English keyword targeting |
| SM5 | 420 city+industry pages exceed doorway page safe threshold | Algorithmic penalty risk |

---

## 5. Performance — 80/100

**Source:** AUDIT-PERFORMANCE.md

### Per-Page Summary

| Page | TTFB | Est. LCP | Est. CLS | Status |
|------|------|----------|----------|--------|
| Homepage ES | 119ms | 1.2-1.8s | < 0.05 | Good |
| Homepage EN | 166ms | 1.3-1.9s | < 0.05 | Good |
| Plantillas | 118ms | 1.5-2.0s | < 0.05 | Good |
| Precios | 114ms | 1.5-2.0s | < 0.05 | Good |
| Blog | 257ms | 2.0-2.8s | < 0.05 | Needs attention |

### Issues

| # | Severity | Issue | Fix |
|---|----------|-------|-----|
| P1 | HIGH | Images served as PNG/JPEG, not WebP/AVIF | Add `images.formats` to next.config.mjs |
| P2 | HIGH | Unnecessary preconnect to fonts.googleapis.com | Remove 2 link tags from layout.tsx |
| P3 | HIGH | Blog page dynamic (no ISR cache) | Add `revalidate = 3600` |
| P4 | MEDIUM | Pricing page revalidates every 60s (excessive) | Change to 3600 |
| P5 | MEDIUM | Plantillas serializes all 100 templates in HTML | Only serialize initial 12 |
| P6 | LOW | Auth layout chunk preloaded on marketing pages | Minor waste |

---

## 6. Visual & UX — Grade B+

**Source:** AUDIT-VISUAL.md

### What's Working
- Clean, professional design with consistent color system
- Hero CTA visible above fold on all viewports
- Proper responsive grid collapse
- Sticky header with hamburger menu on mobile

### Issues

| # | Severity | Issue |
|---|----------|-------|
| V1 | HIGH | Cookie banner blocks mobile CTAs — users can't reach "Empezar Gratis" |
| V2 | HIGH | Cookie banner is in Spanish on `/en` pages |
| V3 | MEDIUM | `text-gray-400` fails WCAG AA contrast (3.0:1 vs required 4.5:1) |
| V4 | MEDIUM | Pricing page on mobile: no pricing card visible above fold |
| V5 | MEDIUM | Tablet navbar (768px): "AyudaES | EN" runs together |
| V6 | LOW | Hamburger touch target ~40px (recommended 48px) |
| V7 | LOW | FAQ questions missing opening inverted question mark |

---

## 7. AI Search Readiness — 72/100

### What's Working
- AI bots explicitly allowed in robots.txt (GPTBot, ClaudeBot, PerplexityBot, etc.)
- Comprehensive JSON-LD structured data on every page type
- Clean URL structure with descriptive slugs
- FAQ content answers common questions directly
- 162 blog articles provide substantial topical coverage

### Needs Improvement
- No TL;DR summaries at top of blog articles (AI engines prefer extractable summaries)
- Blog statistics lack hyperlinked sources (reduces citability)
- No `llms.txt` file at root
- No author pages with verifiable credentials
- Fabricated testimonials reduce trust signals that AI uses for citation ranking

---

## Priority Action Plan

### CRITICAL (Fix Immediately) — 10 issues

1. **SM1** — Filter future lastmod dates from sitemap
2. **T1** — Fix `lang="en"` on EN layout
3. **S1-S3** — Fix English schema language issues (all in `schema.ts`)
4. **C1** — Add real testimonials about Opinafy
5. **C2** — Create About/Team page
6. **C3** — Remove or mark fabricated case studies
7. **C4** — Add company legal details (LSSI compliance)
8. **SM2** — Fix identical lastmod dates
9. **T2** — Add x-default hreflang to EN pages
10. **S4** — Add aggregateRating to SoftwareApplication

### HIGH (Fix Within 1 Week) — 12 issues

1. **V1** — Fix cookie banner blocking mobile CTAs
2. **V2** — Translate cookie banner for EN pages
3. **P1** — Enable WebP/AVIF images
4. **P2** — Remove unnecessary preconnect hints
5. **P3** — Add caching to blog page
6. **C6** — Add real author names to blog posts
7. **C7** — Add source hyperlinks to statistics
8. **SM4** — EN slugs in Spanish (architectural — may require migration)
9. **SM5** — Evaluate doorway page risk for city pages
10. **S5-S7** — Schema improvements (Mini Sitio plan, SearchAction, @id)
11. **T3** — Reduce homepage HTML payload
12. **C10** — Add internal links within blog article bodies

### MEDIUM (Fix Within 1 Month) — 8 issues

1. **V3** — Fix contrast ratio on gray-400 text
2. **V4** — Reduce pricing page mobile top padding
3. **V5** — Fix tablet navbar spacing
4. **P4** — Adjust pricing page revalidation
5. **P5** — Lazy-load template data on plantillas page
6. **C5** — Add product screenshots to marketing pages
7. **C8** — Enrich city programmatic pages with unique content
8. **C9** — Stagger blog publication dates

### LOW (Backlog) — 6 issues

1. **V6** — Increase hamburger touch target
2. **V7** — Add opening inverted question mark to FAQ questions
3. **P6** — Remove auth chunk preload on marketing pages
4. **T5** — Block UTM parameters in robots.txt
5. Add `llms.txt` file
6. Add TL;DR summaries to blog posts

---

## Detailed Audit Reports

- [AUDIT-TECHNICAL.md](./AUDIT-TECHNICAL.md) — Crawlability, indexability, security, headers
- [AUDIT-CONTENT.md](./AUDIT-CONTENT.md) — E-E-A-T, readability, thin content
- [AUDIT-SCHEMA.md](./AUDIT-SCHEMA.md) — Structured data validation, missing opportunities
- [AUDIT-SITEMAP.md](./AUDIT-SITEMAP.md) — Sitemap structure, hreflang, URL analysis
- [AUDIT-PERFORMANCE.md](./AUDIT-PERFORMANCE.md) — Core Web Vitals, resource optimization
- [AUDIT-VISUAL.md](./AUDIT-VISUAL.md) — Screenshots, mobile UX, above-fold analysis
