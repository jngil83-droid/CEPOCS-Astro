# Auditoría inicial de imágenes — CEPOCS

Fecha: 2026-07-07

Resumen: inventario preliminar de imágenes referenciadas en el proyecto, atributos encontrados y recomendaciones por prioridad (sin cambiar visualmente todavía).

## Prioridad alta (LCP / above-the-fold)

- Hero background (CSS): https://i.postimg.cc/xj6FHB6j/IMG-20230419-103850818.webp
  - Referencia: [public/style.css](public/style.css#L1)
  - Tipo: background-image en `.hero` / `.hero-historias`
  - Atributos: usado como CSS background; no `width`/`height`
  - Recomendación: mover a `src/assets/` y servir con `astro:assets` o convertir a `<Image>` para generar AVIF/WebP + srcset; si es LCP usar `fetchpriority="high"` y añadir placeholder/blur.

- Logo hero (página principal): https://i.postimg.cc/TYxJqDDj/Logo-favicon-CEPOCS.webp
  - Referencia: [src/pages/index.astro](src/pages/index.astro#L10)
  - Atributos: `width="160" loading="lazy"`
  - Recomendación: convertir a `astro:assets` `Image` con explicit `width`/`height`, generar srcset y usar `priority`/`fetchpriority` si se considera LCP.

## Prioridad media (imágenes repetidas/partners)

- ODS icons (varias URLs `postimg.cc`)
  - Referencia: [src/pages/index.astro](src/pages/index.astro#L56-L63)
  - Atributos: `width="60" loading="lazy"`
  - Recomendación: agrupar iconos locales en `src/assets/ods/` y servir como sprites o `Image` con versiones optimizadas (AVIF/WebP) para reducir latencia.

- Logos de aliados/partners (varias, width=80-100)
  - Referencia: [src/pages/aliados.astro](src/pages/aliados.astro#L23-L41) y en `public/main.js` como entidades
  - Recomendación: descargar los logos principales (AECID, BID, USAID, etc.) a `src/assets/partners/`, usar `Image` con `decoding="async"` y `loading="lazy"`, añadir `width`/`height` reales cuando se pueda.

## Prioridad baja (galería y proyectos)

- Multimedia gallery images (lista larga en [src/pages/multimedia.astro](src/pages/multimedia.astro#L1))
  - Atributos: `loading="lazy" decoding="async"` en `img` ya presentes
  - Recomendación: para imágenes de galería seguir usando `loading="lazy"`, pero procesar los 3-5 primeras (por orden) con `astro:assets` y generar tamaños responsivos; evitar `object-fit` que rompa placeholders.

- Entidades en proyectos (HTML embebido en `public/main.js`)
  - Referencia: [public/main.js](public/main.js#L1)
  - Recomendación: refactorizar a datos JSON sin HTML, y renderizar logos con `Image` o `<img>` con `width`/`height` y `loading="lazy"`.

## Reglas para evitar CLS (recomendadas)

- Añadir `width` y `height` a imágenes donde sea posible (o usar `aspect-ratio` CSS).  
- Reservar espacio para imágenes de fondo con un `aspect-ratio` contenedor o usar `<img>` en lugar de background para LCP.  
- Para imágenes LCP: `fetchpriority="high"`, no `loading="lazy"`.  

## Próximos pasos sugeridos

1. Identificar los 5 activos más pesados (hero background, hero logo, 3 primeras fotos de galería).  
2. Descargar esos archivos a `src/assets/` y convertirlos a AVIF/WEBP + generar `srcset` con `astro:assets`.  
3. Reemplazar referencias en `style.css` (hero background) y en `index.astro` por `Image` o import local y actualizar markup.  
4. Refactorizar `public/main.js` para eliminar HTML embebido en `entidades` y usar datos puros + render que incluya `width`/`height`.

¿Procedo a descargar y migrar los 3 activos prioritarios (hero background + hero logo + primera foto de la galería) a `src/assets/` y reemplazar por `astro:assets` `Image` components en las páginas correspondientes?