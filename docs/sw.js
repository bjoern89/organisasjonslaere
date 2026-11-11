/* Organisasjonslære – service worker: appen virker uten nett etter første besøk */
const V = 'organisasjonslaere-9a0ac0d13c';
const FILES = ["./","index.html","manifest.webmanifest","fonts/schibsted-grotesk-latin-400-italic.woff2","fonts/schibsted-grotesk-latin-400-normal.woff2","fonts/schibsted-grotesk-latin-600-normal.woff2","fonts/schibsted-grotesk-latin-700-normal.woff2","fonts/sofia-sans-extra-condensed-latin-600-normal.woff2","fonts/sofia-sans-extra-condensed-latin-800-normal.woff2","icons/apple-touch-icon.png","icons/icon-192.png","icons/icon-512.png","icons/icon-maskable-512.png","icons/icon.svg"];
self.addEventListener('install', e => { e.waitUntil(caches.open(V).then(c => c.addAll(FILES)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith('organisasjonslaere-') && k !== V).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const r = e.request; if (r.method !== 'GET' || new URL(r.url).origin !== location.origin) return;
  if (r.mode === 'navigate') {
    // nyeste versjon når det er nett, lagret versjon ellers
    e.respondWith(fetch(r).then(res => { const c = res.clone(); caches.open(V).then(ca => ca.put('./', c)); return res; }).catch(() => caches.match('./').then(m => m || caches.match('index.html'))));
    return;
  }
  e.respondWith(caches.match(r).then(m => m || fetch(r).then(res => { if (res.ok) { const c = res.clone(); caches.open(V).then(ca => ca.put(r, c)); } return res; })));
});
