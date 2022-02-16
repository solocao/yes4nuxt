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
      <ErrorMsg header="Error" :errMessage="errorMsg" />
    </div>

  </div>
</template>

<script>

import { ref, defineComponent, useRouter } from "@nuxtjs/composition-api";
import { fbResetPassword } from "../../utils/authService"
import { getItemListByQuery } from "../../utils/firestoreService"
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

    const errorMsg = ref('');

    const router = useRouter();

    const switchView = () => {
      console.log('clicked me');
      emit('switchView', '')
    };

    const reset = () => {
      loading.value = true
      getItemListByQuery('users', 'email', email.value).then((querySnapshot) => {
        if(!querySnapshot.empty) {
          console.log("User is already registered, So it's ok");
          errorMsg.value = "";
          fbResetPassword(email.value).then((res) => {
            loading.value = false
            emit('switchView', '')
            console.log("Password Reset link has sent!: ", res)
          }).catch((err) => {
            // An error happened.
            loading.value = false
            errorMsg.value = err.message;
            console.log("Error when sending!")
          });
        } else {
          errorMsg.value = "This is not a registered user.";
          console.log("Non registered email");
        }
      });
    }


    return {
      loading,
      email,
      errorMsg,
      switchView,
      reset
    }

  },
})
</script>
