const glob = require('glob');
const fs = require('fs');
const groupBy = require('lodash/groupBy');
const map = require('lodash/map');
const compact = require('lodash/compact');

const index = `
import images from './images';
import data from './data.json';
import dataParser from '../dataParser';

export default dataParser(data, images);
`;

glob('*/*.+(png|svg)', (er, files) => {
  const folders = groupBy(compact(files.map((src) => {
    const [folder, filename] = src.split('/');
    if (filename.startsWith('txt')) return null;
    const [name, ext] = filename.split('.');
    return {
      folder,
      filename,
      name,
      ext,
    };
  })), 'folder');
  Promise.all(map(folders, (list, folder) => {
    const loader = list.map(({ name, filename }) => `'${name}': require('./${filename}')`).join(',');
    return Promise.all([
      new Promise((res, rej) => {
        fs.writeFile(`${folder}/index.js`, index, (err) => {
          if (err) rej(err);
          res();
        });
      }),
      new Promise((res, rej) => {
        fs.writeFile(`${folder}/images.js`, `/* eslint-disable */\nexport default {${loader}};`, (err) => {
          if (err) rej(err);
          res();
        });
      })
    ]);
  })).then(process.exit);
});
