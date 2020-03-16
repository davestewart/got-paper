// webpack aliases are in this file purely for WebStorm support

function resolve(path = '') {
  return require('path').resolve(__dirname, 'src/' + path)
}

module.exports = {
  resolve: {
    alias: {
      // resources
      'assets'      : resolve('../res/assets/'),
      'plugins'     : resolve('plugins/'),

      // views
      'components'  : resolve('views/components/'),
      'pages'       : resolve('views/pages/'),
    }
  }
}
