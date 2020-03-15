<template>
  <header>
    <router-link class="banner" to="/">
      <img class="image" alt="Got Paper logo" src="~assets/images/logo.svg" width="100%">
    </router-link>
    <div class="strapline">
      <h5 v-html="$route.meta.title"></h5>
    </div>
  </header>
</template>

<style lang="scss">
header {
  .banner {
    background: $blue-dark;
    display: block;
    text-align: center;
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
