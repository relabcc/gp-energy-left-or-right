const glob = require('glob');
const fs = require('fs');

const rules = [
  {
    match: /viewBox="0 0 (\d+(\.\d+)?) (\d+(\.\d+)?)"/g,
    replacer: (match, w, a, h) => {
      const width = parseFloat(w);
      const height = parseFloat(h);
      return `${match} width="${width}" height="${height}"`;
    },
  },
  {
    match: /(<title>)([^<]+)(<\/title>)/g,
    replacer: '',
  }
];

const transfromText = (src) => new Promise((res, rej) => {
  fs.readFile(src, (readErr, data) => {
    if (readErr) rej(readErr);
    const svgCode = data.toString();
    fs.writeFile(src, rules.reduce((code, rule) => code.replace(rule.match, rule.replacer), svgCode), (writeErr) => {
      if (writeErr) rej(writeErr);
      res();
    });
  });
});

const handleGlob = (err, list) => {
  Promise.all(list.map(transfromText)).then(process.exit);
};

glob('./src/**/*.svg', handleGlob);
