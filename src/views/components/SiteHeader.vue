<template>
  <header>
    <div class="image">
      <img alt="Got Paper logo" src="~assets/images/logo.svg" width="100%">
    </div>
    <div class="strapline">
      <h5>Calculate your <em>actual</em> toilet paper needs</h5>
    </div>
  </header>
</template>

<style lang="scss">
header {
  .image {
    background: $blue-dark;
  }

  .strapline {
    background: $grey-light;
  }

  img {
    display: block;
    padding: 40px;
    max-width: 600px;
    margin: auto;
  }

  h5 {
    margin: auto;
    text-align: center;
    padding: 20px;
    color: #919ba1;
  }
}

</style>
