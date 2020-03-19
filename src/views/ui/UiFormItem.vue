<template>
  <div class="uiFormItem form-group row" :class="classes">
    <label class="uiFormItem__label col-6 col-md-9 col-form-label">{{ label }}</label>
    <span class="uiFormItem__slot col-6 col-md-3">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
  },

  computed: {
    classes () {
      return this.$slots.default ? '' : 'hasSlot'
    },
  },
}
</script>

<style lang="scss">
.uiFormItem {
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
