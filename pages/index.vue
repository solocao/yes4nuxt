<template>
  <div>
    <nav-bar/>
    <b-container class="mt-5">
      <p>Current language: {{$i18n.locale }}</p>
      <h2>Main page</h2>
    </b-container>
  </div>
</template>

<script>
import { onMounted } from "@nuxtjs/composition-api";
import { useAuthStore } from "~/store/user";
import { useStore } from "~/store/store";
import NavBar from '../components/Navbar/Navbar'

export default {
  name: "IndexPage",
  components: { NavBar  },
  setup() {
    const storeUser = useAuthStore()
    const store = useStore()
    onMounted(async () => {
      console.log('Userid: ', storeUser.user.uid);
      store.list('posts', storeUser.user.uid)
    })
    return {
      storeUser,
      store
    }
  }
}
</script>


<style>
.middle {
  position: fixed;
	text-align: center;
  margin: 40vh auto 0;
}
</style>
