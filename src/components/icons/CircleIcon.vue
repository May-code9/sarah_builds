<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    width: {
      default: 'w-16',
      type: String
    },
    height: {
      default: 'h-auto',
      type: String
    }
  },
  setup() {
    //
  }
})
</script>

<template>
  <svg
    width="172"
    height="130"
    viewBox="0 0 172 130"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle opacity="0.3" cx="158" cy="-28" r="157.5" stroke="#191919" />
  </svg>
</template>
