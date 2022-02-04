import { useAuthStore } from '~/store/user'

export default async function ({ $pinia }) {
  // MRS it's very strange to call nuxtServerInit only if (process.client) ... anyhow, this never runs
  // if (process.client) {
    console.log('I am Called then');
    const store = useAuthStore($pinia)
    await store.nuxtServerInit()
  // }
}
