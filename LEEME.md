# Partida Doble · versión web (prueba de concepto)

Dirección pedagógica: Gustavo Duarte. Programación asistida por inteligencia artificial (Claude, Anthropic).
Software libre bajo licencia GNU GPL versión 3 o posterior (archivo LICENSE). Python en el navegador: Pyodide
(ver py/AVISO_LICENCIAS.txt).

Esta carpeta es un sitio web estático: no necesita servidor ni base de datos. El núcleo contable (carpeta `nucleo/`)
es el mismo de Partida Doble 7.6 de escritorio, sin cambios; se guarda con extensión `.txt` para que cualquier
alojamiento lo sirva. La base de la empresa se abre en la memoria del navegador y no se sube a ningún lado.

## Publicarla gratis en GitHub Pages

1. Crear una cuenta en https://github.com (gratuita) e iniciar sesión.
2. Botón **New repository**. Nombre: `partida-doble-web`. Marcar **Public**. Crear.
3. En el repositorio vacío, enlace **uploading an existing file**. Arrastrar **todo el contenido** de esta carpeta
   (no la carpeta misma): `index.html`, `archivos.txt`, `ejemplo.json`, `LICENSE`, `LEEME.md`, `.nojekyll` y las
   carpetas `nucleo` y `py`. Esperar a que terminen de subir y pulsar **Commit changes**.
   - Si Windows no muestra `.nojekyll` (archivo oculto): Explorador › Vista › Mostrar › Elementos ocultos.
4. **Settings › Pages**. En *Build and deployment*, *Source*: **Deploy from a branch**; *Branch*: **main** y
   carpeta **/ (root)**. Guardar.
5. A los uno o dos minutos la página queda en `https://SU-USUARIO.github.io/partida-doble-web/`.

Para actualizarla, se suben los archivos nuevos al mismo repositorio de la misma manera.
