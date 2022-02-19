<template>
  <div class="flex w-full h-full bg-white rounded-md">
    <div class="flex items-center">
      <svg-icon class="
        h-6
        w-6
        ml-2
        text-indigo-700"
      :name="iconName" />
    </div>
    <input
      class="
        w-full
        px-3
        py-3
        text-gray-700
        rounded-r-md
        transition
        ease-in-out
        duration-150
        font-semibold
        sm:text-sm
        sm:leading-5"
      :placeholder="placeholder"
      type="text"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>

import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: 'Text'
    },
    iconName: {
      type: String,
      default: 'world'
    }
  },
  emits: [
    'update:text'
  ]
  // setup({emit}) {

  //   const onInput =  (event) => {
  //     emit('input', event.target.value);
  //   }

  //   return {
  //     onInput
  //   }
  // }
})

</script>
