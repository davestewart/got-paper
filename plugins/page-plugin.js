export const titles = {
  // not used
  // home: 'Have You Got Paper?',
  media: '',
  tips: '',

  // used
  index: 'Calculate your <em>actual</em> toilet paper needs',
  about: 'Why does this site exist?',
  press: 'News, comments and social coverage',
  contact: 'Send us a message',
  privacy: 'We only care about your poop and pee',
  translations: 'Got Paper where you are?'
}

export default function (key) {
  return {
    head () {
      // index page uses translated site description
      const title = key === 'index'
        ? this.$t('site.subtitle')
        : getTitle(key)
      return {
        title
      }
    }
  }
}

export function getTitle (key, stripHTML = true) {
  const [formattedKey] = key.split('__')
  const title = titles[formattedKey] || ''
  return stripHTML
    ? title.replace(/<(\w+)>|<\/\w+>/g, '')
    : title
}
