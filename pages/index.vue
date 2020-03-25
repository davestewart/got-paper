<template>
  <div class="page page__app">
    <Calculator />
  </div>
</template>

<script lang="ts">
import Calculator from '@/components/calculator/Calculator.vue'

import page from '~/plugins/page-plugin'

export default {
  name: 'Index',
  components: {
    Calculator
  },
  extends: page('index')
}
</script>

<style>
.page__app {
  position: relative;
}
</style>
