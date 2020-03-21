<template>
  <transition>
    <div class="uiAlert alert alert-warning alert-dismissible" role="alert">
      <div class="d-flex">
        <UiIcon icon="info-circle" fill="#856404" size="24" />
        <span class="ml-2"><slot /></span>
      </div>
      <button
        type="button"
        class="close"
        data-dismiss="alert"
        aria-label="Close"
        style="outline: none"
        @click="$emit('close')"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </transition>
</template>

<script>

export default {
  props: {
    type: String
  }
}

</script>
