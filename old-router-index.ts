import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home.vue'
import Media from './pages/media.vue'

Vue.use(Router)

function route (path: string, page: string, title: string = '') {
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
    route('/home', 'Home', 'Peace of mind in scary times'),
    route('/', 'App', 'Calculate your <em>actual</em> toilet paper needs'),
    // route('/tips', 'Tips', 'A few handy tips to keep you sane'),
    // route('/media', 'Media', 'Some fun stuff to perk you up'),
    route('/about', 'About', 'Why does this site exist?'),
    route('/contact', 'Contact', 'Send us a message'),
    route('/press', 'Press', 'News, comments and social coverage'),
    route('/translations', 'Translations', 'Got Paper where you are?'),
    route('/privacy', 'Privacy', 'We only care about your poop and pee'),
    route('*', '404', 'This page is lost!'),
  ],
})

export default router
