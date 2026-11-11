/* Fylkeshuset – tegninger av modellene. Hver klikkbar del er en <g class="mp" data-part>. */
const drawModel = (() => {
  const t = (x, y, s, cls) => `<text x="${x}" y="${y}" text-anchor="middle"${cls ? ` class="${cls}"` : ''}>${s}</text>`;
  const rot = (x, y, s) => `<text x="${x}" y="${y}" text-anchor="middle" transform="rotate(-90 ${x} ${y})" class="sm">${s}</text>`;
  const g = (id, lab, inner) => `<g class="mp" data-part="${id}" tabindex="0" role="button" aria-label="${lab}">${inner}</g>`;
  const lines = (L, cx, cy, sub) => { const y0 = cy + 4 - (L.length - 1) * 7; return L.map((s, i) => t(cx, y0 + i * 15, s, sub && i ? 'sm' : '')).join(''); };
  const box = (id, lab, x, y, w, h, L, o = {}) => g(id, lab, `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${o.rx ?? 5}"/>${lines(L || [lab], x + w / 2, y + h / 2, o.sub)}`);
  const stat = (x, y, w, h, L) => `<g class="ms"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="5"/>${lines(L, x + w / 2, y + h / 2)}</g>`;
  const ln = (x1, y1, x2, y2) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="ml" marker-end="url(#ah)"/>`;
  const pa = d => `<path d="${d}" class="ml" marker-end="url(#ah)"/>`;
  const D = {};

  D.system = () => [340, 208,
    g('omg', 'Omgivelser', `<rect x="3" y="3" width="334" height="202" rx="10" class="dash"/>${t(170, 22, 'Omgivelser')}`) +
    box('inn', 'Innsats', 14, 62, 88, 56) + box('kjerne', 'Omforming', 126, 50, 88, 80) + box('ut', 'Resultater', 238, 62, 88, 56) +
    ln(102, 90, 124, 90) + ln(214, 90, 236, 90) +
    g('tilbake', 'Tilbakemelding', `<rect x="100" y="150" width="140" height="40" class="hit"/><path d="M282 118V160H58V121" class="ml" marker-end="url(#ah)"/>${t(170, 180, 'Tilbakemelding')}`)];

  D.strategi = () => [340, 176,
    box('plan', 'Planlagt strategi', 6, 36, 98, 48, ['Planlagt', 'strategi']) + box('real', 'Realisert strategi', 236, 36, 98, 48, ['Realisert', 'strategi']) +
    ln(104, 60, 234, 60) + ln(124, 60, 124, 126) + ln(284, 128, 284, 86) +
    box('bort', 'Ikke realisert', 62, 128, 112, 40) + box('frem', 'Fremvoksende strategi', 206, 128, 128, 40, ['Fremvoksende', 'strategi'])];

  D.mintzberg = () => [340, 208,
    box('topp', 'Strategisk toppunkt', 106, 8, 128, 42, ['Strategisk', 'toppunkt'], { rx: 8 }) +
    g('tekno', 'Teknostruktur', `<ellipse cx="68" cy="100" rx="60" ry="30"/>${t(68, 104, 'Teknostruktur')}`) +
    g('stab', 'Støttestab', `<ellipse cx="272" cy="100" rx="60" ry="30"/>${t(272, 104, 'Støttestab')}`) +
    box('mellom', 'Mellomledelse', 128, 58, 84, 86, ['Mellom-', 'ledelse']) +
    box('kjerne', 'Operativ kjerne', 36, 152, 268, 48, null, { rx: 8 })];

  D.isfjell = () => [340, 224,
    `<line x1="0" y1="80" x2="340" y2="80" class="wave"/>${t(296, 72, 'vannflaten', 'sm')}` +
    g('art', 'Artefakter', `<polygon points="170,10 218,80 122,80"/>${t(170, 70, 'Artefakter', 'sm')}`) +
    g('verd', 'Uttrykte verdier', `<polygon points="122,80 218,80 256,140 84,140"/>${t(170, 116, 'Uttrykte verdier')}`) +
    g('ant', 'Grunnleggende antakelser', `<polygon points="84,140 256,140 298,216 42,216"/>${t(170, 184, 'Grunnleggende antakelser')}`)];

  D.konflikt = () => [340, 242,
    `<line x1="40" y1="212" x2="40" y2="12" class="ml" marker-end="url(#ah)"/><line x1="40" y1="212" x2="334" y2="212" class="ml" marker-end="url(#ah)"/>` +
    rot(18, 112, 'Hevder egne interesser') + t(190, 234, 'Samarbeider om den andres interesser', 'sm') +
    box('konk', 'Konkurranse', 52, 20, 100, 40) + box('sam', 'Samarbeid', 228, 20, 100, 40) + box('komp', 'Kompromiss', 140, 92, 100, 40) +
    box('unn', 'Unngåelse', 52, 164, 100, 40) + box('til', 'Tilpasning', 228, 164, 100, 40)];

  D.usikkerhet = () => [340, 214,
    t(137, 16, 'Enkle', 'sm') + t(271, 16, 'Komplekse', 'sm') + rot(54, 69, 'Stabile') + rot(54, 163, 'Dynamiske') +
    box('es', 'Enkle og stabile', 72, 24, 130, 90, ['Lav', 'usikkerhet']) + box('ks', 'Komplekse og stabile', 206, 24, 130, 90, ['Moderat', 'usikkerhet']) +
    box('ed', 'Enkle og dynamiske', 72, 118, 130, 90, ['Moderat til høy', 'usikkerhet']) + box('kd', 'Komplekse og dynamiske', 206, 118, 130, 90, ['Høy', 'usikkerhet'])];

  D.jobb = () => [340, 238,
    box('var', 'Variasjon', 2, 4, 112, 34) + box('ident', 'Oppgaveidentitet', 2, 44, 112, 34) + box('bet', 'Betydning', 2, 84, 112, 34) +
    box('aut', 'Autonomi', 2, 138, 112, 34) + box('tilb', 'Tilbakemelding', 2, 194, 112, 34) +
    stat(140, 40, 98, 42, ['Opplevd', 'mening']) + stat(140, 134, 98, 42, ['Opplevd', 'ansvar']) + stat(140, 190, 98, 42, ['Kunnskap om', 'resultatene']) + stat(264, 96, 74, 50, ['Indre', 'motivasjon']) +
    ln(114, 21, 138, 52) + ln(114, 61, 138, 61) + ln(114, 101, 138, 70) + ln(114, 155, 138, 155) + ln(114, 211, 138, 211) +
    ln(238, 61, 262, 108) + ln(238, 155, 262, 126) + ln(238, 211, 262, 140)];

  D.komm = () => [340, 184,
    box('send', 'Sender', 6, 62, 86, 46) + box('kanal', 'Kanal', 127, 62, 86, 46) + box('mott', 'Mottaker', 248, 62, 86, 46) +
    ln(92, 85, 125, 85) + ln(213, 85, 246, 85) + t(109, 56, 'koder', 'sm') + t(230, 56, 'dekoder', 'sm') +
    g('stoy', 'Støy', `<rect x="130" y="2" width="80" height="48" class="hit"/><polyline points="138,24 148,10 158,28 168,10 178,28 188,10 198,24" class="ml zig"/>${t(170, 44, 'Støy')}`) +
    g('tilb', 'Tilbakemelding', `<rect x="100" y="150" width="140" height="30" class="hit"/><path d="M291 108V146H49V111" class="ml" marker-end="url(#ah)"/>${t(170, 168, 'Tilbakemelding')}`)];

  D.boette = () => [340, 228,
    box('prob', 'Problemer', 4, 6, 78, 32) + box('los', 'Løsninger', 88, 6, 78, 32) + box('delt', 'Deltakere', 172, 6, 78, 32) + box('anl', 'Beslutningsanledninger', 256, 6, 80, 32, ['Anledninger']) +
    pa('M43 38Q60 110 138 146') + pa('M127 38Q130 100 158 146') + pa('M211 38Q208 100 182 146') + pa('M296 38Q280 110 202 146') +
    `<g class="ms"><polygon points="118,150 222,150 208,222 132,222"/><line x1="110" y1="150" x2="230" y2="150" class="ml"/>${t(170, 192, 'Beslutning')}</g>`];

  D.seci = () => [340, 212,
    t(127, 16, 'Til taus', 'sm') + t(269, 16, 'Til eksplisitt', 'sm') + rot(46, 69, 'Fra taus') + rot(46, 163, 'Fra eksplisitt') +
    box('sos', 'Sosialisering', 60, 26, 134, 86) + box('ekst', 'Eksternalisering', 202, 26, 134, 86) + box('int', 'Internalisering', 60, 120, 134, 86) + box('komb', 'Kombinering', 202, 120, 134, 86) +
    ln(184, 48, 212, 48) + ln(304, 102, 304, 130) + ln(212, 184, 184, 184) + ln(92, 130, 92, 102)];

  D.leavitt = () => { const P = { oppg: [170, 30, 'Oppgaver'], strukt: [62, 112, 'Struktur'], tekn: [278, 112, 'Teknologi'], menn: [170, 194, 'Mennesker'] }, k = Object.keys(P); let L = '';
    for (let i = 0; i < 4; i++) for (let j = i + 1; j < 4; j++) L += `<line x1="${P[k[i]][0]}" y1="${P[k[i]][1]}" x2="${P[k[j]][0]}" y2="${P[k[j]][1]}" class="ml"/>`;
    return [340, 224, L + k.map(id => box(id, P[id][2], P[id][0] - 52, P[id][1] - 20, 104, 40)).join('')]; };

  D.situasjon = () => [340, 232,
    `<line x1="52" y1="204" x2="52" y2="8" class="ml" marker-end="url(#ah)"/><line x1="52" y1="204" x2="336" y2="204" class="ml" marker-end="url(#ah)"/>` +
    rot(30, 107, 'Støtte') + t(194, 224, 'Styring', 'sm') +
    box('s3', 'Støttende', 60, 12, 134, 90, ['Støttende', 'kan, men nøler'], { sub: 1 }) + box('s2', 'Veiledende', 198, 12, 134, 90, ['Veiledende', 'har mistet motet'], { sub: 1 }) +
    box('s4', 'Delegerende', 60, 106, 134, 90, ['Delegerende', 'kan og vil'], { sub: 1 }) + box('s1', 'Instruerende', 198, 106, 134, 90, ['Instruerende', 'ny i oppgaven'], { sub: 1 })];

  return id => { const [w, h, inner] = D[id](); return `<svg viewBox="0 0 ${w} ${h}" role="img" aria-label="${esc(MODELS[id].cap)}" class="msvg"><defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>${inner}</svg>`; };
})();

/* Modell med klikkbare deler, knapper og forklaring */
function modelHTML(id, sel) {
  const m = MODELS[id], cur = m.parts.find(p => p[0] === sel);
  return `<div class="mbox" data-model="${id}">
    <figure class="modell"><div class="mwrap">${drawModel(id).replace(new RegExp(`data-part="${sel}"`), `data-part="${sel}" data-on="1"`)}</div>
    <figcaption>${esc(m.cap)} <span class="dim">Etter ${esc(m.by)}.</span></figcaption></figure>
    <div class="mchips">${m.parts.map(p => `<button class="chipb${p[0] === sel ? ' on' : ''}" data-mp="${p[0]}">${esc(p[1])}</button>`).join('')}</div>
    <div class="minfo" aria-live="polite">${cur ? `<h3>${esc(cur[1])}</h3><p>${esc(cur[2])}</p>` : `<p class="dim">Trykk på en del av figuren for å se hva den betyr.</p>`}</div>
  </div>`;
}
function selectPart(boxEl, part) {
  if (!boxEl) return;
  const m = MODELS[boxEl.dataset.model], cur = m.parts.find(p => p[0] === part); if (!cur) return;
  boxEl.querySelectorAll('.mp').forEach(g => { if (g.dataset.part === part) g.setAttribute('data-on', '1'); else g.removeAttribute('data-on'); });
  boxEl.querySelectorAll('.chipb').forEach(b => b.classList.toggle('on', b.dataset.mp === part));
  const info = boxEl.querySelector('.minfo'); info.innerHTML = `<h3>${esc(cur[1])}</h3><p>${esc(cur[2])}</p>`;
  if (!S.seen['m:' + boxEl.dataset.model + ':' + part]) { S.seen['m:' + boxEl.dataset.model + ':' + part] = 1; save(); }
}
