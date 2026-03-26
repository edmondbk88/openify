# Accent Audit Report — Opinafy Codebase

**Date:** 2026-03-26  
**Scope:** All `.tsx` and `.ts` files in `src/`  
**Status:** Audit only — no fixes applied

Only visible text issues are reported (string literals, JSX content).  
Excluded: variable names, URLs, slugs, route paths, CSS classes, imports, and English-language files under `(en)/` or ending in `-en.ts`/`-en.tsx`.

---

## src/app/s/[username]/page.tsx

| Line | Wrong | Correct |
|------|-------|---------|
| 91 | `valoracion` | `valoración` |
| 237 | `pagina publica` | `página pública` |
| 238 | `pagina`, `estara` | `página`, `estará` |
| 242 | `paginas publicas`, `estan` | `páginas públicas`, `están` |
| 259 | `pagina` | `página` |
| 458 | `Valoracion` | `Valoración` |
| 627 | `pagina` | `página` |

## src/app/s/[username]/todos/page.tsx

| Line | Wrong | Correct |
|------|-------|---------|
| 364 | `pagina` | `página` |

## src/app/(marketing)/guias/webflow/page.tsx

| Line | Wrong | Correct |
|------|-------|---------|
| 5 | `Como` (title) | `Cómo` |
| 15 | `Como` | `Cómo` |
| 62 | `Como` | `Cómo` |
| 66 | `tecnicos` | `técnicos` |
| 86 | `seccion` | `sección` |
| 87 | `diseno`, `tipografia` | `diseño`, `tipografía` |
| 90 | `codigo`, `tendra` | `código`, `tendrá` |
| 97 | `codigo` | `código` (in title) |
| 102 | `Opcion`, `Codigo`, `paginas` | `Opción`, `Código`, `páginas` |
| 104 | `Configuracion` | `Configuración` |
| 106 | `codigo` | `código` |
| 112 | `Opcion`, `Codigo`, `pagina`, `especifica` | `Opción`, `Código`, `página`, `específica` |
| 114 | `pagina` | `página` |
| 117 | `codigo` | `código` |
| 123 | `Opcion`, `posicion` | `Opción`, `posición` |
| 125 | `anade` | `añade` |
| 143 | `pagina` | `página` |
| 144 | `automaticamente` | `automáticamente` |
| 158 | `asincrona`, `pagina` | `asíncrona`, `página` |
| 161 | question missing `¿` |
| 162 | `Si`, `anadir`, `codigo` | `Sí`, `añadir`, `código` |
| 165 | question missing `¿` |
| 166 | `Si`, `opcion`, `anadir`, `paginas`, `opcion`, `pagina` | `Sí`, `opción`, `añadir`, `páginas`, `opción`, `página` |
| 170 | `Si`, `automaticamente` | `Sí`, `automáticamente` |

## src/app/(marketing)/guias/google-tag-manager/page.tsx

| Line | Wrong | Correct |
|------|-------|---------|
| 5 | `Como` | `Cómo` |
| 15 | `Como` | `Cómo` |
| 62 | `Como` | `Cómo` |
| 90 | `Configuracion` | `Configuración` |
| 91 | `codigo` | `código` |
| 101 | `seccion`, `Activacion` | `sección`, `Activación` |
| 102 | `paginas` | `páginas` |
| 103 | `paginas`, `especificas` | `páginas`, `específicas` |
| 116 | `Anade`, `version`, `Anadir` | `Añade`, `versión`, `Añadir` |
| 122 | `paginas` | `páginas` |
| 131 | `esta` | `está` |
| 144 | question missing `¿`: `Es mejor...?` |
| 145 | `mas`, `ahi`, `codigo`, `mas`, `metodos` | `más`, `ahí`, `código`, `más`, `métodos` |
| 149 | `minimo`, `asincrona`, `instalacion` | `mínimo`, `asíncrona`, `instalación` |
| 152 | question missing `¿`: `Puedo controlar...?` |
| 153 | `Si`, `paginas`, `especificas` | `Sí`, `páginas`, `específicas` |
| 157 | `Si`, `metodo` | `Sí`, `método` |

## src/app/(marketing)/guias/squarespace/page.tsx

| Line | Wrong | Correct |
|------|-------|---------|
| 5 | `Como` | `Cómo` |
| 15 | `Como` | `Cómo` |
| 61 | `Como` | `Cómo` |
| 65 | `diseno` | `diseño` |
| 88 | `seccion` | `sección` |
| 89 | `diseno`, `tipografia` | `diseño`, `tipografía` |
| 92 | `codigo`, `tendra` | `código`, `tendrá` |
| 99 | `codigo` | `código` |
| 104 | `Opcion`, `codigo` | `Opción`, `código` |
| 106 | `pagina` | `página` |
| 107 | `pagina` | `página` |
| 108 | `insercion`, `codigo` | `inserción`, `código` |
| 109 | `codigo` | `código` |
| 110 | `opcion` | `opción` |
| 114 | `codigo` | `código` |
| 118 | `codigo`, `estan` | `código`, `están` |
| 124 | `Opcion`, `Inyeccion`, `codigo` | `Opción`, `Inyección`, `código` |
| 125 | `paginas` | `páginas` |
| 127 | `Inyeccion`, `codigo` | `Inyección`, `código` |
| 128 | `codigo`, `seccion` | `código`, `sección` |
| 135 | `opcion` | `opción` |
| 140 | `Opcion`, `Inyeccion`, `pagina` | `Opción`, `Inyección`, `página` |
| 141 | `pagina`, `especifica` | `página`, `específica` |
| 143 | `pagina` | `página` |
| 146 | `codigo`, `Inyeccion`, `codigo`, `pagina` | `código`, `Inyección`, `código`, `página` |
| 155 | `pagina` | `página` |
| 156 | `automaticamente` | `automáticamente` |
| 163 | `pagina` | `página` |
| 173 | `disenos` | `diseños` |
| 189 | `asincrona` | `asíncrona` |
| 193 | `Si` | `Sí` |
| 197 | `codigo`, `si`, `inyeccion`, `codigo` | `código`, `sí`, `inyección`, `código` |
| 200 | question missing `¿`: `Puedo personalizar...?` |
| 201 | `tipografia`, `mas` | `tipografía`, `más` |
| 204 | question missing `¿`: `Necesito actualizar...?` |
| 205 | `automaticamente`, `codigo` | `automáticamente`, `código` |

## src/app/(marketing)/guias/wordpress/page.tsx

| Line | Wrong | Correct |
|------|-------|---------|
| 5 | `Como` | `Cómo` |
| 15 | `Como` | `Cómo` |
| 61 | `Como` | `Cómo` |
| 65 | `tecnicos` | `técnicos` |
| 88 | `seccion` | `sección` |
| 89 | `diseno`, `tipografia` | `diseño`, `tipografía` |
| 92 | `codigo`, `tendra` | `código`, `tendrá` |
| 99 | `codigo` | `código` |
| 106 | `pagina` | `página` |
| 109 | `pagina` | `página` |
| 118 | `paginas` | `páginas` |
| 122 | `codigo`, `seccion` | `código`, `sección` |
| 135 | `Despues`, `pagina` | `Después`, `página` |
| 143 | `pagina` | `página` |
| 144 | `automaticamente` | `automáticamente` |
| 151 | `cache`, `despues` | `caché`, `después` |
| 165 | `asincrona`, `pagina` | `asíncrona`, `página` |
| 169 | `Si`, `codigo`, `codigo` | `Sí`, `código`, `código` |
| 172 | question missing `¿`: `Puedo personalizar...?` |
| 173 | `tipografia`, `mas` | `tipografía`, `más` |
| 176 | question missing `¿`: `Necesito actualizar...?` |
| 177 | `automaticamente`, `codigo` | `automáticamente`, `código` |
| 181 | `Si`, `paginas`, `pagina`, `pagina` | `Sí`, `páginas`, `página`, `página` |

## src/app/(marketing)/guias/shopify/page.tsx

| Line | Wrong | Correct |
|------|-------|---------|
| 5 | `Como` | `Cómo` |
| 15 | `Como` | `Cómo` |
| 61 | `Como` | `Cómo` |
| 79 | `resenas` | `reseñas` |
| 88 | `seccion` | `sección` |
| 89 | `diseno`, `tipografia` | `diseño`, `tipografía` |
| 92 | `codigo`, `tendra` | `código`, `tendrá` |
| 96 | `codigo` | `código` |
| 104 | `codigo` | `código` |
| 106 | `codigo` | `código` |
| 114 | `opcion`, `paginas` | `opción`, `páginas` |
| 123 | `pagina` | `página` |
| 124 | `seccion` | `sección` |
| 125 | `codigo` | `código` |
| 129 | `seccion` | `sección` |
| 134 | `Opcion`, `Pagina`, `especifica` | `Opción`, `Página`, `específica` |
| 135 | `pagina` | `página` |
| 137 | `Paginas` | `Páginas` |
| 138 | `pagina` | `página` |
| 140 | `codigo` | `código` |
| 141 | `pagina` | `página` |
| 149 | `pagina` | `página` |
| 150 | `automaticamente` | `automáticamente` |
| 166 | `pagina`, `boton` | `página`, `botón` |
| 167 | `paginas` | `páginas` |
| 168 | `pagina` | `página` |
| 169 | `automaticamente` | `automáticamente` |
| 183 | `asincrona`, `metricas` | `asíncrona`, `métricas` |
| 187 | `Si` | `Sí` |
| 190 | question missing `¿`: `Puedo mostrar...?` |
| 191 | `Si`, `multiples` | `Sí`, `múltiples` |
| 195 | `Si`, `automaticamente` | `Sí`, `automáticamente` |

## src/app/(marketing)/guias/wix/page.tsx

| Line | Wrong | Correct |
|------|-------|---------|
| 5 | `Como` | `Cómo` |
| 15 | `Como` | `Cómo` |
| 61 | `Como` | `Cómo` |
| 65 | `tecnicos` | `técnicos` |
| 88 | `seccion` | `sección` |
| 89 | `diseno`, `tipografia` | `diseño`, `tipografía` |
| 92 | `codigo`, `tendra` | `código`, `tendrá` |
| 99 | `codigo` | `código` |
| 106 | `pagina` | `página` |
| 109 | `posicion`, `pagina` | `posición`, `página` |
| 110 | `codigo`, `codigo` | `código`, `código` |
| 124 | `aplicacion`, `codigo` | `aplicación`, `código` |
| 125 | `tamano` | `tamaño` |
| 133 | `pagina` | `página` |
| 134 | `codigo`, `dinamicamente` | `código`, `dinámicamente` |
| 143 | `publica` | `publica` (verb — OK) |
| 144 | `automaticamente` | `automáticamente` |
| 161 | `pagina` | `página` |
| 163 | `automaticamente` | `automáticamente` |
| 164 | `clasicos` | `clásicos` |
| 177 | `asincrona` | `asíncrona` |
| 181 | `Si`, `clasico` | `Sí`, `clásico` |
| 184 | question missing `¿`: `Puedo personalizar...?` |
| 185 | `Si`, `automaticamente` | `Sí`, `automáticamente` |
| 188 | question missing `¿`: `Necesito actualizar...?` |
| 189 | `automaticamente`, `codigo` | `automáticamente`, `código` |
| 193 | `Si` | `Sí` |

## src/app/(marketing)/guias/page.tsx

| Line | Wrong | Correct |
|------|-------|---------|
| 37 | `paginas`, `especificas` | `páginas`, `específicas` |
| 67 | `codigo`, `pagina` | `código`, `página` |
| 155 | `linea`, `codigo` | `línea`, `código` |

## src/app/(marketing)/afiliados/page.tsx

| Line | Wrong | Correct |
|------|-------|---------|
| 8 | `comisiones` | OK (no accent needed) |
| 10 | `comision`, `espanol`, `dias` | `comisión`, `español`, `días` |
| 28 | `comision` | `comisión` |
| 30 | `comision`, `dias` | `comisión`, `días` |
| 39 | `comision` | `comisión` |
| 41 | `comision` | `comisión` |
| 49 | `Registrate` | `Regístrate` |
| 50 | `Recibiras`, `unico` | `Recibirás`, `único` |
| 69 | `comision` | `comisión` |
| 70 | `suscripcion` | `suscripción` |
| 80 | `comision` | `comisión` |
| 81 | `dias`, `dias` | `días`, `días` |
| 82 | `comisiones` | OK |
| 100 | `suscripcion` | `suscripción` |
| 109 | `Anade` | `Añade` |
| 136 | `Como`, `comision` | `Cómo`, `comisión` |
| 137 | `suscripcion`, `comision` | `suscripción`, `comisión` |
| 141 | `dias` | `días` |
| 144 | `dias` | `días` |
| 145 | `dias`, `dias`, `comision` | `días`, `días`, `comisión` |
| 153 | `minimo` | `mínimo` |
| 156 | `Espana` | `España` |
| 157 | `Si`, `esta`, `pais`, `via` | `Sí`, `está`, `país`, `vía` |
| 170 | `comision`, `espanol` | `comisión`, `español` |
| 199 | `espanol` | `español` |
| 200 | `comision` | `comisión` |
| 207 | `Unete` | `Únete` |
| 220 | `Como` | `Cómo` |
| 361 | `Unete`, `mas`, `espanol` | `Únete`, `más`, `español` |
| 367 | `Unete` | `Únete` |

## src/app/(marketing)/ayuda/page.tsx

| Line | Wrong | Correct |
|------|-------|---------|
| 19 | `Guias`, `maximo` | `Guías`, `máximo` |
| 55 | `Guias`, `maximo` | `Guías`, `máximo` |
| 87 | `guias` | `guías` |
| 88 | `mas` | `más` |
| 118 | `guia` | `guía` |
| 136 | `esta`, `guias` | `está`, `guías` |
| 137 | `aqui` | `aquí` |

## src/app/(marketing)/contacto/page.tsx

| Line | Wrong | Correct |
|------|-------|---------|
| 10 | `aqui` | `aquí` |
| 22 | `aqui` | `aquí` |
| 38 | `aqui` | `aquí` |

## src/app/(marketing)/ranking/page.tsx

| Line | Wrong | Correct |
|------|-------|---------|
| 234 | `aqui` | `aquí` |

## src/app/(marketing)/actualizaciones/page.tsx

| Line | Wrong | Correct |
|------|-------|---------|
| 9 | `dia`, `ultimas` | `día`, `últimas` |
| 55 | `pagina`, `publica` | `página`, `pública` |
| 61 | `espanol`, `ingles` | `español`, `inglés` |
| 66 | `Pagina` | `Página` |
| 67 | `publico` | `público` |
| 73 | `disenos` | `diseños` |
| 78 | `Automatizacion` | `Automatización` |
| 79 | `automaticos`, `despues`, `automaticos` | `automáticos`, `después`, `automáticos` |
| 97 | `documentacion` | `documentación` |
| 103 | `mas` | `más` |
| 108 | `Analisis`, `estadisticas` | `Análisis`, `estadísticas` |
| 109 | `metricas`, `conversion` | `métricas`, `conversión` |
| 115 | `mas`, `mas` | `más`, `más` |
| 121 | `mas` | `más` |
| 127 | `linea`, `codigo` | `línea`, `código` |
| 133 | `grabacion`, `reproduccion` | `grabación`, `reproducción` |
| 145 | `Pagina`, `publica` | `Página`, `pública` |
| 157 | `unicos` | `únicos` |
| 162 | `Paginas` | `Páginas` |
| 163 | `Mas`, `paginas`, `paginas` | `Más`, `páginas`, `páginas` |
| 168 | `articulos` | `artículos` |
| 169 | `mas`, `articulos`, `espanol`, `ingles`, `conversion` | `más`, `artículos`, `español`, `inglés`, `conversión` |
| 181 | `espanol`, `ingles`, `documentacion` | `español`, `inglés`, `documentación` |
| 187 | `dinamica`, `numero` | `dinámica`, `número` |

## src/app/(marketing)/plantillas-minisitio/[id]/page.tsx

| Line | Wrong | Correct |
|------|-------|---------|
| 22 | `pagina` | `página` |
| 25 | `pagina` | `página` |
| 26 | `pagina` | `página` |
| 28 | `pagina`, `publica` | `página`, `pública` |
| 53 | `Linea` | `Línea` |
| 273 | `Configuracion`, `Diseno` | `Configuración`, `Diseño` |
| 301 | `Tipografia` | `Tipografía` |
| 323 | `estadisticas` | `estadísticas` |

## src/app/(marketing)/descargas/page.tsx

| Line | Wrong | Correct |
|------|-------|---------|
| 164 | `Tambien` | `También` |
| 197 | `automaticamente`, `paginas` | `automáticamente`, `páginas` |
| 225 | `Instalacion` | `Instalación` |
| 232 | `Anadir` | `Añadir` |
| 235 | `automaticamente`, `paginas` | `automáticamente`, `páginas` |
| 461 | `automaticamente` | `automáticamente` |
| 488 | `Instalacion` | `Instalación` |
| 521 | `codigo` | `código` |
| 522 | `codigo`, `pagina` | `código`, `página` |
| 527 | `Instalacion`, `rapida` | `Instalación`, `rápida` |
| 534 | `codigo` | `código` |
| 537 | `posicion` | `posición` |
| 553 | `guia` | `guía` |
| 555 | `mas` | `más` |
| 595 | `Instalacion`, `rapida` | `Instalación`, `rápida` |
| 601 | `codigo` | `código` |
| 602 | `paginas`, `especificas` | `páginas`, `específicas` |
| 613 | `guia` | `guía` |
| 615 | `mas` | `más` |

## src/app/(marketing)/plantillas/page.tsx

| Line | Wrong | Correct |
|------|-------|---------|
| 14 | `disenos` | `diseños` |
| 16 | `diseno` | `diseño` |
| 17 | `resenas` | `reseñas` |
| 21 | `diseno` | `diseño` |
| 61 | `mas` | `más` |
| 101 | `categorias`, `diseno` | `categorías`, `diseño` |
| 179 | `pagina` | `página` |
| 182 | `pagina` | `página` |
| 184 | `profesion` | `profesión` |
| 227 | `Registrate` | `Regístrate` |
| 228 | `credito` | `crédito` |

## src/app/(marketing)/plantillas/[id]/demo/page.tsx

| Line | Wrong | Correct |
|------|-------|---------|
| 74 | `Asi`, `veria` | `Así`, `vería` |
| 96 | `Registrate` | `Regístrate` |

## src/app/(marketing)/blog/[slug]/page.tsx

| Line | Wrong | Correct |
|------|-------|---------|
| 23 | `Articulo` | `Artículo` |
| 187 | `credito` | `crédito` |
| 199 | `Articulos` | `Artículos` |

## src/app/(marketing)/informe-prueba-social-2026/page.tsx

| Line | Wrong | Correct |
|------|-------|---------|
| 8 | `Estadisticas` | `Estadísticas` |
| 10 | `estadisticas`, `resenas`, `mas`, `como` | `estadísticas`, `reseñas`, `más`, `cómo` |
| 12 | `estadisticas` | `estadísticas` |
| 15 | `estadisticas`, `resenas` | `estadísticas`, `reseñas` |
| 16 | `conversion` | `conversión` |
| 18 | `estadisticas` | `estadísticas` |
| 20 | `resenas` | `reseñas` |
| 32 | `Estadisticas` | `Estadísticas` |
| 33 | `estadisticas`, `numeros` | `estadísticas`, `números` |
| 43 | `estadisticas` | `estadísticas` |
| 59 | `resenas`, `decision` | `reseñas`, `decisión` |
| 60 | `confian`, `mas` | `confían`, `más` |
| 61 | `Mas`, `resenas`, `resenas` | `Más`, `reseñas`, `reseñas` |
| 62 | `mas`, `resenas` | `más`, `reseñas` |
| 63 | `Mas`, `interactuan`, `resenas` | `Más`, `interactúan`, `reseñas` |
| 67 | `Mas` | `Más` |
| 71 | `decision`, `despues` | `decisión`, `después` |
| 75 | `mas` | `más` |
| 76 | `confian`, `resenas` | `confían`, `reseñas` |
| 78 | `intencion`, `resenas` | `intención`, `reseñas` |
| 83 | `resenas`, `movil`, `fisica` | `reseñas`, `móvil`, `física` |
| 84 | `resenas` | `reseñas` |
| 85 | `movil`, `resenas` | `móvil`, `reseñas` |
| 89 | `resena` | `reseña` |
| 90 | `mas`, `implantacion` | `más`, `implantación` |
| 92 | `mas`, `autentico` | `más`, `auténtico` |
| 113 | `estadisticas`, `resenas` | `estadísticas`, `reseñas` |
| 146 | `analisis`, `mas`, `estadisticas`, `como` | `análisis`, `más`, `estadísticas`, `cómo` |
| 147 | `resenas` | `reseñas` |
| 154 | `Estadisticas` | `Estadísticas` |
| 173 | `numero` | `número` |
| 179 | `mas` | `más` |
| 186 | `resenas` | `reseñas` |
| 188 | `Ademas` | `Además` |
| 195 | `conversion` | `conversión` |
| 220 | `conversion`, `pagina` | `conversión`, `página` |
| 225 | `Segun`, `resenas` | `Según`, `reseñas` |
| 226 | `mas`, `resenas` | `más`, `reseñas` |
| 227 | `mas` | `más` |
| 228 | `critico`, `decision` | `crítico`, `decisión` |
| 231 | `descubrio`, `interactuan`, `resenas` | `descubrió`, `interactúan`, `reseñas` |
| 232 | `mas`, `resenas` | `más`, `reseñas` |
| 233 | `conversion`, `tambien` | `conversión`, `también` |
| 248 | `Segun`, `excepcion` | `Según`, `excepción` |
| 249 | `mas` | `más` |
| 256 | `dificil` | `difícil` |
| 261 | `paginas` | `páginas` |
| 262 | `paginas` | `páginas` |
| 277 | `varia`, `segun` | `varía`, `según` |
| 280 | `mas` | `más` |
| 284 | `mas` | `más` |
| 287 | `descubrio` | `descubrió` |
| 288 | `mas`, `anonimos` | `más`, `anónimos` |
| 293 | `mas` | `más` |
| 295 | `resenas` | `reseñas` |
| 308 | `Mas`, `moviles` | `Más`, `móviles` |
| 309 | `interactuan` | `interactúan` |
| 310 | `Segun`, `resenas` | `Según`, `reseñas` |
| 311 | `movil`, `fisica` | `móvil`, `física` |
| 312 | `critico`, `fisico` | `crítico`, `físico` |
| 316 | `terminos`, `resenas`, `intencion` | `términos`, `reseñas`, `intención` |
| 323 | `decision` | `decisión` |
| 324 | `rapido`, `movil` | `rápido`, `móvil` |
| 340 | `mas`, `escepticos`, `segun` | `más`, `escépticos`, `según` |
| 344 | `Esta` | `Esta` (OK - demonstrative) |
| 345 | `mas` | `más` |
| 346 | `implantacion` | `implantación` |
| 353 | `mas` | `más` |
| 362 | `mas` | `más` |
| 380 | `mas` | `más` |

## src/app/(marketing)/verificado-badge/page.tsx

| Line | Wrong | Correct |
|------|-------|---------|
| 47 | `confian`, `mas` | `confían`, `más` |
| 48 | `mas` | `más` |
| 54 | `Verificacion` | `Verificación` |
| 55 | `confirmacion` | `confirmación` |
| 73 | `automaticamente` | `automáticamente` |
| 115 | `Asi` | `Así` |
| 187 | `decision` | `decisión` |
| 216 | `Como` | `Cómo` |
| 236 | `automaticamente` | `automáticamente` |

## src/app/(marketing)/certificacion/page.tsx

| Line | Wrong | Correct |
|------|-------|---------|
| 9 | `segun`, `numero` | `según`, `número` |
| 78 | `lider`, `satisfaccion` | `líder`, `satisfacción` |
| 117 | `Como` | `Cómo` |

## src/app/(marketing)/prensa/page.tsx

| Line | Wrong | Correct |
|------|-------|---------|
| 40 | `metricas` | `métricas` |
| 44 | `personalizacion`, `mas` | `personalización`, `más` |
| 109 | `mas` | `más` |
| 119 | `mas` | `más` |
| 121 | `espanol`, `ademas`, `ingles`, `mas` | `español`, `además`, `inglés`, `más` |
| 175 | `resolucion` | `resolución` |
| 186 | `resolucion` | `resolución` |
| 225 | `Espana`, `Creo` (should be `Creó`), `existia` | `España`, `Creó`, `existía` |
| 226 | `espanol` | `español` |
| 228 | `mas` | `más` |

## src/app/(marketing)/calculadora-roi/calculadora-roi-client.tsx

| Line | Wrong | Correct |
|------|-------|---------|
| 127 | `conversion` | `conversión` |
| 201 | `ano` | `año` |
| 229 | `mas` | `más` |
| 230 | `confian`, `mas` | `confían`, `más` |

## src/app/(marketing)/sobre/page.tsx

(No significant issues found beyond `como` which may be non-interrogative.)

## src/app/(marketing)/precios/page.tsx

(No significant accent issues found -- this file already uses correct accents.)

## src/app/(marketing)/agencias/page.tsx

| Line | Wrong | Correct |
|------|-------|---------|
| 10 | `mas` | `más` |
| 77 | `metricas` | `métricas` |
| 104 | `publico` | `público` |
| 143 | `mas` | `más` |
| 242 | `publico` | `público` |
| 301 | `Unete` | `Únete` |

## src/app/(marketing)/casos-de-exito/page.tsx

| Line | Wrong | Correct |
|------|-------|---------|
| 111 | `verificacion` | `verificación` |
| 119 | `mas` | `más` |
| 140 | `credito` | `crédito` |

## src/app/(marketing)/health-score/page.tsx

| Line | Wrong | Correct |
|------|-------|---------|
| 7 | `mas`, `puntuacion` | `más`, `puntuación` |
| 28 | `como`, `Puntuacion` | `cómo`, `Puntuación` |

## src/app/(marketing)/health-score/health-score-client.tsx

| Line | Wrong | Correct |
|------|-------|---------|
| 49 | `conexion` | `conexión` |

## src/app/(marketing)/integraciones/zapier/page.tsx

| Line | Wrong | Correct |
|------|-------|---------|
| 9 | `mas` | `más` |
| 58 | `Notificacion` | `Notificación` |
| 66 | `automaticamente` | `automáticamente` |
| 96 | `mas` | `más` |
| 97 | `automaticamente` | `automáticamente` |
| 209 | `seccion` | `sección` |

## src/app/(marketing)/comparar/page.tsx

| Line | Wrong | Correct |
|------|-------|---------|
| 121 | `Como` | `Cómo` |
| 126 | `personalizacion` | `personalización` |
| 127 | `facilidad` (OK) |
| 129 | `relacion`, `gratuito` (OK) |
| 130 | `espanol`, `documentacion`, `atencion` | `español`, `documentación`, `atención` |
| 136 | `periodicamente` | `periódicamente` |
| 137 | `decision` | `decisión` |
| 215 | `credito` | `crédito` |

## src/app/(marketing)/comparar/mejores-herramientas-testimonios/page.tsx

| Line | Wrong | Correct |
|------|-------|---------|
| 35 | `administracion`, `esta` | `administración`, `está` |
| 40 | `mas` | `más` |
| 47 | `mas` | `más` |
| 58 | `mas`, `multiples`, `opcion` | `más`, `múltiples`, `opción` |
| 70 | `comision` | `comisión` |
| 73 | `mas` | `más` |
| 94 | `mas` | `más` |
| 105 | `multiples` | `múltiples` |
| 107 | `basico` | `básico` |
| 112 | `basico` | `básico` |
| 128 | `mas`, `publico`, `publicas`, `busqueda`, `presentacion` | `más`, `público`, `públicas`, `búsqueda`, `presentación` |
| 129 | `basico` | `básico` |
| 130 | `reputacion`, `publica` | `reputación`, `pública` |
| 134 | `publicas` | `públicas` |
| 141 | `publicas`, `dificiles` | `públicas`, `difíciles` |
| 152 | `publicas`, `busqueda`, `presentacion` | `públicas`, `búsqueda`, `presentación` |
| 163 | `presentacion` | `presentación` |
| 165 | `publicas` | `públicas` |
| 189 | `presentacion`, `resenas` | `presentación`, `reseñas` |
| 202 | `Ingles`, `basico` | `Inglés`, `básico` |
| 203 | `Si`, `Reputacion` | `Sí`, `Reputación` |
| 211 | `opcion`, `unica`, `espanol`, `demas`, `estan`, `ingles` | `opción`, `única`, `español`, `demás`, `están`, `inglés` |
| 215 | `Si`, `reputacion`, `publica` | `Sí`, `reputación`, `pública` |
| 219 | `si`, `segun`, `rapido` | `sí`, `según`, `rápido` |
| 223 | `publicos`, `opinion` | `públicos`, `opinión` |
| 226 | `Cual`, `mas` -- missing `¿` |
| 227 | `Si`, `Segun`, `multiples`, `mas`, `expresion`, `conexion`, `mas` | `Sí`, `Según`, `múltiples`, `más`, `expresión`, `conexión`, `más` |
| 231 | `anade` | `añade` |
| 291 | `guia` | `guía` |
| 293 | `publicas` | `públicas` |
| 301 | `Aqui`, `rapido` | `Aquí`, `rápido` |
| 339 | `descripcion` | `descripción` |
| 425 | `eleccion`, `Aqui`, `guia` | `elección`, `Aquí`, `guía` |
| 426 | `rapida`, `decision` | `rápida`, `decisión` |
| 432 | `unica`, `espanol`, `recibiran` | `única`, `español`, `recibirán` |
| 434 | `opcion`, `mas`, `logica` | `opción`, `más`, `lógica` |
| 440 | `catalogo` | `catálogo` |
| 442 | `estan`, `ingles` | `están`, `inglés` |
| 448 | `publicas` | `públicas` |
| 457 | `Asi`, `captacion`, `conversion` | `Así`, `captación`, `conversión` |
| 467 | `ultimos` | `últimos` |
| 469 | `estan` | `están` |
| 475 | `Latinoamerica`, `opcion` | `Latinoamérica`, `opción` |
| 480 | `especificas`, `catalogo` | `específicas`, `catálogo` |
| 481 | `reputacion`, `publica` | `reputación`, `pública` |
| 482 | `mas` | `más` |
| 485 | `mas` | `más` |
| 486 | `decision`, `veras` | `decisión`, `verás` |
| 524 | `credito` | `crédito` |

## src/app/(marketing)/comparar/opinafy-vs-testimonial-to/page.tsx

| Line | Wrong | Correct |
|------|-------|---------|
| 53 | `espanol` | `español` |
| 54 | `espanol` | `español` |
| 56 | `Verificacion` | `Verificación` |
| 57 | `Verificacion` | `Verificación` |
| 66 | `Integracion` | `Integración` |
| 67 | `publica` | `pública` |
| 70 | `Pagina`, `publica` | `Página`, `pública` |
| 85 | `espanol` | `español` |
| 86 | `esta`, `administracion`, `ingles` | `está`, `administración`, `inglés` |
| 89 | `Cual`, `mas` -- missing `¿` |
| 90 | `mas`, `basico`, `Ademas` | `más`, `básico`, `Además` |
| 98 | `mas`, `esta`, `publica` | `más`, `está`, `pública` |
| 102 | `esta`, `espanol` | `está`, `español` |
| 161 | `mas` | `más` |
| 162 | `opcion`, `espanol` | `opción`, `español` |
| 163 | `decision` | `decisión` |
| 173 | `esta`, `ingles`, `estan`, `dolares` | `está`, `inglés`, `están`, `dólares` |
| 174 | `espanol` | `español` |
| 178 | `espanol` | `español` |
| 179 | `autonomos`, `Espana` | `autónomos`, `España` |
| 186 | `espanol` | `español` |
| 187 | `comisiones` | OK |
| 190 | `relacion` | `relación` |
| 199 | `mas` | `más` |
| 209 | `continuacion`, `mas` | `continuación`, `más` |
| 249 | `mas`, `Aqui` | `más`, `Aquí` |
| 286 | `Como`, `mas`, `economica` | `Cómo`, `más`, `económica` |
| 287 | `mas` | `más` |
| 288 | `ademas`, `tendras`, `Espana` | `además`, `tendrás`, `España` |
| 300 | `esta` | `está` |
| 301 | `notificacion` | `notificación` |
| 302 | `tecnico`, `estan`, `espanol` | `técnico`, `están`, `español` |
| 317 | `mas` | `más` |
| 318 | `conversion` | `conversión` |
| 326 | `comunicacion`, `resolucion` | `comunicación`, `resolución` |
| 333 | `automaticamente` | `automáticamente` |
| 335 | `paginas`, `mas` | `páginas`, `más` |
| 352 | `mas`, `esta`, `rapidamente` | `más`, `está`, `rápidamente` |
| 353 | `mas` | `más` |
| 362 | `esta`, `catalogo` | `está`, `catálogo` |
| 369 | `ingles`, `mas` | `inglés`, `más` |
| 370 | `mas` | `más` |
| 385 | `Espana`, `Latinoamerica` | `España`, `Latinoamérica` |
| 386 | `opcion`, `espanol` | `opción`, `español` |
| 388 | `mas` | `más` |
| 396 | `mas` | `más` |
| 435 | `credito` | `crédito` |

## src/app/(marketing)/comparar/opinafy-vs-senja/page.tsx

| Line | Wrong | Correct |
|------|-------|---------|
| 53 | `espanol` | `español` |
| 54 | `espanol` | `español` |
| 56 | `Verificacion` | `Verificación` |
| 57 | `Verificacion` | `Verificación` |
| 67 | `publica` | `pública` |
| 70 | `Pagina`, `publica` | `Página`, `pública` |
| 82 | `migracion`, `mas` | `migración`, `más` |
| 85 | `espanol` | `español` |
| 89 | `Cual`, `mas` -- missing `¿` |
| 90 | `mas`, `economicos`, `Ademas` | `más`, `económicos`, `Además` |
| 94 | `Si`, `mas`, `tambien`, `mas`, `autentico` | `Sí`, `más`, `también`, `más`, `auténtico` |
| 98 | `tambien`, `diseno` | `también`, `diseño` |
| 102 | `esta`, `Ademas` | `está`, `Además` |
| 162 | `como` | `cómo` |
| 163 | `decision` | `decisión` |
| 173 | `esta`, `ingles`, `estan`, `dolares` | `está`, `inglés`, `están`, `dólares` |
| 249 | `como` | `cómo` |
| 287 | `mas`, `Ademas` | `más`, `Además` |
| 288 | `comisiones` | OK |
| 300 | `esta` | `está` |
| 301 | `documentacion`, `estan`, `espanol` | `documentación`, `están`, `español` |
| 311 | `esta` | `esta` (demonstrative — context-dependent) |
| 319 | `mas` | `más` |
| 321 | `comisiones`, `conversion` | OK / `conversión` |
| 328 | `mas`, `segun` | `más`, `según` |
| 336 | `tecnico`, `mas`, `rapido` | `técnico`, `más`, `rápido` |
| 337 | `idiomatica`, `resolucion` | `idiomática`, `resolución` |
| 355 | `catalogo`, `mas` | `catálogo`, `más` |
| 358 | `esta`, `dia` | `está`, `día` |
| 365 | `tambien` | `también` |
| 373 | `automaticamente`, `Esta` | `automáticamente`, `Esta` |
| 374 | `util` | `útil` |
| 387 | `esta`, `publico` | `está`, `público` |
| 390 | `opcion`, `mas`, `logica` | `opción`, `más`, `lógica` |
| 393 | `mas` | `más` |
| 396 | `catalogo`, `diseno` | `catálogo`, `diseño` |
| 398 | `mas` | `más` |
| 402 | `relacion` | `relación` |
| 441 | `credito` | `crédito` |

## src/app/(marketing)/layout.tsx

| Line | Wrong | Correct |
|------|-------|---------|
| 28 | `mas` | `más` |

## src/app/(dashboard)/proyectos/[slug]/plantillas-email/page.tsx

| Line | Wrong | Correct |
|------|-------|---------|
| 24 | `opinion` | `opinión` |
| 30 | `encantaria`, `opinion`, `decision` | `encantaría`, `opinión`, `decisión` |
| 58 | `opinion` | `opinión` |
| 62 | `dias`, `opinion`, `esta`, `asi` | `días`, `opinión`, `está`, `así` |
| 85 | `Despues` | `Después` |
| 88 | `exito` | `éxito` |
| 92 | `encantaria`, `exito`, `exito` | `encantaría`, `éxito`, `éxito` |
| 94 | `encantaria`, `como`, `seria` | `encantaría`, `cómo`, `sería` |
| 115 | `ano` | `año` |
| 118 | `ano` | `año` |
| 122 | `ano` | `año` |
| 124 | `reflexion`, `ano`, `encantaria`, `como`, `opinion`, `como` | `reflexión`, `año`, `encantaría`, `cómo`, `opinión`, `cómo` |
| 127 | `proximo`, `ano` | `próximo`, `año` |
| 145 | `Despues` | `Después` |
| 154 | `preguntabamos`, `estarias`, `publica`, `facil`, `rapido` | `preguntábamos`, `estarías`, `pública`, `fácil`, `rápido` |
| 157 | `estan` | `están` |
| 182 | `increiblemente`, `mas`, `encantaria` | `increíblemente`, `más`, `encantaría` |
| 192 | `opcion` | `opción` |
| 328 | `recopilacion`, `automaticamente` | `recopilación`, `automáticamente` |
| 379 | `edicion` | `edición` |

## src/app/(dashboard)/proyectos/[slug]/automatizacion/page.tsx

| Line | Wrong | Correct |
|------|-------|---------|
| 45 | `encantaria`, `opinion` | `encantaría`, `opinión` |
| 47 | `encantaria` | `encantaría` |
| 266 | `Automatizacion` | `Automatización` |
| 305 | `envio`, `automatico` | `envío`, `automático` |
| 314 | `esta`, `recibiran`, `automaticamente` | `está`, `recibirán`, `automáticamente` |
| 334 | `Dias`, `envio` | `Días`, `envío` |
| 344 | `dia`, `dias` | `día`, `días` |
| 349 | `enviara`, `dia`, `dias`, `despues` | `enviará`, `día`, `días`, `después` |
| 380 | `recopilacion`, `incluira`, `automaticamente` | `recopilación`, `incluirá`, `automáticamente` |
| 506 | `Tambien` | `También` |
| 589 | `envio`, `envios` | `envío`, `envíos` |

## src/app/(dashboard)/proyectos/[slug]/page.tsx

| Line | Wrong | Correct |
|------|-------|---------|
| 266 | `Automatizacion` | `Automatización` |
| 383 | `Certificacion` | `Certificación` |
| 443 | `verificacion` | `verificación` |
| 453 | `verificacion` | `verificación` |
| 458 | `estan` | `están` |

## src/app/(dashboard)/proyectos/[slug]/importar/page.tsx

| Line | Wrong | Correct |
|------|-------|---------|
| 185 | `conexion` | `conexión` |
| 314 | `Anadir` | `Añadir` |
| 347 | `Puntuacion` | `Puntuación` |
| 460 | `Anadir` | `Añadir` |
| 510 | `Puntuacion` | `Puntuación` |
| 682 | `mas` | `más` |

## src/app/(dashboard)/proyectos/[slug]/integraciones/page.tsx

| Line | Wrong | Correct |
|------|-------|---------|
| 74 | `Configuracion` | `Configuración` |
| 80 | `conexion` | `conexión` |

## src/app/(dashboard)/facturacion/page.tsx

(No visible accent issues found in Spanish text -- uses i18n keys.)

## src/app/(admin)/admin/tickets/[id]/page.tsx

| Line | Wrong | Correct |
|------|-------|---------|
| 35 | `Facturacion` | `Facturación` |

## src/app/(admin)/admin/tickets/page.tsx

| Line | Wrong | Correct |
|------|-------|---------|
| 146 | `Facturacion` | `Facturación` |

## src/app/(admin)/admin/testimonios/page.tsx

| Line | Wrong | Correct |
|------|-------|---------|
| 65 | `Verificacion` | `Verificación` |

## src/app/(admin)/admin/proyectos/page.tsx

| Line | Wrong | Correct |
|------|-------|---------|
| 53 | `Esta`, `accion` | `Esta` (OK demonstrative), `acción` |

## src/app/(admin)/admin/blog/page.tsx

| Line | Wrong | Correct |
|------|-------|---------|
| 11 | `estan` | `están` |
| 12 | `anadir`, `articulos`, `codigo` | `añadir`, `artículos`, `código` |

## src/app/(admin)/admin/usuarios/page.tsx

| Line | Wrong | Correct |
|------|-------|---------|
| 80 | `Esta`, `accion` | `Esta` (OK), `acción` |
| 302 | `dias` | `días` |
| 313 | `dias` | `días` |
| 319 | `activara`, `dias` | `activará`, `días` |

## src/app/(admin)/admin/configuracion/page.tsx

(Route path in filename -- no visible text issues found.)

## src/components/admin/admin-sidebar.tsx

| Line | Wrong | Correct |
|------|-------|---------|
| 87 | `Configuracion` | `Configuración` |

## src/app/p/[username]/[slug]/collection-page-client.tsx

| Line | Wrong | Correct |
|------|-------|---------|
| 33 | `verificacion` | `verificación` |

## src/app/p/[username]/[slug]/gracias/page.tsx

| Line | Wrong | Correct |
|------|-------|---------|
| 11 | `verificacion` | `verificación` (in type/param -- SKIP) |
| 57 | `verificacion` | `verificación` (param reference -- SKIP) |

## src/app/compartir/[testimonialId]/page.tsx

(No significant issues found.)

## src/app/(marketing)/plantillas/gallery.tsx

(No significant accent issues found.)

## src/app/(marketing)/plantillas-minisitio/gallery.tsx

| Line | Wrong | Correct |
|------|-------|---------|
| 146 | `mas` | `más` |
| 153 | `categoria` | `categoría` |

## src/components/landing/minisite-showcase.tsx

| Line | Wrong | Correct |
|------|-------|---------|
| 86 | `profesion` | `profesión` |
| 90 | `Verificacion`, `automatica` | `Verificación`, `automática` |
| 154 | `credito`, `pagina` | `crédito`, `página` |

## src/components/landing/pricing.tsx

(No significant issues -- uses correct accents.)

## src/components/landing/template-preview.tsx

(No accent issues in Spanish text.)

## src/components/dashboard/widget-configurator.tsx

| Line | Wrong | Correct |
|------|-------|---------|
| 90 | `personalizacion` | `personalización` (in element ID -- SKIP) |

## src/app/api/health-score/route.ts

| Line | Wrong | Correct |
|------|-------|---------|
| 87 | `Seccion` | `Sección` |
| 91 | `Anade`, `seccion` | `Añade`, `sección` |
| 97 | `valoracion` | `valoración` |
| 117 | `Anade` | `Añade` |
| 145 | `Anade` | `Añade` |
| 154 | `Conexion` | `Conexión` |
| 165 | `opinion`, `valoracion` | `opinión`, `valoración` |
| 169 | `descripcion` | `descripción` |
| 173 | `descripcion` | `descripción` |

## src/app/api/automation/route.ts

| Line | Wrong | Correct |
|------|-------|---------|
| 151 | `encantaria`, `opinion` | `encantaría`, `opinión` |
| 154 | `encantaria` | `encantaría` |

## src/app/api/testimonials/import/route.ts

| Line | Wrong | Correct |
|------|-------|---------|
| 77 | `mas` | `más` |

## src/lib/demo-testimonials.ts

| Line | Wrong | Correct |
|------|-------|---------|
| 28 | `increibles`, `confian`, `mas` | `increíbles`, `confían`, `más` |
| 48 | `resenas`, `recepcion`, `numero`, `verificacion`, `automatica` | `reseñas`, `recepción`, `número`, `verificación`, `automática` |
| 67 | `Fotografo` | `Fotógrafo` |
| 68 | `fotografo`, `pagina`, `mas` | `fotógrafo`, `página`, `más` |
| 78 | `Facil`, `dia` | `Fácil`, `día` |
| 88 | `tenia`, `movil`, `despues` | `tenía`, `móvil`, `después` |
| 108 | `verificacion` | `verificación` |
| 148 | `tenia`, `pagina` | `tenía`, `página` |
| 178 | `mas`, `facil`, `opinion`, `leido`, `rapido` | `más`, `fácil`, `opinión`, `leído`, `rápido` |
| 188 | `verificacion` | `verificación` |
| 208 | `conversion`, `movil` | `conversión`, `móvil` |
| 218 | `automaticamente` | `automáticamente` |
| 246 | `Fontaneria`, `Rapida` | `Fontanería`, `Rápida` |
| 248 | `resena`, `Rapido`, `facil` | `reseña`, `Rápido`, `fácil` |
| 258 | `verificacion`, `pagina`, `confian`, `mas` | `verificación`, `página`, `confían`, `más` |
| 277 | `Contadora` | OK (no accent needed) |
| 278 | `autonoma`, `opinion` | `autónoma`, `opinión` |
| 308 | `rapido`, `codigo`, `Ademas`, `unico` | `rápido`, `código`, `Además`, `único` |

## src/lib/social-post-templates.ts

| Line | Wrong | Correct |
|------|-------|---------|
| 33 | `opinion`, `mas`, `dia` | `opinión`, `más`, `día` |

## src/lib/help-data.ts

| Line | Wrong | Correct |
|------|-------|---------|
| 30 | `rapido`, `credito` | `rápido`, `crédito` |
| 38 | `Tambien`, `mas`, `rapido` | `También`, `más`, `rápido` |
| 59 | `anade`, `descripcion` | `añade`, `descripción` |
| 81 | `Anade`, `especificas`, `Que` (missing `¿`) | `Añade`, `específicas`, `¿Qué` |
| 83 | `automaticamente` | `automáticamente` |
| 93 | `automaticamente`, `Codigo`, `fisicos` | `automáticamente`, `Código`, `físicos` |
| 115 | `mas` | `más` |
| 116 | `guia`, `mas`, `utiles` | `guía`, `más`, `útiles` |
| 117 | `opinion` | `opinión` |
| 137 | `mas`, `Valoracion`, `rapida` | `más`, `Valoración`, `rápida` |
| 151 | `automaticamente`, `codigo`, `fisicos` | `automáticamente`, `código`, `físicos` |
| 171 | `boton` | `botón` |
| 174 | `pequeno` | `pequeño` |
| 186 | `mas`, `automaticamente` | `más`, `automáticamente` |
| 194 | `mas`, `envia`, `automaticamente` | `más`, `envía`, `automáticamente` |
| 198 | `Tambien` | `También` |
| 205 | `anade`, `resenas` | `añade`, `reseñas` |
| 208 | `Anade`, `util` | `Añade`, `útil` |
| 212 | `Anadir` | `Añadir` |
| 213 | `Se`, `especifico`, `guia`, `mas`, `utiles` | `Sé`, `específico`, `guía`, `más`, `útiles` |
| 214 | `facil`, `mas`, `recibiras` | `fácil`, `más`, `recibirás` |
| 215 | `mas`, `mas`, `recibiras` | `más`, `más`, `recibirás` |
| 246 | `mas` | `más` |
| 248 | `atencion` | `atención` |
| 250 | `Tambien` | `También` |
| 266 | `opinion` | `opinión` |
| 268 | `anadir` | `añadir` |
| 290 | `automaticamente` | `automáticamente` |
| 294 | `automaticamente` | `automáticamente` |
| 298 | `mas`, `aprobacion` | `más`, `aprobación` |
| 318 | `automaticamente`, `codigo` | `automáticamente`, `código` |
| 330 | `mas` | `más` |
| 353 | `tipografia` | `tipografía` |
| 362 | `Tipografia`, `automaticamente` | `Tipografía`, `automáticamente` |
| 374 | `navegacion`, `paginas` | `navegación`, `páginas` |
| 376 | `automaticamente`, `paginas` | `automáticamente`, `páginas` |
| 384 | `periodicamente`, `conversion` | `periódicamente`, `conversión` |
| 392 | `automaticamente` | `automáticamente` |
| 415 | `como`, `mas` | `cómo`, `más` |
| 418 | `mas` | `más` |
| 419 | `paginas`, `mas` | `páginas`, `más` |
| 423 | `especifico`, `mas`, `generico` | `específico`, `más`, `genérico` |
| 438 | `interactua`, `mas` | `interactúa`, `más` |
| 440 | `mas` | `más` |
| 445 | `automaticamente`, `metricas` | `automáticamente`, `métricas` |
| 455 | `automaticamente` | `automáticamente` |
| 462 | `metrica`, `asi` | `métrica`, `así` |
| 482 | `mas` | `más` |
| 483 | `guia`, `basandote`, `mas` | `guía`, `basándote`, `más` |
| 490 | `Anade`, `periodicamente` | `Añade`, `periódicamente` |
| 492 | `mas` | `más` |
| 499 | `guia`, `basandote`, `mas` | `guía`, `basándote`, `más` |
| 547 | `Paginas`, `pagina` | `Páginas`, `página` |
| 550 | `mas` | `más` |
| 551 | `pagina` | `página` |
| 575 | `boton`, `mas`, `boton`, `mas`, `pagina` | `botón`, `más`, `botón`, `más`, `página` |
| 582 | `mas`, `mas` | `más`, `más` |
| 584 | `Anade` | `Añade` |
| 607 | `mas`, `camara` | `más`, `cámara` |
| 615 | `boton` | `botón` |
| 622 | `automaticamente` | `automáticamente` |
| 631 | `anadidas` | `añadidas` |
| 640 | `boton` | `botón` |
| 647 | `automaticamente` | `automáticamente` |
| 661 | `mas` | `más` |
| 672 | `Resolucion`, `automaticamente`, `maximo` | `Resolución`, `automáticamente`, `máximo` |
| 673 | `mas` | `más` |
| 674 | `automaticamente`, `rapidos` | `automáticamente`, `rápidos` |
| 677 | `automaticamente` | `automáticamente` |
| 685 | `Opcion` | `Opción` |
| 692 | `Opcion` | `Opción` |
| 699 | `Opcion` | `Opción` |
| 700 | `rapido`, `facil` | `rápido`, `fácil` |
| 709 | `Anade` | `Añade` |
| 715 | `asi` | `así` |
| 718 | `pagina`, `anade` | `página`, `añade` |
| 728 | `Anade`, `seccion` | `Añade`, `sección` |
| 735 | `Paginas`, `boton`, `pestana` | `Páginas`, `botón`, `pestaña` |
| 737 | `Opcion`, `Codigo` | `Opción`, `Código` |
| 743 | `Opcion`, `pagina` | `Opción`, `página` |
| 762 | `pagina`, `anade` | `página`, `añade` |
| 774 | `Anade`, `pagina` | `Añade`, `página` |
| 780 | `Anade`, `Codigo`, `pagina` | `Añade`, `Código`, `página` |
| 805 | `automaticamente` | `automáticamente` |
| 818 | `Informacion`, `como`, `dias` | `Información`, `cómo`, `días` |
| 834 | `basico` | `básico` |
| 883 | `mas` | `más` |
| 886 | `credito`, `debito` | `crédito`, `débito` |
| 911 | `Certificacion`, `mas` | `Certificación`, `más` |

## src/lib/email-templates.ts

| Line | Wrong | Correct |
|------|-------|---------|
| 163 | `boton` | `botón` |

## src/lib/collection-translations.ts

| Line | Wrong | Correct |
|------|-------|---------|
| 32 | `anadir` | `añadir` |

## src/lib/i18n.ts

| Line | Wrong | Correct |
|------|-------|---------|
| 361 | `Configuracion` | `Configuración` |

## src/lib/certification.ts

| Line | Wrong | Correct |
|------|-------|---------|
| 43 | `certificacion` | `certificación` |

## src/lib/schema.ts

| Line | Wrong | Correct |
|------|-------|---------|
| 16 | `espanol` | `español` |

## src/lib/city-industry-content.ts

| Line | Wrong | Correct |
|------|-------|---------|
| 381 | `tecnica`, `fotografo`, `comunicacion` | `técnica`, `fotógrafo` (rest has accents) |
| 407 | `mayoria`, `resenas` | `mayoría`, `reseñas` |
| 420 | `envio` | `envío` |
| 426 | `envio` | `envío` |
| 427 | `dias`, `despues`, `opinion` | `días`, `después`, `opinión` |
| 438 | `opcion`, `anonimos` | `opción`, `anónimos` |
| 460 | `si` (reflexive, OK), `gratuito` (OK) |
| 548 | `Guia` | `Guía` |
| 563 | `conversion` | `conversión` |
| 573 | `Guia` (in slug -- SKIP) |
| 592 | `Guia` | `Guía` |
| 598 | `conversion` (in slug -- SKIP) |
| 602 | `conversion` (in slug -- SKIP) |
| 622 | `conversion` (in slug -- SKIP) |
| 743 | `dia` | `día` |
| 769 | `dia` | `día` |
| 804 | `opinion` | `opinión` |
| 856 | `gratuito` (OK) |
| 922 | `solida`, `dia` | `sólida`, `día` |

## src/lib/minisite-templates.ts

| Line | Wrong | Correct |
|------|-------|---------|
| 136 | `tipografia` | `tipografía` |

(Note: Other entries in this file with accent issues are in template descriptions -- check `gallery-en.tsx` entries mapped from this file.)

## src/app/(en)/en/minisite-templates/gallery-en.tsx

| Line | Wrong | Correct |
|------|-------|---------|
| 15 | `Educacion` (as key mapping) | `Educación` |
| 44 | `Codigo` (as key mapping) | `Código` |
| 67 | `tipografia` | `tipografía` |
| 68 | `tradicion` | `tradición` |
| 76 | `clasico`, `formacion` | `clásico`, `formación` |
| 89 | `tecnicos` | `técnicos` |

(These are translation mapping keys for Spanish strings used as lookup keys -- they should match the source strings. If the source has no accent, the key must match. Fixing the source in `minisite-templates.ts` would require updating these keys too.)

## src/app/(en)/en/press/page.tsx

| Line | Wrong | Correct |
|------|-------|---------|
| 78 | `Version`, `espanol` | `Versión`, `español` |

## src/app/(en)/en/case-studies/page.tsx

| Line | Wrong | Correct |
|------|-------|---------|
| 20 | `exito` (in URL -- SKIP) |
| 22 | `exito` (in URL -- SKIP) |

## src/app/(dashboard)/proyectos/[slug]/plantillas-email/page.tsx (already listed above)

## src/app/(dashboard)/proyectos/[slug]/exportar/export-client.tsx

(No significant accent issues.)

## src/app/(dashboard)/soporte/nuevo/page.tsx

(No significant accent issues found.)

## src/app/(auth)/forgot-password/page.tsx

(No significant accent issues.)

## src/app/verificado/page.tsx

(No significant accent issues.)

## src/lib/plan-enforcement.ts

(No visible text accent issues.)

---

## Summary of Most Common Issues

1. **`pagina/paginas`** → `página/páginas` -- ~80+ occurrences
2. **`codigo`** → `código` -- ~60+ occurrences
3. **`mas`** (meaning "more") → `más` -- ~80+ occurrences
4. **`automaticamente`** → `automáticamente` -- ~40+ occurrences
5. **`diseno`** → `diseño` -- ~15+ occurrences
6. **`opcion`** → `opción` -- ~25+ occurrences
7. **`espanol`** → `español` -- ~25+ occurrences
8. **`seccion`** → `sección` -- ~15+ occurrences
9. **`verificacion`** → `verificación` -- ~15+ occurrences
10. **`resenas`** → `reseñas` -- ~30+ occurrences
11. **`comision`** → `comisión` -- ~15+ occurrences
12. **`estadisticas`** → `estadísticas` -- ~10+ occurrences
13. **`conversion`** → `conversión` -- ~15+ occurrences
14. **`credito`** → `crédito` -- ~10+ occurrences
15. **`tipografia`** → `tipografía` -- ~10+ occurrences
16. **`decision`** → `decisión` -- ~10+ occurrences
17. **`opinion`** → `opinión` -- ~15+ occurrences
18. **`dias`** → `días` -- ~15+ occurrences
19. **`anade/anadir`** → `añade/añadir` -- ~30+ occurrences
20. **`Unete/Registrate`** → `Únete/Regístrate` -- ~5+ occurrences
21. **`encantaria`** → `encantaría` -- ~8+ occurrences
22. **`reputacion/publico/publica`** → `reputación/público/pública` -- ~20+ occurrences
23. **`Como` (interrogative)** → `Cómo` -- ~15+ occurrences
24. **`Si` (meaning "yes")** → `Sí` -- ~20+ occurrences
25. **`ano`** → `año` -- ~8 occurrences
26. **`pequeno`** → `pequeño` -- 1 occurrence
27. **Missing `¿`** in questions -- ~10+ occurrences
28. **`Espana`** → `España` -- ~5+ occurrences
29. **`boton`** → `botón` -- ~8+ occurrences
30. **`rapido/rapida`** → `rápido/rápida` -- ~10+ occurrences

---

## Files NOT affected (clean)

Most UI component files in `src/components/ui/` have no Spanish visible text issues.
Most API route files have minimal Spanish text.
English-language files (`*-en.ts`, `*-en.tsx`, pages under `(en)/`) were excluded from this audit.

---

## Estimated total fixes needed: ~600+
