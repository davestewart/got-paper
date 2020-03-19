<template>
  <header class="header">
    <router-link class="banner" to="/">
      <img class="image" alt="Got Paper logo" src="~assets/images/logo.svg" width="100%">
    </router-link>
    <SiteLinks/>
    <div class="strapline" v-if="$route.meta.title">
      <h5 v-html="$route.meta.title"></h5>
    </div>
    <div class="inner mt-4 text-center only-lg">
      <iframe src="https://rcm-eu.amazon-adsystem.com/e/cm?o=2&p=48&l=ur1&category=fresh&banner=05B48ACMDHCPHF9MP2G2&f=ifr&linkID=c6a1d2a12b600d7b559014d7b8411ad9&t=gotpaper-21&tracking_id=gotpaper-21" width="728" height="90" scrolling="no" border="0" marginwidth="0" style="border:none;" frameborder="0"></iframe>
    </div>
  </header>
</template>

<script>
import SiteLinks from 'components/global/SiteLinks'
export default {
  components: {
    SiteLinks
  }
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
