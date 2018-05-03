const glob = require('glob');
const fs = require('fs');
const groupBy = require('lodash/groupBy');
const forEach = require('lodash/forEach');
const compact = require('lodash/compact');

const index = `
import { createElement } from 'react';

import images from './images';
import data from './data.json';
import dataParser from '../dataParser';

export default (props) => createElement(dataParser(data, images), props);
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
  forEach(folders, (list, folder) => {
    const loader = list.map(({ name, filename }) => `'${name}': require('./${filename}')`).join(',');
    fs.writeFile(`${folder}/index.js`, index, () => {});
    fs.writeFile(`${folder}/images.js`, `/* eslint-disable */\nexport default {${loader}};`, (err) => {
      if (err) console.error(err);
      process.exit(0);
    });
  });
});
