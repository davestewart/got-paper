<template>
  <ul class="translations__list">
    <li v-for="locale in locales" :key="locale.code">
      <img :src="locale.flag" :alt="`${locale.label} flag`">
      <nuxt-link v-if="link" :to="`/${locale.code === 'en' ? '' : locale.code}`">{{ locale.label }}</nuxt-link>
      <span v-else>{{ locale.label }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    locales: {
      type: Array,
      required: true
    },
    link: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss">
.translations__list {
  padding: 0 0 0 1.5rem;
  li {
    list-style: none;
    > * {
      vertical-align: middle;
    }
  }

  img {
    height: 14px;
    margin-right: .5em;
  }
}
</style>
