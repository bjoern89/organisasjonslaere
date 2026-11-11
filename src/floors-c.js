/* Organisasjonslære – faginnhold, etasje 7–9 */

F.push({
  n: 7, id: 'f7', zone: 2,
  t: `Motivasjon`,
  k: `Motivasjon og ytelse`,
  intro: `Hvorfor yter noen mer enn de må, mens andre gjør akkurat det som står i stillingsbeskrivelsen? Motivasjon handler mindre om lønn enn mange tror, og mer om hvordan arbeidet er utformet.`,
  rooms: [
    { id: 'f7r1', t: `Behov`, cards: [
      { h: `Behovsteoriene`,
        b: `**Maslow** ordnet menneskelige behov i fem nivåer, fra fysiologiske behov og trygghet via sosiale behov og anerkjennelse til selvrealisering. Tanken om at lavere behov må dekkes først, har fått svak støtte i forskningen. Arven er likevel viktig: mennesker søker mer enn lønn. **McClelland** pekte på tre lærte behov som varierer mellom personer: prestasjon, makt og tilhørighet.`,
        ex: `Nora drives av å løse vanskelige problemer. Per-Olav trives best når teamet fungerer. Samme oppgave motiverer dem ulikt.` },
      { h: `Herzbergs to faktorer`,
        b: `**Herzberg** fant at det som skaper misnøye, er noe annet enn det som skaper motivasjon. **Hygienefaktorer** som lønn, arbeidsforhold, trygghet og personalpolitikk gir misnøye når de er dårlige, men ikke motivasjon når de er gode. **Motivasjonsfaktorer** som prestasjon, anerkjennelse, ansvar, vekst og selve arbeidet skaper engasjement. Fravær av misnøye er altså ikke det samme som motivasjon.`,
        ex: `Nye skjermer og bedre kantine fjerner irritasjon. Det gjør ingen stolte av jobben. At saksbehandleren får ansvar for å forbedre sin egen arbeidsprosess, kan gjøre det.` },
      { ty: 'sort', q: `Hygienefaktor eller motivasjonsfaktor?`, cats: [`Hygienefaktor`, `Motivasjonsfaktor`],
        items: [[`Lønn`, 0], [`Anerkjennelse for godt arbeid`, 1], [`Fysisk arbeidsmiljø`, 0], [`Ansvar for egne oppgaver`, 1], [`Trygg ansettelse`, 0], [`Mulighet til faglig vekst`, 1]],
        why: `Hygienefaktorene ligger rundt arbeidet og hindrer misnøye. Motivasjonsfaktorene ligger i arbeidet og skaper engasjement.` },
      { h: `Ønsket om å tjene fellesskapet`,
        b: `Forskning på **public service motivation** viser at mange i offentlig sektor motiveres av å bidra til samfunnet og hjelpe andre. Motivasjonen er sterkest når den ansatte ser hvordan eget arbeid kommer innbyggerne til gode. Den svekkes når systemer og rapportering skygger for formålet.`,
        ex: `Skjemateamet får se et opptak av en elev som søker om tilrettelegging på to minutter. Før tok det tjue. Dagen etter melder tre seg frivillig til neste skjema.`,
        src: `Begrepet er kjent fra Perry og Wise (1990).` },
      { ty: 'tf', q: `Ifølge Herzberg blir medarbeidere motiverte så snart kildene til misnøye er fjernet.`, sant: false,
        why: `Å fjerne misnøye gir en nøytral tilstand. Motivasjon krever at motivasjonsfaktorene er til stede.` }
    ]},
    { id: 'f7r2', t: `Forventninger, rettferdighet og mål`, cards: [
      { h: `Forventningsteori`,
        b: `**Vroom** forklarer motivasjon som et regnestykke i hodet. Tror jeg at innsats gir resultat? Det er **forventning**. Tror jeg at resultatet gir en belønning? Det er **instrumentalitet**. Betyr belønningen noe for meg? Det er **valens**. Er ett av leddene null, blir motivasjonen null. Teorien er en nyttig sjekkliste når folk ikke tar i bruk noe nytt.`,
        ex: `Saksbehandlerne bruker ikke KI-assistenten. Tror de at de kan mestre den? Tror de at bruk gir bedre eller raskere vedtak? Og er spart tid et gode, eller betyr det bare flere saker?` },
      { h: `Rettferdighet`,
        b: `**Adams** viste at folk sammenligner forholdet mellom egen innsats og eget utbytte med andres. Opplevd urettferdighet skaper spenning. Den som føler seg underbelønnet, kan redusere innsatsen, kreve mer eller slutte. Senere forskning skiller mellom rettferdig **fordeling** og rettferdig **prosess**. Folk tåler et dårlig utfall bedre når prosessen var åpen, og de ble hørt.`,
        ex: `To avdelinger får tilgang til nye verktøy, tre må vente. De som venter, godtar det lettere når kriteriene var kjente på forhånd, og de fikk uttale seg.` },
      { ty: 'mc', q: `En saksbehandler sier: «Jeg klarer nok å lære verktøyet, og det gir raskere vedtak. Men raskere vedtak betyr bare at jeg får flere saker.» Hvilket ledd i forventningsteorien svikter?`,
        a: [`Valens: utbyttet har ingen verdi for henne`, `Forventning: hun tror ikke hun mestrer`, `Instrumentalitet: hun tror ikke bruk gir resultat`, `Ingen av leddene svikter`],
        why: `Hun tror på mestring og på resultatet. Det er verdien av utfallet som mangler.` },
      { h: `Målsetting og selvbestemmelse`,
        b: `**Locke og Latham** fant at spesifikke og krevende mål gir høyere ytelse enn «gjør ditt beste», så lenge målene er akseptert og folk får tilbakemelding. **Deci og Ryan** viser i selvbestemmelsesteorien at indre motivasjon næres av tre behov: **autonomi**, **kompetanse** og **tilhørighet**. Kontrollerende belønninger kan svekke den indre motivasjonen for oppgaver folk i utgangspunktet liker.`,
        ex: `Et team får målet «halver ventetiden på skyssvedtak innen jul» og frihet til å velge metode. Målet er spesifikt og krevende. Friheten gir autonomi.` },
      { ty: 'multi', q: `Hvilke tre behov nærer indre motivasjon ifølge selvbestemmelsesteorien?`,
        ok: [`Autonomi`, `Kompetanse`, `Tilhørighet`],
        no: [`Belønning`, `Kontroll`, `Status`],
        why: `Deci og Ryan peker på autonomi, kompetanse og tilhørighet som grunnleggende psykologiske behov.` }
    ]},
    { id: 'f7r3', t: `Jobben som motivasjonskilde`, cards: [
      { h: `Jobbkarakteristikamodellen`,
        b: `**Hackman og Oldham** peker på fem trekk ved en jobb som skaper indre motivasjon. **Variasjon** i ferdigheter, **oppgaveidentitet**, altså å gjøre noe helt fra start til slutt, og **oppgavens betydning** for andre gir opplevd mening. **Autonomi** gir opplevd ansvar. **Tilbakemelding** fra arbeidet gir kunnskap om resultatene. Modellen virker sterkest for dem som ønsker å utvikle seg i jobben.`,
        fig: 'jobb',
        ex: `Før registrerte saksbehandleren søknader hele dagen. Etter automatiseringen følger hun vanskelige saker fra start til slutt og ser utfallet for eleven. Variasjon, identitet og betydning økte samtidig.` },
      { h: `Teknologi kan berike eller tømme jobber`,
        b: `Digitalisering endrer jobbinnhold. Automatisering kan fjerne rutine og gi rom for skjønn og kontakt. Den kan også fjerne de meningsfulle delene og etterlate kontroll av maskinens arbeid. Utfallet bestemmes av **hvordan jobben utformes rundt teknologien**. Arbeidsmiljøloven krever at ansatte informeres, får opplæring og får medvirke når systemer for planlegging og gjennomføring av arbeidet utformes.`,
        ex: `Skal KI-assistenten skrive utkast som saksbehandleren vurderer? Eller skal saksbehandleren legge inn data som KI-en vurderer? Teknologien er den samme. Jobbene blir helt ulike.` },
      { ty: 'mc', q: `Hva avgjør mest om automatisering gjør en jobb mer eller mindre motiverende?`,
        a: [`Hvordan de gjenværende oppgavene settes sammen`, `Hvor avansert teknologien er`, `Hvor mye tid som spares`, `Hvilken leverandør som velges`],
        why: `Teknologien gir muligheter. Jobbdesignet avgjør om resultatet blir mer mening eller mer kontrollarbeid.` },
      { h: `Den norske arven`,
        b: `På 1960-tallet gjennomførte **Einar Thorsrud** og kolleger forsøk i norsk industri sammen med partene i arbeidslivet. De formulerte **psykologiske jobbkrav**: behov for innhold og variasjon, for å lære, for å treffe egne beslutninger, for anseelse, for sammenheng mellom arbeidet og omverdenen, og for en ønskelig framtid. Arbeidet la grunnlag for selvstyrte grupper og for den norske tradisjonen for medvirkning.`,
        ex: `Når tillitsvalgte og saksbehandlere sitter i prosjektgruppa for nytt fagsystem, er det denne tradisjonen i praksis. Sosioteknisk tenkning sier at teknologi og arbeidsorganisering må utformes sammen.` },
      { ty: 'tf', q: `Sosioteknisk tenkning sier at teknologien bør velges først, og at arbeidsorganiseringen tilpasses etterpå.`, sant: false,
        why: `Kjernen er at det tekniske og det sosiale systemet må utformes sammen for å gi både gode resultater og gode jobber.` }
    ]}
  ],
  quiz: [
    { ty: 'mc', q: `Hva sier Herzbergs tofaktorteori om lønn?`,
      a: [`Dårlig lønn skaper misnøye, men god lønn gir ikke varig motivasjon`, `Lønn er den sterkeste motivasjonsfaktoren`, `Lønn har ingen betydning for arbeidstakere`, `Lønn motiverer bare ledere`],
      why: `Lønn er en hygienefaktor. Den må være god nok, men den skaper ikke engasjement alene.` },
    { ty: 'match', q: `Koble navn og teori.`,
      pairs: [[`Herzberg`, `Hygiene- og motivasjonsfaktorer`], [`Vroom`, `Forventningsteori`], [`Adams`, `Rettferdighetsteori`], [`Deci og Ryan`, `Selvbestemmelsesteori`], [`Hackman og Oldham`, `Jobbkarakteristikamodellen`]],
      why: `Fem av de mest brukte motivasjonsteoriene i faget.` },
    { ty: 'tf', q: `Ifølge forventningsteorien blir motivasjonen lav hvis personen ikke tror innsatsen vil gi resultat, selv om belønningen er attraktiv.`, sant: true,
      why: `Leddene multipliseres. Er forventningen null, hjelper det ikke at belønningen er stor.` },
    { ty: 'mc', q: `Hvilke tre trekk ved jobben gir opplevd mening hos Hackman og Oldham?`,
      a: [`Variasjon, oppgaveidentitet og oppgavens betydning`, `Autonomi, lønn og trygghet`, `Tilbakemelding, status og ansvar`, `Kontroll, belønning og fellesskap`],
      why: `De tre første dimensjonene gir mening. Autonomi gir ansvar, og tilbakemelding gir kunnskap om resultatene.` },
    { ty: 'gap', q: `Hos Deci og Ryan er de tre grunnleggende behovene autonomi, kompetanse og ___.`,
      a: [`tilhørighet`, `belønning`, `status`, `trygghet`],
      why: `Behovet for å høre til og bety noe for andre er det tredje.` },
    { ty: 'mc', q: `To team gjør samme jobb. Det ene får nye verktøy og kurs, det andre ikke, uten forklaring. Det andre teamet reduserer innsatsen. Hvilken teori forklarer det best?`,
      a: [`Rettferdighetsteori`, `Maslows behovshierarki`, `Målsettingsteori`, `Tofaktorteori`],
      why: `Folk sammenligner seg med andre og justerer innsatsen når forholdet oppleves som urettferdig.` },
    { ty: 'tf', q: `Målsettingsteorien sier at «gjør så godt du kan» gir høyere ytelse enn spesifikke og krevende mål.`, sant: false,
      why: `Locke og Latham fant det motsatte, så lenge målene er akseptert og følges av tilbakemelding.` },
    { ty: 'mc', q: `Hva menes med at ytre belønning kan fortrenge indre motivasjon?`,
      a: [`Kontrollerende belønninger kan svekke lysten til å gjøre noe man i utgangspunktet liker`, `Lønn og indre motivasjon er alltid det samme`, `Indre motivasjon finnes bare i frivillig arbeid`, `Belønning virker bare når den er hemmelig`],
      why: `Når belønningen oppleves som kontroll, flyttes begrunnelsen for innsatsen fra oppgaven til belønningen.` },
    { ty: 'multi', q: `Hva hører til de psykologiske jobbkravene i tradisjonen etter Thorsrud?`,
      ok: [`Å kunne lære noe i jobben`, `Å kunne ta egne beslutninger`, `Variasjon og innhold i arbeidet`],
      no: [`Høyest mulig lønn`, `Flest mulig regler`],
      why: `Jobbkravene handler om innhold, læring, selvbestemmelse, anseelse, sammenheng og framtid.` }
  ],
  kase: {
    t: `Assistenten ingen bruker`,
    intro: `Skarvøy har rullet ut en KI-assistent til saksbehandlerne i utdanningsavdelingen. Etter to måneder bruker ni av førti den jevnlig. Kristoffer Dahl, direktør for utdanning, vil ha opp bruken.`,
    steps: [
      { s: `Kristoffer foreslår en bonusordning: gavekort til dem som bruker assistenten mest. Hva råder du til?`,
        opts: [
          [`Jeg støtter forslaget. Belønning virker.`, 0, `Du får klikk, men neppe god bruk. Belønning for å bruke et verktøy inviterer til målforskyvning og kan svekke den faglige motivasjonen.`],
          [`Jeg foreslår å finne ut hvorfor de ikke bruker den først, med forventningsteorien som sjekkliste.`, 2, `Sterkt. Du stiller diagnose før du behandler. Mestring, nytte og verdi er tre ulike problemer med tre ulike løsninger.`],
          [`Jeg foreslår å gjøre bruken obligatorisk.`, 0, `Tvang gir etterlevelse på papiret. Den som ikke tror verktøyet gir bedre vedtak, vil bruke det minst mulig.`]
        ],
        th: `Vroom: forventning, instrumentalitet og valens. Finn ut hvilket ledd som svikter, før du velger tiltak.` },
      { s: `Samtalene viser to ting. Mange er usikre på om de bruker assistenten riktig. Og flere sier: «Hvis jeg blir raskere, får jeg bare flere saker.» Hva gjør du?`,
        opts: [
          [`Jeg setter opp kurs for alle.`, 1, `Kurs svarer på mestringen. Det svarer ikke på frykten for at gevinsten blir til høyere arbeidspress.`],
          [`Jeg kombinerer praktisk sidemannsopplæring med en avtale med ledelsen: spart tid det første året skal brukes til de vanskelige sakene og til fagutvikling.`, 2, `Sterkt. Du styrker forventningen om mestring og gjør utbyttet verdt noe for den enkelte. Avtalen gjør også fordelingen rettferdig.`],
          [`Jeg forklarer at effektivisering er nødvendig, og at alle må bidra.`, 0, `Du bekrefter bekymringen. Innsats lønner seg ikke for den enkelte.`]
        ],
        th: `Rettferdighetsteori og forventningsteori peker samme vei: folk yter når utbyttet oppleves som verdt innsatsen, og fordelingen som rettferdig.` },
      { s: `Bruken øker. Noen erfarne saksbehandlere sier at jobben er blitt kjedeligere: «Nå kontrollerer jeg bare det maskinen har skrevet.» Hva gjør du?`,
        opts: [
          [`Jeg ser på hvordan oppgavene er satt sammen, og foreslår at saksbehandlerne følger komplekse saker helt fram og er med på å forbedre assistenten.`, 2, `Sterkt. Du bruker jobbkarakteristikamodellen: mer oppgaveidentitet, betydning og autonomi. Medvirkning i utformingen gir også eierskap.`],
          [`Jeg minner dem om at de nå sparer tid.`, 0, `Spart tid er ingen motivasjonsfaktor i seg selv. Du svarer ikke på tapet av mening.`],
          [`Jeg foreslår lønnstillegg for dem som mistrives.`, 1, `Lønn er en hygienefaktor. Den kan dempe misnøye, men gjør ikke arbeidet mer meningsfullt.`]
        ],
        th: `Hackman og Oldham: motivasjon bygges inn i jobben gjennom variasjon, helhet, betydning, autonomi og tilbakemelding.` }
    ],
    out: [
      `Bruken gikk opp i statistikken og ned i virkeligheten. Prøv igjen, og finn ut hva som faktisk holder folk tilbake.`,
      `Flere bruker assistenten. Se en gang til på hva som skjer med jobben når maskinen tar rutinen.`,
      `Tre av fire bruker assistenten daglig, og de erfarne saksbehandlerne er med på å forbedre den. Du behandlet motivasjon som et designspørsmål.`
    ]
  },
  refl: `Bruk Jobbdesign-måleren i verktøykassa på din egen stilling. Hvilken av de fem dimensjonene skårer lavest, og hva kunne du eller lederen din gjort med den?`,
  mission: `Spør to kolleger hva som ga dem mest arbeidsglede forrige uke. Sorter svarene som hygienefaktorer eller motivasjonsfaktorer.`,
  read: [`Jacobsen og Thorsvik, Hvordan organisasjoner fungerer: kapitlet om motivasjon`, `Hackman og Oldham (1980), Work Redesign`, `Kuvaas og Dysvik, Lønnsomhet gjennom menneskelige ressurser`]
});

F.push({
  n: 8, id: 'f8', zone: 2,
  t: `Kommunikasjon`,
  k: `Kommunikasjon`,
  intro: `Det meste som går galt i organisasjoner, blir forklart med dårlig kommunikasjon. Her lærer du hva som skjer mellom sender og mottaker, og hvorfor kanalvalget ofte betyr mer enn ordene.`,
  rooms: [
    { id: 'f8r1', t: `Fra sender til mottaker`, cards: [
      { h: `Kommunikasjonsprosessen`,
        b: `Kommunikasjon er overføring av informasjon og mening. En **sender** koder et budskap og velger en **kanal**. **Mottakeren** dekoder og tolker det ut fra egne erfaringer. **Tilbakemelding** viser om budskapet ble forstått. Underveis finnes **støy**: fagspråk, tidspress, forstyrrelser og forutinntatte oppfatninger. Meningen sitter derfor ikke i meldingen. Den skapes hos mottakeren.`,
        fig: 'komm',
        ex: `IT skriver: «Vi migrerer til ny tenant i uke 42.» Skolene leser: «Noe teknisk som ikke angår oss.» Mandag i uke 42 virker ikke innloggingen for 900 lærere.` },
      { h: `Informasjon forandrer seg på veien`,
        b: `Informasjon som går **nedover** i hierarkiet, blir ofte forkortet og mister begrunnelsen. Informasjon som går **oppover**, blir **filtrert**: dårlige nyheter pyntes på eller holdes tilbake, særlig når budbringeren frykter følgene. Jo flere ledd, jo større forvrengning. Ledere som bare får gode nyheter, bør bli bekymret.`,
        ex: `Prosjektrapporten viser grønt i tre måneder. Utviklerne har visst siden april at integrasjonen ikke blir ferdig. Hvert ledd oppover gjorde rødt litt mer gult.` },
      { ty: 'mc', q: `Prosjektet rapporterer grønt i tre måneder, selv om utviklerne vet at det er forsinket. Hva kalles fenomenet?`,
        a: [`Filtrering`, `Medierikhet`, `Gruppepolarisering`, `Dekoding`],
        why: `Dårlige nyheter siles bort på vei oppover i hierarkiet.` },
      { h: `Formell og uformell kommunikasjon`,
        b: `**Formell** kommunikasjon følger linje og møtestruktur. **Uformell** kommunikasjon går gjennom personlige nettverk og er ofte raskere. Jungeltelegrafen fyller tomrommet når den formelle informasjonen uteblir, særlig i endringer. Den lar seg ikke stoppe. Den kan bare gis noe riktig å formidle.`,
        ex: `Ryktet om omorganisering i IKT-seksjonen når alle før ledelsen har sagt et ord. Ingen informasjon er også informasjon: «Når de tier, er det sikkert ille.»` },
      { ty: 'tf', q: `Uformell kommunikasjon kan stoppes ved at ledelsen forbyr rykter.`, sant: false,
        why: `Uformell kommunikasjon finnes alltid. Det beste mottiltaket mot rykter er tidlig og ærlig formell informasjon.` }
    ]},
    { id: 'f8r2', t: `Velg kanal etter budskap`, cards: [
      { h: `Medierikhet`,
        b: `**Daft og Lengel** rangerer kanaler etter **rikhet**: hvor mange signaler de overfører, og hvor raskt du får tilbakemelding. Ansikt til ansikt er rikest. Så følger video, telefon, chat og e-post. Skriftlige rapporter og oppslag er fattigst. Poenget er å matche. **Flertydige** budskap trenger rike kanaler. Entydige rutinebudskap går fint i fattige.`,
        ex: `Endret frist for timeføring passer i e-post. Beskjeden om at avdelingen skal slås sammen med en annen, gjør det ikke. Folk trenger å stille spørsmål og lese ansikter.` },
      { h: `For mye og for lite`,
        b: `Digitale kanaler har gjort det billig å sende og dyrt å motta. **Informasjonsoverbelastning** oppstår når mengden overstiger evnen til å behandle den. Folk svarer med å skumme, utsette og ignorere, også det som var viktig. Mer informasjon gir derfor ikke bedre informerte mottakere. Avsenderen må prioritere på vegne av mottakeren.`,
        ex: `Varselet om obligatorisk tofaktorinnlogging drukner mellom nyhetsbrev, Teams-varsler og kantinemenyen. Etterpå sier IT: «Det sto jo på intranettet.»` },
      { ty: 'sort', q: `Rik eller fattig kanal?`, cats: [`Rik kanal`, `Fattig kanal`],
        items: [[`Samtale ansikt til ansikt`, 0], [`Skriftlig rundskriv`, 1], [`Videomøte med kamera`, 0], [`Oppslag på intranett`, 1], [`Telefonsamtale`, 0], [`Masseutsendt e-post`, 1]],
        why: `Rike kanaler gir mange signaler og rask tilbakemelding. Fattige kanaler gir ett signal og sen tilbakemelding.` },
      { h: `Digitalt samarbeid`,
        b: `Samarbeid på avstand fungerer godt for avgrensede oppgaver mellom folk som kjenner hverandre. Det er krevende for tillitsbygging, konflikthåndtering og idéutvikling, der rike signaler betyr mest. **Asynkrone** kanaler gir fleksibilitet og tid til å tenke. **Synkrone** gir tempo og felles forståelse. Gode team avtaler hvilke kanaler som brukes til hva.`,
        ex: `Fagteamet avtaler: beslutninger og begrunnelser skrives i saken, raske avklaringer tas i chat, uenighet tas muntlig. Ingen trenger lenger lete i tre kanaler for å finne hva som ble bestemt.` },
      { ty: 'mc', q: `Teamet krangler i chatten om en vanskelig prioritering. Hva er det klokeste neste steget?`,
        a: [`Ta det muntlig, helst med video eller ansikt til ansikt`, `Skrive en lengre e-post`, `Opprette en ny kanal for temaet`, `Vente til det går over`],
        why: `Uenighet og flertydighet krever en rik kanal med tonefall, ansiktsuttrykk og rask tilbakemelding.` }
    ]},
    { id: 'f8r3', t: `Nettverk og åpenhet`, cards: [
      { h: `Kommunikasjonsnettverk`,
        b: `Tidlige eksperimenter av Bavelas og Leavitt sammenlignet nettverk. I **sentraliserte** nettverk går alt via én person. De er raske og presise på enkle oppgaver, men sårbare, og de som sitter på kanten, blir lite tilfredse. I **desentraliserte** nettverk snakker alle med alle. De er tregere i starten, men bedre på komplekse oppgaver, og deltakerne trives bedre.`,
        ex: `All kontakt mellom skolene og IT går via én koordinator. Det fungerer for bestilling av PC-er. Når skolene og IT skal utvikle en ny digital vurderingspraksis sammen, blir koordinatoren en flaskehals.` },
      { h: `Brobyggere og svake bånd`,
        b: `Noen personer forbinder grupper som ellers ikke snakker sammen. Slike **grensekryssere** oversetter mellom fagspråk og bringer nyheter på tvers. **Granovetter** viste at ny informasjon ofte kommer gjennom **svake bånd**, altså bekjente i andre miljøer. Nære kolleger vet stort sett det samme som deg.`,
        ex: `Du hører om et vellykket prosjekt i tannhelse fra en du møtte på et kurs for to år siden. Det nære teamet ditt hadde aldri hørt om det.` },
      { ty: 'mc', q: `Hva kjennetegner en grensekrysser?`,
        a: [`Hun forbinder grupper som ellers ikke snakker sammen`, `Hun bryter regler for å få ting gjort`, `Hun leder flere avdelinger samtidig`, `Hun er innleid utenfra`],
        why: `Grensekryssere oversetter og formidler mellom miljøer med ulikt språk og ulik kunnskap.` },
      { h: `Kommunikasjon i endring`,
        b: `I endringer vil folk vite tre ting: **hvorfor** skjer dette, **hva betyr det for meg**, og **hva skjer nå**. Budskap som bare forklarer løsningen, bommer. Toveis kommunikasjon gir ledelsen kunnskap om hva som faktisk bekymrer folk. Nærmeste leder er som regel den mest troverdige kanalen, og må derfor vite mer enn det som står på intranettet.`,
        ex: `Allmøtet om nytt saksbehandlingssystem viser arkitekturtegninger i førti minutter. Det første spørsmålet fra salen: «Mister vi malene våre?» Det var der møtet burde startet.` },
      { ty: 'mc', q: `Hvem er som regel den mest troverdige kilden til informasjon i en endring?`,
        a: [`Nærmeste leder`, `Intranettet`, `Kommunikasjonsavdelingen`, `Leverandøren`],
        why: `Folk stoler mest på den de møter daglig, og som kan svare på hva endringen betyr for dem.` }
    ]}
  ],
  quiz: [
    { ty: 'mc', q: `Hvor skapes meningen i et budskap?`,
      a: [`Hos mottakeren, når budskapet tolkes`, `Hos senderen, når budskapet formuleres`, `I kanalen`, `I selve teksten`],
      why: `Mottakeren dekoder ut fra egne erfaringer. Derfor må senderen ta mottakerens perspektiv.` },
    { ty: 'tf', q: `Flertydige og følelsesladde budskap bør formidles i rike kanaler.`, sant: true,
      why: `Rike kanaler gir flere signaler og rask tilbakemelding, og det trengs for å avklare tolkninger.` },
    { ty: 'mc', q: `Hva er filtrering i kommunikasjon oppover?`,
      a: [`Dårlige nyheter pyntes på eller holdes tilbake`, `Ledere velger hva de vil si til ansatte`, `E-postfilteret stopper viktige meldinger`, `Informasjon oversettes til fagspråk`],
      why: `Budbringere beskytter seg selv, og bildet blir lysere for hvert ledd.` },
    { ty: 'sort', q: `Sentralisert eller desentralisert nettverk?`, cats: [`Sentralisert`, `Desentralisert`],
      items: [[`All informasjon går via én person`, 0], [`Alle kan snakke direkte med alle`, 1], [`Raskt på enkle rutineoppgaver`, 0], [`Best på komplekse problemer`, 1], [`Sårbart hvis navet faller ut`, 0], [`Høyere trivsel blant deltakerne`, 1]],
      why: `Sentraliserte nettverk gir fart og kontroll. Desentraliserte gir kvalitet på vanskelige oppgaver.` },
    { ty: 'gap', q: `Når mengden informasjon overstiger evnen til å behandle den, kalles det ___.`,
      a: [`informasjonsoverbelastning`, `filtrering`, `medierikhet`, `dekoding`],
      why: `Resultatet er at folk skummer og overser, også det som var viktig.` },
    { ty: 'mc', q: `Hvorfor kommer ny informasjon ofte gjennom svake bånd?`,
      a: [`Bekjente i andre miljøer vet andre ting enn dine nærmeste`, `Svake bånd er mer pålitelige`, `Nære kolleger holder informasjon tilbake`, `Svake bånd bruker rikere kanaler`],
      why: `Granovetters poeng: nære kontakter deler stort sett den samme kunnskapen som deg.` },
    { ty: 'mc', q: `Ledelsen sier ingenting om en planlagt omorganisering «før alt er klart». Hva er mest sannsynlig?`,
      a: [`Jungeltelegrafen fyller tomrommet med rykter`, `Ansatte venter rolig på informasjon`, `Den formelle kommunikasjonen blir mer effektiv`, `Usikkerheten forsvinner`],
      why: `Taushet tolkes, og tolkningene er sjelden de mest optimistiske.` },
    { ty: 'tf', q: `Mer informasjon gir alltid bedre informerte medarbeidere.`, sant: false,
      why: `Over et visst punkt gir mer informasjon dårligere oppmerksomhet om det viktige.` },
    { ty: 'multi', q: `Hva vil folk først og fremst vite i en endring?`,
      ok: [`Hvorfor skjer dette?`, `Hva betyr det for meg?`, `Hva skjer nå?`],
      no: [`Hvilken arkitektur er valgt?`, `Hvem er leverandørens underleverandør?`],
      why: `Begrunnelse, personlige følger og neste steg kommer før løsningsdetaljene.` }
  ],
  kase: {
    t: `Uke 42`,
    intro: `Skarvøy skal bytte innloggingsløsning for alle ansatte og 9 000 elever i høstferien. Du har ansvaret for kommunikasjonen.`,
    steps: [
      { s: `Hvordan informerer du skolene?`,
        opts: [
          [`En grundig e-post til alle ansatte med teknisk beskrivelse og lenke til veiledning.`, 1, `Du når alle, men i ditt eget fagspråk og i en kanal mottakerne drukner i. Mange vil ikke forstå at dette gjelder dem.`],
          [`En kort melding om hva som skjer, hva den enkelte må gjøre, og når. Den går via rektorene og følges av et åpent videomøte for spørsmål.`, 2, `Sterkt. Du prioriterer for mottakeren, bruker en troverdig kanal og legger inn tilbakemelding.`],
          [`Et oppslag på intranettet tre uker før.`, 0, `Du har informert, men ikke kommunisert. Oppslag er den fattigste kanalen, og du vet ikke om noen har lest det.`]
        ],
        th: `Meningen skapes hos mottakeren. Kod budskapet i mottakerens språk, velg kanal etter budskapet, og sørg for tilbakemelding.` },
      { s: `En uke før byttet oppdager teknikerne at elever med eldre nettbrett kan miste tilgangen. Prosjektlederen vil ikke «skape uro» og foreslår å vente med å si noe. Hva gjør du?`,
        opts: [
          [`Jeg varsler rektorene samme dag om hva vi vet, hva vi ikke vet, og når neste oppdatering kommer.`, 2, `Sterkt. Tidlig og ærlig informasjon gir skolene tid til å forberede seg, og bygger tillit til neste melding.`],
          [`Jeg venter til vi har en løsning.`, 0, `Du filtrerer en dårlig nyhet. Skolene mister en uke med forberedelser. Får de høre det fra andre, er tilliten brukt opp.`],
          [`Jeg nevner det i en bisetning i neste nyhetsbrev.`, 1, `Formelt har du sagt fra. Reelt har du gjemt budskapet. Viktige varsler skal ikke konkurrere med kantinemenyen.`]
        ],
        th: `Dårlige nyheter filtreres på vei opp og ut. Taushet stopper ikke informasjonen. Den overlater den til jungeltelegrafen.` },
      { s: `Mandag etter ferien får 600 elever ikke logget inn. Chat, e-post og telefon koker. Hva prioriterer du?`,
        opts: [
          [`Én tydelig statusside som oppdateres hver time, og en kontaktperson per skole som kan ringe direkte.`, 2, `Sterkt. I en akutt situasjon trengs ett nav for fakta og en rik kanal for det som er uklart. Du senker belastningen for alle.`],
          [`Vi svarer på hver henvendelse etter tur.`, 0, `Køen vokser raskere enn dere svarer. De samme spørsmålene besvares hundre ganger, og ingen får oversikt.`],
          [`Vi sender en beklagelse til alle ansatte.`, 1, `Høflig. Folk trenger likevel først å vite hva som skjer, og hva de skal gjøre.`]
        ],
        th: `Sentraliserte nettverk er effektive når oppgaven er enkel og haster. Rike kanaler trengs der situasjonen er flertydig.` }
    ],
    out: [
      `Byttet ble gjennomført, men skolene husker uke 42 som uka ingen fortalte dem noe. Prøv igjen, og start hos mottakeren.`,
      `Det gikk bra nok. Se en gang til på hvordan dårlige nyheter bør håndteres når du ikke har alle svarene.`,
      `Byttet hadde feil, men ingen ble overrasket, og alle visste hvor de fant svar. Rektorene ber om samme opplegg neste gang.`
    ]
  },
  refl: `Tenk på en melding du sendte nylig som ble misforstått. Hvor sviktet det: koding, kanal, støy eller manglende tilbakemelding?`,
  mission: `Gå gjennom innboksen fra i går. Hvor mange meldinger burde vært tatt i en rikere kanal, og hvor mange møter kunne vært en e-post?`,
  read: [`Jacobsen og Thorsvik, Hvordan organisasjoner fungerer: kapitlet om kommunikasjon`, `Daft og Lengel (1986), Organizational Information Requirements, Media Richness and Structural Design`, `Granovetter (1973), The Strength of Weak Ties`]
});

F.push({
  n: 9, id: 'f9', zone: 2,
  t: `Beslutninger`,
  k: `Beslutningsprosesser`,
  intro: `Organisasjoner er beslutningsmaskiner, men de fungerer sjelden slik idealet tilsier. Her møter du begrenset rasjonalitet, små skritt, dragkamp og en søppelbøtte.`,
  rooms: [
    { id: 'f9r1', t: `Rasjonalitetens grenser`, cards: [
      { h: `Den rasjonelle idealmodellen`,
        b: `Idealet er enkelt. Beslutningstakeren har klare mål, kjenner alle alternativer og alle konsekvenser, og velger det som gir best måloppnåelse. Modellen er nyttig som målestokk, og den ligger under krav til utredning i offentlig sektor: beskriv problemet, vis alternativene, vurder virkningene. Som beskrivelse av hvordan beslutninger faktisk tas, holder den sjelden.`,
        ex: `Saksframlegget til fylkestinget lister tre alternativer med konsekvenser. Det ser rasjonelt ut. Hvilke tre alternativer som kom med, ble avgjort lenge før.` },
      { h: `Begrenset rasjonalitet`,
        b: `**Herbert Simon** viste at mennesker har begrenset informasjon, tid og kapasitet. Vi vurderer få alternativer, ett om gangen, og stopper ved det første som er godt nok. Han kalte det **satisfiering**, i motsetning til å maksimere. Organisasjoner hjelper oss ved å dele opp problemer, lage rutiner og avgrense hva hver enkelt må ta stilling til.`,
        ex: `Skarvøy trenger et nytt prosjektverktøy. Ingen kartlegger hele markedet. Gruppa ser på to verktøy noen kjenner fra før, og velger det første som dekker kravene.` },
      { ty: 'mc', q: `Gruppa ser på to verktøy noen kjenner fra før, og velger det første som dekker kravene. Hva er dette et eksempel på?`,
        a: [`Satisfiering`, `Maksimering`, `Gruppetenkning`, `Dekobling`],
        why: `Søket stopper når et alternativ er godt nok. Det er Simons poeng om begrenset rasjonalitet.` },
      { h: `Tankefeller`,
        b: `Beslutningspsykologien, med **Kahneman og Tversky** i spissen, har dokumentert systematiske skjevheter. **Forankring**: det første tallet styrer vurderingen. **Bekreftelsesfellen**: vi leter etter støtte for det vi tror. **Overoptimisme**: planer undervurderer tid og kostnad. **Tapsaversjon**: tap veier tyngre enn like store gevinster. **Eskalering av forpliktelse**: vi satser videre på noe som ikke virker, for å forsvare tidligere valg.`,
        ex: `Integrasjonsprosjektet har kostet fire millioner og virker ikke. «Vi kan ikke stoppe nå, da var alt bortkastet.» Pengene er brukt uansett. Spørsmålet er bare hva de neste millionene gir.` },
      { ty: 'match', q: `Koble tankefelle og beskrivelse.`,
        pairs: [[`Forankring`, `Det første tallet styrer vurderingen`], [`Bekreftelsesfellen`, `Vi leter etter støtte for det vi tror`], [`Tapsaversjon`, `Tap veier tyngre enn like store gevinster`], [`Eskalering av forpliktelse`, `Vi satser videre for å forsvare tidligere valg`]],
        why: `Skjevhetene er systematiske. Derfor hjelper det å bygge mottiltak inn i beslutningsprosessen.` }
    ]},
    { id: 'f9r2', t: `Fire fortellinger om beslutninger`, cards: [
      { h: `Små skritt`,
        b: `**Charles Lindblom** beskrev offentlige beslutninger som **inkrementelle**: små justeringer av det som allerede finnes, forhandlet fram mellom parter med ulike interesser. Fordelen er lav risiko og mulighet til å rette opp underveis. Ulempen er at store omlegginger sjelden kommer, selv når de trengs.`,
        ex: `Budsjettet for digitalisering neste år er fjorårets pluss tre prosent. Ingen spør om pengene burde vært brukt helt annerledes.` },
      { h: `Forhandling og koalisjoner`,
        b: `**Cyert og March** ser organisasjonen som en **koalisjon** av grupper med ulike mål. Beslutninger er resultat av forhandlinger og kompromisser, og ikke av én felles preferanse. Målkonflikter løses sjelden. De håndteres ved at ulike hensyn får oppmerksomhet etter tur, og ved at det finnes litt slakk i ressursene til å gi alle noe.`,
        ex: `Valget av ny samhandlingsløsning ender med en pakke. Drift får sikkerhetskravene sine, utdanning får integrasjon mot læringsplattformen, og økonomi får lavere lisenskostnad enn i første tilbud.` },
      { ty: 'mc', q: `Valget av løsning ender som en pakke der alle parter får noe. Hvilken beslutningsmodell beskriver det best?`,
        a: [`Forhandling mellom koalisjoner`, `Den rasjonelle idealmodellen`, `Søppelbøttemodellen`, `Logikken om det passende`],
        why: `Utfallet avspeiler partenes interesser og styrke, ikke én felles målfunksjon.` },
      { h: `Søppelbøttemodellen`,
        b: `**Cohen, March og Olsen** beskriver beslutninger i organiserte anarkier, der målene er uklare, sammenhengen mellom midler og mål er dårlig forstått, og deltakerne kommer og går. Fire strømmer flyter nokså uavhengig: **problemer**, **løsninger**, **deltakere** og **beslutningsanledninger**. En beslutning oppstår når strømmene møtes. Løsninger leter derfor ofte etter problemer, og utfallet avhenger av hvem som var til stede.`,
        fig: 'boette',
        ex: `En leverandør har demonstrert en KI-løsning. Budsjettmøtet har ubrukte midler. Direktøren for samferdsel er syk, og utdanningsdirektøren har et problem med fravær. Slik fikk Skarvøy KI-basert fraværsanalyse.` },
      { ty: 'sort', q: `Hvilken strøm i søppelbøttemodellen?`, cats: [`Problem`, `Løsning`, `Deltaker`, `Anledning`],
        items: [[`Høyt fravær i videregående`, 0], [`En leverandør har demonstrert et analyseverktøy`, 1], [`Utdanningsdirektøren møter`, 2], [`Budsjettmøtet har ubrukte midler`, 3], [`Lang ventetid på skyssvedtak`, 0], [`Styringsgruppemøtet i juni`, 3]],
        why: `Problemer, løsninger, deltakere og beslutningsanledninger flyter hver for seg og kobles når de møtes.` }
    ]},
    { id: 'f9r3', t: `Sammen og hver for seg`, cards: [
      { h: `Hva er passende?`,
        b: `**March og Olsen** beskriver to logikker. **Konsekvenslogikken** spør: hva gir best resultat for meg eller oss? **Logikken om det passende** spør: hva slags situasjon er dette, hvem er jeg, og hva gjør en som meg i en slik situasjon? Mye atferd i organisasjoner følger regler, roller og identitet, uten at noen regner på konsekvenser.`,
        ex: `Arkivaren avviser en smart snarvei fordi «slik behandler vi ikke dokumentasjon». Hun har ikke regnet på risikoen. Hun handler som en arkivar.` },
      { h: `Grupper bestemmer annerledes`,
        b: `Grupper har mer kunnskap og flere perspektiver enn enkeltpersoner, og beslutningene får bredere oppslutning. De kan også gå galt. **Gruppetenkning**, beskrevet av **Irving Janis**, oppstår når ønsket om enighet fortrenger kritisk vurdering. Tegn er illusjon om enstemmighet, selvsensur og press mot avvikere. **Gruppepolarisering** gjør at grupper ofte lander mer ekstremt enn medlemmene ville gjort alene.`,
        ex: `Hele styringsgruppa er begeistret for leverandøren. Aisha er urolig for databehandleravtalen, men sier ingenting, for alle andre virker så sikre. Tre andre tenkte det samme.` },
      { ty: 'multi', q: `Hvilke grep motvirker gruppetenkning?`,
        ok: [`Lederen venter med å si sin mening`, `Noen får rollen som djevelens advokat`, `Eksterne inviteres til å utfordre`, `Innvendinger samles inn anonymt`],
        no: [`Krav om enstemmighet`, `Kortere møter uten diskusjon`],
        why: `Mottiltakene gjør det trygt og forventet å være uenig.` },
      { h: `Politikk og administrasjon`,
        b: `I en fylkeskommune fatter folkevalgte de overordnede beslutningene, og administrasjonen utreder og iverksetter. Kommuneloven pålegger kommunedirektøren å sørge for at saker er forsvarlig utredet. Myndighet kan **delegeres**. Skillet mellom politikk og administrasjon er uklart i praksis. Den som utreder, velger hvilke alternativer som legges fram, og påvirker dermed utfallet.`,
        ex: `Fylkestinget vedtar digitaliseringsstrategien. Hvilke tre satsinger som sto i forslaget, ble bestemt i administrasjonen. Premissmakt er også beslutningsmakt.` },
      { ty: 'tf', q: `Utredningen av en sak påvirker hvilke alternativer politikerne får velge mellom.`, sant: true,
        why: `Den som setter premissene, former beslutningen. Derfor stilles det krav om forsvarlig utredning.` }
    ]}
  ],
  quiz: [
    { ty: 'mc', q: `Hva betyr satisfiering?`,
      a: [`Å velge det første alternativet som er godt nok`, `Å velge alternativet med høyest forventet nytte`, `Å utsette beslutningen til all informasjon er samlet`, `Å la flertallet bestemme`],
      why: `Simons begrep for hvordan beslutninger tas under begrenset rasjonalitet.` },
    { ty: 'match', q: `Koble navn og bidrag.`,
      pairs: [[`Simon`, `Begrenset rasjonalitet`], [`Lindblom`, `Beslutninger i små skritt`], [`Cohen, March og Olsen`, `Søppelbøttemodellen`], [`Janis`, `Gruppetenkning`], [`Kahneman og Tversky`, `Systematiske tankefeil`]],
      why: `Fem bidrag som alle utfordrer bildet av den fullt rasjonelle beslutningen.` },
    { ty: 'tf', q: `I søppelbøttemodellen kan en løsning finnes før problemet den skal løse.`, sant: true,
      why: `Løsninger flyter som en egen strøm og kobles til problemer når anledningen byr seg.` },
    { ty: 'sort', q: `Konsekvenslogikk eller logikken om det passende?`, cats: [`Konsekvenslogikk`, `Det passende`],
      items: [[`«Hvilket alternativ gir mest igjen for pengene?»`, 0], [`«Slik gjør vi det ikke i forvaltningen.»`, 1], [`«Hva tjener avdelingen min på dette?»`, 0], [`«Som personvernombud kan jeg ikke godta det.»`, 1], [`«Vi regner på tre scenarier.»`, 0], [`«Hva forventes av en leder i en slik situasjon?»`, 1]],
      why: `Den ene logikken regner på utfall. Den andre spør etter regler, roller og identitet.` },
    { ty: 'mc', q: `Hva kjennetegner inkrementelle beslutninger?`,
      a: [`Små justeringer av det bestående, forhandlet mellom parter`, `Fullstendig analyse av alle alternativer`, `Tilfeldig kobling av problemer og løsninger`, `Beslutninger tatt av én leder alene`],
      why: `Lindblom beskrev beslutninger som skritt for skritt ut fra dagens situasjon.` },
    { ty: 'gap', q: `Å satse videre på et prosjekt for å forsvare det som allerede er brukt, kalles eskalering av ___.`,
      a: [`forpliktelse`, `konflikt`, `rasjonalitet`, `legitimitet`],
      why: `Fenomenet er beskrevet av Barry Staw. Det som er brukt, bør ikke styre neste valg.` },
    { ty: 'mc', q: `Hvilket tiltak motvirker gruppetenkning best?`,
      a: [`Lederen holder sitt syn tilbake, og noen får i oppgave å argumentere imot`, `Gruppen settes sammen av folk som er enige`, `Diskusjonen kortes ned`, `Avgjørelsen tas ved håndsopprekning først`],
      why: `Når det er forventet at noen sier imot, mister konformitetspresset grepet.` },
    { ty: 'tf', q: `Den som utreder en sak, har ingen innflytelse på hva politikerne vedtar.`, sant: false,
      why: `Utrederen velger problemforståelse og alternativer. Det er premissmakt.` },
    { ty: 'mc', q: `Prosjektet budsjetterte med seks måneder. Lignende prosjekter har i snitt tatt fjorten. Hvilken tankefelle er mest sannsynlig?`,
      a: [`Overoptimisme i planlegging`, `Tapsaversjon`, `Bekreftelsesfellen`, `Gruppepolarisering`],
      why: `Planer bygger på beste tilfelle. Erfaringstall fra lignende prosjekter er et bedre utgangspunkt.` }
  ],
  kase: {
    t: `Fire millioner senere`,
    intro: `Integrasjonen mellom det skoleadministrative systemet og økonomisystemet er to år forsinket og har kostet fire millioner. Leverandøren ber om halvannen million til og seks måneder. Du sitter i styringsgruppa.`,
    steps: [
      { s: `Prosjektlederen sier: «Vi har investert så mye at vi må fullføre.» Hvordan vurderer du argumentet?`,
        opts: [
          [`Enig. Å stoppe nå ville være sløsing.`, 0, `Du går i fellen. Pengene er brukt uansett hva dere velger. Argumentet forsvarer fortiden i stedet for å vurdere framtiden.`],
          [`Uenig. Det som er brukt, er brukt. Spørsmålet er hva halvannen million til gir, sammenlignet med alternativene.`, 2, `Sterkt. Du ser bort fra kostnader som ikke kan hentes tilbake, og vurderer bare det som kan påvirkes.`],
          [`Jeg foreslår å utsette avgjørelsen til neste møte.`, 1, `Utsettelse er også en beslutning, og kostnadene løper mens dere venter. Du har likevel unngått å binde dere på feil grunnlag.`]
        ],
        th: `Eskalering av forpliktelse: vi satser videre for å rettferdiggjøre tidligere valg. Motgiften er å vurdere bare framtidige kostnader og gevinster.` },
      { s: `Hele styringsgruppa heller mot å fortsette. Du merker at økonomisjefen er taus, og at to medlemmer ser i bordet. Hva gjør du?`,
        opts: [
          [`Jeg ber alle skrive ned sin største bekymring anonymt før vi konkluderer.`, 2, `Sterkt. Du bryter illusjonen om enstemmighet og henter fram det selvsensuren holdt tilbake.`],
          [`Vi går videre. Stillhet betyr samtykke.`, 0, `Klassisk gruppetenkning. Stillhet betyr ofte at folk ikke tør, eller ikke orker.`],
          [`Jeg spør om noen er uenige.`, 1, `Bedre enn ingenting. Et åpent spørsmål i et rom med tydelig flertall gir likevel sjelden ærlige svar.`]
        ],
        th: `Janis: gruppetenkning kjennetegnes av selvsensur og illusjon om enighet. Struktur som gjør det trygt å være uenig, virker bedre enn oppfordringer.` },
      { s: `Bekymringene viser at ingen tror på seks måneder. Hvilken vei videre anbefaler du?`,
        opts: [
          [`Full utredning av alle tenkelige alternativer før noe bestemmes.`, 1, `Grundig, men idealet om full oversikt er urealistisk. Utredningen kan ta like lang tid som prosjektet.`],
          [`Et avgrenset neste steg: fire uker med en konkret delleveranse, et tydelig stoppkriterium og ett enkelt alternativ utredet parallelt.`, 2, `Sterkt. Små skritt gir læring til lav risiko. Stoppkriteriet beskytter mot ny eskalering, og alternativet gir dere et reelt valg.`],
          [`Bevilge hele beløpet og be om ukentlig rapportering.`, 0, `Rapportering endrer ikke forpliktelsen. Uten stoppkriterium er dere tilbake om seks måneder med samme argument.`]
        ],
        th: `Under usikkerhet tas gode beslutninger i små, reversible skritt med klare kriterier for å stoppe.` }
    ],
    out: [
      `Prosjektet fikk pengene og er fortsatt ikke ferdig. Prøv igjen, og skill mellom det som er brukt, og det som kan velges.`,
      `Dere unngikk det verste. Se en gang til på hvordan gruppa kan få fram det folk ikke sier.`,
      `Etter fire uker var svaret klart, og styringsgruppa valgte det enkle alternativet. Du sparte fylkeskommunen for halvannen million og en ny runde med de samme argumentene.`
    ]
  },
  refl: `Tenk på en beslutning hos dere som ble til «av seg selv». Hvilke problemer, løsninger, deltakere og anledninger møttes? Hva ville skjedd om møtet var en uke senere?`,
  mission: `I neste beslutningsmøte: noter hvor mange alternativer som faktisk ble vurdert, og hvem som bestemte hvilke som kom med.`,
  read: [`Jacobsen og Thorsvik, Hvordan organisasjoner fungerer: kapitlet om beslutninger`, `Cohen, March og Olsen (1972), A Garbage Can Model of Organizational Choice`, `Kahneman, Tenke, fort og langsomt`]
});
