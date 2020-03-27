<template>
  <div class="page page__about">

    <template>
      <section>
        <h1>About</h1>
        <p>Got paper? is a <strong>free</strong> online web app to <strong>calculate yours and your family&#39;s toilet paper needs</strong> during the Coronavirus pandemic.</p>

<!--        <p>[gallery]</p>-->

        <p>It has a <nuxt-link to="/press#quotes">cheeky tone</nuxt-link> and aims to bring some light relief to a serious situation, whilst being moderately <strong>useful</strong> and a little <strong>enlightening</strong> (clue - <em>you don&#39;t need that much toilet paper!</em>)</p>
      </section>

      <section>
        <h2>Features</h2>
        <p><strong class="text-danger">Got Paper is the most accurate, configurable and useful toilet paper calculator.</strong></p>
        <h5>Core features</h5>
        <ul>
          <li>supports <strong>multiple people</strong>, such as family or flatmates</li>
          <li>additional support for <strong>women</strong> (monthly use) and <strong>horny teenagers</strong> (daily use)</li>
          <li>desktop, tablet and <strong>mobile</strong> ready</li>
          <li>save to your phone&#39;s home screen to <strong>use as an app</strong></li>
          <li>has been translated into <nuxt-link to="/translations">12 languages</nuxt-link></li>

        </ul>
        <h5>Calculations</h5>
        <ul>
          <li><strong>poos, pees and extras</strong> (once a day, once a month)</li>
          <li>number of <strong>visits</strong> for each session</li>
          <li><strong>wipes</strong> per session</li>
          <li><strong>sheets</strong> per wipe</li>
          <li>different <strong>roll sizes</strong></li>
          <li>different <strong>quarantine times</strong></li>

        </ul>
        <h5>Modes</h5>
        <ul>
          <li><strong>Buying</strong>: see how much you need to buy</li>
          <li><strong>Sharing</strong>: see how much you can share if you have exccess</li>
          <li><strong>Hoarding</strong>: see how long you&#39;ll last based on your usage</li>

        </ul>
<!--
        <h2>Bonus!</h2>
        <p>The app is now <strong>ad-free</strong> and <strong>open source</strong>!</p>
        <p>This means:</p>
        <ul>
          <li>if you are a user, you can just use the app <strong>without distractions</strong></li>
          <li>if you are a developer, you can see <a href="https://github.com/davestewart/got-paper">how it was put together</a></li>
        </ul>
-->
      </section>

<!--
      <section>
        <h2>Screenshots</h2>
      </section>
-->

      <section>
        <h1>Story</h1>
        <p>Got Paper was created by London web developer <a href="https://twitter.com/dave_stewart">Dave Stewart</a>.</p>
        <p>The initial version of Got Paper was thought of in the first weekend of social distancing here in the UK, in the first online meetup of <a href="https://weekendclub.co/">Weekend Club</a>, a London <a href="https://www.indiehackers.com/">Indie Hacker</a>&#39;s meetup. The initial calculation for how much toilet paper people actually need <strong>was written in Excel in about 3 minutes</strong>, then floated as an idea for something useful for the wider community.</p>
        <p>The initial idea was to <strong>share</strong> the spreadsheet, perhaps on Google sheets, but because this is what I do for a living, I thought why not built it as an app? Got Paper was then <strong>developed and put online in 24 hours</strong>, including programming, branding and initial marketing.</p>
        <p>Over the next week, additional functionality was added, including calculations for <strong>multiple people</strong> and <strong>adidtional modes</strong> for &quot;hoarding&quot; and &quot;sharing&quot;. The following week, it was <strong>translated</strong> into <a href="/translations">12 languages</a> by popular request.</p>
        <p>If you would like to show your appreciation you can <a href="https://ko-fi.com/gotpaper">"buy me a coffee"</a> by making a small donation via the website Ko-fi.</p>
<!--        <p>Got Paper has now been released as an <a href="https://github.com/davestewart/got-paper">Open Source</a> project, so you can play with it, learn from it, or even repurpose it to build your own useful (Coronvirus or otherwise) tool. See the repo&#39;s readme file for more information.</p>-->
        <h5>Links:</h5>
        <ul>
          <li><a href="https://twitter.com/haveyougotpaper">Twitter</a></li>
          <li><a href="https://www.producthunt.com/posts/got-paper">Product Hunt</a></li>
          <li><nuxt-link to="/press">Press</nuxt-link></li>
        </ul>
      </section>

<!--
      <section>
        <h1>What next?</h1>
        <p>I&#39;m working hard on another project – Control Space – a mind-blowing new browser tab manager, for those who need to manage a lot of tabs.</p>
        <p>With everyone now working from home for the foreseeable future, on smaller screens, and needing to maintiain more electronic connections, Control Space is perfectly poistioned to make you the most productive you&#39;ve ever been.</p>
        <p>If you&#39;re interested in being one of the first to use it, sign up to early access here:</p>
        <ul>
          <li><a href="https://controlspace.app">controlspace.app</a></li>
        </ul>
      </section>
-->
    </template>

  </div>
</template>

<script>
import page from '@/plugins/page-plugin'

export default {
  extends: page('about')
}
</script>

<style lang="scss">
.page__about {
  strong {
    color: #555;
    font-weight: 600;
  }
}
</style>
