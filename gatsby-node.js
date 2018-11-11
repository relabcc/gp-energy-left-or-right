const path = require('path');
const merge = require('lodash/merge');
const range = require('lodash/range');
const scenes = require('./src/scenes');
const sections = require('./src/sections');

exports.createPages = ({ boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve) => {
    scenes.forEach((scene, index) => {
      const id = index + 1;
      createPage({
        path: `think/${id}`,
        component: path.resolve('./src/containers/ThinkPage/index.js'),
        context: merge({ id, index }, scene),
      });
    });
    range(9).forEach((index) => {
      const id = index + 1;
      createPage({
        path: `myth/${id}`,
        component: path.resolve('./src/pages/myth.js'),
        context: { id, index },
      });
    });
    sections.forEach((section) => {
      const name = section.toLowerCase();
      createPage({
        path: name,
        component: path.resolve('./src/pages/index.js'),
      });
    });
    resolve();
  })
};
