const fs = require('fs');
const glob = require('glob');

const config = require('./gatsby-config');

const base = 'public';
const { remote } = config.siteMetadata;
const replace = (link) => link.split('/').map((l, i) => i === 0 ? l + remote : l).join('/')

const handleReplace = (match, head, target) => {
  const links = target.split(',');
  return head + links.map(replace).join();
};

const setLink = (src) => new Promise((res) => {
  const html = fs.readFileSync(src).toString();
  const patterns = [
    {
      pattern: /(document,"script",\[)([^\]]+)/,
      replacer: handleReplace,
    },
    {
      pattern: /(<link rel="preload" href=")([^"]+)/g,
      replacer: (match, head, target) => head + replace(target)
    },
  ];
  const replaced = patterns.reduce((h, { pattern, replacer }) => h.replace(pattern, replacer), html);
  fs.writeFile(src, replaced, (err) => {
    if (err) throw err;
    res();
  });
})

const handleGlob = (err, list) => {
  if (err) throw err;
  Promise.all(list.map(setLink));
}

glob(`${base}/**/*.html`, handleGlob);
// glob(`${base}/commons-*.js`, (err, list) => {
//   if (err) throw err;
//   const src = list[0];
//   if (!src) return;
//   const js = fs.readFileSync(src).toString();
//   const replaced = js.replace(/src=([^,]+)window\.webpackManifest[^,]+/, (match, p1) => match.replace(p1, `"${remote}/"+`));
//   fs.writeFileSync(src, replaced);
// });
