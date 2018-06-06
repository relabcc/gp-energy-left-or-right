const glob = require('glob');
const fs = require('fs');
const sections = require('./src/sections');

const { length } = sections;

const base = 'src';

const listGen = (list) => list.map((file) => `require('${file.replace(base, '.')}')`).join(`,
      `);
const sectionGen = (section) => section.map((list) => `[
      ${listGen(list)}
    ]`).join(`,
    `);

const template = ({ mobile, desktop }) => `/* eslint-disable */
export default {
  mobile: [
    ${sectionGen(mobile)}
  ],
  desktop: [
    ${sectionGen(desktop)}
  ],
};
`;

const handleGlob = (err, list) => {
  if (err) throw err;
  const assets = list.reduce((res, filename) => {
    if (filename.includes('Sections')) {
      const pos = sections.findIndex((key) => filename.includes(key));
      const type = filename.includes('-mb') ? 'mobile' : 'desktop';
      res[type][pos] = res[type][pos].concat(filename);
    } else {
      res.desktop[0] = res.desktop[0].concat(filename);
      res.mobile[0] = res.desktop[0].concat(filename);
    }
    return res;
  }, {
    mobile: Array(length).fill([]),
    desktop: Array(length).fill([]),
  });

  fs.writeFile(`${base}/preload.js`, template(assets), process.exit);
};

glob(`${base}/**/*.+(jpg|jpeg|gif|png|svg)`, handleGlob);
