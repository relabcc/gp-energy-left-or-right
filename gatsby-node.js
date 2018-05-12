exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage === 'develop') config.merge({ output: { publicPath: '/' } });

  return config;
};
