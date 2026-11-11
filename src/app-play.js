/* ===================== Caser ===================== */
function playCase(k, o = {}) {
  const P = { i: -1, pts: 0, pick: null, order: k.steps.map(s => shuffle(s.opts.map((x, i) => i))), end: false, xp: 0 };
  const ov = { label: 'Case: ' + k.t };
  const lab = p => p === 2 ? 'Sterkt valg' : p === 1 ? 'Greit valg' : 'Risikabelt valg';
  ov.render = () => {
    if (P.i < 0) return ovTop(`<strong>Case</strong>`) + `<div class="ov-body" tabindex="-1"><div class="col"><article class="kort"><p class="zl">${o.f ? `${o.f.n}. etasje, ${esc(o.f.t)}` : 'Laget av veilederen'}</p><h2>${esc(k.t)}</h2><p>${md(k.intro)}</p>
      <p class="dim">Tre valg. Etter hvert valg ser du hva som skjedde, og hvilken teori som forklarer det.</p></article></div></div><div class="ov-foot"><button class="btn wide" data-act="next">Start casen</button></div>`;
    if (P.end) { const lvl = P.pts <= 2 ? 0 : P.pts <= 4 ? 1 : 2;
      return ovTop(`<strong>${esc(k.t)}</strong>`) + `<div class="ov-body" tabindex="-1"><div class="col end"><p class="bigno">${P.pts}<span> av 6 poeng</span></p><h2>${['Skarvøy lærte lite denne gangen', 'Brukbart levert', 'Sterkt levert'][lvl]}</h2><p>${md(k.out[lvl])}</p><p class="xpline">${icon('bolt', 18)} +${P.xp} XP</p>
        <h3>Teorien bak</h3><ul class="take">${k.steps.map(s => `<li>${md(s.th)}</li>`).join('')}</ul></div></div><div class="ov-foot"><button class="btn wide" data-act="close">Ferdig</button><button class="btn ghost wide" data-act="again">Prøv andre valg</button></div>`; }
    const s = k.steps[P.i], done = P.pick != null, ch = done ? s.opts[P.pick] : null;
    return ovTop(progBar(P.i + (done ? 1 : 0), 3), `<span class="cnt">${P.i + 1}/3</span>`) + `<div class="ov-body" tabindex="-1"><div class="col"><h2 class="qq">${md(s.s)}</h2>
      <div class="opts">${P.order[P.i].map(ix => `<button class="opt${done ? (P.pick === ix ? ' p' + s.opts[ix][1] : ' dimd') : ''}" data-act="choose" data-i="${ix}"${done ? ' disabled' : ''}><span>${md(s.opts[ix][0])}</span></button>`).join('')}</div>
      ${done ? `<div class="fb p${ch[1]}" role="status"><p class="fbh"><strong>${lab(ch[1])}</strong><span class="gain">${ch[1]} av 2 poeng</span></p><p>${md(ch[2])}</p></div>
        <div class="teori"><p class="lbl">Teorien bak</p><p>${md(s.th)}</p></div>
        <details class="andre"><summary>Se hva de andre valgene ville gitt</summary>${s.opts.map((x, ix) => ix === P.pick ? '' : `<p><strong>${md(x[0])}</strong> ${lab(x[1])}. ${md(x[2])}</p>`).join('')}</details>` : ''}</div></div>
      <div class="ov-foot">${done ? `<button class="btn wide" data-act="next">${P.i < 2 ? 'Videre' : 'Se utfallet'}</button>` : `<p class="hint c">Velg det du ville gjort.</p>`}</div>`;
  };
  ov.act = (a, el) => {
    if (a === 'choose' && P.pick == null && P.i >= 0) { P.pick = +el.dataset.i; const p = k.steps[P.i].opts[P.pick][1]; P.pts += p; beep(p ? 'ok' : 'bad'); Ov.paint(); const nx = $('[data-act="next"]', Ov.el); nx && nx.focus({ preventScroll: true }); const fb = $('.fb', Ov.el); fb && fb.scrollIntoView && fb.scrollIntoView({ block: 'nearest' }); }
    else if (a === 'next') { P.i++; P.pick = null; if (P.i >= k.steps.length) { P.end = true; const first = o.key ? S.done[o.key] == null : true; P.xp = (first ? 20 : 8) + P.pts * 5; addXP(P.xp); if (o.key) S.done[o.key] = Math.max(S.done[o.key] ?? 0, P.pts); commit(); beep('lvl'); } Ov.fresh(); }
    else if (a === 'again') { Ov.close(true); playCase(k, o); }
  };
  Ov.cur ? Ov.swap(ov) : Ov.open(ov);
}

/* ===================== Refleksjon, feltoppdrag og eksamen ===================== */
let SVT = 0; const saveSoon = () => { clearTimeout(SVT); SVT = setTimeout(save, 700); };
function openReflect(f) {
  const kx = f.id + 'x', km = f.id + 'm', ov = { label: 'Refleksjon og feltoppdrag' };
  ov.render = () => ovTop(`<strong>${f.n}. etasje, ${esc(f.t)}</strong>`) + `<div class="ov-body" tabindex="-1"><div class="col">
    <article class="kort"><h2>Refleksjon</h2><p>${esc(f.refl)}</p>
      <label class="lbl" for="rf">Ditt notat</label><textarea class="ta" id="rf" rows="6" data-in="note" data-k="${kx}" maxlength="4000">${esc(S.notes[kx] || '')}</textarea>
      <p class="rowb"><button class="btn" data-act="saveref">Lagre refleksjonen</button></p></article>
    <article class="kort"><h2>Feltoppdrag</h2><p>${esc(f.mission)}</p>
      <label class="lbl" for="ms">Hva fant du?</label><textarea class="ta" id="ms" rows="4" data-in="note" data-k="${km}" maxlength="4000">${esc(S.notes[km] || '')}</textarea>
      <label class="sw"><input type="checkbox" id="msd" data-in="mission"${S.seen['mis:' + f.id] ? ' checked disabled' : ''}><span>Jeg har gjennomført feltoppdraget</span></label></article>
    <p class="dim">Notatene lagres sammen med framdriften din og samles i refleksjonsloggen under Profil.</p></div></div>`;
  ov.input = (n, el) => {
    if (n === 'note') { S.notes[el.dataset.k] = el.value.slice(0, 4000); saveSoon(); }
    else if (n === 'mission' && el.checked && !S.seen['mis:' + f.id]) { S.seen['mis:' + f.id] = 1; S.stat.mis++; addXP(40); if (S.done[kx] == null) S.done[kx] = 1; toast('Feltoppdrag gjennomført. +40 XP', 'boots'); commit(); el.disabled = true; }
  };
  ov.act = a => {
    if (a === 'saveref') { if ((S.notes[kx] || '').trim().length < 20) return toast('Skriv noen setninger først.', 'pen');
      if (!S.seen['ref:' + f.id]) { S.seen['ref:' + f.id] = 1; S.stat.refl++; addXP(25); toast('Refleksjonen er lagret. +25 XP', 'pen'); } else toast('Lagret.', 'check');
      if (S.done[kx] == null) S.done[kx] = 1; commit(); }
  };
  ov.onClose = () => { clearTimeout(SVT); save(); };
  Ov.open(ov);
}
function openExamList() {
  Ov.open({ label: 'Eksamenstrening',
    render: () => ovTop(`<strong>Eksamenstrening</strong>`) + `<div class="ov-body" tabindex="-1"><div class="col"><article class="kort"><h2>Drøftingsoppgaver</h2><p>Skriv en disposisjon, og sjekk den mot momentlista. En god drøfting følger gjerne disse stegene:</p><ol class="stepl">${EXAM_STEPS.map(s => `<li>${esc(s)}</li>`).join('')}</ol></article>
      <div class="rows">${EXAM.map((e, i) => `<button class="rowb2${S.done['ex' + i] != null ? ' done' : ''}" data-act="exam" data-i="${i}"><span class="rn">${FL(e.f).n}</span><span class="dt"><strong>${esc(e.q)}</strong><span>${S.done['ex' + i] != null ? `${S.done['ex' + i]} av 5 momenter` : esc(FL(e.f).t)}</span></span>${icon('next', 18)}</button>`).join('')}</div></div></div>`,
    act: (a, el) => { if (a === 'exam') openExam(+el.dataset.i); } });
}
function openExam(i) {
  const e = EXAM[i], k = 'ex' + i, P = { show: S.done[k] != null, ticks: new Set(), saved: false }, ov = { label: 'Drøftingsoppgave' };
  ov.render = () => ovTop(`<strong>Drøftingsoppgave</strong>`) + `<div class="ov-body" tabindex="-1"><div class="col"><article class="kort"><p class="zl">${FL(e.f).n}. etasje, ${esc(FL(e.f).t)}</p><h2 class="qq">${esc(e.q)}</h2>
      <label class="lbl" for="ex">Din disposisjon</label><textarea class="ta" id="ex" rows="8" data-in="note" data-k="${k}" maxlength="4000" placeholder="Skriv stikkord for hvert steg i drøftingen.">${esc(S.notes[k] || '')}</textarea>
            ${P.show ? `<h3>Momentliste</h3><p class="dim">Kryss av det du hadde med.</p><div class="ticks">${e.must.map((m, j) => `<label class="sw"><input type="checkbox" data-in="tick" data-i="${j}"${P.ticks.has(j) ? ' checked' : ''}><span>${esc(m)}</span></label>`).join('')}</div>` : ''}</article></div></div>
    <div class="ov-foot">${P.show ? `<button class="btn wide" data-act="exdone">${P.saved ? 'Lagret' : 'Lagre egenvurderingen'}</button>` : `<button class="btn wide" data-act="exshow">Vis momentlista</button>`}</div>`;
  ov.input = (n, el) => { if (n === 'note') { S.notes[k] = el.value.slice(0, 4000); saveSoon(); } else if (n === 'tick') { const j = +el.dataset.i; el.checked ? P.ticks.add(j) : P.ticks.delete(j); P.saved = false; } };
  ov.act = a => {
    if (a === 'exshow') { P.show = true; Ov.paint(); }
    else if (a === 'exdone') { const first = S.done[k] == null, n = P.ticks.size; if (first) { S.stat.exam++; addXP(10 + n * 6); toast(`Egenvurderingen er lagret. +${10 + n * 6} XP`, 'cap'); } else toast('Lagret.', 'check'); S.done[k] = Math.max(S.done[k] ?? 0, n); P.saved = true; commit(); Ov.paint(); }
  };
  ov.onClose = () => { clearTimeout(SVT); save(); };
  Ov.open(ov);
}

/* ===================== Fire briller ===================== */
function openLens(id) {
  const l = LENS.find(x => x.id === id), P = { sel: -1, seen: new Set(), stage: 0, qv: null, res: null, xp: 0 }, ov = { label: 'Fire briller: ' + l.t };
  ov.render = () => {
    if (P.stage === 2) return ovTop(`<strong>Fire briller</strong>`) + `<div class="ov-body" tabindex="-1"><div class="col end"><p class="bigno">${Math.round(P.res.frac * 6)}<span> av 6</span></p><h2>${P.res.ok ? 'Du skiller brillene fra hverandre' : 'Brillene begynner å sitte'}</h2><p>Poenget med fire rammer er å ha flere forklaringer og flere tiltak å velge mellom. Prøv dem på en egen sak i verktøyet Brillesjekk.</p><p class="xpline">${icon('bolt', 18)} +${P.xp} XP</p></div></div><div class="ov-foot"><button class="btn wide" data-act="close">Ferdig</button></div>`;
    if (P.stage === 1) return ovTop(`<strong>Hvem sier hva?</strong>`) + `<div class="ov-body" tabindex="-1"><div class="col">${P.qv.html()}${P.qv.st.done ? fbHTML({ why: `Den strukturelle rammen ser roller og regler. Human resource ser behov og kompetanse. Den politiske ser interesser og makt. Den symbolske ser mening og fortellinger.` }, P.qv.st.res, 0, 0) : ''}</div></div><div class="ov-foot">${P.qv.st.done ? `<button class="btn wide" data-act="lensend">Videre</button>` : ''}</div>`;
    const x = P.sel >= 0 ? l.lenses[P.sel] : null;
    return ovTop(`<strong>Fire briller</strong>`) + `<div class="ov-body" tabindex="-1"><div class="col"><article class="kort"><h2>${esc(l.t)}</h2><p>${esc(l.text)}</p></article>
      <div class="lensb" role="tablist" aria-label="Velg brille">${LENS_NAMES.map((n, i) => `<button role="tab" aria-selected="${P.sel === i}" class="${P.seen.has(i) ? 'seen' : ''}" data-act="lsel" data-i="${i}">${icon('glasses', 18)}<span>${n}</span></button>`).join('')}</div>
      ${x ? `<div class="lensp" role="tabpanel"><p class="ask">${esc(LENS_ASK[P.sel])}</p><h3>Dette ser du</h3><p>${esc(x.se)}</p><h3>Mulige grep</h3><p>${esc(x.grep)}</p><h3>Blindsonen</h3><p>${esc(x.blind)}</p></div>` : `<p class="dim">Velg en brille for å se saken gjennom den. Prøv alle fire.</p>`}</div></div>
      <div class="ov-foot"><button class="btn wide" data-act="lquiz"${P.seen.size < 4 ? ' disabled' : ''}>${P.seen.size < 4 ? `${P.seen.size} av 4 briller prøvd` : 'Test deg: hvem sier hva?'}</button></div>`;
  };
  ov.act = (a, el) => {
    if (a === 'lsel') { P.sel = +el.dataset.i; P.seen.add(P.sel); Ov.paint(); }
    else if (a === 'lquiz' && P.seen.size === 4) { P.stage = 1; P.qv = makeQ({ ty: 'sort', q: `Hvilken ramme snakker?`, cats: LENS_NAMES, items: l.sort }, { onDone: r => { P.res = r; Ov.paint(); }, repaint: () => Ov.paint(), alive: () => Ov.cur === ov }); Ov.fresh(); }
    else if (a === 'lensend') { P.stage = 2; const first = S.done[l.id] == null; P.xp = (first ? 30 : 10) + Math.round(P.res.frac * 6) * 5; addXP(P.xp); S.done[l.id] = 1; commit(); beep('lvl'); Ov.fresh(); }
    else if (P.stage === 1 && P.qv) P.qv.act(a, el);
  };
  Ov.open(ov);
}

/* ===================== Prosjektsimulatoren ===================== */
function openSim() {
  const P = { i: -1, m: { ...SIM.start }, pick: null, path: [], order: SIM.rounds.map(() => shuffle([0, 1, 2])), end: null, g: 0, xp: 0, delta: null, stop: false, over: false }, ov = { label: SIM.t };
  const meters = () => `<div class="meters">${['f', 'o', 'l', 'b'].map(k => { const v = clamp(P.m[k], 0, 100), d = P.delta && P.delta[k]; return `<div class="meter${v <= 20 ? ' low' : ''}"><span>${SIM.names[k]}${d ? `<em class="${d > 0 ? 'up' : 'dn'}">${d > 0 ? '+' : ''}${d}</em>` : ''}</span><div class="mbar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${v}" aria-label="${SIM.names[k]}"><i style="width:${v}%"></i></div></div>`; }).join('')}</div>`;
  function finish() { let g = Math.round(clamp(P.m.f, 0, 100) * clamp(P.m.o, 0, 100) / 100); P.over = P.m.b < 0; if (P.over) g = Math.max(0, g - 15); if (P.stop) g = 0;
    P.end = P.stop ? 'stanset' : g >= 65 ? 'hoy' : g >= 40 ? 'middels' : P.m.f >= 60 ? 'ubrukt' : 'lite'; P.g = g; P.xp = 60 + g; P.delta = null; addXP(P.xp); S.stat.sims++; S.done.sim = Math.max(S.done.sim ?? 0, g); commit(); beep('lvl'); }
  ov.render = () => {
    if (P.end) { const [h, txt] = SIM.ends[P.end], steps = P.path.filter(p => p.ok).length;
      return ovTop(`<strong>${SIM.t}</strong>`) + `<div class="ov-body" tabindex="-1"><div class="col end"><p class="bigno">${P.g}<span> i gevinst</span></p><h2>${esc(h)}</h2><p>${esc(txt)}</p>${P.over && !P.stop ? `<p>Budsjettet sprakk, og det trekker ned gevinsten.</p>` : ''}<p class="xpline">${icon('bolt', 18)} +${P.xp} XP</p>${meters()}
        <h3>Veien du valgte</h3><ol class="path">${P.path.map(p => `<li class="${p.ok ? 'ok' : ''}"><strong>${esc(p.t)}</strong><span>${esc(p.k)}</span></li>`).join('')}</ol><p>Du dekket ${steps} av Kotters åtte trinn.</p><div class="teori"><p>${esc(SIM.moral)}</p></div></div></div>
        <div class="ov-foot"><button class="btn wide" data-act="again">Spill en gang til</button><button class="btn ghost wide" data-act="close">Ferdig</button></div>`; }
    if (P.i < 0) return ovTop(`<strong>${SIM.t}</strong>`) + `<div class="ov-body" tabindex="-1"><div class="col"><article class="kort"><p class="zl">${esc(SIM.sub)}</p><h2>${esc(SIM.t)}</h2><p>${esc(SIM.intro)}</p></article>${meters()}</div></div><div class="ov-foot"><button class="btn wide" data-act="next">Start måned 1</button></div>`;
    const r = SIM.rounds[P.i], done = P.pick != null, o = done ? r.opts[P.pick] : null;
    return ovTop(progBar(P.i + (done ? 1 : 0), 8), `<span class="cnt">Måned ${P.i + 1}</span>`) + `<div class="ov-body" tabindex="-1"><div class="col">${meters()}<p class="zl">${esc(r.t)}</p><h2 class="qq">${esc(r.s)}</h2>
      <div class="opts">${P.order[P.i].map(ix => `<button class="opt${done ? (ix === P.pick ? ' sel' : ' dimd') : ''}" data-act="choose" data-i="${ix}"${done ? ' disabled' : ''}><span>${esc(r.opts[ix].t)}</span></button>`).join('')}</div>
      ${done ? `<div class="fb ${o.ok ? 'ok' : 'part'}" role="status"><p class="fbh"><strong>${esc(o.k)}</strong></p><p>${esc(o.fb)}</p></div>` : ''}</div></div>
      <div class="ov-foot">${done ? `<button class="btn wide" data-act="next">${P.stop || P.i >= 7 ? 'Se utfallet' : 'Neste måned'}</button>` : `<p class="hint c">Velg ett tiltak denne måneden.</p>`}</div>`;
  };
  ov.act = (a, el) => {
    if (a === 'choose' && P.pick == null && P.i >= 0 && !P.end) { P.pick = +el.dataset.i; const o = SIM.rounds[P.i].opts[P.pick]; P.delta = o.fx; for (const k in o.fx) P.m[k] += o.fx[k]; ['f', 'o', 'l'].forEach(k => { P.m[k] = clamp(P.m[k], 0, 100); });
      P.path.push({ t: SIM.rounds[P.i].t, k: o.k, ok: !!o.ok }); P.stop = P.m.l <= 15; beep(o.ok ? 'ok' : 'bad'); Ov.paint(); const nx = $('[data-act="next"]', Ov.el); nx && nx.focus({ preventScroll: true }); }
    else if (a === 'next') { if (P.i >= 0 && (P.stop || P.i >= 7)) finish(); else { P.i++; P.pick = null; P.delta = null; } Ov.fresh(); }
    else if (a === 'again') { Ov.close(true); openSim(); }
  };
  Ov.open(ov);
}

/* ===================== Begrepskort ===================== */
function playCards(title, terms) {
  if (!terms.length) return toast('Ingen begreper venter akkurat nå.', 'cards');
  const P = { q: terms.slice(), i: 0, flip: false, n: terms.length, done: 0, known: 0, xp: 0, end: false }, ov = { label: title };
  ov.render = () => {
    if (P.end) return ovTop(`<strong>${esc(title)}</strong>`) + `<div class="ov-body" tabindex="-1"><div class="col end"><p class="bigno">${P.known}<span> av ${P.n} satt</span></p><h2>Runden er ferdig</h2><p>Begrepene du kunne, kommer igjen om noen dager. De andre kommer raskere.</p><p class="xpline">${icon('bolt', 18)} +${P.xp} XP</p></div></div><div class="ov-foot"><button class="btn wide" data-act="close">Ferdig</button></div>`;
    const g = P.q[P.i], f = FL(g.f);
    return ovTop(progBar(P.done, P.n), `<span class="cnt">${Math.min(P.done + 1, P.n)}/${P.n}</span>`) + `<div class="ov-body" tabindex="-1"><div class="col"><button class="flash${P.flip ? ' flip' : ''}" data-act="flip"><span class="zl">${f.n}. etasje, ${esc(f.t)}</span><span class="ft">${esc(g.t)}</span>${P.flip ? `<span class="fd">${esc(g.d)}</span>` : `<span class="dim">Si forklaringen for deg selv. Trykk for å se den.</span>`}</button></div></div>
      <div class="ov-foot">${P.flip ? `<div class="rate"><button class="btn ghost" data-act="rate" data-v="0">Kunne ikke</button><button class="btn ghost" data-act="rate" data-v="1">Usikker</button><button class="btn" data-act="rate" data-v="2">Kunne</button></div>` : `<button class="btn wide" data-act="flip">Vis forklaringen</button>`}</div>`;
  };
  ov.act = (a, el) => {
    if (a === 'flip') { if (!P.flip) { P.flip = true; Ov.paint(); } }
    else if (a === 'rate') { const v = +el.dataset.v, g = P.q[P.i];
      if (!g.again) { srs(g.id, v === 2, v === 1); P.done++; if (v === 2) P.known++; P.xp += v + 1; addXP(v + 1); if (v === 0) P.q.push({ ...g, again: 1 }); }
      P.i++; P.flip = false; if (P.i >= P.q.length) { P.end = true; commit(); beep('lvl'); } else save(); Ov.fresh(); }
  };
  Ov.open(ov);
}

/* ===================== Modellgalleriet og veiledning ===================== */
function openGallery(start) {
  const ids = Object.keys(MODELS), P = { i: Math.max(0, ids.indexOf(start)) }, ov = { label: 'Modellgalleriet' };
  ov.render = () => { const id = ids[P.i], m = MODELS[id];
    return ovTop(`<strong>Modellgalleriet</strong>`, `<span class="cnt">${P.i + 1}/${ids.length}</span>`) + `<div class="ov-body" tabindex="-1"><div class="col"><article class="kort"><p class="zl">${FL(m.f).n}. etasje, ${esc(FL(m.f).t)}</p><h2>${esc(m.t)}</h2>${modelHTML(id)}</article></div></div>
      <div class="ov-foot two"><button class="btn ghost" data-act="mprev"${P.i ? '' : ' disabled'}>${icon('back', 18)} Forrige</button><button class="btn ghost" data-act="mnext"${P.i < ids.length - 1 ? '' : ' disabled'}>Neste ${icon('next', 18)}</button></div>`; };
  ov.act = a => { if (a === 'mprev' && P.i) { P.i--; Ov.fresh(); } else if (a === 'mnext' && P.i < ids.length - 1) { P.i++; Ov.fresh(); } };
  Ov.open(ov);
}
function openHowto() {
  Ov.open({ label: 'Slik virker huset', render: () => ovTop(`<strong>Slik virker huset</strong>`) + `<div class="ov-body" tabindex="-1"><div class="col"><article class="kort"><h2>Slik virker huset</h2><dl class="how">
    <div><dt>Etasjer</dt><dd>Hver etasje er et tema i organisasjonsteorien. Ta dem i rekkefølge, eller gå dit du trenger.</dd></div>
    <div><dt>Vinduer</dt><dd>Hver etasje har seks vinduer: tre rom, en case, en etasjeprøve og en refleksjon. Fullfør aktiviteten, så tennes lyset.</dd></div>
    <div><dt>Les, lytt, se og gjør</dt><dd>Rommene kan leses eller leses opp. Modellene kan du trykke på. Caser, simulator og verktøy lar deg bruke teorien.</dd></div>
    <div><dt>Som app</dt><dd>Under Profil kan du legge Fylkeshuset på hjemskjermen. Da virker den også uten nett. Framdriften lagres på enheten, og du kan ta sikkerhetskopi.</dd></div>
    <div><dt>Dagens økt</dt><dd>Fem minutter med blandet repetisjon. Det du husker dårligst, kommer oftest tilbake.</dd></div>
    <div><dt>Nordlys</dt><dd>Når du når dagsmålet flere dager på rad, blir nordlyset over huset sterkere. En avspaseringsdag redder rekka hvis du glipper en dag.</dd></div>
    <div><dt>Titler</dt><dd>Poengene gir deg nye titler i Skarvøy fylkeskommune, fra sommervikar til fylkeskommunedirektør.</dd></div></dl></article></div></div><div class="ov-foot"><button class="btn wide" data-act="close">Da går jeg inn</button></div>` });
}

/* ===================== Verktøykassa ===================== */
function useTool(id) { if (!S.tools.used[id]) { S.tools.used[id] = 1; addXP(15); toast('Nytt verktøy tatt i bruk. +15 XP', 'wrench'); commit(); } else saveSoon(); }
const optN = (cur, a = [1, 2, 3, 4, 5]) => a.map(v => `<option${cur === v ? ' selected' : ''}>${v}</option>`).join('');
const toolFoot = `<div class="ov-foot"><button class="btn wide" data-act="tcopy">${icon('copy', 18)} Kopier som tekst</button></div>`;
const exNote = isEx => isEx ? `<p class="exn">${icon('info', 18)} Dette er et eksempel. Bytt ut innholdet med din egen sak.</p>` : '';

const STAKE_EX = [['Fylkeskommunedirektøren', 5, 3, 1], ['Tillitsvalgte', 4, 4, 0], ['Saksbehandlerne', 2, 5, -1], ['Leverandøren', 3, 4, 1], ['Drift og sikkerhet', 4, 2, 0], ['Hovedutvalget', 5, 2, 0]];
function toolStake() {
  const T = S.tools, ov = { label: 'Interessentkart' }; let list = T.stake ? T.stake : STAKE_EX.map(x => ({ n: x[0], m: x[1], i: x[2], h: x[3] }));
  const strat = s => s.m > 3 ? (s.i > 3 ? 'Samarbeid tett' : 'Hold tilfreds') : (s.i > 3 ? 'Hold informert' : 'Følg med'), hn = h => h > 0 ? 'for' : h < 0 ? 'mot' : 'nøytral';
  const touch = () => { T.stake = list; useTool('stake'); };
  const plot = () => { const px = v => 62 + (v - 1) / 4 * 232, py = v => 222 - (v - 1) / 4 * 178, seen = {};
    return `<figure class="modell"><div class="mwrap"><svg viewBox="0 0 320 290" class="msvg" role="img" aria-label="Aktørene plassert etter makt og interesse"><rect x="44" y="10" width="268" height="246" class="pl"/><line x1="178" y1="10" x2="178" y2="256" class="mid"/><line x1="44" y1="133" x2="312" y2="133" class="mid"/>
      <text x="52" y="26" class="sm q">Hold tilfreds</text><text x="304" y="26" text-anchor="end" class="sm q">Samarbeid tett</text><text x="52" y="248" class="sm q">Følg med</text><text x="304" y="248" text-anchor="end" class="sm q">Hold informert</text>
      <text x="178" y="278" text-anchor="middle" class="sm">Interesse</text><text x="22" y="133" text-anchor="middle" transform="rotate(-90 22 133)" class="sm">Makt</text>
      ${list.map((s, k) => { const key = s.m + ':' + s.i, c = seen[key] = (seen[key] || 0) + 1; return `<g class="sd h${s.h > 0 ? 'p' : s.h < 0 ? 'n' : '0'}"><circle cx="${px(s.i) + (c - 1) * 15}" cy="${py(s.m) - (c - 1) * 6}" r="11"/><text x="${px(s.i) + (c - 1) * 15}" y="${py(s.m) - (c - 1) * 6 + 4}" text-anchor="middle">${k + 1}</text></g>`; }).join('')}</svg></div>
      <figcaption>Høy makt og høy interesse krever tett samarbeid. Fylt sirkel er for, åpen er nøytral, stiplet er mot.</figcaption></figure>`; };
  ov.render = () => ovTop(`<strong>Interessentkart</strong>`) + `<div class="ov-body" tabindex="-1"><div class="col"><article class="kort"><h2>Interessentkart</h2><p>Hvem kan påvirke saken, og hvem blir berørt? Plasser aktørene etter makt og interesse. Kartet viser hvem du bør bruke mest tid på.</p>${exNote(!T.stake)}${plot()}
    <ol class="tlist">${list.map((s, k) => `<li><div class="tl1"><span class="nb">${k + 1}</span><input class="tin" value="${esc(s.n)}" data-in="sn" data-i="${k}" aria-label="Navn på aktør ${k + 1}" maxlength="40"><button class="ib" data-act="sdel" data-i="${k}" aria-label="Fjern ${esc(s.n)}">${icon('trash', 18)}</button></div>
      <div class="tl2"><label>Makt <select data-in="sm" data-i="${k}">${optN(s.m)}</select></label><label>Interesse <select data-in="si" data-i="${k}">${optN(s.i)}</select></label><label>Holdning <select data-in="sh" data-i="${k}">${[[1, 'For'], [0, 'Nøytral'], [-1, 'Mot']].map(([v, l]) => `<option value="${v}"${s.h === v ? ' selected' : ''}>${l}</option>`).join('')}</select></label><span class="strat">${strat(s)}</span></div></li>`).join('')}</ol>
    <p><button class="btn ghost" data-act="sadd"${list.length >= 12 ? ' disabled' : ''}>${icon('plus', 18)} Legg til aktør</button></p></article></div></div>${toolFoot}`;
  ov.input = (n, el) => { const s = list[+el.dataset.i]; if (!s) return; if (n === 'sn') { s.n = el.value.slice(0, 40); touch(); return; } if (n === 'sm') s.m = +el.value; else if (n === 'si') s.i = +el.value; else if (n === 'sh') s.h = +el.value; touch(); Ov.paint(); };
  ov.act = (a, el) => { if (a === 'sadd') { list.push({ n: 'Ny aktør', m: 3, i: 3, h: 0 }); touch(); Ov.paint(); const ins = $$('.tin', Ov.el); ins.length && ins[ins.length - 1].select(); }
    else if (a === 'sdel') { list.splice(+el.dataset.i, 1); touch(); Ov.paint(); }
    else if (a === 'tcopy') copyText('Interessentkart\n\n' + list.map((s, k) => `${k + 1}. ${s.n}: makt ${s.m}, interesse ${s.i}, holdning ${hn(s.h)}. Strategi: ${strat(s).toLowerCase()}.`).join('\n')); };
  ov.onClose = () => { clearTimeout(SVT); save(); };
  Ov.open(ov);
}

const FORCE_EX = { t: 'Felles skjemaplattform for alle avdelinger', d: [['Krav om universell utforming', 4], ['Dobbeltarbeid i dagens løsninger', 3], ['Støtte fra direktøren', 4]], m: [['Avdelingene vil beholde egne verktøy', 4], ['Lite tid til opplæring', 3], ['Uklart hvem som eier plattformen', 5]] };
function toolForce() {
  const T = S.tools, ov = { label: 'Kraftfelt' }; let F0 = T.force ? T.force : { t: FORCE_EX.t, d: FORCE_EX.d.map(x => ({ n: x[0], s: x[1] })), m: FORCE_EX.m.map(x => ({ n: x[0], s: x[1] })) };
  const touch = () => { T.force = F0; useTool('force'); }, sum = a => a.reduce((x, y) => x + y.s, 0);
  const side = (key, title, add) => `<h3>${title}</h3><ol class="tlist">${F0[key].map((s, k) => `<li><div class="tl1"><input class="tin" value="${esc(s.n)}" data-in="fn" data-k="${key}" data-i="${k}" aria-label="${title}, rad ${k + 1}" maxlength="60"><label class="mini">Styrke <select data-in="fs" data-k="${key}" data-i="${k}">${optN(s.s)}</select></label><button class="ib" data-act="fdel" data-k="${key}" data-i="${k}" aria-label="Fjern ${esc(s.n)}">${icon('trash', 18)}</button></div></li>`).join('')}</ol><p><button class="btn ghost" data-act="fadd" data-k="${key}"${F0[key].length >= 8 ? ' disabled' : ''}>${icon('plus', 18)} ${add}</button></p>`;
  const verdict = () => { const D = sum(F0.d), M = sum(F0.m), top = F0.m.slice().sort((a, b) => b.s - a.s)[0]; return { D, M, txt: (M >= D ? `Motkreftene veier tyngst. ` : `Drivkreftene veier tyngst. `) + (top ? `Sterkeste motkraft er «${top.n}». Lewins råd er å svekke en motkraft framfor å øke presset.` : `Legg inn motkreftene du ser.`) }; };
  ov.render = () => { const v = verdict(), tot = Math.max(1, v.D + v.M);
    return ovTop(`<strong>Kraftfelt</strong>`) + `<div class="ov-body" tabindex="-1"><div class="col"><article class="kort"><h2>Kraftfeltanalyse</h2><p>Enhver situasjon holdes på plass av krefter som driver mot endring, og krefter som holder igjen. Gi hver kraft en styrke fra 1 til 5.</p>${exNote(!T.force)}
      <label class="lbl" for="ft">Endringen det gjelder</label><input class="tin" id="ft" value="${esc(F0.t)}" data-in="ft" maxlength="90">
      <div class="tug" role="img" aria-label="Drivkrefter ${v.D} mot motkrefter ${v.M}"><i style="width:${v.D / tot * 100}%"></i></div><p class="tugl"><span>Drivkrefter ${v.D}</span><span>Motkrefter ${v.M}</span></p><div class="teori"><p>${esc(v.txt)}</p></div>
      ${side('d', 'Drivkrefter', 'Legg til drivkraft')}${side('m', 'Motkrefter', 'Legg til motkraft')}</article></div></div>${toolFoot}`; };
  ov.input = (n, el) => { if (n === 'ft') { F0.t = el.value.slice(0, 90); touch(); return; } const s = F0[el.dataset.k] && F0[el.dataset.k][+el.dataset.i]; if (!s) return; if (n === 'fn') { s.n = el.value.slice(0, 60); touch(); } else if (n === 'fs') { s.s = +el.value; touch(); Ov.paint(); } };
  ov.act = (a, el) => { const key = el.dataset.k; if (a === 'fadd') { F0[key].push({ n: key === 'd' ? 'Ny drivkraft' : 'Ny motkraft', s: 3 }); touch(); Ov.paint(); }
    else if (a === 'fdel') { F0[key].splice(+el.dataset.i, 1); touch(); Ov.paint(); }
    else if (a === 'tcopy') { const v = verdict(); copyText(`Kraftfeltanalyse: ${F0.t}\n\nDrivkrefter (${v.D}):\n${F0.d.map(s => `- ${s.n} (${s.s})`).join('\n')}\n\nMotkrefter (${v.M}):\n${F0.m.map(s => `- ${s.n} (${s.s})`).join('\n')}\n\n${v.txt}`); } };
  ov.onClose = () => { clearTimeout(SVT); save(); };
  Ov.open(ov);
}

const KOTTER = [['Skap forståelse for at det haster', 'Vis med tall og historier fra brukernes hverdag hvorfor dagens situasjon ikke holder.'], ['Bygg en styrende koalisjon', 'Samle folk med myndighet, fagkunnskap og troverdighet. Ta med linjeledere og tillitsvalgte.'], ['Utvikle visjon og strategi', 'Si i én setning hva som blir bedre, og for hvem.'], ['Kommuniser visjonen', 'Bruk rike kanaler og nærmeste leder. Svar på hva endringen betyr for den enkelte.'], ['Fjern hindringer', 'Finn rutiner, systemer og roller som gjør det gamle enklere enn det nye.'], ['Skap kortsiktige gevinster', 'Planlegg en synlig forbedring innen tre måneder, og vis den fram.'], ['Konsolider og driv videre', 'Bruk tilliten fra de første gevinstene til å ta de vanskeligere endringene.'], ['Forankre i kulturen', 'Bygg det nye inn i opplæring, rutiner, mål og hvem som får ros.']];
function toolKotter() {
  const T = S.tools, ov = { label: 'Kotter-sjekk' }; let K = T.kotter ? T.kotter : { t: '', s: [0, 0, 0, 0, 0, 0, 0, 0] };
  const ST = ['Ikke startet', 'I gang', 'På plass'], touch = () => { T.kotter = K; useTool('kotter'); };
  const verdict = () => { const first = K.s.findIndex(v => v < 2), ahead = first >= 0 ? K.s.findIndex((v, i) => i > first && v > K.s[first]) : -1;
    if (first < 0) return `Alle åtte trinn er på plass. Husk at endring sjelden er helt ferdig: følg med på om det nye holder seg.`;
    return `Start her: trinn ${first + 1}, ${KOTTER[first][0].toLowerCase()}. ${KOTTER[first][1]}` + (ahead > 0 ? ` Du er kommet lenger på trinn ${ahead + 1} enn på trinn ${first + 1}. Kotter advarer mot å hoppe over grunnarbeidet.` : ''); };
  ov.render = () => ovTop(`<strong>Kotter-sjekk</strong>`) + `<div class="ov-body" tabindex="-1"><div class="col"><article class="kort"><h2>Kotter-sjekk</h2><p>Hvor langt er endringen din kommet på hvert av Kotters åtte trinn? Sjekken peker på det første trinnet som ikke er på plass.</p>
    <label class="lbl" for="kt">Endringen det gjelder</label><input class="tin" id="kt" value="${esc(K.t)}" data-in="kt" maxlength="90" placeholder="For eksempel: nytt sak- og arkivsystem">
    <div class="teori" id="kv" aria-live="polite"><p>${esc(verdict())}</p></div>
    <ol class="ksteps">${KOTTER.map((k, i) => `<li><fieldset class="seg sm"><legend>${esc(k[0])}</legend>${ST.map((l, v) => `<label><input type="radio" name="k${i}" value="${v}" data-in="ks" data-i="${i}"${K.s[i] === v ? ' checked' : ''}><span>${l}</span></label>`).join('')}</fieldset></li>`).join('')}</ol></article></div></div>${toolFoot}`;
  ov.input = (n, el) => { if (n === 'kt') { K.t = el.value.slice(0, 90); touch(); } else if (n === 'ks') { K.s[+el.dataset.i] = +el.value; touch(); const kv = $('#kv', Ov.el); if (kv) kv.innerHTML = `<p>${esc(verdict())}</p>`; } };
  ov.act = a => { if (a === 'tcopy') copyText(`Kotter-sjekk${K.t ? ': ' + K.t : ''}\n\n${KOTTER.map((k, i) => `${i + 1}. ${k[0]}: ${ST[K.s[i]].toLowerCase()}`).join('\n')}\n\n${verdict()}`); };
  ov.onClose = () => { clearTimeout(SVT); save(); };
  Ov.open(ov);
}

const JOBD = [['Variasjon', 'Krever jobben flere ulike ferdigheter?', 'Slå sammen oppgaver, roter mellom dem, eller ta inn oppgaver som krever nye ferdigheter.'], ['Oppgaveidentitet', 'Gjør du noe helt, fra start til slutt?', 'La samme person følge en sak fra start til slutt.'], ['Betydning', 'Betyr arbeidet noe for andre?', 'Vis hvem som har nytte av arbeidet, for eksempel med tilbakemeldinger fra brukere.'], ['Autonomi', 'Bestemmer du selv hvordan og når?', 'Gi større frihet i metode, rekkefølge og tidsbruk.'], ['Tilbakemelding', 'Viser arbeidet selv hvor godt du lykkes?', 'Sørg for at resultatene blir synlige for den som gjør jobben.']];
function toolJob() {
  const T = S.tools, ov = { label: 'Jobbdesign-måler' }; let J = T.job ? T.job : [4, 4, 4, 4, 4];
  const res = () => { const mps = Math.round((J[0] + J[1] + J[2]) / 3 * J[3] * J[4]), lo = J.indexOf(Math.min(...J)); return { mps, lo, lab: mps < 60 ? 'Lavt' : mps < 150 ? 'Middels' : 'Høyt' }; };
  const out = () => { const r = res(); return `<p class="bigno sm2">${r.mps}<span> av 343</span></p><p><strong>${r.lab} motivasjonspotensial.</strong> Lavest skår: ${JOBD[r.lo][0].toLowerCase()}. ${JOBD[r.lo][2]}</p><p class="dim">Autonomi og tilbakemelding veier tyngst, fordi de ganges inn. Er én av dem lav, hjelper det lite at resten er høy.</p>`; };
  ov.render = () => ovTop(`<strong>Jobbdesign-måler</strong>`) + `<div class="ov-body" tabindex="-1"><div class="col"><article class="kort"><h2>Jobbdesign-måler</h2><p>Vurder en stilling på de fem dimensjonene til Hackman og Oldham, fra 1 (svært lite) til 7 (svært mye). Måleren regner ut motivasjonspotensialet.</p>
    <div class="teori" id="jv" aria-live="polite">${out()}</div>
    ${JOBD.map((d, i) => `<label class="rng" for="j${i}"><span><strong>${d[0]}</strong> <output id="jo${i}">${J[i]}</output></span><small>${d[1]}</small><input type="range" id="j${i}" min="1" max="7" step="1" value="${J[i]}" data-in="jr" data-i="${i}"></label>`).join('')}
    <p class="kilde">Formelen er snittet av variasjon, oppgaveidentitet og betydning, ganget med autonomi og tilbakemelding.</p></article></div></div>${toolFoot}`;
  ov.input = (n, el) => { if (n !== 'jr') return; const i = +el.dataset.i; J[i] = +el.value; T.job = J; useTool('job'); const o = $('#jo' + i, Ov.el); if (o) o.textContent = J[i]; const jv = $('#jv', Ov.el); if (jv) jv.innerHTML = out(); };
  ov.act = a => { if (a === 'tcopy') { const r = res(); copyText(`Jobbdesign-måler\n\n${JOBD.map((d, i) => `${d[0]}: ${J[i]} av 7`).join('\n')}\n\nMotivasjonspotensial: ${r.mps} av 343 (${r.lab.toLowerCase()}). Lavest skår: ${JOBD[r.lo][0].toLowerCase()}. ${JOBD[r.lo][2]}`); } };
  ov.onClose = () => { clearTimeout(SVT); save(); };
  Ov.open(ov);
}

function toolLens() {
  const T = S.tools, ov = { label: 'Brillesjekk' }; let L = T.lens ? T.lens : { t: '', a: ['', '', '', ''] };
  const touch = () => { T.lens = L; useTool('lens'); };
  ov.render = () => ovTop(`<strong>Brillesjekk</strong>`) + `<div class="ov-body" tabindex="-1"><div class="col"><article class="kort"><h2>Brillesjekk</h2><p>Se en egen sak gjennom Bolman og Deals fire rammer. Skriv stikkord under hver brille. Ikke skriv inn opplysninger om enkeltpersoner.</p>
    <label class="lbl" for="lt">Saken</label><textarea class="ta" id="lt" rows="3" data-in="lt" maxlength="1500" placeholder="Beskriv situasjonen kort.">${esc(L.t)}</textarea>
    ${LENS_NAMES.map((n, i) => `<label class="lbl" for="la${i}">${n} ramme</label><p class="ask">${esc(LENS_ASK[i])}</p><textarea class="ta" id="la${i}" rows="3" data-in="la" data-i="${i}" maxlength="1500">${esc(L.a[i])}</textarea>`).join('')}</article></div></div>${toolFoot}`;
  ov.input = (n, el) => { if (n === 'lt') L.t = el.value.slice(0, 1500); else if (n === 'la') L.a[+el.dataset.i] = el.value.slice(0, 1500); else return; touch(); };
  ov.act = a => {
    if (a === 'tcopy') copyText(`Brillesjekk\n\nSaken: ${L.t}\n\n${LENS_NAMES.map((n, i) => `${n} ramme\n${LENS_ASK[i]}\n${L.a[i] || '(ikke fylt ut)'}`).join('\n\n')}`);
  };
  ov.onClose = () => { clearTimeout(SVT); save(); };
  Ov.open(ov);
}
const openTool = id => ({ stake: toolStake, force: toolForce, kotter: toolKotter, job: toolJob, lens: toolLens }[id] || (() => {}))();
