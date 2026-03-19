# Opinafy SEO — Action Plan

## CRITICAL (Fix immediately)

1. **Remove/fix fabricated testimonials on homepage**
   - Replace fake testimonials (María López, etc.) with clearly labeled product demos
   - Remove "cientos de negocios" false claim from CTA section
   - Files: `hero.tsx`, `testimonials-preview.tsx`

2. **Add complete LSSI-CE legal data**
   - Add NIF/CIF, physical address, and natural person name to /legal
   - Required by Spanish law for commercial websites
   - File: `src/app/(marketing)/legal/page.tsx`

3. **Make contact form functional**
   - Currently has no submission handler
   - File: `src/app/(marketing)/contacto/page.tsx`

4. **Fix www duplicate content**
   - Add www → non-www 301 redirect
   - Create `vercel.json` with redirect rule
   - Or configure in Vercel Dashboard > Settings > Domains

## HIGH PRIORITY (Fix within 1 week)

5. **Add Content-Security-Policy header**
   - File: `next.config.mjs` headers()

6. **Add `noindex` to /login, /registro, /forgot-password**
   - Files: auth layout or individual pages

7. **Fix title tag redundancy**
   - Remove duplicate "Opinafy" — appears twice due to template
   - File: `src/app/(marketing)/layout.tsx`

8. **Move GA scripts from `<head>` to `<body>`**
   - Eliminates unnecessary preload, saves ~80KB early bandwidth
   - File: `src/app/layout.tsx`

9. **Add named author to blog articles**
   - Replace "Equipo Opinafy" with a real person
   - Add author bio with photo, credentials, LinkedIn
   - Files: `blog-data.ts`, `blog/[slug]/page.tsx`, `schema.ts`

10. **Add source links to blog statistics**
    - Every "según BrightLocal" etc. needs a hyperlink
    - File: `src/lib/blog-data.ts`

11. **Add FAQPage schema**
    - FAQ content exists but no structured data wraps it
    - File: `src/lib/schema.ts`

12. **Create social media profiles (LinkedIn + X)**
    - Add URLs to Organization schema sameAs
    - Add to footer

## MEDIUM PRIORITY (Fix within 1 month)

13. **Reduce /plantillas page weight**
    - 353KB HTML, 2,242 DOM elements
    - Add pagination (12 per page) or CSS `content-visibility: auto`
    - File: `src/app/(marketing)/plantillas/gallery.tsx`

14. **Add `priority` to above-fold images**
    - Navbar logo: `navbar.tsx`
    - First blog image: `blog/page.tsx`

15. **Add `preconnect` for Supabase storage**
    - `<link rel="preconnect" href="https://rckjevsqxkfixkdloqjv.supabase.co">`
    - File: blog layout or root layout

16. **De-duplicate FAQ/Pricing between homepage and /precios**
    - Show condensed FAQ on homepage with "Ver más" link
    - Files: `page.tsx`, `precios/page.tsx`

17. **Differentiate blog article conclusions**
    - Currently all end with identical Opinafy pitch
    - Write unique conclusions per article

18. **Add AI crawler rules to robots.txt**
    - Decide: allow or block GPTBot, ClaudeBot, etc.
    - File: `src/app/robots.ts`

19. **Reduce homepage HTML payload**
    - Currently 155KB (target: <100KB)
    - Audit RSC inline data, consider lazy loading below-fold sections

20. **Add hreflang tag for es market**
    - `<link rel="alternate" hreflang="es" href="https://opinafy.com">`

## LOW PRIORITY (Backlog)

21. Add HSTS `includeSubDomains; preload` directive
22. Shorten long blog URL slugs (some are 50+ chars)
23. Convert logo PNG to inline SVG
24. Add HowTo schema for "Cómo funciona" section
25. Add ISR revalidation period to static pages
26. Add `availability` to SoftwareApplication schema offers
27. Create a real case study when first customer exists
28. Add category filtering to blog listing
29. Stagger future blog publication dates (2-3/week max)
30. Add unique content to each template detail page
