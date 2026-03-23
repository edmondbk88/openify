# Opinafy - Project Instructions

## Overview
Opinafy is a Spanish-native SaaS platform for collecting, managing, and displaying verified customer testimonials. Target market: Spanish-speaking businesses.

## Tech Stack
- **Framework:** Next.js 14 (App Router) + TypeScript
- **Styling:** Tailwind CSS
- **Database:** Supabase (PostgreSQL + Auth + Storage)
- **Payments:** Stripe (REST API, NOT SDK due to Vercel compatibility issues)
- **Email:** Resend (hola@opinafy.com)
- **Deploy:** Vercel (auto-deploy from GitHub)
- **Widget:** Vanilla JS with Shadow DOM, compiled with esbuild

## Key Architecture Decisions
- **Stripe:** Use direct REST API calls (`fetch` to `https://api.stripe.com/v1/`), NOT the Stripe SDK. The SDK v17-v20 has connection issues in Vercel serverless.
- **Widget:** Self-contained JS (~25KB) using Shadow DOM for CSS isolation. Loads Google Fonts dynamically. Rebuilt with `node widget-src/build.mjs`.
- **RLS:** Tables use Row Level Security. API routes that need public access (testimonials POST, widget GET) use `createAdminClient()`. User-facing routes use `createClient()` (server) for auth.
- **Grants:** All tables MUST have explicit GRANT for `authenticated`, `anon`, and `service_role` roles. Missing grants = "permission denied".

## Important Files
- `src/lib/supabase/server.ts` - Server client (uses cookies for auth)
- `src/lib/supabase/admin.ts` - Admin client (bypasses RLS)
- `src/lib/stripe.ts` - Stripe helper (lazy init, but prefer REST API)
- `src/lib/constants.ts` - Plan limits, prices
- `src/lib/blog-data.ts` - 80+ blog articles (static)
- `src/lib/widget-templates.ts` - 100 widget templates (incl 35 creative)
- `src/lib/minisite-templates.ts` - 30 mini site templates by profession
- `src/lib/industry-data.ts` - 160 industry pages + 421 city+industry SEO pages
- `widget-src/` - Widget source (compile with `node widget-src/build.mjs`)

## Database
- **Supabase project ref:** rckjevsqxkfixkdloqjv
- Management API and Vercel tokens: stored in .env.local (NOT in repo)
- When adding env vars to Vercel, use `printf` (not echo) to avoid trailing newlines
- NEXT_PUBLIC_ vars are embedded at build time

## Common Gotchas
1. **New DB columns:** After ALTER TABLE, also GRANT permissions to roles
2. **Stripe in API routes:** Use `createAdminClient()` for DB ops, `createClient()` only for auth
3. **Widget changes:** Must rebuild with `node widget-src/build.mjs` AND commit `public/widget.js`
4. **Server components vs client:** Dashboard pages fetch data server-side, interactive parts need 'use client'
5. **Supabase JSONB:** May come as string or object, always parse with fallback

## Development Workflow

### Pre-Commit Checklist
- [ ] `npm run build` passes without errors
- [ ] API routes use `createAdminClient()` for DB ops that bypass RLS, `createClient()` for auth
- [ ] New DB columns have GRANT permissions for `authenticated`, `anon`, `service_role`
- [ ] Supabase JSONB fields parsed with fallback (may come as string or object)
- [ ] Widget rebuilt if changed: `node widget-src/build.mjs` AND commit `public/widget.js`
- [ ] All UI text is in Spanish
- [ ] Lazy initialization for external services (Resend, Stripe) -- never instantiate at module level

### Testing & Build
- Build: `npm run build` (must pass before any deploy)
- Lint: `npm run lint`
- Deploy: Auto-deploy from GitHub to Vercel on push to main
- For significant changes, create a branch (`feature/`, `fix/`) and PR before merging to main

### Common Debugging Steps
1. **"Permission denied" on Supabase:** Check GRANT statements for all roles (`authenticated`, `anon`, `service_role`)
2. **Stripe connection issues:** Use REST API (`fetch` to `https://api.stripe.com/v1/`), NOT the Stripe SDK
3. **Build crashes on env vars:** Ensure external service clients use lazy initialization (getter functions), not module-level `new`
4. **Widget not updating:** Must rebuild with `node widget-src/build.mjs` and commit the output
5. **NEXT_PUBLIC_ vars not working:** They are embedded at build time -- redeploy after changing them

### Documentation
- Document significant features, fixes, and architectural decisions
- Keep CLAUDE.md updated when adding new patterns or gotchas
- When adding env vars to Vercel, use `printf` (not echo) to avoid trailing newlines

## User Info
- Owner: Edmond Bojalil (edmondbk88@hotmail.com)
- Admin account with Business plan
- Language: Spanish (all UI text must be in Spanish)
- Cares about: SEO, performance, professional design, competitive pricing

## URLs
- Production: https://opinafy.com
- GitHub: https://github.com/edmondbk88/openify.git
- Admin panel: /admin (only for is_admin users)
- Mini sites: /s/[username]
- Collection: /p/[username]/[slug]

