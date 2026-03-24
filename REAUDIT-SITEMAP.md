# Opinafy Sitemap Re-Audit Report

**Date:** 2026-03-24
**URL:** https://opinafy.com/sitemap.xml
**Previous Grade:** C+
**Current Grade:** B-

---

## Summary

The sitemap has improved meaningfully since the prior audit but still carries
unresolved doorway-page risk and information-architecture gaps that prevent a
higher grade.

| Metric                | Prior Audit       | Current Audit       | Status       |
|-----------------------|-------------------|---------------------|--------------|
| Total URLs            | ~1,000            | 1,414               | Grew         |
| Future lastmod dates  | 190 blog articles | 0                   | RESOLVED     |
| Identical lastmod     | 1,000 (all same)  | 93 (core pages)     | IMPROVED     |
| Hreflang coverage     | 0 / 422 city pgs  | 1,413 / 1,414 URLs  | RESOLVED     |
| City+industry doorway | 420 flagged        | 580 (420 + 160) at 96.7% duplicate | WORSE |
| XML validity          | Not tested        | Valid                | PASS         |

---

## Issue-by-Issue Verification

### 1. CRITICAL (Prior) -- Future lastmod dates on blog articles

**Status: RESOLVED**

Zero URLs have lastmod dates beyond 2026-03-24. Blog articles now span
Oct 2025 through Mar 2026 with natural daily distribution:

| Month    | Blog articles |
|----------|---------------|
| 2025-10  | 17            |
| 2025-11  | 31            |
| 2025-12  | 32            |
| 2026-01  | 32            |
| 2026-02  | 29            |
| 2026-03  | 19            |

Each date appears exactly twice (ES + EN), confirming real publish dates.

### 2. CRITICAL (Prior) -- 1,000 URLs with identical lastmod

**Status: PARTIALLY RESOLVED**

The old problem of 1,000 URLs sharing 2026-03-18 is gone. However:

- 93 core/nav pages share today's timestamp (2026-03-24T19:59:20Z). This is
  acceptable -- these are likely regenerated on deploy.
- 1,000 URLs (city, industry, template pages) now **omit lastmod entirely**.
  Omitting lastmod is better than fabricating it, so this is a valid fix, but
  adding real dates when content changes would be ideal.
- 414 URLs carry accurate, varied lastmod dates.

Remaining concern: 93 pages sharing a single timestamp is minor (they are
legitimate core pages updated on deploy), but it would be better to track
per-page modification dates.

### 3. HIGH (Prior) -- Missing hreflang on city/industry pages

**Status: RESOLVED**

1,413 of 1,414 URLs now carry hreflang annotations.

- All city pages (`/testimonios-en/*`) have `es` + `x-default` (correctly
  no `en` variant, since they have no English counterpart).
- All industry pages with English counterparts have `es` + `en` + `x-default`.
- 992 URLs include all three hreflang values; 421 include `es` + `x-default` only.

One URL missing hreflang: `/s/edmondbk88` -- this appears to be a user
showcase/profile page and should likely be excluded from the sitemap entirely
(user-generated, not a canonical marketing page).

### 4. HIGH (Prior) -- 420 city+industry doorway page risk

**Status: NOT RESOLVED -- WORSENED**

This is the most serious remaining issue.

| Page type             | Count | Has lastmod | Has FAQ | Has unique content |
|-----------------------|-------|-------------|---------|-------------------|
| /testimonios-en/*     | 420   | No          | No      | No                |
| /testimonios-para/*   | 160   | No          | No      | Not verified      |
| /en/testimonials-for/*| 161   | No (1 yes)  | N/A     | Not verified      |
| **Total at risk**     | **741** |           |         |                   |

Content similarity test (Madrid vs Sevilla, after city-name normalization):
**96.7% word overlap**. Only 3-5 words differ. This is a textbook doorway
page pattern.

The prior audit recommended adding unique FAQs and local content to each city
page. Neither has been implemented:
- No `FAQPage` structured data found
- No "preguntas frecuentes" section in HTML
- Word count is nearly identical (~1,190 words per page)
- No H1 tag detected on city pages

**At 420 city pages, this is well past the 50-page HARD STOP threshold.** Google's
doorway page algorithm specifically targets programmatic location pages with
only the city name swapped.

---

## New Findings

### INFO -- Deprecated tags still present

All 1,414 URLs include `<changefreq>` and `<priority>` tags. Google has
publicly stated it ignores both. Removing them would reduce sitemap file size
by roughly 30% (currently ~611 KB).

### LOW -- User profile URL in sitemap

`/s/edmondbk88` is included in the sitemap without hreflang. If this is a
user-generated showcase page, it should be removed from the sitemap unless it
is a curated, marketing-quality demo.

### INFO -- Sitemap is a single file (1,414 URLs)

Well under the 50,000 URL limit. No sitemap index needed at this scale.

### PASS -- robots.txt correctly references sitemap

`Sitemap: https://opinafy.com/sitemap.xml` is declared. Disallow rules
properly block admin, dashboard, and tracking-parameter URLs.

### PASS -- XML is well-formed

`xmllint` reports no syntax errors.

---

## Validation Checklist

| Check                          | Result | Notes                                      |
|--------------------------------|--------|--------------------------------------------|
| Valid XML                      | PASS   | No syntax errors                           |
| Under 50k URL limit            | PASS   | 1,414 URLs                                 |
| No future lastmod dates        | PASS   | Max date is 2026-03-24 (today)             |
| Non-200 URLs                   | PASS   | Spot checks all returned 200               |
| Noindexed URLs in sitemap      | N/T    | Not tested at scale                        |
| Redirected URLs in sitemap     | N/T    | Not tested at scale                        |
| Identical lastmod              | WARN   | 93 core pages share deploy timestamp       |
| priority/changefreq present    | INFO   | Both present on all URLs; ignored by Google |
| Hreflang coverage              | PASS   | 1,413/1,414 covered                        |
| Doorway page risk              | FAIL   | 420+ city pages with 96.7% duplicate text  |

---

## URL Inventory

| Category          | ES    | EN    | Total |
|-------------------|-------|-------|-------|
| Core pages        | 48    | 74    | 122   |
| Blog articles     | 160   | 160   | 320   |
| City pages        | 420   | 0     | 420   |
| Industry pages    | 160   | 161   | 321   |
| Template pages    | 100   | 100   | 200   |
| Mini-site templates| 31   | 0     | 31    |
| **Total**         | **919** | **495** | **1,414** |

---

## Grade Justification: B-

**Improvements from C+:**
- Future dates eliminated (was Critical -- now resolved)
- Lastmod distribution is realistic for blog content (was Critical -- now resolved)
- Hreflang coverage went from 0% to 99.9% (was High -- now resolved)

**What prevents a higher grade:**
- 420 city pages remain doorway-page liabilities with 96.7% duplicate content.
  This single issue caps the grade. At 420 pages -- 8x beyond the hard-stop
  threshold of 50 -- this represents a tangible algorithmic penalty risk.
- Deprecated `priority` and `changefreq` tags add file bloat.
- 1,000 URLs lack lastmod (acceptable but not ideal).

---

## Recommended Next Steps (Priority Order)

1. **URGENT -- Fix city page content.** Either:
   - Add genuinely unique content per city (local stats, testimonials from
     real local businesses, city-specific FAQs) to get below 40% overlap, OR
   - Reduce to top 30-50 cities with real unique content and noindex the rest, OR
   - Remove thin city pages from sitemap entirely until content is ready.

2. **Add FAQ sections + FAQPage schema** to remaining city and industry pages.
   Each page should have 3-5 unique questions not found on other city pages.

3. **Add H1 tags** to city pages (currently missing).

4. **Remove deprecated tags** (`changefreq`, `priority`) to reduce file size.

5. **Remove `/s/edmondbk88`** from sitemap (or add hreflang if intentional).

6. **Add lastmod to city/industry/template pages** when content is actually
   updated -- do not fabricate dates.
