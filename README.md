# QR SKENER-KALKULATOR

Jednostavna web aplikacija za skeniranje QR kodova s hrvatskih fiskalnih računa i automatsko zbrajanje iznosa u EUR. Aplikacija radi direktno u web pregledniku (na mobitelu ili računalu s kamerom) bez potrebe za instalacijom i čuva povijest skeniranja u lokalnoj pohrani (Local Storage) preglednika.

## Isprobajte uživo

Aplikaciju možete isprobati na sljedećem linku:

**[https://soboslikar.github.io/qr-kalkulator/](https://soboslikar.github.io/qr-kalkulator/)**

## Kako koristiti

1.  Otvorite gornji link na svom pametnom telefonu (ili računalu s kamerom).
2.  Dozvolite pregledniku pristup kameri kada vas pita.
3.  Pozicionirajte QR kod računa unutar označenog kvadrata na ekranu.
4.  Aplikacija će automatski skenirati kod, prikazati iznos i dodati ga na ukupni zbroj (`UKUPNO`).
5.  Koristite gumbe za upravljanje trenutnom sesijom skeniranja:
    *   **DODAJ NAZIV:** Omogućuje unos vlastitog naziva za trenutnu sesiju skeniranja (npr. "Ručak s prijateljima", "Nabavka Konzum"). Unesite naziv i pritisnite Enter ili kliknite izvan polja za unos.
    *   **SPREMI I OČISTI:** Sprema trenutnu sesiju (s računima sortiranim po vremenu i eventualnim nazivom) u povijest i započinje novu praznu sesiju. Gumb je aktivan samo ako postoje skenirani računi s ukupnim iznosom većim od 0.00 €.
    *   **Obriši iz liste:** Briše zadnje skenirani račun. Ako je lista računa prazna, a postoji naziv sesije, ponudit će brisanje naziva. Za brisanje je potrebna potvrda.
6.  Kliknite na gumb **POVIJEST** za pregled spremljenih skeniranja.

## Značajke Povijesti

*   **Prikaz po danima:** Povijest je inicijalno grupirana po danima. Možete vidjeti ukupan broj računa i zbroj za svaki dan.
*   **Pregled svih dana:** Klikom na gumb "OSTALI DANI >" otvara se lista svih dana za koje postoji spremljena povijest.
*   **Detalji skena/sesije:** Klikom na pojedini sken (ili sesiju s nazivom) u listi dana otvara se detaljan prikaz svih računa unutar tog skena, sortiranih po vremenu iz QR koda.
*   **Pretraga:**
    *   U prikazu jednog dana: Kliknite na "(TRAŽI)" za pretragu svih sesija po datumu, danu u tjednu ili nazivu.
    *   U prikazu svih dana: Koristite traku za pretragu na vrhu za filtriranje dana po datumu (dd.mm.yy) ili danu u tjednu, ili za pretragu sesija po nazivu.
*   **Brisanje:**
    *   **IZBRIŠI OVAJ SKEN:** U detaljnom prikazu sesije, briše samo tu određenu sesiju.
    *   **IZBRIŠI OVAJ DAN:** U prikazu jednog dana, briše sve sesije spremljene tog dana.
    *   **IZBRIŠI SVU POVIJEST:** U prikazu svih dana, briše kompletnu povijest skeniranja.
    *   Sve operacije brisanja zahtijevaju potvrdu.

## Značajke Aplikacije

*   Skeniranje QR kodova s hrvatskih fiskalnih računa.
*   Automatsko zbrajanje iznosa u EUR.
*   Prikaz ukupnog zbroja i broja računa u stvarnom vremenu.
*   Provjera duplikata (unutar trenutne sesije i zadnjih 30 dana povijesti).
*   Mogućnost imenovanja sesija skeniranja.
*   Spremanje sesija s računima sortiranim po vremenu.
*   Organizirana povijest po danima i sesijama.
*   Detaljan pregled i brisanje pojedinačnih sesija ili cijelih dana.
*   Pretraga povijesti.
*   Zvučne povratne informacije.
*   Gumb za dijeljenje linka na aplikaciju.
*   **Pregled povijesti radi offline:** Spremljeni podaci dostupni su i bez internetske veze.
*   **Skeniranje zahtijeva internetsku vezu:** Za pokretanje kamere potrebno je učitati vanjsku biblioteku.
*   Koristi lokalnu pohranu preglednika, podaci ostaju na vašem uređaju.

## Korištene tehnologije

*   HTML5
*   CSS3
*   JavaScript (Vanilla JS)
*   [html5-qrcode](https://github.com/mebjas/html5-qrcode) biblioteka



## O autoru

Ovu aplikaciju je razvio **Darko Banović**, soboslikar po struci, kojem je hobi izrada korisnih web aplikacija.

*Aplikacija je razvijena uz pomoć AI asistenta (modela poput GPT-a) za generiranje i ispravljanje koda.*
