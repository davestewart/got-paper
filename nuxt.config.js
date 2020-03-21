export const site = {
  url: 'https://got-paper.com',
  name: 'Got Paper?',
  title: 'Calculate your actual toilet paper needs',
  shortDescription: 'A cheeky online app to calculate your toilet paper needs during the Coronavirus pandemic',
  description: 'A cheeky desktop, tablet and mobile app to calculate you and your family\'s toilet paper needs during the Coronavirus pandemic',
  hashtags: 'gotpaper,coronavirus'
}

function image (path) {
  return `${site.url}/images/${path.replace(/^\//, '')}`
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
  return { rel, href, ...data}
}

function script (src) {
  return { src }
}

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: c => c ? `${c} - Got Paper?` : 'Got Paper? - Calculate your actual toilet paper needs',
    link: [
      link('icon', '/favicon.ico', { type: 'image/x-icon' }),
      link('icon', image('/social/icon-whatsapp-small.png'), { sizes: '192x192' }),
      link('stylesheet', 'https://use.typekit.net/lvl2shj.css'),
      link('stylesheet', 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css')
    ],
    meta: [
      // google
      meta('name', site.name),
      meta('description', site.description),
      meta('image', image('/social/splash.png')),

      // twitter
      meta('twitter:image:src', image('/social/splash-twitter.png')),

      // linked in
      meta('sailthru.image.full', image('/social/icon-whatsapp.png')),
      meta('sailthru.image.thumb', image('/social/icon-whatsapp-small.png'))
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
    baseURL: site.url
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
