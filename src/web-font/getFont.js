const glob = require('glob');
const fs = require('fs');
const merge = require('lodash/merge');
const fromPairs = require('lodash/fromPairs');

const fontMin = require('./fontMin');

const textParser = (txt) => {
  const re = /txt\|([^[]+)\[([^\]]+)/g;
  const res = re.exec(txt);
  const [, text, props] = res;
  const { fontWeight } = fromPairs(props.split(',').map((p) => p.split(':')));
  return merge({ fontWeight: 700 }, {
    text,
    fontWeight,
  });
};

const handleRead = (path) => new Promise((res, rej) => {
  fs.readFile(path, (err, data) => {
    if (err) rej(err);
    res(JSON.parse(data));
  });
});

const handleLayer = (all, { name, layername }) => {
  if (layername.startsWith('txt')) {
    const { text, fontWeight } = textParser(layername);
    all[fontWeight].push(text);
  }
  return all;
};

const handleFiles = (files) => files.reduce((all, { layers }) => layers.reduce(handleLayer, all), {
  700: [],
  900: [],
});

glob('../ai-canvas/*/data.json', (er, files) => {
  Promise.all(files.map(handleRead))
    .then(handleFiles)
    .then(fontMin)
    .then(process.exit)
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
});
