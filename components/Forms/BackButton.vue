<template>
  <div class="flex flex-col justify-center items-center cursor-pointer">
    <button @click="click" class="group relative inline-flex items-center px-3 py-3">
      <svg-icon class="h-5 w-5 group-hover:text-indigo-700" name="circle-left" />
      <span class="ml-2 text-lg font-semibold"><slot></slot></span>
    </button>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup ({ emit }) {
    const click = () => emit('click');
    return {
      click
    }
  }
})
</script>
