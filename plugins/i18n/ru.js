// see http://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html
// https://gist.github.com/zolotyh/49f76d143b6d1a41832b82fd9edc85fc
export function ruChoiceIndex (value, numValues) {
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
