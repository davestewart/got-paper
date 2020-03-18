<template>
  <div class="kofi">
    <a class="kofi__link" href='https://ko-fi.com/gotpaper' target='_blank'>
      <span class="kofi__text">Want to support me?</span>
      <img class="kofi__image" src="https://az743702.vo.msecnd.net/cdn/kofi3.png?v=2" alt="Buy Me a Coffee at ko-fi.com"/>
    </a>
  </div>
</template>

<style lang="scss" scoped>
.kofi {
  text-align: center;
  padding: 20px;

  &__link {
    text-decoration: none;
  }

  &__text {
    padding-right: 10px;
    font-family: $display-font;
    color: black;
    font-size: 1.3em;
    line-height: 50px;
  }

  &__image {
    height: 50px !important;
    border: none;
  }
}
</style>
