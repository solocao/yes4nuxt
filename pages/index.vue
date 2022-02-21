<template>
  <div>
    <h3>Home</h3>
    <br>
    <br>
    <Button @click="logout" label="Logout" />
  </div>
</template>

<script setup>
  import { useAuthStore } from '~/store/user'

  const authStore = useAuthStore();
  const { logoutUser } = authStore;

  const logout = () => {
    logoutUser().then((res) => {
      if(res) {
        navigateTo('/login')
      }
    })
  }


</script>
