<template>
  <div class="uiOutput">
    <label class="uiOutput__label">{{ label }}</label>
    <span class="uiOutput__value">
      <slot>
        <output>{{ output }}</output>
      </slot>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    value: Number,
  },

  computed: {
    output () {
      return (this.value || 0).toFixed(2)
    },
    model: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      },
    },
  },
}
</script>

<style lang="scss">
.uiOutput {
  display: flex;
  margin-bottom: 10px;

  &__label {
    width: 70%;
  }

  &__value {
    width: 30%;
    text-align: center;
    padding-right: 20px;
  }
}
</style>
