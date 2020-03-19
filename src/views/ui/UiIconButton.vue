<template>
  <button class="uiIconButton btn btn-light" v-on="$listeners" :disabled="disabled">
    <UiIcon :icon="icon" size="16" :fill="disabled ? '#AAA' : 'black'"></UiIcon>
  </button>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    }
  },
}
</script>

<style lang="scss">
button.uiIconButton {
  box-sizing: content-box;
  width: 18px;
  padding: .375rem .55rem;
  text-align: center;
  vertical-align: middle;
  font-weight: bold;
  font-family: $display-font;
  line-height: 24px;

  // @see https://stackoverflow.com/a/41722252/531194
  touch-action: manipulation;

  &:hover {
    background-color: #007bff30;
  }

  svg {
    vertical-align: sub;
  }
}
</style>
