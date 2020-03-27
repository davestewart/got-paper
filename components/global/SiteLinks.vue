<template>
  <div class="siteLinks h-links">
    <ul>
      <li v-for="(path, name) in links" :key="name" :class="`link__${name}`">
        <NuxtLink :to="localePath(path)">
          {{ $t(`nav.${name}`) }}
        </NuxtLink>
      </li>

      <li class="link__twitter hide-sm">
        <a href="https://twitter.com/haveyougotpaper" target="_blank">@haveyougotpaper</a>
      </li>
    </ul>
  </div>
</template>

<script>
import links from '@/config/links'

export default {
  props: {
    menu: {
      type: String,
      default: 'header',
      validator (value) {
        return ['header', 'footer'].includes(value)
      }
    }
  },

  computed: {
    links () {
      if (this.menu === 'header') {
        return {
          home: '/',
          about: links.about,
          press: links.press,
          contact: links.contact
        }
      }
      return { home: '/', ...links }
    }
  }
}
</script>

<style lang="scss">
.siteLinks {
  background: $grey-light;
  padding: 15px 0;
}
</style>

<test>
  <NuxtLink class="link__home" :to="localePath('/')">
    {{ $t('nav.home') }}
  </NuxtLink>
  </li>
  <!--<li><NuxtLink to="/app">App</NuxtLink></li>-->
  <!--
            <li><NuxtLink to="/tips">Tips</NuxtLink></li>
            <li><NuxtLink to="/media">Media</NuxtLink></li>
  -->
  <li>
    <NuxtLink class="link__about" :to="localePath('/about')">
      {{ $t('nav.about') }}
    </NuxtLink>
  </li>
  <li>
    <NuxtLink class="link__press" :to="localePath('/press')">
      {{ $t('nav.press') }}
    </NuxtLink>
  </li>
  <li>
    <NuxtLink class="link__contact" :to="localePath('/contact')">
      {{ $t('nav.contact') }}
    </NuxtLink>
  </li>
  <li>
    <NuxtLink class="link__privacy" :to="localePath('/privacy')">
      {{ $t('nav.privacy') }}
    </NuxtLink>
  </li>
  <!--<li><NuxtLink to="/translations">Translations</NuxtLink></li>-->

</test>

