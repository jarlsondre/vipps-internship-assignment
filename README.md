# vipps-internship-assignment

Denne oppgaven går ut på å lage en backend og en frontend som kommuniserer sammen. Backenden skal hente ut informasjon ved hjelp av Wikipedia sitt API og skal bruke denne informasjonen til å telle antall forekomster av tittelen til et emne i den tilhørende teksten. Hele oppgaveteksten står under

## Kjøring av prosjektet

### Starte opp backenden

For å kjøre prosjektet fra rotmappen må du først navigere deg inn i backend-mappen med

`cd backend`

Deretter må du installere pakkene som hører til prosjektet med kommandoen

`npm i`

Til slutt må du kjøre kommandoen

`node backend.js`

Dette starter opp express-serveren.

### Starte opp frontenden

Ettersom at det ikke er blitt brukt noe rammeverk for frontenden er det tilstrekkelig å åpne filen "index.html" i nettleseren din.

## Valg av teknologi

Til dette prosjektet har jeg valgt å bruke Express for Node.js som backend og HTML/JS/CSS som frontend. Grunnen til at jeg valgte Express som backend er at dette er et minimalistisk rammeverk som er veldig populært. Ettersom at jeg ikke har erfaring med rammeverket så jeg på dette som en god mulighet til å lære om det. I tillegg til dette streber jeg etter mer erfaring innenfor JavaScript, spesielt innenfor asynkrone funksjoner. På grunn av dette passet Express veldig godt til prosjektet.

Til frontenden valgte jeg å ikke bruke noe rammeverk da kravene var svært små og jeg hadde kort tid på å gjennomføre oppgaven. Det var svært naturlig å velge HTML/JS/CSS da dette er standarden for webutvikling. Det har også blitt brukt BootStrap for å gjøre siden litt penere på veldig kort tid.

## Oppgavetekst

Part 1: Backend

Using an HTTP GET method, retrieve information from Wikipedia using a given topic. Query https://en.wikipedia.org/w/api.php?action=parse§ion=0&prop=text&format=json&page=[topic] to get the topic Wikipedia article.

Print the total number of times that the string [topic] appears in the article's text field.

Part 2: Frontend

Expose your backend code as an API and write a frontend that calls that API. The frontend can be very simple- just an input field and some way to submit and display the results. Feel free to be creative.

For both parts, use any language or framework that you'd like. It is up to you how you want to deliver the task to me, but please remember to submit the task 24 hours in advance.
