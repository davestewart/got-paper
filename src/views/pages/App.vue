<template>
  <div class="page page__app">
    <Calculator/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Calculator from '@/views/components/calculator/Calculator.vue'

export default Vue.extend({
  components: {
    Calculator,
  },
})
</script>

<style>

</style>
