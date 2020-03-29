function fetchText (url) {
  const http = require('http')
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let data = ''
      res.on('data', (chunk) => {
        data += chunk
      })
      res.on('end', () => {
        resolve(data)
      })
    }).on('error', (err) => {
      console.log('Error: ' + err.message)
    })
  })
}

function getLocales () {
  const fs = require('fs')
  const Path = require('path')
  const path = Path.resolve(__dirname, '../lang')
  return fs
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
}

function makeData (text) {
  const lines = ('ISO' + text.split('#ISO')[1]).trim().split('\n')
  const fields = lines.shift().split('\t').map(f => f.toLowerCase())
  return lines
    .map((line) => {
      const values = line.split('\t')
      return fields.reduce((data, field, index) => {
        data[field] = values[index]
        return data
      }, {})
    })
    .map((d) => {
      const lang = d.languages.split(',').shift()
      const pair = String(lang || '').split('-')
      const data = {
        iso: d.iso.toLowerCase(),
        lang: pair[0] || '',
        variant: String(pair[1] || '').toLowerCase(),
        country: d.country,
        langs: d.languages,
      }
      return data
    })
}

async function process () {
  const countries = await fetchText('http://download.geonames.org/export/dump/countryInfo.txt').then(makeData)
  const locales = getLocales()

  // get redirects hash
  const redirects = locales.reduce((output, input) => {
    output[input] = []
    return output
  }, {})

  // process countries
  countries.forEach((country) => {
    const { iso, lang, variant } = country
    if (lang in redirects) {
      redirects[lang].push(iso)
    } else if (variant in redirects) {
      redirects[variant].push(iso)
    }
  })

  // results
  Object.keys(redirects).forEach((key) => {
    if (key !== 'en') {
      console.log(`/  /${key}     302  Country=${redirects[key].join(',')}`)
    }
  })
}

process()
