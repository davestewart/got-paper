<template>
  <div class="uiOutput" :class="classes">
    <label class="uiOutput__label">{{ label }}</label>
    <span class="uiOutput__slot">
      <slot>
        <output class="uiOutput__value">{{ output }}</output>
      </slot>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    value: Number,
    precision: {
      type: Number,
      default: 0,
    },
  },

  computed: {
    output () {
      return (this.value || 0).toFixed(this.precision)
    },

    model: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      },
    },

    classes () {
      return this.$slots.default
        ? ''
        : 'hasSlot'
    }
  },
}
</script>

<style lang="scss">
.uiOutput {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  &__value {
    text-align: center;
    font-size: 1.2em;
    font-weight: 700;
  }

  &.hasSlot &__value {
    padding-right: 60px;
  }
}
</style>
