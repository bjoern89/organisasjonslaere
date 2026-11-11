const fs = require('fs'); const vm = require('vm');
const src = ['floors-a','floors-b','floors-c','floors-d','data-extra'].map(f => fs.readFileSync(__dirname + '/src/' + f + '.js','utf8')).join('\n') +
  '\n;globalThis.__D = {F, G, WHO, MODELS, LENS, SIM, EXAM, LEVELS, BADGES, ZONES};';
vm.runInThisContext(src);
const {F, G, WHO, MODELS, LENS, SIM, EXAM, BADGES} = globalThis.__D;
let err = 0, words = 0; const E = m => { err++; console.log('ERR', m); };
const wc = s => { if (typeof s === 'string') words += s.split(/\s+/).length; };
function checkQ(q, where) {
  if (!q.why) E(where + ' mangler why');
  wc(q.q); wc(q.why);
  if (q.ty === 'mc' || q.ty === 'gap') { if (!Array.isArray(q.a) || q.a.length < 3) E(where + ' a'); if (q.ty === 'gap' && !q.q.includes('___')) E(where + ' gap uten ___'); if (new Set(q.a).size !== q.a.length) E(where + ' dupl'); q.a.forEach(wc); }
  else if (q.ty === 'tf') { if (typeof q.sant !== 'boolean') E(where + ' sant'); }
  else if (q.ty === 'multi') { if (!q.ok || !q.no || !q.ok.length || !q.no.length) E(where + ' multi'); }
  else if (q.ty === 'match') { if (!q.pairs || q.pairs.length < 3) E(where + ' pairs'); if (new Set(q.pairs.map(p => p[1])).size !== q.pairs.length) E(where + ' dupl høyre'); }
  else if (q.ty === 'order') { if (!q.items || q.items.length < 3) E(where + ' order'); }
  else if (q.ty === 'sort') { if (!q.cats || !q.items) E(where + ' sort'); q.items.forEach(i => { if (!(i[1] >= 0 && i[1] < q.cats.length)) E(where + ' sort cat ' + i[0]); }); q.cats.forEach((c, ci) => { if (!q.items.some(i => i[1] === ci)) E(where + ' tom kategori ' + c); }); }
  else E(where + ' ukjent type ' + q.ty);
}
if (F.length !== 12) E('antall etasjer ' + F.length);
F.forEach((f, i) => {
  if (f.n !== i + 1 || f.id !== 'f' + (i + 1)) E('id ' + f.id);
  ['t','k','intro','refl','mission'].forEach(k => { if (!f[k]) E(f.id + ' mangler ' + k); wc(f[k]); });
  if (f.rooms.length !== 3) E(f.id + ' rom');
  f.rooms.forEach(r => { r.cards.forEach((c, ci) => { if (c.h) { if (!c.b) E(r.id + ' b'); wc(c.b); wc(c.ex); wc(c.src); if (c.fig && !MODELS[c.fig]) E(r.id + ' fig ' + c.fig); } else checkQ(c, r.id + 'c' + ci); }); });
  f.quiz.forEach((q, qi) => checkQ(q, f.id + 'q' + qi));
  const k = f.kase; if (!k || k.steps.length !== 3 || k.out.length !== 3) E(f.id + ' kase');
  wc(k.intro); k.steps.forEach((s, si) => { wc(s.s); wc(s.th); if (s.opts.length !== 3) E(f.id + ' opts'); if (!s.opts.some(o => o[1] === 2)) E(f.id + ' steg ' + si + ' uten 2p'); s.opts.forEach(o => { wc(o[0]); wc(o[2]); }); });
  console.log(f.id, f.t.padEnd(28), 'kort', f.rooms.map(r => r.cards.filter(c => c.h).length + '+' + r.cards.filter(c => c.ty).length).join(' '), 'quiz', f.quiz.length, 'typer', [...new Set(f.quiz.map(q => q.ty))].join(','));
});
const fids = new Set(F.map(f => f.id));
G.forEach(g => { if (!fids.has(g[0])) E('G etasje ' + g[1]); if (g[2].toLowerCase().includes(g[1].toLowerCase())) console.log('  (def inneholder begrep)', g[1]); wc(g[2]); });
if (new Set(G.map(g => g[1])).size !== G.length) E('G dupl');
WHO.forEach(w => { if (!fids.has(w[2])) E('WHO ' + w[0]); });
if (new Set(WHO.map(w => w[0])).size !== WHO.length) E('WHO dupl');
Object.entries(MODELS).forEach(([id, m]) => { if (!fids.has(m.f)) E('model ' + id); m.parts.forEach(p => wc(p[2])); });
LENS.forEach(l => { if (l.lenses.length !== 4 || l.sort.length !== 6) E('lens ' + l.id); l.lenses.forEach(x => { wc(x.se); wc(x.grep); wc(x.blind); }); });
SIM.rounds.forEach((r, i) => { if (r.opts.length !== 3 || r.opts.filter(o => o.ok).length !== 1) E('sim ' + i); });
EXAM.forEach(e => { if (e.must.length !== 5) E('exam'); });
// sim: beste og verste løp
const run = pick => { const m = {...SIM.start}; let stopped = false; SIM.rounds.forEach((r, i) => { if (stopped) return; const o = r.opts[pick(r, i)]; for (const k in o.fx) m[k] += o.fx[k]; m.f = Math.max(0, Math.min(100, m.f)); m.o = Math.max(0, Math.min(100, m.o)); m.l = Math.max(0, Math.min(100, m.l)); if (m.l <= 15) stopped = true; }); return {...m, stopped, g: Math.round(m.f * m.o / 100)}; };
console.log('sim best', run(() => 0), 'fast', run(() => 1), 'worst', run(() => 2));
console.log('begreper', G.length, 'navn', WHO.length, 'modeller', Object.keys(MODELS).length, 'merker', BADGES.length, 'ca. ord', words, 'feil', err);
