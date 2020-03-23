process.env.NODE_ENV = 'development';

const webpackConfig = require("../../node_modules/react-scripts/config/webpack.config")("development");

module.exports = on => {
  const options = {
    webpackOptions: webpackConfig
  };

  on("file:preprocessor", options);
};
