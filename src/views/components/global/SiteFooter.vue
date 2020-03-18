<template>
  <footer class="footer">

    <div class="footer__kofi">
      <div class="inner">
        <SupportButton/>
      </div>
    </div>

    <SiteLinks/>

    <div class="footer__sharing">
      <div class="inner">
        <ShareLinks/>
      </div>
    </div>

    <div class="footer__twitter h-links">
      <div class="inner">
        <ul>
          <a href="https://twitter.com/haveyougotpaper" target="_blank">@haveyougotpaper</a>
        </ul>
      </div>
    </div>

  </footer>
</template>

<script>
import SiteLinks from './SiteLinks'
import ShareLinks from './ShareLinks'
import SupportButton from './KofiButton'

export default {
  components: {
    SiteLinks,
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
