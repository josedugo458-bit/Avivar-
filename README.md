# Avivar-
avivar webpage

Sitio estático exportado de Claude Design (`Avivar - Sitio.html`), desempaquetado en archivos fuente.

- `index.html` — la página (plantilla + lógica del componente).
- `assets/js/` — runtime de la página (`dc-runtime.js`), sistema de diseño Vesta y `<image-slot>`.
- `assets/vendor/` — React 18.3.1 (servido localmente, sin CDN).
- `assets/fonts/`, `assets/img/`, `assets/icons/` — tipografías, logos e íconos.
- `assets/video/avivar.mp4` — video del hero y de la franja de video (H.264, sin audio, optimizado para web).

Para ver el sitio, sírvelo por HTTP (p. ej. `python3 -m http.server`) y abre `index.html`.
Para cambiar el video, reemplaza `assets/video/avivar.mp4` por otro .mp4 (H.264) con el mismo nombre.
