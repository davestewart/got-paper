const webpackConfig = require('./webpack.config')

/**
 * Export config
 */
module.exports = {

  configureWebpack: (config) => {
    // add cache-busting
    config.output.filename = '[name].[hash].js'

    // add scss to extensions
    config.resolve.extensions.push('.scss')

    // add local webpack aliases
    const alias = webpackConfig.resolve.alias
    Object.keys(alias)
      .forEach(key => {
        config.resolve.alias[key] = alias[key]
      })

    // fix source maps
    if (process.env.NODE_ENV === 'development') {
      config.devtool = 'eval-source-map'
      config.output.devtoolFallbackModuleFilenameTemplate = 'webpack:///[resource-path]?[hash]'
      config.output.devtoolModuleFilenameTemplate = info => {
        const isVue = info.resourcePath.match(/\.vue$/)
        const isScript = info.identifier.match(/type=script/)
        return isVue && !isScript
          ? `webpack-vue:///${info.resourcePath}`
          : `webpack-generated:///${info.resourcePath}?${info.hash}`
      }
    }
  },

  // import sass variables automatically
  // @see https://css-tricks.com/how-to-import-a-sass-file-into-every-vue-component-in-an-app/
  // @see https://cli.vuejs.org/config/#css-loaderoptions
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "./res/assets/styles/_variables.scss";`
      }
    }
  }
}
