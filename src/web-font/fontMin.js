const Fontmin = require('fontmin');
const range = require('lodash/range');
const compact = require('lodash/compact');
const map = require('lodash/map');
const { titles, links } = require('../text');

const nums = range(0, 10);

const moreText = compact(titles)
  .concat(map(links, 'label'))
  .concat('背景同步');

const fontMinGen = (src, text) => [
  new Fontmin()
    .src(src)
    .use(Fontmin.glyph({ text }))
    .dest('./minified'),
  new Fontmin()
    .src(src)
    .use(Fontmin.glyph({ text }))
    .use(Fontmin.ttf2woff())
    .dest('./minified'),
];

module.exports = (charMap) => {
  const fontminBold = fontMinGen(
    './source/GenJyuuGothicX-Monospace-Bold.ttf',
    charMap.Bold.concat(nums).concat(moreText).join('')
  );
  const fontminHeavy = fontMinGen(
    './source/GenJyuuGothicX-Monospace-Heavy.ttf',
    charMap.Heavy.concat(nums).join('')
  );

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
