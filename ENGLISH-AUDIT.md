# English Content Audit Report

**Date:** 2026-03-26
**Scope:** All English-facing files in `src/`
**Status:** REPORT ONLY - No fixes applied

---

## Summary

- **Total issues found:** 19
- **Critical (user-visible bugs):** 5
- **Moderate (inconsistencies/inaccuracies):** 8
- **Minor (style/polish):** 6
- **Spanish text on English pages:** 0 (all UI text is properly translated)
- **i18n.ts English section:** Clean - all values properly translated
- **collection-translations.ts English section:** Clean
- **Grammar/spelling errors:** 0 significant ones found

---

## CRITICAL ISSUES

### 1. Broken URL in Schema (about page + schema.ts)

**Files:**
- `src/app/(en)/en/about/page.tsx` (line 110)
- `src/lib/schema.ts` (line 36)
- `src/app/(marketing)/sobre/page.tsx` (line 109)

**Issue:** Malformed founder image URL in JSON-LD structured data:
```
https://opinafy.comhttps://rckjevsqxkfixkdloqjv.supabase.co/storage/v1/object/public/logos/site/edmond-bojalil.jpg
```
Should be just the Supabase URL without the `https://opinafy.com` prefix. This produces invalid structured data that Google will reject.

---

### 2. Plan names inconsistent with actual plans in help-data-en.ts

**File:** `src/lib/help-data-en.ts`

The help guides reference a **"Starter"** plan that does not exist. The actual plans are: Free, Mini Site, Pro, Business.

- **Line 63:** `Starter: 3 projects, up to 50 testimonials per project` -- should be "Mini Site" or "Pro"
- **Line 602:** `All paid plans: Audio recording enabled (Starter, Pro, and Business).` -- "Starter" should be "Mini Site"
- **Line 797:** `Starter Plan (5 EUR/month)` with `3 projects, 50 testimonials per project` -- This doesn't match any real plan. The Mini Site plan is 5 EUR but has 1 project/20 testimonials. The details listed (3 projects, 50 testimonials) don't match any plan.

The entire "Billing and plans" help guide (lines 783-896) has incorrect plan details that don't match the actual pricing on the pricing page.

---

### 3. Spanish URL path in English help content

**File:** `src/lib/help-data-en.ts` (line 439)

```
The direct URL is: /proyectos/your-slug/analytics
```

This is the Spanish dashboard URL. For an English help guide, this should reference the English dashboard path or be noted as a dashboard URL (dashboard URLs may be language-agnostic, but `/proyectos/` is Spanish).

---

### 4. Currency inconsistency: $ vs EUR

**File:** `src/app/(en)/en/features/page.tsx` (line 154)

```
'Pricing from $5/month'
```

All other pricing references on English pages use **EUR** (the actual currency). This single instance uses **$** (dollar sign). Should be `Pricing from EUR 5/month` or `Pricing from 5 EUR/month` for consistency.

---

### 5. Inconsistent platform import count: "7" vs "8"

**Files:**
- `src/app/(en)/en/page.tsx` (line 173): `'Import from 7 Platforms'`
- `src/app/(en)/en/page.tsx` (line 695): `'Import from 7 platforms'`
- `src/app/(en)/en/features/page.tsx` (line 201): `'Import from 8 Platforms'`

The home page says 7 platforms, the features page says 8. The features page lists: Google Maps, TripAdvisor, Trustpilot, Facebook, Yelp, Capterra, G2, and Clutch (8 total). The home page lists 7 (Google Maps, TripAdvisor, Trustpilot, Facebook, Yelp, Capterra, G2). Pick one number and be consistent.

---

## MODERATE ISSUES

### 6. Template count inconsistency: "over 65" vs "100+"

**File:** `src/app/(en)/en/features/page.tsx` (line 81)

```
Choose from over 65 professionally designed templates
```

But the same page's hero says "100+ Customizable templates" (line 79 title) and other pages consistently say "100+ templates". The description contradicts its own title.

---

### 7. Spanish slugs used for English blog articles

**File:** `src/lib/blog-data-en.ts`

All 160 English blog articles use Spanish slugs in their URLs:
- `que-son-testimonios-clientes-importancia` (should be something like `what-are-customer-testimonials`)
- `como-recopilar-testimonios-clientes-estrategias`
- `prueba-social-que-es-como-usarla`
- etc.

This means English blog URLs look like: `/en/blog/que-son-testimonios-clientes-importancia` -- Spanish slugs in English pages. This hurts English SEO and confuses English-speaking users.

---

### 8. Spanish slugs used for English industry pages

**File:** `src/lib/industry-data-en.ts`

All industry pages use Spanish slugs:
- `restaurantes` (should be `restaurants`)
- `clinicas-medicas` (should be `medical-clinics`)
- `abogados` (should be `lawyers`)
- `dentistas` (should be `dentists`)
- `peluquerias` (should be `hair-salons`)
- etc.

English URLs: `/en/testimonials-for/restaurantes` -- Spanish slug on English page.

---

### 9. Screenshot file uses Spanish filename

**Files:** Multiple English pages reference:
- `src/app/(en)/en/about/page.tsx` (lines 288, 295)
- `src/app/(en)/en/features/page.tsx` (line 441)
- `src/app/(en)/en/page.tsx` (line ~1021)

All reference `plantillas.png` (Spanish for "templates") and `plantilla-detalle.png` as screenshot filenames. While not user-visible in the URL bar, the alt text is in English and the filenames could affect image SEO.

---

### 10. Health Score client has hardcoded Spanish path fallback logic

**File:** `src/app/(en)/en/health-score/health-score-en-client.tsx` (line 148)

```tsx
<Link href={`/en${check.ctaLink === '/caracteristicas' ? '/features' : check.ctaLink === '/plantillas' ? '/templates' : check.ctaLink === '/verificado-badge' ? '/verified' : check.ctaLink}`}
```

This translates Spanish paths to English on the fly, but only handles 3 specific paths. Any other Spanish path from the health score check data would be passed through untranslated (e.g., if `ctaLink` is `/precios`, it would become `/en/precios` instead of `/en/pricing`).

---

### 11. Missing Navbar/Footer on compare page

**File:** `src/app/(en)/en/compare/page.tsx`

The compare page does not include `<NavbarEn />` or `<FooterEn />` components, unlike all other English public pages. The compare sub-pages may inherit from a layout, but the main compare listing page appears to lack navigation.

---

### 12. Blog canonical URL is relative, not absolute

**File:** `src/app/(en)/en/blog/page.tsx` (line 23)

```tsx
canonical: '/en/blog',
```

All other pages use absolute URLs like `https://opinafy.com/en/blog`. This relative canonical may work due to `metadataBase`, but it's inconsistent with every other page.

---

### 13. Email address "hola@opinafy.com" on English pages

**Files:**
- `src/components/landing/footer-en.tsx` (line 98)
- `src/app/(en)/en/contact/page.tsx` (line 74)
- `src/app/(en)/en/legal/page.tsx` (line 42)
- `src/lib/help-data-en.ts` (line 869)

"hola" is Spanish for "hello". For English users, `hello@opinafy.com` or `support@opinafy.com` would be more appropriate. This is a business decision -- using a single email is simpler operationally, but it reads as Spanish on English pages.

---

## MINOR ISSUES

### 14. Inconsistent capitalization of "Sign In" vs "Sign in"

**Files:**
- `src/components/landing/navbar-en.tsx` (line 55): `Sign In` (title case)
- `src/app/(en)/en/login/page.tsx` (line 56): `Sign In` (title case)
- `src/lib/i18n.ts` (line 988): `Sign out` (sentence case)

The i18n uses "Sign out" (sentence case) while the navbar/login use "Sign In" (title case). Should be consistent.

---

### 15. Help data references "Add testimonial" button that may not exist

**File:** `src/lib/help-data-en.ts` (line 196)

```html
Go to your project and click "Add testimonial".
```

The actual dashboard button text (from i18n.ts) is `Import testimonials`. This could confuse users if the button text doesn't match the help documentation.

---

### 16. Inconsistent use of "widget" capitalization

Across English pages, "widget" is sometimes capitalized ("Widget") and sometimes not. In section headers and titles it's often capitalized, but in body text it's lowercase. This is minor but could be standardized.

---

### 17. Features page says "7 layouts" but also mentions "Marquee" as 7th

**File:** `src/lib/help-data-en.ts` (line 347)

```
The 7 available layouts
```

Lists: Carousel, Grid, Wall, Single, Badge, Popup FOMO, Marquee = 7 total.

But `src/app/(en)/en/about/page.tsx` (line 85) says `{ value: '7', label: 'Different layouts' }` -- this is correct, just noting the count for verification.

---

### 18. Blog articles link to Spanish-slug blog pages from within English content

**File:** `src/lib/blog-data-en.ts` (line 29)

```html
<a href="/en/blog/como-recopilar-testimonios-clientes-estrategias">how to collect customer testimonials</a>
```

While these links work (because the English blog uses Spanish slugs), the visible URL path is in Spanish. This is a consequence of issue #7 above.

---

### 19. Press page, Case Studies page, Downloads page -- not audited

**Files:**
- `src/app/(en)/en/press/page.tsx`
- `src/app/(en)/en/case-studies/page.tsx`
- `src/app/(en)/en/downloads/page.tsx`

These pages exist but were not fully audited in this pass. They should be reviewed for the same patterns.

---

## CLEAN FILES (No Issues Found)

- `src/lib/i18n.ts` -- All English translations are correct and complete
- `src/lib/collection-translations.ts` -- English section is clean
- `src/components/landing/navbar-en.tsx` -- Clean
- `src/components/landing/footer-en.tsx` -- Clean (except hola@ email, issue #13)
- `src/components/contact-form-en.tsx` -- Clean
- `src/app/(en)/en/layout.tsx` -- Clean
- `src/app/(en)/en/login/page.tsx` -- Clean
- `src/app/(en)/en/register/page.tsx` -- Clean
- `src/app/(en)/en/pricing/page.tsx` -- Clean
- `src/app/(en)/en/legal/page.tsx` -- Clean
- `src/app/(en)/en/contact/page.tsx` -- Clean

---

## RECOMMENDATIONS (Priority Order)

1. **Fix broken schema URL** (Issue #1) -- Immediate SEO impact
2. **Fix plan names in help-data-en.ts** (Issue #2) -- Users get wrong info
3. **Fix currency $ to EUR** (Issue #4) -- Misleading pricing
4. **Fix import count inconsistency** (Issue #5) -- Confusing
5. **Fix template count "65" vs "100+"** (Issue #6) -- Contradicts itself
6. **Create English slugs for blog articles** (Issue #7) -- Major SEO improvement
7. **Create English slugs for industry pages** (Issue #8) -- Major SEO improvement
8. **Fix health score path translation** (Issue #10) -- Potential broken links
9. **Add navbar/footer to compare page** (Issue #11) -- UX issue
10. **Fix blog canonical to absolute URL** (Issue #12) -- Minor SEO

---

*Audit performed by scanning all files in `src/app/(en)/`, `src/lib/*-en.ts`, `src/lib/i18n.ts`, `src/lib/collection-translations.ts`, and `src/components/landing/*-en.tsx`.*
