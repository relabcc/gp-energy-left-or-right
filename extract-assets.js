const glob = require('glob');
const fs = require('fs');

const base = 'src';

const listGen = (list) => list.map((file) => `require('${file.replace(base, '.')}')`).join(`,
    `);

const template = ({ mobile, desktop }) => `/* eslint-disable */
export default {
  mobile: [
    ${listGen(mobile)}
  ],
  desktop: [
    ${listGen(desktop)}
  ],
};
`;

const handleGlob = (err, list) => {
  if (err) throw err;
  const assets = list.reduce((res, filename) => {
    if (filename.includes('ai-canvas')) {
      if (filename.includes('Intro')) {
        res[filename.includes('Mobile') ? 'mobile' : 'desktop'].push(filename);
      }
    } else {
      res.desktop.push(filename);
      res.mobile.push(filename);
    }
    return res;
  }, {
    mobile: [],
    desktop: [],
  });

  fs.writeFile(`${base}/preload.js`, template(assets), process.exit);
};

glob(`${base}/**/*.+(jpg|jpeg|gif|png|svg)`, handleGlob);
