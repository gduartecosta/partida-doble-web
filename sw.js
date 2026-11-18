// Partida Doble web — permite abrir la aplicación sin conexión.
// Los archivos de Python (Pyodide 0.27.8) no cambian: se sirven desde la copia guardada.
// Todo lo demás se pide primero a internet, para tomar siempre la última versión, y se usa la copia guardada
// solo si no hay conexión.
const CACHE = "partida-doble-web-1";
const FIJOS = ["pyodide.mjs", "pyodide.asm.js", "pyodide.asm.wasm", "python_stdlib.zip.wasm", "sqlite3.whl.wasm",
               "pyodide-lock.json"];

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));

self.addEventListener("fetch", (e) => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET" || url.origin !== location.origin) return;
  const fijo = FIJOS.includes(url.pathname.split("/").pop());
  e.respondWith((async () => {
    const cache = await caches.open(CACHE);
    if (fijo) {
      const guardado = await cache.match(e.request, { ignoreSearch: true });
      if (guardado) return guardado;
    }
    try {
      const resp = await fetch(e.request);
      if (resp.ok) cache.put(e.request, resp.clone());
      return resp;
    } catch (err) {
      const guardado = await cache.match(e.request, { ignoreSearch: true });
      if (guardado) return guardado;
      throw err;
    }
  })());
});
