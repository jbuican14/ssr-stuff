const path = require('path');
const merge = require('webpack-merge');
const webpackNodeExternals = require('webpack-node-externals');

const baseConfig = require('./webpack.base.js');

const serverConfig = {
  // Inform webpack that we are building a bundle for
  // nodeJS rather than for the browser
  target: 'node',

  // Tell webpack the root file of our server application
  entry: './src/index.js',

  // Tell webpack where to put the output file
  // that is generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },

  // Tell webpack to not include anything that is inside node_modules
  // So the run time is faster
  externals: [webpackNodeExternals()],
};

module.exports = merge(baseConfig, serverConfig);
