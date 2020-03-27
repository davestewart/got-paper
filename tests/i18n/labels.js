import locales from '@/i18n/locales'

// labels for After Effects
const labels = locales.all.map(l => l.label)
const last = labels.pop()
console.log(labels.join(', ') + ' & ' + last)

// codes for site map
const codes = locales.all
  .map(l => l.code).sort()
  .filter(l => l.code !== 'en')
console.log(codes.join('\n'))
