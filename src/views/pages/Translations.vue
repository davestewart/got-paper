<template>
  <div class="translations">
    <h1>Translations</h1>
    <section>
      <p>Currently looking for translations. Can you help!?</p>
      <p>You will need:</p>
      <ul>
        <li>A <strong>Gmail account</strong> to access the document</li>
        <li>To be a <strong>native or expert speaker</strong> with a good level of English</li>
      </ul>
    </section>

    <section>
      <h4>Needed</h4>
      <p>If you can help with these, click the link to email:</p>
      <ul>
        <li v-for="language in wanted"><a :href="`mailto:haveyougotpaper@gmail.com?subject=I can do the ${language} translation`">{{ language }}</a></li>
      </ul>
      <p>I'll then mail you a sharing link to the document and we can go from there.</p>
    </section>

    <section>
      <h4>Complete</h4>
      <p>These translations are done or being done:</p>
      <ul>
        <li v-for="language in done">{{ language }}</li>
      </ul>
    </section>

  </div>
</template>

<script>
export default {
  data () {
    return {
      done: [
        'German',
        'French',
        'Swedish',
        'Spanish',
        'Czech',
        'Chinese (Traditional)',
      ],
      wanted: [
        'Chinese (Mandarin)',
        'Romanian',
        'Russian',
        'Polish',
        'Dutch',
      ],
    }
  },
}
</script>

<style>
.translations section {
  margin: 0 0 2.5rem;
}
</style>
