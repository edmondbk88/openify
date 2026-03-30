# FINAL2 Spanish Text Audit Report

**Date:** 2026-03-30
**Scope:** All Spanish-facing files in `/src/` -- lib data files, marketing pages, dashboard pages, admin pages, landing components, dashboard components.

**Total issues found: ~350+**

---

## TABLE OF CONTENTS

1. [lib/help-data.ts (~80 issues)](#1-libhelp-datats)
2. [lib/blog-data.ts (~15 issues)](#2-libblog-datats)
3. [lib/demo-testimonials.ts (~15 issues)](#3-libdemo-testimonialsts)
4. [lib/minisite-templates.ts (~15 issues)](#4-libminisite-templatests)
5. [lib/email-templates.ts (~2 issues)](#5-libemail-templatests)
6. [lib/city-industry-content.ts (~15 issues)](#6-libcity-industry-contentts)
7. [lib/i18n.ts (1 issue)](#7-libi18nts)
8. [lib/certification.ts (1 issue)](#8-libcertificationts)
9. [lib/collection-translations.ts (1 issue)](#9-libcollection-translationsts)
10. [app/(marketing)/ pages (~120 issues)](#10-appmarketing-pages)
11. [app/(dashboard)/ pages (~35 issues)](#11-appdashboard-pages)
12. [app/(admin)/ pages (~6 issues)](#12-appadmin-pages)
13. [components/landing/ (~4 issues)](#13-componentslanding)
14. [components/dashboard/ (~2 issues)](#14-componentsdashboard)

**Note:** `lib/industry-data.ts` and `lib/widget-templates.ts` visible text is clean. Issues in those files are only in slug/keyword/id fields (not user-facing).

---

## 1. lib/help-data.ts

This file has the highest density of issues. Nearly every section has multiple missing accents.

### Missing accents on -cion/-sion words

| Line | Wrong | Correct |
|------|-------|---------|
| 55 | `descripcion` | `descripción` |
| 70 | `personalizacion` | `personalización` |
| 99 | `sera visible` | `será visible` |
| 103 | `notificacion` | `notificación` |
| 109 | `opinion` | `opinión` |
| 122 | `sesion` | `sesión` |
| 125 | `Valoracion` | `Valoración` |
| 155 | `boton` | `botón` |
| 169 | `interaccion` | `interacción` |
| 174 | `automatizacion` (in id) | `automatización` |
| 186 | `importacion` | `importación` |
| 220 | `moderacion` | `moderación` |
| 232 | `atencion` | `atención` |
| 246 | `publicamente` (heading) | `públicamente` |
| 250 | `opinion` | `opinión` |
| 259 | `sera visible` | `será visible` |
| 262 | `verificacion` (in id) | `verificación` |
| 273 | `verificacion` (in id) | `verificación` |
| 281 | `satisfaccion` | `satisfacción` |
| 289 | `satisfaccion` | `satisfacción` |
| 300 | `notificacion` | `notificación` |
| 335 | `personalizacion` | `personalización` |
| 350 | `navegacion` | `navegación` |
| 360 | `conversion` | `conversión` |
| 383 | `visualizacion` | `visualización` |
| 417 | `conversion` | `conversión` |
| 456 | `posicion` (x2) | `posición` |
| 458 | `posicion` | `posición` |
| 491 | `reputacion` | `reputación` |
| 496 | `reputacion` | `reputación` |
| 497 | `satisfaccion` | `satisfacción` |
| 507 | `descripcion` | `descripción` |
| 512 | `Configuracion` | `Configuración` |
| 515 | `profesion` | `profesión` |
| 521 | `Restauracion` | `Restauración` |
| 523 | `Educacion` | `Educación` |
| 543 | `boton` | `botón` |
| 583 | `boton` | `botón` |
| 591 | `conversion` | `conversión` |
| 592 | `Resolucion` | `Resolución` |
| 608 | `boton` | `botón` |
| 616 | `conversion` | `conversión` |
| 647 | `resolucion` | `resolución` |
| 669 | `Opcion` | `Opción` |
| 676 | `Opcion` | `Opción` |
| 680 | `seccion` | `sección` |
| 683 | `Opcion` | `Opción` |
| 688 | `Instalacion` | `Instalación` |
| 691 | `seccion` | `sección` |
| 703 | `instalacion` | `instalación` |
| 721 | `Opcion` | `Opción` |
| 723 | `Configuracion` | `Configuración` |
| 724 | `seccion` | `sección` |
| 727 | `Opcion` | `Opción` |
| 729 | `Configuracion` | `Configuración` |
| 730 | `seccion` | `sección` |
| 779 | `Facturacion` (title) | `Facturación` |
| 780 | `facturacion` (category) | `facturación` |
| 781 | `Informacion` | `Información` |
| 818 | `Importacion` | `Importación` |
| 834 | `Certificacion` | `Certificación` |
| 842 | `Configuracion ... Facturacion` | `Configuración ... Facturación` |
| 852 | `suscripcion` | `suscripción` |
| 854 | `Configuracion ... Facturacion` | `Configuración ... Facturación` |
| 855 | `suscripcion` | `suscripción` |
| 867 | `suscripcion` | `suscripción` |
| 902 | `automatizacion` (category) | `automatización` |
| 903 | `Certificacion` | `Certificación` |
| 924 | `certificacion` (in id) | `certificación` |
| 937 | `reputacion` | `reputación` |
| 955 | `exportacion` | `exportación` |
| 964 | `clasificacion`, `reputacion` | `clasificación`, `reputación` |
| 980 | `Configuracion` | `Configuración` |
| 982 | `verificacion` (in id) | `verificación` |

### Missing accents on common words

| Line | Wrong | Correct |
|------|-------|---------|
| 36 | `Recibiras` | `Recibirás` |
| 38 | `Tambien` | `También` |
| 72 | `Titulo` | `Título` |
| 73 | `especificas` | `específicas` |
| 74 | `telefono` | `teléfono` |
| 76 | `segun` | `según` |
| 95 | `Veras`, `pestana` | `Verás`, `pestaña` |
| 131 | `Segun` | `Según` |
| 165 | `Despues` (x2), `dias` (x2) | `Después`, `días` |
| 166 | `Despues` | `Después` |
| 169 | `Despues` | `Después` |
| 182 | `Tambien`, `programaticas` | `También`, `programáticas` |
| 204 | `despues`, `esta fresco` | `después`, `está fresco` |
| 205 | `guia`, `utiles` | `guía`, `útiles` |
| 234 | `Tambien` | `También` |
| 247 | `aparecera` | `aparecerá` |
| 307 | `dia` | `día` |
| 376 | `maximo` | `máximo` |
| 421 | `metricas` | `métricas` |
| 440 | `Veras`, `metricas` | `Verás`, `métricas` |
| 454 | `interes` | `interés` |
| 456 | `interes` | `interés` |
| 458 | `varian`, `segun` | `varían`, `según` |
| 466 | `periodicamente` | `periódicamente` |
| 475 | `guia`, `basandote` | `guía`, `basándote` |
| 496 | `Pequenas` | `Pequeñas` |
| 499 | `medicos`, `especificas` | `médicos`, `específicas` |
| 535 | `publicamente` | `públicamente` |
| 594 | `Tamano maximo` | `Tamaño máximo` |
| 618 | `Tamano maximo` | `Tamaño máximo` |
| 631 | `despues` | `después` |
| 636 | `maximo` | `máximo` |
| 637 | `maximo`, `Resolucion` | `máximo`, `Resolución` |
| 649 | `traves` | `través` |
| 684 | `guia` | `guía` |
| 698 | `Paginas`, `boton`, `pestana` | `Páginas`, `botón`, `pestaña` |
| 704 | `Ademas` | `Además` |
| 706 | `Paginas` | `Páginas` |
| 707 | `Despues` | `Después` |
| 732 | `guia` | `guía` |
| 747 | `guias` (visible text) | `guías` |
| 750 | `traves` | `través` |
| 757 | `guia` | `guía` |
| 772 | `dias despues` | `días después` |
| 858 | `Despues`, `degradara` | `Después`, `degradará` |
| 895 | `segun` | `según` |
| 920 | `Recibiras`, `especificas` | `Recibirás`, `específicas` |
| 937 | `esta verificada` | `está verificada` |
| 998 | `metricas` | `métricas` |

### Missing accents on verb estar

| Line | Wrong | Correct |
|------|-------|---------|
| 99 | `sera visible` | `será visible` |
| 100 | `publicamente` | `públicamente` |
| 109 | `publicamente` | `públicamente` |
| 204 | `esta fresco` | `está fresco` |
| 220 | `publicamente` | `públicamente` |
| 226 | `publicamente` | `públicamente` |
| 247 | `publicamente` | `públicamente` |
| 259 | `sera visible` | `será visible` |
| 937 | `esta verificada` | `está verificada` |

### Missing ¿ and ¡

| Line | Wrong | Correct |
|------|-------|---------|
| 73 | `"Que problema te resolvi?"` | `"¿Qué problema te resolví?"` |
| 73 | `"Recomendarias este servicio?"` | `"¿Recomendarías este servicio?"` |

### Grammar: missing accent on interrogative "Qué"

| Line | Wrong | Correct |
|------|-------|---------|
| 55 | `para que es` | `para qué es` |
| 73 | `Que problema` | `¿Qué problema` |

---

## 2. lib/blog-data.ts

Most issues are in slug/image URL fields (not user-facing). The visible content text issues:

| Line | Wrong | Correct | Context |
|------|-------|---------|---------|
| 1648 | `decision` | `decisión` | In paragraph text about SaaS buyers |
| 7310 | `sera` | `será` | In paragraph about audio quality |

**Note:** Slug fields like `testimonios-en-pagina-web-donde-colocarlos`, `estadisticas-testimonios-datos-conversion`, etc. correctly omit accents (URLs should not have accents). Same for `blogImageUrl()` calls. These are NOT issues.

The following words appear in `<a href="...">` link text as visible anchor text and should be checked:
| Line | Wrong | Correct |
|------|-------|---------|
| 50 | `guia` (in link text) | `guía` |
| 161 | `guia` (in link text) | `guía` |
| 327 | `guia` (in link text) | `guía` |
| 754 | `guia` (in link text) | `guía` |
| 1150 | `guia` (in link text) | `guía` |
| 1515 | `guia` (in link text) | `guía` |

---

## 3. lib/demo-testimonials.ts

| Line | Wrong | Correct | Context |
|------|-------|---------|---------|
| 48 | `recepcion` | `recepción` | "en recepcion" |
| 66 | `Fotografia JL` | `Fotografía JL` | author_company |
| 78 | `dia` | `día` | "primer dia" |
| 88 | `despues`, `tenia` | `después`, `tenía` | "Probamos varias plataformas..." |
| 108 | `verificacion` | `verificación` | "La verificacion de empresa" |
| 146 | `Mecanico Prieto` | `Mecánico Prieto` | author_company |
| 147 | `Mecanico` | `Mecánico` | author_role |
| 176 | `Nutricion CO` | `Nutrición CO` | author_company |
| 178 | `opinion` | `opinión` | "dejar su opinion" |
| 188 | `verificacion` | `verificación` | "testimonios con verificacion" |
| 208 | `conversion` | `conversión` | "tasas de conversion" |
| 236 | `Psicologia Positiva` | `Psicología Positiva` | author_company |
| 248 | `Rapido` | `Rápido` | "Rapido y fácil" |
| 258 | `verificacion`, `confian` | `verificación`, `confían` | "verificacion de empresa" |
| 278 | `opinion`, `autonoma` | `opinión`, `autónoma` | "contadora autonoma" |
| 308 | `ademas` | `además` | "Ademas cuida el SEO" |

---

## 4. lib/minisite-templates.ts

| Line | Wrong | Correct | Context |
|------|-------|---------|---------|
| 24 | `'Educacion'` | `'Educación'` | Category name |
| 25 | `'Tecnologia'` | `'Tecnología'` | Category name |
| 96 | `organico` | `orgánico` | Description |
| 114 | `dinamico`, `energia` | `dinámico`, `energía` | Description |
| 264 | `EDUCACION` (comment) | `EDUCACIÓN` | Comment |
| 269 | `Educacion` | `Educación` | Category field |
| 287 | `Educacion` | `Educación` | Category field |
| 305 | `Educacion` | `Educación` | Category field |
| 306 | `clasico`, `formacion` | `clásico`, `formación` | Description |
| 322 | `TECNOLOGIA` (comment) | `TECNOLOGÍA` | Comment |
| 327 | `Tecnologia` | `Tecnología` | Category field |
| 345 | `Tecnologia` | `Tecnología` | Category field |
| 363 | `Tecnologia` | `Tecnología` | Category field |
| 384 | `Salon Elegante` | `Salón Elegante` | Template name |
| 422 | `energia` | `energía` | Description |

---

## 5. lib/email-templates.ts

| Line | Wrong | Correct | Context |
|------|-------|---------|---------|
| 163 | `boton` | `botón` | "haz clic en el boton" |
| 182 | `publicamente` | `públicamente` | "es visible publicamente" |

---

## 6. lib/city-industry-content.ts

| Line | Wrong | Correct | Context |
|------|-------|---------|---------|
| 26 | `metropoli` | `metrópoli` | City description |
| 59 | `'educacion'` | `'educación'` | Type union value |
| 82 | `'educacion'` | `'educación'` | Mapping value |
| 323 | `inversion` | `inversión` | Tip text |
| 362 | `dia` | `día` | "el mismo dia" |
| 427 | `opinion`, `dias` | `opinión`, `días` | Tip text |
| 438 | `opcion` | `opción` | Tip text |
| 477 | `dia` | `día` | Tip text |
| 524 | `mecanico` | `mecánico` | Industry intro |
| 740 | `metropoli` | `metrópoli` | Generated text |
| 743 | `metropoli` | `metrópoli` | Generated text |
| 746 | `presentacion`, `region` | `presentación`, `región` | Generated text |
| 751 | `accion` | `acción` | Generated text |
| 769 | `dia` | `día` | Generated text |
| 804 | `opinion` | `opinión` | Generated text |
| 892 | `'educacion'` | `'educación'` | Switch case value |
| 904 | `'tecnologia'` | `'tecnología'` | Switch case value |

---

## 7. lib/i18n.ts

| Line | Wrong | Correct |
|------|-------|---------|
| 361 | `'Configuracion guardada correctamente'` | `'Configuración guardada correctamente'` |

---

## 8. lib/certification.ts

| Line | Wrong | Correct |
|------|-------|---------|
| 43 | `'Sin certificacion'` | `'Sin certificación'` |

---

## 9. lib/collection-translations.ts

| Line | Wrong | Correct |
|------|-------|---------|
| 32 | `'Quieres añadir una foto?'` | `'¿Quieres añadir una foto?'` |

---

## 10. app/(marketing)/ pages

### actualizaciones/page.tsx

| Line | Wrong | Correct |
|------|-------|---------|
| 9 | `al dia` | `al día` |
| 163 | `Mas de 160` | `Más de 160` |

### afiliados/page.tsx

| Line | Wrong | Correct |
|------|-------|---------|
| 10 | `comision` | `comisión` |
| 28 | `comision` | `comisión` |
| 30 | `comision`, `dias` | `comisión`, `días` |
| 39 | `comision` | `comisión` |
| 41 | `comision` | `comisión` |
| 69 | `comision` | `comisión` |
| 70 | `traves`, `suscripcion` | `través`, `suscripción` |
| 80 | `comision` | `comisión` |
| 100 | `suscripcion` | `suscripción` |
| 136 | `Como` (in ¿Como) | `Cómo` (should be `¿Cómo`) |
| 136-137 | `comision` (x3) | `comisión` |
| 137 | `suscripcion`, `traves` | `suscripción`, `través` |
| 145 | `dias`, `comision` | `días`, `comisión` |
| 152 | `minimo` | `mínimo` |
| 153 | `minimo` | `mínimo` |
| 170 | `comision` | `comisión` |
| 200 | `comision` | `comisión` |
| 280 | `comision` | `comisión` |

### agencias/page.tsx

| Line | Wrong | Correct |
|------|-------|---------|
| 202 | `disenadas` | `diseñadas` |

### ayuda/page.tsx

| Line | Wrong | Correct |
|------|-------|---------|
| 19 | `Guias`, `maximo` | `Guías`, `máximo` |
| 55 | `Guias`, `maximo` | `Guías`, `máximo` |
| 87 | `guias` | `guías` |
| 118 | `guia` | `guía` |
| 136 | `esta cubierta`, `guias` | `está cubierta`, `guías` |

### calculadora-roi/calculadora-roi-client.tsx

| Line | Wrong | Correct |
|------|-------|---------|
| 229 | `mas conversiones` | `más conversiones` |

### casos-de-exito/page.tsx

| Line | Wrong | Correct |
|------|-------|---------|
| 111 | `verificacion` | `verificación` |

### certificacion/page.tsx

| Line | Wrong | Correct |
|------|-------|---------|
| 9 | `segun` | `según` |
| 77 | `Maximo`, `decision` | `Máximo`, `decisión` |

### comparar/mejores-herramientas-testimonios/page.tsx

| Line | Wrong | Correct |
|------|-------|---------|
| 35 | `administracion` | `administración` |
| 37 | `Latinoamerica` | `Latinoamérica` |
| 58 | `opcion` | `opción` |
| 69 | `ingles` | `inglés` |
| 70 | `comision` | `comisión` |
| 93 | `ingles` | `inglés` |
| 115 | `ingles` | `inglés` |
| 200-202 | `Ingles` (x3) | `Inglés` |
| 211 | `opcion`, `demas`, `estan` | `opción`, `demás`, `están` |
| 291 | `guia` | `guía` |
| 425 | `eleccion`, `Aqui`, `guia` | `elección`, `Aquí`, `guía` |
| 432 | `recibiran` | `recibirán` |
| 434 | `opcion`, `logica` | `opción`, `lógica` |
| 440 | `catalogo` | `catálogo` |
| 442 | `ingles`, `estan` | `inglés`, `están` |
| 449 | `tendras` | `tendrás` |
| 457 | `Asi`, `captacion` | `Así`, `captación` |
| 469 | `estan` | `están` |
| 475 | `Latinoamerica`, `opcion` | `Latinoamérica`, `opción` |
| 479 | `ingles` | `inglés` |
| 480 | `especificas`, `catalogo` | `específicas`, `catálogo` |

### comparar/opinafy-vs-senja/page.tsx

| Line | Wrong | Correct |
|------|-------|---------|
| 86 | `esta disponible`, `ingles`, `administracion` | `está disponible`, `inglés`, `administración` |
| 173 | `ingles`, `estan`, `dolares` | `inglés`, `están`, `dólares` |
| 180 | `Latinoamerica` | `Latinoamérica` |
| 289 | `dolares` | `dólares` |
| 301 | `documentacion`, `estan` | `documentación`, `están` |
| 338 | `ingles` | `inglés` |
| 355 | `catalogo` | `catálogo` |
| 358 | `dia` | `día` |
| 390 | `opcion`, `logica` | `opción`, `lógica` |
| 392 | `tendran` | `tendrán` |
| 396 | `catalogo` | `catálogo` |
| 397 | `demas`, `eleccion`, `pagaras` | `demás`, `elección`, `pagarás` |

### comparar/opinafy-vs-testimonial-to/page.tsx

| Line | Wrong | Correct |
|------|-------|---------|
| 86 | `esta disponible`, `ingles`, `administracion` | `está disponible`, `inglés`, `administración` |
| 162 | `opcion` | `opción` |
| 173 | `ingles`, `estan`, `dolares` | `inglés`, `están`, `dólares` |
| 177 | `disenada` | `diseñada` |
| 179 | `Espana` | `España` |
| 180 | `Latinoamerica` | `Latinoamérica` |
| 249 | `Aqui` | `Aquí` |
| 288 | `tendras`, `Espana` | `tendrás`, `España` |
| 289 | `Latinoamerica` | `Latinoamérica` |
| 302 | `estan`, `friccion` | `están`, `fricción` |
| 325 | `tendras`, `ingles` | `tendrás`, `inglés` |
| 349 | `Mas tiempo` | `Más tiempo` |
| 358 | `Mas integraciones` | `Más integraciones` |
| 362 | `catalogo` | `catálogo` |
| 369 | `ingles` | `inglés` |
| 371 | `ingles` | `inglés` |
| 382 | `eleccion` | `elección` |
| 385 | `Espana`, `Latinoamerica` | `España`, `Latinoamérica` |
| 386 | `opcion` | `opción` |
| 387 | `tendran` | `tendrán` |

### contacto/page.tsx

| Line | Wrong | Correct |
|------|-------|---------|
| 38 | `aqui` | `aquí` |

### descargas/page.tsx

| Line | Wrong | Correct |
|------|-------|---------|
| 553 | `guia` | `guía` |
| 613 | `guia` | `guía` |

### guias/ (all subpages)

**Missing ¿ in FAQ questions:**

| File | Line | Wrong | Correct |
|------|------|-------|---------|
| google-tag-manager/page.tsx | 152 | `Puedo controlar en que páginas...?` | `¿Puedo controlar en qué páginas...?` |
| shopify/page.tsx | 190 | `Puedo mostrar testimonios...?` | `¿Puedo mostrar testimonios...?` |
| squarespace/page.tsx | 200 | `Puedo personalizar...?` | `¿Puedo personalizar...?` |
| squarespace/page.tsx | 204 | `Necesito actualizar...?` | `¿Necesito actualizar...?` |
| webflow/page.tsx | 165 | `Puedo poner el widget...?` | `¿Puedo poner el widget...?` |
| wix/page.tsx | 184 | `Puedo personalizar...?` | `¿Puedo personalizar...?` |
| wix/page.tsx | 188 | `Necesito actualizar...?` | `¿Necesito actualizar...?` |
| wordpress/page.tsx | 172 | `Puedo personalizar...?` | `¿Puedo personalizar...?` |
| wordpress/page.tsx | 176 | `Necesito actualizar...?` | `¿Necesito actualizar...?` |

**"guia" without accent in visible link text:**

| File | Line | Wrong | Correct |
|------|------|-------|---------|
| page.tsx | 140 | `Ver guia` | `Ver guía` |
| google-tag-manager/page.tsx | 187 | `Ver guia para Webflow` | `Ver guía para Webflow` |
| shopify/page.tsx | 229 | `Ver guia para WordPress` | `Ver guía para WordPress` |
| squarespace/page.tsx | 235 | `Ver guia para Wix` | `Ver guía para Wix` |
| webflow/page.tsx | 200 | `Ver guia para GTM` | `Ver guía para GTM` |
| wix/page.tsx | 223 | `Ver guia para Squarespace` | `Ver guía para Squarespace` |
| wordpress/page.tsx | 211 | `Ver guia para Shopify` | `Ver guía para Shopify` |

### informe-prueba-social-2026/page.tsx

| Line | Wrong | Correct |
|------|-------|---------|
| 61 | `Mas probabilidades` | `Más probabilidades` |
| 63 | `Mas gasto`, `interactuan` | `Más gasto`, `interactúan` |
| 67 | `Mas engagement` | `Más engagement` |
| 70 | `traves` | `través` |
| 231 | `descubrio`, `interactuan` | `descubrió`, `interactúan` |
| 286 | `traves` | `través` |
| 287 | `descubrio` | `descubrió` |
| 309 | `interactuan` | `interactúan` |
| 322 | `sesion` | `sesión` |
| 323 | `decision` | `decisión` |
| 335 | `Seccion` | `Sección` |
| 340 | `escepticos`, `segun` | `escépticos`, `según` |

### integraciones/zapier/page.tsx

| Line | Wrong | Correct |
|------|-------|---------|
| 58 | `Notificacion` | `Notificación` |
| 209 | `seccion` | `sección` |
| 321 | `sesion` | `sesión` |

### plantillas/page.tsx

| Line | Wrong | Correct |
|------|-------|---------|
| 184 | `disenadas`, `profesion` | `diseñadas`, `profesión` |

### plantillas/[id]/demo/page.tsx

| Line | Wrong | Correct |
|------|-------|---------|
| 74 | `Asi`, `veria` | `Así`, `vería` |

### plantillas-minisitio/[id]/page.tsx

| Line | Wrong | Correct |
|------|-------|---------|
| 273 | `Configuracion` | `Configuración` |

### prensa/page.tsx

| Line | Wrong | Correct |
|------|-------|---------|
| 44 | `personalizacion` | `personalización` |
| 114 | `importacion` | `importación` |
| 175 | `resolucion` | `resolución` |
| 186 | `resolucion` | `resolución` |

### ranking/page.tsx

| Line | Wrong | Correct |
|------|-------|---------|
| 170 | `Valoracion` | `Valoración` |
| 172 | `Certificacion` | `Certificación` |

### verificado-badge/page.tsx

| Line | Wrong | Correct |
|------|-------|---------|
| 48 | `mas conversiones` | `más conversiones` |
| 54 | `Verificacion` | `Verificación` |
| 115 | `Asi luce` | `Así luce` |
| 187 | `decision` | `decisión` |

---

## 11. app/(dashboard)/ pages

### proyectos/[slug]/automatizacion/page.tsx

| Line | Wrong | Correct |
|------|-------|---------|
| 45 | `encantaria`, `opinion` | `encantaría`, `opinión` |
| 47 | `encantaria` | `encantaría` |
| 129 | `Configuracion de automatizacion` | `Configuración de automatización` |
| 303 | `Automatizacion` | `Automatización` |
| 305 | `envio` | `envío` |
| 312 | `Automatizacion` | `Automatización` |
| 314 | `esta activa`, `recibiran` | `está activa`, `recibirán` |
| 334 | `Dias`, `envio` | `Días`, `envío` |
| 344 | `dia` | `día` |
| 349 | `enviara`, `dia`, `dias`, `despues` | `enviará`, `día`, `días`, `después` |
| 380 | `recopilacion`, `incluira` | `recopilación`, `incluirá` |
| 387 | `recopilacion` | `recopilación` |
| 444 | `configuracion` | `configuración` |
| 470 | `envio` | `envío` |
| 506 | `Tambien` | `También` |
| 589 | `envio`, `envios` | `envío`, `envíos` |

### proyectos/[slug]/integraciones/page.tsx

| Line | Wrong | Correct |
|------|-------|---------|
| 74 | `Configuracion` | `Configuración` |

### proyectos/[slug]/page.tsx

| Line | Wrong | Correct |
|------|-------|---------|
| 266 | `Automatizacion` | `Automatización` |
| 383 | `Certificacion` | `Certificación` |
| 443-453 | `verificacion` | `verificación` |

### proyectos/[slug]/plantillas-email/page.tsx

| Line | Wrong | Correct |
|------|-------|---------|
| 24 | `opinion` | `opinión` |
| 30 | `encantaria`, `opinion`, `decision` | `encantaría`, `opinión`, `decisión` |
| 58 | `opinion` | `opinión` |
| 62 | `opinion`, `dias`, `esta llena` | `opinión`, `días`, `está llena` |
| 85 | `Despues` | `Después` |
| 88 | Missing ¡: `Celebramos tu éxito, {name}!` | `¡Celebramos tu éxito, {name}!` |
| 94 | `encantaria`, `seria`, `increiblemente` | `encantaría`, `sería`, `increíblemente` |
| 124 | `reflexion`, `encantaria`, `opinion` | `reflexión`, `encantaría`, `opinión` |
| 145 | `Despues` | `Después` |
| 178 | Missing ¿: `Quieres compartir tu experiencia en video?` | `¿Quieres compartir...?` |
| 182 | `encantaria`, `increiblemente` | `encantaría`, `increíblemente` |
| 192 | `opcion` | `opción` |
| 328 | `recopilacion` | `recopilación` |

### proyectos/[slug]/solicitar/page.tsx

| Line | Wrong | Correct |
|------|-------|---------|
| 21 | `opinion` | `opinión` |
| 90 | `encantaria`, `opinion` | `encantaría`, `opinión` |
| 95 | `opinion` | `opinión` |

---

## 12. app/(admin)/ pages

### admin/configuracion/page.tsx

| Line | Wrong | Correct |
|------|-------|---------|
| 48 | `Configuracion` | `Configuración` |

### admin/testimonios/page.tsx

| Line | Wrong | Correct |
|------|-------|---------|
| 65 | `Verificacion` | `Verificación` |

### admin/tickets/[id]/page.tsx

| Line | Wrong | Correct |
|------|-------|---------|
| 35 | `Facturacion` | `Facturación` |
| 274 | `Informacion` | `Información` |

### admin/tickets/page.tsx

| Line | Wrong | Correct |
|------|-------|---------|
| 146 | `Facturacion` | `Facturación` |

### admin/usuarios/page.tsx

| Line | Wrong | Correct |
|------|-------|---------|
| 313 | `dias` | `días` |

### admin/blog/page.tsx

| Line | Wrong | Correct |
|------|-------|---------|
| 11 | `estan` | `están` |
| 22 | `Titulo` | `Título` |

---

## 13. components/landing/

### footer.tsx

| Line | Wrong | Correct |
|------|-------|---------|
| 12 | `'Guias'` | `'Guías'` |

### minisite-showcase.tsx

| Line | Wrong | Correct |
|------|-------|---------|
| 86 | `profesion` | `profesión` |
| 90 | `Verificacion` | `Verificación` |

---

## 14. components/dashboard/

### sidebar.tsx

Lines 59 and 69 have `'/configuracion'` and `'/facturacion'` as href paths -- these are URL paths so the missing accents are expected/correct.

### widget-configurator.tsx

Lines 90 and 177 have `'personalizacion-avanzada'` as a DOM element ID -- these are CSS IDs so the missing accents are expected/correct.

---

## Summary by Issue Type

| Issue Type | Count (approx) |
|------------|----------------|
| Missing accent on -cion/-sion nouns | ~130 |
| Missing accent on common words (más, día, guía, etc.) | ~80 |
| Missing accent on verb forms (será, está, enviará, etc.) | ~40 |
| Missing accent on -ico/-ica adjectives | ~10 |
| Missing ñ (diseñada, España, pequeñas, mecánico, etc.) | ~20 |
| Missing ¿ on questions | ~15 |
| Missing ¡ on exclamations | ~1 |
| Missing accent on proper nouns (Inglés, Latinoamérica, etc.) | ~25 |
| Other (catálogo, lógica, fricción, etc.) | ~30 |
| **TOTAL** | **~350** |

## Files with MOST Issues (Priority Order)

1. **lib/help-data.ts** -- ~80 issues (massive, nearly every section affected)
2. **app/(marketing)/comparar/** -- ~60 issues across 3 comparison pages
3. **app/(marketing)/afiliados/page.tsx** -- ~20 issues (comision repeated many times)
4. **app/(dashboard)/proyectos/[slug]/automatizacion/page.tsx** -- ~16 issues
5. **app/(dashboard)/proyectos/[slug]/plantillas-email/page.tsx** -- ~15 issues
6. **lib/demo-testimonials.ts** -- ~15 issues
7. **lib/minisite-templates.ts** -- ~15 issues
8. **lib/city-industry-content.ts** -- ~15 issues
9. **app/(marketing)/informe-prueba-social-2026/page.tsx** -- ~12 issues
10. **app/(marketing)/guias/** -- ~15 issues across guide pages

## Files that are CLEAN

- lib/industry-data.ts (visible text is correct)
- lib/widget-templates.ts (visible text is correct)
- lib/blog-data.ts (content text mostly correct, only 2 content issues + some link text)
- app/(marketing)/page.tsx (homepage)
- app/(marketing)/precios/page.tsx
- components/landing/pricing.tsx
- components/landing/hero.tsx
- components/landing/faq.tsx
- components/landing/features.tsx
