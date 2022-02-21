import { useAuthStore } from "../store/user";

export default defineNuxtRouteMiddleware((to, from) => {
  const store = useAuthStore()
  console.log('LOGGED IN: ', store.isLoggedIn);
  if (to.name !== '/login' && !store.isLoggedIn) return navigateTo('/login')
})