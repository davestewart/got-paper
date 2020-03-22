<template>
  <div class="page page__app">
    <LanguageSwitcher />
    <Calculator />
  </div>
</template>

<script lang="ts">
import Calculator from '@/components/calculator/Calculator.vue'
import LanguageSwitcher from "@/components/global/LanguageSwitcher.vue";

import page from '~/plugins/page-plugin'

export default {
  components: {
    Calculator,
    LanguageSwitcher
  },
  extends: page('home')
}
</script>
