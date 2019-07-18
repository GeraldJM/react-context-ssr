const path = require('path');
const NodeExternals = require('webpack-node-externals');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const config = {
  target: 'node',
  externals: [
    NodeExternals()
  ],
  entry: './src/api/index.js',
  output: {
    filename: 'api_bundle.js',
    path: path.resolve(__dirname, 'build')
  }
};

module.exports = merge(baseConfig, config);