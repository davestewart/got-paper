<template>
  <div class="locale">
    <!-- link -->
    <div class="locale__picker">
      <a href="#" class="text-muted" @click.prevent="showModal(true)">
        <small class="text-muted mr-2">{{ locale.name }}:</small>
        <img height="20" :src="locale.flag" :alt="locale.name">
      </a>
    </div>

    <!-- Modal -->
    <client-only>
      <portal to="modals">
        <div v-if="modalState" class="locale__modal modal fade show d-block" tabindex="-1" role="dialog" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <label class="modal-title">{{ $t('prompts.chooseLanguage') }}</label>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="showModal(false)">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <ul class="locale__items">
                  <li v-for="(loc, index) in $i18n.locales" :key="index">
                    <NuxtLink :to="switchLocalePath(loc.code)" :class="{ active: loc === locale }" @click.native="showModal(false)">
                      <img height="20" :src="loc.flag" :alt="loc.name" class="mr-1">
                      <span>{{ loc.name }}</span>
                      <span class="text-muted float-right">{{ loc.label }}</span>
                    </NuxtLink>
                  </li>
                </ul>
              </div>
              <div class="modal-footer">
                <p class="mb-0"><NuxtLink :to="localePath('/translations')">{{ $t('prompts.offerTranslation') }}</NuxtLink></p>
              </div>
            </div>
          </div>
        </div>
      </portal>
    </client-only>

  </div>
</template>

<script>
export default {
  data () {
    return {
      modalState: false
    }
  },

  computed: {
    locale () {
      return this.$i18n.locales.find(l => l.code === this.$i18n.locale)
    }
  },

  beforeDestroy () {
    this.showModal(false)
  },

  methods: {
    showModal (state) {
      this.modalState = state
      document
        .querySelectorAll('body, html')
        .forEach(el => el.classList[state ? 'add' : 'remove']('modal-open'))
    }
  }
}
</script>

<style lang="scss">
.locale {
  &__picker {
    a {
      display: block;
      line-height: 20px;
      text-decoration: none;
      padding: 5px 7px;
      border-radius: 4px;
      &:hover {
        background-color: $grey-light;
      }

      > * {
        vertical-align: middle;
      }
    }
  }

  &__modal {
    background: #000000CC;
    z-index: 1000;

    label {
      font-weight: bold;
      font-family: $display-font;
      font-size: 1.2em;
    }

    .modal-dialog {
      max-height: calc(100vh - 20px);
    }

    .modal-body {
      overflow-y: auto;
      max-height: calc(100vh - 180px);
      @media only screen and (max-width: 600px) {
        max-height: calc(100vh - 140px);
      }
    }
  }

  &__items {
    list-style: none;
    padding: 0;
    margin: 0;

    a {
      display: block;
      padding: 5px;
      margin-bottom: 5px;
      line-height: 20px;
      border-radius: 6px;
      vertical-align: baseline;
      color: #333;
      &.active {
        font-weight: bold;
        color: black;
      }
      &.active, &:hover {
        background-color: $grey-light;
        text-decoration: none;
      }
    }
  }

}
</style>
