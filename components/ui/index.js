import Vue from 'vue'
import UiIcon from './UiIcon'
import UiNumber from './UiNumber.vue'
import UiAlert from './UiAlert.vue'
import UiOutput from './UiOutput.vue'
import UiIconButton from './UiIconButton.vue'
import UiContainer from './UiContainer.vue'

export default () => {
  Vue.component('UiIcon', UiIcon)
  Vue.component('UiNumber', UiNumber)
  Vue.component('UiAlert', UiAlert)
  Vue.component('UiOutput', UiOutput)
  Vue.component('UiIconButton', UiIconButton)
  Vue.component('UiContainer', UiContainer)
}
