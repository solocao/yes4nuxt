<template>
  <div class="w-full h-80 mx-auto rounded-lg shadow-2xl my-8 bg-gray-200">
    <div
      class="h-80 flex flex-col items-center justify-center px-4"
    >
      <h4 class="text-gray-900 font-black text-xl text-center">
        Reset Password
      </h4>
      <div class="w-full mt-6 flex rounded-md shadow-sm">
        <TextInput
          v-model="email"
          placeholder="email@mail.com"
          iconName="email"
        />
        <LoadingButton
          :isLoading="loading"
          buttonText="Reset"
          loadingText="In progress"
          iconName="circle-up"
          @clickEvent="reset"
        />
      </div>
      <BackButton
        @click="switchView"
      >
        Back to Login
      </BackButton>

      <!-- Error Message -->
      <ErrorMsg header="Error" :errMessage="store.error" />
    </div>

  </div>
</template>

<script>

import { ref, defineComponent, useRouter } from "@nuxtjs/composition-api";
import { useAuthStore } from "~/store/user";
import ErrorMsg from "../Tools/ErrorMsg.vue";
import LoadingButton from './LoadingButton'
import TextInput from './TextInput'
import BackButton from './BackButton'

export default defineComponent({
  components: {
    ErrorMsg,
    TextInput,
    LoadingButton,
    BackButton,
  },
  props: {

  },
  setup(props, { emit }) {
    const loading = ref(false)
    const email = ref('');
    const store = useAuthStore();

    const switchView = () => {
      emit('switchView')
    };

    const reset = async () => {
      store.error = ''
      loading.value = true
      const res = await store.resetPassword(email.value)
      if(res) emit('switchView');
      loading.value = false
    }


    return {
      loading,
      email,
      store,
      switchView,
      reset
    }

  },
})
</script>
