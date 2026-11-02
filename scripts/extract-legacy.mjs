import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

// One-time mechanical extraction from the known, pinned test2 HTML.
const root = process.cwd();
const original = readFileSync(join(root, 'index.html'), 'utf8');
const cssStart = original.indexOf('<style>');
const cssEnd = original.indexOf('</style>', cssStart);
const logicStart = original.indexOf('<script>', original.indexOf('<body>'));
const logicEnd = original.lastIndexOf('</script>');
if (cssStart < 0 || cssEnd < 0 || logicStart < 0 || logicEnd < 0) {
  throw new Error('Legacy HTML sections not found; refusing extraction.');
}
mkdirSync(join(root, 'src/styles'), { recursive: true });
mkdirSync(join(root, 'src/legacy'), { recursive: true });
writeFileSync(join(root, 'src/styles/legacy.css'), original.slice(cssStart + 7, cssEnd));
writeFileSync(join(root, 'src/legacy/engine.js'), original.slice(logicStart + 8, logicEnd));
writeFileSync(join(root, 'index.html'), `<!doctype html>
<html lang="ru">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
  <meta name="theme-color" content="#f5f4f0" />
  <link rel="preconnect" href="https://drive.google.com" crossorigin />
  <link rel="preconnect" href="https://lh3.googleusercontent.com" crossorigin />
  <title>STYLE OS — Персональный гардероб</title>
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/src/main.jsx"></script>
</body>
</html>
`);
console.log('Extracted existing styles and controller with no logic modifications.');
