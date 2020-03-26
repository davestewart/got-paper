import { isProd } from '../utils/env'
import locales from './locales'

const config = {
  locales: isProd
    ? locales.prod
    : locales.only('en sr-cyrl de'),
  defaultLocale: 'en',
  seo: false,
  lazy: true,
  detectBrowserLanguage: false, // Better let Netlify handle that via _redirects.js
  langDir: 'i18n/lang/',
  vueI18n: {
    fallbackLocale: 'en'
  },
  pages: {
    translations: false
  }
}

// eslint-disable-next-line no-console
console.log(`Including translations: ${config.locales.map(locale => locale.code).join(' ')}`)

export default config
