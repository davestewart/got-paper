<template>
  <div class="page page__app">
    <LanguageSwitcher/>
    <Calculator />
  </div>
</template>

<script lang="ts">
import LanguageSwitcher from '@/components/global/LanguageSwitcher.vue'
import Calculator from '@/components/calculator/Calculator.vue'

import page from '~/plugins/page-plugin'

export default {
  name: 'Index',
  components: {
    LanguageSwitcher,
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
