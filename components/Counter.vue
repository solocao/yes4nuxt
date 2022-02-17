<template>
  <div
    class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-md w-full space-y-8">
      <h2 class="mt-6 text-center text-2xl font-bold text-sky-400/100">
        {{ store.nick }}
      </h2>
      <img
        class="mx-auto h-24 w-auto"
        :src="require('../assets/images/yes_logo.png')"
        alt="Workflow"
      />
      <h2 class="mt-6 text-center text-6xl font-extrabold text-gray-900">
        {{ store.counter }}
        {{ store.hasChanged }}
        {{ store.items.length }}
      </h2>
      <div
        class="flex rounded-lg divide-x divide-gray-200 shadow sm:flex dark:divide-gray-700"
      >
        <li class="w-full list-none">
          <button
            class="inline-block relative py-4 px-4 w-full text-3xl font-bold text-center hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
            @click="increment()"
          >
            +
          </button>
        </li>
        <li class="w-full list-none">
          <button
            href="#"
            class="inline-block relative py-4 px-4 w-full text-3xl font-bold text-center hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
            @click="decrement()"
          >
            -
          </button>
        </li>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, useMeta } from '@nuxtjs/composition-api'
import { useStore } from '../store/store'
// import { useTenantStore } from '../store/tenant'

export default defineComponent({
  head() {},
  setup() {
    const { title } = useMeta()

    title.value = '🍕 Hi'

    const store = useStore()
    // const tenantStore = useTenantStore()

    const increment = () => {
      store.$patch((state) => {
        state.items.push({ name: 'shoes', quantity: 1 })
        state.hasChanged = true
      })
      store.increment()
    }
    const decrement = () => {
      store.decrement()
    }

    return {
      store,
      // tenantStore,
      increment,
      decrement,
    }
  },
})
</script>
