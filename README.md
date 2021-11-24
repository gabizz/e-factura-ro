## WTF IS THIS?

Am demarat acest proiect cu scopul de a oferi un mod simplu și eficient pentru generarea e-facturii conform specificațiilor
ANAF.

## ROADMAP
Proiectul este la inceput de drum, dar ne propunem să realizăm următoarele:
+ un API simplu (un endpoint JSON și unul GRAPHQL).  Răspunsul va fi un fișier XML validabil de API-ul ANAF.
+ o interfață web în care să se ppată importa un XML din alte aplicații, în vederea editării, listării, exportului înapoi în XML-ul ANAF


## CRAZY DOABLE FEATURES
+ stocarea facturilor emise local într-un storage din browser.
+ bulk import/export din xml sau json

### HELP WANTED

Întrucât acest proiect va fi și va râmâne gratuit, orice contribuție este binevenită. Prin "contribuție" înțelegem:
+ __ajutor în dezvoltare__ - "get your hands dirty" with nodejs, react, nextjs, apollo server, @mui etc... dacă te ține și dacă ai timp...
+ __testare__ - încercați tool-ul nostru și spuneți-ne părerea (nu vrem doar laude, criticile constructive sunt mai mult decât binevenite!)
+ __sugestii__ - dacă aveți vreo idee pentru îmbunătățirea tool-ului, nu exitați să ne-o împărtășiți!
+ __idei__ - contribuie la acest proiect cu idei noi! (idiots are highly welcome here!!! "idiot" = "om cu idei, nu.... ")
+ __sponsorizări__ - integrezi tool-ul nostru în soluțiile tale? te ajută să faci mai mulți sau mai ușor bani? let your Karma grow. show some appreciation! (dacă vrei, nu te obligă nimeni, exact ca și cu vaccinul...) 
+ 
## UNDE POT VEDEA LIVE CUM MERGE TREABA ?

...poti clona acest repo 


git clone https://github.com/gabizz/e-factura-ro.git
apoi îi dai din terminal
cd e-factura-ro
npm install
npm run dev
mergi in browser la http://localhost:3000
(pentru modul developemnt)

sau 

npm build && npm start
(pentru a crea si servi web un production build)

sau 

...mulțumită companiei __VERCEL__, aici vom avea tot timpul un deployment automat: 
[e-factura.ro.vercel.app](https://e-factura-ro.vercel.app/)