// https://gist.github.com/zolotyh/49f76d143b6d1a41832b82fd9edc85fc
export function ru (value, numValues) {
  // '0 машин | {n} машина | {n} машины | {n} машин'
  let v = Math.abs(value)
  v %= 100
  if (v >= 5 && v <= 20) {
    return 2
  }
  v %= 10
  if (v === 1) {
    return 0
  }
  if (v >= 2 && v <= 4) {
    return 1
  }
  return 2
}

export function sr (value, choicesLength) {
  // '{n} rolni | {n} rolnu | {n} rolne'

  // values
  const v = Math.floor(value)
  const v10 = v % 10
  const v100 = v % 100

  // pattern
  const isNone = v === 0
  const endsIn1 = v10 === 1
  const isFew = v10 >= 2 && v10 <= 4
  const isTeen = v100 > 10 && v100 < 20

  if (isNone) {
    return 0
  }

  if (isTeen) {
    return 0
  }

  if (endsIn1) {
    return 1
  }

  if (isFew) {
    return 2
  }

  return 0
}

/**
 * This plugin mainly provides custom plurals based on these rules:
 *
 * - http://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html
 * - https://developer.mozilla.org/en-US/docs/Mozilla/Localization/Localization_and_Plurals
 *
 * @see https://github.com/nuxt-modules/i18n/pull/605#issuecomment-644309137
 */
export default (context) => {
  return {
    pluralizationRules: {
      ru,
      sr,
      'sr-cyrl': sr,
    }
  }
}
