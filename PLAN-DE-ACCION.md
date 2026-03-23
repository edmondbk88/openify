# Opinafy — Plan de Acción Post-Lanzamiento

## Estado actual del proyecto (Marzo 2026)

### Números:
- **1,562 páginas** generadas estáticamente
- **1,350+ URLs** en sitemap con hreflang ES↔EN
- **SEO Score: 97/100**
- **50+ features** implementados
- **164 tests** automatizados
- **2 idiomas** (español + inglés)

### Contenido:
- 320 artículos de blog (160 ES + 160 EN)
- 320 páginas de industria (160 ES + 160 EN)
- 421 páginas ciudad+industria (programmatic SEO)
- 80 plantillas de widget + 30 de mini sitio
- 7 comparaciones de competencia
- 14 guías de instalación
- 10 guías de ayuda
- Calculadora ROI, informe de prueba social, casos de éxito

### Integraciones:
- WordPress plugin (ZIP listo)
- Shopify, WooCommerce, PrestaShop, Webflow, Wix, Squarespace, GTM

---

## SEMANA 1 — Indexación y Primeros Pasos

### Día 1 (HOY):
- [ ] **Google Search Console**: Verificar propiedad y enviar sitemap (https://search.google.com/search-console)
- [ ] **Bing Webmaster Tools**: Registrar y enviar sitemap (https://www.bing.com/webmasters)
- [ ] **Integrar Opinafy en RecetasMexas**: Crear proyecto, añadir widget al footer

### Día 2-3:
- [ ] **LinkedIn personal**: Publicar post de lanzamiento (texto en LAUNCH-MATERIALS.md)
- [ ] **LinkedIn empresa Opinafy**: Publicar mismo contenido
- [ ] **AlternativeTo**: Registrar como alternativa a Testimonial.to (https://alternativeto.net)

### Día 4-5:
- [ ] **WordPress.org**: Subir plugin (guía en plugins/wordpress/wordpress-org-submission/README.md)
- [ ] **SaaSHub**: Registrar (https://www.saashub.com/submit)
- [ ] **ProductHunt**: Crear perfil y preparar launch (https://www.producthunt.com)

### Día 6-7:
- [ ] **Capterra**: Registrar como vendor (https://www.capterra.es/add-product)
- [ ] **GetApp**: Registrar (https://www.getapp.com)
- [ ] **G2**: Registrar (https://www.g2.com)

---

## SEMANA 2 — Primeros Usuarios

### Contactar negocios locales:
- [ ] Buscar 10 dentistas/restaurantes/coaches cercanos con buenas reseñas Google
- [ ] Enviar email usando el template de LAUNCH-MATERIALS.md
- [ ] Ofrecer Plan Pro gratis 3 meses a cambio de feedback
- [ ] Pedir un testimonio sobre Opinafy para la landing page

### Contenido:
- [ ] Publicar 1 artículo del blog en LinkedIn cada 2 días
- [ ] Compartir la Calculadora ROI (opinafy.com/calculadora-roi) en LinkedIn
- [ ] Compartir el Health Score (opinafy.com/health-score) como herramienta gratuita

### ProductHunt Launch:
- [ ] Preparar screenshots del producto
- [ ] Redactar el "maker comment" (ya listo en LAUNCH-MATERIALS.md)
- [ ] Programar launch para un martes o miércoles a las 00:01 PST
- [ ] Pedir upvotes a tu red de contactos

---

## SEMANA 3-4 — Escalar

### Bloggers y prensa:
- [ ] Buscar 10 blogs de marketing digital en español
- [ ] Contactar autores ofreciendo acceso gratis + artículo invitado
- [ ] Enviar página de prensa (opinafy.com/prensa)

### Comunidad:
- [ ] Crear grupo de WhatsApp "Opinafy Early Adopters"
- [ ] Invitar a los primeros 20 usuarios
- [ ] Pedir feedback semanal
- [ ] Implementar las sugerencias más votadas

### SEO:
- [ ] Revisar Google Search Console: ¿qué keywords están posicionando?
- [ ] Crear contenido adicional para las keywords top
- [ ] Verificar que las 1,350+ URLs se están indexando

---

## MES 2-3 — Crecimiento

### Optimización:
- [ ] Analizar funnel: ¿dónde se pierden los usuarios? (registro → primer proyecto → primer testimonio)
- [ ] A/B test en la landing page (cambiar headlines, CTAs)
- [ ] Los primeros testimonios reales reemplazan los demos en la landing

### Partnerships:
- [ ] Contactar 5 agencias de marketing digital
- [ ] Ofrecer plan Business con descuento para agencias
- [ ] Co-crear contenido (blog posts, webinars)

### Contenido avanzado:
- [ ] Publicar casos de éxito reales (no los ficticios actuales)
- [ ] Actualizar el informe "State of Social Proof" con datos propios
- [ ] Crear video tutoriales para YouTube

---

## MES 4-6 — Consolidación

### Revenue:
- Objetivo: €500-1,000 MRR
- Analizar qué plan se vende más
- Considerar pricing ajustes si necesario

### Producto:
- Implementar features basados en feedback real de usuarios
- Las funciones más solicitadas tienen prioridad

### Expansion:
- Considerar más idiomas si hay demanda (portugués para Brasil)
- Explorar partnerships con plataformas de ecommerce

---

## MÉTRICAS A MONITOREAR

### Semanales:
- Tráfico orgánico (Google Analytics)
- Registros nuevos
- Conversión free → pago
- Keywords en top 10 (GSC)

### Mensuales:
- MRR (Monthly Recurring Revenue)
- Churn rate
- NPS (Net Promoter Score) via tickets/feedback
- Backlinks nuevos

---

## HERRAMIENTAS GRATUITAS NECESARIAS

| Herramienta | Para qué | URL |
|-------------|----------|-----|
| Google Search Console | SEO + indexación | search.google.com/search-console |
| Google Analytics 4 | Tráfico | YA CONFIGURADO (G-CPLGLSLYHR) |
| Bing Webmaster | SEO Bing | bing.com/webmasters |
| LinkedIn | Marketing orgánico | linkedin.com/company/opinafy |
| Google Trends | Keywords trending | trends.google.com |
| AnswerThePublic | Ideas de contenido | answerthepublic.com |
| Ubersuggest | SEO básico gratis | neilpatel.com/ubersuggest |

---

## ARCHIVOS IMPORTANTES

| Archivo | Contenido |
|---------|-----------|
| `LAUNCH-MATERIALS.md` | Textos para ProductHunt, LinkedIn, Twitter, emails |
| `ESTRATEGIA-SEO.md` | Estrategia SEO completa con keywords |
| `FULL-AUDIT-REPORT.md` | Último audit SEO detallado |
| `ACTION-PLAN.md` | Plan de acción SEO prioritizado |
| `CLAUDE.md` | Documentación técnica del proyecto |
| `plugins/wordpress/wordpress-org-submission/README.md` | Guía para publicar en WordPress.org |

---

## INTEGRACIÓN CON RECETASMEXAS

### Opción 1: Widget en footer (recomendado)
Añadir al footer de recetasmexas (`web/src/components/layout/Footer.tsx`):
```tsx
<div className="border-t border-white/10 pt-8 mt-8">
  <p className="text-center text-sm text-gray-400 mb-4">Lo que dicen nuestros usuarios</p>
  <div id="opinafy-widget" data-project="TU_PROJECT_ID"></div>
  <script src="https://opinafy.com/widget.js" defer></script>
</div>
```

### Opción 2: Página dedicada
Crear una página `/testimonios` en recetasmexas con el widget.

### Pasos:
1. Ve a opinafy.com → Dashboard → Nuevo Proyecto → "Recetas Mexas"
2. Copia el Project ID
3. Añade el código al footer
4. Comparte el link de recolección con tu audiencia
