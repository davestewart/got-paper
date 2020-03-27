<template>
  <div class="gallery">
    <client-only>
      <VueAgile @afterChange="onChange">
        <div v-for="image in images" :key="image.src" class="gallery__slide">
          <img :src="image.src" :alt="image.text">
        </div>

        <template slot="prevButton">
          <i class="fas fa-chevron-left"></i>
        </template>

        <template slot="nextButton">
          <i class="fas fa-chevron-right"></i>
        </template>
      </VueAgile>
    </client-only>

    <p class="gallery__text">{{ text }}</p>
  </div>
</template>

<script>
import { VueAgile } from 'vue-agile'

function image (file, text) {
  return {
    src: `/images/ui/${file}.png`,
    text
  }
}

export default {
  components: {
    VueAgile
  },

  data () {
    return {
      index: 0
    }
  },

  computed: {
    images () {
      return [
        image('mobile', 'Got Paper is optimised for mobile'),
        image('features', 'Customise your "activity" and family members'),
        image('modes', 'Buy, hoard or share paper'),
        image('translations', `Available in ${this.$i18n.locales.length} languages`),
        image('desktop', 'Also runs on desktop and tablet'),
      ]
    },

    text () {
      return this.images[this.index].text
    }
  },

  methods: {
    onChange ({ currentSlide }) {
      this.index = currentSlide
    }
  }
}
</script>

<style lang="scss">
.gallery{

  &__slide {
    img {
      width: 100%;
    }
  }

  &__text {
    border-top: 1px dotted #CCC;
    margin: 15px 0 0;
    padding: 15px 0 0;
    text-align: center;
    font-family: $display-font;
    font-size: 1.2em;
    font-weight: bold;
    color: $dark-red;
  }
}

.agile {

  &__actions {
    margin-top: 20px;
  }

  &__nav-button {
    background: transparent;
    border: none;
    color: #ccc;
    cursor: pointer;
    font-size: 24px;
    transition-duration: 0.3s;
    &:hover {
      color: #888;
    }

  }

  &__dots {
    margin: 0;
    padding: 0;
  }

  &__dot {
    margin: 0 10px;
    button {
      background-color: #eee;
      border: none;
      border-radius: 50%;
      cursor: pointer;
      display: block;
      height: 10px;
      font-size: 0;
      line-height: 0;
      margin: 0;
      padding: 0;
      transition-duration: 0.3s;
      width: 10px;
    }

    &--current button,
    &:hover button {
      background-color: #888;
    }
  }
}
</style>
