/* Fylkeshuset – begreper, navn, modeller, brillecaser, simulator, eksamen, nivåer og merker */

const ZONES = [`Grunnmuren`, `Slik er huset bygd`, `Slik lever huset`, `Slik endres og ledes huset`];

/* Begrepsbank: [etasje, begrep, forklaring] */
const G = [
  ['f1', `Organisasjon`, `Et sosialt system som er bevisst konstruert for å løse oppgaver og nå bestemte mål.`],
  ['f1', `Arbeidsdeling`, `Fordeling av oppgaver slik at personer og enheter kan spesialisere seg.`],
  ['f1', `Koordinering`, `Samordning av spesialiserte bidrag slik at de til sammen løser oppgaven.`],
  ['f1', `Formell organisasjon`, `Vedtatte og nedskrevne stillinger, linjer, regler og rutiner.`],
  ['f1', `Uformell organisasjon`, `Vaner, relasjoner og uskrevne regler som har vokst fram ved siden av det vedtatte.`],
  ['f1', `Åpent system`, `Forståelse av virksomheten som avhengig av utveksling med omgivelsene.`],
  ['f1', `Kontingensteori`, `Syn om at den beste organiseringen avhenger av situasjonen.`],
  ['f1', `Human relations`, `Retning som vektlegger sosiale behov, gruppenormer og oppmerksomhet som kilder til innsats.`],
  ['f1', `Vitenskapelig arbeidsledelse`, `Taylors lære om å dele arbeidet i små, målbare operasjoner og skille planlegging fra utførelse.`],
  ['f1', `Multifunksjonell organisasjon`, `Offentlig virksomhet som skal ivareta mange og delvis motstridende hensyn samtidig.`],
  ['f1', `De fire rammene`, `Bolman og Deals synsvinkler på organisasjoner: struktur, human resource, politikk og symbol.`],

  ['f2', `Målhierarki`, `Ordning av mål i nivåer, der lavere nivå er middel for høyere.`],
  ['f2', `Offisielle mål`, `Det virksomheten sier offentlig at den vil oppnå.`],
  ['f2', `Operative mål`, `Det som faktisk styrer daglige prioriteringer og ressursbruk.`],
  ['f2', `Målforskyvning`, `Midler eller indikatorer tar plassen til det egentlige formålet.`],
  ['f2', `Suboptimalisering`, `En enhet når sine delmål på bekostning av helheten.`],
  ['f2', `Mål- og resultatstyring`, `Styringsform der overordnet nivå setter mål og følger opp resultater, med frihet i valg av virkemidler.`],
  ['f2', `Fremvoksende strategi`, `Mønster i handlinger som oppstår over tid uten å være planlagt.`],
  ['f2', `Ressursbasert syn`, `Strategisyn som forklarer varige fortrinn med ressurser og kompetanse som er vanskelige å kopiere.`],
  ['f2', `Tillitsbasert styring`, `Styringsform med færre mål, mer dialog og større faglig handlingsrom.`],
  ['f2', `Strategi`, `De overordnede valgene for hvordan virksomheten skal nå målene sine.`],

  ['f3', `Byråkrati`, `Organisasjonsform bygd på hierarki, skrevne regler, spesialisering og ansettelse etter kompetanse.`],
  ['f3', `Sentralisering`, `Beslutningsmyndighet samles høyt oppe i organisasjonen.`],
  ['f3', `Desentralisering`, `Beslutningsmyndighet legges ut til dem som er nær oppgavene.`],
  ['f3', `Kontrollspenn`, `Antall medarbeidere som rapporterer til samme leder.`],
  ['f3', `Matrisestruktur`, `Organisering der medarbeidere har to linjer samtidig, for eksempel fag og prosjekt.`],
  ['f3', `Teknostruktur`, `Analytikere og planleggere som utformer standarder og systemer for andres arbeid.`],
  ['f3', `Operativ kjerne`, `De som utfører organisasjonens hovedoppgaver.`],
  ['f3', `Adhokrati`, `Fleksibel form der tverrfaglige team løser nye problemer gjennom gjensidig tilpasning.`],
  ['f3', `Profesjonelt byråkrati`, `Form der høyt utdannede fagfolk styrer eget arbeid ut fra standardisert kunnskap.`],
  ['f3', `Gjensidig tilpasning`, `Koordinering ved at de som utfører arbeidet, snakker sammen og justerer seg etter hverandre.`],
  ['f3', `Differensiering`, `Graden av forskjell mellom enheter i mål, tidshorisont, språk og arbeidsmåte.`],
  ['f3', `Integrasjon`, `Tiltak som får ulike enheter til å samarbeide om helheten.`],
  ['f3', `Mekanistisk struktur`, `Oppbygning med tydelig hierarki, faste roller og mange regler.`],
  ['f3', `Organisk struktur`, `Oppbygning med flytende roller, kommunikasjon på tvers og beslutninger der kompetansen er.`],

  ['f4', `Organisasjonskultur`, `Felles antakelser, verdier og normer som preger hvordan medlemmene tenker og handler.`],
  ['f4', `Artefakter`, `De synlige uttrykkene for kultur, som lokaler, språk, ritualer og systemer.`],
  ['f4', `Uttrykte verdier`, `Det organisasjonen sier at den står for.`],
  ['f4', `Grunnleggende antakelser`, `Det medlemmene tar for gitt, og som sjelden sies høyt.`],
  ['f4', `Subkultur`, `Egne normer og verdier i en del av organisasjonen, ofte knyttet til profesjon, enhet eller sted.`],
  ['f4', `Sosialisering`, `Prosessen der nye medlemmer lærer normer, verdier og forventet atferd.`],
  ['f4', `Psykologisk trygghet`, `Felles opplevelse av at det er greit å spørre, si imot og innrømme feil.`],
  ['f4', `Maktdistanse`, `I hvilken grad ulik fordeling av innflytelse aksepteres og forventes.`],
  ['f4', `Usikkerhetsunnvikelse`, `I hvilken grad medlemmene i en kultur føler seg truet av uklare situasjoner og søker regler.`],

  ['f5', `Makt`, `Evnen til å få andre til å gjøre noe de ellers ikke ville gjort.`],
  ['f5', `Autoritet`, `Innflytelse som oppfattes som legitim av dem den utøves overfor.`],
  ['f5', `Ekspertmakt`, `Innflytelse som bygger på kunnskap andre trenger.`],
  ['f5', `Referansemakt`, `Innflytelse som bygger på at andre ser opp til deg og vil ligne.`],
  ['f5', `Legitim makt`, `Innflytelse som følger av stilling og formell rett til å beslutte.`],
  ['f5', `Dagsordenmakt`, `Evnen til å avgjøre hvilke saker som kommer opp til beslutning.`],
  ['f5', `Oppgavekonflikt`, `Uenighet om hva som bør gjøres, og hva som er den beste løsningen.`],
  ['f5', `Relasjonskonflikt`, `Motsetning som handler om personer, følelser og mistillit.`],
  ['f5', `Konflikttrappa`, `Glasls modell for hvordan motsetninger eskalerer fra sak til person til ødeleggelse.`],
  ['f5', `Koalisjon`, `Allianse av aktører som går sammen for å fremme felles interesser.`],
  ['f5', `Interessent`, `Aktør som påvirker eller blir påvirket av organisasjonens beslutninger.`],

  ['f6', `Tekniske omgivelser`, `Aktører og forhold som leverer ressurser og etterspør resultater.`],
  ['f6', `Institusjonelle omgivelser`, `Normer, regler og forventninger om hva som er riktig og akseptabelt.`],
  ['f6', `Legitimitet`, `Omgivelsenes aksept av at organisasjonen er riktig, ansvarlig og verdt å støtte.`],
  ['f6', `Isomorfi`, `Prosess som gjør at organisasjoner i samme felt blir stadig likere.`],
  ['f6', `Mimetisk isomorfi`, `Etterligning av andre som framstår som vellykkede, særlig under usikkerhet.`],
  ['f6', `Rasjonaliserte myter`, `Allment aksepterte forestillinger om hvordan moderne organisasjoner bør se ut.`],
  ['f6', `Dekobling`, `Formell struktur og faktisk praksis holdes fra hverandre for å møte ytre forventninger.`],
  ['f6', `Organisasjonsoppskrift`, `Populær idé om god organisering som sprer seg mellom virksomheter.`],
  ['f6', `Translasjon`, `Tilpasning av en idé utenfra til lokal sammenheng.`],
  ['f6', `Ressursavhengighet`, `Behovet for ressurser som andre kontrollerer, og sårbarheten det gir.`],
  ['f6', `Transaksjonskostnader`, `Kostnadene ved å finne, avtale, følge opp og håndheve et bytte.`],
  ['f6', `Interkommunalt selskap`, `Foretak eid av flere kommuner eller fylkeskommuner for å løse felles oppgaver.`],

  ['f7', `Hygienefaktorer`, `Forhold rundt arbeidet som skaper misnøye når de er dårlige, men ikke motivasjon når de er gode.`],
  ['f7', `Motivasjonsfaktorer`, `Forhold i selve arbeidet som skaper engasjement, som ansvar, anerkjennelse og vekst.`],
  ['f7', `Forventningsteori`, `Teori om at innsats avhenger av troen på mestring, troen på belønning og verdien av belønningen.`],
  ['f7', `Valens`, `Verdien en person tillegger et bestemt utfall.`],
  ['f7', `Rettferdighetsteori`, `Teori om at folk sammenligner forholdet mellom innsats og utbytte med andres.`],
  ['f7', `Indre motivasjon`, `Drivkraft som kommer av at oppgaven i seg selv gir glede, mening eller mestring.`],
  ['f7', `Selvbestemmelsesteori`, `Teori om at autonomi, kompetanse og tilhørighet er grunnleggende psykologiske behov.`],
  ['f7', `Public service motivation`, `Ønsket om å bidra til fellesskapet og hjelpe andre gjennom offentlig arbeid.`],
  ['f7', `Jobbkarakteristikamodellen`, `Hackman og Oldhams modell med fem trekk ved arbeidet som skaper indre motivasjon.`],
  ['f7', `Autonomi`, `Frihet til selv å bestemme hvordan og når arbeidet utføres.`],
  ['f7', `Sosioteknisk tenkning`, `Syn om at teknologi og arbeidsorganisering må utformes sammen.`],

  ['f8', `Koding`, `Senderens omforming av en tanke til ord, tall eller bilder.`],
  ['f8', `Støy`, `Alt som forstyrrer eller forvrenger et budskap på veien fra sender til mottaker.`],
  ['f8', `Filtrering`, `Informasjon endres eller holdes tilbake på vei gjennom hierarkiet.`],
  ['f8', `Medierikhet`, `En kanals evne til å overføre mange signaler og gi rask tilbakemelding.`],
  ['f8', `Informasjonsoverbelastning`, `Mengden som skal leses og vurderes, overstiger evnen til å behandle den.`],
  ['f8', `Jungeltelegrafen`, `Det uformelle nettverket som sprer nyheter og rykter.`],
  ['f8', `Grensekrysser`, `Person som forbinder grupper og oversetter mellom dem.`],
  ['f8', `Svake bånd`, `Bekjentskaper utenfor den nære kretsen, som ofte gir tilgang til ny informasjon.`],
  ['f8', `Asynkron kommunikasjon`, `Utveksling der deltakerne ikke trenger å være til stede samtidig.`],

  ['f9', `Begrenset rasjonalitet`, `Beslutninger tas med begrenset informasjon, tid og kapasitet.`],
  ['f9', `Satisfiering`, `Å velge det første alternativet som er godt nok.`],
  ['f9', `Inkrementalisme`, `Beslutninger som små justeringer av det bestående.`],
  ['f9', `Søppelbøttemodellen`, `Modell der problemer, løsninger, deltakere og anledninger kobles nokså tilfeldig.`],
  ['f9', `Logikken om det passende`, `Handling ut fra regler, rolle og identitet framfor beregning av utfall.`],
  ['f9', `Gruppetenkning`, `Ønsket om enighet fortrenger kritisk vurdering.`],
  ['f9', `Eskalering av forpliktelse`, `Å satse videre på noe som ikke virker, for å forsvare tidligere valg.`],
  ['f9', `Forankringseffekten`, `Tendensen til at det første tallet eller inntrykket styrer senere vurderinger.`],
  ['f9', `Bekreftelsesfellen`, `Tendensen til å lete etter og vektlegge informasjon som støtter det vi allerede tror.`],
  ['f9', `Premissmakt`, `Innflytelse gjennom å utforme grunnlaget og alternativene andre beslutter ut fra.`],
  ['f9', `Delegering`, `Overføring av beslutningsmyndighet til et lavere nivå.`],

  ['f10', `Enkeltkretslæring`, `Feil rettes uten at mål og antakelser utfordres.`],
  ['f10', `Dobbeltkretslæring`, `Å stille spørsmål ved målene og antakelsene bak handlingene.`],
  ['f10', `Taus kunnskap`, `Erfaringsbasert viten som er vanskelig å sette ord på.`],
  ['f10', `Eksplisitt kunnskap`, `Viten som kan skrives ned og deles i dokumenter og systemer.`],
  ['f10', `Kunnskapsspiralen`, `Nonaka og Takeuchis modell med fire omforminger mellom taus og uttalt viten.`],
  ['f10', `Defensive rutiner`, `Vaner som beskytter mot ubehag ved å holde vanskelige temaer unna samtalen.`],
  ['f10', `Absorpsjonsevne`, `Evnen til å kjenne igjen, ta opp og bruke ny kunnskap utenfra.`],
  ['f10', `Praksisfellesskap`, `Gruppe som deler et fag og lærer av hverandre gjennom felles arbeid.`],
  ['f10', `Innovasjon`, `Noe nytt som er nyttig og tatt i bruk.`],
  ['f10', `Tohendighet`, `Evnen til både å utnytte det bestående og utforske det nye.`],
  ['f10', `Pilotsyke`, `Vellykkede forsøk blir ikke tatt i bruk i større skala.`],
  ['f10', `Bestillerkompetanse`, `Evnen til å definere behov, stille krav og følge opp leverandører.`],

  ['f11', `Leavitts diamant`, `Modell som viser at oppgaver, struktur, teknologi og mennesker påvirker hverandre.`],
  ['f11', `Opptining`, `Første fase hos Lewin, der dagens situasjon blir utilstrekkelig i folks øyne.`],
  ['f11', `Nedfrysing`, `Siste fase hos Lewin, der det nye stabiliseres i rutiner og kultur.`],
  ['f11', `Kraftfeltanalyse`, `Kartlegging av drivkrefter og motkrefter som holder en situasjon på plass.`],
  ['f11', `Psykologisk kontrakt`, `Uskrevne gjensidige forventninger mellom arbeidstaker og arbeidsgiver.`],
  ['f11', `Styrende koalisjon`, `Gruppe med nok innflytelse, kompetanse og troverdighet til å drive en endring.`],
  ['f11', `Strategi E`, `Toppstyrt og planlagt endring rettet mot økonomisk gevinst.`],
  ['f11', `Strategi O`, `Deltakende og fremvoksende endring rettet mot evne til å lære.`],
  ['f11', `Gevinstrealisering`, `Arbeidet med å sikre at planlagte nytteeffekter faktisk blir hentet ut.`],
  ['f11', `Kooptering`, `Å gi motstandere en rolle i prosessen for å dempe motstanden.`],
  ['f11', `Superbruker`, `Kollega med ekstra opplæring som støtter andre i å ta et system i bruk.`],

  ['f12', `Ledelse`, `Prosess der noen påvirker andre for å nå mål.`],
  ['f12', `Indirekte ledelse`, `Påvirkning gjennom struktur, kultur og systemer.`],
  ['f12', `PAIE`, `Adizes' fire lederfunksjoner: produsent, administrator, integrator og entreprenør.`],
  ['f12', `Situasjonsbestemt ledelse`, `Lederstilen tilpasses medarbeiderens kompetanse og vilje i oppgaven.`],
  ['f12', `Transaksjonsledelse`, `Lederskap som bygger på bytte av innsats mot belønning og korrigering av avvik.`],
  ['f12', `Transformasjonsledelse`, `Lederskap som løfter medarbeidernes ambisjoner gjennom forbilde, inspirasjon, utfordring og omtanke.`],
  ['f12', `Ledelsesromantikk`, `Tendensen til å gi ledere mer av æren og skylden for resultater enn det er grunnlag for.`],
  ['f12', `LMX`, `Teori om at ledere utvikler relasjoner av ulik kvalitet til ulike medarbeidere.`],
  ['f12', `Distribuert ledelse`, `Lederskap utøves av flere, avhengig av hvem som har kompetansen i situasjonen.`],
  ['f12', `Krysspress`, `Motstridende forventninger fra ulike hold, typisk for mellomledere.`],
  ['f12', `Selvledelse`, `Medarbeidere tar selv ansvar for å styre og motivere eget arbeid innenfor gitte rammer.`]
];

/* Navn du bør kunne plassere: [navn, bidrag, etasje] */
const WHO = [
  [`Taylor`, `Vitenskapelig arbeidsledelse`, 'f1'], [`Fayol`, `Prinsipper for administrasjon`, 'f1'], [`Mayo`, `Hawthorne-studiene og Human relations`, 'f1'],
  [`Bolman og Deal`, `Fire rammer for å forstå organisasjoner`, 'f1'], [`Christensen mfl.`, `Instrumentelt perspektiv, kulturperspektiv og myteperspektiv`, 'f1'],
  [`Perrow`, `Offisielle og operative mål`, 'f2'], [`Merton`, `Målforskyvning i byråkratier`, 'f2'], [`Porter`, `Strategi som posisjonering`, 'f2'], [`Miles og Snow`, `Fire strategityper`, 'f2'],
  [`Weber`, `Byråkratiet som idealtype`, 'f3'], [`Mintzberg`, `Fem deler og fem konfigurasjoner`, 'f3'], [`Burns og Stalker`, `Mekanistisk og organisk struktur`, 'f3'], [`Lawrence og Lorsch`, `Differensiering og integrasjon`, 'f3'], [`Gulick`, `Fire prinsipper for inndeling av forvaltningen`, 'f3'],
  [`Schein`, `Tre kulturnivåer`, 'f4'], [`Hofstede`, `Nasjonale kulturdimensjoner`, 'f4'], [`Edmondson`, `Psykologisk trygghet`, 'f4'],
  [`Dahl`, `Makt som relasjon mellom A og B`, 'f5'], [`French og Raven`, `Maktbaser`, 'f5'], [`Bachrach og Baratz`, `Makten over dagsordenen`, 'f5'], [`Lukes`, `Maktens tre ansikter`, 'f5'], [`Thomas og Kilmann`, `Fem konfliktstiler`, 'f5'], [`Glasl`, `Konflikttrappa`, 'f5'],
  [`Pfeffer og Salancik`, `Ressursavhengighetsperspektivet`, 'f6'], [`Meyer og Rowan`, `Rasjonaliserte myter`, 'f6'], [`DiMaggio og Powell`, `Tre former for isomorfi`, 'f6'], [`Brunsson`, `Prat, beslutning og handling`, 'f6'], [`Røvik`, `Organisasjonsoppskrifter og translasjon`, 'f6'], [`Williamson`, `Transaksjonskostnadsteori`, 'f6'], [`Duncan`, `Usikkerhet i omgivelsene`, 'f6'],
  [`Maslow`, `Behovshierarkiet`, 'f7'], [`Herzberg`, `Hygiene- og motivasjonsfaktorer`, 'f7'], [`Vroom`, `Forventningsteori`, 'f7'], [`Adams`, `Rettferdighetsteori`, 'f7'], [`Locke og Latham`, `Målsettingsteori`, 'f7'], [`Deci og Ryan`, `Selvbestemmelsesteori`, 'f7'], [`Hackman og Oldham`, `Jobbkarakteristikamodellen`, 'f7'], [`Thorsrud`, `Psykologiske jobbkrav`, 'f7'],
  [`Daft og Lengel`, `Medierikhet`, 'f8'], [`Granovetter`, `Styrken i svake bånd`, 'f8'],
  [`Simon`, `Begrenset rasjonalitet`, 'f9'], [`Lindblom`, `Beslutninger i små skritt`, 'f9'], [`Cyert og March`, `Organisasjonen som koalisjon`, 'f9'], [`Cohen, March og Olsen`, `Søppelbøttemodellen`, 'f9'], [`Janis`, `Gruppetenkning`, 'f9'], [`Kahneman og Tversky`, `Systematiske tankefeil`, 'f9'],
  [`Argyris og Schön`, `Enkeltkrets- og dobbeltkretslæring`, 'f10'], [`Nonaka og Takeuchi`, `Kunnskapsspiralen`, 'f10'], [`Rogers`, `Spredning av innovasjoner`, 'f10'], [`Cohen og Levinthal`, `Absorpsjonsevne`, 'f10'],
  [`Lewin`, `Tre faser og kraftfelt`, 'f11'], [`Leavitt`, `Diamanten med fire deler`, 'f11'], [`Kotter`, `Åtte trinn for endring`, 'f11'], [`Beer og Nohria`, `Strategi E og O`, 'f11'],
  [`Adizes`, `Fire lederfunksjoner`, 'f12'], [`Hersey og Blanchard`, `Situasjonsbestemt ledelse`, 'f12'], [`Blake og Mouton`, `Lederrutenettet`, 'f12'], [`Bass`, `Transformasjonsledelse`, 'f12'], [`Meindl`, `Ledelsesromantikk`, 'f12']
];

/* Modeller: tekst til de klikkbare delene. Tegningene ligger i models.js. */
const MODELS = {
  system: { f: 'f1', t: `Organisasjonen som åpent system`, by: `Systemperspektivet`,
    cap: `Ressurser kommer inn fra omgivelsene, omformes i organisasjonen og går ut som tjenester. Tilbakemeldinger påvirker neste runde.`,
    parts: [
      ['inn', `Innsats`, `Bevilgninger, kompetanse, teknologi, lover og forventninger. Fylkeskommunen velger lite av dette selv.`],
      ['kjerne', `Omforming`, `Mål, struktur, kultur og maktforhold former hvordan folk motiveres, kommuniserer, beslutter og lærer. Det er dette resten av huset handler om.`],
      ['ut', `Resultater`, `Tjenester til innbyggerne: opplæring, veier, kollektivtransport og tannhelse. Også legitimitet og tillit.`],
      ['tilbake', `Tilbakemelding`, `Brukererfaringer, tilsyn, medieoppslag og valg virker tilbake på ressurser og forventninger.`],
      ['omg', `Omgivelser`, `Stat, kommuner, leverandører, innbyggere og medier. Organisasjonen er avhengig av dem og påvirker dem.`]
    ] },
  strategi: { f: 'f2', t: `Planlagt og realisert strategi`, by: `Mintzberg og Waters`,
    cap: `Bare en del av planen blir gjennomført. Resten av den realiserte strategien vokser fram underveis.`,
    parts: [
      ['plan', `Planlagt strategi`, `Det ledelsen har vedtatt. I Skarvøy er det digitaliseringsstrategien fra fylkestinget.`],
      ['bort', `Ikke realisert`, `Deler av planen som faller bort fordi forutsetningene endrer seg, ressursene uteblir eller ingen eier dem.`],
      ['frem', `Fremvoksende strategi`, `Mønstre som oppstår gjennom daglige valg. Tre avdelinger tar i bruk KI på eget initiativ.`],
      ['real', `Realisert strategi`, `Det organisasjonen faktisk gjorde: planen som overlevde, pluss det som vokste fram.`]
    ] },
  mintzberg: { f: 'f3', t: `Mintzbergs fem deler`, by: `Mintzberg`,
    cap: `Fem deler med ulike oppgaver. Hvilken del som dominerer, avgjør organisasjonsformen.`,
    parts: [
      ['topp', `Strategisk toppunkt`, `Øverste ledelse med ansvar for helheten. Dominerer i entreprenørorganisasjonen.`],
      ['mellom', `Mellomledelse`, `Binder topp og kjerne sammen. Dominerer i den divisjonaliserte formen.`],
      ['kjerne', `Operativ kjerne`, `De som utfører hovedoppgavene: lærere, tannleger, veiingeniører. Dominerer i det profesjonelle byråkratiet.`],
      ['tekno', `Teknostruktur`, `Analytikere som standardiserer andres arbeid: økonomi, kvalitet, prosess. Dominerer i maskinbyråkratiet.`],
      ['stab', `Støttestab`, `Tjenester utenfor hovedproduksjonen: lønn, kantine, IT-drift. Får en nøkkelrolle i adhokratiet.`]
    ] },
  isfjell: { f: 'f4', t: `Scheins tre kulturnivåer`, by: `Schein`,
    cap: `Det synlige hviler på det usynlige. Antakelsene under vannflaten styrer mest.`,
    parts: [
      ['art', `Artefakter`, `Det du kan se og høre: lokaler, språk, møteformer og systemer. Lett å observere, vanskelig å tolke.`],
      ['verd', `Uttrykte verdier`, `Det organisasjonen sier at den står for: strategier, verdiplakater og taler.`],
      ['ant', `Grunnleggende antakelser`, `Det som tas for gitt og sjelden sies høyt. «Feil er farlige.» «Den som har vært her lengst, vet best.»`]
    ] },
  konflikt: { f: 'f5', t: `Fem konfliktstiler`, by: `Thomas og Kilmann`,
    cap: `Stilene plasseres etter hvor sterkt du hevder egne interesser, og hvor mye du samarbeider om den andres.`,
    parts: [
      ['konk', `Konkurranse`, `Du hevder ditt og gir lite. Riktig når det haster, og du har ansvaret.`],
      ['sam', `Samarbeid`, `Du leter etter en løsning som gir begge det viktigste. Riktig når både sak og relasjon er viktig.`],
      ['komp', `Kompromiss`, `Begge gir noe. Riktig når tiden er knapp, og partene er jevnbyrdige.`],
      ['unn', `Unngåelse`, `Du lar saken ligge. Riktig i småsaker, eller når temperaturen må ned.`],
      ['til', `Tilpasning`, `Du gir etter. Riktig når saken betyr mer for den andre enn for deg.`]
    ] },
  usikkerhet: { f: 'f6', t: `Usikkerhet i omgivelsene`, by: `Duncan`,
    cap: `Usikkerheten øker med antall forhold organisasjonen må følge med på, og med hvor fort de endrer seg.`,
    parts: [
      ['es', `Enkle og stabile`, `Få aktører, lite endring. Lav usikkerhet. Eksempel: drift av fylkesveier med faste kontrakter.`],
      ['ks', `Komplekse og stabile`, `Mange aktører, lite endring. Moderat usikkerhet. Eksempel: videregående opplæring med mange regler og parter.`],
      ['ed', `Enkle og dynamiske`, `Få aktører, rask endring. Moderat til høy usikkerhet. Eksempel: et fagsystem der den ene leverandøren stadig endrer vilkår.`],
      ['kd', `Komplekse og dynamiske`, `Mange aktører, rask endring. Høy usikkerhet. Eksempel: KI-feltet.`]
    ] },
  jobb: { f: 'f7', t: `Jobbkarakteristikamodellen`, by: `Hackman og Oldham`,
    cap: `Fem trekk ved jobben gir opplevd mening, ansvar og kunnskap om resultater. Det gir indre motivasjon.`,
    parts: [
      ['var', `Variasjon`, `Jobben krever flere ulike ferdigheter. Bidrar til opplevd mening.`],
      ['ident', `Oppgaveidentitet`, `Du gjør noe helt, fra start til slutt, og ser resultatet. Bidrar til opplevd mening.`],
      ['bet', `Betydning`, `Arbeidet betyr noe for andre mennesker. Bidrar til opplevd mening.`],
      ['aut', `Autonomi`, `Du bestemmer selv hvordan og når arbeidet utføres. Gir opplevd ansvar.`],
      ['tilb', `Tilbakemelding`, `Arbeidet selv viser deg hvor godt du lykkes. Gir kunnskap om resultatene.`]
    ] },
  komm: { f: 'f8', t: `Kommunikasjonsprosessen`, by: `Etter Shannon og Weaver`,
    cap: `Budskapet kodes, sendes, dekodes og tolkes. Støy kan forstyrre i alle ledd, og bare tilbakemelding viser hva som ble forstått.`,
    parts: [
      ['send', `Sender`, `Den som har noe å formidle. Koder tanken til ord, tall eller bilder, ofte i eget fagspråk.`],
      ['kanal', `Kanal`, `Veien budskapet tar: samtale, møte, e-post, chat eller intranett. Kanalen avgjør hvor mange signaler som kommer fram.`],
      ['mott', `Mottaker`, `Dekoder og tolker ut fra egne erfaringer og forventninger. Her skapes meningen.`],
      ['stoy', `Støy`, `Fagspråk, tidspress, avbrytelser og forutinntatte oppfatninger. Kan ramme alle ledd.`],
      ['tilb', `Tilbakemelding`, `Mottakerens reaksjon tilbake til senderen. Uten den vet du ikke hva som ble forstått.`]
    ] },
  boette: { f: 'f9', t: `Søppelbøttemodellen`, by: `Cohen, March og Olsen`,
    cap: `Fire strømmer flyter hver for seg. En beslutning oppstår når de møtes i en beslutningsanledning.`,
    parts: [
      ['prob', `Problemer`, `Noe som krever oppmerksomhet: høyt fravær, lang ventetid, misfornøyde brukere.`],
      ['los', `Løsninger`, `Svar som leter etter spørsmål: et verktøy noen har sett, en metode fra et kurs, et tilbud fra en leverandør.`],
      ['delt', `Deltakere`, `De som har tid og interesse akkurat nå. Deltakelsen skifter fra møte til møte.`],
      ['anl', `Beslutningsanledninger`, `Møter, frister og budsjettrunder der organisasjonen forventes å bestemme noe.`]
    ] },
  seci: { f: 'f10', t: `Kunnskapsspiralen`, by: `Nonaka og Takeuchi`,
    cap: `Kunnskap skapes når den veksler mellom taus og eksplisitt form gjennom fire omforminger.`,
    parts: [
      ['sos', `Sosialisering`, `Taus til taus. Du lærer ved å jobbe sammen med en som kan.`],
      ['ekst', `Eksternalisering`, `Taus til eksplisitt. Erfaringen settes ord på i samtaler, sjekklister og eksempler.`],
      ['komb', `Kombinering`, `Eksplisitt til eksplisitt. Dokumenter og data settes sammen til noe nytt.`],
      ['int', `Internalisering`, `Eksplisitt til taus. Du bruker det skrevne til det sitter i fingrene.`]
    ] },
  leavitt: { f: 'f11', t: `Leavitts diamant`, by: `Leavitt`,
    cap: `Fire deler som påvirker hverandre. Endrer du én, flytter de tre andre seg.`,
    parts: [
      ['oppg', `Oppgaver`, `Hva organisasjonen gjør. Ny teknologi endrer hvilke oppgaver som finnes, og hvem som gjør dem.`],
      ['strukt', `Struktur`, `Ansvar, myndighet og arbeidsflyt. Nye oppgaver krever nye roller og linjer.`],
      ['tekn', `Teknologi`, `Systemer, verktøy og metoder. Det som oftest utløser endringen, og sjelden det vanskeligste.`],
      ['menn', `Mennesker`, `Kompetanse, holdninger og relasjoner. Avgjør om det nye faktisk blir brukt.`]
    ] },
  situasjon: { f: 'f12', t: `Situasjonsbestemt ledelse`, by: `Hersey og Blanchard`,
    cap: `Lederstilen tilpasses medarbeiderens kompetanse og vilje i den konkrete oppgaven.`,
    parts: [
      ['s1', `Instruerende`, `Mye styring, lite støtte. For den som er ny i oppgaven og trenger å vite hva og hvordan.`],
      ['s2', `Veiledende`, `Mye styring, mye støtte. For den som har lært litt og møtt motgang.`],
      ['s3', `Støttende`, `Lite styring, mye støtte. For den som kan, men nøler.`],
      ['s4', `Delegerende`, `Lite styring, lite støtte. For den som både kan og vil.`]
    ] }
};

/* Fire briller: Bolman og Deal på samme sak */
const LENS_NAMES = [`Strukturell`, `Human resource`, `Politisk`, `Symbolsk`];
const LENS_ASK = [
  `Hvem har ansvar for hva? Hvilke mål, roller og regler gjelder?`,
  `Hva trenger menneskene her? Hva kan de, og hva er de redde for?`,
  `Hvem vinner og taper? Hvem har makt, og hvilke ressurser er knappe?`,
  `Hva betyr dette for folk? Hvilken fortelling blir stående?`
];
const LENS = [
  { id: 'l1', t: `Ett porteføljestyre for alle`,
    text: `Avdelingene i Skarvøy har til nå brukt egne midler på egne digitaliseringsprosjekter. Nå foreslår ledelsen at alle prosjekter over en viss størrelse skal prioriteres av ett felles porteføljestyre. Forslaget møter både applaus og uro.`,
    lenses: [
      { se: `Fem avdelinger prioriterer hver for seg. Det gir dobbeltarbeid, løsninger som ikke snakker sammen, og ingen samlet oversikt. Ett styre gir felles kriterier og tydeligere linjer.`, grep: `Avklar mandat, terskelverdi og saksflyt. Hvem melder inn, hvem beslutter, og hva kan avdelingene fortsatt avgjøre selv?`, blind: `Overser at et nytt organ ikke endrer vaner eller lojalitet av seg selv.` },
      { se: `Fagfolk som har drevet fram egne prosjekter, opplever at initiativet deres må søke om lov. De som skal sitte i styret, må vurdere prosjekter i fag de ikke kan.`, grep: `Gi forslagsstillere veiledning og rask tilbakemelding. Gi styremedlemmene tid og støtte til å sette seg inn i sakene.`, blind: `Kan undervurdere at noen interessemotsetninger ikke lar seg løse med veiledning.` },
      { se: `Avdelingene mister kontroll over egne midler. Makten flytter seg til dem som utformer kriteriene, og til den som setter sakslisten.`, grep: `Kartlegg hvem som vinner og taper innflytelse. Forhandle fram sammensetning og kriterier som både store og små avdelinger kan leve med.`, blind: `Kan gjøre alt til spill og overse at de fleste ønsker en god løsning.` },
      { se: `For noen betyr forslaget at ledelsen ikke stoler på avdelingene. For andre er det et tegn på at fylkeskommunen endelig opptrer som én organisasjon.`, grep: `Fortell hvorfor: hva skal bli bedre for innbyggere og ansatte? Vis fram de første prosjektene som fikk fart fordi de ble løftet opp.`, blind: `Fortellinger uten reelle midler og mandat blir tomme ritualer.` }
    ],
    sort: [[`«Vi må få på plass mandat og terskelverdier før første møte.»`, 0], [`«Ildsjelene våre mister lysten når alt må søkes om.»`, 1], [`«Utdanning får fire plasser, og vi får én. Hvem tror du vinner?»`, 2], [`«Folk leser dette som at de ikke blir stolt på.»`, 3], [`«Styremedlemmene trenger tid til å sette seg inn i andres fag.»`, 1], [`«Den som skriver kriteriene, bestemmer i praksis.»`, 2]] },
  { id: 'l2', t: `Rent bord i Fylkeshuset`,
    text: `Fylkeshuset skal bygges om til aktivitetsbaserte arbeidsplasser. Ingen får fast plass. Cellekontorene forsvinner, og alle skal rydde pulten ved dagens slutt. Eiendomsavdelingen viser til at bare halvparten av plassene er i bruk en vanlig dag. Mange ansatte er opprørte.`,
    lenses: [
      { se: `Halvparten av arealet står tomt. Ny løsning gir lavere kostnader og plasserer folk etter oppgave i stedet for etter enhet.`, grep: `Lag tydelige regler for soner, booking og oppbevaring. Sørg for at teamene vet hvor de finner hverandre.`, blind: `Ser arealeffektivitet, men ikke hva kontoret betyr for konsentrasjon og tilhørighet.` },
      { se: `Folk mister et sted som er deres. Noen trenger ro for å gjøre jobben. Andre frykter at de aldri finner kollegene sine.`, grep: `Kartlegg hva ulike oppgaver krever. Involver ansatte i utformingen, og tilpass for dem som har særlige behov.`, blind: `Kan ende med så mange unntak at løsningen aldri blir gjennomført.` },
      { se: `Kontor har vært et tegn på rang. Ledere og seniorer taper mest. De tillitsvalgte har rett til medbestemmelse, og ledergruppa er ikke enig med seg selv.`, grep: `Avklar tidlig om ledere også gir fra seg kontor. Forhandle med de tillitsvalgte, og finn ut hva som kan byttes mot hva.`, blind: `Kan redusere en reell arbeidsmiljøsak til en kamp om privilegier.` },
      { se: `Kontoret med navneskilt forteller hvem du er. «Rent bord» kan leses som at ingen hører til, eller som at alle er likeverdige.`, grep: `La ledere gå foran og flytte først. Gi teamene hjemmesoner med egne kjennetegn, og lag nye ritualer for å møtes.`, blind: `Symbolske grep hjelper lite hvis det faktisk ikke finnes stillerom.` }
    ],
    sort: [[`«Målingene viser at vi betaler for dobbelt så mye areal som vi trenger.»`, 0], [`«Jeg klarer ikke å skrive vedtak i åpent landskap.»`, 1], [`«Legg merke til hvem som får beholde kontoret.»`, 2], [`«Navneskiltet på døra var beviset på at jeg hørte til her.»`, 3], [`«Vi trenger regler for booking og soner.»`, 0], [`«Direktøren bør flytte ut i landskapet først.»`, 3]] },
  { id: 'l3', t: `Retningslinjene ingen bruker`,
    text: `Skarvøy har vedtatt retningslinjer for bruk av KI. Alle forsøk skal meldes inn i et skjema med formål, risiko og forventet gevinst før de starter. Etter et halvt år er det meldt inn fire forsøk. Alle vet at det foregår langt flere.`,
    lenses: [
      { se: `Skjemaet ligger som et dokument på intranettet. Det er uklart hvem som skal godkjenne, og ingen følger opp om det brukes.`, grep: `Bygg innmeldingen inn i verktøyene folk allerede bruker. Avklar hvem som godkjenner, og sett en frist for svar.`, blind: `En bedre prosess hjelper ikke hvis folk ikke ser poenget med den.` },
      { se: `Ansatte er usikre på hva som regnes som et forsøk, og er redde for å gjøre feil. Skjemaet oppleves som en eksamen.`, grep: `Tilby veiledning og eksempler. Gjør det trygt å melde inn noe uferdig, og vis at de som melder, får hjelp og ikke kritikk.`, blind: `Kan overse at noen bevisst lar være å melde for å slippe innsyn.` },
      { se: `Innmelding gir andre innsyn og mulighet til å stoppe. Avdelinger som er kommet langt, har lite å vinne på å vise kortene.`, grep: `Gi noe tilbake for innmelding: støtte, midler eller plass i porteføljen. Få lederne til å etterspørre.`, blind: `Kan gjøre en læringsordning til et kontrollregime.` },
      { se: `Retningslinjene viser omverdenen at fylkeskommunen har kontroll på KI. Internt leses de som byråkrati som bremser de ivrige.`, grep: `Vis fram forsøk som lyktes fordi de ble meldt inn. Gi ordningen et språk som handler om læring og gevinster, og la toppledelsen bruke den selv.`, blind: `Gode historier erstatter ikke et skjema som faktisk er tungt å fylle ut.` }
    ],
    sort: [[`«Ingen vet hvem som egentlig skal godkjenne.»`, 0], [`«Folk er redde for å fylle ut feil.»`, 1], [`«Hvorfor skal vi gi andre innsyn i det vi holder på med?»`, 2], [`«Skjemaet er mest til for at revisjonen skal bli fornøyd.»`, 3], [`«Innmeldingen må ligge der folk allerede jobber.»`, 0], [`«De som melder inn, bør få noe igjen for det.»`, 2]] }
];

/* Prosjektsimulatoren. fx: f = framdrift, o = oppslutning, l = legitimitet, b = budsjett */
const SIM = {
  t: `Prosjektsimulatoren`,
  sub: `KI-assistent i saksbehandlingen`,
  intro: `Du leder innføringen av en KI-assistent for saksbehandlerne i Skarvøy fylkeskommune. Du har åtte måneder og ett valg hver måned. Fire målere følger deg: framdrift, oppslutning blant de ansatte, legitimitet hos ledelse og politikere, og budsjett. Gevinsten til slutt avhenger både av hva du leverer, og av om det blir brukt.`,
  start: { f: 10, o: 45, l: 55, b: 100 },
  names: { f: `Framdrift`, o: `Oppslutning`, l: `Legitimitet`, b: `Budsjett` },
  rounds: [
    { t: `Hvorfor skal vi dette?`, s: `Ellen Brekke har sagt at Skarvøy «må komme i gang med KI». Hva gjør du først?`, opts: [
      { t: `Bygger et behovsbilde: tall for saksbehandlingstid og samtaler med saksbehandlere om hva som stjeler tid.`, fx: { f: 8, o: 12, l: 5, b: -8 }, fb: `Du har et problem å løse, og folk kjenner seg igjen i det. Det tok tid, men du har noe å bygge på.`, k: `Kotter 1: forståelse for at det haster`, ok: 1 },
      { t: `Setter i gang en teknisk pilot med en leverandør med en gang.`, fx: { f: 18, o: -8, l: 3, b: -18 }, fb: `Du har noe å vise fram raskt. Saksbehandlerne hører om piloten på gangen.`, k: `Løsning før problem` },
      { t: `Venter på nasjonale veiledere før du gjør noe.`, fx: { f: 0, o: 0, l: -12, b: -2 }, fb: `Trygt, og stille. Ledelsen lurer på om det skjer noe.`, k: `Tapt tid` } ] },
    { t: `Hvem er med?`, s: `Du trenger en styringsgruppe. Hvem setter du sammen?`, opts: [
      { t: `Linjeledere fra utdanning og samferdsel, hovedtillitsvalgt, personvernombudet og en erfaren saksbehandler.`, fx: { f: 8, o: 12, l: 10, b: -5 }, fb: `Tyngre å kalle inn. Gruppa har til gjengjeld både makt, kunnskap og troverdighet.`, k: `Kotter 2: styrende koalisjon`, ok: 1 },
      { t: `Et rent IT-prosjekt. Det går raskest.`, fx: { f: 14, o: -10, l: -5, b: -4 }, fb: `Dere beveger dere fort. Ingen utenfor IT føler at dette er deres.`, k: `Koalisjon uten linje` },
      { t: `En ekstern konsulent leder arbeidet.`, fx: { f: 10, o: -5, l: 2, b: -30 }, fb: `Profesjonelt og dyrt. Kunnskapen går ut døra når kontrakten er slutt.`, k: `Lånt kompetanse` } ] },
    { t: `Hva er målet?`, s: `Styringsgruppa ber om et mål for prosjektet.`, opts: [
      { t: `«Tjue prosent kortere saksbehandlingstid i tre sakstyper. Spart tid brukes på vanskelige saker. Ingen mister jobben.»`, fx: { f: 8, o: 12, l: 8, b: -2 }, fb: `Målet er konkret, handler om effekt og svarer på det folk er redde for.`, k: `Kotter 3: visjon og strategi`, ok: 1 },
      { t: `«KI skal være tatt i bruk i åtti prosent av avdelingene innen året er omme.»`, fx: { f: 10, o: -6, l: 6, b: -2 }, fb: `Lett å måle og lett å rapportere. Du har invitert til å telle bruk i stedet for nytte.`, k: `Målforskyvning` },
      { t: `Ingen fast mål. Vi lar det vokse fram.`, fx: { f: 2, o: -3, l: -8, b: -1 }, fb: `Fleksibelt, men styringsgruppa vet ikke hva den styrer mot.`, k: `Uten retning` } ] },
    { t: `Hvordan forteller du det?`, s: `Det er tid for å informere de seksti saksbehandlerne.`, opts: [
      { t: `Avdelingsvise samtaler ledet av nærmeste leder, med tid til spørsmål. Du er med.`, fx: { f: 8, o: 14, l: 3, b: -6 }, fb: `Spørsmålene var andre enn du trodde. Flere lurte på hvem som har ansvaret når assistenten tar feil.`, k: `Kotter 4: kommuniser visjonen`, ok: 1 },
      { t: `En artikkel på intranettet og en e-post til alle.`, fx: { f: 8, o: -4, l: 0, b: -1 }, fb: `Informasjonen er sendt. Hva som er forstått, vet du ikke.`, k: `Fattig kanal` },
      { t: `Venter med å si noe til løsningen er klar.`, fx: { f: 8, o: -14, l: -3, b: 0 }, fb: `Ryktene kom før deg: «De skal erstatte oss med en robot.»`, k: `Jungeltelegrafen` } ] },
    { t: `Skepsisen`, s: `Per-Olav og flere erfarne saksbehandlere sier at assistenten gjør feil, og at de ikke vil stå ansvarlige for vedtak de ikke stoler på.`, opts: [
      { t: `Gjør dem til fagvakter: de tester, melder feil og er med på å bestemme hva assistenten skal brukes til. Ansvaret avklares skriftlig.`, fx: { f: 12, o: 14, l: 4, b: -8 }, fb: `Skepsisen ble kvalitetssikring. Tre feiltyper ble rettet før noen innbygger ble berørt.`, k: `Kotter 5: fjern hindringer`, ok: 1 },
      { t: `Vedtar at bruk er obligatorisk fra neste måned.`, fx: { f: 14, o: -18, l: -4, b: -2 }, fb: `Bruken går opp i loggene. I praksis åpner folk assistenten og skriver som før.`, k: `Tvang` },
      { t: `Lar de skeptiske slippe.`, fx: { f: 3, o: -2, l: -3, b: 0 }, fb: `Roen senker seg. Du har også mistet dem som kunne funnet feilene.`, k: `Unngåelse` } ] },
    { t: `Tidlige resultater`, s: `Piloten i én avdeling viser 25 prosent kortere saksbehandlingstid i enkle saker, og ingen effekt i komplekse.`, opts: [
      { t: `Viser fram resultatene åpent, også det som ikke virket, og lar pilotavdelingen fortelle selv.`, fx: { f: 14, o: 10, l: 12, b: -3 }, fb: `Troverdig. To avdelinger ber om å få være neste.`, k: `Kotter 6: kortsiktige gevinster`, ok: 1 },
      { t: `Ruller ut til alle avdelinger med en gang.`, fx: { f: 22, o: -10, l: 2, b: -28 }, fb: `Alle har tilgang. Brukerstøtten drukner, og de komplekse sakene gir de første klagene.`, k: `For fort` },
      { t: `Forlenger piloten på ubestemt tid for å være sikker.`, fx: { f: 0, o: -3, l: -10, b: -8 }, fb: `Piloten blir værende en pilot. Styringsgruppa begynner å miste interessen.`, k: `Pilotsyke` } ] },
    { t: `Feilen`, s: `Assistenten foreslo feil lovhjemmel i et vedtak som ble sendt ut. Lokalavisen ringer.`, opts: [
      { t: `Åpenhet: du forklarer hva som skjedde, retter vedtaket og innfører en kontroll av alle lovhenvisninger.`, fx: { f: 0, o: 8, l: 8, b: -5 }, fb: `Saken ble en notis. Internt så folk at feil blir håndtert og ikke straffet.`, k: `Kotter 7: konsolider gjennom læring`, ok: 1 },
      { t: `Skrur av assistenten for alle inntil videre.`, fx: { f: -20, o: -5, l: -6, b: -3 }, fb: `Risikoen er borte. Det er framdriften også, og de som var imot, fikk rett.`, k: `Overreaksjon` },
      { t: `Toner det ned som en enkeltstående glipp.`, fx: { f: 4, o: -10, l: -14, b: 0 }, fb: `Avisen fant to tilfeller til. Nå handler saken om åpenhet og ikke om teknologi.`, k: `Tapt tillit` } ] },
    { t: `Hva nå?`, s: `Prosjektperioden er over. Hva foreslår du for styringsgruppa?`, opts: [
      { t: `Overføring til linja: en navngitt eier, opplæring i introduksjonsprogrammet og måling av gevinster hvert kvartal.`, fx: { f: 14, o: 10, l: 8, b: -6 }, fb: `Assistenten er en del av måten Skarvøy jobber på, og noen har ansvaret for at gevinsten hentes ut.`, k: `Kotter 8: forankre`, ok: 1 },
      { t: `Erklærer prosjektet ferdig og oppløser teamet.`, fx: { f: 8, o: -8, l: 2, b: 0 }, fb: `Kake i kantina. Om et halvt år bruker halvparten gamle maler igjen.`, k: `Seier for tidlig` },
      { t: `Starter et nytt prosjekt for versjon to.`, fx: { f: 8, o: -6, l: -4, b: -22 }, fb: `Nytt prosjekt, nye penger. Gevinstene fra det første er ikke hentet ut.`, k: `Neste løsning` } ] }
  ],
  ends: {
    stanset: [`Prosjektet ble stanset`, `Styringsgruppa trakk støtten. Uten legitimitet hos ledelse og politikere hjelper det ikke hva du har levert.`],
    hoy: [`Gevinstene hentes ut`, `Assistenten er levert, den brukes, og noen eier gevinsten. Dette er utfallet de færreste digitaliseringsprosjekter når.`],
    middels: [`Tatt i bruk, men halvveis`, `Løsningen virker, og en del bruker den. Mye av gevinsten ligger igjen på bordet.`],
    ubrukt: [`Levert, men lite brukt`, `Systemet står der. Folk jobber rundt det. Framdrift uten oppslutning gir ingen gevinst.`],
    lite: [`Kom aldri ordentlig i gang`, `Folk er med, men det er lite å være med på. Oppslutning uten leveranse gir heller ingen gevinst.`]
  },
  moral: `Gevinst er framdrift ganger oppslutning. Et system ingen bruker, gir ingen gevinst, uansett hvor raskt det ble levert.`
};

/* Eksamenstrening: drøftingsoppgaver med egenkontroll */
const EXAM_STEPS = [`Avklar begreper og avgrens oppgaven.`, `Presenter teorien du vil bruke, med opphav.`, `Bruk teorien på konkrete eksempler.`, `Sett perspektiver mot hverandre. Hva taler for, og hva taler imot?`, `Konkluder nyansert, og si hva konklusjonen avhenger av.`];
const EXAM = [
  { f: 'f1', q: `Gjør rede for hva som kjennetegner en organisasjon. Drøft deretter på hvilke måter offentlige organisasjoner skiller seg fra private.`, must: [`Definisjonen med de fire leddene: sosialt, system, bevisst konstruert, mål`, `Formelle og uformelle trekk`, `Politisk styring og mange mål`, `Rettsstatsverdier: likebehandling, åpenhet, etterprøvbarhet`, `Nyansering: forskjellene er gradsforskjeller, og mange private har også sammensatte mål`] },
  { f: 'f2', q: `Drøft fordeler og ulemper ved mål- og resultatstyring i en fylkeskommune.`, must: [`Målenes funksjoner: motivere, styre, legitimere, evaluere`, `Fordeler: retning, ansvarliggjøring, frihet i virkemidler`, `Ulemper: målforskyvning, rapportering, det som ikke kan telles`, `Særtrekk ved offentlig sektor: vage og motstridende mål`, `Alternativer eller supplement, som tillitsbasert styring`] },
  { f: 'f3', q: `En fylkeskommune vil samle alle digitaliseringsressurser i én sentral enhet. Drøft forslaget ved hjelp av teori om organisasjonsstruktur.`, must: [`Gruppering etter funksjon mot marked, med fordeler og ulemper`, `Sentralisering mot desentralisering`, `Koordineringsmekanismer og integrasjonstiltak`, `Mintzberg: teknostruktur, støttestab og møtet med profesjonelle byråkratier`, `Kontingens: løsningen avhenger av oppgaver og omgivelser`] },
  { f: 'f4', q: `Gjør rede for Scheins tre kulturnivåer. Drøft om ledere kan endre en organisasjonskultur.`, must: [`Artefakter, uttrykte verdier og grunnleggende antakelser`, `Kultur som noe organisasjonen har, mot noe den er`, `Scheins mekanismer: oppmerksomhet, krisereaksjoner, rollemodeller, belønning`, `Subkulturer og profesjoner som begrensning`, `Tidsperspektiv og et konkret eksempel`] },
  { f: 'f5', q: `Drøft hvordan makt kan utøves i en beslutningsprosess om valg av nytt fagsystem.`, must: [`Maktbegrepet og maktbasene`, `Avhengighet og kontroll over ressurser og usikkerhet`, `Maktens tre ansikter: beslutning, dagsorden, bevissthet`, `Koalisjoner og interessenter, også leverandøren`, `Legitim og illegitim maktbruk, og hva åpenhet betyr`] },
  { f: 'f6', q: `Mange offentlige virksomheter har på kort tid vedtatt KI-strategier. Drøft hvordan dette kan forklares.`, must: [`Tekniske og institusjonelle omgivelser`, `Legitimitet og rasjonaliserte myter`, `Tvangsmessig, mimetisk og normativ isomorfi`, `Dekobling mellom prat og praksis`, `Motforklaring: reelle behov og nytte, og Røviks oversettelse`] },
  { f: 'f7', q: `Drøft hvordan innføring av KI-verktøy kan påvirke motivasjonen til saksbehandlere.`, must: [`Jobbkarakteristikamodellen og de fem dimensjonene`, `Indre og ytre motivasjon, selvbestemmelsesteori`, `Forventningsteori som forklaring på bruk og ikke-bruk`, `Rettferdighet i fordeling og prosess`, `Medvirkning og jobbdesign som det avgjørende`] },
  { f: 'f8', q: `En virksomhet skal informere om en omorganisering. Drøft valg av kommunikasjonskanaler, og hva som kan gå galt.`, must: [`Kommunikasjonsprosessen og støy`, `Medierikhet og match mellom kanal og budskap`, `Filtrering og forvrengning i hierarkiet`, `Uformell kommunikasjon og rykter`, `Toveis kommunikasjon og nærmeste leders rolle`] },
  { f: 'f9', q: `Sammenlign den rasjonelle beslutningsmodellen med søppelbøttemodellen. Drøft hvilken som best beskriver beslutninger om digitalisering.`, must: [`Forutsetningene i den rasjonelle modellen`, `Begrenset rasjonalitet og satisfiering`, `Søppelbøttemodellens fire strømmer og organiserte anarkier`, `Et eksempel der løsningen kom før problemet`, `Nyansering: modellene belyser ulike sider, og utredningskrav trekker mot det rasjonelle`] },
  { f: 'f10', q: `Drøft hvorfor vellykkede piloter i offentlig sektor ofte ikke blir skalert.`, must: [`Innovasjon som nytt, nyttig og nyttiggjort`, `Rogers: egenskaper som fremmer spredning`, `Taus kunnskap og kunnskapsoverføring`, `Utnytting mot utforsking, og hvem som eier skaleringen`, `Tiltak: eierskap i linja, finansiering, læringsarenaer`] },
  { f: 'f11', q: `Gjør rede for Kotters åtte trinn. Drøft styrker og svakheter ved modellen som verktøy for digital endring i offentlig sektor.`, must: [`De åtte trinnene i riktig rekkefølge`, `Styrker: oversikt, vekt på forankring og kortsiktige gevinster`, `Svakheter: lineær, toppstyrt, svakt empirisk grunnlag`, `Offentlig sektor: politisk styring, medbestemmelse, profesjoner`, `Supplement: motstand som informasjon, kontinuerlig endring, gevinstrealisering`] },
  { f: 'f12', q: `Drøft påstanden: «God ledelse handler om å tilpasse seg situasjonen.»`, must: [`Trekk-, atferds- og situasjonsteorier`, `Situasjonsbestemt ledelse og kritikken av den`, `Transformasjons- og transaksjonsledelse`, `Ledelsesromantikk: hvor mye betyr lederen?`, `Offentlig kontekst: krysspress og ledelse uten linjemyndighet`] },
  { f: 'f1', q: `Analyser en mislykket systeminnføring med Bolman og Deals fire rammer. Hva ser hver ramme, og hva ville du gjort?`, must: [`Strukturell: roller, ansvar, prosess`, `Human resource: kompetanse, behov, medvirkning`, `Politisk: interesser, makt, ressurser`, `Symbolsk: mening, fortellinger, kultur`, `Sammenstilling: hva rammene til sammen gir, som ingen gir alene`] }
];

/* Nivåer: [xp, tittel] */
const LEVELS = [[0, `Sommervikar`], [100, `Lærling`], [250, `Konsulent`], [500, `Rådgiver`], [900, `Seniorrådgiver`], [1400, `Fagleder`], [2100, `Seksjonsleder`], [3000, `Avdelingsdirektør`], [4200, `Assisterende fylkesdirektør`], [6000, `Fylkeskommunedirektør`]];

/* Merker: [id, navn, beskrivelse, ikon] */
const BADGES = [
  ['start', `Første dag på jobb`, `Fullfør din første aktivitet.`, 'key'],
  ['f1', `Nøkkelkortet`, `Lys opp alle vinduene i 1. etasje.`, 'card'],
  ['husvarm', `Husvarm`, `Besøk alle tolv etasjene.`, 'lift'],
  ['etasje', `Lys i alle vinduer`, `Fullfør alt på én etasje.`, 'window'],
  ['weber', `Weber ville nikket`, `Alt riktig på etasjeprøven om struktur.`, 'grid'],
  ['isfjell', `Isfjelldykker`, `Alt riktig på etasjeprøven om kultur.`, 'berg'],
  ['boette', `Søppelbøttemester`, `Alt riktig på etasjeprøven om beslutninger.`, 'bin'],
  ['dobbel', `Dobbeltkrets`, `Ta en etasjeprøve på nytt, og forbedre resultatet.`, 'loop'],
  ['kotter', `Åtte av åtte`, `Sett Kotters åtte trinn i riktig rekkefølge på første forsøk.`, 'steps'],
  ['briller', `Fire briller`, `Fullfør alle brillecasene.`, 'glasses'],
  ['sim', `Prosjektleder`, `Fullfør Prosjektsimulatoren.`, 'flag'],
  ['gevinst', `Gevinstrealisert`, `Oppnå minst 65 i gevinst i Prosjektsimulatoren.`, 'chart'],
  ['uke', `Ukesvis`, `Lær sju dager på rad.`, 'aurora'],
  ['maaned', `Månedsverk`, `Lær tretti dager på rad.`, 'sun'],
  ['felt', `Feltarbeider`, `Gjennomfør fem feltoppdrag.`, 'boots'],
  ['tenker', `Refleksjonsnotatet`, `Skriv fem refleksjoner.`, 'pen'],
  ['arkiv', `Arkivnøkkelen`, `Få femti begreper til å sitte.`, 'box'],
  ['kombo', `Ti på rad`, `Svar riktig ti ganger på rad.`, 'bolt'],
  ['verktoy', `Verktøymaker`, `Bruk tre verktøy fra verktøykassa.`, 'wrench'],
  ['kasse', `Full verktøykasse`, `Bruk alle fem verktøyene.`, 'sliders'],
  ['saker', `Saksbehandler`, `Fullfør seks caser.`, 'folder'],
  ['eksamen', `Eksamensklar`, `Gjennomfør seks drøftingsoppgaver.`, 'cap'],
  ['tak', `Takterrassen`, `Bestå alle tolv etasjeprøvene.`, 'roof'],
  ['huset', `Hele huset lyser`, `Lys opp alle 72 vinduene.`, 'house']
];

const LIT = [
  `Jacobsen, D.I. og Thorsvik, J. (2025). Hvordan organisasjoner fungerer. 6. utgave. Fagbokforlaget.`,
  `Christensen, T., Egeberg, M., Lægreid, P., Roness, P.G. og Røvik, K.A. Organisasjonsteori for offentlig sektor. Universitetsforlaget.`,
  `Bolman, L.G. og Deal, T.E. Nytt perspektiv på organisasjon og ledelse. Gyldendal.`,
  `Mintzberg, H. (1979). The Structuring of Organizations. Prentice-Hall.`,
  `Schein, E.H. Organisasjonskultur og ledelse.`,
  `Røvik, K.A. (2007). Trender og translasjoner. Universitetsforlaget.`,
  `Jacobsen, D.I. Organisasjonsendringer og endringsledelse. Fagbokforlaget.`,
  `Strand, T. Ledelse, organisasjon og kultur. Fagbokforlaget.`,
  `Kotter, J.P. (1996). Leading Change. Harvard Business School Press.`,
  `March, J.G. og Olsen, J.P. (1989). Rediscovering Institutions. Free Press.`
];

