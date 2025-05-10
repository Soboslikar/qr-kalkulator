# QR SKENER-KALKULATOR

Jednostavna web aplikacija za skeniranje QR kodova s hrvatskih fiskalnih računa i automatsko zbrajanje iznosa u EUR. Aplikacija radi direktno u web pregledniku (na mobitelu ili računalu s kamerom) bez potrebe za instalacijom.

Ova aplikacija čuva povijest skeniranja lokalno na vašem uređaju (u Local Storage preglednika), **ali i anonimno bilježi određene događaje korištenja na povezani Google Sheet putem Google Apps Scripta** kako bi se pratila upotreba i dohvaćali parametri poput globalnog brojača i poruka.

## Isprobajte uživo

Aplikaciju možete isprobati na sljedećem linku:

**[https://soboslikar.github.io/qr-kalkulator/](https://soboslikar.github.io/qr-kalkulator/)**

## Ključne značajke

*   **Skeniranje QR kodova:** Brzo i jednostavno skeniranje QR kodova s hrvatskih fiskalnih računa koristeći kameru uređaja.
*   **Automatsko zbrajanje:** Trenutno zbrajanje skeniranih iznosa u EUR i prikaz ukupnog zbroja u realnom vremenu.
*   **Ručni unos računa:** Mogućnost dodavanja računa ručnim unosom iznosa i opcionalno vremena, za slučajeve kada QR kod nije čitljiv.
*   **Provjera duplikata:** Aplikacija vas upozorava ako pokušate skenirati račun koji je već dodan u trenutnoj sesiji ili je pronađen u spremljenoj povijesti unazad 30 dana.
*   **Sustav brojača i promocija:** Prati broj skeniranih računa. Kada dosegne određeni prag, prikazuje se poziv na dijeljenje linka na aplikaciju. Dijeljenjem se brojač resetira na vrijednost praga (koja se dohvaća s Google Sheeta).
*   **Trčeći tekst poruke:** Prikaz dinamičke poruke na vrhu skener prikaza, preuzete s Google Sheeta.
*   **Organizirana povijest:** Spremanje sesija skeniranja s pripadajućim računima. Sesije se mogu imenovati i automatski se sortiraju po vremenu računa.
*   **Pregled i upravljanje poviješću:** Jednostavan pregled spremljenih sesija grupiranih po danima.
*   **Detaljan prikaz sesije:** Pregled svih računa unutar pojedine spremljene sesije.
*   **Napredna pretraga:** Pretraživanje spremljenih sesija po datumu, danu u tjednu, nazivu sesije, ili dijelu teksta iz QR koda (uključujući DATV dio). Pretraga se izvodi kroz **sve** spremljene sesije.
*   **Brisanje povijesti:** Mogućnost brisanja zadnjeg dodanog računa iz trenutne sesije, pojedinačne spremljene sesije, svih sesija za odabrani dan, ili kompletne povijesti. Sve operacije brisanja zahtijevaju potvrdu.
*   **Izvoz povijesti:** Spremanje kompletne povijesti skeniranja (uključujući trenutnu sesiju) u JSON datoteku na vaš uređaj.
*   **Uvoz povijesti:** Učitavanje povijesti iz prethodno spremljene JSON datoteke (ova operacija PREPISUJE postojeću povijest i nesačuvano stanje).
*   **Upravljanje kamerom:** Na uređajima s više kamera, nudi se gumb za prebacivanje između dostupnih kamera, a odabir se pamti.
*   **Zvučne i vizualne povratne informacije:** Aplikacija koristi zvukove i kratke poruke za potvrdu akcija (skeniranje, greška, duplikat, spremanje, brisanje).
*   **Lokalna pohrana:** Svi podaci o skeniranim računima i povijesti čuvaju se isključivo u Local Storageu vašeg web preglednika.

## Kako koristiti

1.  **Pokretanje:** Otvorite link aplikacije u modernom web pregledniku (Chrome, Firefox, Safari, Edge) na pametnom telefonu ili računalu s kamerom.
2.  **Dozvole:** Preglednik će zatražiti dozvolu za korištenje kamere. Morate dopustiti pristup za skeniranje.
3.  **Skeniranje:** Usmjerite kameru na QR kod fiskalnog računa. QR kod mora biti jasan i dobro osvijetljen unutar okvira na ekranu. Nakon uspješnog skeniranja, čut ćete zvuk i iznos će se dodati na UKUPNI zbroj. Aplikacija će kratko prikazati poruku "UČITANO".
4.  **Ručni unos:** Ako QR kod nije čitljiv, kliknite gumb **"SAM UPIŠI RAČ:"** ispod skenera. Unesite iznos (koristeći točku ili zarez za decimalni dio) i opcionalno vrijeme (HH:MM), zatim kliknite "Dodaj račun".
5.  **Upravljanje Trenutnom Sesijom:**
    *   **UKUPNO:** Prikazuje zbroj svih računa u trenutnoj sesiji.
    *   **X RAČUNA:** Prikazuje broj računa u trenutnoj sesiji.
    *   **DODAJ NAZIV / Ime Sesije / Uredi:** Kliknite "DODAJ NAZIV" za unos imena trenutne sesije. Unesite željeno ime i pritisnite Enter ili kliknite izvan polja za unos. Ako ime već postoji, prikazat će se umjesto gumba i možete ga urediti klikom na "Uredi".
    *   **SPREMI I OČISTI:** Kliknite jednom za prikaz gumba za potvrdu, kliknite opet na **"POTVRDI SPREMANJE?"** za spremanje trenutne sesije u povijest i resetiranje zbroja i brojača.
    *   **Obriši iz liste / Potvrdi / Obriši Naziv?:** Kliknite jednom za prikaz gumba za potvrdu brisanja zadnje dodanog računa. Kliknite opet na **"Potvrdi"** za brisanje. Ako je trenutna sesija prazna (nema računa) ali ima naziv, prvi klik će promijeniti gumb u "Obriši Naziv?". Potvrdite klikom na njega.
    *   **🔄 (Gumb za promjenu kamere):** Ako vaš uređaj ima više dostupnih kamera, ovaj gumb će se pojaviti. Kliknite na njega za prikaz liste kamera i odaberite koju želite koristiti. Aplikacija će zapamtiti vaš odabir.
    *   **✔ Indikator:** Mali znak "✔" u gornjem lijevom kutu skener prikaza označava da je sustav brojača i promocija trenutno deaktiviran (ovo se može dogoditi korištenjem skrivenih opcija).
    *   **Trčeći tekst:** Prikazuje poruku preuzetu s Google Sheeta. Nestaje kada je aktivan modal (npr. ručni unos) ili share prompt.
    *   **DIJELI RAČUNATOR:** Kliknite ovaj gumb za dijeljenje linka na aplikaciju putem standardne funkcije dijeljenja uređaja. Ova akcija može resetirati brojač skeniranih računa na vrijednost praga, ukoliko je brojač došao do 0, potičući daljnje korištenje.
6.  **Pregled Povijesti:**
    *   Kliknite gumb **POVIJEST**. Skener će se zaustaviti i otvorit će se prikaz povijesti.
    *   **Prikaz Dana:** Inicijalno se prikazuju spremljene sesije za *trenutni* dan, s ukupnim brojem računa i zbrojem za taj dan.
    *   **OSTALI DANI >:** Kliknite ovaj gumb za prikaz liste svih dana za koje postoji spremljena povijest.
    *   **Lista Svih Dana:** Prikazuje dane kronološki, s brojem računa i zbrojem za svaki dan. Kliknite na dan za povratak na prikaz sesija za taj dan.
    *   **Detalji Sesije:** U prikazu jednog dana, kliknite na pojedini redak (sesiju skeniranja) za prikaz svih računa unutar te sesije, sortiranih po vremenu.
    *   **< Lista / < Natrag:** Gumbi za navigaciju natrag u prikazu detalja sesije ili prikazu svih dana.
7.  **Pretraga Povijesti:**
    *   **Traži (🔍):** U prikazu pojedinog dana ili prikazu svih dana, pojavit će se traka za pretragu. Unesite pojam (datum - u formatu dd.mm.yyyy ili yyyy-mm-dd, dan u tjednu, naziv sesije, ili dio teksta iz QR koda/DATV stringa računa). Pritisnite Enter ili gumb "Traži".
    *   **Zatvori / Svi Dani:** Gumb za zatvaranje pretrage i povratak na standardni prikaz dana ili svih dana.
    *   Rezultati pretrage prikazuju pronađene sesije iz **svih** spremljenih dana koje odgovaraju pojmu. Možete kliknuti na rezultat pretrage za prikaz detalja te sesije.
8.  **Brisanje Povijesti (u History View):**
    *   **IZBRIŠI OVAJ SKEN / Potvrdi brisanje?:** U detaljnom prikazu sesije, kliknite jednom, pa opet za brisanje te specifične spremljene sesije.
    *   **IZBRIŠI OVAJ DAN / Potvrdi Brisanje Dana?:** U prikazu sesija za jedan dan, kliknite jednom, pa opet za brisanje SVIH sesija spremljenih tog dana.
    *   **IZBRIŠI SVU POVIJEST / Potvrdi Brisanje SVEGA?:** U prikazu svih dana, kliknite jednom, pa opet za brisanje KOMPLETNE povijesti skeniranja, uključujući brojače i podatke o korisniku u Local Storageu.
9.  **Izvoz i Uvoz Povijesti:**
    *   **Izvezi povijest:** U prikazu svih dana, kliknite ovaj gumb za preuzimanje JSON datoteke s kompletnom poviješću (uključujući trenutno nesačuvano stanje).
    *   **Uvezi povijest:** U prikazu svih dana, kliknite ovaj gumb za odabir JSON datoteke za uvoz. Uvoz će **PREPISATI** svu postojeću povijest i nesačuvano stanje u vašem pregledniku.

## Tehnički detalji

*   **Frontend:** HTML5, CSS3, JavaScript (Vanilla JS).
*   **QR Skeniranje:** Koristi [html5-qrcode](https://github.com/mebjas/html5-qrcode) biblioteku za klijentsko skeniranje QR kodova u pregledniku.
*   **Lokalna Pohrana:** Svi podaci o skeniranim računima i povijesti spremaju se u `localStorage` web preglednika korisnika. Podaci ostaju samo na vašem uređaju dok ih sami ne obrišete ili preglednik ne obriše svoje podatke.
*   **Logiranje i Parametri:** Aplikacija komunicira s **Google Apps Scriptom** koji služi kao posrednik za slanje anonimnih logova o korištenju na Google Sheet i za dohvaćanje parametara (praga brojača, poruke). **Ovo zahtijeva da povezani Google Apps Script bude postavljen i deployan kao web aplikacija, te da je URL skripte ispravno unesen u `APPS_SCRIPT_URL` varijablu u kodu.**

## Privatnost i Podaci

*   Svi detalji skeniranih računa i povijest spremaju se **isključivo lokalno** u `localStorage` vašeg preglednika. Ovi podaci **NE ŠALJU SE** na Google Sheet niti bilo koji drugi server osim ako ih sami ne izvezete/uvezete ili ne podijelite link na aplikaciju (što resetira brojač i logira akciju).
*   Aplikacija **LOGIRA** određene događaje korištenja (npr. učitavanje aplikacije, uspješno skeniranje, greška skeniranja, ručni unos, spremanje/brisanje sesije, pokušaj/uspjeh dijeljenja, greške kamere) na Google Sheet putem Apps Scripta. Ovi logovi **Uključuju**:
    *   Generirani, **anonimni** User ID (UUID spremljen u localStorage, ne povezuje se s vašim identitetom).
    *   Vremenske oznake događaja.
    *   Trenutno stanje brojača (Counter1, Counter2) i status aktivacije.
    *   User Agent (informacije o pregledniku i OS-u).
    *   JSON objekt s detaljima specifičnim za događaj (npr. iznos i redni broj računa za sken, naziv sesije, broj računa i ukupan iznos za spremljenu sesiju, poruku greške i dio QR koda za greške parsiranja, status uspješnosti dohvaćanja Sheeta).
*   Logiranje služi autoru isključivo za praćenje opće upotrebe aplikacije, identifikaciju problema i optimizaciju. **Ne prikupljaju se vaši osobni podaci, puni QR kodovi niti podaci koji bi vas mogli izravno identificirati izvan ove aplikacije.**

## O autoru

Ovu aplikaciju je razvio **Darko Banović**, soboslikar po struci, kojem je hobi izrada korisnih web aplikacija.

*Aplikacija je razvijena uz značajnu pomoć AI asistenta (modela poput GPT-a) za generiranje, objašnjavanje i ispravljanje koda.*

---
