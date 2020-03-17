import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/pages/Home.vue'
import Media from '../views/pages/Media.vue'

Vue.use(Router)

function route (path: string, page: string, title: string) {
  const component = require(`../views/pages/${page}.vue`).default
  return { path, component, meta: { title } }
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
    route('/', 'Home', 'Calculate your <em>actual</em> toilet paper needs'),
    route('/tips', 'Tips', 'A few handy tips to keep you sane'),
    route('/about', 'About', 'Why does this site exist?'),
    route('/media', 'Media', 'Some fun stuff to perk you up'),
    route('/contact', 'Contact', 'Send us a message'),
    route('/translations', 'Translations', 'Got Paper where you are?'),
  ],
})

export default router
