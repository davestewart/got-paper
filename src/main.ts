import Vue from 'vue'
import smoothscroll from 'smoothscroll-polyfill'

// app
import router from './router'
import store from './store'

// global
import './registerServiceWorker'
import 'assets/styles/index.scss'


// kick off the polyfill!
// local
import App from './views/App.vue'
import './views/ui'

Vue.config.productionTip = false
smoothscroll.polyfill()

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
