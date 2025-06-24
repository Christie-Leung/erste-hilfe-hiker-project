const CACHE_NAME = 'MedPfad-cache-v1';
const urlsToCache = [
  '/',
  '/core-kit.html',
  '/kit-zugspitze.html',
  '/kit-saxon.html',
  '/kit-eibsee.html',
  '/style.css',
  '/manifest.json',
  '/assets/cpr-beat.mp3',
  '/assets/icon-192.png',
  '/assets/icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
