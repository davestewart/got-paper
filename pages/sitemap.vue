<template>
  <div class="page page__siteMap">
    <h1>Site Map</h1>
    <section>
      <h4>The App in your language</h4>
      <ul>
        <li v-for="locale in locales" :key="locale.code">
          <nuxt-link :to="`/${locale.code}`">{{ locale.label }}</nuxt-link>
        </li>
      </ul>
    </section>
    <section>
      <h4>Other pages in English</h4>
      <ul>
        <li v-for="page in pages" :key="page.path">
          <nuxt-link :to="page.path">{{ page.label }}</nuxt-link>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import page from '@/plugins/page-plugin'

function link (path, label) {
  return { label, path }
}

export default {
  extends: page('sitemap'),
  data () {
    return {
      locales: this.$i18n.locales.map((locale) => {
        return {
          label: locale.label,
          code: locale.code === 'en' ? '' : locale.code
        }
      }),
      pages: [
        link('/about', 'About'),
        link('/press', 'Press'),
        link('/contact', 'Contact'),
        link('/translations', 'Translations'),
        link('/sitemap', 'Site Map'),
      ]
    }
  }
}
</script>
