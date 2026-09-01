# Promemoria pazienti

App web installabile per inviare i promemoria degli appuntamenti ai pazienti via WhatsApp.
Pensata per il telefono: si aggiunge alla schermata Home e si apre a tutto schermo, come
un'applicazione normale.

**I dati dei pazienti non escono dal telefono.** Rubrica, giornate e storico stanno nella
memoria del browser del dispositivo: non passano da questo sito, non finiscono su nessun
server, non sono visibili a nessun altro. Qui c'è soltanto il programma.

## Installazione

Apri il sito con **Safari su iPhone** (o Chrome su Android), poi:

- **iPhone**: Condividi → *Aggiungi a Home*
- **Android**: menu ⋮ → *Installa app*

Funziona anche senza rete: al primo avvio l'app resta salvata nel telefono.

## Come si usa

1. **＋ Aggiungi la giornata** e incolla l'elenco degli appuntamenti, una riga per paziente.
   Non serve un formato preciso: orario, numero di telefono e sede vengono riconosciuti in
   qualunque ordine siano scritti. Prima di confermare vedi cosa ha capito, incluso con che
   nome saluterà ciascun paziente.
2. Per ogni riga, **Invia** apre WhatsApp con il messaggio già scritto: controlli e premi
   invio. Al ritorno la riga risulta già inviata (con "Annulla" a portata di mano).
3. Chi non ha WhatsApp finisce nel gruppo **Da chiamare a voce**, con il tasto che compone
   il numero.

Nella scheda **Testo** si cambiano il modello del messaggio, la firma e le sedi con i
relativi indirizzi. In **Rubrica** si correggono i nominativi e si segna chi non vuole più
essere contattato. In **Dati** si fa il backup: conviene farlo ogni tanto, perché svuotare
i dati di Safari o cambiare telefono cancella tutto.

## Come si invia (telefono o WhatsApp Web)

In **Testo → Come si invia** si sceglie con cosa aprire i messaggi. In automatico l'app se ne
accorge da sola: dal telefono apre l'app WhatsApp installata, dal computer apre WhatsApp Web.
La stessa scelta si può forzare a mano, per esempio per usare sempre WhatsApp Web.

**Se lo studio usa WhatsApp Business**: su iPhone nessun collegamento può decidere fra WhatsApp
e WhatsApp Business — sceglie iOS in base a quale delle due è installata. Per questo c'è il
pulsante **Prova: apri un messaggio**: si fa la prova sul telefono di chi invia e si guarda
quale app si apre. Se si apre quella sbagliata, le strade sono due: tenere solo WhatsApp
Business su quel telefono, oppure inviare da WhatsApp Web sul computer.

## Nota sull'invio

Su iPhone nessuna applicazione può inviare messaggi WhatsApp da sola: ogni promemoria
richiede un tocco di conferma. Non è un limite di questa app — vale anche per le
applicazioni native. L'unica strada per l'invio completamente automatico è l'API ufficiale
WhatsApp Business, che però ha bisogno di un server e di modelli approvati da Meta.
