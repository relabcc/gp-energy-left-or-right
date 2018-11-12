const path = require('path');
const merge = require('lodash/merge');
const range = require('lodash/range');

const scenes = require('./src/scenes');
const sections = require('./src/sections');
const gatsbyConfig = require('./gatsby-config');

const pf = gatsbyConfig.siteMetadata.prefix.substring(1) + '/';

exports.createPages = ({ boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  const buildPaths = (prefix = '') => {
    scenes.forEach((scene, index) => {
      const id = index + 1;
      createPage({
        path: `${prefix}think/${id}`,
        component: path.resolve('./src/containers/ThinkPage/index.js'),
        context: merge({ id, index }, scene),
      });
    });
    range(9).forEach((index) => {
      const id = index + 1;
      createPage({
        path: `${prefix}myth/${id}`,
        component: path.resolve('./src/pages/myth.js'),
        context: { id, index },
      });
    });
    sections.forEach((section) => {
      const name = section.toLowerCase();
      createPage({
        path: prefix + name,
        component: path.resolve('./src/pages/index.js'),
      });
    });
  } ;
  return new Promise((resolve) => {
    buildPaths();
    buildPaths(pf);
    ['clues', 'myth', 'think'].forEach((page) => {
      createPage({
        path: pf + page,
        component: path.resolve(`./src/pages/${page}.js`),
      });
    });
    createPage({
      path: pf,
      component: path.resolve('./src/pages/index.js'),
    });
    resolve();
  })
};

exports.modifyWebpackConfig = ({ config, stage }) => {
  switch (stage) {
    case 'build-html':
    case 'build-javascript':
      config.merge({
        output: {
          publicPath: gatsbyConfig.siteMetadata.remote + '/'
        }
      });
      break;
    default:
  }

  return config;
};
