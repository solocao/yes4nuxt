<template>
  <div class="container mt-3" style="width: 540px;">
    <h3>{{ $t('home') }}</h3>
    <h3>{{ $t('hello') }}</h3>
    <Button @click="logout" label="Logout" />

  </div>
</template>

<script setup>
  import { useAuthStore } from '~/store/user'

  useMeta({
    title: '👉 Home',
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  })

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
