<template>
  <div class="uiNumber">
    <label class="uiNumber__label">{{ label }}</label>
    <span class="uiNumber__value">
      <button class="btn btn-light" @click="subtract">-</button>
      <input class="form-control" type="number" :min="min" v-model.number="input">
      <button class="btn btn-light" @click="add">+</button>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    value: Number,
    min: {
      type: Number,
      default: 0,
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
      },
    },
  },

  watch: {
    input (value, oldValue) {
      if (value < this.min) {
        this.input = this.min
        value = this.min
      }
      this.$emit('input', value)
    }
  },

  methods: {
    add () {
      this.input++
    },

    subtract () {
      this.input--
    }
  }
}
</script>

<style lang="scss">
.uiNumber {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  &__label {
  }

  &__value {
    input {
      display: inline-block;
      width: 70px;
      margin: 0 5px;
      text-align: right;
    }

    button {
      width: 40px;
      text-align: center;
    }
  }
}
</style>
