<template>
  <div id="app">
    <header>
      <div class="image">
        <img alt="Got Paper logo" src="./assets/images/logo.svg" width="100%">
      </div>
      <div class="strapline">
        <h5>Calculate how much toilet paper you need</h5>
      </div>
    </header>

<!--
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>

-->
    <main>
      <router-view/>
      <ShareLinks/>
    </main>

  </div>
</template>

<script>
import ShareLinks from './components/ShareLinks'

export default {
  components: {
    ShareLinks,
  }
}
</script>

<style lang="scss">
html, body {
  margin: 0;
  padding: 0;
}

body {
  background-color: #FFFFFF;
  margin: 0 0 100px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
}

header {
  .image {
    background: #1660A6;
  }

  .strapline {
    background: #f0f4f5;
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

main {
  margin: auto;
  max-width: 700px;
  padding: 15px;
}

#nav {
  padding: 30px;
  text-align: center;
  a {
    font-weight: bold;
    color: #000000;
    &.router-link-exact-active {
      color: blue;
    }
  }
}
</style>
