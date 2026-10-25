const CACHE_NAME = 'aigu-os-v5';
const CACHE_URLS = ['./', './index.html', './manifest.json', './AIGU.png', './icons/icon-192.png'];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(CACHE_URLS)).catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

function putInCache(request, response) {
  if (response && response.status === 200 && (response.type === 'basic' || response.type === 'cors')) {
    const clone = response.clone();
    caches.open(CACHE_NAME).then(cache => cache.put(request, clone));
  }
  return response;
}

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;

  // Pages: network first so timetable updates show up, cache when offline
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req).then(res => putInCache(req, res)).catch(() => caches.match(req).then(c => c || caches.match('./index.html')))
    );
    return;
  }

  // Everything else (fonts, icons): cache first
  event.respondWith(
    caches.match(req).then(cached => cached || fetch(req).then(res => putInCache(req, res)))
  );
});
