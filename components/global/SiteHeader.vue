<template>
  <header class="header">
    <NuxtLink class="banner" to="/">
      <img class="image" alt="Got Paper logo" src="~assets/images/logo.svg" width="100%">
    </NuxtLink>
    <SiteLinks />
    <div v-if="title" class="strapline">
      <h5 v-html="title" />
    </div>
    <div class="mt-4 text-center only-lg">
      <iframe
        src="https://rcm-eu.amazon-adsystem.com/e/cm?o=2&p=48&l=ur1&category=fresh&banner=05B48ACMDHCPHF9MP2G2&f=ifr&linkID=c6a1d2a12b600d7b559014d7b8411ad9&t=gotpaper-21&tracking_id=gotpaper-21"
        width="728"
        height="90"
      />
    </div>
  </header>
</template>

<script>
import SiteLinks from './SiteLinks'
import { getTitle } from '@/plugins/page-plugin'

export default {
  components: {
    SiteLinks
  },

  computed: {
    title () {
      return getTitle(this.$route.name, false)
    }
  },
}
</script>

<style lang="scss">
.header {
  .banner {
    background: $blue-dark;
    display: block;
    text-align: center;
  }

  .h-links {
    background-color: darken($grey-light, 6%);
  }

  .strapline {
    background: $grey-light;
  }

  .image {
    padding: 40px;
    max-width: 600px;
  }

  h5 {
    margin: auto;
    text-align: center;
    padding: 20px;
    color: #919ba1;
  }
}

</style>
