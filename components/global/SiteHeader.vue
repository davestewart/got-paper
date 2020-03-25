<template>
  <header class="siteHeader">
    <NuxtLink class="banner" :to="localePath('/')">
      <img class="image" alt="Got Paper logo" src="~assets/images/logo.svg" width="100%">
    </NuxtLink>
    <SiteLinks />
    <div v-if="title" class="strapline">
      <h5 v-html="title" />
    </div>
    <AdDesktop class="mt-4" />
  </header>
</template>

<script>
import AdDesktop from '../ads/AdDesktop'
import SiteLinks from './SiteLinks'
import { getTitle } from '@/plugins/page-plugin'

export default {
  components: {
    SiteLinks,
    AdDesktop
  },

  computed: {
    title () {
      return getTitle(this.$route.name, false)
    }
  }
}
</script>

<style lang="scss">
.siteHeader {
  .banner {
    background: $blue-dark;
    display: block;
    text-align: center;
  }

  .h-links {
    background-color: darken($grey-light, 6%);
  }

  .link__privacy {
    display: none;
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
