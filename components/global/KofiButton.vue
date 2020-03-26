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

  watch: {
    '$i18n.locale': 'update'
  },

  beforeMount () {
    this.update()
  },

  methods: {
    update () {
      const widget = window.kofiwidget2
      const text = this.$t('prompts.donate')
      const page = 'gotpaper'
      const color = colors.red
      widget.init(text, color, page)
      this.html = widget.getHTML()
    }
  }
}
</script>

<style lang="scss">
.kofi {
  padding: 40px 0;
  text-align: center;

  @media only screen and (min-width: 600px) {
    .btn-container {
      zoom: 130%;
    }
  }
}
</style>
