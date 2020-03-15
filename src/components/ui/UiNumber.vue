<template>
  <div class="uiNumber">
    <label class="uiNumber__label">{{ label }}</label>
    <span class="uiNumber__value">
      <button @click="subtract">-</button>
      <input type="number" :min="min" v-model="value">
      <button @click="add">+</button>
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

  methods: {
    add () {
      this.model++
    },

    subtract () {
      if (this.model - 1  >= 0) {
        this.model--
      }
    }
  }
}
</script>

<style lang="scss">
.uiNumber {
  display: flex;
  margin-bottom: 10px;

  &__label {
    width: 70%;
  }

  &__value {
    width: 30%;
    input {
      width: 40px;
      margin: 0 5px;
      text-align: right;
    }
  }
}
</style>
