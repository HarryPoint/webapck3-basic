const path = require('path');
const webpack = require('webpack');
const config = require('./basic');

module.exports = {
  entry: {
    app: './src/index.js'
    /*vendor: [
      // 填写公用模块名称（第三方包 如：'lodash'）
    ]*/
  },
  output: {
    filename: process.env.NODE_ENV === 'production'? '[name].[chunkhash].js' : '[name].[chunk].js',
    chunkFilename: '[name].bundle.js',
    path: config.build.assetsRoot,
    publicPath: process.env.NODE_ENV === 'production'? config.build.assetsPublicPath : config.dev.assetsPublicPath
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    }, {
      test: /\.(png|svg|jpg|gif)$/,
      use: [
        'file-loader'
      ]
    }, {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: [
        'file-loader'
      ]
    }, {
      test: /\.(csv|tsv)$/,
      use: [
        'csv-loader'
      ]
    }, {
      test: /\.xml$/,
      use: [
        'xml-loader'
      ]
    }]
  }
};