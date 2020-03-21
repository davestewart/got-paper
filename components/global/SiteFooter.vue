<template>
  <footer class="footer">
    <!-- footer logos -->
    <img
      src="/images/social/splash-og.png"
      width="1"
      height="1"
      style="visibility: hidden; font-size: 1px;"
      alt="Got Paper logo"
    >
    <img
      src="/images/social/splash-og.png"
      width="1"
      height="1"
      style="visibility: hidden; font-size: 1px;"
      alt="Got Paper icon"
    >

    <!-- amazon -->
    <div class="footer__amazon">
      <div class="text-center only-lg my-2">
        <iframe
          src="https://rcm-eu.amazon-adsystem.com/e/cm?o=2&p=48&l=ur1&category=fresh&banner=05B48ACMDHCPHF9MP2G2&f=ifr&linkID=c6a1d2a12b600d7b559014d7b8411ad9&t=gotpaper-21&tracking_id=gotpaper-21"
          width="728"
          height="90"
        />
      </div>

      <div class="text-center only-sm">
        <iframe
          src="https://rcm-eu.amazon-adsystem.com/e/cm?o=2&p=12&l=ur1&category=fresh&banner=116TFTVB94RNREVHRQ02&f=ifr&linkID=ee20e33974032b5f4c7e1d807b2f9ab7&t=gotpaper-21&tracking_id=gotpaper-21"
          width="300"
          height="250"
        />
      </div>

      <div class="inner text-center">
        <div class="col-12">
          <p>
            If you make a purchase we may receive a small commission at no extra cost to you.
          </p>
        </div>
      </div>
    </div>

    <div class="footer__kofi">
      <div class="inner">
        <ClientOnly>
          <KofiButton />
        </ClientOnly>
      </div>
    </div>

    <SiteLinks />

    <div class="footer__sharing">
        <div class="inner">
          <ClientOnly>
            <ShareLinks />
          </ClientOnly>
        </div>
    </div>

    <div class="footer__twitter h-links">
      <div class="inner">
        <ul>
          <li>
            <a href="https://twitter.com/haveyougotpaper" target="_blank">@haveyougotpaper</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
import SiteLinks from './SiteLinks'

export default {
  components: {
    SiteLinks,
    KofiButton: () => import('@/components/global/KofiButton'),
    ShareLinks: () => import('@/components/global/ShareLinks')
  }
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
    padding: 15px 0;
  }

  &__twitter {
    background: darken($grey-light, 10%);
    padding: 15px;
  }

  .footer__amazon {
    background: rgba(240, 244, 245, .5);
    padding: 1.5rem 0;
    font-family: $display-font;
    font-weight: bold;
    font-size: 1em;
    color: #666;
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
