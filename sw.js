/* Copia locale dell'app: serve a farla partire anche senza rete.
   Non tocca i dati dei pazienti - quelli stanno nella memoria del browser,
   non passano mai di qui. */
const DEPOSITO = "promemoria-v1";
const GUSCIO = [
  "./", "./index.html", "./manifest.webmanifest",
  "./icone/icona-180.png", "./icone/icona-192.png", "./icone/icona-512.png",
];

self.addEventListener("install", (ev) => {
  ev.waitUntil(caches.open(DEPOSITO).then((c) => c.addAll(GUSCIO)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (ev) => {
  ev.waitUntil(
    caches.keys()
      .then((nomi) => Promise.all(nomi.filter((n) => n !== DEPOSITO).map((n) => caches.delete(n))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (ev) => {
  const richiesta = ev.request;
  if (richiesta.method !== "GET") return;

  // Aprendo l'app si prova sempre la rete, per avere l'ultima versione;
  // se non c'e' rete si usa la copia salvata.
  if (richiesta.mode === "navigate") {
    ev.respondWith(
      fetch(richiesta)
        .then((risposta) => {
          const copia = risposta.clone();
          caches.open(DEPOSITO).then((c) => c.put("./index.html", copia));
          return risposta;
        })
        .catch(() => caches.match("./index.html").then((r) => r || caches.match("./")))
    );
    return;
  }

  // Tutto il resto (icone, caratteri): prima la copia salvata, poi la rete.
  ev.respondWith(
    caches.match(richiesta).then((salvata) => {
      if (salvata) return salvata;
      return fetch(richiesta).then((risposta) => {
        if (risposta && (risposta.ok || risposta.type === "opaque")) {
          const copia = risposta.clone();
          caches.open(DEPOSITO).then((c) => c.put(richiesta, copia));
        }
        return risposta;
      }).catch(() => salvata);
    })
  );
});
