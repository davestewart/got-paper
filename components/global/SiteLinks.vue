<template>
  <div class="footer__nav h-links">
    <ul>
      <li>
        <NuxtLink :to="localePath('/')">
          Home
        </NuxtLink>
      </li>
      <!--<li><NuxtLink to="/app">App</NuxtLink></li>-->
      <!--
                <li><NuxtLink to="/tips">Tips</NuxtLink></li>
                <li><NuxtLink to="/media">Media</NuxtLink></li>
      -->
      <li>
        <NuxtLink to="/about">
          About
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/press">
          Press
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/contact">
          Contact
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/privacy">
          Privacy
        </NuxtLink>
      </li>
      <!--<li><NuxtLink to="/translations">Translations</NuxtLink></li>-->

      <li class="footer__navTwitter">
        <a href="https://twitter.com/haveyougotpaper" target="_blank">@haveyougotpaper</a>
      </li>
    </ul>
  </div>
</template>
