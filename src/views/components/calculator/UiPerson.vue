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
        <button class="uiPerson__button btn btn-default w-100 text-left" @click="click" v-else>{{ value }} <span v-if="active"> (editing)</span></button>
      </div>
      <UiIconButton icon="pen" class="ml-1" @click="edit" />
      <UiIconButton icon="times" class="ml-1" @click="remove" :disabled="!removable" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: String,
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
      // hover
      // need to extend to other buttons too
      // background-color: $light-blue !important;
      background-color: $light-blue;
      border-color: transparent;
    }
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

    button.uiPerson__button {
      background: none;
    }

    button:hover {
      background-color: $light-blue !important;
    }

    &:hover {
      // background-color: darken($light-blue, 40%) !important;
    }
  }

}
</style>
