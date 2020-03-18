<template>
  <div class="uiNumber form-group row">
    <div class="col-6 col-form-label">
      <label class="uiNumber__label">{{ label }}</label>
      <div v-if="hint" class="small text-muted font-italic">{{ hint }}</div>
    </div>
    <span class="uiNumber__value col-6">
      <UiIconButton icon="minus" @click="subtract" v-on="touch('subtract')" />
      <input class="form-control" type="number" :min="min" :max="max" v-model.number="input">
      <UiIconButton icon="plus" @click="add" v-on="touch('add')" />
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
      default: 1,
    },
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 999,
    },
  },

  data () {
    return {
      input: this.value,
    }
  },

  computed: {
    model: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      },
    },
  },

  watch: {
    input (value, oldValue) {
      if (value === undefined || value === '' || value === null) {
        value = 0
      }
      if (value < this.min) {
        this.input = this.min
        value = this.min
      }
      else if (value > this.max) {
        this.input = this.max
        value = this.max
      }
      this.$emit('input', value)
    },

    value (value) {
      this.input = value
    },
  },

  methods: {
    add () {
      this.input += this.step
    },

    subtract () {
      this.input -= this.step
    },

    touch (action) {
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
        mouseout: stop,
        mouseleave: stop,
      }
    },
  },
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
/*
@media only screen and (max-width: 600px) {
  select {
    font-size: 1.1em;
  }

  .uiNumber {
    input, button {
      font-size: 1.2em;
    }
  }
}
*/

@media only screen and (max-width: 600px) {
  .uiNumber {
    input {
      width: 4rem
    }
  }
}

</style>
