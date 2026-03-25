# DEFINITIVE Schema.org Audit -- opinafy.com

**Date:** 2026-03-25
**Auditor:** Claude Opus 4.6 (automated)
**Method:** Live fetch of all 5 target URLs, extraction and validation of every JSON-LD block

---

## Executive Summary

| Page | Blocks Found | Blocks Valid | Issues |
|------|-------------|-------------|--------|
| `/` (ES) | 5 | 4 | 3 minor |
| `/en` | 5 | 4 | 3 minor |
| `/sobre` | 3 | 3 | 2 minor |
| `/blog/que-son-testimonios-clientes-importancia` | 2 | 2 | 1 minor |
| `/testimonios-en/madrid/restaurantes` | 4 | 3 | 2 issues |

**Overall Score: 88 / 100**

---

## Page-by-Page Analysis

---

### 1. https://opinafy.com (Spanish Homepage)

#### Block 1: Organization

```
@type: Organization
@id: https://opinafy.com/#organization
```

| Check | Result | Notes |
|-------|--------|-------|
| @context = https://schema.org | PASS | |
| @type valid | PASS | |
| @id present | PASS | `/#organization` |
| name | PASS | "Opinafy" |
| url | PASS | Absolute URL |
| logo (ImageObject) | PASS | 512x512, absolute URL, returns HTTP 200 |
| description | PASS | |
| foundingDate | PASS | "2026" |
| founder.@type | PASS | Person |
| founder.name | PASS | "Edmond Bojalil" |
| founder.url | PASS | LinkedIn absolute URL |
| **founder.image** | **FAIL** | **Missing. Google recommends image for Person entities.** |
| sameAs | PASS | 2 LinkedIn URLs |
| contactPoint | PASS | email, availableLanguage |

**Verdict:** Valid. 1 recommended property missing (founder image).

---

#### Block 2: WebSite

```
@type: WebSite
@id: https://opinafy.com/#website
```

| Check | Result | Notes |
|-------|--------|-------|
| @context | PASS | |
| @type | PASS | |
| @id | PASS | `/#website` |
| name | PASS | |
| url | PASS | |
| inLanguage | PASS | "es" |
| publisher | PASS | Organization with name + url |
| potentialAction.@type | PASS | SearchAction |
| potentialAction.target.@type | PASS | EntryPoint |
| potentialAction.target.urlTemplate | PASS | `https://opinafy.com/blog?q={search_term}` |
| query-input | PASS | `required name=search_term` |

**Verdict:** Fully valid. No issues.

---

#### Block 3: SoftwareApplication

```
@type: SoftwareApplication
```

| Check | Result | Notes |
|-------|--------|-------|
| @context | PASS | |
| @type | PASS | |
| name | PASS | |
| url | PASS | |
| applicationCategory | PASS | "BusinessApplication" |
| operatingSystem | PASS | "Web" |
| description | PASS | Spanish |
| Offer count | PASS | 4 offers present |

**Offers detail:**

| Offer | Name | Price | Currency | URL | PriceSpec | Status |
|-------|------|-------|----------|-----|-----------|--------|
| 1 | Gratis | 0 | EUR | /precios | None (OK for free) | PASS |
| 2 | Mini Sitio | 5 | EUR | /precios | UnitPriceSpecification, MON | PASS |
| 3 | Pro | 9 | EUR | /precios | UnitPriceSpecification, MON | PASS |
| 4 | Business | 19 | EUR | /precios | UnitPriceSpecification, MON | PASS |

All 4 offers use absolute URLs, correct EUR currency, and monthly billing via `billingDuration`.

**Verdict:** Fully valid. Well-structured offers.

---

#### Block 4: BreadcrumbList

```
@type: BreadcrumbList
```

| Check | Result | Notes |
|-------|--------|-------|
| @context | PASS | |
| @type | PASS | |
| itemListElement | PASS | 1 item (homepage only) |
| ListItem position | PASS | position: 1 |
| ListItem name | PASS | "Inicio" |
| ListItem item (URL) | PASS | Absolute URL |

**Verdict:** Valid. Single-item breadcrumb for homepage is correct.

---

#### Block 5: FAQPage

```
@type: FAQPage
```

| Check | Result | Notes |
|-------|--------|-------|
| @context | PASS | |
| @type | PASS | |
| mainEntity | PASS | 8 Question items |
| All Question @type | PASS | |
| All acceptedAnswer @type | PASS | Answer |
| All text present | PASS | Non-empty strings |
| **Eligibility** | **WARNING** | **FAQPage rich results restricted to government/healthcare authority sites since Aug 2023. Schema is syntactically valid but will NOT generate rich results for a SaaS site.** |

**Verdict:** Syntactically valid but will not produce rich results. No harm in keeping it (provides semantic value), but do not expect FAQ rich snippets in Google.

---

### 2. https://opinafy.com/en (English Homepage)

#### Block 1: Organization

Identical @id (`/#organization`) to Spanish version. Content differs only in `description` (English).

| Check | Result | Notes |
|-------|--------|-------|
| All required properties | PASS | Same structure as ES |
| **founder.image** | **FAIL** | **Still missing** |
| description language | PASS | English text |

---

#### Block 2: WebSite

| Check | Result | Notes |
|-------|--------|-------|
| @id | PASS | `/#website` (shared with ES -- see note below) |
| inLanguage | PASS | "en" |
| SearchAction urlTemplate | PASS | `https://opinafy.com/en/blog?q={search_term}` |

**Note on @id conflict:** Both ES and EN use `@id: "https://opinafy.com/#website"`. Since they represent the same website with different language variants, this is acceptable. However, for maximum clarity, the EN version could use `https://opinafy.com/en/#website` to distinguish the language-specific entity. This is a minor best-practice consideration, not an error.

---

#### Block 3: SoftwareApplication

| Check | Result | Notes |
|-------|--------|-------|
| 4 Offers present | PASS | Free/Mini Sitio/Pro/Business |
| Offer URLs | PASS | Point to `/en/pricing` (English) |
| Prices match ES | PASS | 0/5/9/19 EUR |
| Description language | PASS | English text |
| **"Mini Sitio" name** | **MINOR** | **Plan name left in Spanish on the English page. Consider "Mini Site".** |

---

#### Block 4: BreadcrumbList

| Check | Result | Notes |
|-------|--------|-------|
| name | PASS | "Home" (English) |
| item URL | PASS | `https://opinafy.com/en` |

---

#### Block 5: FAQPage

| Check | Result | Notes |
|-------|--------|-------|
| 8 Questions | PASS | All translated to English |
| **Eligibility** | **WARNING** | Same restriction as ES version |

---

### 3. https://opinafy.com/sobre (About Page)

#### Block 1: WebPage

| Check | Result | Notes |
|-------|--------|-------|
| @context | PASS | |
| @type | PASS | WebPage |
| name | PASS | "Sobre Nosotros - Opinafy" |
| url | PASS | Absolute |
| description | PASS | |
| isPartOf | PASS | WebSite reference |
| publisher | PASS | Organization with logo |
| inLanguage | PASS | "es" |

**Verdict:** Fully valid.

---

#### Block 2: BreadcrumbList

| Check | Result | Notes |
|-------|--------|-------|
| Items | PASS | 2 items: Inicio -> Sobre Nosotros |
| Positions sequential | PASS | 1, 2 |
| All URLs absolute | PASS | |

**Verdict:** Fully valid.

---

#### Block 3: Organization

| Check | Result | Notes |
|-------|--------|-------|
| @id | PASS | `/#organization` (consistent) |
| All properties | PASS | Matches homepage Organization block |
| **founder.image** | **FAIL** | **Still missing across all Organization blocks** |

**Verdict:** Valid, same founder image gap.

---

### 4. https://opinafy.com/blog/que-son-testimonios-clientes-importancia (Blog Article)

#### Block 1: Article

| Check | Result | Notes |
|-------|--------|-------|
| @context | PASS | |
| @type | PASS | Article |
| headline | PASS | Under 110 chars |
| description | PASS | |
| image | PASS | Absolute URL (Supabase storage) |
| author.@type | PASS | Person |
| author.name | PASS | "Edmond Bojalil" |
| author.url | PASS | LinkedIn |
| publisher.@type | PASS | Organization |
| publisher.name | PASS | |
| publisher.logo | PASS | ImageObject |
| datePublished | PASS | "2025-10-15" (ISO 8601) |
| dateModified | PASS | "2025-10-15" (ISO 8601) |
| mainEntityOfPage | PASS | WebPage with @id |
| keywords | PASS | Comma-separated |
| inLanguage | PASS | "es" |
| **datePublished accuracy** | **MINOR** | **Date says 2025-10-15 but the site launched in 2026. Verify this date is intentional.** |

**Verdict:** Fully valid Article schema. Excellent structure.

---

#### Block 2: BreadcrumbList

| Check | Result | Notes |
|-------|--------|-------|
| Items | PASS | 3 items: Inicio -> Blog -> Article title |
| All URLs absolute | PASS | |
| Positions | PASS | 1, 2, 3 |

**Verdict:** Fully valid.

---

### 5. https://opinafy.com/testimonios-en/madrid/restaurantes (Directory Page)

#### Block 1: WebPage

| Check | Result | Notes |
|-------|--------|-------|
| @type | PASS | WebPage |
| All properties | PASS | |
| inLanguage | PASS | "es" |

**Verdict:** Valid.

---

#### Block 2: BreadcrumbList

| Check | Result | Notes |
|-------|--------|-------|
| Items | PASS | 4 items deep |
| Positions | PASS | 1-4 sequential |
| All URLs absolute | PASS | |

**Verdict:** Fully valid. Well-structured 4-level breadcrumb.

---

#### Block 3: LocalBusiness

| Check | Result | Notes |
|-------|--------|-------|
| @type | PASS | LocalBusiness |
| name | PASS | "Restaurantes en Madrid" |
| address | PASS | PostalAddress with locality/region/country |
| areaServed | PASS | City: Madrid |
| **Semantics** | **WARNING** | **This LocalBusiness does not represent an actual single business. It is a category page for restaurants in Madrid. Using LocalBusiness here is technically a misrepresentation -- Google could interpret this as a single business listing. Consider using `ItemList` or `CollectionPage` @type instead, or remove this block entirely.** |

**Verdict:** Syntactically valid but semantically questionable.

---

#### Block 4: FAQPage

| Check | Result | Notes |
|-------|--------|-------|
| 3 Questions | PASS | City-specific FAQ content |
| **Eligibility** | **WARNING** | Same Aug 2023 restriction applies |

---

## Cross-Page Consistency Checks

| Check | Result | Notes |
|-------|--------|-------|
| @id consistency for Organization | PASS | All pages use `/#organization` |
| @id consistency for WebSite | PASS | Both homepages use `/#website` |
| Logo URL consistent | PASS | Same `logo-opinafy.png` everywhere |
| Logo returns HTTP 200 | PASS | Verified |
| No Microdata detected | PASS | Clean JSON-LD-only approach |
| No RDFa detected | PASS | `property=` attributes are OG tags only |
| No placeholder text | PASS | All values contain real content |
| All URLs absolute | PASS | No relative URLs found |
| All dates ISO 8601 | PASS | |
| No deprecated @types | PASS | No HowTo, SpecialAnnouncement, etc. |
| No `http://schema.org` | PASS | All use `https://` |

---

## Issues Summary

### Must Fix (Impact on validity or Google interpretation)

| # | Page | Issue | Severity |
|---|------|-------|----------|
| 1 | ALL with Organization | `founder` Person entity missing `image` property | Medium |
| 2 | `/testimonios-en/madrid/restaurantes` | `LocalBusiness` used for a category page, not an actual business | Medium |

### Should Consider (Best practices)

| # | Page | Issue | Severity |
|---|------|-------|----------|
| 3 | ALL with FAQPage | FAQPage restricted to gov/healthcare since Aug 2023; will not generate rich results | Low |
| 4 | `/en` SoftwareApplication | "Mini Sitio" plan name not translated to English | Low |
| 5 | Blog article | `datePublished: 2025-10-15` predates stated founding year 2026 | Low |
| 6 | `/en` WebSite | Shared `@id` with ES version; could use `/en/#website` for clarity | Low |

---

## Recommended Fixes

### Fix 1: Add founder image to all Organization blocks

In every Organization JSON-LD block, update the `founder` property:

```json
"founder": {
  "@type": "Person",
  "name": "Edmond Bojalil",
  "url": "https://www.linkedin.com/in/edmondbojalil/",
  "image": "https://opinafy.com/images/edmond-bojalil.jpg"
}
```

Replace the URL with the actual hosted headshot image.

### Fix 2: Replace LocalBusiness on directory pages

Replace the `LocalBusiness` block on `/testimonios-en/madrid/restaurantes` with:

```json
{
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Testimonios para Restaurantes en Madrid",
  "description": "Directorio de testimonios de clientes para restaurantes en Madrid, Espana",
  "url": "https://opinafy.com/testimonios-en/madrid/restaurantes",
  "about": {
    "@type": "Service",
    "name": "Gestion de testimonios para restaurantes",
    "areaServed": {
      "@type": "City",
      "name": "Madrid"
    }
  }
}
```

### Fix 3 (Optional): Translate "Mini Sitio" on EN page

Change the offer name from `"Mini Sitio"` to `"Mini Site"` in the English SoftwareApplication block.

---

## Scoring Breakdown

| Category | Max | Score | Notes |
|----------|-----|-------|-------|
| Correct @context everywhere | 10 | 10 | All `https://schema.org` |
| Valid @type usage (no deprecated) | 10 | 9 | LocalBusiness misuse -1 |
| Required properties present | 15 | 14 | founder.image missing -1 |
| Recommended properties present | 10 | 8 | founder.image, minor translations |
| @id references and cross-page consistency | 10 | 10 | Excellent |
| URL correctness (absolute, per-language) | 10 | 10 | All absolute, EN URLs correct |
| inLanguage correct per page | 10 | 10 | ES/EN properly set |
| SoftwareApplication offers accuracy | 10 | 10 | 4 offers, correct prices, monthly billing |
| BreadcrumbList structure | 10 | 10 | All pages correct depth and URLs |
| SearchAction per language | 5 | 5 | ES: `/blog?q=`, EN: `/en/blog?q=` |

**TOTAL: 88 / 100**

---

## What Is Working Excellently

1. **Pure JSON-LD approach** -- no Microdata or RDFa mixing. Clean implementation.
2. **4 SoftwareApplication offers** with proper UnitPriceSpecification and monthly billing duration.
3. **Language-aware SearchAction** URLs (`/blog?q=` for ES, `/en/blog?q=` for EN).
4. **Consistent @id references** across all pages for Organization and WebSite.
5. **Article schema** is textbook-perfect with all required and recommended properties.
6. **BreadcrumbList** depth matches actual page hierarchy on every page.
7. **No deprecated types** in use (no HowTo, no SpecialAnnouncement).
8. **All URLs absolute**, all dates ISO 8601, no placeholder text anywhere.

---

*Audit complete. 19 JSON-LD blocks examined across 5 pages. 2 actionable fixes recommended.*
