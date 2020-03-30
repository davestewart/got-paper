const fs = require('fs')
const Path = require('path')
const path = Path.resolve(__dirname, '../lang')
fs
  .readdirSync(path, (err, files) => {
    if (err) {
      console.error(err)
      return []
    }
    return files
  })
  .map(file => file.replace('.js', ''))
  .reduce((locales, name) => {
    // throw away variant i.e. latn / cyrl
    name = name.replace(/-\w+$/, '')
    if (!locales.includes(name)) {
      locales.push(name)
    }
    return locales
  }, [])
  .filter(key => !['en', 'xx'].includes(key))
  .map((key) => {
    console.log(`/  /${key}/     302  Language=${key}`)
  })
