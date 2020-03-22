export default {
  locales: [
    {
      code: 'en',
      iso: 'en-US',
      name: 'English',
      file: 'en.js'
    },
    {
      code: 'de',
      iso: 'de-DE',
      name: 'Deutsch',
      file: 'de.js'
    },
  ],
  defaultLocale: 'en',
  seo: false,
  lazy: true,
  detectBrowserLanguage: false, // Better let Netlify handle that via _redirects.js
  langDir: 'i18n/',
  vueI18n: {
    fallbackLocale: 'en'
  }
}
