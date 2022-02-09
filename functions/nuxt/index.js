import Vue from 'vue'

import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from './components/nuxt-error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'

/* Plugins */

import nuxt_plugin_plugin_958b576e from 'nuxt_plugin_plugin_958b576e' // Source: ./components/plugin.js (mode: 'all')
import nuxt_plugin_plugin_78b6b271 from 'nuxt_plugin_plugin_78b6b271' // Source: ./composition-api/plugin.mjs (mode: 'all')
import nuxt_plugin_nuxtsvgsprite_632b1586 from 'nuxt_plugin_nuxtsvgsprite_632b1586' // Source: ./nuxt-svg-sprite.js (mode: 'all')
import nuxt_plugin_workbox_4d96c38a from 'nuxt_plugin_workbox_4d96c38a' // Source: ./workbox.js (mode: 'client')
import nuxt_plugin_metaplugin_e2550b64 from 'nuxt_plugin_metaplugin_e2550b64' // Source: ./pwa/meta.plugin.js (mode: 'all')
import nuxt_plugin_iconplugin_d905c07c from 'nuxt_plugin_iconplugin_d905c07c' // Source: ./pwa/icon.plugin.js (mode: 'all')
import nuxt_plugin_axios_7b6c3642 from 'nuxt_plugin_axios_7b6c3642' // Source: ./axios.js (mode: 'all')
import nuxt_plugin_distplugin47b16295_15c4dfe3 from 'nuxt_plugin_distplugin47b16295_15c4dfe3' // Source: ./dist.plugin.47b16295.mjs (mode: 'all')
import nuxt_plugin_persistedstate_38254ec5 from 'nuxt_plugin_persistedstate_38254ec5' // Source: ../plugins/persistedstate.js (mode: 'all')
import nuxt_plugin_meta_50da75c3 from 'nuxt_plugin_meta_50da75c3' // Source: ./composition-api/meta.mjs (mode: 'all')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config)

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"yes4nuxt","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":""},{"name":"format-detection","content":"telephone=no"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"}],"style":[],"script":[]},

    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_958b576e === 'function') {
    await nuxt_plugin_plugin_958b576e(app.context, inject)
  }

  if (typeof nuxt_plugin_plugin_78b6b271 === 'function') {
    await nuxt_plugin_plugin_78b6b271(app.context, inject)
  }

  if (typeof nuxt_plugin_nuxtsvgsprite_632b1586 === 'function') {
    await nuxt_plugin_nuxtsvgsprite_632b1586(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_workbox_4d96c38a === 'function') {
    await nuxt_plugin_workbox_4d96c38a(app.context, inject)
  }

  if (typeof nuxt_plugin_metaplugin_e2550b64 === 'function') {
    await nuxt_plugin_metaplugin_e2550b64(app.context, inject)
  }

  if (typeof nuxt_plugin_iconplugin_d905c07c === 'function') {
    await nuxt_plugin_iconplugin_d905c07c(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_7b6c3642 === 'function') {
    await nuxt_plugin_axios_7b6c3642(app.context, inject)
  }

  if (typeof nuxt_plugin_distplugin47b16295_15c4dfe3 === 'function') {
    await nuxt_plugin_distplugin47b16295_15c4dfe3(app.context, inject)
  }

  if (typeof nuxt_plugin_persistedstate_38254ec5 === 'function') {
    await nuxt_plugin_persistedstate_38254ec5(app.context, inject)
  }

  if (typeof nuxt_plugin_meta_50da75c3 === 'function') {
    await nuxt_plugin_meta_50da75c3(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (process.client) {
      const { route } = router.resolve(app.context.route.fullPath)
      if (!route.matched.length) {
        return resolve()
      }
    }
    router.replace(app.context.route.fullPath, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    app,
    router
  }
}

export { createApp, NuxtError }
