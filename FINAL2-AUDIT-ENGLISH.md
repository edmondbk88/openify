# FINAL English Text Audit Report

**Date:** 2026-03-30
**Scope:** All English-facing files in `/src/` -- pages, components, lib data files, i18n
**Status:** REPORT ONLY -- no fixes applied

---

## CRITICAL: Broken URLs (3 instances)

### 1. Concatenated URL in `schema.ts` (STILL NOT FIXED)
- **File:** `src/lib/schema.ts` line 36
- **Text:** `'https://opinafy.comhttps://rckjevsqxkfixkdloqjv.supabase.co/storage/v1/object/public/logos/site/edmond-bojalil.jpg'`
- **Impact:** Invalid JSON-LD for Organization schema across ALL pages (both ES and EN). Google cannot parse the founder image.

### 2. Same concatenated URL in English About page
- **File:** `src/app/(en)/en/about/page.tsx` line 110
- **Text:** Same broken URL duplicated in the local `orgJsonLd` override.

### 3. Same concatenated URL in Spanish About page
- **File:** `src/app/(marketing)/sobre/page.tsx` line 109
- **Text:** Same pattern.

**Fix for all 3:** Remove `https://opinafy.com` prefix -- the Supabase URL is already absolute.

---

## HIGH: Currency Inconsistency ($5/month on English page)

### 4. Dollar sign instead of Euro on Features page
- **File:** `src/app/(en)/en/features/page.tsx` line 154
- **Text:** `'Pricing from $5/month'`
- **Should be:** `'Pricing from EUR5/month'` or `'Pricing from 5 euro/month'`
- **Impact:** Misleading -- Opinafy charges in EUR, not USD. This is a differentiator section visible to all EN visitors.

---

## HIGH: Template Count Inconsistency ("65" vs "100+")

### 5. Features page says "over 65" while everywhere else says "100+"
- **File:** `src/app/(en)/en/features/page.tsx` line 81
- **Text:** `'Choose from over 65 professionally designed templates...'`
- **Contradicts:** Same page line 56 says `{ value: '100+', label: 'Customizable templates' }`, line 79 says `'100+ Customizable Templates'`

### 6. Agencies page says "65+"
- **File:** `src/app/(en)/en/agencies/page.tsx` line 95
- **Text:** `'Choose from 65+ templates...'`

### 7. Homepage says "100" (no plus sign)
- **File:** `src/app/(en)/en/page.tsx` line 153
- **Text:** `'100 Templates + Mini Site'` and line 155: `'100 widget templates (incl. 35 creative)...'`
- **Inconsistent with:** "100+" used on features, templates, about, press, case-studies, and changelog pages.

**Recommendation:** Standardize to "100+" everywhere.

---

## HIGH: Plan Name "Starter" Used Incorrectly

### 8. Comparison pages reference "Starter" plan
- **File:** `src/app/(en)/en/compare/opinafy-vs-senja/page.tsx` line 211
- **Text:** `'Pro / Starter'` -- implies Opinafy has a "Starter" plan
- **File:** `src/app/(en)/en/compare/opinafy-vs-testimonial-to/page.tsx` line 248
- **Text:** `'Starter / Pro'`
- **Issue:** Opinafy's plan is called "Mini Site", not "Starter". In the comparison tables, "Starter" appears to label the competitor's plan but it is ambiguously placed in the plan-tier row alongside Opinafy's EUR9/mo Pro plan.

---

## MEDIUM: Spanish Slugs in English URLs (by design, but noted)

### 9. Blog article slugs are in Spanish
- All 161 English blog articles use Spanish slugs (e.g., `/en/blog/que-son-testimonios-clientes-importancia`)
- Internal links within blog content also use these Spanish slugs (e.g., `href="/en/blog/como-recopilar-testimonios-clientes-estrategias"`)
- **Impact:** SEO -- English users see Spanish URLs. Not ideal but noted as known.

### 10. Industry page slugs are in Spanish
- All industry pages use Spanish slugs (e.g., `/en/testimonials-for/restaurantes`, `/en/testimonials-for/abogados`)
- **Impact:** Same as above -- English URLs with Spanish slugs.

---

## MEDIUM: Spanish Category Names Displayed in English Template Cards

### 11. Template category badges show Spanish names
- **File:** `src/components/landing/template-card-en.tsx` lines 8-16
- **Badge color map uses Spanish keys:** `Minimalista`, `Corporativo`, `Colorido`, `Oscuro`, `Moderno`, `Elegante`, `Divertido`, `Profesional`
- **Issue:** These Spanish category names are displayed to English users in the template badge. The `template.category` value comes from `widget-templates.ts` which stores categories in Spanish.
- **Impact:** English users see "Minimalista", "Corporativo", etc. as category labels on template cards.

---

## MEDIUM: Spanish Code Comments in English i18n Section

### 12. Spanish section names in English translation comments
- **File:** `src/lib/i18n.ts` line 588
- **Comment:** `// Collection / Recopilar` (in the `en:` section)
- **File:** `src/lib/i18n.ts` line 605
- **Comment:** `// Request / Solicitar` (in the `en:` section)
- **Impact:** Developer-only, no user impact. Minor code hygiene issue.

---

## MEDIUM: Spanish Key Names in collection-translations.ts

### 13. Spanish key names used for English translations
- **File:** `src/lib/collection-translations.ts`
- Keys like `graciasCheckInbox`, `graciasVerificationSent`, `verificadoTitle`, `verificadoSuccess`, etc. are in Spanish
- The English VALUES are correctly translated, but the key names are Spanish (gracias, verificado)
- **Impact:** Developer-only. No user-facing issue.

---

## MEDIUM: "Sign Out" vs "Sign out" Capitalization Inconsistency

### 14. Inconsistent capitalization of "Sign Out/out"
- **File:** `src/lib/i18n.ts` line 516: `'nav.logout': 'Sign Out'` (capital O)
- **File:** `src/lib/i18n.ts` line 988: `'header.logout': 'Sign out'` (lowercase o)
- **Impact:** Minor UI inconsistency between sidebar and header dropdown.

---

## LOW: Screenshot Image Files Have Spanish Names

### 15. Screenshot filenames in Spanish on English pages
- **Files:** `src/app/(en)/en/features/page.tsx` lines 441, 474
- **URLs:** `.../screenshots/plantillas.png`, `.../screenshots/plantilla-detalle.png`
- **Also in:** `src/app/(en)/en/about/page.tsx` lines 288, 295 and `src/app/(en)/en/page.tsx` line 1021
- **Impact:** No user-visible impact (alt text is in English), but the filename `plantillas` is Spanish.

---

## LOW: Health Score Links Have Spanish Fallback Paths

### 16. Spanish path mapping in health score client
- **File:** `src/app/(en)/en/health-score/health-score-en-client.tsx` line 148
- **Code:** Maps `/caracteristicas` to `/features`, `/plantillas` to `/templates`, `/verificado-badge` to `/verified`
- **Issue:** The `check.ctaLink` values come from Spanish data. The translation mapping handles most cases but any unmapped Spanish paths would leak through as-is.

---

## LOW: hreflang x-default Points to Spanish

### 17. x-default canonical points to Spanish version on all English pages
- Multiple files (pricing, templates, features, etc.) set `'x-default': 'https://opinafy.com/...'` pointing to the Spanish version
- **Example:** `src/app/(en)/en/pricing/page.tsx` line 18: `'x-default': 'https://opinafy.com/precios'`
- **Note:** This is a valid SEO choice if the primary audience is Spanish. Not necessarily an error, but noted for awareness.

---

## LOW: Blog Articles Missing hreflang Alternates

### 18. English blog article pages have no Spanish hreflang alternates
- **File:** `src/app/(en)/en/blog/[slug]/page.tsx`
- Only sets `canonical` for the English version, no `languages` alternates pointing to the Spanish counterpart
- **Impact:** Google may not associate the English and Spanish versions of the same article.

---

## LOW: Industry Pages Missing hreflang Alternates

### 19. English industry pages have no Spanish hreflang alternates
- **File:** `src/app/(en)/en/testimonials-for/[slug]/page.tsx`
- Same issue as blog -- only `canonical` set, no `languages` alternates.

---

## VERIFIED CLEAN (No Issues Found)

### i18n.ts English section
- All 500+ English translation values checked. No Spanish text found in the `en:` section. All translations are grammatically correct English.

### collection-translations.ts English section
- All 60+ English values are properly translated. No Spanish text in English values.

### help-data-en.ts
- All help guides checked. No Spanish characters or untranslated text found. No accented characters. Content is clean English.

### industry-data-en.ts
- All industry page content checked for Spanish characters. Only "Pena" (a surname) contains accented character -- this is correct as it is a proper name. All other content is clean English.

### blog-data-en.ts
- All 161 article titles are in English (no Spanish titles)
- All article content is in English (no Spanish paragraphs)
- All meta descriptions are in English
- Internal links correctly use `/en/blog/...` paths (though slugs are Spanish)
- **Slugs are Spanish** (noted above in issue #9) but article content is fully English.

### Pricing page (en)
- Uses EUR symbol correctly throughout
- Plan names are correct: Free, Mini Site, Pro, Business
- All feature text is in English
- FAQ content is well-written English

### Navbar and Footer (English)
- All links point to `/en/...` paths correctly
- No Spanish text present
- "Sign In" and "Get Started Free" consistently used

### Legal pages (en)
- Legal, Privacy, Terms, Cookies pages all in proper English
- No Spanish text found

---

## Summary of Issues by Severity

| Severity | Count | Description |
|----------|-------|-------------|
| CRITICAL | 3 | Broken concatenated URL in schema.ts and about pages |
| HIGH | 4 | Currency ($5 vs EUR), template count (65 vs 100+), wrong plan name (Starter) |
| MEDIUM | 4 | Spanish template categories shown to EN users, Spanish comments, key names, capitalization |
| LOW | 5 | Spanish filenames, fallback paths, missing hreflang alternates |

**Total issues found: 19** (including 3 instances of the same broken URL)

---

## Priority Fix Order

1. Fix the broken `opinafy.comhttps://` URL in schema.ts and both about pages (CRITICAL -- affects structured data sitewide)
2. Change `$5/month` to EUR on features page (HIGH -- misleading pricing)
3. Standardize template count to "100+" everywhere (HIGH -- inconsistent messaging)
4. Translate template category badges to English in template-card-en.tsx (MEDIUM -- Spanish shown to EN users)
5. Add hreflang alternates to blog and industry dynamic pages (LOW -- SEO improvement)
