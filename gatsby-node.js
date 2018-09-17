const path = require('path');
const merge = require('lodash/merge');
const scenes = require('./src/scenes');

exports.createPages = ({ boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve) => {
    scenes.forEach((scene, index) => {
      const bases = [
        'think',
      ];
      bases.forEach((base) => {
        const id = index + 1;
        createPage({
          path: `${base}/${id}`,
          component: path.resolve('./src/containers/ThinkPage/index.js'),
          context: merge({ id, index }, scene),
        });
      });
    });
    resolve();
  })
};
