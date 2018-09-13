const Fontmin = require('fontmin');
const path = require('path');
const range = require('lodash/range');
const compact = require('lodash/compact');
const map = require('lodash/map');
const { titles, links } = require('../text');

const nums = range(0, 10);

const getPath = (p) => path.resolve(__dirname, p);

const moreText = compact(titles)
  .concat(map(links, 'label'))
  .concat('背景同步');

const fontMinGen = (src, text) => [
  new Fontmin()
    .src(src)
    .use(Fontmin.glyph({ text }))
    .dest(getPath('./minified')),
  new Fontmin()
    .src(src)
    .use(Fontmin.glyph({ text }))
    .use(Fontmin.ttf2woff())
    .dest(getPath('./minified')),
];

module.exports = (charMap) => {
  const fontminBold = fontMinGen(
    getPath('./source/GenJyuuGothicX-Monospace-Bold.ttf'),
    charMap.Bold.concat(nums).concat(moreText).join('')
  );
  const fontminHeavy = fontMinGen(
    getPath('./source/GenJyuuGothicX-Monospace-Heavy.ttf'),
    charMap.Heavy.concat(nums).join('')
  );

  return Promise.all([...fontminBold, ...fontminHeavy].map((task) => new Promise((res, rej) => {
    task.run((err) => {
      if (err) {
        console.error(err);
        rej(err);
      }
      res();
    });
  })));
};
