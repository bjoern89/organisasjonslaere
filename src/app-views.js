/* ===================== Visninger ===================== */
let CUR = { v: 'huset' }, CARY = null;
const VIEWS = {}, AFTER = {};
const LEARN = `Appen bygger på det forskningen sier virker: du henter fram kunnskapen selv i stedet for å lese om igjen, repetisjonen spres over dager, temaene blandes, tekst kombineres med modeller, og alt knyttes til konkrete eksempler. Du velger form etter situasjonen: les, lytt, se eller gjør. Forskningen støtter ikke at folk har faste læringsstiler, så appen sorterer deg ikke i en.`;
function route() { const h = (location.hash || '').slice(1), m = h.match(/^etasje-(\d+)$/); if (m && F[+m[1] - 1]) return { v: 'floor', f: F[+m[1] - 1] }; return { v: ['huset', 'tren', 'caser', 'verktoy', 'profil', 'arkiv', 'tak'].includes(h) ? h : 'huset' }; }
function chips() { const st = streak(), a = $('#chip-st'), b = $('#chip-xp'), mk = $('.merke'); if (!a || !b) return;
  if (mk) { const home = CUR.v === 'huset'; mk.textContent = home ? level().t : 'Fylkeshuset'; mk.setAttribute('href', home ? '#profil' : '#huset'); if (home) mk.setAttribute('aria-label', 'Tittelen din i Skarvøy: ' + level().t); else mk.setAttribute('aria-label', 'Fylkeshuset, til etasjeoversikten'); } a.innerHTML = icon('aurora', 18) + `<b>${st}</b>`; a.setAttribute('aria-label', `${st} ${st === 1 ? 'dag' : 'dager'} på rad`); b.innerHTML = `<b>${S.xp}</b> XP`; b.setAttribute('aria-label', `${S.xp} erfaringspoeng. Tittel: ${level().t}`); }
function render(top) {
  CUR = route(); $('#view').innerHTML = VIEWS[CUR.v](CUR);
  const tab = ['floor', 'tak', 'arkiv'].includes(CUR.v) ? 'huset' : CUR.v;
  $$('.tabs a').forEach(a => { const on = a.dataset.t === tab; a.classList.toggle('on', on); if (on) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current'); });
  chips(); if (top !== false) window.scrollTo(0, 0); if (AFTER[CUR.v]) AFTER[CUR.v]();
}
function applySettings() { document.documentElement.style.setProperty('--fs', [1, 1.12, 1.25][S.set.ts] || 1); }
const greet = () => { const h = new Date().getHours(); return h < 5 ? 'God natt' : h < 10 ? 'God morgen' : h < 17 ? 'God dag' : 'God kveld'; };
function ring(pct, val) { const r = 26, c = 2 * Math.PI * r; return `<svg class="ring" viewBox="0 0 64 64" width="68" height="68" role="img" aria-label="${val} av ${S.goal} erfaringspoeng i dag"><circle cx="32" cy="32" r="${r}" class="rb"/><circle cx="32" cy="32" r="${r}" class="rf" stroke-dasharray="${c.toFixed(1)}" stroke-dashoffset="${(c * (1 - pct)).toFixed(1)}" transform="rotate(-90 32 32)"/><text x="32" y="32" text-anchor="middle" class="rv">${val}</text><text x="32" y="44" text-anchor="middle" class="rl">av ${S.goal}</text></svg>`; }
const winHTML = f => `<span class="win" aria-hidden="true">${WKEYS(f).map(k => `<i class="${isLit(f, k) ? 'on' : ''}"></i>`).join('')}</span>`;
const rowBtn = (act, ic, t, sub, attrs = '', done = false) => `<button class="rowb2${done ? ' done' : ''}" data-act="${act}" ${attrs}>${icon(ic, 24)}<span class="dt"><strong>${t}</strong><span>${sub}</span></span>${icon('next', 18)}</button>`;

VIEWS.huset = () => {
  const st = streak(), ns = nextStep(), td = S.days[today()] || 0, isNew = S.xp === 0, did = !!S.daily[today()], total = F.reduce((a, f) => a + lit(f), 0), due = dueTerms(999).length, early = F.reduce((a, f) => a + f.rooms.filter(r => S.done[r.id] != null).length, 0) < 3;
  const fl = f => { const n = lit(f); return `<a class="fl${n ? ' lit' : ''}${n === 6 ? ' full' : ''}" href="#etasje-${f.n}" data-f="${f.id}" aria-label="${f.n}. etasje, ${esc(f.t)}. ${n} av 6 vinduer lyser."><span class="no">${f.n}</span><span class="tx"><span class="ti">${esc(f.t)}</span><span class="su">${n === 6 ? 'Alle vinduene lyser' : n ? `${n} av 6 vinduer lyser` : esc(TEASE[f.id])}</span></span>${winHTML(f)}</a>`; };
  let rows = '', z = -1; [...F].reverse().forEach(f => { if (f.zone !== z) { z = f.zone; rows += `<p class="zone">${esc(ZONES[z])}</p>`; } rows += fl(f); });
  const lensAll = LENS.every(l => S.done[l.id] != null), takOn = LENS.some(l => S.done[l.id] != null) || S.done.sim != null || S.stat.exam > 0;
  return `<section class="today" aria-label="I dag">${ring(clamp(td / S.goal, 0, 1), td)}
      <div class="tt">${isNew ? `<h1>Velkommen inn</h1><p>Tolv etasjer organisasjonsteori med eksempler fra digitalisering i fylkeskommunen. Fullfør rom, caser og prøver, så tennes lysene i vinduene. Du begynner som sommervikar.</p>`
        : `<h1>${esc(greet())}</h1><p>${did ? `Dagens økt er gjort.${st > 0 ? ` Du har lært ${st} ${st === 1 ? 'dag' : 'dager'} på rad.` : ''}` : early ? `Du er i gang. Ta rommene i 1. etasje først, så får dagens økt mer å repetere.` : `Dagens økt blander repetisjon fra etasjene du har besøkt. Den tar omtrent fem minutter.`}</p>`}</div>
      <div class="tb">${isNew ? `<button class="btn wide" data-act="go" data-k="f1r1">Start i 1. etasje</button><button class="btn ghost wide" data-act="howto">Slik virker huset</button>`
        : `${did || early ? '' : `<button class="btn wide" data-act="daily">Start dagens økt</button>`}${ns ? `<button class="btn ${did || early ? '' : 'ghost '}wide" data-act="go" data-k="${ns.key}">${esc(ns.label)}</button>` : `<a class="btn ghost wide" href="#tak">Gå til Takterrassen</a>`}${!did && early ? `<button class="btn ghost wide" data-act="daily">Ta dagens økt likevel</button>` : ''}`}</div>
    </section>
    <div class="sky" style="--aur:${Math.min(1, 0.18 + st * 0.12).toFixed(2)}" aria-hidden="true"><div class="au"></div><div class="skilt">Fylkeshuset</div></div>
    <nav class="bldg" aria-label="Etasjeoversikt"><div class="shaft" aria-hidden="true"><div class="car" id="car"></div></div>
      <a class="fl sp${takOn ? ' lit' : ''}" href="#tak" aria-label="Takterrassen: fire briller, simulator og eksamenstrening"><span class="no">T</span><span class="tx"><span class="ti">Takterrassen</span><span class="su">Fire briller, simulator, eksamen</span></span><span class="win w3" aria-hidden="true"><i class="${lensAll ? 'on' : ''}"></i><i class="${S.done.sim != null ? 'on' : ''}"></i><i class="${S.stat.exam ? 'on' : ''}"></i></span></a>
      ${rows}
      <a class="fl sp" href="#arkiv" aria-label="Arkivet i kjelleren: begreper og navn"><span class="no">K</span><span class="tx"><span class="ti">Arkivet</span><span class="su">${GL.length} begreper og ${WHO.length} navn</span></span>${due ? `<span class="tag">${due} klare</span>` : '<span></span>'}</a>
    </nav>
    <p class="fot">${total} av 72 vinduer lyser. Uavhengig studiestøtte, ikke tilknyttet forfattere eller forlag. <a href="#profil">Om appen og kildene</a></p>`;
};
AFTER.huset = () => { const car = $('#car'), ns = nextStep(), row = $(`.fl[data-f="${(ns ? ns.f : F[11]).id}"]`); if (!car || !row) return;
  const y = row.offsetTop + (row.offsetHeight - car.offsetHeight) / 2; car.style.transition = 'none'; car.style.top = (CARY == null ? y : CARY) + 'px'; void car.offsetHeight; car.style.transition = '';
  if (CARY != null && CARY !== y) requestAnimationFrame(() => { car.style.top = y + 'px'; }); CARY = y; };

VIEWS.floor = ({ f }) => {
  if (!S.seen[f.id]) { S.seen[f.id] = 1; checkBadges(); save(); }
  const pct = S.done[f.id + 't'], stars = pct === 100 ? 3 : pct >= 85 ? 2 : pct >= 70 ? 1 : 0, kp = S.done[f.id + 'k'];
  const door = (k, ic, t, sub, done) => `<button class="door${done ? ' done' : ''}" data-act="go" data-k="${k}"><span class="dw" aria-hidden="true"></span><span class="dt"><strong>${esc(t)}</strong><span>${sub}</span></span>${icon(ic, 20)}</button>`;
  const mins = r => Math.max(2, Math.round(r.cards.reduce((a, c) => a + (c.h ? (c.b + ' ' + (c.ex || '')).split(/\s+/).length : 30), 0) / 170));
  const terms = GL.filter(g => g.f === f.id), names = WHO.filter(w => w[2] === f.id), models = Object.keys(MODELS).filter(id => MODELS[id].f === f.id);
  return `<header class="fh"><a class="backl" href="#huset">${icon('back', 18)} Huset</a>
      <div class="fhr"><p class="super" aria-hidden="true">${pad(f.n)}</p><div><p class="zl">${f.n}. etasje. ${esc(ZONES[f.zone])}</p><h1>${esc(f.t)}</h1></div></div>
      <p class="lead">${esc(f.intro)}</p>
      <p class="fmeta">${winHTML(f)}<span>${lit(f)} av 6 vinduer lyser</span>${pct != null ? `<span class="stars sm" role="img" aria-label="${stars} av 3 stjerner på etasjeprøven">${[0, 1, 2].map(i => `<span class="${i < stars ? 'on' : ''}">${icon('star', 16)}</span>`).join('')}</span>` : ''}</p></header>
    <section class="doors" aria-label="Aktiviteter på etasjen">
      ${f.rooms.map((r, i) => door(r.id, 'book', `Rom ${i + 1}: ${r.t}`, `${r.cards.filter(c => c.h).length} kort og ${r.cards.filter(c => c.ty).length} kontrollspørsmål, ca. ${mins(r)} min`, S.done[r.id] != null)).join('')}
      ${door(f.id + 'k', 'folder', `Case: ${f.kase.t}`, kp != null ? `Beste resultat: ${kp} av 6 poeng` : `Tre valg i Skarvøy fylkeskommune`, kp != null)}
      ${door(f.id + 't', 'tren', `Etasjeprøve`, pct != null ? `Beste resultat: ${pct} prosent${pct < 70 ? '. Du trenger 70 for å tenne vinduet' : ''}` : `${f.quiz.length} spørsmål. 70 prosent tenner vinduet`, pct >= 70)}
      ${door(f.id + 'x', 'pen', `Refleksjon og feltoppdrag`, `Koble teorien til din egen arbeidsplass`, S.done[f.id + 'x'] != null)}
    </section>
    ${models.map(id => `<section class="sec"><h2>Modellen på etasjen</h2><h3>${esc(MODELS[id].t)}</h3>${modelHTML(id)}</section>`).join('')}
    <section class="sec"><h2>Begreper</h2><p class="chipsl">${terms.map(g => `<button class="chipb" data-act="term" data-k="${g.id}" aria-pressed="false">${esc(g.t)}</button>`).join('')}</p><div class="tdef" id="tdef" aria-live="polite"></div><p><button class="btn ghost" data-act="cardsf" data-k="${f.id}">${icon('cards', 18)} Øv på de ${terms.length} begrepene</button></p></section>
    <section class="sec"><h2>Navn du bør kunne plassere</h2><ul class="names">${names.map(w => `<li><strong>${esc(w[0])}</strong><span>${esc(w[1])}</span></li>`).join('')}</ul></section>
    <section class="sec"><h2>Les videre</h2><ul class="read">${f.read.map(x => `<li>${esc(x)}</li>`).join('')}</ul></section>
    <nav class="pn" aria-label="Andre etasjer">${f.n > 1 ? `<a href="#etasje-${f.n - 1}">${icon('back', 18)}<span>${f.n - 1}. ${esc(F[f.n - 2].t)}</span></a>` : '<span></span>'}${f.n < 12 ? `<a href="#etasje-${f.n + 1}"><span>${f.n + 1}. ${esc(F[f.n].t)}</span>${icon('next', 18)}</a>` : `<a href="#tak"><span>Takterrassen</span>${icon('next', 18)}</a>`}</nav>`;
};

VIEWS.tren = () => {
  const due = dueTerms(999).length, weak = Object.keys(S.q).filter(k => S.q[k][3] === 0 && QI[k]).length, did = !!S.daily[today()];
  return `<header class="vh"><h1>Tren</h1><p class="lead">Korte økter som henter fram det du har lært. Det du husker dårligst, kommer oftest tilbake.</p></header>
    <section class="rows">
      ${rowBtn('daily', 'aurora', 'Dagens økt', did ? 'Gjort i dag. Du kan ta en ekstra runde.' : 'Blandet repetisjon, omtrent fem minutter', '', did)}
      ${rowBtn('cards', 'cards', 'Begrepskort', due ? `${due} begreper er klare til repetisjon` : 'Ingen begreper venter akkurat nå')}
      ${rowBtn('mix', 'bolt', 'Hurtigquiz', 'Ti blandede spørsmål fra etasjene du har besøkt')}
      ${rowBtn('mixall', 'house', 'Hele huset', 'Ti spørsmål fra alle tolv etasjene')}
      ${rowBtn('weak', 'loop', 'Svake punkter', weak ? `${weak} spørsmål du bommet på sist` : 'Spørsmål du bommer på, samles her')}
      ${rowBtn('names', 'people', 'Hvem sa hva?', `Koble ${WHO.length} navn til bidragene deres`)}
      ${rowBtn('gallery', 'map', 'Modellgalleriet', `${Object.keys(MODELS).length} modeller du kan trykke på`)}
      ${rowBtn('examlist', 'cap', 'Eksamenstrening', `${EXAM.length} drøftingsoppgaver med momentlister`)}
    </section>
    <section class="sec note"><h2>Slik er treningen bygd opp</h2><p>${esc(LEARN)}</p></section>`;
};

const lensRow = l => rowBtn('lens', 'glasses', esc(l.t), S.done[l.id] != null ? 'Gjennomført' : 'Fire analyser og en sorteringsoppgave', `data-k="${l.id}"`, S.done[l.id] != null);
VIEWS.caser = () => `<header class="vh"><h1>Caser</h1><p class="lead">Alle casene foregår i Skarvøy fylkeskommune, et oppdiktet fylke med kjente problemer. Du velger, og teorien forklarer hva som skjedde.</p></header>
  <section class="sec"><h2>Etasjecaser</h2><div class="rows">${F.map(f => { const p = S.done[f.id + 'k']; return `<button class="rowb2${p != null ? ' done' : ''}" data-act="go" data-k="${f.id}k"><span class="rn">${f.n}</span><span class="dt"><strong>${esc(f.kase.t)}</strong><span>${esc(f.t)}${p != null ? `. ${p} av 6 poeng` : ''}</span></span>${icon('next', 18)}</button>`; }).join('')}</div></section>
  <section class="sec"><h2>Fire briller</h2><p>Samme sak sett gjennom Bolman og Deals fire rammer.</p><div class="rows">${LENS.map(lensRow).join('')}</div></section>
  <section class="sec"><h2>Prosjektsimulatoren</h2><p>Led innføringen av en KI-assistent gjennom åtte måneder.${S.done.sim != null ? ` Beste gevinst så langt: ${S.done.sim} av 100.` : ''}</p><p><button class="btn" data-act="sim">${icon('flag', 18)} ${S.done.sim != null ? 'Spill en gang til' : 'Start simulatoren'}</button></p></section>`;

const TOOLS = [['stake', 'map', 'Interessentkart', 'Plasser aktører etter makt og interesse'], ['force', 'scale', 'Kraftfelt', 'Vei drivkrefter mot motkrefter'], ['kotter', 'steps', 'Kotter-sjekk', 'Finn trinnet der endringen din står fast'], ['job', 'sliders', 'Jobbdesign-måler', 'Mål motivasjonspotensialet i en stilling'], ['lens', 'glasses', 'Brillesjekk', 'Analyser din egen sak med fire rammer']];
VIEWS.verktoy = () => `<header class="vh"><h1>Verktøykasse</h1><p class="lead">Fem verktøy du kan bruke på en ekte sak på jobben. Det du fyller inn, lagres sammen med framdriften din og kan kopieres ut.</p></header>
  <section class="rows">${TOOLS.map(t => rowBtn('tool', t[1], t[2], t[3], `data-k="${t[0]}"`, !!S.tools.used[t[0]])).join('')}</section>`;

VIEWS.tak = () => `<header class="vh"><a class="backl" href="#huset">${icon('back', 18)} Huset</a><p class="zl">Over tolvte etasje</p><h1>Takterrassen</h1><p class="lead">Herfra ser du hele huset. Tre aktiviteter som binder etasjene sammen.</p></header>
  <section class="sec"><h2>Fire briller</h2><p>Samme sak sett gjennom Bolman og Deals fire rammer.</p><div class="rows">${LENS.map(lensRow).join('')}</div></section>
  <section class="rows">${rowBtn('sim', 'flag', 'Prosjektsimulatoren', S.done.sim != null ? `Beste gevinst: ${S.done.sim} av 100` : 'Led en KI-innføring gjennom åtte måneder', '', S.done.sim != null)}${rowBtn('examlist', 'cap', 'Eksamenstrening', `${S.stat.exam} av ${EXAM.length} drøftingsoppgaver gjennomført`, '', S.stat.exam > 0)}${rowBtn('gallery', 'map', 'Modellgalleriet', 'Alle tolv modellene samlet')}</section>`;

VIEWS.profil = () => {
  const lv = level(), st = streak(), span = lv.to ? (S.xp - lv.from) / (lv.to - lv.from) : 1, t = dayIdx(today()), dow = (new Date().getDay() + 6) % 7, s0 = t - dow - 28;
  let cal = ''; for (let i = 0; i < 35; i++) { const d = idxDay(s0 + i), cls = s0 + i > t ? 'fut' : metGoal(d) ? 'on' : S.frz[d] ? 'frz' : (S.days[d] || 0) > 0 ? 'some' : ''; cal += `<i class="${cls}${s0 + i === t ? ' now' : ''}"></i>`; }
  const notes = Object.keys(S.notes).filter(k => S.notes[k]).length;
  return `<header class="vh"><p class="zl">Tittelen din i Skarvøy fylkeskommune</p><h1>${esc(lv.t)}</h1>
      <div class="xpbar" role="progressbar" aria-valuemin="${lv.from}" aria-valuemax="${lv.to || S.xp}" aria-valuenow="${S.xp}" aria-label="Erfaringspoeng"><i style="width:${clamp(span, 0, 1) * 100}%"></i></div>
      <p class="dim">${S.xp} XP. ${lv.to ? `${lv.to - S.xp} igjen til ${esc(lv.next)}.` : 'Du har nådd toppen av huset.'}</p></header>
    <section class="sec"><h2>${st} ${st === 1 ? 'dag' : 'dager'} på rad</h2><p>En dag teller når du når dagsmålet. Jo lengre rekke, jo sterkere nordlys over huset. Du har ${S.fr} ${S.fr === 1 ? 'avspaseringsdag' : 'avspaseringsdager'}. Glipper en dag, brukes den automatisk.</p>
      <div class="cal" aria-hidden="true"><b>M</b><b>T</b><b>O</b><b>T</b><b>F</b><b>L</b><b>S</b>${cal}</div><p class="legend"><span><i class="on"></i> dagsmål nådd</span><span><i class="some"></i> litt aktivitet</span><span><i class="frz"></i> avspasering</span></p></section>
    <section class="sec"><h2>Mestring per etasje</h2><div class="mast">${F.map(f => { const n = lit(f), p = S.done[f.id + 't']; return `<a href="#etasje-${f.n}" aria-label="${f.n}. etasje, ${esc(f.t)}: ${n} av 6 vinduer${p != null ? `, etasjeprøve ${p} prosent` : ''}"><span class="mn">${f.n}</span><span class="mt">${esc(f.t)}</span><span class="mb"><i style="width:${n / 6 * 100}%"></i></span><span class="mpc">${p != null ? p + ' %' : ''}</span></a>`; }).join('')}</div></section>
    <section class="sec"><h2>Merker</h2><p class="dim">${Object.keys(S.badges).length} av ${BADGES.length} er dine.</p><div class="badges">${BADGES.map(b => `<div class="badge${S.badges[b[0]] ? ' on' : ''}">${icon(b[3], 26)}<strong>${esc(b[1])}</strong><span>${esc(b[2])}</span></div>`).join('')}</div></section>
    <section class="sec"><h2>Refleksjonslogg</h2><p>${notes ? `Du har skrevet ${notes} ${notes === 1 ? 'notat' : 'notater'}.` : 'Refleksjonene og disposisjonene dine samles her.'}</p><p class="rowb"><button class="btn ghost" data-act="copynotes"${notes ? '' : ' disabled'}>${icon('copy', 18)} Kopier loggen</button><button class="btn ghost" data-act="dlnotes"${notes ? '' : ' disabled'}>${icon('download', 18)} Last ned</button></p></section>
    <section class="sec"><h2>Innstillinger</h2>
      <fieldset class="seg"><legend>Dagsmål</legend>${[[20, 'Rolig'], [30, 'Jevn'], [60, 'Ivrig']].map(([v, l]) => `<label><input type="radio" name="goal" value="${v}" data-in="goal"${S.goal === v ? ' checked' : ''}><span>${l} <small>${v} XP</small></span></label>`).join('')}</fieldset>
      <fieldset class="seg"><legend>Tekststørrelse</legend>${['Vanlig', 'Større', 'Størst'].map((l, i) => `<label><input type="radio" name="ts" value="${i}" data-in="ts"${S.set.ts === i ? ' checked' : ''}><span>${l}</span></label>`).join('')}</fieldset>
      <label class="sw"><input type="checkbox" id="set-sound" data-in="sound"${S.set.sound ? ' checked' : ''}><span>Lydeffekter</span></label>
      <div class="need-audio blk"><label class="sw"><input type="checkbox" id="set-auto" data-in="auto"${S.set.auto ? ' checked' : ''}><span>Les kortene opp automatisk i rommene</span></label>
        <label class="rng" for="set-rate"><span><strong>Lesehastighet</strong> <output id="rate-out">${S.set.rate.toFixed(1)}</output></span><input type="range" id="set-rate" min="0.7" max="1.5" step="0.1" value="${S.set.rate}" data-in="rate"></label></div>
      <p class="dim no-audio">Opplesning krever en norsk stemme for tekst til tale på enheten. Legg den til i innstillingene for tekst til tale, så dukker valgene opp her.</p>
      </section>
    <section class="sec no-app"><h2>Bruk Fylkeshuset som app</h2><p>Legg appen på hjemskjermen, så åpner den i fullskjerm og virker uten nett.</p>
      <p class="need-install"><button class="btn" data-act="install">${icon('download', 18)} Installer appen</button></p>
      <p class="dim">${Inst.ios() ? 'På iPhone og iPad: Åpne siden i Safari, trykk på Del-knappen og velg «Legg til på Hjem-skjerm».' : 'I Chrome på Android: Åpne menyen med de tre prikkene og velg «Installer app» eller «Legg til på startskjermen».'}</p></section>
    <section class="sec"><h2>Framdrift og sikkerhetskopi</h2><p>Framdriften lagres bare på denne enheten. Ta en sikkerhetskopi før du bytter telefon, eller hvis du vil fortsette på PC. Henter du inn en kopi, slås den sammen med det som allerede ligger her.</p>
      <p class="rowb"><button class="btn ghost" data-act="bksave">${icon('download', 18)} Lagre sikkerhetskopi</button><label class="btn ghost" for="bk-f">Hent inn kopi</label><input type="file" id="bk-f" accept=".json,application/json" class="vh2"></p>
      <div id="rst"><button class="btn quiet danger" data-act="reset1">Nullstill framdriften</button></div></section>
    <section class="sec about"><h2>Om appen</h2><p>${esc(LEARN)}</p><p>Etasjene følger de klassiske hovedtemaene i faget, slik du også finner dem i læreboka til Jacobsen og Thorsvik. Forklaringene er egne sammendrag av kjent faglitteratur og erstatter ikke pensum. Sjekk alltid mot din utgave av boka. Skarvøy fylkeskommune og personene i casene er oppdiktet.</p><p>Appen er uavhengig og ikke tilknyttet forfattere eller forlag. Den er åpen kildekode på <a href="https://github.com/bjoern89/fylkeshuset">GitHub</a>.</p><p><button class="btn ghost" data-act="howto">Slik virker huset</button></p>
      <h3>Litteratur</h3><ul class="read">${LIT.map(x => `<li>${esc(x)}</li>`).join('')}</ul></section>`;
};

const ARK = { q: '', f: '', tab: 'b' };
function arkList() {
  const q = ARK.q.trim().toLowerCase();
  if (ARK.tab === 'n') { const ws = WHO.filter(w => (!ARK.f || w[2] === ARK.f) && (!q || (w[0] + ' ' + w[1]).toLowerCase().includes(q))); return ws.length ? `<ul class="names">${ws.map(w => `<li><strong>${esc(w[0])}</strong><span>${esc(w[1])} <em class="note">${FL(w[2]).n}. etasje</em></span></li>`).join('')}</ul>` : `<p class="dim">Ingen navn passer med søket.</p>`; }
  const gs = GL.filter(g => (!ARK.f || g.f === ARK.f) && (!q || (g.t + ' ' + g.d).toLowerCase().includes(q)));
  return gs.length ? `<dl class="gloss">${gs.map(g => { const b = (S.cards[g.id] || {}).b || 0; return `<div><dt>${esc(g.t)}<span class="pips" role="img" aria-label="Sitter på nivå ${b} av 5">${[1, 2, 3, 4, 5].map(i => `<i class="${i <= b ? 'on' : ''}"></i>`).join('')}</span></dt><dd>${esc(g.d)} <em class="note">${FL(g.f).n}. etasje</em></dd></div>`; }).join('')}</dl>` : `<p class="dim">Ingen begreper passer med søket.</p>`;
}
VIEWS.arkiv = () => `<header class="vh"><a class="backl" href="#huset">${icon('back', 18)} Huset</a><p class="zl">Kjelleren</p><h1>Arkivet</h1><p class="lead">${GL.length} begreper og ${WHO.length} navn. Prikkene viser hvor godt et begrep sitter.</p></header>
  <div class="arkbar"><div class="tabs2" role="tablist" aria-label="Velg liste"><button role="tab" aria-selected="${ARK.tab === 'b'}" data-act="arktab" data-k="b">Begreper</button><button role="tab" aria-selected="${ARK.tab === 'n'}" data-act="arktab" data-k="n">Navn</button></div>
    <label class="srch" for="ark-q">${icon('search', 18)}<span class="vh2">Søk i arkivet</span><input id="ark-q" type="search" placeholder="Søk i arkivet" value="${esc(ARK.q)}" data-in="arkq" autocomplete="off"></label>
    <label class="vh2" for="ark-f">Etasje</label><select id="ark-f" data-in="arkf"><option value="">Alle etasjer</option>${F.map(f => `<option value="${f.id}"${ARK.f === f.id ? ' selected' : ''}>${f.n}. ${esc(f.t)}</option>`).join('')}</select></div>
  <p class="rowb"><button class="btn" data-act="cards">${icon('cards', 18)} Øv på begreper som venter</button>${ARK.f ? `<button class="btn ghost" data-act="cardsf" data-k="${ARK.f}">Øv på hele etasjen</button>` : ''}</p>
  <div id="ark-list">${arkList()}</div>`;

/* ===================== Handlinger ===================== */
function goKey(k) { const m = k.match(/^(f\d+)(r\d+|k|t|x)$/); if (!m) return; const f = FL(m[1]); if (!f) return;
  if (m[2][0] === 'r') playRoom(f, f.rooms.find(r => r.id === k)); else if (m[2] === 'k') playCase(f.kase, { key: k, f }); else if (m[2] === 't') playTest(f); else openReflect(f); }
function notesText() { let out = '# Refleksjonslogg fra Fylkeshuset\n\n';
  F.forEach(f => { const r = S.notes[f.id + 'x'], m = S.notes[f.id + 'm']; if (r || m) { out += `## ${f.n}. etasje: ${f.t}\n\n`; if (r) out += `Spørsmål: ${f.refl}\n\n${r}\n\n`; if (m) out += `Feltoppdrag: ${f.mission}\n\n${m}\n\n`; } });
  EXAM.forEach((e, i) => { const n = S.notes['ex' + i]; if (n) out += `## Drøfting: ${e.q}\n\n${n}\n\n`; }); return out; }
const ACT = {
  go: el => goKey(el.dataset.k), howto: openHowto, sim: openSim, examlist: openExamList, bksave: backupSave, install: () => Inst.go(),
  daily: () => playQuiz({ title: 'Dagens økt', items: dailyItems(), kind: 'daily' }),
  mix: () => playQuiz({ title: 'Hurtigquiz', items: pick(started().flatMap(authored), 10), kind: 'mix' }),
  mixall: () => playQuiz({ title: 'Hele huset', items: pick(F.flatMap(f => f.quiz), 10), kind: 'mix' }),
  weak: () => { const it = pick(Object.keys(S.q).filter(k => S.q[k][3] === 0 && QI[k]).map(k => QI[k]), 10); if (it.length) playQuiz({ title: 'Svake punkter', items: it, kind: 'mix' }); else toast('Ingen svake punkter akkurat nå.', 'check'); },
  names: () => playQuiz({ title: 'Hvem sa hva?', items: pick(WHO, 8).map(whoQ), kind: 'mix' }),
  cards: () => playCards('Begrepskort', dueTerms(12)),
  cardsf: el => playCards('Begreper: ' + FL(el.dataset.k).t, shuffle(GL.filter(g => g.f === el.dataset.k))),
  gallery: () => openGallery(), lens: el => openLens(el.dataset.k), tool: el => openTool(el.dataset.k),
  term: el => { const g = GL.find(x => x.id === el.dataset.k), box = $('#tdef'); if (!g || !box) return; $$('.chipsl .chipb').forEach(b => { const on = b === el; b.classList.toggle('on', on); b.setAttribute('aria-pressed', on); }); box.innerHTML = `<p><strong>${esc(g.t)}.</strong> ${esc(g.d)}</p>`; },
  arktab: el => { ARK.tab = el.dataset.k; render(false); },
  copynotes: () => copyText(notesText(), 'Loggen er kopiert.'), dlnotes: () => DL.save('refleksjonslogg-fylkeshuset.md', notesText()),
  reset1: () => { $('#rst').innerHTML = `<p role="alert"><strong>Vil du nullstille?</strong> All framdrift, alle notater og alt du har lagt inn i verktøyene, slettes.</p><p class="rowb"><button class="btn danger" data-act="reset2">Ja, nullstill</button><button class="btn ghost" data-act="reset0">Avbryt</button></p>`; const b = $('[data-act="reset0"]'); b && b.focus(); },
  reset0: () => { $('#rst').innerHTML = `<button class="btn quiet danger" data-act="reset1">Nullstill framdriften</button>`; },
  reset2: () => { S = fresh(); S.rst = Date.now(); CARY = null; save(); applySettings(); location.hash = '#huset'; render(); toast('Framdriften er nullstilt.', 'info'); }
};
const INP = {
  goal: el => { S.goal = +el.value; commit(); }, ts: el => { S.set.ts = +el.value; applySettings(); save(); },
  sound: el => { S.set.sound = el.checked; save(); if (el.checked) beep('ok'); }, auto: el => { S.set.auto = el.checked; save(); },
  rate: el => { S.set.rate = clamp(+el.value || 1, 0.7, 1.5); const o = $('#rate-out'); if (o) o.textContent = S.set.rate.toFixed(1); saveSoon(); },
  arkq: el => { ARK.q = el.value; const l = $('#ark-list'); if (l) l.innerHTML = arkList(); }, arkf: el => { ARK.f = el.value; render(false); const s = $('#ark-f'); s && s.focus(); }
};

/* ===================== Hendelser og oppstart ===================== */
document.addEventListener('click', e => {
  const mp = e.target.closest('.mp[data-part]'); if (mp) return selectPart(mp.closest('.mbox'), mp.dataset.part);
  const mc = e.target.closest('[data-mp]'); if (mc) return selectPart(mc.closest('.mbox'), mc.dataset.mp);
  const el = e.target.closest('[data-act],[data-qa]'); if (!el || el.disabled) return;
  const inOv = !!Ov.cur && Ov.el.contains(el);
  if (el.dataset.qa) { if (inOv && Ov.cur.act) Ov.cur.act(el.dataset.qa, el, e); return; }
  const a = el.dataset.act;
  if (inOv) { if (a === 'close') Ov.close(); else if (Ov.cur.act) Ov.cur.act(a, el, e); return; }
  if (ACT[a]) ACT[a](el, e);
});
document.addEventListener('input', e => { const el = e.target.closest && e.target.closest('[data-in]'); if (!el) return;
  if (Ov.cur && Ov.el.contains(el)) { if (Ov.cur.input) Ov.cur.input(el.dataset.in, el, e); } else if (INP[el.dataset.in]) INP[el.dataset.in](el, e); });
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && Ov.cur) { e.preventDefault(); Ov.close(); return; }
  if ((e.key === 'Enter' || e.key === ' ') && e.target.matches && e.target.matches('.mp')) { e.preventDefault(); selectPart(e.target.closest('.mbox'), e.target.dataset.part); return; }
  if (Ov.cur && Ov.cur.key) Ov.cur.key(e);
});
window.addEventListener('hashchange', () => { if (Ov.cur) Ov.close(true); render(); const v = $('#view'); v && v.focus({ preventScroll: true }); });

document.addEventListener('change', e => { if (e.target && e.target.id === 'bk-f') { backupLoad(e.target.files && e.target.files[0]); e.target.value = ''; } });

function start() {
  S = norm(loadLocal()); settle(); applySettings(); Ov.el = $('#ov'); render();
  Aud.init(); Inst.init();
}
start();
