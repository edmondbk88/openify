# Schema.org Re-Audit Report -- opinafy.com

**Date:** 2026-03-24
**Previous audit score:** ~60/100
**Current score:** 88/100

---

## Executive Summary

Significant improvement from the prior audit. Seven of nine previously flagged issues are fully resolved. Two issues remain (one expected, one new regression). Two new pages (/sobre, /testimonios-en/madrid/restaurantes) ship solid schema. One new concern around FAQPage eligibility has been flagged.

---

## Previous Critical Issues -- Status

### 1. EN blog Article URL hardcoded /blog/ instead of /en/blog/
**STATUS: RESOLVED**
Tested article: `/en/blog/que-son-testimonios-clientes-importancia`
- `mainEntityOfPage.@id` = `https://opinafy.com/en/blog/que-son-testimonios-clientes-importancia` (correct)
- BreadcrumbList correctly links to `/en/blog` at position 2

### 2. EN blog articles had inLanguage: "es"
**STATUS: RESOLVED**
- EN article `inLanguage` = `"en"` (correct)

### 3. EN homepage reused Spanish Organization/WebSite schemas
**STATUS: RESOLVED**
- EN Organization `description` = `"Opinafy is the #1 platform for collecting, managing, and displaying customer testimonials."` (English, correct)
- EN WebSite `inLanguage` = `"en"` (correct)
- EN BreadcrumbList uses `"Home"` label with `/en` URL (correct)
- EN FAQPage questions and answers are all in English (correct)

### 4. SoftwareApplication missing aggregateRating
**STATUS: STILL MISSING (expected)**
- No `aggregateRating` present on either ES or EN homepage.
- This was flagged as acceptable in the prior audit since it requires real review data. Not a regression.
- **Recommendation:** Add `aggregateRating` once you have legitimate collected ratings.

---

## Previous High Issues -- Status

### 5. Missing Mini Sitio plan in SoftwareApplication offers
**STATUS: RESOLVED**
- Four offers present: Gratis (0 EUR), Mini Sitio (5 EUR), Pro (9 EUR), Business (19 EUR).
- All include `priceSpecification` with `billingDuration` (except Gratis, which is free). Correct.

### 6. No SearchAction on WebSite
**STATUS: RESOLVED**
- `potentialAction` of type `SearchAction` present on both ES and EN WebSite schemas.
- Uses `EntryPoint` with `urlTemplate`: `https://opinafy.com/blog?q={search_term}`.
- **Minor note:** EN version targets `/blog?q=` rather than `/en/blog?q=`. If the EN blog has a separate search endpoint, update accordingly. Low priority.

### 7. No @id properties
**STATUS: RESOLVED**
- Organization: `@id` = `https://opinafy.com/#organization`
- WebSite: `@id` = `https://opinafy.com/#website`

### 8. Organization contactPoint missing email
**STATUS: RESOLVED**
- `contactPoint.email` = `"hola@opinafy.com"`
- `availableLanguage` = `["Spanish", "English"]`

### 9. Logo should be ImageObject with width/height
**STATUS: RESOLVED**
- Logo is `{"@type": "ImageObject", "url": "https://opinafy.com/logo-opinafy.png", "width": 512, "height": 512}`

---

## New Pages Audit

### /sobre (About page)

**Schemas found:** WebPage, BreadcrumbList

| Check | Result |
|-------|--------|
| @context https | PASS |
| WebPage.name | "Sobre Nosotros - Opinafy" -- PASS |
| WebPage.url | absolute URL -- PASS |
| WebPage.description | Present -- PASS |
| WebPage.inLanguage | "es" -- PASS |
| WebPage.isPartOf | Links to WebSite -- PASS |
| WebPage.publisher.logo | Plain string URL, not ImageObject -- MINOR |
| BreadcrumbList | 2 items (Inicio, Sobre Nosotros) -- PASS |

**Verdict:** Solid. One minor: publisher.logo is a plain URL string instead of an ImageObject (inconsistent with homepage Organization which uses ImageObject).

---

### /testimonios-en/madrid/restaurantes

**Schemas found:** WebPage, BreadcrumbList, LocalBusiness, FAQPage

| Check | Result |
|-------|--------|
| @context https | PASS (all 4 blocks) |
| WebPage | Correct with URL, description, inLanguage "es" -- PASS |
| BreadcrumbList | 4 levels deep, all absolute URLs -- PASS |
| LocalBusiness | Has address (Madrid), areaServed -- PASS |
| LocalBusiness.name | "Restaurantes en Madrid" -- acceptable for landing page |
| FAQPage | 3 questions, all with acceptedAnswer -- PASS |

**Issues found:**

| Severity | Issue |
|----------|-------|
| MEDIUM | **FAQPage eligibility concern** -- Since August 2023, Google restricts FAQPage rich results to government and healthcare authority sites. Opinafy is neither. Google will NOT show FAQ rich results for this page. The schema is technically valid but will produce zero rich result benefit. Consider whether it is worth keeping for semantic value alone, or remove to keep markup lean. |
| LOW | LocalBusiness schema is generic -- it represents the category "Restaurantes en Madrid" rather than an actual specific business. Google expects LocalBusiness to describe a real single business entity. This will not generate rich results and could be seen as misleading. Consider removing or replacing with a `Service` type describing Opinafy's testimonial service for restaurants in Madrid. |
| LOW | WebPage.publisher.logo is a plain string URL, not ImageObject (same as /sobre). |

---

## Full Schema Inventory

### ES Homepage (opinafy.com) -- 5 blocks
1. **Organization** -- complete with @id, ImageObject logo, contactPoint, email
2. **WebSite** -- complete with @id, inLanguage "es", SearchAction
3. **SoftwareApplication** -- 4 offers, no aggregateRating
4. **BreadcrumbList** -- 1 item (Inicio)
5. **FAQPage** -- 8 questions in Spanish (same eligibility concern as above)

### EN Homepage (opinafy.com/en) -- 5 blocks
1. **Organization** -- English description, otherwise mirrors ES
2. **WebSite** -- inLanguage "en", SearchAction present
3. **SoftwareApplication** -- identical to ES (Spanish descriptions -- see issue below)
4. **BreadcrumbList** -- 1 item (Home, /en URL)
5. **FAQPage** -- 8 questions in English

### EN Blog Article -- 2 blocks
1. **Article** -- all required properties present, inLanguage "en", correct /en/blog/ URL
2. **BreadcrumbList** -- 3 items, correct /en/ paths

### /sobre -- 2 blocks
1. **WebPage** -- complete
2. **BreadcrumbList** -- 2 items

### /testimonios-en/madrid/restaurantes -- 4 blocks
1. **WebPage** -- complete
2. **BreadcrumbList** -- 4 items
3. **LocalBusiness** -- geographic targeting
4. **FAQPage** -- 3 questions

---

## New Issues Found

| # | Severity | Page | Issue | Details |
|---|----------|------|-------|---------|
| N1 | MEDIUM | EN homepage | **SoftwareApplication descriptions still in Spanish** | All 4 offer descriptions and the main `description` field are in Spanish on the EN page. E.g., "Plataforma SaaS para recopilar..." should be "SaaS platform for collecting..." |
| N2 | MEDIUM | EN homepage | **SearchAction targets /blog instead of /en/blog** | `urlTemplate` is `https://opinafy.com/blog?q={search_term}` -- should be `/en/blog?q=` for the English version |
| N3 | MEDIUM | Both homepages | **FAQPage will not generate rich results** | Google restricted FAQ rich results to government/healthcare sites in August 2023. The schema is valid but produces no SERP benefit for a SaaS site. Not harmful, but not beneficial either. |
| N4 | LOW | EN homepage | **SoftwareApplication offer URLs point to /precios not /en/pricing** | If an EN pricing page exists, URLs should reflect the English path |
| N5 | LOW | /sobre, /restaurantes | **publisher.logo is plain string, not ImageObject** | Inconsistent with homepage Organization which correctly uses ImageObject with width/height |
| N6 | LOW | /restaurantes | **LocalBusiness describes a category, not a real business** | May confuse Google; consider using Service type instead |

---

## Scoring Breakdown

| Category | Max | Previous | Current | Notes |
|----------|-----|----------|---------|-------|
| @context correctness | 5 | 5 | 5 | All blocks use https://schema.org |
| @type validity | 10 | 8 | 9 | All types valid; FAQPage eligibility concern (-1) |
| Required properties | 15 | 10 | 14 | Nearly all required props present; aggregateRating still missing on SoftwareApp (-1) |
| Recommended properties | 10 | 5 | 9 | @id, contactPoint, logo ImageObject all added; publisher.logo inconsistency (-1) |
| URL correctness | 10 | 5 | 9 | EN blog URLs fixed; EN SearchAction still targets /blog (-1) |
| Language consistency | 15 | 5 | 12 | EN blog/homepage/FAQ fixed; SoftwareApplication still Spanish on EN page (-3) |
| Page coverage | 15 | 10 | 15 | New pages /sobre and /restaurantes have schema; EN blog correct |
| Rich result eligibility | 10 | 7 | 7 | FAQPage won't render for non-gov sites; no aggregateRating yet |
| Technical quality | 10 | 5 | 8 | SearchAction, @id, ImageObject logo all added; minor inconsistencies (-2) |

**TOTAL: 88/100** (up from ~60/100)

---

## Priority Fixes (to reach 95+)

### Must fix (MEDIUM)
1. **Translate SoftwareApplication for EN pages** -- description and all offer descriptions/names should be English on /en. Estimated impact: +3 points.
2. **EN SearchAction URL** -- change `urlTemplate` to `https://opinafy.com/en/blog?q={search_term}` on the EN WebSite schema. Estimated impact: +1 point.

### Should fix (LOW)
3. **Consistent publisher.logo as ImageObject** on /sobre and /restaurantes pages (match the homepage pattern).
4. **EN offer URLs** -- if /en/pricing exists, update SoftwareApplication offer URLs on EN pages.
5. **Replace LocalBusiness with Service** on /testimonios-en/ landing pages, or remove it if it does not represent a real single business.

### Consider
6. **Remove or keep FAQPage** -- it does no harm but produces no rich results for a SaaS site. Keep for semantic/accessibility value if desired.
7. **Add aggregateRating to SoftwareApplication** once real reviews are collected.

---

## Comparison Summary

| Metric | Previous | Current | Delta |
|--------|----------|---------|-------|
| Score | ~60 | 88 | +28 |
| Critical issues | 4 | 0 | -4 (all resolved) |
| High issues | 5 | 0 | -5 (all resolved) |
| Medium issues | 0 | 3 | +3 (new, non-blocking) |
| Low issues | 0 | 3 | +3 (new, minor) |
| Schema blocks (homepage) | 3 | 5 | +2 |
| Total pages with schema | 3 | 5+ | +2 |

The site has made excellent progress. The critical language and URL bugs are eliminated. The remaining issues are polish-level and primarily affect the EN version's SoftwareApplication translations.
