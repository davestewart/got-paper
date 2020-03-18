export default {
  props: {
    icon: {
      type: String,
      required: true,
    },

    size: {
      type: [Number, String],
      default: 24,
    },

    fill: {
      type: String,
      default: '#000',
    },
  },

  render (h) {
    // svg
    const svg = require('!raw-loader!assets/icons/' + this.icon + '.svg').default
    const html = svg
      .replace(/fill="#.+?"/g, `fill="${this.fill}"`)
      .replace(/<svg.+?>|<\/svg>/g, '')

    // options
    // TODO parse attributes from original SVG
    const attrs = {
      xmlns: 'http://www.w3.org/2000/svg',
      width: this.size,
      height: this.size,
      viewBox: '0 0 24 24',
    }
    const domProps = {
      innerHTML: html,
    }

    // shape
    return h('svg', { attrs, domProps })
  },
}
