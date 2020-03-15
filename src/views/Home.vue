<template>
  <div class="home">
    <Calculator/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Calculator from '@/components/Calculator.vue'

export default Vue.extend({
  components: {
    Calculator,
  },
})
</script>

<style>
</style>
