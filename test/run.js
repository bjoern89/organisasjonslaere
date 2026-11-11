const { chromium } = require(process.env.PW || 'playwright');
const path = require('path');
const URL = (process.env.APPURL || 'http://localhost:8765/');
const errs = [];
const sleep = ms => new Promise(r => setTimeout(r, ms));
const ff = (fam, pkg, w, st) => `@font-face{font-family:"${fam}";font-weight:${w};font-style:${st};src:url(https://fonts.gstatic.com/local/${pkg}/files/${pkg}-latin-${w}-${st}.woff2) format("woff2")}`;
const FONTCSS = [ff('Sofia Sans Extra Condensed', 'sofia-sans-extra-condensed', 600, 'normal'), ff('Sofia Sans Extra Condensed', 'sofia-sans-extra-condensed', 800, 'normal'), ff('Atkinson Hyperlegible Next', 'atkinson-hyperlegible-next', 400, 'normal'), ff('Atkinson Hyperlegible Next', 'atkinson-hyperlegible-next', 600, 'normal'), ff('Atkinson Hyperlegible Next', 'atkinson-hyperlegible-next', 700, 'normal'), ff('Atkinson Hyperlegible Next', 'atkinson-hyperlegible-next', 400, 'italic')].join('\n');

// Driver: trykker seg gjennom hvilken som helst økt til den lukkes
async function drive(page, label, max = 400) {
  for (let i = 0; i < max; i++) {
    const st = await page.evaluate(() => {
      const ov = document.getElementById('ov'); if (!ov || ov.hidden) return 'closed';
      const q = s => [...ov.querySelectorAll(s)].filter(e => !e.disabled && e.offsetParent !== null);
      const click = e => { e.click(); return true; };
      let e;
      if ((e = q('[data-act="next"]')[0])) return click(e) && 'next';
      if ((e = q('[data-act="nextroom"]')[0]) && window.__stopAtEnd) return 'end';
      if ((e = q('[data-qa="pick"]')[0])) return click(e) && 'pick';
      if ((e = q('[data-qa="tf"]')[0])) return click(e) && 'tf';
      if (q('[data-qa="tog"]').length) { const c = q('[data-qa="check"]')[0]; if (c) return click(c) && 'check'; return click(q('[data-qa="tog"]')[0]) && 'tog'; }
      if (q('[data-qa="mr"]').length) { const c = q('[data-qa="check"]')[0]; if (c) return click(c) && 'check'; const free = q('[data-qa="mr"]').find(b => b.querySelector('.nb.e')); return click(free) && 'mr'; }
      if ((e = q('[data-qa="opick"]')[0])) return click(e) && 'opick';
      if (q('[data-qa="oback"]').length && (e = q('[data-qa="check"]')[0])) return click(e) && 'check';
      if ((e = q('[data-qa="cat"]')[0])) return click(e) && 'cat';
      if (ov.querySelector('.sitem')) return 'wait';
      if ((e = q('[data-act="choose"]')[0])) return click(e) && 'choose';
      if ((e = q('[data-act="rate"][data-v="2"]')[0])) return click(e) && 'rate';
      if ((e = q('[data-act="flip"]')[0])) return click(e) && 'flip';
      if ((e = q('[data-act="lsel"]:not(.seen)')[0])) return click(e) && 'lsel';
      if ((e = q('[data-act="lquiz"]')[0])) return click(e) && 'lquiz';
      if ((e = q('[data-act="lensend"]')[0])) return click(e) && 'lensend';
      if ((e = q('[data-act="exshow"]')[0])) return click(e) && 'exshow';
      if ((e = q('[data-act="close"]')[0])) return click(e) && 'close';
      return 'stuck:' + ov.innerText.slice(0, 120);
    });
    if (st === 'closed') return true;
    if (String(st).startsWith('stuck')) { errs.push(label + ' ' + st); await page.evaluate(() => Ov.close()); return false; }
    await sleep(st === 'wait' || st === 'cat' ? 350 : 15);
  }
  errs.push(label + ' gikk ikke i mål'); await page.evaluate(() => { while (Ov.cur) Ov.close(); }); return false;
}

(async () => {
  const browser = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox'] });
  const mk = async (opts = {}) => { const ctx = await browser.newContext({ viewport: { width: 390, height: 800 }, deviceScaleFactor: 2, colorScheme: opts.dark ? 'dark' : 'light', hasTouch: true });
    await ctx.route(/fonts\.googleapis\.com/, r => r.fulfill({ contentType: 'text/css', body: FONTCSS }));
    await ctx.route(/fonts\.gstatic\.com\/local\//, r => r.fulfill({ contentType: 'font/woff2', body: require('fs').readFileSync(__dirname + '/node_modules/@fontsource/' + r.request().url().split('/local/')[1]) }));
    const page = await ctx.newPage(); page.on('pageerror', e => errs.push('PAGEERROR ' + e.message + '\n' + (e.stack || '').split('\n').slice(0, 4).join('\n'))); page.on('console', m => { if (m.type() === 'error' && !/Failed to load resource|net::ERR/.test(m.text())) errs.push('CONSOLE ' + m.text()); });
    if (opts.init) await page.addInitScript(opts.init);
    await page.goto(URL); await sleep(600); return page; };
  const act = (page, a, k) => page.evaluate(([a, k]) => { const el = [...document.querySelectorAll(`#view [data-act="${a}"]`)].find(e => !k || e.dataset.k === k); if (!el) throw new Error('fant ikke ' + a + ' ' + (k || '')); el.click(); }, [a, k]);
  const go = async (page, h) => { await page.evaluate(h => { location.hash = h; }, h); await sleep(120); };

  // ---------- 1: uten plattformfunksjoner ----------
  let page = await mk();
  await page.screenshot({ path: 'shot-home-new.png' });
  // alle rom, caser, prøver og refleksjoner på alle etasjer
  for (let n = 1; n <= 12; n++) {
    await go(page, '#etasje-' + n);
    if (n === 3) await page.screenshot({ path: 'shot-floor.png', fullPage: true });
    for (const k of ['r1', 'r2', 'r3', 'k', 't']) {
      await act(page, 'go', 'f' + n + k);
      if (n === 3 && k === 'r3') { await sleep(100); await page.screenshot({ path: 'shot-lesson.png' }); }
      if (n === 5 && k === 'r2') { for (let j = 0; j < 4; j++) { await page.evaluate(() => document.querySelector('#ov [data-act="next"]').click()); await sleep(30); if (j === 1) { await page.evaluate(() => document.querySelector('#ov [data-qa="pick"]').click()); await sleep(30); } } await sleep(100); await page.screenshot({ path: 'shot-sort.png' }); }
      if (n === 3 && k === 't') { await sleep(60); await page.evaluate(() => document.querySelector('#ov [data-qa="pick"],#ov [data-qa="tf"],#ov [data-qa="mr"],#ov [data-qa="cat"],#ov [data-qa="tog"]').click()); await sleep(100); await page.screenshot({ path: 'shot-quiz.png' }); }
      await drive(page, `f${n}${k}`);
    }
    // refleksjon
    await act(page, 'go', 'f' + n + 'x'); await sleep(40);
    await page.fill('#rf', 'Dette er et testnotat som er langt nok til å kunne lagres i appen.'); await page.click('#ov [data-act="saveref"]'); await page.check('#msd'); await sleep(30);
    await page.evaluate(() => Ov.close());
  }
  const s1 = await page.evaluate(() => ({ xp: S.xp, lit: F.reduce((a, f) => a + lit(f), 0), badges: Object.keys(S.badges), lvl: level().t, tests: F.map(f => S.done[f.id + 't']) }));
  console.log('etter alle etasjer', JSON.stringify(s1));
  await go(page, '#huset'); await sleep(1200); await page.screenshot({ path: 'shot-home-done.png', fullPage: true });
  // Tren
  await go(page, '#tren'); await page.screenshot({ path: 'shot-tren.png', fullPage: true });
  for (const a of ['daily', 'cards', 'mix', 'mixall', 'weak', 'names']) { await act(page, a); await sleep(30); await drive(page, 'tren:' + a); }
  await act(page, 'gallery'); for (let i = 0; i < 12; i++) { await page.evaluate(() => { const ps = document.querySelectorAll('#ov .mp'); ps.forEach(p => p.dispatchEvent(new MouseEvent('click', { bubbles: true }))); const n = document.querySelector('#ov [data-act="mnext"]'); if (n && !n.disabled) n.click(); }); await sleep(20); if (i === 2) await page.screenshot({ path: 'shot-model.png' }); } await page.evaluate(() => Ov.close());
  await act(page, 'examlist'); await page.evaluate(() => document.querySelector('#ov [data-act="exam"]').click()); await sleep(30); await page.fill('#ex', 'Disposisjon: begreper, teori, eksempler, drøfting, konklusjon.'); await page.evaluate(() => document.querySelector('#ov [data-act="exshow"]').click()); await sleep(30);
  await page.evaluate(() => { document.querySelectorAll('#ov [data-in="tick"]').forEach((c, i) => { if (i < 3) c.click(); }); document.querySelector('#ov [data-act="exdone"]').click(); }); await sleep(30); await page.screenshot({ path: 'shot-exam.png' }); await page.evaluate(() => { Ov.close(); Ov.close(); });
  // Caser: briller og simulator
  await go(page, '#caser'); await page.screenshot({ path: 'shot-caser.png', fullPage: true });
  for (const l of ['l1', 'l2', 'l3']) { await act(page, 'lens', l); if (l === 'l1') { await page.evaluate(() => document.querySelector('#ov [data-act="lsel"]').click()); await sleep(40); await page.screenshot({ path: 'shot-lens.png' }); } await drive(page, 'lens:' + l); }
  await act(page, 'sim'); await page.evaluate(() => document.querySelector('#ov [data-act="next"]').click()); await sleep(30); await page.evaluate(() => document.querySelector('#ov [data-act="choose"]').click()); await sleep(60); await page.screenshot({ path: 'shot-sim.png' }); await drive(page, 'sim');
  // Verktøy
  await go(page, '#verktoy');
  for (const t of ['stake', 'force', 'kotter', 'job', 'lens']) { await act(page, 'tool', t); await sleep(40);
    if (t === 'stake') { await page.selectOption('#ov select[data-in="sm"]', '2'); await page.evaluate(() => document.querySelector('#ov [data-act="sadd"]').click()); await sleep(30); await page.screenshot({ path: 'shot-stake.png' }); await page.evaluate(() => document.querySelector('#ov [data-act="sdel"]').click()); }
    if (t === 'force') { await page.selectOption('#ov select[data-in="fs"]', '5'); await page.evaluate(() => document.querySelector('#ov [data-act="fadd"]').click()); await page.fill('#ft', 'Ny plattform'); }
    if (t === 'kotter') { await page.evaluate(() => { document.querySelector('#ov input[name="k0"][value="2"]').click(); document.querySelector('#ov input[name="k3"][value="1"]').click(); }); await page.fill('#kt', 'Sak og arkiv'); }
    if (t === 'job') { await page.evaluate(() => { const r = document.querySelector('#j3'); r.value = 2; r.dispatchEvent(new Event('input', { bubbles: true })); }); await sleep(20); await page.screenshot({ path: 'shot-job.png' }); }
    if (t === 'lens') { await page.fill('#lt', 'Vi skal innføre et nytt bestillingsskjema, og to avdelinger vil ikke gi slipp på e-post.'); await page.fill('#la0', 'Uklart hvem som eier prosessen.'); }
    await page.evaluate(() => document.querySelector('#ov [data-act="tcopy"]').click()); await sleep(60); await page.evaluate(() => { while (Ov.cur) Ov.close(); }); }
  // Profil, arkiv, tak
  await go(page, '#profil'); await sleep(50); await page.screenshot({ path: 'shot-profil.png', fullPage: true });
  await page.evaluate(() => { document.querySelector('input[name="goal"][value="60"]').click(); document.querySelector('input[name="ts"][value="1"]').click(); document.querySelector('#set-sound').click(); document.querySelector('[data-act="copynotes"]').click(); }); await sleep(80); await page.evaluate(() => { while (Ov.cur) Ov.close(); document.querySelector('input[name="ts"][value="0"]').click(); });
  await go(page, '#arkiv'); await page.fill('#ark-q', 'makt'); await sleep(30); await page.selectOption('#ark-f', 'f5'); await sleep(30); await page.screenshot({ path: 'shot-arkiv.png' }); await act(page, 'arktab', 'n'); await act(page, 'cardsf', 'f5'); await drive(page, 'arkiv:cardsf');
  await go(page, '#tak'); await page.screenshot({ path: 'shot-tak.png' });
  const s2 = await page.evaluate(() => ({ xp: S.xp, lvl: level().t, badges: Object.keys(S.badges).length, all: BADGES.map(b => b[0]).filter(b => !S.badges[b]), streak: streak(), stored: !!localStorage.getItem(KEY), size: JSON.stringify(S).length }));
  console.log('slutt økt 1', JSON.stringify(s2));
  // last på nytt: framdriften skal være der
  await page.reload(); await sleep(300); const s3 = await page.evaluate(() => ({ xp: S.xp, lit: F.reduce((a, f) => a + lit(f), 0) })); console.log('etter omlasting', JSON.stringify(s3));
  // nullstill
  await go(page, '#profil'); await page.evaluate(() => { document.querySelector('[data-act="reset1"]').click(); }); await sleep(30); await page.evaluate(() => { document.querySelector('[data-act="reset2"]').click(); }); await sleep(100); console.log('etter nullstilling', await page.evaluate(() => S.xp + ' ' + location.hash));
  await page.context().close();

  // ---------- 2: mørkt tema ----------
  page = await mk({ dark: true }); await page.screenshot({ path: 'shot-dark-home.png' }); await go(page, '#etasje-7'); await page.screenshot({ path: 'shot-dark-floor.png', fullPage: true });
  await act(page, 'go', 'f7r3'); await sleep(80); await page.screenshot({ path: 'shot-dark-lesson.png' }); await page.context().close();

  // ---------- 3: bredt vindu ----------
  { const ctx = await browser.newContext({ viewport: { width: 1280, height: 800 } }); await ctx.route(/fonts\.googleapis\.com/, r => r.fulfill({ contentType: 'text/css', body: FONTCSS })); await ctx.route(/fonts\.gstatic\.com\/local\//, r => r.fulfill({ contentType: 'font/woff2', body: require('fs').readFileSync(__dirname + '/node_modules/@fontsource/' + r.request().url().split('/local/')[1]) })); const p = await ctx.newPage(); p.on('pageerror', e => errs.push('PAGEERROR wide ' + e.message)); await p.goto(URL); await sleep(300); await p.screenshot({ path: 'shot-wide.png' }); await ctx.close(); }

  console.log(errs.length ? 'FEIL:\n' + errs.join('\n') : 'INGEN FEIL');
  await browser.close();
})().catch(e => { console.error('TESTKRASJ', e); process.exit(1); });
