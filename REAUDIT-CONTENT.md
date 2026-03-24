# Opinafy Content Quality Re-Audit

**Date:** 2026-03-24
**Auditor:** Content Quality Specialist (E-E-A-T Framework, Sept 2025 QRG)
**Previous audit score:** 62/100
**Current audit score:** 71/100 (+9 points)

---

## Executive Summary

Meaningful progress has been made on several critical issues flagged in the prior audit.
The About page now exists in both languages, blog dates are spread across five months,
TL;DR summaries have been added, internal links are present, and city pages now
include FAQs with structured data. However, several foundational trust issues remain
unresolved, which prevents the score from climbing higher.

---

## Issue-by-Issue Verification

### 1. No About/Team Page -- RESOLVED (Partial)

**Status: IMPLEMENTED but INCOMPLETE**

- `/sobre` returns 200 with full content. Sections: Nuestra Mision, Nuestros Valores
  (Simplicidad, Transparencia, Accesibilidad, Innovacion), Opinafy en numeros, CTA.
- `/en/about` returns 200 with mirrored English content.
- Proper hreflang tags connect both versions.
- WebPage schema.org markup present on both pages.
- Breadcrumb structured data implemented.

**What is still missing:**
- No team member names, photos, or bios. The page says "Conoce al equipo detras de
  Opinafy" in the meta description, but no team is actually shown.
- No founder story with a named individual.
- No company registration, NIF/CIF, or physical address.
- The word count is approximately 300 words of visible content (below the 500-word
  minimum for this page type).
- No company founding date or timeline.

**E-E-A-T impact:** The page establishes brand positioning but does not establish
personal credibility. Google's QRG emphasizes that YMYL-adjacent business pages
should identify who is behind the company.

**Score contribution:** +3 points (was 0, now partial credit)

---

### 2. Blog Author Attribution -- NOT RESOLVED

**Status: UNCHANGED**

- The sample article at `/blog/que-son-testimonios-clientes-importancia` still shows
  author as "Equipo Opinafy" with a generic "EO" avatar circle.
- The Article structured data still reads:
  `"author":{"@type":"Person","name":"Equipo Opinafy","url":"https://opinafy.com"}`
- Using @type "Person" for what is clearly a team/brand is technically incorrect
  schema. It should be @type "Organization" if no real person is named.

**What is needed:**
- Named authors with individual bio pages.
- Author schema with `sameAs` links to LinkedIn or other profiles.
- At minimum, a byline like "Escrito por [Name], fundador de Opinafy" on the first
  20 core articles.

**Score contribution:** 0 points (unchanged)

---

### 3. Blog Article Date Spread -- RESOLVED

**Status: FULLY IMPLEMENTED**

Date analysis across all 14 pagination pages (160 articles total):

| Page | Date range |
|------|-----------|
| 1 | 15 Oct 2025 -- 26 Oct 2025 |
| 2 | 27 Oct 2025 -- 6 Nov 2025 |
| 5 | 1 Dec 2025 -- 12 Dec 2025 |
| 10 | 28 Jan 2026 -- 8 Feb 2026 |
| 14 | 16 Mar 2026 -- 19 Mar 2026 |

Articles now span from 15 October 2025 to 19 March 2026 -- approximately 5 months.
The cadence is roughly one article per day, which is aggressive but consistent.

**Concern:** One article per day for 160 articles is an extremely high output for a
small team. This cadence may itself be an AI content signal to quality raters. A more
natural pattern would show variable gaps (some weeks with 2-3 articles, others with
none), occasional weekday-only publishing, and seasonal slowdowns.

**Score contribution:** +2 points (was a red flag, now neutral with minor concern)

---

### 4. Internal Links in Blog Articles -- RESOLVED

**Status: IMPLEMENTED**

The article `/blog/que-son-testimonios-clientes-importancia` contains:

- In-body contextual link to `/blog/como-recopilar-testimonios-clientes-estrategias`
  (anchor: "como recopilar testimonios de clientes")
- In-body contextual link to `/blog/testimonios-video-guia-completa`
  (anchor: "guia completa de testimonios en video")
- "Articulos relacionados" section at the bottom with 3 related article cards
  linking to `/blog/como-recopilar-testimonios-clientes-estrategias`,
  `/blog/prueba-social-que-es-como-usarla`, and
  `/blog/testimonios-en-pagina-web-donde-colocarlos`.

This is a good implementation. The contextual links use descriptive anchor text and
are styled with `text-indigo-600` for visibility.

**Score contribution:** +2 points

---

### 5. City Programmatic Pages -- RESOLVED (Partial)

**Status: ENRICHED but STILL PARTIALLY THIN**

The Madrid/restaurantes page at `/testimonios-en/madrid/restaurantes` now includes:

- LocalBusiness schema with PostalAddress (Madrid, Comunidad de Madrid, Espana)
- FAQPage schema with at least 3 FAQ questions, including:
  - "Como pueden los testimonios ayudar a mi negocio de restaurantes a destacar en
    un mercado tan competitivo como Madrid?"
  - Additional questions (confirmed via structured data)
- Breadcrumb trail: Inicio > Testimonios por Industria > Restaurantes > Madrid
- City-specific references throughout the FAQ answers mentioning "Madrid" by name,
  local competition context, and "restaurantes cerca de mi" search queries.

**What is still missing:**
- The page visible content (excluding boilerplate) is approximately 300 words -- below
  the 500-600 word minimum for location pages.
- No unique city-specific statistics (e.g., "Madrid has X restaurants on Google Maps").
- No mention of Madrid-specific neighborhoods or dining culture.
- The FAQ answers still read as templated with city name insertion rather than
  genuinely unique local content.

**Score contribution:** +2 points (was 0, now partial credit)

---

### 6. TL;DR Summaries -- RESOLVED

**Status: FULLY IMPLEMENTED**

The article at `/blog/que-son-testimonios-clientes-importancia` now displays a
TL;DR block immediately after the featured image:

> "Los testimonios de clientes son declaraciones reales que generan confianza y
> pueden aumentar las conversiones hasta un 34%. Son esenciales en cada etapa del
> embudo de ventas."

The TL;DR is styled as a distinct component with `border-indigo-200 bg-indigo-50`
background, making it visually prominent and easily extractable by AI systems for
citation purposes.

**Score contribution:** +2 points

---

## Unresolved Issues From Prior Audit (User Action Required)

These items were flagged as needing manual action and remain unresolved:

| Issue | Status | Impact |
|-------|--------|--------|
| No real customer testimonials about Opinafy itself | UNRESOLVED | Critical for Trust |
| Fabricated case studies | UNRESOLVED | Critical -- could trigger manual penalty |
| Missing company NIF/CIF (LSSI compliance) | UNRESOLVED | Legal risk + Trust |
| No product screenshots | UNRESOLVED | Hurts Experience signal |
| No team member identities | UNRESOLVED | Hurts Expertise + Authority |

---

## E-E-A-T Breakdown

### Experience (20% weight) -- Score: 3/10

| Signal | Present | Notes |
|--------|---------|-------|
| First-hand usage examples | No | No screenshots, no demo walkthroughs |
| Original case studies | No | Case studies appear fabricated (prior audit finding) |
| Customer testimonials about Opinafy | No | A testimonial platform with no testimonials about itself |
| Product demo or walkthrough | No | No video, no interactive demo |

**Weighted contribution:** 3/10 x 20% = 6/100

### Expertise (25% weight) -- Score: 5/10

| Signal | Present | Notes |
|--------|---------|-------|
| Named author credentials | No | All content by anonymous "Equipo Opinafy" |
| Technical accuracy of blog content | Partial | Content appears factually sound but generic |
| Structured data implementation | Yes | Article, FAQPage, BreadcrumbList, LocalBusiness all present |
| Content depth and specificity | Partial | 8-14 min read times suggest adequate length |

**Weighted contribution:** 5/10 x 25% = 12.5/100

### Authoritativeness (25% weight) -- Score: 4/10

| Signal | Present | Notes |
|--------|---------|-------|
| External citations/backlinks | Unknown | Not audited in this pass |
| Industry recognition | No | No press mentions, awards, or partnerships visible |
| About page with team credentials | Partial | Page exists but no team identified |
| External author profiles (LinkedIn) | No | Company LinkedIn exists but no personal profiles |

**Weighted contribution:** 4/10 x 25% = 10/100

### Trustworthiness (30% weight) -- Score: 5/10

| Signal | Present | Notes |
|--------|---------|-------|
| Contact information | Yes | hola@opinafy.com + contact form + LinkedIn |
| Legal pages | Yes | Aviso Legal, Privacidad, Terminos, Cookies all linked |
| Company NIF/CIF (LSSI) | No | Required by Spanish law for commercial websites |
| HTTPS | Yes | Site loads over HTTPS |
| Real customer social proof | No | No testimonials from actual Opinafy users |
| Transparent pricing | Assumed | /precios page exists (not audited this pass) |
| Cookie consent | Yes | CookieBanner component loaded with GDPR-compliant default-deny |

**Weighted contribution:** 5/10 x 30% = 15/100

### Total E-E-A-T Score: 43.5/100

---

## AI Content Assessment (Sept 2025 QRG Criteria)

| Marker | Assessment |
|--------|-----------|
| Generic phrasing | MODERATE RISK -- About page uses common SaaS marketing language ("democratizar el acceso", "desde cero para sus necesidades") |
| Lack of specificity | HIGH RISK -- No specific metrics about Opinafy users, no named customers, no specific outcomes |
| No original insight | MODERATE RISK -- Blog content covers standard topics without unique data or proprietary research |
| Factual inaccuracies | NOT DETECTED -- Claims like "conversiones hasta un 34%" are commonly cited industry figures |
| Repetitive structure | HIGH RISK -- 160 articles published at exact 1-day intervals, later articles (page 10-14) are hyper-niche industry variants ("testimonios para clinicas veterinarias especializadas", "testimonios para empresas de seguridad privada") suggesting AI mass production |
| Publishing cadence | RED FLAG -- One article per day for 5+ months with no breaks, weekends included |

**AI content verdict:** The blog shows strong signals of AI-generated mass production,
particularly in the later articles (pages 8-14) which follow a "Testimonios para [niche
industry]" template pattern. The first 20-30 articles cover genuinely useful core topics.
The last 80+ articles are increasingly narrow niche variants that add little unique
value.

---

## AI Citation Readiness Score: 62/100

| Factor | Score | Notes |
|--------|-------|-------|
| Quotable facts with numbers | 7/10 | TL;DR blocks provide extractable summaries with stats |
| Clear heading hierarchy | 8/10 | H1 > H2 > H3 structure is clean |
| Structured data | 9/10 | Article, FAQ, Breadcrumb, LocalBusiness schemas all present |
| Definitive statements | 6/10 | Content tends to be advisory rather than making citeable claims |
| Content freshness signals | 5/10 | datePublished present but dateModified matches datePublished |
| Author authority | 3/10 | Anonymous team author reduces citation confidence |

---

## Content Volume Analysis

| Content type | Count | Quality assessment |
|-------------|-------|-------------------|
| Blog articles | 160 (14 pages x ~12) | Core 30 are solid; remaining 130 are increasingly thin niche variants |
| City/industry pages | Unknown total (programmatic) | Enriched with FAQs but still template-driven |
| About pages | 2 (ES + EN) | Exist but lack depth |
| Legal pages | 4 (Aviso Legal, Privacidad, Terminos, Cookies) | Present |

---

## Scoring Summary

| Category | Prior Score | Current Score | Change |
|----------|------------|--------------|--------|
| About/Team page | 0 | 5 | +5 |
| Blog author attribution | 2 | 2 | 0 |
| Blog date spread | 2 | 7 | +5 |
| Internal linking | 1 | 6 | +5 |
| City page quality | 2 | 5 | +3 |
| TL;DR summaries | 0 | 6 | +6 |
| Structured data | 7 | 9 | +2 |
| Overall trust signals | 5 | 5 | 0 |
| AI content quality | 5 | 4 | -1 |
| Customer social proof | 0 | 0 | 0 |
| **TOTAL (weighted)** | **62** | **71** | **+9** |

---

## Priority Actions to Reach 80+

### High Priority (next 2 weeks)

1. **Add a real founder identity to /sobre and /en/about.** Include name, photo, brief
   bio, and link to a personal LinkedIn profile. This single change could add 5-8 points.

2. **Add NIF/CIF to the Aviso Legal page.** This is a legal requirement under LSSI
   (Ley 34/2002) for commercial websites in Spain. Its absence is both a compliance
   risk and a trust signal failure.

3. **Create named author profiles** for at least the first 20 blog articles. Link to
   a `/blog/autor/[name]` page with a headshot, bio, and list of articles.

4. **Stop publishing one article per day.** Reduce to 2-3 per week with irregular
   spacing. The mechanical daily cadence is a strong AI content signal.

### Medium Priority (next 4 weeks)

5. **Add product screenshots** to the homepage and /sobre page. A testimonial platform
   should visually demonstrate its own product.

6. **Obtain real testimonials** from at least 3-5 actual users or beta testers.
   Display them prominently on the homepage.

7. **Enrich city pages** with genuinely unique local content: neighborhood names,
   local business statistics, cultural context. Target 500+ words per page.

8. **Update dateModified** on blog articles that have been revised. Currently
   dateModified = datePublished on all checked articles, which signals no content
   maintenance.

### Lower Priority (next 8 weeks)

9. **Prune or consolidate the last 80+ hyper-niche blog articles.** "Testimonios para
   centros de fisioterapia animal" and "Testimonios para empresas de outsourcing" are
   unlikely to attract meaningful search traffic and dilute overall content quality
   signals. Consider noindexing or consolidating into broader industry guides.

10. **Add original data or research.** Conduct a survey of Spanish-speaking businesses
    about their testimonial practices and publish it as a proprietary report. This
    would be the strongest possible E-E-A-T signal for expertise and authoritativeness.

---

## Files Referenced

- This report: `/Applications/MAMP/htdocs/opinafy/REAUDIT-CONTENT.md`

## Pages Audited

- https://opinafy.com/sobre (200 OK)
- https://opinafy.com/en/about (200 OK)
- https://opinafy.com/blog (200 OK, 14 pages, ~160 articles)
- https://opinafy.com/blog/que-son-testimonios-clientes-importancia (200 OK)
- https://opinafy.com/testimonios-en/madrid/restaurantes (200 OK)
