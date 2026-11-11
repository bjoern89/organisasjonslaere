// Lager PNG-ikonene fra src/icon.svg (krever Playwright): node icons.js
const { chromium } = require(process.env.PW || 'playwright'); const fs = require('fs'), path = require('path');
(async () => { const b = await chromium.launch(process.env.CHROME ? { executablePath: process.env.CHROME, args: ['--no-sandbox'] } : {}); const svg = fs.readFileSync(path.join(__dirname, 'src/icon.svg'), 'utf8');
  for (const [name, size] of [['icon-192.png', 192], ['icon-512.png', 512], ['icon-maskable-512.png', 512], ['apple-touch-icon.png', 180]]) {
    const p = await b.newPage({ viewport: { width: size, height: size } });
    await p.setContent(`<style>html,body{margin:0}svg{display:block;width:${size}px;height:${size}px}</style>${svg}`);
    fs.mkdirSync(path.join(__dirname, 'site/icons'), { recursive: true }); await p.screenshot({ path: path.join(__dirname, 'site/icons', name) }); await p.close(); }
  await b.close(); console.log('ikoner laget'); })();
