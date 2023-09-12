<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    width: {
      default: 'w-6',
      type: String
    },
    height: {
      default: 'h-auto',
      type: String
    },
    color: {
      default: '#fff',
      type: String
    }
  },
  setup() {
    //
  }
})
</script>

<template>
  <svg :class="[width, height]" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect y="8.80005" width="18.4" height="2.4" rx="1.2" fill="#191919" />
    <rect width="18.4" height="2.4" rx="1.2" fill="#191919" />
    <rect x="4.7998" y="17.6" width="13.6" height="2.4" rx="1.2" fill="#191919" />
  </svg>
</template>
