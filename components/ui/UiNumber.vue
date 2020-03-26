<template>
  <div class="uiNumber form-group row">
    <div class="col-6 col-form-label">
      <label class="uiNumber__label">{{ label }}</label>
      <div v-if="hint" class="hint">
        {{ hint }}
      </div>
    </div>
    <span class="uiNumber__value col-6">
      <UiIconButton icon="minus" tabindex="-1" @click="subtract" v-on="makeTouch('subtract')" />
      <input
        v-model.number="input"
        class="form-control"
        type="number"
        :min="min"
        :max="max"
        @blur="onInputBlur"
        @focus="onInputFocus"
      >
      <UiIconButton icon="plus" tabindex="-1" @click="add" v-on="makeTouch('add')" />
    </span>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    hint: String,
    value: Number,
    step: {
      type: Number,
      default: 1
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 999
    }
  },

  data () {
    return {
      input: this.value
    }
  },

  computed: {
    model: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      }
    }
  },

  watch: {
    input (value) {
      if (value === undefined || value === '' || value === null) {
        return
      }
      if (value < this.min) {
        this.input = this.min
        value = this.min
      } else if (value > this.max) {
        this.input = this.max
        value = this.max
      }
      this.$emit('input', value)
    },

    value (value) {
      this.input = value
    }
  },

  methods: {
    add () {
      this.input += this.step
    },

    subtract () {
      this.input -= this.step
    },

    makeTouch (action) {
      const start = () => {
        stop()
        this.intervalId = setInterval(() => {
          this[action]()
        }, 150)
      }

      const stop = () => {
        if (this.intervalId) {
          clearInterval(this.intervalId)
          this.intervalId = null
        }
      }

      return {
        touchstart: start,
        mousedown: start,
        touchend: stop,
        mouseup: stop,
        // mouseout: stop,
        // mouseleave: stop
      }
    },

    onInputFocus (event) {
      event.currentTarget.select()
    },

    onInputBlur () {
      const value = this.input
      if (value === undefined || value === '' || value === null) {
        this.value = this.min
      }
    }
  }
}
</script>

<style lang="scss">
.uiNumber {
  &__label {
    margin-bottom: 0;
  }

  &__value {
    white-space: nowrap;
    align-content: start;
    text-align: right;

    input {
      display: inline-block;
      width: 70px;
      text-align: right;
      margin: 0 3px;
      vertical-align: top;
    }
  }
}

@media only screen and (max-width: 600px) {
  .uiNumber {
    input {
      width: 4rem
    }
  }
}

</style>
