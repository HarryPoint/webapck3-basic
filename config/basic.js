// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsPublicPath: '/',
    productionSourceMap: false
  },
  dev: {
    port: 4242,
    assetsPublicPath: '/'
  }
}
