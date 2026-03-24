# Sitemap Audit Report -- opinafy.com

**Date:** 2026-03-24
**Sitemap URL:** https://opinafy.com/sitemap.xml
**Generator:** Next.js `src/app/sitemap.ts` (dynamic, server-rendered)
**Total URLs in sitemap:** 1,414 (not 184 as originally stated)

---

## 1. Executive Summary

The sitemap is structurally sound XML and covers most of the site well. However, there are **5 critical issues** and **several high-severity problems** that need immediate attention:

| Severity | Count | Key Issues |
|----------|-------|------------|
| CRITICAL | 2 | 190 future lastmod dates; 1,000 identical lastmod dates |
| HIGH | 3 | 422 URLs missing hreflang; EN blog/industry slugs use Spanish text; doorway page risk (420 city pages) |
| MEDIUM | 3 | priority/changefreq tags (ignored by Google); no sitemap index; missing /p/ collection pages |
| LOW | 2 | Single /s/ profile page; inconsistent priority values |

**Overall Grade: C+** -- Good coverage, but lastmod and hreflang issues undermine crawl efficiency.

---

## 2. Validation Checks

### 2.1 XML Format Validation

| Check | Result | Notes |
|-------|--------|-------|
| Well-formed XML | PASS | xmllint reports no errors |
| Correct namespace | PASS | `xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"` |
| xhtml namespace | PASS | `xmlns:xhtml="http://www.w3.org/1999/xhtml"` for hreflang |
| UTF-8 encoding | PASS | Declared in XML header |
| File size | PASS | 562KB (under 50MB limit) |
| URL count | PASS | 1,414 URLs (under 50,000 limit) |

### 2.2 URL Status Codes (Sample of 40 URLs)

| Status | Count | URLs |
|--------|-------|------|
| 200 OK | 35 | Core pages, blog, industry, city, templates, help, guides |
| 404 Not Found | 5 | See below |

**404 URLs found:**

1. `https://opinafy.com/testimonios-para/clinicas-dentales` -- slug is `dentistas`, not `clinicas-dentales` (tested wrong slug, sitemap is correct)
2. `https://opinafy.com/blog/como-pedir-testimonios` -- slug is `como-pedir-testimonios-clientes-plantillas` (tested wrong slug, sitemap is correct)
3. `https://opinafy.com/en/blog/how-to-ask-for-testimonials` -- EN blog uses Spanish slugs, English slugs do not resolve
4. `https://opinafy.com/en/blog/what-are-customer-testimonials` -- Same issue: English slugs 404, Spanish slugs on /en/ path return 200
5. `https://opinafy.com/en/testimonials-for/restaurants` -- English industry slugs 404; Spanish slugs on /en/ path return 200

**All URLs that are actually in the sitemap returned 200 in sample testing.** The 404s above were tested with guessed English slugs that are not in the sitemap.

### 2.3 Hreflang Implementation

| Check | Result | Severity |
|-------|--------|----------|
| Bidirectional hreflang (es <-> en) | PARTIAL FAIL | HIGH |
| x-default tag present | PASS (when hreflang exists) | -- |
| URLs with hreflang | 992 of 1,414 (70%) | -- |
| URLs MISSING hreflang | 422 (30%) | HIGH |

**Missing hreflang breakdown:**
- `/testimonios-en` index: 1 URL -- no hreflang
- `/testimonios-en/[city]`: 20 URLs -- no hreflang
- `/testimonios-en/[city]/[industry]`: 400 URLs -- no hreflang
- `/s/[username]`: 1 URL -- no hreflang

**Root cause (in sitemap.ts):** Lines 646-671 generate city and city+industry pages without `alternates`. The code intentionally omits hreflang because there are no EN equivalents of these pages. This is technically correct but means Google cannot understand these pages are Spanish-only. Consider adding `hreflang="es"` self-referencing tags.

### 2.4 Hreflang Slug Problem

**HIGH SEVERITY** -- EN pages use Spanish slugs throughout:

- EN blog: `/en/blog/que-son-testimonios-clientes-importancia` (Spanish slug on English path)
- EN industry: `/en/testimonials-for/restaurantes` (Spanish slug `restaurantes` instead of `restaurants`)
- EN templates: `/en/templates/nieve-limpia` (Spanish slug)

This is an SEO anti-pattern. Google uses URL slugs as a ranking signal. Having Spanish text in English URL paths:
- Confuses language signals
- Hurts English keyword targeting
- May cause Google to classify these pages as Spanish despite the /en/ prefix

**Recommendation:** Create English slugs for EN content and implement redirects from old Spanish-slug URLs.

---

## 3. Lastmod Analysis

### 3.1 Date Distribution

| Date Pattern | Count | Issue |
|--------------|-------|-------|
| `2026-03-18T00:00:00.000Z` | 1,000 | CRITICAL: 70% of URLs share one date |
| `2026-03-23T23:51:35.079Z` | 46 | Build timestamp (static pages ES) |
| `2026-03-23T23:51:35.080Z` | 47 | Build timestamp (static pages EN) |
| Future dates (after 2026-03-24) | 190 | CRITICAL: Dates up to 2027-03-01 |
| Realistic past dates | 131 | Blog articles with individual dates |

### 3.2 Critical: 1,000 Identical Lastmod Dates

All industry pages (320), city pages (420), widget templates (200), and minisite templates (60) share `2026-03-18`. This is the `contentCreatedDate` hardcoded in `sitemap.ts` line 17.

**Impact:** Google interprets identical lastmod as "this site doesn't track real modification dates" and may ignore lastmod entirely, reducing crawl efficiency.

**Fix:** Use actual deployment or content-change dates per page, or omit lastmod for pages that have never been individually modified.

### 3.3 Critical: 190 Future Lastmod Dates

Blog articles have dates scheduled into the future (up to 2027-03-01). These are pre-scheduled publication dates from `blog-data.ts` and `blog-data-en.ts`.

**Impact:** Google's documentation states lastmod should reflect when the page was last modified. Future dates are invalid and may cause Google to distrust all lastmod values sitewide.

**Fix:** Filter out articles with `date > now()` from the sitemap, or cap lastmod to `new Date()`.

### 3.4 Build-Timestamp Lastmod

93 static pages use `new Date()` which resolves to the exact build timestamp. This means lastmod changes on every deploy even if content has not changed.

**Impact:** Excessive false lastmod changes waste crawl budget. Google may learn to ignore your lastmod signals.

**Fix:** Use a fixed date for static pages and only update when content actually changes.

---

## 4. Priority and Changefreq Assessment

### 4.1 Status: Both Ignored by Google

Google has publicly stated that `priority` and `changefreq` are **completely ignored**. They add XML bloat but provide zero SEO value.

**Current distribution:**
- priority: 0.5 (532), 0.6 (493), 0.7 (357), 0.8 (16), 0.2 (8), 0.9 (5), 1.0 (1), 0.4 (1), 0.3 (1)
- changefreq: monthly (1,386), weekly (14), yearly (10), daily (4)

**Recommendation:** Remove both tags to reduce sitemap file size by ~30% (from 562KB to ~390KB). This improves parse speed and reduces bandwidth for crawlers.

---

## 5. Programmatic SEO / Doorway Page Analysis

### 5.1 City Pages Assessment

| Page Type | Count | In Sitemap | Quality Gate |
|-----------|-------|------------|--------------|
| `/testimonios-para/[industry]` | 160 ES + 160 EN | YES | PASS -- industry-specific content |
| `/testimonios-en/[city]` | 20 | YES | WARNING -- 30+ threshold not hit |
| `/testimonios-en/[city]/[industry]` | 400 | YES | **HARD STOP** -- 400 pages |

### 5.2 HARD STOP: 400 City+Industry Pages

The sitemap includes 400 city+industry combination pages (20 cities x 20 industries). This is a classic doorway page pattern that Google's algorithm specifically targets.

**Questions that must be answered:**
1. Do these pages have 60%+ unique content per page, or is it the same template with city/industry swapped?
2. Is there real local data (local testimonials, local business stats) per city+industry combo?
3. Are these pages providing genuine value that a user searching "testimonios restaurantes Madrid" cannot get from the main industry page?

**If these pages are template-based with only city/industry name swapped:** Remove them from the sitemap immediately. Google's doorway page penalty can affect the entire domain.

**If they have genuine unique content:** Keep them, but add hreflang annotations and ensure internal linking supports them.

### 5.3 Industry Pages (Safe)

The 160 ES + 160 EN industry pages at `/testimonios-para/[industry]` are within safe limits. Industry-specific landing pages with tailored content (testimonial strategies per industry, industry-specific widgets, FAQs) are a legitimate SEO pattern.

---

## 6. Missing Pages Analysis

### 6.1 Pages NOT in Sitemap That Should Be

| Page Type | Expected | In Sitemap | Missing |
|-----------|----------|------------|---------|
| `/p/[username]/[slug]` (collections) | Unknown (dynamic) | 0 | ALL |
| `/s/[username]` (mini sites) | Unknown (dynamic) | 1 | Most |
| EN city pages | 0 (not built) | 0 | N/A -- pages don't exist |
| `/testimonios-para` index | 1 | 1 | None |
| `/en/testimonials-for` index | 1 | 1 | None |
| `/testimonios-en` index | 1 | 1 | None |

**Collection pages (`/p/[username]/[slug]`):** The sitemap.ts code does not generate entries for collection pages at all. If these pages are publicly accessible, indexable, and have unique content, they should be in the sitemap. Add a Supabase query similar to the profile pages query.

**Mini site pages (`/s/[username]`):** Only 1 profile page is in the sitemap (the admin account `edmondbk88`). The code queries for non-free plan users with usernames. If there are more paid users, they should appear automatically as they subscribe.

### 6.2 Sitemap Does Not Need a Sitemap Index (Yet)

| Metric | Value | Limit | Status |
|--------|-------|-------|--------|
| URLs | 1,414 | 50,000 | PASS |
| File size | 562KB | 50MB | PASS |

However, a sitemap index would improve organization:
- `sitemap-core.xml` -- static pages (ES + EN)
- `sitemap-blog.xml` -- blog articles (ES + EN)
- `sitemap-templates.xml` -- widget + minisite templates
- `sitemap-industries.xml` -- industry pages
- `sitemap-cities.xml` -- city and city+industry pages
- `sitemap-profiles.xml` -- dynamic /s/ and /p/ pages

This is **recommended but not required** at current scale. It becomes necessary if city+industry pages grow beyond current 400.

---

## 7. Google Guidelines Compliance

| Guideline | Status | Notes |
|-----------|--------|-------|
| Valid XML | PASS | |
| Under 50K URLs | PASS | 1,414 URLs |
| Under 50MB uncompressed | PASS | 562KB |
| URLs return 200 | PASS | All sampled sitemap URLs return 200 |
| No noindexed URLs | ASSUMED PASS | Not verified server-side |
| No redirected URLs | ASSUMED PASS | No 301/302 detected in samples |
| Lastmod accuracy | FAIL | 1,000 identical dates, 190 future dates |
| Canonical URLs match | NOT VERIFIED | Should check canonical tags match sitemap URLs |
| Sitemap referenced in robots.txt | PASS | Line 31 of robots.txt |
| UTF-8 encoding | PASS | |
| Absolute URLs | PASS | All use https://opinafy.com |
| HTTPS URLs | PASS | |

---

## 8. Recommendations (Priority Order)

### CRITICAL -- Fix Immediately

1. **Remove future-dated blog articles from sitemap** (190 URLs). In `sitemap.ts`, filter blog articles:
   ```typescript
   const now = new Date()
   blogArticles.filter(a => new Date(a.date) <= now)
   ```

2. **Fix identical lastmod for 1,000 URLs.** Either:
   - Use actual content creation/modification dates per page
   - Or remove lastmod entirely for pages that share the same date (omitting is better than lying)

### HIGH -- Fix This Week

3. **Add hreflang to city/city+industry pages** (422 URLs). Even if no EN equivalent exists, add self-referencing `hreflang="es"`:
   ```typescript
   alternates: { languages: { es: url, 'x-default': url } }
   ```

4. **Audit city+industry page content quality.** If pages are template-based with only city/industry swapped, either:
   - Remove all 400 from sitemap and noindex them
   - Or add genuinely unique content (local testimonials, local stats, local business directories)

5. **Plan English slug migration for EN pages.** Spanish slugs on `/en/` paths hurt English SEO.

### MEDIUM -- Fix This Month

6. **Remove priority and changefreq tags.** They are ignored by Google and add ~170KB of unnecessary XML.

7. **Add /p/[username]/[slug] collection pages to sitemap** (requires Supabase query for public collections).

8. **Fix static page lastmod.** Replace `new Date()` with a fixed date that only updates when content changes.

### LOW -- Backlog

9. **Consider sitemap index** for better organization as the site grows.

10. **Monitor crawl stats** in Google Search Console to verify lastmod fixes improve crawl efficiency.

---

## 9. URL Category Breakdown

| Category | Count | Hreflang | Lastmod Quality |
|----------|-------|----------|-----------------|
| Static pages (ES) | 29 | YES | Build timestamp |
| Static pages (EN) | 35 | YES | Build timestamp |
| Blog articles (ES) | 160 | YES | Article dates (some future) |
| Blog articles (EN) | 160 | YES | Article dates (some future) |
| Widget templates (ES) | 100 | YES | Fixed 2026-03-18 |
| Widget templates (EN) | 100 | YES | Fixed 2026-03-18 |
| Minisite templates (ES) | 30 | YES | Fixed 2026-03-18 |
| Minisite templates (EN) | 30 | YES | Fixed 2026-03-18 |
| Industry pages (ES) | 160 | YES | Fixed 2026-03-18 |
| Industry pages (EN) | 160 | YES | Fixed 2026-03-18 |
| City pages | 20 | NO | Fixed 2026-03-18 |
| City+Industry pages | 400 | NO | Fixed 2026-03-18 |
| Help guides (ES) | 10 | YES | Build timestamp |
| Help guides (EN) | 10 | YES | Build timestamp |
| Comparison pages (ES) | 3 | YES | Build timestamp |
| Guides (ES) | 6 | YES | Build timestamp |
| Profile pages (/s/) | 1 | NO | User updated_at |
| **TOTAL** | **1,414** | | |

---

## 10. Source File Reference

The sitemap is generated by:
- **`/Applications/MAMP/htdocs/opinafy/src/app/sitemap.ts`** -- Main generator (689 lines)

Data sources:
- `src/lib/blog-data.ts` -- ES blog articles
- `src/lib/blog-data-en.ts` -- EN blog articles
- `src/lib/widget-templates.ts` -- 100 widget templates
- `src/lib/minisite-templates.ts` -- 30 minisite templates
- `src/lib/industry-data.ts` -- 160 industry slugs
- `src/lib/industry-data-en.ts` -- 160 EN industry slugs (same Spanish slugs)
- `src/lib/cities-data.ts` -- 20 cities + 20 top industry slugs
- `src/lib/help-data.ts` / `src/lib/help-data-en.ts` -- 10 help guides each
- Supabase `profiles` table -- Dynamic profile pages
