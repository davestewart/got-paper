<template>
  <div class="uiPerson" :class="{ active }">
    <div class="d-flex my-2">
      <div style="flex-grow: 1" class="mr-1">
        <input v-if="editing"
               v-model="input"
               @change="done"
               @keydown.enter="done"
               ref="input"
               type="text"
               class="form-control"
        >
        <button class="uiPerson__button btn btn-default w-100 text-left" @click="click" v-else>
          <span class="uiPerson__name">{{ value }}</span>
          <span class="uiPerson__stats">{{ total | round }} sheets / day</span>
        </button>
      </div>
      <UiIconButton icon="pen" class="ml-1" @click="edit" />
      <UiIconButton icon="times" class="ml-1" @click="remove" :disabled="!removable" />
    </div>
  </div>
</template>

<script>
export default {
  filters: {
    round (value = 0) {
      return Math.floor(value)
    }
  },

  props: {
    value: String,
    total: Number,
    active: Boolean,
    removable: {
      type: Boolean,
      default: true,
    },
  },

  data () {
    return {
      editing: false,
    }
  },

  computed: {
    input: {
      get () { return this.value },
      set (value) {
        this.$emit('input', value)
      },
    },
  },

  methods: {
    focus () {
      this.$el.querySelector('button').focus()
    },

    edit () {
      this.editing = true
      this.$nextTick(() => {
        const input = this.$refs.input
        input.addEventListener('blur', this.onBlur)
        input.focus()
        input.select()
      })
    },

    done () {
      this.editing = false
      this.$emit('change')
      // this.$nextTick(() => this.focus())
    },

    click () {
      this.$emit('click')
    },

    remove () {
      this.$emit('remove')
    },

    onBlur () {
      this.$refs.input.removeEventListener('blur', this.onBlur)
      this.editing = false
    },
  },

}
</script>

<style lang="scss">
$light-blue: #007bff30;
$light-grey: #e2e6ea;

.uiPerson {
  transition: background-color;

  &__button {
    // background: $light-blue;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__name {

  }

  &__stats {
    font-size: 70%;
  }

  & button {

    border-color: transparent;

    &[disabled] {
      opacity: 0.6;
      pointer-events: none;
    }

    &:hover {
      background-color: #f4f4f5;
    }

    &:hover {
      color: #212529;
      background-color: $light-blue;
      border-color: transparent;
    }
  }

  button.uiPerson__button {
    background-color: transparent;
  }

  button:hover {
    background-color: $light-blue !important;
  }

  &.active {
    font-weight: bold;
    border-color: transparent;
    background-color: $light-blue !important;

    border-radius: 4px;
    box-shadow: 0 0 0 5px $light-blue;

    input:focus,
    button:focus {
      box-shadow: none;
    }
  }

}
</style>
