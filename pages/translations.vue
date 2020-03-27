<template>
  <div class="page page__translations">
    <h1>Translations</h1>

    <section>
      <h4>Complete</h4>
      <p>You can currently use the site in these languages:</p>
      <ul class="translations__list">
        <li v-for="locale in done" :key="locale.code">
          <img :src="locale.flag" :alt="`${label} flag`">
          <nuxt-link :to="`/${locale.code === 'en' ? '' : locale.code}`">{{ locale.label }}</nuxt-link>
        </li>
      </ul>

      <template v-if="temp && temp.length">
        <p>These languages are being worked on:</p>
        <ul class="translations__list">
          <li v-for="locale in temp" :key="locale.code">
            <img :src="locale.flag" :alt="`${label} flag`">
            {{ locale.label }}
          </li>
        </ul>
      </template>
    </section>

    <section>
      <h4>Further translations</h4>
      <p>I'd love to add more translations!</p>
      <p>If you think you can help, you will need:</p>
      <ul>
        <li>A <strong>Gmail account</strong> to access the a shared translation spreadsheet</li>
        <li>To be a <strong>native or expert speaker</strong> with a good level of English</li>
        <li>To have a <strong>sense of humour</strong>!</li>
      </ul>
      <p>Click <a :href="mailTo('I can translate...')">here</a> to get in contact.</p>
      <p>Thanks!</p>
    </section>
  </div>
</template>

<script>
import page from '@/plugins/page-plugin'
import locales from '@/i18n/locales'

export default {
  extends: page('translations'),
  data () {
    return {
      done: this.$i18n.locales,
      temp: locales.temp,
    }
  },

  methods: {
    mailTo (subject) {
      return `mailto:haveyougotpaper@gmail.com?subject=${subject}`
    }
  }
}
</script>

<style lang="scss">
.translations {
  &__list {
    padding: 0 0 0 1.5rem;
    li {
      list-style: none;
    }
    img {
      height: 14px;
      margin-right: .5em;
    }
  }
}
</style>
