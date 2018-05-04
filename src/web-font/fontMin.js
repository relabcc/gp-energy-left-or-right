const Fontmin = require('fontmin');
const nums = '0123456789';

const fontMinGen = (src, text) => [
  new Fontmin()
    .src(src)
    .use(Fontmin.glyph({ text: text + nums }))
    .dest('./minified'),
  new Fontmin()
    .src(src)
    .use(Fontmin.glyph({ text: text + nums }))
    .use(Fontmin.ttf2woff())
    .dest('./minified'),
];

module.exports = (charMap) => {
  const fontminBold = fontMinGen('./source/GenJyuuGothicX-Monospace-Bold.ttf', charMap[700].join(''));
  const fontminHeavy = fontMinGen('./source/GenJyuuGothicX-Monospace-Heavy.ttf', charMap[900].join(''));

  return Promise.all([...fontminBold, ...fontminHeavy].map((task) => new Promise((res, rej) => {
    task.run((err, files) => {
      if (err) {
        console.error(err);
        rej(err);
      }
      res();
    });
  })));
};
