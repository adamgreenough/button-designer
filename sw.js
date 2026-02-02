// Minimal Service Worker for PWA installability
// No caching - allows frequent updates to CSS/JS

self.addEventListener('install', (event) => {
  // Skip waiting to activate immediately
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  // Claim all clients immediately
  event.waitUntil(clients.claim());
});

// Pass through all fetch requests to the network
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
