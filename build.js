// Bygger nettsiden til docs/ (GitHub Pages): node build.js
const fs = require('fs'), path = require('path'), crypto = require('crypto');
const src = f => path.join(__dirname, 'src', f), out = path.join(__dirname, 'docs');
const css = fs.readFileSync(src('style.css'), 'utf8');
const js = ['floors-a.js', 'floors-b.js', 'floors-c.js', 'floors-d.js', 'data-extra.js', 'app-core.js', 'models.js', 'app-play.js', 'app-views.js'].map(f => fs.readFileSync(src(f), 'utf8')).join('\n');
if (/<\/script/i.test(js)) throw new Error('script-slutt i JS');
const body = "'use strict';\n" + js.replace("'use strict';\n", '');
const html = fs.readFileSync(src('index.tpl.html'), 'utf8').replace('/*CSS*/', () => css).replace('/*JS*/', () => body);

fs.mkdirSync(path.join(out, 'fonts'), { recursive: true }); fs.mkdirSync(path.join(out, 'icons'), { recursive: true });
fs.writeFileSync(path.join(out, 'index.html'), html);
fs.writeFileSync(path.join(__dirname, 'test', 'app.check.js'), body);
for (const f of fs.readdirSync(path.join(__dirname, 'site', 'fonts'))) fs.copyFileSync(path.join(__dirname, 'site', 'fonts', f), path.join(out, 'fonts', f));
for (const f of fs.readdirSync(path.join(__dirname, 'site', 'icons'))) fs.copyFileSync(path.join(__dirname, 'site', 'icons', f), path.join(out, 'icons', f));
fs.copyFileSync(src('icon.svg'), path.join(out, 'icons', 'icon.svg'));

const manifest = {
  name: 'Fylkeshuset – organisasjonsteori', short_name: 'Fylkeshuset', lang: 'nb', dir: 'ltr',
  description: 'Spillifisert læringsapp i organisasjonsteori med caser fra kommunal og fylkeskommunal digitalisering.',
  id: './', start_url: './', scope: './', display: 'standalone', orientation: 'portrait',
  background_color: '#1C2E49', theme_color: '#1C2E49', categories: ['education'],
  icons: [
    { src: 'icons/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
    { src: 'icons/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
    { src: 'icons/icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    { src: 'icons/icon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any' }
  ],
  shortcuts: [{ name: 'Dagens økt', url: './#tren' }, { name: 'Caser', url: './#caser' }]
};
fs.writeFileSync(path.join(out, 'manifest.webmanifest'), JSON.stringify(manifest, null, 2));

const files = ['./', 'index.html', 'manifest.webmanifest', ...fs.readdirSync(path.join(out, 'fonts')).filter(f => f.endsWith('.woff2')).map(f => 'fonts/' + f), ...fs.readdirSync(path.join(out, 'icons')).map(f => 'icons/' + f)];
const hash = crypto.createHash('sha256').update(html + JSON.stringify(manifest)).digest('hex').slice(0, 10);
fs.writeFileSync(path.join(out, 'sw.js'), fs.readFileSync(src('sw.js'), 'utf8').replace('__V__', hash).replace('__FILES__', JSON.stringify(files)));
fs.writeFileSync(path.join(out, '.nojekyll'), '');
console.log('bygget', (html.length / 1024).toFixed(0) + ' KiB, versjon ' + hash);
