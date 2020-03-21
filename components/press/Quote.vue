<template>
  <blockquote class="quote ml-2 mb-4">
    <p class="quote__text">
      {{ text }}
    </p>
    <div class="quote__cite small text-muted">
      <span class="quote__name">{{ name }}</span> via <cite><a :href="link" target="_blank">{{ source }}</a></cite>
    </div>
  </blockquote>
</template>

<script>
export default {
  props: {
    text: String,
    name: String,
    source: String,
    link: String
  }
}
</script>

<style lang="scss">
.quote {
  &__text {
    color: #df0f1b;
    font-family: $display-font;
    font-size: 1.3rem;
    line-height: 1em;
    margin-left: .8rem;
    margin-bottom: .3em;
    font-weight: bold;

    &:before {
      margin-left: -.7rem;
      font-size: 1.2em;
      content: "“";
      color: #AAA;
      padding-right: .1em;
    }

    &:after {
      font-size: 1.2em;
      content: "”";
      color: #AAA;
      padding-left: .1em;
    }
  }

  &__name {
    color: black;
  }

  &__cite {
    padding-left: .9rem;
  }
}
</style>
