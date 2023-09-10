<script lang="ts">
import { defineComponent } from 'vue'
import EmailIcon from '../icons/EmailIcon.vue'
import LockIcon from '../icons/LockIcon.vue'

export default defineComponent({
  components: { EmailIcon, LockIcon },
  setup() {
    //
  }
})
</script>

<template>
  <section class="flex flex-col justify-center h-screen px-5">
    <section class="bg-navy-blue-900 rounded-3xl py-8 px-4 text-white">
      <div class="text-center">
        <div class="font-semibold text-2xl">Sign Up</div>
        <div class="text-slate-100 text-sm py-5 w-2/3 mx-auto">
          Fill this form for create new account & continue
        </div>
      </div>
      <div class="mx-8 space-y-6">
        <div class="flex border-b border-gray-500">
          <email-icon class="" :width="'w-4'"></email-icon>
          <input
            type="text"
            placeholder="Email or phone number"
            class="placeholder-gray-100 bg-transparent w-full py-2 pl-3 focus-visible:outline-none"
          />
        </div>
        <div class="flex border-b border-gray-500">
          <lock-icon :width="'w-5'"></lock-icon>
          <input
            type="text"
            placeholder="Password"
            class="placeholder-gray-100 bg-transparent w-full py-2 pl-3 focus-visible:outline-none"
          />
        </div>
        <div class="flex border-b border-gray-500">
          <lock-icon :width="'w-5'"></lock-icon>
          <input
            type="text"
            placeholder="Retype Password"
            class="placeholder-gray-100 bg-transparent w-full py-2 pl-3 focus-visible:outline-none"
          />
        </div>
      </div>
      <div class="mt-8 mx-4">
        <div class="bg-btn-blue hover:bg-blue-400 rounded-xl py-4 text-center">Sign up</div>
      </div>
      <div class="flex justify-center pt-2">
        <div>Have an account?</div>
        <div class="text-blue-600 pl-2">Sign in</div>
      </div>
    </section>
  </section>
</template>
