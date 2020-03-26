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

    <div class="siteFooter__kofi">
      <div class="inner">
        <ClientOnly>
          <KofiButton />
        </ClientOnly>
      </div>
    </div>

    <div class="siteFooter__sharing">
      <div class="inner">
        <ClientOnly>
          <ShareLinks />
        </ClientOnly>
      </div>
    </div>

    <SiteLinks />

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
.siteFooter {

  &__kofi {
    background: rgba(240, 244, 245, .5);
  }

  &__sharing {
    background: darken($grey-light, 2%);
  }

  .siteLinks {
    background: darken($grey-light, 6%);
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
