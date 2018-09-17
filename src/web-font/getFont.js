const glob = require('glob');
const fs = require('fs');
const path = require('path');
const svgson = require('svgson');
const get = require('lodash/get');
const set = require('lodash/set');

const fontMin = require('./fontMin');

const variations = [
  'Heavy',
  'Bold',
];

const handleRead = (path) => new Promise((res, rej) => {
  fs.readFile(path, (err, data) => {
    if (err) rej(err);
    svgson(data, {}, res);
  });
});

const findNodeByAttr = (attrName, nodeList) => nodeList.reduce((list, node) => {
  if (get(node, ['attrs', attrName])) {
    return list.concat(node);
  } else if (node.childs) {
    return list.concat(findNodeByAttr(attrName, node.childs));
  }
  return list;
}, []);

const extractText = (nodeList) => nodeList.reduce((list, node) => {
  if (node.text) {
    return list.concat(node.text);
  } else if (node.childs) {
    return list.concat(extractText(node.childs));
  }
  return list;
}, []);

const hanldeText = (fontFamilyNodes) => {
  const fontWeights = fontFamilyNodes.reduce((weights, node) => {
    const weight = variations.find((key) => node.attrs.fontFamily.includes(key));
    if (weight) {
      weights[weight] = weights[weight].concat(extractText(node.childs));
    }
    return weights;
  }, variations.reduce((obj, key) => set(obj, key, []), {}));
  return fontWeights;
};

const handleFiles = (files) => files.reduce((list, file) => list.concat(findNodeByAttr('fontFamily', file.childs)), []);

glob(path.resolve(__dirname, '../containers/Sections/*/*.svg'), (er, files) => {
  console.log(files);
  Promise.all(files.map(handleRead))
    .then(handleFiles)
    .then(hanldeText)
    .then(fontMin)
    .then(process.exit)
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
});
