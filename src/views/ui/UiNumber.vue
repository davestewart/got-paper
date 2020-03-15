<template>
  <div class="uiNumber form-group row">
    <div class="col-6 col-form-label">
      <label class="uiNumber__label">{{ label }}</label>
      <div v-if="hint" class="small text-muted font-italic">{{ hint }}</div>
    </div>
    <span class="uiNumber__value col-6">
      <button class="btn btn-light" @click="subtract" v-on="touch('subtract')">-</button>
      <input class="form-control" type="number" :min="min" v-model.number="input">
      <button class="btn btn-light" @click="add" v-on="touch('add')">+</button>
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
      if (value < this.min) {
        this.input = this.min
        value = this.min
      }
      if (value === undefined || value === '' || value === null) {
        value = 0
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
      const interval = 150
      const start = () => {
        // console.log('starting!')
        this.intervalId = setInterval(() => {
          this[action]()
        }, interval)
        // console.log('started:', this.intervalId)
      }

      const stop = () => {
        if (this.intervalId) {
          // console.log('stopping!')
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
    align-content: start;
    text-align: right;

    input {
      display: inline-block;
      width: 70px;
      text-align: right;
      margin: 0 5px;
      vertical-align: top;
    }

    button {
      width: 35px;
      text-align: center;
      vertical-align: top;
      background: #f4f4f5;
      font-weight: bold;
      font-family: $display-font;
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
</style>
