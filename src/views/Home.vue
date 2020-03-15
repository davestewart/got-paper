<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/images/logo.svg">
    <HelloWorld/>
    <Calculator/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'
import Calculator from '@/components/Calculator.vue'

export default Vue.extend({
  name: 'home',
  components: {
    Calculator,
    HelloWorld,
  },
})
</script>
