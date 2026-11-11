'use strict';
/* ===================== Hjelpere ===================== */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const inl = s => s.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/\*(.+?)\*/g, '<em>$1</em>');
const md = s => inl(esc(s));
const plain = s => String(s ?? '').replace(/\*\*?/g, '');
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const pick = (a, n) => shuffle(a).slice(0, n);
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const pad = n => String(n).padStart(2, '0');
const dstr = d => d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate());
const today = () => dstr(new Date());
const dayIdx = s => { const [y, m, d] = s.split('-').map(Number); return Math.round(Date.UTC(y, m - 1, d) / 864e5); };
const idxDay = i => { const d = new Date(i * 864e5); return d.getUTCFullYear() + '-' + pad(d.getUTCMonth() + 1) + '-' + pad(d.getUTCDate()); };
const reEsc = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const timeout = (p, ms) => Promise.race([p, new Promise((_, rej) => setTimeout(() => rej({ code: 'timeout' }), ms))]);
const flag = (c, on = true) => document.documentElement.classList.toggle(c, on);
function rich(s) { // enkel og trygg markdown for svar fra veilederen
  let out = '', list = false;
  for (const ln of esc(s).split(/\n/)) {
    const li = ln.match(/^\s*(?:[-*•]|\d+[.)])\s+(.*)$/), hd = ln.match(/^#{1,4}\s+(.*)$/);
    if (li) { if (!list) { out += '<ul>'; list = true; } out += '<li>' + inl(li[1]) + '</li>'; continue; }
    if (list) { out += '</ul>'; list = false; }
    if (hd) out += '<p><strong>' + inl(hd[1]) + '</strong></p>'; else if (ln.trim()) out += '<p>' + inl(ln) + '</p>';
  }
  return out + (list ? '</ul>' : '');
}

/* ===================== Ikoner ===================== */
const ICP = {
  hus: 'M4 21V6l8-3 8 3v15M9 21v-5h6v5M8 9h2M14 9h2M8 13h2M14 13h2', tren: 'M12 3a9 9 0 1 0 9 9M12 8a4 4 0 1 0 4 4M12 12l8-8M17 4h3v3',
  folder: 'M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z', wrench: 'M14.5 6.5a4 4 0 0 0-5.3 5.3L3 18l3 3 6.2-6.2a4 4 0 0 0 5.3-5.3l-2.6 2.6-2.4-.6-.6-2.4z',
  person: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21a8 8 0 0 1 16 0', back: 'M15 5l-7 7 7 7', next: 'M9 5l7 7-7 7', x: 'M6 6l12 12M18 6L6 18', check: 'M5 12.5l4.5 4.5L19 7.5',
  speaker: 'M4 9v6h4l5 4V5L8 9zM16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12', stop: 'M7 7h10v10H7z', mic: 'M12 3a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3zM6 11a6 6 0 0 0 12 0M12 17v4',
  send: 'M4 12l16-8-6 16-3-7z', star: 'M12 3.5l2.6 5.4 5.9.8-4.3 4.1 1 5.9-5.2-2.8-5.2 2.8 1-5.9-4.3-4.1 5.9-.8z', bolt: 'M13 2L5 14h6l-1 8 8-12h-6z',
  aurora: 'M3 16c3-9 5-9 7-3s4 4 5-3 3-7 6-3M3 21h18', window: 'M5 3h14v18H5zM12 3v18M5 12h14', key: 'M7.5 15.5a4 4 0 1 1 3.9-5H21v3h-2v2h-3v-2h-4.6a4 4 0 0 1-3.9 2z',
  card: 'M3 6h18v12H3zM3 10h18M7 15h4', lift: 'M6 3h12v18H6zM12 3v18M9 9l-1.5 2h3zM15 13l1.5 2h-3z', grid: 'M4 4h16v16H4zM4 10h16M4 15h16M10 4v16M15 4v16',
  berg: 'M3 14l5-9 3 5 2-3 8 7M2 14h20M6 14l3 6h7l3-6', bin: 'M5 7h14M9 7V4h6v3M7 7l1 13h8l1-13', loop: 'M17 3l3 3-3 3M20 6H9a5 5 0 0 0 0 10M7 21l-3-3 3-3M4 18h11a5 5 0 0 0 0-10',
  steps: 'M3 20h5v-4h5v-4h5V8h3', glasses: 'M3 13a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0zM14 13a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0zM10 13h4M3 13l2-7M21 13l-2-7', flag: 'M5 21V4M5 4h12l-2 4 2 4H5',
  chart: 'M4 20V4M4 20h16M8 16v-4M12 16V8M16 16v-7', sun: 'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2', boots: 'M8 3v11l-4 2v4h16v-3l-6-3V3z',
  pen: 'M4 20l4-1L19 8l-3-3L5 16zM14 7l3 3', box: 'M4 8l8-4 8 4v9l-8 4-8-4zM4 8l8 4 8-4M12 12v9', chat: 'M4 5h16v11H9l-5 4z', cap: 'M2 9l10-5 10 5-10 5zM6 11.5V16c2 2 10 2 12 0v-4.5M22 9v6',
  roof: 'M3 12l9-8 9 8M6 10v10h12V10', house: 'M3 11l9-8 9 8M5 10v11h14V10M10 21v-6h4v6', book: 'M5 4h9a4 4 0 0 1 4 4v12H9a4 4 0 0 1-4-4zM5 16a4 4 0 0 1 4-4h9', search: 'M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zM20 20l-4-4',
  copy: 'M9 9h11v11H9zM5 15V4h11', download: 'M12 4v11M7 11l5 5 5-5M5 20h14', plus: 'M12 5v14M5 12h14', minus: 'M5 12h14', trash: 'M5 7h14M10 7V4h4v3M7 7l1 13h8l1-13M10 11v6M14 11v6',
  info: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 11v6M12 7.5v.5', cards: 'M7 5h12v14H7zM4 8v13h11', people: 'M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM3 20a6 6 0 0 1 12 0M17 11a3 3 0 1 0-1-5.8M21 20a6 6 0 0 0-4-5.6',
  scale: 'M12 4v16M5 20h14M5 8h14M5 8l-2 6a3 3 0 0 0 4 0zM19 8l-2 6a3 3 0 0 0 4 0z', sliders: 'M4 7h10M18 7h2M4 17h4M12 17h8M16 5v4M10 15v4', map: 'M4 6l5-2 6 2 5-2v14l-5 2-6-2-5 2zM9 4v14M15 6v14'
};
const icon = (n, s = 22) => `<svg class="ic" width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${ICP[n] || ''}"/></svg>`;

/* ===================== Innholdsindeks ===================== */
const QI = {};
const GL = G.map(g => ({ id: 'g_' + g[1].toLowerCase().replace(/[^a-z0-9æøå]+/g, '-'), f: g[0], t: g[1], d: g[2] }));
F.forEach(f => {
  f.quiz.forEach((q, i) => { q.id = f.id + 'q' + i; q.f = f.id; QI[q.id] = q; });
  f.rooms.forEach(r => { r.f = f.id; r.cards.forEach((c, i) => { if (c.ty) { c.id = r.id + 'c' + i; c.f = f.id; QI[c.id] = c; } }); });
});
const FL = id => F.find(f => f.id === id);
const TEASE = { f1: `Grunnbegreper og perspektiver`, f2: `Målhierarki, målforskyvning, strategi`, f3: `Arbeidsdeling, koordinering, Mintzberg`, f4: `Schein, subkulturer, trygghet`, f5: `Maktbaser, dagsorden, konfliktstiler`, f6: `Legitimitet, isomorfi, avhengighet`, f7: `Herzberg, forventning, jobbdesign`, f8: `Prosess, kanaler, nettverk`, f9: `Begrenset rasjonalitet, søppelbøtta`, f10: `Dobbeltkrets, taus kunnskap, spredning`, f11: `Lewin, motstand, Kotter`, f12: `Roller, stil, situasjon` };
const INT = [0, 1, 2, 4, 8, 16]; // dager mellom repetisjoner per boks

/* ===================== Tilstand og lagring ===================== */
const KEY = 'fylkeshuset.v1';
const fresh = () => ({ v: 1, up: 0, rst: 0, xp: 0, goal: 30, fr: 1, days: {}, frz: {}, done: {}, q: {}, cards: {}, notes: {}, badges: {}, seen: {}, daily: {},
  tools: { used: {} }, stat: { combo: 0, tutor: 0, sims: 0, refl: 0, mis: 0, exam: 0 }, set: { sound: false, rate: 1, auto: false, ts: 0, lb: false } });
function norm(s) { const f = fresh(), o = Object.assign(f, s || {}); for (const k of ['days', 'frz', 'done', 'q', 'cards', 'notes', 'badges', 'seen', 'daily']) if (!o[k] || typeof o[k] !== 'object') o[k] = {};
  o.set = Object.assign(fresh().set, (s || {}).set); o.stat = Object.assign(fresh().stat, (s || {}).stat); o.tools = Object.assign({ used: {} }, (s || {}).tools); if (!o.tools.used) o.tools.used = {}; return o; }
let S = fresh(), MEM = null;
function loadLocal() { try { const t = localStorage.getItem(KEY); if (t) return JSON.parse(t); } catch (e) {} return MEM; }
function saveLocal() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { MEM = S; } }
function save() { S.up = Date.now(); saveLocal(); }
function mergeState(a, b) {
  a = norm(a); b = norm(b);
  const base = (b.up || 0) > (a.up || 0) ? b : a, other = base === a ? b : a;
  if ((base.rst || 0) > (other.up || 0)) return base;
  const o = JSON.parse(JSON.stringify(base));
  o.xp = Math.max(base.xp || 0, other.xp || 0);
  for (const k in other.done) o.done[k] = Math.max(o.done[k] ?? -1, other.done[k]);
  for (const k in other.days) o.days[k] = Math.max(o.days[k] || 0, other.days[k]);
  for (const k in other.frz) o.frz[k] = 1;
  for (const k in other.seen) o.seen[k] = 1;
  for (const k in other.daily) o.daily[k] = 1;
  for (const k in other.badges) if (!o.badges[k]) o.badges[k] = other.badges[k];
  for (const k in other.notes) if (!o.notes[k]) o.notes[k] = other.notes[k];
  for (const k in other.q) { const x = o.q[k], y = other.q[k]; if (!x || (y[0] + y[1]) > (x[0] + x[1])) o.q[k] = y; }
  for (const k in other.cards) { const x = o.cards[k], y = other.cards[k]; if (!x || y.due > x.due) o.cards[k] = y; }
  for (const k in other.tools.used) o.tools.used[k] = 1;
  for (const k in other.stat) o.stat[k] = Math.max(o.stat[k] || 0, other.stat[k] || 0);
  return o;
}

/* ===================== Nettleserfunksjoner ===================== */
// Opplesning med nettleserens norske stemme, der den finnes
const Aud = { voice: null, ok: false, st: 'idle', tok: 0,
  init() {
    const ss = window.speechSynthesis; if (!ss || typeof SpeechSynthesisUtterance === 'undefined') return;
    const find = () => { let vs = []; try { vs = ss.getVoices(); } catch (e) {}
      const v = vs.find(v => /^nb([-_]|$)/i.test(v.lang)) || vs.find(v => /^(no|nn)([-_]|$)/i.test(v.lang));
      if (v && !this.ok) { this.voice = v; this.ok = true; flag('has-audio'); } };
    find(); try { ss.addEventListener('voiceschanged', find); } catch (e) {}
  },
  changed() { if (Ov.cur && Ov.cur.audio) Ov.cur.audio(); },
  speak(lines) {
    if (!this.ok) return Promise.reject({ code: 'none' });
    const tok = ++this.tok; lines = lines.filter(Boolean).map(s => plain(s).slice(0, 1900));
    try { speechSynthesis.cancel(); } catch (e) {}
    return new Promise((res, rej) => { let k = 0; this.st = 'speaking'; this.changed();
      const nx = () => { if (tok !== this.tok) return rej({ code: 'stopped' }); if (k >= lines.length) { this.st = 'idle'; this.changed(); return res(); }
        const u = new SpeechSynthesisUtterance(lines[k++]); u.voice = this.voice; u.lang = this.voice.lang; u.rate = S.set.rate; u.onend = nx;
        u.onerror = () => { if (tok === this.tok) { this.st = 'idle'; this.changed(); } rej({ code: 'error' }); }; speechSynthesis.speak(u); };
      nx(); });
  },
  stop() { this.tok++; if (this.st === 'idle') return; try { speechSynthesis.cancel(); } catch (e) {} this.st = 'idle'; this.changed(); }
};

// Nedlasting av tekstfiler
const DL = {
  save(filename, data, type = 'text/plain') {
    try { const url = URL.createObjectURL(new Blob([data], { type: type + ';charset=utf-8' })), a = document.createElement('a');
      a.href = url; a.download = filename; document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(url), 5000);
      toast('Filen er lastet ned.', 'download'); }
    catch (e) { toast('Filen kunne ikke lastes ned her.', 'info'); }
  }
};

// Sikkerhetskopi: framdriften ligger i nettleseren, så den kan flyttes mellom enheter som fil
function backupSave() { save(); DL.save(`fylkeshuset-sikkerhetskopi-${today()}.json`, JSON.stringify(S), 'application/json'); }
function backupLoad(file) {
  if (!file) return; if (file.size > 3e6) return toast('Filen er for stor til å være en sikkerhetskopi.', 'info');
  const r = new FileReader();
  r.onload = () => { let o = null; try { o = JSON.parse(r.result); } catch (e) {}
    if (!o || o.v !== 1 || typeof o.xp !== 'number') return toast('Filen er ikke en sikkerhetskopi fra Fylkeshuset.', 'info');
    S = norm(mergeState(S, norm(o))); settle(); save(); applySettings(); render(false); toast('Sikkerhetskopien er hentet inn.', 'check'); };
  r.onerror = () => toast('Filen kunne ikke leses.', 'info'); r.readAsText(file);
}

// Installering som app
const Inst = { ev: null,
  init() {
    window.addEventListener('beforeinstallprompt', e => { e.preventDefault(); this.ev = e; flag('can-install'); });
    window.addEventListener('appinstalled', () => { this.ev = null; flag('can-install', false); toast('Fylkeshuset er installert.', 'house'); });
    if (this.standalone()) flag('is-app');
    if ('serviceWorker' in navigator && window.isSecureContext) navigator.serviceWorker.register('sw.js').catch(() => {});
  },
  standalone() { try { return matchMedia('(display-mode: standalone)').matches || navigator.standalone === true; } catch (e) { return false; } },
  ios() { return /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1); },
  go() { if (!this.ev) return; this.ev.prompt(); this.ev.userChoice.finally(() => { this.ev = null; flag('can-install', false); }); }
};

function copyText(text, okMsg) { const fail = () => Ov.open({ label: 'Kopier teksten', render: () => ovTop(`<strong>Kopier teksten</strong>`) + `<div class="ov-body" tabindex="-1"><div class="col"><p>Kopiering virker ikke her. Marker teksten under, og kopier den selv.</p><textarea class="ta" rows="16" readonly>${esc(text)}</textarea></div></div>` });
  try { navigator.clipboard.writeText(text).then(() => toast(okMsg || 'Kopiert.', 'copy'), fail); } catch (e) { fail(); } }

/* ===================== Spillmekanikk ===================== */
function level(xp = S.xp) { let i = 0; LEVELS.forEach((l, k) => { if (xp >= l[0]) i = k; }); const nx = LEVELS[i + 1]; return { i, t: LEVELS[i][1], from: LEVELS[i][0], to: nx ? nx[0] : null, next: nx ? nx[1] : null }; }
const metGoal = d => (S.days[d] || 0) >= S.goal;
function streak() { let i = dayIdx(today()), n = 0; if (!metGoal(idxDay(i)) && !S.frz[idxDay(i)]) i--; for (let g = 0; g < 800; g++) { const d = idxDay(i); if (metGoal(d)) n++; else if (!S.frz[d]) break; i--; } return n; }
function settle() { // bruk avspasering på dager som glapp
  const t = dayIdx(today()), ds = [...Object.keys(S.days).filter(metGoal), ...Object.keys(S.frz)].map(dayIdx); if (!ds.length) return;
  const last = Math.max(...ds), gap = t - last - 1; if (gap > 0 && gap <= S.fr) { for (let i = last + 1; i < t; i++) S.frz[idxDay(i)] = 1; S.fr -= gap; saveLocal(); }
}
function addXP(n) {
  if (!(n > 0)) return; const d = today(), was = metGoal(d), lv0 = level().i;
  S.xp += n; S.days[d] = (S.days[d] || 0) + n;
  if (!was && metGoal(d)) { const s = streak(); toast(`Dagsmålet er nådd. ${s} ${s === 1 ? 'dag' : 'dager'} på rad.`, 'aurora'); if (s > 0 && s % 7 === 0 && S.fr < 2) { S.fr++; toast('Du har tjent en avspaseringsdag.', 'sun'); } }
  const lv = level(); if (lv.i > lv0) { toast(`Ny tittel: ${lv.t}`, 'star', true); beep('lvl'); }
}
const WKEYS = f => [f.rooms[0].id, f.rooms[1].id, f.rooms[2].id, f.id + 'k', f.id + 't', f.id + 'x'];
const isLit = (f, k) => k === f.id + 't' ? (S.done[k] || 0) >= 70 : S.done[k] != null;
const lit = f => WKEYS(f).filter(k => isLit(f, k)).length;
const doorName = (f, k) => k === f.id + 'k' ? 'case' : k === f.id + 't' ? 'etasjeprøve' : k === f.id + 'x' ? 'refleksjon' : 'rom ' + (f.rooms.findIndex(r => r.id === k) + 1);
function nextStep() { for (const f of F) for (const k of WKEYS(f)) if (!isLit(f, k)) return { f, key: k, label: `Fortsett: ${f.n}. etasje, ${doorName(f, k)}` }; return null; }
const started = () => { const fs = F.filter(f => f.rooms.some(r => S.done[r.id] != null) || S.done[f.id + 't'] != null); return fs.length ? fs : [F[0]]; };
function award(id) { if (S.badges[id]) return; S.badges[id] = Date.now(); const b = BADGES.find(x => x[0] === id); toast('Nytt merke: ' + b[1], b[3], true); beep('lvl'); }
function checkBadges() {
  const lits = F.map(lit), total = lits.reduce((a, b) => a + b, 0), st = streak();
  if (S.xp > 0) award('start'); if (lits[0] === 6) award('f1'); if (F.every(f => S.seen[f.id])) award('husvarm'); if (lits.some(n => n === 6)) award('etasje');
  if (S.done.f3t === 100) award('weber'); if (S.done.f4t === 100) award('isfjell'); if (S.done.f9t === 100) award('boette');
  if (LENS.every(l => S.done[l.id] != null)) award('briller'); if (S.done.sim != null) award('sim'); if ((S.done.sim || 0) >= 65) award('gevinst');
  if (st >= 7) award('uke'); if (st >= 30) award('maaned'); if (S.stat.mis >= 5) award('felt'); if (S.stat.refl >= 5) award('tenker');
  if (Object.values(S.cards).filter(c => c.b >= 3).length >= 50) award('arkiv'); if (S.stat.combo >= 10) award('kombo');
  if (Object.keys(S.tools.used).length >= 3) award('verktoy'); if (Object.keys(S.tools.used).length >= 5) award('kasse');
  if (F.filter(f => S.done[f.id + 'k'] != null).length >= 6) award('saker'); if (S.stat.exam >= 6) award('eksamen');
  if (F.every(f => (S.done[f.id + 't'] || 0) >= 70)) award('tak'); if (total === 72) award('huset');
}
function commit() { checkBadges(); save(); chips(); }

function dueTerms(n, floors) { const t = dayIdx(today()), fs = new Set((floors || started()).map(f => f.id));
  const seen = GL.filter(g => S.cards[g.id] && S.cards[g.id].due <= t).sort((a, b) => S.cards[a.id].due - S.cards[b.id].due);
  return [...seen, ...GL.filter(g => !S.cards[g.id] && fs.has(g.f))].slice(0, n); }
function srs(id, ok, soft) { const t = dayIdx(today()), c = S.cards[id] || { b: 0, due: t }; c.b = ok ? Math.min(5, c.b + 1) : soft ? Math.max(1, c.b) : 1; c.due = t + (ok ? INT[c.b] : soft ? 1 : 0); S.cards[id] = c; }
function recordQ(q, r) { if (q.id) { const s = S.q[q.id] || [0, 0, 0, 0]; S.q[q.id] = [s[0] + (r.ok ? 1 : 0), s[1] + (r.ok ? 0 : 1), dayIdx(today()), r.ok ? 1 : 0]; } if (q.term) srs(q.term, r.ok); }
const maskDef = g => g.d.replace(new RegExp(reEsc(g.t), 'gi'), '…');
function termQ(g) { const pool = GL.filter(x => x.f === g.f && x.id !== g.id); return { ty: 'mc', q: `Hvilket begrep beskrives?`, s: maskDef(g), a: [g.t, ...pick(pool, 3).map(x => x.t)], why: `**${g.t}**: ${g.d}`, term: g.id, f: g.f }; }
function whoQ(w) { const others = WHO.filter(x => x[0] !== w[0] && !x[0].includes(w[0]) && !w[0].includes(x[0])), ds = [...pick(others.filter(x => x[2] === w[2]), 2), ...pick(others.filter(x => x[2] !== w[2]), 3)].slice(0, 3);
  return { ty: 'mc', q: `Hvem forbindes med dette?`, s: w[1], a: [w[0], ...ds.map(x => x[0])], why: `**${w[0]}**: ${w[1]}.`, f: w[2] }; }
const authored = f => [...f.quiz, ...f.rooms.flatMap(r => r.cards.filter(c => c.ty))];
function dailyItems() {
  const fs = started(), rank = q => { const s = S.q[q.id]; return !s ? 1e6 : s[3] === 0 ? s[2] : 2e6 + s[2]; };
  // etasjeprøvens spørsmål kommer først med når alle rommene på etasjen er lest
  const full = fs.filter(f => f.rooms.every(r => S.done[r.id] != null) || S.done[f.id + 't'] != null);
  let base = fs.flatMap(f => [...(full.includes(f) ? f.quiz : []), ...f.rooms.filter(r => S.done[r.id] != null).flatMap(r => r.cards.filter(c => c.ty))]);
  if (base.length < 5) base = base.concat(fs[fs.length - 1].quiz);
  const pool = shuffle(base).sort((a, b) => rank(a) - rank(b));
  const out = [], per = {}, cap = fs.length > 2 ? 2 : fs.length === 2 ? 3 : 9;
  for (const q of pool) { if (out.length >= 5) break; if ((per[q.f] || 0) >= cap) continue; per[q.f] = (per[q.f] || 0) + 1; out.push(q); }
  return shuffle([...dueTerms(4, full.length ? full : fs).map(termQ), ...out, ...pick(WHO.filter(w => fs.some(f => f.id === w[2])), 1).map(whoQ)]);
}

/* ===================== Meldinger og lyd ===================== */
function toast(msg, ic, big) { const box = $('#toasts'); if (!box) return; while (box.children.length >= 3) box.firstChild.remove(); const t = document.createElement('div'); t.className = 'toast' + (big ? ' big' : ''); t.innerHTML = (ic ? icon(ic, 20) : '') + '<span></span>'; t.lastChild.textContent = msg; box.append(t); setTimeout(() => t.classList.add('out'), big ? 4200 : 3200); setTimeout(() => t.remove(), big ? 4700 : 3700); }
let AC = null;
function beep(kind) { if (!S.set.sound) return; try { AC = AC || new (window.AudioContext || window.webkitAudioContext)(); const seq = kind === 'ok' ? [660, 880] : kind === 'bad' ? [220] : [523, 659, 784, 1047];
  seq.forEach((f, i) => { const o = AC.createOscillator(), g = AC.createGain(), t0 = AC.currentTime + i * 0.09; o.type = 'sine'; o.frequency.value = f; g.gain.setValueAtTime(0.0001, t0); g.gain.exponentialRampToValueAtTime(0.12, t0 + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.16); o.connect(g).connect(AC.destination); o.start(t0); o.stop(t0 + 0.18); }); } catch (e) {} }

/* ===================== Fullskjermsvisning for økter ===================== */
const fkey = el => el.id || [el.dataset.qa, el.dataset.act, el.dataset.in, el.dataset.i, el.dataset.k, el.dataset.v].filter(x => x != null).join('|') || null;
const ovBg = on => { for (const s of ['.app', '.tabs']) { const el = $(s); if (el) el.inert = on; } };
const Ov = { cur: null, el: null, stack: [], backKey: null,
  open(o) { if (this.cur) { Aud.stop(); this.stack.push(this.cur); } else { const ae = document.activeElement; this.backKey = ae ? fkey(ae) : null; } this.cur = o; this.el.hidden = false; flag('ov-open'); ovBg(true); this.fresh(); },
  swap(o) { if (this.cur) { Aud.stop(); this.cur.onClose && this.cur.onClose(); } this.cur = o; this.fresh(); },
  paint() { if (!this.cur) return; const b0 = $('.ov-body', this.el), top = b0 ? b0.scrollTop : 0, ae = document.activeElement, key = ae && this.el.contains(ae) ? fkey(ae) : null;
    this.el.setAttribute('aria-label', this.cur.label || ''); this.el.innerHTML = this.cur.render(); const b = $('.ov-body', this.el); if (b) b.scrollTop = top;
    if (key) { const again = $$('button,[tabindex],textarea,input,select', this.el).find(x => fkey(x) === key && !x.disabled); (again || b || this.el).focus({ preventScroll: true }); }
    this.cur.after && this.cur.after(); },
  fresh() { if (!this.cur) return; this.el.setAttribute('aria-label', this.cur.label || ''); this.el.innerHTML = this.cur.render(); const b = $('.ov-body', this.el); if (b) { b.scrollTop = 0; b.focus({ preventScroll: true }); } this.cur.after && this.cur.after(); },
  close(silent) { if (!this.cur) return; const c = this.cur; Aud.stop(); c.onClose && c.onClose();
    if (this.stack.length && !silent) { this.cur = this.stack.pop(); this.paint(); return; }
    this.stack.forEach(x => x.onClose && x.onClose()); this.stack = []; this.cur = null; this.el.hidden = true; this.el.innerHTML = ''; flag('ov-open', false); ovBg(false);
    if (!silent) { render(false); const again = this.backKey && $$('button,a', $('#view')).find(x => fkey(x) === this.backKey); (again || $('#view')).focus({ preventScroll: true }); } }
};
const ovTop = (mid, right = '') => `<div class="ov-top"><button class="ib" data-act="close" aria-label="Lukk">${icon('x')}</button><div class="ov-mid">${mid}</div>${right}</div>`;
const progBar = (v, n) => `<div class="prog" role="progressbar" aria-valuemin="0" aria-valuemax="${n}" aria-valuenow="${v}" aria-label="Framdrift"><i style="width:${n ? v / n * 100 : 0}%"></i></div>`;

/* ===================== Spørsmålskomponenten ===================== */
function makeQ(q, o = {}) {
  const st = { done: false, res: null };
  const fin = frac => { st.done = true; st.res = { frac, ok: frac === 1 }; o.onDone && o.onDone(st.res); };
  const alive = () => !o.alive || o.alive();
  const mk = c => `<span class="mk">${c === 'ok' ? icon('check', 18) : c === 'bad' ? icon('x', 18) : ''}</span>`;
  const check = (dis) => `<button class="btn wide" data-qa="check"${dis ? ' disabled' : ''}>Sjekk svaret</button>`;
  let ui, body, act, foot = () => '';
  const head = () => `${q.s ? `<blockquote class="scen">${md(q.s)}</blockquote>` : ''}<h2 class="qq">${q.ty === 'gap' ? md(q.q).replace('___', `<span class="gap">${st.done ? esc(q.a[0]) : '&nbsp;'}</span>`) : md(q.q)}</h2>`;

  if (q.ty === 'mc' || q.ty === 'gap') {
    ui = { o: shuffle(q.a.map((t, i) => ({ t, ok: i === 0 }))), sel: -1 };
    body = () => `<div class="opts">${ui.o.map((x, i) => { const c = st.done ? (x.ok ? 'ok' : i === ui.sel ? 'bad' : '') : ''; return `<button class="opt ${c}" data-qa="pick" data-i="${i}"${st.done ? ' disabled' : ''}>${mk(c)}<span>${md(x.t)}</span></button>`; }).join('')}</div>`;
    act = (a, el) => { if (a !== 'pick' || st.done) return; ui.sel = +el.dataset.i; fin(ui.o[ui.sel].ok ? 1 : 0); };
  } else if (q.ty === 'tf') {
    ui = { sel: null };
    body = () => `<div class="opts two">${[[true, 'Stemmer'], [false, 'Stemmer ikke']].map(([v, l]) => { const c = st.done ? (v === q.sant ? 'ok' : v === ui.sel ? 'bad' : '') : ''; return `<button class="opt ${c}" data-qa="tf" data-v="${v ? 1 : 0}"${st.done ? ' disabled' : ''}>${mk(c)}<span>${l}</span></button>`; }).join('')}</div>`;
    act = (a, el) => { if (a !== 'tf' || st.done) return; ui.sel = el.dataset.v === '1'; fin(ui.sel === q.sant ? 1 : 0); };
  } else if (q.ty === 'multi') {
    ui = { o: shuffle([...q.ok.map(t => ({ t, ok: true })), ...q.no.map(t => ({ t, ok: false }))]), sel: new Set() };
    body = () => `<p class="hint">Velg alle som stemmer.</p><div class="opts">${ui.o.map((x, i) => { const on = ui.sel.has(i), c = st.done ? (x.ok && on ? 'ok' : x.ok ? 'miss' : on ? 'bad' : '') : on ? 'sel' : ''; return `<button class="opt ${c}" data-qa="tog" data-i="${i}" aria-pressed="${on}"${st.done ? ' disabled' : ''}>${mk(c === 'miss' ? 'ok' : c)}<span>${md(x.t)}${c === 'miss' ? ' <em class="note">Skulle vært med</em>' : ''}</span></button>`; }).join('')}</div>`;
    foot = () => check(!ui.sel.size);
    act = (a, el) => { if (st.done) return; if (a === 'tog') { const i = +el.dataset.i; ui.sel.has(i) ? ui.sel.delete(i) : ui.sel.add(i); o.repaint(); } else if (a === 'check' && ui.sel.size) fin(ui.o.filter((x, i) => x.ok === ui.sel.has(i)).length / ui.o.length); };
  } else if (q.ty === 'match') {
    ui = { r: shuffle(q.pairs.map((p, i) => ({ t: p[1], i }))), map: {}, cur: 0 };
    const leftOf = k => { for (const i in ui.map) if (ui.map[i] === k) return +i; return null; }, nb = i => `<span class="nb">${i + 1}</span>`, full = () => Object.keys(ui.map).length === q.pairs.length;
    body = () => st.done
      ? `<ul class="res">${q.pairs.map((p, i) => { const ok = ui.r[ui.map[i]].i === i; return `<li class="${ok ? 'ok' : 'bad'}">${mk(ok ? 'ok' : 'bad')}<span><strong>${md(p[0])}</strong><br>${md(p[1])}</span></li>`; }).join('')}</ul>`
      : `<p class="hint">Trykk på et nummer til venstre, og så på det som hører til.</p><div class="match"><div class="mcol">${q.pairs.map((p, i) => `<button class="mitem${ui.cur === i ? ' sel' : ''}${ui.map[i] != null ? ' set' : ''}" data-qa="ml" data-i="${i}" aria-pressed="${ui.cur === i}">${nb(i)}<span>${md(p[0])}</span></button>`).join('')}</div><div class="mcol">${ui.r.map((r, k) => { const li = leftOf(k); return `<button class="mitem${li != null ? ' set' : ''}" data-qa="mr" data-i="${k}">${li != null ? nb(li) : '<span class="nb e"></span>'}<span>${md(r.t)}</span></button>`; }).join('')}</div></div>`;
    foot = () => check(!full());
    act = (a, el) => { if (st.done) return; const i = +el.dataset.i;
      if (a === 'ml') { ui.cur = i; o.repaint(); }
      else if (a === 'mr') { let l = ui.cur; if (l == null) l = q.pairs.findIndex((p, x) => ui.map[x] == null); if (l < 0) return; const prev = leftOf(i); if (prev != null) delete ui.map[prev]; ui.map[l] = i; const nx = q.pairs.findIndex((p, x) => ui.map[x] == null); ui.cur = nx < 0 ? null : nx; o.repaint(); }
      else if (a === 'check' && full()) fin(q.pairs.filter((p, x) => ui.r[ui.map[x]].i === x).length / q.pairs.length); };
  } else if (q.ty === 'order') {
    let pool; do { pool = shuffle(q.items.map((t, i) => ({ t, i }))); } while (pool.every((x, k) => x.i === k));
    ui = { pool, out: [] };
    body = () => st.done
      ? `<ol class="res num">${q.items.map((t, i) => { const ok = ui.out[i].i === i; return `<li class="${ok ? 'ok' : 'bad'}">${mk(ok ? 'ok' : 'bad')}<span>${md(t)}</span></li>`; }).join('')}</ol>`
      : `<p class="hint">Trykk på leddene i riktig rekkefølge. Trykk på et valgt ledd for å angre.</p>${ui.out.length ? `<ol class="ord">${ui.out.map((x, k) => `<li><button class="oitem" data-qa="oback" data-i="${k}">${md(x.t)}</button></li>`).join('')}</ol>` : ''}<div class="pool">${ui.pool.map((x, k) => `<button class="oitem p" data-qa="opick" data-i="${k}">${md(x.t)}</button>`).join('')}</div>`;
    foot = () => check(ui.pool.length > 0);
    act = (a, el) => { if (st.done) return; const i = +el.dataset.i;
      if (a === 'opick') { ui.out.push(ui.pool.splice(i, 1)[0]); o.repaint(); } else if (a === 'oback') { ui.pool.push(ui.out.splice(i, 1)[0]); o.repaint(); }
      else if (a === 'check' && !ui.pool.length) fin(ui.out.filter((x, k) => x.i === k).length / ui.out.length); };
  } else { // sort
    ui = { items: shuffle(q.items.map(x => ({ t: x[0], c: x[1] }))), i: 0, ans: [], flash: null };
    body = () => { if (st.done) return `<ul class="res">${ui.items.map((x, k) => `<li class="${ui.ans[k] ? 'ok' : 'bad'}">${mk(ui.ans[k] ? 'ok' : 'bad')}<span>${md(x.t)} <em class="note">${esc(q.cats[x.c])}</em></span></li>`).join('')}</ul>`;
      const it = ui.items[ui.i]; return `<p class="hint">${ui.i + 1} av ${ui.items.length}</p><div class="sitem ${ui.flash || ''}" role="status">${md(it.t)}${ui.flash ? `<span class="sres">${ui.flash === 'ok' ? 'Riktig' : 'Hører til: ' + esc(q.cats[it.c])}</span>` : ''}</div><div class="scats n${q.cats.length}">${q.cats.map((c, k) => `<button class="btn ghost" data-qa="cat" data-i="${k}"${ui.flash ? ' disabled' : ''}>${esc(c)}</button>`).join('')}</div>`; };
    act = (a, el) => { if (a !== 'cat' || st.done || ui.flash) return; const ok = +el.dataset.i === ui.items[ui.i].c; ui.ans.push(ok); ui.flash = ok ? 'ok' : 'bad'; o.repaint();
      setTimeout(() => { if (!alive()) return; ui.flash = null; ui.i++; if (ui.i >= ui.items.length) fin(ui.ans.filter(Boolean).length / ui.ans.length); else o.repaint(); }, ok ? 500 : 1400); };
  }
  return { q, st, html: () => head() + body(), foot: () => st.done ? '' : foot(), act: (a, el) => act(a, el) };
}
function fbHTML(q, res, gain, combo) { const c = res.ok ? 'ok' : res.frac > 0 ? 'part' : 'bad';
  return `<div class="fb ${c}" role="status"><p class="fbh">${icon(res.ok ? 'check' : res.frac > 0 ? 'info' : 'x', 20)}<strong>${res.ok ? 'Riktig' : res.frac > 0 ? 'Delvis riktig' : 'Ikke helt'}</strong>${gain ? `<span class="gain">+${gain} XP</span>` : ''}${combo >= 3 ? `<span class="gain">${combo} på rad</span>` : ''}</p><p>${md(q.why || '')}</p></div>`; }

/* ===================== Quiz ===================== */
function playQuiz(cfg) { // cfg: title, items, kind (test|daily|mix|ai), f, again
  const items = cfg.items, P = { i: 0, n: items.length, right: 0, sum: 0, xp: 0, combo: 0, gain: 0, miss: [], qv: null, end: false, bonus: 0, note: '' };
  const ov = { label: cfg.title };
  const load = () => { P.gain = 0; P.qv = makeQ(items[P.i], { onDone: answered, repaint: () => Ov.paint(), alive: () => Ov.cur === ov }); };
  function answered(r) { const q = items[P.i]; P.sum += r.frac; if (r.ok) { P.right++; P.combo++; } else { P.combo = 0; P.miss.push(q); }
    S.stat.combo = Math.max(S.stat.combo, P.combo); P.gain = Math.round(10 * r.frac) + (r.ok ? Math.min(5, P.combo - 1) : 0); P.xp += P.gain; addXP(P.gain); recordQ(q, r); beep(r.ok ? 'ok' : 'bad'); commit();
    Ov.paint(); const nx = $('[data-act="next"]', Ov.el); if (nx) nx.focus({ preventScroll: true }); const fb = $('.fb', Ov.el); if (fb && fb.scrollIntoView) fb.scrollIntoView({ block: 'nearest' }); }
  function finish() { P.end = true; const pct = Math.round(P.sum / P.n * 100);
    if (cfg.kind === 'test') { const k = cfg.f.id + 't', prev = S.done[k]; if (pct >= 70 && !(prev >= 70)) { P.bonus = 50; } if (prev != null && pct > prev) award('dobbel'); S.done[k] = Math.max(prev ?? 0, pct);
      P.note = pct >= 70 ? `Prøven er bestått, og vinduet lyser.` : `Du trenger 70 prosent for å tenne vinduet. Se over rommene, og prøv igjen.`; }
    if (cfg.kind === 'daily' && !S.daily[today()]) { S.daily[today()] = 1; P.bonus = 30; P.note = `Dagens økt er gjort.`; }
    if (P.bonus) { addXP(P.bonus); } P.pct = pct; commit(); beep(pct >= 70 ? 'lvl' : 'bad'); }
  ov.render = () => {
    if (P.end) { const p = P.pct, stars = p === 100 ? 3 : p >= 85 ? 2 : p >= 70 ? 1 : 0;
      return ovTop(`<strong>${esc(cfg.title)}</strong>`) + `<div class="ov-body" tabindex="-1"><div class="col end">
        <p class="bigno">${P.right}<span> av ${P.n}</span></p><h2>${p === 100 ? 'Feilfritt' : p >= 85 ? 'Sterkt' : p >= 70 ? 'Godt jobbet' : 'Ikke helt i mål ennå'}</h2>
        ${cfg.kind === 'test' ? `<p class="stars" aria-label="${stars} av 3 stjerner">${[0, 1, 2].map(i => `<span class="${i < stars ? 'on' : ''}">${icon('star', 30)}</span>`).join('')}</p>` : ''}
        ${P.note ? `<p>${esc(P.note)}</p>` : ''}<p class="xpline">${icon('bolt', 18)} +${P.xp + P.bonus} XP</p>
        ${P.miss.length ? `<h3>Se over disse</h3><ul class="missl">${P.miss.map(q => `<li><strong>${md(q.s ? q.s : q.q)}</strong><span>${md(q.why || '')}</span></li>`).join('')}</ul>` : `<p>Alt satt. Disse spørsmålene kommer sjeldnere tilbake.</p>`}
      </div></div><div class="ov-foot"><button class="btn wide" data-act="close">Ferdig</button>${cfg.again ? `<button class="btn ghost wide" data-act="again">Prøv igjen</button>` : ''}</div>`; }
    const q = items[P.i], qv = P.qv, f = q.f && FL(q.f);
    return ovTop(progBar(P.i + (qv.st.done ? 1 : 0), P.n), `<span class="cnt">${P.i + 1}/${P.n}</span>`) +
      `<div class="ov-body" tabindex="-1"><div class="col">${f && cfg.kind !== 'test' ? `<p class="from">${f.n}. etasje, ${esc(f.t)}</p>` : ''}${qv.html()}${qv.st.done ? fbHTML(q, qv.st.res, P.gain, P.combo) : ''}</div></div>` +
      `<div class="ov-foot">${qv.st.done ? `<button class="btn wide" data-act="next">${P.i + 1 < P.n ? 'Neste' : 'Se resultatet'}</button>` : qv.foot()}</div>`;
  };
  ov.act = (a, el) => { if (a === 'next') { P.i++; if (P.i >= P.n) finish(); else load(); Ov.fresh(); } else if (a === 'again') { Ov.close(true); cfg.again(); } else if (!P.end && P.qv) P.qv.act(a, el); };
  if (!P.n) return toast('Det finnes ingen spørsmål her ennå.', 'info');
  load(); Ov.cur === null ? Ov.open(ov) : Ov.swap(ov);
}
const playTest = f => playQuiz({ title: `Etasjeprøve: ${f.t}`, items: shuffle(f.quiz), kind: 'test', f, again: () => playTest(f) });

/* ===================== Rom (leksjoner) ===================== */
function playRoom(f, r) {
  const cards = r.cards, P = { i: 0, qv: null, xp: 0, gain: 0, combo: 0, end: false, first: S.done[r.id] == null };
  const ov = { label: `${f.n}. etasje: ${r.t}` };
  const cur = () => cards[P.i];
  const say = c => Aud.speak([c.h, c.b, c.ex ? 'I praksis. ' + c.ex : '']);
  const load = () => { const c = cur(); P.gain = 0; P.qv = c.ty ? makeQ(c, { onDone: answered, repaint: () => Ov.paint(), alive: () => Ov.cur === ov }) : null; };
  const autoSay = () => { const c = cur(), at = P.i; if (c.ty || !S.set.auto || !Aud.ok) return; say(c).then(() => { if (Ov.cur === ov && P.i === at && S.set.auto && !P.end) step(); }).catch(() => {}); };
  function answered(res) { const q = cur(), wasNew = !S.q[q.id]; if (res.ok) P.combo++; else P.combo = 0; S.stat.combo = Math.max(S.stat.combo, P.combo); P.gain = Math.round(5 * res.frac); P.xp += P.gain; addXP(P.gain); recordQ(q, res);
    if (q.ty === 'order' && q.items.length === 8 && res.ok && wasNew) award('kotter'); beep(res.ok ? 'ok' : 'bad'); commit(); Ov.paint(); const nx = $('[data-act="next"]', Ov.el); if (nx) nx.focus({ preventScroll: true }); }
  function step() { Aud.stop(); P.i++; if (P.i >= cards.length) { P.end = true; const g = P.first ? 20 : 5; P.xp += g; addXP(g); if (P.first) S.done[r.id] = 1; commit(); beep('lvl'); Ov.fresh(); return; } load(); Ov.fresh(); autoSay(); }
  ov.audio = () => { const b = $('[data-act="say"]', Ov.el); if (!b) return; const on = Aud.st !== 'idle'; b.innerHTML = icon(on ? 'stop' : 'speaker'); b.setAttribute('aria-label', on ? 'Stopp opplesningen' : 'Les opp kortet'); b.classList.toggle('on', on); };
  ov.render = () => {
    if (P.end) { const ri = f.rooms.indexOf(r), nx = f.rooms[ri + 1];
      return ovTop(`<strong>${esc(r.t)}</strong>`) + `<div class="ov-body" tabindex="-1"><div class="col end"><p class="lamp" aria-hidden="true"><i></i></p><h2>${P.first ? 'Et nytt vindu lyser' : 'Rommet er repetert'}</h2><p class="xpline">${icon('bolt', 18)} +${P.xp} XP</p>
        <h3>Dette tar du med deg</h3><ul class="take">${cards.filter(c => c.h).map(c => `<li>${esc(c.h)}</li>`).join('')}</ul></div></div>
        <div class="ov-foot">${nx ? `<button class="btn wide" data-act="nextroom">Neste rom: ${esc(nx.t)}</button>` : `<button class="btn wide" data-act="tocase">Prøv casen: ${esc(f.kase.t)}</button>`}<button class="btn ghost wide" data-act="close">Tilbake til etasjen</button></div>`; }
    const c = cur(), qv = P.qv, last = P.i === cards.length - 1;
    const segs = `<div class="segs" role="progressbar" aria-valuemin="0" aria-valuemax="${cards.length}" aria-valuenow="${P.i + 1}" aria-label="Kort ${P.i + 1} av ${cards.length}">${cards.map((x, i) => `<i class="${i < P.i ? 'on' : i === P.i ? 'cur' : ''}"></i>`).join('')}</div>`;
    const tools = c.ty ? '' : `<button class="ib need-audio${Aud.st !== 'idle' ? ' on' : ''}" data-act="say" aria-label="${Aud.st !== 'idle' ? 'Stopp opplesningen' : 'Les opp kortet'}">${icon(Aud.st !== 'idle' ? 'stop' : 'speaker')}</button><button class="tg need-audio${S.set.auto ? ' on' : ''}" data-act="auto" aria-pressed="${S.set.auto}">Les alt</button>`;
    const body = c.ty ? qv.html() + (qv.st.done ? fbHTML(c, qv.st.res, P.gain, P.combo) : '')
      : `<article class="kort"><h2>${esc(c.h)}</h2><p>${md(c.b)}</p>${c.fig ? modelHTML(c.fig) : ''}${c.ex ? `<div class="praksis"><p class="lbl">I praksis</p><p>${md(c.ex)}</p></div>` : ''}${c.src ? `<p class="kilde">${md(c.src)}</p>` : ''}<p><button class="btn quiet need-ai" data-act="ask">${icon('chat', 18)} Spør veilederen om dette</button></p></article>`;
    const foot = c.ty ? (qv.st.done ? `<button class="btn wide" data-act="next">${last ? 'Fullfør rommet' : 'Videre'}</button>` : qv.foot()) : `<button class="btn wide" data-act="next">${last ? 'Fullfør rommet' : 'Videre'}</button>`;
    return ovTop(segs, tools) + `<div class="ov-body" tabindex="-1"><div class="col">${body}</div></div><div class="ov-foot">${foot}</div>`;
  };
  ov.act = (a, el) => {
    if (a === 'next') return step();
    if (a === 'say') { if (Aud.st !== 'idle') Aud.stop(); else say(cur()).catch(() => {}); return; }
    if (a === 'auto') { S.set.auto = !S.set.auto; save(); el.classList.toggle('on', S.set.auto); el.setAttribute('aria-pressed', S.set.auto); if (S.set.auto) autoSay(); else Aud.stop(); return; }
    if (a === 'ask') { const c = cur(); return openTutor(`${c.h}. ${plain(c.b)}`); }
    if (a === 'nextroom') { const nx = f.rooms[f.rooms.indexOf(r) + 1]; Ov.close(true); return playRoom(f, nx); }
    if (a === 'tocase') { Ov.close(true); return playCase(f.kase, { key: f.id + 'k', f }); }
    if (P.qv) P.qv.act(a, el);
  };
  load(); Ov.open(ov); autoSay();
}
