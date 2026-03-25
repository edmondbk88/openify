# Definitive Content Quality & E-E-A-T Audit: opinafy.com

**Audit date:** 2026-03-25
**Auditor:** Content Quality Specialist (Google Sept 2025 QRG framework)
**Scope:** Full-site E-E-A-T assessment across 7 key pages

---

## Overall Content Quality Score: 74 / 100

**Rating: GOOD -- with specific areas requiring urgent attention**

---

## E-E-A-T Breakdown

### Experience (20% weight) -- Score: 16 / 20

**What was found:**

- `/sobre` and `/en/about`: Real founder identity -- Edmond Bojalil, Mexican developer based in Madrid, 15+ years experience. Currently Senior Backend Full Stack Developer at Rankia. Degree from IBERO Puebla with top-of-class medal. Creator of RecetasMexas.com (verifiable external project with 400+ recipes, 150+ stores, 550+ restaurants).
- LinkedIn link present in structured data (`https://www.linkedin.com/in/edmondbojalil/`) and as a visible "LinkedIn" link on the page.
- Schema.org `Organization` markup includes `founder` with `@type: Person` and LinkedIn URL.
- Blog articles show byline "Equipo Opinafy" in display text, but Schema.org `Article` markup attributes authorship to "Edmond Bojalil" with LinkedIn URL. This dual attribution is acceptable but slightly inconsistent.
- The "EB" initials avatar is used instead of a real photograph. This is a meaningful gap -- a real photo of the founder would significantly boost first-hand experience signals.

**Strengths:**
- Verifiable founder with external professional footprint (Rankia, RecetasMexas.com, IBERO Puebla)
- Clear origin story explaining why Opinafy was built (gap in Spanish-language testimonial market)
- Both Spanish and English about pages with consistent content

**Gaps:**
- No real founder photograph (only initials "EB" avatar)
- Blog byline says "Equipo Opinafy" while schema says "Edmond Bojalil" -- minor inconsistency
- No screenshots or demos of the actual product in use on the /sobre page

---

### Expertise (25% weight) -- Score: 19 / 25

**Blog quality analysis (sample: `/blog/que-son-testimonios-clientes-importancia`):**

- Word count: ~3,600 words (body text extracted). Well above the 1,500-word blog minimum.
- TL;DR summary present at top: "Los testimonios de clientes son declaraciones reales que generan confianza y pueden aumentar las conversiones hasta un 34%. Son esenciales en cada etapa del embudo de ventas."
- Source citations present: BrightLocal, VWO, Wyzowl, Robert Cialdini ("Influence: The Psychology of Persuasion"). Four named sources with specific statistics (92%, 34%, 80%, 270%).
- Internal links: 5 internal links to other blog articles (e.g., guide on collecting testimonials, video testimonials guide). Good topical clustering.
- Article structured data: Full `Article` schema with `datePublished`, `dateModified`, `author`, `publisher`, `keywords`, `mainEntityOfPage`.
- Content depth: Covers definition, psychology (Cialdini's social proof, confirmation bias, social identity theory), statistics, types of testimonials, funnel stages, common mistakes, and how to start. Comprehensive topical coverage.
- Reading time displayed: "8 min de lectura."

**Blog scale:**
- 14 pages of pagination visible, with 12 articles per page = approximately 160-168 articles.
- Date spread observed: October 15, 2025 through at least October 26, 2025 on page 1. Articles are dated and display publication dates.
- Category taxonomy: Guias, Estrategias, Marketing, Diseno Web, SEO, Ecommerce, Industrias, Conversion, B2B, Tecnico, Tendencias, Startups, Legal, Copywriting, Apps, UX -- 16 categories.

**Strengths:**
- High article volume (160+) covering the testimonial/social proof niche comprehensively
- Named source citations with specific data points
- TL;DR summaries improve AI citation readiness
- Proper schema markup on every article
- Strong internal linking between related articles

**Gaps:**
- Source citations lack hyperlinks to original studies (e.g., BrightLocal study is named but not linked)
- All visible dates cluster in October 2025 -- could signal batch-published AI content if not varied
- No "last updated" dates visible (only original publication dates)

---

### Authoritativeness (25% weight) -- Score: 17 / 25

**About page signals:**
- Organization schema with `foundingDate: 2026`, `sameAs` pointing to LinkedIn company page and founder LinkedIn
- `contactPoint` with email `hola@opinafy.com` and bilingual support (Spanish/English)
- "Opinafy en numeros" section: 100+ widget templates, 7 layouts, 30 mini site templates, 10+ integrations
- RecetasMexas.com cited as proof of founder's ability to build and scale products

**External authority signals:**
- LinkedIn company page referenced (`linkedin.com/company/opinafy`)
- Founder's personal LinkedIn referenced
- No third-party reviews, press mentions, or industry awards visible
- No backlink profile data available from this audit (would require Ahrefs/SEMrush)

**Strengths:**
- Real person with verifiable professional history backing the brand
- Clear niche positioning ("the #1 Spanish-native testimonial platform")
- Bilingual site (ES/EN) with proper hreflang implementation implied by URL structure

**Gaps:**
- No third-party validation (press coverage, industry awards, partnership logos)
- No customer logos or real testimonials about Opinafy itself on the site (ironic for a testimonial platform)
- The LinkedIn company page is new and likely has minimal followers
- No Google Business Profile mentioned

---

### Trustworthiness (30% weight) -- Score: 22 / 30

**Legal compliance:**
- `/legal` (Aviso Legal): Present and comprehensive. 7+ sections covering LSSI-CE Article 10 compliance, intellectual property, terms of use, liability exclusions, external links, data protection (GDPR/LOPDGDD), and jurisdiction.
- NIF disclosed: Y6804922H (valid NIE format for foreign residents in Spain -- consistent with Mexican founder based in Madrid). Note: This is a personal NIE, not a corporate CIF. The business appears to operate as autonomo (sole proprietor), not as a registered SL/SLU.
- Meta description on /legal: Present -- "Aviso legal y condiciones de uso de Opinafy. Informacion sobre el titular del sitio web, propiedad intelectual y limitaciones de responsabilidad."
- Contact email: hola@opinafy.com
- Author meta tag and rel=author link on legal pages pointing to founder LinkedIn

**Critical issue -- /casos-de-exito (Case Studies):**

The `/casos-de-exito` page contains **fully fabricated case studies** with invented companies and people:
- "Estudio Creativo Luna" (Barcelona) -- Ana Torres, "Directora Creativa"
- "TechSolutions Madrid" -- Carlos Mendez, "CEO"
- "Coaching Vital" (Valencia) -- Laura Vidal

These case studies include specific fake metrics (47% conversion increase, 34 testimonials in 2 weeks, 50 testimonials in 30 days) and fabricated quotes attributed to non-existent people. **This is a serious trustworthiness violation.** The user indicated this page should now show "coming soon," but the fetched content on 2026-03-25 still shows full fabricated case studies. This must be corrected immediately.

**Programmatic city pages (`/testimonios-en/madrid/restaurantes`):**
- Word count: ~1,670 words. Above minimum for a location page (500-600).
- 47 internal links to other `/testimonios-en/` and `/testimonios-para/` pages. This has been reduced from previous audits but remains high.
- FAQ schema with 3 questions present.
- LocalBusiness schema markup present.
- City-specific data included: population (3.3M), economic context (12.3% GDP, IBEX 35 headquarters), consumer behavior stats (78% consult online reviews).
- Content is enriched with Madrid-specific context but some passages read as template-filled (e.g., "servicios financieros, tecnologia" appearing in both schema and body copy as generic sector references).

**Strengths:**
- Full LSSI-CE legal compliance with real NIE
- Contact information present (email, LinkedIn)
- Cookie banner implemented (CookieBanner component in code)
- Legal pages have proper meta descriptions
- City pages have genuine local data enrichment

**Gaps:**
- CRITICAL: Fabricated case studies still live on /casos-de-exito
- NIE used instead of CIF -- signals sole proprietor, not incorporated entity
- No physical address disclosed (only "Pais: Espana")
- No phone number
- 47 internal links on a single city page is still aggressive (recommended: under 20 contextual links)

---

## AI Citation Readiness Score: 72 / 100

**Positive signals:**
- TL;DR summaries on blog articles (ideal for AI snippet extraction)
- Specific, quotable statistics with named sources (BrightLocal, VWO, Wyzowl)
- FAQ schema on city pages with structured Q&A
- Article schema with all required fields (headline, description, author, datePublished)
- Clear content hierarchy with H1/H2/H3 structure
- Breadcrumb schema on all pages
- Bilingual content doubles citation surface area

**Negative signals:**
- Source citations not hyperlinked (AI systems prefer verifiable source chains)
- Blog date clustering suggests batch publication rather than organic editorial cadence
- No original research or proprietary data cited
- City pages use some generic template language that AI systems may deprioritize

---

## Content Freshness Assessment

- Blog articles dated from October 2025 (oldest visible) to present
- Legal page: "Ultima actualizacion: marzo 2026"
- Schema `foundingDate: 2026` -- site is very new (less than 1 month old based on current date of 2026-03-25)
- No visible "last updated" signals on blog articles (only original publication date)
- 160+ articles published in approximately 5 months = ~32 articles/month = potentially flaggable publication velocity

---

## AI-Generated Content Assessment (Sept 2025 QRG Criteria)

**Risk level: MODERATE**

Indicators observed:
1. **Publication velocity**: 160+ articles in ~5 months is extremely high for a solo founder. This pattern is consistent with AI-assisted content production.
2. **Date clustering**: Articles on blog page 1 are dated October 15-26, 2025 (12 articles in 12 days), suggesting batch publication.
3. **Consistent structure**: Articles follow a uniform template (TL;DR, Introduction, Sections with statistics, CTA). While this is good for UX, uniformity across 160+ articles can signal automated production.
4. **Quality mitigating factors**: The sampled article demonstrates genuine depth (3,600 words), named academic references (Cialdini), specific data with sources, and practical advice. If AI-assisted, it has been well-edited.

**Assessment**: Content appears AI-assisted but editorially supervised. The presence of named sources, specific statistics, and coherent argumentation places it above the "low-quality AI content" threshold defined in the Sept 2025 QRG. However, adding original insights, personal anecdotes from the founder, and original research would further differentiate it.

---

## Priority Recommendations

### CRITICAL (fix within 24 hours)

1. **Replace fabricated case studies on /casos-de-exito.** The page currently shows invented companies (Estudio Creativo Luna, TechSolutions Madrid, Coaching Vital) with fake quotes and metrics. Replace with a "Proximamente" / "Coming Soon" placeholder until real case studies exist. Fabricated content is one of the most damaging trustworthiness violations in the QRG.

### HIGH (fix within 1 week)

2. **Add a real founder photograph** to `/sobre` and `/en/about`. The current "EB" initials avatar is a missed E-E-A-T signal. A professional headshot connecting the real person to the brand is one of the highest-impact trust improvements available.

3. **Hyperlink source citations in blog articles.** Currently, sources like "BrightLocal," "VWO," and "Wyzowl" are named but not linked. Adding URLs to original studies improves both trustworthiness and AI citation chain verifiability.

4. **Reduce internal links on city pages from 47 to under 20.** Focus on the most semantically relevant cross-links (same city different industries, same industry nearby cities) and remove the rest.

### MEDIUM (fix within 2 weeks)

5. **Vary blog publication dates.** The October 2025 date clustering is a potential quality signal issue. For future articles, space publication dates to reflect a natural editorial cadence (2-3 per week maximum).

6. **Add "last updated" dates to blog articles.** This improves freshness signals and demonstrates ongoing content maintenance.

7. **Unify blog author attribution.** Either display "Edmond Bojalil" consistently (matching schema) or update schema to match "Equipo Opinafy." Consistency matters for E-E-A-T.

8. **Add Opinafy product screenshots or demo video to /sobre.** The about page discusses the product's features but shows none of them. Visual product evidence strengthens experience signals.

### LOW (ongoing improvement)

9. **Seek third-party mentions.** Guest posts, podcast appearances, or industry directory listings would strengthen authoritativeness. The Rankia connection could be leveraged.

10. **Consider incorporating the business** as an SL/SLU and disclosing a CIF. Operating under a personal NIE is legally valid but perceived as less established than a corporate entity.

11. **Add a physical address** (even a coworking space) to legal pages. LSSI-CE Article 10 technically requires domicilio social.

12. **Create original research content** (e.g., "State of Customer Testimonials in Spain 2026" survey) to generate unique, citable data that AI systems and journalists would reference.

---

## Score Summary Table

| Factor | Weight | Score | Weighted |
|---|---|---|---|
| Experience | 20% | 16/20 (80%) | 16.0 |
| Expertise | 25% | 19/25 (76%) | 19.0 |
| Authoritativeness | 25% | 17/25 (68%) | 17.0 |
| Trustworthiness | 30% | 22/30 (73%) | 22.0 |
| **TOTAL** | **100%** | | **74.0 / 100** |

| Supplementary Metric | Score |
|---|---|
| AI Citation Readiness | 72/100 |
| Content Freshness | Adequate (new site, active publishing) |
| AI Content Risk | Moderate (mitigated by editorial quality) |

---

## Conditional Score Projection

If the CRITICAL and HIGH recommendations are implemented:

| Action | Estimated Impact |
|---|---|
| Remove fabricated case studies | +4 points (Trustworthiness) |
| Add real founder photo | +2 points (Experience) |
| Hyperlink source citations | +2 points (Expertise + Trustworthiness) |
| Reduce city page link count | +1 point (Trustworthiness) |
| **Projected score after fixes** | **~83 / 100** |

---

*This audit was conducted by analyzing live page content fetched on 2026-03-25. It follows Google's September 2025 Quality Rater Guidelines framework with E-E-A-T weighting: Experience 20%, Expertise 25%, Authoritativeness 25%, Trustworthiness 30%.*
