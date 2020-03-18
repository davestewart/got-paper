<template>
  <footer class="footer">
    <div class="share">
      <div class="inner">
        <SupportButton/>
      </div>
    </div>
    <div class="footer__links">
      <div class="inner">
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
<!--
          <li><router-link to="/tips">Tips</router-link></li>
          <li><router-link to="/media">Media</router-link></li>
-->
          <li><router-link to="/contact">Contact</router-link></li>
          <li><router-link to="/privacy">Privacy</router-link></li>
<!--          <li><router-link to="/translations">Translations</router-link></li>-->
        </ul>
      </div>
    </div>

    <div class="footer__sharing">
      <div class="inner">
        <ShareLinks/>
      </div>
    </div>
  </footer>
</template>

<script>
import ShareLinks from './ShareLinks'
import SupportButton from './SupportButton'

export default {
  components: {
    SupportButton,
    ShareLinks,
  },
}
</script>

<style lang="scss">
.footer {

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
    background: $grey-light;

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
