/* Organisasjonslære – faginnhold, etasje 4–6 */

F.push({
  n: 4, id: 'f4', zone: 1,
  t: `Organisasjonskultur`,
  k: `Organisasjonskultur`,
  intro: `Kultur er det som sitter i veggene. Den avgjør hva folk gjør når ingen ser på, og den er grunnen til at samme system kan lykkes i én avdeling og havarere i en annen.`,
  rooms: [
    { id: 'f4r1', t: `Tre nivåer`, cards: [
      { h: `Hva er kultur?`,
        b: `**Edgar Schein** beskriver organisasjonskultur som et mønster av grunnleggende antakelser som en gruppe har utviklet mens den løste problemene sine. Antakelsene har virket godt nok til at de læres bort til nye medlemmer som den riktige måten å oppfatte, tenke og føle på. Kort sagt: **slik gjør vi det her**, og slik tenker vi om det.`,
        ex: `En nyansatt i Skarvøy foreslår å teste en ny løsning på ekte brukere. Kollegaen svarer: «Det pleier vi ikke. Det må utredes først.» Hun har møtt kulturen.` },
      { h: `Artefakter, verdier og antakelser`,
        b: `Schein deler kultur i tre nivåer. **Artefakter** er det du kan se og høre: lokaler, språk, klær, møteformer og systemer. **Uttrykte verdier** er det organisasjonen sier at den står for. **Grunnleggende antakelser** er det som tas for gitt og sjelden sies høyt. Artefakter er lette å se og vanskelige å tolke. Antakelsene styrer mest og er vanskeligst å få øye på.`,
        fig: 'isfjell',
        ex: `Artefakt: alle beslutninger skrives i notat med fire godkjenninger. Uttrykt verdi: «vi er innovative». Antakelse: feil er farlige og må unngås. Antakelsen vinner.` },
      { ty: 'sort', q: `Hvilket kulturnivå?`, cats: [`Artefakt`, `Uttrykt verdi`, `Grunnleggende antakelse`],
        items: [[`Åpent kontorlandskap`, 0], [`Verdiplakaten «Åpen, modig, raus»`, 1], [`Feil er pinlige og bør skjules`, 2], [`Fredagsquiz i kantina`, 0], [`«Hos oss står brukeren i sentrum» i strategien`, 1], [`Den som har vært her lengst, vet best`, 2]],
        why: `Artefakter kan observeres. Uttrykte verdier er det som sies. Antakelsene er det som tas for gitt.` },
      { h: `Hva kulturen gjør for organisasjonen`,
        b: `En sterk kultur gir **tilhørighet** og identitet. Den **koordinerer** uten regler, fordi folk vet hva som forventes. Den skaper **tillit** og senker behovet for kontroll. Baksiden er at sterke kulturer kan bli blinde. Avvikende informasjon siles bort, kritikere tier, og gruppen blir sikrere enn den har grunn til. Sterk kultur er en styrke så lenge antakelsene passer med virkeligheten.`,
        ex: `En driftsavdeling med sterk kultur for stabilitet leverer imponerende oppetid. Den samme kulturen kan gjøre at alle forslag om skytjenester oppleves som trusler.` },
      { ty: 'tf', q: `Uttrykte verdier og grunnleggende antakelser peker alltid i samme retning.`, sant: false,
        why: `De spriker ofte. Når de gjør det, er det antakelsene som styrer atferden.` }
    ]},
    { id: 'f4r2', t: `Mange kulturer i ett hus`, cards: [
      { h: `Subkulturer`,
        b: `Store organisasjoner har **subkulturer** knyttet til enhet, sted og særlig **profesjon**. Lærere, ingeniører, tannleger, jurister og utviklere har lært ulike svar på hva som er godt arbeid. Subkulturer er ikke et problem i seg selv. De bærer fagkvalitet. Problemet oppstår når de ikke forstår hverandres språk og logikk.`,
        ex: `Utvikleren sier: «Vi lanserer og forbedrer underveis.» Juristen hører: «De vil sette i drift noe uferdig.» Begge beskriver ansvarlig praksis i sin profesjon.` },
      { h: `Sosialisering`,
        b: `Kultur overføres gjennom **sosialisering**. Nye medlemmer lærer normene gjennom opplæring, forbilder, historier og reaksjoner på egne feiltrinn. Det meste skjer uformelt. Hva kolleger ler av, hvem som får ros, og hva som blir møtt med stillhet, lærer bort mer enn personalhåndboka.`,
        ex: `Den første uka ser Nora at ingen stiller spørsmål i avdelingsmøtet. Uka etter stiller hun heller ingen. Sosialiseringen tok åtte dager.` },
      { ty: 'mc', q: `Hva lærer nyansatte mest av kulturen gjennom?`,
        a: [`Det de ser kolleger og ledere gjøre og reagere på`, `Personalhåndboka`, `Verdiplakaten i resepsjonen`, `Organisasjonskartet`],
        why: `Sosialisering skjer mest uformelt, gjennom observasjon av hva som belønnes og hva som møtes med stillhet.` },
      { h: `Nasjonale kulturforskjeller`,
        b: `**Hofstede** sammenlignet arbeidsrelaterte verdier på tvers av land. Kjente dimensjoner er **maktdistanse**, **individualisme**, **usikkerhetsunnvikelse** og **maskulinitet**, forstått som konkurranse mot omsorg. Norge skårer lavt på maktdistanse og maskulinitet. Det viser seg som flate strukturer, medvirkning og forventning om å bli hørt. Modellen er kritisert for å overdrive nasjonale gjennomsnitt, men den forklarer en del friksjon i internasjonalt samarbeid.`,
        ex: `En internasjonal leverandør forventer at prosjektlederen beslutter. Den norske prosjektgruppa forventer at alle skal høres først. Begge blir frustrerte uten å vite hvorfor.` },
      { ty: 'mc', q: `Hva sier lav maktdistanse om en arbeidskultur?`,
        a: [`Medarbeidere forventer å bli hørt og kan si imot ledere`, `Ledere beslutter uten å spørre andre`, `Titler og status er svært viktige`, `Konkurranse verdsettes høyere enn samarbeid`],
        why: `Lav maktdistanse betyr at ulikhet i makt er lite akseptert. Medvirkning er normen.` }
    ]},
    { id: 'f4r3', t: `Kan kultur ledes?`, cards: [
      { h: `Noe vi har, eller noe vi er?`,
        b: `To syn står mot hverandre. Det ene ser kultur som noe organisasjonen **har**, en variabel ledelsen kan forme for å nå mål. Det andre ser kultur som noe organisasjonen **er**, et mønster av mening som vokser fram og ikke lar seg designe. Det første synet gir ledere handlekraft. Det andre advarer mot å tro at en verdiplakat endrer noe.`,
        ex: `Ledergruppa vedtar «delingskultur» som verdi. Etter det andre synet endrer vedtaket ingenting før folk erfarer at deling lønner seg, og at det er trygt.`,
        src: `Skillet er kjent fra Linda Smircich (1983).` },
      { h: `Slik former ledere kultur`,
        b: `Schein peker på mekanismer som virker sterkere enn ord. Hva ledere **legger merke til, måler og kontrollerer**. Hvordan de **reagerer på kriser** og feil. Hva de selv **gjør** som rollemodeller. Hvem som blir **ansatt, forfremmet og belønnet**. Medarbeidere leser disse signalene nøye. Stemmer de ikke med verdiene på plakaten, er det signalene som blir trodd.`,
        ex: `Direktøren sier at Skarvøy skal lære av feil. Så feiler en pilot, og prosjektlederen får kjeft i ledermøtet. Hele organisasjonen lærte noe den dagen, og det var ikke det direktøren sa.` },
      { ty: 'mc', q: `En leder vil ha mer utprøving i avdelingen. Hvilket grep former kulturen sterkest?`,
        a: [`Å spørre etter og rose læring fra forsøk som ikke gikk som planlagt`, `Å henge opp en plakat med «Vi tør å feile»`, `Å sende alle på kurs i innovasjon`, `Å skrive utprøving inn i strategien`],
        why: `Det ledere legger merke til og belønner, forteller hva som egentlig gjelder.` },
      { h: `Psykologisk trygghet`,
        b: `**Amy Edmondson** bruker begrepet **psykologisk trygghet** om en felles opplevelse av at det er trygt å ta mellommenneskelig risiko: å spørre, innrømme feil og si imot. Trygghet er ikke det samme som at alle har det koselig. Forskningen hennes viser at trygge team rapporterer flere feil, fordi de tør, og at de lærer mer av dem. For digitalisering er dette avgjørende, siden utprøving alltid gir feil.`,
        ex: `Per-Olav oppdager at KI-assistenten foreslår feil lovhjemmel. I en trygg kultur melder han fra samme dag, og feilen blir rettet. I en utrygg kultur lar han være, eller slutter stille å bruke verktøyet.` },
      { ty: 'tf', q: `Team med høy psykologisk trygghet rapporterer ofte flere feil enn andre team.`, sant: true,
        why: `De gjør ikke nødvendigvis flere feil. De tør å si fra, og det er forutsetningen for å lære.` }
    ]}
  ],
  quiz: [
    { ty: 'mc', q: `Hvilket kulturnivå er lettest å observere og vanskeligst å tolke?`,
      a: [`Artefakter`, `Uttrykte verdier`, `Grunnleggende antakelser`, `Subkulturer`],
      why: `Du ser artefaktene med en gang, men du trenger kjennskap til antakelsene for å forstå hva de betyr.` },
    { ty: 'mc', q: `En organisasjon sier at den verdsetter nytenkning, men belønner bare dem som aldri gjør feil. Hva lærer medarbeiderne?`,
      a: [`At det reelle budskapet er å unngå feil`, `At nytenkning er viktigst`, `At verdiplakaten bare gjelder for ledere`, `At kultur ikke påvirker atferd`],
      why: `Belønningene avslører antakelsene. Folk følger det som lønner seg.` },
    { ty: 'tf', q: `Subkulturer er alltid skadelige og bør fjernes.`, sant: false,
      why: `Subkulturer bærer fagkunnskap og kvalitet. Utfordringen er å bygge bro mellom dem.` },
    { ty: 'match', q: `Koble navn og bidrag.`,
      pairs: [[`Schein`, `Tre kulturnivåer`], [`Hofstede`, `Nasjonale kulturdimensjoner`], [`Edmondson`, `Psykologisk trygghet`], [`Smircich`, `Kultur som noe organisasjonen har eller er`]],
      why: `Fire sentrale bidrag til kulturforståelsen.` },
    { ty: 'multi', q: `Hvilke mekanismer former kultur sterkest ifølge Schein?`,
      ok: [`Hva ledere måler og følger opp`, `Hvordan ledere reagerer på kriser`, `Hvem som blir forfremmet`, `Lederes egen atferd`],
      no: [`Formuleringen på verdiplakaten`, `Fargene i den grafiske profilen`],
      why: `Handling, oppmerksomhet og belønning slår formuleringer.` },
    { ty: 'gap', q: `Prosessen der nye medlemmer lærer organisasjonens normer og verdier, kalles ___.`,
      a: [`sosialisering`, `differensiering`, `målforskyvning`, `formalisering`],
      why: `Sosialisering gjør den nye til en av oss.` },
    { ty: 'mc', q: `«Kultur kan ikke vedtas. Den vokser fram av det vi gjør sammen over tid.» Hvilket syn uttrykker dette?`,
      a: [`Kultur som noe organisasjonen er`, `Kultur som noe organisasjonen har`, `Det instrumentelle perspektivet`, `Vitenskapelig arbeidsledelse`],
      why: `Synet ser kultur som fremvokst mening, ikke som et styringsverktøy.` },
    { ty: 'tf', q: `En sterk kultur er alltid en fordel for organisasjonen.`, sant: false,
      why: `Sterke kulturer kan bli blinde og motsette seg nødvendig endring når antakelsene ikke lenger passer.` },
    { ty: 'mc', q: `Hva er den beste beskrivelsen av psykologisk trygghet?`,
      a: [`Det oppleves trygt å spørre, si imot og innrømme feil`, `Alle er enige, og konflikter unngås`, `Ingen stiller krav til prestasjoner`, `Alle ansatte har fast stilling`],
      why: `Psykologisk trygghet handler om å kunne ta mellommenneskelig risiko uten å bli straffet for det.` }
  ],
  kase: {
    t: `Delingskultur på bestilling`,
    intro: `Ledergruppa i Skarvøy har vedtatt at fylkeskommunen skal ha en «delingskultur». Alle avdelinger skal dele maler, skript og erfaringer i en felles kunnskapsbase. Etter tre måneder ligger det fire dokumenter der. Du blir bedt om å få fart på delingen.`,
    steps: [
      { s: `Hva gjør du først?`,
        opts: [
          [`Jeg sender ut en påminnelse fra direktøren om at deling er vedtatt.`, 0, `Du gjentar den uttrykte verdien. Den var kjent fra før. Problemet ligger dypere.`],
          [`Jeg snakker med noen som ikke deler, og spør hva som skjer når man legger ut noe uferdig.`, 2, `Sterkt. Du leter etter antakelsene. Svaret du får: «Sist noen delte et skript med en feil i, ble det tatt opp i avdelingsmøtet.»`],
          [`Jeg gjør kunnskapsbasen enklere å bruke.`, 1, `Brukervennlighet hjelper, men ingen har sagt at verktøyet er problemet. Du behandler artefakten.`]
        ],
        th: `Schein: når uttrykte verdier og atferd spriker, ligger forklaringen i de grunnleggende antakelsene.` },
      { s: `Du har funnet antakelsen: det er risikabelt å vise fram noe som ikke er perfekt. Hva gjør du med den?`,
        opts: [
          [`Jeg holder et foredrag om at feil er lov.`, 1, `Ord er svake kulturbærere. Folk tror på det de ser skje.`],
          [`Jeg får Marit og to andre ledere til å dele egne halvferdige utkast først, og til å takke åpent for forbedringsforslag.`, 2, `Sterkt. Ledere som rollemodeller og synlig anerkjennelse er blant de sterkeste kulturmekanismene.`],
          [`Jeg innfører krav om minst ett delt dokument per ansatt hver måned.`, 0, `Du får dokumenter, men neppe deling. Kravet inviterer til målforskyvning og bekrefter at deling er kontroll.`]
        ],
        th: `Kultur formes av hva ledere gjør, legger merke til og belønner. Rollemodeller slår verdiplakater.` },
      { s: `Delingen tar seg opp i IKT-seksjonen. Tannhelse og utdanning deler fortsatt ingenting. De sier at basen er «laget av IT, for IT». Hva nå?`,
        opts: [
          [`Jeg godtar det. Kultur lar seg ikke endre på tvers av profesjoner.`, 0, `For defensivt. Subkulturer kan bygge bro når de møtes om noe som er nyttig for dem.`],
          [`Jeg ber en tannlege og en lærer om å være redaktører for egne områder, med eget språk og egne eksempler.`, 2, `Sterkt. Du respekterer subkulturene og lar dem dele på egne premisser. Lokale forbilder virker bedre enn sentrale pålegg.`],
          [`Jeg kjører obligatorisk kurs i kunnskapsbasen for alle.`, 1, `Kurs gir ferdigheter, men svarer ikke på opplevelsen av at dette er noen andres prosjekt.`]
        ],
        th: `Subkulturer har egne normer og eget språk. Endring går lettere når den oversettes av noen innenfra.` }
    ],
    out: [
      `Kunnskapsbasen står fortsatt nesten tom. Prøv igjen, og let under overflaten etter hva folk tar for gitt.`,
      `Delingen øker noen steder. Tenk gjennom hvilke signaler ledere sender, og hvem som kan oversette til andre fagmiljøer.`,
      `Etter et halvt år bruker fire avdelinger basen daglig. Du endret ikke verdiene. Du endret hva folk erfarer at skjer når de deler.`
    ]
  },
  refl: `Hva ville en nyansatt hos dere lært i løpet av første måned om hva som egentlig lønner seg, uten at noen sa det høyt?`,
  mission: `Vær antropolog i ett møte. Noter tre observasjoner: hvem som snakker først, hva som skjer når noen er uenig, og hva folk gjør når møtet er slutt. Hva sier det om antakelsene?`,
  read: [`Jacobsen og Thorsvik, Hvordan organisasjoner fungerer: kapitlet om organisasjonskultur`, `Schein, Organisasjonskultur og ledelse`, `Edmondson (1999), Psychological Safety and Learning Behavior in Work Teams`]
});

F.push({
  n: 5, id: 'f5', zone: 1,
  t: `Makt og konflikt`,
  k: `Makt og konflikt i organisasjoner`,
  intro: `Makt er et ord mange unngår, men ingen organisasjon fungerer uten. Her lærer du hvor makt kommer fra, hvordan den brukes uten at det synes, og hvordan konflikter kan håndteres før de vokser.`,
  rooms: [
    { id: 'f5r1', t: `Hvor makten kommer fra`, cards: [
      { h: `Makt og autoritet`,
        b: `En klassisk definisjon fra **Robert Dahl**: A har makt over B i den grad A får B til å gjøre noe B ellers ikke ville gjort. Makt er altså en **relasjon** og ingen egenskap. **Autoritet** er makt som oppfattes som legitim. Weber skilte mellom tradisjonell, karismatisk og legal autoritet. I moderne organisasjoner bygger autoritet på stilling og regler.`,
        ex: `Fylkeskommunedirektøren kan instruere fordi stillingen gir rett til det. En erfaren arkitekt uten lederansvar kan stanse en løsning med ett spørsmål i et møte. Begge har makt, av ulikt slag.` },
      { h: `Maktbaser`,
        b: `**French og Raven** beskrev grunnlag for makt. **Legitim** makt følger stillingen. **Belønningsmakt** bygger på evnen til å gi goder. **Tvangsmakt** bygger på evnen til å straffe. **Ekspertmakt** kommer av kunnskap andre trenger. **Referansemakt** kommer av at andre ser opp til deg. Informasjon regnes ofte som en sjette base. Ekspert- og referansemakt gir som regel mest varig oppslutning.`,
        ex: `Aisha Rahman, personvernombudet, har ingen linjemyndighet. Likevel venter prosjektene på vurderingen hennes. Kunnskap om regelverket gir ekspertmakt, og mandatet gir legitimitet.` },
      { ty: 'match', q: `Koble maktbase og kjennetegn.`,
        pairs: [[`Legitim makt`, `Stillingen gir rett til å beslutte`], [`Ekspertmakt`, `Andre trenger kunnskapen din`], [`Referansemakt`, `Andre ser opp til deg`], [`Belønningsmakt`, `Du kan dele ut goder`], [`Tvangsmakt`, `Du kan iverksette sanksjoner`]],
        why: `Maktbasene til French og Raven beskriver hva makten hviler på.` },
      { h: `Avhengighet og usikkerhet`,
        b: `Makt vokser der andre er **avhengige** av deg. En enhet får makt når den kontrollerer en ressurs som er viktig, knapp og vanskelig å erstatte. Det gjelder penger, kompetanse, informasjon og tilgang. Den som kan **håndtere usikkerhet** for andre, står særlig sterkt. Derfor har drift makt under en krise, og jurister har makt når regelverket er uklart.`,
        ex: `Bare én person i Skarvøy forstår integrasjonen mellom fagsystemet og arkivet. Ingen prosjekter kommer forbi henne. Makten sitter i avhengigheten og ikke i stillingen.`,
        src: `Emerson om avhengighet, Hickson mfl. om strategiske betingelser, Pfeffer og Salancik om ressursavhengighet.` },
      { ty: 'mc', q: `Hvorfor kan en systemforvalter uten lederansvar ha stor makt?`,
        a: [`Andre er avhengige av kunnskap som er vanskelig å erstatte`, `Stillingen står høyt i hierarkiet`, `Vedkommende kan gi lønnsøkning`, `Makt følger alltid ansiennitet`],
        why: `Makt følger avhengighet. Den som sitter på en knapp og viktig ressurs, har makt uansett tittel.` }
    ]},
    { id: 'f5r2', t: `Maktens tre ansikter`, cards: [
      { h: `Den synlige makten`,
        b: `Det første ansiktet er makt i **åpne beslutninger**. To parter vil ulikt, saken kommer opp, og en av dem vinner fram. Denne makten kan observeres ved å se hvem som får viljen sin når interesser står mot hverandre. Det er dette Dahls definisjon fanger.`,
        ex: `Porteføljestyret velger mellom to prosjekter. Samferdsel får sitt, tannhelse får avslag. Makten er synlig i protokollen.` },
      { h: `Makten over dagsordenen`,
        b: `**Bachrach og Baratz** pekte på et andre ansikt: makten til å bestemme **hva som i det hele tatt blir en sak**. Den som styrer sakslisten, kan holde ubehagelige spørsmål borte uten å vinne en eneste votering. Ikke-beslutninger er også beslutninger. Spør derfor hva som aldri kommer opp, og hvem som bestemmer det.`,
        ex: `Forslaget om å avvikle et gammelt fagsystem når aldri porteføljestyret. Sekretariatet vurderer hver gang at saken «ikke er moden». Ingen har stemt nei.` },
      { ty: 'mc', q: `Et kontroversielt forslag blir år etter år sendt «til videre utredning» og kommer aldri til votering. Hvilken form for makt er i sving?`,
        a: [`Dagsordenmakt`, `Belønningsmakt`, `Referansemakt`, `Synlig beslutningsmakt`],
        why: `Å holde en sak borte fra beslutningsarenaen er maktens andre ansikt.` },
      { h: `Makten over tankene`,
        b: `**Steven Lukes** la til et tredje ansikt: makten til å forme hva folk **oppfatter som sine egne interesser**. Når en ordning framstår som naturlig og uten alternativ, oppstår det ingen konflikt å observere. Dette er den minst synlige formen for makt. Den ligger i språk, kategorier og selvfølgeligheter.`,
        ex: `Når alle omtaler innføringen som «en ren teknisk oppgradering», faller spørsmål om endrede arbeidsoppgaver bort av seg selv. Ordvalget har avgjort hva saken handler om.` },
      { ty: 'sort', q: `Hvilket av maktens ansikter?`, cats: [`Beslutningsmakt`, `Dagsordenmakt`, `Bevissthetsformende makt`],
        items: [[`Flertallet stemmer ned et forslag i ledermøtet`, 0], [`Et forslag blir aldri satt på sakslisten`, 1], [`Ansatte ser ikke for seg at arbeidet kunne vært organisert annerledes`, 2], [`Direktøren velger leverandør A framfor B etter åpen diskusjon`, 0], [`Sekretariatet vurderer saken som «ikke moden» år etter år`, 1], [`Ordet «effektivisering» gjør at ingen spør om tjenestekvalitet`, 2]],
        why: `Det første ansiktet vinner saker. Det andre velger saker. Det tredje former hva folk mener en sak er.` }
    ]},
    { id: 'f5r3', t: `Konflikt`, cards: [
      { h: `Konflikttyper`,
        b: `Konflikter oppstår når parter opplever at interesser, mål eller verdier ikke lar seg forene. **Oppgavekonflikt** handler om hva som bør gjøres. **Prosesskonflikt** handler om hvordan og av hvem. **Relasjonskonflikt** handler om personer og er nesten alltid skadelig. Uenighet om sak kan gi bedre beslutninger når den håndteres i et trygt klima. Faren er at den glir over i personkonflikt.`,
        ex: `«Jeg mener vi bør velge skyløsning» er oppgavekonflikt. «Du lytter aldri til drift» er relasjonskonflikt. Den første kan gjøre løsningen bedre. Den andre gjør samarbeidet dårligere.`,
        src: `Skillet er kjent fra Karen Jehn. Senere forskning viser at også oppgavekonflikt kan skade når tilliten er lav.` },
      { h: `Fem måter å håndtere konflikt på`,
        b: `**Thomas og Kilmann** ordner konfliktstiler etter to hensyn: hvor sterkt du hevder egne interesser, og hvor mye du samarbeider om den andres. **Konkurranse** er høy egenhevdelse og lite samarbeid. **Tilpasning** er det motsatte. **Unngåelse** er lite av begge. **Kompromiss** er midt på. **Samarbeid** er mye av begge og leter etter løsninger der begge får det viktigste. Ingen stil er alltid riktig.`,
        fig: 'konflikt',
        ex: `Ved et akutt sikkerhetsbrudd må sikkerhetslederen bestemme uten å forhandle. I en strid om hvem som skal eie KI-satsingen på sikt, er samarbeid verdt tiden det tar.` },
      { ty: 'mc', q: `Når er samarbeidsstilen mest verdt innsatsen?`,
        a: [`Når saken er viktig for begge og partene skal jobbe sammen lenge`, `Når noe må avgjøres på minutter`, `Når saken er uviktig for begge`, `Når den ene parten uansett må gi seg`],
        why: `Samarbeid tar tid. Det lønner seg når både saken og relasjonen er viktig.` },
      { h: `Konflikter eskalerer`,
        b: `**Friedrich Glasl** beskriver konflikter som en trapp nedover. Først handler det om sak, og partene ønsker en løsning. Så handler det om å vinne, og partene søker allierte. Til slutt handler det om å skade den andre, også til egen kostnad. Jo lenger ned, jo mer hjelp utenfra trengs. Tidlig håndtering er billigst.`,
        ex: `Uenigheten om ansvaret for lavkodeplattformen starter som en faglig diskusjon. Et halvt år senere setter partene direktøren på kopi i alle e-poster. Da handler det ikke lenger om plattformen.` },
      { ty: 'tf', q: `Jo lenger en konflikt har eskalert, jo lettere er det for partene å løse den selv.`, sant: false,
        why: `Det er omvendt. Langt nede i trappa trengs som regel hjelp fra en tredjepart.` }
    ]}
  ],
  quiz: [
    { ty: 'mc', q: `Hva betyr det at makt er relasjonell?`,
      a: [`Makt finnes i forholdet mellom parter og avhenger av hvem som trenger hvem`, `Makt følger alltid stillingen`, `Makt er en personlig egenskap`, `Makt kan bare utøves gjennom tvang`],
      why: `Makt er alltid makt over noen, og den hviler på avhengighet.` },
    { ty: 'mc', q: `Hvilke maktbaser gir vanligvis mest varig og frivillig oppslutning?`,
      a: [`Ekspertmakt og referansemakt`, `Tvangsmakt og belønningsmakt`, `Legitim makt og tvangsmakt`, `Belønningsmakt og legitim makt`],
      why: `Folk følger den de stoler på faglig og ser opp til, også når ingen kontrollerer.` },
    { ty: 'tf', q: `Autoritet er makt som oppfattes som legitim av dem den utøves overfor.`, sant: true,
      why: `Legitimiteten gjør at folk følger uten tvang.` },
    { ty: 'match', q: `Koble konfliktstil og kjennetegn hos Thomas og Kilmann.`,
      pairs: [[`Konkurranse`, `Hevder sitt, samarbeider lite`], [`Samarbeid`, `Hevder sitt og samarbeider mye`], [`Unngåelse`, `Hevder lite, samarbeider lite`], [`Tilpasning`, `Hevder lite, samarbeider mye`]],
      why: `Stilene plasseres etter egenhevdelse og samarbeidsvilje. Kompromiss ligger midt i.` },
    { ty: 'mc', q: `Leverandøren er den eneste som kan gjøre endringer i fagsystemet, og et bytte ville tatt tre år. Hva forklarer best leverandørens makt?`,
      a: [`Fylkeskommunen er avhengig av en ressurs som er vanskelig å erstatte`, `Leverandøren har legitim autoritet over fylkeskommunen`, `Leverandøren har referansemakt`, `Kontrakten gir leverandøren tvangsmakt`],
      why: `Avhengighet av en knapp ressurs uten alternativer gir makt.` },
    { ty: 'tf', q: `All konflikt i organisasjoner er skadelig og bør unngås.`, sant: false,
      why: `Saklig uenighet i et trygt klima kan gi bedre beslutninger. Relasjonskonflikt er derimot nesten alltid skadelig.` },
    { ty: 'mc', q: `Når er konkurransestilen mest forsvarlig?`,
      a: [`Når noe må avgjøres raskt og du har ansvaret, som ved en sikkerhetshendelse`, `Når relasjonen er viktigere enn saken`, `Når saken er uviktig for deg`, `Når begge parter har tid til å utforske løsninger`],
      why: `I akutte situasjoner med klart ansvar er det riktig å skjære gjennom.` },
    { ty: 'gap', q: `Makten til å avgjøre hvilke saker som kommer opp til behandling, kalles ___.`,
      a: [`dagsordenmakt`, `ekspertmakt`, `referansemakt`, `belønningsmakt`],
      why: `Bachrach og Baratz kalte det maktens andre ansikt.` },
    { ty: 'mc', q: `Hvem la til «det tredje ansiktet»: makten til å forme hva folk oppfatter som sine interesser?`,
      a: [`Steven Lukes`, `Robert Dahl`, `Max Weber`, `Friedrich Glasl`],
      why: `Lukes bygde videre på Dahl og på Bachrach og Baratz.` }
  ],
  kase: {
    t: `Hvem eier KI-en?`,
    intro: `KI-assistenter brer seg i Skarvøy. Digitaliseringsteamet mener de eier satsingen, fordi den handler om nye arbeidsmåter. Drift og sikkerhet mener de eier den, fordi verktøyene kjører på infrastrukturen deres. Begge har begynt å lage retningslinjer. Du jobber i digitaliseringsteamet.`,
    steps: [
      { s: `Jonas i drift og sikkerhet sender «foreløpige retningslinjer for KI» til alle ledere uten å varsle dere. Hva gjør du?`,
        opts: [
          [`Jeg svarer alle med en korrigering og legger ved vår egen versjon.`, 0, `Du tar steget fra sak til kamp om å vinne, med publikum. Slik eskalerer konflikter.`],
          [`Jeg tar en prat med Jonas samme dag for å forstå hvorfor han sendte, og hva han er bekymret for.`, 2, `Sterkt. Du holder konflikten på saksnivå og henter informasjon. Jonas er redd for at piloter settes i gang uten at sikkerheten er vurdert.`],
          [`Jeg lar det ligge. Det går seg nok til.`, 1, `Unngåelse kan være klokt i småsaker. Her bygger to enheter parallelle regimer, og det går ikke over av seg selv.`]
        ],
        th: `Glasl: tidlig og direkte kontakt, mens konflikten handler om sak, er det billigste tiltaket.` },
      { s: `Dere er enige om at uklarheten må løses. Hvordan foreslår du å gå fram?`,
        opts: [
          [`Vi ber direktøren avgjøre hvem som eier KI.`, 1, `Det gir en avgjørelse. Taperen sitter likevel igjen med kompetanse eller plattform dere trenger. Legitim makt avgjør, men bygger ikke samarbeid.`],
          [`Vi kartlegger sammen hva hver enhet trenger, og foreslår en deling: drift og sikkerhet eier teknisk styring og sikkerhet, digitalisering eier bruksområder, opplæring og gevinster.`, 2, `Sterkt. Samarbeidsstilen leter etter en løsning der begge får det viktigste. Dere er gjensidig avhengige, og løsningen avspeiler det.`],
          [`Vi deler ansvaret likt, annenhver måned.`, 0, `Et kompromiss uten logikk. Ingen eier noe lenge nok til å ta ansvar.`]
        ],
        th: `Thomas og Kilmann: samarbeid lønner seg når saken er viktig for begge, og partene er avhengige av hverandre over tid.` },
      { s: `Delingen blir vedtatt. Noen måneder senere ser du at alle forslag til nye bruksområder stopper i en «teknisk forhåndsvurdering» hos drift og sikkerhet og aldri når porteføljestyret. Hva gjør du?`,
        opts: [
          [`Ingenting. Vurderingene er faglige og må respekteres.`, 0, `Du overser dagsordenmakt. En vurdering som avgjør hva som kommer til beslutning, er makt, uansett hvor faglig den er.`],
          [`Jeg foreslår at alle forslag legges fram for porteføljestyret med den tekniske vurderingen som vedlegg, og med frist for vurderingen.`, 2, `Sterkt. Du gjør ikke-beslutninger om til synlige beslutninger, uten å ta fra drift og sikkerhet rollen som faglig premissgiver.`],
          [`Jeg går rundt forhåndsvurderingen og sender forslagene rett til direktøren.`, 1, `Du får sakene opp, men bryter avtalen og tilliten dere bygde. Det hevner seg neste gang.`]
        ],
        th: `Bachrach og Baratz: makten til å holde saker unna dagsordenen er mindre synlig enn makten i votering, og ofte viktigere.` }
    ],
    out: [
      `Konflikten har satt seg, og de to enhetene snakker gjennom direktøren. Prøv igjen, og hold saken på saksnivå så lenge du kan.`,
      `Dere har en ansvarsdeling som virker nokså bra. Se en gang til på de mindre synlige formene for makt.`,
      `De to enhetene har en ansvarsdeling begge kan stå inne for, og sakene når fram til beslutning. Du brukte konflikten til å gjøre organiseringen bedre.`
    ]
  },
  refl: `Tenk på en beslutning du nylig var uenig i. Hvilken maktbase brukte den som fikk gjennomslag? Og hvilke saker hos dere kommer aldri opp?`,
  mission: `Lag et interessentkart for et pågående tiltak med verktøyet Interessentkart. Plasser minst seks aktører etter makt og interesse.`,
  read: [`Jacobsen og Thorsvik, Hvordan organisasjoner fungerer: kapitlet om makt og konflikt`, `Lukes (1974), Power: A Radical View`, `Pfeffer (1992), Managing with Power`]
});

F.push({
  n: 6, id: 'f6', zone: 1,
  t: `Omgivelser`,
  k: `Organisasjonens omgivelser`,
  intro: `Ingen organisasjon er en øy. Fylkeskommunen lever av ressurser, regler og anerkjennelse utenfra. Her lærer du hvorfor organisasjoner blir så like, og hvorfor det ikke alltid handler om effektivitet.`,
  rooms: [
    { id: 'f6r1', t: `Ressurser og forventninger`, cards: [
      { h: `To slags omgivelser`,
        b: `Organisasjoner forholder seg til to typer omgivelser. De **tekniske** omgivelsene leverer ressurser og etterspør resultater: bevilgende myndigheter, leverandører, brukere og samarbeidspartnere. De **institusjonelle** omgivelsene stiller forventninger om hva som er riktig, moderne og akseptabelt: lover, normer, faglige standarder og moter. De første belønner **effektivitet**. De andre belønner **legitimitet**.`,
        ex: `Leverandøren av fagsystemet er del av de tekniske omgivelsene. Forventningen om at alle fylkeskommuner nå må ha en KI-strategi, kommer fra de institusjonelle.`,
        src: `Skillet er kjent fra Scott og Meyer.` },
      { h: `Usikkerhet`,
        b: `Omgivelser skaper usikkerhet. **Duncan** beskrev to dimensjoner. **Kompleksitet**: hvor mange og hvor ulike forhold må organisasjonen følge med på? **Stabilitet**: hvor raskt og uforutsigbart endrer de seg? Enkle og stabile omgivelser gir lav usikkerhet. Komplekse og dynamiske gir høy. Høy usikkerhet krever mer fleksibel struktur og flere som følger med utover.`,
        fig: 'usikkerhet',
        ex: `Drift av fylkesveier har stabile rammer og kjente aktører. KI-feltet har nye verktøy hver måned, regelverk i bevegelse og mange aktører. Samme fylkeskommune møter begge typer omgivelser.` },
      { ty: 'mc', q: `Hvilke omgivelser gir høyest usikkerhet ifølge Duncan?`,
        a: [`Komplekse og dynamiske`, `Enkle og stabile`, `Komplekse og stabile`, `Enkle og dynamiske`],
        why: `Mange ulike forhold som endrer seg raskt, er vanskeligst å forutsi.` },
      { h: `Avhengig av andres ressurser`,
        b: `**Ressursavhengighetsperspektivet** til Pfeffer og Salancik sier at organisasjoner må skaffe ressurser fra andre, og at det gjør dem sårbare for kontroll utenfra. De prøver derfor å **redusere avhengigheten**: gjennom buffere og alternativer, langsiktige avtaler, samarbeid og allianser, eller ved å påvirke rammene. Den som kontrollerer en kritisk ressurs, får makt over organisasjonen.`,
        ex: `Én leverandør drifter kjernesystemet for alle skolene. Fylkeskommunene reduserer avhengigheten ved å stå sammen som én kunde gjennom et felles selskap, og ved å kreve åpne grensesnitt.` },
      { ty: 'multi', q: `Hvilke grep reduserer avhengighet av en kritisk leverandør?`,
        ok: [`Krav om åpne grensesnitt og eierskap til egne data`, `Felles anskaffelse sammen med andre kunder`, `Å holde et reelt alternativ varmt`],
        no: [`Å legge flere tjenester til samme leverandør uten nye vilkår`, `Å forlenge kontrakten uten konkurranse`],
        why: `Alternativer, allianser og gode avtaler svekker den andres makt over deg.` }
    ]},
    { id: 'f6r2', t: `Hvorfor blir alle like?`, cards: [
      { h: `Legitimitet og rasjonaliserte myter`,
        b: `**Meyer og Rowan** hevdet at organisasjoner tar i bruk strukturer og metoder fordi de oppfattes som riktige, og ikke bare fordi de virker. Slike allment aksepterte forestillinger kalles **rasjonaliserte myter**. Den som følger dem, framstår som moderne og ansvarlig og får støtte og ressurser. Legitimitet er en ressurs på linje med penger.`,
        ex: `En fylkeskommune uten digitaliseringsstrategi ville fått spørsmål fra politikere, revisjon og presse, uansett hvor gode tjenestene var. Strategien gir legitimitet før den gir effekt.` },
      { h: `Tre veier til likhet`,
        b: `**DiMaggio og Powell** kaller prosessen der organisasjoner i samme felt blir like, for **isomorfi**. Den har tre drivere. **Tvangsmessig**: lover, krav og pålegg fra dem organisasjonen er avhengig av. **Mimetisk**: under usikkerhet etterligner man dem som ser ut til å lykkes. **Normativ**: profesjoner, utdanninger og fagnettverk sprer felles oppfatninger om god praksis.`,
        ex: `Den nasjonale digitaliseringsstrategien fra 2024 har som mål at alle offentlige virksomheter skal ha tatt i bruk KI innen 2030. Det er press ovenfra. «Nabofylket har chatbot, da må vi også» er mimetisk. Når alle arkitekter har samme sertifisering og foreslår samme rammeverk, er det normativt.` },
      { ty: 'sort', q: `Hvilken form for isomorfi?`, cats: [`Tvangsmessig`, `Mimetisk`, `Normativ`],
        items: [[`Regelverket krever vurdering av personvernkonsekvenser`, 0], [`Vi kopierer organisasjonsmodellen til en fylkeskommune som fikk pris`, 1], [`Prosjektlederne har samme sertifisering og bruker samme metode`, 2], [`Staten stiller vilkår for tilskudd`, 0], [`Usikre på KI velger vi samme verktøy som de største`, 1], [`Fagnettverket for arkivarer blir enige om beste praksis`, 2]],
        why: `Tvang kommer fra dem du er avhengig av. Mimetikk kommer av usikkerhet. Normativt press kommer fra profesjonene.` },
      { h: `Prat, vedtak og handling`,
        b: `Når forventningene utenfra ikke passer med det daglige arbeidet, kan organisasjonen **dekoble**: den vedtar og viser fram det som forventes, mens praksis fortsetter som før. **Nils Brunsson** beskriver hvordan organisasjoner møter motstridende krav ved å la prat, beslutninger og handling peke i ulike retninger. Det ser ut som hykleri. Det kan også være en måte å overleve umulige krav på.`,
        ex: `Skarvøy har vedtatt «smidig utvikling» og omtaler den i årsrapporten. I prosjektene skrives det fortsatt kravspesifikasjon på åtti sider før noe bygges.` },
      { ty: 'mc', q: `En virksomhet vedtar en ny metode og omtaler den utad, mens arbeidet i praksis fortsetter som før. Hva kalles det?`,
        a: [`Dekobling`, `Tvangsmessig isomorfi`, `Målforskyvning`, `Suboptimalisering`],
        why: `Den formelle strukturen kobles fra den faktiske praksisen for å tilfredsstille forventninger utenfra.` }
    ]},
    { id: 'f6r3', t: `Oppskrifter og samarbeid`, cards: [
      { h: `Organisasjonsoppskrifter på reise`,
        b: `**Kjell Arne Røvik** kaller populære ideer om god organisering for **organisasjonsoppskrifter**: Lean, målstyring, smidig, tillitsbasert ledelse, produktteam. De reiser mellom organisasjoner og må **oversettes** når de kommer fram. Noen kopierer. Andre legger til, trekker fra eller omformer. God oversettelse krever kunnskap både om ideen og om den lokale sammenhengen.`,
        ex: `«Produktteam» kom fra teknologiselskaper med egne utviklere og ett produkt. I en fylkeskommune med innkjøpte fagsystemer og politisk styring må ideen oversettes. Ellers blir den et nytt navn på en gammel prosjektgruppe.` },
      { h: `Kjøpe, lage eller samarbeide?`,
        b: `**Transaksjonskostnadsteorien** til Williamson spør når det lønner seg å kjøpe i markedet, og når det lønner seg å gjøre selv. Kjøp passer for standardvarer med mange leverandører. Egen regi eller tett samarbeid passer når investeringene er spesialiserte, usikkerheten er høy og det er få å velge mellom. Da blir det dyrt å skrive, følge opp og håndheve kontrakter.`,
        ex: `Kontorstøtte kjøpes som standardvare. Et skoleadministrativt system med lovpålagte særkrav og få aktuelle leverandører gir sterk binding. Derfor forhandler fylkeskommunene sammen.` },
      { ty: 'tf', q: `Ifølge transaksjonskostnadsteorien er det alltid mest effektivt å kjøpe tjenester i markedet.`, sant: false,
        why: `Når investeringene er spesialiserte og leverandørene få, kan kostnadene ved kontrakter overstige gevinsten ved konkurranse.` },
      { h: `Sammen om fellesløsninger`,
        b: `Kommunal sektor svarer på avhengighet og kompleksitet med **samarbeid**: interkommunale selskaper, nettverk og felles plattformer. Fylkeskommunene eier for eksempel Novari IKS sammen. Selskapet anskaffer og forvalter felles digitale løsninger, særlig for videregående opplæring og samferdsel. Samarbeid gir stordrift og forhandlingsmakt. Prisen er mindre lokal handlefrihet og mer tid brukt på samordning.`,
        ex: `Skarvøy ønsker en endring i fellesløsningen før skolestart. De andre eierne har også ønsker. Beslutningen tas i et felles forum etter felles prioritering. Det er styring i nettverk.` },
      { ty: 'mc', q: `Hva er den typiske prisen for å løse oppgaver gjennom et felles selskap med mange eiere?`,
        a: [`Mindre lokal handlefrihet og mer samordning`, `Høyere pris per lisens`, `Svakere forhandlingsposisjon mot leverandører`, `Mindre stordrift`],
        why: `Fellesskap gir styrke utad og bindinger innad. Egne ønsker må gjennom felles prioritering.` }
    ]}
  ],
  quiz: [
    { ty: 'mc', q: `Hva belønner de institusjonelle omgivelsene først og fremst?`,
      a: [`At organisasjonen framstår som legitim`, `Lavest mulig kostnad per enhet`, `Rask levering`, `Høyest mulig overskudd`],
      why: `Institusjonelle omgivelser stiller forventninger om hva som er riktig og akseptabelt.` },
    { ty: 'match', q: `Koble navn og bidrag.`,
      pairs: [[`Pfeffer og Salancik`, `Ressursavhengighet`], [`DiMaggio og Powell`, `Tre former for isomorfi`], [`Meyer og Rowan`, `Rasjonaliserte myter`], [`Røvik`, `Oversettelse av organisasjonsoppskrifter`], [`Williamson`, `Transaksjonskostnader`]],
      why: `Fem sentrale bidrag til forståelsen av forholdet mellom organisasjon og omgivelser.` },
    { ty: 'tf', q: `Mimetisk isomorfi er sterkest når organisasjoner er usikre på hva som virker.`, sant: true,
      why: `Under usikkerhet er det trygt å gjøre som dem som ser ut til å lykkes.` },
    { ty: 'mc', q: `Alle prosjektledere i fylkeskommunen har tatt samme sertifisering og foreslår samme styringsmodell. Hvilken driver for likhet er dette?`,
      a: [`Normativ isomorfi`, `Mimetisk isomorfi`, `Tvangsmessig isomorfi`, `Dekobling`],
      why: `Felles utdanning og faglige nettverk gir felles oppfatning av god praksis.` },
    { ty: 'gap', q: `Allment aksepterte forestillinger om hvordan moderne organisasjoner bør se ut, kalles rasjonaliserte ___.`,
      a: [`myter`, `mål`, `rutiner`, `kontrakter`],
      why: `Begrepet kommer fra Meyer og Rowan. Mytene følges fordi de gir legitimitet.` },
    { ty: 'mc', q: `Hva er kjernen i ressursavhengighetsperspektivet?`,
      a: [`Den som kontrollerer ressurser organisasjonen trenger, får makt over den`, `Organisasjoner bør kjøpe alt i markedet`, `Ressurser fordeles best gjennom hierarki`, `Organisasjoner er uavhengige av omgivelsene`],
      why: `Avhengighet gir sårbarhet. Organisasjoner prøver derfor å styre og redusere den.` },
    { ty: 'sort', q: `Teknisk eller institusjonell omgivelse?`, cats: [`Teknisk`, `Institusjonell`],
      items: [[`Leverandøren av fagsystemet`, 0], [`Forventningen om at alle skal ha en KI-strategi`, 1], [`Rammetilskuddet fra staten`, 0], [`Faglige standarder for god arkivpraksis`, 1], [`Kommunene fylkeskommunen samarbeider med om tjenester`, 0], [`Medienes bilde av en moderne forvaltning`, 1]],
      why: `Tekniske omgivelser leverer ressurser og etterspør resultater. Institusjonelle omgivelser stiller forventninger.` },
    { ty: 'tf', q: `Røvik mener at organisasjonsoppskrifter fungerer best når de kopieres uten endringer.`, sant: false,
      why: `Røvik legger vekt på oversettelse: ideen må tilpasses den lokale sammenhengen for å virke.` },
    { ty: 'mc', q: `Når lønner egen regi eller tett samarbeid seg framfor kjøp i markedet, ifølge Williamson?`,
      a: [`Når investeringene er spesialiserte og leverandørene er få`, `Når varen er standard og tilbyderne mange`, `Når kontrakter er enkle å skrive`, `Når usikkerheten er lav`],
      why: `Da blir bindingen sterk og kontraktene dyre å sikre.` }
  ],
  kase: {
    t: `Chatboten alle har`,
    intro: `Tre nabofylker har lansert KI-chatbot på nettsidene sine. En fylkespolitiker spør i fylkestinget hvorfor Skarvøy ikke har det. Ellen Brekke ber deg om en anbefaling innen to uker.`,
    steps: [
      { s: `Hvordan forstår du presset?`,
        opts: [
          [`Som et teknologisk etterslep som må tas igjen raskt.`, 0, `Du tar forventningen for et behov. Ingen har vist at innbyggerne i Skarvøy sliter med å finne svar.`],
          [`Som institusjonelt press. Forventningen kommer av at andre har gjort det, og usikkerheten om KI er stor.`, 2, `Sterkt. Du kjenner igjen mimetisk isomorfi. Det betyr ikke at svaret er nei. Det betyr at du må skille mellom legitimitet og nytte.`],
          [`Som politisk støy som kan ignoreres.`, 0, `Legitimitet er en reell ressurs. En fylkeskommune som framstår som akterutseilt, mister støtte, også til de gode prosjektene.`]
        ],
        th: `DiMaggio og Powell: under usikkerhet etterligner organisasjoner dem som framstår som vellykkede. Presset er reelt, men sier lite om nytten.` },
      { s: `Du undersøker. Nabofylkenes chatboter brukes lite, og to av tre svarer feil på spørsmål om skoleskyss. Forventningen i fylkestinget er likevel tydelig. Hva anbefaler du?`,
        opts: [
          [`Kjøp samme chatbot som naboene. Da er saken ute av verden.`, 0, `Kopiering uten oversettelse. Du får legitimitet på kort sikt og et verktøy som svarer feil i fylkeskommunens navn.`],
          [`Si nei, og legg fram tallene som viser at chatbotene virker dårlig.`, 1, `Faglig redelig. Du svarer likevel ikke på legitimitetsbehovet, og du framstår som bremsekloss.`],
          [`Foreslå en avgrenset pilot på ett område der behovet er dokumentert, med tydelige mål, og fortell fylkestinget hva dere har lært av naboene.`, 2, `Sterkt. Du oversetter ideen til lokal sammenheng, og du gir politikerne noe å vise til.`]
        ],
        th: `Røvik: gode oversettere kjenner både ideen og den lokale konteksten. De verken kopierer eller avviser.` },
      { s: `Piloten på skoleskyss virker bra. Leverandøren tilbyr gunstig pris hvis dere binder dere i fem år og legger all innbyggerdialog på plattformen deres. Hva vurderer du?`,
        opts: [
          [`Vi takker ja. Prisen er god, og løsningen virker.`, 0, `Du bytter en fordel i dag mot sterk avhengighet. Om fem år sitter leverandøren med dialoghistorikken, integrasjonene og forhandlingsmakten.`],
          [`Vi undersøker om andre fylkeskommuner har samme behov, og om vi kan anskaffe sammen med krav om åpne grensesnitt og kort binding.`, 2, `Sterkt. Du reduserer avhengigheten gjennom samarbeid og alternativer, slik ressursavhengighetsperspektivet anbefaler.`],
          [`Vi bygger alt selv for å slippe leverandører.`, 1, `Du unngår innlåsing, men tar på deg kostnader og kompetansebehov for noe som langt på vei er standardvare.`]
        ],
        th: `Pfeffer og Salancik: reduser avhengighet gjennom alternativer, samarbeid og avtaler. Williamson: få leverandører og spesialiserte investeringer gir høye transaksjonskostnader.` }
    ],
    out: [
      `Skarvøy fikk en chatbot, og den svarer feil om skoleskyss. Prøv igjen, og skill mellom press og behov.`,
      `Anbefalingen din er forsvarlig. Tenk en gang til på hvordan du kan gi både legitimitet og nytte.`,
      `Fylkestinget fikk en ærlig orientering og en pilot som virker. Avtalen holder dørene åpne. Du ga både legitimitet og nytte.`
    ]
  },
  refl: `Hvilken organisasjonsoppskrift har din virksomhet tatt i bruk de siste årene? Ble den kopiert, tilpasset eller bare omtalt? Hva ville en god oversettelse vært?`,
  mission: `Finn ett tiltak hos dere som mest gir legitimitet, og ett som mest gir effekt. Spør en kollega om hun er enig i sorteringen.`,
  read: [`Jacobsen og Thorsvik, Hvordan organisasjoner fungerer: kapitlet om organisasjonens omgivelser`, `Røvik (2007), Trender og translasjoner`, `DiMaggio og Powell (1983), The Iron Cage Revisited`, `Christensen mfl., Organisasjonsteori for offentlig sektor: kapitlet om myteperspektivet`]
});
