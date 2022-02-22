<template>
  <div class="container mt-4">
    <loader :isLoading="isActive"/>
    <Form @submit="signUpWithEmail">

      <AppFormField label="Firstname" name="firstname" type="text" v-model="userForm.firstname" rules="required" />
      <AppFormField label="Lastname" name="lastname" type="text" v-model="userForm.lastname" rules="required" />
      <AppFormField label="Phone" name="phone" type="text" v-model="userForm.phone" rules="required|min:8" />


      <AppFormField label="Email" name="email" type="email" v-model="userForm.email" rules="required|email" />
      <AppFormField label="Password" name="password" type="password" v-model="userForm.password" rules="required|min:6" />
      
      <button type="submit" :disabled="false" class="btn btn-primary" style="width: 100%">Register</button>
    </Form>
  </div>
</template>


<script>
  import { useStore } from '~/store/store'
  import { useAuthStore } from '~/store/user'
  import Loader from '~/components/Tools/Loader'
  import ErrorMsg from "~/components/Tools/ErrorMsg";
  import AppFormField from "~/components/reusable/AppFormField";
  import { Form, useIsFormValid } from 'vee-validate';
  export default ({
    components: { Loader, ErrorMsg, Form, AppFormField },
    setup() {
      const authStore = useAuthStore();
      const { createAccount } = authStore;
      const isValid = useIsFormValid();
      const store = useStore();

      const isActive = ref(false)

      const userForm = reactive({
        email: '',
        password: '',
        firstname: '',
        lastname: '',
        phone: '',
      });

      const signUpWithEmail = async () => {
        isActive.value = true
        await createAccount(userForm.email, userForm.password, userForm.firstname, userForm.lastname, userForm.phone);
        navigateTo('/')
        isActive.value = false
      };
      return {
        userForm,
        isValid,
        signUpWithEmail,
        store,
        isActive
      };
    }
  })
</script>