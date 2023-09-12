<script lang="ts">
import { defineComponent } from 'vue'
import ArrowDownIcon from '../components/icons/ArrowDownIcon.vue'
import ArrowUpIcon from '../components/icons/ArrowUpIcon.vue'
import MenuIcon from '../components/icons/MenuIcon.vue'
import CardView from '../components/Menu/CardView.vue'

export default defineComponent({
  components: { MenuIcon, CardView, ArrowUpIcon, ArrowDownIcon },
  setup() {
    //
  }
})
</script>

<template>
  <section class="px-5 pt-7">
    <div class="flex justify-between">
      <div class="text-2xl font-semibold">Your Card</div>
      <menu-icon :width="'w-5'"></menu-icon>
    </div>
    <card-view></card-view>
    <div class="py-5">
      <div class="flex justify-between space-x-3">
        <div class="border border-indigo-100 rounded-lg px-4 py-2 w-full">
          <div class="flex">
            <div class="bg-arrow-blue p-4 rounded-md inline-block">
              <arrow-up-icon :width="'w-4'"></arrow-up-icon>
            </div>
            <div class="text-xs flex flex-col justify-center pl-2">
              <div>Income</div>
              <div class="font-extrabold text-sm">$2,477.66</div>
            </div>
          </div>
        </div>
        <div class="border border-indigo-100 rounded-lg px-4 py-2 w-full">
          <div class="flex">
            <div class="bg-arrow-blue p-4 rounded-md inline-block">
              <arrow-down-icon :width="'w-4'"></arrow-down-icon>
            </div>
            <div class="text-xs flex flex-col justify-center pl-2">
              <div>Spending</div>
              <div class="font-extrabold text-sm">$1,123.47</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
