module.exports = {
  head: {
    title: 'yes4nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: [
    'primevue/resources/themes/saga-blue/theme.css',
    'primevue/resources/primevue.css',
    'primeicons/primeicons.css'
  ],

  plugins: ['@/plugins/persisted-state.js'],

  components: true,

  buildModules: [

    '@pinia/nuxt',
  ],

  router: {
    middleware: ['auth'],
  },

  modules: ['@nuxtjs/axios', '@nuxtjs/pwa', '@nuxtjs/svg-sprite'],

  axios: {
    baseURL: '/',
  },

  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  build: {},
}
