import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/pages/Home.vue'
import Media from '../views/pages/Media.vue'

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
    route('/media', Media),
    route('/about', () => import(/* webpackChunkName: "about" */ '../views/pages/About.vue')),
  ],
})

export default router
