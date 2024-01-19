const staticCacheName = 'ip-staging';
const assets = [
  'index.html',
  'favicon.svg',
  'css/style.css',
  'js/scripts.js',
  'img/caret-left-fill.svg',
  'img/caret-right-fill.svg',
  'img/szi41_2.png',
  'szabadsag_41/after1.jpg',
  'szabadsag_41/after2.jpg',
  'szabadsag_41/before1.png',
  'szabadsag_41/before2.jpg',
  'szabadsag_41/index.html',
  ];

self.addEventListener('install', evt => {
  evt.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log('caching shell assets');
      cache.addAll(assets);
    })
  );
});

self.addEventListener('activate', evt => {
  evt.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(keys
        .filter(key => key !== staticCacheName)
        .map(key => caches.delete(key))
      );
    })
  );
});

self.addEventListener('fetch', evt => {
  evt.respondWith(
    caches.match(evt.request).then(cacheRes => {
      return cacheRes || fetch(evt.request);
    })
  );
});
