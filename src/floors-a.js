/* Organisasjonslære – faginnhold, etasje 1–3.
   Tekstkort har h (overskrift), b (brødtekst), ex (i praksis), fig (modell), src (kilde).
   Spørsmål har ty: mc (a[0] er riktig), tf (sant), multi (ok/no), match (pairs), order (items i riktig rekkefølge),
   sort (cats + items [tekst, kategori]), gap (q med ___, a[0] er riktig). */
const F = [];

F.push({
  n: 1, id: 'f1', zone: 0,
  t: `Hva er en organisasjon?`,
  k: `Organisasjon og organisasjonsteori`,
  intro: `Før du tar heisen videre, trenger du grunnmuren. Hva skiller en organisasjon fra en vennegjeng, hvorfor er fylkeskommunen noe annet enn en bedrift, og hva skal du egentlig med teori?`,
  rooms: [
    { id: 'f1r1', t: `Et system med et oppdrag`, cards: [
      { h: `Hva gjør noe til en organisasjon?`,
        b: `En mye brukt definisjon sier at en organisasjon er **et sosialt system som er bevisst konstruert for å løse oppgaver og nå bestemte mål**. Hvert ledd betyr noe. *Sosialt* fordi mennesker samhandler. *System* fordi delene henger sammen og trenger ressurser utenfra. *Bevisst konstruert* fordi noen har valgt arbeidsdeling og regler. *Mål* fordi organisasjonen finnes for å få noe til.`,
        ex: `Skarvøy fylkeskommune er konstruert for å løse oppgaver som videregående opplæring, fylkesveier, kollektivtransport og tannhelse. Køen på bussholdeplassen deler et mål om å komme fram, men ingen har organisert den.`,
        src: `Definisjonen bygger på Etzioni og brukes i de fleste lærebøker, også hos Jacobsen og Thorsvik.` },
      { h: `Hvorfor organiserer vi oss?`,
        b: `Organisasjoner løser to problemer samtidig. **Arbeidsdeling** lar folk spesialisere seg og bli gode på noe. **Koordinering** sørger for at de spesialiserte bidragene henger sammen. Jo mer du deler opp arbeidet, jo større blir behovet for å samordne. Nesten alle temaene videre i huset handler om denne spenningen.`,
        ex: `Når fylkeskommunen innfører nytt saksbehandlingssystem, trengs jurister, arkivarer, IT-arkitekter og saksbehandlere. Hver gruppe kan sitt. Prosjektet står og faller på om noen får bidragene til å møtes.` },
      { ty: 'mc', q: `Hvilket kjennetegn skiller tydeligst en organisasjon fra en tilfeldig gruppe mennesker?`,
        a: [`Den er bevisst konstruert for å løse oppgaver og nå mål`, `Den består av mange mennesker`, `Medlemmene kjenner hverandre godt`, `Den har eget bygg og egen logo`],
        why: `Størrelse, vennskap og bygg avgjør ikke. Det avgjørende er at noen har konstruert arbeidsdeling og regler for å nå bestemte mål.` },
      { h: `Formelt og uformelt`,
        b: `Organisasjonskartet viser den **formelle** organisasjonen: stillinger, linjer, regler og rutiner. Ved siden av lever den **uformelle**: vaner, vennskap, uskrevne regler og hvem folk faktisk spør om råd. Begge påvirker hva som skjer. Den som bare leser organisasjonskartet, forstår halve huset.`,
        ex: `På papiret går alle bestillinger til IT gjennom tjenesteportalen. I praksis går mange innom Nora i tredje etasje først, fordi hun vet hvem som kan hjelpe. Det er uformell struktur i arbeid.` },
      { ty: 'tf', q: `Den uformelle organisasjonen er et tegn på at ledelsen har mistet kontrollen.`, sant: false,
        why: `Uformelle trekk finnes i alle organisasjoner. De kan både støtte og motvirke de formelle målene, og gode ledere regner med dem.` }
    ]},
    { id: 'f1r2', t: `Det offentlige er annerledes`, cards: [
      { h: `Folkevalgt styring`,
        b: `En fylkeskommune ledes ytterst av **folkevalgte**. Fylkestinget vedtar mål og budsjett, og administrasjonen under fylkeskommunedirektøren iverksetter. Målene er derfor resultat av politiske kompromisser. De kan være mange, vage og delvis i strid med hverandre. Det er en del av demokratiet og ikke et tegn på dårlig ledelse.`,
        ex: `Fylkestinget vil ha bedre digitale tjenester, lavere kostnader, lokale arbeidsplasser og sterkere personvern samtidig. Digitaliseringsavdelingen må leve med alle fire.`,
        src: `Christensen mfl. kaller offentlige organisasjoner multifunksjonelle: de skal ivareta mange hensyn på én gang.` },
      { h: `Verdier en bedrift kan velge bort`,
        b: `Offentlige organisasjoner skal ivareta **likebehandling, rettssikkerhet, åpenhet og etterprøvbarhet**. Lover om forvaltning, innsyn, arkiv, personvern, universell utforming og anskaffelser setter rammer for hvordan arbeidet gjøres. Rammene gjør noen ting tregere. De gjør også at innbyggerne kan stole på forvaltningen.`,
        ex: `En oppstartsbedrift kan lansere en halvferdig app og rette feil underveis. Fylkeskommunen må først vite hvor dataene lagres, om løsningen kan brukes med skjermleser, og hvordan vedtak dokumenteres.` },
      { ty: 'multi', q: `Hvilke trekk er typiske for offentlige organisasjoner?`,
        ok: [`Folkevalgt ledelse`, `Mange og delvis motstridende mål`, `Krav om åpenhet og likebehandling`],
        no: [`Overskudd til eierne som hovedmål`, `Fritt valg av hvilke kunder de vil betjene`],
        why: `Offentlige organisasjoner er politisk styrt, skal ivareta mange hensyn samtidig og kan ikke velge bort innbyggere.` },
      { h: `Ingen kunder, men innbyggere`,
        b: `Fylkeskommunen får det meste av inntektene fra **bevilgninger** og ikke fra salg i et marked. Den kan ikke velge bort ulønnsomme brukere, og brukerne kan sjelden velge en konkurrent. Suksess måles derfor i samfunnsnytte og legitimitet. Spørsmålet er sjelden om noe lønner seg. Spørsmålet er om det er riktig bruk av fellesskapets ressurser.`,
        ex: `Den digitale søknaden om skoleskyss skal brukes av alle elever i fylket. De med svake digitale ferdigheter eller dårlig nettdekning har krav på et like godt tilbud.` },
      { ty: 'mc', q: `Marit sier: «Vi kan ikke prioritere bare de enkleste brukerne, selv om det ville gitt raskest gevinst.» Hvilket trekk ved offentlig sektor peker hun på?`,
        a: [`Likebehandling og plikten til å betjene alle`, `Kravet om økonomisk overskudd`, `Konkurranse fra private tilbydere`, `Den uformelle organisasjonen`],
        why: `En bedrift kan velge de mest lønnsomme kundene. Offentlige tjenester skal nå alle som har rett på dem.` }
    ]},
    { id: 'f1r3', t: `Teori som briller`, cards: [
      { h: `Fra maskin til menneske`,
        b: `Tidlig på 1900-tallet lette klassikerne etter den ene beste måten å organisere på. **Taylor** delte arbeidet i små, målbare operasjoner. **Weber** beskrev byråkratiet med hierarki, regler og faglig kompetanse. **Fayol** formulerte prinsipper for administrasjon. Så kom **Human relations**-bevegelsen etter Hawthorne-studiene og viste at sosiale forhold, normer og oppmerksomhet påvirker innsatsen.`,
        ex: `Digital taylorisme er et levende begrep. Systemer som måler tastetrykk og saker per time, gjentar Taylors logikk med ny teknologi. Human relations minner om at folk reagerer på hvordan målingen oppleves.` },
      { h: `Det kommer an på`,
        b: `Fra 1960-tallet ble organisasjoner forstått som **åpne systemer** som er avhengige av omgivelsene. **Kontingensteorien** sier at det ikke finnes én beste struktur. Den beste løsningen avhenger av situasjonen: oppgaver, teknologi, størrelse og omgivelser. Senere kom institusjonell teori, som viser at organisasjoner også former seg etter hva som oppfattes som riktig og moderne.`,
        fig: 'system',
        ex: `Teamet som drifter lønnssystemet, trenger stabile rutiner. Teamet som utforsker KI-assistenter, trenger frihet til å prøve og feile. Samme fylkeskommune, ulike situasjoner, ulik organisering.` },
      { ty: 'match', q: `Koble navn og bidrag.`,
        pairs: [[`Taylor`, `Vitenskapelig arbeidsledelse`], [`Weber`, `Byråkratiet som idealtype`], [`Hawthorne-studiene`, `Sosiale forhold påvirker innsats`], [`Kontingensteori`, `Beste struktur avhenger av situasjonen`]],
        why: `Klassikerne lette etter én beste løsning. Human relations la til mennesket, og kontingensteorien la til situasjonen.` },
      { h: `Fire briller på samme sak`,
        b: `Ingen teori fanger alt. **Bolman og Deal** foreslår fire rammer. Den **strukturelle** ser mål, roller og regler. **Human resource**-rammen ser behov, kompetanse og relasjoner. Den **politiske** ser interesser, makt og knappe ressurser. Den **symbolske** ser mening, kultur og fortellinger. Christensen mfl. gjør et beslektet skille for offentlig sektor mellom et instrumentelt perspektiv, et kulturperspektiv og et myteperspektiv.`,
        ex: `Et forsinket skjemaprosjekt kan skyldes uklare roller (struktur), manglende opplæring (human resource), dragkamp om ressurser (politikk) eller at ingen tror på prosjektet (symbol). Hver brille peker mot ulike tiltak.` },
      { ty: 'mc', q: `«Problemet er at ingen vet hvem som eier prosessen. Vi må tegne opp ansvar og beslutningslinjer.» Hvilken ramme snakker?`,
        a: [`Den strukturelle`, `Human resource-rammen`, `Den politiske`, `Den symbolske`],
        why: `Roller, ansvar og beslutningslinjer er kjernen i den strukturelle rammen.` }
    ]}
  ],
  quiz: [
    { ty: 'mc', q: `Hva menes med at en organisasjon er et system?`,
      a: [`Delene er gjensidig avhengige, og helheten trenger ressurser fra omgivelsene`, `Alt arbeid er automatisert`, `Alle ansatte følger de samme rutinene`, `Organisasjonen har ett felles IT-system`],
      why: `Systemtenkning handler om sammenhenger: mellom delene innad, og mellom organisasjonen og omgivelsene.` },
    { ty: 'tf', q: `Kontingensteorien hevder at byråkrati alltid er den mest effektive organisasjonsformen.`, sant: false,
      why: `Kontingensteorien sier det motsatte: den beste strukturen avhenger av situasjonen.` },
    { ty: 'sort', q: `Formelt eller uformelt trekk?`, cats: [`Formelt`, `Uformelt`],
      items: [[`Delegeringsreglement`, 0], [`Fredagskaffen der sakene egentlig avklares`, 1], [`Stillingsbeskrivelse`, 0], [`Uskreven regel om aldri å si imot direktøren i møter`, 1], [`Organisasjonskart`, 0], [`Hvem folk faktisk spør om hjelp`, 1]],
      why: `Det formelle er vedtatt og nedskrevet. Det uformelle har vokst fram og styrer like mye.` },
    { ty: 'mc', q: `Hawthorne-studiene er mest kjent for å vise at …`,
      a: [`sosiale forhold og oppmerksomhet påvirker arbeidsinnsatsen`, `bedre belysning alltid gir høyere produktivitet`, `akkordlønn er den sterkeste motivasjonsfaktoren`, `spesialisering fjerner behovet for koordinering`],
      why: `Studiene ga støtet til Human relations-bevegelsen, som satte sosiale behov og gruppenormer på kartet.` },
    { ty: 'gap', q: `Jo mer arbeidet deles opp i spesialiserte oppgaver, jo større blir behovet for ___.`,
      a: [`koordinering`, `konkurranse`, `hierarki`, `frammøtekontroll`],
      why: `Arbeidsdeling og koordinering er to sider av samme organiseringsproblem.` },
    { ty: 'mc', q: `En leder sier: «Vi trenger en felles fortelling om hvorfor vi digitaliserer. Ellers blir dette bare et IT-prosjekt.» Hvilken ramme hos Bolman og Deal er dette?`,
      a: [`Den symbolske rammen`, `Den strukturelle rammen`, `Den politiske rammen`, `Human resource-rammen`],
      why: `Mening, fortellinger og symboler er den symbolske rammens område.` },
    { ty: 'multi', q: `Hvilke påstander stemmer om offentlige organisasjoner?`,
      ok: [`Målene er ofte resultat av politiske kompromisser`, `De finansieres i hovedsak gjennom bevilgninger`, `De er underlagt krav om innsyn og etterprøvbarhet`],
      no: [`De kan fritt velge bort brukere som koster mye`, `De har som regel ett entydig mål`],
      why: `Politisk styring, bevilgningsfinansiering og rettsstatsverdier skiller offentlige organisasjoner fra private.` },
    { ty: 'mc', q: `Hvem beskrev byråkratiet som en idealtype med hierarki, regler og ansettelse etter kompetanse?`,
      a: [`Max Weber`, `Frederick Taylor`, `Elton Mayo`, `Henry Mintzberg`],
      why: `Weber så byråkratiet som en teknisk overlegen form som sikrer forutsigbarhet og likebehandling.` },
    { ty: 'tf', q: `Institusjonell teori peker på at organisasjoner også former seg etter hva omgivelsene oppfatter som riktig og moderne.`, sant: true,
      why: `Organisasjoner søker legitimitet, ikke bare effektivitet. Du møter dette igjen i sjette etasje.` }
  ],
  kase: {
    t: `Første uke i Skarvøy fylkeskommune`,
    intro: `Du er nyansatt digitaliseringsrådgiver i Skarvøy fylkeskommune. Lederen din, Marit Aune, gir deg et oppdrag første dag: Den nye digitale søknaden om skoleskyss brukes av under halvparten av elevene. Finn ut hvorfor.`,
    steps: [
      { s: `Hvor starter du?`,
        opts: [
          [`Jeg leser organisasjonskartet og rutinebeskrivelsene for skyssordningen.`, 1, `Greit utgangspunkt. Du får oversikt over den formelle organisasjonen, men den forteller ikke hvordan søknadene faktisk behandles.`],
          [`Jeg snakker med saksbehandlerne og to skoler om hvordan de egentlig jobber, og sammenligner med rutinene.`, 2, `Sterkt valg. Du ser både formell og uformell organisasjon. Det viser seg at skolene fortsatt deler ut papirskjema, fordi «slik har vi alltid gjort det».`],
          [`Jeg ber leverandøren forbedre brukergrensesnittet.`, 0, `Risikabelt. Du antar at problemet er teknisk før du har undersøkt det. Organisasjonsproblemer løses sjelden med ny knappefarge.`]
        ],
        th: `En organisasjon har formelle og uformelle trekk. Forklaringen ligger ofte i gapet mellom dem.` },
      { s: `Du finner at kontorpersonalet på skolene opplever at den digitale løsningen flytter arbeid over på dem. Økonomiavdelingen presser på for å kutte papir, og en fylkespolitiker har lovet «heldigitalt innen jul». Hva forteller dette deg?`,
        opts: [
          [`At skolene motarbeider vedtatt politikk og må instrueres.`, 0, `For enkelt. Kontorpersonalet har en reell interesse som ingen har hørt, og en instruks fjerner ikke arbeidsbelastningen.`],
          [`At saken rommer flere legitime mål og interesser som trekker i ulike retninger.`, 2, `Nettopp. Effektivitet, arbeidsmiljø, politiske løfter og likebehandling av elever må veies mot hverandre.`],
          [`At prosjektet mangler en god nok teknisk integrasjon.`, 1, `Det kan stemme, men det forklarer ikke interessemotsetningene du nettopp har funnet.`]
        ],
        th: `Offentlige organisasjoner skal ivareta mange og delvis motstridende hensyn. Det er et grunnvilkår og ingen feil.` },
      { s: `Du skal legge fram funnene for Marit. Hvordan rammer du inn saken?`,
        opts: [
          [`Som et opplæringsproblem. Skolene trenger kurs.`, 1, `Opplæring hjelper noe, men du har valgt bare én brille.`],
          [`Med flere briller: uklare roller mellom skole og skysskontor, arbeidsbelastning, ulike interesser og en vane ingen har utfordret.`, 2, `Sterkt. Du viser at saken har strukturelle, menneskelige, politiske og kulturelle sider, og gir Marit flere tiltak å velge mellom.`],
          [`Som et lederproblem. Rektorene følger ikke opp.`, 0, `Å peke ut syndebukker er ingen analyse. Du risikerer også å miste rektorene som allierte.`]
        ],
        th: `Flerperspektivanalyse (Bolman og Deal) gir et rikere bilde og flere handlingsalternativer enn én forklaring.` }
    ],
    out: [
      `Du leverte en forklaring, men den hviler på én antakelse. Prøv igjen, og let etter gapet mellom formell og uformell organisasjon.`,
      `Du er på sporet. Neste gang kan du bruke flere briller før du konkluderer.`,
      `Marit ber deg presentere analysen for ledergruppa. Du har vist at du ser hele huset og ikke bare organisasjonskartet.`
    ]
  },
  refl: `Tenk på en digital løsning i din egen virksomhet som brukes mindre enn planlagt. Hva er den formelle forklaringen, og hva tror du er den uformelle?`,
  mission: `Finn organisasjonskartet for egen virksomhet. Marker tre steder der du vet at arbeidet i praksis flyter annerledes enn kartet viser.`,
  read: [`Jacobsen og Thorsvik, Hvordan organisasjoner fungerer: innledningen om organisasjon og organisasjonsteori`, `Christensen mfl., Organisasjonsteori for offentlig sektor: innledningskapitlet`, `Bolman og Deal, Nytt perspektiv på organisasjon og ledelse`]
});

F.push({
  n: 2, id: 'f2', zone: 1,
  t: `Mål og strategi`,
  k: `Mål og strategi`,
  intro: `Mål gir retning, men de kan også lure deg. Her lærer du hvorfor det som måles, blir gjort, og hvorfor strategien du ender med, sjelden er den du planla.`,
  rooms: [
    { id: 'f2r1', t: `Hva mål gjør med oss`, cards: [
      { h: `Fire jobber for et mål`,
        b: `Et mål beskriver en ønsket framtidig tilstand. I organisasjoner gjør mål minst fire jobber. De **motiverer** ved å gi noe å strekke seg etter. De **styrer** ved å avgrense hva som er relevant. De **legitimerer** virksomheten overfor omverdenen. Og de gir **kriterier for evaluering**. Ett og samme mål kan gjøre alle fire jobbene dårlig hvis det er for vagt.`,
        ex: `«Skarvøy skal være et ledende digitalt fylke» legitimerer godt i en strategi. Som styringssignal til skjemateamet sier det nesten ingenting om hva de skal gjøre på mandag.` },
      { h: `Fra visjon til mandag morgen`,
        b: `Mål ordnes ofte i et **målhierarki**. Øverst står visjonen, så hovedmål, delmål og konkrete arbeidsmål. Tanken er en **mål–middel-kjede**: delmålet er middel for å nå målet over. Kjeden ryker når ingen kan forklare hvordan et tiltak bidrar oppover, eller når delmål begynner å leve sitt eget liv.`,
        ex: `Spør «hvorfor?» for å klatre opp og «hvordan?» for å klatre ned. Hvorfor digital skyssøknad? For kortere saksbehandlingstid. Hvorfor det? For bedre tjenester til innbyggerne.` },
      { ty: 'order', q: `Sett målene i rekkefølge fra øverst til nederst i målhierarkiet.`,
        items: [`Visjon: bedre tjenester til innbyggerne`, `Hovedmål: kortere saksbehandlingstid`, `Delmål: digital søknad om skoleskyss`, `Arbeidsmål: skjemaet i drift 1. mars`],
        why: `Hvert nivå er middel for nivået over. Det er mål–middel-kjeden.` },
      { h: `Det de sier og det de gjør`,
        b: `**Perrow** skilte mellom **offisielle mål**, som står i strategier og årsrapporter, og **operative mål**, som faktisk styrer de daglige prioriteringene. Avstanden mellom dem forteller mye. Vil du vite hva en organisasjon egentlig vil, se på hva den bruker tid og penger på.`,
        ex: `Strategien sier «brukeren i sentrum». Budsjettet setter av 95 prosent til drift av gamle fagsystemer og ingenting til brukertesting. Det operative målet er stabil drift.` },
      { ty: 'mc', q: `Hvor finner du best en organisasjons operative mål?`,
        a: [`I hva den faktisk bruker tid og penger på`, `I visjonen på nettsiden`, `I den vedtatte strategien`, `I lederens taler`],
        why: `Operative mål viser seg i prioriteringer og ressursbruk, ikke i dokumenter.` }
    ]},
    { id: 'f2r2', t: `Når målene sporer av`, cards: [
      { h: `Målforskyvning`,
        b: `**Målforskyvning** skjer når midler blir til mål. Robert Merton beskrev hvordan regler som skulle sikre gode vedtak, kan ende som mål i seg selv. I dag er den vanligste varianten at **det som måles, blir gjort**. Indikatoren var ment som et tegn på målet. Så begynner folk å levere på indikatoren.`,
        ex: `Avdelingen måles på antall lanserte digitale skjemaer. Resultatet blir mange skjemaer, også der en telefon ville vært bedre for innbyggeren. Tallet stiger, nytten gjør det ikke.` },
      { h: `Vage mål og målkonflikter`,
        b: `Offentlige mål er ofte vage med vilje. Et vagt mål kan samle politisk flertall, fordi alle kan lese sitt inn i det. Prisen betales i administrasjonen, som må tolke og prioritere. **Målkonflikt** oppstår når to mål ikke kan nås fullt ut samtidig. **Suboptimalisering** oppstår når en enhet når sitt delmål på bekostning av helheten.`,
        ex: `IT-drift måles på oppetid og sier nei til endringer. Digitaliseringsteamet måles på nye tjenester og presser på for endringer. Begge gjør jobben sin. Helheten taper hvis ingen eier avveiningen.` },
      { ty: 'mc', q: `Brukerstøtten måles på hvor raskt saker lukkes. Saker lukkes derfor før problemet er løst, og brukerne må melde inn på nytt. Hva er dette et eksempel på?`,
        a: [`Målforskyvning`, `Fremvoksende strategi`, `Legitimering`, `Tillitsbasert styring`],
        why: `Indikatoren (lukketid) har tatt plassen til formålet (løste problemer).` },
      { h: `Mål- og resultatstyring`,
        b: `**Mål- og resultatstyring** har preget offentlig sektor siden 1980-tallet som del av New Public Management. Tanken er å styre på resultater og gi frihet i virkemidlene. Kritikken handler om rapporteringsbyrde, telling av det som lar seg telle, og svekket faglig skjønn. **Tillitsbasert styring** er et svar på kritikken: færre mål, mer dialog og mer faglig handlingsrom.`,
        ex: `I stedet for tolv indikatorer for digitalisering velger ledergruppa tre effektmål og et kvartalsvis møte der teamene forklarer hva tallene betyr.` },
      { ty: 'tf', q: `Vage mål i offentlig sektor skyldes alltid dårlig håndverk i administrasjonen.`, sant: false,
        why: `Vage mål kan være politisk nødvendige for å samle flertall. Utfordringen er at tolkningsarbeidet flyttes til administrasjonen.` }
    ]},
    { id: 'f2r3', t: `Strategi som plan og mønster`, cards: [
      { h: `Planlagt og fremvoksende strategi`,
        b: `Strategi handler om de store valgene for hvordan målene skal nås. **Mintzberg** viste at den realiserte strategien sjelden er lik den planlagte. Deler av planen faller bort underveis. Samtidig vokser nye mønstre fram gjennom daglige beslutninger. Det kalles **fremvoksende strategi**. Strategi er derfor både noe ledelsen planlegger, og et mønster som viser seg i ettertid.`,
        fig: 'strategi',
        ex: `Digitaliseringsstrategien nevnte ikke KI. Så begynte tre avdelinger å bruke KI-assistenter på eget initiativ. Året etter var trygg bruk av KI blitt et hovedsatsingsområde. Strategien vokste fram nedenfra.` },
      { h: `Posisjon eller ressurser`,
        b: `To klassiske syn på hvor strategi kommer fra: **Porter** ser utover og spør hvilken posisjon organisasjonen skal ta, som lave kostnader, differensiering eller fokus på en nisje. Det **ressursbaserte** synet ser innover og spør hva organisasjonen kan som er vanskelig å kopiere. **Miles og Snow** beskriver fire strategityper: forsvareren, utforskeren, analytikeren og reaktøren.`,
        ex: `Skal fylkeskommunen utvikle egne løsninger eller kjøpe standard? Et ressursbasert svar: bygg selv der dere har unik kompetanse og unike behov, og kjøp resten sammen med andre.` },
      { ty: 'match', q: `Koble strategitypene til Miles og Snow med kjennetegn.`,
        pairs: [[`Forsvarer`, `Verner et stabilt kjerneområde og effektiviserer`], [`Utforsker`, `Leter stadig etter nye muligheter`], [`Analytiker`, `Følger etter når andre har vist at noe virker`], [`Reaktør`, `Mangler konsistent linje og reagerer på press`]],
        why: `Typene beskriver hvordan organisasjoner forholder seg til endring i omgivelsene.` },
      { h: `Strategi i offentlig sektor`,
        b: `En fylkeskommune velger ikke marked. Oppgavene er gitt i lov. Strategi handler derfor mest om **prioritering**: hvilke tjenester skal styrkes, hva kan samordnes, og hva må vente. En digitaliseringsstrategi virker først når den får følger for budsjett, kompetanse og porteføljen av prosjekter. Uten det er den et symbol.`,
        ex: `Porteføljestyret i Skarvøy får tjue forslag og har midler til seks. Kriteriene de velger etter, er den reelle strategien, uansett hva som står i dokumentet.` },
      { ty: 'mc', q: `Hva er det beste tegnet på at en digitaliseringsstrategi faktisk styrer?`,
        a: [`Den avgjør hvilke prosjekter som får midler og folk`, `Den er vedtatt enstemmig`, `Den har en inspirerende visjon`, `Den er utformet av et anerkjent konsulentselskap`],
        why: `Strategi som ikke påvirker ressursfordelingen, er et dokument og ikke en strategi.` }
    ]}
  ],
  quiz: [
    { ty: 'mc', q: `Hvilken funksjon har et mål når det brukes til å vurdere om et prosjekt lyktes?`,
      a: [`Evalueringskriterium`, `Legitimering`, `Motivasjon`, `Arbeidsdeling`],
      why: `Mål gir målestokken resultatene vurderes mot.` },
    { ty: 'tf', q: `Ifølge Mintzberg er den realiserte strategien summen av den delen av planen som ble gjennomført, og det som vokste fram underveis.`, sant: true,
      why: `Planlagt strategi som overlever, pluss fremvoksende mønstre, gir realisert strategi.` },
    { ty: 'sort', q: `Offisielt eller operativt mål?`, cats: [`Offisielt mål`, `Operativt mål`],
      items: [[`«Innbyggeren først» i strategidokumentet`, 0], [`Ingen endringer i fagsystemet før årsoppgjøret er ferdig`, 1], [`Visjonen i årsrapporten`, 0], [`Hold budsjettet, koste hva det koste vil`, 1], [`«Vi skal være en lærende organisasjon» på intranettet`, 0], [`Saker fra direktøren går alltid først i køen`, 1]],
      why: `Offisielle mål står i dokumentene. Operative mål ser du i hva som faktisk prioriteres.` },
    { ty: 'mc', q: `Hva er suboptimalisering?`,
      a: [`En enhet når sine delmål på bekostning av organisasjonens helhet`, `Et mål som er satt for høyt`, `Strategi som vokser fram nedenfra`, `Mål som brukes til å skaffe støtte utenfra`],
      why: `Hver enhet gjør det rasjonelle ut fra eget måltall, og summen blir dårligere.` },
    { ty: 'gap', q: `Når indikatoren blir viktigere enn det den skulle måle, kalles det ___.`,
      a: [`målforskyvning`, `målhierarki`, `differensiering`, `satisfiering`],
      why: `Midlet har tatt målets plass.` },
    { ty: 'mc', q: `Hvilket syn på strategi starter med spørsmålet «hva kan vi som er vanskelig å kopiere»?`,
      a: [`Det ressursbaserte synet`, `Porters posisjonering`, `Mål- og resultatstyring`, `Reaktørstrategien`],
      why: `Det ressursbaserte synet leter etter varige fortrinn i organisasjonens egne ressurser og kompetanse.` },
    { ty: 'multi', q: `Hva er vanlig kritikk av mål- og resultatstyring i offentlig sektor?`,
      ok: [`Mye rapportering`, `Det som lar seg telle, fortrenger det som er viktig`, `Faglig skjønn får mindre plass`],
      no: [`Den gir politikerne for mye detaljkunnskap om fagene`, `Den forbyr bruk av indikatorer`],
      why: `Kritikken gjelder rapporteringsbyrde, målforskyvning og svekket faglig handlingsrom.` },
    { ty: 'tf', q: `Et vagt mål kan være nyttig for å oppnå politisk enighet.`, sant: true,
      why: `Flere kan slutte seg til et mål som kan tolkes på ulike måter. Tolkningsjobben flyttes til administrasjonen.` },
    { ty: 'mc', q: `Du spør «hvorfor?» flere ganger om et tiltak. Hva gjør du da i målhierarkiet?`,
      a: [`Klatrer oppover mot overordnede mål`, `Bryter målet ned i tiltak`, `Måler effekten av tiltaket`, `Kartlegger den uformelle organisasjonen`],
      why: `«Hvorfor?» fører opp, «hvordan?» fører ned.` }
  ],
  kase: {
    t: `Tall til fylkestinget`,
    intro: `Fylkeskommunedirektør Ellen Brekke vil ha «tall på digitaliseringen» til fylkestinget i juni. Du får oppdraget med å foreslå indikatorer.`,
    steps: [
      { s: `Hvilken indikator foreslår du som den viktigste?`,
        opts: [
          [`Antall digitale skjemaer og KI-piloter som er lansert.`, 0, `Lett å telle og lett å levere på. Du inviterer til målforskyvning: flere lanseringer, uansett om noen får nytte av dem.`],
          [`Spart tid og kortere ventetid for innbyggerne i tre utvalgte tjenester.`, 2, `Sterkt. Du måler effekten målet egentlig handler om. Det er vanskeligere å måle, men det styrer i riktig retning.`],
          [`Andel ansatte som har tatt e-læringskurs i digital kompetanse.`, 1, `Et relevant delmål, men kurs er et middel. Du vet ikke om det endrer tjenestene.`]
        ],
        th: `Velg indikatorer så nær sluttmålet som mulig. Aktivitetsmål er billige å måle og enkle å levere på uten at noe blir bedre.` },
      { s: `Jonas Pedersen, leder for drift og sikkerhet, protesterer. Enheten hans måles på oppetid, og hver nye tjeneste øker risikoen for nedetid. Hva gjør du?`,
        opts: [
          [`Jeg foreslår et felles mål for de to enhetene: stabile tjenester som faktisk brukes.`, 2, `Sterkt. Du løfter avveiningen opp til et felles mål, i stedet for å la hver enhet optimalisere sitt.`],
          [`Jeg holder fast på forslaget. Drift får tilpasse seg.`, 0, `Du sementerer målkonflikten. Jonas vil rasjonelt nok bremse alt som truer oppetiden.`],
          [`Jeg fjerner indikatoren for nye tjenester for å unngå konflikt.`, 1, `Konflikten forsvinner fra arket, men ikke fra hverdagen. Nå måles bare det ene hensynet.`]
        ],
        th: `Når enheter måles på hvert sitt delmål, er suboptimalisering det rasjonelle utfallet. Felles mål eller en tydelig eier av avveiningen må til.` },
      { s: `Et år senere viser tallene framgang. Samtidig har tre avdelinger tatt i bruk et KI-verktøy ingen planla for, og saksbehandlingstiden har falt mest der. Hva gjør du med strategien?`,
        opts: [
          [`Ingenting. Verktøyet står ikke i strategien og må stoppes til neste rullering.`, 0, `Du behandler planen som fasit. Da går du glipp av læringen i det som faktisk virker.`],
          [`Jeg undersøker hva avdelingene har gjort, og foreslår å ta det inn i strategien med rammer for trygg bruk.`, 2, `Sterkt. Du fanger opp fremvoksende strategi og gir den retning.`],
          [`Jeg lar det gå sin gang.`, 1, `Du stopper ikke læringen, men du gir den heller ikke retning eller rammer.`]
        ],
        th: `Mintzberg: realisert strategi er planen som overlevde, pluss mønstre som vokste fram. God strategiledelse fanger opp det siste.` }
    ],
    out: [
      `Fylkestinget fikk tall, men tallene styrer mot aktivitet og ikke mot nytte. Prøv igjen, og følg mål–middel-kjeden helt opp.`,
      `Indikatorene dine er brukbare. Se en gang til på hvem som eier avveiningen mellom motstridende mål.`,
      `Ellen Brekke bruker forslaget ditt som mal for hele fylkeskommunen. Du målte det som teller, og du lot strategien lære.`
    ]
  },
  refl: `Hvilke mål blir du selv målt på? Finn ett som kan friste til å levere på tallet i stedet for på formålet. Hvordan kunne det vært formulert bedre?`,
  mission: `Velg ett pågående digitaliseringstiltak. Skriv mål–middel-kjeden på fire nivåer, fra visjon til arbeidsmål. Hvor ryker kjeden?`,
  read: [`Jacobsen og Thorsvik, Hvordan organisasjoner fungerer: kapitlet om mål og strategi`, `Mintzberg og Waters (1985), Of Strategies, Deliberate and Emergent`, `Christensen mfl., Organisasjonsteori for offentlig sektor: kapitlet om mål og verdier`]
});

F.push({
  n: 3, id: 'f3', zone: 1,
  t: `Organisasjonsstruktur`,
  k: `Organisasjonsstruktur`,
  intro: `Struktur er organisasjonens skjelett. Den bestemmer hvem som gjør hva, hvem som bestemmer, og hvem som må snakke sammen. Den forklarer også hvorfor siloer oppstår.`,
  rooms: [
    { id: 'f3r1', t: `Dele opp og sette sammen`, cards: [
      { h: `Tre ting strukturen gjør`,
        b: `Formell struktur gjør tre ting. Den **fordeler oppgaver** gjennom arbeidsdeling og spesialisering. Den **fordeler myndighet** gjennom hierarki og delegering. Og den **koordinerer** gjennom regler, rutiner og møteplasser. Strukturen skaper stabilitet og forutsigbarhet. Den avgrenser også hva hver enkelt ser, og det er både styrken og svakheten.`,
        ex: `Skjemateamet ser skjemaer. Arkivet ser dokumentasjonsplikt. Personvernombudet ser risiko. Strukturen gir alle skarpt blikk for sitt og blindsoner for resten.` },
      { h: `Hvordan gruppere?`,
        b: `Enheter kan grupperes etter **funksjon**, med like fag samlet, eller etter **marked**, altså tjeneste, brukergruppe eller geografi. En **matrise** kombinerer begge. Funksjonsdeling gir fagdybde og stordrift, men svak samordning på tvers. Markedsdeling gir helhet rundt brukeren, men dobbeltarbeid. Matrisen gir fleksibilitet til prisen av to sjefer og flere konflikter.`,
        ex: `Skal fylkeskommunens utviklere sitte samlet i IKT-seksjonen eller ute i utdanning, samferdsel og tannhelse? Samlet gir fagmiljø. Spredt gir nærhet til behovene.`,
        src: `Gulick beskrev allerede i 1937 fire prinsipper for inndeling av offentlig forvaltning: formål, prosess, klientell og geografi.` },
      { ty: 'sort', q: `Hvilken grupperingsform beskrives?`, cats: [`Funksjon`, `Marked`, `Matrise`],
        items: [[`Alle jurister samlet i én juridisk enhet`, 0], [`En egen avdeling for alt som gjelder videregående opplæring`, 1], [`Utvikleren rapporterer både til IKT-lederen og til prosjektlederen i samferdsel`, 2], [`Regionkontorer med ansvar for alle tjenester i sitt område`, 1], [`Felles regnskapsenhet for hele fylkeskommunen`, 0]],
        why: `Funksjon samler like fag. Marked samler alt rundt en tjeneste, brukergruppe eller et område. Matrisen gir to linjer samtidig.` },
      { h: `Sentralisering og kontrollspenn`,
        b: `**Sentralisering** betyr at beslutninger tas høyt oppe. Det gir helhet og lik praksis, men lang vei og lite lokal tilpasning. **Desentralisering** flytter beslutninger dit kunnskapen om saken er. **Kontrollspenn** er antall medarbeidere per leder. Bredt kontrollspenn gir flat struktur og krever selvstendige medarbeidere. Smalt spenn gir tett oppfølging og flere nivåer.`,
        ex: `Må hver nye lavkode-app godkjennes sentralt, eller kan avdelingene bygge selv innenfor rammer? Sentral godkjenning gir kontroll og kø. Rammer med delegert myndighet gir fart og krever kompetanse ute.` },
      { ty: 'mc', q: `Hva er den viktigste gevinsten ved å desentralisere en beslutning?`,
        a: [`Den tas nærmere dem som kjenner saken`, `Praksis blir lik i hele organisasjonen`, `Toppledelsen får bedre oversikt`, `Behovet for kompetanse ute i enhetene faller`],
        why: `Desentralisering utnytter lokal kunnskap. Prisen er mer ulik praksis og høyere krav til kompetanse ute.` }
    ]},
    { id: 'f3r2', t: `Slik holdes arbeidet sammen`, cards: [
      { h: `Mintzbergs koordineringsmekanismer`,
        b: `Mintzberg beskriver hvordan arbeid samordnes. **Gjensidig tilpasning**: folk snakker sammen. **Direkte tilsyn**: en leder gir ordre og følger opp. **Standardisering av arbeidsprosesser**: rutinen bestemmer. **Standardisering av resultater**: målet bestemmes, veien er fri. **Standardisering av kunnskap**: utdanningen sørger for at folk vet hva de skal gjøre. Senere la han til **standardisering av normer**: felles verdier styrer.`,
        ex: `En tannlege trenger ingen sjef i rommet for å vite hvordan en fylling legges. Utdanningen har standardisert kunnskapen. Slik styres profesjoner.` },
      { h: `Byråkratiet`,
        b: `Webers **byråkrati** er en idealtype med klart hierarki, skrevne regler, spesialiserte stillinger, saksbehandling uten personlige hensyn og ansettelse etter kompetanse. I dagligtale er byråkrati et skjellsord. Hos Weber var det en teknisk overlegen form som sikrer forutsigbarhet og likebehandling. Baksiden er rigiditet, regelrytteri og treghet når omgivelsene endrer seg.`,
        ex: `At søknader om skoleskyss behandles etter samme regler uansett hvem som søker og hvem som behandler, er byråkratiets kjerneverdi. At skjemaet krever seks felt ingen bruker, er baksiden.` },
      { ty: 'match', q: `Koble situasjon og koordineringsmekanisme.`,
        pairs: [[`To utviklere avklarer en løsning over kaffen`, `Gjensidig tilpasning`], [`Teamlederen fordeler dagens oppgaver og sjekker dem ut`, `Direkte tilsyn`], [`Sjekklisten for personvernvurdering følges steg for steg`, `Standardisering av arbeidsprosesser`], [`Teamet får et effektmål og velger metode selv`, `Standardisering av resultater`], [`Lærere planlegger undervisning ut fra profesjonsutdanningen`, `Standardisering av kunnskap`]],
        why: `De fleste organisasjoner bruker alle mekanismene, men én dominerer gjerne i hver del.` },
      { h: `Mekanistisk og organisk`,
        b: `**Burns og Stalker** fant to hovedformer. Den **mekanistiske** har tydelig hierarki, faste roller og mange regler. Den passer stabile omgivelser og rutineoppgaver. Den **organiske** har flytende roller, mye kommunikasjon på tvers og beslutninger der kompetansen er. Den passer skiftende omgivelser og nye problemer. De fleste organisasjoner trenger begge, i ulike deler.`,
        ex: `Lønnskjøringen skal være mekanistisk. Ingen ønsker kreativ utforsking den tolvte. Teamet som undersøker hva KI kan gjøre for saksbehandlingen, trenger organisk frihet.` },
      { ty: 'tf', q: `Organisk struktur er alltid bedre enn mekanistisk.`, sant: false,
        why: `Det kommer an på oppgaven og omgivelsene. Stabile rutineoppgaver løses best med mekanistisk struktur.` }
    ]},
    { id: 'f3r3', t: `Mintzbergs fem former`, cards: [
      { h: `Fem deler`,
        b: `Mintzberg deler organisasjonen i fem deler. Den **operative kjernen** gjør selve arbeidet. Det **strategiske toppunktet** har det overordnede ansvaret. **Mellomledelsen** binder de to sammen. **Teknostrukturen** utformer systemer, planer og standarder for andres arbeid. **Støttestaben** leverer tjenester utenfor hovedproduksjonen, som kantine, lønn og IT-drift.`,
        fig: 'mintzberg',
        ex: `I Skarvøy er lærere og tannleger operativ kjerne, og rektorer er mellomledere. Kvalitets- og økonomirådgivere er teknostruktur. IT-drift er støttestab. Digitaliseringsrådgivere som standardiserer andres arbeidsprosesser, opptrer som teknostruktur.` },
      { h: `Fem konfigurasjoner`,
        b: `Hvilken del som dominerer, gir fem hovedformer. **Entreprenørorganisasjonen** styres direkte av toppen. **Maskinbyråkratiet** styres av standardiserte prosesser fra teknostrukturen. **Det profesjonelle byråkratiet** styres av kunnskapen i den operative kjernen. **Den divisjonaliserte formen** består av delvis selvstendige enheter som styres på resultater. **Adhokratiet** løser nye problemer i team som tilpasser seg hverandre.`,
        ex: `En videregående skole er et profesjonelt byråkrati. Fylkeskommunen som helhet ligner en divisjonalisert form med sektorer. Et tverrfaglig innovasjonsteam er et adhokrati som bor inne i de andre.` },
      { ty: 'mc', q: `Lærerne ved en skole tar ikke uten videre i bruk en digital metode som er bestemt sentralt. Hvilken strukturform forklarer det best?`,
        a: [`Profesjonelt byråkrati, der fagkunnskapen i den operative kjernen styrer arbeidet`, `Maskinbyråkrati, der teknostrukturen styrer gjennom rutiner`, `Entreprenørorganisasjon, der toppen styrer direkte`, `Adhokrati, der ingen har fast rolle`],
        why: `I et profesjonelt byråkrati har fagfolkene stor autonomi. Endring må overbevise faglig, ikke bare vedtas.` },
      { h: `Siloer og det som går på tvers`,
        b: `Hver gruppering lager grenser, og digitale tjenester krysser nesten alltid grensene. **Lawrence og Lorsch** viste at jo mer enhetene skiller seg fra hverandre, altså jo større **differensiering**, jo mer må det investeres i **integrasjon**. Virkemidler er koordinatorer, tverrgående team, felles mål, prosesseiere og møteplasser. Tverrfaglige produktteam er et moderne svar på et gammelt strukturproblem.`,
        ex: `En elev som bytter skole, berører inntak, skyss, tilrettelegging og økonomi. For eleven er det én hendelse. For fylkeskommunen er det fire enheter og tre fagsystemer.` },
      { ty: 'gap', q: `Jo større ___ mellom enhetene, jo større behov for integrasjon.`,
        a: [`differensiering`, `sentralisering`, `formalisering`, `standardisering`],
        why: `Enheter med ulike mål, tidshorisonter og språk trenger sterkere integrasjonsmekanismer for å samarbeide.` }
    ]}
  ],
  quiz: [
    { ty: 'mc', q: `Hvilken del av organisasjonen utformer standarder og systemer for andres arbeid, ifølge Mintzberg?`,
      a: [`Teknostrukturen`, `Støttestaben`, `Mellomledelsen`, `Den operative kjernen`],
      why: `Teknostrukturen består av analytikere og planleggere som standardiserer andres arbeid.` },
    { ty: 'match', q: `Koble konfigurasjon og viktigste koordineringsmekanisme.`,
      pairs: [[`Maskinbyråkrati`, `Standardisering av arbeidsprosesser`], [`Profesjonelt byråkrati`, `Standardisering av kunnskap`], [`Divisjonalisert form`, `Standardisering av resultater`], [`Adhokrati`, `Gjensidig tilpasning`], [`Entreprenørorganisasjon`, `Direkte tilsyn`]],
      why: `Hver konfigurasjon har én dominerende del og én dominerende måte å koordinere på.` },
    { ty: 'tf', q: `Weber brukte ordet byråkrati om en ineffektiv og treg organisasjon.`, sant: false,
      why: `For Weber var byråkratiet en rasjonell og teknisk overlegen form. Den negative betydningen kom senere.` },
    { ty: 'mc', q: `Hva er den viktigste ulempen med ren funksjonsinndeling?`,
      a: [`Svak samordning på tvers av fagenhetene`, `Dobbeltarbeid fordi hver enhet har egne spesialister`, `To sjefer for hver medarbeider`, `For lite fagdybde`],
      why: `Funksjonsdeling gir fagdybde, men enhetene ser bare sin del av helheten.` },
    { ty: 'sort', q: `Mekanistisk eller organisk?`, cats: [`Mekanistisk`, `Organisk`],
      items: [[`Faste stillingsbeskrivelser`, 0], [`Beslutninger tas der kompetansen er`, 1], [`Mange skriftlige regler`, 0], [`Roller endres etter behov`, 1], [`Kommunikasjon går opp og ned i linja`, 0], [`Tett kommunikasjon på tvers`, 1]],
      why: `Mekanistisk passer stabile oppgaver. Organisk passer oppgaver som krever læring og tilpasning.` },
    { ty: 'mc', q: `Kontrollspenn betyr …`,
      a: [`antall medarbeidere som rapporterer til samme leder`, `antall nivåer i hierarkiet`, `hvor mange regler en leder håndhever`, `hvor stor del av budsjettet en leder disponerer`],
      why: `Bredt kontrollspenn gir flatere struktur. Smalt gir flere nivåer.` },
    { ty: 'mc', q: `Hver avdeling har kjøpt sitt eget skjemaverktøy, og innbyggerne møter fem ulike innlogginger. Hvilket strukturgrep retter seg mest direkte mot problemet?`,
      a: [`Sterkere integrasjon, for eksempel felles plattform og en prosesseier på tvers`, `Bredere kontrollspenn i hver avdeling`, `Mer desentralisering av innkjøp`, `Sterkere spesialisering i hver avdeling`],
      why: `Problemet er manglende samordning mellom enheter. Svaret er integrasjonsmekanismer.` },
    { ty: 'tf', q: `En matrisestruktur kan gi medarbeidere to ledere med ulike prioriteringer.`, sant: true,
      why: `Det er matrisens kjente pris: fleksibilitet mot uklare styringslinjer.` },
    { ty: 'multi', q: `Hva kjennetegner Webers idealtypiske byråkrati?`,
      ok: [`Hierarki`, `Skrevne regler`, `Ansettelse etter kompetanse`, `Saksbehandling uten personlige hensyn`],
      no: [`Beslutninger ut fra personlige lojalitetsbånd`, `Flytende roller uten faste ansvarsområder`],
      why: `Byråkratiet bygger på regler og kompetanse, i motsetning til styre gjennom slekt, vennskap og vilkårlighet.` }
  ],
  kase: {
    t: `Hvor skal utviklerne sitte?`,
    intro: `Skarvøy har åtte utviklere og skjemabyggere spredt på fire avdelinger. Løsningene spriker, og ingen har oversikt. Marit ber deg om et forslag til organisering.`,
    steps: [
      { s: `Hva foreslår du som hovedgrep?`,
        opts: [
          [`Samle alle i ett fagteam i IKT-seksjonen, med faste kontaktpersoner ut mot avdelingene.`, 2, `Sterkt utgangspunkt. Du får fagmiljø, felles standarder og mindre sårbarhet. Kontaktpersonene skal motvirke avstanden til behovene, som er funksjonsdelingens svake side.`],
          [`La dem sitte der de er, og lag en felles Teams-kanal.`, 1, `Billig og konfliktfritt. En kanal er likevel svak integrasjon når enhetene har ulike sjefer og ulike prioriteringer.`],
          [`Sett ut all utvikling til en leverandør.`, 0, `Du løser sprikingen ved å gi fra deg kompetansen. Bestillerrollen krever fortsatt at noen forstår både teknologi og behov.`]
        ],
        th: `Funksjonsgruppering gir fagdybde og standardisering. Prisen er avstand til brukerne, og den må kompenseres med integrasjonstiltak.` },
      { s: `Avdelingene protesterer: «Da havner vi bakerst i køen hos IT.» Hvordan svarer du på bekymringen?`,
        opts: [
          [`Jeg forsikrer dem om at IT vil prioritere rettferdig.`, 0, `Løfter uten struktur holder sjelden. Bekymringen handler om hvem som bestemmer rekkefølgen.`],
          [`Jeg foreslår et prioriteringsforum der avdelingene selv er med og bestemmer rekkefølgen etter kjente kriterier.`, 2, `Sterkt. Du svarer på et strukturproblem med struktur: en tydelig beslutningsarena og kjente kriterier.`],
          [`Jeg lar hver avdeling beholde én utvikler for sikkerhets skyld.`, 1, `Et kompromiss som demper motstanden, og som viderefører sprikingen du skulle løse.`]
        ],
        th: `Sentralisering av ressurser må følges av en legitim prioriteringsmekanisme. Ellers blir køen en kilde til konflikt.` },
      { s: `Teamet er samlet. Etter et halvt år klager de på at alt nytt, også utforsking av KI, må gjennom samme tunge godkjenningsløp som endringer i lønnssystemet. Hva gjør du?`,
        opts: [
          [`Jeg holder fast på ett løp for alt. Like regler er rettferdig.`, 0, `Du behandler utforsking som drift. Mekanistiske rutiner kveler oppgaver som krever prøving og feiling.`],
          [`Jeg lager to spor: et stramt løp for endringer i kritiske systemer, og et lett løp for utforsking innenfor avtalte rammer.`, 2, `Sterkt. Du tilpasser struktur til oppgavens art: mekanistisk der stabilitet teller, organisk der læring teller.`],
          [`Jeg fjerner godkjenningsløpet helt.`, 0, `Nå risikerer du lønnskjøringen for å redde innovasjonen. Stabile oppgaver trenger fortsatt stabile rutiner.`]
        ],
        th: `Burns og Stalker: mekanistisk struktur for stabile oppgaver, organisk for nye. Samme organisasjon trenger begge.` }
    ],
    out: [
      `Organiseringen din løser ett problem og skaper to nye. Prøv igjen, og tenk på hva hver strukturform koster.`,
      `Forslaget ditt holder langt. Se en gang til på hvordan struktur må tilpasses ulike typer oppgaver.`,
      `Marit tar forslaget rett inn i ledergruppa. Du har gitt teamet både fagmiljø, en rettferdig kø og rom for utforsking.`
    ]
  },
  refl: `Hvilken av Mintzbergs fem former ligner din egen enhet mest på? Hvor merker du at den formen kolliderer med enheter som fungerer på en annen måte?`,
  mission: `Tegn veien en konkret bestilling tar fra idé til løsning i din virksomhet. Tell antall enheter og overleveringer. Hvor står den lengst stille?`,
  read: [`Jacobsen og Thorsvik, Hvordan organisasjoner fungerer: kapitlet om organisasjonsstruktur`, `Mintzberg (1979), The Structuring of Organizations`, `Burns og Stalker (1961), The Management of Innovation`]
});
