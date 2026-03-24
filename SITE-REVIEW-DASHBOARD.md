# Site Review: Dashboard, Auth, Admin & API Routes

**Date:** 2026-03-24
**Scope:** Auth pages, dashboard pages, admin panel, API routes, EN page coverage

---

## 1. AUTH PAGES

### /login (Spanish)
- **File:** `src/app/(auth)/login/page.tsx`
- **i18n:** NONE. All strings are hardcoded Spanish ("Iniciar Sesion", "Contrasena", "Olvidaste tu contrasena?", etc.)
- **Does NOT use `t(key, locale)`** -- this is acceptable since it's the Spanish-only route
- Sets locale to `'es'` via `/api/profile` PATCH on login
- Links to `/forgot-password` and `/registro`

### /registro (Spanish)
- **File:** `src/app/(auth)/registro/page.tsx`
- **i18n:** NONE. All strings hardcoded Spanish
- Success state: "Revisa tu email", "Hemos enviado un enlace de confirmacion..."
- Links to `/login`

### /forgot-password (Spanish)
- **File:** `src/app/(auth)/forgot-password/page.tsx`
- **EXISTS** -- fully functional
- All strings hardcoded Spanish
- **BUG:** Redirect URL after password reset is `/api/auth/callback?next=/configuracion` -- correct

### /en/login (English)
- **File:** `src/app/(en)/en/login/page.tsx`
- **Fully translated to English** -- "Sign In", "Password", "Forgot password?", etc.
- Sets locale to `'en'` via `/api/profile` PATCH on login
- Links to `/en/forgot-password` and `/en/register`
- **Note:** This page includes its own layout (logo + centering) inline, NOT using the `(auth)` layout

### /en/register (English)
- **File:** `src/app/(en)/en/register/page.tsx`
- **Fully translated to English** -- "Create Free Account", "Full Name", etc.
- Passes `locale: 'en'` in signUp metadata
- Links to `/en/login`

### /en/forgot-password (English)
- **File:** `src/app/(en)/en/forgot-password/page.tsx`
- **EXISTS** and is fully translated
- **BUG:** redirectTo URL is `/api/auth/callback?next=/configuracion` -- the `/configuracion` path is correct (dashboard settings page), but the redirect will always land on the Spanish-URL settings page. This is technically fine since the dashboard is locale-aware, but it could be `/configuracion` regardless.

### Auth Route Summary

| Route | Exists | Translated |
|-------|--------|-----------|
| /login | YES | Spanish only (correct) |
| /registro | YES | Spanish only (correct) |
| /forgot-password | YES | Spanish only (correct) |
| /en/login | YES | English |
| /en/register | YES | English |
| /en/forgot-password | YES | English |

**Verdict: All auth pages exist in both languages. No issues.**

---

## 2. DASHBOARD PAGES

All dashboard pages live under `src/app/(dashboard)/`. The layout fetches user profile (including locale) and wraps everything in `<DashboardShell>` which provides `<LocaleProvider>`.

### 2.1 /dashboard (Main Dashboard)
- **File:** `src/app/(dashboard)/dashboard/page.tsx`
- **i18n:** YES, uses `t(key, locale)` throughout via `getUserLocale()`
- **getEffectivePlan:** NO -- uses `PLAN_LIMITS[userPlan]` where `userPlan` is `profile?.plan` directly
- **ISSUE: Does NOT use `getEffectivePlan()`.** If a user has a gifted plan, the downgrade warning banner will show incorrect limits. The dashboard stats themselves are fine (they don't depend on plan), but the "you have more projects than your plan allows" warning checks `PLAN_LIMITS[profile.plan]` instead of `PLAN_LIMITS[getEffectivePlan(profile)]`.
- **Hardcoded strings:** Link to `/precios` in the downgrade banner -- should this be locale-aware? (Dashboard URLs are Spanish by design, so this is OK.)

### 2.2 /configuracion (Settings)
- **File:** `src/app/(dashboard)/configuracion/page.tsx`
- **i18n:** YES, uses `t(key, locale)` via `useLocale()`
- **Hardcoded strings:** None visible -- all labels and messages use `t()` or inline locale ternary
- **No plan limit checks needed here**

### 2.3 /facturacion (Billing)
- **File:** `src/app/(dashboard)/facturacion/page.tsx`
- **i18n:** YES, uses `t(key, locale)` throughout
- **getEffectivePlan:** NO -- uses `PLAN_LIMITS[currentPlan]` where `currentPlan` is `profile?.plan`
- **ISSUE: Does NOT use `getEffectivePlan()`.** The "current plan" display and limits will ignore gifted plans.

### 2.4 /mi-sitio (My Mini Site)
- **File:** `src/app/(dashboard)/mi-sitio/page.tsx`
- **i18n:** YES, uses `t(key, locale)` for most strings
- **getEffectivePlan:** YES -- correctly uses `getEffectivePlan(profile)` for checking mini site access
- **HARDCODED SPANISH STRINGS:**
  - Line 105: `'Error al guardar'` (error fallback)
  - Line 108: `'Configuracion guardada correctamente'` (toast)
  - Line 110: `'Error al guardar'` (error toast)
  - Line 119: `'URL copiada al portapapeles'` (toast)
  - Lines 124-131: `handleShareWhatsApp` and `handleShareEmail` messages all in Spanish ("Mira mis testimonios verificados", "Te comparto mi pagina...")
  - Line 295-300: "Necesitas configurar un nombre de usuario..." warning is entirely in Spanish
  - Line 430: Placeholder `"Ej: Consultor de marketing digital..."` is Spanish
  - Line 434: `"caracteres"` is hardcoded Spanish
- **Category filter labels:** `ALL_CATEGORIES` starts with `'Todas'` hardcoded -- not translated

### 2.5 /proyectos (Projects List)
- **File:** `src/app/(dashboard)/proyectos/page.tsx`
- **i18n:** YES, fully uses `t(key, locale)`
- **No plan limit checks here** (limits are enforced on project creation API)

### 2.6 /proyectos/nuevo (New Project)
- **File:** `src/app/(dashboard)/proyectos/nuevo/page.tsx`
- **i18n:** YES, uses `t(key, locale)` for labels and buttons
- **HARDCODED SPANISH STRINGS:**
  - Line 68-69: `'Error al crear el proyecto'` (error fallback messages)
  - Line 72: `'Proyecto creado correctamente'` (success toast)
  - Line 128: Placeholder `"Mi negocio"` is Spanish
  - Line 222: Placeholder `"Cuentanos tu experiencia con nuestro servicio..."` is Spanish

### 2.7 /proyectos/[slug] (Project Detail)
- **File:** `src/app/(dashboard)/proyectos/[slug]/page.tsx`
- **i18n:** MOSTLY -- uses `t(key, locale)` for many strings
- **HARDCODED INLINE LOCALE STRINGS (not using t()):**
  - Line 110: `Slug: {project.slug}` -- "Slug:" label is hardcoded (minor)
  - Line 266: `{locale === 'en' ? 'Automation' : 'Automatizacion'}` -- inline, not via `t()`
  - Line 285: `{locale === 'en' ? 'Email Templates' : 'Plantillas de Email'}` -- inline
  - Line 304: `{locale === 'en' ? 'Social Posts' : 'Generar Posts'}` -- inline
  - Line 383: `{locale === 'en' ? 'Certification' : 'Certificacion'}` -- inline
  - Lines 393-394: Certification descriptions -- inline locale ternary
  - Lines 422-425, 432-433, 456-458, 464, 475-476: Many inline locale ternaries
- These inline ternaries work but are inconsistent with the rest of the codebase which uses `t()`.
- **getEffectivePlan:** Not used on this page (not needed -- no plan limit checks)

### 2.8 /proyectos/[slug]/widget
- Not read in detail but file exists at `src/app/(dashboard)/proyectos/[slug]/widget/page.tsx`

### 2.9 /proyectos/[slug]/importar (Import)
- File exists at `src/app/(dashboard)/proyectos/[slug]/importar/page.tsx`

### 2.10 /proyectos/[slug]/exportar (Export)
- File exists at `src/app/(dashboard)/proyectos/[slug]/exportar/page.tsx`

### 2.11 /proyectos/[slug]/solicitar (Request Testimonials)
- File exists at `src/app/(dashboard)/proyectos/[slug]/solicitar/page.tsx`

### 2.12 /proyectos/[slug]/editar (Edit Project)
- File exists at `src/app/(dashboard)/proyectos/[slug]/editar/page.tsx`

### 2.13 /proyectos/[slug]/analytics
- File exists at `src/app/(dashboard)/proyectos/[slug]/analytics/page.tsx`

### 2.14 /proyectos/[slug]/recopilar (Collection Settings)
- File exists at `src/app/(dashboard)/proyectos/[slug]/recopilar/page.tsx`

### 2.15 /proyectos/[slug]/integraciones
- File exists at `src/app/(dashboard)/proyectos/[slug]/integraciones/page.tsx`

### 2.16 /proyectos/[slug]/automatizacion
- File exists at `src/app/(dashboard)/proyectos/[slug]/automatizacion/page.tsx`

### 2.17 /proyectos/[slug]/plantillas-email
- File exists at `src/app/(dashboard)/proyectos/[slug]/plantillas-email/page.tsx`

### 2.18 /proyectos/[slug]/social-posts
- File exists at `src/app/(dashboard)/proyectos/[slug]/social-posts/page.tsx`

### 2.19 /soporte (Support Tickets)
- **File:** `src/app/(dashboard)/soporte/page.tsx`
- **i18n:** YES, fully uses `t(key, locale)` via `useLocale()`

### 2.20 /soporte/nuevo (New Ticket)
- **File:** `src/app/(dashboard)/soporte/nuevo/page.tsx`
- **i18n:** YES, fully uses `t(key, locale)`

### 2.21 /soporte/[id] (Ticket Detail)
- **File:** `src/app/(dashboard)/soporte/[id]/page.tsx`
- **i18n:** YES, fully uses `t(key, locale)`

### Dashboard Summary

| Page | Uses i18n | getEffectivePlan | Hardcoded Strings |
|------|-----------|-----------------|-------------------|
| /dashboard | YES | **NO (BUG)** | Minor (link URL) |
| /configuracion | YES | N/A | None |
| /facturacion | YES | **NO (BUG)** | None |
| /mi-sitio | YES (partial) | YES | **MANY Spanish strings** |
| /proyectos | YES | N/A | None |
| /proyectos/nuevo | YES (partial) | N/A | **Several Spanish strings** |
| /proyectos/[slug] | MOSTLY | N/A | **Many inline ternaries (not via t())** |
| /soporte | YES | N/A | None |
| /soporte/nuevo | YES | N/A | None |
| /soporte/[id] | YES | N/A | None |

---

## 3. ADMIN PANEL

### Admin Pages List

| Route | File | Description |
|-------|------|-------------|
| /admin | `(admin)/admin/page.tsx` | Dashboard with stats, MRR, storage, costs, sentiment |
| /admin/usuarios | `(admin)/admin/usuarios/page.tsx` | User management + gift plans |
| /admin/proyectos | `(admin)/admin/proyectos/page.tsx` | Project management |
| /admin/testimonios | `(admin)/admin/testimonios/page.tsx` | Testimonial management |
| /admin/suscripciones | `(admin)/admin/suscripciones/page.tsx` | Subscription overview |
| /admin/blog | `(admin)/admin/blog/page.tsx` | Blog article list (read-only) |
| /admin/configuracion | `(admin)/admin/configuracion/page.tsx` | System config + external links |
| /admin/tickets | `(admin)/admin/tickets/page.tsx` | Support ticket management |
| /admin/tickets/[id] | `(admin)/admin/tickets/[id]/page.tsx` | Ticket detail + reply |

### Admin Findings

#### /admin/usuarios
- **Gift plan column:** YES -- column "Regalo" is present showing gifted plan, days remaining, and revoke button
- **Plan selector includes 'minisite':** YES -- options include `free`, `minisite`, `pro`, `business`
- **Gift plan modal includes 'minisite':** YES -- options are `minisite`, `pro`, `business`
- **All strings hardcoded Spanish** (acceptable for admin panel)
- **ISSUE:** `PLAN_LABELS` in the admin tickets detail page does NOT include 'minisite' (line 44): `{ free: 'Gratis', pro: 'Pro', business: 'Business' }` -- if a user has the minisite plan, it will show the raw value "minisite" instead of "Mini Sitio"

#### /admin/suscripciones
- **ISSUE: Missing 'minisite' plan in stats and MRR calculation.** The page only queries for `free`, `pro`, and `business` plans. It does NOT count minisite users. The MRR calculation only does `proCount * 9 + businessCount * 19` -- missing `minisiteCount * 5`.
- **ISSUE: Paying users table** filters `IN ('pro', 'business')` -- minisite users who pay 5 EUR/month are not shown.

#### /admin (Dashboard)
- **Correctly includes minisite** in stats and MRR: `minisiteCount * 5 + proCount * 9 + businessCount * 19`
- However, the "recent registrations" plan badge only has colors for `business`, `pro`, and default -- minisite would get the default gray. This is cosmetic only.

#### Admin 404 Risk
- All admin pages have proper files. No 404 risk.
- The admin layout properly checks `is_admin` and redirects non-admins to `/dashboard`.

---

## 4. API ROUTES

### Route-by-Route Analysis

| Route | Auth | Plan Limits | Error Handling | Issues |
|-------|------|------------|----------------|--------|
| `/api/auth/callback` | No | N/A | OK | None |
| `/api/projects` GET | Yes | N/A | OK | None |
| `/api/projects` POST | Yes | **YES (getEffectivePlan)** | OK | None |
| `/api/projects/[id]` PATCH | Yes | N/A | OK | None |
| `/api/projects/[id]` DELETE | Yes | N/A | OK | None |
| `/api/testimonials` GET | Yes | N/A | OK | None |
| `/api/testimonials` POST | **No (public)** | **YES (getEffectivePlan)** | OK | None |
| `/api/testimonials/[id]` | Yes | N/A | OK | None |
| `/api/testimonials/import` | Yes | **YES (getEffectivePlan)** | OK | None |
| `/api/testimonials/verify` | No | N/A | OK | None |
| `/api/testimonials/resend-verification` | Yes | N/A | OK | None |
| `/api/upload` | **PARTIAL** | N/A | OK | **See below** |
| `/api/widget/[projectId]` | No (public) | N/A | OK | None |
| `/api/widget-preview/[projectId]` | Yes | N/A | OK | None |
| `/api/widget-demo/[templateId]` | No (public) | N/A | OK | None |
| `/api/templates` | No (public) | N/A | OK | None |
| `/api/stripe/checkout` | Yes | N/A | OK | None |
| `/api/stripe/portal` | Yes | N/A | OK | None |
| `/api/stripe/webhook` | No (HMAC) | N/A | OK | None |
| `/api/admin/users` | Admin | N/A | OK | None |
| `/api/admin/projects` | Admin | N/A | OK | None |
| `/api/admin/testimonials` | Admin | N/A | OK | None |
| `/api/admin/tickets` | Admin | N/A | OK | None |
| `/api/admin/tickets/[id]` | Admin | N/A | OK | None |
| `/api/admin/storage` | Admin | N/A | OK | None |
| `/api/profile` | Yes | N/A | OK | None |
| `/api/account` DELETE | Yes | N/A | OK | None |
| `/api/tickets` | Yes | N/A | OK | None |
| `/api/tickets/[id]` | Yes | N/A | OK | None |
| `/api/tickets/[id]/messages` | Yes | N/A | OK | None |
| `/api/automation` | Yes | N/A | OK | None |
| `/api/certification/[projectId]` | No (public) | N/A | OK | None |
| `/api/badge/[projectId]` | No (public) | N/A | OK | None |
| `/api/health-score` | No (public) | N/A | OK | Rate limited |
| `/api/ranking` | No (public) | N/A | OK | None |
| `/api/contact` | No (public) | N/A | OK | None |
| `/api/notifications` | Yes | N/A | OK | None |

### API Issues Found

#### /api/upload -- NO AUTH CHECK
- The upload route uses `createClient()` (which gets the session) but **never calls `supabase.auth.getUser()`** to verify the user is authenticated.
- The Supabase storage upload will succeed because the client has a valid session token from the cookie, but there's no explicit check.
- **Impact:** In practice, Supabase RLS on storage may block unauthenticated uploads, but this depends on bucket policies. According to `CLAUDE.md`, the upload route is intentionally `No auth` (for public collection form photo uploads), so this may be by design. However, the route uses `createClient()` (auth client) not `createAdminClient()`, which means anonymous uploads from collection forms might fail if no session exists.

#### /api/contact -- No rate limiting
- The contact form API has no rate limiting. An attacker could spam thousands of emails via this endpoint. The health-score API has rate limiting, but contact does not.

#### /api/testimonials POST -- Silent webhook failure
- Line 222: Webhook trigger failure is caught with an empty catch block `catch { // silent fail }`. While acceptable, logging would be better for debugging.

---

## 5. MISSING PAGES CHECK

### EN Pages That Exist

| URL Pattern | Exists | Notes |
|-------------|--------|-------|
| /en/register | YES | `src/app/(en)/en/register/page.tsx` |
| /en/login | YES | `src/app/(en)/en/login/page.tsx` |
| /en/contact | YES | `src/app/(en)/en/contact/page.tsx` |
| /en/cookies | **NO** | Cookies are at `/en/legal/cookies` |
| /en/legal | YES | `src/app/(en)/en/legal/page.tsx` |
| /en/legal/cookies | YES | `src/app/(en)/en/legal/cookies/page.tsx` |
| /en/legal/privacy | YES | `src/app/(en)/en/legal/privacy/page.tsx` |
| /en/legal/terms | YES | `src/app/(en)/en/legal/terms/page.tsx` |
| /en/privacy | **NO** | Privacy is at `/en/legal/privacy` |
| /en/terms | **NO** | Terms are at `/en/legal/terms` |
| /en/press | YES | `src/app/(en)/en/press/page.tsx` |
| /en/updates | **NO** | Updates/changelog is at `/en/changelog` |
| /en/changelog | YES | `src/app/(en)/en/changelog/page.tsx` |
| /en/roi-calculator | YES | `src/app/(en)/en/roi-calculator/page.tsx` |
| /en/health-score | YES | `src/app/(en)/en/health-score/page.tsx` |
| /en/certification | YES | `src/app/(en)/en/certification/page.tsx` |
| /en/verified-badge | **NO** | EN equivalent is `/en/verified` |
| /en/verified | YES | `src/app/(en)/en/verified/page.tsx` |
| /en/integrations/zapier | YES | `src/app/(en)/en/integrations/zapier/page.tsx` |

### Spanish vs English URL Mapping

| Spanish Route | English Route | Both Exist |
|---------------|---------------|-----------|
| /login | /en/login | YES |
| /registro | /en/register | YES |
| /forgot-password | /en/forgot-password | YES |
| /contacto | /en/contact | YES |
| /cookies | /en/legal/cookies | YES (different paths) |
| /legal | /en/legal | YES |
| /privacidad | /en/legal/privacy | YES (different paths) |
| /terminos | /en/legal/terms | YES (different paths) |
| /prensa | /en/press | YES |
| /actualizaciones | /en/changelog | YES (different paths) |
| /calculadora-roi | /en/roi-calculator | YES |
| /health-score | /en/health-score | YES |
| /certificacion | /en/certification | YES |
| /verificado-badge | /en/verified | YES (different names) |
| /integraciones/zapier | /en/integrations/zapier | YES |

**Note:** The EN routes use a different URL structure for legal pages (`/en/legal/privacy` vs `/privacidad`). This is intentional but could cause confusion if someone links to `/en/privacy` directly (would 404).

---

## 6. CRITICAL ISSUES SUMMARY

### High Priority

1. **Dashboard /dashboard page does NOT use `getEffectivePlan()`** -- Plan limit warnings use `profile.plan` directly, ignoring gifted plans. Users with gifted plans may see incorrect downgrade warnings.

2. **Billing /facturacion page does NOT use `getEffectivePlan()`** -- Current plan display and limit info ignores gifted plans. A user with a gifted Pro plan would still see "Free" as their current plan on the billing page.

3. **Admin /admin/suscripciones is missing the 'minisite' plan entirely** -- MRR calculation is wrong (missing minisite * 5 EUR), minisite users don't appear in paying users table, stats card for minisite is absent.

4. **Upload API has no explicit auth verification** -- `createClient()` is used but `getUser()` is never called. Public collection form uploads may fail if no auth session exists.

### Medium Priority

5. **Mi-Sitio page has many hardcoded Spanish strings** -- Toast messages, share messages, placeholder texts, and the "no username" warning are all hardcoded Spanish. EN users will see Spanish toasts and share texts.

6. **Nuevo Proyecto page has hardcoded Spanish strings** -- Error messages and success toasts are Spanish-only.

7. **Project detail page uses inline locale ternaries** instead of `t()` for several strings (Automation, Email Templates, Social Posts, Certification section). While functional, this is inconsistent and harder to maintain.

8. **Contact API has no rate limiting** -- Could be abused to spam emails.

### Low Priority

9. **Admin ticket detail page** PLAN_LABELS map is missing 'minisite' key -- will display raw "minisite" instead of "Mini Sitio".

10. **EN forgot-password** redirectTo URL goes to `/configuracion` -- works but could theoretically be locale-aware.

11. **EN legal pages** live under `/en/legal/*` while Spanish equivalents are top-level (`/privacidad`, `/terminos`, `/cookies`). Direct links to `/en/privacy` or `/en/cookies` would 404.

12. **No `/en/updates` page** -- the EN equivalent of `/actualizaciones` is `/en/changelog` (different slug).

---

## 7. COMPLETE FILE INVENTORY

### Dashboard Pages (12 page.tsx files)
```
src/app/(dashboard)/dashboard/page.tsx
src/app/(dashboard)/configuracion/page.tsx
src/app/(dashboard)/facturacion/page.tsx
src/app/(dashboard)/mi-sitio/page.tsx
src/app/(dashboard)/proyectos/page.tsx
src/app/(dashboard)/proyectos/nuevo/page.tsx
src/app/(dashboard)/proyectos/[slug]/page.tsx
src/app/(dashboard)/proyectos/[slug]/widget/page.tsx
src/app/(dashboard)/proyectos/[slug]/editar/page.tsx
src/app/(dashboard)/proyectos/[slug]/importar/page.tsx
src/app/(dashboard)/proyectos/[slug]/exportar/page.tsx
src/app/(dashboard)/proyectos/[slug]/solicitar/page.tsx
src/app/(dashboard)/proyectos/[slug]/analytics/page.tsx
src/app/(dashboard)/proyectos/[slug]/recopilar/page.tsx
src/app/(dashboard)/proyectos/[slug]/integraciones/page.tsx
src/app/(dashboard)/proyectos/[slug]/automatizacion/page.tsx
src/app/(dashboard)/proyectos/[slug]/plantillas-email/page.tsx
src/app/(dashboard)/proyectos/[slug]/social-posts/page.tsx
src/app/(dashboard)/soporte/page.tsx
src/app/(dashboard)/soporte/nuevo/page.tsx
src/app/(dashboard)/soporte/[id]/page.tsx
```

### Admin Pages (9 page.tsx files)
```
src/app/(admin)/admin/page.tsx
src/app/(admin)/admin/usuarios/page.tsx
src/app/(admin)/admin/proyectos/page.tsx
src/app/(admin)/admin/testimonios/page.tsx
src/app/(admin)/admin/suscripciones/page.tsx
src/app/(admin)/admin/blog/page.tsx
src/app/(admin)/admin/configuracion/page.tsx
src/app/(admin)/admin/tickets/page.tsx
src/app/(admin)/admin/tickets/[id]/page.tsx
```

### API Routes (27 route.ts files)
```
src/app/api/account/route.ts
src/app/api/admin/projects/route.ts
src/app/api/admin/storage/route.ts
src/app/api/admin/testimonials/route.ts
src/app/api/admin/tickets/route.ts
src/app/api/admin/tickets/[id]/route.ts
src/app/api/admin/users/route.ts
src/app/api/auth/callback/route.ts
src/app/api/automation/route.ts
src/app/api/badge/[projectId]/route.ts
src/app/api/certification/[projectId]/route.ts
src/app/api/contact/route.ts
src/app/api/health-score/route.ts
src/app/api/notifications/route.ts
src/app/api/profile/route.ts
src/app/api/projects/route.ts
src/app/api/projects/[id]/route.ts
src/app/api/ranking/route.ts
src/app/api/stripe/checkout/route.ts
src/app/api/stripe/portal/route.ts
src/app/api/stripe/webhook/route.ts
src/app/api/templates/route.ts
src/app/api/testimonials/route.ts
src/app/api/testimonials/[id]/route.ts
src/app/api/testimonials/import/route.ts
src/app/api/testimonials/resend-verification/route.ts
src/app/api/testimonials/verify/route.ts
src/app/api/tickets/route.ts
src/app/api/tickets/[id]/route.ts
src/app/api/tickets/[id]/messages/route.ts
src/app/api/upload/route.ts
src/app/api/widget/[projectId]/route.ts
src/app/api/widget-demo/[templateId]/route.ts
src/app/api/widget-preview/[projectId]/route.ts
```
