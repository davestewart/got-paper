import { isProd } from './utils/env'
import i18n from './i18n'

export const site = {
  url: isProd ? 'https://got-paper.com' : 'http://localhost:3000',
  name: 'Got Paper?',
  title: 'Calculate your actual toilet paper needs',
  shortDescription: 'A cheeky online app to calculate your toilet paper needs during the Coronavirus pandemic',
  description: 'A cheeky desktop, tablet and mobile app to calculate you and your family\'s toilet paper needs during the Coronavirus pandemic',
  hashtags: 'gotpaper,coronavirus'
}

function meta (property, content, hid = true) {
  const data = { property, content }
  if (hid) {
    data.hid = property
    data.name = property
  }
  return data
}

function link (rel, href, data = {}) {
  return { rel, href, ...data }
}

function script (src) {
  return { src }
}

function image (path) {
  return `${site.url}/images/${path.replace(/^\//, '')}`
}

function icon (src) {
  const matches = src.match(/(\d+x\d+).*?\.(\w+)$/)
  const data = { src: `/images/icons/${src}`, sizes: matches[1], type: `image/${matches[2]}` }
  if (src.includes('masked')) {
    data.purpose = 'maskable'
  }
  return data
}

function favicon (type, px) {
  return link(type, `/images/icons/${type}-${px}x${px}.png`, { sizes: `${px}x${px}` })
}

const pwa = {
  manifest: {
    name: site.name,
    short_name: site.name,
    start_url: '/',
    scope: '/',
    display: 'standalone',
    theme_color: '#1660A6',
    background_color: '#1660A6',
    icons: [
      // android icons
      icon('android-chrome-192x192.png'),
      icon('android-chrome-512x512.png'),
      icon('android-chrome-192x192-masked.png'),
      icon('android-chrome-512x512-masked.png')
    ]
  },
  icon: {
    sizes: []
  }
}

export default {
  mode: 'universal',

  // ---------------------------------------------------------------------------------------------------------------------
  // server

  server: {
    port: 3000,
    host: '0.0.0.0'
  },

  netlifyFiles: {
    existingFilesDirectory: './netlify' // The directory where your _headers and _redirects file is located
  },

  pwa,

  env: {
    baseUrl: site.url
  },

  build: {
    transpile: [
      'vue-agile'
    ],

    loaders: {
      vue: {
        compilerOptions: {
          whitespace: 'condense'
        }
      }
    }
  },

  // ---------------------------------------------------------------------------------------------------------------------
  // app

  axios: { baseURL: site.url },

  router: {
    trailingSlashes: false
  },

  // ---------------------------------------------------------------------------------------------------------------------
  // styles

  head: {
    titleTemplate: c => c ? `${c} - Got Paper?` : 'Got Paper? - Calculate your actual toilet paper needs',
    link: [
      // icons
      link('icon', '/favicon.png'),
      link('mask-icon', image('/icons/safari-pinned-tab.svg', { color: '#4DBA87' })),
      ...[180, 152, 120, 76, 60].map(px => favicon('apple-touch-icon', px)),
      ...[256, 32, 16].map(px => favicon('favicon', px)),

      // assets
      link('stylesheet', 'https://use.typekit.net/lvl2shj.css'),
      link('stylesheet', 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css'),
      link('stylesheet', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.1/css/all.min.css'),
      link('stylesheet', 'https://unpkg.com/vue-agile@latest/dist/VueAgile.css'),
    ],

    meta: [
      // google
      meta('name', site.name),
      meta('description', site.description),
      meta('image', image('/social/splash.png')),

      // verification
      meta('google-site-verification', 'wcnVSEcUUMF3HtSUc-NQ2AudFRJbVzf-uw1Yt5JT99w'),
      meta('ahrefs-site-verification', '60595a106a8b0fe484256bc465e16ff2ef5ce50f252951f364d45cacdc9c959b'),

      // twitter
      meta('twitter:image:src', image('/social/splash-twitter.png')),

      // windows
      meta('msapplication-TileImage', image('/icons/msapplication-icon-144x144.png')),
      meta('msapplication-TileColor', '#000000')
    ],

    script: [
      script('https://ko-fi.com/widgets/widget_2.js')
    ]
  },

  meta: {
    ogSiteName: site.name,
    ogTitle: site.title,
    description: site.description,
    ogHost: site.url,
    ogImage: '/images/social/splash-og.png',
    author: 'Dave Stewart',
    twitterCard: 'summary_large_image',
    twitterSite: '@haveyougotpaper',
    theme_color: '#1660A6',
    background_color: '#1660A6',
    mobileAppIOS: true
  },

  // ---------------------------------------------------------------------------------------------------------------------
  // styles

  css: [
    '@/assets/styles/index'
  ],

  styleResources: {
    scss: [
      '@/assets/styles/_variables.scss'
    ]
  },

  // ---------------------------------------------------------------------------------------------------------------------
  // framework

  plugins: [
    '@/plugins/polyfills.client.js',
    '@/plugins/global-components.js',
    '@/plugins/proportional-resize.js',
    '@/plugins/portal-vue.js',
    '@/plugins/i18n/index.js',
  ],

  buildModules: [
    // https://nuxtjs.org/api/configuration-modules
    '@nuxt/typescript-build',
    '@nuxtjs/style-resources',
    '@nuxtjs/netlify-files'
  ],

  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    ['nuxt-i18n', i18n],
    'portal-vue/nuxt'
  ],

  loading: {
    color: '#fff'
  }
}
