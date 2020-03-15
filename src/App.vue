<template>
  <div id="app">
    <header>
      <img alt="Got Paper logo" src="./assets/images/logo.svg" width="100%">
      <p>Online calculator to buy the right amount of toilet paper</p>
    </header>

    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<style lang="scss">
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
  img {
    display: block;
    padding: 30px 0;
    max-width: 600px;
    margin: auto;
  }

  p {
    margin: auto;
    color: white;
    text-align: center;
    padding: 10px;
  }
}

main {
  margin: auto;
  width: 500px;
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
