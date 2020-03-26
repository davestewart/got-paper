import VueI18n from 'vue-i18n'

// custom functions
import { ruChoiceIndex } from './ru'
import { srChoiceIndex } from './sr'

// config
const choices = {
  ru: ruChoiceIndex,
  sr: srChoiceIndex,
  'sr-cyrl': srChoiceIndex,
}

// extend
const getChoiceIndex = VueI18n.prototype.getChoiceIndex

/**
 * @param choice          {number}  a choice index given by the input to $tc: `$tc('path.to.rule', choiceIndex)`
 * @param choicesLength   {number}  an overall amount of available choices
 * @returns               {number}  a final choice index to select plural word by
 **/
VueI18n.prototype.getChoiceIndex = function (choice, choicesLength) {
  const fn = choices[this.locale] || getChoiceIndex
  return fn.call(this, choice, choicesLength)
}
