# Opinafy Site Review (Spanish Pages) - 2026-03-24

Crawled 35 Spanish pages. All returned HTTP 200 except `/ayuda/empezar` (404).

---

## CRITICAL (Severity 1) — Fix Immediately

### 1. Systemic Missing Accent Marks Across Entire Site
Almost every page has words missing their Spanish accents (tildes). This affects both page content and metadata. It is a site-wide problem present in headers, body text, footer, and meta tags.

**Affected words (found on 30+ pages):**
- `certificacion` → `certificación`
- `actualizacion` → `actualización`
- `exito` → `éxito`

**Affected words (found on 10-20 pages):**
- `gestion` → `gestión`
- `verificacion` → `verificación`
- `pagina` → `página`
- `comision` → `comisión`
- `espanol` → `español`
- `comunicacion` → `comunicación`

**Affected words (found on 5-10 pages):**
- `estadisticas` → `estadísticas`
- `puntuacion` → `puntuación`
- `resolucion` → `resolución`
- `informacion` → `información`
- `automatico` → `automático`
- `facturacion` → `facturación`

**Footer (affects every page):** "Certificacion", "Actualizaciones" (missing tilde), "Exito"

**Title tags specifically affected:**
| Page | Current Title | Issue |
|------|--------------|-------|
| `/calculadora-roi` | "cuanto dinero pierdes" | `cuanto` → `cuánto` |
| `/informe-prueba-social-2026` | "Estadisticas y Datos" | `Estadisticas` → `Estadísticas` |
| `/casos-de-exito` | "Casos de Exito" | `Exito` → `Éxito` |
| `/afiliados` | "comisiones recomendando" | `comision` → `comisión` |
| `/certificacion` | "Programa de Certificacion" | `Certificacion` → `Certificación` |
| `/guias/wordpress` | "Como instalar" | `Como` → `Cómo` |
| `/guias/shopify` | "Como instalar" | `Como` → `Cómo` |

**Meta description specifically affected (worst cases):**
- `/contacto`: "aqui" → "aquí"
- `/calculadora-roi`: "cuanto" → "cuánto"
- `/afiliados`: "comision", "espanol" both missing accents
- `/actualizaciones`: "dia" → "día", "ultimas" → "últimas"
- `/prensa`: "informacion" → "información"
- `/guias/wordpress` and `/guias/shopify`: "guia" → "guía"

---

### 2. Legal Pages Have Generic/Default Meta Tags
Pages 10-13 (`/legal`, `/privacidad`, `/terminos`, `/cookies`) all share the **homepage** meta description and OG tags instead of their own.

| Page | Current Meta Description | Should Be |
|------|------------------------|-----------|
| `/legal` | "Recopila, gestiona y muestra testimonios..." (homepage text) | Legal-specific |
| `/privacidad` | Same homepage text | Privacy-specific |
| `/terminos` | Same homepage text | Terms-specific |
| `/cookies` | Same homepage text | Cookies-specific |

- **OG title** on all 4 pages: "Opinafy - Testimonios de Clientes que Convierten" (homepage default)
- **OG URL** on all 4 pages: `https://opinafy.com` (points to homepage, not their own URL)

---

### 3. `/ayuda/empezar` Returns 404
- HTTP status: 404
- The page returns default homepage title, has `robots: noindex`, no `lang` attribute, no H1, empty body
- The help index `/ayuda` links to `/ayuda/primeros-pasos` (which works), NOT `/ayuda/empezar`
- `/ayuda/empezar` is not in the sitemap either
- **Conclusion:** This URL does not exist; the correct getting-started page is `/ayuda/primeros-pasos`

---

### 4. No `hreflang` Tags in HTML `<head>`
None of the 35 pages have `hreflang` link elements in their HTML `<head>`. While the sitemap.xml does contain hreflang annotations, Google recommends also including them in the page HTML for maximum reliability.

- The sitemap has proper hreflang (es, en, x-default) for all URLs
- But the actual page HTML has zero hreflang tags on every single page
- This is a missed SEO signal for multilingual content

---

## HIGH (Severity 2) — Fix Soon

### 5. Blog Index Page Is 2.3 MB (Performance Issue)
- `/blog` page weighs **2.3 MB** (2,378,018 bytes)
- Of that, **2,272 KB is Next.js RSC inline payload** (330 `self.__next_f.push` calls)
- The page lists only 17 blog articles but the RSC payload includes full content for all of them
- Contains Next.js internal chunk references: `/blog/page-4eb2bb85b191d142` and `/blog/layout-f76a4954c51edc1f` (not real pages)
- This will severely impact Core Web Vitals (LCP, FID) and mobile performance

### 6. HTML Entity `&quot;` in Meta Description
- **Page:** `/verificado-badge`
- **Current meta description:** `El badge &quot;Verificado por Opinafy&quot; garantiza que...`
- The `&quot;` entities will display as literal text in some search engine snippets
- Should use proper quotation marks or rephrase to avoid quotes

### 7. Missing Schema.org JSON-LD on Multiple Pages
The following pages have **no** structured data at all:

| Page | Recommended Schema Type |
|------|----------------------|
| `/contacto` | LocalBusiness, ContactPage |
| `/health-score` | WebApplication |
| `/certificacion` | WebPage, FAQPage |
| `/ranking` | WebPage, ItemList |
| `/actualizaciones` | WebPage |
| `/prensa` | WebPage |
| `/guias/wordpress` | HowTo, Article |
| `/guias/shopify` | HowTo, Article |
| `/legal` | WebPage |
| `/privacidad` | WebPage |
| `/terminos` | WebPage |
| `/cookies` | WebPage |

### 8. Missing OG Images on 9 Pages
These pages have no `og:image` meta tag, which means shared links on social media will have no preview image:

- `/contacto`
- `/descargas`
- `/prensa`
- `/comparar/opinafy-vs-testimonial-to`
- `/comparar/opinafy-vs-senja`
- `/comparar/mejores-herramientas-testimonios`
- `/ayuda`
- `/guias/wordpress`
- `/guias/shopify`

### 9. English Term "Social Proof Checker" in Spanish Page Title
- **Page:** `/health-score`
- **Title:** "Analizar Prueba Social Web Gratis - **Social Proof Checker** | Opinafy"
- The subtitle/tool name is in English on a Spanish page
- Also in keywords meta tag: "social proof checker"
- The H1 is correctly in Spanish: "Analiza la Prueba Social de tu Web"

---

## MEDIUM (Severity 3) — Should Fix

### 10. English Technical Terms Used Without Translation
Several pages use untranslated English words in visible content. While some (like "widget") may be acceptable as technical terms, others should be translated:

**Questionable English terms found:**
- **"Dashboard"** — used on pages: `/caracteristicas`, `/agencias`, `/verificado-badge`, `/actualizaciones`, `/prensa`, `/cookies`, `/afiliados` (could use "Panel de control")
- **"Embed"** — used on `/caracteristicas`, `/descargas` (could use "Insertar" or "Incrustar")
- **"Widget"** — used extensively across nearly all pages (11x on homepage alone). This is debatable as industry-standard, but heavy usage.
- **"Analytics"** — used on homepage, pricing, features, cookies, updates (could use "Analíticas")
- **"Newsletter"** — used on `/afiliados`
- **"Settings"** — used on `/descargas` ("Project Settings → Custom Code")
- **"Starter"** — plan name on comparison pages
- **"Conversion"** — used on ROI calculator, social proof report, comparison pages (could use "conversión" with accent)

### 11. Ranking Page Shows Test Data
- **Page:** `/ranking`
- Entry called **"Probando"** (literally "Testing" in Spanish) appears in the live ranking list
- This looks like test/placeholder data that was not removed before publishing
- Listed alongside real-sounding entries like "Gimnasio FitZone", "Peluqueria Estilo", etc.

### 12. Press Page Has No Actual Download Links
- **Page:** `/prensa`
- Mentions "Logo principal - Fondo claro - PNG / SVG" and "Logo invertido - Fondo oscuro - PNG / SVG"
- But no actual download `href` links to the logo files — they appear to be placeholders
- Only actual link found is to `/apple-touch-icon.png`
- Says "Para solicitar archivos de alta resolucion, contacta a hola@opinafy.com" — but a proper press kit should have direct downloads

### 13. Duplicate Meta Descriptions
Pages sharing the exact same meta description (the homepage default):
- `/` (homepage) — correct
- `/legal`
- `/privacidad`
- `/terminos`
- `/cookies`
- `/ayuda/empezar` (404 page)

This is 5 pages (excluding 404) with identical descriptions, which hurts SEO.

### 14. `/en/` Language Switcher Links Present but Without hreflang
Most pages (30 out of 35) include a link to their English counterpart (e.g., `https://opinafy.com/en/pricing`). These English pages do exist and return 200. However:
- The language switcher links exist as navigation elements (likely the "English version" link in the nav)
- There are no corresponding `hreflang` tags in the HTML `<head>` to tell search engines about the relationship

---

## LOW (Severity 4) — Nice to Have

### 15. 404 Error Page Has Poor Localization
- Shows homepage title "Opinafy - Testimonios de Clientes que Convierten" instead of a 404-specific title
- Missing `lang="es"` attribute on `<html>` tag
- Has `robots: noindex` (correct)
- No H1 tag, empty body (the 404 content is likely rendered client-side only)
- Should be server-rendered with proper Spanish 404 messaging

### 16. Legal Pages Missing Schema.org and Structured Data
All 4 legal pages (`/legal`, `/privacidad`, `/terminos`, `/cookies`) have:
- No JSON-LD structured data
- No breadcrumb markup
- Generic OG tags (homepage defaults)

### 17. Missing Twitter Card Meta Tags
No pages have `twitter:card` meta tags. While OG tags can serve as fallback, explicit Twitter Card tags are recommended for optimal sharing on X/Twitter.

### 18. Certification Page Shows Badge Levels Without Numbers
- `/certificacion` lists Bronze, Silver, Gold, Platinum levels
- The text says "testimonios verificados" but the actual threshold numbers appear to be rendered client-side and are missing from the SSR HTML
- Search engines and users with JS disabled will see "Bronze testimonios verificados" without knowing how many are needed

---

## Summary

| Severity | Count | Key Theme |
|----------|-------|-----------|
| CRITICAL | 4 | Missing accents site-wide, legal page defaults, 404 page, no hreflang in HTML |
| HIGH | 5 | Blog 2.3MB, HTML entities in meta, missing schemas, missing OG images, English in title |
| MEDIUM | 5 | English terms, test data in ranking, press kit missing, duplicate meta, lang switcher |
| LOW | 4 | 404 page quality, legal page SEO, Twitter cards, JS-dependent content |

**Top 3 Priorities:**
1. Fix missing accent marks across the entire site (systemic, affects every page)
2. Add proper meta descriptions and OG tags to legal pages (they all show homepage defaults)
3. Add hreflang tags to HTML `<head>` on all pages (currently only in sitemap)
