const CACHE="betech-v32-ios";
const FILES=["./","./index.html","./manifest.json","./logo.png",
"https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js",
"https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"];
self.addEventListener("install",e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)));
});
self.addEventListener("fetch",e=>{
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
});
