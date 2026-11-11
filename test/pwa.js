// Sjekker installerbarhet, frakoblet bruk og sikkerhetskopi: node pwa.js (siden må serveres på APPURL)
const { chromium } = require(process.env.PW || 'playwright'); const fs = require('fs'), path = require('path');
const URL = process.env.APPURL || 'http://localhost:8765/';
(async () => { const b = await chromium.launch(process.env.CHROME ? { executablePath: process.env.CHROME, args: ['--no-sandbox'] } : {});
  const ctx = await b.newContext({ viewport: { width: 390, height: 800 }, deviceScaleFactor: 2, acceptDownloads: true }); const p = await ctx.newPage(); const errs = [];
  p.on('pageerror', e => errs.push(e.message)); p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
  await p.goto(URL); await p.waitForFunction(() => navigator.serviceWorker && navigator.serviceWorker.controller, null, { timeout: 15000 }).catch(() => {});
  const sw = await p.evaluate(async () => { const r = await navigator.serviceWorker.getRegistration(); const ks = await caches.keys(); const c = ks.length ? await (await caches.open(ks[0])).keys() : []; return { reg: !!r, caches: ks, files: c.length }; });
  const man = await (await p.request.get(URL + 'manifest.webmanifest')).json();
  for (const ic of man.icons) { const r = await p.request.get(URL + ic.src); if (!r.ok()) errs.push('mangler ' + ic.src); }
  // alle handlinger på hovedsidene har en mottaker
  const acts = []; for (const h of ['#huset', '#tren', '#caser', '#verktoy', '#profil', '#arkiv', '#tak', '#etasje-3']) { await p.evaluate(h => { location.hash = h; }, h); await p.waitForTimeout(120);
    acts.push(...await p.evaluate(() => [...document.querySelectorAll('#view [data-act]')].map(e => e.dataset.act).filter(a => !(a in ACT)))); }
  // sikkerhetskopi: lagre, nullstill, hent inn
  await p.evaluate(() => { S.xp = 777; S.done.f1r1 = 1; save(); location.hash = '#profil'; }); await p.waitForTimeout(200);
  await p.screenshot({ path: 'pwa-profil.png', fullPage: true });
  const [dl] = await Promise.all([p.waitForEvent('download'), p.click('[data-act="bksave"]')]); const file = path.join(__dirname, 'kopi.json'); await dl.saveAs(file);
  await p.evaluate(() => { S = fresh(); save(); render(false); });
  await p.setInputFiles('#bk-f', file); await p.waitForTimeout(400);
  const restored = await p.evaluate(() => ({ xp: S.xp, r: S.done.f1r1 }));
  // frakoblet: last siden på nytt uten nett
  await ctx.setOffline(true); await p.reload(); await p.waitForTimeout(500);
  const off = await p.evaluate(() => ({ title: document.title, h: !!document.querySelector('#view h1'), font: document.fonts.check('16px "Schibsted Grotesk"'), xp: S.xp }));
  await p.screenshot({ path: 'pwa-offline.png' });
  console.log(JSON.stringify({ sw, man: { name: man.name, icons: man.icons.length }, unhandled: [...new Set(acts)], restored, dlname: dl.suggestedFilename(), off }, null, 1));
  console.log(errs.length ? 'FEIL\n' + errs.join('\n') : 'INGEN FEIL'); await b.close(); })();
