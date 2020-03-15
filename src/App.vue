<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
body {
  background-color: #1660A6;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #eaeaea;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #000000;
    &.router-link-exact-active {
      color: #FFFFFF;
    }
  }
}
</style>
