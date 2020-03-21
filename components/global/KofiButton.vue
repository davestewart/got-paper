<template>
  <div class="kofi" v-html="html" />
</template>

<script>
const colors = {
  blue: '#019cde',
  grey: '#4b798d',
  red: '#ff5f5f',
  green: '#46b798',
  black: '#323b43'
}

export default {
  data () {
    return {
      html: ''
    }
  },
  beforeMount () {
    const text = 'Or if you fancy, you can buy me a coffee!'
    const page = 'gotpaper'
    const color = colors.red
    kofiwidget2.init(text, color, page)
    this.html = kofiwidget2.getHTML()
  }
}
</script>

<style lang="scss">
.kofi {
  padding: 10px 0 60px;
  text-align: center;

  @media only screen and (min-width: 600px) {
    .btn-container {
      zoom: 130%;
    }
  }
}
</style>
