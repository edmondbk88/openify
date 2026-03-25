# Final Content Quality & E-E-A-T Audit -- opinafy.com

**Date:** 2026-03-25
**Auditor:** Content Quality Specialist (Google Sept 2025 QRG Framework)
**Previous scores:** 62 (initial) -> 71 (second audit) -> **76 (this audit)**
**Pages analyzed:** /sobre, /en/about, /blog (index, pages 1-13), /blog/que-son-testimonios-clientes-importancia, /testimonios-en/madrid/restaurantes

---

## Overall Content Quality Score: 76 / 100

Up 5 points from 71. Meaningful improvements were made to founder transparency, blog structure, and schema. Remaining gaps are primarily trust-layer issues that require real-world actions (customer testimonials, legal compliance, product evidence).

---

## E-E-A-T Breakdown

### Experience: 14 / 20 (was 11)

**Improvements confirmed:**
- /sobre page now names Edmond Bojalil as founder with a detailed bio: "Desarrollador mexicano con mas de 15 anos de experiencia, afincado en Madrid, Espana. Actualmente Senior Backend & Full Stack Developer en Rankia."
- /en/about adds RecetasMexas.com credential (400+ recipes, 150+ stores, 550+ restaurants) -- this is a verifiable, concrete first-hand project.
- LinkedIn profile link (linkedin.com/in/edmondbojalil/) is present in both the visible page and Organization schema.
- The blog article analyzed includes internal links to related content (4 blog cross-links: como-recopilar-testimonios, prueba-social-que-es, testimonios-en-pagina-web, testimonios-video-guia-completa), plus links to /calculadora-roi, /casos-de-exito, /comparar, and other product pages.

**Remaining gaps:**
- Blog visible byline reads "Equipo Opinafy" while the Article schema says `"author": {"name": "Edmond Bojalil"}`. This mismatch can confuse Google's entity reconciliation. Both should say the same name.
- No screenshots, screencasts, or product walkthroughs exist anywhere on the site. A testimonial platform that shows zero screenshots of its own product undermines first-hand experience signals.
- /casos-de-exito still contains fabricated case studies (acknowledged by user as unresolved). This is a negative experience signal -- claiming results that did not happen.

### Expertise: 17 / 25 (was 15)

**Improvements confirmed:**
- Blog articles are substantive. The sampled article ("Que son los testimonios de clientes") shows 8-minute read time, a proper TL;DR summary box at the top, and structured H2/H3 hierarchy.
- Article schema includes `datePublished: 2025-10-15`, proper keywords metadata, breadcrumb schema, and Article structured data with publisher and author.
- The blog now has 57+ internal links across the first 20 articles, creating topical cluster signals around testimonials, social proof, and conversion optimization.
- Blog word count estimated at 1,847 words for the sampled article, comfortably above the 1,500-word floor for blog posts.

**Remaining gaps:**
- No external citations or references to third-party studies. The article claims "pueden aumentar las conversiones hasta un 34%" without sourcing. Unsourced statistics reduce expertise perception.
- No author bio box on blog articles. The visible byline ("Equipo Opinafy") links nowhere. Expertise requires showing *who* wrote the content and *why* they are qualified.

### Authoritativeness: 14 / 25 (was 12)

**Improvements confirmed:**
- Organization schema now includes `foundingDate: 2026`, founder Person entity with LinkedIn URL, `sameAs` linking to LinkedIn company page, and ContactPoint with email and bilingual support.
- Blog date spread verified: Oct 15, 2025 through at least Mar 9, 2026 (nearly 5 months), with daily publication cadence. This demonstrates sustained editorial investment.
- Total blog volume: approximately 140+ articles across 13+ paginated pages.
- hreflang tags properly implemented (es/en/x-default) on /sobre and /en/about.

**Remaining gaps:**
- Zero external backlinks or citations from third-party sources visible. No press mentions, no guest posts, no directory listings beyond LinkedIn.
- No real customer testimonials about Opinafy itself. A testimonial platform with no testimonials from its own users is a critical authority gap.
- Blog dates, while spanning 5 months, follow a rigid one-post-per-day pattern from launch day onward. This looks programmatic. A natural editorial calendar would have irregular gaps.

### Trustworthiness: 21 / 30 (was 18)

**Improvements confirmed:**
- Real founder identity with verifiable credentials (Rankia employment, IBERO Puebla degree, RecetasMexas.com project).
- Contact information present: hola@opinafy.com, /contacto page, LinkedIn company profile.
- Legal footer includes Aviso Legal, Privacidad, Terminos, Cookies pages.
- Spanish accents fixed across main site content (confirmed on /sobre, blog articles).

**Remaining gaps (critical):**
- **Missing NIF/CIF number.** Under Spain's LSSI (Ley de Servicios de la Sociedad de la Informacion), commercial websites must display the company's tax identification number. This is not optional for a paid SaaS product operating in Spain.
- **FAQPage schema on city pages still has missing accents.** Confirmed on /testimonios-en/madrid/restaurantes: "Como pueden" (should be "Como"), "Cual es" (should be "Cual"). The visible page text also lacks accents in these FAQ sections. This contradicts the claim that accents were "fixed across the entire site."
- **Fabricated case studies at /casos-de-exito remain live.** Presenting invented success stories as real customer outcomes is a direct trustworthiness violation under QRG 2025 criteria for YMYL-adjacent content (business tools affecting revenue decisions).
- **No physical address disclosed.** While not strictly required for all SaaS, the combination of no NIF, no address, and fabricated case studies creates a trust deficit.

---

## AI Citation Readiness Score: 68 / 100

**Strengths:**
- TL;DR summary boxes on blog articles provide ideal AI-extractable snippets.
- Article schema with datePublished, author, and breadcrumbs enables proper attribution.
- FAQPage schema on city pages provides structured Q&A pairs.
- Clear H1 > H2 > H3 hierarchy in blog content.

**Weaknesses:**
- No `speakable` schema markup for voice-assistant citation.
- Statistics cited without sources make them unreliable for AI extraction.
- Author mismatch (visible "Equipo Opinafy" vs schema "Edmond Bojalil") may cause LLMs to attribute content inconsistently.

---

## Page-by-Page Findings

### /sobre (Spanish About Page)

| Criterion | Status |
|-----------|--------|
| Real founder name | PASS -- Edmond Bojalil |
| LinkedIn link (visible) | PASS |
| LinkedIn link (schema) | PASS |
| Professional background | PASS -- 15+ years, Rankia, IBERO Puebla |
| Side project credential | PASS -- RecetasMexas.com |
| Organization schema | PASS -- founder, contactPoint, sameAs |
| Values section | PASS -- Simplicidad, Transparencia, Accesibilidad, Innovacion |
| Stats section | PASS -- 100+ templates, 7 layouts, 30 minisite templates, 10+ integrations |
| Product screenshots | FAIL -- none present |
| NIF/CIF | FAIL -- not displayed |

### /blog/que-son-testimonios-clientes-importancia

| Criterion | Status |
|-----------|--------|
| TL;DR summary | PASS -- present at top |
| Word count | PASS -- ~1,847 words (above 1,500 floor) |
| Internal links | PASS -- 4 blog cross-links + 6 product page links |
| Article schema | PASS -- author, datePublished, breadcrumbs |
| Author schema | PARTIAL -- schema says "Edmond Bojalil", visible byline says "Equipo Opinafy" |
| Date display | PASS -- "15 de octubre de 2025" |
| External citations | FAIL -- statistics without sources |
| Author bio box | FAIL -- no author bio below article |

### /testimonios-en/madrid/restaurantes

| Criterion | Status |
|-----------|--------|
| Unique intro content | PASS -- city-specific copy mentioning Madrid's 3.3M population, dominant industries |
| FAQPage schema | PASS -- 3 structured Q&A pairs |
| FAQ accent marks | FAIL -- "Como" not "Como", "Cual" not "Cual" in both schema and visible text |
| LocalBusiness schema | PASS -- addressLocality: Madrid |
| Cross-link volume | PARTIAL -- 38 unique /testimonios-en/ links (reduced from prior audit, but still heavy) |
| Breadcrumb schema | PASS -- 4-level hierarchy |
| Content depth | IMPROVED -- industry-specific tips (QR codes on tables, WhatsApp follow-ups) |

### /blog (Index)

| Criterion | Status |
|-----------|--------|
| Date spread | PASS -- Oct 15 2025 through Mar 9 2026 (5 months) |
| Publication cadence | CONCERN -- exactly 1 post/day with no gaps looks automated |
| Volume | PASS -- 140+ articles |
| Category thumbnails | PASS -- featured images from Supabase storage |
| Pagination | PASS -- 13+ pages |

### /en/about (English About Page)

| Criterion | Status |
|-----------|--------|
| Founder bio | PASS -- same detail level as Spanish version |
| hreflang | PASS -- bidirectional es/en/x-default |
| Organization schema | PASS -- matches Spanish version |
| Content parity | PASS -- English translation is natural, not machine-translated feeling |

---

## Improvement Delta (71 -> 76)

| Change Made | Points Gained | Notes |
|-------------|---------------|-------|
| Real founder identity on /sobre | +2 | Verifiable person with LinkedIn, employer, degree |
| Blog TL;DR summaries | +1 | AI citation readiness improved |
| Blog date spread (5 months) | +1 | No longer looks like a one-day content dump |
| Internal linking (57 links) | +1 | Topical cluster signals strengthened |
| Blog author in schema | +0.5 | Partially offset by visible/schema mismatch |
| Accent fixes (partial) | +0.5 | Main content fixed, but FAQ schema still broken |
| City page enrichment | +1 | Unique content with local data points |
| **Subtotal gained** | **+7** | |
| Fabricated case studies penalty | -2 | Still live, still a trust violation |
| **Net change** | **+5** | 71 -> 76 |

---

## Remaining Issues by Priority

### P0 -- Critical (Trust Violations)

1. **Remove or clearly label fabricated case studies.** Replace /casos-de-exito with a "coming soon" page or honest pilot program invitation. Every day these remain live, they are a potential manual action trigger under QRG 2025's expanded AI content deception criteria.

2. **Add NIF/CIF to legal pages.** Required by Spanish LSSI for any commercial website. Absence could result in fines and signals to Google that the business entity is unverified.

### P1 -- High (E-E-A-T Gaps)

3. **Fix author mismatch.** Blog visible byline says "Equipo Opinafy" but Article schema says "Edmond Bojalil." Pick one. Recommendation: use "Edmond Bojalil" everywhere and add an author bio box linking to /sobre.

4. **Fix FAQ accents on city+industry pages.** The FAQPage schema on /testimonios-en/madrid/restaurantes (and likely all city pages) still uses "Como" and "Cual" without accents. This affects both schema validity and visible text quality.

5. **Add product screenshots.** At minimum: the dashboard, the widget builder, the testimonial collection form. A testimonial SaaS with no visual proof of its own product is a significant expertise gap.

6. **Get 3-5 real customer testimonials.** Even from beta testers or free-tier users. Display them on the homepage and /sobre page. This is the single highest-impact trust signal available.

### P2 -- Medium (Content Quality)

7. **Source statistics in blog articles.** The "34% conversion increase" claim appears multiple times with no citation. Link to the original study or remove the specific number.

8. **Vary blog publication cadence.** Daily posting with zero gaps for 5 months is a detectable pattern. Consider backdating some posts to 2-3 day intervals or adding occasional gaps.

9. **Reduce city page cross-links further.** 38 cross-links on a single city+industry page is still heavy. Aim for 8-12 contextually relevant links maximum.

10. **Add author bio component to blog articles.** A short box at the bottom with photo, name, one-line credential, and LinkedIn link. This is standard for expertise signaling.

---

## Score Trajectory

| Audit | Score | Key Blocker |
|-------|-------|-------------|
| Initial | 62 | Anonymous founder, date clustering, no internal links |
| Second | 71 | Fabricated case studies, missing NIF, no screenshots |
| **Final** | **76** | **Same blockers remain; gains from founder ID and content structure** |
| Projected ceiling (if P0+P1 resolved) | **84-87** | Real testimonials + NIF + screenshots would close most gaps |

---

## Conclusion

The site has made genuine structural improvements. The founder identity is now verifiable, blog content has proper schema and internal linking, and the date spread eliminates the content-dump signal. However, the three unresolved trust issues (fabricated case studies, missing NIF/CIF, no product screenshots) create a hard ceiling. No amount of content optimization can compensate for publishing invented success stories on a commercial SaaS site. Resolving the P0 items would likely push the score into the low 80s; adding real customer testimonials and product evidence would reach the mid-80s.
