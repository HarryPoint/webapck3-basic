const webpack = require('webpack');
const merge = require('webpack-merge');
const config = require('./basic');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: '../dist',
    port: config.dev.port,
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management'
    }),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common' // 指定公共 bundle 的名称。
    })
  ]
});