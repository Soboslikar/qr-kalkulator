// service-worker.js

// Događaj 'install': Okida se kada se service worker instalira.
// self.skipWaiting() forsira novog service workera da postane aktivan odmah.
self.addEventListener('install', (event) => {
  self.skipWaiting();
  console.log('Service Worker: Instaliran.');
});

// Događaj 'activate': Okida se kada service worker postane aktivan.
// Ovdje osiguravamo da novi service worker preuzme kontrolu nad stranicom.
self.addEventListener('activate', (event) => {
  self.clients.claim();
  console.log('Service Worker: Aktivan.');
});

// Događaj 'fetch': Ostavljamo ga praznim.
// Time se service worker ne miješa u mrežne zahtjeve.
// Preglednik će se ponašati kao da service worker ne postoji (ići će direktno na mrežu).
self.addEventListener('fetch', (event) => {
  // Ne radimo ništa, puštamo zahtjev da prođe na mrežu.
});
