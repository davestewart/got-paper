<template>
  <div id="app">
    <header>
      <div class="image">
        <img alt="Got Paper logo" src="./assets/images/logo.svg" width="100%">
      </div>
      <div class="strapline">
        <h5>Calculate your <em>actual</em> toilet paper needs</h5>
      </div>
    </header>

    <!--
        <div id="nav">
        </div>

    -->
    <main class="inner">
      <router-view/>
    </main>

    <footer class="footer">
      <div class="footer__links">
        <div class="inner">
          <ul>
            <li>
              <router-link to="/">Home</router-link>
            </li>
            <li>
              <router-link to="/about">About</router-link>
            </li>
            <li>
              <router-link to="/media">Media</router-link>
            </li>
            <a href="mailto:info@got-paper.com?subject=Hello&body=">Contact</a>
          </ul>
        </div>
      </div>

      <div class="footer__sharing">
        <div class="inner">
          <ShareLinks/>
        </div>
      </div>

      <!--
            <div class="footer__links footer__site">
              <div class="inner">
                <a href="http://got-paper.com">got-paper.com</a>
              </div>
            </div>
      -->

    </footer>

  </div>
</template>

<script>
import ShareLinks from './components/ShareLinks'

export default {
  components: {
    ShareLinks,
  },
}
</script>

<style lang="scss">
$grey-light: #f0f4f5;
$blue-dark: #1660A6;

html, body {
  margin: 0;
  padding: 0;
}

body {
  background-color: #FFFFFF;
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
}

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

main {
  min-height: 60vh;
  margin: auto;
  padding: 30px 15px 100px;
}

.inner {
  max-width: 700px;
  margin: auto;
}

.footer {
  background: $grey-light;

  &__sharing {
    background: darken($grey-light, 3%);
    padding: 0 0 50px;
  }

  &__site {
    background: darken($grey-light, 6%);
    padding: 20px 0 50px;
    text-align: center;
  }

  &__links {

    padding: 15px;

    ul, li {
      list-style: none;
      text-align: center;
      padding: 0;
      margin: 0;
    }

    li {
      display: inline-block;
    }

    li:not(:last-child) {
      border-right: 1px solid #CCC;
    }

    a {
      padding: 5px;
      margin: 5px;
      font-weight: bold;
      color: #000000;

      &.router-link-exact-active {
        color: $blue-dark;
        text-decoration: none;
      }
    }
  }
}

</style>
