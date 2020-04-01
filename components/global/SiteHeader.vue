<template>
  <header class="siteHeader">
    <GitHubCorner/>
    <NuxtLink class="banner" :to="localePath('/')">
      <img class="image" alt="Got Paper logo" src="/images/site/site-logo.png" width="100%">
    </NuxtLink>
    <SiteLinks />
    <div v-if="title" class="strapline">
      <h5 v-html="title" />
    </div>
  </header>
</template>

<script>
import GitHubCorner from './GitHubCorner'
import SiteLinks from './SiteLinks'
import { getTitle } from '@/plugins/page-plugin'

export default {
  components: {
    GitHubCorner,
    SiteLinks,
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
    background: $primary-color;
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
