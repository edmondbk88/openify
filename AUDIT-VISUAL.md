# Visual SEO Audit - Opinafy.com

**Date:** 2026-03-24
**Auditor:** Claude (Automated Visual Analysis)
**Pages analyzed:** Homepage (ES/EN), Plantillas, Precios
**Viewports tested:** Desktop (1920x1080), Tablet (768x1024), Mobile (375x812)

---

## Summary

Opinafy presents a clean, professional design with solid Tailwind CSS implementation. The site scores well on fundamental visual SEO: clear H1 headings, visible CTAs above the fold, proper responsive breakpoints, and correct use of `next/image` for logo assets. There are several actionable improvements that can boost conversion, accessibility, and mobile UX.

**Overall Grade: B+**

---

## 1. Above-the-Fold Analysis

### Homepage (ES) - opinafy.com
- **H1 visible:** Yes. "Convierte las opiniones de tus clientes en tu mejor herramienta de ventas" is prominent and above the fold on all viewports.
- **Primary CTA visible:** Yes. "Empezar Gratis" button (indigo-600) is clearly visible on desktop and mobile.
- **Secondary CTA:** "Ver Plantillas" provides a low-commitment alternative. Good.
- **Value proposition clarity:** Strong. The subtitle explains what the product does in plain Spanish.
- **Hero image/demo:** Widget mockup with 3 sample testimonial cards provides a visual preview of the product. Effective.

### Homepage (EN) - opinafy.com/en
- **H1 visible:** Yes. "Turn customer opinions into your best sales tool" is above the fold.
- **CTAs visible:** Yes. "Get Started Free" + "View Templates" both visible.
- **Parity with ES version:** Layout is identical, well-mirrored.

### Plantillas - opinafy.com/plantillas
- **H1 visible:** Yes. "100 Plantillas de Testimonios Listas para Usar" is strong and keyword-rich.
- **Above-fold content:** Badge "Galeria de Plantillas", H1, subtitle, and 3 feature bullets visible.
- **CTA above fold:** No explicit signup CTA above the fold on this page. The page relies on content discovery.

### Precios - opinafy.com/precios
- **H1 visible:** Yes. "Planes y Precios" is above the fold on desktop.
- **Pricing cards visible:** All 4 plans visible on desktop. On mobile, only the H1 and subtitle are above the fold -- pricing cards require scrolling.
- **"Mas Popular" badge:** Visible on the Pro plan card, drawing attention correctly.

**Issues found:**
1. MEDIUM - Pricing page mobile: excessive whitespace between the navbar and H1. The pricing cards are not visible without scrolling.
2. LOW - Plantillas page: no CTA button above the fold.

---

## 2. Mobile Responsiveness

### Navigation
- **Sticky header:** Yes (`sticky top-0 z-50`). Works on all pages.
- **Hamburger menu:** Yes, visible on mobile (md:hidden breakpoint). Accessible with `aria-label="Abrir menu"` and `aria-expanded` state.
- **Menu items:** 6 links + language switcher + login + CTA in mobile menu. Well-organized with dividers.

### Touch Targets
- **Hamburger button:** `p-2` on a 24x24 SVG = approximately 40x40px total. Slightly below the recommended 48x48px minimum.
- **CTA buttons:** `h-12` (48px) on hero, `h-10` (40px) on navbar, `h-11` (44px) on pricing cards. The navbar CTA at 40px is slightly small.
- **Mobile menu links:** `px-3 py-2` with `text-base` font gives adequate touch area.
- **Cookie banner buttons:** `px-5 py-2.5` / `px-6 py-2.5` -- adequate.

### Layout
- **No horizontal scroll:** Confirmed. `overflow-hidden` on hero section prevents blob overflow.
- **Text readability:** Base font uses Inter at standard sizes. Body text is `text-lg` (18px) on hero, `text-sm` (14px) on feature cards. Generally readable.
- **Responsive grid:** Properly collapses from multi-column to single-column. Pricing uses `sm:grid-cols-2 lg:grid-cols-4`, features use `sm:grid-cols-2 lg:grid-cols-3`.
- **Hero CTAs:** Stack vertically on mobile (`flex-col` then `sm:flex-row`). Full-width buttons. Good.

**Issues found:**
3. LOW - Hamburger button touch target is ~40px, below 48px recommendation. Add more padding.
4. LOW - Navbar CTA "Empezar Gratis" is h-10 (40px). Consider h-12 for consistency.

---

## 3. Visual Hierarchy & Design

### Color System
- **Primary:** Indigo-600 (#4F46E5) -- used consistently for CTAs, links, icons, badges.
- **Background:** White/gray-50 alternating sections. Clean separation.
- **Accent:** Green for verification badges (green-50/green-600/green-700). Yellow-400 for stars.
- **Gradient:** Hero uses `bg-gradient-to-br from-indigo-50 via-white to-purple-50`. Subtle, professional.

### Color Contrast (Accessibility)
- **Primary text:** Gray-900 on white -- WCAG AAA pass (contrast ratio ~17:1).
- **Body text:** Gray-600 on white -- contrast ratio ~5.7:1, passes WCAG AA (minimum 4.5:1).
- **Subtle text:** Gray-500 on white -- contrast ratio ~4.6:1, barely passes AA. Gray-400 text (~3.0:1) does NOT pass AA.
- **CTA button:** White on indigo-600 -- ~7.7:1, passes AAA.
- **Verified badge:** Green-700 on green-50 -- passes AA.

**Issues found:**
5. HIGH - Gray-400 text (`text-gray-400`) used for roles in testimonial cards ("Cliente verificado", etc.) and disclaimer text fails WCAG AA contrast. Change to gray-500 minimum.
6. MEDIUM - Gray-500 text on white is borderline AA (4.6:1). For critical information like pricing descriptions, consider gray-600.

### Typography
- **Font:** Inter loaded via `next/font/google` with `display: 'swap'` -- prevents FOIT (Flash of Invisible Text). Good.
- **Font variable:** `--font-inter` CSS variable set. `inter.className` applied to body.
- **Preconnect:** Google Fonts preconnect links present in `<head>`. Good for performance.
- **Heading scale:** Proper responsive scale (e.g., `text-4xl sm:text-5xl lg:text-6xl` for H1).
- **Font fallback in globals.css:** `font-family: Arial, Helvetica, sans-serif` -- this may conflict with the Inter font applied via className. The globals.css body style could be removed since Inter is applied via the body className.

**Issues found:**
7. LOW - `globals.css` sets `font-family: Arial, Helvetica, sans-serif` on body, which could flash before Inter loads despite the className override. Remove the CSS font-family declaration since Inter is applied via the body className.

---

## 4. Image Optimization

### next/image Usage
- **Logo:** Uses `next/image` with `priority` prop in navbar (correct for above-fold). Has `sizes` attribute for responsive loading.
- **Footer logo:** Uses `next/image` without `priority` (correct for below-fold).
- **Hero section:** No images -- uses CSS-styled HTML mockup cards. Excellent for performance.
- **Feature icons:** Inline SVGs. No image loading needed. Good.

### Missing Image Opportunities
- **No hero image/screenshot:** The widget mockup is HTML-only. While good for performance, a real product screenshot could increase trust and SEO (image search).
- **No `<img>` tags in landing components:** All image rendering uses `next/image`. Good practice.
- **OG image:** `/og.png` referenced in all metadata. Proper 1200x630 dimensions.

**Issues found:**
8. LOW - Consider adding a real product screenshot (optimized with `next/image`) to the hero area or features section for image SEO and visual appeal.

---

## 5. Trust Signals

### Current Trust Signals
- **Verified badges:** Green "Verificada" badges on sample testimonial cards in the hero. Communicates the verification feature.
- **Widget preview:** 3 sample testimonials in a browser mockup shows what the product looks like.
- **Pricing transparency:** All 4 plans visible with clear feature lists. "Sin sorpresas ni costes ocultos" messaging.
- **14-day money-back guarantee:** Present on pricing page with shield icon. Good trust builder.
- **Pricing FAQ:** 5 common questions addressed. Reduces friction.

### Missing Trust Signals
- **No customer count/metric:** No "Trusted by X businesses" or "X testimonials collected" counter.
- **No external logos:** No "As seen in" press logos or integration partner logos visible above the fold.
- **No real customer testimonials:** The homepage uses fabricated sample testimonials to demo the widget. There are no real quotes from actual Opinafy customers.
- **No security badges:** No SSL badge, GDPR compliance badge, or Stripe security badge visible.

**Issues found:**
9. HIGH - No real social proof for Opinafy itself. Add a "Trusted by X businesses" counter or real customer quotes.
10. MEDIUM - No partner/integration logos above the fold. The Integrations section exists but is below the fold.
11. MEDIUM - Add a security/trust bar (Stripe, GDPR, SSL) near the pricing section to reduce payment anxiety.

---

## 6. Pricing Page Specific Issues

### Desktop
- All 4 plans visible in a clean 4-column grid. Pro plan highlighted with indigo border, shadow, and "Mas Popular" badge. Good visual hierarchy.
- Comparison table below pricing cards provides detailed feature breakdown. Clean layout.

### Mobile
- Plans stack in single column as expected.
- However, there is significant blank space between the H1 header and the pricing cards.
- The `pt-16` on the wrapper div plus the navbar height plus section padding creates ~200px of whitespace before any actionable content.

### Tablet (768px)
- Plans display in 2-column grid (`sm:grid-cols-2`). Pro plan does not visually stand out as much in this layout.
- Navbar shows desktop layout at this width (md:flex), but the nav items and CTAs are quite cramped.

**Issues found:**
12. MEDIUM - Pricing mobile: reduce top padding. Users should see at least one pricing card above the fold.
13. LOW - Pricing page has duplicate heading structure: H1 "Planes y Precios" followed by H2 "Precios simples y transparentes" from the shared Pricing component. On the dedicated pricing page, this reads redundantly.
14. LOW - Tablet (768px) navbar is cramped. "AyudaES | EN" runs together with no spacing.

---

## 7. Cookie Banner Impact

- **Position:** Fixed bottom, full-width. Overlays content on all viewports.
- **Mobile impact:** On mobile, the cookie banner takes up approximately 120px of the 812px viewport. This covers the CTAs on the homepage -- both "Empezar Gratis" and "Ver Plantillas" buttons are partially or fully obscured by the cookie banner.
- **Language issue:** The cookie banner is in Spanish on the English (/en) page. It uses the same `CookieBanner` component. The text "Utilizamos cookies para mejorar tu experiencia..." should be translated for English visitors.

**Issues found:**
15. HIGH - Cookie banner on mobile obscures the hero CTAs. Users cannot click "Empezar Gratis" without first interacting with the cookie banner.
16. HIGH - Cookie banner is in Spanish on the English (/en) pages. Create an English version or parameterize the language.

---

## 8. SEO-Specific Visual Elements

### Structured Data
- Homepage: 5 JSON-LD scripts (Organization, WebSite, SoftwareApplication, Breadcrumb, FAQ). Comprehensive.
- Pricing page: WebPage, Breadcrumb, FAQPage schemas. Good.

### Heading Hierarchy
- Homepage: H1 in hero, H2s for each section (Features, How It Works, Testimonials, Pricing, FAQ). Correct.
- Pricing: H1 "Planes y Precios", then H2 "Precios simples y transparentes" (from shared component), H2 "Comparativa detallada", H2 "Garantia de devolucion", H2 "Preguntas frecuentes". Slightly redundant first H2 (see issue #13).
- Plantillas: H1 "100 Plantillas de Testimonios Listas para Usar". Keyword-optimized.

### Hreflang / Language Alternates
- Homepage: `es`, `en`, `x-default` alternates set. Correct.
- Pricing: `es` -> `/precios`, `en` -> `/en/pricing`, `x-default` -> `/precios`. Correct.

### Dark Mode Concern
- `globals.css` has `@media (prefers-color-scheme: dark)` that sets `--background: #0a0a0a` and `--foreground: #ededed`. However, the entire site uses hardcoded Tailwind classes (bg-white, text-gray-900, etc.) that do not respond to this. The CSS variables appear unused. This is not currently causing issues but is dead code.

**Issues found:**
17. LOW - Dead dark mode CSS variables in `globals.css`. Remove to avoid confusion.
18. LOW - Pricing page FAQ questions are missing the opening inverted question mark (e.g., "Puedo cambiar..." should be "?Puedo cambiar...").

---

## 9. Performance Visual Impact

### Layout Stability (CLS)
- **Logo:** `next/image` with explicit `width={140} height={40}` prevents layout shift. `priority` ensures fast load.
- **Hero:** No images to shift. All content is text + CSS. Minimal CLS risk.
- **Font loading:** `display: 'swap'` on Inter prevents FOIT but may cause FOUT (Flash of Unstyled Text). This is the standard tradeoff and is acceptable.
- **Cookie banner:** Appears after client-side hydration (useEffect + useState). This can cause a layout shift when it appears. Consider reserving space or using CSS animation.

**Issues found:**
19. LOW - Cookie banner pops in after hydration, potentially causing CLS. Consider a CSS-only animation or reserving space.

---

## Priority Action Items

### Critical (Fix First)
1. **Cookie banner blocks mobile CTAs** (#15) -- Either make the banner slimmer on mobile, move it to a top bar, or ensure CTAs remain accessible.
2. **Cookie banner not translated for /en** (#16) -- English visitors see Spanish cookie text.
3. **No real social proof** (#9) -- Add a customer count, real testimonials from Opinafy users, or "trusted by" section.

### Important (Do Soon)
4. **Gray-400 text fails WCAG AA** (#5) -- Change all `text-gray-400` user-facing text to `text-gray-500` minimum.
5. **Pricing mobile whitespace** (#12) -- Reduce padding so at least one plan card appears above the fold on mobile.
6. **Add trust indicators** (#10, #11) -- Integration logos, security badges near pricing.

### Nice to Have
7. **Increase hamburger touch target** (#3) -- Add `p-3` instead of `p-2`.
8. **Remove dead CSS** (#7, #17) -- Clean up globals.css.
9. **Add product screenshot** (#8) -- For image SEO value.
10. **Fix FAQ punctuation** (#18) -- Add opening `?` to FAQ questions.
11. **Deduplicate pricing headings** (#13) -- On /precios, the shared Pricing component H2 repeats the page H1's message.

---

## Screenshots Reference

All screenshots saved to `/Applications/MAMP/htdocs/opinafy/screenshots/`:

| File | Description |
|------|-------------|
| `home-desktop.png` | Homepage above-fold, 1920x1080 |
| `home-mobile.png` | Homepage above-fold, 375x812 |
| `home-tablet.png` | Homepage above-fold, 768x1024 |
| `home-desktop-full.png` | Homepage full page, 1920px |
| `home-en-desktop.png` | English homepage above-fold, 1920x1080 |
| `home-en-mobile.png` | English homepage above-fold, 375x812 |
| `plantillas-desktop.png` | Plantillas above-fold, 1920x1080 |
| `plantillas-mobile.png` | Plantillas above-fold, 375x812 |
| `precios-desktop.png` | Pricing above-fold, 1920x1080 |
| `precios-mobile.png` | Pricing above-fold, 375x812 |
| `precios-tablet.png` | Pricing above-fold, 768x1024 |
| `precios-desktop-full.png` | Pricing full page, 1920px |
