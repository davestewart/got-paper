<template>
  <footer class="siteFooter">
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
    <div class="siteFooter__amazon">
      <AdDesktop class="my-2" />

      <AdMobile />

      <div class="inner text-center">
        <div class="col-12">
          <p>{{ $t('prompts.commission') }}</p>
        </div>
      </div>
    </div>

    <div class="siteFooter__kofi">
      <div class="inner">
        <ClientOnly>
          <KofiButton />
        </ClientOnly>
      </div>
    </div>

    <SiteLinks />

    <div class="siteFooter__sharing">
      <div class="inner">
        <ClientOnly>
          <ShareLinks />
        </ClientOnly>
      </div>
    </div>

    <div class="siteFooter__twitter h-links hide-lg">
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
import AdDesktop from '../ads/AdDesktop'
import AdMobile from '../ads/AdMobile'
import SiteLinks from './SiteLinks'

export default {
  components: {
    SiteLinks,
    AdDesktop,
    AdMobile,
    KofiButton: () => import('@/components/global/KofiButton'),
    ShareLinks: () => import('@/components/global/ShareLinks')
  }
}
</script>

<style lang="scss">
.siteFooter {

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

  &__twitter {
    background: darken($grey-light, 10%);
    padding: 15px;
  }

  &__amazon {
    background: rgba(240, 244, 245, .5);
    padding: 1.5rem 0;
    font-family: $display-font;
    font-weight: bold;
    font-size: 1em;
    color: #666;
  }
}

</style>
