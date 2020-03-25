<template>
  <div class="page page__translations">
    <h1>Translations</h1>
    <section>
      <p>Currently looking for translations. Can you help!?</p>
      <p>You will need:</p>
      <ul>
        <li>A <strong>Gmail account</strong> to access the document</li>
        <li>To be a <strong>native or expert speaker</strong> with a good level of English</li>
        <li>To have a <strong>sense of humour</strong>!</li>
      </ul>
    </section>

    <section>
      <h4>Wanted</h4>
      <p>If you can help with these, click the link to email:</p>
      <ul>
        <li v-for="language in wanted" :key="language">
          <a :href="mailTo(`I can do the ${language} translation`)">{{ language }}</a>
        </li>
        <li>
          <a :href="mailTo('I can translate...')">Any other language</a>
        </li>
      </ul>
      <p>I'll then mail you a sharing link to the document and we can go from there.</p>
    </section>

    <section>
      <h4>Complete</h4>
      <p>These translations are done or being done:</p>
      <ul>
        <li v-for="language in done" :key="language">
          {{ language }}
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import page from '@/plugins/page-plugin'

export default {
  extends: page('translations'),
  data () {
    return {
      done: [
        'German',
        'Italian',
        'French',
        'Swedish',
        'Spanish',
        'Russian',
        'Serbian',
        'Indonesian',
        'Czech',
        'Chinese (Traditional)'
      ],
      wanted: [
        'Chinese (Mandarin)',
        'Romanian',
        'Polish'
      ]
    }
  },

  methods: {
    mailTo (subject) {
      return `mailto:haveyougotpaper@gmail.com?subject=${subject}`
    }
  }
}
</script>
