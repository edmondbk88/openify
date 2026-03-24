# Schema.org Structured Data Audit -- opinafy.com

**Date:** 2026-03-24
**Auditor:** Claude (Schema.org specialist)
**Source:** `/src/lib/schema.ts` + all page components
**Format:** JSON-LD (all blocks)

---

## Summary

| Category | Count |
|---|---|
| Schema blocks audited | 32+ across all pages |
| CRITICAL issues | 4 |
| HIGH severity issues | 6 |
| MEDIUM severity issues | 5 |
| LOW severity issues | 3 |
| Missing opportunities | 5 |

---

## 1. HOMEPAGE (/) -- 5 JSON-LD blocks

### 1.1 Organization

**File:** `src/lib/schema.ts` lines 11-30
**Verdict:** PASS with issues

| Check | Result | Notes |
|---|---|---|
| @context | PASS | `https://schema.org` |
| @type | PASS | `Organization` |
| Required: name | PASS | |
| Required: url | PASS | |
| logo format | **MEDIUM** | Should be `ImageObject` with `url`, `width`, `height` for Google compliance |
| foundingDate | **LOW** | `"2026"` -- ISO 8601 prefers `"2026-01-01"` or at least `"2026"` is acceptable as a year |
| contactPoint | **HIGH** | Missing `email` or `telephone` -- at least one contact method is recommended |
| sameAs | PASS | LinkedIn present |

**Fix -- logo as ImageObject:**

```json
"logo": {
  "@type": "ImageObject",
  "url": "https://opinafy.com/logo-opinafy.png",
  "width": 512,
  "height": 512
}
```

**Fix -- contactPoint with email:**

```json
"contactPoint": {
  "@type": "ContactPoint",
  "contactType": "customer support",
  "email": "hola@opinafy.com",
  "availableLanguage": ["Spanish", "English"]
}
```

---

### 1.2 WebSite

**File:** `src/lib/schema.ts` lines 35-48
**Verdict:** PASS with issues

| Check | Result | Notes |
|---|---|---|
| @context | PASS | |
| @type | PASS | |
| name, url | PASS | |
| potentialAction | **HIGH** | Missing `SearchAction` -- this is what enables the Google sitelinks search box |

**Fix -- add SearchAction (if site has search):**

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Opinafy",
  "url": "https://opinafy.com",
  "inLanguage": "es",
  "publisher": {
    "@type": "Organization",
    "name": "Opinafy",
    "url": "https://opinafy.com"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://opinafy.com/blog?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
}
```

If the site does not have a global search, omit `potentialAction` -- but the blog already has search at `/blog?q=`, so this is implementable.

---

### 1.3 SoftwareApplication

**File:** `src/lib/schema.ts` lines 53-112
**Verdict:** PASS with issues

| Check | Result | Notes |
|---|---|---|
| @context | PASS | |
| @type | PASS | Valid for SaaS products |
| name, url | PASS | |
| applicationCategory | PASS | `BusinessApplication` is a valid value |
| operatingSystem | PASS | `Web` |
| offers count | **MEDIUM** | Schema has 3 offers (Gratis, Pro, Business) but the pricing page shows 4 plans (Gratis, Mini Sitio, Pro, Business). The Mini Sitio plan at 5 EUR/month is missing from the schema |
| offers[].priceSpecification | PASS | Correctly uses `UnitPriceSpecification` with `billingDuration` |
| **CRITICAL**: Missing `aggregateRating` or `review` | **CRITICAL** | Google requires either `aggregateRating` or `review` for SoftwareApplication to be eligible for rich results. Without one of these, the schema will NOT generate rich snippets |

**Fix -- add Mini Sitio offer and aggregateRating:**

```json
{
  "@type": "Offer",
  "name": "Mini Sitio",
  "price": "5",
  "priceCurrency": "EUR",
  "url": "https://opinafy.com/precios",
  "priceSpecification": {
    "@type": "UnitPriceSpecification",
    "price": "5",
    "priceCurrency": "EUR",
    "billingDuration": {
      "@type": "QuantitativeValue",
      "value": 1,
      "unitCode": "MON"
    }
  },
  "description": "Ideal para profesionales y autónomos. 1 proyecto, 20 testimonios, mini sitio público."
}
```

**Fix -- add aggregateRating (once you have real reviews):**

```json
"aggregateRating": {
  "@type": "AggregateRating",
  "ratingValue": "4.9",
  "reviewCount": "47",
  "bestRating": "5",
  "worstRating": "1"
}
```

> Only add this once you have real, verifiable reviews. Do NOT fabricate ratings.

---

### 1.4 BreadcrumbList

**File:** `src/lib/schema.ts` lines 122-133
**Verdict:** PASS

| Check | Result | Notes |
|---|---|---|
| @context | PASS | |
| @type | PASS | |
| itemListElement | PASS | Correctly uses `ListItem` with `position`, `name`, `item` |

No issues found. The breadcrumb generator is well-implemented and reused across all pages.

---

### 1.5 FAQPage

**File:** `src/lib/schema.ts` lines 195-251
**Verdict:** CRITICAL ISSUE

| Check | Result | Notes |
|---|---|---|
| @context | PASS | |
| @type | **CRITICAL** | `FAQPage` rich results are restricted to government and healthcare authority sites since August 2023 |
| mainEntity structure | PASS | Correctly structured Question/Answer pairs |

**CRITICAL: FAQPage is restricted.** Since August 2023, Google only shows FAQ rich results for government and healthcare authority websites. Opinafy is a SaaS platform, so FAQPage markup will NOT generate rich results. It will not cause errors in Google Search Console, but it provides zero SEO benefit.

**Recommendation:** You have two options:

1. **Remove FAQPage schema entirely** from all pages (homepage, /precios, /en, /en/pricing). This reduces page weight and avoids any future policy changes that might flag it.
2. **Keep it for semantic purposes** -- it does not cause harm, but provides no rich result benefit. If you keep it, be aware that it adds ~2-4KB of JSON per page for no visible search result enhancement.

**Affected pages:**
- `/` (homepage) -- `faqSchema()` with 8 Q&As
- `/precios` -- `faqPageSchema()` with 5 Q&As
- `/en` -- inline FAQPage with English Q&As
- `/en/pricing` -- `faqPageSchema()` with English Q&As

---

## 2. PRICING PAGE (/precios) -- 3 JSON-LD blocks

### 2.1 WebPage

**Verdict:** PASS

Correctly uses `webPageSchema()` with name, url, description. All values are accurate.

### 2.2 BreadcrumbList

**Verdict:** PASS

Correct 2-level breadcrumb: Inicio > Precios.

### 2.3 FAQPage

**Verdict:** See Section 1.5 above (restricted).

### 2.4 Missing: SoftwareApplication offers

**Severity:** HIGH

The pricing page is the most logical place for the `SoftwareApplication` schema with all 4 offers. Currently, this schema only appears on the homepage. Adding it to `/precios` would reinforce pricing information for Google.

---

## 3. TEMPLATES PAGE (/plantillas) -- 2 JSON-LD blocks

### 3.1 CollectionPage

**Verdict:** PASS

Correct use of `CollectionPage` type for a gallery listing page.

### 3.2 BreadcrumbList

**Verdict:** PASS

---

## 4. BLOG INDEX (/blog) -- 3 JSON-LD blocks

### 4.1 CollectionPage

**Verdict:** PASS

### 4.2 BreadcrumbList

**Verdict:** PASS

### 4.3 ItemList

**Verdict:** PASS with note

The `ItemList` schema is correctly generated with paginated articles. Each `ListItem` has `position`, `url`, and `name`. Good implementation.

**Note:** Position values correctly account for pagination offset (`start + index + 1`).

---

## 5. BLOG ARTICLES (/blog/[slug]) -- 2 JSON-LD blocks

### 5.1 Article

**File:** `src/lib/schema.ts` lines 274-311
**Verdict:** PASS with issues

| Check | Result | Notes |
|---|---|---|
| @context | PASS | |
| @type | PASS | `Article` is valid and supported by Google |
| headline | PASS | |
| image | PASS | Falls back to og.png, uses article-specific image when available |
| author | **MEDIUM** | `"@type": "Person"` with name `"Equipo Opinafy"` -- "Equipo Opinafy" is not a person, it is a team. Should use `@type: Organization` instead |
| publisher | PASS | Correctly uses Organization with logo as ImageObject |
| datePublished | PASS | ISO 8601 format (e.g., `"2026-03-19"`) |
| dateModified | **LOW** | Always equals `datePublished`. This is technically valid but suboptimal -- Google prefers accurate modification dates |
| mainEntityOfPage | PASS | |
| inLanguage | PASS | `"es"` |

**Fix -- author should be Organization, not Person:**

```json
"author": {
  "@type": "Organization",
  "name": "Equipo Opinafy",
  "url": "https://opinafy.com"
}
```

### 5.2 BreadcrumbList

**Verdict:** PASS

3-level breadcrumb: Inicio > Blog > [Article Title].

---

## 6. ENGLISH HOMEPAGE (/en) -- 5 JSON-LD blocks

### 6.1 Organization, WebSite, SoftwareApplication

**Verdict:** Same issues as Spanish homepage (Sections 1.1-1.3).

**Additional CRITICAL issue:**

| Check | Result | Notes |
|---|---|---|
| Organization `inLanguage` | **CRITICAL** | The Organization and WebSite schemas are shared between ES and EN pages but hardcode `inLanguage: "es"`. On the English page, this tells Google the content language is Spanish, which is incorrect |
| WebSite `url` | **HIGH** | Points to `https://opinafy.com` (Spanish root), not `https://opinafy.com/en`. This creates a mismatch on the English page |
| SoftwareApplication descriptions | **HIGH** | All offer descriptions are in Spanish on the English page. The schema should match the page language |

**Fix:** Create English variants of these schema functions:

```typescript
export function organizationSchemaEn() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Opinafy',
    url: 'https://opinafy.com/en',
    logo: {
      '@type': 'ImageObject',
      url: 'https://opinafy.com/logo-opinafy.png',
      width: 512,
      height: 512,
    },
    description:
      'Opinafy is the #1 platform in Spanish for collecting, managing, and displaying customer testimonials.',
    foundingDate: '2026',
    sameAs: ['https://www.linkedin.com/company/opinafy'],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: 'hola@opinafy.com',
      availableLanguage: ['Spanish', 'English'],
    },
  }
}

export function webSiteSchemaEn() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Opinafy',
    url: 'https://opinafy.com/en',
    inLanguage: 'en',
    publisher: {
      '@type': 'Organization',
      name: 'Opinafy',
      url: 'https://opinafy.com',
    },
  }
}
```

### 6.2 FAQPage

**Verdict:** Restricted (same as Section 1.5). English FAQ is properly structured but will not generate rich results.

### 6.3 BreadcrumbList

**Verdict:** PASS. Correctly points to `https://opinafy.com/en`.

---

## 7. ENGLISH BLOG ARTICLES (/en/blog/[slug])

### 7.1 Article

**Verdict:** CRITICAL BUG

| Check | Result | Notes |
|---|---|---|
| mainEntityOfPage @id | **CRITICAL** | The `articleSchema()` function hardcodes `https://opinafy.com/blog/${opts.slug}` as the `mainEntityOfPage` URL. For English articles, this should be `https://opinafy.com/en/blog/${opts.slug}`. Currently all English articles point to the Spanish URL in their schema |
| inLanguage | **HIGH** | Hardcoded to `"es"` even on English articles |
| author name | **MEDIUM** | Uses `"Equipo Opinafy"` on English pages -- should be `"Opinafy Team"` |
| publisher name/logo | PASS | |

**Fix:** Add a `lang` parameter to `articleSchema()`:

```typescript
export function articleSchema(opts: {
  title: string
  description: string
  slug: string
  date: string
  keywords: string[]
  image?: string
  lang?: 'es' | 'en'
}) {
  const lang = opts.lang || 'es'
  const basePath = lang === 'en' ? '/en/blog' : '/blog'

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.title,
    description: opts.description,
    image: opts.image || 'https://opinafy.com/og.png',
    author: {
      '@type': 'Organization',
      name: lang === 'en' ? 'Opinafy Team' : 'Equipo Opinafy',
      url: 'https://opinafy.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Opinafy',
      url: 'https://opinafy.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://opinafy.com/logo-opinafy.png',
      },
    },
    datePublished: opts.date,
    dateModified: opts.date,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://opinafy.com${basePath}/${opts.slug}`,
    },
    keywords: opts.keywords.join(', '),
    inLanguage: lang,
  }
}
```

---

## 8. FEATURES PAGE (/caracteristicas) -- 2 JSON-LD blocks

### 8.1 WebPage

**Verdict:** PASS

### 8.2 BreadcrumbList

**Verdict:** PASS

### 8.3 Missing opportunity

**Severity:** MEDIUM

This page describes the SaaS product in detail. Consider adding `SoftwareApplication` schema here too, with a `featureList` property:

```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Opinafy",
  "url": "https://opinafy.com",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "featureList": "Widget embebible Shadow DOM, 100+ plantillas, Verificación por email, Mini sitio público, Video testimonios, Audio testimonios, Importar desde 8 plataformas, A/B testing, Sentiment analysis, Analytics de conversión"
}
```

---

## 9. HELP PAGE (/ayuda) -- 2 JSON-LD blocks

### 9.1 WebPage

**Verdict:** PASS

### 9.2 BreadcrumbList

**Verdict:** PASS

### 9.3 Note on HowTo

The user asked about HowTo schema for help pages. **HowTo rich results were removed by Google in September 2023.** Do NOT add HowTo schema -- it provides zero search benefit and is considered deprecated for rich results purposes.

---

## 10. HELP ARTICLES (/ayuda/[slug]) -- 2 JSON-LD blocks

### 10.1 WebPage

**Verdict:** PASS

### 10.2 BreadcrumbList

**Verdict:** PASS

### 10.3 Missing opportunity

**Severity:** LOW

Help guide articles could use `TechArticle` instead of generic `WebPage`:

```json
{
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": "Como configurar el widget de testimonios",
  "description": "Guia paso a paso...",
  "url": "https://opinafy.com/ayuda/configurar-widget",
  "author": {
    "@type": "Organization",
    "name": "Equipo Opinafy"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Opinafy"
  },
  "inLanguage": "es"
}
```

This is a minor enhancement -- `TechArticle` is a subtype of `Article` and Google treats it similarly.

---

## 11. COMPARISON PAGES (/comparar) -- 2 JSON-LD blocks

### 11.1 WebPage

**Verdict:** PASS

### 11.2 BreadcrumbList

**Verdict:** PASS

### 11.3 Missing opportunity -- no individual comparison schemas

**Severity:** MEDIUM

The individual comparison pages (`/comparar/opinafy-vs-senja`, `/comparar/opinafy-vs-testimonial-to`) could benefit from an `Article` or `WebPage` schema with `about` referencing the compared products. However, the user mentioned using `Product` schema for comparisons -- this is NOT recommended since Opinafy is a service, not a physical product. `SoftwareApplication` is the correct type, and it is already represented elsewhere.

---

## 12. ROOT LAYOUT -- No JSON-LD

**File:** `src/app/layout.tsx`
**Verdict:** Acceptable

The root layout does not inject any JSON-LD. Schema is correctly placed at the page level, which is the right approach.

---

## 13. CROSS-CUTTING ISSUES

### 13.1 No @id properties (duplicate entity risk)

**Severity:** HIGH

None of the schema blocks use `@id` properties. This means when the same entity (e.g., the Organization "Opinafy") appears in multiple blocks on the same page, Google cannot determine they refer to the same entity. This can lead to:

- Duplicate entity warnings in Google's Rich Results Test
- Missed connections between Organization, WebSite, and SoftwareApplication

**Fix:** Add `@id` to key entities:

```json
// Organization
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://opinafy.com/#organization",
  "name": "Opinafy",
  ...
}

// WebSite
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://opinafy.com/#website",
  "publisher": { "@id": "https://opinafy.com/#organization" },
  ...
}

// SoftwareApplication
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": "https://opinafy.com/#software",
  "publisher": { "@id": "https://opinafy.com/#organization" },
  ...
}
```

Then in nested references, just use `{ "@id": "https://opinafy.com/#organization" }` instead of repeating the full Organization object.

### 13.2 No `@graph` pattern

**Severity:** LOW

Currently, each schema block is a separate `<script type="application/ld+json">` tag. This is valid but verbose. The `@graph` pattern puts all entities in one script tag, making it easier to maintain and slightly reducing page weight:

```json
{
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", "@id": "https://opinafy.com/#organization", ... },
    { "@type": "WebSite", "@id": "https://opinafy.com/#website", ... },
    { "@type": "SoftwareApplication", ... },
    { "@type": "BreadcrumbList", ... }
  ]
}
```

This is optional but considered best practice.

---

## 14. MISSING SCHEMA OPPORTUNITIES

### 14.1 No `ProfilePage` for mini sites (/s/[username])

These public testimonial pages could benefit from `ProfilePage` schema with the user's collected testimonials.

### 14.2 No `Review` schema on testimonial collection pages

When users view testimonials on a mini site, individual testimonials could be marked up as `Review` entities. This would be especially powerful when combined with `AggregateRating` on the business's profile.

### 14.3 No `Event` schema on changelog/updates page

If the changelog page lists dated updates, `Article` schema with `datePublished` for each entry would improve indexing.

### 14.4 No `SiteNavigationElement` for main navigation

Low priority, but marking up the main navbar as `SiteNavigationElement` helps crawlers understand site structure.

### 14.5 No `VideoObject` for video testimonials

If the platform displays video testimonials in public pages, they should carry `VideoObject` schema for potential video rich results.

---

## 15. PRIORITY FIX LIST (ordered by impact)

| Priority | Issue | Severity | Effort | Page(s) |
|---|---|---|---|---|
| 1 | English articles: `mainEntityOfPage` points to Spanish URL | CRITICAL | Low | /en/blog/[slug] |
| 2 | English articles: `inLanguage` hardcoded to `"es"` | CRITICAL | Low | /en/blog/[slug] |
| 3 | English homepage: Organization/WebSite schemas in Spanish | CRITICAL | Medium | /en |
| 4 | SoftwareApplication: Missing `aggregateRating` (no rich results without it) | CRITICAL | Medium | /, /en |
| 5 | SoftwareApplication: Missing Mini Sitio plan (5 EUR) | HIGH | Low | / |
| 6 | Organization: Missing contact email | HIGH | Low | All |
| 7 | WebSite: Missing SearchAction | HIGH | Low | /, /en |
| 8 | No `@id` on entities (duplicate risk) | HIGH | Medium | All |
| 9 | Article author type should be Organization, not Person | MEDIUM | Low | /blog/[slug], /en/blog/[slug] |
| 10 | Organization logo should be ImageObject | MEDIUM | Low | All |
| 11 | FAQPage schema provides no benefit (restricted since 2023) | MEDIUM | Low | /, /precios, /en, /en/pricing |
| 12 | /precios missing SoftwareApplication schema | MEDIUM | Low | /precios |
| 13 | /caracteristicas missing featureList | MEDIUM | Low | /caracteristicas |
| 14 | dateModified always equals datePublished | LOW | Low | /blog/[slug] |
| 15 | Consider @graph pattern | LOW | Medium | All |

---

## 16. WHAT NOT TO ADD (from user request)

The audit request mentioned:
- **HowTo schema for help pages** -- Do NOT add. HowTo rich results were removed by Google in September 2023.
- **FAQ schema for FAQ pages** -- Already present but restricted. Only government/healthcare sites get FAQ rich results since August 2023.
- **Product schema for comparison pages** -- Not appropriate. Use `SoftwareApplication` (already in use) or `Article` for comparison content.

---

## Files referenced in this audit

- `/Applications/MAMP/htdocs/opinafy/src/lib/schema.ts` -- Central schema generator (all fixes go here)
- `/Applications/MAMP/htdocs/opinafy/src/app/(marketing)/page.tsx` -- Spanish homepage
- `/Applications/MAMP/htdocs/opinafy/src/app/(en)/en/page.tsx` -- English homepage
- `/Applications/MAMP/htdocs/opinafy/src/app/(marketing)/precios/page.tsx` -- Pricing page
- `/Applications/MAMP/htdocs/opinafy/src/app/(marketing)/plantillas/page.tsx` -- Templates page
- `/Applications/MAMP/htdocs/opinafy/src/app/(marketing)/blog/page.tsx` -- Blog index
- `/Applications/MAMP/htdocs/opinafy/src/app/(marketing)/blog/[slug]/page.tsx` -- Blog articles (ES)
- `/Applications/MAMP/htdocs/opinafy/src/app/(en)/en/blog/[slug]/page.tsx` -- Blog articles (EN)
- `/Applications/MAMP/htdocs/opinafy/src/app/(marketing)/caracteristicas/page.tsx` -- Features page
- `/Applications/MAMP/htdocs/opinafy/src/app/(marketing)/ayuda/page.tsx` -- Help index
- `/Applications/MAMP/htdocs/opinafy/src/app/(marketing)/ayuda/[slug]/page.tsx` -- Help articles
- `/Applications/MAMP/htdocs/opinafy/src/app/(marketing)/comparar/page.tsx` -- Comparison index
