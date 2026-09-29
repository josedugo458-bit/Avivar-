# Avivar-
avivar webpage

Sitio estático de Avivar (avivar.com.co): una sola página en HTML, CSS y un poco de JavaScript, sin dependencias.

- `index.html`: toda la página. Los textos, precios, ingredientes, testimonios y preguntas frecuentes están escritos directamente en el HTML, así que se editan buscando el texto y cambiándolo.
- `assets/img/`: logos, foto de la sección de ciencia, portada del video y cuadros del video.
- `assets/video/avivar.mp4`: video de la portada y de la franja de video (H.264, sin audio, optimizado para web). Para cambiarlo, reemplázalo por otro .mp4 con el mismo nombre.
- `assets/fonts/`: tipografías Newsreader e Instrument Sans.

Pendientes marcados en `index.html` con comentarios:
- **Fotos de producto**: cada fórmula tiene un espacio "Foto del producto". Sube la foto a `assets/img/` y reemplaza el bloque `<div class="slot">…</div>` por `<img src="assets/img/TU-FOTO.jpg" alt="…">`.
- **TikTok**: el ícono está en gris con "@ próximamente" hasta tener la cuenta.

Para ver el sitio en tu computador, sírvelo por HTTP (p. ej. `python3 -m http.server`) y abre `index.html`.
