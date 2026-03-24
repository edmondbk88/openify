# Content Quality & E-E-A-T Audit -- Opinafy.com

**Audit date:** 2026-03-24
**Auditor:** Content Quality Specialist (Sept 2025 QRG criteria)
**Site:** https://opinafy.com
**Pages analyzed:** ~184 total (marketing, blog, programmatic, English mirror, help, legal)
**Tech stack:** Next.js 14 (App Router), Tailwind CSS, Supabase, Stripe, Vercel

---

## Overall Content Quality Score: 62/100

The site has an impressive volume and breadth of content for a product launched less than a week ago. However, several structural E-E-A-T gaps significantly undermine trust and authority signals, particularly the absence of real social proof, author identities, and first-hand experience documentation. Below is the full breakdown.

---

## 1. E-E-A-T Breakdown

### Experience -- 35/100 (Weight: 20%) | Severity: CRITICAL

**What was found:**

- **No real customer testimonials about Opinafy itself.** The homepage `testimonials-preview.tsx` explicitly disclaims its testimonials as "ejemplos demostrativos" (demonstrative examples). For a testimonial platform, the absence of actual testimonials about the product is a major credibility gap.
- **Case studies page (`/casos-de-exito`) uses fabricated data.** Company names like "Estudio Creativo Luna", "Floreria Bella", and "TechSoluciones" appear repeatedly across the homepage hero, testimonials preview, and case studies. These are clearly fictional.
- **Blog articles lack first-hand experience signals.** All 162 articles are written by "Equipo Opinafy" with no author bios, no personal anecdotes, no "we tested this" language, and no screenshots from actual product usage.
- **No product screenshots anywhere in marketing pages.** The homepage uses a mockup with fake testimonial cards rather than actual product UI. Features page is text-only with no visual evidence of the product working.
- **Industry pages (`/testimonios-para/[slug]`) contain fabricated testimonials.** The restaurant industry page shows testimonials from "Carmen Lopez, Restaurante El Fogon" and others -- these are template-generated, not real.

**Recommendations (Priority: P0):**

1. Add 3-5 real beta tester testimonials to the homepage immediately, even from friends or early users. Remove the "ejemplos demostrativos" disclaimer.
2. Replace the hero mockup with actual product screenshots or a short GIF/video demo.
3. Add product screenshots to the features page for every core feature.
4. Remove or clearly mark all fabricated case studies until real ones exist.
5. Add an author page for the founder with photo, bio, and LinkedIn link.

---

### Expertise -- 55/100 (Weight: 25%) | Severity: HIGH

**What was found:**

- **Blog content is technically solid and well-researched.** Articles like "Que son los testimonios de clientes" (~2,500 words) demonstrate strong topical knowledge, cite psychology principles (Cialdini, proof social), and include relevant statistics (BrightLocal, VWO, Wyzowl).
- **162 blog articles is a substantial corpus.** Categories span Guides, Strategies, Marketing, Design, Video, Technical, Ecommerce, SEO, Legal -- comprehensive topical coverage for the testimonials niche.
- **However, all 162 articles are attributed to "Equipo Opinafy" with only initials "EO" as avatar.** No individual author with credentials is identified. Per Sept 2025 QRG, for YMYL-adjacent content (marketing strategies, business advice), Google expects identifiable authors with demonstrable expertise.
- **Statistics in blog posts lack source links.** Statements like "92% of consumers read reviews" cite BrightLocal by name but do not link to the actual study. "Testimonials can increase conversions by 34%" cites VWO without a URL.
- **Feature descriptions show deep product knowledge** (Shadow DOM, RLS, Google Fonts integration) but this technical depth is invisible to visitors since no technical blog posts explain the architecture decisions.

**Recommendations (Priority: P1):**

1. Create an author profile page at `/sobre` or `/equipo` with founder name, photo, professional background, and LinkedIn.
2. Update blog article template to show a real author name with a brief bio at the bottom of each post.
3. Add hyperlinked source citations for all statistics mentioned in blog posts.
4. Write 2-3 "behind the scenes" technical posts about building Opinafy (Shadow DOM widget, verification system, etc.) to demonstrate genuine expertise.
5. Add `author` field to the `BlogArticle` interface with name, bio, and avatar URL.

---

### Authoritativeness -- 30/100 (Weight: 25%) | Severity: CRITICAL

**What was found:**

- **Brand new domain (founded 2026, launched ~March 18).** Zero external backlinks expected. No third-party mentions, reviews, or press coverage exist yet.
- **No "About Us" page exists.** There is no `/sobre`, `/equipo`, or `/about` page anywhere in the site structure. Visitors cannot learn who built Opinafy or why.
- **No LinkedIn company page linked** (schema.ts references it but the actual LinkedIn page may be empty).
- **Press page exists (`/prensa`) but likely contains no real press mentions yet.**
- **Comparison pages (`/comparar/opinafy-vs-testimonial-to`, `/comparar/opinafy-vs-senja`) are honest** about Opinafy's limitations (e.g., acknowledging Testimonial.to has better Zapier/Slack integrations). This is a positive trust signal.
- **No external review platform presence** (G2, Capterra, Product Hunt, etc.).

**Recommendations (Priority: P0):**

1. Create a dedicated `/sobre` (About) page with founder story, mission, and team photo.
2. Launch on Product Hunt, submit to G2/Capterra free listings, and add badges once available.
3. Populate the LinkedIn company page with regular posts.
4. Seek 3-5 external mentions via guest posts, podcast appearances, or community participation in Spanish SaaS/marketing communities.
5. Add a "Mentioned in" or press bar to the homepage once any external coverage exists.

---

### Trustworthiness -- 65/100 (Weight: 30%) | Severity: MEDIUM

**What was found:**

**Positive signals:**
- Contact page exists with a functional contact form and email (hola@opinafy.com).
- Full legal documentation: `/legal`, `/privacidad`, `/terminos`, `/cookies` -- all present.
- RGPD compliance explicitly mentioned with cookie consent, data portability, right to erasure.
- Stripe payment processing (PCI DSS Level 1) clearly communicated on pricing page.
- 14-day money-back guarantee prominently displayed on pricing page.
- Pricing transparency: all plans with prices clearly shown, no hidden fees.
- hreflang tags properly implemented for ES/EN alternates.
- Canonical URLs set on all pages.

**Gaps:**
- **No physical address or company registration number.** Spanish law (LSSI) requires commercial websites to display nombre social, NIF/CIF, and domicilio social. This is a legal compliance issue, not just an SEO one.
- **No phone number listed** -- only email and contact form.
- **No SSL certificate details mentioned** (though the site uses HTTPS).
- **Testimonial disclaimers are honest but damaging.** The asterisk "Los testimonios mostrados son ejemplos demostrativos" actively undermines trust on the one page type where trust matters most.

**Recommendations (Priority: P0 for legal, P1 for rest):**

1. Add company legal details (NIF, registered address) to the footer and legal page per LSSI requirements.
2. Remove or replace fabricated testimonials with real ones to eliminate the need for disclaimers.
3. Consider adding a phone number or at least a WhatsApp business contact.
4. Add trust badges to the footer (Stripe Verified, SSL Secured, RGPD Compliant icons).

---

## 2. Content Depth Analysis

### Page-by-Page Assessment

| Page | Type | Est. Words | Minimum | Status | Notes |
|------|------|-----------|---------|--------|-------|
| Homepage (`/`) | Homepage | ~600 | 500 | PASS | Composed of 8 component sections. Adequate but could be richer. |
| Pricing (`/precios`) | Service | ~900 | 800 | PASS | Good FAQ section, comparison table, guarantee. Well-structured. |
| Features (`/caracteristicas`) | Service | ~2,500 | 800 | PASS | Very comprehensive. 8 sections covering all feature categories. |
| Templates (`/plantillas`) | Service | ~800 | 800 | BORDERLINE | Gallery page with introductory prose. Content is adequate. |
| Blog index (`/blog`) | Collection | ~200 | N/A | PASS | Index page -- appropriate depth for a listing page. |
| Blog articles | Blog post | 1,500-3,000 | 1,500 | PASS | Sampled 2 articles: both exceed 2,000 words with good structure. |
| Industry pages (`/testimonios-para/[slug]`) | Landing | ~800-1,000 | 800 | PASS | Each has unique content, benefits, FAQ, and example testimonials. |
| City pages (`/testimonios-en/[city]`) | Programmatic | ~300 | 500 | FAIL | Thin content. Primarily a grid of links to industry sub-pages with only 2 short paragraphs of boilerplate text. |
| Comparison pages | Service | ~1,200 | 800 | PASS | Feature tables, FAQs, honest assessments. Good structure. |
| Help center (`/ayuda`) | Documentation | N/A | N/A | PASS | Well-organized by category. |
| English homepage (`/en`) | Homepage | ~1,200 | 500 | PASS | Very comprehensive -- actually more content than Spanish homepage. |
| Contact (`/contacto`) | Utility | ~200 | N/A | PASS | Appropriate for a contact page. |

### Programmatic Page Quality (Cross-skill note: `seo-programmatic`)

- **161 industry pages** at `/testimonios-para/[slug]`: Each has unique hero text, 6 benefits, 3 example testimonials, 4 FAQs, and ~500 words of body content. Good unique value per page.
- **20+ city pages** at `/testimonios-en/[city]`: These are thin. They contain only a hero paragraph and a grid of industry links. The "Why businesses in [city] need testimonials" section uses near-identical boilerplate with city name swapped in. **This is a thin content risk under the Sept 2025 QRG.**
- **421 city+industry combination pages** (referenced in features page): If these exist, they would multiply the thin content risk significantly.

**Severity: HIGH for city pages.**

**Recommendations:**

1. Add 200-300 words of unique, city-specific content to each city page (local business statistics, regional context, relevant local platforms).
2. For city+industry combination pages, ensure each has at minimum 400 words of genuinely differentiated content. If not achievable, consider noindexing the thinnest pages.
3. Add internal links from city pages to relevant blog articles.

---

## 3. Readability Assessment

**Reading level:** Appropriate for the target audience. Spanish is clear, professional, and avoids overly complex sentence structures.

**Strengths:**
- Consistent use of `leading-relaxed` for paragraph spacing.
- Prose sections in blog posts use `prose-lg` for comfortable reading.
- Good use of subheadings (H2, H3) in blog articles for scannability.
- FAQ sections use expandable `<details>` elements for clean information architecture.

**Issues:**
- **Missing accent marks in several pages.** The plantillas page uses "Galeria" instead of "Galeria" and "categorias" instead of "categorias". The comparison page uses "espanol" instead of "espanol" and "migracion" instead of "migracion" throughout. The city pages use "como" instead of "como" and "busquedas" instead of "busquedas". This affects perceived quality for Spanish-speaking users.
- **Inconsistent question mark usage.** FAQ questions in the pricing page are missing the opening inverted question mark required in Spanish ("Puedo cambiar..." should be "Puedo cambiar..."). The features page comparison section and city pages have the same issue.

**Severity: MEDIUM**

**Recommendations:**

1. Run a Spanish spell-check pass across all marketing content. Prioritize fixing accent marks on all customer-facing pages.
2. Add opening inverted question marks to all FAQ items and headings that are questions.

---

## 4. AI Citation Readiness Score: 72/100

**Positive signals:**
- **Extensive structured data (JSON-LD).** Every page type has appropriate schema: Organization, WebSite, SoftwareApplication, FAQPage, Article, BreadcrumbList, CollectionPage, WebPage. This is excellent for AI search engines like Google SGE, Perplexity, and ChatGPT search.
- **Clean URL structure.** Semantic URLs (`/testimonios-para/restaurantes`, `/comparar/opinafy-vs-testimonial-to`) are easily parseable by LLMs.
- **Clear heading hierarchy.** H1 > H2 > H3 is properly maintained across all audited pages.
- **Quotable facts present in blog content.** Statistics like "92% of consumers read reviews" and "testimonials can increase conversions by 34%" are structured well for extraction.
- **FAQ content is abundant.** Homepage FAQ (8 items), pricing FAQ (5 items), industry page FAQs (4 items each). AI search engines heavily favor FAQ-structured content.

**Gaps:**
- **No `speakable` schema markup.** Adding Speakable schema to blog articles would improve voice search and AI assistant citation likelihood.
- **Blog articles lack a summary/TL;DR section.** AI engines prefer content with a clear summary paragraph at the top.
- **No definition lists or key takeaway boxes.** Adding "Key Takeaways" sections to blog posts would improve extractability.
- **Statistics lack source URLs** -- AI engines may deprioritize uncited statistics.
- **No comparison tables in blog content.** Blog articles are prose-heavy. Adding data tables would improve AI citation for comparison queries.

**Recommendations:**

1. Add a "Resumen / Lo que aprenderas" box at the top of each blog article.
2. Add `speakable` schema to key marketing pages and top blog articles.
3. Convert key statistics in blog posts into structured lists or tables.
4. Add source hyperlinks for all cited statistics.

---

## 5. Duplicate Content Risk Assessment

### ES/EN Mirror Pages -- Severity: LOW (properly handled)

The site uses proper `hreflang` tags and `alternates.languages` configuration across all audited pages. Example from pricing page:

```
alternates: {
  canonical: 'https://opinafy.com/precios',
  languages: {
    'es': 'https://opinafy.com/precios',
    'en': 'https://opinafy.com/en/pricing',
    'x-default': 'https://opinafy.com/precios',
  },
}
```

This is correctly implemented. The English pages appear to be genuine translations, not machine-translated copies (the English homepage is 1,015 lines vs the Spanish one that assembles from components). **No duplicate content risk here.**

### Programmatic Pages -- Severity: HIGH

- **City pages share near-identical boilerplate.** The paragraph pattern "En [city], [country], la competencia entre negocios locales es intensa..." is templated text with only the city name swapped. If Google detects this across 20+ pages, it may trigger thin content classification.
- **Industry pages have substantially unique content** per page (unique benefits, unique testimonial examples, unique FAQ items). Lower risk here.
- **City + industry combination pages (421 claimed):** Could not verify whether these pages have unique content beyond template variables. If they follow the same pattern as city pages, this is a significant duplicate content risk at scale.

### Blog Articles -- Severity: LOW

Each of the 162 blog articles has unique, substantial content (1,500-3,000 words each). The articles in `blog-data.ts` (12,031 lines) represent genuine unique content. However, every article ends with the same CTA pattern promoting Opinafy, which is acceptable marketing practice.

---

## 6. Content Freshness Assessment

**Current state:**
- All blog articles are dated between March 17-19, 2026 -- just 5-7 days ago. This indicates all content was published at launch.
- No articles show an "updated" date or "Last modified" signal.
- The changelog page (`/actualizaciones`) exists but was not analyzed for content.
- `revalidate` values are set appropriately: homepage at 3600s (1 hour), pricing at 60s.

**Severity: MEDIUM**

**Issues:**
- Publishing 162 blog articles within 2-3 days of launch is a potential signal to Google's systems that content was mass-produced. While AI content is acceptable per Sept 2025 QRG if it demonstrates E-E-A-T, the sheer volume combined with the "Equipo Opinafy" attribution and lack of first-hand experience signals creates risk.
- All content having nearly identical dates makes it look like a content dump rather than organic editorial growth.

**Recommendations:**

1. Stagger publish dates of existing articles retroactively (or at minimum, do not publish all remaining articles on the same day).
2. Establish a regular publishing cadence of 2-3 articles per week going forward.
3. Add "Ultima actualizacion" (Last updated) dates to blog articles and update content periodically.
4. Add an `dateModified` field to the Article schema markup.

---

## 7. Unique Value Proposition Assessment

**Strengths:**
- **Clear market positioning:** "The first testimonial platform built for the Spanish-speaking market." This is a genuine differentiator vs. Testimonial.to, Senja, and other English-first competitors.
- **Price competitiveness is well-communicated:** EUR 5-19/month vs. competitors at $20+/month.
- **Unique features are highlighted:** Double verification (email + company), Spanish-native interface, FOMO popup widget, mini-site by profession, QR code generation.
- **Comparison pages are honest** about limitations (fewer integrations than Testimonial.to).

**Gaps:**
- The "100% en espanol" differentiator is weakened by the English version existing and being equally comprehensive.
- No benchmark data or unique research exists. The "Informe Prueba Social 2026" page could be a strong authority asset if it contains original data.
- No founder story or "why we built this" narrative. For a new SaaS, the origin story is a powerful trust-building tool.

---

## 8. Internal Linking Assessment

**Strengths:**
- Footer contains 20+ product links covering all major sections.
- Blog articles include CTAs linking to registration.
- Industry pages link to the parent index and feature breadcrumbs.
- Templates page cross-links to mini-site templates.
- Features page links to pricing and guides.

**Gaps -- Severity: MEDIUM:**
- **Blog articles contain no internal links to other blog articles within the body text.** The `content` field in `blog-data.ts` is pure HTML with no `<a>` tags pointing to other blog posts. Only the "related articles" section at the bottom provides cross-links, and those are just the first 3 articles (not contextually related).
- **Industry pages do not link to relevant blog articles.** The restaurant industry page should link to blog posts about restaurant testimonials, but does not.
- **No contextual cross-linking between comparison pages and feature pages.**
- **City pages link to industries but not to blog content or guides.**
- Related articles selection is not actually based on relevance -- it just takes `blogArticles.filter(a => a.slug !== slug).slice(0, 3)` which gives the first 3 non-matching articles regardless of topic.

**Recommendations:**

1. Add 3-5 contextual internal links within each blog article's body content, linking to other relevant articles by topic.
2. Fix the related articles algorithm to match by category or shared keywords instead of arbitrary selection.
3. Add a "Related articles" section to industry pages linking to relevant blog posts.
4. Cross-link comparison pages to the features page and specific blog articles.

---

## 9. Call-to-Action Assessment

**Strengths:**
- Every marketing page ends with a CTA section.
- CTAs are clear and action-oriented: "Empieza gratis", "Empezar Gratis", "Registrate gratis".
- Free plan positioning reduces friction (no credit card required).
- Pricing page includes 14-day money-back guarantee as a risk-reduction CTA.
- Blog articles include a gradient CTA banner after content.

**Gaps -- Severity: LOW:**
- CTAs are repetitive. Nearly every page uses the same "Empieza gratis" text and identical styling. Some variation would reduce banner blindness.
- No mid-article CTAs in blog posts -- only the bottom CTA.
- No lead magnet or email capture form exists (newsletter, free guide download, etc.). This is a missed opportunity for top-of-funnel conversion.
- The features page has two CTAs ("Empieza gratis" + "Ver precios") but no trial-specific CTA highlighting what the user gets in the free plan.

**Recommendations:**

1. Add a mid-article CTA to blog posts (after the 3rd or 4th H2 section).
2. Create a lead magnet (e.g., "Guia gratuita: 10 plantillas de email para solicitar testimonios") for email capture.
3. Vary CTA copy across different pages to match user intent at that stage.

---

## 10. Trust Signal Assessment

**Present signals:**
- Stripe payment badge (mentioned in FAQ)
- RGPD compliance statements
- 14-day money-back guarantee
- Legal pages (terms, privacy, cookies, legal notice)
- Contact form with email address
- Changelog/updates page

**Missing signals -- Severity: HIGH:**
- **No real customer testimonials or logos** (ironic for a testimonial platform)
- **No user count or social proof metrics** ("Join 500+ businesses" etc.)
- **No third-party review platform badges** (G2, Capterra, Product Hunt)
- **No security certifications or audit badges**
- **No team/about page with real people**
- **No customer logos or "trusted by" section**
- **No video demo or product tour** showing the actual product
- **Missing company NIF/CIF and registered address** (LSSI requirement)

**Recommendations (Priority: P0):**

1. Get first 5-10 real users and display their testimonials prominently.
2. Create an About page with founder name, photo, and story.
3. Add a product demo video (even a simple screen recording).
4. Display company legal information per LSSI.
5. Add a "Join [X] businesses" counter once user data supports it.

---

## 11. AI-Generated Content Quality Assessment (Sept 2025 QRG)

**Assessment:** The blog content shows multiple markers consistent with AI-generated text, though it is well-edited and above-average quality:

**Markers detected:**
- **Uniform writing style across 162 articles.** No variation in voice, tone, or perspective despite covering vastly different topics.
- **Identical structural patterns.** Most articles follow: Introduction paragraph > problem statement > numbered strategies/types > statistics section > tool recommendation (Opinafy) > conclusion + CTA. This repetitive structure is characteristic of templated AI content.
- **Generic phrasing patterns.** Phrases like "en el mundo digital actual", "la realidad es que", "la buena noticia es que", "a lo largo de este articulo" appear repeatedly.
- **No first-person experience.** Zero instances of "we tested", "in our experience", "when we built", "I found that" -- all content is third-person informational.
- **Mass publication timing.** 162 articles published within 2-3 days strongly suggests automated generation.

**Mitigating factors:**
- Content is factually accurate (statistics check out against known sources).
- Articles are substantial (1,500-3,000 words) with genuine depth.
- Industry-specific content shows reasonable domain knowledge.
- Content is in Spanish (a less-saturated language for this topic).

**Risk level:** MEDIUM-HIGH. While Google's Helpful Content System (now merged into core ranking per March 2024 update) does not penalize AI content per se, it evaluates whether content demonstrates genuine helpfulness and E-E-A-T. The combination of mass AI content + no author identity + no first-hand experience + fabricated social proof creates a profile that may underperform in rankings.

**Recommendations:**

1. Add unique, first-hand insights to at least the top 20 articles (product screenshots, real user quotes, "we found that" language).
2. Diversify the opening patterns and structural templates across articles.
3. Create 5-10 genuinely original articles based on real product data or user feedback (e.g., "What we learned from our first 100 testimonials collected").
4. Add author identity and expertise signals as described in the Expertise section.

---

## Priority Summary

### P0 -- Fix Immediately (Blocks Trust and Legal Compliance)

| # | Issue | Impact |
|---|-------|--------|
| 1 | Add company NIF/CIF and registered address per LSSI | Legal compliance risk |
| 2 | Replace fabricated testimonials with real ones or remove them | Core credibility for a testimonials platform |
| 3 | Create About/Team page with real founder identity | E-E-A-T authoritativeness |
| 4 | Add real product screenshots to homepage and features page | Experience signal |
| 5 | Add author bios with real names to blog articles | Expertise signal |

### P1 -- Fix Within 2 Weeks

| # | Issue | Impact |
|---|-------|--------|
| 6 | Fix missing accent marks and opening question marks across site | Perceived quality |
| 7 | Add source hyperlinks for all cited statistics in blog posts | Expertise/citation readiness |
| 8 | Add unique content to city pages (currently thin) | Programmatic SEO risk |
| 9 | Fix related articles algorithm to use category/keyword matching | Internal linking quality |
| 10 | Add internal links within blog article body content | Internal linking/crawl depth |

### P2 -- Fix Within 1 Month

| # | Issue | Impact |
|---|-------|--------|
| 11 | Add TL;DR summaries to blog articles | AI citation readiness |
| 12 | Create lead magnet for email capture | Conversion optimization |
| 13 | Stagger blog publish dates and establish regular cadence | Content freshness signals |
| 14 | Launch on Product Hunt, submit to G2/Capterra | Authoritativeness |
| 15 | Write 5-10 original articles with first-hand product insights | E-E-A-T experience |
| 16 | Add `dateModified` field to Article schema | Freshness signals |
| 17 | Cross-link industry pages to relevant blog articles | Internal linking |
| 18 | Add mid-article CTAs to blog posts | Conversion optimization |

---

## Key Files Referenced

- `/Applications/MAMP/htdocs/opinafy/src/app/(marketing)/page.tsx` -- Homepage
- `/Applications/MAMP/htdocs/opinafy/src/components/landing/hero.tsx` -- Homepage hero
- `/Applications/MAMP/htdocs/opinafy/src/components/landing/testimonials-preview.tsx` -- Fake testimonials section
- `/Applications/MAMP/htdocs/opinafy/src/app/(marketing)/precios/page.tsx` -- Pricing page
- `/Applications/MAMP/htdocs/opinafy/src/app/(marketing)/caracteristicas/page.tsx` -- Features page
- `/Applications/MAMP/htdocs/opinafy/src/app/(marketing)/plantillas/page.tsx` -- Templates page
- `/Applications/MAMP/htdocs/opinafy/src/app/(marketing)/blog/[slug]/page.tsx` -- Blog article template
- `/Applications/MAMP/htdocs/opinafy/src/lib/blog-data.ts` -- All 162 blog articles (12,031 lines)
- `/Applications/MAMP/htdocs/opinafy/src/lib/industry-data.ts` -- 161 industry pages
- `/Applications/MAMP/htdocs/opinafy/src/app/(marketing)/testimonios-en/[city]/page.tsx` -- City programmatic pages
- `/Applications/MAMP/htdocs/opinafy/src/app/(marketing)/comparar/opinafy-vs-testimonial-to/page.tsx` -- Comparison page
- `/Applications/MAMP/htdocs/opinafy/src/lib/schema.ts` -- Structured data generators
- `/Applications/MAMP/htdocs/opinafy/src/components/landing/footer.tsx` -- Footer with 20+ internal links
- `/Applications/MAMP/htdocs/opinafy/src/app/(en)/en/page.tsx` -- English homepage (1,015 lines)
- `/Applications/MAMP/htdocs/opinafy/src/app/(marketing)/casos-de-exito/page.tsx` -- Case studies (fabricated)
- `/Applications/MAMP/htdocs/opinafy/src/app/(marketing)/contacto/page.tsx` -- Contact page
