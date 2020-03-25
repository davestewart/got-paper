<template>
  <div class="footer__nav h-links">
    <ul>
      <li>
        <NuxtLink :to="localePath('/')">
          {{ $t('nav.home') }}
        </NuxtLink>
      </li>
      <!--<li><NuxtLink to="/app">App</NuxtLink></li>-->
      <!--
                <li><NuxtLink to="/tips">Tips</NuxtLink></li>
                <li><NuxtLink to="/media">Media</NuxtLink></li>
      -->
      <li>
        <NuxtLink :to="localePath('/about')">
          {{ $t('nav.about') }}
        </NuxtLink>
      </li>
      <li>
        <NuxtLink :to="localePath('/press')">
          {{ $t('nav.press') }}
        </NuxtLink>
      </li>
      <li>
        <NuxtLink :to="localePath('/contact')">
          {{ $t('nav.contact') }}
        </NuxtLink>
      </li>
      <li>
        <NuxtLink :to="localePath('/privacy')">
          {{ $t('nav.privacy') }}
        </NuxtLink>
      </li>
      <!--<li><NuxtLink to="/translations">Translations</NuxtLink></li>-->

      <li class="hide-sm">
        <a href="https://twitter.com/haveyougotpaper" target="_blank">@haveyougotpaper</a>
      </li>
    </ul>
  </div>
</template>
