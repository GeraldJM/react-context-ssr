const path = require('path');
const webpack = require('webpack');
const NodeExternals = require('webpack-node-externals');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const config = {
  target: 'node',
  externals: [
    NodeExternals()
  ],
  entry: './src/server/index.js',
  output: {
    filename: 'server_bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  plugins: [
    new webpack.DefinePlugin({
      isBrowser: false
    })
  ]
};

module.exports = merge(baseConfig, config);