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
  <svg :class="[width, height]" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M13 1.375C13 0.61875 12.415 0 11.7 0H1.3C0.585 0 0 0.61875 0 1.375V9.625C0 10.3813 0.585 11 1.3 11H11.7C12.415 11 13 10.3813 13 9.625V1.375ZM11.7 1.375L6.5 4.8125L1.3 1.375H11.7ZM11.7 9.625H1.3V2.75L6.5 6.1875L11.7 2.75V9.625Z"
      :fill="color"
    />
  </svg>
</template>
