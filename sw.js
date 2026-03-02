const CACHE = "japansk-v4";
const ASSETS = [
  "/hiragana/",
  "/hiragana/index.html",
  "/hiragana/hiragana.html",
  "/hiragana/katakana.html",
  "/hiragana/ord.html",
  "/hiragana/tall.html",
  "/hiragana/howto.html",
  "/hiragana/progresjon.html",
  "/hiragana/daily.html",
  "/hiragana/styles.css",
  "/hiragana/lang.js",
  "/hiragana/streak.js",
  "/hiragana/trainer-core.js",
  "/hiragana/app.js",
  "/hiragana/katakana.js",
  "/hiragana/ord.js",
  "/hiragana/tall.js",
  "/hiragana/icons/icon-192.png",
  "/hiragana/icons/icon-512.png",
  "/hiragana/fonts/Oshidashi-M-Gothic.otf",
  "/hiragana/fonts/TrueType/Oshidashi-M-Gothic-TT.ttf",
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((cached) => cached || fetch(e.request))
  );
});
