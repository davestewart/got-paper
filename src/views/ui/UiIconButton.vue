<template>
  <button class="uiIconButton btn btn-light" v-on="$listeners"><UiIcon :icon="icon" size="16"></UiIcon></button>
</template>

<script>

export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
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
  background: #f4f4f5;
  font-weight: bold;
  font-family: $display-font;
  line-height: 24px;

  &:hover {
    background-color: #007bff30;
  }

  svg {
    vertical-align: sub;
  }
}
</style>
