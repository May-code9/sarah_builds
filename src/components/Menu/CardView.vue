<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    //
  }
})
</script>

<template>
  <section>
    <div class="py-5">
      <div class="bg-card-color-300 rounded-2xl pt-4 card_shadow">
        <div class="px-7">
          <div class="flex justify-between text-white">
            <div class="text-lg">Jajan Card</div>
            <div class="font-semibold text-xl">WHYZ</div>
          </div>
          <div class="flex space-x-5 text-lg text-white pt-5 pb-4">
            <div>1234</div>
            <div>****</div>
            <div>****</div>
            <div>****</div>
          </div>
        </div>
        <div class="bg-card-color-200 py-3 text-white px-7 rounded-b-2xl">
          <div class="flex justify-between small_font">
            <div>
              <div class="smaller_font text-slate-300">CARD HOLDER</div>
              <div>AZZAHRI ALPIANA</div>
            </div>
            <div>
              <div class="smaller_font text-slate-300">EXPIRED</div>
              <div>10/25</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center space-x-1">
      <div class="bg-card-color-300 small_circles"></div>
      <div class="small_circles"></div>
      <div class="small_circles"></div>
    </div>
  </section>
</template>

<style scoped>
.smaller_font {
  font-size: 0.65rem;
}
.small_font {
  font-size: 0.7rem;
}
.card_shadow {
  box-shadow: -1px 18px 30px -8px rgba(135, 135, 135, 0.85);
  -webkit-box-shadow: -1px 18px 30px -8px rgba(135, 135, 135, 0.85);
  -moz-box-shadow: -1px 18px 30px -8px rgba(135, 135, 135, 0.85);
}
.small_circles {
    padding: 0.125rem;
    @apply border border-card-color-300 rounded-full;
}
</style>
