<template>
  <div class="page page__testimonials">
    <section id="press">
      <h1>Press</h1>
      <p>A few things people have written about Got Paper?</p>
      <Press v-for="article in articles" :key="article.link" v-bind="article" />
      <hr>
      <p class="font-italic small">
        If you're a journalist, here's a <a href="https://drive.google.com/drive/folders/1lA8-GC8pBUxrrSKOcnp7OnJ-UPHx-952?usp=sharing" target="_blank">Press Kit</a>.
      </p>
    </section>

    <section id="quotes">
      <h1>Quotes</h1>
      <p>A few things people have said about Got Paper?</p>
      <Quote v-for="quote in quotes" :key="quote.name" v-bind="quote" />
    </section>

    <section id="social">
      <h1>Social</h1>
      <p>A few places to search for Got Paper?</p>
      <Press v-for="article in social" :key="article.title" v-bind="article" />
    </section>
  </div>
</template>

<script>
import Press from '../components/press/Press'
import Quote from '../components/press/Quote'
import page from '@/plugins/page-plugin'

function press (name, title, link, image) {
  return { name, title, image, link }
}

function quote (name, text, source, link) {
  return { name, text, source, link }
}

function mail (name, text) {
  return quote(name, text, 'Mail Online', 'https://www.dailymail.co.uk/sciencetech/article-8131533/Got-Paper-aims-help-people-buy-right-bog-roll.html#reader-comments')
}

function twitter (name, text, link) {
  return quote(name, text, 'Twitter', link)
}

export default {
  components: {
    Press,
    Quote
  },

  extends: page('press'),

  computed: {
    articles () {
      return this.$options.articles.filter(a => a.name)
    },
    social () {
      return this.$options.social.filter(s => s.name)
    },
    quotes () {
      return this.$options.quotes.filter(q => q.name)
    }
  },

  articles: [
    press(
      'Evening Standard',
      'Got Paper: new app tells you how much loo roll you actually need',
      'https://www.standard.co.uk/tech/got-paper-app-loo-roll-stockpile-covid19-shutdown-a4392831.html',
      'https://wpieconomics.com/site/wp-content/uploads/2019/03/unnamed.jpg'),
    press(
      'Business Insider',
      'This online calculator tells you exactly how much toilet roll you actually need to buy',
      'https://www.insider.com/online-calculator-how-much-toilet-roll-you-need-2020-3',
      'https://www.insider.com/public/assets/INSIDER/US/favicons/android-chrome-192x192.png'),
    press(
      'Mail Online',
      'Got Paper? Web developer creates an online calculator to help people work out the right amount of toilet roll to last them through any length of quarantine during coronavirus crisis',
      'https://www.dailymail.co.uk/sciencetech/article-8131533/Got-Paper-aims-help-people-buy-right-bog-roll.html',
      'https://i.dailymail.co.uk/i/social/img_mol-logo_50x50.png'),
    press(
      'TNW',
      'This coronavirus toilet paper calculator knows if you’ll survive the quarantine',
      'https://thenextweb.com/shareables/2020/03/19/coronavirus-toilet-calculator/',
      'https://cdn3.tnwcdn.com/wp-content/themes/cyberdelia/assets/icons/favicon-96x96.png')
  ],

  quotes: [
    mail(
      'Turnip King, Brisbane, Australia',
      'How stupid'),
    mail(
      'Lee, Manchester',
      'Unbelievable waste of time'),
    twitter(
      '@priscilawebdev',
      'If you never imagined that sites like this could exist... you were wrong 😆',
      'https://twitter.com/priscilawebdev/status/1240180791382024198'),
    twitter(
      '@_JessicaSachs',
      'Brilliant, hilarious, and actually correct. We need 6 rolls for a 2 week quarantine 💩😂🤣',
      'https://twitter.com/_JessicaSachs/status/1239323198321278976'),
    mail(
      'Wobbly jelly tits, Birmingham, United Kingdom',
      'Who only uses 3 sheets to wipe your backside. I use more then that for sure.'),
    mail(
      'Jhphoto1, Cheshire, United Kingdom',
      'Does it have a diarrhea mode?'),
    twitter(
      '@signedness',
      'The most valuable startup now, https://got-paper.com growth potential insane. Invest now. #Corona',
      'https://twitter.com/signedness/status/1239527340356534273'),
    twitter(
      '@daniel_kraft',
      'Finally... a useful #Covid19 pandemic related calculator... 😅',
      'https://twitter.com/daniel_kraft/status/1240135698797256705'),
    mail(
      'SilverIce, Hillarys Made-Up Bot Farm, Germany',
      'Who are they planning to sell that data to?'),
    mail(
      'Harry Barry, London, United Kingdom',
      'This app should be banned. Simple as that.'),
    twitter(
      '@SpaceStoryLC',
      'To anyone who helped clear out the shelves of toilet paper ... here’s a useful website to help quantify just how much of an ass you are',
      'https://twitter.com/SpaceStoryLC/status/1240646916016226304'),
    twitter(
      '@Assam_in_china',
      'Awesome bog roll calculator! My 9-pack should last us 2+ weeks... 🙌🏻',
      'https://twitter.com/Assam_in_china/status/1239807986341761024'),
    mail(
      'Jedi-NZ, Auckland, New Zealand',
      'What a load of sheet'),
    twitter(
      '',
      '',
      '')
  ],

  social: [
    press(
      'Twitter',
      'Twitter',
      'https://twitter.com/search?q=https%3A%2F%2Fgot-paper.com&src=typed_query',
      '/images/sharing/Twitter.svg'),
    press(
      'Facebook',
      'Facebook',
      'https://www.facebook.com/search/top/?q=got-paper.com',
      '/images/sharing/Facebook.svg'),
    press(
      'Google',
      'Google',
      'https://www.facebook.com/search/top/?q=got-paper.com',
      '/images/sharing/Google.svg'),
  ]
}
</script>
