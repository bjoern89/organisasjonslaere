# Organisasjonslære

Spillifisert læringsapp i organisasjonsteori for ansatte og studenter i kommunal og fylkeskommunal sektor. Eksemplene handler om digitalisering.

**Åpne appen:** https://bjoern89.github.io/organisasjonslaere/

## Innhold
- 12 etasjer med de klassiske temaene i faget: organisasjon, mål og strategi, struktur, kultur, makt og konflikt, omgivelser, motivasjon, kommunikasjon, beslutninger, læring og innovasjon, endring og ledelse.
- Hver etasje har tre korte rom, en case, en etasjeprøve og en refleksjon med feltoppdrag. Vinduene i huset lyser opp når du fullfører.
- Caser fra den oppdiktede Skarvøy fylkeskommune, fire-brille-caser (Bolman og Deal) og en prosjektsimulator for innføring av KI.
- 12 klikkbare modeller, 132 begreper med repetisjon over tid, navnequiz og eksamenstrening.
- Fem verktøy til egne saker: interessentkart, kraftfelt, Kotter-sjekk, jobbdesign-måler og brillesjekk.
- XP, titler, dagsrekke og merker. Opplesning der enheten har norsk stemme.

## Som app på telefonen
Appen kan installeres og virker uten nett etter første besøk.
- **Android (Chrome):** Åpne lenken, trykk på menyen og velg «Installer app» eller «Legg til på startskjermen».
- **iPhone (Safari):** Åpne lenken, trykk på Del og velg «Legg til på Hjem-skjerm».

Framdriften lagres bare på enheten. Under Profil kan du lagre og hente inn en sikkerhetskopi.

## Utvikling
```
node build.js        # bygger src/ til docs/ (det GitHub Pages viser)
node check-data.js   # sjekker fagstoffet
node icons.js        # lager PNG-ikoner fra src/icon.svg (krever Playwright)
```
Testene i `test/` bruker Playwright mot en lokal server: `cd docs && python3 -m http.server 8765`, deretter `node test/run.js`, `node test/unit.js` og `node test/pwa.js`.

## Om fagstoffet
Forklaringene er egne sammendrag av kjent faglitteratur, blant annet Jacobsen og Thorsvik: *Hvordan organisasjoner fungerer*. De erstatter ikke pensum. Appen er uavhengig og ikke tilknyttet forfattere eller forlag. Skarvøy fylkeskommune og personene i casene er oppdiktet.

Skriftene Schibsted Grotesk og Sofia Sans Extra Condensed er lisensiert under SIL Open Font License (se `site/fonts`).
