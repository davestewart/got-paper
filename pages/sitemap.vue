<template>
  <div class="page page__siteMap">
    <h1>Site Map</h1>
    <section>
      <h4>The app in your language</h4>
      <TranslationsList :locales="locales"/>
    </section>
    <section>
      <h4>Other pages in English</h4>
      <ul>
        <li v-for="(path, name) in links" :key="name" :class="`link__${name}`">
          <NuxtLink :to="localePath(path)">
            {{ $t(`nav.${name}`) }}
          </NuxtLink>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import page from '@/plugins/page-plugin'
import links from '@/config/links'
import TranslationsList from '@/components/global/TranslationsList'

export default {
  components: {
    TranslationsList,
  },

  extends: page('sitemap'),

  data () {
    return {
      links,
      locales: this.$i18n.locales.map((locale) => {
        return {
          label: locale.label,
          code: locale.code === 'en' ? '' : locale.code,
          flag: locale.flag,
        }
      }),
    }
  }
}
</script>
