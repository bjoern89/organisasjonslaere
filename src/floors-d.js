/* Fylkeshuset – faginnhold, etasje 10–12 */

F.push({
  n: 10, id: 'f10', zone: 2,
  t: `Læring og innovasjon`,
  k: `Læring og innovasjon`,
  intro: `En organisasjon kan gjenta de samme feilene i tjue år, selv om hver enkelt ansatt lærer hver dag. Her lærer du hvordan individuell erfaring blir felles kunnskap, og hvorfor piloter så ofte dør.`,
  rooms: [
    { id: 'f10r1', t: `Slik lærer organisasjoner`, cards: [
      { h: `Fra den enkelte til fellesskapet`,
        b: `Organisasjoner lærer når enkeltpersoners erfaringer blir **delt, tolket i fellesskap og nedfelt** i rutiner, systemer og praksis. Kjeden kan ryke flere steder. Den enkelte ser et problem, men har ikke rolle eller mulighet til å endre noe. Erfaringen blir aldri delt. Eller organisasjonen trekker feil slutning om hva som virket.`,
        ex: `En saksbehandler finner en raskere måte å håndtere klager på. Det blir hennes private triks. Når hun slutter, forsvinner læringen med henne.`,
        src: `March og Olsen beskrev slike brudd i læringssirkelen.` },
      { h: `Enkeltkrets og dobbeltkrets`,
        b: `**Argyris og Schön** skiller mellom to nivåer. **Enkeltkretslæring** retter feil innenfor gjeldende mål og antakelser: vi gjør tingene riktigere. **Dobbeltkretslæring** stiller spørsmål ved målene og antakelsene selv: gjør vi de riktige tingene? Det andre er vanskeligere, fordi det utfordrer noe vi har investert stolthet i.`,
        ex: `Skjemaet har høy feilrate. Enkeltkrets: vi forbedrer hjelpetekstene. Dobbeltkrets: hvorfor ber vi innbyggeren om opplysninger vi allerede har?` },
      { ty: 'sort', q: `Enkeltkrets eller dobbeltkrets?`, cats: [`Enkeltkrets`, `Dobbeltkrets`],
        items: [[`Vi forbedrer hjelpetekstene i skjemaet`, 0], [`Vi spør om skjemaet trengs i det hele tatt`, 1], [`Vi kurser saksbehandlerne i gjeldende rutine`, 0], [`Vi spør om rutinen bygger på en antakelse som ikke lenger holder`, 1], [`Vi retter feilen i integrasjonen`, 0], [`Vi spør hvorfor to systemer må ha samme opplysning`, 1]],
        why: `Enkeltkrets forbedrer utførelsen. Dobbeltkrets utfordrer premissene.` },
      { h: `Det vi sier, og det vi gjør`,
        b: `Argyris skiller mellom **uttalt teori**, altså det vi sier styrer oss, og **bruksteori**, altså det som faktisk styrer handlingene våre. Avstanden beskyttes av **defensive rutiner**: vi unngår temaer som kan bli pinlige, og vi unngår å snakke om at vi unngår dem. Slik blir det viktigste ikke diskutert.`,
        ex: `Alle vet at prosjektmodellen ikke følges. Ingen sier det i evalueringen. Rapporten konkluderer med at «modellen bør følges bedre neste gang».` },
      { ty: 'mc', q: `Alle vet at prosjektmodellen ikke følges, men ingen tar det opp i evalueringen. Hva kaller Argyris dette?`,
        a: [`Defensive rutiner`, `Absorpsjonsevne`, `Eksternalisering`, `Tohendighet`],
        why: `Defensive rutiner beskytter mot ubehag og hindrer samtidig læring.` }
    ]},
    { id: 'f10r2', t: `Kunnskap som sitter i folk`, cards: [
      { h: `Taus og eksplisitt kunnskap`,
        b: `**Eksplisitt** kunnskap kan skrives ned og deles i dokumenter og systemer. **Taus** kunnskap sitter i erfaring og ferdigheter og er vanskelig å sette ord på. Michael Polanyi sa det slik: vi vet mer enn vi kan fortelle. Mye av det som gjør en erfaren medarbeider god, er taust. Det fanges ikke av rutinebeskrivelser, og det ligger ikke i tekstene en KI-assistent bygger på.`,
        ex: `Rutinen sier hvilke felt som fylles ut i en inntakssak. Den sier ikke hvordan du hører på stemmen til en forelder at saken er mer komplisert enn skjemaet viser.` },
      { h: `Kunnskapsspiralen`,
        b: `**Nonaka og Takeuchi** beskriver fire omforminger. **Sosialisering**: taus kunnskap deles gjennom felles erfaring. **Eksternalisering**: taus kunnskap settes ord på. **Kombinering**: eksplisitt kunnskap settes sammen på nye måter. **Internalisering**: eksplisitt kunnskap blir til egen ferdighet gjennom bruk. Ny kunnskap skapes når organisasjonen beveger seg gjennom alle fire.`,
        fig: 'seci',
        ex: `Sidemannsopplæring er sosialisering. Å skrive en sjekkliste sammen er eksternalisering. Å sette sjekklisten sammen med regelverket i en veileder er kombinering. Å bruke veilederen til den sitter, er internalisering.` },
      { ty: 'match', q: `Koble omforming og beskrivelse.`,
        pairs: [[`Sosialisering`, `Taus til taus: læring gjennom felles erfaring`], [`Eksternalisering`, `Taus til eksplisitt: erfaring settes ord på`], [`Kombinering`, `Eksplisitt til eksplisitt: kunnskap settes sammen`], [`Internalisering`, `Eksplisitt til taus: kunnskap blir ferdighet`]],
        why: `De fire omformingene utgjør kunnskapsspiralen.` },
      { h: `Å ta imot ny kunnskap`,
        b: `**Cohen og Levinthal** kaller evnen til å kjenne igjen, ta opp og bruke ny kunnskap utenfra for **absorpsjonsevne**. Den avhenger av hva organisasjonen kan fra før. Den som ikke forstår noe av en teknologi, klarer heller ikke å vurdere leverandørens løfter. **Praksisfellesskap** på tvers av enheter holder fagkunnskap ved like. God bestillerkompetanse er absorpsjonsevne i praksis.`,
        ex: `Skarvøy vurderer å sette ut all utvikling. Uten egne folk som forstår arkitektur og data, kan ingen stille de riktige spørsmålene til leverandøren.` },
      { ty: 'tf', q: `En organisasjon uten egen fagkompetanse vurderer en leverandørs løsning like godt som en organisasjon som har slik kompetanse.`, sant: false,
        why: `Absorpsjonsevne bygger på eksisterende kunnskap. Uten den mangler grunnlaget for å vurdere og ta i bruk det nye.` }
    ]},
    { id: 'f10r3', t: `Innovasjon`, cards: [
      { h: `Nytt, nyttig og nyttiggjort`,
        b: `Innovasjon er noe **nytt** som er **nyttig** og blir **nyttiggjort**. En idé er ikke en innovasjon før den er tatt i bruk og gir verdi. Innovasjoner kan gjelde tjenester, prosesser eller organisering. **Inkrementelle** innovasjoner forbedrer det som finnes. **Radikale** bryter med det. Offentlig sektor er best på den første sorten og trenger iblant den andre.`,
        ex: `Et digitalt skjema som erstatter papir, er inkrementelt. Å fjerne søknaden helt, fordi fylkeskommunen allerede har opplysningene og kan tilby skyss automatisk, er radikalt.` },
      { h: `Utnytte og utforske`,
        b: `**James March** beskrev spenningen mellom å **utnytte** det man kan, og å **utforske** det nye. Utnytting gir sikre gevinster på kort sikt. Utforsking er usikker og lønner seg sent, om i det hele tatt. Organisasjoner som bare utnytter, blir gode på det som var. De som bare utforsker, høster aldri. Evnen til å gjøre begge deler kalles **tohendighet**.`,
        ex: `Nitti prosent av IKT-budsjettet går til drift og forvaltning. De ti prosentene til utforsking er de første som kuttes når budsjettet strammes. Hvert kutt er fornuftig hver for seg.` },
      { ty: 'mc', q: `Hva kalles evnen til både å utnytte det bestående og utforske det nye?`,
        a: [`Tohendighet`, `Dobbeltkretslæring`, `Dekobling`, `Sosialisering`],
        why: `Tohendige organisasjoner gir rom for begge logikker, ofte i ulike enheter eller til ulike tider.` },
      { h: `Spredning og pilotsyke`,
        b: `**Everett Rogers** viste at innovasjoner sprer seg i en S-kurve: først innovatører og tidlige brukere, så det store flertallet, til slutt etternølerne. Spredning går lettere når innovasjonen har tydelig **fordel**, **passer** med eksisterende praksis, er **enkel**, kan **prøves** i liten skala og gir **synlige** resultater. Mange offentlige innovasjoner stopper etter piloten, fordi ingen eier skaleringen.`,
        ex: `KI-piloten i én avdeling var en suksess. Den ble aldri innført flere steder. Prosjektet var slutt, ildsjelen fikk nye oppgaver, og linja hadde ikke budsjett. Det kalles pilotsyke.` },
      { ty: 'multi', q: `Hvilke egenskaper gjør at en innovasjon sprer seg lettere, ifølge Rogers?`,
        ok: [`Tydelig fordel framfor det gamle`, `Passer med eksisterende praksis`, `Kan prøves i liten skala`, `Resultatene er synlige for andre`],
        no: [`Høy kompleksitet`, `Krever at alle bytter samtidig`],
        why: `Fordel, forenlighet, enkelhet, prøvbarhet og synlighet øker spredningstakten.` }
    ]}
  ],
  quiz: [
    { ty: 'mc', q: `Hva er forskjellen på enkeltkrets- og dobbeltkretslæring?`,
      a: [`Enkeltkrets retter feil innenfor gjeldende mål. Dobbeltkrets stiller spørsmål ved målene og antakelsene`, `Enkeltkrets skjer hos individer, dobbeltkrets i grupper`, `Enkeltkrets er taus, dobbeltkrets er eksplisitt`, `Enkeltkrets er planlagt, dobbeltkrets er tilfeldig`],
      why: `Dobbeltkretslæring endrer premissene, ikke bare utførelsen.` },
    { ty: 'tf', q: `Taus kunnskap kan overføres fullt ut gjennom skriftlige rutiner.`, sant: false,
      why: `Taus kunnskap sitter i erfaring og deles best gjennom felles praksis.` },
    { ty: 'match', q: `Koble navn og bidrag.`,
      pairs: [[`Argyris og Schön`, `Enkeltkrets og dobbeltkrets`], [`Nonaka og Takeuchi`, `Kunnskapsspiralen`], [`March`, `Utnytting og utforsking`], [`Rogers`, `Spredning av innovasjoner`], [`Cohen og Levinthal`, `Absorpsjonsevne`]],
      why: `Fem sentrale bidrag til forståelsen av læring og innovasjon.` },
    { ty: 'mc', q: `En nyansatt lærer ved å jobbe sammen med en erfaren kollega. Hvilken omforming i kunnskapsspiralen er det?`,
      a: [`Sosialisering`, `Eksternalisering`, `Kombinering`, `Internalisering`],
      why: `Taus kunnskap deles gjennom felles erfaring, uten å gå veien om tekst.` },
    { ty: 'gap', q: `En idé er ikke en innovasjon før den er tatt i ___ og gir verdi.`,
      a: [`bruk`, `strategien`, `budsjettet`, `nyhetsbrevet`],
      why: `Nytt, nyttig og nyttiggjort. Det siste leddet skiller innovasjon fra idé.` },
    { ty: 'mc', q: `Hvorfor er utforsking mer utsatt enn utnytting når budsjettene strammes?`,
      a: [`Gevinstene er usikre og kommer sent`, `Utforsking er alltid dyrere`, `Utnytting gir ingen gevinst`, `Utforsking krever færre folk`],
      why: `Utnytting gir sikre resultater nå. Utforsking konkurrerer med et svakere regnestykke.` },
    { ty: 'tf', q: `Pilotsyke betyr at vellykkede forsøk ikke blir tatt i bruk i større skala.`, sant: true,
      why: `Piloten lykkes, men ingen har ansvar, budsjett eller plan for spredningen.` },
    { ty: 'sort', q: `Inkrementell eller radikal innovasjon?`, cats: [`Inkrementell`, `Radikal`],
      items: [[`Papirskjema blir digitalt skjema`, 0], [`Søknaden fjernes fordi tjenesten tilbys automatisk`, 1], [`Ny versjon av fagsystemet med bedre søk`, 0], [`Elevene får én inngang til alle tjenester, og tre fagsystemer avvikles`, 1], [`Kortere svarmaler i kundesenteret`, 0]],
      why: `Inkrementell innovasjon forbedrer det bestående. Radikal innovasjon endrer selve måten oppgaven løses på.` },
    { ty: 'mc', q: `Hva er absorpsjonsevne?`,
      a: [`Evnen til å kjenne igjen, ta opp og bruke ny kunnskap utenfra`, `Evnen til å motstå endringspress`, `Hvor mye informasjon en ansatt klarer å lese`, `Evnen til å skjule feil`],
      why: `Begrepet kommer fra Cohen og Levinthal og forklarer hvorfor egen kompetanse trengs for å lære av andre.` }
  ],
  kase: {
    t: `Piloten som ble igjen`,
    intro: `Tannhelsetjenesten i Skarvøy testet automatisk innkalling med SMS-bekreftelse ved to klinikker. Uteblivelsene falt med en tredel. Åtte måneder senere bruker fortsatt bare de to klinikkene løsningen. Du blir bedt om å finne ut hvorfor.`,
    steps: [
      { s: `Hva undersøker du først?`,
        opts: [
          [`Om de andre klinikkene kjenner resultatene og har sett løsningen i bruk.`, 2, `Sterkt. Innovasjoner sprer seg når fordelen er synlig, og andre kan prøve selv. Det viser seg at de fleste klinikklederne aldri har hørt tallene.`],
          [`Om løsningen har tekniske feil.`, 1, `Verdt å sjekke. Piloten har likevel virket godt i åtte måneder, så forklaringen ligger neppe i teknikken.`],
          [`Om klinikklederne er motvillige til endring.`, 0, `Du starter med å legge skylden på mottakerne. Ingen har bedt dem om noe, og ingen har vist dem noe.`]
        ],
        th: `Rogers: spredning krever at fordelen er synlig, og at andre kan prøve i liten skala. Uten en eier av spredningen stopper innovasjoner etter piloten.` },
      { s: `Kunnskapen om hvordan innkallingen ble tilpasset arbeidsdagen, sitter hos én tannhelsesekretær, Liv. Det finnes ingen dokumentasjon. Hva gjør du?`,
        opts: [
          [`Jeg ber Liv skrive en fullstendig brukerveiledning.`, 1, `Å sette ord på erfaring er nyttig. Mye av det Liv kan, er likevel taust og lar seg ikke skrive ned alene ved en pult.`],
          [`Jeg lar Liv besøke to nye klinikker og jobbe sammen med sekretærene der. De lager en kort sjekkliste sammen underveis.`, 2, `Sterkt. Taus kunnskap deles gjennom felles arbeid, og sjekklisten gjør den tilgjengelig for de neste.`],
          [`Jeg kjøper opplæring fra leverandøren.`, 0, `Leverandøren kan systemet, men ikke hvordan det ble tilpasset arbeidsdagen i en klinikk. Den kunnskapen finnes bare hos Liv.`]
        ],
        th: `Nonaka og Takeuchi: taus kunnskap overføres gjennom sosialisering og gjøres delbar gjennom eksternalisering.` },
      { s: `Under utrullingen spør en klinikkleder: «Hvorfor kaller vi inn alle hver tolvte måned? Mange trenger det ikke, og andre burde kommet oftere.» Hva gjør du med spørsmålet?`,
        opts: [
          [`Jeg parkerer det. Prosjektet handler om innkalling og ikke om intervaller.`, 0, `Du holder deg innenfor oppdraget og lar den viktigste læringen gå. Det er enkeltkretslæring.`],
          [`Jeg tar det videre til fagledelsen som et eget forslag, med data fra løsningen som grunnlag.`, 2, `Sterkt. Spørsmålet utfordrer en grunnantakelse, og du sørger for at det blir vurdert der det hører hjemme.`],
          [`Jeg endrer intervallene i systemet for klinikken som spurte.`, 1, `Du handler på en god idé, men uten faglig forankring. Skal læringen bli organisasjonens, må den være felles.`]
        ],
        th: `Argyris og Schön: dobbeltkretslæring stiller spørsmål ved målene og antakelsene, ikke bare ved utførelsen.` }
    ],
    out: [
      `Løsningen brukes fortsatt bare ved to klinikker. Prøv igjen, og tenk på hva som må til for at kunnskap skal flytte seg.`,
      `Flere klinikker er i gang. Se en gang til på hvordan du fanger opp spørsmålene som utfordrer premissene.`,
      `Alle klinikkene bruker løsningen, og fagledelsen vurderer behovsstyrte intervaller. Piloten ble til læring for hele tjenesten.`
    ]
  },
  refl: `Hva er den viktigste tause kunnskapen i ditt team? Hvem sitter på den, og hva skjer hvis vedkommende slutter i morgen?`,
  mission: `Finn en pilot hos dere som aldri ble skalert. Hvilke av Rogers' fem egenskaper manglet, og hvem eide spredningen?`,
  read: [`Jacobsen og Thorsvik, Hvordan organisasjoner fungerer: kapitlet om læring og innovasjon`, `Nonaka og Takeuchi (1995), The Knowledge-Creating Company`, `March (1991), Exploration and Exploitation in Organizational Learning`]
});

F.push({
  n: 11, id: 'f11', zone: 3,
  t: `Endring`,
  k: `Organisasjonsendring`,
  intro: `Mange endringer gir mindre enn de lovet. Sjelden fordi løsningen var feil, oftere fordi innføring ble forvekslet med utrulling. Her lærer du hva som driver endring, hvorfor motstand er rasjonell, og hvordan endring ledes.`,
  rooms: [
    { id: 'f11r1', t: `Hva er det som endres?`, cards: [
      { h: `Alt henger sammen`,
        b: `**Leavitt** viste at organisasjoner består av fire deler som påvirker hverandre: **oppgaver**, **struktur**, **teknologi** og **mennesker**. Endrer du én, forskyver du de tre andre. Derfor finnes det ingen rene teknologiprosjekter. Ny teknologi endrer hvilke oppgaver som gjøres, hvem som har ansvar, og hvilken kompetanse som trengs.`,
        fig: 'leavitt',
        ex: `Nytt saksbehandlingssystem flytter kontrollarbeid fra arkivet til saksbehandlerne, gjør to ledd i godkjenningen overflødige og krever ny kompetanse. Teknologien var bare ett av fire hjørner.` },
      { h: `Planlagt og fremvoksende endring`,
        b: `**Planlagt endring** har et mål, en plan og noen som leder den. Mye endring skjer likevel uten plan: gjennom små tilpasninger i hverdagen, gjennom press utenfra eller gjennom konflikt. Endringer kan være **inkrementelle**, altså steg for steg, eller **radikale**, altså brudd med det bestående. Lange stabile perioder avbrutt av korte omveltninger er et vanlig mønster.`,
        ex: `Ingen vedtok at Skarvøy skulle bli en organisasjon med hjemmekontor. Det skjedde på to uker i mars 2020. Ti år med planer for fleksibelt arbeid hadde gitt lite.` },
      { ty: 'mc', q: `Et nytt fagsystem innføres uten at noen har tenkt på endrede oppgaver, roller og kompetanse. Hvilken modell advarer mot dette?`,
        a: [`Leavitts diamant`, `Maslows behovshierarki`, `Søppelbøttemodellen`, `Medierikhet`],
        why: `Teknologi er ett av fire hjørner. Rører du ett, flytter de andre seg.` },
      { h: `Lewins tre faser`,
        b: `**Kurt Lewin** beskrev endring som tre faser. **Opptining**: dagens tilstand må oppleves som utilstrekkelig. **Endring**: nye måter prøves ut. **Nedfrysing**: det nye stabiliseres i rutiner, strukturer og kultur. Han beskrev også **kraftfeltet**: enhver situasjon holdes på plass av drivkrefter og motkrefter. Å fjerne motkrefter virker ofte bedre enn å øke presset.`,
        ex: `Skolene bruker ikke den nye vurderingsmodulen. Mer mas øker motstanden. Da kravet om dobbeltføring i det gamle systemet ble fjernet, tok bruken av.` },
      { ty: 'order', q: `Sett Lewins faser i riktig rekkefølge.`,
        items: [`Opptining: dagens situasjon oppleves som utilstrekkelig`, `Endring: nye arbeidsmåter prøves ut`, `Nedfrysing: det nye festes i rutiner og kultur`],
        why: `Uten opptining møter endringen en organisasjon som ikke ser behovet. Uten nedfrysing glir alt tilbake.` }
    ]},
    { id: 'f11r2', t: `Motstand`, cards: [
      { h: `Motstand er rasjonell`,
        b: `Motstand blir ofte forklart med at folk er redde for forandring. Sett fra den enkelte er den som regel fornuftig. Endring kan bety **tap** av kompetanse, status, fellesskap eller trygghet. Den kan gi **ekstra arbeid** i en overgang. Den kan bryte med det folk mener er **faglig riktig**. Og den kan forskyve **makt**. Motstand er dessuten informasjon. De som protesterer, ser ofte svakheter planleggerne har oversett.`,
        ex: `Per-Olav er skeptisk til KI-assistenten. Han har sett den foreslå feil lovhjemmel to ganger. Skepsisen er kvalitetssikring ingen har bedt om.` },
      { h: `Den psykologiske kontrakten`,
        b: `Ved siden av arbeidsavtalen finnes en **psykologisk kontrakt**: uskrevne forventninger om hva den ansatte gir og får. Endringer som bryter kontrakten, oppleves som svik, selv når alt formelt er i orden. Den som ble ansatt for å utøve faglig skjønn, og som får beskjed om å følge systemets forslag, opplever at avtalen er endret uten forhandling.`,
        ex: `Arkivaren valgte yrket for å sikre dokumentasjon for ettertiden. Nå skal hun «forvalte metadata i en automatisert flyt». Tittelen er den samme. Jobben hun sa ja til, er borte.`,
        src: `Begrepet er særlig knyttet til Denise Rousseau.` },
      { ty: 'multi', q: `Hvilke grunner til motstand kan være rasjonelle sett fra den enkelte?`,
        ok: [`Kompetansen min blir mindre verdt`, `Jeg får ekstra arbeid i overgangen`, `Endringen bryter med det jeg mener er faglig riktig`, `Jeg mister innflytelse`],
        no: [`Mennesker er av natur imot alt nytt`, `Motstand skyldes alltid latskap`],
        why: `Motstand har som regel konkrete grunner. De to siste påstandene er forklaringer som stopper analysen.` },
      { h: `Seks måter å møte motstand på`,
        b: `**Kotter og Schlesinger** beskriver seks strategier. **Informasjon og opplæring** når motstanden skyldes manglende kunnskap. **Deltakelse** når de berørte har kunnskap du trenger. **Støtte** når folk er redde. **Forhandling** når noen taper og har makt til å stanse. **Manipulering og kooptering** når annet ikke virker. **Tvang** når det haster. De to siste er raske og har høy pris i tillit.`,
        ex: `Saksbehandlerne kjenner unntakene systemet ikke håndterer. Å bare informere dem er feil strategi. De skal delta, fordi løsningen blir dårligere uten dem.` },
      { ty: 'match', q: `Koble situasjon og strategi.`,
        pairs: [[`De berørte har kunnskap løsningen trenger`, `Deltakelse`], [`Motstanden skyldes manglende kunnskap`, `Informasjon og opplæring`], [`Noen taper og har makt til å stanse`, `Forhandling`], [`Folk er redde og usikre`, `Støtte`], [`Det haster, og du har myndigheten`, `Tvang`]],
        why: `Strategien velges etter årsaken til motstanden, ikke etter hva som er raskest.` }
    ]},
    { id: 'f11r3', t: `Å lede endring`, cards: [
      { h: `Kotters åtte trinn`,
        b: `**John Kotter** beskriver åtte trinn: skap forståelse for at endringen **haster**, bygg en **styrende koalisjon**, utvikle **visjon og strategi**, **kommuniser** visjonen, **fjern hindringer** og gi folk myndighet, skap **kortsiktige gevinster**, **konsolider** og driv videre, og **forankre** det nye i kulturen. De vanligste feilene er å hoppe over starten og å erklære seier for tidlig.`,
        ex: `Systemet er satt i drift, prosjektet feirer med kake og oppløses. Tre måneder senere bruker halvparten gamle regneark ved siden av. Trinn sju og åtte ble aldri gjort.` },
      { ty: 'order', q: `Sett Kotters åtte trinn i riktig rekkefølge.`,
        items: [`Skap forståelse for at det haster`, `Bygg en styrende koalisjon`, `Utvikle visjon og strategi`, `Kommuniser visjonen`, `Fjern hindringer`, `Skap kortsiktige gevinster`, `Konsolider og driv videre`, `Forankre i kulturen`],
        why: `Rekkefølgen er logisk: først vilje og allianser, så retning, så handling, til slutt forankring.` },
      { h: `To veier: E og O`,
        b: `**Beer og Nohria** beskriver to strategier. **Strategi E** søker økonomisk gevinst gjennom struktur og systemer. Den er toppstyrt, planlagt og rask. **Strategi O** bygger organisasjonens evne til å lære. Den er deltakende, fremvoksende og langsom. E gir raske resultater og sliter på tillit. O bygger kultur, men kan mangle retning. De fleste vellykkede endringer kombinerer.`,
        ex: `Sentralisering av lønn og regnskap gjennomføres som E: vedtak, plan, dato. Arbeidet med å få avdelingene til å eie egne digitale tjenester er O: nettverk, læring og tid.` },
      { ty: 'sort', q: `Strategi E eller O?`, cats: [`Strategi E`, `Strategi O`],
        items: [[`Toppstyrt og planlagt`, 0], [`Deltakende og fremvoksende`, 1], [`Målet er økonomisk gevinst`, 0], [`Målet er evne til å lære`, 1], [`Virkemidlene er struktur og systemer`, 0], [`Virkemidlene er kultur og kompetanse`, 1]],
        why: `E står for economic, O for organizational. De utfyller hverandre.` },
      { h: `Fra innføring til gevinst`,
        b: `Kritikken av trinnmodeller er at endring sjelden er lineær og aldri helt ferdig. **Weick og Quinn** beskriver endring som kontinuerlig: små justeringer som hoper seg opp. For digitalisering er lærdommen at oppstart i drift er begynnelsen. **Gevinster** kommer når arbeidsmåter faktisk endres. De må ha en eier i linja, målepunkter og oppfølging etter at prosjektet er slutt.`,
        ex: `Gevinstplanen sier «to årsverk spart». Ingen leder har fått ansvaret for å ta ut gevinsten. Tiden som spares, fylles umerkelig med andre oppgaver. Systemet virker, og gevinsten finnes ikke.` },
      { ty: 'tf', q: `Gevinstene av et nytt system kommer av seg selv når det er satt i drift.`, sant: false,
        why: `Gevinster krever endrede arbeidsmåter, en eier og oppfølging over tid.` }
    ]}
  ],
  quiz: [
    { ty: 'mc', q: `Hva er hovedpoenget i Leavitts diamant?`,
      a: [`Oppgaver, struktur, teknologi og mennesker påvirker hverandre`, `Endring går alltid gjennom åtte trinn`, `Motstand skyldes frykt for det ukjente`, `Teknologien bestemmer organisasjonsformen`],
      why: `Endring i ett hjørne forskyver de tre andre.` },
    { ty: 'tf', q: `Ifølge Lewin virker det ofte bedre å fjerne motkrefter enn å øke presset.`, sant: true,
      why: `Økt press møter økt motpress. Færre hindringer flytter likevekten uten å øke spenningen.` },
    { ty: 'mc', q: `Hva er den vanligste feilen i slutten av en endringsprosess, ifølge Kotter?`,
      a: [`Å erklære seier for tidlig`, `Å kommunisere for mye`, `Å involvere for mange`, `Å bruke for lang tid på visjonen`],
      why: `Det nye er skjørt til det er festet i rutiner og kultur.` },
    { ty: 'match', q: `Koble navn og bidrag.`,
      pairs: [[`Lewin`, `Opptining, endring, nedfrysing`], [`Kotter`, `Åtte trinn`], [`Leavitt`, `Fire deler som henger sammen`], [`Beer og Nohria`, `Strategi E og O`], [`Kotter og Schlesinger`, `Seks måter å møte motstand på`]],
      why: `Fem av de mest brukte endringsmodellene.` },
    { ty: 'gap', q: `De uskrevne forventningene mellom arbeidstaker og arbeidsgiver kalles den psykologiske ___.`,
      a: [`kontrakten`, `tryggheten`, `motstanden`, `koalisjonen`],
      why: `Brudd på den psykologiske kontrakten oppleves som svik, selv når alt formelt er i orden.` },
    { ty: 'mc', q: `Saksbehandlerne kjenner unntak som systemet ikke håndterer, og er skeptiske. Hvilken strategi passer best?`,
      a: [`Deltakelse`, `Tvang`, `Manipulering`, `Ren informasjon`],
      why: `De har kunnskap løsningen trenger. Deltakelse gir bedre løsning og mer eierskap.` },
    { ty: 'tf', q: `Motstand mot endring er alltid irrasjonell.`, sant: false,
      why: `Motstand har som regel gode grunner og er ofte en kilde til informasjon om svakheter i planen.` },
    { ty: 'sort', q: `Hvilken av Lewins faser?`, cats: [`Opptining`, `Endring`, `Nedfrysing`],
      items: [[`Vise tall for hvor mye tid dagens løsning stjeler`, 0], [`Prøve ny arbeidsflyt i to avdelinger`, 1], [`Oppdatere rutiner og opplæring av nyansatte`, 2], [`La brukere fortelle om feil i dagens system`, 0], [`Superbrukere støtter kolleger i overgangen`, 1], [`Avvikle det gamle systemet`, 2]],
      why: `Opptining skaper behov. Endring prøver ut. Nedfrysing fester det nye.` },
    { ty: 'mc', q: `Hva må til for at gevinster skal bli realisert etter et digitaliseringsprosjekt?`,
      a: [`En eier i linja, målepunkter og oppfølging etter at prosjektet er avsluttet`, `At leverandøren leverer til avtalt tid`, `At prosjektet avsluttes raskt`, `At gevinstplanen er vedtatt politisk`],
      why: `Prosjektet leverer muligheten. Linja må hente ut gevinsten.` }
  ],
  kase: {
    t: `Oppstart er ikke målet`,
    intro: `Skarvøy innfører nytt sak- og arkivsystem for 1 400 ansatte. Du er endringsansvarlig. Det tekniske prosjektet er i rute.`,
    steps: [
      { s: `Det er tre måneder til oppstart. Hva bruker du mest tid på?`,
        opts: [
          [`Å forklare hvorfor dagens system må byttes, med konkrete eksempler fra avdelingenes egen hverdag.`, 2, `Sterkt. Uten opptining blir det nye systemet noe som skjer med folk. Egne eksempler gjør behovet troverdig.`],
          [`Å lage e-læring i alle funksjoner.`, 1, `Opplæring trengs, men den svarer på «hvordan». Folk må først forstå «hvorfor».`],
          [`Å sikre at leverandøren holder tidsplanen.`, 0, `Det er det tekniske prosjektets jobb. Din jobb er det som ikke står i leverandørens plan: menneskene, oppgavene og rollene.`]
        ],
        th: `Lewin og Kotter: endring starter med at dagens situasjon oppleves som utilstrekkelig. Leavitt: teknologi er bare ett av fire hjørner.` },
      { s: `Arkivarene motsetter seg at saksbehandlerne skal journalføre selv. De mener kvaliteten vil falle. Hvilken strategi velger du?`,
        opts: [
          [`Deltakelse. Arkivarene utformer kvalitetskontrollen og blir veiledere for saksbehandlerne.`, 2, `Sterkt. Arkivarene har kunnskap løsningen trenger, og de får en ny og viktig rolle. Motstanden var kvalitetssikring.`],
          [`Informasjon. Jeg forklarer at endringen er vedtatt.`, 0, `Motstanden skyldes ikke manglende informasjon. De forstår endringen godt og mener den er faglig risikabel.`],
          [`Forhandling. De får beholde journalføringen for de viktigste sakstypene.`, 1, `Et kompromiss som demper konflikten. Du får to parallelle arbeidsmåter og har ikke svart på bekymringen om kvalitet.`]
        ],
        th: `Kotter og Schlesinger: velg strategi etter årsaken til motstanden. Når de berørte har kunnskap du trenger, er deltakelse riktig.` },
      { s: `Systemet er i drift. Styringsgruppa vil avslutte prosjektet. Du ser at mange lagrer dokumenter lokalt og journalfører i ettertid. Hva foreslår du?`,
        opts: [
          [`Vi avslutter som planlagt. Resten er linjas ansvar.`, 0, `Seier erklært for tidlig. Uten oppfølging glir folk tilbake til gamle vaner, og gevinstene uteblir.`],
          [`Vi forlenger innføringen i tre måneder med superbrukere, måling av faktisk bruk og en navngitt gevinsteier i hver avdeling.`, 2, `Sterkt. Du konsoliderer og forankrer. Målingen viser hvor det glipper, og gevinsteierne har ansvaret når prosjektet er borte.`],
          [`Vi sender ut en påminnelse om at lokal lagring ikke er tillatt.`, 1, `Regelen er riktig. En påminnelse endrer likevel sjelden vaner når den gamle måten fortsatt er enklest.`]
        ],
        th: `Kotters trinn sju og åtte: konsolider og forankre. Nedfrysing skjer ikke av seg selv.` }
    ],
    out: [
      `Systemet er i drift, og mange jobber rundt det. Prøv igjen, og husk at teknologi er ett av fire hjørner.`,
      `Innføringen gikk brukbart. Se en gang til på hva som skjer etter oppstart.`,
      `Et halvt år etter oppstart journalføres ni av ti dokumenter riktig, og arkivarene leder kvalitetsarbeidet. Du ledet en endring, ikke en installasjon.`
    ]
  },
  refl: `Tenk på en endring du selv var imot. Hva var det du sto i fare for å miste? Ble det noen gang snakket om?`,
  mission: `Lag en kraftfeltanalyse for en endring du jobber med, i verktøyet Kraftfelt. Finn én motkraft som kan fjernes, i stedet for å øke presset.`,
  read: [`Jacobsen og Thorsvik, Hvordan organisasjoner fungerer: kapitlet om endring`, `Jacobsen, Organisasjonsendringer og endringsledelse`, `Kotter (1996), Leading Change`]
});

F.push({
  n: 12, id: 'f12', zone: 3,
  t: `Ledelse`,
  k: `Ledelse`,
  intro: `Øverste etasje. Ledelse er det mest omskrevne temaet i faget, og det forskerne er minst enige om. Her lærer du hva ledere faktisk gjør, hvorfor ingen stil alltid virker, og hva som er særegent med å lede i offentlig sektor.`,
  rooms: [
    { id: 'f12r1', t: `Hva er ledelse?`, cards: [
      { h: `Ledelse og styring`,
        b: `Ledelse er en **prosess der noen påvirker andre** for å nå mål. Det skilles ofte mellom **ledelse**, som gir retning, mening og motivasjon, og **styring** eller administrasjon, som planlegger, organiserer og kontrollerer. Organisasjoner trenger begge. Ledelse kan også være **indirekte**: gjennom struktur, kultur og systemer som former atferd uten at lederen er til stede.`,
        ex: `Marit leder direkte når hun veileder Nora i en vanskelig sak. Hun leder indirekte når hun endrer prioriteringskriteriene i porteføljen. Det siste påvirker flere og varer lenger.` },
      { h: `Hva ledere faktisk gjør`,
        b: `**Mintzberg** fulgte ledere gjennom arbeidsdagen og fant en oppstykket hverdag med korte samtaler, avbrytelser og lite planlegging. Han beskrev ti roller i tre grupper. **Mellommenneskelige**: gallionsfigur, leder og kontaktperson. **Informasjonsroller**: overvåker, formidler og talsperson. **Beslutningsroller**: entreprenør, problemløser, ressursfordeler og forhandler.`,
        ex: `På én formiddag åpner Marit en fagdag, videreformidler et signal fra direktøren, fordeler to utviklere mellom tre prosjekter og megler mellom drift og utvikling. Fire roller før lunsj.` },
      { ty: 'sort', q: `Hvilken gruppe av lederroller?`, cats: [`Mellommenneskelig`, `Informasjon`, `Beslutning`],
        items: [[`Åpner fagdagen på vegne av seksjonen`, 0], [`Videreformidler signaler fra direktøren til teamet`, 1], [`Fordeler utviklere mellom prosjekter`, 2], [`Bygger nettverk med andre fylkeskommuner`, 0], [`Følger med på hva som rører seg i fagfeltet`, 1], [`Megler mellom drift og utvikling`, 2]],
        why: `Mintzbergs ti roller fordeler seg på relasjoner, informasjon og beslutninger.` },
      { h: `Fire funksjoner som må fylles`,
        b: `**Adizes** hevder at enhver organisasjon trenger fire lederfunksjoner. **Produsenten** leverer resultater. **Administratoren** sørger for orden og systemer. **Integratoren** bygger fellesskap. **Entreprenøren** ser muligheter og driver fornyelse. Ingen person er god på alt. Poenget er at ledergruppa samlet dekker alle fire. I norsk faglitteratur er modellen kjent som PAIE.`,
        ex: `Ledergruppa i IKT er sterk på produksjon og administrasjon. Ingen har entreprenørrollen. Det merkes først når omgivelsene endrer seg, og ingen har sett det komme.` },
      { ty: 'match', q: `Koble PAIE-funksjon og kjennetegn.`,
        pairs: [[`Produsent`, `Leverer resultater`], [`Administrator`, `Sørger for orden og systemer`], [`Integrator`, `Bygger fellesskap`], [`Entreprenør`, `Ser muligheter og fornyer`]],
        why: `Alle fire funksjonene må dekkes, men sjelden av samme person.` }
    ]},
    { id: 'f12r2', t: `Trekk, stil og situasjon`, cards: [
      { h: `Fødes ledere?`,
        b: `**Trekkteoriene** lette etter personlige egenskaper som skiller gode ledere fra andre. Forskningen finner svake til moderate sammenhenger mellom ledelse og trekk som utadvendthet, planmessighet, åpenhet og generelle evner. Ingen trekk garanterer suksess. Folk gir dessuten ledere mer av æren og skylden enn det er grunnlag for. **Meindl** kalte det ledelsesromantikk.`,
        ex: `Skarvøy fikk en pris for digitalisering året etter at ny direktør tiltrådte. Avisen ga henne æren. Prosjektene som ga prisen, startet tre år før hun kom.` },
      { h: `Oppgave og relasjon`,
        b: `Atferdsforskningen fant to hoveddimensjoner i lederstil. **Oppgaveorientering**: struktur, mål og oppfølging. **Relasjonsorientering**: omtanke, støtte og involvering. **Blake og Mouton** satte dem i et rutenett og mente at høy skår på begge var best. Senere forskning viser at effekten avhenger av situasjonen.`,
        ex: `I en krise med nedetid trenger teamet tydelige beskjeder. I et team som er slitent etter en lang innføring, trengs det først og fremst at noen ser dem.` },
      { ty: 'mc', q: `Hva er de to hoveddimensjonene i klassisk forskning på lederstil?`,
        a: [`Oppgaveorientering og relasjonsorientering`, `Karisma og kontroll`, `Belønning og straff`, `Plan og improvisasjon`],
        why: `Studiene ved Ohio State og Michigan fant de samme to dimensjonene.` },
      { h: `Situasjonsbestemt ledelse`,
        b: `**Hersey og Blanchard** mener lederstilen bør tilpasses medarbeiderens **kompetanse og vilje** i oppgaven. Den som er ny i oppgaven, trenger **instruerende** stil. Den som har lært noe, men mistet motet, trenger **veiledende** stil med både styring og støtte. Den som kan, men nøler, trenger **støttende** stil. Den som både kan og vil, trenger **delegerende** stil. Samme person kan være på ulike nivåer i ulike oppgaver.`,
        fig: 'situasjon',
        ex: `Nora er en erfaren utvikler og trenger frihet i kodearbeidet. Første gang hun skal lede et møte med politikere, trenger hun tydelig veiledning. Modellen finnes i flere versjoner og har svak empirisk støtte, men den er en nyttig påminnelse om å tilpasse seg.` },
      { ty: 'match', q: `Koble medarbeiderens utgangspunkt og anbefalt stil.`,
        pairs: [[`Lav kompetanse, høy vilje`, `Instruerende`], [`Noe kompetanse, lav vilje`, `Veiledende`], [`Høy kompetanse, varierende vilje`, `Støttende`], [`Høy kompetanse, høy vilje`, `Delegerende`]],
        why: `Styring trappes ned etter hvert som kompetansen øker. Støtten følger motivasjonen.` }
    ]},
    { id: 'f12r3', t: `Ledelse i dag`, cards: [
      { h: `Transaksjon og transformasjon`,
        b: `**Transaksjonsledelse** bygger på bytte: innsats mot belønning, og avvik korrigeres. **Transformasjonsledelse**, beskrevet av Burns og Bass, løfter medarbeidernes ambisjoner gjennom fire virkemidler: lederen er et **forbilde**, **inspirerer** med mening og retning, **utfordrer** tankesett og viser **omtanke** for den enkelte. Forskningen finner positive sammenhenger med engasjement og ytelse. Begge formene trengs.`,
        ex: `«Lever rapporten innen fredag, så tar vi fri mandag» er transaksjon. «Vi skal gjøre det enklere å være elev i Skarvøy, og du vet best hvor skoen trykker» er transformasjon.` },
      { ty: 'sort', q: `Transaksjons- eller transformasjonsledelse?`, cats: [`Transaksjon`, `Transformasjon`],
        items: [[`Belønning for oppnådde mål`, 0], [`Gir arbeidet mening og retning`, 1], [`Korrigerer avvik fra standard`, 0], [`Utfordrer vante tenkemåter`, 1], [`Tydelige avtaler om innsats og utbytte`, 0], [`Ser og utvikler den enkelte`, 1]],
        why: `Transaksjon handler om bytte og kontroll. Transformasjon handler om mening og utvikling.` },
      { h: `Ledelse er noe flere gjør`,
        b: `Nyere perspektiver flytter blikket fra helten til **relasjonene**. **LMX-teorien** viser at ledere utvikler ulik kvalitet i relasjonen til ulike medarbeidere, og at det påvirker trivsel og ytelse. **Distribuert ledelse** ser ledelse som noe som utøves av mange, avhengig av hvem som har kompetansen. **Selvledelse** og tillitsbasert ledelse forutsetter kompetente medarbeidere og tydelige rammer.`,
        ex: `I fagteamet leder arkitekten diskusjonen om integrasjoner, juristen diskusjonen om hjemmel og teamlederen prioriteringen. Ledelsen flytter seg med oppgaven.` },
      { ty: 'tf', q: `Distribuert ledelse betyr at ingen har ansvar.`, sant: false,
        why: `Ledelse utøves av flere etter kompetanse. Det formelle ansvaret ligger fortsatt hos noen, og rammene må være tydelige.` },
      { h: `Å lede i krysspress`,
        b: `Offentlige ledere står mellom **politikk, fag og brukere**. Mellomledere skal i tillegg være lojale oppover og troverdige nedover. Digitalisering legger til en ny utfordring: mye må oppnås **på tvers**, overfor folk du ikke har myndighet over. Da hjelper ikke stillingsmakt. Du må lede gjennom relasjoner, faglig tyngde, felles mål og evnen til å oversette mellom fagspråk.`,
        ex: `Du skal få fem avdelinger til å bruke samme skjemaplattform. Ingen av dem rapporterer til deg. Autoriteten din er kunnskapen din, nettverket ditt og en direktør som støtter retningen.` },
      { ty: 'mc', q: `Du skal få fem avdelinger til å bruke samme plattform, og ingen av dem rapporterer til deg. Hva er det viktigste du har å lede med?`,
        a: [`Faglig tyngde, relasjoner og felles mål`, `Stillingsmakt`, `Muligheten til å gi lønnsøkning`, `Trusselen om sanksjoner`],
        why: `Ledelse på tvers hviler på ekspertmakt, referansemakt og interesser som deles.` }
    ]}
  ],
  quiz: [
    { ty: 'mc', q: `Hvordan skilles ledelse og styring ofte i faglitteraturen?`,
      a: [`Ledelse gir retning og mening. Styring planlegger, organiserer og kontrollerer`, `Ledelse utøves av toppledere, styring av mellomledere`, `Ledelse er uformell, styring er lovfestet`, `Begrepene betyr det samme`],
      why: `Skillet er blant annet kjent fra Kotter. Organisasjoner trenger begge deler.` },
    { ty: 'tf', q: `Forskningen har funnet personlighetstrekk som garanterer at en person blir en god leder.`, sant: false,
      why: `Sammenhengene mellom trekk og ledelse er svake til moderate. Situasjonen betyr mye.` },
    { ty: 'match', q: `Koble navn og bidrag.`,
      pairs: [[`Mintzberg`, `Ti lederroller`], [`Adizes`, `PAIE`], [`Hersey og Blanchard`, `Situasjonsbestemt ledelse`], [`Bass`, `Transformasjonsledelse`], [`Meindl`, `Ledelsesromantikk`]],
      why: `Fem navn du bør kunne plassere i ledelsesfaget.` },
    { ty: 'mc', q: `En medarbeider har høy kompetanse og høy vilje i en oppgave. Hvilken stil anbefaler situasjonsbestemt ledelse?`,
      a: [`Delegerende`, `Instruerende`, `Veiledende`, `Støttende`],
      why: `Den som både kan og vil, trenger verken styring eller mye støtte i oppgaven.` },
    { ty: 'gap', q: `Tendensen til å gi ledere mer av æren og skylden enn det er grunnlag for, kalles ___.`,
      a: [`ledelsesromantikk`, `transformasjonsledelse`, `selvledelse`, `krysspress`],
      why: `Meindl viste at vi overvurderer lederes betydning for resultater.` },
    { ty: 'multi', q: `Hvilke virkemidler hører til transformasjonsledelse?`,
      ok: [`Lederen er et forbilde`, `Inspirerer med mening og retning`, `Utfordrer vante tenkemåter`, `Viser omtanke for den enkelte`],
      no: [`Belønner resultater etter avtale`, `Griper bare inn når noe går galt`],
      why: `De to siste hører til transaksjonsledelse.` },
    { ty: 'mc', q: `Hva er indirekte ledelse?`,
      a: [`Å påvirke gjennom struktur, kultur og systemer`, `Å lede gjennom en stedfortreder`, `Å unngå å ta beslutninger`, `Å lede på e-post`],
      why: `Indirekte ledelse former rammene folk handler innenfor, og når ofte flere enn direkte ledelse.` },
    { ty: 'tf', q: `LMX-teorien sier at ledere har relasjoner av lik kvalitet til alle medarbeidere.`, sant: false,
      why: `Kjernen i LMX er at relasjonene varierer i kvalitet, og at det har følger.` },
    { ty: 'mc', q: `En mellomleder skal iverksette et kutt hun selv er uenig i, og samtidig holde på tilliten i teamet. Hva kalles situasjonen?`,
      a: [`Krysspress`, `Dekobling`, `Gruppetenkning`, `Målforskyvning`],
      why: `Mellomledere står mellom forventninger ovenfra og nedenfra.` }
  ],
  kase: {
    t: `Leder uten linje`,
    intro: `Du har fått ansvaret for et tverrfaglig team som skal forenkle innbyggerdialogen. Teamet har sju medlemmer fra fem avdelinger. Ingen rapporterer til deg, og alle har andre oppgaver ved siden av.`,
    steps: [
      { s: `Første møte. Hva legger du vekt på?`,
        opts: [
          [`En detaljert framdriftsplan med oppgaver fordelt på navn.`, 1, `Struktur trengs. Uten felles forståelse av hvorfor teamet finnes, blir planen din og ikke teamets.`],
          [`Å bli enige om hvilket problem vi løser for innbyggerne, og hva hver avdeling trenger for å kunne bidra.`, 2, `Sterkt. Uten linjemyndighet er felles mål og gjensidig nytte det du har å lede med.`],
          [`Å vise til mandatet fra direktøren og forventningen om leveranse.`, 0, `Du låner stillingsmakt du ikke har. Det gir oppmøte, men ikke innsats.`]
        ],
        th: `Ledelse på tvers hviler på faglig tyngde, relasjoner og felles mål. Stillingsmakt rekker ikke over avdelingsgrenser.` },
      { s: `Teamet har to ytterpunkter. Nora er ny, ivrig og usikker på forvaltningen. Per-Olav er svært erfaren, men har sluttet å komme med forslag. Hvordan leder du dem?`,
        opts: [
          [`Likt. Rettferdighet betyr samme behandling.`, 0, `Lik behandling av ulike behov er ikke rettferdig. Nora får for lite støtte, og Per-Olav får for lite ansvar.`],
          [`Tett veiledning og tydelige rammer til Nora. En samtale med Per-Olav om hva som skal til for at han vil bidra, og så ansvar for et eget område.`, 2, `Sterkt. Du tilpasser stilen til kompetanse og vilje i oppgaven. Nora trenger styring. Per-Olav trenger å bli spurt og betrodd.`],
          [`Jeg lar begge finne ut av det selv. De er voksne.`, 0, `Delegering passer for den som både kan og vil. Her får én for lite hjelp, og én for lite grunn til å bry seg.`]
        ],
        th: `Hersey og Blanchard: tilpass styring og støtte til medarbeiderens kompetanse og vilje i den konkrete oppgaven.` },
      { s: `Etter fire måneder trekker samferdsel sin deltaker ut. Avdelingslederen sier at de ikke har kapasitet. Hva gjør du?`,
        opts: [
          [`Jeg klager til direktøren og ber om at deltakeren beordres tilbake.`, 1, `Det kan virke. Du får tilbake en deltaker som er sendt mot sin leders vilje, og en avdelingsleder som husker det.`],
          [`Jeg tar en samtale med avdelingslederen om hva samferdsel selv tjener på arbeidet, og tilpasser bidraget til kapasiteten de har.`, 2, `Sterkt. Du leder gjennom relasjon og gjensidig nytte, og du holder døra åpen.`],
          [`Vi fortsetter uten samferdsel.`, 0, `Enkelt nå, dyrt senere. Løsningen blir laget uten en av avdelingene som skal bruke den.`]
        ],
        th: `Offentlige ledere står i krysspress og må ofte oppnå resultater gjennom folk de ikke har myndighet over. Da er forhandling og felles interesser de viktigste verktøyene.` }
    ],
    out: [
      `Teamet møter opp, men leverer lite. Prøv igjen, og tenk på hva du har å lede med når du ikke har linja.`,
      `Teamet fungerer. Se en gang til på hvordan du tilpasser deg hver enkelt, og hvordan du holder avdelingene med.`,
      `Teamet leverer, og samferdsel ber om å få en deltaker til. Du ledet uten å kunne beordre noen.`
    ]
  },
  refl: `Hvilken av de fire PAIE-funksjonene er du sterkest på, og hvilken er svakest dekket i ledergruppa eller teamet ditt?`,
  mission: `Velg to medarbeidere eller kolleger og én oppgave for hver. Hvor er de på kompetanse og vilje i akkurat den oppgaven, og hvilken stil trenger de fra deg?`,
  read: [`Jacobsen og Thorsvik, Hvordan organisasjoner fungerer: kapitlet om ledelse`, `Strand, Ledelse, organisasjon og kultur`, `Yukl, Leadership in Organizations`]
});
