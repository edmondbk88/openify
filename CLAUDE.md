# Opinafy — Project Instructions

## Overview
Opinafy is a bilingual (ES/EN) SaaS platform for collecting, managing, and displaying verified customer testimonials. Target: Spanish-speaking businesses. Zero direct competition in Spanish market.

**Founder:** Edmond Bojalil — Senior Full Stack Developer, 15+ years, based in Madrid.
**Domain:** opinafy.com | **Repo:** github.com/edmondbk88/openify.git

## Tech Stack
- **Framework:** Next.js 14 (App Router) + TypeScript
- **Styling:** Tailwind CSS
- **Database:** Supabase (PostgreSQL + Auth + Storage) — ref: rckjevsqxkfixkdloqjv
- **Payments:** Stripe REST API (NOT SDK — connection issues in Vercel serverless)
- **Email:** Resend (hola@opinafy.com) — lazy init with `getResend()`
- **Deploy:** Vercel (auto-deploy from GitHub on push to main)
- **Widget:** Vanilla JS + Shadow DOM (~25KB), compiled with esbuild
- **Testing:** Playwright (E2E), Jest (unit), GitHub Actions CI/CD
- **SEO Score:** 82/100 (as of 2026-03-24)

## Pricing (4 plans)
| Plan | Price | Projects | Testimonials | Video | Mini Site |
|------|-------|----------|-------------|-------|-----------|
| Free | €0 | 1 | 10 | No | No |
| Mini Sitio | €5 | 1 | 20 | No | Yes |
| Pro | €9 | 3 | Unlimited | No | Yes |
| Business | €19 | 20 | Unlimited | Yes | Yes |

## Project Structure

```
src/
├── app/
│   ├── (marketing)/     # Spanish public pages (landing, blog, pricing, templates, etc.)
│   ├── (en)/en/         # English public pages (mirror of marketing)
│   ├── (dashboard)/     # Authenticated user dashboard
│   ├── (admin)/admin/   # Admin panel (is_admin only)
│   ├── (auth)/          # Login, registro, forgot-password
│   ├── api/             # 20 API route groups (see below)
│   ├── p/[username]/[slug]/  # Public collection form
│   ├── s/[username]/    # Mini site pages
│   ├── layout.tsx       # Root layout — dynamic lang via middleware x-locale header
│   ├── sitemap.ts       # Dynamic sitemap (1400+ URLs, bilingual hreflang)
│   └── robots.ts        # Blocks /admin, /dashboard, UTM params; allows AI bots
├── components/
│   ├── ui/              # Button, Input, Card, Modal, Spinner, Toast, etc.
│   ├── landing/         # Navbar, Footer, Pricing, FAQ, CookieBanner, BlogList, etc.
│   ├── dashboard/       # Sidebar, WidgetConfigurator, WidgetPreview, TestimonialCard
│   └── collection/      # CollectionForm, StarInput, PhotoUpload, VideoUpload, AudioUpload
├── lib/
│   ├── supabase/        # client.ts, server.ts, admin.ts, middleware.ts
│   ├── constants.ts     # PLAN_LIMITS, STRIPE_PRICES, getEffectivePlan()
│   ├── schema.ts        # All JSON-LD schemas (org, website, article, etc.) — accept lang param
│   ├── i18n.ts          # Dashboard translations ES/EN — t(key, locale)
│   ├── collection-translations.ts  # Collection form translations + detectLocale()
│   ├── blog-data.ts     # 160 ES blog articles (dates spread Oct 2025 - Mar 2026)
│   ├── blog-data-en.ts  # 160 EN blog articles
│   ├── widget-templates.ts  # 100 widget templates + toPreviewData()
│   ├── minisite-templates.ts # 30 mini site templates by profession
│   ├── industry-data.ts # 160 industry pages + 421 city+industry SEO pages
│   ├── city-industry-content.ts # Rich city profiles + industry insights for programmatic SEO
│   └── email-templates.ts # Branded HTML email templates (verification, approval, etc.)
├── middleware.ts        # Supabase session + x-locale header for lang detection
└── types/index.ts       # Plan, Testimonial, Project, WidgetLayout types
widget-src/              # Widget source → compiled to public/widget.js
e2e/                     # Playwright E2E tests (23 tests)
.github/workflows/       # CI (build+lint+test) + E2E (daily against production)
supabase/migrations/     # 21 migration files
```

## Key Architecture Decisions

### i18n Strategy
- Root layout reads `x-locale` header (set by middleware) → `<html lang="en"|"es">`
- EN pages live in `src/app/(en)/en/` with their own nested layout (metadata only, no html/body)
- Schema functions accept `lang` param: `organizationSchema({ lang: 'en' })`
- Dashboard uses `t(key, locale)` from i18n.ts + React Context (LocaleProvider)
- Collection forms detect browser language via Accept-Language header

### Stripe (IMPORTANT)
- **Use REST API** (`fetch` to `https://api.stripe.com/v1/`), NOT the Stripe SDK
- SDK v17-v20 has connection issues in Vercel serverless — this burned us multiple times
- Checkout returns `{ url }` JSON — client-side UpgradeButton handles redirect
- Base URL derived from request headers (not env var, which was empty in production)

### Widget
- Shadow DOM for CSS isolation, ~25KB gzipped
- Preview mode uses `window.__OPINAFY_PRELOAD__` global variable injection via iframe
- Widget preview iframe at 1024px virtual width with CSS scale transform
- Rebuild: `node widget-src/build.mjs` → commit `public/widget.js`

### Gifted Plans
- `getEffectivePlan(profile)` returns the higher of base plan or gifted plan
- Used in ALL plan limit checks (projects, testimonials, mini site, video, import)
- Admin can gift any plan for X days via `/admin/usuarios`

### Supabase
- RLS on all tables. Public routes use `createAdminClient()`, auth routes use `createClient()`
- All tables MUST have GRANT for `authenticated`, `anon`, `service_role`
- Admin client MUST have `cache: 'no-store'` in global fetch to prevent Next.js caching
- JSONB fields may come as string or object — always parse with fallback

### Templates Gallery (Lazy Loading)
- Server sends only 24 templates initially (via `toPreviewData()` — strips heavy fields)
- Client fetches more via `/api/templates?offset=X&limit=Y&category=Z`
- Category filters fetch ALL templates for that category from API
- Both ES and EN galleries use this pattern

## API Routes (20 groups)
| Route | Auth | Purpose |
|-------|------|---------|
| /api/auth/callback | No | OAuth callback |
| /api/projects | Yes | CRUD projects (enforces plan limits) |
| /api/testimonials | Mixed | POST public (rate-limited), GET/PATCH/DELETE auth |
| /api/testimonials/import | Yes | Bulk import from external platforms |
| /api/upload | No | Upload photo/video/audio to Supabase Storage |
| /api/widget/[projectId] | No | Widget data (CORS, cached) |
| /api/widget-preview/[projectId] | Yes | Preview with __OPINAFY_PRELOAD__ injection |
| /api/widget-demo/[templateId] | No | Template demo page |
| /api/templates | No | Paginated template data for gallery |
| /api/stripe/checkout | Yes | Create Stripe checkout session (REST API) |
| /api/stripe/portal | Yes | Billing portal |
| /api/stripe/webhook | No | Stripe webhook (HMAC-SHA256 verified) |
| /api/admin/users | Admin | User management + gift plans |
| /api/profile | Yes | GET/PATCH user profile |
| /api/tickets | Yes | Support ticket system |
| /api/automation | Yes | Email automation rules |
| /api/certification | Yes | Certification tiers (Bronze→Platinum) |
| /api/badge/[projectId] | No | SVG badge API |
| /api/health-score | No | Public social proof health score |
| /api/contact | No | Contact form submissions |

## Testing — MANDATORY

### Before EVERY commit:
1. `npm run build` must pass
2. `npx playwright test` must pass (E2E against production)
3. If you changed a feature, verify it works manually or add a test

### Test commands:
```bash
npm run build          # Build check (REQUIRED before push)
npm run lint           # ESLint
npm test               # Jest unit tests
npx playwright test    # E2E tests (23 tests against production)
npx playwright test --ui  # Interactive test runner
```

### E2E test coverage (e2e/critical-paths.spec.ts):
- Homepage ES/EN (hero, CTAs, lang attribute, structured data)
- Templates gallery (loads, filters work, pagination)
- Pricing (all 4 plans visible)
- Blog (articles load, TL;DR present)
- About page (founder info visible)
- API endpoints (templates, category filter)
- SEO (robots.txt, sitemap.xml, llms.txt, all critical pages return 200)
- Cookie banner bilingual

### CI/CD (GitHub Actions):
- **ci.yml:** Every push/PR → lint + unit tests + build
- **e2e.yml:** Daily 8am UTC + manual → Playwright against production

### When to add tests:
- New page/route → add status 200 check to "critical pages return 200"
- New API endpoint → add to API test section
- New UI feature → add E2E test for the user flow
- Bug fix → add regression test

## Common Gotchas
1. **"Permission denied" on Supabase:** GRANT missing for roles
2. **Stripe errors:** Use REST API, not SDK. Trim env vars (Vercel adds `\n`)
3. **Widget not updating:** Rebuild with `node widget-src/build.mjs` + commit output
4. **EN pages wrong lang:** Ensure middleware sets x-locale header, root layout reads it
5. **Template filters empty:** API route must support `?category=` param, gallery must fetch on filter
6. **Blog not caching:** Don't access `searchParams` in server component (forces dynamic). Use client component with `useSearchParams()`
7. **Schema on EN pages:** Pass `{ lang: 'en' }` to ALL schema functions
8. **New DB columns:** ALTER TABLE + GRANT permissions + update TypeScript types
9. **Env vars on Vercel:** Use `printf` not `echo` (trailing newlines). NEXT_PUBLIC_ vars need redeploy
10. **Gifted plans:** Always use `getEffectivePlan(profile)` not `profile.plan` directly

## Security Headers (next.config.mjs)
- HSTS (2 years), CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy
- Permissions-Policy: camera/mic allowed ONLY on /p/* (collection pages)
- Content-Language: en for /en/*, es for everything else
- CORS enabled for /api/widget/* and /widget.js

## SEO Status (2026-03-24)
- **Score:** 82/100 (up from 68)
- **Pages:** ~1,414 in sitemap (bilingual with hreflang)
- **Schema:** Organization, WebSite, SoftwareApplication, FAQPage, Article, BreadcrumbList, CollectionPage
- **AI crawlers:** Allowed (GPTBot, ClaudeBot, PerplexityBot, etc.)
- **llms.txt:** Present at /llms.txt
- **Remaining:** Real testimonials, NIF/CIF legal data, product screenshots needed for 90+
