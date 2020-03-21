export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: c => c ? `${c} - Got Paper ` : 'Got Paper - Calculate your actual toilet paper needs',
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/styles/index'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/polyfills.client.js',
    '@/plugins/global-components.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/style-resources',
    '@nuxtjs/netlify-files'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  styleResources: {
    scss: [
      '@/assets/styles/_variables.scss'
    ]
  },
  netlifyFiles: {
    existingFilesDirectory: './netlify', // The directory where your _headers and _redirects file is located
  }
}
