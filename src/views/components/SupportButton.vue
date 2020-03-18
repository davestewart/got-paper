<template>
  <div class="kofi" v-html="html"></div>
</template>

<script>
export default {
  computed: {
    html () {
      return kofiwidget2.getHTML()
    }
  },

  created () {
    kofiwidget2.init('Buy me a coffee :)', '#29abe0', 'gotpaper');
  }
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
