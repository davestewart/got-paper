import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Media from './views/Media.vue'

Vue.use(Router)

function route (path: string, component: any, options = {}) {
  return { path, component, ...options }
}

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    route('/', Home),
    // @see https://stackoverflow.com/questions/53092009/router-part-of-pwa-opens-blank-on-device-with-vue
    route('/index.html', Home, { alias: '/' }),
    route('/media', Media),
    route('/about', () => import(/* webpackChunkName: "about" */ './views/About.vue')),
  ],
})

export default router
