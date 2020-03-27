import Vue from 'vue'

/**
 * Code forked from https://github.com/MarxJiao/vue-proportion-directive
 */
const proportion = {
  install (Vue) {
    function update (el, binding) {
      const w = el.offsetWidth
      const h = w * binding.value
      el.style.height = h + 'px'
    }

    Vue.directive('proportion', {
      inserted (el, binding) {
        const w = el.offsetWidth
        const h = w * binding.value
        el.style.height = h + 'px'
        el.__resize = () => update(el, binding)
        window.addEventListener('resize', el.__resize)
      },

      componentUpdated (el, binding) {
        update(el, binding)
      },

      unbind (el) {
        window.removeEventListener('resize', el.__resize)
      }
    })
  }
}

Vue.use(proportion)
