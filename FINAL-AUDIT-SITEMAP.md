# Sitemap Final Audit -- opinafy.com

**Date:** 2026-03-25
**URL:** https://opinafy.com/sitemap.xml
**Previous grades:** C+ --> B-
**Current grade:** B+

---

## Summary

| Metric | Value | Status |
|--------|-------|--------|
| Total URLs | 1,418 | PASS |
| File size | 614 KB | PASS (well under 50 MB) |
| URL limit | 1,418 / 50,000 | PASS |
| XML validity | Valid | PASS |
| HTTP status | 200 | PASS |

---

## Check 1: No Future lastmod Dates

**Result: PASS**

All lastmod dates are on or before 2026-03-25. The latest date found is
2026-03-25T00:33:32.473Z (build timestamp) and 2026-03-23 (latest blog article).

---

## Check 2: Blog Dates Spread Oct 2025 - Mar 2026

**Result: PASS**

- Earliest blog date: 2025-10-15
- Latest blog date: 2026-03-23
- Unique blog dates: 157 distinct dates across 320 articles (160 ES + 160 EN)
- Distribution is well spread across the 6-month range

---

## Check 3: No Identical lastmod on Majority of URLs

**Result: MIXED -- minor issue**

- 97 URLs share the build timestamp (2026-03-25T00:33:32.472Z / .473Z)
  -- these are static/structural pages where "now" is used as lastmod
- 321 blog URLs have individually distinct dates (GOOD)
- 1,000 URLs have NO lastmod at all (templates, city pages, industry pages)

The 97 identical-timestamp pages are only 6.8% of total URLs. This is acceptable
but not ideal. Missing lastmod on 1,000 URLs is technically fine (optional field)
but adding real dates would improve crawl prioritization.

**Recommendation:** Use real modification dates instead of `new Date()` for static
pages. Even a hardcoded "last edited" date per page is better than build time.

---

## Check 4: City/Industry Pages Have hreflang

**Result: PASS**

- City pages (/testimonios-en/*): Have self-referencing `es` + `x-default` (correct, these are Spanish-only pages)
- Industry pages (/testimonios-para/*): Have `es` + `en` + `x-default` with proper EN counterparts
- EN industry pages (/en/testimonials-for/*): Have matching `es` + `en` + `x-default`

---

## Check 5: /sobre and /en/about in Sitemap

**Result: PASS**

Both pages are present:
- `https://opinafy.com/sobre` -- found with hreflang pointing to /en/about
- `https://opinafy.com/en/about` -- found with hreflang pointing back to /sobre

---

## Check 6: /integraciones/zapier and /en/integrations/zapier in Sitemap

**Result: PASS**

Both pages are present:
- `https://opinafy.com/integraciones/zapier` -- found with bilingual hreflang
- `https://opinafy.com/en/integrations/zapier` -- found with bilingual hreflang

---

## Check 7: Total URL Count

**Result: 1,418 URLs**

Breakdown:
- Static pages (ES): ~33
- Static pages (EN): ~33
- Help guides (ES + EN): varies
- Blog articles: 320 (160 ES + 160 EN)
- Widget templates (ES + EN): varies
- Mini-site templates (ES + EN): varies
- Industry pages (ES): 160 (+ 1 index)
- Industry pages (EN): 160 (+ 1 index)
- City pages: 20 (+ 1 index)
- City+industry pages: 400
- Profile pages: dynamic from Supabase

---

## Check 8: Bidirectional hreflang Pairs (es <-> en <-> x-default)

**Result: PASS**

Verified bidirectional pairs on:
- /sobre <-> /en/about (both point to each other with es, en, x-default)
- /testimonios-para/restaurantes <-> /en/testimonials-for/restaurantes (bidirectional)
- /integraciones/zapier <-> /en/integrations/zapier (bidirectional)
- City pages: self-referencing es + x-default only (correct -- no EN equivalent)
- x-default consistently points to the Spanish version (correct for a Spanish-first site)

---

## Check 9: HTTP Status Codes (10 URL Sample)

**Result: PASS -- all 200**

| URL | Status |
|-----|--------|
| https://opinafy.com | 200 |
| https://opinafy.com/sobre | 200 |
| https://opinafy.com/en/about | 200 |
| https://opinafy.com/blog | 200 |
| https://opinafy.com/integraciones/zapier | 200 |
| https://opinafy.com/en/integrations/zapier | 200 |
| https://opinafy.com/testimonios-en/madrid | 200 |
| https://opinafy.com/testimonios-para/restaurantes | 200 |
| https://opinafy.com/en/testimonials-for/restaurantes | 200 |
| https://opinafy.com/plantillas | 200 |

---

## Check 10: Size Limits

**Result: PASS**

- File size: 614 KB (limit: 50 MB) -- 1.2% of limit
- URL count: 1,418 (limit: 50,000) -- 2.8% of limit

No sitemap index needed.

---

## Quality Gate: Location/Programmatic Pages

**WARNING TRIGGERED**

| Page type | Count | Threshold |
|-----------|-------|-----------|
| City pages | 20 | -- |
| City+industry pages | 400 | -- |
| Industry pages (ES) | 160 | -- |
| Industry pages (EN) | 160 | -- |
| **Total programmatic** | **740** | HARD STOP at 50+ |

At 740 programmatic pages, this is well above the 50+ hard stop threshold. However,
the source code (`city-industry-content.ts`) indicates rich city profiles and
industry-specific content are being generated, and industry pages have bilingual
hreflang with real translations. This qualifies as the "safe at scale" pattern IF:

1. Each city+industry page has 60%+ unique content (not just city name swapped)
2. Industry pages have genuinely distinct content per industry
3. City profiles include real local data (not template text)

**Risk level:** Medium. The 400 city+industry combo pages are the highest risk area.
Google's doorway page algorithm could flag these if content is thin. The 160+160
industry pages are lower risk since they have bilingual counterparts with distinct slugs.

---

## Issues Found (Severity Ranked)

### INFO -- Deprecated Tags Present

All 1,418 URLs include `<changefreq>` and `<priority>` tags. Google ignores both.
Removing them would reduce file size by approximately 40% and simplify the sitemap
generator code.

**Source:** `src/app/sitemap.ts` -- every entry uses `changeFrequency` and `priority`.

### LOW -- 97 Static Pages Share Identical Build Timestamp

Static pages use `new Date()` which produces the build-time timestamp. This gives
Google no useful signal about when content actually changed.

### LOW -- 1,000 URLs Missing lastmod

Template pages, city pages, and industry pages have no lastmod. While optional,
adding dates helps Google prioritize crawling.

### MEDIUM -- 740 Programmatic Pages Need Content Quality Review

Ensure each city+industry page passes the 60% unique content threshold. This is
the single biggest penalty risk in the sitemap.

---

## Improvements Since Last Audit (B-)

1. hreflang implementation is correct and bidirectional -- FIXED
2. /sobre and /en/about now included -- FIXED
3. /integraciones/zapier pages now included -- FIXED
4. Blog dates properly spread (not all identical) -- FIXED
5. No future dates -- CLEAN
6. XML validates cleanly -- MAINTAINED
7. All sampled URLs return 200 -- MAINTAINED

---

## Remaining Items to Reach A-

1. Remove `changefreq` and `priority` from all entries (INFO -> clean)
2. Replace `new Date()` with real last-edited dates for static pages
3. Add `lastmod` to template, city, and industry pages
4. Audit city+industry page content for 60%+ uniqueness
5. Consider adding `<image:image>` tags for pages with hero images

---

## Grade: B+

| Category | Score | Notes |
|----------|-------|-------|
| XML validity | 10/10 | Clean parse |
| URL coverage | 9/10 | All required pages present |
| hreflang | 10/10 | Bidirectional, correct x-default |
| lastmod quality | 6/10 | 70% of URLs missing or identical dates |
| Size/limits | 10/10 | Well within bounds |
| HTTP status | 10/10 | All sampled URLs return 200 |
| Deprecated tags | 8/10 | Still present but harmless |
| Content quality risk | 6/10 | 740 programmatic pages need review |

**Weighted average: B+** (up from B-)

To reach A-: fix lastmod dates and remove deprecated tags.
To reach A: also pass a manual content uniqueness audit on city+industry pages.
