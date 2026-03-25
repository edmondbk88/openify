# Opinafy Schema.org Final Audit

**Date:** 2026-03-25
**URL:** https://opinafy.com
**Previous scores:** 60 -> 88
**Final score: 95 / 100**

---

## Pages Audited

1. https://opinafy.com (ES homepage) -- 5 schema blocks
2. https://opinafy.com/en (EN homepage) -- 5 schema blocks
3. https://opinafy.com/sobre -- 3 schema blocks
4. https://opinafy.com/testimonios-en/madrid/restaurantes -- 4 schema blocks
5. https://opinafy.com/blog/que-son-testimonios-clientes-importancia (ES blog post) -- 2 blocks
6. https://opinafy.com/en/blog/que-son-testimonios-clientes-importancia (EN blog post) -- 2 blocks

---

## 1. Organization Schema

**Status: PASS**

| Property | ES Homepage | EN Homepage | /sobre |
|---|---|---|---|
| @context https | Yes | Yes | Yes |
| @id | `#organization` | `#organization` | `#organization` |
| founder (Edmond Bojalil) | Yes | Yes | Yes |
| founder LinkedIn URL | Yes | Yes | Yes |
| email (hola@opinafy.com) | Yes | Yes | Yes |
| logo as ImageObject | Yes (512x512) | Yes (512x512) | Yes (512x512) |
| sameAs LinkedIn | Yes (company + personal) | Yes | Yes |
| description localized | Spanish | English | Spanish |

**Verdict:** All required and recommended properties present. Consistent across pages.

---

## 2. WebSite Schema

**Status: PASS**

| Property | ES Homepage | EN Homepage |
|---|---|---|
| @id | `#website` | `#website` |
| inLanguage | "es" | "en" |
| SearchAction urlTemplate | `/blog?q={search_term}` | `/en/blog?q={search_term}` |
| EntryPoint @type | Yes | Yes |
| query-input | Yes | Yes |

**Verdict:** Language-specific SearchAction URLs correctly point to the right blog. inLanguage properly switches per version.

---

## 3. SoftwareApplication Schema

**Status: PASS**

### ES Homepage -- 4 Offers

| Offer | Price | Description Language |
|---|---|---|
| Gratis | 0 EUR | Spanish |
| Mini Sitio | 5 EUR/mo | Spanish |
| Pro | 9 EUR/mo | Spanish |
| Business | 19 EUR/mo | Spanish |

### EN Homepage -- 4 Offers

| Offer | Price | Description Language |
|---|---|---|
| Free | 0 EUR | English |
| Mini Sitio | 5 EUR/mo | English |
| Pro | 9 EUR/mo | English |
| Business | 19 EUR/mo | English |

- All paid offers include `UnitPriceSpecification` with `billingDuration` (monthly).
- EN version has English descriptions and English plan name for "Free" (was "Gratis").
- EN offer URLs correctly point to `/en/pricing`.

**Verdict:** Fully localized. All 4 tiers present with correct pricing structure.

---

## 4. Article Schema (Blog Posts)

**Status: PASS**

| Property | ES Blog Post | EN Blog Post |
|---|---|---|
| author.name | Edmond Bojalil | Edmond Bojalil |
| author.url (LinkedIn) | Yes | Yes |
| inLanguage | "es" | "en" |
| datePublished (ISO 8601) | 2025-10-15 | 2025-10-15 |
| dateModified (ISO 8601) | 2025-10-15 | 2025-10-15 |
| mainEntityOfPage @id | Correct ES URL | Correct EN URL |
| publisher with logo | Yes (ImageObject) | Yes (ImageObject) |
| headline | Spanish | English |
| keywords | Spanish | English |
| BreadcrumbList | Yes (3 items) | Yes (3 items, EN URLs) |

**Verdict:** Author, language, and all required Article properties are correct on both language versions.

---

## 5. FAQPage Schema

**Status: PASS (with caveat)**

### ES Homepage
- 8 questions in Spanish. All use Question/Answer types correctly.

### EN Homepage
- 8 questions in English. Fully translated.

### City+Industry Page (/testimonios-en/madrid/restaurantes)
- 3 localized FAQ questions specific to restaurantes in Madrid.
- Content is relevant, city-specific, and industry-specific.

**Caveat:** Since August 2023 Google restricts FAQPage rich results to government and healthcare authority sites only. The schema is technically valid and will not cause errors, but it will NOT generate rich results in Google Search. It still provides semantic value for other search engines and AI systems.

---

## 6. /sobre Page

**Status: PASS**

| Block | Present | Correct |
|---|---|---|
| WebPage | Yes | name, url, description, inLanguage: "es", publisher with logo |
| BreadcrumbList | Yes | 2 items: Inicio -> Sobre Nosotros, absolute URLs |
| Organization | Yes | Same canonical block with @id, founder, sameAs, etc. |

**Verdict:** All three expected schema blocks present and valid.

---

## 7. EN Pages -- inLanguage Check

**Status: PASS**

| Schema Block | inLanguage on /en |
|---|---|
| Organization | N/A (language-neutral entity, description in English) |
| WebSite | "en" |
| SoftwareApplication | N/A (content is in English) |
| BreadcrumbList | N/A (labels are "Home" in English) |
| FAQPage | N/A (content is in English) |
| Article (EN blog) | "en" |

All blocks that support inLanguage correctly use "en" on English pages.

---

## 8. City+Industry Page (/testimonios-en/madrid/restaurantes)

**Status: PASS**

| Block | Present |
|---|---|
| WebPage | Yes (inLanguage: "es", correct URL) |
| BreadcrumbList | Yes (4-level: Inicio > Testimonios por Industria > Restaurantes > Madrid) |
| LocalBusiness | Yes (address with locality, region, country; areaServed: Madrid) |
| FAQPage | Yes (3 city+industry-specific questions) |

**Verdict:** Comprehensive schema coverage for programmatic SEO pages.

---

## Validation Summary

| Check | Result |
|---|---|
| @context is "https://schema.org" | PASS (all 21 blocks) |
| @type is valid and not deprecated | PASS |
| All required properties present | PASS |
| Property values match expected types | PASS |
| No placeholder text | PASS |
| URLs are absolute | PASS |
| Dates are ISO 8601 | PASS |
| No deprecated schema types used | PASS |

---

## Minor Issues (Non-Blocking, -5 points)

### 1. FAQPage will not generate Google rich results (-2)
FAQPage is restricted to government/healthcare since August 2023. The markup is valid but will not produce rich results in Google. Consider whether maintaining it is worth the code overhead. It does still benefit Bing, AI assistants, and semantic understanding.

### 2. BreadcrumbList on homepages is single-item (-1)
Both ES and EN homepages have a BreadcrumbList with only 1 item (Inicio/Home). A single-item breadcrumb has no navigational value. Google typically ignores breadcrumbs with fewer than 2 items. Consider removing or not outputting BreadcrumbList on the homepage.

### 3. SoftwareApplication missing inLanguage (-1)
The SoftwareApplication block does not explicitly declare `inLanguage`. While the descriptions are correctly localized, adding `"inLanguage": "es"` / `"inLanguage": "en"` would make the language signal explicit for search engines.

### 4. Organization description has unaccented "espanol" (-1)
The ES Organization description says "en espanol" instead of "en espanol" (with tilde). The character encoding appears to have dropped the accent: `"espanol"` should be `"español"`.

---

## Score Breakdown

| Category | Points | Max |
|---|---|---|
| Organization (complete, @id, founder, logo, sameAs, email) | 20 | 20 |
| WebSite (SearchAction, language-specific URLs) | 15 | 15 |
| SoftwareApplication (4 offers, EN descriptions, pricing) | 14 | 15 |
| Article (author, LinkedIn, inLanguage, dates) | 15 | 15 |
| FAQPage (present, localized, city-specific) | 8 | 10 |
| /sobre (WebPage + BreadcrumbList) | 10 | 10 |
| EN language consistency | 10 | 10 |
| Technical validity (no errors, absolute URLs, ISO dates) | 3 | 5 |
| **TOTAL** | **95** | **100** |

---

## Conclusion

The Schema.org implementation has improved significantly from 60 to 88 to **95**. All previously requested fixes are live and verified:

- Organization has @id, founder, email, ImageObject logo, and LinkedIn sameAs
- WebSite has @id with language-specific SearchAction URLs
- SoftwareApplication has all 4 pricing tiers with English descriptions on /en
- Article schema has Edmond Bojalil as author with LinkedIn URL and correct inLanguage
- FAQPage is present on city+industry pages (valid but no Google rich results)
- /sobre has WebPage + BreadcrumbList schema
- EN pages consistently use inLanguage: "en"

The remaining 5 points are minor polish items that can be addressed optionally.
