module.exports = {
  // Global page headers: https://go.nuxtjs.dev/config-head
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

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/persistedstate.js',
    '@/plugins/validate.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/composition-api/module',
    '@pinia/nuxt',
  ],

  router: {
    middleware:['auth'],
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/svg-sprite',
    'bootstrap-vue/nuxt',
    'nuxt-i18n',
  ],
  i18n: {
    lazy: true,
    loadLanguagesAsync: true,
    locales: [
      {
        name: 'English',
        code: 'en',
        iso: 'en-US',
        file: 'en.js'
      },
      {
        name: 'Mongolian',
        code: 'mn',
        iso: 'mn',
        file: 'mn.js'
      },
      {
        name: 'Portuguese',
        code: 'pt',
        iso: 'pt',
        file: 'pt.js'
      },
    ],
    langDir: 'locales/',
    defaultLocale: 'en',
    strategy: 'prefix_and_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      onlyOnRoot: true,
    },
    parsePages: false,
    pages: {
      '/LoginPage': {
        mn: '/нэвтрэх',
        en: '/LoginPage'
      }
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vee-validate/dist/rules',
                'vee-validate/dist/locale/mn',
                'vee-validate/dist/locale/pt',
                'vee-validate/dist/locale/en'
    ],
    extend(config, ctx) {
      // ...
    }
  },
}
