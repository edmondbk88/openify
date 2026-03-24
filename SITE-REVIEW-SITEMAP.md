# Sitemap Audit Report — 2026-03-24

## Methodology
Cross-referenced every `page.tsx` file against `src/app/sitemap.ts` to find gaps in both directions.

---

## 1. Pages MISSING from Sitemap

### 1A. EN pages with page.tsx but NO sitemap entry

| Route | Notes |
|-------|-------|
| `/en/about` | page.tsx exists at `(en)/en/about/page.tsx`. The ES `/sobre` IS in sitemap with hreflang pointing to `/en/about`, but there is NO explicit `/en/about` entry in the `englishPages` array. The EN URL only appears as an hreflang alternate on the ES entry. **Google requires both URLs to be listed independently in the sitemap for proper indexing.** |

**Wait -- correction:** Reviewing more carefully, the ES static entry for `/sobre` (line 99) includes `alternates: bilingual('/sobre', '/en/about')` which means `/en/about` appears as an alternate. However, unlike every other bilingual page, **`/en/about` does NOT have its own explicit entry in the `englishPages` array** (lines 360-613). Every other EN page (features, contact, pricing, etc.) has both an ES entry and a dedicated EN entry. `/en/about` is the only one missing its dedicated EN entry.

### 1B. Auth/dashboard pages (correctly excluded)

These pages exist but are correctly absent from the sitemap (blocked by robots.txt):

| Route | Reason for exclusion |
|-------|---------------------|
| `/login` | Auth page, blocked in robots.txt |
| `/registro` | Auth page, blocked in robots.txt |
| `/forgot-password` | Auth page, blocked in robots.txt |
| `/en/login` | Auth page (EN mirror of /login) |
| `/en/register` | Auth page (EN mirror of /registro) |
| `/en/forgot-password` | Auth page (EN mirror) |
| `/admin/*` (all 8 pages) | Admin panel, blocked in robots.txt |
| `/dashboard` | Dashboard, blocked in robots.txt |
| `/configuracion` | Dashboard settings, blocked in robots.txt |
| `/facturacion` | Billing, blocked in robots.txt |
| `/mi-sitio` | Dashboard feature, blocked in robots.txt |
| `/proyectos/*` (all sub-pages) | Dashboard, blocked in robots.txt |
| `/soporte/*` | Support tickets, blocked in robots.txt |

### 1C. Public utility pages NOT in sitemap

| Route | Analysis |
|-------|----------|
| `/compartir/[testimonialId]` | Public testimonial share page. Could arguably be in sitemap (dynamic, user-generated content). Low priority. |
| `/p/[username]/[slug]` | Public collection form. Probably should NOT be in sitemap (it's a form, not content). |
| `/p/[username]/[slug]/gracias` | Thank-you page after submission. Should NOT be in sitemap. |
| `/s/[username]/todos` | "View all" page for mini sites. The main `/s/[username]` IS in sitemap (dynamic from DB), but the `/todos` sub-page is NOT. **Consider adding.** |
| `/verificado` | Public verified badge check page at root level. Different from `/verificado-badge` (which IS in sitemap). This appears to be a separate page. **Missing from sitemap.** |

---

## 2. Orphan Sitemap Entries (URLs in sitemap without page.tsx)

**No orphan static entries found.** All static URLs in the sitemap have corresponding page.tsx files.

For dynamic entries:
- Blog slugs come from `blog-data.ts` / `blog-data-en.ts` -- served by `blog/[slug]/page.tsx` (both ES and EN exist)
- Template IDs come from `widget-templates.ts` -- served by `plantillas/[id]/page.tsx` and `en/templates/[id]/page.tsx`
- Mini site template IDs come from `minisite-templates.ts` -- served by corresponding dynamic pages
- Industry slugs come from `industry-data.ts` / `industry-data-en.ts` -- served by `testimonios-para/[slug]/page.tsx` and `en/testimonials-for/[slug]/page.tsx`
- City slugs come from `cities-data.ts` -- served by `testimonios-en/[city]/page.tsx`
- City+industry combos -- served by `testimonios-en/[city]/[industry]/page.tsx`
- Profile pages come from DB -- served by `s/[username]/page.tsx`

All dynamic routes have their corresponding page.tsx files.

---

## 3. Template Demo Pages Missing from Sitemap

| Route | Notes |
|-------|-------|
| `/plantillas/[id]/demo` | page.tsx exists. These are live demo pages for widget templates. **Not in sitemap.** |
| `/en/templates/[id]/demo` | page.tsx exists. EN counterpart. **Not in sitemap.** |

There are 100 widget templates, so this would be 200 additional URLs. These are content-rich pages that could drive SEO traffic ("see demo of testimonial widget X").

---

## 4. Hreflang Pair Verification

### 4A. Complete bilingual pairs (both page.tsx files exist)
All of the following have both ES and EN page.tsx files confirmed:

- `/` <-> `/en`
- `/precios` <-> `/en/pricing`
- `/blog` <-> `/en/blog`
- `/blog/[slug]` <-> `/en/blog/[slug]`
- `/plantillas` <-> `/en/templates`
- `/plantillas/[id]` <-> `/en/templates/[id]`
- `/plantillas-minisitio` <-> `/en/minisite-templates`
- `/plantillas-minisitio/[id]` <-> `/en/minisite-templates/[id]`
- `/legal` <-> `/en/legal`
- `/privacidad` <-> `/en/legal/privacy`
- `/terminos` <-> `/en/legal/terms`
- `/cookies` <-> `/en/legal/cookies`
- `/caracteristicas` <-> `/en/features`
- `/sobre` <-> `/en/about`
- `/contacto` <-> `/en/contact`
- `/comparar` <-> `/en/compare`
- `/comparar/opinafy-vs-testimonial-to` <-> `/en/compare/opinafy-vs-testimonial-to`
- `/comparar/opinafy-vs-senja` <-> `/en/compare/opinafy-vs-senja`
- `/comparar/mejores-herramientas-testimonios` <-> `/en/compare/best-testimonial-tools`
- `/descargas` <-> `/en/downloads`
- `/calculadora-roi` <-> `/en/roi-calculator`
- `/informe-prueba-social-2026` <-> `/en/state-of-social-proof-2026`
- `/casos-de-exito` <-> `/en/case-studies`
- `/guias` <-> `/en/guides`
- `/guias/wordpress` <-> `/en/guides/wordpress`
- `/guias/shopify` <-> `/en/guides/shopify`
- `/guias/wix` <-> `/en/guides/wix`
- `/guias/squarespace` <-> `/en/guides/squarespace`
- `/guias/webflow` <-> `/en/guides/webflow`
- `/guias/google-tag-manager` <-> `/en/guides/google-tag-manager`
- `/afiliados` <-> `/en/affiliates`
- `/verificado-badge` <-> `/en/verified`
- `/agencias` <-> `/en/agencies`
- `/health-score` <-> `/en/health-score`
- `/certificacion` <-> `/en/certification`
- `/ranking` <-> `/en/ranking`
- `/actualizaciones` <-> `/en/changelog`
- `/ayuda` <-> `/en/help`
- `/ayuda/[slug]` <-> `/en/help/[slug]`
- `/prensa` <-> `/en/press`
- `/integraciones/zapier` <-> `/en/integrations/zapier`
- `/testimonios-para` <-> `/en/testimonials-for`
- `/testimonios-para/[slug]` <-> `/en/testimonials-for/[slug]`

### 4B. Spanish-only pages (no EN counterpart exists or needed)

- `/testimonios-en` (city index) -- uses `esOnly()`, correct
- `/testimonios-en/[city]` -- uses `esOnly()`, correct
- `/testimonios-en/[city]/[industry]` -- uses `esOnly()`, correct

### 4C. Hreflang issue: `/en/about` missing its own sitemap entry

As noted in section 1A, the `/sobre` entry correctly declares `/en/about` as an alternate, but `/en/about` does not have its own entry in the sitemap. This means:
- Google crawling `/en/about` from the sitemap: **it won't find it** (it's not listed as a primary URL)
- Google crawling the rendered page: it may discover the hreflang from on-page tags (if present)
- **Best practice:** Add an explicit `/en/about` entry to `englishPages` array, mirroring how every other EN page is handled

---

## 5. Summary of Issues Found

### HIGH Priority
| # | Issue | Impact |
|---|-------|--------|
| 1 | `/en/about` missing as explicit sitemap entry | EN about page may not get properly indexed; only appears as hreflang alternate of `/sobre` |

### MEDIUM Priority
| # | Issue | Impact |
|---|-------|--------|
| 2 | `/plantillas/[id]/demo` (100 pages) not in sitemap | Missing 100 ES demo pages from sitemap |
| 3 | `/en/templates/[id]/demo` (100 pages) not in sitemap | Missing 100 EN demo pages from sitemap |
| 4 | `/s/[username]/todos` not in sitemap | "View all testimonials" pages for mini sites not indexed |

### LOW Priority
| # | Issue | Impact |
|---|-------|--------|
| 5 | `/verificado` (root-level page) not in sitemap | Separate page from `/verificado-badge`; unclear if intentional |
| 6 | `/compartir/[testimonialId]` not in sitemap | Public share pages could be indexed but are ephemeral |

### Confirmed OK (no action needed)
- All auth pages (`/login`, `/registro`, `/en/login`, `/en/register`, `/forgot-password`, `/en/forgot-password`) correctly excluded -- blocked by robots.txt
- All admin pages correctly excluded
- All dashboard pages correctly excluded
- All collection form pages (`/p/[username]/[slug]`) correctly excluded
- No orphan sitemap entries found (no 404 risk from sitemap)
- All hreflang pairs have both page.tsx files present (except the `/en/about` listing issue)
- City/industry programmatic SEO pages properly use `esOnly()` helper
- Blog and industry pages correctly handle cross-language slug matching

---

## Estimated URL Count Impact

If all issues were fixed:
- Current sitemap: ~1,414 URLs (as documented)
- Adding `/en/about`: +1
- Adding template demo pages (ES + EN): +200
- Adding `/s/[username]/todos`: +N (depends on number of pro users)
- Adding `/verificado`: +1
- **New total: ~1,616+ URLs**
