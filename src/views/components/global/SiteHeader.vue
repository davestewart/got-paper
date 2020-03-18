<template>
  <header class="header">
    <router-link class="banner" to="/">
      <img class="image" alt="Got Paper logo" src="~assets/images/logo.svg" width="100%">
    </router-link>
    <SiteLinks/>
    <div class="strapline">
      <h5 v-html="$route.meta.title"></h5>
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
