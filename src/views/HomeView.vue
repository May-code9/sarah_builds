<script lang="ts">
import { defineComponent } from 'vue'
import SignIn from '../components/Home/SignIn.vue'

export default defineComponent({
  components: { SignIn },
  setup() {
    //
  }
})
</script>

<template>
  <main class="bg-slate-50 min-h-screen w-screen">
    <sign-in></sign-in>
  </main>
</template>
