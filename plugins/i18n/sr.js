export function srChoiceIndex (choice, choicesLength) {
  // '0 rolni | {n} rolnu | {n} rolne'

  // values
  choice = Math.floor(choice)
  const v10 = choice % 10
  const v100 = choice % 100

  // pattern
  const isNone = choice === 0
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
