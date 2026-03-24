# Opinafy.com — Re-Audit SEO Report (Comparativo)

**Fecha:** 2026-03-24
**Sitio:** https://opinafy.com
**Audit anterior:** 68/100 (mismo dia, pre-fixes)

---

## SEO Health Score: 82/100 (+14 puntos)

| Categoria | Peso | Antes | Ahora | Cambio |
|-----------|------|-------|-------|--------|
| Technical SEO | 25% | 82 | 85 | +3 |
| Content Quality | 25% | 62 | 71 | +9 |
| On-Page SEO | 20% | 75 | 85 | +10 |
| Schema / Structured Data | 10% | 60 | 88 | +28 |
| Performance (CWV) | 10% | 80 | 88 | +8 |
| Images | 5% | 55 | 75 | +20 |
| AI Search Readiness | 5% | 72 | 85 | +13 |
| **TOTAL PONDERADO** | **100%** | **68** | **82** | **+14** |

---

## Resumen de Mejoras

### 36 issues del audit original → 30 resueltos, 6 pendientes

**Issues Criticos resueltos (8/10):**
- [x] Fechas futuras en sitemap filtradas
- [x] Schema EN en ingles (articleSchema, webSiteSchema, organizationSchema)
- [x] x-default hreflang en paginas EN
- [x] html lang="en" via middleware (arreglado en segundo intento)
- [x] Pagina /sobre y /en/about creadas
- [x] Lastmod identicos eliminados
- [x] Mini Sitio en SoftwareApplication schema
- [x] SearchAction + @id + email en schema
- [ ] Testimonios reales sobre Opinafy (requiere accion del usuario)
- [ ] Datos legales LSSI - NIF/CIF (requiere accion del usuario)

**Issues High resueltos (10/12):**
- [x] Cookie banner bilingue + no bloquea CTAs movil
- [x] WebP/AVIF habilitado
- [x] Preconnect innecesarios eliminados
- [x] Blog revalidate=3600 (parcial — searchParams fuerza dinamico)
- [x] Contraste WCAG AA (gray-400 → gray-500)
- [x] FAQ con signos de interrogacion
- [x] Tablet navbar spacing
- [x] Schema improvements completos
- [x] Links internos en blog
- [x] UTM blocking en robots.txt
- [ ] EN slugs en espanol (arquitectural, requiere migracion)
- [ ] Doorway pages ciudad (contenido unico parcial)

**Issues Medium/Low resueltos (12/14):**
- [x] Pricing mobile padding reducido
- [x] Templates lazy-load (24 inicial)
- [x] Blog fechas escalonadas Oct 2025 - Mar 2026
- [x] Blog TL;DR en primeros 20 articulos
- [x] Ciudad pages enriquecidas con FAQs
- [x] llms.txt creado
- [x] Hamburger touch target 48px
- [x] /sobre y /en/about en sitemap
- [x] Pagina About creada
- [x] Blog internal links (57 ES + 20 EN)
- [x] Pricing revalidation 3600
- [x] robots.txt UTM blocking
- [ ] Screenshots reales del producto (requiere accion del usuario)
- [ ] Casos de exito fabricados (requiere accion del usuario)

---

## Issues Pendientes (requieren accion del usuario)

| # | Issue | Impacto | Accion |
|---|-------|---------|--------|
| 1 | Sin testimonios reales sobre Opinafy | CRITICO | Conseguir 3-5 beta testers reales |
| 2 | NIF/CIF faltante (LSSI) | CRITICO | Agregar datos fiscales en /legal |
| 3 | Casos de exito fabricados | HIGH | Reemplazar con casos reales o eliminar |
| 4 | Sin screenshots del producto | HIGH | Agregar capturas reales del dashboard |
| 5 | Sin identidad del fundador | HIGH | Agregar nombre, foto, LinkedIn en /sobre |
| 6 | Paginas ciudad con riesgo doorway | HIGH | Reducir a 50 ciudades o agregar contenido unico real |

---

## Scores por Subagente

| Agente | Antes | Ahora | Delta |
|--------|-------|-------|-------|
| Technical SEO | 82/100 | 85/100 | +3 |
| Content Quality | 62/100 | 71/100 | +9 |
| Schema Markup | ~60/100 | 88/100 | +28 |
| Sitemap | C+ | B- | +1 grade |
| Performance | 80/100 | 88/100 | +8 |
| Visual/UX | B+ | A- | +1 grade |

---

## Reportes Detallados

- [REAUDIT-TECHNICAL.md](./REAUDIT-TECHNICAL.md)
- [REAUDIT-CONTENT.md](./REAUDIT-CONTENT.md)
- [REAUDIT-SCHEMA.md](./REAUDIT-SCHEMA.md)
- [REAUDIT-SITEMAP.md](./REAUDIT-SITEMAP.md)
- [REAUDIT-PERFORMANCE.md](./REAUDIT-PERFORMANCE.md)
- [REAUDIT-VISUAL.md](./REAUDIT-VISUAL.md)
