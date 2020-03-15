import Vue from 'vue'
import router from './router'
import store from './store'

// global
import './registerServiceWorker'
import 'assets/styles/index.scss'

// local
import App from './views/App.vue'
import './views/ui'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
