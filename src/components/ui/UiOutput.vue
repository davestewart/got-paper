<template>
  <div class="uiOutput form-group row" :class="classes">
    <label class="uiOutput__label col-6 col-md-9 col-form-label">{{ label }}</label>
    <span class="uiOutput__slot col-6 col-md-3">
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
      return this.$slots.default ? '' : 'hasSlot'
    },
  },
}
</script>

<style lang="scss">
.uiOutput {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  &__label,
  &__slot,
  &__value {
    vertical-align: middle;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  &__value {
    font-size: 1.2em;
    font-weight: 700;
    display: block;
    vertical-align: center;
  }

  &.hasSlot &__value {
    padding-right: 60px;
    text-align: right;
    vertical-align: center;
  }
}
</style>
