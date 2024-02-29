<template>
  <div class="press ml-4 mb-4">
    <a class="press__link" :href="link" target="_blank">
      <img width="24" height="24" class="press__image mr-3" :src="image" :alt="name">
      <h4 class="press__title">{{ title }}</h4>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    title: String,
    image: String,
    link: String
  }
}
</script>

<style lang="scss">
.press {

  &__link {
    color: black;
    display: flex;
  }

  &__title {
    font-family: $display-font;
    font-size: 1.2rem;
    line-height: 1.2em;
    margin-bottom: .3em;
    margin-top: 0;
    font-weight: bold;
  }

  &__image {
    // height: 50px;
    // min-width: 50px;
  }
}
</style>
