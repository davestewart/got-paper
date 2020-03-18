<template>
  <div class="kofi" v-html="html"></div>
</template>

<script>
const colors = {
  blue: '#019cde',
  grey: '#4b798d',
  red: '#ff5f5f',
  green: '#46b798',
  black: '#323b43',
}

export default {
  computed: {
    html () {
      return kofiwidget2.getHTML()
    },
  },

  created () {
    const text = 'Buy me a coffee :)'
    const page = 'gotpaper'
    const color = colors.red
    kofiwidget2.init(text, color, page)
  },
}
</script>

<style lang="scss" scoped>
.kofi {
  text-align: center;
  padding: 20px 0 120px;

  .btn-container {

  }

  a {

  }

  span.kofitext {
    img.kofiimg {

    }
  }
}
</style>
