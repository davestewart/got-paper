import VueI18n from 'nuxt-i18n'

function ruChoiceIndex (choice, choicesLength) {
  // this === VueI18n instance, so the locale property also exists here
  if (this.locale !== 'ru') {
    // proceed to the default implementation
    return getChoiceIndex.apply(this, arguments)
  }

  if (choice === 0) {
    return 0
  }

  const teen = choice > 10 && choice < 20
  const endsWithOne = choice % 10 === 1

  if (!teen && endsWithOne) {
    return 1
  }

  if (!teen && choice % 10 >= 2 && choice % 10 <= 4) {
    return 2
  }

  return (choicesLength < 4) ? 2 : 3
}

const getChoiceIndex = VueI18n.prototype.getChoiceIndex
const choices = {
  ru: ruChoiceIndex,
  sr: ruChoiceIndex,
}

/**
 * @param choice          {number}  a choice index given by the input to $tc: `$tc('path.to.rule', choiceIndex)`
 * @param choicesLength   {number}  an overall amount of available choices
 * @returns               {number}  a final choice index to select plural word by
 **/
VueI18n.prototype.getChoiceIndex = function (choice, choicesLength) {
  const fn = choices[this.locale] || getChoiceIndex
  return fn.call(this, choice, choicesLength)
}
