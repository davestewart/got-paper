export function srChoiceIndex (value, choicesLength) {
  // '0 rolni | {n} rolnu | {n} rolne'

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
