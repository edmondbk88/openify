# FINAL2 Schema.org Audit -- opinafy.com

**Date:** 2026-03-30
**Auditor:** Claude Opus 4.6 (Schema.org specialist)
**Source files analyzed:** `src/lib/schema.ts`, 5 page components, blog data

---

## Overall Score: 72 / 100

| Category | Weight | Score | Notes |
|----------|--------|-------|-------|
| Organization | 20% | 14/20 | Broken founder image URL in 3 locations |
| WebSite | 15% | 13/15 | Same @id for both languages (minor) |
| SoftwareApplication | 15% | 15/15 | Excellent -- 4 offers, EN/ES, correct pricing |
| BreadcrumbList | 10% | 10/10 | Present on all audited pages, correct structure |
| FAQPage | 10% | 7/10 | Present but restricted type (see note) |
| Article | 10% | 9/10 | Missing author image in schema |
| CollectionPage (city) | 10% | 9/10 | Correct type, well-structured |
| Cross-cutting (URLs, lang) | 10% | -5 penalty | Broken URL concatenation in 3 files |

**Breakdown:** 77 base - 5 penalty for critical broken URL = **72/100**

---

## PAGE-BY-PAGE AUDIT

---

### 1. https://opinafy.com (Spanish homepage)

**Schema blocks rendered:** 5
- Organization
- WebSite
- SoftwareApplication
- BreadcrumbList
- FAQPage

#### Organization

| Check | Result | Detail |
|-------|--------|--------|
| @context | PASS | `https://schema.org` |
| @type | PASS | `Organization` |
| @id | PASS | `https://opinafy.com/#organization` |
| name | PASS | `Opinafy` |
| url | PASS | `https://opinafy.com` |
| logo as ImageObject | PASS | `{ @type: ImageObject, url: ..., width: 512, height: 512 }` |
| description | PASS | Spanish description |
| foundingDate | PASS | `2026` |
| founder.name | PASS | `Edmond Bojalil` |
| founder.url | PASS | LinkedIn URL |
| founder.image | **FAIL** | Broken: `https://opinafy.comhttps://rckjevsqxkfixkdloqjv.supabase.co/...` |
| email | PASS | `hola@opinafy.com` (via contactPoint) |
| sameAs | PASS | LinkedIn company + personal |

#### WebSite

| Check | Result | Detail |
|-------|--------|--------|
| @context | PASS | `https://schema.org` |
| @type | PASS | `WebSite` |
| @id | PASS | `https://opinafy.com/#website` |
| inLanguage | PASS | `es` |
| SearchAction target | PASS | `https://opinafy.com/blog?q={search_term}` |
| query-input | PASS | `required name=search_term` |

#### SoftwareApplication

| Check | Result | Detail |
|-------|--------|--------|
| @type | PASS | `SoftwareApplication` |
| applicationCategory | PASS | `BusinessApplication` |
| operatingSystem | PASS | `Web` |
| description | PASS | Spanish |
| offers count | PASS | 4 offers |
| Gratis offer | PASS | price: 0, EUR |
| Mini Sitio offer | PASS | price: 5, EUR, UnitPriceSpecification with MON |
| Pro offer | PASS | price: 9, EUR, UnitPriceSpecification with MON |
| Business offer | PASS | price: 19, EUR, UnitPriceSpecification with MON |
| offer URLs | PASS | `https://opinafy.com/precios` |
| Descriptions in Spanish | PASS | All 4 descriptions are in Spanish |

#### BreadcrumbList

| Check | Result | Detail |
|-------|--------|--------|
| @type | PASS | `BreadcrumbList` |
| items | PASS | 1 item: `Inicio` -> `https://opinafy.com` |
| position numbering | PASS | Starts at 1 |

#### FAQPage

| Check | Result | Detail |
|-------|--------|--------|
| @type | PASS | `FAQPage` |
| mainEntity count | PASS | 8 questions |
| Question/@type | PASS | All `Question` |
| acceptedAnswer/@type | PASS | All `Answer` |
| Content language | PASS | All Spanish |
| **Restriction warning** | **WARN** | FAQPage rich results restricted to government/healthcare since Aug 2023. Schema is valid but will NOT generate rich results for a SaaS site. |

---

### 2. https://opinafy.com/en (English homepage)

**Schema blocks rendered:** 5
- Organization (lang: en)
- WebSite (lang: en)
- SoftwareApplication (lang: en)
- BreadcrumbList
- FAQPage (inline English)

#### Organization (EN)

| Check | Result | Detail |
|-------|--------|--------|
| description | PASS | English description |
| founder.image | **FAIL** | Same broken URL: `https://opinafy.comhttps://...` |
| All other fields | PASS | Same as ES (expected -- single org) |

#### WebSite (EN)

| Check | Result | Detail |
|-------|--------|--------|
| @id | **WARN** | Same `#website` for both languages. Consider `#website-en` for disambiguation. Not an error but could confuse graph merging. |
| inLanguage | PASS | `en` |
| SearchAction target | PASS | `https://opinafy.com/en/blog?q={search_term}` |
| url | **WARN** | `https://opinafy.com` (not `/en`). Acceptable since it refers to the website entity, but `potentialAction.target` correctly uses `/en/blog`. |

#### SoftwareApplication (EN)

| Check | Result | Detail |
|-------|--------|--------|
| description | PASS | English: `SaaS platform to collect, manage, and display customer testimonials...` |
| Offer names | PASS | `Free`, `Mini Sitio`, `Pro`, `Business` |
| Offer descriptions | PASS | All 4 in English |
| offer URLs | PASS | `https://opinafy.com/en/pricing` |
| Pricing amounts | PASS | 0, 5, 9, 19 EUR |

#### BreadcrumbList (EN)

| Check | Result | Detail |
|-------|--------|--------|
| items | PASS | 1 item: `Home` -> `https://opinafy.com/en` |

#### FAQPage (EN)

| Check | Result | Detail |
|-------|--------|--------|
| Content language | PASS | English questions and answers (8 items) |
| Structure | PASS | Correct Question/Answer types |
| **Restriction warning** | **WARN** | Same as ES -- no rich results for non-government sites |

---

### 3. https://opinafy.com/sobre (About page, Spanish)

**Schema blocks rendered:** 3
- WebPage
- BreadcrumbList
- Organization (with founder override)

#### WebPage

| Check | Result | Detail |
|-------|--------|--------|
| @type | PASS | `WebPage` |
| name | PASS | `Sobre Nosotros - Opinafy` |
| url | PASS | `https://opinafy.com/sobre` |
| description | PASS | Spanish |
| inLanguage | PASS | `es` (default) |
| publisher.logo | **WARN** | String `https://opinafy.com/logo-opinafy.png` instead of ImageObject. Google prefers ImageObject. |
| isPartOf | PASS | Links to WebSite |

#### BreadcrumbList

| Check | Result | Detail |
|-------|--------|--------|
| items | PASS | 2 items: Inicio -> Sobre Nosotros |
| URLs | PASS | Both absolute |

#### Organization (with founder override)

| Check | Result | Detail |
|-------|--------|--------|
| Spread from organizationSchema() | PASS | Base org data present |
| founder.name | PASS | `Edmond Bojalil` |
| founder.url | PASS | LinkedIn |
| founder.image | **FAIL** | `https://opinafy.comhttps://rckjevsqxkfixkdloqjv.supabase.co/storage/v1/object/public/logos/site/edmond-bojalil.jpg` -- broken concatenation |
| **Note:** | -- | The spread creates a DUPLICATE founder property (base schema already has `founder`). The override correctly replaces it via JS spread semantics, but the image remains broken. |

---

### 4. https://opinafy.com/blog/que-son-testimonios-clientes-importancia

**Schema blocks rendered:** 2
- Article
- BreadcrumbList

#### Article

| Check | Result | Detail |
|-------|--------|--------|
| @type | PASS | `Article` |
| headline | PASS | Dynamic from blog data |
| description | PASS | `metaDescription` from blog data |
| image | PASS | Supabase blog-images URL |
| author.@type | PASS | `Person` |
| author.name | PASS | `Edmond Bojalil` |
| author.url | PASS | `https://www.linkedin.com/in/edmondbojalil/` |
| author.image | **MISSING** | No `image` property on author Person. Google recommends author photo for Article rich results. |
| publisher | PASS | Organization with logo ImageObject |
| datePublished | PASS | `2025-10-15` (ISO 8601) |
| dateModified | **WARN** | Same as datePublished. Should be updated if content changes. |
| mainEntityOfPage | PASS | `https://opinafy.com/blog/que-son-testimonios-clientes-importancia` |
| inLanguage | PASS | `es` (default) |
| keywords | PASS | Comma-separated string |

#### BreadcrumbList

| Check | Result | Detail |
|-------|--------|--------|
| items | PASS | 3 items: Inicio -> Blog -> Article title |
| URLs | PASS | All absolute |

---

### 5. https://opinafy.com/testimonios-en/madrid/restaurantes

**Schema blocks rendered:** 4
- WebPage
- BreadcrumbList
- CollectionPage
- FAQPage

#### WebPage

| Check | Result | Detail |
|-------|--------|--------|
| @type | PASS | `WebPage` (not LocalBusiness -- correct) |
| inLanguage | PASS | `es` (default) |
| url | PASS | `https://opinafy.com/testimonios-en/madrid/restaurantes` |

#### CollectionPage

| Check | Result | Detail |
|-------|--------|--------|
| @type | PASS | `CollectionPage` (correct choice for a listing/directory page) |
| name | PASS | Dynamic: `Testimonios para [Industry] en [City]` |
| url | PASS | Absolute, matches canonical |
| inLanguage | PASS | `es` |
| about.@type | PASS | `Service` |
| about.areaServed | PASS | `{ @type: City, name: [city] }` |
| **Note** | -- | Well-structured. The `about.areaServed` with City type is a strong signal for local SEO. |

#### BreadcrumbList

| Check | Result | Detail |
|-------|--------|--------|
| items | PASS | 4 items: Inicio -> Testimonios por Industria -> [Industry] -> [City] |
| URLs | PASS | All absolute |

#### FAQPage

| Check | Result | Detail |
|-------|--------|--------|
| Structure | PASS | Dynamic questions from `generateCityIndustryFAQs()` |
| **Restriction warning** | **WARN** | Same FAQPage restriction applies |

---

## CRITICAL ISSUES (Must Fix)

### Issue 1: Broken founder image URL (3 locations)

**Severity:** CRITICAL
**Locations:**
1. `src/lib/schema.ts` line 36
2. `src/app/(marketing)/sobre/page.tsx` line 109
3. `src/app/(en)/en/about/page.tsx` line 110

**Current value:**
```
https://opinafy.comhttps://rckjevsqxkfixkdloqjv.supabase.co/storage/v1/object/public/logos/site/edmond-bojalil.jpg
```

**Should be:**
```
https://rckjevsqxkfixkdloqjv.supabase.co/storage/v1/object/public/logos/site/edmond-bojalil.jpg
```

**Impact:** Google's Rich Results Test will flag this as an invalid URL. The founder Person entity has a malformed image across every page that renders Organization schema (homepage ES, homepage EN, /sobre, /en/about). This affects all four pages.

---

### Issue 2: Article author missing image property

**Severity:** MODERATE
**Location:** `src/lib/schema.ts` line 359-363 (articleSchema function)

**Current:**
```json
"author": {
  "@type": "Person",
  "name": "Edmond Bojalil",
  "url": "https://www.linkedin.com/in/edmondbojalil/"
}
```

**Should be:**
```json
"author": {
  "@type": "Person",
  "name": "Edmond Bojalil",
  "url": "https://www.linkedin.com/in/edmondbojalil/",
  "image": "https://rckjevsqxkfixkdloqjv.supabase.co/storage/v1/object/public/logos/site/edmond-bojalil.webp"
}
```

**Impact:** Google recommends author images for Article rich results. The photo already exists and is displayed visually on blog pages (line 140 of blog/[slug]/page.tsx) but is not included in the schema.

---

## WARNINGS (Should Fix)

### Warning 1: FAQPage restricted since August 2023

**Severity:** LOW
**Locations:** Homepage ES, Homepage EN, all city/industry pages, pricing EN

FAQPage rich results are now restricted to **government and healthcare authority sites only**. For a SaaS like Opinafy, the FAQ schema will be ignored by Google's rich results system. The schema is technically valid and does not cause errors, but it provides no SEO benefit.

**Recommendation:** Keep the schema for completeness (it helps AI systems and other consumers understand your FAQ content), but do not expect rich results from it. Do NOT remove it -- it still has value for non-Google consumers of structured data.

### Warning 2: WebSite @id identical for ES and EN

**Severity:** LOW
**Location:** `src/lib/schema.ts` line 61

Both `webSiteSchema()` and `webSiteSchema({ lang: 'en' })` produce `@id: "https://opinafy.com/#website"`. Since `inLanguage` differs, this creates two conflicting definitions of the same entity in Google's knowledge graph.

**Recommendation:** Use `@id: "https://opinafy.com/#website-en"` for the English version. Update line 61:
```ts
'@id': `https://opinafy.com/#website${lang === 'en' ? '-en' : ''}`,
```

### Warning 3: WebPage publisher.logo is a plain string

**Severity:** LOW
**Location:** `src/lib/schema.ts` line 224

In `webPageSchema()`, the publisher logo is a plain URL string:
```json
"logo": "https://opinafy.com/logo-opinafy.png"
```

Google prefers `ImageObject` format (which is correctly used in `organizationSchema()` and `articleSchema()`). For consistency:
```json
"logo": {
  "@type": "ImageObject",
  "url": "https://opinafy.com/logo-opinafy.png",
  "width": 512,
  "height": 512
}
```

### Warning 4: dateModified always equals datePublished in Article

**Severity:** LOW
**Location:** `src/lib/schema.ts` line 375

`dateModified: opts.date` always mirrors `datePublished`. If articles are ever updated, this should reflect the actual modification date. Currently all blog articles use the original publish date for both.

---

## WHAT IS CORRECT AND WELL-DONE

1. **JSON-LD format everywhere** -- No Microdata, no RDFa. Clean `<script type="application/ld+json">` injection.
2. **@context always `https://schema.org`** -- Correct protocol, consistent.
3. **Organization has @id** -- Enables entity linking across pages.
4. **SoftwareApplication with 4 Offers** -- Full pricing in EUR with UnitPriceSpecification and billing duration. Descriptions correctly switch between ES/EN.
5. **CollectionPage on city pages** -- Correct type choice. NOT using LocalBusiness (which would be wrong since Opinafy is not a local business in Madrid).
6. **BreadcrumbList on every page** -- Proper position numbering, absolute URLs.
7. **Article schema with author, publisher, dates** -- Clean implementation. Author correctly links to LinkedIn.
8. **Language-aware schema functions** -- All accept `lang` parameter and produce localized output.
9. **SearchAction per language** -- `/blog?q=` for ES, `/en/blog?q=` for EN. Correct.
10. **No deprecated types used** -- No HowTo, no SpecialAnnouncement, no CourseInfo.

---

## MISSING OPPORTUNITIES

### 1. SoftwareApplication missing `aggregateRating`

Google supports `aggregateRating` within SoftwareApplication. Once real users leave reviews, adding this would be valuable:
```json
"aggregateRating": {
  "@type": "AggregateRating",
  "ratingValue": "4.8",
  "reviewCount": "42",
  "bestRating": "5"
}
```

### 2. No `sameAs` on Article author

The author Person in `articleSchema` has `url` pointing to LinkedIn, but does not include `sameAs`. While `url` is sufficient, `sameAs` is the canonical way to link to external profiles:
```json
"author": {
  "@type": "Person",
  "name": "Edmond Bojalil",
  "url": "https://www.linkedin.com/in/edmondbojalil/",
  "sameAs": "https://www.linkedin.com/in/edmondbojalil/",
  "image": "..."
}
```

### 3. No `ProfessionalService` or `Product` on industry pages

The city/industry pages describe a Service (`about.@type: Service`) but could benefit from a richer `offers` block linking to the SoftwareApplication pricing. This would strengthen the connection between programmatic SEO pages and the product.

### 4. No `speakable` on Article pages

For Google Assistant / voice search, Article schema can include a `speakable` property pointing to the TL;DR section. Low priority but differentiating.

---

## FIX PRIORITY LIST

| Priority | Issue | File(s) | Effort |
|----------|-------|---------|--------|
| P0 | Fix broken founder image URL | `schema.ts:36`, `sobre/page.tsx:109`, `en/about/page.tsx:110` | 5 min |
| P1 | Add author image to articleSchema | `schema.ts:362` | 2 min |
| P2 | Differentiate WebSite @id for EN | `schema.ts:61` | 2 min |
| P2 | Use ImageObject for logo in webPageSchema | `schema.ts:224` | 3 min |
| P3 | Add aggregateRating when real reviews exist | `schema.ts` (softwareApplicationSchema) | 5 min |

---

## SCORE JUSTIFICATION

| Points | Reason |
|--------|--------|
| +20 | All 5 expected schema types present on homepage (Org, WebSite, SoftwareApp, Breadcrumb, FAQ) |
| +15 | EN pages correctly pass `lang: 'en'` to all schema functions |
| +10 | SoftwareApplication with 4 correct EUR offers and bilingual descriptions |
| +10 | CollectionPage (not LocalBusiness) on city pages with Service/City about |
| +8 | Article schema with proper author, publisher, dates, keywords |
| +10 | BreadcrumbList present and correct on all 5 audited pages |
| +4 | Clean JSON-LD injection, no Microdata/RDFa mix, correct @context |
| -5 | Broken founder image URL in 3 locations (schema.ts + 2 page overrides) |
| -3 | Missing author image in Article schema |
| -2 | WebSite @id collision between ES/EN |
| **= 72** | **Total** |

---

## FILES REFERENCED

- `/Applications/MAMP/htdocs/opinafy/src/lib/schema.ts` -- Central schema library (all 9 schema generators)
- `/Applications/MAMP/htdocs/opinafy/src/app/(marketing)/page.tsx` -- Spanish homepage (5 schema blocks)
- `/Applications/MAMP/htdocs/opinafy/src/app/(en)/en/page.tsx` -- English homepage (5 schema blocks)
- `/Applications/MAMP/htdocs/opinafy/src/app/(marketing)/sobre/page.tsx` -- About page ES (3 schema blocks)
- `/Applications/MAMP/htdocs/opinafy/src/app/(en)/en/about/page.tsx` -- About page EN (3 schema blocks)
- `/Applications/MAMP/htdocs/opinafy/src/app/(marketing)/blog/[slug]/page.tsx` -- Blog article ES (2 schema blocks)
- `/Applications/MAMP/htdocs/opinafy/src/app/(en)/en/blog/[slug]/page.tsx` -- Blog article EN (2 schema blocks)
- `/Applications/MAMP/htdocs/opinafy/src/app/(marketing)/testimonios-en/[city]/[industry]/page.tsx` -- City/industry page (4 schema blocks)
