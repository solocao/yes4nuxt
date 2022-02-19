<template>
  <b-container class="mt-4" style="max-width: 480px">
    <b-img center :src="require('../assets/images/yes_logo.png')" style="max-height: 100px" alt="logo"></b-img>
    <b-container class="mt-5">
      <b-tabs content-class="mt-4" align="center" justified>
        <b-tab title="Login" active align="center">
          <LoginForm/>
        </b-tab>
        <b-tab title="Register" align="center">
          <SignupForm/>
        </b-tab>
      </b-tabs>
    </b-container>
  </b-container>
</template>


<script>
import { defineComponent } from "@nuxtjs/composition-api";
import LoginForm from "~/components/Forms/LoginForm.vue";
import SignupForm from "~/components/Forms/SignupForm.vue";

export default defineComponent({
  components: { LoginForm, SignupForm }
})

</script>
