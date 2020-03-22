<template>
  <div>
    <NuxtLink
      v-for="(locale, index) in otherLocales"
      :key="index"
      :to="switchLocalePath(locale.code)"
    >
      {{ locale.name }}
    </NuxtLink>
  </div>
</template>

<script>
export default {
  computed: {
    otherLocales () {
      return this.$i18n.locales.filter(({ code }) => code !== this.$i18n.locale)
    }
  }
}
</script>
