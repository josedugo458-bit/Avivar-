# Avivar-
avivar webpage

Sitio estático exportado de Claude Design (`Avivar - Sitio.html`), desempaquetado en archivos fuente.

- `index.html` — la página (plantilla + lógica del componente).
- `assets/js/` — runtime de la página (`dc-runtime.js`), sistema de diseño Vesta y `<image-slot>`.
- `assets/vendor/` — React 18.3.1 (servido localmente, sin CDN).
- `assets/fonts/`, `assets/img/`, `assets/icons/` — tipografías, logos e íconos.

Para ver el sitio, sírvelo por HTTP (p. ej. `python3 -m http.server`) y abre `index.html`.
El video del hero se carga desde `uploads/avivar.mp4`; mientras no exista, se muestran los marcadores de imagen.
