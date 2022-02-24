<template>
  <div class="container-fluid mt-3">
    <h3>Home</h3>
    <h3>{{ $t('hello') }}</h3>
    <Button @click="logout" label="Logout" />

    <div class="locale-changer">
      <select v-model="$i18n.locale">
        <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{ locale }}</option>
      </select>
    </div>

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
