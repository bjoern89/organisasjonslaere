const { chromium } = require(process.env.PW || 'playwright'); const path = require('path');
(async () => { const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox'] }); const p = await b.newPage(); const errs = []; p.on('pageerror', e => errs.push(e.message));
  await p.route(/fonts\./, r => r.abort()); await p.goto((process.env.APPURL || 'http://localhost:8765/')); await new Promise(r => setTimeout(r, 300));
  const out = await p.evaluate(() => { const R = {}, t = dayIdx(today()), d = i => idxDay(t - i);
    // rekke: i dag + to dager før
    S = fresh(); S.days[d(0)] = 40; S.days[d(1)] = 30; S.days[d(2)] = 35; R.streak3 = streak();
    // i dag ikke nådd ennå: rekka fra i går står
    S = fresh(); S.days[d(1)] = 30; S.days[d(2)] = 35; S.days[d(0)] = 5; R.streakYesterday = streak();
    // hull på én dag med avspasering
    S = fresh(); S.days[d(2)] = 30; S.days[d(3)] = 30; S.fr = 1; settle(); R.afterSettle = { streak: streak(), fr: S.fr, frz: Object.keys(S.frz).length };
    // hull på tre dager uten nok avspasering
    S = fresh(); S.days[d(4)] = 30; S.fr = 1; settle(); R.bigGap = { streak: streak(), fr: S.fr };
    // dagsmål endret
    S = fresh(); S.days[d(0)] = 25; S.goal = 20; R.goal20 = streak(); S.goal = 30; R.goal30 = streak();
    // nivå
    R.lv = [0, 99, 100, 2999, 6000, 99999].map(x => level(x).t);
    // repetisjon
    S = fresh(); srs('a', true); srs('a', true); const c1 = { ...S.cards.a }; srs('a', false); R.srs = [c1.b, c1.due - t, S.cards.a.b, S.cards.a.due - t];
    // sammenslåing
    const A = fresh(); A.up = 10; A.xp = 100; A.done = { f1r1: 1, f1t: 60 }; A.days = { x: 10 }; const B = fresh(); B.up = 20; B.xp = 80; B.done = { f1t: 80, f1k: 4 }; B.days = { x: 30 }; const M = mergeState(A, B); R.merge = [M.xp, M.done.f1r1, M.done.f1t, M.done.f1k, M.days.x];
    const C = fresh(); C.up = 50; C.rst = 50; R.mergeReset = mergeState(A, C).xp;
    // dagens økt for ulike stadier
    S = fresh(); R.dailyNew = dailyItems().length; S.done.f1r1 = 1; const di = dailyItems(); R.dailyOneRoom = [di.length, di.every(q => q.q)];
    S.done.f1r2 = 1; S.done.f1r3 = 1; S.done.f2r1 = 1; S.done.f3r1 = 1; S.done.f3r2 = 1; S.done.f3r3 = 1; const d2 = dailyItems(); R.dailyThree = [d2.length, [...new Set(d2.map(q => q.f))].sort().join(',')];
    // alle automatiske begrepsspørsmål og navnespørsmål lar seg lage, uten duplikate alternativer
    R.termQ = GL.every(g => { const q = termQ(g); return q.a.length === 4 && new Set(q.a).size === 4 && !q.s.toLowerCase().includes(g.t.toLowerCase()); });
    R.whoQ = WHO.every(w => { const q = whoQ(w); return q.a.length === 4 && new Set(q.a).size === 4; });
    R.ids = new Set(GL.map(g => g.id)).size === GL.length;
    S = fresh(); saveLocal(); return R; });
  console.log(JSON.stringify(out, null, 1)); console.log(errs.length ? 'FEIL ' + errs.join('\n') : 'INGEN FEIL'); await b.close(); })();
