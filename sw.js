/* prettier-ignore */
/*
 *    _____ _     _____ _   _ _   _
 *   / ____| |   |  ___| \ | | \ | |
 *  | |  __| |   | |__ |  \| |  \| |
 *  | | |_ | |   |  __|| . ` | . ` |
 *  | |__| | |___| |___| |\  | |\  |
 *   \_____|_____|_____|_| \_|_| \_|
 *
 *  sw.js — Service worker (offline cache)
 *  Glenn's Japanese Trainer
 */

const CACHE = "japansk-v36";
const ASSETS = [
  "/hiragana/",
  "/hiragana/index.html",
  "/hiragana/kana.html",
  "/hiragana/hiragana.html",
  "/hiragana/katakana.html",
  "/hiragana/ord.html",
  "/hiragana/tall.html",
  "/hiragana/howto.html",
  "/hiragana/progresjon.html",
  "/hiragana/daily.html",
  "/hiragana/challenge.html",
  "/hiragana/styles.css",
  "/hiragana/lang.js",
  "/hiragana/streak.js",
  "/hiragana/speak.js",
  "/hiragana/trainer-core.js",
  "/hiragana/app.js",
  "/hiragana/katakana.js",
  "/hiragana/kanji.html",
  "/hiragana/kanji-data.js",
  "/hiragana/kanji.js",
  "/hiragana/setninger.html",
  "/hiragana/setninger.js",
  "/hiragana/lytte.html",
  "/hiragana/lytte.js",
  "/hiragana/omvendt.html",
  "/hiragana/omvendt.js",
  "/hiragana/ord.js",
  "/hiragana/tall.js",
  "/hiragana/theme.js",
  "/hiragana/icons/icon-192.png",
  "/hiragana/icons/icon-512.png",
  "/hiragana/fonts/Oshidashi-M-Gothic.otf",
  "/hiragana/fonts/TrueType/Oshidashi-M-Gothic-TT.ttf",
  "/hiragana/fonts/KleeOne-Regular.ttf",
  "/hiragana/fonts/KleeOne-SemiBold.ttf",
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
  const url = new URL(e.request.url);
  const isAsset = url.pathname.match(/\.(js|html|css)$/);

  if (isAsset) {
    // network-first for JS/HTML/CSS — oppdaterer alltid til ny versjon
    e.respondWith(
      fetch(e.request)
        .then((res) => {
          const clone = res.clone();
          caches.open(CACHE).then((c) => c.put(e.request, clone));
          return res;
        })
        .catch(() => caches.match(e.request))
    );
  } else {
    // cache-first for bilder/fonter/lyd — cache on first fetch
    e.respondWith(
      caches.match(e.request).then((cached) => {
        if (cached) return cached;
        return fetch(e.request).then((res) => {
          const clone = res.clone();
          caches.open(CACHE).then((c) => c.put(e.request, clone));
          return res;
        });
      })
    );
  }
});
