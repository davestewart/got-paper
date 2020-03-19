<template>
  <footer class="footer">

    <div class="inner my-4 text-center only-sm">
      <iframe src="https://rcm-eu.amazon-adsystem.com/e/cm?o=2&p=12&l=ur1&category=fresh&banner=116TFTVB94RNREVHRQ02&f=ifr&linkID=ee20e33974032b5f4c7e1d807b2f9ab7&t=gotpaper-21&tracking_id=gotpaper-21" width="300" height="250" scrolling="no" border="0" marginwidth="0" style="border:none;" frameborder="0"></iframe>
    </div>

    <div class="footer__kofi">
      <div class="inner">
        <SupportButton/>
      </div>
    </div>

    <div class="footer__nav footer--links">
      <div class="inner">
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
<!--
          <li><router-link to="/tips">Tips</router-link></li>
          <li><router-link to="/media">Media</router-link></li>
-->
          <li><router-link to="/contact">Contact</router-link></li>
          <li><router-link to="/privacy">Privacy</router-link></li>
<!--          <li><router-link to="/translations">Translations</router-link></li>-->

          <li class="footer__navTwitter"><a href="https://twitter.com/haveyougotpaper" target="_blank">@haveyougotpaper</a></li>
        </ul>
      </div>
    </div>

    <div class="footer__sharing">
      <div class="inner">
        <ShareLinks/>
      </div>
    </div>

    <div class="footer__twitter footer--links">
      <div class="inner">
        <ul>
          <a href="https://twitter.com/haveyougotpaper" target="_blank">@haveyougotpaper</a>
        </ul>
      </div>
    </div>

  </footer>
</template>

<script>
import ShareLinks from './ShareLinks'
import SupportButton from './KofiButton'

export default {
  components: {
    SupportButton,
    ShareLinks,
  },
}
</script>

<style lang="scss">
.footer {

  &__kofi {
    background: rgba(240, 244, 245, .5);
  }

  &__sharing {
    background: darken($grey-light, 3%);
  }

  &__site {
    background: darken($grey-light, 6%);
    padding: 20px 0 50px;
    text-align: center;
  }

  &__nav {
    background: $grey-light;
    padding: 15px;
  }

  &__twitter {
    background: darken($grey-light, 10%);
    padding: 15px;
  }

  &--links {
    ul, li {
      list-style: none;
      text-align: center;
      padding: 0;
      margin: 0;
    }

    li {
      display: inline-block;
    }

    li:not(:first-child) {
      border-left: 1px solid #CCC;
    }

    a {
      padding: 5px;
      margin: 5px;
      font-weight: bold;
      color: #000000;

      &.router-link-exact-active {
        color: $blue-dark;
        text-decoration: none;
      }
    }
  }


  @media only screen and (min-width: 600px) {
    &__twitter {
      display: none;
    }
  }

  @media only screen and (max-width: 600px) {
    &__navTwitter {
      display: none !important;
    }
  }
}

</style>
