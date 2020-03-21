const BASE_URL = 'https://got-paper.com'
const description = 'A cheeky desktop, tablet and mobile app to calculate yours and your family\'s toilet paper needs during the Coronavirus pandemic'

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: c => c ? `${c} - Got Paper?` : 'Got Paper? - Calculate your actual toilet paper needs',
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    meta: [
      {
        hid: 'twitter:image:src',
        name: 'twitter:image:src',
        property: 'twitter:image:src',
        content: `${BASE_URL}/images/social/splash-twitter.png`
      },
      {
        hid: 'sailthru.image.full',
        name: 'sailthru.image.full',
        property: 'sailthru.image.full',
        content: `${BASE_URL}/images/social/splash-whatsapp.png`
      },
      {
        hid: 'sailthru.image.thumb',
        name: 'sailthru.image.thumb',
        property: 'sailthru.image.thumb',
        content: `${BASE_URL}/images/social/splash-whatsapp-small.png`
      }
    ]
  },
  meta: {
    ogSiteName: 'Got Paper?',
    ogTitle: 'Calculate your actual toilet paper needs',
    description,
    ogHost: BASE_URL,
    ogImage: '/images/social/splash-og',
    author: 'Dave Stewart',
    twitterCard: 'summary_large_image',
    twitterSite: '@haveyougotpaper',
    theme_color: '#1660A6',
    background_color: '#1660A6'
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
  axios: {
    baseURL: BASE_URL
  },
  styleResources: {
    scss: [
      '@/assets/styles/_variables.scss'
    ]
  },
  netlifyFiles: {
    existingFilesDirectory: './netlify' // The directory where your _headers and _redirects file is located
  }
}
