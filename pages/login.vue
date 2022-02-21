<template>
  <div class="container mx-auto">
    <Loader :isLoading="isActive"/>
    <ErrorMsg header="Error" :errMessage="authStore.error" />
    <h5>Login</h5>
    <div class="grid p-fluid">
        <div class="col-12 md:col-12">
            <div class="p-inputgroup">
                <span class="p-inputgroup-addon">
                    <i class="pi pi-user"></i>
                </span>
                <InputText v-model="email" type="text" placeholder="Email" />
            </div>
        </div>
        <div class="col-12 md:col-12">
            <div class="p-inputgroup">
                <span class="p-inputgroup-addon">
                    <i class="pi pi-key"></i>
                </span>
                <InputText v-model="password" type="password" placeholder="Password" />
            </div>
        </div>
        <div class="col-12 md:col-12">
            <div class="p-inputgroup">
              <Button @click="loginWithEmail()" label="Submit"/>
            </div>
        </div>
    </div>

    <br>
    <h2>{{ store.counter }}</h2>
    <Button @click="store.increment()" icon="pi pi-plus-circle" label="Add" />
    <Button @click="store.decrement()" icon="pi pi-minus-circle" class="p-button-help" label="Subtract" />
  </div>
</template>

<script >
  import { useStore } from '~/store/store'
  import { useAuthStore } from '~/store/user'
  import Loader from '~/components/Tools/Loader'
  import ErrorMsg from "~/components/Tools/ErrorMsg";
  export default ({
    components: { Loader, ErrorMsg },
    setup() {
      const authStore = useAuthStore();
      const { logInUser } = authStore;
      
      const store = useStore();

      const isActive = ref(false)
      const email = ref('');
      const password = ref('');

      const loginWithEmail = async () => {
        isActive.value = true
        await logInUser(email.value, password.value)
        navigateTo('/')
        isActive.value = false
      }

      return {
        isActive,
        store,
        email,
        password,
        authStore,
        loginWithEmail
      }
    }
  })

  // import { useStore } from '~/store/store'
  // const { $firebaseApp, $firebaseAuth  } = useNuxtApp();
  // // alternatively, you can also use it here
  // const store = useStore()
  // onMounted(async () => {
  //   $firebaseApp
  // })
</script>

<style scoped>
.container {
  margin: auto;
  width: 50%;
  height: 200px;
  text-align: center;
}
</style>