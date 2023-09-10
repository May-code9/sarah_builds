<script lang="ts">
import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'

export default defineComponent({
  components: { RouterView },
  setup() {
    //
  }
})
</script>

<template>
  <RouterView class="max-w-md mx-auto shadow shadow-slate-400" />
</template>

<style scoped></style>
