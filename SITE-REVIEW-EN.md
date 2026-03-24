# Opinafy English Site Review - Full Audit Report

**Date:** 2026-03-24
**Scope:** All 25 English (/en/) pages crawled and analyzed
**Status:** All 25 pages return HTTP 200 (no 404s)

---

## SEVERITY: CRITICAL

### 1. Minisite Templates Page (`/en/minisite-templates`) — Entirely Spanish Template Data

The minisite templates page has **all 30 template names, descriptions, and filter categories in Spanish**. This is the single worst translation failure on the site.

**Spanish filter/category buttons (should be English):**
- "Todas" (should be "All")
- "Salud" (should be "Health")
- "Creativos" (should be "Creatives")
- "Educacion" (should be "Education")
- "Tecnologia" (should be "Technology")
- "Bienestar" (should be "Wellness")
- "Hosteleria" (should be "Hospitality")
- "Negocios" (should be "Business")
- "Servicios" (should be "Services")

**Spanish template names (all 12 visible, all Spanish):**
- "Consultorio Sereno" — "Azul sanitario suave y limpio. Ideal para medicos y clinicas."
- "Sonrisa Dental" — "Blanco brillante con turquesa fresco. Perfecto para dentistas."
- "Mente en Calma" — "Violeta suave y sereno. Pensado para psicologos y terapeutas."
- "Vida Natural" — "Verde organico y fresco. Para nutricionistas y dietistas."
- "Movimiento Vital" — "Azul dinamico con energia. Ideal para fisioterapeutas."
- "Bufete Distinguido" — "Azul marino con tipografia serif. Para abogados con prestigio."
- "Notaria Clasica" — "Tonos sepia y dorados. Transmite tradicion y confianza notarial."
- "Asesoria Ejecutiva" — "Gris acero con acentos azules. Para consultores y asesores."
- "Lente Artistica" — "Negro elegante con detalles dorados. Para fotografos con estilo."
- "Estudio Creativo" — "Rosa vibrante y moderno. Ideal para disenadores graficos."
- "Plano Maestro" — "Lineas limpias y minimalismo. Para arquitectos y estudios."
- "Cine en Movimiento" — "Oscuro cinematografico. Perfecto para videografos y productoras."

(Plus 18 more hidden behind "Show more templates" — likely also in Spanish.)

### 2. Widget Templates Page (`/en/templates`) — Spanish Sample Testimonials and Descriptions

The widget templates page uses **Spanish sample testimonial text** inside every template preview card:

- **"Increible herramienta. En solo dos semanas conseguimos duplicar las conversiones de nuestra pagina de servicios gracias a los testimonios."** — appears in every template card
- **"Lo mejor es la facilidad de uso. Configuramos el widget en menos de 5 minutos y el resultado es muy profesional. Nuestros clientes lo adoran."** — appears in every template card
- **"127 opiniones"** — Spanish label ("opiniones" should be "reviews")
- **"Carlos Rodriguez Perez"** / **"Maria Garcia Lopez"** / **"Estudio Creativo Luna"** — Spanish sample names (less critical, but contributes to Spanish feel)

**Spanish template descriptions visible on the page:**
- "Diseno ultraminimalista con fondo blanco puro y tipografia ligera. Ideal para marcas que buscan sobriedad."
- "Solo lineas y texto. Sin sombras, sin colores. La esencia del minimalismo digital."
- "Como una pagina de libro bien disenada. Tipografia serif elegante sobre fondo neutro."
- "Azul corporativo clasico con tipografia fuerte que transmite confianza y profesionalismo inmediato."
- "Gris acero con acentos azules y tipografia contundente. Para empresas que quieren transmitir solidez."
- "Diseno inspirado en el sector financiero. Colores conservadores y estructura rigida."
- "Estilo big-four. Azul marino, tipografia bold geometrica y estructura impecable."
- "Inspirado en el wabi-sabi japones. Bordes finos, espacio generoso y una calma visual unica."
- "Maximo espacio entre elementos. Cada testimonio respira en su propio espacio amplio."

**Spanish template names visible:**
- "Linea Pura", "Oceano Profundo", "Papel Japones", "Consultoria Global", "Corporativo"

### 3. All Blog Article Slugs Are in Spanish

Every blog article URL under `/en/blog/` uses a Spanish slug. While the article titles and content are in English, the URLs themselves are entirely in Spanish:

- `/en/blog/que-son-testimonios-clientes-importancia`
- `/en/blog/como-recopilar-testimonios-clientes-estrategias`
- `/en/blog/como-pedir-testimonios-clientes-plantillas`
- `/en/blog/diferencia-testimonios-resenas-opiniones`
- `/en/blog/estadisticas-testimonios-datos-conversion`
- `/en/blog/prueba-social-que-es-como-usarla`
- `/en/blog/testimonios-ecommerce-aumentar-ventas`
- `/en/blog/testimonios-en-pagina-web-donde-colocarlos`
- `/en/blog/testimonios-para-coaches-consultores`
- `/en/blog/testimonios-video-guia-completa`
- `/en/blog/widgets-testimonios-web-guia`
- `/en/blog/como-aumentar-confianza-clientes-online`

This hurts English SEO and looks unprofessional to English-speaking visitors.

### 4. Industry Page Slug in Spanish: `/en/testimonials-for/restaurantes`

The URL uses "restaurantes" instead of "restaurants". Should be `/en/testimonials-for/restaurants`.

---

## SEVERITY: HIGH

### 5. Missing `hreflang` Tags (Uses Non-Standard `hrefLang` Attribute)

All pages use camelCase `hrefLang` in the HTML attribute instead of the W3C-standard lowercase `hreflang`. While some browsers may tolerate this, **Google's documentation specifies lowercase `hreflang`**, so this may cause search engines to ignore the language alternate signals entirely.

Example from the homepage:
```html
<link rel="alternate" hrefLang="es" href="https://opinafy.com"/>
<link rel="alternate" hrefLang="en" href="https://opinafy.com/en"/>
<link rel="alternate" hrefLang="x-default" href="https://opinafy.com"/>
```

Should be:
```html
<link rel="alternate" hreflang="es" href="https://opinafy.com"/>
<link rel="alternate" hreflang="en" href="https://opinafy.com/en"/>
<link rel="alternate" hreflang="x-default" href="https://opinafy.com"/>
```

**Note:** Next.js renders `hrefLang` (JSX camelCase) as `hreflang` (lowercase) in the browser DOM. Verify in the actual served HTML whether this is truly an issue — if the server-rendered HTML has the camelCase version, it IS a problem.

### 6. Two Pages Missing Alternate/hreflang Links Entirely

- `/en/blog/que-son-testimonios-clientes-importancia` — No `<link rel="alternate">` tags at all
- `/en/testimonials-for/restaurantes` — No `<link rel="alternate">` tags at all

### 7. Duplicate "| Opinafy" in Page Titles

Multiple pages have the brand name doubled in the title tag: `... | Opinafy | Opinafy`

Affected pages:
- `/en/compare` — "Testimonial Tool Comparisons 2026 | Opinafy | Opinafy"
- `/en/compare/best-testimonial-tools` — "7 Best Testimonial Tools in 2026 | Opinafy | Opinafy"
- `/en/guides/wordpress` — "How to Install Opinafy on WordPress - Step by Step Guide | Opinafy | Opinafy"
- `/en/guides/shopify` — "How to Install Opinafy on Shopify - Step by Step Guide | Opinafy | Opinafy"
- `/en/ranking` — "Top Rated Businesses - Verified Ranking | Opinafy | Opinafy"
- `/en/state-of-social-proof-2026` — "The State of Social Proof in 2026 - Statistics & Data | Opinafy | Opinafy"
- `/en/testimonials-for/restaurantes` — "Testimonials for Restaurants | Opinafy | Opinafy"
- `/en/templates` — "Testimonial Templates | 100+ Ready-to-Use Designs - Opinafy | Opinafy"
- `/en/minisite-templates` — "Mini Site Templates by Profession | 30 Designs - Opinafy | Opinafy"
- `/en/help` — "Help Center - Opinafy | Opinafy"
- `/en/about` — "About Us - Opinafy | Opinafy"
- `/en/pricing` — "Pricing - Opinafy | Opinafy"
- `/en/blog` — "Blog - Opinafy | Tips on Testimonials and Social Proof | Opinafy"
- `/en/downloads` — "Downloads and Integrations - Opinafy | Opinafy"
- `/en/affiliates` — "Affiliate Program - Earn Commissions Recommending Opinafy | Opinafy"
- `/en/agencies` — "Opinafy for Agencies - Manage All Your Clients' Testimonials | Opinafy"
- `/en/case-studies` — "Case Studies - Customer Success Stories with Opinafy | Opinafy"

### 8. Register and Login Pages Have Generic Meta Titles and Descriptions

Both `/en/register` and `/en/login` use the same generic homepage meta:
- **Title:** "Opinafy - Customer Testimonials That Convert | Opinafy"
- **Meta description:** "Collect, manage, and display customer testimonials on your website..."

These should have page-specific titles like "Create Free Account | Opinafy" and "Sign In | Opinafy".

---

## SEVERITY: MEDIUM

### 9. Spanish Canonical/OG URLs Leaking into English Page Meta Tags

Several English pages include the Spanish version URL in their `<link rel="alternate">` or other meta tags pointing to the Spanish path. While the `rel="alternate" hrefLang="es"` pointing to Spanish is correct, several pages also have the Spanish URL as `x-default`, which means search engines default to the Spanish version:

- `/en/pricing` — x-default points to `https://opinafy.com/precios`
- `/en/templates` — x-default points to `https://opinafy.com/plantillas`
- `/en/features` — x-default points to `https://opinafy.com/caracteristicas`
- `/en/compare` — x-default points to `https://opinafy.com/comparar`
- `/en/downloads` — x-default points to `https://opinafy.com/descargas`
- `/en/affiliates` — x-default points to `https://opinafy.com/afiliados`
- `/en/agencies` — x-default points to `https://opinafy.com/agencias`
- `/en/case-studies` — x-default points to `https://opinafy.com/casos-de-exito`
- `/en/minisite-templates` — x-default points to `https://opinafy.com/plantillas-minisitio`
- `/en/ranking` — x-default points to `https://opinafy.com/ranking`
- `/en/state-of-social-proof-2026` — x-default points to `https://opinafy.com/informe-prueba-social-2026`
- `/en/help` — x-default points to `https://opinafy.com/ayuda`
- `/en/guides/wordpress` — x-default points to `https://opinafy.com/guias/wordpress`
- `/en/guides/shopify` — x-default points to `https://opinafy.com/guias/shopify`

This is debatable (x-default to Spanish may be intentional if the primary audience is Spanish), but it means Google will default non-matched languages to Spanish.

### 10. Blog Article Image Filenames Are All in Spanish

All blog post image files on the CDN use Spanish filenames, visible in the page source:
- `como-recopilar-testimonios-clientes-estrategias.jpg`
- `automatizar-recopilacion-testimonios.jpg`
- `exportar-testimonios-pdf-presentaciones.jpg`
- `importar-resenas-google-tu-web.jpg`
- `gdpr-testimonios-privacidad.jpg`
- `testimonios-agencias-marketing.jpg`
- `testimonios-restaurantes-hosteleria.jpg`
- `plantillas-testimonios-cual-elegir.jpg`
- `testimonios-empresas-mudanzas-internacionales.jpg`
- etc.

While not visible to users, this is a minor SEO signal issue for image search.

### 11. Contact Email Is "hola@opinafy.com"

The footer across ALL English pages displays `hola@opinafy.com` as the contact email. "Hola" is a Spanish greeting. Consider using `hello@opinafy.com` or `contact@opinafy.com` for English pages, or keep it as a brand choice but acknowledge it reads as Spanish.

### 12. Ranking Page Links to Non-Localized Minisite

The ranking page at `/en/ranking` contains a link to `/s/edmondbk88` (a public minisite URL) that does not use the `/en/` prefix. Minisite URLs appear to be language-neutral, but this could lead English visitors to Spanish-language minisite content.

---

## SEVERITY: LOW

### 13. Cookie Consent Banner Not Found in HTML

No cookie consent/GDPR banner text was found in the server-rendered HTML of any page. It may be loaded entirely via JavaScript (client-side), which means:
- It cannot be verified from this crawl whether it displays in English or Spanish
- Server-side rendering of the cookie banner is recommended for GDPR compliance

### 14. Footer "Legal" Section Label

The footer uses the heading "Legal" for the legal links section. While "Legal" is valid in English, it is also Spanish. The links underneath ("Legal Notice", "Privacy Policy", "Terms of Service", "Cookie Policy") are properly in English. This is NOT an issue — just noting it was flagged but is a false positive.

### 15. "Popular" Badge on Pricing

The "Most Popular" badge on pricing plans is correctly in English. This is NOT an issue — just noting it was flagged but is a false positive.

---

## SUMMARY TABLE

| # | Page | Status | Spanish Text Issues |
|---|------|--------|-------------------|
| 1 | `/en` (homepage) | 200 | Clean (footer email only) |
| 2 | `/en/pricing` | 200 | Clean |
| 3 | `/en/templates` | 200 | **CRITICAL: All sample testimonials and many template descriptions in Spanish** |
| 4 | `/en/features` | 200 | Clean |
| 5 | `/en/about` | 200 | Clean |
| 6 | `/en/blog` | 200 | Spanish blog slugs; article titles are English |
| 7 | `/en/blog/que-son-...` | 200 | Spanish slug; missing alternate links |
| 8 | `/en/downloads` | 200 | Clean |
| 9 | `/en/compare` | 200 | Clean |
| 10 | `/en/compare/opinafy-vs-testimonial-to` | 200 | Clean |
| 11 | `/en/compare/opinafy-vs-senja` | 200 | Clean |
| 12 | `/en/compare/best-testimonial-tools` | 200 | Clean |
| 13 | `/en/help` | 200 | Clean |
| 14 | `/en/guides/wordpress` | 200 | Clean |
| 15 | `/en/guides/shopify` | 200 | Clean |
| 16 | `/en/affiliates` | 200 | Clean |
| 17 | `/en/agencies` | 200 | Clean |
| 18 | `/en/case-studies` | 200 | Clean |
| 19 | `/en/minisite-templates` | 200 | **CRITICAL: ALL template names, descriptions, and filter categories in Spanish** |
| 20 | `/en/ranking` | 200 | Non-localized minisite link |
| 21 | `/en/state-of-social-proof-2026` | 200 | Clean |
| 22 | `/en/testimonials-for/restaurantes` | 200 | **Spanish URL slug**; missing alternate links |
| 23 | `/en/register` | 200 | Generic meta title/desc |
| 24 | `/en/login` | 200 | Generic meta title/desc |

---

## WHAT IS WORKING WELL

- All 25 pages return 200 (no broken pages)
- Navigation bar text is fully in English across all pages
- Footer text is in English (except "hola@" email)
- All CTA buttons say "Get Started Free" and link to `/en/register` (correct)
- Login links point to `/en/login` (correct)
- No `/registro` links found on English pages
- Page body content (headings, paragraphs, descriptions) is in English on all pages except templates and minisite-templates
- Language switcher (ES | EN) is present and functional
- Canonical URLs are correct (point to the English version)
- OG locale is set to `en_US` on all English pages
- HTML `lang="en"` is set on all English pages
- Register page form labels are in English ("Full Name", "Email", "Password", "Create Free Account")
- Login page form labels are in English ("Sign In", "Email", "Password", "Forgot password?")

---

## TOP 5 PRIORITIES TO FIX

1. **Translate minisite template names, descriptions, and filter categories** (`/en/minisite-templates`)
2. **Translate sample testimonial text in widget template previews** (`/en/templates`)
3. **Create English blog slugs** (or at minimum add `rel="alternate"` properly)
4. **Fix the `restaurantes` slug** to `restaurants` in the industry URL
5. **Fix duplicate `| Opinafy | Opinafy` in 17+ page titles**
