
// --------------------
// Request: C:/DEV/VUE/yes4nuxt/node_modules/nuxt3/dist/app/entry
// Parents: 
// - <entry> ($id_c757eb9e)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/bootstrap.mjs ($id_fef466a9)
// --------------------
const $id_96d255e5 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const entry = true ? (ctx) => __vite_ssr_dynamic_import__('/node_modules/nuxt3/dist/app/bootstrap.mjs').then((m) => m.default(ctx)) : () => __vite_ssr_dynamic_import__('/node_modules/nuxt3/dist/app/bootstrap.mjs').then((m) => m.default);
if (false) {
  entry();
}
__vite_ssr_exports__.default = entry;
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/bootstrap.mjs
// Parents: 
// - C:/DEV/VUE/yes4nuxt/node_modules/nuxt3/dist/app/entry ($id_96d255e5)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// - /@id/__x00__virtual:C:/DEV/VUE/yes4nuxt/.nuxt/css.mjs ($id_a565eb3a)
// - /@id/__x00__virtual:C:/DEV/VUE/yes4nuxt/.nuxt/plugins/server.mjs ($id_f92b9082)
// - /@id/__x00__virtual:C:/DEV/VUE/yes4nuxt/.nuxt/root-component.mjs ($id_74e163d3)
// - /@id/__x00__virtual:C:/DEV/VUE/yes4nuxt/.nuxt/app-component.mjs ($id_f69acb79)
// --------------------
const $id_fef466a9 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/__x00__virtual:C:/DEV/VUE/yes4nuxt/.nuxt/css.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/__x00__virtual:C:/DEV/VUE/yes4nuxt/.nuxt/plugins/server.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/__x00__virtual:C:/DEV/VUE/yes4nuxt/.nuxt/root-component.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/__x00__virtual:C:/DEV/VUE/yes4nuxt/.nuxt/app-component.mjs");

let entry;
const plugins = __vite_ssr_import_1__.normalizePlugins(__vite_ssr_import_3__.default);
if (true) {
  entry = async function createNuxtAppServer(ssrContext = {}) {
    const vueApp = __vite_ssr_import_0__.createApp(__vite_ssr_import_4__.default);
    vueApp.component("App", __vite_ssr_import_5__.default);
    const nuxt = __vite_ssr_import_1__.createNuxtApp({ vueApp, ssrContext });
    await __vite_ssr_import_1__.applyPlugins(nuxt, plugins);
    await nuxt.hooks.callHook("app:created", vueApp);
    return vueApp;
  };
}
if (false) {
  if (true && __vite_ssr_import_meta__.webpackHot) {
    __vite_ssr_import_meta__.webpackHot.accept();
  }
  entry = async function initApp() {
    const isSSR = Boolean(window.__NUXT__?.serverRendered);
    const vueApp = isSSR ? __vite_ssr_import_0__.createSSRApp(__vite_ssr_import_4__.default) : __vite_ssr_import_0__.createApp(__vite_ssr_import_4__.default);
    vueApp.component("App", __vite_ssr_import_5__.default);
    const nuxt = __vite_ssr_import_1__.createNuxtApp({ vueApp });
    await __vite_ssr_import_1__.applyPlugins(nuxt, plugins);
    await nuxt.hooks.callHook("app:created", vueApp);
    await nuxt.hooks.callHook("app:beforeMount", vueApp);
    nuxt.hooks.hookOnce("app:suspense:resolve", () => {
      nuxt.isHydrating = false;
    });
    vueApp.mount("#__nuxt");
    await nuxt.hooks.callHook("app:mounted", vueApp);
    await __vite_ssr_import_0__.nextTick();
  };
  entry().catch((error) => {
    console.error("Error while mounting app:", error);
  });
}
__vite_ssr_exports__.default = (ctx) => entry(ctx);
;
}


// --------------------
// Request: /node_modules/vue/dist/vue.cjs.js
// Parents: 
// - /node_modules/nuxt3/dist/app/bootstrap.mjs ($id_fef466a9)
// - /node_modules/nuxt3/dist/app/nuxt.mjs ($id_bf77ef36)
// - /node_modules/nuxt3/dist/app/composables/component.mjs ($id_b47c3881)
// - /node_modules/nuxt3/dist/app/composables/asyncData.mjs ($id_a2ef143e)
// - /node_modules/nuxt3/dist/app/composables/state.mjs ($id_d232db97)
// - /node_modules/nuxt3/dist/app/composables/cookie.mjs ($id_792d64c4)
// - /node_modules/nuxt3/dist/meta/runtime/composables.mjs ($id_ca9295be)
// - /node_modules/@vueuse/head/dist/index.mjs ($id_c032264e)
// - /node_modules/nuxt3/dist/meta/runtime/lib/vueuse-head.plugin.mjs ($id_cbe5172d)
// - /node_modules/nuxt3/dist/meta/runtime/plugin.mjs ($id_9fd5f35e)
// - /node_modules/nuxt3/dist/meta/runtime/components.mjs ($id_94744df3)
// - /node_modules/nuxt3/dist/pages/runtime/router.mjs ($id_a4d6cb5b)
// - /node_modules/nuxt3/dist/pages/runtime/page.mjs ($id_485c89bf)
// - /node_modules/nuxt3/dist/pages/runtime/utils.mjs ($id_e1b210cc)
// - /node_modules/nuxt3/dist/pages/runtime/layout.mjs ($id_9b68c93f)
// - /@id/__x00__virtual:C:/DEV/VUE/yes4nuxt/.nuxt/layouts.mjs ($id_fe6968b4)
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /components/Forms/LoginForm.vue ($id_600babf2)
// - /components/Tools/Loader.vue ($id_c71ecea5)
// - /components/Tools/ErrorMsg.vue ($id_faa89f61)
// - /components/reusable/AppFormField.vue ($id_def58cce)
// - /node_modules/vee-validate/dist/vee-validate.esm.js ($id_2387c42e)
// - /components/Forms/Register.vue ($id_7dc4ae3d)
// - /pages/login.vue?macro=true ($id_213baa8a)
// - /pages/index.vue ($id_cca58e97)
// - /pages/login.vue ($id_b0922173)
// - /@id/__x00__virtual:C:/DEV/VUE/yes4nuxt/.nuxt/dist.plugin.d8412656.mjs ($id_052b8ccd)
// - /node_modules/nuxt3/dist/app/compat/capi.mjs ($id_7674cc72)
// - /node_modules/primevue/config/config.esm.js ($id_d31542f8)
// - /node_modules/primevue/button/button.esm.js ($id_9578581f)
// - /node_modules/primevue/menubar/menubar.esm.js ($id_1db5deaf)
// - /node_modules/primevue/inputtext/inputtext.esm.js ($id_743d0bd5)
// - /@id/__x00__virtual:C:/DEV/VUE/yes4nuxt/.nuxt/components.mjs ($id_5fe6b26c)
// - /node_modules/nuxt3/dist/app/components/nuxt-root.vue ($id_f8564e04)
// - /components/Header/Header.vue ($id_73b23c04)
// - /app.vue ($id_2b46e842)
// Dependencies: 

// --------------------
const $id_60f0615f = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import("file:///C:/DEV/VUE/yes4nuxt/node_modules/vue/dist/vue.cjs.js").then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error("[vite dev] Error loading external \"C:/DEV/VUE/yes4nuxt/node_modules/vue/dist/vue.cjs.js\".") })


// --------------------
// Request: /node_modules/nuxt3/dist/app/index.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/bootstrap.mjs ($id_fef466a9)
// - /node_modules/nuxt3/dist/app/composables/asyncData.mjs ($id_a2ef143e)
// - /node_modules/nuxt3/dist/app/composables/hydrate.mjs ($id_43a772c2)
// - /node_modules/nuxt3/dist/app/composables/state.mjs ($id_d232db97)
// - /node_modules/nuxt3/dist/app/composables/cookie.mjs ($id_792d64c4)
// - /node_modules/nuxt3/dist/app/composables/ssr.mjs ($id_4d0dc923)
// - /node_modules/nuxt3/dist/app/composables/router.mjs ($id_541bda03)
// - /node_modules/nuxt3/dist/meta/runtime/composables.mjs ($id_ca9295be)
// - /node_modules/nuxt3/dist/app/plugins/preload.server.mjs ($id_b9f3c557)
// - /node_modules/nuxt3/dist/meta/runtime/lib/vueuse-head.plugin.mjs ($id_cbe5172d)
// - /node_modules/nuxt3/dist/meta/runtime/plugin.mjs ($id_9fd5f35e)
// - /node_modules/nuxt3/dist/pages/runtime/page.mjs ($id_485c89bf)
// - /node_modules/nuxt3/dist/pages/runtime/router.mjs ($id_a4d6cb5b)
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /components/Forms/LoginForm.vue ($id_600babf2)
// - /components/Forms/Register.vue ($id_7dc4ae3d)
// - /pages/index.vue ($id_cca58e97)
// - /middleware/auth.js ($id_3fdca93e)
// - /plugins/primevue.ts ($id_934480b9)
// - /node_modules/nuxt3/dist/app/components/nuxt-root.vue ($id_f8564e04)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/nuxt.mjs ($id_bf77ef36)
// - /node_modules/nuxt3/dist/app/composables/index.mjs ($id_42ae3d5d)
// - /node_modules/nuxt3/dist/meta/runtime/index.mjs ($id_ea12a3fb)
// --------------------
const $id_d8c2af0f = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/nuxt.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/index.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_1__);
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/meta/runtime/index.mjs");

Object.defineProperty(__vite_ssr_exports__, "useMeta", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.useMeta }});
const isVue2 = false;
Object.defineProperty(__vite_ssr_exports__, "isVue2", { enumerable: true, configurable: true, get(){ return isVue2 }});
const isVue3 = true;
Object.defineProperty(__vite_ssr_exports__, "isVue3", { enumerable: true, configurable: true, get(){ return isVue3 }});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/nuxt.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// - /node_modules/nuxt3/dist/app/compat/legacy-app.mjs ($id_75047751)
// - /node_modules/nuxt3/dist/app/composables/component.mjs ($id_b47c3881)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/hookable/dist/index.mjs ($id_a2c811c4)
// - /node_modules/nuxt3/dist/app/compat/legacy-app.mjs ($id_75047751)
// --------------------
const $id_bf77ef36 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/hookable/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/compat/legacy-app.mjs");

const NuxtPluginIndicator = "__nuxt_plugin";
Object.defineProperty(__vite_ssr_exports__, "NuxtPluginIndicator", { enumerable: true, configurable: true, get(){ return NuxtPluginIndicator }});
function createNuxtApp(options) {
  const nuxtApp = {
    provide: void 0,
    globalName: "nuxt",
    payload: __vite_ssr_import_0__.reactive({
      data: {},
      state: {},
      _errors: {},
      ...false ? window.__NUXT__ : { serverRendered: true }
    }),
    isHydrating: false,
    _asyncDataPromises: {},
    ...options
  };
  nuxtApp.hooks = __vite_ssr_import_1__.createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  if (nuxtApp.ssrContext) {
    nuxtApp.ssrContext.nuxt = nuxtApp;
  }
  if (true) {
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    nuxtApp.ssrContext.payload = nuxtApp.payload;
  }
  if (true) {
    nuxtApp.provide("config", options.ssrContext.runtimeConfig.private);
    nuxtApp.payload.config = options.ssrContext.runtimeConfig.public;
  } else {
    nuxtApp.provide("config", __vite_ssr_import_0__.reactive(nuxtApp.payload.config));
  }
  return nuxtApp;
}
Object.defineProperty(__vite_ssr_exports__, "createNuxtApp", { enumerable: true, configurable: true, get(){ return createNuxtApp }});
async function applyPlugin(nuxtApp, plugin) {
  if (typeof plugin !== "function") {
    return;
  }
  const { provide } = await callWithNuxt(nuxtApp, plugin, [nuxtApp]) || {};
  if (provide && typeof provide === "object") {
    for (const key in provide) {
      nuxtApp.provide(key, provide[key]);
    }
  }
}
Object.defineProperty(__vite_ssr_exports__, "applyPlugin", { enumerable: true, configurable: true, get(){ return applyPlugin }});
async function applyPlugins(nuxtApp, plugins) {
  for (const plugin of plugins) {
    await applyPlugin(nuxtApp, plugin);
  }
}
Object.defineProperty(__vite_ssr_exports__, "applyPlugins", { enumerable: true, configurable: true, get(){ return applyPlugins }});
function normalizePlugins(_plugins) {
  let needsLegacyContext = false;
  const plugins = _plugins.map((plugin) => {
    if (typeof plugin !== "function") {
      return () => {
      };
    }
    if (isLegacyPlugin(plugin)) {
      needsLegacyContext = true;
      return (nuxtApp) => plugin(nuxtApp._legacyContext, nuxtApp.provide);
    }
    return plugin;
  });
  if (needsLegacyContext) {
    plugins.unshift(__vite_ssr_import_2__.legacyPlugin);
  }
  return plugins;
}
Object.defineProperty(__vite_ssr_exports__, "normalizePlugins", { enumerable: true, configurable: true, get(){ return normalizePlugins }});
function defineNuxtPlugin(plugin) {
  plugin[NuxtPluginIndicator] = true;
  return plugin;
}
Object.defineProperty(__vite_ssr_exports__, "defineNuxtPlugin", { enumerable: true, configurable: true, get(){ return defineNuxtPlugin }});
function isLegacyPlugin(plugin) {
  return !plugin[NuxtPluginIndicator];
}
Object.defineProperty(__vite_ssr_exports__, "isLegacyPlugin", { enumerable: true, configurable: true, get(){ return isLegacyPlugin }});
let currentNuxtAppInstance;
const setNuxtAppInstance = (nuxt) => {
  currentNuxtAppInstance = nuxt;
};
Object.defineProperty(__vite_ssr_exports__, "setNuxtAppInstance", { enumerable: true, configurable: true, get(){ return setNuxtAppInstance }});
function callWithNuxt(nuxt, setup, args) {
  setNuxtAppInstance(nuxt);
  const p = args ? setup(...args) : setup();
  if (true) {
    setNuxtAppInstance(null);
  }
  return p;
}
Object.defineProperty(__vite_ssr_exports__, "callWithNuxt", { enumerable: true, configurable: true, get(){ return callWithNuxt }});
function useNuxtApp() {
  const vm = __vite_ssr_import_0__.getCurrentInstance();
  if (!vm) {
    if (!currentNuxtAppInstance) {
      throw new Error("nuxt instance unavailable");
    }
    return currentNuxtAppInstance;
  }
  return vm.appContext.app.$nuxt;
}
Object.defineProperty(__vite_ssr_exports__, "useNuxtApp", { enumerable: true, configurable: true, get(){ return useNuxtApp }});
function useRuntimeConfig() {
  return useNuxtApp().$config;
}
Object.defineProperty(__vite_ssr_exports__, "useRuntimeConfig", { enumerable: true, configurable: true, get(){ return useRuntimeConfig }});
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
;
}


// --------------------
// Request: /node_modules/hookable/dist/index.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/nuxt.mjs ($id_bf77ef36)
// Dependencies: 

// --------------------
const $id_a2c811c4 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import("file:///C:/DEV/VUE/yes4nuxt/node_modules/hookable/dist/index.mjs").then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error("[vite dev] Error loading external \"C:/DEV/VUE/yes4nuxt/node_modules/hookable/dist/index.mjs\".") })


// --------------------
// Request: /node_modules/nuxt3/dist/app/compat/legacy-app.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/nuxt.mjs ($id_bf77ef36)
// Dependencies: 
// - /node_modules/unenv/runtime/mock/proxy.mjs ($id_39e12da7)
// - /node_modules/nuxt3/dist/app/nuxt.mjs ($id_bf77ef36)
// --------------------
const $id_75047751 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/unenv/runtime/mock/proxy.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/nuxt.mjs");

function mock(warning) {
  console.warn(warning);
  return __vite_ssr_import_0__.default;
}
const unsupported = new Set([
  "store",
  "spa",
  "fetchCounters"
]);
const todo = new Set([
  "isHMR",
  "base",
  "payload",
  "from",
  "next",
  "error",
  "redirect",
  "redirected",
  "enablePreview",
  "$preview",
  "beforeNuxtRender",
  "beforeSerialize"
]);
const serverProperties = new Set([
  "req",
  "res",
  "ssrContext"
]);
const routerKeys = ["route", "params", "query"];
const staticFlags = {
  isClient: false,
  isServer: true,
  isDev: true,
  isStatic: void 0,
  target: "server",
  modern: false
};
const legacyPlugin = (nuxtApp) => {
  nuxtApp._legacyContext = new Proxy(nuxtApp, {
    get(nuxt, p) {
      if (unsupported.has(p)) {
        return mock(`Accessing ${p} is not supported in Nuxt 3.`);
      }
      if (todo.has(p)) {
        return mock(`Accessing ${p} is not yet supported in Nuxt 3.`);
      }
      if (routerKeys.includes(p)) {
        if (!("$router" in nuxtApp)) {
          return mock("vue-router is not being used in this project.");
        }
        switch (p) {
          case "route":
            return nuxt.$router.currentRoute.value;
          case "params":
          case "query":
            return nuxt.$router.currentRoute.value[p];
        }
      }
      if (p === "$config" || p === "env") {
        return __vite_ssr_import_1__.useRuntimeConfig();
      }
      if (p in staticFlags) {
        return staticFlags[p];
      }
      if (false && serverProperties.has(p)) {
        return void 0;
      }
      if (p === "ssrContext") {
        return nuxt._legacyContext;
      }
      if (nuxt.ssrContext && p in nuxt.ssrContext) {
        return nuxt.ssrContext[p];
      }
      if (p === "nuxt") {
        return nuxt.payload;
      }
      if (p === "nuxtState") {
        return nuxt.payload.data;
      }
      if (p in nuxtApp.vueApp) {
        return nuxtApp.vueApp[p];
      }
      if (p in nuxtApp) {
        return nuxtApp[p];
      }
      return mock(`Accessing ${p} is not supported in Nuxt3.`);
    }
  });
  if (false) {
    nuxtApp.hook("app:created", () => {
      const legacyApp = new Proxy(nuxtApp.vueApp, {
        get(source, p) {
          if (["$root", "constructor"].includes(p)) {
            return legacyApp;
          }
          return source[p] || nuxtApp[p];
        }
      });
      window[`$${nuxtApp.globalName}`] = legacyApp;
    });
  }
};
Object.defineProperty(__vite_ssr_exports__, "legacyPlugin", { enumerable: true, configurable: true, get(){ return legacyPlugin }});
;
}


// --------------------
// Request: /node_modules/unenv/runtime/mock/proxy.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/compat/legacy-app.mjs ($id_75047751)
// Dependencies: 

// --------------------
const $id_39e12da7 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import("file:///C:/DEV/VUE/yes4nuxt/node_modules/unenv/runtime/mock/proxy.mjs").then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error("[vite dev] Error loading external \"C:/DEV/VUE/yes4nuxt/node_modules/unenv/runtime/mock/proxy.mjs\".") })


// --------------------
// Request: /node_modules/nuxt3/dist/app/composables/index.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/composables/component.mjs ($id_b47c3881)
// - /node_modules/nuxt3/dist/app/composables/asyncData.mjs ($id_a2ef143e)
// - /node_modules/nuxt3/dist/app/composables/hydrate.mjs ($id_43a772c2)
// - /node_modules/nuxt3/dist/app/composables/state.mjs ($id_d232db97)
// - /node_modules/nuxt3/dist/app/composables/fetch.mjs ($id_765a0ed7)
// - /node_modules/nuxt3/dist/app/composables/cookie.mjs ($id_792d64c4)
// - /node_modules/nuxt3/dist/app/composables/ssr.mjs ($id_4d0dc923)
// - /node_modules/nuxt3/dist/app/composables/router.mjs ($id_541bda03)
// --------------------
const $id_42ae3d5d = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/component.mjs");

Object.defineProperty(__vite_ssr_exports__, "defineNuxtComponent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.defineNuxtComponent }});
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/asyncData.mjs");

Object.defineProperty(__vite_ssr_exports__, "useAsyncData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_1__.useAsyncData }});
Object.defineProperty(__vite_ssr_exports__, "useLazyAsyncData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_1__.useLazyAsyncData }});
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/hydrate.mjs");

Object.defineProperty(__vite_ssr_exports__, "useHydration", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.useHydration }});
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/state.mjs");

Object.defineProperty(__vite_ssr_exports__, "useState", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.useState }});
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/fetch.mjs");

Object.defineProperty(__vite_ssr_exports__, "useFetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.useFetch }});
Object.defineProperty(__vite_ssr_exports__, "useLazyFetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.useLazyFetch }});
const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/cookie.mjs");

Object.defineProperty(__vite_ssr_exports__, "useCookie", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_5__.useCookie }});
const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/ssr.mjs");

Object.defineProperty(__vite_ssr_exports__, "useRequestHeaders", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_6__.useRequestHeaders }});
const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/router.mjs");

Object.defineProperty(__vite_ssr_exports__, "abortNavigation", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.abortNavigation }});
Object.defineProperty(__vite_ssr_exports__, "addRouteMiddleware", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.addRouteMiddleware }});
Object.defineProperty(__vite_ssr_exports__, "defineNuxtRouteMiddleware", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.defineNuxtRouteMiddleware }});
Object.defineProperty(__vite_ssr_exports__, "navigateTo", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.navigateTo }});
Object.defineProperty(__vite_ssr_exports__, "useRoute", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useRoute }});
Object.defineProperty(__vite_ssr_exports__, "useRouter", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useRouter }});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/composables/component.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/index.mjs ($id_42ae3d5d)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue-router/dist/vue-router.cjs.js ($id_f9a4a698)
// - /node_modules/nuxt3/dist/app/nuxt.mjs ($id_bf77ef36)
// - /node_modules/nuxt3/dist/app/composables/asyncData.mjs ($id_a2ef143e)
// --------------------
const $id_b47c3881 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue-router/dist/vue-router.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/nuxt.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/asyncData.mjs");

const NuxtComponentIndicator = "__nuxt_component";
Object.defineProperty(__vite_ssr_exports__, "NuxtComponentIndicator", { enumerable: true, configurable: true, get(){ return NuxtComponentIndicator }});
async function runLegacyAsyncData(res, fn) {
  const nuxt = __vite_ssr_import_2__.useNuxtApp();
  const route = __vite_ssr_import_1__.useRoute();
  const vm = __vite_ssr_import_0__.getCurrentInstance();
  const { fetchKey } = vm.proxy.$options;
  const key = typeof fetchKey === "function" ? fetchKey(() => "") : fetchKey || route.fullPath;
  const { data } = await __vite_ssr_import_3__.useAsyncData(`options:asyncdata:${key}`, () => fn(nuxt._legacyContext));
  if (data.value && typeof data.value === "object") {
    Object.assign(await res, __vite_ssr_import_0__.toRefs(__vite_ssr_import_0__.reactive(data.value)));
  } else if (true) {
    console.warn("[nuxt] asyncData should return an object", data);
  }
}
const defineNuxtComponent = function defineNuxtComponent2(options) {
  const { setup } = options;
  if (!setup && !options.asyncData) {
    return {
      [NuxtComponentIndicator]: true,
      ...options
    };
  }
  return {
    [NuxtComponentIndicator]: true,
    ...options,
    setup(props, ctx) {
      const res = setup?.(props, ctx) || {};
      let promises = [];
      promises = promises || [];
      if (options.asyncData) {
        promises.push(runLegacyAsyncData(res, options.asyncData));
      }
      return Promise.resolve(res).then(() => Promise.all(promises)).then(() => res).finally(() => {
        promises.length = 0;
        promises = null;
      });
    }
  };
};
Object.defineProperty(__vite_ssr_exports__, "defineNuxtComponent", { enumerable: true, configurable: true, get(){ return defineNuxtComponent }});
;
}


// --------------------
// Request: /node_modules/vue-router/dist/vue-router.cjs.js
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/component.mjs ($id_b47c3881)
// - /node_modules/nuxt3/dist/pages/runtime/router.mjs ($id_a4d6cb5b)
// - /node_modules/nuxt3/dist/pages/runtime/page.mjs ($id_485c89bf)
// - /node_modules/nuxt3/dist/pages/runtime/layout.mjs ($id_9b68c93f)
// Dependencies: 

// --------------------
const $id_f9a4a698 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import("file:///C:/DEV/VUE/yes4nuxt/node_modules/vue-router/dist/vue-router.cjs.js").then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error("[vite dev] Error loading external \"C:/DEV/VUE/yes4nuxt/node_modules/vue-router/dist/vue-router.cjs.js\".") })


// --------------------
// Request: /node_modules/nuxt3/dist/app/composables/asyncData.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/component.mjs ($id_b47c3881)
// - /node_modules/nuxt3/dist/app/composables/index.mjs ($id_42ae3d5d)
// - /node_modules/nuxt3/dist/app/composables/fetch.mjs ($id_765a0ed7)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// --------------------
const $id_a2ef143e = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

const getDefault = () => null;
function useAsyncData(key, handler, options = {}) {
  if (typeof key !== "string") {
    throw new TypeError("asyncData key must be a string");
  }
  if (typeof handler !== "function") {
    throw new TypeError("asyncData handler must be a function");
  }
  options = { server: true, default: getDefault, ...options };
  if (options.defer) {
    console.warn("[useAsyncData] `defer` has been renamed to `lazy`. Support for `defer` will be removed in RC.");
  }
  options.lazy = options.lazy ?? options.defer ?? false;
  const nuxt = __vite_ssr_import_1__.useNuxtApp();
  const instance = __vite_ssr_import_0__.getCurrentInstance();
  if (instance && !instance._nuxtOnBeforeMountCbs) {
    const cbs = instance._nuxtOnBeforeMountCbs = [];
    if (instance && false) {
      __vite_ssr_import_0__.onBeforeMount(() => {
        cbs.forEach((cb) => {
          cb();
        });
        cbs.splice(0, cbs.length);
      });
      __vite_ssr_import_0__.onUnmounted(() => cbs.splice(0, cbs.length));
    }
  }
  const asyncData = {
    data: __vite_ssr_import_0__.ref(nuxt.payload.data[key] ?? options.default()),
    pending: __vite_ssr_import_0__.ref(true),
    error: __vite_ssr_import_0__.ref(nuxt.payload._errors[key] ?? null)
  };
  asyncData.refresh = (force) => {
    if (nuxt._asyncDataPromises[key] && !force) {
      return nuxt._asyncDataPromises[key];
    }
    asyncData.pending.value = true;
    nuxt._asyncDataPromises[key] = Promise.resolve(handler(nuxt)).then((result) => {
      if (options.transform) {
        result = options.transform(result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      asyncData.data.value = result;
      asyncData.error.value = null;
    }).catch((error) => {
      asyncData.error.value = error;
      asyncData.data.value = options.default();
    }).finally(() => {
      asyncData.pending.value = false;
      nuxt.payload.data[key] = asyncData.data.value;
      if (asyncData.error.value) {
        nuxt.payload._errors[key] = true;
      }
      delete nuxt._asyncDataPromises[key];
    });
    return nuxt._asyncDataPromises[key];
  };
  const fetchOnServer = options.server !== false && nuxt.payload.serverRendered;
  if (true && fetchOnServer) {
    const promise = asyncData.refresh();
    __vite_ssr_import_0__.onServerPrefetch(() => promise);
  }
  if (false) {
    if (fetchOnServer && nuxt.isHydrating) {
      asyncData.pending.value = false;
    } else if (instance && (nuxt.isHydrating || options.lazy)) {
      instance._nuxtOnBeforeMountCbs.push(asyncData.refresh);
    } else {
      asyncData.refresh();
    }
  }
  const asyncDataPromise = Promise.resolve(nuxt._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
Object.defineProperty(__vite_ssr_exports__, "useAsyncData", { enumerable: true, configurable: true, get(){ return useAsyncData }});
function useLazyAsyncData(key, handler, options = {}) {
  return useAsyncData(key, handler, { ...options, lazy: true });
}
Object.defineProperty(__vite_ssr_exports__, "useLazyAsyncData", { enumerable: true, configurable: true, get(){ return useLazyAsyncData }});
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/composables/hydrate.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/index.mjs ($id_42ae3d5d)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// --------------------
const $id_43a772c2 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

const useHydration = (key, get, set) => {
  const nuxt = __vite_ssr_import_0__.useNuxtApp();
  if (true) {
    nuxt.hooks.hook("app:rendered", () => {
      nuxt.payload[key] = get();
    });
  }
  if (false) {
    nuxt.hooks.hook("app:created", () => {
      set(nuxt.payload[key]);
    });
  }
};
Object.defineProperty(__vite_ssr_exports__, "useHydration", { enumerable: true, configurable: true, get(){ return useHydration }});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/composables/state.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/index.mjs ($id_42ae3d5d)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// --------------------
const $id_d232db97 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

const useState = (key, init) => {
  const nuxt = __vite_ssr_import_1__.useNuxtApp();
  const state = __vite_ssr_import_0__.toRef(nuxt.payload.state, key);
  if (state.value === void 0 && init) {
    state.value = init();
  }
  return state;
};
Object.defineProperty(__vite_ssr_exports__, "useState", { enumerable: true, configurable: true, get(){ return useState }});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/composables/fetch.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/index.mjs ($id_42ae3d5d)
// Dependencies: 
// - /node_modules/murmurhash-es/dist/index.mjs ($id_fbf6dac3)
// - /node_modules/nuxt3/dist/app/composables/asyncData.mjs ($id_a2ef143e)
// --------------------
const $id_765a0ed7 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/murmurhash-es/dist/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/asyncData.mjs");

function useFetch(url, opts = {}) {
  if (!opts.key) {
    const keys = { u: url };
    if (opts.baseURL) {
      keys.b = opts.baseURL;
    }
    if (opts.method && opts.method.toLowerCase() !== "get") {
      keys.m = opts.method.toLowerCase();
    }
    if (opts.params) {
      keys.p = opts.params;
    }
    opts.key = generateKey(keys);
  }
  return __vite_ssr_import_1__.useAsyncData(opts.key, () => $fetch(url, opts), opts);
}
Object.defineProperty(__vite_ssr_exports__, "useFetch", { enumerable: true, configurable: true, get(){ return useFetch }});
function useLazyFetch(url, opts = {}) {
  return useFetch(url, { ...opts, lazy: true });
}
Object.defineProperty(__vite_ssr_exports__, "useLazyFetch", { enumerable: true, configurable: true, get(){ return useLazyFetch }});
function generateKey(keys) {
  return "$f" + __vite_ssr_import_0__.murmurHashV3(JSON.stringify(keys));
}
;
}


// --------------------
// Request: /node_modules/murmurhash-es/dist/index.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/fetch.mjs ($id_765a0ed7)
// Dependencies: 

// --------------------
const $id_fbf6dac3 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import("file:///C:/DEV/VUE/yes4nuxt/node_modules/murmurhash-es/dist/index.mjs").then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error("[vite dev] Error loading external \"C:/DEV/VUE/yes4nuxt/node_modules/murmurhash-es/dist/index.mjs\".") })


// --------------------
// Request: /node_modules/nuxt3/dist/app/composables/cookie.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/index.mjs ($id_42ae3d5d)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/cookie-es/dist/index.mjs ($id_f4975261)
// - /node_modules/h3/dist/index.mjs ($id_57d7ded6)
// - /node_modules/destr/dist/index.mjs ($id_03d15ecd)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// --------------------
const $id_792d64c4 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/cookie-es/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/h3/dist/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/destr/dist/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

const CookieDefaults = {
  decode: (val) => __vite_ssr_import_3__.default(decodeURIComponent(val)),
  encode: (val) => encodeURIComponent(typeof val === "string" ? val : JSON.stringify(val))
};
function useCookie(name, _opts) {
  const opts = { ...CookieDefaults, ..._opts };
  const cookies = readRawCookies(opts);
  const cookie = __vite_ssr_import_0__.ref(cookies[name] ?? opts.default?.());
  if (false) {
    __vite_ssr_import_0__.watch(cookie, () => {
      writeClientCookie(name, cookie.value, opts);
    });
  } else if (true) {
    const initialValue = cookie.value;
    const nuxtApp = __vite_ssr_import_4__.useNuxtApp();
    nuxtApp.hooks.hookOnce("app:rendered", () => {
      if (cookie.value !== initialValue) {
        writeServerCookie(useSSRRes(nuxtApp), name, cookie.value, opts);
      }
    });
  }
  return cookie;
}
Object.defineProperty(__vite_ssr_exports__, "useCookie", { enumerable: true, configurable: true, get(){ return useCookie }});
function useSSRReq(nuxtApp = __vite_ssr_import_4__.useNuxtApp()) {
  return nuxtApp.ssrContext?.req;
}
function useSSRRes(nuxtApp = __vite_ssr_import_4__.useNuxtApp()) {
  return nuxtApp.ssrContext?.res;
}
function readRawCookies(opts = {}) {
  if (true) {
    return __vite_ssr_import_1__.parse(useSSRReq().headers.cookie || "", opts);
  } else if (false) {
    return __vite_ssr_import_1__.parse(document.cookie, opts);
  }
}
function serializeCookie(name, value, opts = {}) {
  if (value === null || value === void 0) {
    return __vite_ssr_import_1__.serialize(name, value, { ...opts, maxAge: -1 });
  }
  return __vite_ssr_import_1__.serialize(name, value, opts);
}
function writeClientCookie(name, value, opts = {}) {
  if (false) {
    document.cookie = serializeCookie(name, value, opts);
  }
}
function writeServerCookie(res, name, value, opts = {}) {
  if (res) {
    __vite_ssr_import_2__.appendHeader(res, "Set-Cookie", serializeCookie(name, value, opts));
  }
}
;
}


// --------------------
// Request: /node_modules/cookie-es/dist/index.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/cookie.mjs ($id_792d64c4)
// Dependencies: 

// --------------------
const $id_f4975261 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import("file:///C:/DEV/VUE/yes4nuxt/node_modules/cookie-es/dist/index.mjs").then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error("[vite dev] Error loading external \"C:/DEV/VUE/yes4nuxt/node_modules/cookie-es/dist/index.mjs\".") })


// --------------------
// Request: /node_modules/h3/dist/index.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/cookie.mjs ($id_792d64c4)
// - /node_modules/nuxt3/dist/pages/runtime/router.mjs ($id_a4d6cb5b)
// Dependencies: 

// --------------------
const $id_57d7ded6 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import("file:///C:/DEV/VUE/yes4nuxt/node_modules/h3/dist/index.mjs").then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error("[vite dev] Error loading external \"C:/DEV/VUE/yes4nuxt/node_modules/h3/dist/index.mjs\".") })


// --------------------
// Request: /node_modules/destr/dist/index.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/cookie.mjs ($id_792d64c4)
// Dependencies: 

// --------------------
const $id_03d15ecd = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import("file:///C:/DEV/VUE/yes4nuxt/node_modules/destr/dist/index.mjs").then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error("[vite dev] Error loading external \"C:/DEV/VUE/yes4nuxt/node_modules/destr/dist/index.mjs\".") })


// --------------------
// Request: /node_modules/nuxt3/dist/app/composables/ssr.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/index.mjs ($id_42ae3d5d)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// --------------------
const $id_4d0dc923 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

function useRequestHeaders(include) {
  if (false) {
    return {};
  }
  const headers = __vite_ssr_import_0__.useNuxtApp().ssrContext?.req.headers ?? {};
  if (!include) {
    return headers;
  }
  return Object.fromEntries(include.filter((key) => headers[key]).map((key) => [key, headers[key]]));
}
Object.defineProperty(__vite_ssr_exports__, "useRequestHeaders", { enumerable: true, configurable: true, get(){ return useRequestHeaders }});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/composables/router.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/index.mjs ($id_42ae3d5d)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// --------------------
const $id_541bda03 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

const useRouter = () => {
  return __vite_ssr_import_0__.useNuxtApp()?.$router;
};
Object.defineProperty(__vite_ssr_exports__, "useRouter", { enumerable: true, configurable: true, get(){ return useRouter }});
const useRoute = () => {
  return __vite_ssr_import_0__.useNuxtApp()._route;
};
Object.defineProperty(__vite_ssr_exports__, "useRoute", { enumerable: true, configurable: true, get(){ return useRoute }});
const defineNuxtRouteMiddleware = (middleware) => middleware;
Object.defineProperty(__vite_ssr_exports__, "defineNuxtRouteMiddleware", { enumerable: true, configurable: true, get(){ return defineNuxtRouteMiddleware }});
const addRouteMiddleware = (name, middleware, options = {}) => {
  const nuxtApp = __vite_ssr_import_0__.useNuxtApp();
  if (options.global || typeof name === "function") {
    nuxtApp._middleware.global.push(typeof name === "function" ? name : middleware);
  } else {
    nuxtApp._middleware.named[name] = middleware;
  }
};
Object.defineProperty(__vite_ssr_exports__, "addRouteMiddleware", { enumerable: true, configurable: true, get(){ return addRouteMiddleware }});
const isProcessingMiddleware = () => {
  try {
    if (__vite_ssr_import_0__.useNuxtApp()._processingMiddleware) {
      return true;
    }
  } catch {
    return true;
  }
  return false;
};
const navigateTo = (to) => {
  if (isProcessingMiddleware()) {
    return to;
  }
  const router = true ? useRouter() : window.$nuxt.$router;
  return router.push(to);
};
Object.defineProperty(__vite_ssr_exports__, "navigateTo", { enumerable: true, configurable: true, get(){ return navigateTo }});
const abortNavigation = (err) => {
  if (true && !isProcessingMiddleware()) {
    throw new Error("abortNavigation() is only usable inside a route middleware handler.");
  }
  if (err) {
    throw err instanceof Error ? err : new Error(err);
  }
  return false;
};
Object.defineProperty(__vite_ssr_exports__, "abortNavigation", { enumerable: true, configurable: true, get(){ return abortNavigation }});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/meta/runtime/index.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// Dependencies: 
// - /node_modules/nuxt3/dist/meta/runtime/composables.mjs ($id_ca9295be)
// --------------------
const $id_ea12a3fb = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/meta/runtime/composables.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/meta/runtime/composables.mjs
// Parents: 
// - /node_modules/nuxt3/dist/meta/runtime/index.mjs ($id_ea12a3fb)
// - /node_modules/nuxt3/dist/meta/runtime/components.mjs ($id_94744df3)
// - /node_modules/nuxt3/dist/meta/runtime/plugin.mjs ($id_9fd5f35e)
// Dependencies: 
// - /node_modules/@vue/shared/dist/shared.cjs.js ($id_852b06a2)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// --------------------
const $id_ca9295be = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@vue/shared/dist/shared.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

function useMeta(meta) {
  const resolvedMeta = __vite_ssr_import_0__.isFunction(meta) ? __vite_ssr_import_1__.computed(meta) : meta;
  __vite_ssr_import_2__.useNuxtApp()._useMeta(resolvedMeta);
}
Object.defineProperty(__vite_ssr_exports__, "useMeta", { enumerable: true, configurable: true, get(){ return useMeta }});
;
}


// --------------------
// Request: /node_modules/@vue/shared/dist/shared.cjs.js
// Parents: 
// - /node_modules/nuxt3/dist/meta/runtime/composables.mjs ($id_ca9295be)
// Dependencies: 

// --------------------
const $id_852b06a2 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import("file:///C:/DEV/VUE/yes4nuxt/node_modules/@vue/shared/dist/shared.cjs.js").then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error("[vite dev] Error loading external \"C:/DEV/VUE/yes4nuxt/node_modules/@vue/shared/dist/shared.cjs.js\".") })


// --------------------
// Request: /@id/__x00__virtual:C:/DEV/VUE/yes4nuxt/.nuxt/css.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/bootstrap.mjs ($id_fef466a9)
// Dependencies: 
// - /node_modules/primevue/resources/themes/saga-blue/theme.css ($id_4e9f8bcd)
// - /node_modules/primevue/resources/primevue.css ($id_736dcf3c)
// - /node_modules/primeicons/primeicons.css ($id_f890f676)
// --------------------
const $id_a565eb3a = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/primevue/resources/themes/saga-blue/theme.css");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/primevue/resources/primevue.css");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/primeicons/primeicons.css");
;
}


// --------------------
// Request: /node_modules/primevue/resources/themes/saga-blue/theme.css
// Parents: 
// - /@id/__x00__virtual:C:/DEV/VUE/yes4nuxt/.nuxt/css.mjs ($id_a565eb3a)
// Dependencies: 

// --------------------
const $id_4e9f8bcd = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ":root {\n  --surface-a:#ffffff;\n  --surface-b:#f8f9fa;\n  --surface-c:#e9ecef;\n  --surface-d:#dee2e6;\n  --surface-e:#ffffff;\n  --surface-f:#ffffff;\n  --text-color:#495057;\n  --text-color-secondary:#6c757d;\n  --primary-color:#2196F3;\n  --primary-color-text:#ffffff;\n  --font-family:-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;\n  --surface-0: #ffffff;\n  --surface-50: #FAFAFA;\n  --surface-100: #F5F5F5;\n  --surface-200: #EEEEEE;\n  --surface-300: #E0E0E0;\n  --surface-400: #BDBDBD;\n  --surface-500: #9E9E9E;\n  --surface-600: #757575;\n  --surface-700: #616161;\n  --surface-800: #424242;\n  --surface-900: #212121;\n  --gray-50: #FAFAFA;\n  --gray-100: #F5F5F5;\n  --gray-200: #EEEEEE;\n  --gray-300: #E0E0E0;\n  --gray-400: #BDBDBD;\n  --gray-500: #9E9E9E;\n  --gray-600: #757575;\n  --gray-700: #616161;\n  --gray-800: #424242;\n  --gray-900: #212121;\n  --content-padding:1rem;\n  --inline-spacing:0.5rem;\n  --border-radius:3px;\n  --surface-ground:#f8f9fa;\n  --surface-section:#ffffff;\n  --surface-card:#ffffff;\n  --surface-overlay:#ffffff;\n  --surface-border:#dee2e6;\n  --surface-hover: #e9ecef;\n  --focus-ring: 0 0 0 0.2rem #a6d5fa;\n  --maskbg: rgba(0, 0, 0, 0.4);\n}\n\n* {\n  box-sizing: border-box;\n}\n\n.p-component {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-size: 1rem;\n  font-weight: normal;\n}\n\n.p-component-overlay {\n  background-color: rgba(0, 0, 0, 0.4);\n  transition-duration: 0.2s;\n}\n\n.p-disabled, .p-component:disabled {\n  opacity: 0.6;\n}\n\n.p-error {\n  color: #f44336;\n}\n\n.p-text-secondary {\n  color: #6c757d;\n}\n\n.pi {\n  font-size: 1rem;\n}\n\n.p-link {\n  font-size: 1rem;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  border-radius: 3px;\n}\n\n.p-link:focus {\n  outline: 0 none;\n  outline-offset: 0;\n  box-shadow: 0 0 0 0.2rem #a6d5fa;\n}\n\n.p-component-overlay-enter {\n  -webkit-animation: p-component-overlay-enter-animation 150ms forwards;\n          animation: p-component-overlay-enter-animation 150ms forwards;\n}\n\n.p-component-overlay-leave {\n  -webkit-animation: p-component-overlay-leave-animation 150ms forwards;\n          animation: p-component-overlay-leave-animation 150ms forwards;\n}\n\n@-webkit-keyframes p-component-overlay-enter-animation {\n  from {\n    background-color: transparent;\n  }\n  to {\n    background-color: var(--maskbg);\n  }\n}\n\n@keyframes p-component-overlay-enter-animation {\n  from {\n    background-color: transparent;\n  }\n  to {\n    background-color: var(--maskbg);\n  }\n}\n\n@-webkit-keyframes p-component-overlay-leave-animation {\n  from {\n    background-color: var(--maskbg);\n  }\n  to {\n    background-color: transparent;\n  }\n}\n\n@keyframes p-component-overlay-leave-animation {\n  from {\n    background-color: var(--maskbg);\n  }\n  to {\n    background-color: transparent;\n  }\n}\n\n:root {\n  --blue-50:#f4fafe;\n  --blue-100:#cae6fc;\n  --blue-200:#a0d2fa;\n  --blue-300:#75bef8;\n  --blue-400:#4baaf5;\n  --blue-500:#2196f3;\n  --blue-600:#1c80cf;\n  --blue-700:#1769aa;\n  --blue-800:#125386;\n  --blue-900:#0d3c61;\n  --green-50:#f6fbf6;\n  --green-100:#d4ecd5;\n  --green-200:#b2ddb4;\n  --green-300:#90cd93;\n  --green-400:#6ebe71;\n  --green-500:#4caf50;\n  --green-600:#419544;\n  --green-700:#357b38;\n  --green-800:#2a602c;\n  --green-900:#1e4620;\n  --yellow-50:#fffcf5;\n  --yellow-100:#fef0cd;\n  --yellow-200:#fde4a5;\n  --yellow-300:#fdd87d;\n  --yellow-400:#fccc55;\n  --yellow-500:#fbc02d;\n  --yellow-600:#d5a326;\n  --yellow-700:#b08620;\n  --yellow-800:#8a6a19;\n  --yellow-900:#644d12;\n  --cyan-50:#f2fcfd;\n  --cyan-100:#c2eff5;\n  --cyan-200:#91e2ed;\n  --cyan-300:#61d5e4;\n  --cyan-400:#30c9dc;\n  --cyan-500:#00bcd4;\n  --cyan-600:#00a0b4;\n  --cyan-700:#008494;\n  --cyan-800:#006775;\n  --cyan-900:#004b55;\n  --pink-50:#fef4f7;\n  --pink-100:#fac9da;\n  --pink-200:#f69ebc;\n  --pink-300:#f1749e;\n  --pink-400:#ed4981;\n  --pink-500:#e91e63;\n  --pink-600:#c61a54;\n  --pink-700:#a31545;\n  --pink-800:#801136;\n  --pink-900:#5d0c28;\n  --indigo-50:#f5f6fb;\n  --indigo-100:#d1d5ed;\n  --indigo-200:#acb4df;\n  --indigo-300:#8893d1;\n  --indigo-400:#6372c3;\n  --indigo-500:#3f51b5;\n  --indigo-600:#36459a;\n  --indigo-700:#2c397f;\n  --indigo-800:#232d64;\n  --indigo-900:#192048;\n  --teal-50:#f2faf9;\n  --teal-100:#c2e6e2;\n  --teal-200:#91d2cc;\n  --teal-300:#61beb5;\n  --teal-400:#30aa9f;\n  --teal-500:#009688;\n  --teal-600:#008074;\n  --teal-700:#00695f;\n  --teal-800:#00534b;\n  --teal-900:#003c36;\n  --orange-50:#fff8f2;\n  --orange-100:#fde0c2;\n  --orange-200:#fbc791;\n  --orange-300:#f9ae61;\n  --orange-400:#f79530;\n  --orange-500:#f57c00;\n  --orange-600:#d06900;\n  --orange-700:#ac5700;\n  --orange-800:#874400;\n  --orange-900:#623200;\n  --bluegray-50:#f7f9f9;\n  --bluegray-100:#d9e0e3;\n  --bluegray-200:#bbc7cd;\n  --bluegray-300:#9caeb7;\n  --bluegray-400:#7e96a1;\n  --bluegray-500:#607d8b;\n  --bluegray-600:#526a76;\n  --bluegray-700:#435861;\n  --bluegray-800:#35454c;\n  --bluegray-900:#263238;\n  --purple-50:#faf4fb;\n  --purple-100:#e7cbec;\n  --purple-200:#d4a2dd;\n  --purple-300:#c279ce;\n  --purple-400:#af50bf;\n  --purple-500:#9c27b0;\n  --purple-600:#852196;\n  --purple-700:#6d1b7b;\n  --purple-800:#561561;\n  --purple-900:#3e1046;\n}\n\n.p-autocomplete .p-autocomplete-loader {\n  right: 0.5rem;\n}\n\n.p-autocomplete.p-autocomplete-dd .p-autocomplete-loader {\n  right: 2.857rem;\n}\n\n.p-autocomplete .p-autocomplete-multiple-container {\n  padding: 0.25rem 0.5rem;\n}\n\n.p-autocomplete .p-autocomplete-multiple-container:not(.p-disabled):hover {\n  border-color: #2196F3;\n}\n\n.p-autocomplete .p-autocomplete-multiple-container:not(.p-disabled).p-focus {\n  outline: 0 none;\n  outline-offset: 0;\n  box-shadow: 0 0 0 0.2rem #a6d5fa;\n  border-color: #2196F3;\n}\n\n.p-autocomplete .p-autocomplete-multiple-container .p-autocomplete-input-token {\n  padding: 0.25rem 0;\n}\n\n.p-autocomplete .p-autocomplete-multiple-container .p-autocomplete-input-token input {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-size: 1rem;\n  color: #495057;\n  padding: 0;\n  margin: 0;\n}\n\n.p-autocomplete .p-autocomplete-multiple-container .p-autocomplete-token {\n  padding: 0.25rem 0.5rem;\n  margin-right: 0.5rem;\n  background: #dee2e6;\n  color: #495057;\n  border-radius: 16px;\n}\n\n.p-autocomplete .p-autocomplete-multiple-container .p-autocomplete-token .p-autocomplete-token-icon {\n  margin-left: 0.5rem;\n}\n\n.p-autocomplete.p-invalid.p-component > .p-inputtext {\n  border-color: #f44336;\n}\n\n.p-autocomplete-panel {\n  background: #ffffff;\n  color: #495057;\n  border: 0 none;\n  border-radius: 3px;\n  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);\n}\n\n.p-autocomplete-panel .p-autocomplete-items {\n  padding: 0.5rem 0;\n}\n\n.p-autocomplete-panel .p-autocomplete-items .p-autocomplete-item {\n  margin: 0;\n  padding: 0.5rem 1rem;\n  border: 0 none;\n  color: #495057;\n  background: transparent;\n  transition: box-shadow 0.2s;\n  border-radius: 0;\n}\n\n.p-autocomplete-panel .p-autocomplete-items .p-autocomplete-item:hover {\n  color: #495057;\n  background: #e9ecef;\n}\n\n.p-autocomplete-panel .p-autocomplete-items .p-autocomplete-item.p-highlight {\n  color: #495057;\n  background: #E3F2FD;\n}\n\n.p-autocomplete-panel .p-autocomplete-items .p-autocomplete-item-group {\n  margin: 0;\n  padding: 0.75rem 1rem;\n  color: #495057;\n  background: #ffffff;\n  font-weight: 600;\n}\n\n.p-calendar.p-invalid.p-component > .p-inputtext {\n  border-color: #f44336;\n}\n\n.p-datepicker {\n  padding: 0.5rem;\n  background: #ffffff;\n  color: #495057;\n  border: 1px solid #ced4da;\n  border-radius: 3px;\n}\n\n.p-datepicker:not(.p-datepicker-inline) {\n  background: #ffffff;\n  border: 0 none;\n  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);\n}\n\n.p-datepicker:not(.p-datepicker-inline) .p-datepicker-header {\n  background: #ffffff;\n}\n\n.p-datepicker .p-datepicker-header {\n  padding: 0.5rem;\n  color: #495057;\n  background: #ffffff;\n  font-weight: 600;\n  margin: 0;\n  border-bottom: 1px solid #dee2e6;\n  border-top-right-radius: 3px;\n  border-top-left-radius: 3px;\n}\n\n.p-datepicker .p-datepicker-header .p-datepicker-prev,\n.p-datepicker .p-datepicker-header .p-datepicker-next {\n  width: 2rem;\n  height: 2rem;\n  color: #6c757d;\n  border: 0 none;\n  background: transparent;\n  border-radius: 50%;\n  transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;\n}\n\n.p-datepicker .p-datepicker-header .p-datepicker-prev:enabled:hover,\n.p-datepicker .p-datepicker-header .p-datepicker-next:enabled:hover {\n  color: #495057;\n  border-color: transparent;\n  background: #e9ecef;\n}\n\n.p-datepicker .p-datepicker-header .p-datepicker-prev:focus,\n.p-datepicker .p-datepicker-header .p-datepicker-next:focus {\n  outline: 0 none;\n  outline-offset: 0;\n  box-shadow: 0 0 0 0.2rem #a6d5fa;\n}\n\n.p-datepicker .p-datepicker-header .p-datepicker-title {\n  line-height: 2rem;\n}\n\n.p-datepicker .p-datepicker-header .p-datepicker-title .p-datepicker-year,\n.p-datepicker .p-datepicker-header .p-datepicker-title .p-datepicker-month {\n  color: #495057;\n  transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;\n  font-weight: 600;\n  padding: 0.5rem;\n}\n\n.p-datepicker .p-datepicker-header .p-datepicker-title .p-datepicker-year:enabled:hover,\n.p-datepicker .p-datepicker-header .p-datepicker-title .p-datepicker-month:enabled:hover {\n  color: #2196F3;\n}\n\n.p-datepicker .p-datepicker-header .p-datepicker-title .p-datepicker-month {\n  margin-right: 0.5rem;\n}\n\n.p-datepicker table {\n  font-size: 1rem;\n  margin: 0.5rem 0;\n}\n\n.p-datepicker table th {\n  padding: 0.5rem;\n}\n\n.p-datepicker table th > span {\n  width: 2.5rem;\n  height: 2.5rem;\n}\n\n.p-datepicker table td {\n  padding: 0.5rem;\n}\n\n.p-datepicker table td > span {\n  width: 2.5rem;\n  height: 2.5rem;\n  border-radius: 50%;\n  transition: box-shadow 0.2s;\n  border: 1px solid transparent;\n}\n\n.p-datepicker table td > span.p-highlight {\n  color: #495057;\n  background: #E3F2FD;\n}\n\n.p-datepicker table td > span:focus {\n  outline: 0 none;\n  outline-offset: 0;\n  box-shadow: 0 0 0 0.2rem #a6d5fa;\n}\n\n.p-datepicker table td.p-datepicker-today > span {\n  background: #ced4da;\n  color: #495057;\n  border-color: transparent;\n}\n\n.p-datepicker table td.p-datepicker-today > span.p-highlight {\n  color: #495057;\n  background: #E3F2FD;\n}\n\n.p-datepicker .p-datepicker-buttonbar {\n  padding: 1rem 0;\n  border-top: 1px solid #dee2e6;\n}\n\n.p-datepicker .p-datepicker-buttonbar .p-button {\n  width: auto;\n}\n\n.p-datepicker .p-timepicker {\n  border-top: 1px solid #dee2e6;\n  padding: 0.5rem;\n}\n\n.p-datepicker .p-timepicker button {\n  width: 2rem;\n  height: 2rem;\n  color: #6c757d;\n  border: 0 none;\n  background: transparent;\n  border-radius: 50%;\n  transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;\n}\n\n.p-datepicker .p-timepicker button:enabled:hover {\n  color: #495057;\n  border-color: transparent;\n  background: #e9ecef;\n}\n\n.p-datepicker .p-timepicker button:focus {\n  outline: 0 none;\n  outline-offset: 0;\n  box-shadow: 0 0 0 0.2rem #a6d5fa;\n}\n\n.p-datepicker .p-timepicker button:last-child {\n  margin-top: 0.2em;\n}\n\n.p-datepicker .p-timepicker span {\n  font-size: 1.25rem;\n}\n\n.p-datepicker .p-timepicker > div {\n  padding: 0 0.5rem;\n}\n\n.p-datepicker.p-datepicker-timeonly .p-timepicker {\n  border-top: 0 none;\n}\n\n.p-datepicker .p-monthpicker {\n  margin: 0.5rem 0;\n}\n\n.p-datepicker .p-monthpicker .p-monthpicker-month {\n  padding: 0.5rem;\n  transition: box-shadow 0.2s;\n  border-radius: 3px;\n}\n\n.p-datepicker .p-monthpicker .p-monthpicker-month.p-highlight {\n  color: #495057;\n  background: #E3F2FD;\n}\n\n.p-datepicker .p-yearpicker {\n  margin: 0.5rem 0;\n}\n\n.p-datepicker .p-yearpicker .p-yearpicker-year {\n  padding: 0.5rem;\n  transition: box-shadow 0.2s;\n  border-radius: 3px;\n}\n\n.p-datepicker .p-yearpicker .p-yearpicker-year.p-highlight {\n  color: #495057;\n  background: #E3F2FD;\n}\n\n.p-datepicker.p-datepicker-multiple-month .p-datepicker-group {\n  border-left: 1px solid #dee2e6;\n  padding-right: 0.5rem;\n  padding-left: 0.5rem;\n  padding-top: 0;\n  padding-bottom: 0;\n}\n\n.p-datepicker.p-datepicker-multiple-month .p-datepicker-group:first-child {\n  padding-left: 0;\n  border-left: 0 none;\n}\n\n.p-datepicker.p-datepicker-multiple-month .p-datepicker-group:last-child {\n  padding-right: 0;\n}\n\n.p-datepicker:not(.p-disabled) table td span:not(.p-highlight):not(.p-disabled):hover {\n  background: #e9ecef;\n}\n\n.p-datepicker:not(.p-disabled) table td span:not(.p-highlight):not(.p-disabled):focus {\n  outline: 0 none;\n  outline-offset: 0;\n  box-shadow: 0 0 0 0.2rem #a6d5fa;\n}\n\n.p-datepicker:not(.p-disabled) .p-monthpicker .p-monthpicker-month:not(.p-disabled):not(.p-highlight):hover {\n  background: #e9ecef;\n}\n\n.p-datepicker:not(.p-disabled) .p-monthpicker .p-monthpicker-month:not(.p-disabled):focus {\n  outline: 0 none;\n  outline-offset: 0;\n  box-shadow: 0 0 0 0.2rem #a6d5fa;\n}\n\n.p-datepicker:not(.p-disabled) .p-yearpicker .p-yearpicker-year:not(.p-disabled):not(.p-highlight):hover {\n  background: #e9ecef;\n}\n\n.p-datepicker:not(.p-disabled) .p-yearpicker .p-yearpicker-year:not(.p-disabled):focus {\n  outline: 0 none;\n  outline-offset: 0;\n  box-shadow: 0 0 0 0.2rem #a6d5fa;\n}\n\n@media screen and (max-width: 769px) {\n  .p-datepicker table th, .p-datepicker table td {\n    padding: 0;\n  }\n}\n\n.p-cascadeselect {\n  background: #ffffff;\n  border: 1px solid #ced4da;\n  transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;\n  border-radius: 3px;\n}\n\n.p-cascadeselect:not(.p-disabled):hover {\n  border-color: #2196F3;\n}\n\n.p-cascadeselect:not(.p-disabled).p-focus {\n  outline: 0 none;\n  outline-offset: 0;\n  box-shadow: 0 0 0 0.2rem #a6d5fa;\n  border-color: #2196F3;\n}\n\n.p-cascadeselect .p-cascadeselect-label {\n  background: transparent;\n  border: 0 none;\n  padding: 0.5rem 0.5rem;\n}\n\n.p-cascadeselect .p-cascadeselect-label.p-placeholder {\n  color: #6c757d;\n}\n\n.p-cascadeselect .p-cascadeselect-label:enabled:focus {\n  outline: 0 none;\n  box-shadow: none;\n}\n\n.p-cascadeselect .p-cascadeselect-trigger {\n  background: transparent;\n  color: #6c757d;\n  width: 2.357rem;\n  border-top-right-radius: 3px;\n  border-bottom-right-radius: 3px;\n}\n\n.p-cascadeselect.p-invalid.p-component {\n  border-color: #f44336;\n}\n\n.p-cascadeselect-panel {\n  background: #ffffff;\n  color: #495057;\n  border: 0 none;\n  border-radius: 3px;\n  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);\n}\n\n.p-cascadeselect-panel .p-cascadeselect-items {\n  padding: 0.5rem 0;\n}\n\n.p-cascadeselect-panel .p-cascadeselect-items .p-cascadeselect-item {\n  margin: 0;\n  border: 0 none;\n  color: #495057;\n  background: transparent;\n  transition: box-shadow 0.2s;\n  border-radius: 0;\n}\n\n.p-cascadeselect-panel .p-cascadeselect-items .p-cascadeselect-item .p-cascadeselect-item-content {\n  padding: 0.5rem 1rem;\n}\n\n.p-cascadeselect-panel .p-cascadeselect-items .p-cascadeselect-item .p-cascadeselect-item-content:focus {\n  outline: 0 none;\n  outline-offset: 0;\n  box-shadow: inset 0 0 0 0.15rem #a6d5fa;\n}\n\n.p-cascadeselect-panel .p-cascadeselect-items .p-cascadeselect-item.p-highlight {\n  color: #495057;\n  background: #E3F2FD;\n}\n\n.p-cascadeselect-panel .p-cascadeselect-items .p-cascadeselect-item:not(.p-highlight):not(.p-disabled):hover {\n  color: #495057;\n  background: #e9ecef;\n}\n\n.p-cascadeselect-panel .p-cascadeselect-items .p-cascadeselect-item .p-cascadeselect-group-icon {\n  font-size: 0.875rem;\n}\n\n.p-input-filled .p-cascadeselect {\n  background: #f8f9fa;\n}\n\n.p-input-filled .p-cascadeselect:not(.p-disabled):hover {\n  background-color: #f8f9fa;\n}\n\n.p-input-filled .p-cascadeselect:not(.p-disabled).p-focus {\n  background-color: #ffffff;\n}\n\n.p-checkbox {\n  width: 20px;\n  height: 20px;\n}\n\n.p-checkbox .p-checkbox-box {\n  border: 2px solid #ced4da;\n  background: #ffffff;\n  width: 20px;\n  height: 20px;\n  color: #495057;\n  border-radius: 3px;\n  transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;\n}\n\n.p-checkbox .p-checkbox-box .p-checkbox-icon {\n  transition-duration: 0.2s;\n  color: #ffffff;\n  font-size: 14px;\n}\n\n.p-checkbox .p-checkbox-box.p-highlight {\n  border-color: #2196F3;\n  background: #2196F3;\n}\n\n.p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box:hover {\n  border-color: #2196F3;\n}\n\n.p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box.p-focus {\n  outline: 0 none;\n  outline-offset: 0;\n  box-shadow: 0 0 0 0.2rem #a6d5fa;\n  border-color: #2196F3;\n}\n\n.p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box.p-highlight:hover {\n  border-color: #0b7ad1;\n  background: #0b7ad1;\n  color: #ffffff;\n}\n\n.p-checkbox.p-invalid > .p-checkbox-box {\n  border-color: #f44336;\n}\n\n.p-input-filled .p-checkbox .p-checkbox-box {\n  background-color: #f8f9fa;\n}\n\n.p-input-filled .p-checkbox .p-checkbox-box.p-highlight {\n  background: #2196F3;\n}\n\n.p-input-filled .p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box:hover {\n  background-color: #f8f9fa;\n}\n\n.p-input-filled .p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box.p-highlight:hover {\n  background: #0b7ad1;\n}\n\n.p-chips .p-chips-multiple-container {\n  padding: 0.25rem 0.5rem;\n}\n\n.p-chips .p-chips-multiple-container:not(.p-disabled):hover {\n  border-color: #2196F3;\n}\n\n.p-chips .p-chips-multiple-container:not(.p-disabled).p-focus {\n  outline: 0 none;\n  outline-offset: 0;\n  box-shadow: 0 0 0 0.2rem #a6d5fa;\n  border-color: #2196F3;\n}\n\n.p-chips .p-chips-multiple-container .p-chips-token {\n  padding: 0.25rem 0.5rem;\n  margin-right: 0.5rem;\n  background: #dee2e6;\n  color: #495057;\n  border-radius: 16px;\n}\n\n.p-chips .p-chips-multiple-container .p-chips-token .p-chips-token-icon {\n  margin-left: 0.5rem;\n}\n\n.p-chips .p-chips-multiple-container .p-chips-input-token {\n  padding: 0.25rem 0;\n}\n\n.p-chips .p-chips-multiple-container .p-chips-input-token input {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-size: 1rem;\n  color: #495057;\n  padding: 0;\n  margin: 0;\n}\n\n.p-chips.p-invalid.p-component > .p-inputtext {\n  border-color: #f44336;\n}\n\n.p-colorpicker-preview {\n  width: 2rem;\n  height: 2rem;\n}\n\n.p-colorpicker-panel {\n  background: #323232;\n  border: 1px solid #191919;\n}\n\n.p-colorpicker-panel .p-colorpicker-color-handle,\n.p-colorpicker-panel .p-colorpicker-hue-handle {\n  border-color: #ffffff;\n}\n\n.p-colorpicker-overlay-panel {\n  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);\n}\n\n.p-dropdown {\n  background: #ffffff;\n  border: 1px solid #ced4da;\n  transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;\n  border-radius: 3px;\n}\n\n.p-dropdown:not(.p-disabled):hover {\n  border-color: #2196F3;\n}\n\n.p-dropdown:not(.p-disabled).p-focus {\n  outline: 0 none;\n  outline-offset: 0;\n  box-shadow: 0 0 0 0.2rem #a6d5fa;\n  border-color: #2196F3;\n}\n\n.p-dropdown.p-dropdown-clearable .p-dropdown-label {\n  padding-right: 1.5rem;\n}\n\n.p-dropdown .p-dropdown-label {\n  background: transparent;\n  border: 0 none;\n}\n\n.p-dropdown .p-dropdown-label.p-placeholder {\n  color: #6c757d;\n}\n\n.p-dropdown .p-dropdown-label:enabled:focus {\n  outline: 0 none;\n  box-shadow: none;\n}\n\n.p-dropdown .p-dropdown-trigger {\n  background: transparent;\n  color: #6c757d;\n  width: 2.357rem;\n  border-top-right-radius: 3px;\n  border-bottom-right-radius: 3px;\n}\n\n.p-dropdown .p-dropdown-clear-icon {\n  color: #6c757d;\n  right: 2.357rem;\n}\n\n.p-dropdown.p-invalid.p-component {\n  border-color: #f44336;\n}\n\n.p-dropdown-panel {\n  background: #ffffff;\n  color: #495057;\n  border: 0 none;\n  border-radius: 3px;\n  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);\n}\n\n.p-dropdown-panel .p-dropdown-header {\n  padding: 0.5rem 1rem;\n  border-bottom: 0 none;\n  color: #495057;\n  background: #f8f9fa;\n  margin: 0;\n  border-top-right-radius: 3px;\n  border-top-left-radius: 3px;\n}\n\n.p-dropdown-panel .p-dropdown-header .p-dropdown-filter {\n  padding-right: 1.5rem;\n  margin-right: -1.5rem;\n}\n\n.p-dropdown-panel .p-dropdown-header .p-dropdown-filter-icon {\n  right: 0.5rem;\n  color: #6c757d;\n}\n\n.p-dropdown-panel .p-dropdown-items {\n  padding: 0.5rem 0;\n}\n\n.p-dropdown-panel .p-dropdown-items .p-dropdown-item {\n  margin: 0;\n  padding: 0.5rem 1rem;\n  border: 0 none;\n  color: #495057;\n  background: transparent;\n  transition: box-shadow 0.2s;\n  border-radius: 0;\n}\n\n.p-dropdown-panel .p-dropdown-items .p-dropdown-item.p-highlight {\n  color: #495057;\n  background: #E3F2FD;\n}\n\n.p-dropdown-panel .p-dropdown-items .p-dropdown-item:not(.p-highlight):not(.p-disabled):hover {\n  color: #495057;\n  background: #e9ecef;\n}\n\n.p-dropdown-panel .p-dropdown-items .p-dropdown-item-group {\n  margin: 0;\n  padding: 0.75rem 1rem;\n  color: #495057;\n  background: #ffffff;\n  font-weight: 600;\n}\n\n.p-dropdown-panel .p-dropdown-items .p-dropdown-empty-message {\n  padding: 0.5rem 1rem;\n  color: #495057;\n  background: transparent;\n}\n\n.p-input-filled .p-dropdown {\n  background: #f8f9fa;\n}\n\n.p-input-filled .p-dropdown:not(.p-disabled):hover {\n  background-color: #f8f9fa;\n}\n\n.p-input-filled .p-dropdown:not(.p-disabled).p-focus {\n  background-color: #ffffff;\n}\n\n.p-input-filled .p-dropdown:not(.p-disabled).p-focus .p-inputtext {\n  background-color: transparent;\n}\n\n.p-editor-container .p-editor-toolbar {\n  background: #f8f9fa;\n  border-top-right-radius: 3px;\n  border-top-left-radius: 3px;\n}\n\n.p-editor-container .p-editor-toolbar.ql-snow {\n  border: 1px solid #dee2e6;\n}\n\n.p-editor-container .p-editor-toolbar.ql-snow .ql-stroke {\n  stroke: #6c757d;\n}\n\n.p-editor-container .p-editor-toolbar.ql-snow .ql-fill {\n  fill: #6c757d;\n}\n\n.p-editor-container .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label {\n  border: 0 none;\n  color: #6c757d;\n}\n\n.p-editor-container .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label:hover {\n  color: #495057;\n}\n\n.p-editor-container .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label:hover .ql-stroke {\n  stroke: #495057;\n}\n\n.p-editor-container .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label:hover .ql-fill {\n  fill: #495057;\n}\n\n.p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label {\n  color: #495057;\n}\n\n.p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke {\n  stroke: #495057;\n}\n\n.p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill {\n  fill: #495057;\n}\n\n.p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options {\n  background: #ffffff;\n  border: 0 none;\n  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);\n  border-radius: 3px;\n  padding: 0.5rem 0;\n}\n\n.p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options .ql-picker-item {\n  color: #495057;\n}\n\n.p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options .ql-picker-item:hover {\n  color: #495057;\n  background: #e9ecef;\n}\n\n.p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded:not(.ql-icon-picker) .ql-picker-item {\n  padding: 0.5rem 1rem;\n}\n\n.p-editor-container .p-editor-content {\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n\n.p-editor-container .p-editor-content.ql-snow {\n  border: 1px solid #dee2e6;\n}\n\n.p-editor-container .p-editor-content .ql-editor {\n  background: #ffffff;\n  color: #495057;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n\n.p-editor-container .ql-snow.ql-toolbar button:hover,\n.p-editor-container .ql-snow.ql-toolbar button:focus {\n  color: #495057;\n}\n\n.p-editor-container .ql-snow.ql-toolbar button:hover .ql-stroke,\n.p-editor-container .ql-snow.ql-toolbar button:focus .ql-stroke {\n  stroke: #495057;\n}\n\n.p-editor-container .ql-snow.ql-toolbar button:hover .ql-fill,\n.p-editor-container .ql-snow.ql-toolbar button:focus .ql-fill {\n  fill: #495057;\n}\n\n.p-editor-container .ql-snow.ql-toolbar button.ql-active,\n.p-editor-container .ql-snow.ql-toolbar .ql-picker-label.ql-active,\n.p-editor-container .ql-snow.ql-toolbar .ql-picker-item.ql-selected {\n  color: #2196F3;\n}\n\n.p-editor-container .ql-snow.ql-toolbar button.ql-active .ql-stroke,\n.p-editor-container .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,\n.p-editor-container .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke {\n  stroke: #2196F3;\n}\n\n.p-editor-container .ql-snow.ql-toolbar button.ql-active .ql-fill,\n.p-editor-container .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,\n.p-editor-container .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill {\n  fill: #2196F3;\n}\n\n.p-editor-container .ql-snow.ql-toolbar button.ql-active .ql-picker-label,\n.p-editor-container .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-picker-label,\n.p-editor-container .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-picker-label {\n  color: #2196F3;\n}\n\n.p-inputgroup-addon {\n  background: #e9ecef;\n  color: #6c757d;\n  border-top: 1px solid #ced4da;\n  border-left: 1px solid #ced4da;\n  border-bottom: 1px solid #ced4da;\n  padding: 0.5rem 0.5rem;\n  min-width: 2.357rem;\n}\n\n.p-inputgroup-addon:last-child {\n  border-right: 1px solid #ced4da;\n}\n\n.p-inputgroup > .p-component,\n.p-inputgroup > .p-inputwrapper > .p-inputtext,\n.p-inputgroup > .p-float-label > .p-component {\n  border-radius: 0;\n  margin: 0;\n}\n\n.p-inputgroup > .p-component + .p-inputgroup-addon,\n.p-inputgroup > .p-inputwrapper > .p-inputtext + .p-inputgroup-addon,\n.p-inputgroup > .p-float-label > .p-component + .p-inputgroup-addon {\n  border-left: 0 none;\n}\n\n.p-inputgroup > .p-component:focus,\n.p-inputgroup > .p-inputwrapper > .p-inputtext:focus,\n.p-inputgroup > .p-float-label > .p-component:focus {\n  z-index: 1;\n}\n\n.p-inputgroup > .p-component:focus ~ label,\n.p-inputgroup > .p-inputwrapper > .p-inputtext:focus ~ label,\n.p-inputgroup > .p-float-label > .p-component:focus ~ label {\n  z-index: 1;\n}\n\n.p-inputgroup-addon:first-child,\n.p-inputgroup button:first-child,\n.p-inputgroup input:first-child,\n.p-inputgroup > .p-inputwrapper:first-child,\n.p-inputgroup > .p-inputwrapper:first-child > .p-inputtext {\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n\n.p-inputgroup .p-float-label:first-child input {\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n\n.p-inputgroup-addon:last-child,\n.p-inputgroup button:last-child,\n.p-inputgroup input:last-child,\n.p-inputgroup > .p-inputwrapper:last-child,\n.p-inputgroup > .p-inputwrapper:last-child > .p-inputtext {\n  border-top-right-radius: 3px;\n  border-bottom-right-radius: 3px;\n}\n\n.p-inputgroup .p-float-label:last-child input {\n  border-top-right-radius: 3px;\n  border-bottom-right-radius: 3px;\n}\n\n.p-fluid .p-inputgroup .p-button {\n  width: auto;\n}\n\n.p-fluid .p-inputgroup .p-button.p-button-icon-only {\n  width: 2.357rem;\n}\n\n.p-inputnumber.p-invalid.p-component > .p-inputtext {\n  border-color: #f44336;\n}\n\n.p-inputswitch {\n  width: 3rem;\n  height: 1.75rem;\n}\n\n.p-inputswitch .p-inputswitch-slider {\n  background: #ced4da;\n  transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;\n  border-radius: 30px;\n}\n\n.p-inputswitch .p-inputswitch-slider:before {\n  background: #ffffff;\n  width: 1.25rem;\n  height: 1.25rem;\n  left: 0.25rem;\n  margin-top: -0.625rem;\n  border-radius: 50%;\n  transition-duration: 0.2s;\n}\n\n.p-inputswitch.p-inputswitch-checked .p-inputswitch-slider:before {\n  transform: translateX(1.25rem);\n}\n\n.p-inputswitch.p-focus .p-inputswitch-slider {\n  outline: 0 none;\n  outline-offset: 0;\n  box-shadow: 0 0 0 0.2rem #a6d5fa;\n}\n\n.p-inputswitch:not(.p-disabled):hover .p-inputswitch-slider {\n  background: #b6bfc8;\n}\n\n.p-inputswitch.p-inputswitch-checked .p-inputswitch-slider {\n  background: #2196F3;\n}\n\n.p-inputswitch.p-inputswitch-checked .p-inputswitch-slider:before {\n  background: #ffffff;\n}\n\n.p-inputswitch.p-inputswitch-checked:not(.p-disabled):hover .p-inputswitch-slider {\n  background: #0d89ec;\n}\n\n.p-inputswitch.p-invalid {\n  border-color: #f44336;\n}\n\n.p-inputtext {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-size: 1rem;\n  color: #495057;\n  background: #ffffff;\n  padding: 0.5rem 0.5rem;\n  border: 1px solid #ced4da;\n  transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  border-radius: 3px;\n}\n\n.p-inputtext:enabled:hover {\n  border-color: #2196F3;\n}\n\n.p-inputtext:enabled:focus {\n  outline: 0 none;\n  outline-offset: 0;\n  box-shadow: 0 0 0 0.2rem #a6d5fa;\n  border-color: #2196F3;\n}\n\n.p-inputtext.p-invalid.p-component {\n  border-color: #f44336;\n}\n\n.p-inputtext.p-inputtext-sm {\n  font-size: 0.875rem;\n  padding: 0.4375rem 0.4375rem;\n}\n\n.p-inputtext.p-inputtext-lg {\n  font-size: 1.25rem;\n  padding: 0.625rem 0.625rem;\n}\n\n.p-float-label > label {\n  left: 0.5rem;\n  color: #6c757d;\n  transition-duration: 0.2s;\n}\n\n.p-input-icon-left > i:first-of-type {\n  left: 0.5rem;\n  color: #6c757d;\n}\n\n.p-input-icon-left > .p-inputtext {\n  padding-left: 2rem;\n}\n\n.p-input-icon-left.p-float-label > label {\n  left: 2rem;\n}\n\n.p-input-icon-right > i:last-of-type {\n  right: 0.5rem;\n  color: #6c757d;\n}\n\n.p-input-icon-right > .p-inputtext {\n  padding-right: 2rem;\n}\n\n::-webkit-input-placeholder {\n  color: #6c757d;\n}\n\n:-moz-placeholder {\n  color: #6c757d;\n}\n\n::-moz-placeholder {\n  color: #6c757d;\n}\n\n:-ms-input-placeholder {\n  color: #6c757d;\n}\n\n.p-input-filled .p-inputtext {\n  background-color: #f8f9fa;\n}\n\n.p-input-filled .p-inputtext:enabled:hover {\n  background-color: #f8f9fa;\n}\n\n.p-input-filled .p-inputtext:enabled:focus {\n  background-color: #ffffff;\n}\n\n.p-inputtext-sm .p-inputtext {\n  font-size: 0.875rem;\n  padding: 0.4375rem 0.4375rem;\n}\n\n.p-inputtext-lg .p-inputtext {\n  font-size: 1.25rem;\n  padding: 0.625rem 0.625rem;\n}\n\n.p-listbox {\n  background: #ffffff;\n  color: #495057;\n  border: 1px solid #ced4da;\n  border-radius: 3px;\n}\n\n.p-listbox .p-listbox-header {\n  padding: 0.5rem 1rem;\n  border-bottom: 0 none;\n  color: #495057;\n  background: #f8f9fa;\n  margin: 0;\n  border-top-right-radius: 3px;\n  border-top-left-radius: 3px;\n}\n\n.p-listbox .p-listbox-header .p-listbox-filter {\n  padding-right: 1.5rem;\n}\n\n.p-listbox .p-listbox-header .p-listbox-filter-icon {\n  right: 0.5rem;\n  color: #6c757d;\n}\n\n.p-listbox .p-listbox-list {\n  padding: 0.5rem 0;\n}\n\n.p-listbox .p-listbox-list .p-listbox-item {\n  margin: 0;\n  padding: 0.5rem 1rem;\n  border: 0 none;\n  color: #495057;\n  transition: box-shadow 0.2s;\n  border-radius: 0;\n}\n\n.p-listbox .p-listbox-list .p-listbox-item.p-highlight {\n  color: #495057;\n  background: #E3F2FD;\n}\n\n.p-listbox .p-listbox-list .p-listbox-item:focus {\n  outline: 0 none;\n  outline-offset: 0;\n  box-shadow: inset 0 0 0 0.15rem #a6d5fa;\n}\n\n.p-listbox .p-listbox-list .p-listbox-item-group {\n  margin: 0;\n  padding: 0.75rem 1rem;\n  color: #495057;\n  background: #ffffff;\n  font-weight: 600;\n}\n\n.p-listbox .p-listbox-list .p-listbox-empty-message {\n  padding: 0.5rem 1rem;\n  color: #495057;\n  background: transparent;\n}\n\n.p-listbox:not(.p-disabled) .p-listbox-item:not(.p-highlight):not(.p-disabled):hover {\n  color: #495057;\n  background: #e9ecef;\n}\n\n.p-listbox.p-invalid {\n  border-color: #f44336;\n}\n\n.p-multiselect {\n  background: #ffffff;\n  border: 1px solid #ced4da;\n  transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;\n  border-radius: 3px;\n}\n\n.p-multiselect:not(.p-disabled):hover {\n  border-color: #2196F3;\n}\n\n.p-multiselect:not(.p-disabled).p-focus {\n  outline: 0 none;\n  outline-offset: 0;\n  box-shadow: 0 0 0 0.2rem #a6d5fa;\n  border-color: #2196F3;\n}\n\n.p-multiselect .p-multiselect-label {\n  padding: 0.5rem 0.5rem;\n  transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;\n}\n\n.p-multiselect .p-multiselect-label.p-placeholder {\n  color: #6c757d;\n}\n\n.p-multiselect.p-multiselect-chip .p-multiselect-token {\n  padding: 0.25rem 0.5rem;\n  margin-right: 0.5rem;\n  background: #dee2e6;\n  color: #495057;\n  border-radius: 16px;\n}\n\n.p-multiselect.p-multiselect-chip .p-multiselect-token .p-multiselect-token-icon {\n  margin-left: 0.5rem;\n}\n\n.p-multiselect .p-multiselect-trigger {\n  background: transparent;\n  color: #6c757d;\n  width: 2.357rem;\n  border-top-right-radius: 3px;\n  border-bottom-right-radius: 3px;\n}\n\n.p-multiselect.p-invalid.p-component {\n  border-color: #f44336;\n}\n\n.p-inputwrapper-filled.p-multiselect.p-multiselect-chip .p-multiselect-label {\n  padding: 0.25rem 0.5rem;\n}\n\n.p-multiselect-panel {\n  background: #ffffff;\n  color: #495057;\n  border: 0 none;\n  border-radius: 3px;\n  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);\n}\n\n.p-multiselect-panel .p-multiselect-header {\n  padding: 0.5rem 1rem;\n  border-bottom: 0 none;\n  color: #495057;\n  background: #f8f9fa;\n  margin: 0;\n  border-top-right-radius: 3px;\n  border-top-left-radius: 3px;\n}\n\n.p-multiselect-panel .p-multiselect-header .p-multiselect-filter-container .p-inputtext {\n  padding-right: 1.5rem;\n}\n\n.p-multiselect-panel .p-multiselect-header .p-multiselect-filter-container .p-multiselect-filter-icon {\n  right: 0.5rem;\n  color: #6c757d;\n}\n\n.p-multiselect-panel .p-multiselect-header .p-checkbox {\n  margin-right: 0.5rem;\n}\n\n.p-multiselect-panel .p-multiselect-header .p-multiselect-close {\n  margin-left: 0.5rem;\n  width: 2rem;\n  height: 2rem;\n  color: #6c757d;\n  border: 0 none;\n  background: transparent;\n  border-radius: 50%;\n  transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;\n}\n\n.p-multiselect-panel .p-multiselect-header .p-multiselect-close:enabled:hover {\n  color: #495057;\n  border-color: transparent;\n  background: #e9ecef;\n}\n\n.p-multiselect-panel .p-multiselect-header .p-multiselect-close:focus {\n  outline: 0 none;\n  outline-offset: 0;\n  box-shadow: 0 0 0 0.2rem #a6d5fa;\n}\n\n.p-multiselect-panel .p-multiselect-items {\n  padding: 0.5rem 0;\n}\n\n.p-multiselect-panel .p-multiselect-items .p-multiselect-item {\n  margin: 0;\n  padding: 0.5rem 1rem;\n  border: 0 none;\n  color: #495057;\n  background: transparent;\n  transition: box-shadow 0.2s;\n  border-radius: 0;\n}\n\n.p-multiselect-panel .p-multiselect-items .p-multiselect-item.p-highlight {\n  color: #495057;\n  background: #E3F2FD;\n}\n\n.p-multiselect-panel .p-multiselect-items .p-multiselect-item:not(.p-highlight):not(.p-disabled):hover {\n  color: #495057;\n  background: #e9ecef;\n}\n\n.p-multiselect-panel .p-multiselect-items .p-multiselect-item:focus {\n  outline: 0 none;\n  outline-offset: 0;\n  box-shadow: inset 0 0 0 0.15rem #a6d5fa;\n}\n\n.p-multiselect-panel .p-multiselect-items .p-multiselect-item .p-checkbox {\n  margin-right: 0.5rem;\n}\n\n.p-multiselect-panel .p-multiselect-items .p-multiselect-item-group {\n  margin: 0;\n  padding: 0.75rem 1rem;\n  color: #495057;\n  background: #ffffff;\n  font-weight: 600;\n}\n\n.p-multiselect-panel .p-multiselect-items .p-multiselect-empty-message {\n  padding: 0.5rem 1rem;\n  color: #495057;\n  background: transparent;\n}\n\n.p-input-filled .p-multiselect {\n  background: #f8f9fa;\n}\n\n.p-input-filled .p-multiselect:not(.p-disabled):hover {\n  background-color: #f8f9fa;\n}\n\n.p-input-filled .p-multiselect:not(.p-disabled).p-focus {\n  background-color: #ffffff;\n}\n\n.p-password.p-invalid.p-component > .p-inputtext {\n  border-color: #f44336;\n}\n\n.p-password-panel {\n  padding: 1rem;\n  background: #ffffff;\n  color: #495057;\n  border: 0 none;\n  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);\n  border-radius: 3px;\n}\n\n.p-password-panel .p-password-meter {\n  margin-bottom: 0.5rem;\n  background: #dee2e6;\n}\n\n.p-password-panel .p-password-meter .p-password-strength.weak {\n  background: #D32F2F;\n}\n\n.p-password-panel .p-password-meter .p-password-strength.medium {\n  background: #FBC02D;\n}\n\n.p-password-panel .p-password-meter .p-password-strength.strong {\n  background: #689F38;\n}\n\n.p-radiobutton {\n  width: 20px;\n  height: 20px;\n}\n\n.p-radiobutton .p-radiobutton-box {\n  border: 2px solid #ced4da;\n  background: #ffffff;\n  width: 20px;\n  height: 20px;\n  color: #495057;\n  border-radius: 50%;\n  transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;\n}\n\n.p-radiobutton .p-radiobutton-box:not(.p-disabled):not(.p-highlight):hover {\n  border-color: #2196F3;\n}\n\n.p-radiobutton .p-radiobutton-box:not(.p-disabled).p-focus {\n  outline: 0 none;\n  outline-offset: 0;\n  box-shadow: 0 0 0 0.2rem #a6d5fa;\n  border-color: #2196F3;\n}\n\n.p-radiobutton .p-radiobutton-box .p-radiobutton-icon {\n  width: 12px;\n  height: 12px;\n  transition-duration: 0.2s;\n  background-color: #ffffff;\n}\n\n.p-radiobutton .p-radiobutton-box.p-highlight {\n  border-color: #2196F3;\n  background: #2196F3;\n}\n\n.p-radiobutton .p-radiobutton-box.p-highlight:not(.p-disabled):hover {\n  border-color: #0b7ad1;\n  background: #0b7ad1;\n  color: #ffffff;\n}\n\n.p-radiobutton.p-invalid > .p-radiobutton-box {\n  border-color: #f44336;\n}\n\n.p-radiobutton:focus {\n  outline: 0 none;\n}\n\n.p-input-filled .p-radiobutton .p-radiobutton-box {\n  background-color: #f8f9fa;\n}\n\n.p-input-filled .p-radiobutton .p-radiobutton-box:not(.p-disabled):hover {\n  background-color: #f8f9fa;\n}\n\n.p-input-filled .p-radiobutton .p-radiobutton-box.p-highlight {\n  background: #2196F3;\n}\n\n.p-input-filled .p-radiobutton .p-radiobutton-box.p-highlight:not(.p-disabled):hover {\n  background: #0b7ad1;\n}\n\n.p-rating .p-rating-icon {\n  color: #495057;\n  margin-left: 0.5rem;\n  transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;\n  font-size: 1.143rem;\n}\n\n.p-rating .p-rating-icon.p-rating-cancel {\n  color: #e74c3c;\n}\n\n.p-rating .p-rating-icon:focus {\n  outline: 0 none;\n  outline-offset: 0;\n  box-shadow: 0 0 0 0.2rem #a6d5fa;\n}\n\n.p-rating .p-rating-icon:first-child {\n  margin-left: 0;\n}\n\n.p-rating .p-rating-icon.pi-star-fill {\n  color: #2196F3;\n}\n\n.p-rating:not(.p-disabled):not(.p-readonly) .p-rating-icon:hover {\n  color: #2196F3;\n}\n\n.p-rating:not(.p-disabled):not(.p-readonly) .p-rating-icon.p-rating-cancel:hover {\n  color: #c0392b;\n}\n\n.p-selectbutton .p-button {\n  background: #ffffff;\n  border: 1px solid #ced4da;\n  color: #495057;\n  transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;\n}\n\n.p-selectbutton .p-button .p-button-icon-left,\n.p-selectbutton .p-button .p-button-icon-right {\n  color: #6c757d;\n}\n\n.p-selectbutton .p-button:not(.p-disabled):not(.p-highlight):hover {\n  background: #e9ecef;\n  border-color: #ced4da;\n  color: #495057;\n}\n\n.p-selectbutton .p-button:not(.p-disabled):not(.p-highlight):hover .p-button-icon-left,\n.p-selectbutton .p-button:not(.p-disabled):not(.p-highlight):hover .p-button-icon-right {\n  color: #6c757d;\n}\n\n.p-selectbutton .p-button.p-highlight {\n  background: #2196F3;\n  border-color: #2196F3;\n  color: #ffffff;\n}\n\n.p-selectbutton .p-button.p-highlight .p-button-icon-left,\n.p-selectbutton .p-button.p-highlight .p-button-icon-right {\n  color: #ffffff;\n}\n\n.p-selectbutton .p-button.p-highlight:hover {\n  background: #0d89ec;\n  border-color: #0d89ec;\n  color: #ffffff;\n}\n\n.p-selectbutton .p-button.p-highlight:hover .p-button-icon-left,\n.p-selectbutton .p-button.p-highlight:hover .p-button-icon-right {\n  color: #ffffff;\n}\n\n.p-selectbutton.p-invalid > .p-button {\n  border-color: #f44336;\n}\n\n.p-slider {\n  background: #dee2e6;\n  border: 0 none;\n  border-radius: 3px;\n}\n\n.p-slider.p-slider-horizontal {\n  height: 0.286rem;\n}\n\n.p-slider.p-slider-horizontal .p-slider-handle {\n  margin-top: -0.5715rem;\n  margin-left: -0.5715rem;\n}\n\n.p-slider.p-slider-vertical {\n  width: 0.286rem;\n}\n\n.p-slider.p-slider-vertical .p-slider-handle {\n  margin-left: -0.5715rem;\n  margin-bottom: -0.5715rem;\n}\n\n.p-slider .p-slider-handle {\n  height: 1.143rem;\n  width: 1.143rem;\n  background: #ffffff;\n  border: 2px solid #2196F3;\n  border-radius: 50%;\n  transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;\n}\n\n.p-slider .p-slider-handle:focus {\n  outline: 0 none;\n  outline-offset: 0;\n  box-shadow: 0 0 0 0.2rem #a6d5fa;\n}\n\n.p-slider .p-slider-range {\n  background: #2196F3;\n}\n\n.p-slider:not(.p-disabled) .p-slider-handle:hover {\n  background: #2196F3;\n  border-color: #2196F3;\n}\n\n.p-treeselect {\n  background: #ffffff;\n  border: 1px solid #ced4da;\n  transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;\n  border-radius: 3px;\n}\n\n.p-treeselect:not(.p-disabled):hover {\n  border-color: #2196F3;\n}\n\n.p-treeselect:not(.p-disabled).p-focus {\n  outline: 0 none;\n  outline-offset: 0;\n  box-shadow: 0 0 0 0.2rem #a6d5fa;\n  border-color: #2196F3;\n}\n\n.p-treeselect .p-treeselect-label {\n  padding: 0.5rem 0.5rem;\n  transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;\n}\n\n.p-treeselect .p-treeselect-label.p-placeholder {\n  color: #6c757d;\n}\n\n.p-treeselect.p-treeselect-chip .p-treeselect-token {\n  padding: 0.25rem 0.5rem;\n  margin-right: 0.5rem;\n  background: #dee2e6;\n  color: #495057;\n  border-radius: 16px;\n}\n\n.p-treeselect .p-treeselect-trigger {\n  background: transparent;\n  color: #6c757d;\n  width: 2.357rem;\n  border-top-right-radius: 3px;\n  border-bottom-right-radius: 3px;\n}\n\n.p-treeselect.p-invalid.p-component {\n  border-color: #f44336;\n}\n\n.p-inputwrapper-filled.p-treeselect.p-treeselect-chip .p-treeselect-label {\n  padding: 0.25rem 0.5rem;\n}\n\n.p-treeselect-panel {\n  background: #ffffff;\n  color: #495057;\n  border: 0 none;\n  border-radius: 3px;\n  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);\n}\n\n.p-treeselect-panel .p-treeselect-items-wrapper .p-tree {\n  border: 0 none;\n}\n\n.p-treeselect-panel .p-treeselect-items-wrapper .p-treeselect-empty-message {\n  padding: 0.5rem 1rem;\n  color: #495057;\n  background: transparent;\n}\n\n.p-input-filled .p-treeselect {\n  background: #f8f9fa;\n}\n\n.p-input-filled .p-treeselect:not(.p-disabled):hover {\n  background-color: #f8f9fa;\n}\n\n.p-input-filled .p-treeselect:not(.p-disabled).p-focus {\n  background-color: #ffffff;\n}\n\n.p-togglebutton.p-button {\n  background: #ffffff;\n  border: 1px solid #ced4da;\n  color: #495057;\n  transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;\n}\n\n.p-togglebutton.p-button .p-button-icon-left,\n.p-togglebutton.p-button .p-button-icon-right {\n  color: #6c757d;\n}\n\n.p-togglebutton.p-button:not(.p-disabled):not(.p-highlight):hover {\n  background: #e9ecef;\n  border-color: #ced4da;\n  color: #495057;\n}\n\n.p-togglebutton.p-button:not(.p-disabled):not(.p-highlight):hover .p-button-icon-left,\n.p-togglebutton.p-button:not(.p-disabled):not(.p-highlight):hover .p-button-icon-right {\n  color: #6c757d;\n}\n\n.p-togglebutton.p-button.p-highlight {\n  background: #2196F3;\n  border-color: #2196F3;\n  color: #ffffff;\n}\n\n.p-togglebutton.p-button.p-highlight .p-button-icon-left,\n.p-togglebutton.p-button.p-highlight .p-button-icon-right {\n  color: #ffffff;\n}\n\n.p-togglebutton.p-button.p-highlight:hover {\n  background: #0d89ec;\n  border-color: #0d89ec;\n  color: #ffffff;\n}\n\n.p-togglebutton.p-button.p-highlight:hover .p-button-icon-left,\n.p-togglebutton.p-button.p-highlight:hover .p-button-icon-right {\n  color: #ffffff;\n}\n\n.p-togglebutton.p-button.p-invalid > .p-button {\n  border-color: #f44336;\n}\n\n.p-button {\n  color: #ffffff;\n  background: #2196F3;\n  border: 1px solid #2196F3;\n  padding: 0.5rem 1rem;\n  font-size: 1rem;\n  transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;\n  border-radius: 3px;\n}\n\n.p-button:enabled:hover {\n  background: #0d89ec;\n  color: #ffffff;\n  border-color: #0d89ec;\n}\n\n.p-button:enabled:active {\n  background: #0b7ad1;\n  color: #ffffff;\n  border-color: #0b7ad1;\n}\n\n.p-button.p-button-outlined {\n  background-color: transparent;\n  color: #2196F3;\n  border: 1px solid;\n}\n\n.p-button.p-button-outlined:enabled:hover {\n  background: rgba(33, 150, 243, 0.04);\n  color: #2196F3;\n  border: 1px solid;\n}\n\n.p-button.p-button-outlined:enabled:active {\n  background: rgba(33, 150, 243, 0.16);\n  color: #2196F3;\n  border: 1px solid;\n}\n\n.p-button.p-button-outlined.p-button-plain {\n  color: #6c757d;\n  border-color: #6c757d;\n}\n\n.p-button.p-button-outlined.p-button-plain:enabled:hover {\n  background: #e9ecef;\n  color: #6c757d;\n}\n\n.p-button.p-button-outlined.p-button-plain:enabled:active {\n  background: #dee2e6;\n  color: #6c757d;\n}\n\n.p-button.p-button-text {\n  background-color: transparent;\n  color: #2196F3;\n  border-color: transparent;\n}\n\n.p-button.p-button-text:enabled:hover {\n  background: rgba(33, 150, 243, 0.04);\n  color: #2196F3;\n  border-color: transparent;\n}\n\n.p-button.p-button-text:enabled:active {\n  background: rgba(33, 150, 243, 0.16);\n  color: #2196F3;\n  border-color: transparent;\n}\n\n.p-button.p-button-text.p-button-plain {\n  color: #6c757d;\n}\n\n.p-button.p-button-text.p-button-plain:enabled:hover {\n  background: #e9ecef;\n  color: #6c757d;\n}\n\n.p-button.p-button-text.p-button-plain:enabled:active {\n  background: #dee2e6;\n  color: #6c757d;\n}\n\n.p-button:focus {\n  outline: 0 none;\n  outline-offset: 0;\n  box-shadow: 0 0 0 0.2rem #a6d5fa;\n}\n\n.p-button .p-button-icon-left {\n  margin-right: 0.5rem;\n}\n\n.p-button .p-button-icon-right {\n  margin-left: 0.5rem;\n}\n\n.p-button .p-button-icon-bottom {\n  margin-top: 0.5rem;\n}\n\n.p-button .p-button-icon-top {\n  margin-bottom: 0.5rem;\n}\n\n.p-button .p-badge {\n  margin-left: 0.5rem;\n  min-width: 1rem;\n  height: 1rem;\n  line-height: 1rem;\n  color: #2196F3;\n  background-color: #ffffff;\n}\n\n.p-button.p-button-raised {\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.p-button.p-button-rounded {\n  border-radius: 2rem;\n}\n\n.p-button.p-button-icon-only {\n  width: 2.357rem;\n  padding: 0.5rem 0;\n}\n\n.p-button.p-button-icon-only .p-button-icon-left,\n.p-button.p-button-icon-only .p-button-icon-right {\n  margin: 0;\n}\n\n.p-button.p-button-icon-only.p-button-rounded {\n  border-radius: 50%;\n  height: 2.357rem;\n}\n\n.p-button.p-button-sm {\n  font-size: 0.875rem;\n  padding: 0.4375rem 0.875rem;\n}\n\n.p-button.p-button-sm .p-button-icon {\n  font-size: 0.875rem;\n}\n\n.p-button.p-button-lg {\n  font-size: 1.25rem;\n  padding: 0.625rem 1.25rem;\n}\n\n.p-button.p-button-lg .p-button-icon {\n  font-size: 1.25rem;\n}\n\n.p-button.p-button-loading-label-only .p-button-label {\n  margin-left: 0.5rem;\n}\n\n.p-button.p-button-loading-label-only .p-button-loading-icon {\n  margin-right: 0;\n}\n\n.p-fluid .p-button {\n  width: 100%;\n}\n\n.p-fluid .p-button-icon-only {\n  width: 2.357rem;\n}\n\n.p-fluid .p-buttonset {\n  display: flex;\n}\n\n.p-fluid .p-buttonset .p-button {\n  flex: 1;\n}\n\n.p-button.p-button-secondary, .p-buttonset.p-button-secondary > .p-button, .p-splitbutton.p-button-secondary > .p-button {\n  color: #ffffff;\n  background: #607D8B;\n  border: 1px solid #607D8B;\n}\n\n.p-button.p-button-secondary:enabled:hover, .p-buttonset.p-button-secondary > .p-button:enabled:hover, .p-splitbutton.p-button-secondary > .p-button:enabled:hover {\n  background: #56717d;\n  color: #ffffff;\n  border-color: #56717d;\n}\n\n.p-button.p-button-secondary:enabled:focus, .p-buttonset.p-button-secondary > .p-button:enabled:focus, .p-splitbutton.p-button-secondary > .p-button:enabled:focus {\n  box-shadow: 0 0 0 0.2rem #beccd2;\n}\n\n.p-button.p-button-secondary:enabled:active, .p-buttonset.p-button-secondary > .p-button:enabled:active, .p-splitbutton.p-button-secondary > .p-button:enabled:active {\n  background: #4d646f;\n  color: #ffffff;\n  border-color: #4d646f;\n}\n\n.p-button.p-button-secondary.p-button-outlined, .p-buttonset.p-button-secondary > .p-button.p-button-outlined, .p-splitbutton.p-button-secondary > .p-button.p-button-outlined {\n  background-color: transparent;\n  color: #607D8B;\n  border: 1px solid;\n}\n\n.p-button.p-button-secondary.p-button-outlined:enabled:hover, .p-buttonset.p-button-secondary > .p-button.p-button-outlined:enabled:hover, .p-splitbutton.p-button-secondary > .p-button.p-button-outlined:enabled:hover {\n  background: rgba(96, 125, 139, 0.04);\n  color: #607D8B;\n  border: 1px solid;\n}\n\n.p-button.p-button-secondary.p-button-outlined:enabled:active, .p-buttonset.p-button-secondary > .p-button.p-button-outlined:enabled:active, .p-splitbutton.p-button-secondary > .p-button.p-button-outlined:enabled:active {\n  background: rgba(96, 125, 139, 0.16);\n  color: #607D8B;\n  border: 1px solid;\n}\n\n.p-button.p-button-secondary.p-button-text, .p-buttonset.p-button-secondary > .p-button.p-button-text, .p-splitbutton.p-button-secondary > .p-button.p-button-text {\n  background-color: transparent;\n  color: #607D8B;\n  border-color: transparent;\n}\n\n.p-button.p-button-secondary.p-button-text:enabled:hover, .p-buttonset.p-button-secondary > .p-button.p-button-text:enabled:hover, .p-splitbutton.p-button-secondary > .p-button.p-button-text:enabled:hover {\n  background: rgba(96, 125, 139, 0.04);\n  border-color: transparent;\n  color: #607D8B;\n}\n\n.p-button.p-button-secondary.p-button-text:enabled:active, .p-buttonset.p-button-secondary > .p-button.p-button-text:enabled:active, .p-splitbutton.p-button-secondary > .p-button.p-button-text:enabled:active {\n  background: rgba(96, 125, 139, 0.16);\n  border-color: transparent;\n  color: #607D8B;\n}\n\n.p-button.p-button-info, .p-buttonset.p-button-info > .p-button, .p-splitbutton.p-button-info > .p-button {\n  color: #ffffff;\n  background: #0288D1;\n  border: 1px solid #0288D1;\n}\n\n.p-button.p-button-info:enabled:hover, .p-buttonset.p-button-info > .p-button:enabled:hover, .p-splitbutton.p-button-info > .p-button:enabled:hover {\n  background: #027abc;\n  color: #ffffff;\n  border-color: #027abc;\n}\n\n.p-button.p-button-info:enabled:focus, .p-buttonset.p-button-info > .p-button:enabled:focus, .p-splitbutton.p-button-info > .p-button:enabled:focus {\n  box-shadow: 0 0 0 0.2rem #89d4fe;\n}\n\n.p-button.p-button-info:enabled:active, .p-buttonset.p-button-info > .p-button:enabled:active, .p-splitbutton.p-button-info > .p-button:enabled:active {\n  background: #026da7;\n  color: #ffffff;\n  border-color: #026da7;\n}\n\n.p-button.p-button-info.p-button-outlined, .p-buttonset.p-button-info > .p-button.p-button-outlined, .p-splitbutton.p-button-info > .p-button.p-button-outlined {\n  background-color: transparent;\n  color: #0288D1;\n  border: 1px solid;\n}\n\n.p-button.p-button-info.p-button-outlined:enabled:hover, .p-buttonset.p-button-info > .p-button.p-button-outlined:enabled:hover, .p-splitbutton.p-button-info > .p-button.p-button-outlined:enabled:hover {\n  background: rgba(2, 136, 209, 0.04);\n  color: #0288D1;\n  border: 1px solid;\n}\n\n.p-button.p-button-info.p-button-outlined:enabled:active, .p-buttonset.p-button-info > .p-button.p-button-outlined:enabled:active, .p-splitbutton.p-button-info > .p-button.p-button-outlined:enabled:active {\n  background: rgba(2, 136, 209, 0.16);\n  color: #0288D1;\n  border: 1px solid;\n}\n\n.p-button.p-button-info.p-button-text, .p-buttonset.p-button-info > .p-button.p-button-text, .p-splitbutton.p-button-info > .p-button.p-button-text {\n  background-color: transparent;\n  color: #0288D1;\n  border-color: transparent;\n}\n\n.p-button.p-button-info.p-button-text:enabled:hover, .p-buttonset.p-button-info > .p-button.p-button-text:enabled:hover, .p-splitbutton.p-button-info > .p-button.p-button-text:enabled:hover {\n  background: rgba(2, 136, 209, 0.04);\n  border-color: transparent;\n  color: #0288D1;\n}\n\n.p-button.p-button-info.p-button-text:enabled:active, .p-buttonset.p-button-info > .p-button.p-button-text:enabled:active, .p-splitbutton.p-button-info > .p-button.p-button-text:enabled:active {\n  background: rgba(2, 136, 209, 0.16);\n  border-color: transparent;\n  color: #0288D1;\n}\n\n.p-button.p-button-success, .p-buttonset.p-button-success > .p-button, .p-splitbutton.p-button-success > .p-button {\n  color: #ffffff;\n  background: #689F38;\n  border: 1px solid #689F38;\n}\n\n.p-button.p-button-success:enabled:hover, .p-buttonset.p-button-success > .p-button:enabled:hover, .p-splitbutton.p-button-success > .p-button:enabled:hover {\n  background: #5e8f32;\n  color: #ffffff;\n  border-color: #5e8f32;\n}\n\n.p-button.p-button-success:enabled:focus, .p-buttonset.p-button-success > .p-button:enabled:focus, .p-splitbutton.p-button-success > .p-button:enabled:focus {\n  box-shadow: 0 0 0 0.2rem #c2e0a8;\n}\n\n.p-button.p-button-success:enabled:active, .p-buttonset.p-button-success > .p-button:enabled:active, .p-splitbutton.p-button-success > .p-button:enabled:active {\n  background: #537f2d;\n  color: #ffffff;\n  border-color: #537f2d;\n}\n\n.p-button.p-button-success.p-button-outlined, .p-buttonset.p-button-success > .p-button.p-button-outlined, .p-splitbutton.p-button-success > .p-button.p-button-outlined {\n  background-color: transparent;\n  color: #689F38;\n  border: 1px solid;\n}\n\n.p-button.p-button-success.p-button-outlined:enabled:hover, .p-buttonset.p-button-success > .p-button.p-button-outlined:enabled:hover, .p-splitbutton.p-button-success > .p-button.p-button-outlined:enabled:hover {\n  background: rgba(104, 159, 56, 0.04);\n  color: #689F38;\n  border: 1px solid;\n}\n\n.p-button.p-button-success.p-button-outlined:enabled:active, .p-buttonset.p-button-success > .p-button.p-button-outlined:enabled:active, .p-splitbutton.p-button-success > .p-button.p-button-outlined:enabled:active {\n  background: rgba(104, 159, 56, 0.16);\n  color: #689F38;\n  border: 1px solid;\n}\n\n.p-button.p-button-success.p-button-text, .p-buttonset.p-button-success > .p-button.p-button-text, .p-splitbutton.p-button-success > .p-button.p-button-text {\n  background-color: transparent;\n  color: #689F38;\n  border-color: transparent;\n}\n\n.p-button.p-button-success.p-button-text:enabled:hover, .p-buttonset.p-button-success > .p-button.p-button-text:enabled:hover, .p-splitbutton.p-button-success > .p-button.p-button-text:enabled:hover {\n  background: rgba(104, 159, 56, 0.04);\n  border-color: transparent;\n  color: #689F38;\n}\n\n.p-button.p-button-success.p-button-text:enabled:active, .p-buttonset.p-button-success > .p-button.p-button-text:enabled:active, .p-splitbutton.p-button-success > .p-button.p-button-text:enabled:active {\n  background: rgba(104, 159, 56, 0.16);\n  border-color: transparent;\n  color: #689F38;\n}\n\n.p-button.p-button-warning, .p-buttonset.p-button-warning > .p-button, .p-splitbutton.p-button-warning > .p-button {\n  color: #212529;\n  background: #FBC02D;\n  border: 1px solid #FBC02D;\n}\n\n.p-button.p-button-warning:enabled:hover, .p-buttonset.p-button-warning > .p-button:enabled:hover, .p-splitbutton.p-button-warning > .p-button:enabled:hover {\n  background: #fab710;\n  color: #212529;\n  border-color: #fab710;\n}\n\n.p-button.p-button-warning:enabled:focus, .p-buttonset.p-button-warning > .p-button:enabled:focus, .p-splitbutton.p-button-warning > .p-button:enabled:focus {\n  box-shadow: 0 0 0 0.2rem #fde6ab;\n}\n\n.p-button.p-button-warning:enabled:active, .p-buttonset.p-button-warning > .p-button:enabled:active, .p-splitbutton.p-button-warning > .p-button:enabled:active {\n  background: #e8a704;\n  color: #212529;\n  border-color: #e8a704;\n}\n\n.p-button.p-button-warning.p-button-outlined, .p-buttonset.p-button-warning > .p-button.p-button-outlined, .p-splitbutton.p-button-warning > .p-button.p-button-outlined {\n  background-color: transparent;\n  color: #FBC02D;\n  border: 1px solid;\n}\n\n.p-button.p-button-warning.p-button-outlined:enabled:hover, .p-buttonset.p-button-warning > .p-button.p-button-outlined:enabled:hover, .p-splitbutton.p-button-warning > .p-button.p-button-outlined:enabled:hover {\n  background: rgba(251, 192, 45, 0.04);\n  color: #FBC02D;\n  border: 1px solid;\n}\n\n.p-button.p-button-warning.p-button-outlined:enabled:active, .p-buttonset.p-button-warning > .p-button.p-button-outlined:enabled:active, .p-splitbutton.p-button-warning > .p-button.p-button-outlined:enabled:active {\n  background: rgba(251, 192, 45, 0.16);\n  color: #FBC02D;\n  border: 1px solid;\n}\n\n.p-button.p-button-warning.p-button-text, .p-buttonset.p-button-warning > .p-button.p-button-text, .p-splitbutton.p-button-warning > .p-button.p-button-text {\n  background-color: transparent;\n  color: #FBC02D;\n  border-color: transparent;\n}\n\n.p-button.p-button-warning.p-button-text:enabled:hover, .p-buttonset.p-button-warning > .p-button.p-button-text:enabled:hover, .p-splitbutton.p-button-warning > .p-button.p-button-text:enabled:hover {\n  background: rgba(251, 192, 45, 0.04);\n  border-color: transparent;\n  color: #FBC02D;\n}\n\n.p-button.p-button-warning.p-button-text:enabled:active, .p-buttonset.p-button-warning > .p-button.p-button-text:enabled:active, .p-splitbutton.p-button-warning > .p-button.p-button-text:enabled:active {\n  background: rgba(251, 192, 45, 0.16);\n  border-color: transparent;\n  color: #FBC02D;\n}\n\n.p-button.p-button-help, .p-buttonset.p-button-help > .p-button, .p-splitbutton.p-button-help > .p-button {\n  color: #ffffff;\n  background: #9C27B0;\n  border: 1px solid #9C27B0;\n}\n\n.p-button.p-button-help:enabled:hover, .p-buttonset.p-button-help > .p-button:enabled:hover, .p-splitbutton.p-button-help > .p-button:enabled:hover {\n  background: #8c239e;\n  color: #ffffff;\n  border-color: #8c239e;\n}\n\n.p-button.p-button-help:enabled:focus, .p-buttonset.p-button-help > .p-button:enabled:focus, .p-splitbutton.p-button-help > .p-button:enabled:focus {\n  box-shadow: 0 0 0 0.2rem #df9eea;\n}\n\n.p-button.p-button-help:enabled:active, .p-buttonset.p-button-help > .p-button:enabled:active, .p-splitbutton.p-button-help > .p-button:enabled:active {\n  background: #7d1f8d;\n  color: #ffffff;\n  border-color: #7d1f8d;\n}\n\n.p-button.p-button-help.p-button-outlined, .p-buttonset.p-button-help > .p-button.p-button-outlined, .p-splitbutton.p-button-help > .p-button.p-button-outlined {\n  background-color: transparent;\n  color: #9C27B0;\n  border: 1px solid;\n}\n\n.p-button.p-button-help.p-button-outlined:enabled:hover, .p-buttonset.p-button-help > .p-button.p-button-outlined:enabled:hover, .p-splitbutton.p-button-help > .p-button.p-button-outlined:enabled:hover {\n  background: rgba(156, 39, 176, 0.04);\n  color: #9C27B0;\n  border: 1px solid;\n}\n\n.p-button.p-button-help.p-button-outlined:enabled:active, .p-buttonset.p-button-help > .p-button.p-button-outlined:enabled:active, .p-splitbutton.p-button-help > .p-button.p-button-outlined:enabled:active {\n  background: rgba(156, 39, 176, 0.16);\n  color: #9C27B0;\n  border: 1px solid;\n}\n\n.p-button.p-button-help.p-button-text, .p-buttonset.p-button-help > .p-button.p-button-text, .p-splitbutton.p-button-help > .p-button.p-button-text {\n  background-color: transparent;\n  color: #9C27B0;\n  border-color: transparent;\n}\n\n.p-button.p-button-help.p-button-text:enabled:hover, .p-buttonset.p-button-help > .p-button.p-button-text:enabled:hover, .p-splitbutton.p-button-help > .p-button.p-button-text:enabled:hover {\n  background: rgba(156, 39, 176, 0.04);\n  border-color: transparent;\n  color: #9C27B0;\n}\n\n.p-button.p-button-help.p-button-text:enabled:active, .p-buttonset.p-button-help > .p-button.p-button-text:enabled:active, .p-splitbutton.p-button-help > .p-button.p-button-text:enabled:active {\n  background: rgba(156, 39, 176, 0.16);\n  border-color: transparent;\n  color: #9C27B0;\n}\n\n.p-button.p-button-danger, .p-buttonset.p-button-danger > .p-button, .p-splitbutton.p-button-danger > .p-button {\n  color: #ffffff;\n  background: #D32F2F;\n  border: 1px solid #D32F2F;\n}\n\n.p-button.p-button-danger:enabled:hover, .p-buttonset.p-button-danger > .p-button:enabled:hover, .p-splitbutton.p-button-danger > .p-button:enabled:hover {\n  background: #c02929;\n  color: #ffffff;\n  border-color: #c02929;\n}\n\n.p-button.p-button-danger:enabled:focus, .p-buttonset.p-button-danger > .p-button:enabled:focus, .p-splitbutton.p-button-danger > .p-button:enabled:focus {\n  box-shadow: 0 0 0 0.2rem #edacac;\n}\n\n.p-button.p-button-danger:enabled:active, .p-buttonset.p-button-danger > .p-button:enabled:active, .p-splitbutton.p-button-danger > .p-button:enabled:active {\n  background: #aa2424;\n  color: #ffffff;\n  border-color: #aa2424;\n}\n\n.p-button.p-button-danger.p-button-outlined, .p-buttonset.p-button-danger > .p-button.p-button-outlined, .p-splitbutton.p-button-danger > .p-button.p-button-outlined {\n  background-color: transparent;\n  color: #D32F2F;\n  border: 1px solid;\n}\n\n.p-button.p-button-danger.p-button-outlined:enabled:hover, .p-buttonset.p-button-danger > .p-button.p-button-outlined:enabled:hover, .p-splitbutton.p-button-danger > .p-button.p-button-outlined:enabled:hover {\n  background: rgba(211, 47, 47, 0.04);\n  color: #D32F2F;\n  border: 1px solid;\n}\n\n.p-button.p-button-danger.p-button-outlined:enabled:active, .p-buttonset.p-button-danger > .p-button.p-button-outlined:enabled:active, .p-splitbutton.p-button-danger > .p-button.p-button-outlined:enabled:active {\n  background: rgba(211, 47, 47, 0.16);\n  color: #D32F2F;\n  border: 1px solid;\n}\n\n.p-button.p-button-danger.p-button-text, .p-buttonset.p-button-danger > .p-button.p-button-text, .p-splitbutton.p-button-danger > .p-button.p-button-text {\n  background-color: transparent;\n  color: #D32F2F;\n  border-color: transparent;\n}\n\n.p-button.p-button-danger.p-button-text:enabled:hover, .p-buttonset.p-button-danger > .p-button.p-button-text:enabled:hover, .p-splitbutton.p-button-danger > .p-button.p-button-text:enabled:hover {\n  background: rgba(211, 47, 47, 0.04);\n  border-color: transparent;\n  color: #D32F2F;\n}\n\n.p-button.p-button-danger.p-button-text:enabled:active, .p-buttonset.p-button-danger > .p-button.p-button-text:enabled:active, .p-splitbutton.p-button-danger > .p-button.p-button-text:enabled:active {\n  background: rgba(211, 47, 47, 0.16);\n  border-color: transparent;\n  color: #D32F2F;\n}\n\n.p-button.p-button-link {\n  color: #0b7ad1;\n  background: transparent;\n  border: transparent;\n}\n\n.p-button.p-button-link:enabled:hover {\n  background: transparent;\n  color: #0b7ad1;\n  border-color: transparent;\n}\n\n.p-button.p-button-link:enabled:hover .p-button-label {\n  text-decoration: underline;\n}\n\n.p-button.p-button-link:enabled:focus {\n  background: transparent;\n  box-shadow: 0 0 0 0.2rem #a6d5fa;\n  border-color: transparent;\n}\n\n.p-button.p-button-link:enabled:active {\n  background: transparent;\n  color: #0b7ad1;\n  border-color: transparent;\n}\n\n.p-speeddial-button.p-button.p-button-icon-only {\n  width: 4rem;\n  height: 4rem;\n}\n\n.p-speeddial-button.p-button.p-button-icon-only .p-button-icon {\n  font-size: 1.3rem;\n}\n\n.p-speeddial-action {\n  width: 3rem;\n  height: 3rem;\n  background: #495057;\n  color: #fff;\n}\n\n.p-speeddial-action:hover {\n  background: #343a40;\n  color: #fff;\n}\n\n.p-speeddial-direction-up .p-speeddial-item {\n  margin: 0.25rem 0;\n}\n\n.p-speeddial-direction-up .p-speeddial-item:first-child {\n  margin-bottom: 0.5rem;\n}\n\n.p-speeddial-direction-down .p-speeddial-item {\n  margin: 0.25rem 0;\n}\n\n.p-speeddial-direction-down .p-speeddial-item:first-child {\n  margin-top: 0.5rem;\n}\n\n.p-speeddial-direction-left .p-speeddial-item {\n  margin: 0 0.25rem;\n}\n\n.p-speeddial-direction-left .p-speeddial-item:first-child {\n  margin-right: 0.5rem;\n}\n\n.p-speeddial-direction-right .p-speeddial-item {\n  margin: 0 0.25rem;\n}\n\n.p-speeddial-direction-right .p-speeddial-item:first-child {\n  margin-left: 0.5rem;\n}\n\n.p-speeddial-circle .p-speeddial-item,\n.p-speeddial-semi-circle .p-speeddial-item,\n.p-speeddial-quarter-circle .p-speeddial-item {\n  margin: 0;\n}\n\n.p-speeddial-circle .p-speeddial-item:first-child, .p-speeddial-circle .p-speeddial-item:last-child,\n.p-speeddial-semi-circle .p-speeddial-item:first-child,\n.p-speeddial-semi-circle .p-speeddial-item:last-child,\n.p-speeddial-quarter-circle .p-speeddial-item:first-child,\n.p-speeddial-quarter-circle .p-speeddial-item:last-child {\n  margin: 0;\n}\n\n.p-speeddial-mask {\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n.p-carousel .p-carousel-content .p-carousel-prev,\n.p-carousel .p-carousel-content .p-carousel-next {\n  width: 2rem;\n  height: 2rem;\n  color: #6c757d;\n  border: 0 none;\n  background: transparent;\n  border-radius: 50%;\n  transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;\n  margin: 0.5rem;\n}\n\n.p-carousel .p-carousel-content .p-carousel-prev:enabled:hover,\n.p-carousel .p-carousel-content .p-carousel-next:enabled:hover {\n  color: #495057;\n  border-color: transparent;\n  background: #e9ecef;\n}\n\n.p-carousel .p-carousel-content .p-carousel-prev:focus,\n.p-carousel .p-carousel-content .p-carousel-next:focus {\n  outline: 0 none;\n  outline-offset: 0;\n  box-shadow: 0 0 0 0.2rem #a6d5fa;\n}\n\n.p-carousel .p-carousel-indicators {\n  padding: 1rem;\n}\n\n.p-carousel .p-carousel-indicators .p-carousel-indicator {\n  margin-right: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n\n.p-carousel .p-carousel-indicators .p-carousel-indicator button {\n  background-color: #e9ecef;\n  width: 2rem;\n  height: 0.5rem;\n  transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;\n  border-radius: 0;\n}\n\n.p-carousel .p-carousel-indicators .p-carousel-indicator button:hover {\n  background: #dee2e6;\n}\n\n.p-carousel .p-carousel-indicators .p-carousel-indicator.p-highlight button {\n  background: #E3F2FD;\n  color: #495057;\n}\n\n.p-datatable .p-paginator-top {\n  border-width: 0 0 1px 0;\n  border-radius: 0;\n}\n\n.p-datatable .p-paginator-bottom {\n  border-width: 0 0 1px 0;\n  border-radius: 0;\n}\n\n.p-datatable .p-datatable-header {\n  background: #f8f9fa;\n  color: #495057;\n  border: 1px solid #e9ecef;\n  border-width: 1px 0 1px 0;\n  padding: 1rem 1rem;\n  font-weight: 600;\n}\n\n.p-datatable .p-datatable-footer {\n  background: #f8f9fa;\n  color: #495057;\n  border: 1px solid #e9ecef;\n  border-width: 0 0 1px 0;\n  padding: 1rem 1rem;\n  font-weight: 600;\n}\n\n.p-datatable .p-datatable-thead > tr > th {\n  text-align: left;\n  padding: 1rem 1rem;\n  border: 1px solid #e9ecef;\n  border-width: 0 0 1px 0;\n  font-weight: 600;\n  color: #495057;\n  background: #f8f9fa;\n  transition: box-shadow 0.2s;\n}\n\n.p-datatable .p-datatable-tfoot > tr > td {\n  text-align: left;\n  padding: 1rem 1rem;\n  border: 1px solid #e9ecef;\n  border-width: 0 0 1px 0;\n  font-weight: 600;\n  color: #495057;\n  background: #f8f9fa;\n}\n\n.p-datatable .p-sortable-column .p-sortable-column-icon {\n  color: #6c757d;\n  margin-left: 0.5rem;\n}\n\n.p-datatable .p-sortable-column .p-sortable-column-badge {\n  border-radius: 50%;\n  height: 1.143rem;\n  min-width: 1.143rem;\n  line-height: 1.143rem;\n  color: #495057;\n  background: #E3F2FD;\n  margin-left: 0.5rem;\n}\n\n.p-datatable .p-sortable-column:not(.p-highlight):hover {\n  background: #e9ecef;\n  color: #495057;\n}\n\n.p-datatable .p-sortable-column:not(.p-highlight):hover .p-sortable-column-icon {\n  color: #6c757d;\n}\n\n.p-datatable .p-sortable-column.p-highlight {\n  background: #f8f9fa;\n  color: #2196F3;\n}\n\n.p-datatable .p-sortable-column.p-highlight .p-sortable-column-icon {\n  color: #2196F3;\n}\n\n.p-datatable .p-sortable-column.p-highlight:hover {\n  background: #e9ecef;\n  color: #2196F3;\n}\n\n.p-datatable .p-sortable-column.p-highlight:hover .p-sortable-column-icon {\n  color: #2196F3;\n}\n\n.p-datatable .p-sortable-column:focus {\n  box-shadow: inset 0 0 0 0.15rem #a6d5fa;\n  outline: 0 none;\n}\n\n.p-datatable .p-datatable-tbody > tr {\n  background: #ffffff;\n  color: #495057;\n  transition: box-shadow 0.2s;\n}\n\n.p-datatable .p-datatable-tbody > tr > td {\n  text-align: left;\n  border: 1px solid #e9ecef;\n  border-width: 0 0 1px 0;\n  padding: 1rem 1rem;\n}\n\n.p-datatable .p-datatable-tbody > tr > td .p-row-toggler,\n.p-datatable .p-datatable-tbody > tr > td .p-row-editor-init,\n.p-datatable .p-datatable-tbody > tr > td .p-row-editor-save,\n.p-datatable .p-datatable-tbody > tr > td .p-row-editor-cancel {\n  width: 2rem;\n  height: 2rem;\n  color: #6c757d;\n  border: 0 none;\n  background: transparent;\n  border-radius: 50%;\n  transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;\n}\n\n.p-datatable .p-datatable-tbody > tr > td .p-row-toggler:enabled:hover,\n.p-datatable .p-datatable-tbody > tr > td .p-row-editor-init:enabled:hover,\n.p-datatable .p-datatable-tbody > tr > td .p-row-editor-save:enabled:hover,\n.p-datatable .p-datatable-tbody > tr > td .p-row-editor-cancel:enabled:hover {\n  color: #495057;\n  border-color: transparent;\n  background: #e9ecef;\n}\n\n.p-datatable .p-datatable-tbody > tr > td .p-row-toggler:focus,\n.p-datatable .p-datatable-tbody > tr > td .p-row-editor-init:focus,\n.p-datatable .p-datatable-tbody > tr > td .p-row-editor-save:focus,\n.p-datatable .p-datatable-tbody > tr > td .p-row-editor-cancel:focus {\n  outline: 0 none;\n  outline-offset: 0;\n  box-shadow: 0 0 0 0.2rem #a6d5fa;\n}\n\n.p-datatable .p-datatable-tbody > tr > td .p-row-editor-save {\n  margin-right: 0.5rem;\n}\n\n.p-datatable .p-datatable-tbody > tr > td > .p-column-title {\n  font-weight: 600;\n}\n\n.p-datatable .p-datatable-tbody > tr:focus {\n  outline: 0.15rem solid #a6d5fa;\n  outline-offset: -0.15rem;\n}\n\n.p-datatable .p-datatable-tbody > tr.p-highlight {\n  background: #E3F2FD;\n  color: #495057;\n}\n\n.p-datatable .p-datatable-tbody > tr.p-datatable-dragpoint-top > td {\n  box-shadow: inset 0 2px 0 0 #E3F2FD;\n}\n\n.p-datatable .p-datatable-tbody > tr.p-datatable-dragpoint-bottom > td {\n  box-shadow: inset 0 -2px 0 0 #E3F2FD;\n}\n\n.p-datatable.p-datatable-hoverable-rows .p-datatable-tbody > tr:not(.p-highlight):hover {\n  background: #e9ecef;\n  color: #495057;\n}\n\n.p-datatable .p-column-resizer-helper {\n  background: #2196F3;\n}\n\n.p-datatable .p-datatable-scrollable-header,\n.p-datatable .p-datatable-scrollable-footer {\n  background: #f8f9fa;\n}\n\n.p-datatable.p-datatable-scrollable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-thead,\n.p-datatable.p-datatable-scrollable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tfoot {\n  background-color: #f8f9fa;\n}\n\n.p-datatable .p-datatable-loading-icon {\n  font-size: 2rem;\n}\n\n.p-datatable.p-datatable-gridlines .p-datatable-header {\n  border-width: 1px 1px 0 1px;\n}\n\n.p-datatable.p-datatable-gridlines .p-datatable-footer {\n  border-width: 0 1px 1px 1px;\n}\n\n.p-datatable.p-datatable-gridlines .p-paginator-top {\n  border-width: 0 1px 0 1px;\n}\n\n.p-datatable.p-datatable-gridlines .p-paginator-bottom {\n  border-width: 0 1px 1px 1px;\n}\n\n.p-datatable.p-datatable-gridlines .p-datatable-thead > tr > th {\n  border-width: 1px 1px 1px 1px;\n}\n\n.p-datatable.p-datatable-gridlines .p-datatable-tbody > tr > td {\n  border-width: 1px;\n}\n\n.p-datatable.p-datatable-gridlines .p-datatable-tfoot > tr > td {\n  border-width: 1px;\n}\n\n.p-datatable.p-datatable-gridlines.p-datatable-scrollable .p-datatable-thead > tr > th + th {\n  border-left-width: 0;\n}\n\n.p-datatable.p-datatable-gridlines.p-datatable-scrollable .p-datatable-tbody > tr > td + td {\n  border-left-width: 0;\n}\n\n.p-datatable.p-datatable-gridlines.p-datatable-scrollable .p-datatable-tbody > tr + tr > td, .p-datatable.p-datatable-gridlines.p-datatable-scrollable .p-datatable-tbody > tr:first-child > td {\n  border-top-width: 0;\n}\n\n.p-datatable.p-datatable-gridlines.p-datatable-scrollable .p-datatable-tfoot > tr > td + td {\n  border-left-width: 0;\n}\n\n.p-datatable.p-datatable-striped .p-datatable-tbody > tr:nth-child(even) {\n  background: #fcfcfc;\n}\n\n.p-datatable.p-datatable-striped .p-datatable-tbody > tr:nth-child(even).p-highlight {\n  background: #E3F2FD;\n  color: #495057;\n}\n\n.p-datatable.p-datatable-striped .p-datatable-tbody > tr:nth-child(even).p-highlight .p-row-toggler {\n  color: #495057;\n}\n\n.p-datatable.p-datatable-striped .p-datatable-tbody > tr:nth-child(even).p-highlight .p-row-toggler:hover {\n  color: #495057;\n}\n\n.p-datatable.p-datatable-sm .p-datatable-header {\n  padding: 0.5rem 0.5rem;\n}\n\n.p-datatable.p-datatable-sm .p-datatable-thead > tr > th {\n  padding: 0.5rem 0.5rem;\n}\n\n.p-datatable.p-datatable-sm .p-datatable-tbody > tr > td {\n  padding: 0.5rem 0.5rem;\n}\n\n.p-datatable.p-datatable-sm .p-datatable-tfoot > tr > td {\n  padding: 0.5rem 0.5rem;\n}\n\n.p-datatable.p-datatable-sm .p-datatable-footer {\n  padding: 0.5rem 0.5rem;\n}\n\n.p-datatable.p-datatable-lg .p-datatable-header {\n  padding: 1.25rem 1.25rem;\n}\n\n.p-datatable.p-datatable-lg .p-datatable-thead > tr > th {\n  padding: 1.25rem 1.25rem;\n}\n\n.p-datatable.p-datatable-lg .p-datatable-tbody > tr > td {\n  padding: 1.25rem 1.25rem;\n}\n\n.p-datatable.p-datatable-lg .p-datatable-tfoot > tr > td {\n  padding: 1.25rem 1.25rem;\n}\n\n.p-datatable.p-datatable-lg .p-datatable-footer {\n  padding: 1.25rem 1.25rem;\n}\n\n.p-dataview .p-paginator-top {\n  border-width: 0 0 1px 0;\n  border-radius: 0;\n}\n\n.p-dataview .p-paginator-bottom {\n  border-width: 0 0 1px 0;\n  border-radius: 0;\n}\n\n.p-dataview .p-dataview-header {\n  background: #f8f9fa;\n  color: #495057;\n  border: 1px solid #e9ecef;\n  border-width: 1px 0 1px 0;\n  padding: 1rem 1rem;\n  font-weight: 600;\n}\n\n.p-dataview .p-dataview-content {\n  background: #ffffff;\n  color: #495057;\n  border: 0 none;\n  padding: 0;\n}\n\n.p-dataview.p-dataview-list .p-dataview-content > .p-grid > div {\n  border: solid #e9ecef;\n  border-width: 0 0 1px 0;\n}\n\n.p-dataview .p-dataview-footer {\n  background: #f8f9fa;\n  color: #495057;\n  border: 1px solid #e9ecef;\n  border-width: 0 0 1px 0;\n  padding: 1rem 1rem;\n  font-weight: 600;\n  border-bottom-left-radius: 3px;\n  border-bottom-right-radius: 3px;\n}\n\n.p-column-filter-row .p-column-filter-menu-button,\n.p-column-filter-row .p-column-filter-clear-button {\n  margin-left: 0.5rem;\n}\n\n.p-column-filter-menu-button {\n  width: 2rem;\n  height: 2rem;\n  color: #6c757d;\n  border: 0 none;\n  background: transparent;\n  border-radius: 50%;\n  transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;\n}\n\n.p-column-filter-menu-button:hover {\n  color: #495057;\n  border-color: transparent;\n  background: #e9ecef;\n}\n\n.p-column-filter-menu-button.p-column-filter-menu-button-open, .p-column-filter-menu-button.p-column-filter-menu-button-open:hover {\n  background: #e9ecef;\n  color: #495057;\n}\n\n.p-column-filter-menu-button.p-column-filter-menu-button-active, .p-column-filter-menu-button.p-column-filter-menu-button-active:hover {\n  background: #E3F2FD;\n  color: #495057;\n}\n\n.p-column-filter-menu-button:focus {\n  outline: 0 none;\n  outline-offset: 0;\n  box-shadow: 0 0 0 0.2rem #a6d5fa;\n}\n\n.p-column-filter-clear-button {\n  width: 2rem;\n  height: 2rem;\n  color: #6c757d;\n  border: 0 none;\n  background: transparent;\n  border-radius: 50%;\n  transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;\n}\n\n.p-column-filter-clear-button:hover {\n  color: #495057;\n  border-color: transparent;\n  background: #e9ecef;\n}\n\n.p-column-filter-clear-button:focus {\n  outline: 0 none;\n  outline-offset: 0;\n  box-shadow: 0 0 0 0.2rem #a6d5fa;\n}\n\n.p-column-filter-overlay {\n  background: #ffffff;\n  color: #495057;\n  border: 0 none;\n  border-radius: 3px;\n  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);\n  min-width: 12.5rem;\n}\n\n.p-column-filter-overlay .p-column-filter-row-items {\n  padding: 0.5rem 0;\n}\n\n.p-column-filter-overlay .p-column-filter-row-items .p-column-filter-row-item {\n  margin: 0;\n  padding: 0.5rem 1rem;\n  border: 0 none;\n  color: #495057;\n  background: transparent;\n  transition: box-shadow 0.2s;\n  border-radius: 0;\n}\n\n.p-column-filter-overlay .p-column-filter-row-items .p-column-filter-row-item.p-highlight {\n  color: #495057;\n  background: #E3F2FD;\n}\n\n.p-column-filter-overlay .p-column-filter-row-items .p-column-filter-row-item:not(.p-highlight):not(.p-disabled):hover {\n  color: #495057;\n  background: #e9ecef;\n}\n\n.p-column-filter-overlay .p-column-filter-row-items .p-column-filter-row-item:focus {\n  outline: 0 none;\n  outline-offset: 0;\n  box-shadow: inset 0 0 0 0.15rem #a6d5fa;\n}\n\n.p-column-filter-overlay .p-column-filter-row-items .p-column-filter-separator {\n  border-top: 1px solid #dee2e6;\n  margin: 0.25rem 0;\n}\n\n.p-column-filter-overlay-menu .p-column-filter-operator {\n  padding: 0.5rem 1rem;\n  border-bottom: 0 none;\n  color: #495057;\n  background: #f8f9fa;\n  margin: 0;\n  border-top-right-radius: 3px;\n  border-top-left-radius: 3px;\n}\n\n.p-column-filter-overlay-menu .p-column-filter-constraint {\n  padding: 1rem;\n  border-bottom: 1px solid #dee2e6;\n}\n\n.p-column-filter-overlay-menu .p-column-filter-constraint .p-column-filter-matchmode-dropdown {\n  margin-bottom: 0.5rem;\n}\n\n.p-column-filter-overlay-menu .p-column-filter-constraint .p-column-filter-remove-button {\n  margin-top: 0.5rem;\n}\n\n.p-column-filter-overlay-menu .p-column-filter-constraint:last-child {\n  border-bottom: 0 none;\n}\n\n.p-column-filter-overlay-menu .p-column-filter-add-rule {\n  padding: 0.5rem 1rem;\n}\n\n.p-column-filter-overlay-menu .p-column-filter-buttonbar {\n  padding: 1rem;\n}\n\n.fc {\n  /* FullCalendar 4 */\n  /* FullCalendar 5 */\n}\n\n.fc.fc-unthemed .fc-view-container th {\n  background: #f8f9fa;\n  border: 1px solid #dee2e6;\n  color: #495057;\n}\n\n.fc.fc-unthemed .fc-view-container td.fc-widget-content {\n  border: 1px solid #dee2e6;\n  color: #495057;\n}\n\n.fc.fc-unthemed .fc-view-container td.fc-head-container {\n  border: 1px solid #dee2e6;\n}\n\n.fc.fc-unthemed .fc-view-container .fc-view {\n  background: #ffffff;\n}\n\n.fc.fc-unthemed .fc-view-container .fc-row {\n  border-right: 1px solid #dee2e6;\n}\n\n.fc.fc-unthemed .fc-view-container .fc-event {\n  background: #0d89ec;\n  border: 1px solid #0d89ec;\n  color: #ffffff;\n}\n\n.fc.fc-unthemed .fc-view-container .fc-divider {\n  background: #f8f9fa;\n  border: 1px solid #dee2e6;\n}\n\n.fc.fc-unthemed .fc-toolbar .fc-button {\n  color: #ffffff;\n  background: #2196F3;\n  border: 1px solid #2196F3;\n  font-size: 1rem;\n  transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;\n  border-radius: 3px;\n  display: flex;\n  align-items: center;\n}\n\n.fc.fc-unthemed .fc-toolbar .fc-button:enabled:hover {\n  background: #0d89ec;\n  color: #ffffff;\n  border-color: #0d89ec;\n}\n\n.fc.fc-unthemed .fc-toolbar .fc-button:enabled:active {\n  background: #0b7ad1;\n  color: #ffffff;\n  border-color: #0b7ad1;\n}\n\n.fc.fc-unthemed .fc-toolbar .fc-button:enabled:active:focus {\n  outline: 0 none;\n  outline-offset: 0;\n  box-shadow: 0 0 0 0.2rem #a6d5fa;\n}\n\n.fc.fc-unthemed .fc-toolbar .fc-button .fc-icon-chevron-left {\n  font-family: \"PrimeIcons\" !important;\n  text-indent: 0;\n  font-size: 1rem;\n}\n\n.fc.fc-unthemed .fc-toolbar .fc-button .fc-icon-chevron-left:before {\n  content: \"\\e900\";\n}\n\n.fc.fc-unthemed .fc-toolbar .fc-button .fc-icon-chevron-right {\n  font-family: \"PrimeIcons\" !important;\n  text-indent: 0;\n  font-size: 1rem;\n}\n\n.fc.fc-unthemed .fc-toolbar .fc-button .fc-icon-chevron-right:before {\n  content: \"\\e901\";\n}\n\n.fc.fc-unthemed .fc-toolbar .fc-button:focus {\n  outline: 0 none;\n  outline-offset: 0;\n  box-shadow: 0 0 0 0.2rem #a6d5fa;\n}\n\n.fc.fc-unthemed .fc-toolbar .fc-button.fc-dayGridMonth-button, .fc.fc-unthemed .fc-toolbar .fc-button.fc-timeGridWeek-button, .fc.fc-unthemed .fc-toolbar .fc-button.fc-timeGridDay-button {\n  background: #ffffff;\n  border: 1px solid #ced4da;\n  color: #495057;\n  transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;\n}\n\n.fc.fc-unthemed .fc-toolbar .fc-button.fc-dayGridMonth-button:hover, .fc.fc-unthemed .fc-toolbar .fc-button.fc-timeGridWeek-button:hover, .fc.fc-unthemed .fc-toolbar .fc-button.fc-timeGridDay-button:hover {\n  background: #e9ecef;\n  border-color: #ced4da;\n  color: #495057;\n}\n\n.fc.fc-unthemed .fc-toolbar .fc-button.fc-dayGridMonth-button.fc-button-active, .fc.fc-unthemed .fc-toolbar .fc-button.fc-timeGridWeek-button.fc-button-active, .fc.fc-unthemed .fc-toolbar .fc-button.fc-timeGridDay-button.fc-button-active {\n  background: #2196F3;\n  border-color: #2196F3;\n  color: #ffffff;\n}\n\n.fc.fc-unthemed .fc-toolbar .fc-button.fc-dayGridMonth-button.fc-button-active:hover, .fc.fc-unthemed .fc-toolbar .fc-button.fc-timeGridWeek-button.fc-button-active:hover, .fc.fc-unthemed .fc-toolbar .fc-button.fc-timeGridDay-button.fc-button-active:hover {\n  background: #0d89ec;\n  border-color: #0d89ec;\n  color: #ffffff;\n}\n\n.fc.fc-unthemed .fc-toolbar .fc-button.fc-dayGridMonth-button:focus, .fc.fc-unthemed .fc-toolbar .fc-button.fc-timeGridWeek-button:focus, .fc.fc-unthemed .fc-toolbar .fc-button.fc-timeGridDay-button:focus {\n  outline: 0 none;\n  outline-offset: 0;\n  box-shadow: 0 0 0 0.2rem #a6d5fa;\n  z-index: 1;\n}\n\n.fc.fc-unthemed .fc-toolbar .fc-button-group .fc-button {\n  border-radius: 0;\n}\n\n.fc.fc-unthemed .fc-toolbar .fc-button-group .fc-button:first-child {\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n\n.fc.fc-unthemed .fc-toolbar .fc-button-group .fc-button:last-child {\n  border-top-right-radius: 3px;\n  border-bottom-right-radius: 3px;\n}\n\n.fc.fc-theme-standard .fc-view-harness .fc-scrollgrid {\n  border-color: #dee2e6;\n}\n\n.fc.fc-theme-standard .fc-view-harness th {\n  background: #f8f9fa;\n  border-color: #dee2e6;\n  color: #495057;\n}\n\n.fc.fc-theme-standard .fc-view-harness td {\n  color: #495057;\n  border-color: #dee2e6;\n}\n\n.fc.fc-theme-standard .fc-view-harness .fc-view {\n  background: #ffffff;\n}\n\n.fc.fc-theme-standard .fc-view-harness .fc-popover {\n  background: none;\n  border: 0 none;\n}\n\n.fc.fc-theme-standard .fc-view-harness .fc-popover .fc-popover-header {\n  border: 1px solid #dee2e6;\n  padding: 1rem;\n  background: #f8f9fa;\n  color: #495057;\n}\n\n.fc.fc-theme-standard .fc-view-harness .fc-popover .fc-popover-header .fc-popover-close {\n  opacity: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  font-family: \"PrimeIcons\" !important;\n  font-size: 1rem;\n  width: 2rem;\n  height: 2rem;\n  color: #6c757d;\n  border: 0 none;\n  background: transparent;\n  border-radius: 50%;\n  transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;\n}\n\n.fc.fc-theme-standard .fc-view-harness .fc-popover .fc-popover-header .fc-popover-close:before {\n  content: \"\\e90b\";\n}\n\n.fc.fc-theme-standard .fc-view-harness .fc-popover .fc-popover-header .fc-popover-close:hover {\n  color: #495057;\n  border-color: transparent;\n  background: #e9ecef;\n}\n\n.fc.fc-theme-standard .fc-view-harness .fc-popover .fc-popover-header .fc-popover-close:focus {\n  outline: 0 none;\n  outline-offset: 0;\n  box-shadow: 0 0 0 0.2rem #a6d5fa;\n}\n\n.fc.fc-theme-standard .fc-view-harness .fc-popover .fc-popover-body {\n  padding: 1rem;\n  border: 1px solid #dee2e6;\n  background: #ffffff;\n  color: #495057;\n  border-top: 0 none;\n}\n\n.fc.fc-theme-standard .fc-view-harness .fc-event.fc-daygrid-block-event {\n  color: #ffffff;\n  background: #0d89ec;\n  border-color: #0d89ec;\n}\n\n.fc.fc-theme-standard .fc-view-harness .fc-event.fc-daygrid-block-event .fc-event-main {\n  color: #ffffff;\n}\n\n.fc.fc-theme-standard .fc-view-harness .fc-event.fc-daygrid-dot-event .fc-daygrid-event-dot {\n  background: #0d89ec;\n  border-color: #0d89ec;\n}\n\n.fc.fc-theme-standard .fc-view-harness .fc-event.fc-daygrid-dot-event:hover {\n  background: #e9ecef;\n  color: #495057;\n}\n\n.fc.fc-theme-standard .fc-view-harness .fc-cell-shaded {\n  background: #f8f9fa;\n}\n\n.fc.fc-theme-standard .fc-toolbar .fc-button {\n  color: #ffffff;\n  background: #2196F3;\n  border: 1px solid #2196F3;\n  font-size: 1rem;\n  transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;\n  border-radius: 3px;\n}\n\n.fc.fc-theme-standard .fc-toolbar .fc-button:enabled:hover {\n  background: #0d89ec;\n  color: #ffffff;\n  border-color: #0d89ec;\n}\n\n.fc.fc-theme-standard .fc-toolbar .fc-button:enabled:active {\n  background: #0b7ad1;\n  color: #ffffff;\n  border-color: #0b7ad1;\n}\n\n.fc.fc-theme-standard .fc-toolbar .fc-button:enabled:active:focus {\n  outline: 0 none;\n  outline-offset: 0;\n  box-shadow: 0 0 0 0.2rem #a6d5fa;\n}\n\n.fc.fc-theme-standard .fc-toolbar .fc-button:disabled {\n  opacity: 0.6;\n  color: #ffffff;\n  background: #2196F3;\n  border: 1px solid #2196F3;\n}\n\n.fc.fc-theme-standard .fc-toolbar .fc-button .fc-icon-chevron-left {\n  font-family: \"PrimeIcons\" !important;\n  text-indent: 0;\n  font-size: 1rem;\n}\n\n.fc.fc-theme-standard .fc-toolbar .fc-button .fc-icon-chevron-left:before {\n  content: \"\\e900\";\n}\n\n.fc.fc-theme-standard .fc-toolbar .fc-button .fc-icon-chevron-right {\n  font-family: \"PrimeIcons\" !important;\n  text-indent: 0;\n  font-size: 1rem;\n}\n\n.fc.fc-theme-standard .fc-toolbar .fc-button .fc-icon-chevron-right:before {\n  content: \"\\e901\";\n}\n\n.fc.fc-theme-standard .fc-toolbar .fc-button:focus {\n  outline: 0 none;\n  outline-offset: 0;\n  box-shadow: 0 0 0 0.2rem #a6d5fa;\n}\n\n.fc.fc-theme-standard .fc-toolbar .fc-button.fc-dayGridMonth-button, .fc.fc-theme-standard .fc-toolbar .fc-button.fc-timeGridWeek-button, .fc.fc-theme-standard .fc-toolbar .fc-button.fc-timeGridDay-button {\n  background: #ffffff;\n  border: 1px solid #ced4da;\n  color: #495057;\n  transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;\n}\n\n.fc.fc-theme-standard .fc-toolbar .fc-button.fc-dayGridMonth-button:hover, .fc.fc-theme-standard .fc-toolbar .fc-button.fc-timeGridWeek-button:hover, .fc.fc-theme-standard .fc-toolbar .fc-button.fc-timeGridDay-button:hover {\n  background: #e9ecef;\n  border-color: #ced4da;\n  color: #495057;\n}\n\n.fc.fc-theme-standard .fc-toolbar .fc-button.fc-dayGridMonth-button.fc-button-active, .fc.fc-theme-standard .fc-toolbar .fc-button.fc-timeGridWeek-button.fc-button-active, .fc.fc-theme-standard .fc-toolbar .fc-button.fc-timeGridDay-button.fc-button-active {\n  background: #2196F3;\n  border-color: #2196F3;\n  color: #ffffff;\n}\n\n.fc.fc-theme-standard .fc-toolbar .fc-button.fc-dayGridMonth-button.fc-button-active:hover, .fc.fc-theme-standard .fc-toolbar .fc-button.fc-timeGridWeek-button.fc-button-active:hover, .fc.fc-theme-standard .fc-toolbar .fc-button.fc-timeGridDay-button.fc-button-active:hover {\n  background: #0d89ec;\n  border-color: #0d89ec;\n  color: #ffffff;\n}\n\n.fc.fc-theme-standard .fc-toolbar .fc-button.fc-dayGridMonth-button:not(:disabled):focus, .fc.fc-theme-standard .fc-toolbar .fc-button.fc-timeGridWeek-button:not(:disabled):focus, .fc.fc-theme-standard .fc-toolbar .fc-button.fc-timeGridDay-button:not(:disabled):focus {\n  outline: 0 none;\n  outline-offset: 0;\n  box-shadow: 0 0 0 0.2rem #a6d5fa;\n  z-index: 1;\n}\n\n.fc.fc-theme-standard .fc-toolbar .fc-button-group .fc-button {\n  border-radius: 0;\n}\n\n.fc.fc-theme-standard .fc-toolbar .fc-button-group .fc-button:first-child {\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n\n.fc.fc-theme-standard .fc-toolbar .fc-button-group .fc-button:last-child {\n  border-top-right-radius: 3px;\n  border-bottom-right-radius: 3px;\n}\n\n.fc.fc-theme-standard .fc-highlight {\n  color: #495057;\n  background: #E3F2FD;\n}\n\n.p-orderlist .p-orderlist-controls {\n  padding: 1rem;\n}\n\n.p-orderlist .p-orderlist-controls .p-button {\n  margin-bottom: 0.5rem;\n}\n\n.p-orderlist .p-orderlist-header {\n  background: #f8f9fa;\n  color: #495057;\n  border: 1px solid #dee2e6;\n  padding: 1rem;\n  font-weight: 600;\n  border-bottom: 0 none;\n  border-top-right-radius: 3px;\n  border-top-left-radius: 3px;\n}\n\n.p-orderlist .p-orderlist-list {\n  border: 1px solid #dee2e6;\n  background: #ffffff;\n  color: #495057;\n  padding: 0.5rem 0;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n\n.p-orderlist .p-orderlist-list .p-orderlist-item {\n  padding: 0.5rem 1rem;\n  margin: 0;\n  border: 0 none;\n  color: #495057;\n  background: transparent;\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n\n.p-orderlist .p-orderlist-list .p-orderlist-item:not(.p-highlight):hover {\n  background: #e9ecef;\n  color: #495057;\n}\n\n.p-orderlist .p-orderlist-list .p-orderlist-item:focus {\n  outline: 0 none;\n  outline-offset: 0;\n  box-shadow: inset 0 0 0 0.15rem #a6d5fa;\n}\n\n.p-orderlist .p-orderlist-list .p-orderlist-item.p-highlight {\n  color: #495057;\n  background: #E3F2FD;\n}\n\n.p-orderlist.p-orderlist-striped .p-orderlist-list .p-orderlist-item:nth-child(even) {\n  background: #e9ecef;\n}\n\n.p-orderlist.p-orderlist-striped .p-orderlist-list .p-orderlist-item:nth-child(even):hover {\n  background: #e9ecef;\n}\n\n.p-organizationchart .p-organizationchart-node-content.p-organizationchart-selectable-node:not(.p-highlight):hover {\n  background: #e9ecef;\n  color: #495057;\n}\n\n.p-organizationchart .p-organizationchart-node-content.p-highlight {\n  background: #E3F2FD;\n  color: #495057;\n}\n\n.p-organizationchart .p-organizationchart-node-content.p-highlight .p-node-toggler i {\n  color: #6cbbf5;\n}\n\n.p-organizationchart .p-organizationchart-line-down {\n  background: #dee2e6;\n}\n\n.p-organizationchart .p-organizationchart-line-left {\n  border-right: 1px solid #dee2e6;\n  border-color: #dee2e6;\n}\n\n.p-organizationchart .p-organizationchart-line-top {\n  border-top: 1px solid #dee2e6;\n  border-color: #dee2e6;\n}\n\n.p-organizationchart .p-organizationchart-node-content {\n  border: 1px solid #dee2e6;\n  background: #ffffff;\n  color: #495057;\n  padding: 1rem;\n}\n\n.p-organizationchart .p-organizationchart-node-content .p-node-toggler {\n  background: inherit;\n  color: inherit;\n  border-radius: 50%;\n}\n\n.p-organizationchart .p-organizationchart-node-content .p-node-toggler:focus {\n  outline: 0 none;\n  outline-offset: 0;\n  box-shadow: 0 0 0 0.2rem #a6d5fa;\n}\n\n.p-paginator {\n  background: #ffffff;\n  color: #6c757d;\n  border: solid #e9ecef;\n  border-width: 0;\n  padding: 0.5rem 1rem;\n  border-radius: 3px;\n}\n\n.p-paginator .p-paginator-first,\n.p-paginator .p-paginator-prev,\n.p-paginator .p-paginator-next,\n.p-paginator .p-paginator-last {\n  background-color: transparent;\n  border: 0 none;\n  color: #6c757d;\n  min-width: 2.357rem;\n  height: 2.357rem;\n  margin: 0.143rem;\n  transition: box-shadow 0.2s;\n  border-radius: 3px;\n}\n\n.p-paginator .p-paginator-first:not(.p-disabled):not(.p-highlight):hover,\n.p-paginator .p-paginator-prev:not(.p-disabled):not(.p-highlight):hover,\n.p-paginator .p-paginator-next:not(.p-disabled):not(.p-highlight):hover,\n.p-paginator .p-paginator-last:not(.p-disabled):not(.p-highlight):hover {\n  background: #e9ecef;\n  border-color: transparent;\n  color: #495057;\n}\n\n.p-paginator .p-paginator-first {\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n\n.p-paginator .p-paginator-last {\n  border-top-right-radius: 3px;\n  border-bottom-right-radius: 3px;\n}\n\n.p-paginator .p-dropdown {\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n  height: 2.357rem;\n}\n\n.p-paginator .p-dropdown .p-dropdown-label {\n  padding-right: 0;\n}\n\n.p-paginator .p-paginator-page-input {\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n}\n\n.p-paginator .p-paginator-page-input .p-inputtext {\n  max-width: 2.357rem;\n}\n\n.p-paginator .p-paginator-current {\n  background-color: transparent;\n  border: 0 none;\n  color: #6c757d;\n  min-width: 2.357rem;\n  height: 2.357rem;\n  margin: 0.143rem;\n  padding: 0 0.5rem;\n}\n\n.p-paginator .p-paginator-pages .p-paginator-page {\n  background-color: transparent;\n  border: 0 none;\n  color: #6c757d;\n  min-width: 2.357rem;\n  height: 2.357rem;\n  margin: 0.143rem;\n  transition: box-shadow 0.2s;\n  border-radius: 3px;\n}\n\n.p-paginator .p-paginator-pages .p-paginator-page.p-highlight {\n  background: #E3F2FD;\n  border-color: #E3F2FD;\n  color: #495057;\n}\n\n.p-paginator .p-paginator-pages .p-paginator-page:not(.p-highlight):hover {\n  background: #e9ecef;\n  border-color: transparent;\n  color: #495057;\n}\n\n.p-picklist .p-picklist-buttons {\n  padding: 1rem;\n}\n\n.p-picklist .p-picklist-buttons .p-button {\n  margin-bottom: 0.5rem;\n}\n\n.p-picklist .p-picklist-header {\n  background: #f8f9fa;\n  color: #495057;\n  border: 1px solid #dee2e6;\n  padding: 1rem;\n  font-weight: 600;\n  border-bottom: 0 none;\n  border-top-right-radius: 3px;\n  border-top-left-radius: 3px;\n}\n\n.p-picklist .p-picklist-list {\n  border: 1px solid #dee2e6;\n  background: #ffffff;\n  color: #495057;\n  padding: 0.5rem 0;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n\n.p-picklist .p-picklist-list .p-picklist-item {\n  padding: 0.5rem 1rem;\n  margin: 0;\n  border: 0 none;\n  color: #495057;\n  background: transparent;\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n\n.p-picklist .p-picklist-list .p-picklist-item:not(.p-highlight):hover {\n  background: #e9ecef;\n  color: #495057;\n}\n\n.p-picklist .p-picklist-list .p-picklist-item:focus {\n  outline: 0 none;\n  outline-offset: 0;\n  box-shadow: inset 0 0 0 0.15rem #a6d5fa;\n}\n\n.p-picklist .p-picklist-list .p-picklist-item.p-highlight {\n  color: #495057;\n  background: #E3F2FD;\n}\n\n.p-picklist.p-picklist-striped .p-picklist-list .p-picklist-item:nth-child(even) {\n  background: #e9ecef;\n}\n\n.p-picklist.p-picklist-striped .p-picklist-list .p-picklist-item:nth-child(even):hover {\n  background: #e9ecef;\n}\n\n.p-timeline .p-timeline-event-marker {\n  border: 2px solid #2196F3;\n  border-radius: 50%;\n  width: 1rem;\n  height: 1rem;\n  background-color: #ffffff;\n}\n\n.p-timeline .p-timeline-event-connector {\n  background-color: #dee2e6;\n}\n\n.p-timeline.p-timeline-vertical .p-timeline-event-opposite,\n.p-timeline.p-timeline-vertical .p-timeline-event-content {\n  padding: 0 1rem;\n}\n\n.p-timeline.p-timeline-vertical .p-timeline-event-connector {\n  width: 2px;\n}\n\n.p-timeline.p-timeline-horizontal .p-timeline-event-opposite,\n.p-timeline.p-timeline-horizontal .p-timeline-event-content {\n  padding: 1rem 0;\n}\n\n.p-timeline.p-timeline-horizontal .p-timeline-event-connector {\n  height: 2px;\n}\n\n.p-tree {\n  border: 1px solid #dee2e6;\n  background: #ffffff;\n  color: #495057;\n  padding: 1rem;\n  border-radius: 3px;\n}\n\n.p-tree .p-tree-container .p-treenode {\n  padding: 0.143rem;\n}\n\n.p-tree .p-tree-container .p-treenode .p-treenode-content {\n  border-radius: 3px;\n  transition: box-shadow 0.2s;\n  padding: 0;\n}\n\n.p-tree .p-tree-container .p-treenode .p-treenode-content .p-tree-toggler {\n  margin-right: 0.5rem;\n  width: 2rem;\n  height: 2rem;\n  color: #6c757d;\n  border: 0 none;\n  background: transparent;\n  border-radius: 50%;\n  transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;\n}\n\n.p-tree .p-tree-container .p-treenode .p-treenode-content .p-tree-toggler:enabled:hover {\n  color: #495057;\n  border-color: transparent;\n  background: #e9ecef;\n}\n\n.p-tree .p-tree-container .p-treenode .p-treenode-content .p-tree-toggler:focus {\n  outline: 0 none;\n  outline-offset: 0;\n  box-shadow: 0 0 0 0.2rem #a6d5fa;\n}\n\n.p-tree .p-tree-container .p-treenode .p-treenode-content .p-treenode-icon {\n  margin-right: 0.5rem;\n  color: #6c757d;\n}\n\n.p-tree .p-tree-container .p-treenode .p-treenode-content .p-checkbox {\n  margin-right: 0.5rem;\n}\n\n.p-tree .p-tree-container .p-treenode .p-treenode-content .p-checkbox .p-indeterminate .p-checkbox-icon {\n  color: #495057;\n}\n\n.p-tree .p-tree-container .p-treenode .p-treenode-content:focus {\n  outline: 0 none;\n  outline-offset: 0;\n  box-shadow: inset 0 0 0 0.15rem #a6d5fa;\n}\n\n.p-tree .p-tree-container .p-treenode .p-treenode-content.p-highlight {\n  background: #E3F2FD;\n  color: #495057;\n}\n\n.p-tree .p-tree-container .p-treenode .p-treenode-content.p-highlight .p-tree-toggler,\n.p-tree .p-tree-container .p-treenode .p-treenode-content.p-highlight .p-treenode-icon {\n  color: #495057;\n}\n\n.p-tree .p-tree-container .p-treenode .p-treenode-content.p-highlight .p-tree-toggler:hover,\n.p-tree .p-tree-container .p-treenode .p-treenode-content.p-highlight .p-treenode-icon:hover {\n  color: #495057;\n}\n\n.p-tree .p-tree-container .p-treenode .p-treenode-content.p-treenode-selectable:not(.p-highlight):hover {\n  background: #e9ecef;\n  color: #495057;\n}\n\n.p-tree .p-tree-filter-container {\n  margin-bottom: 0.5rem;\n}\n\n.p-tree .p-tree-filter-container .p-tree-filter {\n  width: 100%;\n  padding-right: 1.5rem;\n}\n\n.p-tree .p-tree-filter-container .p-tree-filter-icon {\n  right: 0.5rem;\n  color: #6c757d;\n}\n\n.p-tree .p-treenode-children {\n  padding: 0 0 0 1rem;\n}\n\n.p-tree .p-tree-loading-icon {\n  font-size: 2rem;\n}\n\n.p-treetable .p-paginator-top {\n  border-width: 0 0 1px 0;\n  border-radius: 0;\n}\n\n.p-treetable .p-paginator-bottom {\n  border-width: 0 0 1px 0;\n  border-radius: 0;\n}\n\n.p-treetable .p-treetable-header {\n  background: #f8f9fa;\n  color: #495057;\n  border: 1px solid #e9ecef;\n  border-width: 1px 0 1px 0;\n  padding: 1rem 1rem;\n  font-weight: 600;\n}\n\n.p-treetable .p-treetable-footer {\n  background: #f8f9fa;\n  color: #495057;\n  border: 1px solid #e9ecef;\n  border-width: 0 0 1px 0;\n  padding: 1rem 1rem;\n  font-weight: 600;\n}\n\n.p-treetable .p-treetable-thead > tr > th {\n  text-align: left;\n  padding: 1rem 1rem;\n  border: 1px solid #e9ecef;\n  border-width: 0 0 1px 0;\n  font-weight: 600;\n  color: #495057;\n  background: #f8f9fa;\n  transition: box-shadow 0.2s;\n}\n\n.p-treetable .p-treetable-tfoot > tr > td {\n  text-align: left;\n  padding: 1rem 1rem;\n  border: 1px solid #e9ecef;\n  border-width: 0 0 1px 0;\n  font-weight: 600;\n  color: #495057;\n  background: #f8f9fa;\n}\n\n.p-treetable .p-sortable-column {\n  outline-color: #a6d5fa;\n}\n\n.p-treetable .p-sortable-column .p-sortable-column-icon {\n  color: #6c757d;\n  margin-left: 0.5rem;\n}\n\n.p-treetable .p-sortable-column .p-sortable-column-badge {\n  border-radius: 50%;\n  height: 1.143rem;\n  min-width: 1.143rem;\n  line-height: 1.143rem;\n  color: #495057;\n  background: #E3F2FD;\n  margin-left: 0.5rem;\n}\n\n.p-treetable .p-sortable-column:not(.p-highlight):hover {\n  background: #e9ecef;\n  color: #495057;\n}\n\n.p-treetable .p-sortable-column:not(.p-highlight):hover .p-sortable-column-icon {\n  color: #6c757d;\n}\n\n.p-treetable .p-sortable-column.p-highlight {\n  background: #f8f9fa;\n  color: #2196F3;\n}\n\n.p-treetable .p-sortable-column.p-highlight .p-sortable-column-icon {\n  color: #2196F3;\n}\n\n.p-treetable .p-treetable-tbody > tr {\n  background: #ffffff;\n  color: #495057;\n  transition: box-shadow 0.2s;\n}\n\n.p-treetable .p-treetable-tbody > tr > td {\n  text-align: left;\n  border: 1px solid #e9ecef;\n  border-width: 0 0 1px 0;\n  padding: 1rem 1rem;\n}\n\n.p-treetable .p-treetable-tbody > tr > td .p-treetable-toggler {\n  width: 2rem;\n  height: 2rem;\n  color: #6c757d;\n  border: 0 none;\n  background: transparent;\n  border-radius: 50%;\n  transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;\n  margin-right: 0.5rem;\n}\n\n.p-treetable .p-treetable-tbody > tr > td .p-treetable-toggler:enabled:hover {\n  color: #495057;\n  border-color: transparent;\n  background: #e9ecef;\n}\n\n.p-treetable .p-treetable-tbody > tr > td .p-treetable-toggler:focus {\n  outline: 0 none;\n  outline-offset: 0;\n  box-shadow: 0 0 0 0.2rem #a6d5fa;\n}\n\n.p-treetable .p-treetable-tbody > tr > td .p-treetable-toggler + .p-checkbox {\n  margin-right: 0.5rem;\n}\n\n.p-treetable .p-treetable-tbody > tr > td .p-treetable-toggler + .p-checkbox .p-indeterminate .p-checkbox-icon {\n  color: #495057;\n}\n\n.p-treetable .p-treetable-tbody > tr:focus {\n  outline: 0.15rem solid #a6d5fa;\n  outline-offset: -0.15rem;\n}\n\n.p-treetable .p-treetable-tbody > tr.p-highlight {\n  background: #E3F2FD;\n  color: #495057;\n}\n\n.p-treetable .p-treetable-tbody > tr.p-highlight .p-treetable-toggler {\n  color: #495057;\n}\n\n.p-treetable .p-treetable-tbody > tr.p-highlight .p-treetable-toggler:hover {\n  color: #495057;\n}\n\n.p-treetable.p-treetable-hoverable-rows .p-treetable-tbody > tr:not(.p-highlight):hover {\n  background: #e9ecef;\n  color: #495057;\n}\n\n.p-treetable.p-treetable-hoverable-rows .p-treetable-tbody > tr:not(.p-highlight):hover .p-treetable-toggler {\n  color: #495057;\n}\n\n.p-treetable .p-column-resizer-helper {\n  background: #2196F3;\n}\n\n.p-treetable .p-treetable-scrollable-header,\n.p-treetable .p-treetable-scrollable-footer {\n  background: #f8f9fa;\n}\n\n.p-treetable .p-treetable-loading-icon {\n  font-size: 2rem;\n}\n\n.p-treetable.p-treetable-gridlines .p-datatable-header {\n  border-width: 1px 1px 0 1px;\n}\n\n.p-treetable.p-treetable-gridlines .p-treetable-footer {\n  border-width: 0 1px 1px 1px;\n}\n\n.p-treetable.p-treetable-gridlines .p-treetable-top {\n  border-width: 0 1px 0 1px;\n}\n\n.p-treetable.p-treetable-gridlines .p-treetable-bottom {\n  border-width: 0 1px 1px 1px;\n}\n\n.p-treetable.p-treetable-gridlines .p-treetable-thead > tr > th {\n  border-width: 1px;\n}\n\n.p-treetable.p-treetable-gridlines .p-treetable-tbody > tr > td {\n  border-width: 1px;\n}\n\n.p-treetable.p-treetable-gridlines .p-treetable-tfoot > tr > td {\n  border-width: 1px;\n}\n\n.p-treetable.p-treetable-sm .p-treetable-header {\n  padding: 0.875rem 0.875rem;\n}\n\n.p-treetable.p-treetable-sm .p-treetable-thead > tr > th {\n  padding: 0.5rem 0.5rem;\n}\n\n.p-treetable.p-treetable-sm .p-treetable-tbody > tr > td {\n  padding: 0.5rem 0.5rem;\n}\n\n.p-treetable.p-treetable-sm .p-treetable-tfoot > tr > td {\n  padding: 0.5rem 0.5rem;\n}\n\n.p-treetable.p-treetable-sm .p-treetable-footer {\n  padding: 0.5rem 0.5rem;\n}\n\n.p-treetable.p-treetable-lg .p-treetable-header {\n  padding: 1.25rem 1.25rem;\n}\n\n.p-treetable.p-treetable-lg .p-treetable-thead > tr > th {\n  padding: 1.25rem 1.25rem;\n}\n\n.p-treetable.p-treetable-lg .p-treetable-tbody > tr > td {\n  padding: 1.25rem 1.25rem;\n}\n\n.p-treetable.p-treetable-lg .p-treetable-tfoot > tr > td {\n  padding: 1.25rem 1.25rem;\n}\n\n.p-treetable.p-treetable-lg .p-treetable-footer {\n  padding: 1.25rem 1.25rem;\n}\n\n.p-accordion .p-accordion-header .p-accordion-header-link {\n  padding: 1rem;\n  border: 1px solid #dee2e6;\n  color: #495057;\n  background: #f8f9fa;\n  font-weight: 600;\n  border-radius: 3px;\n  transition: box-shadow 0.2s;\n}\n\n.p-accordion .p-accordion-header .p-accordion-header-link .p-accordion-toggle-icon {\n  margin-right: 0.5rem;\n}\n\n.p-accordion .p-accordion-header:not(.p-disabled) .p-accordion-header-link:focus {\n  outline: 0 none;\n  outline-offset: 0;\n  box-shadow: 0 0 0 0.2rem #a6d5fa;\n}\n\n.p-accordion .p-accordion-header:not(.p-highlight):not(.p-disabled):hover .p-accordion-header-link {\n  background: #e9ecef;\n  border-color: #dee2e6;\n  color: #495057;\n}\n\n.p-accordion .p-accordion-header:not(.p-disabled).p-highlight .p-accordion-header-link {\n  background: #f8f9fa;\n  border-color: #dee2e6;\n  color: #495057;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.p-accordion .p-accordion-header:not(.p-disabled).p-highlight:hover .p-accordion-header-link {\n  border-color: #dee2e6;\n  background: #e9ecef;\n  color: #495057;\n}\n\n.p-accordion .p-accordion-content {\n  padding: 1rem;\n  border: 1px solid #dee2e6;\n  background: #ffffff;\n  color: #495057;\n  border-top: 0;\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n\n.p-accordion .p-accordion-tab {\n  margin-bottom: 0;\n}\n\n.p-accordion .p-accordion-tab .p-accordion-header .p-accordion-header-link {\n  border-radius: 0;\n}\n\n.p-accordion .p-accordion-tab .p-accordion-content {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.p-accordion .p-accordion-tab:not(:first-child) .p-accordion-header .p-accordion-header-link {\n  border-top: 0 none;\n}\n\n.p-accordion .p-accordion-tab:not(:first-child) .p-accordion-header:not(.p-highlight):not(.p-disabled):hover .p-accordion-header-link, .p-accordion .p-accordion-tab:not(:first-child) .p-accordion-header:not(.p-disabled).p-highlight:hover .p-accordion-header-link {\n  border-top: 0 none;\n}\n\n.p-accordion .p-accordion-tab:first-child .p-accordion-header .p-accordion-header-link {\n  border-top-right-radius: 3px;\n  border-top-left-radius: 3px;\n}\n\n.p-accordion .p-accordion-tab:last-child .p-accordion-header:not(.p-highlight) .p-accordion-header-link {\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n\n.p-accordion .p-accordion-tab:last-child .p-accordion-content {\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n\n.p-card {\n  background: #ffffff;\n  color: #495057;\n  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);\n  border-radius: 3px;\n}\n\n.p-card .p-card-body {\n  padding: 1rem;\n}\n\n.p-card .p-card-title {\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin-bottom: 0.5rem;\n}\n\n.p-card .p-card-subtitle {\n  font-weight: 400;\n  margin-bottom: 0.5rem;\n  color: #6c757d;\n}\n\n.p-card .p-card-content {\n  padding: 1rem 0;\n}\n\n.p-card .p-card-footer {\n  padding: 1rem 0 0 0;\n}\n\n.p-fieldset {\n  border: 1px solid #dee2e6;\n  background: #ffffff;\n  color: #495057;\n  border-radius: 3px;\n}\n\n.p-fieldset .p-fieldset-legend {\n  padding: 1rem;\n  border: 1px solid #dee2e6;\n  color: #495057;\n  background: #f8f9fa;\n  font-weight: 600;\n  border-radius: 3px;\n}\n\n.p-fieldset.p-fieldset-toggleable .p-fieldset-legend {\n  padding: 0;\n  transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;\n}\n\n.p-fieldset.p-fieldset-toggleable .p-fieldset-legend a {\n  padding: 1rem;\n  color: #495057;\n  border-radius: 3px;\n  transition: box-shadow 0.2s;\n}\n\n.p-fieldset.p-fieldset-toggleable .p-fieldset-legend a .p-fieldset-toggler {\n  margin-right: 0.5rem;\n}\n\n.p-fieldset.p-fieldset-toggleable .p-fieldset-legend a:focus {\n  outline: 0 none;\n  outline-offset: 0;\n  box-shadow: 0 0 0 0.2rem #a6d5fa;\n}\n\n.p-fieldset.p-fieldset-toggleable .p-fieldset-legend a:hover {\n  color: #495057;\n}\n\n.p-fieldset.p-fieldset-toggleable .p-fieldset-legend:hover {\n  background: #e9ecef;\n  border-color: #dee2e6;\n  color: #495057;\n}\n\n.p-fieldset .p-fieldset-content {\n  padding: 1rem;\n}\n\n.p-divider .p-divider-content {\n  background-color: #ffffff;\n}\n\n.p-divider.p-divider-horizontal {\n  margin: 1rem 0;\n  padding: 0 1rem;\n}\n\n.p-divider.p-divider-horizontal:before {\n  border-top: 1px #dee2e6;\n}\n\n.p-divider.p-divider-horizontal .p-divider-content {\n  padding: 0 0.5rem;\n}\n\n.p-divider.p-divider-vertical {\n  margin: 0 1rem;\n  padding: 1rem 0;\n}\n\n.p-divider.p-divider-vertical:before {\n  border-left: 1px #dee2e6;\n}\n\n.p-divider.p-divider-vertical .p-divider-content {\n  padding: 0.5rem 0;\n}\n\n.p-panel .p-panel-header {\n  border: 1px solid #dee2e6;\n  padding: 1rem;\n  background: #f8f9fa;\n  color: #495057;\n  border-top-right-radius: 3px;\n  border-top-left-radius: 3px;\n}\n\n.p-panel .p-panel-header .p-panel-title {\n  font-weight: 600;\n}\n\n.p-panel .p-panel-header .p-panel-header-icon {\n  width: 2rem;\n  height: 2rem;\n  color: #6c757d;\n  border: 0 none;\n  background: transparent;\n  border-radius: 50%;\n  transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;\n}\n\n.p-panel .p-panel-header .p-panel-header-icon:enabled:hover {\n  color: #495057;\n  border-color: transparent;\n  background: #e9ecef;\n}\n\n.p-panel .p-panel-header .p-panel-header-icon:focus {\n  outline: 0 none;\n  outline-offset: 0;\n  box-shadow: 0 0 0 0.2rem #a6d5fa;\n}\n\n.p-panel.p-panel-toggleable .p-panel-header {\n  padding: 0.5rem 1rem;\n}\n\n.p-panel .p-panel-content {\n  padding: 1rem;\n  border: 1px solid #dee2e6;\n  background: #ffffff;\n  color: #495057;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n  border-top: 0 none;\n}\n\n.p-panel .p-panel-footer {\n  padding: 0.5rem 1rem;\n  border: 1px solid #dee2e6;\n  background: #ffffff;\n  color: #495057;\n  border-top: 0 none;\n}\n\n.p-scrollpanel .p-scrollpanel-bar {\n  background: #f8f9fa;\n  border: 0 none;\n}\n\n.p-splitter {\n  border: 1px solid #dee2e6;\n  background: #ffffff;\n  border-radius: 3px;\n  color: #495057;\n}\n\n.p-splitter .p-splitter-gutter {\n  transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;\n  background: #f8f9fa;\n}\n\n.p-splitter .p-splitter-gutter .p-splitter-gutter-handle {\n  background: #dee2e6;\n}\n\n.p-splitter .p-splitter-gutter-resizing {\n  background: #dee2e6;\n}\n\n.p-tabview .p-tabview-nav {\n  background: #ffffff;\n  border: 1px solid #dee2e6;\n  border-width: 0 0 2px 0;\n}\n\n.p-tabview .p-tabview-nav li {\n  margin-right: 0;\n}\n\n.p-tabview .p-tabview-nav li .p-tabview-nav-link {\n  border: solid #dee2e6;\n  border-width: 0 0 2px 0;\n  border-color: transparent transparent #dee2e6 transparent;\n  background: #ffffff;\n  color: #6c757d;\n  padding: 1rem;\n  font-weight: 600;\n  border-top-right-radius: 3px;\n  border-top-left-radius: 3px;\n  transition: box-shadow 0.2s;\n  margin: 0 0 -2px 0;\n}\n\n.p-tabview .p-tabview-nav li .p-tabview-nav-link:not(.p-disabled):focus {\n  outline: 0 none;\n  outline-offset: 0;\n  box-shadow: inset 0 0 0 0.2rem #a6d5fa;\n}\n\n.p-tabview .p-tabview-nav li:not(.p-highlight):not(.p-disabled):hover .p-tabview-nav-link {\n  background: #ffffff;\n  border-color: #6c757d;\n  color: #6c757d;\n}\n\n.p-tabview .p-tabview-nav li.p-highlight .p-tabview-nav-link {\n  background: #ffffff;\n  border-color: #2196F3;\n  color: #2196F3;\n}\n\n.p-tabview .p-tabview-nav-btn.p-link {\n  background: #ffffff;\n  color: #2196F3;\n  width: 2.357rem;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  border-radius: 0;\n}\n\n.p-tabview .p-tabview-nav-btn.p-link:focus {\n  outline: 0 none;\n  outline-offset: 0;\n  box-shadow: inset 0 0 0 0.2rem #a6d5fa;\n}\n\n.p-tabview .p-tabview-panels {\n  background: #ffffff;\n  padding: 1rem;\n  border: 0 none;\n  color: #495057;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n\n.p-toolbar {\n  background: #f8f9fa;\n  border: 1px solid #dee2e6;\n  padding: 1rem;\n  border-radius: 3px;\n}\n\n.p-toolbar .p-toolbar-separator {\n  margin: 0 0.5rem;\n}\n\n.p-confirm-popup {\n  background: #ffffff;\n  color: #495057;\n  border: 0 none;\n  border-radius: 3px;\n  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);\n}\n\n.p-confirm-popup .p-confirm-popup-content {\n  padding: 1rem;\n}\n\n.p-confirm-popup .p-confirm-popup-footer {\n  text-align: right;\n  padding: 0 1rem 1rem 1rem;\n}\n\n.p-confirm-popup .p-confirm-popup-footer button {\n  margin: 0 0.5rem 0 0;\n  width: auto;\n}\n\n.p-confirm-popup .p-confirm-popup-footer button:last-child {\n  margin: 0;\n}\n\n.p-confirm-popup:after {\n  border: solid transparent;\n  border-color: rgba(255, 255, 255, 0);\n  border-bottom-color: #ffffff;\n}\n\n.p-confirm-popup:before {\n  border: solid transparent;\n  border-color: rgba(255, 255, 255, 0);\n  border-bottom-color: #ffffff;\n}\n\n.p-confirm-popup.p-confirm-popup-flipped:after {\n  border-top-color: #ffffff;\n}\n\n.p-confirm-popup.p-confirm-popup-flipped:before {\n  border-top-color: #ffffff;\n}\n\n.p-confirm-popup .p-confirm-popup-icon {\n  font-size: 1.5rem;\n}\n\n.p-confirm-popup .p-confirm-popup-message {\n  margin-left: 1rem;\n}\n\n.p-dialog {\n  border-radius: 3px;\n  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);\n  border: 0 none;\n}\n\n.p-dialog .p-dialog-header {\n  border-bottom: 0 none;\n  background: #ffffff;\n  color: #495057;\n  padding: 1.5rem;\n  border-top-right-radius: 3px;\n  border-top-left-radius: 3px;\n}\n\n.p-dialog .p-dialog-header .p-dialog-title {\n  font-weight: 600;\n  font-size: 1.25rem;\n}\n\n.p-dialog .p-dialog-header .p-dialog-header-icon {\n  width: 2rem;\n  height: 2rem;\n  color: #6c757d;\n  border: 0 none;\n  background: transparent;\n  border-radius: 50%;\n  transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;\n  margin-right: 0.5rem;\n}\n\n.p-dialog .p-dialog-header .p-dialog-header-icon:enabled:hover {\n  color: #495057;\n  border-color: transparent;\n  background: #e9ecef;\n}\n\n.p-dialog .p-dialog-header .p-dialog-header-icon:focus {\n  outline: 0 none;\n  outline-offset: 0;\n  box-shadow: 0 0 0 0.2rem #a6d5fa;\n}\n\n.p-dialog .p-dialog-header .p-dialog-header-icon:last-child {\n  margin-right: 0;\n}\n\n.p-dialog .p-dialog-content {\n  background: #ffffff;\n  color: #495057;\n  padding: 0 1.5rem 2rem 1.5rem;\n}\n\n.p-dialog .p-dialog-footer {\n  border-top: 0 none;\n  background: #ffffff;\n  color: #495057;\n  padding: 0 1.5rem 1.5rem 1.5rem;\n  text-align: right;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n\n.p-dialog .p-dialog-footer button {\n  margin: 0 0.5rem 0 0;\n  width: auto;\n}\n\n.p-dialog.p-confirm-dialog .p-confirm-dialog-icon {\n  font-size: 2rem;\n}\n\n.p-dialog.p-confirm-dialog .p-confirm-dialog-message {\n  margin-left: 1rem;\n}\n\n.p-overlaypanel {\n  background: #ffffff;\n  color: #495057;\n  border: 0 none;\n  border-radius: 3px;\n  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);\n}\n\n.p-overlaypanel .p-overlaypanel-content {\n  padding: 1rem;\n}\n\n.p-overlaypanel .p-overlaypanel-close {\n  background: #2196F3;\n  color: #ffffff;\n  width: 2rem;\n  height: 2rem;\n  transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;\n  border-radius: 50%;\n  position: absolute;\n  top: -1rem;\n  right: -1rem;\n}\n\n.p-overlaypanel .p-overlaypanel-close:enabled:hover {\n  background: #0d89ec;\n  color: #ffffff;\n}\n\n.p-overlaypanel:after {\n  border: solid transparent;\n  border-color: rgba(255, 255, 255, 0);\n  border-bottom-color: #ffffff;\n}\n\n.p-overlaypanel:before {\n  border: solid transparent;\n  border-color: rgba(255, 255, 255, 0);\n  border-bottom-color: #ffffff;\n}\n\n.p-overlaypanel.p-overlaypanel-flipped:after {\n  border-top-color: #ffffff;\n}\n\n.p-overlaypanel.p-overlaypanel-flipped:before {\n  border-top-color: #ffffff;\n}\n\n.p-sidebar {\n  background: #ffffff;\n  color: #495057;\n  border: 0 none;\n  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);\n}\n\n.p-sidebar .p-sidebar-header {\n  padding: 1rem;\n}\n\n.p-sidebar .p-sidebar-header .p-sidebar-close,\n.p-sidebar .p-sidebar-header .p-sidebar-icon {\n  width: 2rem;\n  height: 2rem;\n  color: #6c757d;\n  border: 0 none;\n  background: transparent;\n  border-radius: 50%;\n  transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;\n}\n\n.p-sidebar .p-sidebar-header .p-sidebar-close:enabled:hover,\n.p-sidebar .p-sidebar-header .p-sidebar-icon:enabled:hover {\n  color: #495057;\n  border-color: transparent;\n  background: #e9ecef;\n}\n\n.p-sidebar .p-sidebar-header .p-sidebar-close:focus,\n.p-sidebar .p-sidebar-header .p-sidebar-icon:focus {\n  outline: 0 none;\n  outline-offset: 0;\n  box-shadow: 0 0 0 0.2rem #a6d5fa;\n}\n\n.p-sidebar .p-sidebar-header + .p-sidebar-content {\n  padding-top: 0;\n}\n\n.p-sidebar .p-sidebar-content {\n  padding: 1rem;\n}\n\n.p-tooltip .p-tooltip-text {\n  background: #495057;\n  color: #ffffff;\n  padding: 0.5rem 0.5rem;\n  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);\n  border-radius: 3px;\n}\n\n.p-tooltip.p-tooltip-right .p-tooltip-arrow {\n  border-right-color: #495057;\n}\n\n.p-tooltip.p-tooltip-left .p-tooltip-arrow {\n  border-left-color: #495057;\n}\n\n.p-tooltip.p-tooltip-top .p-tooltip-arrow {\n  border-top-color: #495057;\n}\n\n.p-tooltip.p-tooltip-bottom .p-tooltip-arrow {\n  border-bottom-color: #495057;\n}\n\n.p-fileupload .p-fileupload-buttonbar {\n  background: #f8f9fa;\n  padding: 1rem;\n  border: 1px solid #dee2e6;\n  color: #495057;\n  border-bottom: 0 none;\n  border-top-right-radius: 3px;\n  border-top-left-radius: 3px;\n}\n\n.p-fileupload .p-fileupload-buttonbar .p-button {\n  margin-right: 0.5rem;\n}\n\n.p-fileupload .p-fileupload-buttonbar .p-button.p-fileupload-choose.p-focus {\n  outline: 0 none;\n  outline-offset: 0;\n  box-shadow: 0 0 0 0.2rem #a6d5fa;\n}\n\n.p-fileupload .p-fileupload-content {\n  background: #ffffff;\n  padding: 2rem 1rem;\n  border: 1px solid #dee2e6;\n  color: #495057;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n\n.p-fileupload .p-progressbar {\n  height: 0.25rem;\n}\n\n.p-fileupload .p-fileupload-row > div {\n  padding: 1rem 1rem;\n}\n\n.p-fileupload.p-fileupload-advanced .p-message {\n  margin-top: 0;\n}\n\n.p-fileupload-choose:not(.p-disabled):hover {\n  background: #0d89ec;\n  color: #ffffff;\n  border-color: #0d89ec;\n}\n\n.p-fileupload-choose:not(.p-disabled):active {\n  background: #0b7ad1;\n  color: #ffffff;\n  border-color: #0b7ad1;\n}\n\n.p-breadcrumb {\n  background: #ffffff;\n  border: 1px solid #dee2e6;\n  border-radius: 3px;\n  padding: 1rem;\n}\n\n.p-breadcrumb ul li .p-menuitem-link {\n  transition: box-shadow 0.2s;\n  border-radius: 3px;\n}\n\n.p-breadcrumb ul li .p-menuitem-link:focus {\n  outline: 0 none;\n  outline-offset: 0;\n  box-shadow: 0 0 0 0.2rem #a6d5fa;\n}\n\n.p-breadcrumb ul li .p-menuitem-link .p-menuitem-text {\n  color: #495057;\n}\n\n.p-breadcrumb ul li .p-menuitem-link .p-menuitem-icon {\n  color: #6c757d;\n}\n\n.p-breadcrumb ul li.p-breadcrumb-chevron {\n  margin: 0 0.5rem 0 0.5rem;\n  color: #495057;\n}\n\n.p-breadcrumb ul li:last-child .p-menuitem-text {\n  color: #495057;\n}\n\n.p-breadcrumb ul li:last-child .p-menuitem-icon {\n  color: #6c757d;\n}\n\n.p-contextmenu {\n  padding: 0.25rem 0;\n  background: #ffffff;\n  color: #495057;\n  border: 0 none;\n  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);\n  border-radius: 3px;\n  width: 12.5rem;\n}\n\n.p-contextmenu .p-menuitem-link {\n  padding: 0.75rem 1rem;\n  color: #495057;\n  border-radius: 0;\n  transition: box-shadow 0.2s;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.p-contextmenu .p-menuitem-link .p-menuitem-text {\n  color: #495057;\n}\n\n.p-contextmenu .p-menuitem-link .p-menuitem-icon {\n  color: #6c757d;\n  margin-right: 0.5rem;\n}\n\n.p-contextmenu .p-menuitem-link .p-submenu-icon {\n  color: #6c757d;\n}\n\n.p-contextmenu .p-menuitem-link:not(.p-disabled):hover {\n  background: #e9ecef;\n}\n\n.p-contextmenu .p-menuitem-link:not(.p-disabled):hover .p-menuitem-text {\n  color: #495057;\n}\n\n.p-contextmenu .p-menuitem-link:not(.p-disabled):hover .p-menuitem-icon {\n  color: #6c757d;\n}\n\n.p-contextmenu .p-menuitem-link:not(.p-disabled):hover .p-submenu-icon {\n  color: #6c757d;\n}\n\n.p-contextmenu .p-menuitem-link:focus {\n  outline: 0 none;\n  outline-offset: 0;\n  box-shadow: inset 0 0 0 0.15rem #a6d5fa;\n}\n\n.p-contextmenu .p-submenu-list {\n  padding: 0.25rem 0;\n  background: #ffffff;\n  border: 0 none;\n  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);\n  border-radius: 3px;\n}\n\n.p-contextmenu .p-menuitem.p-menuitem-active > .p-menuitem-link {\n  background: #e9ecef;\n}\n\n.p-contextmenu .p-menuitem.p-menuitem-active > .p-menuitem-link .p-menuitem-text {\n  color: #495057;\n}\n\n.p-contextmenu .p-menuitem.p-menuitem-active > .p-menuitem-link .p-menuitem-icon, .p-contextmenu .p-menuitem.p-menuitem-active > .p-menuitem-link .p-submenu-icon {\n  color: #6c757d;\n}\n\n.p-contextmenu .p-menu-separator {\n  border-top: 1px solid #dee2e6;\n  margin: 0.25rem 0;\n}\n\n.p-contextmenu .p-submenu-icon {\n  font-size: 0.875rem;\n}\n\n.p-dock .p-dock-list-container {\n  background: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  padding: 0.5rem 0.5rem;\n  border-radius: 0.5rem;\n}\n\n.p-dock .p-dock-item {\n  padding: 0.5rem;\n}\n\n.p-dock .p-dock-action {\n  width: 4rem;\n  height: 4rem;\n}\n\n.p-dock.p-dock-top .p-dock-item-second-prev,\n.p-dock.p-dock-top .p-dock-item-second-next, .p-dock.p-dock-bottom .p-dock-item-second-prev,\n.p-dock.p-dock-bottom .p-dock-item-second-next {\n  margin: 0 0.9rem;\n}\n\n.p-dock.p-dock-top .p-dock-item-prev,\n.p-dock.p-dock-top .p-dock-item-next, .p-dock.p-dock-bottom .p-dock-item-prev,\n.p-dock.p-dock-bottom .p-dock-item-next {\n  margin: 0 1.3rem;\n}\n\n.p-dock.p-dock-top .p-dock-item-current, .p-dock.p-dock-bottom .p-dock-item-current {\n  margin: 0 1.5rem;\n}\n\n.p-dock.p-dock-left .p-dock-item-second-prev,\n.p-dock.p-dock-left .p-dock-item-second-next, .p-dock.p-dock-right .p-dock-item-second-prev,\n.p-dock.p-dock-right .p-dock-item-second-next {\n  margin: 0.9rem 0;\n}\n\n.p-dock.p-dock-left .p-dock-item-prev,\n.p-dock.p-dock-left .p-dock-item-next, .p-dock.p-dock-right .p-dock-item-prev,\n.p-dock.p-dock-right .p-dock-item-next {\n  margin: 1.3rem 0;\n}\n\n.p-dock.p-dock-left .p-dock-item-current, .p-dock.p-dock-right .p-dock-item-current {\n  margin: 1.5rem 0;\n}\n\n@media screen and (max-width: 960px) {\n  .p-dock.p-dock-top .p-dock-list-container, .p-dock.p-dock-bottom .p-dock-list-container {\n    overflow-x: auto;\n    width: 100%;\n  }\n  .p-dock.p-dock-top .p-dock-list-container .p-dock-list, .p-dock.p-dock-bottom .p-dock-list-container .p-dock-list {\n    margin: 0 auto;\n  }\n  .p-dock.p-dock-left .p-dock-list-container, .p-dock.p-dock-right .p-dock-list-container {\n    overflow-y: auto;\n    height: 100%;\n  }\n  .p-dock.p-dock-left .p-dock-list-container .p-dock-list, .p-dock.p-dock-right .p-dock-list-container .p-dock-list {\n    margin: auto 0;\n  }\n  .p-dock .p-dock-list .p-dock-item {\n    transform: none;\n    margin: 0;\n  }\n}\n\n.p-megamenu {\n  padding: 0.5rem;\n  background: #f8f9fa;\n  color: #495057;\n  border: 1px solid #dee2e6;\n  border-radius: 3px;\n}\n\n.p-megamenu .p-megamenu-root-list > .p-menuitem > .p-menuitem-link {\n  padding: 0.75rem 1rem;\n  color: #495057;\n  border-radius: 3px;\n  transition: box-shadow 0.2s;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.p-megamenu .p-megamenu-root-list > .p-menuitem > .p-menuitem-link .p-menuitem-text {\n  color: #495057;\n}\n\n.p-megamenu .p-megamenu-root-list > .p-menuitem > .p-menuitem-link .p-menuitem-icon {\n  color: #6c757d;\n  margin-right: 0.5rem;\n}\n\n.p-megamenu .p-megamenu-root-list > .p-menuitem > .p-menuitem-link .p-submenu-icon {\n  color: #6c757d;\n  margin-left: 0.5rem;\n}\n\n.p-megamenu .p-megamenu-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover {\n  background: #e9ecef;\n}\n\n.p-megamenu .p-megamenu-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover .p-menuitem-text {\n  color: #495057;\n}\n\n.p-megamenu .p-megamenu-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover .p-menuitem-icon {\n  color: #6c757d;\n}\n\n.p-megamenu .p-megamenu-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover .p-submenu-icon {\n  color: #6c757d;\n}\n\n.p-megamenu .p-megamenu-root-list > .p-menuitem > .p-menuitem-link:focus {\n  outline: 0 none;\n  outline-offset: 0;\n  box-shadow: inset 0 0 0 0.15rem #a6d5fa;\n}\n\n.p-megamenu .p-megamenu-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link,\n.p-megamenu .p-megamenu-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link:not(.p-disabled):hover {\n  background: #e9ecef;\n}\n\n.p-megamenu .p-megamenu-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link .p-menuitem-text,\n.p-megamenu .p-megamenu-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link:not(.p-disabled):hover .p-menuitem-text {\n  color: #495057;\n}\n\n.p-megamenu .p-megamenu-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link .p-menuitem-icon,\n.p-megamenu .p-megamenu-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link:not(.p-disabled):hover .p-menuitem-icon {\n  color: #6c757d;\n}\n\n.p-megamenu .p-megamenu-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link .p-submenu-icon,\n.p-megamenu .p-megamenu-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link:not(.p-disabled):hover .p-submenu-icon {\n  color: #6c757d;\n}\n\n.p-megamenu .p-menuitem-link {\n  padding: 0.75rem 1rem;\n  color: #495057;\n  border-radius: 0;\n  transition: box-shadow 0.2s;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.p-megamenu .p-menuitem-link .p-menuitem-text {\n  color: #495057;\n}\n\n.p-megamenu .p-menuitem-link .p-menuitem-icon {\n  color: #6c757d;\n  margin-right: 0.5rem;\n}\n\n.p-megamenu .p-menuitem-link .p-submenu-icon {\n  color: #6c757d;\n}\n\n.p-megamenu .p-menuitem-link:not(.p-disabled):hover {\n  background: #e9ecef;\n}\n\n.p-megamenu .p-menuitem-link:not(.p-disabled):hover .p-menuitem-text {\n  color: #495057;\n}\n\n.p-megamenu .p-menuitem-link:not(.p-disabled):hover .p-menuitem-icon {\n  color: #6c757d;\n}\n\n.p-megamenu .p-menuitem-link:not(.p-disabled):hover .p-submenu-icon {\n  color: #6c757d;\n}\n\n.p-megamenu .p-menuitem-link:focus {\n  outline: 0 none;\n  outline-offset: 0;\n  box-shadow: inset 0 0 0 0.15rem #a6d5fa;\n}\n\n.p-megamenu .p-megamenu-panel {\n  background: #ffffff;\n  color: #495057;\n  border: 0 none;\n  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);\n}\n\n.p-megamenu .p-megamenu-submenu-header {\n  margin: 0;\n  padding: 0.75rem 1rem;\n  color: #495057;\n  background: #ffffff;\n  font-weight: 600;\n  border-top-right-radius: 3px;\n  border-top-left-radius: 3px;\n}\n\n.p-megamenu .p-megamenu-submenu {\n  padding: 0.25rem 0;\n  width: 12.5rem;\n}\n\n.p-megamenu .p-megamenu-submenu .p-menu-separator {\n  border-top: 1px solid #dee2e6;\n  margin: 0.25rem 0;\n}\n\n.p-megamenu .p-menuitem.p-menuitem-active > .p-menuitem-link {\n  background: #e9ecef;\n}\n\n.p-megamenu .p-menuitem.p-menuitem-active > .p-menuitem-link .p-menuitem-text {\n  color: #495057;\n}\n\n.p-megamenu .p-menuitem.p-menuitem-active > .p-menuitem-link .p-menuitem-icon, .p-megamenu .p-menuitem.p-menuitem-active > .p-menuitem-link .p-submenu-icon {\n  color: #6c757d;\n}\n\n.p-megamenu.p-megamenu-vertical {\n  width: 12.5rem;\n  padding: 0.25rem 0;\n}\n\n.p-menu {\n  padding: 0.25rem 0;\n  background: #ffffff;\n  color: #495057;\n  border: 1px solid #dee2e6;\n  border-radius: 3px;\n  width: 12.5rem;\n}\n\n.p-menu .p-menuitem-link {\n  padding: 0.75rem 1rem;\n  color: #495057;\n  border-radius: 0;\n  transition: box-shadow 0.2s;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.p-menu .p-menuitem-link .p-menuitem-text {\n  color: #495057;\n}\n\n.p-menu .p-menuitem-link .p-menuitem-icon {\n  color: #6c757d;\n  margin-right: 0.5rem;\n}\n\n.p-menu .p-menuitem-link .p-submenu-icon {\n  color: #6c757d;\n}\n\n.p-menu .p-menuitem-link:not(.p-disabled):hover {\n  background: #e9ecef;\n}\n\n.p-menu .p-menuitem-link:not(.p-disabled):hover .p-menuitem-text {\n  color: #495057;\n}\n\n.p-menu .p-menuitem-link:not(.p-disabled):hover .p-menuitem-icon {\n  color: #6c757d;\n}\n\n.p-menu .p-menuitem-link:not(.p-disabled):hover .p-submenu-icon {\n  color: #6c757d;\n}\n\n.p-menu .p-menuitem-link:focus {\n  outline: 0 none;\n  outline-offset: 0;\n  box-shadow: inset 0 0 0 0.15rem #a6d5fa;\n}\n\n.p-menu.p-menu-overlay {\n  background: #ffffff;\n  border: 0 none;\n  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);\n}\n\n.p-menu .p-submenu-header {\n  margin: 0;\n  padding: 0.75rem 1rem;\n  color: #495057;\n  background: #ffffff;\n  font-weight: 600;\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n}\n\n.p-menu .p-menu-separator {\n  border-top: 1px solid #dee2e6;\n  margin: 0.25rem 0;\n}\n\n.p-menubar {\n  padding: 0.5rem;\n  background: #f8f9fa;\n  color: #495057;\n  border: 1px solid #dee2e6;\n  border-radius: 3px;\n}\n\n.p-menubar .p-menuitem-link {\n  padding: 0.75rem 1rem;\n  color: #495057;\n  border-radius: 0;\n  transition: box-shadow 0.2s;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.p-menubar .p-menuitem-link .p-menuitem-text {\n  color: #495057;\n}\n\n.p-menubar .p-menuitem-link .p-menuitem-icon {\n  color: #6c757d;\n  margin-right: 0.5rem;\n}\n\n.p-menubar .p-menuitem-link .p-submenu-icon {\n  color: #6c757d;\n}\n\n.p-menubar .p-menuitem-link:not(.p-disabled):hover {\n  background: #e9ecef;\n}\n\n.p-menubar .p-menuitem-link:not(.p-disabled):hover .p-menuitem-text {\n  color: #495057;\n}\n\n.p-menubar .p-menuitem-link:not(.p-disabled):hover .p-menuitem-icon {\n  color: #6c757d;\n}\n\n.p-menubar .p-menuitem-link:not(.p-disabled):hover .p-submenu-icon {\n  color: #6c757d;\n}\n\n.p-menubar .p-menuitem-link:focus {\n  outline: 0 none;\n  outline-offset: 0;\n  box-shadow: inset 0 0 0 0.15rem #a6d5fa;\n}\n\n.p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link {\n  padding: 0.75rem 1rem;\n  color: #495057;\n  border-radius: 3px;\n  transition: box-shadow 0.2s;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link .p-menuitem-text {\n  color: #495057;\n}\n\n.p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link .p-menuitem-icon {\n  color: #6c757d;\n  margin-right: 0.5rem;\n}\n\n.p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link .p-submenu-icon {\n  color: #6c757d;\n  margin-left: 0.5rem;\n}\n\n.p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover {\n  background: #e9ecef;\n}\n\n.p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover .p-menuitem-text {\n  color: #495057;\n}\n\n.p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover .p-menuitem-icon {\n  color: #6c757d;\n}\n\n.p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover .p-submenu-icon {\n  color: #6c757d;\n}\n\n.p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:focus {\n  outline: 0 none;\n  outline-offset: 0;\n  box-shadow: inset 0 0 0 0.15rem #a6d5fa;\n}\n\n.p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link,\n.p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link:not(.p-disabled):hover {\n  background: #e9ecef;\n}\n\n.p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link .p-menuitem-text,\n.p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link:not(.p-disabled):hover .p-menuitem-text {\n  color: #495057;\n}\n\n.p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link .p-menuitem-icon,\n.p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link:not(.p-disabled):hover .p-menuitem-icon {\n  color: #6c757d;\n}\n\n.p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link .p-submenu-icon,\n.p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link:not(.p-disabled):hover .p-submenu-icon {\n  color: #6c757d;\n}\n\n.p-menubar .p-submenu-list {\n  padding: 0.25rem 0;\n  background: #ffffff;\n  border: 0 none;\n  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);\n  width: 12.5rem;\n}\n\n.p-menubar .p-submenu-list .p-menu-separator {\n  border-top: 1px solid #dee2e6;\n  margin: 0.25rem 0;\n}\n\n.p-menubar .p-submenu-list .p-submenu-icon {\n  font-size: 0.875rem;\n}\n\n.p-menubar .p-menuitem.p-menuitem-active > .p-menuitem-link {\n  background: #e9ecef;\n}\n\n.p-menubar .p-menuitem.p-menuitem-active > .p-menuitem-link .p-menuitem-text {\n  color: #495057;\n}\n\n.p-menubar .p-menuitem.p-menuitem-active > .p-menuitem-link .p-menuitem-icon, .p-menubar .p-menuitem.p-menuitem-active > .p-menuitem-link .p-submenu-icon {\n  color: #6c757d;\n}\n\n@media screen and (max-width: 960px) {\n  .p-menubar {\n    position: relative;\n  }\n  .p-menubar .p-menubar-button {\n    display: flex;\n    width: 2rem;\n    height: 2rem;\n    color: #6c757d;\n    border-radius: 50%;\n    transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;\n  }\n  .p-menubar .p-menubar-button:hover {\n    color: #6c757d;\n    background: #e9ecef;\n  }\n  .p-menubar .p-menubar-button:focus {\n    outline: 0 none;\n    outline-offset: 0;\n    box-shadow: 0 0 0 0.2rem #a6d5fa;\n  }\n  .p-menubar .p-menubar-root-list {\n    position: absolute;\n    display: none;\n    padding: 0.25rem 0;\n    background: #ffffff;\n    border: 0 none;\n    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);\n    width: 100%;\n  }\n  .p-menubar .p-menubar-root-list .p-menu-separator {\n    border-top: 1px solid #dee2e6;\n    margin: 0.25rem 0;\n  }\n  .p-menubar .p-menubar-root-list .p-submenu-icon {\n    font-size: 0.875rem;\n  }\n  .p-menubar .p-menubar-root-list > .p-menuitem {\n    width: 100%;\n    position: static;\n  }\n  .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link {\n    padding: 0.75rem 1rem;\n    color: #495057;\n    border-radius: 0;\n    transition: box-shadow 0.2s;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n  }\n  .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link .p-menuitem-text {\n    color: #495057;\n  }\n  .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link .p-menuitem-icon {\n    color: #6c757d;\n    margin-right: 0.5rem;\n  }\n  .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link .p-submenu-icon {\n    color: #6c757d;\n  }\n  .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover {\n    background: #e9ecef;\n  }\n  .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover .p-menuitem-text {\n    color: #495057;\n  }\n  .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover .p-menuitem-icon {\n    color: #6c757d;\n  }\n  .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover .p-submenu-icon {\n    color: #6c757d;\n  }\n  .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:focus {\n    outline: 0 none;\n    outline-offset: 0;\n    box-shadow: inset 0 0 0 0.15rem #a6d5fa;\n  }\n  .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link > .p-submenu-icon {\n    margin-left: auto;\n    transition: transform 0.2s;\n  }\n  .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link > .p-submenu-icon {\n    transform: rotate(-180deg);\n  }\n  .p-menubar .p-menubar-root-list .p-submenu-list {\n    width: 100%;\n    position: static;\n    box-shadow: none;\n    border: 0 none;\n  }\n  .p-menubar .p-menubar-root-list .p-submenu-list .p-submenu-icon {\n    transition: transform 0.2s;\n    transform: rotate(90deg);\n  }\n  .p-menubar .p-menubar-root-list .p-submenu-list .p-menuitem-active > .p-menuitem-link > .p-submenu-icon {\n    transform: rotate(-90deg);\n  }\n  .p-menubar .p-menubar-root-list .p-menuitem {\n    width: 100%;\n    position: static;\n  }\n  .p-menubar .p-menubar-root-list ul li a {\n    padding-left: 2.25rem;\n  }\n  .p-menubar .p-menubar-root-list ul li ul li a {\n    padding-left: 3.75rem;\n  }\n  .p-menubar .p-menubar-root-list ul li ul li ul li a {\n    padding-left: 5.25rem;\n  }\n  .p-menubar .p-menubar-root-list ul li ul li ul li ul li a {\n    padding-left: 6.75rem;\n  }\n  .p-menubar .p-menubar-root-list ul li ul li ul li ul li ul li a {\n    padding-left: 8.25rem;\n  }\n  .p-menubar.p-menubar-mobile-active .p-menubar-root-list {\n    display: flex;\n    flex-direction: column;\n    top: 100%;\n    left: 0;\n    z-index: 1;\n  }\n}\n\n.p-panelmenu .p-panelmenu-header > a {\n  padding: 1rem;\n  border: 1px solid #dee2e6;\n  color: #495057;\n  background: #f8f9fa;\n  font-weight: 600;\n  border-radius: 3px;\n  transition: box-shadow 0.2s;\n}\n\n.p-panelmenu .p-panelmenu-header > a .p-panelmenu-icon {\n  margin-right: 0.5rem;\n}\n\n.p-panelmenu .p-panelmenu-header > a .p-menuitem-icon {\n  margin-right: 0.5rem;\n}\n\n.p-panelmenu .p-panelmenu-header > a:focus {\n  outline: 0 none;\n  outline-offset: 0;\n  box-shadow: 0 0 0 0.2rem #a6d5fa;\n}\n\n.p-panelmenu .p-panelmenu-header:not(.p-highlight):not(.p-disabled) > a:hover {\n  background: #e9ecef;\n  border-color: #dee2e6;\n  color: #495057;\n}\n\n.p-panelmenu .p-panelmenu-header.p-highlight {\n  margin-bottom: 0;\n}\n\n.p-panelmenu .p-panelmenu-header.p-highlight > a {\n  background: #f8f9fa;\n  border-color: #dee2e6;\n  color: #495057;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.p-panelmenu .p-panelmenu-header.p-highlight:not(.p-disabled) > a:hover {\n  border-color: #dee2e6;\n  background: #e9ecef;\n  color: #495057;\n}\n\n.p-panelmenu .p-panelmenu-content {\n  padding: 0.25rem 0;\n  border: 1px solid #dee2e6;\n  background: #ffffff;\n  color: #495057;\n  margin-bottom: 0;\n  border-top: 0;\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n\n.p-panelmenu .p-panelmenu-content .p-menuitem .p-menuitem-link {\n  padding: 0.75rem 1rem;\n  color: #495057;\n  border-radius: 0;\n  transition: box-shadow 0.2s;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.p-panelmenu .p-panelmenu-content .p-menuitem .p-menuitem-link .p-menuitem-text {\n  color: #495057;\n}\n\n.p-panelmenu .p-panelmenu-content .p-menuitem .p-menuitem-link .p-menuitem-icon {\n  color: #6c757d;\n  margin-right: 0.5rem;\n}\n\n.p-panelmenu .p-panelmenu-content .p-menuitem .p-menuitem-link .p-submenu-icon {\n  color: #6c757d;\n}\n\n.p-panelmenu .p-panelmenu-content .p-menuitem .p-menuitem-link:not(.p-disabled):hover {\n  background: #e9ecef;\n}\n\n.p-panelmenu .p-panelmenu-content .p-menuitem .p-menuitem-link:not(.p-disabled):hover .p-menuitem-text {\n  color: #495057;\n}\n\n.p-panelmenu .p-panelmenu-content .p-menuitem .p-menuitem-link:not(.p-disabled):hover .p-menuitem-icon {\n  color: #6c757d;\n}\n\n.p-panelmenu .p-panelmenu-content .p-menuitem .p-menuitem-link:not(.p-disabled):hover .p-submenu-icon {\n  color: #6c757d;\n}\n\n.p-panelmenu .p-panelmenu-content .p-menuitem .p-menuitem-link:focus {\n  outline: 0 none;\n  outline-offset: 0;\n  box-shadow: inset 0 0 0 0.15rem #a6d5fa;\n}\n\n.p-panelmenu .p-panelmenu-content .p-menuitem .p-menuitem-link .p-panelmenu-icon {\n  margin-right: 0.5rem;\n}\n\n.p-panelmenu .p-panelmenu-content .p-submenu-list:not(.p-panelmenu-root-submenu) {\n  padding: 0 0 0 1rem;\n}\n\n.p-panelmenu .p-panelmenu-panel {\n  margin-bottom: 0;\n}\n\n.p-panelmenu .p-panelmenu-panel .p-panelmenu-header > a {\n  border-radius: 0;\n}\n\n.p-panelmenu .p-panelmenu-panel .p-panelmenu-content {\n  border-radius: 0;\n}\n\n.p-panelmenu .p-panelmenu-panel:not(:first-child) .p-panelmenu-header > a {\n  border-top: 0 none;\n}\n\n.p-panelmenu .p-panelmenu-panel:not(:first-child) .p-panelmenu-header:not(.p-highlight):not(.p-disabled):hover > a, .p-panelmenu .p-panelmenu-panel:not(:first-child) .p-panelmenu-header:not(.p-disabled).p-highlight:hover > a {\n  border-top: 0 none;\n}\n\n.p-panelmenu .p-panelmenu-panel:first-child .p-panelmenu-header > a {\n  border-top-right-radius: 3px;\n  border-top-left-radius: 3px;\n}\n\n.p-panelmenu .p-panelmenu-panel:last-child .p-panelmenu-header:not(.p-highlight) > a {\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n\n.p-panelmenu .p-panelmenu-panel:last-child .p-panelmenu-content {\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n\n.p-steps .p-steps-item .p-menuitem-link {\n  background: transparent;\n  transition: box-shadow 0.2s;\n  border-radius: 3px;\n  background: #ffffff;\n}\n\n.p-steps .p-steps-item .p-menuitem-link .p-steps-number {\n  color: #495057;\n  border: 1px solid #e9ecef;\n  background: #ffffff;\n  min-width: 2rem;\n  height: 2rem;\n  line-height: 2rem;\n  font-size: 1.143rem;\n  z-index: 1;\n  border-radius: 50%;\n}\n\n.p-steps .p-steps-item .p-menuitem-link .p-steps-title {\n  margin-top: 0.5rem;\n  color: #6c757d;\n}\n\n.p-steps .p-steps-item .p-menuitem-link:not(.p-disabled):focus {\n  outline: 0 none;\n  outline-offset: 0;\n  box-shadow: 0 0 0 0.2rem #a6d5fa;\n}\n\n.p-steps .p-steps-item.p-highlight .p-steps-number {\n  background: #E3F2FD;\n  color: #495057;\n}\n\n.p-steps .p-steps-item.p-highlight .p-steps-title {\n  font-weight: 600;\n  color: #495057;\n}\n\n.p-steps .p-steps-item:before {\n  content: \" \";\n  border-top: 1px solid #dee2e6;\n  width: 100%;\n  top: 50%;\n  left: 0;\n  display: block;\n  position: absolute;\n  margin-top: -1rem;\n}\n\n.p-tabmenu .p-tabmenu-nav {\n  background: #ffffff;\n  border: 1px solid #dee2e6;\n  border-width: 0 0 2px 0;\n}\n\n.p-tabmenu .p-tabmenu-nav .p-tabmenuitem {\n  margin-right: 0;\n}\n\n.p-tabmenu .p-tabmenu-nav .p-tabmenuitem .p-menuitem-link {\n  border: solid #dee2e6;\n  border-width: 0 0 2px 0;\n  border-color: transparent transparent #dee2e6 transparent;\n  background: #ffffff;\n  color: #6c757d;\n  padding: 1rem;\n  font-weight: 600;\n  border-top-right-radius: 3px;\n  border-top-left-radius: 3px;\n  transition: box-shadow 0.2s;\n  margin: 0 0 -2px 0;\n}\n\n.p-tabmenu .p-tabmenu-nav .p-tabmenuitem .p-menuitem-link .p-menuitem-icon {\n  margin-right: 0.5rem;\n}\n\n.p-tabmenu .p-tabmenu-nav .p-tabmenuitem .p-menuitem-link:not(.p-disabled):focus {\n  outline: 0 none;\n  outline-offset: 0;\n  box-shadow: inset 0 0 0 0.2rem #a6d5fa;\n}\n\n.p-tabmenu .p-tabmenu-nav .p-tabmenuitem:not(.p-highlight):not(.p-disabled):hover .p-menuitem-link {\n  background: #ffffff;\n  border-color: #6c757d;\n  color: #6c757d;\n}\n\n.p-tabmenu .p-tabmenu-nav .p-tabmenuitem.p-highlight .p-menuitem-link {\n  background: #ffffff;\n  border-color: #2196F3;\n  color: #2196F3;\n}\n\n.p-tieredmenu {\n  padding: 0.25rem 0;\n  background: #ffffff;\n  color: #495057;\n  border: 1px solid #dee2e6;\n  border-radius: 3px;\n  width: 12.5rem;\n}\n\n.p-tieredmenu .p-menuitem-link {\n  padding: 0.75rem 1rem;\n  color: #495057;\n  border-radius: 0;\n  transition: box-shadow 0.2s;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.p-tieredmenu .p-menuitem-link .p-menuitem-text {\n  color: #495057;\n}\n\n.p-tieredmenu .p-menuitem-link .p-menuitem-icon {\n  color: #6c757d;\n  margin-right: 0.5rem;\n}\n\n.p-tieredmenu .p-menuitem-link .p-submenu-icon {\n  color: #6c757d;\n}\n\n.p-tieredmenu .p-menuitem-link:not(.p-disabled):hover {\n  background: #e9ecef;\n}\n\n.p-tieredmenu .p-menuitem-link:not(.p-disabled):hover .p-menuitem-text {\n  color: #495057;\n}\n\n.p-tieredmenu .p-menuitem-link:not(.p-disabled):hover .p-menuitem-icon {\n  color: #6c757d;\n}\n\n.p-tieredmenu .p-menuitem-link:not(.p-disabled):hover .p-submenu-icon {\n  color: #6c757d;\n}\n\n.p-tieredmenu .p-menuitem-link:focus {\n  outline: 0 none;\n  outline-offset: 0;\n  box-shadow: inset 0 0 0 0.15rem #a6d5fa;\n}\n\n.p-tieredmenu.p-tieredmenu-overlay {\n  background: #ffffff;\n  border: 0 none;\n  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);\n}\n\n.p-tieredmenu .p-submenu-list {\n  padding: 0.25rem 0;\n  background: #ffffff;\n  border: 0 none;\n  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);\n}\n\n.p-tieredmenu .p-menuitem.p-menuitem-active > .p-menuitem-link {\n  background: #e9ecef;\n}\n\n.p-tieredmenu .p-menuitem.p-menuitem-active > .p-menuitem-link .p-menuitem-text {\n  color: #495057;\n}\n\n.p-tieredmenu .p-menuitem.p-menuitem-active > .p-menuitem-link .p-menuitem-icon, .p-tieredmenu .p-menuitem.p-menuitem-active > .p-menuitem-link .p-submenu-icon {\n  color: #6c757d;\n}\n\n.p-tieredmenu .p-menu-separator {\n  border-top: 1px solid #dee2e6;\n  margin: 0.25rem 0;\n}\n\n.p-tieredmenu .p-submenu-icon {\n  font-size: 0.875rem;\n}\n\n.p-inline-message {\n  padding: 0.5rem 0.5rem;\n  margin: 0;\n  border-radius: 3px;\n}\n\n.p-inline-message.p-inline-message-info {\n  background: #B3E5FC;\n  border: solid #0891cf;\n  border-width: 0px;\n  color: #044868;\n}\n\n.p-inline-message.p-inline-message-info .p-inline-message-icon {\n  color: #044868;\n}\n\n.p-inline-message.p-inline-message-success {\n  background: #C8E6C9;\n  border: solid #439446;\n  border-width: 0px;\n  color: #224a23;\n}\n\n.p-inline-message.p-inline-message-success .p-inline-message-icon {\n  color: #224a23;\n}\n\n.p-inline-message.p-inline-message-warn {\n  background: #FFECB3;\n  border: solid #d9a300;\n  border-width: 0px;\n  color: #6d5100;\n}\n\n.p-inline-message.p-inline-message-warn .p-inline-message-icon {\n  color: #6d5100;\n}\n\n.p-inline-message.p-inline-message-error {\n  background: #FFCDD2;\n  border: solid #e60017;\n  border-width: 0px;\n  color: #73000c;\n}\n\n.p-inline-message.p-inline-message-error .p-inline-message-icon {\n  color: #73000c;\n}\n\n.p-inline-message .p-inline-message-icon {\n  font-size: 1rem;\n  margin-right: 0.5rem;\n}\n\n.p-inline-message .p-inline-message-text {\n  font-size: 1rem;\n}\n\n.p-inline-message.p-inline-message-icon-only .p-inline-message-icon {\n  margin-right: 0;\n}\n\n.p-message {\n  margin: 1rem 0;\n  border-radius: 3px;\n}\n\n.p-message .p-message-wrapper {\n  padding: 1rem 1.5rem;\n}\n\n.p-message .p-message-close {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 50%;\n  background: transparent;\n  transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;\n}\n\n.p-message .p-message-close:hover {\n  background: rgba(255, 255, 255, 0.3);\n}\n\n.p-message .p-message-close:focus {\n  outline: 0 none;\n  outline-offset: 0;\n  box-shadow: 0 0 0 0.2rem #a6d5fa;\n}\n\n.p-message.p-message-info {\n  background: #B3E5FC;\n  border: solid #0891cf;\n  border-width: 0 0 0 6px;\n  color: #044868;\n}\n\n.p-message.p-message-info .p-message-icon {\n  color: #044868;\n}\n\n.p-message.p-message-info .p-message-close {\n  color: #044868;\n}\n\n.p-message.p-message-success {\n  background: #C8E6C9;\n  border: solid #439446;\n  border-width: 0 0 0 6px;\n  color: #224a23;\n}\n\n.p-message.p-message-success .p-message-icon {\n  color: #224a23;\n}\n\n.p-message.p-message-success .p-message-close {\n  color: #224a23;\n}\n\n.p-message.p-message-warn {\n  background: #FFECB3;\n  border: solid #d9a300;\n  border-width: 0 0 0 6px;\n  color: #6d5100;\n}\n\n.p-message.p-message-warn .p-message-icon {\n  color: #6d5100;\n}\n\n.p-message.p-message-warn .p-message-close {\n  color: #6d5100;\n}\n\n.p-message.p-message-error {\n  background: #FFCDD2;\n  border: solid #e60017;\n  border-width: 0 0 0 6px;\n  color: #73000c;\n}\n\n.p-message.p-message-error .p-message-icon {\n  color: #73000c;\n}\n\n.p-message.p-message-error .p-message-close {\n  color: #73000c;\n}\n\n.p-message .p-message-text {\n  font-size: 1rem;\n  font-weight: 500;\n}\n\n.p-message .p-message-icon {\n  font-size: 1.5rem;\n  margin-right: 0.5rem;\n}\n\n.p-toast {\n  opacity: 0.9;\n}\n\n.p-toast .p-toast-message {\n  margin: 0 0 1rem 0;\n  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);\n  border-radius: 3px;\n}\n\n.p-toast .p-toast-message .p-toast-message-content {\n  padding: 1rem;\n  border-width: 0 0 0 6px;\n}\n\n.p-toast .p-toast-message .p-toast-message-content .p-toast-message-text {\n  margin: 0 0 0 1rem;\n}\n\n.p-toast .p-toast-message .p-toast-message-content .p-toast-message-icon {\n  font-size: 2rem;\n}\n\n.p-toast .p-toast-message .p-toast-message-content .p-toast-summary {\n  font-weight: 700;\n}\n\n.p-toast .p-toast-message .p-toast-message-content .p-toast-detail {\n  margin: 0.5rem 0 0 0;\n}\n\n.p-toast .p-toast-message .p-toast-icon-close {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 50%;\n  background: transparent;\n  transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;\n}\n\n.p-toast .p-toast-message .p-toast-icon-close:hover {\n  background: rgba(255, 255, 255, 0.3);\n}\n\n.p-toast .p-toast-message .p-toast-icon-close:focus {\n  outline: 0 none;\n  outline-offset: 0;\n  box-shadow: 0 0 0 0.2rem #a6d5fa;\n}\n\n.p-toast .p-toast-message.p-toast-message-info {\n  background: #B3E5FC;\n  border: solid #0891cf;\n  border-width: 0 0 0 6px;\n  color: #044868;\n}\n\n.p-toast .p-toast-message.p-toast-message-info .p-toast-message-icon,\n.p-toast .p-toast-message.p-toast-message-info .p-toast-icon-close {\n  color: #044868;\n}\n\n.p-toast .p-toast-message.p-toast-message-success {\n  background: #C8E6C9;\n  border: solid #439446;\n  border-width: 0 0 0 6px;\n  color: #224a23;\n}\n\n.p-toast .p-toast-message.p-toast-message-success .p-toast-message-icon,\n.p-toast .p-toast-message.p-toast-message-success .p-toast-icon-close {\n  color: #224a23;\n}\n\n.p-toast .p-toast-message.p-toast-message-warn {\n  background: #FFECB3;\n  border: solid #d9a300;\n  border-width: 0 0 0 6px;\n  color: #6d5100;\n}\n\n.p-toast .p-toast-message.p-toast-message-warn .p-toast-message-icon,\n.p-toast .p-toast-message.p-toast-message-warn .p-toast-icon-close {\n  color: #6d5100;\n}\n\n.p-toast .p-toast-message.p-toast-message-error {\n  background: #FFCDD2;\n  border: solid #e60017;\n  border-width: 0 0 0 6px;\n  color: #73000c;\n}\n\n.p-toast .p-toast-message.p-toast-message-error .p-toast-message-icon,\n.p-toast .p-toast-message.p-toast-message-error .p-toast-icon-close {\n  color: #73000c;\n}\n\n.p-galleria .p-galleria-close {\n  margin: 0.5rem;\n  background: transparent;\n  color: #f8f9fa;\n  width: 4rem;\n  height: 4rem;\n  transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;\n  border-radius: 50%;\n}\n\n.p-galleria .p-galleria-close .p-galleria-close-icon {\n  font-size: 2rem;\n}\n\n.p-galleria .p-galleria-close:hover {\n  background: rgba(255, 255, 255, 0.1);\n  color: #f8f9fa;\n}\n\n.p-galleria .p-galleria-item-nav {\n  background: transparent;\n  color: #f8f9fa;\n  width: 4rem;\n  height: 4rem;\n  transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;\n  border-radius: 3px;\n  margin: 0 0.5rem;\n}\n\n.p-galleria .p-galleria-item-nav .p-galleria-item-prev-icon,\n.p-galleria .p-galleria-item-nav .p-galleria-item-next-icon {\n  font-size: 2rem;\n}\n\n.p-galleria .p-galleria-item-nav:not(.p-disabled):hover {\n  background: rgba(255, 255, 255, 0.1);\n  color: #f8f9fa;\n}\n\n.p-galleria .p-galleria-caption {\n  background: rgba(0, 0, 0, 0.5);\n  color: #f8f9fa;\n  padding: 1rem;\n}\n\n.p-galleria .p-galleria-indicators {\n  padding: 1rem;\n}\n\n.p-galleria .p-galleria-indicators .p-galleria-indicator button {\n  background-color: #e9ecef;\n  width: 1rem;\n  height: 1rem;\n  transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;\n  border-radius: 50%;\n}\n\n.p-galleria .p-galleria-indicators .p-galleria-indicator button:hover {\n  background: #dee2e6;\n}\n\n.p-galleria .p-galleria-indicators .p-galleria-indicator.p-highlight button {\n  background: #E3F2FD;\n  color: #495057;\n}\n\n.p-galleria.p-galleria-indicators-bottom .p-galleria-indicator, .p-galleria.p-galleria-indicators-top .p-galleria-indicator {\n  margin-right: 0.5rem;\n}\n\n.p-galleria.p-galleria-indicators-left .p-galleria-indicator, .p-galleria.p-galleria-indicators-right .p-galleria-indicator {\n  margin-bottom: 0.5rem;\n}\n\n.p-galleria.p-galleria-indicator-onitem .p-galleria-indicators {\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.p-galleria.p-galleria-indicator-onitem .p-galleria-indicators .p-galleria-indicator button {\n  background: rgba(255, 255, 255, 0.4);\n}\n\n.p-galleria.p-galleria-indicator-onitem .p-galleria-indicators .p-galleria-indicator button:hover {\n  background: rgba(255, 255, 255, 0.6);\n}\n\n.p-galleria.p-galleria-indicator-onitem .p-galleria-indicators .p-galleria-indicator.p-highlight button {\n  background: #E3F2FD;\n  color: #495057;\n}\n\n.p-galleria .p-galleria-thumbnail-container {\n  background: rgba(0, 0, 0, 0.9);\n  padding: 1rem 0.25rem;\n}\n\n.p-galleria .p-galleria-thumbnail-container .p-galleria-thumbnail-prev,\n.p-galleria .p-galleria-thumbnail-container .p-galleria-thumbnail-next {\n  margin: 0.5rem;\n  background-color: transparent;\n  color: #f8f9fa;\n  width: 2rem;\n  height: 2rem;\n  transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;\n  border-radius: 50%;\n}\n\n.p-galleria .p-galleria-thumbnail-container .p-galleria-thumbnail-prev:hover,\n.p-galleria .p-galleria-thumbnail-container .p-galleria-thumbnail-next:hover {\n  background: rgba(255, 255, 255, 0.1);\n  color: #f8f9fa;\n}\n\n.p-galleria .p-galleria-thumbnail-container .p-galleria-thumbnail-item-content:focus {\n  outline: 0 none;\n  outline-offset: 0;\n  box-shadow: 0 0 0 0.2rem #a6d5fa;\n}\n\n.p-galleria-mask {\n  --maskbg: rgba(0, 0, 0, 0.9);\n}\n\n.p-image-mask {\n  --maskbg: rgba(0, 0, 0, 0.9);\n}\n\n.p-image-preview-indicator {\n  background-color: transparent;\n  color: #f8f9fa;\n  transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;\n}\n\n.p-image-preview-container:hover > .p-image-preview-indicator {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n\n.p-image-toolbar {\n  padding: 1rem;\n}\n\n.p-image-action.p-link {\n  color: #f8f9fa;\n  background-color: transparent;\n  width: 3rem;\n  height: 3rem;\n  border-radius: 50%;\n  transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;\n  margin-right: 0.5rem;\n}\n\n.p-image-action.p-link:last-child {\n  margin-right: 0;\n}\n\n.p-image-action.p-link:hover {\n  color: #f8f9fa;\n  background-color: rgba(255, 255, 255, 0.1);\n}\n\n.p-image-action.p-link i {\n  font-size: 1.5rem;\n}\n\n.p-avatar {\n  background-color: #dee2e6;\n  border-radius: 3px;\n}\n\n.p-avatar.p-avatar-lg {\n  width: 3rem;\n  height: 3rem;\n  font-size: 1.5rem;\n}\n\n.p-avatar.p-avatar-lg .p-avatar-icon {\n  font-size: 1.5rem;\n}\n\n.p-avatar.p-avatar-xl {\n  width: 4rem;\n  height: 4rem;\n  font-size: 2rem;\n}\n\n.p-avatar.p-avatar-xl .p-avatar-icon {\n  font-size: 2rem;\n}\n\n.p-avatar-group .p-avatar {\n  border: 2px solid #ffffff;\n}\n\n.p-badge {\n  background: #2196F3;\n  color: #ffffff;\n  font-size: 0.75rem;\n  font-weight: 700;\n  min-width: 1.5rem;\n  height: 1.5rem;\n  line-height: 1.5rem;\n}\n\n.p-badge.p-badge-secondary {\n  background-color: #607D8B;\n  color: #ffffff;\n}\n\n.p-badge.p-badge-success {\n  background-color: #689F38;\n  color: #ffffff;\n}\n\n.p-badge.p-badge-info {\n  background-color: #0288D1;\n  color: #ffffff;\n}\n\n.p-badge.p-badge-warning {\n  background-color: #FBC02D;\n  color: #212529;\n}\n\n.p-badge.p-badge-danger {\n  background-color: #D32F2F;\n  color: #ffffff;\n}\n\n.p-badge.p-badge-lg {\n  font-size: 1.125rem;\n  min-width: 2.25rem;\n  height: 2.25rem;\n  line-height: 2.25rem;\n}\n\n.p-badge.p-badge-xl {\n  font-size: 1.5rem;\n  min-width: 3rem;\n  height: 3rem;\n  line-height: 3rem;\n}\n\n.p-chip {\n  background-color: #dee2e6;\n  color: #495057;\n  border-radius: 16px;\n  padding: 0 0.5rem;\n}\n\n.p-chip .p-chip-text {\n  line-height: 1.5;\n  margin-top: 0.25rem;\n  margin-bottom: 0.25rem;\n}\n\n.p-chip .p-chip-icon {\n  margin-right: 0.5rem;\n}\n\n.p-chip img {\n  width: 2rem;\n  height: 2rem;\n  margin-left: -0.5rem;\n  margin-right: 0.5rem;\n}\n\n.p-chip .p-chip-remove-icon {\n  margin-left: 0.5rem;\n  border-radius: 3px;\n  transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;\n}\n\n.p-chip .p-chip-remove-icon:focus {\n  outline: 0 none;\n  outline-offset: 0;\n  box-shadow: 0 0 0 0.2rem #a6d5fa;\n}\n\n.p-inplace .p-inplace-display {\n  padding: 0.5rem 0.5rem;\n  border-radius: 3px;\n  transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;\n}\n\n.p-inplace .p-inplace-display:not(.p-disabled):hover {\n  background: #e9ecef;\n  color: #495057;\n}\n\n.p-inplace .p-inplace-display:focus {\n  outline: 0 none;\n  outline-offset: 0;\n  box-shadow: 0 0 0 0.2rem #a6d5fa;\n}\n\n.p-progressbar {\n  border: 0 none;\n  height: 1.5rem;\n  background: #dee2e6;\n  border-radius: 3px;\n}\n\n.p-progressbar .p-progressbar-value {\n  border: 0 none;\n  margin: 0;\n  background: #2196F3;\n}\n\n.p-progressbar .p-progressbar-label {\n  color: #ffffff;\n  line-height: 1.5rem;\n}\n\n.p-scrolltop {\n  width: 3rem;\n  height: 3rem;\n  border-radius: 50%;\n  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);\n  transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;\n}\n\n.p-scrolltop.p-link {\n  background: rgba(0, 0, 0, 0.7);\n}\n\n.p-scrolltop.p-link:hover {\n  background: rgba(0, 0, 0, 0.8);\n}\n\n.p-scrolltop .p-scrolltop-icon {\n  font-size: 1.5rem;\n  color: #f8f9fa;\n}\n\n.p-skeleton {\n  background-color: #e9ecef;\n  border-radius: 3px;\n}\n\n.p-skeleton:after {\n  background: linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0));\n}\n\n.p-tag {\n  background: #2196F3;\n  color: #ffffff;\n  font-size: 0.75rem;\n  font-weight: 700;\n  padding: 0.25rem 0.4rem;\n  border-radius: 3px;\n}\n\n.p-tag.p-tag-success {\n  background-color: #689F38;\n  color: #ffffff;\n}\n\n.p-tag.p-tag-info {\n  background-color: #0288D1;\n  color: #ffffff;\n}\n\n.p-tag.p-tag-warning {\n  background-color: #FBC02D;\n  color: #212529;\n}\n\n.p-tag.p-tag-danger {\n  background-color: #D32F2F;\n  color: #ffffff;\n}\n\n.p-tag .p-tag-icon {\n  margin-right: 0.25rem;\n  font-size: 0.75rem;\n}\n\n.p-terminal {\n  background: #ffffff;\n  color: #495057;\n  border: 1px solid #dee2e6;\n  padding: 1rem;\n}\n\n.p-terminal .p-terminal-input {\n  font-size: 1rem;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n}\n\n/* Customizations to the designer theme should be defined here */\n\n.p-carousel .p-carousel-indicators .p-carousel-indicator.p-highlight button {\n  background-color: #2196F3;\n}\n\n.p-galleria .p-galleria-indicators .p-galleria-indicator.p-highlight button {\n  background-color: #2196F3;\n}\n\n.p-datatable .p-datatable-tbody > tr.p-datatable-dragpoint-top > td {\n  box-shadow: inset 0 2px 0 0 #2196F3;\n}\n\n.p-datatable .p-datatable-tbody > tr.p-datatable-dragpoint-bottom > td {\n  box-shadow: inset 0 -2px 0 0 #2196F3;\n}\n";
}


// --------------------
// Request: /node_modules/primevue/resources/primevue.css
// Parents: 
// - /@id/__x00__virtual:C:/DEV/VUE/yes4nuxt/.nuxt/css.mjs ($id_a565eb3a)
// Dependencies: 

// --------------------
const $id_736dcf3c = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".p-component, .p-component * {\n    box-sizing: border-box;\n}\n\n.p-hidden {\n    display: none;\n}\n\n.p-hidden-space {\n    visibility: hidden;\n}\n\n.p-hidden-accessible {\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    margin: -1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    width: 1px;\n}\n\n.p-hidden-accessible input,\n.p-hidden-accessible select {\n    transform: scale(0);\n}\n\n.p-reset {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    outline: 0;\n    text-decoration: none;\n    font-size: 100%;\n    list-style: none;\n}\n\n.p-disabled, .p-disabled * {\n    cursor: default !important;\n    pointer-events: none;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n}\n\n.p-component-overlay {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n}\n\n.p-overflow-hidden {\n    overflow: hidden;\n}\n\n.p-unselectable-text {\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n}\n\n.p-scrollbar-measure {\n    width: 100px;\n    height: 100px;\n    overflow: scroll;\n    position: absolute;\n    top: -9999px;\n}\n\n@-webkit-keyframes p-fadein {\n  0%   { opacity: 0; }\n  100% { opacity: 1; }\n}\n\n@keyframes p-fadein {\n  0%   { opacity: 0; }\n  100% { opacity: 1; }\n}\n\ninput[type=\"button\"],\ninput[type=\"submit\"],\ninput[type=\"reset\"],\ninput[type=\"file\"]::-webkit-file-upload-button,\nbutton {\n    border-radius: 0;\n}\n\n.p-link {\n\ttext-align: left;\n\tbackground-color: transparent;\n\tmargin: 0;\n\tpadding: 0;\n\tborder: none;\n    cursor: pointer;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n}\n\n.p-link:disabled {\n\tcursor: default;\n}\n\n/* Non vue overlay animations */\n\n.p-connected-overlay {\n    opacity: 0;\n    transform: scaleY(0.8);\n    transition: transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1);\n}\n\n.p-connected-overlay-visible {\n    opacity: 1;\n    transform: scaleY(1);\n}\n\n.p-connected-overlay-hidden {\n    opacity: 0;\n    transform: scaleY(1);\n    transition: opacity .1s linear;\n}\n\n/* Vue based overlay animations */\n\n.p-connected-overlay-enter-from {\n    opacity: 0;\n    transform: scaleY(0.8);\n}\n\n.p-connected-overlay-leave-to {\n    opacity: 0;\n}\n\n.p-connected-overlay-enter-active {\n    transition: transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1);\n}\n\n.p-connected-overlay-leave-active {\n    transition: opacity .1s linear;\n}\n\n/* Toggleable Content */\n\n.p-toggleable-content-enter-from,\n.p-toggleable-content-leave-to {\n    max-height: 0;\n}\n\n.p-toggleable-content-enter-to,\n.p-toggleable-content-leave-from {\n    max-height: 1000px;\n}\n\n.p-toggleable-content-leave-active {\n    overflow: hidden;\n    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);\n}\n\n.p-toggleable-content-enter-active {\n    overflow: hidden;\n    transition: max-height 1s ease-in-out;\n}\n\n.p-sr-only {\n    border: 0;\n    clip: rect(1px, 1px, 1px, 1px);\n    -webkit-clip-path: inset(50%);\n            clip-path: inset(50%);\n    height: 1px;\n    margin: -1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    width: 1px;\n    word-wrap: normal !important;\n}\n\n.p-badge {\n    display: inline-block;\n    border-radius: 10px;\n    text-align: center;\n    padding: 0 .5rem;\n}\n\n.p-overlay-badge {\n    position: relative;\n}\n\n.p-overlay-badge .p-badge {\n    position: absolute;\n    top: 0;\n    right: 0;\n    transform: translate(50%,-50%);\n    transform-origin: 100% 0;\n    margin: 0;\n}\n\n.p-badge-dot {\n    width: .5rem;\n    min-width: .5rem;\n    height: .5rem;\n    border-radius: 50%;\n    padding: 0;\n}\n\n.p-badge-no-gutter {\n    padding: 0;\n    border-radius: 50%;\n}\n\n.p-button {\n    margin: 0;\n    display: inline-flex;\n    cursor: pointer;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    align-items: center;\n    vertical-align: bottom;\n    text-align: center;\n    overflow: hidden;\n    position: relative;\n}\n\n.p-button-label {\n    flex: 1 1 auto;\n}\n\n.p-button-icon-right {\n    order: 1;\n}\n\n.p-button:disabled {\n    cursor: default;\n}\n\n.p-button-icon-only {\n    justify-content: center;\n}\n\n.p-button-icon-only .p-button-label {\n    visibility: hidden;\n    width: 0;\n    flex: 0 0 auto;\n}\n\n.p-button-vertical {\n    flex-direction: column;\n}\n\n.p-button-icon-bottom {\n    order: 2;\n}\n\n.p-buttonset .p-button {\n    margin: 0;\n}\n\n.p-buttonset .p-button:not(:last-child) {\n    border-right: 0 none;\n}\n\n.p-buttonset .p-button:not(:first-of-type):not(:last-of-type) {\n    border-radius: 0;\n}\n\n.p-buttonset .p-button:first-of-type {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n}\n\n.p-buttonset .p-button:last-of-type {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n}\n\n.p-buttonset .p-button:focus {\n    position: relative;\n    z-index: 1;\n}\n\n.p-button-label {\n    transition: all .2s;\n}\n\n.p-checkbox {\n    display: inline-flex;\n    cursor: pointer;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    vertical-align: bottom;\n    position: relative;\n}\n\n.p-checkbox-box {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.p-colorpicker-panel .p-colorpicker-color {\n     background: transparent url(\"/_nuxt/node_modules/primevue/resources/images/color.png\") no-repeat left top; \n}\n\n.p-colorpicker-panel .p-colorpicker-hue {\n    background: transparent url(\"/_nuxt/node_modules/primevue/resources/images/hue.png\") no-repeat left top; \n}\n\n.p-inputtext {\n    margin: 0;\n}\n\n.p-fluid .p-inputtext {\n    width: 100%;\n}\n\n/* InputGroup */\n\n.p-inputgroup {\n    display: flex;\n    align-items: stretch;\n    width: 100%;\n}\n\n.p-inputgroup-addon {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.p-inputgroup .p-float-label {\n    display: flex;\n    align-items: stretch;\n    width: 100%;\n}\n\n.p-inputgroup .p-inputtext,\n.p-fluid .p-inputgroup .p-inputtext,\n.p-inputgroup .p-inputwrapper,\n.p-fluid .p-inputgroup .p-input {\n    flex: 1 1 auto;\n    width: 1%;\n}\n\n/* Floating Label */\n\n.p-float-label {\n    display: block;\n    position: relative; \n}\n\n.p-float-label label {\n    position: absolute;\n    pointer-events: none;\n    top: 50%;\n    margin-top: -.5rem;\n    transition-property: all;\n    transition-timing-function: ease;\n    line-height: 1;\n}\n\n.p-float-label textarea ~ label {\n    top: 1rem;\n}\n\n.p-float-label input:focus ~ label,\n.p-float-label input.p-filled ~ label,\n.p-float-label textarea:focus ~ label,\n.p-float-label textarea.p-filled ~ label,\n.p-float-label .p-inputwrapper-focus ~ label,\n.p-float-label .p-inputwrapper-filled ~ label {\n    top: -.75rem;\n    font-size: 12px;\n}\n\n.p-float-label .input:-webkit-autofill ~ label {\n    top: -20px;\n    font-size: 12px;\n}\n\n.p-input-icon-left,\n.p-input-icon-right {\n    position: relative;\n    display: inline-block;\n}\n\n.p-input-icon-left > i,\n.p-input-icon-right > i {\n    position: absolute;\n    top: 50%;\n    margin-top: -.5rem;\n}\n\n.p-fluid .p-input-icon-left,\n.p-fluid .p-input-icon-right {\n    display: block;\n    width: 100%;\n}\n\n.p-radiobutton {\n    display: inline-flex;\n    cursor: pointer;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    vertical-align: bottom;\n}\n\n.p-radiobutton-box {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.p-radiobutton-icon {\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden;\n    transform: translateZ(0) scale(.1);\n    border-radius: 50%;\n    visibility: hidden;\n}\n\n.p-radiobutton-box.p-highlight .p-radiobutton-icon {\n    transform: translateZ(0) scale(1.0, 1.0);\n    visibility: visible;\n}\n\n.p-ripple {\n    overflow: hidden;\n    position: relative;\n}\n\n.p-ink {\n    display: block;\n    position: absolute;\n    background: rgba(255, 255, 255, 0.5);\n    border-radius: 100%;\n    transform: scale(0);\n}\n\n.p-ink-active {\n    -webkit-animation: ripple 0.4s linear;\n            animation: ripple 0.4s linear;\n}\n\n.p-ripple-disabled .p-ink {\n    display: none !important;\n}\n\n@-webkit-keyframes ripple {  \n    100% {\n        opacity: 0;\n        transform: scale(2.5);\n    }\n}\n\n@keyframes ripple {  \n    100% {\n        opacity: 0;\n        transform: scale(2.5);\n    }\n}\n\n.p-tooltip {\n    position:absolute;\n    display:none;\n    padding: .25em .5rem;\n    max-width: 12.5rem;\n}\n\n.p-tooltip.p-tooltip-right,\n.p-tooltip.p-tooltip-left {\n    padding: 0 .25rem;\n}\n\n.p-tooltip.p-tooltip-top,\n.p-tooltip.p-tooltip-bottom {\n    padding:.25em 0;\n}\n\n.p-tooltip .p-tooltip-text {\n   white-space: pre-line;\n   word-break: break-word;\n}\n\n.p-tooltip-arrow {\n    position: absolute;\n    width: 0;\n    height: 0;\n    border-color: transparent;\n    border-style: solid;\n}\n\n.p-tooltip-right .p-tooltip-arrow {\n    top: 50%;\n    left: 0;\n    margin-top: -.25rem;\n    border-width: .25em .25em .25em 0;\n}\n\n.p-tooltip-left .p-tooltip-arrow {\n    top: 50%;\n    right: 0;\n    margin-top: -.25rem;\n    border-width: .25em 0 .25em .25rem;\n}\n\n.p-tooltip.p-tooltip-top {\n    padding: .25em 0;\n}\n\n.p-tooltip-top .p-tooltip-arrow {\n    bottom: 0;\n    left: 50%;\n    margin-left: -.25rem;\n    border-width: .25em .25em 0;\n}\n\n.p-tooltip-bottom .p-tooltip-arrow {\n    top: 0;\n    left: 50%;\n    margin-left: -.25rem;\n    border-width: 0 .25em .25rem;\n}";
}


// --------------------
// Request: /node_modules/primeicons/primeicons.css
// Parents: 
// - /@id/__x00__virtual:C:/DEV/VUE/yes4nuxt/.nuxt/css.mjs ($id_a565eb3a)
// Dependencies: 

// --------------------
const $id_f890f676 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "@font-face {\n    font-family: 'primeicons';\n    font-display: block;\n    src: url('/_nuxt/node_modules/primeicons/fonts/primeicons.eot');\n    src: url('/_nuxt/node_modules/primeicons/fonts/primeicons.eot?#iefix') format('embedded-opentype'), url('/_nuxt/node_modules/primeicons/fonts/primeicons.ttf') format('truetype'), url('/_nuxt/node_modules/primeicons/fonts/primeicons.woff') format('woff'), url('/_nuxt/node_modules/primeicons/fonts/primeicons.svg?#primeicons') format('svg');\n    font-weight: normal;\n    font-style: normal;\n}\n\n.pi {\n    font-family: 'primeicons';\n    speak: none;\n    font-style: normal;\n    font-weight: normal;\n    font-variant: normal;\n    text-transform: none;\n    line-height: 1;\n    display: inline-block;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n\n.pi:before {\n    --webkit-backface-visibility:hidden;\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n}\n\n.pi-fw {\n    width: 1.28571429em;\n    text-align: center;\n}\n\n.pi-spin {\n    -webkit-animation: fa-spin 2s infinite linear;\n    animation: fa-spin 2s infinite linear;\n}\n\n@-webkit-keyframes fa-spin {\n    0% {\n        transform: rotate(0deg);\n    }\n    100% {\n        transform: rotate(359deg);\n    }\n}\n\n@keyframes fa-spin {\n    0% {\n        transform: rotate(0deg);\n    }\n    100% {\n        transform: rotate(359deg);\n    }\n}\n\n.pi-sort-alt-slash:before {\n    content: \"\\e9ee\";\n}\n\n.pi-arrows-h:before {\n    content: \"\\e9ec\";\n}\n\n.pi-arrows-v:before {\n    content: \"\\e9ed\";\n}\n\n.pi-pound:before {\n    content: \"\\e9eb\";\n}\n\n.pi-prime:before {\n    content: \"\\e9ea\";\n}\n\n.pi-chart-pie:before {\n    content: \"\\e9e9\";\n}\n\n.pi-reddit:before {\n    content: \"\\e9e8\";\n}\n\n.pi-code:before {\n    content: \"\\e9e7\";\n}\n\n.pi-sync:before {\n    content: \"\\e9e6\";\n}\n\n.pi-shopping-bag:before {\n    content: \"\\e9e5\";\n}\n\n.pi-server:before {\n    content: \"\\e9e4\";\n}\n\n.pi-database:before {\n    content: \"\\e9e3\";\n}\n\n.pi-hashtag:before {\n    content: \"\\e9e2\";\n}\n\n.pi-bookmark-fill:before {\n    content: \"\\e9df\";\n}\n\n.pi-filter-fill:before {\n    content: \"\\e9e0\";\n}\n\n.pi-heart-fill:before {\n    content: \"\\e9e1\";\n}\n\n.pi-flag-fill:before {\n    content: \"\\e9de\";\n}\n\n.pi-circle:before {\n    content: \"\\e9dc\";\n}\n\n.pi-circle-fill:before {\n    content: \"\\e9dd\";\n}\n\n.pi-bolt:before {\n    content: \"\\e9db\";\n}\n\n.pi-history:before {\n    content: \"\\e9da\";\n}\n\n.pi-box:before {\n    content: \"\\e9d9\";\n}\n\n.pi-at:before {\n    content: \"\\e9d8\";\n}\n\n.pi-arrow-up-right:before {\n    content: \"\\e9d4\";\n}\n\n.pi-arrow-up-left:before {\n    content: \"\\e9d5\";\n}\n\n.pi-arrow-down-left:before {\n    content: \"\\e9d6\";\n}\n\n.pi-arrow-down-right:before {\n    content: \"\\e9d7\";\n}\n\n.pi-telegram:before {\n    content: \"\\e9d3\";\n}\n\n.pi-stop-circle:before {\n    content: \"\\e9d2\";\n}\n\n.pi-stop:before {\n    content: \"\\e9d1\";\n}\n\n.pi-whatsapp:before {\n    content: \"\\e9d0\";\n}\n\n.pi-building:before {\n    content: \"\\e9cf\";\n}\n\n.pi-qrcode:before {\n    content: \"\\e9ce\";\n}\n\n.pi-car:before {\n    content: \"\\e9cd\";\n}\n\n.pi-instagram:before {\n    content: \"\\e9cc\";\n}\n\n.pi-linkedin:before {\n    content: \"\\e9cb\";\n}\n\n.pi-send:before {\n    content: \"\\e9ca\";\n}\n\n.pi-slack:before {\n    content: \"\\e9c9\";\n}\n\n.pi-sun:before {\n    content: \"\\e9c8\";\n}\n\n.pi-moon:before {\n    content: \"\\e9c7\";\n}\n\n.pi-vimeo:before {\n    content: \"\\e9c6\";\n}\n\n.pi-youtube:before {\n    content: \"\\e9c5\";\n}\n\n.pi-flag:before {\n    content: \"\\e9c4\";\n}\n\n.pi-wallet:before {\n    content: \"\\e9c3\";\n}\n\n.pi-map:before {\n    content: \"\\e9c2\";\n}\n\n.pi-link:before {\n    content: \"\\e9c1\";\n}\n\n.pi-credit-card:before {\n    content: \"\\e9bf\";\n}\n\n.pi-discord:before {\n    content: \"\\e9c0\";\n}\n\n.pi-percentage:before {\n    content: \"\\e9be\";\n}\n\n.pi-euro:before {\n    content: \"\\e9bd\";\n}\n\n.pi-book:before {\n    content: \"\\e9ba\";\n}\n\n.pi-shield:before {\n    content: \"\\e9b9\";\n}\n\n.pi-paypal:before {\n    content: \"\\e9bb\";\n}\n\n.pi-amazon:before {\n    content: \"\\e9bc\";\n}\n\n.pi-phone:before {\n    content: \"\\e9b8\";\n}\n\n.pi-filter-slash:before {\n    content: \"\\e9b7\";\n}\n\n.pi-facebook:before {\n    content: \"\\e9b4\";\n}\n\n.pi-github:before {\n    content: \"\\e9b5\";\n}\n\n.pi-twitter:before {\n    content: \"\\e9b6\";\n}\n\n.pi-step-backward-alt:before {\n    content: \"\\e9ac\";\n}\n\n.pi-step-forward-alt:before {\n    content: \"\\e9ad\";\n}\n\n.pi-forward:before {\n    content: \"\\e9ae\";\n}\n\n.pi-backward:before {\n    content: \"\\e9af\";\n}\n\n.pi-fast-backward:before {\n    content: \"\\e9b0\";\n}\n\n.pi-fast-forward:before {\n    content: \"\\e9b1\";\n}\n\n.pi-pause:before {\n    content: \"\\e9b2\";\n}\n\n.pi-play:before {\n    content: \"\\e9b3\";\n}\n\n.pi-compass:before {\n    content: \"\\e9ab\";\n}\n\n.pi-id-card:before {\n    content: \"\\e9aa\";\n}\n\n.pi-ticket:before {\n    content: \"\\e9a9\";\n}\n\n.pi-file-o:before {\n    content: \"\\e9a8\";\n}\n\n.pi-reply:before {\n    content: \"\\e9a7\";\n}\n\n.pi-directions-alt:before {\n    content: \"\\e9a5\";\n}\n\n.pi-directions:before {\n    content: \"\\e9a6\";\n}\n\n.pi-thumbs-up:before {\n    content: \"\\e9a3\";\n}\n\n.pi-thumbs-down:before {\n    content: \"\\e9a4\";\n}\n\n.pi-sort-numeric-down-alt:before {\n    content: \"\\e996\";\n}\n\n.pi-sort-numeric-up-alt:before {\n    content: \"\\e997\";\n}\n\n.pi-sort-alpha-down-alt:before {\n    content: \"\\e998\";\n}\n\n.pi-sort-alpha-up-alt:before {\n    content: \"\\e999\";\n}\n\n.pi-sort-numeric-down:before {\n    content: \"\\e99a\";\n}\n\n.pi-sort-numeric-up:before {\n    content: \"\\e99b\";\n}\n\n.pi-sort-alpha-down:before {\n    content: \"\\e99c\";\n}\n\n.pi-sort-alpha-up:before {\n    content: \"\\e99d\";\n}\n\n.pi-sort-alt:before {\n    content: \"\\e99e\";\n}\n\n.pi-sort-amount-up:before {\n    content: \"\\e99f\";\n}\n\n.pi-sort-amount-down:before {\n    content: \"\\e9a0\";\n}\n\n.pi-sort-amount-down-alt:before {\n    content: \"\\e9a1\";\n}\n\n.pi-sort-amount-up-alt:before {\n    content: \"\\e9a2\";\n}\n\n.pi-palette:before {\n    content: \"\\e995\";\n}\n\n.pi-undo:before {\n    content: \"\\e994\";\n}\n\n.pi-desktop:before {\n    content: \"\\e993\";\n}\n\n.pi-sliders-v:before {\n    content: \"\\e991\";\n}\n\n.pi-sliders-h:before {\n    content: \"\\e992\";\n}\n\n.pi-search-plus:before {\n    content: \"\\e98f\";\n}\n\n.pi-search-minus:before {\n    content: \"\\e990\";\n}\n\n.pi-file-excel:before {\n    content: \"\\e98e\";\n}\n\n.pi-file-pdf:before {\n    content: \"\\e98d\";\n}\n\n.pi-check-square:before {\n    content: \"\\e98c\";\n}\n\n.pi-chart-line:before {\n    content: \"\\e98b\";\n}\n\n.pi-user-edit:before {\n    content: \"\\e98a\";\n}\n\n.pi-exclamation-circle:before {\n    content: \"\\e989\";\n}\n\n.pi-android:before {\n    content: \"\\e985\";\n}\n\n.pi-google:before {\n    content: \"\\e986\";\n}\n\n.pi-apple:before {\n    content: \"\\e987\";\n}\n\n.pi-microsoft:before {\n    content: \"\\e988\";\n}\n\n.pi-heart:before {\n    content: \"\\e984\";\n}\n\n.pi-mobile:before {\n    content: \"\\e982\";\n}\n\n.pi-tablet:before {\n    content: \"\\e983\";\n}\n\n.pi-key:before {\n    content: \"\\e981\";\n}\n\n.pi-shopping-cart:before {\n    content: \"\\e980\";\n}\n\n.pi-comments:before {\n    content: \"\\e97e\";\n}\n\n.pi-comment:before {\n    content: \"\\e97f\";\n}\n\n.pi-briefcase:before {\n    content: \"\\e97d\";\n}\n\n.pi-bell:before {\n    content: \"\\e97c\";\n}\n\n.pi-paperclip:before {\n    content: \"\\e97b\";\n}\n\n.pi-share-alt:before {\n    content: \"\\e97a\";\n}\n\n.pi-envelope:before {\n    content: \"\\e979\";\n}\n\n.pi-volume-down:before {\n    content: \"\\e976\";\n}\n\n.pi-volume-up:before {\n    content: \"\\e977\";\n}\n\n.pi-volume-off:before {\n    content: \"\\e978\";\n}\n\n.pi-eject:before {\n    content: \"\\e975\";\n}\n\n.pi-money-bill:before {\n    content: \"\\e974\";\n}\n\n.pi-images:before {\n    content: \"\\e973\";\n}\n\n.pi-image:before {\n    content: \"\\e972\";\n}\n\n.pi-sign-in:before {\n    content: \"\\e970\";\n}\n\n.pi-sign-out:before {\n    content: \"\\e971\";\n}\n\n.pi-wifi:before {\n    content: \"\\e96f\";\n}\n\n.pi-sitemap:before {\n    content: \"\\e96e\";\n}\n\n.pi-chart-bar:before {\n    content: \"\\e96d\";\n}\n\n.pi-camera:before {\n    content: \"\\e96c\";\n}\n\n.pi-dollar:before {\n    content: \"\\e96b\";\n}\n\n.pi-lock-open:before {\n    content: \"\\e96a\";\n}\n\n.pi-table:before {\n    content: \"\\e969\";\n}\n\n.pi-map-marker:before {\n    content: \"\\e968\";\n}\n\n.pi-list:before {\n    content: \"\\e967\";\n}\n\n.pi-eye-slash:before {\n    content: \"\\e965\";\n}\n\n.pi-eye:before {\n    content: \"\\e966\";\n}\n\n.pi-folder-open:before {\n    content: \"\\e964\";\n}\n\n.pi-folder:before {\n    content: \"\\e963\";\n}\n\n.pi-video:before {\n    content: \"\\e962\";\n}\n\n.pi-inbox:before {\n    content: \"\\e961\";\n}\n\n.pi-lock:before {\n    content: \"\\e95f\";\n}\n\n.pi-unlock:before {\n    content: \"\\e960\";\n}\n\n.pi-tags:before {\n    content: \"\\e95d\";\n}\n\n.pi-tag:before {\n    content: \"\\e95e\";\n}\n\n.pi-power-off:before {\n    content: \"\\e95c\";\n}\n\n.pi-save:before {\n    content: \"\\e95b\";\n}\n\n.pi-question-circle:before {\n    content: \"\\e959\";\n}\n\n.pi-question:before {\n    content: \"\\e95a\";\n}\n\n.pi-copy:before {\n    content: \"\\e957\";\n}\n\n.pi-file:before {\n    content: \"\\e958\";\n}\n\n.pi-clone:before {\n    content: \"\\e955\";\n}\n\n.pi-calendar-times:before {\n    content: \"\\e952\";\n}\n\n.pi-calendar-minus:before {\n    content: \"\\e953\";\n}\n\n.pi-calendar-plus:before {\n    content: \"\\e954\";\n}\n\n.pi-ellipsis-v:before {\n    content: \"\\e950\";\n}\n\n.pi-ellipsis-h:before {\n    content: \"\\e951\";\n}\n\n.pi-bookmark:before {\n    content: \"\\e94e\";\n}\n\n.pi-globe:before {\n    content: \"\\e94f\";\n}\n\n.pi-replay:before {\n    content: \"\\e94d\";\n}\n\n.pi-filter:before {\n    content: \"\\e94c\";\n}\n\n.pi-print:before {\n    content: \"\\e94b\";\n}\n\n.pi-align-right:before {\n    content: \"\\e946\";\n}\n\n.pi-align-left:before {\n    content: \"\\e947\";\n}\n\n.pi-align-center:before {\n    content: \"\\e948\";\n}\n\n.pi-align-justify:before {\n    content: \"\\e949\";\n}\n\n.pi-cog:before {\n    content: \"\\e94a\";\n}\n\n.pi-cloud-download:before {\n    content: \"\\e943\";\n}\n\n.pi-cloud-upload:before {\n    content: \"\\e944\";\n}\n\n.pi-cloud:before {\n    content: \"\\e945\";\n}\n\n.pi-pencil:before {\n    content: \"\\e942\";\n}\n\n.pi-users:before {\n    content: \"\\e941\";\n}\n\n.pi-clock:before {\n    content: \"\\e940\";\n}\n\n.pi-user-minus:before {\n    content: \"\\e93e\";\n}\n\n.pi-user-plus:before {\n    content: \"\\e93f\";\n}\n\n.pi-trash:before {\n    content: \"\\e93d\";\n}\n\n.pi-external-link:before {\n    content: \"\\e93c\";\n}\n\n.pi-window-maximize:before {\n    content: \"\\e93b\";\n}\n\n.pi-window-minimize:before {\n    content: \"\\e93a\";\n}\n\n.pi-refresh:before {\n    content: \"\\e938\";\n}\n\n.pi-user:before {\n    content: \"\\e939\";\n}\n\n.pi-exclamation-triangle:before {\n    content: \"\\e922\";\n}\n\n.pi-calendar:before {\n    content: \"\\e927\";\n}\n\n.pi-chevron-circle-left:before {\n    content: \"\\e928\";\n}\n\n.pi-chevron-circle-down:before {\n    content: \"\\e929\";\n}\n\n.pi-chevron-circle-right:before {\n    content: \"\\e92a\";\n}\n\n.pi-chevron-circle-up:before {\n    content: \"\\e92b\";\n}\n\n.pi-angle-double-down:before {\n    content: \"\\e92c\";\n}\n\n.pi-angle-double-left:before {\n    content: \"\\e92d\";\n}\n\n.pi-angle-double-right:before {\n    content: \"\\e92e\";\n}\n\n.pi-angle-double-up:before {\n    content: \"\\e92f\";\n}\n\n.pi-angle-down:before {\n    content: \"\\e930\";\n}\n\n.pi-angle-left:before {\n    content: \"\\e931\";\n}\n\n.pi-angle-right:before {\n    content: \"\\e932\";\n}\n\n.pi-angle-up:before {\n    content: \"\\e933\";\n}\n\n.pi-upload:before {\n    content: \"\\e934\";\n}\n\n.pi-download:before {\n    content: \"\\e956\";\n}\n\n.pi-ban:before {\n    content: \"\\e935\";\n}\n\n.pi-star-fill:before {\n    content: \"\\e936\";\n}\n\n.pi-star:before {\n    content: \"\\e937\";\n}\n\n.pi-chevron-left:before {\n    content: \"\\e900\";\n}\n\n.pi-chevron-right:before {\n    content: \"\\e901\";\n}\n\n.pi-chevron-down:before {\n    content: \"\\e902\";\n}\n\n.pi-chevron-up:before {\n    content: \"\\e903\";\n}\n\n.pi-caret-left:before {\n    content: \"\\e904\";\n}\n\n.pi-caret-right:before {\n    content: \"\\e905\";\n}\n\n.pi-caret-down:before {\n    content: \"\\e906\";\n}\n\n.pi-caret-up:before {\n    content: \"\\e907\";\n}\n\n.pi-search:before {\n    content: \"\\e908\";\n}\n\n.pi-check:before {\n    content: \"\\e909\";\n}\n\n.pi-check-circle:before {\n    content: \"\\e90a\";\n}\n\n.pi-times:before {\n    content: \"\\e90b\";\n}\n\n.pi-times-circle:before {\n    content: \"\\e90c\";\n}\n\n.pi-plus:before {\n    content: \"\\e90d\";\n}\n\n.pi-plus-circle:before {\n    content: \"\\e90e\";\n}\n\n.pi-minus:before {\n    content: \"\\e90f\";\n}\n\n.pi-minus-circle:before {\n    content: \"\\e910\";\n}\n\n.pi-circle-on:before {\n    content: \"\\e911\";\n}\n\n.pi-circle-off:before {\n    content: \"\\e912\";\n}\n\n.pi-sort-down:before {\n    content: \"\\e913\";\n}\n\n.pi-sort-up:before {\n    content: \"\\e914\";\n}\n\n.pi-sort:before {\n    content: \"\\e915\";\n}\n\n.pi-step-backward:before {\n    content: \"\\e916\";\n}\n\n.pi-step-forward:before {\n    content: \"\\e917\";\n}\n\n.pi-th-large:before {\n    content: \"\\e918\";\n}\n\n.pi-arrow-down:before {\n    content: \"\\e919\";\n}\n\n.pi-arrow-left:before {\n    content: \"\\e91a\";\n}\n\n.pi-arrow-right:before {\n    content: \"\\e91b\";\n}\n\n.pi-arrow-up:before {\n    content: \"\\e91c\";\n}\n\n.pi-bars:before {\n    content: \"\\e91d\";\n}\n\n.pi-arrow-circle-down:before {\n    content: \"\\e91e\";\n}\n\n.pi-arrow-circle-left:before {\n    content: \"\\e91f\";\n}\n\n.pi-arrow-circle-right:before {\n    content: \"\\e920\";\n}\n\n.pi-arrow-circle-up:before {\n    content: \"\\e921\";\n}\n\n.pi-info:before {\n    content: \"\\e923\";\n}\n\n.pi-info-circle:before {\n    content: \"\\e924\";\n}\n\n.pi-home:before {\n    content: \"\\e925\";\n}\n\n.pi-spinner:before {\n    content: \"\\e926\";\n}\n";
}


// --------------------
// Request: /@id/__x00__virtual:C:/DEV/VUE/yes4nuxt/.nuxt/plugins/server.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/bootstrap.mjs ($id_fef466a9)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/plugins/preload.server.mjs ($id_b9f3c557)
// - /node_modules/nuxt3/dist/meta/runtime/lib/vueuse-head.plugin.mjs ($id_cbe5172d)
// - /node_modules/nuxt3/dist/meta/runtime/plugin.mjs ($id_9fd5f35e)
// - /node_modules/nuxt3/dist/pages/runtime/router.mjs ($id_a4d6cb5b)
// - /@id/__x00__virtual:C:/DEV/VUE/yes4nuxt/.nuxt/dist.plugin.d8412656.mjs ($id_052b8ccd)
// - /plugins/persistedstate.js ($id_88d211c2)
// - /plugins/primevue.ts ($id_934480b9)
// - /plugins/validate.js ($id_eb85e80e)
// - /node_modules/@nuxt/nitro/dist/runtime/app/nitro.client.mjs ($id_7b587af2)
// - /@id/__x00__virtual:C:/DEV/VUE/yes4nuxt/.nuxt/components.mjs ($id_5fe6b26c)
// --------------------
const $id_f92b9082 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/plugins/preload.server.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/meta/runtime/lib/vueuse-head.plugin.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/meta/runtime/plugin.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/pages/runtime/router.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/__x00__virtual:C:/DEV/VUE/yes4nuxt/.nuxt/dist.plugin.d8412656.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/plugins/persistedstate.js");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/plugins/primevue.ts");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/plugins/validate.js");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/@nuxt/nitro/dist/runtime/app/nitro.client.mjs");

const __vite_ssr_import_9__ = await __vite_ssr_import__("/@id/__x00__virtual:C:/DEV/VUE/yes4nuxt/.nuxt/components.mjs");

__vite_ssr_exports__.default = [
  __vite_ssr_import_0__.default,
  __vite_ssr_import_1__.default,
  __vite_ssr_import_2__.default,
  __vite_ssr_import_3__.default,
  __vite_ssr_import_4__.default,
  __vite_ssr_import_5__.default,
  __vite_ssr_import_6__.default,
  __vite_ssr_import_7__.default,
  __vite_ssr_import_8__.default,
  __vite_ssr_import_9__.default
];
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/plugins/preload.server.mjs
// Parents: 
// - /@id/__x00__virtual:C:/DEV/VUE/yes4nuxt/.nuxt/plugins/server.mjs ($id_f92b9082)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// --------------------
const $id_b9f3c557 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.mixin({
    beforeCreate() {
      const { _registeredComponents } = this.$nuxt.ssrContext;
      const { __moduleIdentifier } = this.$options;
      _registeredComponents.add(__moduleIdentifier);
    }
  });
});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/meta/runtime/lib/vueuse-head.plugin.mjs
// Parents: 
// - /@id/__x00__virtual:C:/DEV/VUE/yes4nuxt/.nuxt/plugins/server.mjs ($id_f92b9082)
// Dependencies: 
// - /node_modules/@vueuse/head/dist/index.mjs ($id_c032264e)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// --------------------
const $id_cbe5172d = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@vueuse/head/dist/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_2__.defineNuxtPlugin((nuxtApp) => {
  const head = __vite_ssr_import_0__.createHead();
  nuxtApp.vueApp.use(head);
  let headReady = false;
  nuxtApp.hooks.hookOnce("app:mounted", () => {
    __vite_ssr_import_1__.watchEffect(() => {
      head.updateDOM();
    });
    headReady = true;
  });
  nuxtApp._useMeta = (meta) => {
    const headObj = __vite_ssr_import_1__.ref(meta);
    head.addHeadObjs(headObj);
    if (true) {
      return;
    }
    if (headReady) {
      __vite_ssr_import_1__.watchEffect(() => {
        head.updateDOM();
      });
    }
    const vm = __vite_ssr_import_1__.getCurrentInstance();
    if (!vm) {
      return;
    }
    __vite_ssr_import_1__.onBeforeUnmount(() => {
      head.removeHeadObjs(headObj);
      head.updateDOM();
    });
  };
  if (true) {
    nuxtApp.ssrContext.renderMeta = () => __vite_ssr_import_0__.renderHeadToString(head);
  }
});
;
}


// --------------------
// Request: /node_modules/@vueuse/head/dist/index.mjs
// Parents: 
// - /node_modules/nuxt3/dist/meta/runtime/lib/vueuse-head.plugin.mjs ($id_cbe5172d)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_c032264e = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));

// src/index.ts
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


// src/constants.ts
var PROVIDE_KEY = `usehead`;
var HEAD_COUNT_KEY = `head:count`;
var HEAD_ATTRS_KEY = `data-head-attrs`;
var SELF_CLOSING_TAGS = ["meta", "link", "base"];

// src/create-element.ts
var createElement = (tag, attrs, document) => {
  const el = document.createElement(tag);
  for (const key of Object.keys(attrs)) {
    let value = attrs[key];
    if (key === "key" || value === false) {
      continue;
    }
    if (key === "children") {
      el.textContent = value;
    } else {
      el.setAttribute(key, value);
    }
  }
  return el;
};

// src/stringify-attrs.ts
var htmlEscape = (str) => str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
var stringifyAttrs = (attributes) => {
  const handledAttributes = [];
  for (let [key, value] of Object.entries(attributes)) {
    if (key === "children" || key === "key") {
      continue;
    }
    if (value === false || value == null) {
      continue;
    }
    let attribute = htmlEscape(key);
    if (value !== true) {
      attribute += `="${htmlEscape(String(value))}"`;
    }
    handledAttributes.push(attribute);
  }
  return handledAttributes.length > 0 ? " " + handledAttributes.join(" ") : "";
};

// src/utils.ts
function isEqualNode(oldTag, newTag) {
  if (oldTag instanceof HTMLElement && newTag instanceof HTMLElement) {
    const nonce = newTag.getAttribute("nonce");
    if (nonce && !oldTag.getAttribute("nonce")) {
      const cloneTag = newTag.cloneNode(true);
      cloneTag.setAttribute("nonce", "");
      cloneTag.nonce = nonce;
      return nonce === oldTag.nonce && oldTag.isEqualNode(cloneTag);
    }
  }
  return oldTag.isEqualNode(newTag);
}

// src/index.ts
var getTagKey = (props) => {
  const names = ["key", "id", "name", "property"];
  for (const n of names) {
    const value = typeof props.getAttribute === "function" ? props.hasAttribute(n) ? props.getAttribute(n) : void 0 : props[n];
    if (value !== void 0) {
      return { name: n, value };
    }
  }
};
var injectHead = () => {
  const head = __vite_ssr_import_0__.inject(PROVIDE_KEY);
  if (!head) {
    throw new Error(`You may forget to apply app.use(head)`);
  }
  return head;
};
var acceptFields = [
  "title",
  "meta",
  "link",
  "base",
  "style",
  "script",
  "htmlAttrs",
  "bodyAttrs"
];
var headObjToTags = (obj) => {
  const tags = [];
  for (const key of Object.keys(obj)) {
    if (obj[key] == null)
      continue;
    if (key === "title") {
      tags.push({ tag: key, props: { children: obj[key] } });
    } else if (key === "base") {
      tags.push({ tag: key, props: __spreadValues({ key: "default" }, obj[key]) });
    } else if (acceptFields.includes(key)) {
      const value = obj[key];
      if (Array.isArray(value)) {
        value.forEach((item) => {
          tags.push({ tag: key, props: item });
        });
      } else if (value) {
        tags.push({ tag: key, props: value });
      }
    }
  }
  return tags;
};
var setAttrs = (el, attrs) => {
  const existingAttrs = el.getAttribute(HEAD_ATTRS_KEY);
  if (existingAttrs) {
    for (const key of existingAttrs.split(",")) {
      if (!(key in attrs)) {
        el.removeAttribute(key);
      }
    }
  }
  const keys = [];
  for (const key in attrs) {
    const value = attrs[key];
    if (value == null)
      continue;
    if (value === false) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, value);
    }
    keys.push(key);
  }
  if (keys.length) {
    el.setAttribute(HEAD_ATTRS_KEY, keys.join(","));
  } else {
    el.removeAttribute(HEAD_ATTRS_KEY);
  }
};
var updateElements = (document = window.document, type, tags) => {
  var _a;
  const head = document.head;
  let headCountEl = head.querySelector(`meta[name="${HEAD_COUNT_KEY}"]`);
  const headCount = headCountEl ? Number(headCountEl.getAttribute("content")) : 0;
  const oldElements = [];
  if (headCountEl) {
    for (let i = 0, j = headCountEl.previousElementSibling; i < headCount; i++, j = (j == null ? void 0 : j.previousElementSibling) || null) {
      if (((_a = j == null ? void 0 : j.tagName) == null ? void 0 : _a.toLowerCase()) === type) {
        oldElements.push(j);
      }
    }
  } else {
    headCountEl = document.createElement("meta");
    headCountEl.setAttribute("name", HEAD_COUNT_KEY);
    headCountEl.setAttribute("content", "0");
    head.append(headCountEl);
  }
  let newElements = tags.map((tag) => createElement(tag.tag, tag.props, document));
  newElements = newElements.filter((newEl) => {
    for (let i = 0; i < oldElements.length; i++) {
      const oldEl = oldElements[i];
      if (isEqualNode(oldEl, newEl)) {
        oldElements.splice(i, 1);
        return false;
      }
    }
    return true;
  });
  oldElements.forEach((t) => {
    var _a2;
    return (_a2 = t.parentNode) == null ? void 0 : _a2.removeChild(t);
  });
  newElements.forEach((t) => {
    head.insertBefore(t, headCountEl);
  });
  headCountEl.setAttribute("content", "" + (headCount - oldElements.length + newElements.length));
};
var createHead = () => {
  let allHeadObjs = [];
  const head = {
    install(app) {
      app.config.globalProperties.$head = head;
      app.provide(PROVIDE_KEY, head);
    },
    get headTags() {
      const deduped = [];
      allHeadObjs.forEach((objs) => {
        const tags = headObjToTags(objs.value);
        tags.forEach((tag) => {
          if (tag.tag === "meta" || tag.tag === "base" || tag.tag === "script") {
            const key = getTagKey(tag.props);
            if (key) {
              let index = -1;
              for (let i = 0; i < deduped.length; i++) {
                const prev = deduped[i];
                const prevValue = prev.props[key.name];
                const nextValue = tag.props[key.name];
                if (prev.tag === tag.tag && prevValue === nextValue) {
                  index = i;
                  break;
                }
              }
              if (index !== -1) {
                deduped.splice(index, 1);
              }
            }
          }
          deduped.push(tag);
        });
      });
      return deduped;
    },
    addHeadObjs(objs) {
      allHeadObjs.push(objs);
    },
    removeHeadObjs(objs) {
      allHeadObjs = allHeadObjs.filter((_objs) => _objs !== objs);
    },
    updateDOM(document = window.document) {
      let title;
      let htmlAttrs = {};
      let bodyAttrs = {};
      const actualTags = {};
      for (const tag of head.headTags) {
        if (tag.tag === "title") {
          title = tag.props.children;
          continue;
        }
        if (tag.tag === "htmlAttrs") {
          Object.assign(htmlAttrs, tag.props);
          continue;
        }
        if (tag.tag === "bodyAttrs") {
          Object.assign(bodyAttrs, tag.props);
          continue;
        }
        actualTags[tag.tag] = actualTags[tag.tag] || [];
        actualTags[tag.tag].push(tag);
      }
      if (title !== void 0) {
        document.title = title;
      }
      setAttrs(document.documentElement, htmlAttrs);
      setAttrs(document.body, bodyAttrs);
      for (const name of Object.keys(actualTags)) {
        updateElements(document, name, actualTags[name]);
      }
    }
  };
  return head;
};
var IS_BROWSER = "undefined" !== "undefined";
var useHead = (obj) => {
  const headObj = __vite_ssr_import_0__.ref(obj);
  const head = injectHead();
  head.addHeadObjs(headObj);
  if (IS_BROWSER) {
    __vite_ssr_import_0__.watchEffect(() => {
      head.updateDOM();
    });
    __vite_ssr_import_0__.onBeforeUnmount(() => {
      head.removeHeadObjs(headObj);
      head.updateDOM();
    });
  }
};
var tagToString = (tag) => {
  let attrs = stringifyAttrs(tag.props);
  if (SELF_CLOSING_TAGS.includes(tag.tag)) {
    return `<${tag.tag}${attrs}>`;
  }
  return `<${tag.tag}${attrs}>${tag.props.children || ""}</${tag.tag}>`;
};
var renderHeadToString = (head) => {
  const tags = [];
  let titleTag = "";
  let htmlAttrs = {};
  let bodyAttrs = {};
  for (const tag of head.headTags) {
    if (tag.tag === "title") {
      titleTag = tagToString(tag);
    } else if (tag.tag === "htmlAttrs") {
      Object.assign(htmlAttrs, tag.props);
    } else if (tag.tag === "bodyAttrs") {
      Object.assign(bodyAttrs, tag.props);
    } else {
      tags.push(tagToString(tag));
    }
  }
  tags.push(`<meta name="${HEAD_COUNT_KEY}" content="${tags.length}">`);
  return {
    get headTags() {
      return titleTag + tags.join("");
    },
    get htmlAttrs() {
      return stringifyAttrs(__spreadProps(__spreadValues({}, htmlAttrs), {
        [HEAD_ATTRS_KEY]: Object.keys(htmlAttrs).join(",")
      }));
    },
    get bodyAttrs() {
      return stringifyAttrs(__spreadProps(__spreadValues({}, bodyAttrs), {
        [HEAD_ATTRS_KEY]: Object.keys(bodyAttrs).join(",")
      }));
    }
  };
};
var vnodesToHeadObj = (nodes) => {
  const obj = {
    title: void 0,
    htmlAttrs: void 0,
    bodyAttrs: void 0,
    base: void 0,
    meta: [],
    link: [],
    style: [],
    script: []
  };
  for (const node of nodes) {
    const type = node.type === "html" ? "htmlAttrs" : node.type === "body" ? "bodyAttrs" : node.type;
    if (typeof type !== "string" || !(type in obj))
      continue;
    const props = __spreadProps(__spreadValues({}, node.props), {
      children: Array.isArray(node.children) ? node.children[0].children : node.children
    });
    if (Array.isArray(obj[type])) {
      ;
      obj[type].push(props);
    } else if (type === "title") {
      obj.title = props.children;
    } else {
      ;
      obj[type] = props;
    }
  }
  return obj;
};
var Head = /* @__PURE__ */ __vite_ssr_import_0__.defineComponent({
  name: "Head",
  setup(_, { slots }) {
    const head = injectHead();
    let obj;
    __vite_ssr_import_0__.onBeforeUnmount(() => {
      if (obj) {
        head.removeHeadObjs(obj);
        head.updateDOM();
      }
    });
    return () => {
      __vite_ssr_import_0__.watchEffect(() => {
        if (!slots.default)
          return;
        if (obj) {
          head.removeHeadObjs(obj);
        }
        obj = __vite_ssr_import_0__.ref(vnodesToHeadObj(slots.default()));
        head.addHeadObjs(obj);
        if (IS_BROWSER) {
          head.updateDOM();
        }
      });
      return null;
    };
  }
});

Object.defineProperty(__vite_ssr_exports__, "Head", { enumerable: true, configurable: true, get(){ return Head }});
Object.defineProperty(__vite_ssr_exports__, "createHead", { enumerable: true, configurable: true, get(){ return createHead }});
Object.defineProperty(__vite_ssr_exports__, "injectHead", { enumerable: true, configurable: true, get(){ return injectHead }});
Object.defineProperty(__vite_ssr_exports__, "renderHeadToString", { enumerable: true, configurable: true, get(){ return renderHeadToString }});
Object.defineProperty(__vite_ssr_exports__, "useHead", { enumerable: true, configurable: true, get(){ return useHead }});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/meta/runtime/plugin.mjs
// Parents: 
// - /@id/__x00__virtual:C:/DEV/VUE/yes4nuxt/.nuxt/plugins/server.mjs ($id_f92b9082)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt3/dist/meta/runtime/components.mjs ($id_94744df3)
// - /node_modules/nuxt3/dist/meta/runtime/composables.mjs ($id_ca9295be)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// - /@id/__x00__virtual:C:/DEV/VUE/yes4nuxt/.nuxt/meta.config.mjs ($id_ca2a413a)
// --------------------
const $id_9fd5f35e = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/meta/runtime/components.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/meta/runtime/composables.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/__x00__virtual:C:/DEV/VUE/yes4nuxt/.nuxt/meta.config.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_3__.defineNuxtPlugin((nuxtApp) => {
  __vite_ssr_import_2__.useMeta(__vite_ssr_import_4__.default.globalMeta);
  nuxtApp.vueApp.mixin({
    [__vite_ssr_import_4__.default.mixinKey]() {
      const instance = __vite_ssr_import_0__.getCurrentInstance();
      const options = instance?.type || instance?.proxy?.$options;
      if (!options || !("head" in options)) {
        return;
      }
      const source = typeof options.head === "function" ? __vite_ssr_import_0__.computed(() => options.head(nuxtApp)) : options.head;
      __vite_ssr_import_2__.useMeta(source);
    }
  });
  for (const name in __vite_ssr_import_1__) {
    nuxtApp.vueApp.component(name, __vite_ssr_import_1__[name]);
  }
});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/meta/runtime/components.mjs
// Parents: 
// - /node_modules/nuxt3/dist/meta/runtime/plugin.mjs ($id_9fd5f35e)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt3/dist/meta/runtime/composables.mjs ($id_ca9295be)
// --------------------
const $id_94744df3 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/meta/runtime/composables.mjs");

const removeUndefinedProps = (props) => Object.fromEntries(Object.entries(props).filter(([, value]) => value !== void 0));
const setupForUseMeta = (metaFactory, renderChild) => (props, ctx) => {
  __vite_ssr_import_1__.useMeta(() => metaFactory({ ...removeUndefinedProps(props), ...ctx.attrs }, ctx));
  return () => renderChild ? ctx.slots.default?.() : null;
};
const globalProps = {
  accesskey: String,
  autocapitalize: String,
  autofocus: {
    type: Boolean,
    default: void 0
  },
  class: String,
  contenteditable: {
    type: Boolean,
    default: void 0
  },
  contextmenu: String,
  dir: String,
  draggable: {
    type: Boolean,
    default: void 0
  },
  enterkeyhint: String,
  exportparts: String,
  hidden: {
    type: Boolean,
    default: void 0
  },
  id: String,
  inputmode: String,
  is: String,
  itemid: String,
  itemprop: String,
  itemref: String,
  itemscope: String,
  itemtype: String,
  lang: String,
  nonce: String,
  part: String,
  slot: String,
  spellcheck: {
    type: Boolean,
    default: void 0
  },
  style: String,
  tabindex: String,
  title: String,
  translate: String
};
const Script = __vite_ssr_import_0__.defineComponent({
  name: "Script",
  props: {
    ...globalProps,
    async: Boolean,
    crossorigin: {
      type: [Boolean, String],
      default: void 0
    },
    defer: Boolean,
    integrity: String,
    nomodule: Boolean,
    nonce: String,
    referrerpolicy: String,
    src: String,
    type: String,
    charset: String,
    language: String
  },
  setup: setupForUseMeta((script) => ({
    script: [script]
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Script", { enumerable: true, configurable: true, get(){ return Script }});
const Link = __vite_ssr_import_0__.defineComponent({
  name: "Link",
  props: {
    ...globalProps,
    as: String,
    crossorigin: String,
    disabled: Boolean,
    href: String,
    hreflang: String,
    imagesizes: String,
    imagesrcset: String,
    integrity: String,
    media: String,
    prefetch: {
      type: Boolean,
      default: void 0
    },
    referrerpolicy: String,
    rel: String,
    sizes: String,
    title: String,
    type: String,
    methods: String,
    target: String
  },
  setup: setupForUseMeta((link) => ({
    link: [link]
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Link", { enumerable: true, configurable: true, get(){ return Link }});
const Base = __vite_ssr_import_0__.defineComponent({
  name: "Base",
  props: {
    ...globalProps,
    href: String,
    target: String
  },
  setup: setupForUseMeta((base) => ({
    base
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Base", { enumerable: true, configurable: true, get(){ return Base }});
const Title = __vite_ssr_import_0__.defineComponent({
  name: "Title",
  setup: setupForUseMeta((_, { slots }) => {
    const title = slots.default()?.[0]?.children || null;
    if (true && title && typeof title !== "string") {
      console.error("<Title> can only take a string in its default slot.");
    }
    return {
      title
    };
  })
});
Object.defineProperty(__vite_ssr_exports__, "Title", { enumerable: true, configurable: true, get(){ return Title }});
const Meta = __vite_ssr_import_0__.defineComponent({
  name: "Meta",
  props: {
    ...globalProps,
    charset: String,
    content: String,
    httpEquiv: String,
    key: String,
    name: String
  },
  setup: setupForUseMeta((meta) => ({
    meta: [meta]
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Meta", { enumerable: true, configurable: true, get(){ return Meta }});
const Style = __vite_ssr_import_0__.defineComponent({
  name: "Style",
  props: {
    ...globalProps,
    type: String,
    media: String,
    nonce: String,
    title: String,
    scoped: {
      type: Boolean,
      default: void 0
    }
  },
  setup: setupForUseMeta((props, { slots }) => {
    const style = { ...props };
    const textContent = slots.default?.()?.[0]?.children;
    if (textContent) {
      if (true && typeof textContent !== "string") {
        console.error("<Style> can only take a string in its default slot.");
      }
      style.children = textContent;
    }
    return {
      style: [style]
    };
  })
});
Object.defineProperty(__vite_ssr_exports__, "Style", { enumerable: true, configurable: true, get(){ return Style }});
const Head = __vite_ssr_import_0__.defineComponent({
  name: "Head",
  setup: (_props, ctx) => () => ctx.slots.default?.()
});
Object.defineProperty(__vite_ssr_exports__, "Head", { enumerable: true, configurable: true, get(){ return Head }});
const Html = __vite_ssr_import_0__.defineComponent({
  name: "Html",
  props: {
    ...globalProps,
    manifest: String,
    version: String,
    xmlns: String
  },
  setup: setupForUseMeta((htmlAttrs) => ({ htmlAttrs }), true)
});
Object.defineProperty(__vite_ssr_exports__, "Html", { enumerable: true, configurable: true, get(){ return Html }});
const Body = __vite_ssr_import_0__.defineComponent({
  name: "Body",
  props: globalProps,
  setup: setupForUseMeta((bodyAttrs) => ({ bodyAttrs }), true)
});
Object.defineProperty(__vite_ssr_exports__, "Body", { enumerable: true, configurable: true, get(){ return Body }});
;
}


// --------------------
// Request: /@id/__x00__virtual:C:/DEV/VUE/yes4nuxt/.nuxt/meta.config.mjs
// Parents: 
// - /node_modules/nuxt3/dist/meta/runtime/plugin.mjs ($id_9fd5f35e)
// Dependencies: 

// --------------------
const $id_ca2a413a = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = {"globalMeta":{"meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"}],"link":[{"rel":"stylesheet","href":"https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"}],"script":[{"src":"https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"}],"style":[]},"mixinKey":"created"};
}


// --------------------
// Request: /node_modules/nuxt3/dist/pages/runtime/router.mjs
// Parents: 
// - /@id/__x00__virtual:C:/DEV/VUE/yes4nuxt/.nuxt/plugins/server.mjs ($id_f92b9082)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue-router/dist/vue-router.cjs.js ($id_f9a4a698)
// - /node_modules/h3/dist/index.mjs ($id_57d7ded6)
// - /node_modules/nuxt3/dist/pages/runtime/page.mjs ($id_485c89bf)
// - /node_modules/nuxt3/dist/pages/runtime/layout.mjs ($id_9b68c93f)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// - /@id/__x00__virtual:C:/DEV/VUE/yes4nuxt/.nuxt/routes.mjs ($id_a67a8a7c)
// - /@id/__x00__virtual:C:/DEV/VUE/yes4nuxt/.nuxt/middleware.mjs ($id_163a7712)
// --------------------
const $id_a4d6cb5b = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue-router/dist/vue-router.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/h3/dist/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/pages/runtime/page.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/pages/runtime/layout.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/__x00__virtual:C:/DEV/VUE/yes4nuxt/.nuxt/routes.mjs");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/@id/__x00__virtual:C:/DEV/VUE/yes4nuxt/.nuxt/middleware.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_5__.defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("NuxtPage", __vite_ssr_import_3__.default);
  nuxtApp.vueApp.component("NuxtLayout", __vite_ssr_import_4__.default);
  nuxtApp.vueApp.component("NuxtLink", __vite_ssr_import_1__.RouterLink);
  nuxtApp.vueApp.component("NuxtNestedPage", __vite_ssr_import_3__.default);
  nuxtApp.vueApp.component("NuxtChild", __vite_ssr_import_3__.default);
  const { baseURL } = __vite_ssr_import_5__.useRuntimeConfig().app;
  const routerHistory = false ? __vite_ssr_import_1__.createWebHistory(baseURL) : __vite_ssr_import_1__.createMemoryHistory(baseURL);
  const router = __vite_ssr_import_1__.createRouter({
    history: routerHistory,
    routes: __vite_ssr_import_6__.default
  });
  nuxtApp.vueApp.use(router);
  const previousRoute = __vite_ssr_import_0__.shallowRef(router.currentRoute.value);
  router.afterEach((_to, from) => {
    previousRoute.value = from;
  });
  Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
    get: () => previousRoute.value
  });
  const route = {};
  for (const key in router.currentRoute.value) {
    route[key] = __vite_ssr_import_0__.computed(() => router.currentRoute.value[key]);
  }
  nuxtApp._route = __vite_ssr_import_0__.reactive(route);
  nuxtApp._middleware = nuxtApp._middleware || {
    global: [],
    named: {}
  };
  router.beforeEach(async (to, from) => {
    to.meta = __vite_ssr_import_0__.reactive(to.meta);
    nuxtApp._processingMiddleware = true;
    const middlewareEntries = new Set([...__vite_ssr_import_7__.globalMiddleware, ...nuxtApp._middleware.global]);
    for (const component of to.matched) {
      const componentMiddleware = component.meta.middleware;
      if (!componentMiddleware) {
        continue;
      }
      if (Array.isArray(componentMiddleware)) {
        for (const entry of componentMiddleware) {
          middlewareEntries.add(entry);
        }
      } else {
        middlewareEntries.add(componentMiddleware);
      }
    }
    for (const entry of middlewareEntries) {
      const middleware = typeof entry === "string" ? nuxtApp._middleware.named[entry] || await __vite_ssr_import_7__.namedMiddleware[entry]?.().then((r) => r.default || r) : entry;
      if (true && !middleware) {
        console.warn(`Unknown middleware: ${entry}. Valid options are ${Object.keys(__vite_ssr_import_7__.namedMiddleware).join(", ")}.`);
      }
      const result = await __vite_ssr_import_5__.callWithNuxt(nuxtApp, middleware, [to, from]);
      if (true) {
        if (result === false || result instanceof Error) {
          const error = result || __vite_ssr_import_2__.createError({
            statusMessage: `Route navigation aborted: ${nuxtApp.ssrContext.url}`
          });
          nuxtApp.ssrContext.error = error;
          throw error;
        }
      }
      if (result || result === false) {
        return result;
      }
    }
  });
  router.afterEach(() => {
    delete nuxtApp._processingMiddleware;
  });
  nuxtApp.hook("app:created", async () => {
    if (true) {
      router.push(nuxtApp.ssrContext.url);
      router.afterEach((to) => {
        if (to.fullPath !== nuxtApp.ssrContext.url) {
          nuxtApp.ssrContext.res.setHeader("Location", to.fullPath);
          nuxtApp.ssrContext.res.statusCode = 301;
          nuxtApp.ssrContext.res.end();
        }
      });
    }
    try {
      await router.isReady();
      const is404 = router.currentRoute.value.matched.length === 0;
      if (true && is404) {
        throw __vite_ssr_import_2__.createError({
          statusCode: 404,
          statusMessage: `Page not found: ${nuxtApp.ssrContext.url}`
        });
      }
    } catch (error) {
      nuxtApp.ssrContext.error = error;
    }
  });
  return { provide: { router } };
});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/pages/runtime/page.mjs
// Parents: 
// - /node_modules/nuxt3/dist/pages/runtime/router.mjs ($id_a4d6cb5b)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue-router/dist/vue-router.cjs.js ($id_f9a4a698)
// - /node_modules/nuxt3/dist/pages/runtime/utils.mjs ($id_e1b210cc)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// --------------------
const $id_485c89bf = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue-router/dist/vue-router.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/pages/runtime/utils.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineComponent({
  name: "NuxtPage",
  props: {
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props) {
    const nuxtApp = __vite_ssr_import_3__.useNuxtApp();
    return () => {
      return __vite_ssr_import_0__.h(__vite_ssr_import_1__.RouterView, {}, {
        default: (routeProps) => routeProps.Component && __vite_ssr_import_2__.wrapIf(__vite_ssr_import_0__.Transition, routeProps.route.meta.pageTransition ?? defaultPageTransition, __vite_ssr_import_2__.wrapInKeepAlive(routeProps.route.meta.keepalive, __vite_ssr_import_0__.h(__vite_ssr_import_0__.Suspense, {
          onPending: () => nuxtApp.callHook("page:start", routeProps.Component),
          onResolve: () => nuxtApp.callHook("page:finish", routeProps.Component)
        }, { default: () => __vite_ssr_import_0__.h(routeProps.Component, { key: __vite_ssr_import_2__.generateRouteKey(props.pageKey, routeProps) }) }))).default()
      });
    };
  }
});
const defaultPageTransition = { name: "page", mode: "out-in" };
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/pages/runtime/utils.mjs
// Parents: 
// - /node_modules/nuxt3/dist/pages/runtime/page.mjs ($id_485c89bf)
// - /node_modules/nuxt3/dist/pages/runtime/layout.mjs ($id_9b68c93f)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_e1b210cc = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const interpolatePath = (route, match) => {
  return match.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => route.params[r.slice(1)]?.toString() || "");
};
const generateRouteKey = (override, routeProps) => {
  const matchedRoute = routeProps.route.matched.find((m) => m.components.default === routeProps.Component.type);
  const source = override ?? matchedRoute?.meta.key ?? interpolatePath(routeProps.route, matchedRoute);
  return typeof source === "function" ? source(routeProps.route) : source;
};
Object.defineProperty(__vite_ssr_exports__, "generateRouteKey", { enumerable: true, configurable: true, get(){ return generateRouteKey }});
const Fragment = {
  setup(_props, { slots }) {
    return () => slots.default();
  }
};
const wrapIf = (component, props, slots) => {
  return { default: () => props ? __vite_ssr_import_0__.h(component, props === true ? {} : props, slots) : __vite_ssr_import_0__.h(Fragment, {}, slots) };
};
Object.defineProperty(__vite_ssr_exports__, "wrapIf", { enumerable: true, configurable: true, get(){ return wrapIf }});
const wrapInKeepAlive = (props, children) => {
  return { default: () => false && props ? __vite_ssr_import_0__.h(__vite_ssr_import_0__.KeepAlive, props === true ? {} : props, children) : children };
};
Object.defineProperty(__vite_ssr_exports__, "wrapInKeepAlive", { enumerable: true, configurable: true, get(){ return wrapInKeepAlive }});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/pages/runtime/layout.mjs
// Parents: 
// - /node_modules/nuxt3/dist/pages/runtime/router.mjs ($id_a4d6cb5b)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue-router/dist/vue-router.cjs.js ($id_f9a4a698)
// - /node_modules/nuxt3/dist/pages/runtime/utils.mjs ($id_e1b210cc)
// - /@id/__x00__virtual:C:/DEV/VUE/yes4nuxt/.nuxt/layouts.mjs ($id_fe6968b4)
// --------------------
const $id_9b68c93f = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue-router/dist/vue-router.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/pages/runtime/utils.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/__x00__virtual:C:/DEV/VUE/yes4nuxt/.nuxt/layouts.mjs");

const defaultLayoutTransition = { name: "layout", mode: "out-in" };
__vite_ssr_exports__.default = __vite_ssr_import_0__.defineComponent({
  props: {
    name: {
      type: [String, Boolean, Object],
      default: null
    }
  },
  setup(props, context) {
    const route = __vite_ssr_import_1__.useRoute();
    return () => {
      const layout = (__vite_ssr_import_0__.isRef(props.name) ? props.name.value : props.name) ?? route.meta.layout ?? "default";
      const hasLayout = layout && layout in __vite_ssr_import_3__.default;
      if (true && layout && !hasLayout && layout !== "default") {
        console.warn(`Invalid layout \`${layout}\` selected.`);
      }
      return __vite_ssr_import_2__.wrapIf(__vite_ssr_import_0__.Transition, hasLayout && (route.meta.layoutTransition ?? defaultLayoutTransition), __vite_ssr_import_2__.wrapIf(__vite_ssr_import_3__.default[layout], hasLayout, context.slots)).default();
    };
  }
});
;
}


// --------------------
// Request: /@id/__x00__virtual:C:/DEV/VUE/yes4nuxt/.nuxt/layouts.mjs
// Parents: 
// - /node_modules/nuxt3/dist/pages/runtime/layout.mjs ($id_9b68c93f)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_fe6968b4 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

__vite_ssr_exports__.default = {};
}


// --------------------
// Request: /@id/__x00__virtual:C:/DEV/VUE/yes4nuxt/.nuxt/routes.mjs
// Parents: 
// - /node_modules/nuxt3/dist/pages/runtime/router.mjs ($id_a4d6cb5b)
// Dependencies: 
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /pages/login.vue?macro=true ($id_213baa8a)
// - /pages/index.vue ($id_cca58e97)
// - /pages/login.vue ($id_b0922173)
// --------------------
const $id_a67a8a7c = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/pages/index.vue?macro=true");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/pages/login.vue?macro=true");

__vite_ssr_exports__.default = [
  {
    name: "index",
    path: "/",
    file: "C:/DEV/VUE/yes4nuxt/pages/index.vue",
    children: [],
    meta: __vite_ssr_import_0__.meta,
    component: () => __vite_ssr_dynamic_import__('/pages/index.vue')
  },
  {
    name: "login",
    path: "/login",
    file: "C:/DEV/VUE/yes4nuxt/pages/login.vue",
    children: [],
    meta: __vite_ssr_import_1__.meta,
    component: () => __vite_ssr_dynamic_import__('/pages/login.vue')
  }
];
}


// --------------------
// Request: /pages/index.vue?macro=true
// Parents: 
// - /@id/__x00__virtual:C:/DEV/VUE/yes4nuxt/.nuxt/routes.mjs ($id_a67a8a7c)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// - /store/user.js ($id_6c3c060a)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_5dd70240 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");
const __vite_ssr_import_1__ = await __vite_ssr_import__("/store/user.js");


  
const _sfc_main = {
  setup(__props, { expose }) {
  expose();

  const authStore = __vite_ssr_import_1__.useAuthStore();
  const { logoutUser } = authStore;

  const logout = () => {
    logoutUser().then((res) => {
      if(res) {
        __vite_ssr_import_0__.navigateTo('/login')
      }
    })
  }



const __returned__ = { authStore, logoutUser, logout, useAuthStore: __vite_ssr_import_1__.useAuthStore }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Button = __vite_ssr_import_2__.resolveComponent("Button")

  _push(`<div${__vite_ssr_import_3__.ssrRenderAttrs(_attrs)}><h3>Home</h3><br><br>`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_Button, { label: "Logout" }, null, _parent))
  _push(`</div>`)
}


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/index.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/DEV/VUE/yes4nuxt/pages/index.vue"]])
const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /store/user.js
// Parents: 
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /components/Forms/LoginForm.vue ($id_600babf2)
// - /components/Forms/Register.vue ($id_7dc4ae3d)
// - /pages/index.vue ($id_cca58e97)
// - /middleware/auth.js ($id_3fdca93e)
// Dependencies: 
// - /node_modules/pinia/dist/pinia.mjs ($id_b1920624)
// - /utils/auth.js ($id_0d5e52a5)
// - /utils/firestore.js ($id_db0483a6)
// --------------------
const $id_6c3c060a = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/pinia/dist/pinia.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/utils/auth.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/utils/firestore.js");



const useAuthStore = __vite_ssr_import_0__.defineStore('authStore', {
  state: () => ({
    user: null,
    profile: null,
    error: '',
  }),
  getters: {
    isLoggedIn: (state) => state.user !== null,
    userError: (state) => state.error,
  },
  actions: {
    async initializeAuthListener() {
      return new Promise((resolve) => {
        __vite_ssr_import_1__.fbAuthStateListener(($nuxt.$firebaseAuth), async (user) => {
          this.user = user ? user : null;
          console.log('Running user: ', user);
          if (user) {
            const profile = (await __vite_ssr_import_1__.fbGetUserProfile($nuxt.$firebaseAuth, $nuxt.$firestoreDb));
            this.profile = profile;
            console.log('Profile: ', profile);
          }
          resolve(true);
        });
      });
    },
    async logInUser(email, password) {
      try {
        const response = await __vite_ssr_import_1__.fbSignIn($nuxt.$firebaseAuth, email, password);
        this.user = response.user ? response.user : null;
        this.error = '';
        return true;
      } catch (e) {
        this.user = null;
        this.error = e.code;
        return false;
      }
    },
    async logoutUser() {
      try {
        await __vite_ssr_import_1__.fbSignOut($nuxt.$firebaseAuth);
        console.log('Logged out sucess');
        this.user = null;
        this.profile = null;
        this.error = '';
        return true;
      } catch (e) {
        this.error = e.code;
        return false;
      }
    },
    async createAccount(email, password, firstname, lastname, phone) {
      try {
        const {user, profile} = await __vite_ssr_import_1__.fbCreateAccount($nuxt.$firebaseAuth, $nuxt.$firestoreDb, email, password, firstname, lastname, phone);
        this.user = user ? user : null;
        this.profile = profile ? profile : null;
        this.error = '';
        return true;
      } catch (e) {
        this.user = null;
        this.error = e.code;
        return false;
      }
    },
    async resetPassword(email) {
      try {
        await __vite_ssr_import_2__.list($nuxt.$firestoreDb, 'users', 'email', email).then(async (snap) => {
          if(!snap.empty) {
            this.error = '';
            await __vite_ssr_import_1__.fbResetPassword($nuxt.$firebaseAuth, email)
            return true;
          } else {
            return false;
          }
        });
      } catch (e) {
        this.error = e.code;
        return false;
      }
    }
  },
});
Object.defineProperty(__vite_ssr_exports__, "useAuthStore", { enumerable: true, configurable: true, get(){ return useAuthStore }});

if (__vite_ssr_import_meta__.hot) {
  __vite_ssr_import_meta__.hot.accept(__vite_ssr_import_0__.acceptHMRUpdate(useAuthStore, __vite_ssr_import_meta__.hot))
};
}


// --------------------
// Request: /node_modules/pinia/dist/pinia.mjs
// Parents: 
// - /store/user.js ($id_6c3c060a)
// - /store/store.js ($id_fa1a709a)
// - /@id/__x00__virtual:C:/DEV/VUE/yes4nuxt/.nuxt/dist.plugin.d8412656.mjs ($id_052b8ccd)
// Dependencies: 

// --------------------
const $id_b1920624 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import("file:///C:/DEV/VUE/yes4nuxt/node_modules/pinia/dist/pinia.mjs").then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error("[vite dev] Error loading external \"C:/DEV/VUE/yes4nuxt/node_modules/pinia/dist/pinia.mjs\".") })


// --------------------
// Request: /utils/auth.js
// Parents: 
// - /store/user.js ($id_6c3c060a)
// Dependencies: 
// - /node_modules/firebase/firestore/lite/dist/index.esm.js ($id_8de144de)
// - /node_modules/firebase/auth/dist/index.esm.js ($id_030ea2f2)
// --------------------
const $id_0d5e52a5 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/firebase/firestore/lite/dist/index.esm.js");


const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/firebase/auth/dist/index.esm.js");


// MRS: nuxtApp is context of Nuxt. it contains the $firebaseAuth as Provider.
// I don't find the direct import to here and also firestore.js
// So I passed it through function params
// const auth = nuxtApp.$firebaseAuth;

const fbCreateAccount = async (
  auth,
  db,
  email,
  password,
  firstname,
  lastname,
  phone
) => {
  const response = await __vite_ssr_import_1__.createUserWithEmailAndPassword(auth, email, password);
  console.log(response);
  if (response) {
    console.log('Create res: ', response);
    await fbSetUserProfile({auth, db, email, firstname, lastname, phone });
    const profile = await fbGetUserProfile();
    return {
      user: response.user,
      profile,
    };
  } else {
    return {
      user: null,
      profile: null,
    };
  }
};
Object.defineProperty(__vite_ssr_exports__, "fbCreateAccount", { enumerable: true, configurable: true, get(){ return fbCreateAccount }});

const fbSignIn = async (auth, email, password) => {
  const response = await __vite_ssr_import_1__.signInWithEmailAndPassword(auth, email, password);
  console.log('Successful: ', response.user.email);
  return response;
};
Object.defineProperty(__vite_ssr_exports__, "fbSignIn", { enumerable: true, configurable: true, get(){ return fbSignIn }});

const fbSignOut = async (auth) => {
  await __vite_ssr_import_1__.signOut(auth);
  return true;
};
Object.defineProperty(__vite_ssr_exports__, "fbSignOut", { enumerable: true, configurable: true, get(){ return fbSignOut }});

const fbResetPassword = async (auth, email) => {
  const response = await __vite_ssr_import_1__.sendPasswordResetEmail(auth, email);
  return response
}
Object.defineProperty(__vite_ssr_exports__, "fbResetPassword", { enumerable: true, configurable: true, get(){ return fbResetPassword }});

const fbAuthStateListener = (auth, callback) => {
  console.log('Auth state  called');
  __vite_ssr_import_1__.onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      return user
      // callback(user);
    } else {
      // User is signed out
      callback(null);
    }
  });
};
Object.defineProperty(__vite_ssr_exports__, "fbAuthStateListener", { enumerable: true, configurable: true, get(){ return fbAuthStateListener }});

const fbSetUserProfile = async ({auth, db, email, firstname, lastname, phone}) => {
  const user = auth.currentUser;
  console.log(user);

  const ref = __vite_ssr_import_0__.doc(db, "users", user.uid);
  await __vite_ssr_import_0__.setDoc(
    ref,
    {
      email: email,
      firstname: firstname,
      lastname: lastname,
      phone: phone,
      userId: user.uid,
      createdOn: __vite_ssr_import_0__.Timestamp.fromDate(new Date())
    },
    { merge: true }
  );
  return true;
};
Object.defineProperty(__vite_ssr_exports__, "fbSetUserProfile", { enumerable: true, configurable: true, get(){ return fbSetUserProfile }});

const fbGetUserProfile = async (auth, db) => {
  const user = auth.currentUser;
  console.log(user);

  const ref = __vite_ssr_import_0__.doc(db, "users", user.uid);
  const docSnap = await __vite_ssr_import_0__.getDoc(ref);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    return {
      ...docSnap.data(),
      uid: user.uid,
    };
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!", user.uid);
    return null;
  }
};
Object.defineProperty(__vite_ssr_exports__, "fbGetUserProfile", { enumerable: true, configurable: true, get(){ return fbGetUserProfile }});
;
}


// --------------------
// Request: /node_modules/firebase/firestore/lite/dist/index.esm.js
// Parents: 
// - /utils/auth.js ($id_0d5e52a5)
// - /utils/firestore.js ($id_db0483a6)
// Dependencies: 
// - /node_modules/@firebase/firestore/dist/lite/index.browser.esm2017.js ($id_479c3dfb)
// --------------------
const $id_8de144de = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@firebase/firestore/dist/lite/index.browser.esm2017.js");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
//# sourceMappingURL=index.esm.js.map
;
}


// --------------------
// Request: /node_modules/@firebase/firestore/dist/lite/index.browser.esm2017.js
// Parents: 
// - /node_modules/firebase/firestore/lite/dist/index.esm.js ($id_8de144de)
// Dependencies: 
// - /node_modules/@firebase/app/dist/esm/index.esm2017.js ($id_2743050d)
// - /node_modules/@firebase/component/dist/esm/index.esm2017.js ($id_73b80f46)
// - /node_modules/@firebase/logger/dist/esm/index.esm2017.js ($id_c5215572)
// - /node_modules/@firebase/util/dist/node-esm/index.node.esm.js ($id_5c1f24f9)
// --------------------
const $id_479c3dfb = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@firebase/app/dist/esm/index.esm2017.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/@firebase/component/dist/esm/index.esm2017.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/@firebase/logger/dist/esm/index.esm2017.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/@firebase/util/dist/node-esm/index.node.esm.js");


/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Simple wrapper around a nullable UID. Mostly exists to make code more
 * readable.
 */
class l {
    constructor(t) {
        this.uid = t;
    }
    isAuthenticated() {
        return null != this.uid;
    }
    /**
     * Returns a key representing this user, suitable for inclusion in a
     * dictionary.
     */    toKey() {
        return this.isAuthenticated() ? "uid:" + this.uid : "anonymous-user";
    }
    isEqual(t) {
        return t.uid === this.uid;
    }
}

/** A user with a null UID. */ l.UNAUTHENTICATED = new l(null), 
// TODO(mikelehen): Look into getting a proper uid-equivalent for
// non-FirebaseAuth providers.
l.GOOGLE_CREDENTIALS = new l("google-credentials-uid"), l.FIRST_PARTY = new l("first-party-uid"), 
l.MOCK_USER = new l("mock-user");

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let f = "9.6.7";

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const d = new __vite_ssr_import_2__.Logger("@firebase/firestore");

/**
 * Sets the verbosity of Cloud Firestore logs (debug, error, or silent).
 *
 * @param logLevel - The verbosity you set for activity and error logging. Can
 *   be any of the following values:
 *
 *   <ul>
 *     <li>`debug` for the most verbose logging level, primarily for
 *     debugging.</li>
 *     <li>`error` to log errors only.</li>
 *     <li><code>`silent` to turn off logging.</li>
 *   </ul>
 */ function w(t) {
    d.setLogLevel(t);
}

function m(t, ...e) {
    if (d.logLevel <= __vite_ssr_import_2__.LogLevel.DEBUG) {
        const n = e.map(_);
        d.debug(`Firestore (${f}): ${t}`, ...n);
    }
}

function p(t, ...e) {
    if (d.logLevel <= __vite_ssr_import_2__.LogLevel.ERROR) {
        const n = e.map(_);
        d.error(`Firestore (${f}): ${t}`, ...n);
    }
}

/**
 * @internal
 */ function y(t, ...e) {
    if (d.logLevel <= __vite_ssr_import_2__.LogLevel.WARN) {
        const n = e.map(_);
        d.warn(`Firestore (${f}): ${t}`, ...n);
    }
}

/**
 * Converts an additional log parameter to a string representation.
 */ function _(t) {
    if ("string" == typeof t) return t;
    try {
        return e = t, JSON.stringify(e);
    } catch (e) {
        // Converting to JSON failed, just log the object directly
        return t;
    }
    /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
    /** Formats an object as a JSON string, suitable for logging. */
    var e;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Unconditionally fails, throwing an Error with the given message.
 * Messages are stripped in production builds.
 *
 * Returns `never` and can be used in expressions:
 * @example
 * let futureVar = fail('not implemented yet');
 */ function g(t = "Unexpected state") {
    // Log the failure in addition to throw an exception, just in case the
    // exception is swallowed.
    const e = `FIRESTORE (${f}) INTERNAL ASSERTION FAILED: ` + t;
    // NOTE: We don't use FirestoreError here because these are internal failures
    // that cannot be handled by the user. (Also it would create a circular
    // dependency between the error and assert modules which doesn't work.)
    throw p(e), new Error(e);
}

/**
 * Fails if the given assertion condition is false, throwing an Error with the
 * given message if it did.
 *
 * Messages are stripped in production builds.
 */ function v(t, e) {
    t || g();
}

/**
 * Casts `obj` to `T`. In non-production builds, verifies that `obj` is an
 * instance of `T` before casting.
 */ function b(t, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
e) {
    return t;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const E = "ok", T = "cancelled", I = "unknown", A = "invalid-argument", R = "deadline-exceeded", P = "not-found", V = "already-exists", D = "permission-denied", N = "unauthenticated", $ = "resource-exhausted", S = "failed-precondition", F = "aborted", x = "out-of-range", q = "unimplemented", O = "internal", C = "unavailable", L = "data-loss";

/** An error returned by a Firestore operation. */ const FirebaseError = __vite_ssr_import_3__.FirebaseError;
class U extends FirebaseError {
    /** @hideconstructor */
    constructor(
    /**
     * The backend error code associated with this error.
     */
    t, 
    /**
     * A custom error description.
     */
    e) {
        super(t, e), this.code = t, this.message = e, 
        // HACK: We write a toString property directly because Error is not a real
        // class and so inheritance does not work correctly. We could alternatively
        // do the same "back-door inheritance" trick that FirebaseError does.
        this.toString = () => `${this.name}: [code=${this.code}]: ${this.message}`;
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class k {
    constructor() {
        this.promise = new Promise(((t, e) => {
            this.resolve = t, this.reject = e;
        }));
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class j {
    constructor(t, e) {
        this.user = e, this.type = "OAuth", this.headers = new Map, this.headers.set("Authorization", `Bearer ${t}`);
    }
}

/**
 * A CredentialsProvider that always yields an empty token.
 * @internal
 */ class M {
    getToken() {
        return Promise.resolve(null);
    }
    invalidateToken() {}
    start(t, e) {
        // Fire with initial user.
        t.enqueueRetryable((() => e(l.UNAUTHENTICATED)));
    }
    shutdown() {}
}

/**
 * A CredentialsProvider that always returns a constant token. Used for
 * emulator token mocking.
 */ class B {
    constructor(t) {
        this.token = t, 
        /**
         * Stores the listener registered with setChangeListener()
         * This isn't actually necessary since the UID never changes, but we use this
         * to verify the listen contract is adhered to in tests.
         */
        this.changeListener = null;
    }
    getToken() {
        return Promise.resolve(this.token);
    }
    invalidateToken() {}
    start(t, e) {
        this.changeListener = e, 
        // Fire with initial user.
        t.enqueueRetryable((() => e(this.token.user)));
    }
    shutdown() {
        this.changeListener = null;
    }
}

/** Credential provider for the Lite SDK. */ class z {
    constructor(t) {
        this.auth = null, t.onInit((t => {
            this.auth = t;
        }));
    }
    getToken() {
        return this.auth ? this.auth.getToken().then((t => t ? (v("string" == typeof t.accessToken), 
        new j(t.accessToken, new l(this.auth.getUid()))) : null)) : Promise.resolve(null);
    }
    invalidateToken() {}
    start(t, e) {}
    shutdown() {}
}

/*
 * FirstPartyToken provides a fresh token each time its value
 * is requested, because if the token is too old, requests will be rejected.
 * Technically this may no longer be necessary since the SDK should gracefully
 * recover from unauthenticated errors (see b/33147818 for context), but it's
 * safer to keep the implementation as-is.
 */ class G {
    constructor(t, e, n) {
        this.type = "FirstParty", this.user = l.FIRST_PARTY, this.headers = new Map, this.headers.set("X-Goog-AuthUser", e);
        const r = t.auth.getAuthHeaderValueForFirstParty([]);
        r && this.headers.set("Authorization", r), n && this.headers.set("X-Goog-Iam-Authorization-Token", n);
    }
}

/*
 * Provides user credentials required for the Firestore JavaScript SDK
 * to authenticate the user, using technique that is only available
 * to applications hosted by Google.
 */ class Q {
    constructor(t, e, n) {
        this.t = t, this.i = e, this.o = n;
    }
    getToken() {
        return Promise.resolve(new G(this.t, this.i, this.o));
    }
    start(t, e) {
        // Fire with initial uid.
        t.enqueueRetryable((() => e(l.FIRST_PARTY)));
    }
    shutdown() {}
    invalidateToken() {}
}

class W {
    constructor(t) {
        this.value = t, this.type = "AppCheck", this.headers = new Map, t && t.length > 0 && this.headers.set("x-firebase-appcheck", this.value);
    }
}

/** AppCheck token provider for the Lite SDK. */ class Y {
    constructor(t) {
        this.u = t, this.appCheck = null, t.onInit((t => {
            this.appCheck = t;
        }));
    }
    getToken() {
        return this.appCheck ? this.appCheck.getToken().then((t => t ? (v("string" == typeof t.token), 
        new W(t.token)) : null)) : Promise.resolve(null);
    }
    invalidateToken() {}
    start(t, e) {}
    shutdown() {}
}

/**
 * Builds a CredentialsProvider depending on the type of
 * the credentials passed in.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class H {
    /**
     * Constructs a DatabaseInfo using the provided host, databaseId and
     * persistenceKey.
     *
     * @param databaseId - The database to use.
     * @param appId - The Firebase App Id.
     * @param persistenceKey - A unique identifier for this Firestore's local
     * storage (used in conjunction with the databaseId).
     * @param host - The Firestore backend host to connect to.
     * @param ssl - Whether to use SSL when connecting.
     * @param forceLongPolling - Whether to use the forceLongPolling option
     * when using WebChannel as the network transport.
     * @param autoDetectLongPolling - Whether to use the detectBufferingProxy
     * option when using WebChannel as the network transport.
     * @param useFetchStreams Whether to use the Fetch API instead of
     * XMLHTTPRequest
     */
    constructor(t, e, n, r, s, i, o, u) {
        this.databaseId = t, this.appId = e, this.persistenceKey = n, this.host = r, this.ssl = s, 
        this.forceLongPolling = i, this.autoDetectLongPolling = o, this.useFetchStreams = u;
    }
}

/** The default database name for a project. */
/**
 * Represents the database ID a Firestore client is associated with.
 * @internal
 */
class K {
    constructor(t, e) {
        this.projectId = t, this.database = e || "(default)";
    }
    static empty() {
        return new K("", "");
    }
    get isDefaultDatabase() {
        return "(default)" === this.database;
    }
    isEqual(t) {
        return t instanceof K && t.projectId === this.projectId && t.database === this.database;
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Path represents an ordered sequence of string segments.
 */
class J {
    constructor(t, e, n) {
        void 0 === e ? e = 0 : e > t.length && g(), void 0 === n ? n = t.length - e : n > t.length - e && g(), 
        this.segments = t, this.offset = e, this.len = n;
    }
    get length() {
        return this.len;
    }
    isEqual(t) {
        return 0 === J.comparator(this, t);
    }
    child(t) {
        const e = this.segments.slice(this.offset, this.limit());
        return t instanceof J ? t.forEach((t => {
            e.push(t);
        })) : e.push(t), this.construct(e);
    }
    /** The index of one past the last segment of the path. */    limit() {
        return this.offset + this.length;
    }
    popFirst(t) {
        return t = void 0 === t ? 1 : t, this.construct(this.segments, this.offset + t, this.length - t);
    }
    popLast() {
        return this.construct(this.segments, this.offset, this.length - 1);
    }
    firstSegment() {
        return this.segments[this.offset];
    }
    lastSegment() {
        return this.get(this.length - 1);
    }
    get(t) {
        return this.segments[this.offset + t];
    }
    isEmpty() {
        return 0 === this.length;
    }
    isPrefixOf(t) {
        if (t.length < this.length) return !1;
        for (let e = 0; e < this.length; e++) if (this.get(e) !== t.get(e)) return !1;
        return !0;
    }
    isImmediateParentOf(t) {
        if (this.length + 1 !== t.length) return !1;
        for (let e = 0; e < this.length; e++) if (this.get(e) !== t.get(e)) return !1;
        return !0;
    }
    forEach(t) {
        for (let e = this.offset, n = this.limit(); e < n; e++) t(this.segments[e]);
    }
    toArray() {
        return this.segments.slice(this.offset, this.limit());
    }
    static comparator(t, e) {
        const n = Math.min(t.length, e.length);
        for (let r = 0; r < n; r++) {
            const n = t.get(r), s = e.get(r);
            if (n < s) return -1;
            if (n > s) return 1;
        }
        return t.length < e.length ? -1 : t.length > e.length ? 1 : 0;
    }
}

/**
 * A slash-separated path for navigating resources (documents and collections)
 * within Firestore.
 *
 * @internal
 */ class X extends J {
    construct(t, e, n) {
        return new X(t, e, n);
    }
    canonicalString() {
        // NOTE: The client is ignorant of any path segments containing escape
        // sequences (e.g. __id123__) and just passes them through raw (they exist
        // for legacy reasons and should not be used frequently).
        return this.toArray().join("/");
    }
    toString() {
        return this.canonicalString();
    }
    /**
     * Creates a resource path from the given slash-delimited string. If multiple
     * arguments are provided, all components are combined. Leading and trailing
     * slashes from all components are ignored.
     */    static fromString(...t) {
        // NOTE: The client is ignorant of any path segments containing escape
        // sequences (e.g. __id123__) and just passes them through raw (they exist
        // for legacy reasons and should not be used frequently).
        const e = [];
        for (const n of t) {
            if (n.indexOf("//") >= 0) throw new U(A, `Invalid segment (${n}). Paths must not contain // in them.`);
            // Strip leading and traling slashed.
                        e.push(...n.split("/").filter((t => t.length > 0)));
        }
        return new X(e);
    }
    static emptyPath() {
        return new X([]);
    }
}

const Z = /^[_a-zA-Z][_a-zA-Z0-9]*$/;

/**
 * A dot-separated path for navigating sub-objects within a document.
 * @internal
 */ class tt extends J {
    construct(t, e, n) {
        return new tt(t, e, n);
    }
    /**
     * Returns true if the string could be used as a segment in a field path
     * without escaping.
     */    static isValidIdentifier(t) {
        return Z.test(t);
    }
    canonicalString() {
        return this.toArray().map((t => (t = t.replace(/\\/g, "\\\\").replace(/`/g, "\\`"), 
        tt.isValidIdentifier(t) || (t = "`" + t + "`"), t))).join(".");
    }
    toString() {
        return this.canonicalString();
    }
    /**
     * Returns true if this field references the key of a document.
     */    isKeyField() {
        return 1 === this.length && "__name__" === this.get(0);
    }
    /**
     * The field designating the key of a document.
     */    static keyField() {
        return new tt([ "__name__" ]);
    }
    /**
     * Parses a field string from the given server-formatted string.
     *
     * - Splitting the empty string is not allowed (for now at least).
     * - Empty segments within the string (e.g. if there are two consecutive
     *   separators) are not allowed.
     *
     * TODO(b/37244157): we should make this more strict. Right now, it allows
     * non-identifier path components, even if they aren't escaped.
     */    static fromServerFormat(t) {
        const e = [];
        let n = "", r = 0;
        const s = () => {
            if (0 === n.length) throw new U(A, `Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);
            e.push(n), n = "";
        };
        let i = !1;
        for (;r < t.length; ) {
            const e = t[r];
            if ("\\" === e) {
                if (r + 1 === t.length) throw new U(A, "Path has trailing escape character: " + t);
                const e = t[r + 1];
                if ("\\" !== e && "." !== e && "`" !== e) throw new U(A, "Path has invalid escape sequence: " + t);
                n += e, r += 2;
            } else "`" === e ? (i = !i, r++) : "." !== e || i ? (n += e, r++) : (s(), r++);
        }
        if (s(), i) throw new U(A, "Unterminated ` in path: " + t);
        return new tt(e);
    }
    static emptyPath() {
        return new tt([]);
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @internal
 */ class et {
    constructor(t) {
        this.path = t;
    }
    static fromPath(t) {
        return new et(X.fromString(t));
    }
    static fromName(t) {
        return new et(X.fromString(t).popFirst(5));
    }
    static empty() {
        return new et(X.emptyPath());
    }
    get collectionGroup() {
        return this.path.popLast().lastSegment();
    }
    /** Returns true if the document is in the specified collectionId. */    hasCollectionId(t) {
        return this.path.length >= 2 && this.path.get(this.path.length - 2) === t;
    }
    /** Returns the collection group (i.e. the name of the parent collection) for this key. */    getCollectionGroup() {
        return this.path.get(this.path.length - 2);
    }
    /** Returns the fully qualified path to the parent collection. */    getCollectionPath() {
        return this.path.popLast();
    }
    isEqual(t) {
        return null !== t && 0 === X.comparator(this.path, t.path);
    }
    toString() {
        return this.path.toString();
    }
    static comparator(t, e) {
        return X.comparator(t.path, e.path);
    }
    static isDocumentKey(t) {
        return t.length % 2 == 0;
    }
    /**
     * Creates and returns a new document key with the given segments.
     *
     * @param segments - The segments of the path to the document
     * @returns A new instance of DocumentKey
     */    static fromSegments(t) {
        return new et(new X(t.slice()));
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function nt(t, e, n) {
    if (!n) throw new U(A, `Function ${t}() cannot be called with an empty ${e}.`);
}

/**
 * Validates that two boolean options are not set at the same time.
 * @internal
 */
/**
 * Validates that `path` refers to a document (indicated by the fact it contains
 * an even numbers of segments).
 */
function rt(t) {
    if (!et.isDocumentKey(t)) throw new U(A, `Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`);
}

/**
 * Validates that `path` refers to a collection (indicated by the fact it
 * contains an odd numbers of segments).
 */ function st(t) {
    if (et.isDocumentKey(t)) throw new U(A, `Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`);
}

/**
 * Returns true if it's a non-null object without a custom prototype
 * (i.e. excludes Array, Date, etc.).
 */
/** Returns a string describing the type / value of the provided input. */
function it(t) {
    if (void 0 === t) return "undefined";
    if (null === t) return "null";
    if ("string" == typeof t) return t.length > 20 && (t = `${t.substring(0, 20)}...`), 
    JSON.stringify(t);
    if ("number" == typeof t || "boolean" == typeof t) return "" + t;
    if ("object" == typeof t) {
        if (t instanceof Array) return "an array";
        {
            const e = 
            /** try to get the constructor name for an object. */
            function(t) {
                if (t.constructor) return t.constructor.name;
                return null;
            }
            /**
 * Casts `obj` to `T`, optionally unwrapping Compat types to expose the
 * underlying instance. Throws if  `obj` is not an instance of `T`.
 *
 * This cast is used in the Lite and Full SDK to verify instance types for
 * arguments passed to the public API.
 * @internal
 */ (t);
            return e ? `a custom ${e} object` : "an object";
        }
    }
    return "function" == typeof t ? "a function" : g();
}

function ot(t, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
e) {
    if ("_delegate" in t && (
    // Unwrap Compat types
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    t = t._delegate), !(t instanceof e)) {
        if (e.name === t.constructor.name) throw new U(A, "Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");
        {
            const n = it(t);
            throw new U(A, `Expected type '${e.name}', but it was: ${n}`);
        }
    }
    return t;
}

function ut(t, e) {
    if (e <= 0) throw new U(A, `Function ${t}() requires a positive number, but it was: ${e}.`);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns whether a variable is either undefined or null.
 */ function ct(t) {
    return null == t;
}

/** Returns whether the value represents -0. */ function at(t) {
    // Detect if the value is -0.0. Based on polyfill from
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
    return 0 === t && 1 / t == -1 / 0;
}

/**
 * Returns whether a value is an integer and in the safe integer range
 * @param value - The value to test for being an integer and in the safe range
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ht = {
    BatchGetDocuments: "batchGet",
    Commit: "commit",
    RunQuery: "runQuery"
};

/**
 * Maps RPC names to the corresponding REST endpoint name.
 *
 * We use array notation to avoid mangling.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Error Codes describing the different ways GRPC can fail. These are copied
 * directly from GRPC's sources here:
 *
 * https://github.com/grpc/grpc/blob/bceec94ea4fc5f0085d81235d8e1c06798dc341a/include/grpc%2B%2B/impl/codegen/status_code_enum.h
 *
 * Important! The names of these identifiers matter because the string forms
 * are used for reverse lookups from the webchannel stream. Do NOT change the
 * names of these identifiers or change this into a const enum.
 */
var lt, ft;

/**
 * Converts an HTTP Status Code to the equivalent error code.
 *
 * @param status - An HTTP Status Code, like 200, 404, 503, etc.
 * @returns The equivalent Code. Unknown status codes are mapped to
 *     Code.UNKNOWN.
 */
function dt(t) {
    if (void 0 === t) return p("RPC_ERROR", "HTTP error has no status"), I;
    // The canonical error codes for Google APIs [1] specify mapping onto HTTP
    // status codes but the mapping is not bijective. In each case of ambiguity
    // this function chooses a primary error.
    
    // [1]
    // https://github.com/googleapis/googleapis/blob/master/google/rpc/code.proto
        switch (t) {
      case 200:
        // OK
        return E;

      case 400:
        // Bad Request
        return S;

        // Other possibilities based on the forward mapping
        // return Code.INVALID_ARGUMENT;
        // return Code.OUT_OF_RANGE;
              case 401:
        // Unauthorized
        return N;

      case 403:
        // Forbidden
        return D;

      case 404:
        // Not Found
        return P;

      case 409:
        // Conflict
        return F;

        // Other possibilities:
        // return Code.ALREADY_EXISTS;
              case 416:
        // Range Not Satisfiable
        return x;

      case 429:
        // Too Many Requests
        return $;

      case 499:
        // Client Closed Request
        return T;

      case 500:
        // Internal Server Error
        return I;

        // Other possibilities:
        // return Code.INTERNAL;
        // return Code.DATA_LOSS;
              case 501:
        // Unimplemented
        return q;

      case 503:
        // Service Unavailable
        return C;

      case 504:
        // Gateway Timeout
        return R;

      default:
        return t >= 200 && t < 300 ? E : t >= 400 && t < 500 ? S : t >= 500 && t < 600 ? O : I;
    }
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A Rest-based connection that relies on the native HTTP stack
 * (e.g. `fetch` or a polyfill).
 */ (ft = lt || (lt = {}))[ft.OK = 0] = "OK", ft[ft.CANCELLED = 1] = "CANCELLED", 
ft[ft.UNKNOWN = 2] = "UNKNOWN", ft[ft.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT", 
ft[ft.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED", ft[ft.NOT_FOUND = 5] = "NOT_FOUND", 
ft[ft.ALREADY_EXISTS = 6] = "ALREADY_EXISTS", ft[ft.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", 
ft[ft.UNAUTHENTICATED = 16] = "UNAUTHENTICATED", ft[ft.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED", 
ft[ft.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION", ft[ft.ABORTED = 10] = "ABORTED", 
ft[ft.OUT_OF_RANGE = 11] = "OUT_OF_RANGE", ft[ft.UNIMPLEMENTED = 12] = "UNIMPLEMENTED", 
ft[ft.INTERNAL = 13] = "INTERNAL", ft[ft.UNAVAILABLE = 14] = "UNAVAILABLE", ft[ft.DATA_LOSS = 15] = "DATA_LOSS";

class wt extends 
/**
 * Base class for all Rest-based connections to the backend (WebChannel and
 * HTTP).
 */
class {
    constructor(t) {
        this.databaseInfo = t, this.databaseId = t.databaseId;
        const e = t.ssl ? "https" : "http";
        this.h = e + "://" + t.host, this.l = "projects/" + this.databaseId.projectId + "/databases/" + this.databaseId.database + "/documents";
    }
    m(t, e, n, r, s) {
        const i = this.p(t, e);
        m("RestConnection", "Sending: ", i, n);
        const o = {};
        return this.g(o, r, s), this.v(t, i, o, n).then((t => (m("RestConnection", "Received: ", t), 
        t)), (e => {
            throw y("RestConnection", `${t} failed with error: `, e, "url: ", i, "request:", n), 
            e;
        }));
    }
    T(t, e, n, r, s) {
        // The REST API automatically aggregates all of the streamed results, so we
        // can just use the normal invoke() method.
        return this.m(t, e, n, r, s);
    }
    /**
     * Modifies the headers for a request, adding any authorization token if
     * present and any additional headers for the request.
     */    g(t, e, n) {
        t["X-Goog-Api-Client"] = "gl-js/ fire/" + f, 
        // Content-Type: text/plain will avoid preflight requests which might
        // mess with CORS and redirects by proxies. If we add custom headers
        // we will need to change this code to potentially use the $httpOverwrite
        // parameter supported by ESF to avoid triggering preflight requests.
        t["Content-Type"] = "text/plain", this.databaseInfo.appId && (t["X-Firebase-GMPID"] = this.databaseInfo.appId), 
        e && e.headers.forEach(((e, n) => t[n] = e)), n && n.headers.forEach(((e, n) => t[n] = e));
    }
    p(t, e) {
        const n = ht[t];
        return `${this.h}/v1/${e}:${n}`;
    }
} {
    /**
     * @param databaseInfo - The connection info.
     * @param fetchImpl - `fetch` or a Polyfill that implements the fetch API.
     */
    constructor(t, e) {
        super(t), this.I = e;
    }
    A(t, e) {
        throw new Error("Not supported by FetchConnection");
    }
    async v(t, e, n, r) {
        const s = JSON.stringify(r);
        let i;
        try {
            i = await this.I(e, {
                method: "POST",
                headers: n,
                body: s
            });
        } catch (t) {
            throw new U(dt(t.status), "Request failed with error: " + t.statusText);
        }
        if (!i.ok) throw new U(dt(i.status), "Request failed with error: " + i.statusText);
        return i.json();
    }
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Initializes the HTTP connection for the REST API. */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Generates `nBytes` of random bytes.
 *
 * If `nBytes < 0` , an error will be thrown.
 */
function mt(t) {
    // Polyfills for IE and WebWorker by using `self` and `msCrypto` when `crypto` is not available.
    const e = 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    "undefined" != typeof self && (self.crypto || self.msCrypto), n = new Uint8Array(t);
    if (e && "function" == typeof e.getRandomValues) e.getRandomValues(n); else 
    // Falls back to Math.random
    for (let e = 0; e < t; e++) n[e] = Math.floor(256 * Math.random());
    return n;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class pt {
    static R() {
        // Alphanumeric characters
        const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", e = Math.floor(256 / t.length) * t.length;
        // The largest byte value that is a multiple of `char.length`.
                let n = "";
        for (;n.length < 20; ) {
            const r = mt(40);
            for (let s = 0; s < r.length; ++s) 
            // Only accept values that are [0, maxMultiple), this ensures they can
            // be evenly mapped to indices of `chars` via a modulo operation.
            n.length < 20 && r[s] < e && (n += t.charAt(r[s] % t.length));
        }
        return n;
    }
}

function yt(t, e) {
    return t < e ? -1 : t > e ? 1 : 0;
}

/** Helper to compare arrays using isEqual(). */ function _t(t, e, n) {
    return t.length === e.length && t.every(((t, r) => n(t, e[r])));
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// The earliest date supported by Firestore timestamps (0001-01-01T00:00:00Z).
/**
 * A `Timestamp` represents a point in time independent of any time zone or
 * calendar, represented as seconds and fractions of seconds at nanosecond
 * resolution in UTC Epoch time.
 *
 * It is encoded using the Proleptic Gregorian Calendar which extends the
 * Gregorian calendar backwards to year one. It is encoded assuming all minutes
 * are 60 seconds long, i.e. leap seconds are "smeared" so that no leap second
 * table is needed for interpretation. Range is from 0001-01-01T00:00:00Z to
 * 9999-12-31T23:59:59.999999999Z.
 *
 * For examples and further specifications, refer to the
 * {@link https://github.com/google/protobuf/blob/master/src/google/protobuf/timestamp.proto | Timestamp definition}.
 */
class gt {
    /**
     * Creates a new timestamp.
     *
     * @param seconds - The number of seconds of UTC time since Unix epoch
     *     1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to
     *     9999-12-31T23:59:59Z inclusive.
     * @param nanoseconds - The non-negative fractions of a second at nanosecond
     *     resolution. Negative second values with fractions must still have
     *     non-negative nanoseconds values that count forward in time. Must be
     *     from 0 to 999,999,999 inclusive.
     */
    constructor(
    /**
     * The number of seconds of UTC time since Unix epoch 1970-01-01T00:00:00Z.
     */
    t, 
    /**
     * The fractions of a second at nanosecond resolution.*
     */
    e) {
        if (this.seconds = t, this.nanoseconds = e, e < 0) throw new U(A, "Timestamp nanoseconds out of range: " + e);
        if (e >= 1e9) throw new U(A, "Timestamp nanoseconds out of range: " + e);
        if (t < -62135596800) throw new U(A, "Timestamp seconds out of range: " + t);
        // This will break in the year 10,000.
                if (t >= 253402300800) throw new U(A, "Timestamp seconds out of range: " + t);
    }
    /**
     * Creates a new timestamp with the current date, with millisecond precision.
     *
     * @returns a new timestamp representing the current date.
     */    static now() {
        return gt.fromMillis(Date.now());
    }
    /**
     * Creates a new timestamp from the given date.
     *
     * @param date - The date to initialize the `Timestamp` from.
     * @returns A new `Timestamp` representing the same point in time as the given
     *     date.
     */    static fromDate(t) {
        return gt.fromMillis(t.getTime());
    }
    /**
     * Creates a new timestamp from the given number of milliseconds.
     *
     * @param milliseconds - Number of milliseconds since Unix epoch
     *     1970-01-01T00:00:00Z.
     * @returns A new `Timestamp` representing the same point in time as the given
     *     number of milliseconds.
     */    static fromMillis(t) {
        const e = Math.floor(t / 1e3), n = Math.floor(1e6 * (t - 1e3 * e));
        return new gt(e, n);
    }
    /**
     * Converts a `Timestamp` to a JavaScript `Date` object. This conversion
     * causes a loss of precision since `Date` objects only support millisecond
     * precision.
     *
     * @returns JavaScript `Date` object representing the same point in time as
     *     this `Timestamp`, with millisecond precision.
     */    toDate() {
        return new Date(this.toMillis());
    }
    /**
     * Converts a `Timestamp` to a numeric timestamp (in milliseconds since
     * epoch). This operation causes a loss of precision.
     *
     * @returns The point in time corresponding to this timestamp, represented as
     *     the number of milliseconds since Unix epoch 1970-01-01T00:00:00Z.
     */    toMillis() {
        return 1e3 * this.seconds + this.nanoseconds / 1e6;
    }
    _compareTo(t) {
        return this.seconds === t.seconds ? yt(this.nanoseconds, t.nanoseconds) : yt(this.seconds, t.seconds);
    }
    /**
     * Returns true if this `Timestamp` is equal to the provided one.
     *
     * @param other - The `Timestamp` to compare against.
     * @returns true if this `Timestamp` is equal to the provided one.
     */    isEqual(t) {
        return t.seconds === this.seconds && t.nanoseconds === this.nanoseconds;
    }
    /** Returns a textual representation of this `Timestamp`. */    toString() {
        return "Timestamp(seconds=" + this.seconds + ", nanoseconds=" + this.nanoseconds + ")";
    }
    /** Returns a JSON-serializable representation of this `Timestamp`. */    toJSON() {
        return {
            seconds: this.seconds,
            nanoseconds: this.nanoseconds
        };
    }
    /**
     * Converts this object to a primitive string, which allows `Timestamp` objects
     * to be compared using the `>`, `<=`, `>=` and `>` operators.
     */    valueOf() {
        // This method returns a string of the form <seconds>.<nanoseconds> where
        // <seconds> is translated to have a non-negative value and both <seconds>
        // and <nanoseconds> are left-padded with zeroes to be a consistent length.
        // Strings with this format then have a lexiographical ordering that matches
        // the expected ordering. The <seconds> translation is done to avoid having
        // a leading negative sign (i.e. a leading '-' character) in its string
        // representation, which would affect its lexiographical ordering.
        const t = this.seconds - -62135596800;
        // Note: Up to 12 decimal digits are required to represent all valid
        // 'seconds' values.
                return String(t).padStart(12, "0") + "." + String(this.nanoseconds).padStart(9, "0");
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A version of a document in Firestore. This corresponds to the version
 * timestamp, such as update_time or read_time.
 */ class vt {
    constructor(t) {
        this.timestamp = t;
    }
    static fromTimestamp(t) {
        return new vt(t);
    }
    static min() {
        return new vt(new gt(0, 0));
    }
    compareTo(t) {
        return this.timestamp._compareTo(t.timestamp);
    }
    isEqual(t) {
        return this.timestamp.isEqual(t.timestamp);
    }
    /** Returns a number representation of the version for use in spec tests. */    toMicroseconds() {
        // Convert to microseconds.
        return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3;
    }
    toString() {
        return "SnapshotVersion(" + this.timestamp.toString() + ")";
    }
    toTimestamp() {
        return this.timestamp;
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function bt(t) {
    let e = 0;
    for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && e++;
    return e;
}

function Et(t, e) {
    for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n]);
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Provides a set of fields that can be used to partially patch a document.
 * FieldMask is used in conjunction with ObjectValue.
 * Examples:
 *   foo - Overwrites foo entirely with the provided value. If foo is not
 *         present in the companion ObjectValue, the field is deleted.
 *   foo.bar - Overwrites only the field bar of the object foo.
 *             If foo is not an object, foo is replaced with an object
 *             containing foo
 */
class Tt {
    constructor(t) {
        this.fields = t, 
        // TODO(dimond): validation of FieldMask
        // Sort the field mask to support `FieldMask.isEqual()` and assert below.
        t.sort(tt.comparator);
    }
    /**
     * Verifies that `fieldPath` is included by at least one field in this field
     * mask.
     *
     * This is an O(n) operation, where `n` is the size of the field mask.
     */    covers(t) {
        for (const e of this.fields) if (e.isPrefixOf(t)) return !0;
        return !1;
    }
    isEqual(t) {
        return _t(this.fields, t.fields, ((t, e) => t.isEqual(e)));
    }
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Converts a Base64 encoded string to a binary string. */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Immutable class that represents a "proto" byte string.
 *
 * Proto byte strings can either be Base64-encoded strings or Uint8Arrays when
 * sent on the wire. This class abstracts away this differentiation by holding
 * the proto byte string in a common class that must be converted into a string
 * before being sent as a proto.
 * @internal
 */
class It {
    constructor(t) {
        this.binaryString = t;
    }
    static fromBase64String(t) {
        const e = atob(t);
        return new It(e);
    }
    static fromUint8Array(t) {
        const e = 
        /**
 * Helper function to convert an Uint8array to a binary string.
 */
        function(t) {
            let e = "";
            for (let n = 0; n < t.length; ++n) e += String.fromCharCode(t[n]);
            return e;
        }
        /**
 * Helper function to convert a binary string to an Uint8Array.
 */ (t);
        return new It(e);
    }
    [Symbol.iterator]() {
        let t = 0;
        return {
            next: () => t < this.binaryString.length ? {
                value: this.binaryString.charCodeAt(t++),
                done: !1
            } : {
                value: void 0,
                done: !0
            }
        };
    }
    toBase64() {
        return t = this.binaryString, btoa(t);
        /** Converts a binary string to a Base64 encoded string. */
        var t;
    }
    toUint8Array() {
        return function(t) {
            const e = new Uint8Array(t.length);
            for (let n = 0; n < t.length; n++) e[n] = t.charCodeAt(n);
            return e;
        }
        /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        // A RegExp matching ISO 8601 UTC timestamps with optional fraction.
        (this.binaryString);
    }
    approximateByteSize() {
        return 2 * this.binaryString.length;
    }
    compareTo(t) {
        return yt(this.binaryString, t.binaryString);
    }
    isEqual(t) {
        return this.binaryString === t.binaryString;
    }
}

It.EMPTY_BYTE_STRING = new It("");

const At = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);

/**
 * Converts the possible Proto values for a timestamp value into a "seconds and
 * nanos" representation.
 */ function Rt(t) {
    // The json interface (for the browser) will return an iso timestamp string,
    // while the proto js library (for node) will return a
    // google.protobuf.Timestamp instance.
    if (v(!!t), "string" == typeof t) {
        // The date string can have higher precision (nanos) than the Date class
        // (millis), so we do some custom parsing here.
        // Parse the nanos right out of the string.
        let e = 0;
        const n = At.exec(t);
        if (v(!!n), n[1]) {
            // Pad the fraction out to 9 digits (nanos).
            let t = n[1];
            t = (t + "000000000").substr(0, 9), e = Number(t);
        }
        // Parse the date to get the seconds.
                const r = new Date(t);
        return {
            seconds: Math.floor(r.getTime() / 1e3),
            nanos: e
        };
    }
    return {
        seconds: Pt(t.seconds),
        nanos: Pt(t.nanos)
    };
}

/**
 * Converts the possible Proto types for numbers into a JavaScript number.
 * Returns 0 if the value is not numeric.
 */ function Pt(t) {
    // TODO(bjornick): Handle int64 greater than 53 bits.
    return "number" == typeof t ? t : "string" == typeof t ? Number(t) : 0;
}

/** Converts the possible Proto types for Blobs into a ByteString. */ function Vt(t) {
    return "string" == typeof t ? It.fromBase64String(t) : It.fromUint8Array(t);
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Represents a locally-applied ServerTimestamp.
 *
 * Server Timestamps are backed by MapValues that contain an internal field
 * `__type__` with a value of `server_timestamp`. The previous value and local
 * write time are stored in its `__previous_value__` and `__local_write_time__`
 * fields respectively.
 *
 * Notes:
 * - ServerTimestampValue instances are created as the result of applying a
 *   transform. They can only exist in the local view of a document. Therefore
 *   they do not need to be parsed or serialized.
 * - When evaluated locally (e.g. for snapshot.data()), they by default
 *   evaluate to `null`. This behavior can be configured by passing custom
 *   FieldValueOptions to value().
 * - With respect to other ServerTimestampValues, they sort by their
 *   localWriteTime.
 */ function Dt(t) {
    var e, n;
    return "server_timestamp" === (null === (n = ((null === (e = null == t ? void 0 : t.mapValue) || void 0 === e ? void 0 : e.fields) || {}).__type__) || void 0 === n ? void 0 : n.stringValue);
}

/**
 * Returns the value of the field before this ServerTimestamp was set.
 *
 * Preserving the previous values allows the user to display the last resoled
 * value until the backend responds with the timestamp.
 */ function Nt(t) {
    const e = t.mapValue.fields.__previous_value__;
    return Dt(e) ? Nt(e) : e;
}

/**
 * Returns the local time at which this timestamp was first set.
 */ function $t(t) {
    const e = Rt(t.mapValue.fields.__local_write_time__.timestampValue);
    return new gt(e.seconds, e.nanos);
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Extracts the backend's type order for the provided value. */ function St(t) {
    return "nullValue" in t ? 0 /* NullValue */ : "booleanValue" in t ? 1 /* BooleanValue */ : "integerValue" in t || "doubleValue" in t ? 2 /* NumberValue */ : "timestampValue" in t ? 3 /* TimestampValue */ : "stringValue" in t ? 5 /* StringValue */ : "bytesValue" in t ? 6 /* BlobValue */ : "referenceValue" in t ? 7 /* RefValue */ : "geoPointValue" in t ? 8 /* GeoPointValue */ : "arrayValue" in t ? 9 /* ArrayValue */ : "mapValue" in t ? Dt(t) ? 4 /* ServerTimestampValue */ : 10 /* ObjectValue */ : g();
}

/** Tests `left` and `right` for equality based on the backend semantics. */ function Ft(t, e) {
    if (t === e) return !0;
    const n = St(t);
    if (n !== St(e)) return !1;
    switch (n) {
      case 0 /* NullValue */ :
        return !0;

      case 1 /* BooleanValue */ :
        return t.booleanValue === e.booleanValue;

      case 4 /* ServerTimestampValue */ :
        return $t(t).isEqual($t(e));

      case 3 /* TimestampValue */ :
        return function(t, e) {
            if ("string" == typeof t.timestampValue && "string" == typeof e.timestampValue && t.timestampValue.length === e.timestampValue.length) 
            // Use string equality for ISO 8601 timestamps
            return t.timestampValue === e.timestampValue;
            const n = Rt(t.timestampValue), r = Rt(e.timestampValue);
            return n.seconds === r.seconds && n.nanos === r.nanos;
        }(t, e);

      case 5 /* StringValue */ :
        return t.stringValue === e.stringValue;

      case 6 /* BlobValue */ :
        return function(t, e) {
            return Vt(t.bytesValue).isEqual(Vt(e.bytesValue));
        }(t, e);

      case 7 /* RefValue */ :
        return t.referenceValue === e.referenceValue;

      case 8 /* GeoPointValue */ :
        return function(t, e) {
            return Pt(t.geoPointValue.latitude) === Pt(e.geoPointValue.latitude) && Pt(t.geoPointValue.longitude) === Pt(e.geoPointValue.longitude);
        }(t, e);

      case 2 /* NumberValue */ :
        return function(t, e) {
            if ("integerValue" in t && "integerValue" in e) return Pt(t.integerValue) === Pt(e.integerValue);
            if ("doubleValue" in t && "doubleValue" in e) {
                const n = Pt(t.doubleValue), r = Pt(e.doubleValue);
                return n === r ? at(n) === at(r) : isNaN(n) && isNaN(r);
            }
            return !1;
        }(t, e);

      case 9 /* ArrayValue */ :
        return _t(t.arrayValue.values || [], e.arrayValue.values || [], Ft);

      case 10 /* ObjectValue */ :
        return function(t, e) {
            const n = t.mapValue.fields || {}, r = e.mapValue.fields || {};
            if (bt(n) !== bt(r)) return !1;
            for (const t in n) if (n.hasOwnProperty(t) && (void 0 === r[t] || !Ft(n[t], r[t]))) return !1;
            return !0;
        }
        /** Returns true if the ArrayValue contains the specified element. */ (t, e);

      default:
        return g();
    }
}

function xt(t, e) {
    return void 0 !== (t.values || []).find((t => Ft(t, e)));
}

function qt(t, e) {
    if (t === e) return 0;
    const n = St(t), r = St(e);
    if (n !== r) return yt(n, r);
    switch (n) {
      case 0 /* NullValue */ :
        return 0;

      case 1 /* BooleanValue */ :
        return yt(t.booleanValue, e.booleanValue);

      case 2 /* NumberValue */ :
        return function(t, e) {
            const n = Pt(t.integerValue || t.doubleValue), r = Pt(e.integerValue || e.doubleValue);
            return n < r ? -1 : n > r ? 1 : n === r ? 0 : 
            // one or both are NaN.
            isNaN(n) ? isNaN(r) ? 0 : -1 : 1;
        }(t, e);

      case 3 /* TimestampValue */ :
        return Ot(t.timestampValue, e.timestampValue);

      case 4 /* ServerTimestampValue */ :
        return Ot($t(t), $t(e));

      case 5 /* StringValue */ :
        return yt(t.stringValue, e.stringValue);

      case 6 /* BlobValue */ :
        return function(t, e) {
            const n = Vt(t), r = Vt(e);
            return n.compareTo(r);
        }(t.bytesValue, e.bytesValue);

      case 7 /* RefValue */ :
        return function(t, e) {
            const n = t.split("/"), r = e.split("/");
            for (let t = 0; t < n.length && t < r.length; t++) {
                const e = yt(n[t], r[t]);
                if (0 !== e) return e;
            }
            return yt(n.length, r.length);
        }(t.referenceValue, e.referenceValue);

      case 8 /* GeoPointValue */ :
        return function(t, e) {
            const n = yt(Pt(t.latitude), Pt(e.latitude));
            if (0 !== n) return n;
            return yt(Pt(t.longitude), Pt(e.longitude));
        }(t.geoPointValue, e.geoPointValue);

      case 9 /* ArrayValue */ :
        return function(t, e) {
            const n = t.values || [], r = e.values || [];
            for (let t = 0; t < n.length && t < r.length; ++t) {
                const e = qt(n[t], r[t]);
                if (e) return e;
            }
            return yt(n.length, r.length);
        }(t.arrayValue, e.arrayValue);

      case 10 /* ObjectValue */ :
        return function(t, e) {
            const n = t.fields || {}, r = Object.keys(n), s = e.fields || {}, i = Object.keys(s);
            // Even though MapValues are likely sorted correctly based on their insertion
            // order (e.g. when received from the backend), local modifications can bring
            // elements out of order. We need to re-sort the elements to ensure that
            // canonical IDs are independent of insertion order.
            r.sort(), i.sort();
            for (let t = 0; t < r.length && t < i.length; ++t) {
                const e = yt(r[t], i[t]);
                if (0 !== e) return e;
                const o = qt(n[r[t]], s[i[t]]);
                if (0 !== o) return o;
            }
            return yt(r.length, i.length);
        }
        /** Returns a reference value for the provided database and key. */ (t.mapValue, e.mapValue);

      default:
        throw g();
    }
}

function Ot(t, e) {
    if ("string" == typeof t && "string" == typeof e && t.length === e.length) return yt(t, e);
    const n = Rt(t), r = Rt(e), s = yt(n.seconds, r.seconds);
    return 0 !== s ? s : yt(n.nanos, r.nanos);
}

function Ct(t, e) {
    return {
        referenceValue: `projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`
    };
}

/** Returns true if `value` is an ArrayValue. */ function Lt(t) {
    return !!t && "arrayValue" in t;
}

/** Returns true if `value` is a NullValue. */ function Ut(t) {
    return !!t && "nullValue" in t;
}

/** Returns true if `value` is NaN. */ function kt(t) {
    return !!t && "doubleValue" in t && isNaN(Number(t.doubleValue));
}

/** Returns true if `value` is a MapValue. */ function jt(t) {
    return !!t && "mapValue" in t;
}

/** Creates a deep copy of `source`. */ function Mt(t) {
    if (t.geoPointValue) return {
        geoPointValue: Object.assign({}, t.geoPointValue)
    };
    if (t.timestampValue && "object" == typeof t.timestampValue) return {
        timestampValue: Object.assign({}, t.timestampValue)
    };
    if (t.mapValue) {
        const e = {
            mapValue: {
                fields: {}
            }
        };
        return Et(t.mapValue.fields, ((t, n) => e.mapValue.fields[t] = Mt(n))), e;
    }
    if (t.arrayValue) {
        const e = {
            arrayValue: {
                values: []
            }
        };
        for (let n = 0; n < (t.arrayValue.values || []).length; ++n) e.arrayValue.values[n] = Mt(t.arrayValue.values[n]);
        return e;
    }
    return Object.assign({}, t);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * An ObjectValue represents a MapValue in the Firestore Proto and offers the
 * ability to add and remove fields (via the ObjectValueBuilder).
 */ class Bt {
    constructor(t) {
        this.value = t;
    }
    static empty() {
        return new Bt({
            mapValue: {}
        });
    }
    /**
     * Returns the value at the given path or null.
     *
     * @param path - the path to search
     * @returns The value at the path or null if the path is not set.
     */    field(t) {
        if (t.isEmpty()) return this.value;
        {
            let e = this.value;
            for (let n = 0; n < t.length - 1; ++n) if (e = (e.mapValue.fields || {})[t.get(n)], 
            !jt(e)) return null;
            return e = (e.mapValue.fields || {})[t.lastSegment()], e || null;
        }
    }
    /**
     * Sets the field to the provided value.
     *
     * @param path - The field path to set.
     * @param value - The value to set.
     */    set(t, e) {
        this.getFieldsMap(t.popLast())[t.lastSegment()] = Mt(e);
    }
    /**
     * Sets the provided fields to the provided values.
     *
     * @param data - A map of fields to values (or null for deletes).
     */    setAll(t) {
        let e = tt.emptyPath(), n = {}, r = [];
        t.forEach(((t, s) => {
            if (!e.isImmediateParentOf(s)) {
                // Insert the accumulated changes at this parent location
                const t = this.getFieldsMap(e);
                this.applyChanges(t, n, r), n = {}, r = [], e = s.popLast();
            }
            t ? n[s.lastSegment()] = Mt(t) : r.push(s.lastSegment());
        }));
        const s = this.getFieldsMap(e);
        this.applyChanges(s, n, r);
    }
    /**
     * Removes the field at the specified path. If there is no field at the
     * specified path, nothing is changed.
     *
     * @param path - The field path to remove.
     */    delete(t) {
        const e = this.field(t.popLast());
        jt(e) && e.mapValue.fields && delete e.mapValue.fields[t.lastSegment()];
    }
    isEqual(t) {
        return Ft(this.value, t.value);
    }
    /**
     * Returns the map that contains the leaf element of `path`. If the parent
     * entry does not yet exist, or if it is not a map, a new map will be created.
     */    getFieldsMap(t) {
        let e = this.value;
        e.mapValue.fields || (e.mapValue = {
            fields: {}
        });
        for (let n = 0; n < t.length; ++n) {
            let r = e.mapValue.fields[t.get(n)];
            jt(r) && r.mapValue.fields || (r = {
                mapValue: {
                    fields: {}
                }
            }, e.mapValue.fields[t.get(n)] = r), e = r;
        }
        return e.mapValue.fields;
    }
    /**
     * Modifies `fieldsMap` by adding, replacing or deleting the specified
     * entries.
     */    applyChanges(t, e, n) {
        Et(e, ((e, n) => t[e] = n));
        for (const e of n) delete t[e];
    }
    clone() {
        return new Bt(Mt(this.value));
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Represents a document in Firestore with a key, version, data and whether it
 * has local mutations applied to it.
 *
 * Documents can transition between states via `convertToFoundDocument()`,
 * `convertToNoDocument()` and `convertToUnknownDocument()`. If a document does
 * not transition to one of these states even after all mutations have been
 * applied, `isValidDocument()` returns false and the document should be removed
 * from all views.
 */ class zt {
    constructor(t, e, n, r, s, i) {
        this.key = t, this.documentType = e, this.version = n, this.readTime = r, this.data = s, 
        this.documentState = i;
    }
    /**
     * Creates a document with no known version or data, but which can serve as
     * base document for mutations.
     */    static newInvalidDocument(t) {
        return new zt(t, 0 /* INVALID */ , vt.min(), vt.min(), Bt.empty(), 0 /* SYNCED */);
    }
    /**
     * Creates a new document that is known to exist with the given data at the
     * given version.
     */    static newFoundDocument(t, e, n) {
        return new zt(t, 1 /* FOUND_DOCUMENT */ , e, vt.min(), n, 0 /* SYNCED */);
    }
    /** Creates a new document that is known to not exist at the given version. */    static newNoDocument(t, e) {
        return new zt(t, 2 /* NO_DOCUMENT */ , e, vt.min(), Bt.empty(), 0 /* SYNCED */);
    }
    /**
     * Creates a new document that is known to exist at the given version but
     * whose data is not known (e.g. a document that was updated without a known
     * base document).
     */    static newUnknownDocument(t, e) {
        return new zt(t, 3 /* UNKNOWN_DOCUMENT */ , e, vt.min(), Bt.empty(), 2 /* HAS_COMMITTED_MUTATIONS */);
    }
    /**
     * Changes the document type to indicate that it exists and that its version
     * and data are known.
     */    convertToFoundDocument(t, e) {
        return this.version = t, this.documentType = 1 /* FOUND_DOCUMENT */ , this.data = e, 
        this.documentState = 0 /* SYNCED */ , this;
    }
    /**
     * Changes the document type to indicate that it doesn't exist at the given
     * version.
     */    convertToNoDocument(t) {
        return this.version = t, this.documentType = 2 /* NO_DOCUMENT */ , this.data = Bt.empty(), 
        this.documentState = 0 /* SYNCED */ , this;
    }
    /**
     * Changes the document type to indicate that it exists at a given version but
     * that its data is not known (e.g. a document that was updated without a known
     * base document).
     */    convertToUnknownDocument(t) {
        return this.version = t, this.documentType = 3 /* UNKNOWN_DOCUMENT */ , this.data = Bt.empty(), 
        this.documentState = 2 /* HAS_COMMITTED_MUTATIONS */ , this;
    }
    setHasCommittedMutations() {
        return this.documentState = 2 /* HAS_COMMITTED_MUTATIONS */ , this;
    }
    setHasLocalMutations() {
        return this.documentState = 1 /* HAS_LOCAL_MUTATIONS */ , this;
    }
    setReadTime(t) {
        return this.readTime = t, this;
    }
    get hasLocalMutations() {
        return 1 /* HAS_LOCAL_MUTATIONS */ === this.documentState;
    }
    get hasCommittedMutations() {
        return 2 /* HAS_COMMITTED_MUTATIONS */ === this.documentState;
    }
    get hasPendingWrites() {
        return this.hasLocalMutations || this.hasCommittedMutations;
    }
    isValidDocument() {
        return 0 /* INVALID */ !== this.documentType;
    }
    isFoundDocument() {
        return 1 /* FOUND_DOCUMENT */ === this.documentType;
    }
    isNoDocument() {
        return 2 /* NO_DOCUMENT */ === this.documentType;
    }
    isUnknownDocument() {
        return 3 /* UNKNOWN_DOCUMENT */ === this.documentType;
    }
    isEqual(t) {
        return t instanceof zt && this.key.isEqual(t.key) && this.version.isEqual(t.version) && this.documentType === t.documentType && this.documentState === t.documentState && this.data.isEqual(t.data);
    }
    mutableCopy() {
        return new zt(this.key, this.documentType, this.version, this.readTime, this.data.clone(), this.documentState);
    }
    toString() {
        return `Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`;
    }
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Visible for testing
class Gt {
    constructor(t, e = null, n = [], r = [], s = null, i = null, o = null) {
        this.path = t, this.collectionGroup = e, this.orderBy = n, this.filters = r, this.limit = s, 
        this.startAt = i, this.endAt = o, this.P = null;
    }
}

/**
 * Initializes a Target with a path and optional additional query constraints.
 * Path must currently be empty if this is a collection group query.
 *
 * NOTE: you should always construct `Target` from `Query.toTarget` instead of
 * using this factory method, because `Query` provides an implicit `orderBy`
 * property.
 */ function Qt(t, e = null, n = [], r = [], s = null, i = null, o = null) {
    return new Gt(t, e, n, r, s, i, o);
}

class Wt extends class {} {
    constructor(t, e, n) {
        super(), this.field = t, this.op = e, this.value = n;
    }
    /**
     * Creates a filter based on the provided arguments.
     */    static create(t, e, n) {
        return t.isKeyField() ? "in" /* IN */ === e || "not-in" /* NOT_IN */ === e ? this.V(t, e, n) : new Yt(t, e, n) : "array-contains" /* ARRAY_CONTAINS */ === e ? new Xt(t, n) : "in" /* IN */ === e ? new Zt(t, n) : "not-in" /* NOT_IN */ === e ? new te(t, n) : "array-contains-any" /* ARRAY_CONTAINS_ANY */ === e ? new ee(t, n) : new Wt(t, e, n);
    }
    static V(t, e, n) {
        return "in" /* IN */ === e ? new Ht(t, n) : new Kt(t, n);
    }
    matches(t) {
        const e = t.data.field(this.field);
        // Types do not have to match in NOT_EQUAL filters.
                return "!=" /* NOT_EQUAL */ === this.op ? null !== e && this.D(qt(e, this.value)) : null !== e && St(this.value) === St(e) && this.D(qt(e, this.value));
        // Only compare types with matching backend order (such as double and int).
        }
    D(t) {
        switch (this.op) {
          case "<" /* LESS_THAN */ :
            return t < 0;

          case "<=" /* LESS_THAN_OR_EQUAL */ :
            return t <= 0;

          case "==" /* EQUAL */ :
            return 0 === t;

          case "!=" /* NOT_EQUAL */ :
            return 0 !== t;

          case ">" /* GREATER_THAN */ :
            return t > 0;

          case ">=" /* GREATER_THAN_OR_EQUAL */ :
            return t >= 0;

          default:
            return g();
        }
    }
    N() {
        return [ "<" /* LESS_THAN */ , "<=" /* LESS_THAN_OR_EQUAL */ , ">" /* GREATER_THAN */ , ">=" /* GREATER_THAN_OR_EQUAL */ , "!=" /* NOT_EQUAL */ , "not-in" /* NOT_IN */ ].indexOf(this.op) >= 0;
    }
}

/** Filter that matches on key fields (i.e. '__name__'). */
class Yt extends Wt {
    constructor(t, e, n) {
        super(t, e, n), this.key = et.fromName(n.referenceValue);
    }
    matches(t) {
        const e = et.comparator(t.key, this.key);
        return this.D(e);
    }
}

/** Filter that matches on key fields within an array. */ class Ht extends Wt {
    constructor(t, e) {
        super(t, "in" /* IN */ , e), this.keys = Jt("in" /* IN */ , e);
    }
    matches(t) {
        return this.keys.some((e => e.isEqual(t.key)));
    }
}

/** Filter that matches on key fields not present within an array. */ class Kt extends Wt {
    constructor(t, e) {
        super(t, "not-in" /* NOT_IN */ , e), this.keys = Jt("not-in" /* NOT_IN */ , e);
    }
    matches(t) {
        return !this.keys.some((e => e.isEqual(t.key)));
    }
}

function Jt(t, e) {
    var n;
    return ((null === (n = e.arrayValue) || void 0 === n ? void 0 : n.values) || []).map((t => et.fromName(t.referenceValue)));
}

/** A Filter that implements the array-contains operator. */ class Xt extends Wt {
    constructor(t, e) {
        super(t, "array-contains" /* ARRAY_CONTAINS */ , e);
    }
    matches(t) {
        const e = t.data.field(this.field);
        return Lt(e) && xt(e.arrayValue, this.value);
    }
}

/** A Filter that implements the IN operator. */ class Zt extends Wt {
    constructor(t, e) {
        super(t, "in" /* IN */ , e);
    }
    matches(t) {
        const e = t.data.field(this.field);
        return null !== e && xt(this.value.arrayValue, e);
    }
}

/** A Filter that implements the not-in operator. */ class te extends Wt {
    constructor(t, e) {
        super(t, "not-in" /* NOT_IN */ , e);
    }
    matches(t) {
        if (xt(this.value.arrayValue, {
            nullValue: "NULL_VALUE"
        })) return !1;
        const e = t.data.field(this.field);
        return null !== e && !xt(this.value.arrayValue, e);
    }
}

/** A Filter that implements the array-contains-any operator. */ class ee extends Wt {
    constructor(t, e) {
        super(t, "array-contains-any" /* ARRAY_CONTAINS_ANY */ , e);
    }
    matches(t) {
        const e = t.data.field(this.field);
        return !(!Lt(e) || !e.arrayValue.values) && e.arrayValue.values.some((t => xt(this.value.arrayValue, t)));
    }
}

/**
 * Represents a bound of a query.
 *
 * The bound is specified with the given components representing a position and
 * whether it's just before or just after the position (relative to whatever the
 * query order is).
 *
 * The position represents a logical index position for a query. It's a prefix
 * of values for the (potentially implicit) order by clauses of a query.
 *
 * Bound provides a function to determine whether a document comes before or
 * after a bound. This is influenced by whether the position is just before or
 * just after the provided values.
 */ class ne {
    constructor(t, e) {
        this.position = t, this.inclusive = e;
    }
}

/**
 * An ordering on a field, in some Direction. Direction defaults to ASCENDING.
 */ class re {
    constructor(t, e = "asc" /* ASCENDING */) {
        this.field = t, this.dir = e;
    }
}

function se(t, e) {
    return t.dir === e.dir && t.field.isEqual(e.field);
}

function ie(t, e) {
    if (null === t) return null === e;
    if (null === e) return !1;
    if (t.inclusive !== e.inclusive || t.position.length !== e.position.length) return !1;
    for (let n = 0; n < t.position.length; n++) {
        if (!Ft(t.position[n], e.position[n])) return !1;
    }
    return !0;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Query encapsulates all the query attributes we support in the SDK. It can
 * be run against the LocalStore, as well as be converted to a `Target` to
 * query the RemoteStore results.
 *
 * Visible for testing.
 */ class oe {
    /**
     * Initializes a Query with a path and optional additional query constraints.
     * Path must currently be empty if this is a collection group query.
     */
    constructor(t, e = null, n = [], r = [], s = null, i = "F" /* First */ , o = null, u = null) {
        this.path = t, this.collectionGroup = e, this.explicitOrderBy = n, this.filters = r, 
        this.limit = s, this.limitType = i, this.startAt = o, this.endAt = u, this.$ = null, 
        // The corresponding `Target` of this `Query` instance.
        this.S = null, this.startAt, this.endAt;
    }
}

/** Creates a new Query for a query that matches all documents at `path` */ function ue(t) {
    return !ct(t.limit) && "L" /* Last */ === t.limitType;
}

function ce(t) {
    return t.explicitOrderBy.length > 0 ? t.explicitOrderBy[0].field : null;
}

function ae(t) {
    for (const e of t.filters) if (e.N()) return e.field;
    return null;
}

/**
 * Checks if any of the provided Operators are included in the query and
 * returns the first one that is, or null if none are.
 */
/**
 * Returns whether the query matches a collection group rather than a specific
 * collection.
 */
function he(t) {
    return null !== t.collectionGroup;
}

/**
 * Returns the implicit order by constraint that is used to execute the Query,
 * which can be different from the order by constraints the user provided (e.g.
 * the SDK and backend always orders by `__name__`).
 */ function le(t) {
    const e = b(t);
    if (null === e.$) {
        e.$ = [];
        const t = ae(e), n = ce(e);
        if (null !== t && null === n) 
        // In order to implicitly add key ordering, we must also add the
        // inequality filter field for it to be a valid query.
        // Note that the default inequality field and key ordering is ascending.
        t.isKeyField() || e.$.push(new re(t)), e.$.push(new re(tt.keyField(), "asc" /* ASCENDING */)); else {
            let t = !1;
            for (const n of e.explicitOrderBy) e.$.push(n), n.field.isKeyField() && (t = !0);
            if (!t) {
                // The order of the implicit key ordering always matches the last
                // explicit order by
                const t = e.explicitOrderBy.length > 0 ? e.explicitOrderBy[e.explicitOrderBy.length - 1].dir : "asc" /* ASCENDING */;
                e.$.push(new re(tt.keyField(), t));
            }
        }
    }
    return e.$;
}

/**
 * Converts this `Query` instance to it's corresponding `Target` representation.
 */ function fe(t) {
    const e = b(t);
    if (!e.S) if ("F" /* First */ === e.limitType) e.S = Qt(e.path, e.collectionGroup, le(e), e.filters, e.limit, e.startAt, e.endAt); else {
        // Flip the orderBy directions since we want the last results
        const t = [];
        for (const n of le(e)) {
            const e = "desc" /* DESCENDING */ === n.dir ? "asc" /* ASCENDING */ : "desc" /* DESCENDING */;
            t.push(new re(n.field, e));
        }
        // We need to swap the cursors to match the now-flipped query ordering.
                const n = e.endAt ? new ne(e.endAt.position, !e.endAt.inclusive) : null, r = e.startAt ? new ne(e.startAt.position, !e.startAt.inclusive) : null;
        // Now return as a LimitType.First query.
        e.S = Qt(e.path, e.collectionGroup, t, e.filters, e.limit, n, r);
    }
    return e.S;
}

function de(t, e) {
    return function(t, e) {
        if (t.limit !== e.limit) return !1;
        if (t.orderBy.length !== e.orderBy.length) return !1;
        for (let n = 0; n < t.orderBy.length; n++) if (!se(t.orderBy[n], e.orderBy[n])) return !1;
        if (t.filters.length !== e.filters.length) return !1;
        for (let s = 0; s < t.filters.length; s++) if (n = t.filters[s], r = e.filters[s], 
        n.op !== r.op || !n.field.isEqual(r.field) || !Ft(n.value, r.value)) return !1;
        var n, r;
        return t.collectionGroup === e.collectionGroup && !!t.path.isEqual(e.path) && !!ie(t.startAt, e.startAt) && ie(t.endAt, e.endAt);
    }(fe(t), fe(e)) && t.limitType === e.limitType;
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns an DoubleValue for `value` that is encoded based the serializer's
 * `useProto3Json` setting.
 */
/**
 * Returns a value for a number that's appropriate to put into a proto.
 * The return value is an IntegerValue if it can safely represent the value,
 * otherwise a DoubleValue is returned.
 */
function we(t, e) {
    return function(t) {
        return "number" == typeof t && Number.isInteger(t) && !at(t) && t <= Number.MAX_SAFE_INTEGER && t >= Number.MIN_SAFE_INTEGER;
    }(e) ? 
    /**
 * Returns an IntegerValue for `value`.
 */
    function(t) {
        return {
            integerValue: "" + t
        };
    }(e) : function(t, e) {
        if (t.F) {
            if (isNaN(e)) return {
                doubleValue: "NaN"
            };
            if (e === 1 / 0) return {
                doubleValue: "Infinity"
            };
            if (e === -1 / 0) return {
                doubleValue: "-Infinity"
            };
        }
        return {
            doubleValue: at(e) ? "-0" : e
        };
    }(t, e);
}

/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Used to represent a field transform on a mutation. */ class me {
    constructor() {
        // Make sure that the structural type of `TransformOperation` is unique.
        // See https://github.com/microsoft/TypeScript/issues/5451
        this._ = void 0;
    }
}

/** Transforms a value into a server-generated timestamp. */ class pe extends me {}

/** Transforms an array value via a union operation. */ class ye extends me {
    constructor(t) {
        super(), this.elements = t;
    }
}

/** Transforms an array value via a remove operation. */ class _e extends me {
    constructor(t) {
        super(), this.elements = t;
    }
}

/**
 * Implements the backend semantics for locally computed NUMERIC_ADD (increment)
 * transforms. Converts all field values to integers or doubles, but unlike the
 * backend does not cap integer values at 2^63. Instead, JavaScript number
 * arithmetic is used and precision loss can occur for values greater than 2^53.
 */ class ge extends me {
    constructor(t, e) {
        super(), this.q = t, this.O = e;
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** A field path and the TransformOperation to perform upon it. */ class ve {
    constructor(t, e) {
        this.field = t, this.transform = e;
    }
}

/**
 * Encodes a precondition for a mutation. This follows the model that the
 * backend accepts with the special case of an explicit "empty" precondition
 * (meaning no precondition).
 */ class be {
    constructor(t, e) {
        this.updateTime = t, this.exists = e;
    }
    /** Creates a new empty Precondition. */    static none() {
        return new be;
    }
    /** Creates a new Precondition with an exists flag. */    static exists(t) {
        return new be(void 0, t);
    }
    /** Creates a new Precondition based on a version a document exists at. */    static updateTime(t) {
        return new be(t);
    }
    /** Returns whether this Precondition is empty. */    get isNone() {
        return void 0 === this.updateTime && void 0 === this.exists;
    }
    isEqual(t) {
        return this.exists === t.exists && (this.updateTime ? !!t.updateTime && this.updateTime.isEqual(t.updateTime) : !t.updateTime);
    }
}

/**
 * A mutation describes a self-contained change to a document. Mutations can
 * create, replace, delete, and update subsets of documents.
 *
 * Mutations not only act on the value of the document but also its version.
 *
 * For local mutations (mutations that haven't been committed yet), we preserve
 * the existing version for Set and Patch mutations. For Delete mutations, we
 * reset the version to 0.
 *
 * Here's the expected transition table.
 *
 * MUTATION           APPLIED TO            RESULTS IN
 *
 * SetMutation        Document(v3)          Document(v3)
 * SetMutation        NoDocument(v3)        Document(v0)
 * SetMutation        InvalidDocument(v0)   Document(v0)
 * PatchMutation      Document(v3)          Document(v3)
 * PatchMutation      NoDocument(v3)        NoDocument(v3)
 * PatchMutation      InvalidDocument(v0)   UnknownDocument(v3)
 * DeleteMutation     Document(v3)          NoDocument(v0)
 * DeleteMutation     NoDocument(v3)        NoDocument(v0)
 * DeleteMutation     InvalidDocument(v0)   NoDocument(v0)
 *
 * For acknowledged mutations, we use the updateTime of the WriteResponse as
 * the resulting version for Set and Patch mutations. As deletes have no
 * explicit update time, we use the commitTime of the WriteResponse for
 * Delete mutations.
 *
 * If a mutation is acknowledged by the backend but fails the precondition check
 * locally, we transition to an `UnknownDocument` and rely on Watch to send us
 * the updated version.
 *
 * Field transforms are used only with Patch and Set Mutations. We use the
 * `updateTransforms` message to store transforms, rather than the `transforms`s
 * messages.
 *
 * ## Subclassing Notes
 *
 * Every type of mutation needs to implement its own applyToRemoteDocument() and
 * applyToLocalView() to implement the actual behavior of applying the mutation
 * to some source document (see `setMutationApplyToRemoteDocument()` for an
 * example).
 */ class Ee {}

/**
 * A mutation that creates or replaces the document at the given key with the
 * object value contents.
 */ class Te extends Ee {
    constructor(t, e, n, r = []) {
        super(), this.key = t, this.value = e, this.precondition = n, this.fieldTransforms = r, 
        this.type = 0 /* Set */;
    }
}

/**
 * A mutation that modifies fields of the document at the given key with the
 * given values. The values are applied through a field mask:
 *
 *  * When a field is in both the mask and the values, the corresponding field
 *    is updated.
 *  * When a field is in neither the mask nor the values, the corresponding
 *    field is unmodified.
 *  * When a field is in the mask but not in the values, the corresponding field
 *    is deleted.
 *  * When a field is not in the mask but is in the values, the values map is
 *    ignored.
 */ class Ie extends Ee {
    constructor(t, e, n, r, s = []) {
        super(), this.key = t, this.data = e, this.fieldMask = n, this.precondition = r, 
        this.fieldTransforms = s, this.type = 1 /* Patch */;
    }
}

/** A mutation that deletes the document at the given key. */ class Ae extends Ee {
    constructor(t, e) {
        super(), this.key = t, this.precondition = e, this.type = 2 /* Delete */ , this.fieldTransforms = [];
    }
}

/**
 * A mutation that verifies the existence of the document at the given key with
 * the provided precondition.
 *
 * The `verify` operation is only used in Transactions, and this class serves
 * primarily to facilitate serialization into protos.
 */ class Re extends Ee {
    constructor(t, e) {
        super(), this.key = t, this.precondition = e, this.type = 3 /* Verify */ , this.fieldTransforms = [];
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Pe = (() => {
    const t = {
        asc: "ASCENDING",
        desc: "DESCENDING"
    };
    return t;
})(), Ve = (() => {
    const t = {
        "<": "LESS_THAN",
        "<=": "LESS_THAN_OR_EQUAL",
        ">": "GREATER_THAN",
        ">=": "GREATER_THAN_OR_EQUAL",
        "==": "EQUAL",
        "!=": "NOT_EQUAL",
        "array-contains": "ARRAY_CONTAINS",
        in: "IN",
        "not-in": "NOT_IN",
        "array-contains-any": "ARRAY_CONTAINS_ANY"
    };
    return t;
})();

/**
 * This class generates JsonObject values for the Datastore API suitable for
 * sending to either GRPC stub methods or via the JSON/HTTP REST API.
 *
 * The serializer supports both Protobuf.js and Proto3 JSON formats. By
 * setting `useProto3Json` to true, the serializer will use the Proto3 JSON
 * format.
 *
 * For a description of the Proto3 JSON format check
 * https://developers.google.com/protocol-buffers/docs/proto3#json
 *
 * TODO(klimt): We can remove the databaseId argument if we keep the full
 * resource name in documents.
 */
class De {
    constructor(t, e) {
        this.databaseId = t, this.F = e;
    }
}

/**
 * Returns a value for a number (or null) that's appropriate to put into
 * a google.protobuf.Int32Value proto.
 * DO NOT USE THIS FOR ANYTHING ELSE.
 * This method cheats. It's typed as returning "number" because that's what
 * our generated proto interfaces say Int32Value must be. But GRPC actually
 * expects a { value: <number> } struct.
 */
/**
 * Returns a value for a Date that's appropriate to put into a proto.
 */
function Ne(t, e) {
    if (t.F) {
        return `${new Date(1e3 * e.seconds).toISOString().replace(/\.\d*/, "").replace("Z", "")}.${("000000000" + e.nanoseconds).slice(-9)}Z`;
    }
    return {
        seconds: "" + e.seconds,
        nanos: e.nanoseconds
    };
}

/**
 * Returns a value for bytes that's appropriate to put in a proto.
 *
 * Visible for testing.
 */
function $e(t, e) {
    return t.F ? e.toBase64() : e.toUint8Array();
}

function Se(t, e) {
    return Ne(t, e.toTimestamp());
}

function Fe(t) {
    return v(!!t), vt.fromTimestamp(function(t) {
        const e = Rt(t);
        return new gt(e.seconds, e.nanos);
    }(t));
}

function xe(t, e) {
    return function(t) {
        return new X([ "projects", t.projectId, "databases", t.database ]);
    }(t).child("documents").child(e).canonicalString();
}

function qe(t, e) {
    return xe(t.databaseId, e.path);
}

function Oe(t, e) {
    const n = function(t) {
        const e = X.fromString(t);
        return v(We(e)), e;
    }(e);
    if (n.get(1) !== t.databaseId.projectId) throw new U(A, "Tried to deserialize key from different project: " + n.get(1) + " vs " + t.databaseId.projectId);
    if (n.get(3) !== t.databaseId.database) throw new U(A, "Tried to deserialize key from different database: " + n.get(3) + " vs " + t.databaseId.database);
    return new et((v((r = n).length > 4 && "documents" === r.get(4)), r.popFirst(5)));
    var r;
    /** Creates a Document proto from key and fields (but no create/update time) */}

function Ce(t, e) {
    return xe(t.databaseId, e);
}

function Le(t) {
    return new X([ "projects", t.databaseId.projectId, "databases", t.databaseId.database ]).canonicalString();
}

function Ue(t, e, n) {
    return {
        name: qe(t, e),
        fields: n.value.mapValue.fields
    };
}

function ke(t, e) {
    return "found" in e ? function(t, e) {
        v(!!e.found), e.found.name, e.found.updateTime;
        const n = Oe(t, e.found.name), r = Fe(e.found.updateTime), s = new Bt({
            mapValue: {
                fields: e.found.fields
            }
        });
        return zt.newFoundDocument(n, r, s);
    }(t, e) : "missing" in e ? function(t, e) {
        v(!!e.missing), v(!!e.readTime);
        const n = Oe(t, e.missing), r = Fe(e.readTime);
        return zt.newNoDocument(n, r);
    }(t, e) : g();
}

function je(t, e) {
    let n;
    if (e instanceof Te) n = {
        update: Ue(t, e.key, e.value)
    }; else if (e instanceof Ae) n = {
        delete: qe(t, e.key)
    }; else if (e instanceof Ie) n = {
        update: Ue(t, e.key, e.data),
        updateMask: Qe(e.fieldMask)
    }; else {
        if (!(e instanceof Re)) return g();
        n = {
            verify: qe(t, e.key)
        };
    }
    return e.fieldTransforms.length > 0 && (n.updateTransforms = e.fieldTransforms.map((t => function(t, e) {
        const n = e.transform;
        if (n instanceof pe) return {
            fieldPath: e.field.canonicalString(),
            setToServerValue: "REQUEST_TIME"
        };
        if (n instanceof ye) return {
            fieldPath: e.field.canonicalString(),
            appendMissingElements: {
                values: n.elements
            }
        };
        if (n instanceof _e) return {
            fieldPath: e.field.canonicalString(),
            removeAllFromArray: {
                values: n.elements
            }
        };
        if (n instanceof ge) return {
            fieldPath: e.field.canonicalString(),
            increment: n.O
        };
        throw g();
    }(0, t)))), e.precondition.isNone || (n.currentDocument = function(t, e) {
        return void 0 !== e.updateTime ? {
            updateTime: Se(t, e.updateTime)
        } : void 0 !== e.exists ? {
            exists: e.exists
        } : g();
    }(t, e.precondition)), n;
}

function Me(t, e) {
    // Dissect the path into parent, collectionId, and optional key filter.
    const n = {
        structuredQuery: {}
    }, r = e.path;
    null !== e.collectionGroup ? (n.parent = Ce(t, r), n.structuredQuery.from = [ {
        collectionId: e.collectionGroup,
        allDescendants: !0
    } ]) : (n.parent = Ce(t, r.popLast()), n.structuredQuery.from = [ {
        collectionId: r.lastSegment()
    } ]);
    const s = function(t) {
        if (0 === t.length) return;
        const e = t.map((t => 
        // visible for testing
        function(t) {
            if ("==" /* EQUAL */ === t.op) {
                if (kt(t.value)) return {
                    unaryFilter: {
                        field: Ge(t.field),
                        op: "IS_NAN"
                    }
                };
                if (Ut(t.value)) return {
                    unaryFilter: {
                        field: Ge(t.field),
                        op: "IS_NULL"
                    }
                };
            } else if ("!=" /* NOT_EQUAL */ === t.op) {
                if (kt(t.value)) return {
                    unaryFilter: {
                        field: Ge(t.field),
                        op: "IS_NOT_NAN"
                    }
                };
                if (Ut(t.value)) return {
                    unaryFilter: {
                        field: Ge(t.field),
                        op: "IS_NOT_NULL"
                    }
                };
            }
            return {
                fieldFilter: {
                    field: Ge(t.field),
                    op: ze(t.op),
                    value: t.value
                }
            };
        }(t)));
        if (1 === e.length) return e[0];
        return {
            compositeFilter: {
                op: "AND",
                filters: e
            }
        };
    }(e.filters);
    s && (n.structuredQuery.where = s);
    const i = function(t) {
        if (0 === t.length) return;
        return t.map((t => 
        // visible for testing
        function(t) {
            return {
                field: Ge(t.field),
                direction: Be(t.dir)
            };
        }(t)));
    }(e.orderBy);
    i && (n.structuredQuery.orderBy = i);
    const o = function(t, e) {
        return t.F || ct(e) ? e : {
            value: e
        };
    }(t, e.limit);
    var u;
    return null !== o && (n.structuredQuery.limit = o), e.startAt && (n.structuredQuery.startAt = {
        before: (u = e.startAt).inclusive,
        values: u.position
    }), e.endAt && (n.structuredQuery.endAt = function(t) {
        return {
            before: !t.inclusive,
            values: t.position
        };
    }
    // visible for testing
    (e.endAt)), n;
}

function Be(t) {
    return Pe[t];
}

// visible for testing
function ze(t) {
    return Ve[t];
}

function Ge(t) {
    return {
        fieldPath: t.canonicalString()
    };
}

function Qe(t) {
    const e = [];
    return t.fields.forEach((t => e.push(t.canonicalString()))), {
        fieldPaths: e
    };
}

function We(t) {
    // Resource names have at least 4 components (project ID, database ID)
    return t.length >= 4 && "projects" === t.get(0) && "databases" === t.get(2);
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Ye(t) {
    return new De(t, /* useProto3Json= */ !0);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A helper for running delayed tasks following an exponential backoff curve
 * between attempts.
 *
 * Each delay is made up of a "base" delay which follows the exponential
 * backoff curve, and a +/- 50% "jitter" that is calculated and added to the
 * base delay. This prevents clients from accidentally synchronizing their
 * delays causing spikes of load to the backend.
 */
class He {
    constructor(
    /**
     * The AsyncQueue to run backoff operations on.
     */
    t, 
    /**
     * The ID to use when scheduling backoff operations on the AsyncQueue.
     */
    e, 
    /**
     * The initial delay (used as the base delay on the first retry attempt).
     * Note that jitter will still be applied, so the actual delay could be as
     * little as 0.5*initialDelayMs.
     */
    n = 1e3
    /**
     * The multiplier to use to determine the extended base delay after each
     * attempt.
     */ , r = 1.5
    /**
     * The maximum base delay after which no further backoff is performed.
     * Note that jitter will still be applied, so the actual delay could be as
     * much as 1.5*maxDelayMs.
     */ , s = 6e4) {
        this.C = t, this.timerId = e, this.L = n, this.U = r, this.k = s, this.j = 0, this.M = null, 
        /** The last backoff attempt, as epoch milliseconds. */
        this.B = Date.now(), this.reset();
    }
    /**
     * Resets the backoff delay.
     *
     * The very next backoffAndWait() will have no delay. If it is called again
     * (i.e. due to an error), initialDelayMs (plus jitter) will be used, and
     * subsequent ones will increase according to the backoffFactor.
     */    reset() {
        this.j = 0;
    }
    /**
     * Resets the backoff delay to the maximum delay (e.g. for use after a
     * RESOURCE_EXHAUSTED error).
     */    G() {
        this.j = this.k;
    }
    /**
     * Returns a promise that resolves after currentDelayMs, and increases the
     * delay for any subsequent attempts. If there was a pending backoff operation
     * already, it will be canceled.
     */    W(t) {
        // Cancel any pending backoff operation.
        this.cancel();
        // First schedule using the current base (which may be 0 and should be
        // honored as such).
        const e = Math.floor(this.j + this.Y()), n = Math.max(0, Date.now() - this.B), r = Math.max(0, e - n);
        // Guard against lastAttemptTime being in the future due to a clock change.
                r > 0 && m("ExponentialBackoff", `Backing off for ${r} ms (base delay: ${this.j} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`), 
        this.M = this.C.enqueueAfterDelay(this.timerId, r, (() => (this.B = Date.now(), 
        t()))), 
        // Apply backoff factor to determine next delay and ensure it is within
        // bounds.
        this.j *= this.U, this.j < this.L && (this.j = this.L), this.j > this.k && (this.j = this.k);
    }
    H() {
        null !== this.M && (this.M.skipDelay(), this.M = null);
    }
    cancel() {
        null !== this.M && (this.M.cancel(), this.M = null);
    }
    /** Returns a random value in the range [-currentBaseMs/2, currentBaseMs/2] */    Y() {
        return (Math.random() - .5) * this.j;
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Datastore and its related methods are a wrapper around the external Google
 * Cloud Datastore grpc API, which provides an interface that is more convenient
 * for the rest of the client SDK architecture to consume.
 */
/**
 * An implementation of Datastore that exposes additional state for internal
 * consumption.
 */
class Ke extends class {} {
    constructor(t, e, n, r) {
        super(), this.authCredentials = t, this.appCheckCredentials = e, this.K = n, this.q = r, 
        this.J = !1;
    }
    X() {
        if (this.J) throw new U(S, "The client has already been terminated.");
    }
    /** Invokes the provided RPC with auth and AppCheck tokens. */    m(t, e, n) {
        return this.X(), Promise.all([ this.authCredentials.getToken(), this.appCheckCredentials.getToken() ]).then((([r, s]) => this.K.m(t, e, n, r, s))).catch((t => {
            throw "FirebaseError" === t.name ? (t.code === N && (this.authCredentials.invalidateToken(), 
            this.appCheckCredentials.invalidateToken()), t) : new U(I, t.toString());
        }));
    }
    /** Invokes the provided RPC with streamed results with auth and AppCheck tokens. */    T(t, e, n) {
        return this.X(), Promise.all([ this.authCredentials.getToken(), this.appCheckCredentials.getToken() ]).then((([r, s]) => this.K.T(t, e, n, r, s))).catch((t => {
            throw "FirebaseError" === t.name ? (t.code === N && (this.authCredentials.invalidateToken(), 
            this.appCheckCredentials.invalidateToken()), t) : new U(I, t.toString());
        }));
    }
    terminate() {
        this.J = !0;
    }
}

// TODO(firestorexp): Make sure there is only one Datastore instance per
// firestore-exp client.
async function Je(t, e) {
    const n = b(t), r = Le(n.q) + "/documents", s = {
        writes: e.map((t => je(n.q, t)))
    };
    await n.m("Commit", r, s);
}

async function Xe(t, e) {
    const n = b(t), r = Le(n.q) + "/documents", s = {
        documents: e.map((t => qe(n.q, t)))
    }, i = await n.T("BatchGetDocuments", r, s), o = new Map;
    i.forEach((t => {
        const e = ke(n.q, t);
        o.set(e.key.toString(), e);
    }));
    const u = [];
    return e.forEach((t => {
        const e = o.get(t.toString());
        v(!!e), u.push(e);
    })), u;
}

async function Ze(t, e) {
    const n = b(t), r = Me(n.q, fe(e));
    return (await n.T("RunQuery", r.parent, {
        structuredQuery: r.structuredQuery
    })).filter((t => !!t.document)).map((t => function(t, e, n) {
        const r = Oe(t, e.name), s = Fe(e.updateTime), i = new Bt({
            mapValue: {
                fields: e.fields
            }
        }), o = zt.newFoundDocument(r, s, i);
        return n && o.setHasCommittedMutations(), n ? o.setHasCommittedMutations() : o;
    }(n.q, t.document, void 0)));
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const tn = new Map;

/**
 * An instance map that ensures only one Datastore exists per Firestore
 * instance.
 */
/**
 * Returns an initialized and started Datastore for the given Firestore
 * instance. Callers must invoke removeComponents() when the Firestore
 * instance is terminated.
 */
function en(t) {
    if (t._terminated) throw new U(S, "The client has already been terminated.");
    if (!tn.has(t)) {
        m("ComponentProvider", "Initializing Datastore");
        const i = function(t) {
            return new wt(t, fetch.bind(null));
        }((e = t._databaseId, n = t.app.options.appId || "", r = t._persistenceKey, s = t._freezeSettings(), 
        new H(e, n, r, s.host, s.ssl, s.experimentalForceLongPolling, s.experimentalAutoDetectLongPolling, s.useFetchStreams))), o = Ye(t._databaseId), u = function(t, e, n, r) {
            return new Ke(t, e, n, r);
        }(t._authCredentials, t._appCheckCredentials, i, o);
        tn.set(t, u);
    }
    var e, n, r, s;
    /**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */    return tn.get(t);
}

/**
 * Removes all components associated with the provided instance. Must be called
 * when the `Firestore` instance is terminated.
 */
/**
 * A concrete type describing all the values that can be applied via a
 * user-supplied `FirestoreSettings` object. This is a separate type so that
 * defaults can be supplied and the value can be checked for equality.
 */
class nn {
    constructor(t) {
        var e;
        if (void 0 === t.host) {
            if (void 0 !== t.ssl) throw new U(A, "Can't provide ssl option if host option is not set");
            this.host = "firestore.googleapis.com", this.ssl = true;
        } else this.host = t.host, this.ssl = null === (e = t.ssl) || void 0 === e || e;
        if (this.credentials = t.credentials, this.ignoreUndefinedProperties = !!t.ignoreUndefinedProperties, 
        void 0 === t.cacheSizeBytes) this.cacheSizeBytes = 41943040; else {
            if (-1 !== t.cacheSizeBytes && t.cacheSizeBytes < 1048576) throw new U(A, "cacheSizeBytes must be at least 1048576");
            this.cacheSizeBytes = t.cacheSizeBytes;
        }
        this.experimentalForceLongPolling = !!t.experimentalForceLongPolling, this.experimentalAutoDetectLongPolling = !!t.experimentalAutoDetectLongPolling, 
        this.useFetchStreams = !!t.useFetchStreams, function(t, e, n, r) {
            if (!0 === e && !0 === r) throw new U(A, `${t} and ${n} cannot be used together.`);
        }("experimentalForceLongPolling", t.experimentalForceLongPolling, "experimentalAutoDetectLongPolling", t.experimentalAutoDetectLongPolling);
    }
    isEqual(t) {
        return this.host === t.host && this.ssl === t.ssl && this.credentials === t.credentials && this.cacheSizeBytes === t.cacheSizeBytes && this.experimentalForceLongPolling === t.experimentalForceLongPolling && this.experimentalAutoDetectLongPolling === t.experimentalAutoDetectLongPolling && this.ignoreUndefinedProperties === t.ignoreUndefinedProperties && this.useFetchStreams === t.useFetchStreams;
    }
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * The Cloud Firestore service interface.
 *
 * Do not call this constructor directly. Instead, use {@link getFirestore}.
 */ class rn {
    /** @hideconstructor */
    constructor(t, e, n) {
        this._authCredentials = e, this._appCheckCredentials = n, 
        /**
         * Whether it's a Firestore or Firestore Lite instance.
         */
        this.type = "firestore-lite", this._persistenceKey = "(lite)", this._settings = new nn({}), 
        this._settingsFrozen = !1, t instanceof K ? this._databaseId = t : (this._app = t, 
        this._databaseId = function(t) {
            if (!Object.prototype.hasOwnProperty.apply(t.options, [ "projectId" ])) throw new U(A, '"projectId" not provided in firebase.initializeApp.');
            return new K(t.options.projectId);
        }
        /**
 * Initializes a new instance of Cloud Firestore with the provided settings.
 * Can only be called before any other functions, including
 * {@link getFirestore}. If the custom settings are empty, this function is
 * equivalent to calling {@link getFirestore}.
 *
 * @param app - The {@link @firebase/app#FirebaseApp} with which the `Firestore` instance will
 * be associated.
 * @param settings - A settings object to configure the `Firestore` instance.
 * @returns A newly initialized `Firestore` instance.
 */ (t));
    }
    /**
     * The {@link @firebase/app#FirebaseApp} associated with this `Firestore` service
     * instance.
     */    get app() {
        if (!this._app) throw new U(S, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
        return this._app;
    }
    get _initialized() {
        return this._settingsFrozen;
    }
    get _terminated() {
        return void 0 !== this._terminateTask;
    }
    _setSettings(t) {
        if (this._settingsFrozen) throw new U(S, "Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");
        this._settings = new nn(t), void 0 !== t.credentials && (this._authCredentials = function(t) {
            if (!t) return new M;
            switch (t.type) {
              case "gapi":
                const e = t.client;
                // Make sure this really is a Gapi client.
                                return v(!("object" != typeof e || null === e || !e.auth || !e.auth.getAuthHeaderValueForFirstParty)), 
                new Q(e, t.sessionIndex || "0", t.iamToken || null);

              case "provider":
                return t.client;

              default:
                throw new U(A, "makeAuthCredentialsProvider failed due to invalid credential type");
            }
        }(t.credentials));
    }
    _getSettings() {
        return this._settings;
    }
    _freezeSettings() {
        return this._settingsFrozen = !0, this._settings;
    }
    _delete() {
        return this._terminateTask || (this._terminateTask = this._terminate()), this._terminateTask;
    }
    /** Returns a JSON-serializable representation of this `Firestore` instance. */    toJSON() {
        return {
            app: this._app,
            databaseId: this._databaseId,
            settings: this._settings
        };
    }
    /**
     * Terminates all components used by this client. Subclasses can override
     * this method to clean up their own dependencies, but must also call this
     * method.
     *
     * Only ever called once.
     */    _terminate() {
        return function(t) {
            const e = tn.get(t);
            e && (m("ComponentProvider", "Removing Datastore"), tn.delete(t), e.terminate());
        }(this), Promise.resolve();
    }
}

function sn(t, e) {
    const n = __vite_ssr_import_0__._getProvider(t, "firestore/lite");
    if (n.isInitialized()) throw new U(S, "Firestore can only be initialized once per app.");
    return n.initialize({
        options: e
    });
}

/**
 * Returns the existing `Firestore` instance that is associated with the
 * provided {@link @firebase/app#FirebaseApp}. If no instance exists, initializes a new
 * instance with default settings.
 *
 * @param app - The {@link @firebase/app#FirebaseApp} instance that the returned `Firestore`
 * instance is associated with.
 * @returns The `Firestore` instance of the provided app.
 */ function on(e = __vite_ssr_import_0__.getApp()) {
    return __vite_ssr_import_0__._getProvider(e, "firestore/lite").getImmediate();
}

/**
 * Modify this instance to communicate with the Cloud Firestore emulator.
 *
 * Note: This must be called before this instance has been used to do any
 * operations.
 *
 * @param firestore - The `Firestore` instance to configure to connect to the
 * emulator.
 * @param host - the emulator host (ex: localhost).
 * @param port - the emulator port (ex: 9000).
 * @param options.mockUserToken - the mock auth token to use for unit testing
 * Security Rules.
 */ function un(t, e, n, r = {}) {
    var s;
    const i = (t = ot(t, rn))._getSettings();
    if ("firestore.googleapis.com" !== i.host && i.host !== e && y("Host has been set in both settings() and useEmulator(), emulator host will be used"), 
    t._setSettings(Object.assign(Object.assign({}, i), {
        host: `${e}:${n}`,
        ssl: !1
    })), r.mockUserToken) {
        let e, n;
        if ("string" == typeof r.mockUserToken) e = r.mockUserToken, n = l.MOCK_USER; else {
            // Let createMockUserToken validate first (catches common mistakes like
            // invalid field "uid" and missing field "sub" / "user_id".)
            e = __vite_ssr_import_3__.createMockUserToken(r.mockUserToken, null === (s = t._app) || void 0 === s ? void 0 : s.options.projectId);
            const i = r.mockUserToken.sub || r.mockUserToken.user_id;
            if (!i) throw new U(A, "mockUserToken must contain 'sub' or 'user_id' field!");
            n = new l(i);
        }
        t._authCredentials = new B(new j(e, n));
    }
}

/**
 * Terminates the provided `Firestore` instance.
 *
 * After calling `terminate()` only the `clearIndexedDbPersistence()` functions
 * may be used. Any other function will throw a `FirestoreError`. Termination
 * does not cancel any pending writes, and any promises that are awaiting a
 * response from the server will not be resolved.
 *
 * To restart after termination, create a new instance of `Firestore` with
 * {@link getFirestore}.
 *
 * Note: Under normal circumstances, calling `terminate()` is not required. This
 * function is useful only when you want to force this instance to release all of
 * its resources or in combination with {@link clearIndexedDbPersistence} to
 * ensure that all local state is destroyed between test runs.
 *
 * @param firestore - The `Firestore` instance to terminate.
 * @returns A `Promise` that is resolved when the instance has been successfully
 * terminated.
 */ function cn(t) {
    return t = ot(t, rn), __vite_ssr_import_0__._removeServiceInstance(t.app, "firestore/lite"), t._delete();
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A `DocumentReference` refers to a document location in a Firestore database
 * and can be used to write, read, or listen to the location. The document at
 * the referenced location may or may not exist.
 */
class an {
    /** @hideconstructor */
    constructor(t, 
    /**
     * If provided, the `FirestoreDataConverter` associated with this instance.
     */
    e, n) {
        this.converter = e, this._key = n, 
        /** The type of this Firestore reference. */
        this.type = "document", this.firestore = t;
    }
    get _path() {
        return this._key.path;
    }
    /**
     * The document's identifier within its collection.
     */    get id() {
        return this._key.path.lastSegment();
    }
    /**
     * A string representing the path of the referenced document (relative
     * to the root of the database).
     */    get path() {
        return this._key.path.canonicalString();
    }
    /**
     * The collection this `DocumentReference` belongs to.
     */    get parent() {
        return new ln(this.firestore, this.converter, this._key.path.popLast());
    }
    withConverter(t) {
        return new an(this.firestore, t, this._key);
    }
}

/**
 * A `Query` refers to a query which you can read or listen to. You can also
 * construct refined `Query` objects by adding filters and ordering.
 */ class hn {
    // This is the lite version of the Query class in the main SDK.
    /** @hideconstructor protected */
    constructor(t, 
    /**
     * If provided, the `FirestoreDataConverter` associated with this instance.
     */
    e, n) {
        this.converter = e, this._query = n, 
        /** The type of this Firestore reference. */
        this.type = "query", this.firestore = t;
    }
    withConverter(t) {
        return new hn(this.firestore, t, this._query);
    }
}

/**
 * A `CollectionReference` object can be used for adding documents, getting
 * document references, and querying for documents (using {@link query}).
 */ class ln extends hn {
    /** @hideconstructor */
    constructor(t, e, n) {
        super(t, e, new oe(n)), this._path = n, 
        /** The type of this Firestore reference. */
        this.type = "collection";
    }
    /** The collection's identifier. */    get id() {
        return this._query.path.lastSegment();
    }
    /**
     * A string representing the path of the referenced collection (relative
     * to the root of the database).
     */    get path() {
        return this._query.path.canonicalString();
    }
    /**
     * A reference to the containing `DocumentReference` if this is a
     * subcollection. If this isn't a subcollection, the reference is null.
     */    get parent() {
        const t = this._path.popLast();
        return t.isEmpty() ? null : new an(this.firestore, 
        /* converter= */ null, new et(t));
    }
    withConverter(t) {
        return new ln(this.firestore, t, this._path);
    }
}

function fn(t, e, ...n) {
    if (t = __vite_ssr_import_3__.getModularInstance(t), nt("collection", "path", e), t instanceof rn) {
        const r = X.fromString(e, ...n);
        return st(r), new ln(t, /* converter= */ null, r);
    }
    {
        if (!(t instanceof an || t instanceof ln)) throw new U(A, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
        const r = t._path.child(X.fromString(e, ...n));
        return st(r), new ln(t.firestore, 
        /* converter= */ null, r);
    }
}

// TODO(firestorelite): Consider using ErrorFactory -
// https://github.com/firebase/firebase-js-sdk/blob/0131e1f/packages/util/src/errors.ts#L106
/**
 * Creates and returns a new `Query` instance that includes all documents in the
 * database that are contained in a collection or subcollection with the
 * given `collectionId`.
 *
 * @param firestore - A reference to the root `Firestore` instance.
 * @param collectionId - Identifies the collections to query over. Every
 * collection or subcollection with this ID as the last segment of its path
 * will be included. Cannot contain a slash.
 * @returns The created `Query`.
 */ function dn(t, e) {
    if (t = ot(t, rn), nt("collectionGroup", "collection id", e), e.indexOf("/") >= 0) throw new U(A, `Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);
    return new hn(t, 
    /* converter= */ null, 
    /**
 * Creates a new Query for a collection group query that matches all documents
 * within the provided collection group.
 */
    function(t) {
        return new oe(X.emptyPath(), t);
    }(e));
}

function wn(t, e, ...n) {
    if (t = __vite_ssr_import_3__.getModularInstance(t), 
    // We allow omission of 'pathString' but explicitly prohibit passing in both
    // 'undefined' and 'null'.
    1 === arguments.length && (e = pt.R()), nt("doc", "path", e), t instanceof rn) {
        const r = X.fromString(e, ...n);
        return rt(r), new an(t, 
        /* converter= */ null, new et(r));
    }
    {
        if (!(t instanceof an || t instanceof ln)) throw new U(A, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
        const r = t._path.child(X.fromString(e, ...n));
        return rt(r), new an(t.firestore, t instanceof ln ? t.converter : null, new et(r));
    }
}

/**
 * Returns true if the provided references are equal.
 *
 * @param left - A reference to compare.
 * @param right - A reference to compare.
 * @returns true if the references point to the same location in the same
 * Firestore database.
 */ function mn(t, e) {
    return t = __vite_ssr_import_3__.getModularInstance(t), e = __vite_ssr_import_3__.getModularInstance(e), (t instanceof an || t instanceof ln) && (e instanceof an || e instanceof ln) && (t.firestore === e.firestore && t.path === e.path && t.converter === e.converter);
}

/**
 * Returns true if the provided queries point to the same collection and apply
 * the same constraints.
 *
 * @param left - A `Query` to compare.
 * @param right - A `Query` to compare.
 * @returns true if the references point to the same location in the same
 * Firestore database.
 */ function pn(t, e) {
    return t = __vite_ssr_import_3__.getModularInstance(t), e = __vite_ssr_import_3__.getModularInstance(e), t instanceof hn && e instanceof hn && (t.firestore === e.firestore && de(t._query, e._query) && t.converter === e.converter);
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A `FieldPath` refers to a field in a document. The path may consist of a
 * single field name (referring to a top-level field in the document), or a
 * list of field names (referring to a nested field in the document).
 *
 * Create a `FieldPath` by providing field names. If more than one field
 * name is provided, the path will point to a nested field in a document.
 */ class yn {
    /**
     * Creates a `FieldPath` from the provided field names. If more than one field
     * name is provided, the path will point to a nested field in a document.
     *
     * @param fieldNames - A list of field names.
     */
    constructor(...t) {
        for (let e = 0; e < t.length; ++e) if (0 === t[e].length) throw new U(A, "Invalid field name at argument $(i + 1). Field names must not be empty.");
        this._internalPath = new tt(t);
    }
    /**
     * Returns true if this `FieldPath` is equal to the provided one.
     *
     * @param other - The `FieldPath` to compare against.
     * @returns true if this `FieldPath` is equal to the provided one.
     */    isEqual(t) {
        return this._internalPath.isEqual(t._internalPath);
    }
}

/**
 * Returns a special sentinel `FieldPath` to refer to the ID of a document.
 * It can be used in queries to sort or filter by the document ID.
 */ function _n() {
    return new yn("__name__");
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * An immutable object representing an array of bytes.
 */ class gn {
    /** @hideconstructor */
    constructor(t) {
        this._byteString = t;
    }
    /**
     * Creates a new `Bytes` object from the given Base64 string, converting it to
     * bytes.
     *
     * @param base64 - The Base64 string used to create the `Bytes` object.
     */    static fromBase64String(t) {
        try {
            return new gn(It.fromBase64String(t));
        } catch (t) {
            throw new U(A, "Failed to construct data from Base64 string: " + t);
        }
    }
    /**
     * Creates a new `Bytes` object from the given Uint8Array.
     *
     * @param array - The Uint8Array used to create the `Bytes` object.
     */    static fromUint8Array(t) {
        return new gn(It.fromUint8Array(t));
    }
    /**
     * Returns the underlying bytes as a Base64-encoded string.
     *
     * @returns The Base64-encoded string created from the `Bytes` object.
     */    toBase64() {
        return this._byteString.toBase64();
    }
    /**
     * Returns the underlying bytes in a new `Uint8Array`.
     *
     * @returns The Uint8Array created from the `Bytes` object.
     */    toUint8Array() {
        return this._byteString.toUint8Array();
    }
    /**
     * Returns a string representation of the `Bytes` object.
     *
     * @returns A string representation of the `Bytes` object.
     */    toString() {
        return "Bytes(base64: " + this.toBase64() + ")";
    }
    /**
     * Returns true if this `Bytes` object is equal to the provided one.
     *
     * @param other - The `Bytes` object to compare against.
     * @returns true if this `Bytes` object is equal to the provided one.
     */    isEqual(t) {
        return this._byteString.isEqual(t._byteString);
    }
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Sentinel values that can be used when writing document fields with `set()`
 * or `update()`.
 */ class vn {
    /**
     * @param _methodName - The public API endpoint that returns this class.
     * @hideconstructor
     */
    constructor(t) {
        this._methodName = t;
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * An immutable object representing a geographic location in Firestore. The
 * location is represented as latitude/longitude pair.
 *
 * Latitude values are in the range of [-90, 90].
 * Longitude values are in the range of [-180, 180].
 */ class bn {
    /**
     * Creates a new immutable `GeoPoint` object with the provided latitude and
     * longitude values.
     * @param latitude - The latitude as number between -90 and 90.
     * @param longitude - The longitude as number between -180 and 180.
     */
    constructor(t, e) {
        if (!isFinite(t) || t < -90 || t > 90) throw new U(A, "Latitude must be a number between -90 and 90, but was: " + t);
        if (!isFinite(e) || e < -180 || e > 180) throw new U(A, "Longitude must be a number between -180 and 180, but was: " + e);
        this._lat = t, this._long = e;
    }
    /**
     * The latitude of this `GeoPoint` instance.
     */    get latitude() {
        return this._lat;
    }
    /**
     * The longitude of this `GeoPoint` instance.
     */    get longitude() {
        return this._long;
    }
    /**
     * Returns true if this `GeoPoint` is equal to the provided one.
     *
     * @param other - The `GeoPoint` to compare against.
     * @returns true if this `GeoPoint` is equal to the provided one.
     */    isEqual(t) {
        return this._lat === t._lat && this._long === t._long;
    }
    /** Returns a JSON-serializable representation of this GeoPoint. */    toJSON() {
        return {
            latitude: this._lat,
            longitude: this._long
        };
    }
    /**
     * Actually private to JS consumers of our API, so this function is prefixed
     * with an underscore.
     */    _compareTo(t) {
        return yt(this._lat, t._lat) || yt(this._long, t._long);
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const En = /^__.*__$/;

/** The result of parsing document data (e.g. for a setData call). */ class Tn {
    constructor(t, e, n) {
        this.data = t, this.fieldMask = e, this.fieldTransforms = n;
    }
    toMutation(t, e) {
        return null !== this.fieldMask ? new Ie(t, this.data, this.fieldMask, e, this.fieldTransforms) : new Te(t, this.data, e, this.fieldTransforms);
    }
}

/** The result of parsing "update" data (i.e. for an updateData call). */ class In {
    constructor(t, 
    // The fieldMask does not include document transforms.
    e, n) {
        this.data = t, this.fieldMask = e, this.fieldTransforms = n;
    }
    toMutation(t, e) {
        return new Ie(t, this.data, this.fieldMask, e, this.fieldTransforms);
    }
}

function An(t) {
    switch (t) {
      case 0 /* Set */ :
 // fall through
              case 2 /* MergeSet */ :
 // fall through
              case 1 /* Update */ :
        return !0;

      case 3 /* Argument */ :
      case 4 /* ArrayArgument */ :
        return !1;

      default:
        throw g();
    }
}

/** A "context" object passed around while parsing user data. */ class Rn {
    /**
     * Initializes a ParseContext with the given source and path.
     *
     * @param settings - The settings for the parser.
     * @param databaseId - The database ID of the Firestore instance.
     * @param serializer - The serializer to use to generate the Value proto.
     * @param ignoreUndefinedProperties - Whether to ignore undefined properties
     * rather than throw.
     * @param fieldTransforms - A mutable list of field transforms encountered
     * while parsing the data.
     * @param fieldMask - A mutable list of field paths encountered while parsing
     * the data.
     *
     * TODO(b/34871131): We don't support array paths right now, so path can be
     * null to indicate the context represents any location within an array (in
     * which case certain features will not work and errors will be somewhat
     * compromised).
     */
    constructor(t, e, n, r, s, i) {
        this.settings = t, this.databaseId = e, this.q = n, this.ignoreUndefinedProperties = r, 
        // Minor hack: If fieldTransforms is undefined, we assume this is an
        // external call and we need to validate the entire path.
        void 0 === s && this.Z(), this.fieldTransforms = s || [], this.fieldMask = i || [];
    }
    get path() {
        return this.settings.path;
    }
    get tt() {
        return this.settings.tt;
    }
    /** Returns a new context with the specified settings overwritten. */    et(t) {
        return new Rn(Object.assign(Object.assign({}, this.settings), t), this.databaseId, this.q, this.ignoreUndefinedProperties, this.fieldTransforms, this.fieldMask);
    }
    nt(t) {
        var e;
        const n = null === (e = this.path) || void 0 === e ? void 0 : e.child(t), r = this.et({
            path: n,
            rt: !1
        });
        return r.st(t), r;
    }
    it(t) {
        var e;
        const n = null === (e = this.path) || void 0 === e ? void 0 : e.child(t), r = this.et({
            path: n,
            rt: !1
        });
        return r.Z(), r;
    }
    ot(t) {
        // TODO(b/34871131): We don't support array paths right now; so make path
        // undefined.
        return this.et({
            path: void 0,
            rt: !0
        });
    }
    ut(t) {
        return Qn(t, this.settings.methodName, this.settings.ct || !1, this.path, this.settings.at);
    }
    /** Returns 'true' if 'fieldPath' was traversed when creating this context. */    contains(t) {
        return void 0 !== this.fieldMask.find((e => t.isPrefixOf(e))) || void 0 !== this.fieldTransforms.find((e => t.isPrefixOf(e.field)));
    }
    Z() {
        // TODO(b/34871131): Remove null check once we have proper paths for fields
        // within arrays.
        if (this.path) for (let t = 0; t < this.path.length; t++) this.st(this.path.get(t));
    }
    st(t) {
        if (0 === t.length) throw this.ut("Document fields must not be empty");
        if (An(this.tt) && En.test(t)) throw this.ut('Document fields cannot begin and end with "__"');
    }
}

/**
 * Helper for parsing raw user input (provided via the API) into internal model
 * classes.
 */ class Pn {
    constructor(t, e, n) {
        this.databaseId = t, this.ignoreUndefinedProperties = e, this.q = n || Ye(t);
    }
    /** Creates a new top-level parse context. */    ht(t, e, n, r = !1) {
        return new Rn({
            tt: t,
            methodName: e,
            at: n,
            path: tt.emptyPath(),
            rt: !1,
            ct: r
        }, this.databaseId, this.q, this.ignoreUndefinedProperties);
    }
}

function Vn(t) {
    const e = t._freezeSettings(), n = Ye(t._databaseId);
    return new Pn(t._databaseId, !!e.ignoreUndefinedProperties, n);
}

/** Parse document data from a set() call. */ function Dn(t, e, n, r, s, i = {}) {
    const o = t.ht(i.merge || i.mergeFields ? 2 /* MergeSet */ : 0 /* Set */ , e, n, s);
    Mn("Data must be an object, but it was:", o, r);
    const u = kn(r, o);
    let c, a;
    if (i.merge) c = new Tt(o.fieldMask), a = o.fieldTransforms; else if (i.mergeFields) {
        const t = [];
        for (const r of i.mergeFields) {
            const s = Bn(e, r, n);
            if (!o.contains(s)) throw new U(A, `Field '${s}' is specified in your field mask but missing from your input data.`);
            Wn(t, s) || t.push(s);
        }
        c = new Tt(t), a = o.fieldTransforms.filter((t => c.covers(t.field)));
    } else c = null, a = o.fieldTransforms;
    return new Tn(new Bt(u), c, a);
}

class Nn extends vn {
    _toFieldTransform(t) {
        if (2 /* MergeSet */ !== t.tt) throw 1 /* Update */ === t.tt ? t.ut(`${this._methodName}() can only appear at the top level of your update data`) : t.ut(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);
        // No transform to add for a delete, but we need to add it to our
        // fieldMask so it gets deleted.
        return t.fieldMask.push(t.path), null;
    }
    isEqual(t) {
        return t instanceof Nn;
    }
}

/**
 * Creates a child context for parsing SerializableFieldValues.
 *
 * This is different than calling `ParseContext.contextWith` because it keeps
 * the fieldTransforms and fieldMask separate.
 *
 * The created context has its `dataSource` set to `UserDataSource.Argument`.
 * Although these values are used with writes, any elements in these FieldValues
 * are not considered writes since they cannot contain any FieldValue sentinels,
 * etc.
 *
 * @param fieldValue - The sentinel FieldValue for which to create a child
 *     context.
 * @param context - The parent context.
 * @param arrayElement - Whether or not the FieldValue has an array.
 */ function $n(t, e, n) {
    return new Rn({
        tt: 3 /* Argument */ ,
        at: e.settings.at,
        methodName: t._methodName,
        rt: n
    }, e.databaseId, e.q, e.ignoreUndefinedProperties);
}

class Sn extends vn {
    _toFieldTransform(t) {
        return new ve(t.path, new pe);
    }
    isEqual(t) {
        return t instanceof Sn;
    }
}

class Fn extends vn {
    constructor(t, e) {
        super(t), this.lt = e;
    }
    _toFieldTransform(t) {
        const e = $n(this, t, 
        /*array=*/ !0), n = this.lt.map((t => Un(t, e))), r = new ye(n);
        return new ve(t.path, r);
    }
    isEqual(t) {
        // TODO(mrschmidt): Implement isEquals
        return this === t;
    }
}

class xn extends vn {
    constructor(t, e) {
        super(t), this.lt = e;
    }
    _toFieldTransform(t) {
        const e = $n(this, t, 
        /*array=*/ !0), n = this.lt.map((t => Un(t, e))), r = new _e(n);
        return new ve(t.path, r);
    }
    isEqual(t) {
        // TODO(mrschmidt): Implement isEquals
        return this === t;
    }
}

class qn extends vn {
    constructor(t, e) {
        super(t), this.ft = e;
    }
    _toFieldTransform(t) {
        const e = new ge(t.q, we(t.q, this.ft));
        return new ve(t.path, e);
    }
    isEqual(t) {
        // TODO(mrschmidt): Implement isEquals
        return this === t;
    }
}

/** Parse update data from an update() call. */ function On(t, e, n, r) {
    const s = t.ht(1 /* Update */ , e, n);
    Mn("Data must be an object, but it was:", s, r);
    const i = [], o = Bt.empty();
    Et(r, ((t, r) => {
        const u = Gn(e, t, n);
        // For Compat types, we have to "extract" the underlying types before
        // performing validation.
                r = __vite_ssr_import_3__.getModularInstance(r);
        const c = s.it(u);
        if (r instanceof Nn) 
        // Add it to the field mask, but don't add anything to updateData.
        i.push(u); else {
            const t = Un(r, c);
            null != t && (i.push(u), o.set(u, t));
        }
    }));
    const u = new Tt(i);
    return new In(o, u, s.fieldTransforms);
}

/** Parse update data from a list of field/value arguments. */ function Cn(t, e, n, r, s, i) {
    const o = t.ht(1 /* Update */ , e, n), u = [ Bn(e, r, n) ], c = [ s ];
    if (i.length % 2 != 0) throw new U(A, `Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);
    for (let t = 0; t < i.length; t += 2) u.push(Bn(e, i[t])), c.push(i[t + 1]);
    const a = [], l = Bt.empty();
    // We iterate in reverse order to pick the last value for a field if the
    // user specified the field multiple times.
    for (let t = u.length - 1; t >= 0; --t) if (!Wn(a, u[t])) {
        const e = u[t];
        let n = c[t];
        // For Compat types, we have to "extract" the underlying types before
        // performing validation.
                n = __vite_ssr_import_3__.getModularInstance(n);
        const r = o.it(e);
        if (n instanceof Nn) 
        // Add it to the field mask, but don't add anything to updateData.
        a.push(e); else {
            const t = Un(n, r);
            null != t && (a.push(e), l.set(e, t));
        }
    }
    const f = new Tt(a);
    return new In(l, f, o.fieldTransforms);
}

/**
 * Parse a "query value" (e.g. value in a where filter or a value in a cursor
 * bound).
 *
 * @param allowArrays - Whether the query value is an array that may directly
 * contain additional arrays (e.g. the operand of an `in` query).
 */ function Ln(t, e, n, r = !1) {
    return Un(n, t.ht(r ? 4 /* ArrayArgument */ : 3 /* Argument */ , e));
}

/**
 * Parses user data to Protobuf Values.
 *
 * @param input - Data to be parsed.
 * @param context - A context object representing the current path being parsed,
 * the source of the data being parsed, etc.
 * @returns The parsed value, or null if the value was a FieldValue sentinel
 * that should not be included in the resulting parsed data.
 */ function Un(t, e) {
    if (jn(
    // Unwrap the API type from the Compat SDK. This will return the API type
    // from firestore-exp.
    t = __vite_ssr_import_3__.getModularInstance(t))) return Mn("Unsupported field value:", e, t), kn(t, e);
    if (t instanceof vn) 
    // FieldValues usually parse into transforms (except deleteField())
    // in which case we do not want to include this field in our parsed data
    // (as doing so will overwrite the field directly prior to the transform
    // trying to transform it). So we don't add this location to
    // context.fieldMask and we return null as our parsing result.
    /**
 * "Parses" the provided FieldValueImpl, adding any necessary transforms to
 * context.fieldTransforms.
 */
    return function(t, e) {
        // Sentinels are only supported with writes, and not within arrays.
        if (!An(e.tt)) throw e.ut(`${t._methodName}() can only be used with update() and set()`);
        if (!e.path) throw e.ut(`${t._methodName}() is not currently supported inside arrays`);
        const n = t._toFieldTransform(e);
        n && e.fieldTransforms.push(n);
    }
    /**
 * Helper to parse a scalar value (i.e. not an Object, Array, or FieldValue)
 *
 * @returns The parsed value
 */ (t, e), null;
    if (void 0 === t && e.ignoreUndefinedProperties) 
    // If the input is undefined it can never participate in the fieldMask, so
    // don't handle this below. If `ignoreUndefinedProperties` is false,
    // `parseScalarValue` will reject an undefined value.
    return null;
    if (
    // If context.path is null we are inside an array and we don't support
    // field mask paths more granular than the top-level array.
    e.path && e.fieldMask.push(e.path), t instanceof Array) {
        // TODO(b/34871131): Include the path containing the array in the error
        // message.
        // In the case of IN queries, the parsed data is an array (representing
        // the set of values to be included for the IN query) that may directly
        // contain additional arrays (each representing an individual field
        // value), so we disable this validation.
        if (e.settings.rt && 4 /* ArrayArgument */ !== e.tt) throw e.ut("Nested arrays are not supported");
        return function(t, e) {
            const n = [];
            let r = 0;
            for (const s of t) {
                let t = Un(s, e.ot(r));
                null == t && (
                // Just include nulls in the array for fields being replaced with a
                // sentinel.
                t = {
                    nullValue: "NULL_VALUE"
                }), n.push(t), r++;
            }
            return {
                arrayValue: {
                    values: n
                }
            };
        }(t, e);
    }
    return function(t, e) {
        if (null === (t = __vite_ssr_import_3__.getModularInstance(t))) return {
            nullValue: "NULL_VALUE"
        };
        if ("number" == typeof t) return we(e.q, t);
        if ("boolean" == typeof t) return {
            booleanValue: t
        };
        if ("string" == typeof t) return {
            stringValue: t
        };
        if (t instanceof Date) {
            const n = gt.fromDate(t);
            return {
                timestampValue: Ne(e.q, n)
            };
        }
        if (t instanceof gt) {
            // Firestore backend truncates precision down to microseconds. To ensure
            // offline mode works the same with regards to truncation, perform the
            // truncation immediately without waiting for the backend to do that.
            const n = new gt(t.seconds, 1e3 * Math.floor(t.nanoseconds / 1e3));
            return {
                timestampValue: Ne(e.q, n)
            };
        }
        if (t instanceof bn) return {
            geoPointValue: {
                latitude: t.latitude,
                longitude: t.longitude
            }
        };
        if (t instanceof gn) return {
            bytesValue: $e(e.q, t._byteString)
        };
        if (t instanceof an) {
            const n = e.databaseId, r = t.firestore._databaseId;
            if (!r.isEqual(n)) throw e.ut(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);
            return {
                referenceValue: xe(t.firestore._databaseId || e.databaseId, t._key.path)
            };
        }
        throw e.ut(`Unsupported field value: ${it(t)}`);
    }
    /**
 * Checks whether an object looks like a JSON object that should be converted
 * into a struct. Normal class/prototype instances are considered to look like
 * JSON objects since they should be converted to a struct value. Arrays, Dates,
 * GeoPoints, etc. are not considered to look like JSON objects since they map
 * to specific FieldValue types other than ObjectValue.
 */ (t, e);
}

function kn(t, e) {
    const n = {};
    return !function(t) {
        for (const e in t) if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
        return !0;
    }(t) ? Et(t, ((t, r) => {
        const s = Un(r, e.nt(t));
        null != s && (n[t] = s);
    })) : 
    // If we encounter an empty object, we explicitly add it to the update
    // mask to ensure that the server creates a map entry.
    e.path && e.path.length > 0 && e.fieldMask.push(e.path), {
        mapValue: {
            fields: n
        }
    };
}

function jn(t) {
    return !("object" != typeof t || null === t || t instanceof Array || t instanceof Date || t instanceof gt || t instanceof bn || t instanceof gn || t instanceof an || t instanceof vn);
}

function Mn(t, e, n) {
    if (!jn(n) || !function(t) {
        return "object" == typeof t && null !== t && (Object.getPrototypeOf(t) === Object.prototype || null === Object.getPrototypeOf(t));
    }(n)) {
        const r = it(n);
        throw "an object" === r ? e.ut(t + " a custom object") : e.ut(t + " " + r);
    }
}

/**
 * Helper that calls fromDotSeparatedString() but wraps any error thrown.
 */ function Bn(t, e, n) {
    if ((
    // If required, replace the FieldPath Compat class with with the firestore-exp
    // FieldPath.
    e = __vite_ssr_import_3__.getModularInstance(e)) instanceof yn) return e._internalPath;
    if ("string" == typeof e) return Gn(t, e);
    throw Qn("Field path arguments must be of type string or ", t, 
    /* hasConverter= */ !1, 
    /* path= */ void 0, n);
}

/**
 * Matches any characters in a field path string that are reserved.
 */ const zn = new RegExp("[~\\*/\\[\\]]");

/**
 * Wraps fromDotSeparatedString with an error message about the method that
 * was thrown.
 * @param methodName - The publicly visible method name
 * @param path - The dot-separated string form of a field path which will be
 * split on dots.
 * @param targetDoc - The document against which the field path will be
 * evaluated.
 */ function Gn(t, e, n) {
    if (e.search(zn) >= 0) throw Qn(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`, t, 
    /* hasConverter= */ !1, 
    /* path= */ void 0, n);
    try {
        return new yn(...e.split("."))._internalPath;
    } catch (r) {
        throw Qn(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`, t, 
        /* hasConverter= */ !1, 
        /* path= */ void 0, n);
    }
}

function Qn(t, e, n, r, s) {
    const i = r && !r.isEmpty(), o = void 0 !== s;
    let u = `Function ${e}() called with invalid data`;
    n && (u += " (via `toFirestore()`)"), u += ". ";
    let c = "";
    return (i || o) && (c += " (found", i && (c += ` in field ${r}`), o && (c += ` in document ${s}`), 
    c += ")"), new U(A, u + t + c);
}

/** Checks `haystack` if FieldPath `needle` is present. Runs in O(n). */ function Wn(t, e) {
    return t.some((t => t.isEqual(e)));
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A `DocumentSnapshot` contains data read from a document in your Firestore
 * database. The data can be extracted with `.data()` or `.get(<field>)` to
 * get a specific field.
 *
 * For a `DocumentSnapshot` that points to a non-existing document, any data
 * access will return 'undefined'. You can use the `exists()` method to
 * explicitly verify a document's existence.
 */ class Yn {
    // Note: This class is stripped down version of the DocumentSnapshot in
    // the legacy SDK. The changes are:
    // - No support for SnapshotMetadata.
    // - No support for SnapshotOptions.
    /** @hideconstructor protected */
    constructor(t, e, n, r, s) {
        this._firestore = t, this._userDataWriter = e, this._key = n, this._document = r, 
        this._converter = s;
    }
    /** Property of the `DocumentSnapshot` that provides the document's ID. */    get id() {
        return this._key.path.lastSegment();
    }
    /**
     * The `DocumentReference` for the document included in the `DocumentSnapshot`.
     */    get ref() {
        return new an(this._firestore, this._converter, this._key);
    }
    /**
     * Signals whether or not the document at the snapshot's location exists.
     *
     * @returns true if the document exists.
     */    exists() {
        return null !== this._document;
    }
    /**
     * Retrieves all fields in the document as an `Object`. Returns `undefined` if
     * the document doesn't exist.
     *
     * @returns An `Object` containing all fields in the document or `undefined`
     * if the document doesn't exist.
     */    data() {
        if (this._document) {
            if (this._converter) {
                // We only want to use the converter and create a new DocumentSnapshot
                // if a converter has been provided.
                const t = new Hn(this._firestore, this._userDataWriter, this._key, this._document, 
                /* converter= */ null);
                return this._converter.fromFirestore(t);
            }
            return this._userDataWriter.convertValue(this._document.data.value);
        }
    }
    /**
     * Retrieves the field specified by `fieldPath`. Returns `undefined` if the
     * document or field doesn't exist.
     *
     * @param fieldPath - The path (for example 'foo' or 'foo.bar') to a specific
     * field.
     * @returns The data at the specified field location or undefined if no such
     * field exists in the document.
     */
    // We are using `any` here to avoid an explicit cast by our users.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    get(t) {
        if (this._document) {
            const e = this._document.data.field(Xn("DocumentSnapshot.get", t));
            if (null !== e) return this._userDataWriter.convertValue(e);
        }
    }
}

/**
 * A `QueryDocumentSnapshot` contains data read from a document in your
 * Firestore database as part of a query. The document is guaranteed to exist
 * and its data can be extracted with `.data()` or `.get(<field>)` to get a
 * specific field.
 *
 * A `QueryDocumentSnapshot` offers the same API surface as a
 * `DocumentSnapshot`. Since query results contain only existing documents, the
 * `exists` property will always be true and `data()` will never return
 * 'undefined'.
 */ class Hn extends Yn {
    /**
     * Retrieves all fields in the document as an `Object`.
     *
     * @override
     * @returns An `Object` containing all fields in the document.
     */
    data() {
        return super.data();
    }
}

/**
 * A `QuerySnapshot` contains zero or more `DocumentSnapshot` objects
 * representing the results of a query. The documents can be accessed as an
 * array via the `docs` property or enumerated using the `forEach` method. The
 * number of documents can be determined via the `empty` and `size`
 * properties.
 */ class Kn {
    /** @hideconstructor */
    constructor(t, e) {
        this._docs = e, this.query = t;
    }
    /** An array of all the documents in the `QuerySnapshot`. */    get docs() {
        return [ ...this._docs ];
    }
    /** The number of documents in the `QuerySnapshot`. */    get size() {
        return this.docs.length;
    }
    /** True if there are no documents in the `QuerySnapshot`. */    get empty() {
        return 0 === this.docs.length;
    }
    /**
     * Enumerates all of the documents in the `QuerySnapshot`.
     *
     * @param callback - A callback to be called with a `QueryDocumentSnapshot` for
     * each document in the snapshot.
     * @param thisArg - The `this` binding for the callback.
     */    forEach(t, e) {
        this._docs.forEach(t, e);
    }
}

/**
 * Returns true if the provided snapshots are equal.
 *
 * @param left - A snapshot to compare.
 * @param right - A snapshot to compare.
 * @returns true if the snapshots are equal.
 */ function Jn(t, e) {
    return t = __vite_ssr_import_3__.getModularInstance(t), e = __vite_ssr_import_3__.getModularInstance(e), t instanceof Yn && e instanceof Yn ? t._firestore === e._firestore && t._key.isEqual(e._key) && (null === t._document ? null === e._document : t._document.isEqual(e._document)) && t._converter === e._converter : t instanceof Kn && e instanceof Kn && (pn(t.query, e.query) && _t(t.docs, e.docs, Jn));
}

/**
 * Helper that calls `fromDotSeparatedString()` but wraps any error thrown.
 */ function Xn(t, e) {
    return "string" == typeof e ? Gn(t, e) : e instanceof yn ? e._internalPath : e._delegate._internalPath;
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A `QueryConstraint` is used to narrow the set of documents returned by a
 * Firestore query. `QueryConstraint`s are created by invoking {@link where},
 * {@link orderBy}, {@link (startAt:1)}, {@link (startAfter:1)}, {@link
 * endBefore:1}, {@link (endAt:1)}, {@link limit} or {@link limitToLast} and
 * can then be passed to {@link query} to create a new query instance that
 * also contains this `QueryConstraint`.
 */
class Zn {}

/**
 * Creates a new immutable instance of {@link Query} that is extended to also include
 * additional query constraints.
 *
 * @param query - The {@link Query} instance to use as a base for the new constraints.
 * @param queryConstraints - The list of {@link QueryConstraint}s to apply.
 * @throws if any of the provided query constraints cannot be combined with the
 * existing or new constraints.
 */ function tr(t, ...e) {
    for (const n of e) t = n._apply(t);
    return t;
}

class er extends Zn {
    constructor(t, e, n) {
        super(), this.dt = t, this.wt = e, this.yt = n, this.type = "where";
    }
    _apply(t) {
        const e = Vn(t.firestore), n = function(t, e, n, r, s, i, o) {
            let u;
            if (s.isKeyField()) {
                if ("array-contains" /* ARRAY_CONTAINS */ === i || "array-contains-any" /* ARRAY_CONTAINS_ANY */ === i) throw new U(A, `Invalid Query. You can't perform '${i}' queries on documentId().`);
                if ("in" /* IN */ === i || "not-in" /* NOT_IN */ === i) {
                    pr(o, i);
                    const e = [];
                    for (const n of o) e.push(mr(r, t, n));
                    u = {
                        arrayValue: {
                            values: e
                        }
                    };
                } else u = mr(r, t, o);
            } else "in" /* IN */ !== i && "not-in" /* NOT_IN */ !== i && "array-contains-any" /* ARRAY_CONTAINS_ANY */ !== i || pr(o, i), 
            u = Ln(n, e, o, 
            /* allowArrays= */ "in" /* IN */ === i || "not-in" /* NOT_IN */ === i);
            const c = Wt.create(s, i, u);
            return function(t, e) {
                if (e.N()) {
                    const n = ae(t);
                    if (null !== n && !n.isEqual(e.field)) throw new U(A, `Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${e.field.toString()}'`);
                    const r = ce(t);
                    null !== r && yr(t, e.field, r);
                }
                const n = function(t, e) {
                    for (const n of t.filters) if (e.indexOf(n.op) >= 0) return n.op;
                    return null;
                }(t, 
                /**
 * Given an operator, returns the set of operators that cannot be used with it.
 *
 * Operators in a query must adhere to the following set of rules:
 * 1. Only one array operator is allowed.
 * 2. Only one disjunctive operator is allowed.
 * 3. `NOT_EQUAL` cannot be used with another `NOT_EQUAL` operator.
 * 4. `NOT_IN` cannot be used with array, disjunctive, or `NOT_EQUAL` operators.
 *
 * Array operators: `ARRAY_CONTAINS`, `ARRAY_CONTAINS_ANY`
 * Disjunctive operators: `IN`, `ARRAY_CONTAINS_ANY`, `NOT_IN`
 */
                function(t) {
                    switch (t) {
                      case "!=" /* NOT_EQUAL */ :
                        return [ "!=" /* NOT_EQUAL */ , "not-in" /* NOT_IN */ ];

                      case "array-contains" /* ARRAY_CONTAINS */ :
                        return [ "array-contains" /* ARRAY_CONTAINS */ , "array-contains-any" /* ARRAY_CONTAINS_ANY */ , "not-in" /* NOT_IN */ ];

                      case "in" /* IN */ :
                        return [ "array-contains-any" /* ARRAY_CONTAINS_ANY */ , "in" /* IN */ , "not-in" /* NOT_IN */ ];

                      case "array-contains-any" /* ARRAY_CONTAINS_ANY */ :
                        return [ "array-contains" /* ARRAY_CONTAINS */ , "array-contains-any" /* ARRAY_CONTAINS_ANY */ , "in" /* IN */ , "not-in" /* NOT_IN */ ];

                      case "not-in" /* NOT_IN */ :
                        return [ "array-contains" /* ARRAY_CONTAINS */ , "array-contains-any" /* ARRAY_CONTAINS_ANY */ , "in" /* IN */ , "not-in" /* NOT_IN */ , "!=" /* NOT_EQUAL */ ];

                      default:
                        return [];
                    }
                }(e.op));
                if (null !== n) 
                // Special case when it's a duplicate op to give a slightly clearer error message.
                throw n === e.op ? new U(A, `Invalid query. You cannot use more than one '${e.op.toString()}' filter.`) : new U(A, `Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`);
            }(t, c), c;
        }(t._query, "where", e, t.firestore._databaseId, this.dt, this.wt, this.yt);
        return new hn(t.firestore, t.converter, function(t, e) {
            const n = t.filters.concat([ e ]);
            return new oe(t.path, t.collectionGroup, t.explicitOrderBy.slice(), n, t.limit, t.limitType, t.startAt, t.endAt);
        }(t._query, n));
    }
}

/**
 * Creates a {@link QueryConstraint} that enforces that documents must contain the
 * specified field and that the value should satisfy the relation constraint
 * provided.
 *
 * @param fieldPath - The path to compare
 * @param opStr - The operation string (e.g "&lt;", "&lt;=", "==", "&lt;",
 *   "&lt;=", "!=").
 * @param value - The value for comparison
 * @returns The created {@link Query}.
 */ function nr(t, e, n) {
    const r = e, s = Xn("where", t);
    return new er(s, r, n);
}

class rr extends Zn {
    constructor(t, e) {
        super(), this.dt = t, this._t = e, this.type = "orderBy";
    }
    _apply(t) {
        const e = function(t, e, n) {
            if (null !== t.startAt) throw new U(A, "Invalid query. You must not call startAt() or startAfter() before calling orderBy().");
            if (null !== t.endAt) throw new U(A, "Invalid query. You must not call endAt() or endBefore() before calling orderBy().");
            const r = new re(e, n);
            return function(t, e) {
                if (null === ce(t)) {
                    // This is the first order by. It must match any inequality.
                    const n = ae(t);
                    null !== n && yr(t, n, e.field);
                }
            }(t, r), r;
        }
        /**
 * Create a `Bound` from a query and a document.
 *
 * Note that the `Bound` will always include the key of the document
 * and so only the provided document will compare equal to the returned
 * position.
 *
 * Will throw if the document does not contain all fields of the order by
 * of the query or if any of the fields in the order by are an uncommitted
 * server timestamp.
 */ (t._query, this.dt, this._t);
        return new hn(t.firestore, t.converter, function(t, e) {
            // TODO(dimond): validate that orderBy does not list the same key twice.
            const n = t.explicitOrderBy.concat([ e ]);
            return new oe(t.path, t.collectionGroup, n, t.filters.slice(), t.limit, t.limitType, t.startAt, t.endAt);
        }(t._query, e));
    }
}

/**
 * Creates a {@link QueryConstraint} that sorts the query result by the
 * specified field, optionally in descending order instead of ascending.
 *
 * @param fieldPath - The field to sort by.
 * @param directionStr - Optional direction to sort by ('asc' or 'desc'). If
 * not specified, order will be ascending.
 * @returns The created {@link Query}.
 */ function sr(t, e = "asc") {
    const n = e, r = Xn("orderBy", t);
    return new rr(r, n);
}

class ir extends Zn {
    constructor(t, e, n) {
        super(), this.type = t, this.gt = e, this.vt = n;
    }
    _apply(t) {
        return new hn(t.firestore, t.converter, function(t, e, n) {
            return new oe(t.path, t.collectionGroup, t.explicitOrderBy.slice(), t.filters.slice(), e, n, t.startAt, t.endAt);
        }(t._query, this.gt, this.vt));
    }
}

/**
 * Creates a {@link QueryConstraint} that only returns the first matching documents.
 *
 * @param limit - The maximum number of items to return.
 * @returns The created {@link Query}.
 */ function or(t) {
    return ut("limit", t), new ir("limit", t, "F" /* First */);
}

/**
 * Creates a {@link QueryConstraint} that only returns the last matching documents.
 *
 * You must specify at least one `orderBy` clause for `limitToLast` queries,
 * otherwise an exception will be thrown during execution.
 *
 * @param limit - The maximum number of items to return.
 * @returns The created {@link Query}.
 */ function ur(t) {
    return ut("limitToLast", t), new ir("limitToLast", t, "L" /* Last */);
}

class cr extends Zn {
    constructor(t, e, n) {
        super(), this.type = t, this.bt = e, this.Et = n;
    }
    _apply(t) {
        const e = wr(t, this.type, this.bt, this.Et);
        return new hn(t.firestore, t.converter, function(t, e) {
            return new oe(t.path, t.collectionGroup, t.explicitOrderBy.slice(), t.filters.slice(), t.limit, t.limitType, e, t.endAt);
        }(t._query, e));
    }
}

function ar(...t) {
    return new cr("startAt", t, 
    /*inclusive=*/ !0);
}

function hr(...t) {
    return new cr("startAfter", t, 
    /*inclusive=*/ !1);
}

class lr extends Zn {
    constructor(t, e, n) {
        super(), this.type = t, this.bt = e, this.Et = n;
    }
    _apply(t) {
        const e = wr(t, this.type, this.bt, this.Et);
        return new hn(t.firestore, t.converter, function(t, e) {
            return new oe(t.path, t.collectionGroup, t.explicitOrderBy.slice(), t.filters.slice(), t.limit, t.limitType, t.startAt, e);
        }(t._query, e));
    }
}

function fr(...t) {
    return new lr("endBefore", t, 
    /*inclusive=*/ !1);
}

function dr(...t) {
    return new lr("endAt", t, /*inclusive=*/ !0);
}

/** Helper function to create a bound from a document or fields */ function wr(t, e, n, r) {
    if (n[0] = __vite_ssr_import_3__.getModularInstance(n[0]), n[0] instanceof Yn) return function(t, e, n, r, s) {
        if (!r) throw new U(P, `Can't use a DocumentSnapshot that doesn't exist for ${n}().`);
        const i = [];
        // Because people expect to continue/end a query at the exact document
        // provided, we need to use the implicit sort order rather than the explicit
        // sort order, because it's guaranteed to contain the document key. That way
        // the position becomes unambiguous and the query continues/ends exactly at
        // the provided document. Without the key (by using the explicit sort
        // orders), multiple documents could match the position, yielding duplicate
        // results.
                for (const n of le(t)) if (n.field.isKeyField()) i.push(Ct(e, r.key)); else {
            const t = r.data.field(n.field);
            if (Dt(t)) throw new U(A, 'Invalid query. You are trying to start or end a query using a document for which the field "' + n.field + '" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');
            if (null === t) {
                const t = n.field.canonicalString();
                throw new U(A, `Invalid query. You are trying to start or end a query using a document for which the field '${t}' (used as the orderBy) does not exist.`);
            }
            i.push(t);
        }
        return new ne(i, s);
    }
    /**
 * Converts a list of field values to a `Bound` for the given query.
 */ (t._query, t.firestore._databaseId, e, n[0]._document, r);
    {
        const s = Vn(t.firestore);
        return function(t, e, n, r, s, i) {
            // Use explicit order by's because it has to match the query the user made
            const o = t.explicitOrderBy;
            if (s.length > o.length) throw new U(A, `Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);
            const u = [];
            for (let i = 0; i < s.length; i++) {
                const c = s[i];
                if (o[i].field.isKeyField()) {
                    if ("string" != typeof c) throw new U(A, `Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof c}`);
                    if (!he(t) && -1 !== c.indexOf("/")) throw new U(A, `Invalid query. When querying a collection and ordering by documentId(), the value passed to ${r}() must be a plain document ID, but '${c}' contains a slash.`);
                    const n = t.path.child(X.fromString(c));
                    if (!et.isDocumentKey(n)) throw new U(A, `Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${r}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);
                    const s = new et(n);
                    u.push(Ct(e, s));
                } else {
                    const t = Ln(n, r, c);
                    u.push(t);
                }
            }
            return new ne(u, i);
        }
        /**
 * Parses the given `documentIdValue` into a `ReferenceValue`, throwing
 * appropriate errors if the value is anything other than a `DocumentReference`
 * or `string`, or if the string is malformed.
 */ (t._query, t.firestore._databaseId, s, e, n, r);
    }
}

function mr(t, e, n) {
    if ("string" == typeof (n = __vite_ssr_import_3__.getModularInstance(n))) {
        if ("" === n) throw new U(A, "Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");
        if (!he(e) && -1 !== n.indexOf("/")) throw new U(A, `Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);
        const r = e.path.child(X.fromString(n));
        if (!et.isDocumentKey(r)) throw new U(A, `Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);
        return Ct(t, new et(r));
    }
    if (n instanceof an) return Ct(t, n._key);
    throw new U(A, `Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${it(n)}.`);
}

/**
 * Validates that the value passed into a disjunctive filter satisfies all
 * array requirements.
 */ function pr(t, e) {
    if (!Array.isArray(t) || 0 === t.length) throw new U(A, `Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);
    if (t.length > 10) throw new U(A, `Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`);
}

function yr(t, e, n) {
    if (!n.isEqual(e)) throw new U(A, `Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`);
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Converts Firestore's internal types to the JavaScript types that we expose
 * to the user.
 *
 * @internal
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Converts custom model object of type T into `DocumentData` by applying the
 * converter if it exists.
 *
 * This function is used when converting user objects to `DocumentData`
 * because we want to provide the user with a more specific error message if
 * their `set()` or fails due to invalid data originating from a `toFirestore()`
 * call.
 */
function _r(t, e, n) {
    let r;
    // Cast to `any` in order to satisfy the union type constraint on
    // toFirestore().
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return r = t ? n && (n.merge || n.mergeFields) ? t.toFirestore(e, n) : t.toFirestore(e) : e, 
    r;
}

class gr extends class {
    convertValue(t, e = "none") {
        switch (St(t)) {
          case 0 /* NullValue */ :
            return null;

          case 1 /* BooleanValue */ :
            return t.booleanValue;

          case 2 /* NumberValue */ :
            return Pt(t.integerValue || t.doubleValue);

          case 3 /* TimestampValue */ :
            return this.convertTimestamp(t.timestampValue);

          case 4 /* ServerTimestampValue */ :
            return this.convertServerTimestamp(t, e);

          case 5 /* StringValue */ :
            return t.stringValue;

          case 6 /* BlobValue */ :
            return this.convertBytes(Vt(t.bytesValue));

          case 7 /* RefValue */ :
            return this.convertReference(t.referenceValue);

          case 8 /* GeoPointValue */ :
            return this.convertGeoPoint(t.geoPointValue);

          case 9 /* ArrayValue */ :
            return this.convertArray(t.arrayValue, e);

          case 10 /* ObjectValue */ :
            return this.convertObject(t.mapValue, e);

          default:
            throw g();
        }
    }
    convertObject(t, e) {
        const n = {};
        return Et(t.fields, ((t, r) => {
            n[t] = this.convertValue(r, e);
        })), n;
    }
    convertGeoPoint(t) {
        return new bn(Pt(t.latitude), Pt(t.longitude));
    }
    convertArray(t, e) {
        return (t.values || []).map((t => this.convertValue(t, e)));
    }
    convertServerTimestamp(t, e) {
        switch (e) {
          case "previous":
            const n = Nt(t);
            return null == n ? null : this.convertValue(n, e);

          case "estimate":
            return this.convertTimestamp($t(t));

          default:
            return null;
        }
    }
    convertTimestamp(t) {
        const e = Rt(t);
        return new gt(e.seconds, e.nanos);
    }
    convertDocumentKey(t, e) {
        const n = X.fromString(t);
        v(We(n));
        const r = new K(n.get(1), n.get(3)), s = new et(n.popFirst(5));
        return r.isEqual(e) || 
        // TODO(b/64130202): Somehow support foreign references.
        p(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`), 
        s;
    }
} {
    constructor(t) {
        super(), this.firestore = t;
    }
    convertBytes(t) {
        return new gn(t);
    }
    convertReference(t) {
        const e = this.convertDocumentKey(t, this.firestore._databaseId);
        return new an(this.firestore, /* converter= */ null, e);
    }
}

/**
 * Reads the document referred to by the specified document reference.
 *
 * All documents are directly fetched from the server, even if the document was
 * previously read or modified. Recent modifications are only reflected in the
 * retrieved `DocumentSnapshot` if they have already been applied by the
 * backend. If the client is offline, the read fails. If you like to use
 * caching or see local modifications, please use the full Firestore SDK.
 *
 * @param reference - The reference of the document to fetch.
 * @returns A Promise resolved with a `DocumentSnapshot` containing the current
 * document contents.
 */ function vr(t) {
    const e = en((t = ot(t, an)).firestore), n = new gr(t.firestore);
    return Xe(e, [ t._key ]).then((e => {
        v(1 === e.length);
        const r = e[0];
        return new Yn(t.firestore, n, t._key, r.isFoundDocument() ? r : null, t.converter);
    }));
}

/**
 * Executes the query and returns the results as a {@link QuerySnapshot}.
 *
 * All queries are executed directly by the server, even if the the query was
 * previously executed. Recent modifications are only reflected in the retrieved
 * results if they have already been applied by the backend. If the client is
 * offline, the operation fails. To see previously cached result and local
 * modifications, use the full Firestore SDK.
 *
 * @param query - The `Query` to execute.
 * @returns A Promise that will be resolved with the results of the query.
 */ function br(t) {
    !function(t) {
        if (ue(t) && 0 === t.explicitOrderBy.length) throw new U(q, "limitToLast() queries require specifying at least one orderBy() clause");
    }((t = ot(t, hn))._query);
    const e = en(t.firestore), n = new gr(t.firestore);
    return Ze(e, t._query).then((e => {
        const r = e.map((e => new Hn(t.firestore, n, e.key, e, t.converter)));
        return ue(t._query) && 
        // Limit to last queries reverse the orderBy constraint that was
        // specified by the user. As such, we need to reverse the order of the
        // results to return the documents in the expected order.
        r.reverse(), new Kn(t, r);
    }));
}

function Er(t, e, n) {
    const r = _r((t = ot(t, an)).converter, e, n), s = Dn(Vn(t.firestore), "setDoc", t._key, r, null !== t.converter, n);
    return Je(en(t.firestore), [ s.toMutation(t._key, be.none()) ]);
}

function Tr(t, e, n, ...r) {
    const s = Vn((t = ot(t, an)).firestore);
    // For Compat types, we have to "extract" the underlying types before
    // performing validation.
        let i;
    i = "string" == typeof (e = __vite_ssr_import_3__.getModularInstance(e)) || e instanceof yn ? Cn(s, "updateDoc", t._key, e, n, r) : On(s, "updateDoc", t._key, e);
    return Je(en(t.firestore), [ i.toMutation(t._key, be.exists(!0)) ]);
}

/**
 * Deletes the document referred to by the specified `DocumentReference`.
 *
 * The deletion will only be reflected in document reads that occur after the
 * returned promise resolves. If the client is offline, the
 * delete fails. If you would like to see local modifications or buffer writes
 * until the client is online, use the full Firestore SDK.
 *
 * @param reference - A reference to the document to delete.
 * @returns A `Promise` resolved once the document has been successfully
 * deleted from the backend.
 */ function Ir(t) {
    return Je(en((t = ot(t, an)).firestore), [ new Ae(t._key, be.none()) ]);
}

/**
 * Add a new document to specified `CollectionReference` with the given data,
 * assigning it a document ID automatically.
 *
 * The result of this write will only be reflected in document reads that occur
 * after the returned promise resolves. If the client is offline, the
 * write fails. If you would like to see local modifications or buffer writes
 * until the client is online, use the full Firestore SDK.
 *
 * @param reference - A reference to the collection to add this document to.
 * @param data - An Object containing the data for the new document.
 * @throws Error - If the provided input is not a valid Firestore document.
 * @returns A `Promise` resolved with a `DocumentReference` pointing to the
 * newly created document after it has been written to the backend.
 */ function Ar(t, e) {
    const n = wn(t = ot(t, ln)), r = _r(t.converter, e), s = Dn(Vn(t.firestore), "addDoc", n._key, r, null !== n.converter, {});
    return Je(en(t.firestore), [ s.toMutation(n._key, be.exists(!1)) ]).then((() => n));
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns a sentinel for use with {@link @firebase/firestore/lite#(updateDoc:1)} or
 * {@link @firebase/firestore/lite#(setDoc:1)} with `{merge: true}` to mark a field for deletion.
 */ function Rr() {
    return new Nn("deleteField");
}

/**
 * Returns a sentinel used with {@link @firebase/firestore/lite#(setDoc:1)} or {@link @firebase/firestore/lite#(updateDoc:1)} to
 * include a server-generated timestamp in the written data.
 */ function Pr() {
    return new Sn("serverTimestamp");
}

/**
 * Returns a special value that can be used with {@link @firebase/firestore/lite#(setDoc:1)} or {@link
 * @firebase/firestore/lite#(updateDoc:1)} that tells the server to union the given elements with any array
 * value that already exists on the server. Each specified element that doesn't
 * already exist in the array will be added to the end. If the field being
 * modified is not already an array it will be overwritten with an array
 * containing exactly the specified elements.
 *
 * @param elements - The elements to union into the array.
 * @returns The `FieldValue` sentinel for use in a call to `setDoc()` or
 * `updateDoc()`.
 */ function Vr(...t) {
    // NOTE: We don't actually parse the data until it's used in set() or
    // update() since we'd need the Firestore instance to do this.
    return new Fn("arrayUnion", t);
}

/**
 * Returns a special value that can be used with {@link (setDoc:1)} or {@link
 * updateDoc:1} that tells the server to remove the given elements from any
 * array value that already exists on the server. All instances of each element
 * specified will be removed from the array. If the field being modified is not
 * already an array it will be overwritten with an empty array.
 *
 * @param elements - The elements to remove from the array.
 * @returns The `FieldValue` sentinel for use in a call to `setDoc()` or
 * `updateDoc()`
 */ function Dr(...t) {
    // NOTE: We don't actually parse the data until it's used in set() or
    // update() since we'd need the Firestore instance to do this.
    return new xn("arrayRemove", t);
}

/**
 * Returns a special value that can be used with {@link @firebase/firestore/lite#(setDoc:1)} or {@link
 * @firebase/firestore/lite#(updateDoc:1)} that tells the server to increment the field's current value by
 * the given value.
 *
 * If either the operand or the current field value uses floating point
 * precision, all arithmetic follows IEEE 754 semantics. If both values are
 * integers, values outside of JavaScript's safe number range
 * (`Number.MIN_SAFE_INTEGER` to `Number.MAX_SAFE_INTEGER`) are also subject to
 * precision loss. Furthermore, once processed by the Firestore backend, all
 * integer operations are capped between -2^63 and 2^63-1.
 *
 * If the current field value is not of type `number`, or if the field does not
 * yet exist, the transformation sets the field to the given value.
 *
 * @param n - The value to increment by.
 * @returns The `FieldValue` sentinel for use in a call to `setDoc()` or
 * `updateDoc()`
 */ function Nr(t) {
    return new qn("increment", t);
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A write batch, used to perform multiple writes as a single atomic unit.
 *
 * A `WriteBatch` object can be acquired by calling {@link writeBatch}. It
 * provides methods for adding writes to the write batch. None of the writes
 * will be committed (or visible locally) until {@link WriteBatch.commit} is
 * called.
 */ class $r {
    /** @hideconstructor */
    constructor(t, e) {
        this._firestore = t, this._commitHandler = e, this._mutations = [], this._committed = !1, 
        this._dataReader = Vn(t);
    }
    set(t, e, n) {
        this._verifyNotCommitted();
        const r = Sr(t, this._firestore), s = _r(r.converter, e, n), i = Dn(this._dataReader, "WriteBatch.set", r._key, s, null !== r.converter, n);
        return this._mutations.push(i.toMutation(r._key, be.none())), this;
    }
    update(t, e, n, ...r) {
        this._verifyNotCommitted();
        const s = Sr(t, this._firestore);
        // For Compat types, we have to "extract" the underlying types before
        // performing validation.
                let i;
        return i = "string" == typeof (e = __vite_ssr_import_3__.getModularInstance(e)) || e instanceof yn ? Cn(this._dataReader, "WriteBatch.update", s._key, e, n, r) : On(this._dataReader, "WriteBatch.update", s._key, e), 
        this._mutations.push(i.toMutation(s._key, be.exists(!0))), this;
    }
    /**
     * Deletes the document referred to by the provided {@link DocumentReference}.
     *
     * @param documentRef - A reference to the document to be deleted.
     * @returns This `WriteBatch` instance. Used for chaining method calls.
     */    delete(t) {
        this._verifyNotCommitted();
        const e = Sr(t, this._firestore);
        return this._mutations = this._mutations.concat(new Ae(e._key, be.none())), this;
    }
    /**
     * Commits all of the writes in this write batch as a single atomic unit.
     *
     * The result of these writes will only be reflected in document reads that
     * occur after the returned promise resolves. If the client is offline, the
     * write fails. If you would like to see local modifications or buffer writes
     * until the client is online, use the full Firestore SDK.
     *
     * @returns A `Promise` resolved once all of the writes in the batch have been
     * successfully written to the backend as an atomic unit (note that it won't
     * resolve while you're offline).
     */    commit() {
        return this._verifyNotCommitted(), this._committed = !0, this._mutations.length > 0 ? this._commitHandler(this._mutations) : Promise.resolve();
    }
    _verifyNotCommitted() {
        if (this._committed) throw new U(S, "A write batch can no longer be used after commit() has been called.");
    }
}

function Sr(t, e) {
    if ((t = __vite_ssr_import_3__.getModularInstance(t)).firestore !== e) throw new U(A, "Provided document reference is from a different Firestore instance.");
    return t;
}

/**
 * Creates a write batch, used for performing multiple writes as a single
 * atomic operation. The maximum number of writes allowed in a single WriteBatch
 * is 500.
 *
 * The result of these writes will only be reflected in document reads that
 * occur after the returned promise resolves. If the client is offline, the
 * write fails. If you would like to see local modifications or buffer writes
 * until the client is online, use the full Firestore SDK.
 *
 * @returns A `WriteBatch` that can be used to atomically execute multiple
 * writes.
 */ function Fr(t) {
    const e = en(t = ot(t, rn));
    return new $r(t, (t => Je(e, t)));
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Internal transaction object responsible for accumulating the mutations to
 * perform and the base versions for any documents read.
 */ class xr {
    constructor(t) {
        this.datastore = t, 
        // The version of each document that was read during this transaction.
        this.readVersions = new Map, this.mutations = [], this.committed = !1, 
        /**
         * A deferred usage error that occurred previously in this transaction that
         * will cause the transaction to fail once it actually commits.
         */
        this.lastWriteError = null, 
        /**
         * Set of documents that have been written in the transaction.
         *
         * When there's more than one write to the same key in a transaction, any
         * writes after the first are handled differently.
         */
        this.writtenDocs = new Set;
    }
    async lookup(t) {
        if (this.ensureCommitNotCalled(), this.mutations.length > 0) throw new U(A, "Firestore transactions require all reads to be executed before all writes.");
        const e = await Xe(this.datastore, t);
        return e.forEach((t => this.recordVersion(t))), e;
    }
    set(t, e) {
        this.write(e.toMutation(t, this.precondition(t))), this.writtenDocs.add(t.toString());
    }
    update(t, e) {
        try {
            this.write(e.toMutation(t, this.preconditionForUpdate(t)));
        } catch (t) {
            this.lastWriteError = t;
        }
        this.writtenDocs.add(t.toString());
    }
    delete(t) {
        this.write(new Ae(t, this.precondition(t))), this.writtenDocs.add(t.toString());
    }
    async commit() {
        if (this.ensureCommitNotCalled(), this.lastWriteError) throw this.lastWriteError;
        const t = this.readVersions;
        // For each mutation, note that the doc was written.
                this.mutations.forEach((e => {
            t.delete(e.key.toString());
        })), 
        // For each document that was read but not written to, we want to perform
        // a `verify` operation.
        t.forEach(((t, e) => {
            const n = et.fromPath(e);
            this.mutations.push(new Re(n, this.precondition(n)));
        })), await Je(this.datastore, this.mutations), this.committed = !0;
    }
    recordVersion(t) {
        let e;
        if (t.isFoundDocument()) e = t.version; else {
            if (!t.isNoDocument()) throw g();
            // For deleted docs, we must use baseVersion 0 when we overwrite them.
            e = vt.min();
        }
        const n = this.readVersions.get(t.key.toString());
        if (n) {
            if (!e.isEqual(n)) 
            // This transaction will fail no matter what.
            throw new U(F, "Document version changed between two reads.");
        } else this.readVersions.set(t.key.toString(), e);
    }
    /**
     * Returns the version of this document when it was read in this transaction,
     * as a precondition, or no precondition if it was not read.
     */    precondition(t) {
        const e = this.readVersions.get(t.toString());
        return !this.writtenDocs.has(t.toString()) && e ? be.updateTime(e) : be.none();
    }
    /**
     * Returns the precondition for a document if the operation is an update.
     */    preconditionForUpdate(t) {
        const e = this.readVersions.get(t.toString());
        // The first time a document is written, we want to take into account the
        // read time and existence
                if (!this.writtenDocs.has(t.toString()) && e) {
            if (e.isEqual(vt.min())) 
            // The document doesn't exist, so fail the transaction.
            // This has to be validated locally because you can't send a
            // precondition that a document does not exist without changing the
            // semantics of the backend write to be an insert. This is the reverse
            // of what we want, since we want to assert that the document doesn't
            // exist but then send the update and have it fail. Since we can't
            // express that to the backend, we have to validate locally.
            // Note: this can change once we can send separate verify writes in the
            // transaction.
            throw new U(A, "Can't update a document that doesn't exist.");
            // Document exists, base precondition on document update time.
                        return be.updateTime(e);
        }
        // Document was not read, so we just use the preconditions for a blind
        // update.
        return be.exists(!0);
    }
    write(t) {
        this.ensureCommitNotCalled(), this.mutations.push(t);
    }
    ensureCommitNotCalled() {}
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * TransactionRunner encapsulates the logic needed to run and retry transactions
 * with backoff.
 */
class qr {
    constructor(t, e, n, r) {
        this.asyncQueue = t, this.datastore = e, this.updateFunction = n, this.deferred = r, 
        this.Tt = 5, this.It = new He(this.asyncQueue, "transaction_retry" /* TransactionRetry */);
    }
    /** Runs the transaction and sets the result on deferred. */    run() {
        this.Tt -= 1, this.At();
    }
    At() {
        this.It.W((async () => {
            const t = new xr(this.datastore), e = this.Rt(t);
            e && e.then((e => {
                this.asyncQueue.enqueueAndForget((() => t.commit().then((() => {
                    this.deferred.resolve(e);
                })).catch((t => {
                    this.Pt(t);
                }))));
            })).catch((t => {
                this.Pt(t);
            }));
        }));
    }
    Rt(t) {
        try {
            const e = this.updateFunction(t);
            return !ct(e) && e.catch && e.then ? e : (this.deferred.reject(Error("Transaction callback must return a Promise")), 
            null);
        } catch (t) {
            // Do not retry errors thrown by user provided updateFunction.
            return this.deferred.reject(t), null;
        }
    }
    Pt(t) {
        this.Tt > 0 && this.Vt(t) ? (this.Tt -= 1, this.asyncQueue.enqueueAndForget((() => (this.At(), 
        Promise.resolve())))) : this.deferred.reject(t);
    }
    Vt(t) {
        if ("FirebaseError" === t.name) {
            // In transactions, the backend will fail outdated reads with FAILED_PRECONDITION and
            // non-matching document versions with ABORTED. These errors should be retried.
            const e = t.code;
            return "aborted" === e || "failed-precondition" === e || !
            /**
 * Determines whether an error code represents a permanent error when received
 * in response to a non-write operation.
 *
 * See isPermanentWriteError for classifying write errors.
 */
            function(t) {
                switch (t) {
                  default:
                    return g();

                  case T:
                  case I:
                  case R:
                  case $:
                  case O:
                  case C:
 // Unauthenticated means something went wrong with our token and we need
                    // to retry with new credentials which will happen automatically.
                                      case N:
                    return !1;

                  case A:
                  case P:
                  case V:
                  case D:
                  case S:
 // Aborted might be retried in some scenarios, but that is dependant on
                    // the context and should handled individually by the calling code.
                    // See https://cloud.google.com/apis/design/errors.
                                      case F:
                  case x:
                  case q:
                  case L:
                    return !0;
                }
            }(e);
        }
        return !1;
    }
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** The Platform's 'document' implementation or null if not available. */ function Or() {
    // `document` is not always available, e.g. in ReactNative and WebWorkers.
    // eslint-disable-next-line no-restricted-globals
    return "undefined" != "undefined" ? document : null;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Represents an operation scheduled to be run in the future on an AsyncQueue.
 *
 * It is created via DelayedOperation.createAndSchedule().
 *
 * Supports cancellation (via cancel()) and early execution (via skipDelay()).
 *
 * Note: We implement `PromiseLike` instead of `Promise`, as the `Promise` type
 * in newer versions of TypeScript defines `finally`, which is not available in
 * IE.
 */ class Cr {
    constructor(t, e, n, r, s) {
        this.asyncQueue = t, this.timerId = e, this.targetTimeMs = n, this.op = r, this.removalCallback = s, 
        this.deferred = new k, this.then = this.deferred.promise.then.bind(this.deferred.promise), 
        // It's normal for the deferred promise to be canceled (due to cancellation)
        // and so we attach a dummy catch callback to avoid
        // 'UnhandledPromiseRejectionWarning' log spam.
        this.deferred.promise.catch((t => {}));
    }
    /**
     * Creates and returns a DelayedOperation that has been scheduled to be
     * executed on the provided asyncQueue after the provided delayMs.
     *
     * @param asyncQueue - The queue to schedule the operation on.
     * @param id - A Timer ID identifying the type of operation this is.
     * @param delayMs - The delay (ms) before the operation should be scheduled.
     * @param op - The operation to run.
     * @param removalCallback - A callback to be called synchronously once the
     *   operation is executed or canceled, notifying the AsyncQueue to remove it
     *   from its delayedOperations list.
     *   PORTING NOTE: This exists to prevent making removeDelayedOperation() and
     *   the DelayedOperation class public.
     */    static createAndSchedule(t, e, n, r, s) {
        const i = Date.now() + n, o = new Cr(t, e, i, r, s);
        return o.start(n), o;
    }
    /**
     * Starts the timer. This is called immediately after construction by
     * createAndSchedule().
     */    start(t) {
        this.timerHandle = setTimeout((() => this.handleDelayElapsed()), t);
    }
    /**
     * Queues the operation to run immediately (if it hasn't already been run or
     * canceled).
     */    skipDelay() {
        return this.handleDelayElapsed();
    }
    /**
     * Cancels the operation if it hasn't already been executed or canceled. The
     * promise will be rejected.
     *
     * As long as the operation has not yet been run, calling cancel() provides a
     * guarantee that the operation will not be run.
     */    cancel(t) {
        null !== this.timerHandle && (this.clearTimeout(), this.deferred.reject(new U(T, "Operation cancelled" + (t ? ": " + t : ""))));
    }
    handleDelayElapsed() {
        this.asyncQueue.enqueueAndForget((() => null !== this.timerHandle ? (this.clearTimeout(), 
        this.op().then((t => this.deferred.resolve(t)))) : Promise.resolve()));
    }
    clearTimeout() {
        null !== this.timerHandle && (this.removalCallback(this), clearTimeout(this.timerHandle), 
        this.timerHandle = null);
    }
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Lr {
    constructor() {
        // The last promise in the queue.
        this.Dt = Promise.resolve(), 
        // A list of retryable operations. Retryable operations are run in order and
        // retried with backoff.
        this.Nt = [], 
        // Is this AsyncQueue being shut down? Once it is set to true, it will not
        // be changed again.
        this.$t = !1, 
        // Operations scheduled to be queued in the future. Operations are
        // automatically removed after they are run or canceled.
        this.St = [], 
        // visible for testing
        this.Ft = null, 
        // Flag set while there's an outstanding AsyncQueue operation, used for
        // assertion sanity-checks.
        this.xt = !1, 
        // Enabled during shutdown on Safari to prevent future access to IndexedDB.
        this.qt = !1, 
        // List of TimerIds to fast-forward delays for.
        this.Ot = [], 
        // Backoff timer used to schedule retries for retryable operations
        this.It = new He(this, "async_queue_retry" /* AsyncQueueRetry */), 
        // Visibility handler that triggers an immediate retry of all retryable
        // operations. Meant to speed up recovery when we regain file system access
        // after page comes into foreground.
        this.Ct = () => {
            const t = Or();
            t && m("AsyncQueue", "Visibility state changed to " + t.visibilityState), this.It.H();
        };
        const t = Or();
        t && "function" == typeof t.addEventListener && t.addEventListener("visibilitychange", this.Ct);
    }
    get isShuttingDown() {
        return this.$t;
    }
    /**
     * Adds a new operation to the queue without waiting for it to complete (i.e.
     * we ignore the Promise result).
     */    enqueueAndForget(t) {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.enqueue(t);
    }
    enqueueAndForgetEvenWhileRestricted(t) {
        this.Lt(), 
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.Ut(t);
    }
    enterRestrictedMode(t) {
        if (!this.$t) {
            this.$t = !0, this.qt = t || !1;
            const e = Or();
            e && "function" == typeof e.removeEventListener && e.removeEventListener("visibilitychange", this.Ct);
        }
    }
    enqueue(t) {
        if (this.Lt(), this.$t) 
        // Return a Promise which never resolves.
        return new Promise((() => {}));
        // Create a deferred Promise that we can return to the callee. This
        // allows us to return a "hanging Promise" only to the callee and still
        // advance the queue even when the operation is not run.
                const e = new k;
        return this.Ut((() => this.$t && this.qt ? Promise.resolve() : (t().then(e.resolve, e.reject), 
        e.promise))).then((() => e.promise));
    }
    enqueueRetryable(t) {
        this.enqueueAndForget((() => (this.Nt.push(t), this.kt())));
    }
    /**
     * Runs the next operation from the retryable queue. If the operation fails,
     * reschedules with backoff.
     */    async kt() {
        if (0 !== this.Nt.length) {
            try {
                await this.Nt[0](), this.Nt.shift(), this.It.reset();
            } catch (t) {
                if (!
                /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
                /** Verifies whether `e` is an IndexedDbTransactionError. */
                function(t) {
                    // Use name equality, as instanceof checks on errors don't work with errors
                    // that wrap other errors.
                    return "IndexedDbTransactionError" === t.name;
                }
                /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ (t)) throw t;
 // Failure will be handled by AsyncQueue
                                m("AsyncQueue", "Operation failed with retryable error: " + t);
            }
            this.Nt.length > 0 && 
            // If there are additional operations, we re-schedule `retryNextOp()`.
            // This is necessary to run retryable operations that failed during
            // their initial attempt since we don't know whether they are already
            // enqueued. If, for example, `op1`, `op2`, `op3` are enqueued and `op1`
            // needs to  be re-run, we will run `op1`, `op1`, `op2` using the
            // already enqueued calls to `retryNextOp()`. `op3()` will then run in the
            // call scheduled here.
            // Since `backoffAndRun()` cancels an existing backoff and schedules a
            // new backoff on every call, there is only ever a single additional
            // operation in the queue.
            this.It.W((() => this.kt()));
        }
    }
    Ut(t) {
        const e = this.Dt.then((() => (this.xt = !0, t().catch((t => {
            this.Ft = t, this.xt = !1;
            const e = 
            /**
 * Chrome includes Error.message in Error.stack. Other browsers do not.
 * This returns expected output of message + stack when available.
 * @param error - Error or FirestoreError
 */
            function(t) {
                let e = t.message || "";
                t.stack && (e = t.stack.includes(t.message) ? t.stack : t.message + "\n" + t.stack);
                return e;
            }
            /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
            // TODO(mrschmidt) Consider using `BaseTransaction` as the base class in the
            // legacy SDK.
            /**
 * A reference to a transaction.
 *
 * The `Transaction` object passed to a transaction's `updateFunction` provides
 * the methods to read and write data within the transaction context. See
 * {@link runTransaction}.
 */ (t);
            // Re-throw the error so that this.tail becomes a rejected Promise and
            // all further attempts to chain (via .then) will just short-circuit
            // and return the rejected Promise.
            throw p("INTERNAL UNHANDLED ERROR: ", e), t;
        })).then((t => (this.xt = !1, t))))));
        return this.Dt = e, e;
    }
    enqueueAfterDelay(t, e, n) {
        this.Lt(), 
        // Fast-forward delays for timerIds that have been overriden.
        this.Ot.indexOf(t) > -1 && (e = 0);
        const r = Cr.createAndSchedule(this, t, e, n, (t => this.jt(t)));
        return this.St.push(r), r;
    }
    Lt() {
        this.Ft && g();
    }
    verifyOperationInProgress() {}
    /**
     * Waits until all currently queued tasks are finished executing. Delayed
     * operations are not run.
     */    async Mt() {
        // Operations in the queue prior to draining may have enqueued additional
        // operations. Keep draining the queue until the tail is no longer advanced,
        // which indicates that no more new operations were enqueued and that all
        // operations were executed.
        let t;
        do {
            t = this.Dt, await t;
        } while (t !== this.Dt);
    }
    /**
     * For Tests: Determine if a delayed operation with a particular TimerId
     * exists.
     */    Bt(t) {
        for (const e of this.St) if (e.timerId === t) return !0;
        return !1;
    }
    /**
     * For Tests: Runs some or all delayed operations early.
     *
     * @param lastTimerId - Delayed operations up to and including this TimerId
     * will be drained. Pass TimerId.All to run all delayed operations.
     * @returns a Promise that resolves once all operations have been run.
     */    zt(t) {
        // Note that draining may generate more delayed ops, so we do that first.
        return this.Mt().then((() => {
            // Run ops in the same order they'd run if they ran naturally.
            this.St.sort(((t, e) => t.targetTimeMs - e.targetTimeMs));
            for (const e of this.St) if (e.skipDelay(), "all" /* All */ !== t && e.timerId === t) break;
            return this.Mt();
        }));
    }
    /**
     * For Tests: Skip all subsequent delays for a timer id.
     */    Gt(t) {
        this.Ot.push(t);
    }
    /** Called once a DelayedOperation is run or canceled. */    jt(t) {
        // NOTE: indexOf / slice are O(n), but delayedOperations is expected to be small.
        const e = this.St.indexOf(t);
        this.St.splice(e, 1);
    }
}

class Ur {
    /** @hideconstructor */
    constructor(t, e) {
        this._firestore = t, this._transaction = e, this._dataReader = Vn(t);
    }
    /**
     * Reads the document referenced by the provided {@link DocumentReference}.
     *
     * @param documentRef - A reference to the document to be read.
     * @returns A `DocumentSnapshot` with the read data.
     */    get(t) {
        const e = Sr(t, this._firestore), n = new gr(this._firestore);
        return this._transaction.lookup([ e._key ]).then((t => {
            if (!t || 1 !== t.length) return g();
            const r = t[0];
            if (r.isFoundDocument()) return new Yn(this._firestore, n, r.key, r, e.converter);
            if (r.isNoDocument()) return new Yn(this._firestore, n, e._key, null, e.converter);
            throw g();
        }));
    }
    set(t, e, n) {
        const r = Sr(t, this._firestore), s = _r(r.converter, e, n), i = Dn(this._dataReader, "Transaction.set", r._key, s, null !== r.converter, n);
        return this._transaction.set(r._key, i), this;
    }
    update(t, e, n, ...r) {
        const s = Sr(t, this._firestore);
        // For Compat types, we have to "extract" the underlying types before
        // performing validation.
                let i;
        return i = "string" == typeof (e = __vite_ssr_import_3__.getModularInstance(e)) || e instanceof yn ? Cn(this._dataReader, "Transaction.update", s._key, e, n, r) : On(this._dataReader, "Transaction.update", s._key, e), 
        this._transaction.update(s._key, i), this;
    }
    /**
     * Deletes the document referred to by the provided {@link DocumentReference}.
     *
     * @param documentRef - A reference to the document to be deleted.
     * @returns This `Transaction` instance. Used for chaining method calls.
     */    delete(t) {
        const e = Sr(t, this._firestore);
        return this._transaction.delete(e._key), this;
    }
}

/**
 * Executes the given `updateFunction` and then attempts to commit the changes
 * applied within the transaction. If any document read within the transaction
 * has changed, Cloud Firestore retries the `updateFunction`. If it fails to
 * commit after 5 attempts, the transaction fails.
 *
 * The maximum number of writes allowed in a single transaction is 500.
 *
 * @param firestore - A reference to the Firestore database to run this
 * transaction against.
 * @param updateFunction - The function to execute within the transaction
 * context.
 * @returns If the transaction completed successfully or was explicitly aborted
 * (the `updateFunction` returned a failed promise), the promise returned by the
 * `updateFunction `is returned here. Otherwise, if the transaction failed, a
 * rejected promise with the corresponding failure error is returned.
 */ function kr(t, e) {
    const n = en(t = ot(t, rn)), r = new k;
    return new qr(new Lr, n, (n => e(new Ur(t, n))), r).run(), r.promise;
}

/**
 * Firestore Lite
 *
 * @remarks Firestore Lite is a small online-only SDK that allows read
 * and write access to your Firestore database. All operations connect
 * directly to the backend, and `onSnapshot()` APIs are not supported.
 * @packageDocumentation
 */ !function(t) {
    f = t;
}(`${__vite_ssr_import_0__.SDK_VERSION}_lite`), __vite_ssr_import_0__._registerComponent(new __vite_ssr_import_1__.Component("firestore/lite", ((t, {options: e}) => {
    const n = t.getProvider("app").getImmediate(), r = new rn(n, new z(t.getProvider("auth-internal")), new Y(t.getProvider("app-check-internal")));
    return e && r._setSettings(e), r;
}), "PUBLIC")), 
// RUNTIME_ENV and BUILD_TARGET are replaced by real values during the compilation
__vite_ssr_import_0__.registerVersion("firestore-lite", "3.4.5", ""), __vite_ssr_import_0__.registerVersion("firestore-lite", "3.4.5", "esm2017");


Object.defineProperty(__vite_ssr_exports__, "Bytes", { enumerable: true, configurable: true, get(){ return gn }});
Object.defineProperty(__vite_ssr_exports__, "CollectionReference", { enumerable: true, configurable: true, get(){ return ln }});
Object.defineProperty(__vite_ssr_exports__, "DocumentReference", { enumerable: true, configurable: true, get(){ return an }});
Object.defineProperty(__vite_ssr_exports__, "DocumentSnapshot", { enumerable: true, configurable: true, get(){ return Yn }});
Object.defineProperty(__vite_ssr_exports__, "FieldPath", { enumerable: true, configurable: true, get(){ return yn }});
Object.defineProperty(__vite_ssr_exports__, "FieldValue", { enumerable: true, configurable: true, get(){ return vn }});
Object.defineProperty(__vite_ssr_exports__, "Firestore", { enumerable: true, configurable: true, get(){ return rn }});
Object.defineProperty(__vite_ssr_exports__, "FirestoreError", { enumerable: true, configurable: true, get(){ return U }});
Object.defineProperty(__vite_ssr_exports__, "GeoPoint", { enumerable: true, configurable: true, get(){ return bn }});
Object.defineProperty(__vite_ssr_exports__, "Query", { enumerable: true, configurable: true, get(){ return hn }});
Object.defineProperty(__vite_ssr_exports__, "QueryConstraint", { enumerable: true, configurable: true, get(){ return Zn }});
Object.defineProperty(__vite_ssr_exports__, "QueryDocumentSnapshot", { enumerable: true, configurable: true, get(){ return Hn }});
Object.defineProperty(__vite_ssr_exports__, "QuerySnapshot", { enumerable: true, configurable: true, get(){ return Kn }});
Object.defineProperty(__vite_ssr_exports__, "Timestamp", { enumerable: true, configurable: true, get(){ return gt }});
Object.defineProperty(__vite_ssr_exports__, "Transaction", { enumerable: true, configurable: true, get(){ return Ur }});
Object.defineProperty(__vite_ssr_exports__, "WriteBatch", { enumerable: true, configurable: true, get(){ return $r }});
Object.defineProperty(__vite_ssr_exports__, "addDoc", { enumerable: true, configurable: true, get(){ return Ar }});
Object.defineProperty(__vite_ssr_exports__, "arrayRemove", { enumerable: true, configurable: true, get(){ return Dr }});
Object.defineProperty(__vite_ssr_exports__, "arrayUnion", { enumerable: true, configurable: true, get(){ return Vr }});
Object.defineProperty(__vite_ssr_exports__, "collection", { enumerable: true, configurable: true, get(){ return fn }});
Object.defineProperty(__vite_ssr_exports__, "collectionGroup", { enumerable: true, configurable: true, get(){ return dn }});
Object.defineProperty(__vite_ssr_exports__, "connectFirestoreEmulator", { enumerable: true, configurable: true, get(){ return un }});
Object.defineProperty(__vite_ssr_exports__, "deleteDoc", { enumerable: true, configurable: true, get(){ return Ir }});
Object.defineProperty(__vite_ssr_exports__, "deleteField", { enumerable: true, configurable: true, get(){ return Rr }});
Object.defineProperty(__vite_ssr_exports__, "doc", { enumerable: true, configurable: true, get(){ return wn }});
Object.defineProperty(__vite_ssr_exports__, "documentId", { enumerable: true, configurable: true, get(){ return _n }});
Object.defineProperty(__vite_ssr_exports__, "endAt", { enumerable: true, configurable: true, get(){ return dr }});
Object.defineProperty(__vite_ssr_exports__, "endBefore", { enumerable: true, configurable: true, get(){ return fr }});
Object.defineProperty(__vite_ssr_exports__, "getDoc", { enumerable: true, configurable: true, get(){ return vr }});
Object.defineProperty(__vite_ssr_exports__, "getDocs", { enumerable: true, configurable: true, get(){ return br }});
Object.defineProperty(__vite_ssr_exports__, "getFirestore", { enumerable: true, configurable: true, get(){ return on }});
Object.defineProperty(__vite_ssr_exports__, "increment", { enumerable: true, configurable: true, get(){ return Nr }});
Object.defineProperty(__vite_ssr_exports__, "initializeFirestore", { enumerable: true, configurable: true, get(){ return sn }});
Object.defineProperty(__vite_ssr_exports__, "limit", { enumerable: true, configurable: true, get(){ return or }});
Object.defineProperty(__vite_ssr_exports__, "limitToLast", { enumerable: true, configurable: true, get(){ return ur }});
Object.defineProperty(__vite_ssr_exports__, "orderBy", { enumerable: true, configurable: true, get(){ return sr }});
Object.defineProperty(__vite_ssr_exports__, "query", { enumerable: true, configurable: true, get(){ return tr }});
Object.defineProperty(__vite_ssr_exports__, "queryEqual", { enumerable: true, configurable: true, get(){ return pn }});
Object.defineProperty(__vite_ssr_exports__, "refEqual", { enumerable: true, configurable: true, get(){ return mn }});
Object.defineProperty(__vite_ssr_exports__, "runTransaction", { enumerable: true, configurable: true, get(){ return kr }});
Object.defineProperty(__vite_ssr_exports__, "serverTimestamp", { enumerable: true, configurable: true, get(){ return Pr }});
Object.defineProperty(__vite_ssr_exports__, "setDoc", { enumerable: true, configurable: true, get(){ return Er }});
Object.defineProperty(__vite_ssr_exports__, "setLogLevel", { enumerable: true, configurable: true, get(){ return w }});
Object.defineProperty(__vite_ssr_exports__, "snapshotEqual", { enumerable: true, configurable: true, get(){ return Jn }});
Object.defineProperty(__vite_ssr_exports__, "startAfter", { enumerable: true, configurable: true, get(){ return hr }});
Object.defineProperty(__vite_ssr_exports__, "startAt", { enumerable: true, configurable: true, get(){ return ar }});
Object.defineProperty(__vite_ssr_exports__, "terminate", { enumerable: true, configurable: true, get(){ return cn }});
Object.defineProperty(__vite_ssr_exports__, "updateDoc", { enumerable: true, configurable: true, get(){ return Tr }});
Object.defineProperty(__vite_ssr_exports__, "where", { enumerable: true, configurable: true, get(){ return nr }});
Object.defineProperty(__vite_ssr_exports__, "writeBatch", { enumerable: true, configurable: true, get(){ return Fr }});
//# sourceMappingURL=index.browser.esm2017.js.map
;
}


// --------------------
// Request: /node_modules/@firebase/app/dist/esm/index.esm2017.js
// Parents: 
// - /node_modules/@firebase/firestore/dist/lite/index.browser.esm2017.js ($id_479c3dfb)
// Dependencies: 
// - /node_modules/@firebase/component/dist/esm/index.esm2017.js ($id_73b80f46)
// - /node_modules/@firebase/logger/dist/esm/index.esm2017.js ($id_c5215572)
// - /node_modules/@firebase/util/dist/node-esm/index.node.esm.js ($id_5c1f24f9)
// --------------------
const $id_2743050d = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@firebase/component/dist/esm/index.esm2017.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/@firebase/logger/dist/esm/index.esm2017.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/@firebase/util/dist/node-esm/index.node.esm.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/@firebase/util/dist/node-esm/index.node.esm.js");

Object.defineProperty(__vite_ssr_exports__, "FirebaseError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.FirebaseError }});

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class PlatformLoggerServiceImpl {
    constructor(container) {
        this.container = container;
    }
    // In initial implementation, this will be called by installations on
    // auth token refresh, and installations will send this string.
    getPlatformInfoString() {
        const providers = this.container.getProviders();
        // Loop through providers and get library/version pairs from any that are
        // version components.
        return providers
            .map(provider => {
            if (isVersionServiceProvider(provider)) {
                const service = provider.getImmediate();
                return `${service.library}/${service.version}`;
            }
            else {
                return null;
            }
        })
            .filter(logString => logString)
            .join(' ');
    }
}
/**
 *
 * @param provider check if this provider provides a VersionService
 *
 * NOTE: Using Provider<'app-version'> is a hack to indicate that the provider
 * provides VersionService. The provider is not necessarily a 'app-version'
 * provider.
 */
function isVersionServiceProvider(provider) {
    const component = provider.getComponent();
    return (component === null || component === void 0 ? void 0 : component.type) === "VERSION" /* VERSION */;
}

const name$o = "@firebase/app";
const version$1 = "0.7.17";

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const logger = new __vite_ssr_import_1__.Logger('@firebase/app');

const name$n = "@firebase/app-compat";

const name$m = "@firebase/analytics-compat";

const name$l = "@firebase/analytics";

const name$k = "@firebase/app-check-compat";

const name$j = "@firebase/app-check";

const name$i = "@firebase/auth";

const name$h = "@firebase/auth-compat";

const name$g = "@firebase/database";

const name$f = "@firebase/database-compat";

const name$e = "@firebase/functions";

const name$d = "@firebase/functions-compat";

const name$c = "@firebase/installations";

const name$b = "@firebase/installations-compat";

const name$a = "@firebase/messaging";

const name$9 = "@firebase/messaging-compat";

const name$8 = "@firebase/performance";

const name$7 = "@firebase/performance-compat";

const name$6 = "@firebase/remote-config";

const name$5 = "@firebase/remote-config-compat";

const name$4 = "@firebase/storage";

const name$3 = "@firebase/storage-compat";

const name$2 = "@firebase/firestore";

const name$1 = "@firebase/firestore-compat";

const name = "firebase";
const version = "9.6.7";

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * The default app name
 *
 * @internal
 */
const DEFAULT_ENTRY_NAME = '[DEFAULT]';
const PLATFORM_LOG_STRING = {
    [name$o]: 'fire-core',
    [name$n]: 'fire-core-compat',
    [name$l]: 'fire-analytics',
    [name$m]: 'fire-analytics-compat',
    [name$j]: 'fire-app-check',
    [name$k]: 'fire-app-check-compat',
    [name$i]: 'fire-auth',
    [name$h]: 'fire-auth-compat',
    [name$g]: 'fire-rtdb',
    [name$f]: 'fire-rtdb-compat',
    [name$e]: 'fire-fn',
    [name$d]: 'fire-fn-compat',
    [name$c]: 'fire-iid',
    [name$b]: 'fire-iid-compat',
    [name$a]: 'fire-fcm',
    [name$9]: 'fire-fcm-compat',
    [name$8]: 'fire-perf',
    [name$7]: 'fire-perf-compat',
    [name$6]: 'fire-rc',
    [name$5]: 'fire-rc-compat',
    [name$4]: 'fire-gcs',
    [name$3]: 'fire-gcs-compat',
    [name$2]: 'fire-fst',
    [name$1]: 'fire-fst-compat',
    'fire-js': 'fire-js',
    [name]: 'fire-js-all'
};

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @internal
 */
const _apps = new Map();
/**
 * Registered components.
 *
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const _components = new Map();
/**
 * @param component - the component being added to this app's container
 *
 * @internal
 */
function _addComponent(app, component) {
    try {
        app.container.addComponent(component);
    }
    catch (e) {
        logger.debug(`Component ${component.name} failed to register with FirebaseApp ${app.name}`, e);
    }
}
/**
 *
 * @internal
 */
function _addOrOverwriteComponent(app, component) {
    app.container.addOrOverwriteComponent(component);
}
/**
 *
 * @param component - the component to register
 * @returns whether or not the component is registered successfully
 *
 * @internal
 */
function _registerComponent(component) {
    const componentName = component.name;
    if (_components.has(componentName)) {
        logger.debug(`There were multiple attempts to register component ${componentName}.`);
        return false;
    }
    _components.set(componentName, component);
    // add the component to existing app instances
    for (const app of _apps.values()) {
        _addComponent(app, component);
    }
    return true;
}
/**
 *
 * @param app - FirebaseApp instance
 * @param name - service name
 *
 * @returns the provider for the service with the matching name
 *
 * @internal
 */
function _getProvider(app, name) {
    return app.container.getProvider(name);
}
/**
 *
 * @param app - FirebaseApp instance
 * @param name - service name
 * @param instanceIdentifier - service instance identifier in case the service supports multiple instances
 *
 * @internal
 */
function _removeServiceInstance(app, name, instanceIdentifier = DEFAULT_ENTRY_NAME) {
    _getProvider(app, name).clearInstance(instanceIdentifier);
}
/**
 * Test only
 *
 * @internal
 */
function _clearComponents() {
    _components.clear();
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ERRORS = {
    ["no-app" /* NO_APP */]: "No Firebase App '{$appName}' has been created - " +
        'call Firebase App.initializeApp()',
    ["bad-app-name" /* BAD_APP_NAME */]: "Illegal App name: '{$appName}",
    ["duplicate-app" /* DUPLICATE_APP */]: "Firebase App named '{$appName}' already exists with different options or config",
    ["app-deleted" /* APP_DELETED */]: "Firebase App named '{$appName}' already deleted",
    ["invalid-app-argument" /* INVALID_APP_ARGUMENT */]: 'firebase.{$appName}() takes either no argument or a ' +
        'Firebase App instance.',
    ["invalid-log-argument" /* INVALID_LOG_ARGUMENT */]: 'First argument to `onLog` must be null or a function.'
};
const ERROR_FACTORY = new __vite_ssr_import_2__.ErrorFactory('app', 'Firebase', ERRORS);

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class FirebaseAppImpl {
    constructor(options, config, container) {
        this._isDeleted = false;
        this._options = Object.assign({}, options);
        this._config = Object.assign({}, config);
        this._name = config.name;
        this._automaticDataCollectionEnabled =
            config.automaticDataCollectionEnabled;
        this._container = container;
        this.container.addComponent(new __vite_ssr_import_0__.Component('app', () => this, "PUBLIC" /* PUBLIC */));
    }
    get automaticDataCollectionEnabled() {
        this.checkDestroyed();
        return this._automaticDataCollectionEnabled;
    }
    set automaticDataCollectionEnabled(val) {
        this.checkDestroyed();
        this._automaticDataCollectionEnabled = val;
    }
    get name() {
        this.checkDestroyed();
        return this._name;
    }
    get options() {
        this.checkDestroyed();
        return this._options;
    }
    get config() {
        this.checkDestroyed();
        return this._config;
    }
    get container() {
        return this._container;
    }
    get isDeleted() {
        return this._isDeleted;
    }
    set isDeleted(val) {
        this._isDeleted = val;
    }
    /**
     * This function will throw an Error if the App has already been deleted -
     * use before performing API actions on the App.
     */
    checkDestroyed() {
        if (this.isDeleted) {
            throw ERROR_FACTORY.create("app-deleted" /* APP_DELETED */, { appName: this._name });
        }
    }
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * The current SDK version.
 *
 * @public
 */
const SDK_VERSION = version;
function initializeApp(options, rawConfig = {}) {
    if (typeof rawConfig !== 'object') {
        const name = rawConfig;
        rawConfig = { name };
    }
    const config = Object.assign({ name: DEFAULT_ENTRY_NAME, automaticDataCollectionEnabled: false }, rawConfig);
    const name = config.name;
    if (typeof name !== 'string' || !name) {
        throw ERROR_FACTORY.create("bad-app-name" /* BAD_APP_NAME */, {
            appName: String(name)
        });
    }
    const existingApp = _apps.get(name);
    if (existingApp) {
        // return the existing app if options and config deep equal the ones in the existing app.
        if (__vite_ssr_import_2__.deepEqual(options, existingApp.options) &&
            __vite_ssr_import_2__.deepEqual(config, existingApp.config)) {
            return existingApp;
        }
        else {
            throw ERROR_FACTORY.create("duplicate-app" /* DUPLICATE_APP */, { appName: name });
        }
    }
    const container = new __vite_ssr_import_0__.ComponentContainer(name);
    for (const component of _components.values()) {
        container.addComponent(component);
    }
    const newApp = new FirebaseAppImpl(options, config, container);
    _apps.set(name, newApp);
    return newApp;
}
/**
 * Retrieves a {@link @firebase/app#FirebaseApp} instance.
 *
 * When called with no arguments, the default app is returned. When an app name
 * is provided, the app corresponding to that name is returned.
 *
 * An exception is thrown if the app being retrieved has not yet been
 * initialized.
 *
 * @example
 * ```javascript
 * // Return the default app
 * const app = getApp();
 * ```
 *
 * @example
 * ```javascript
 * // Return a named app
 * const otherApp = getApp("otherApp");
 * ```
 *
 * @param name - Optional name of the app to return. If no name is
 *   provided, the default is `"[DEFAULT]"`.
 *
 * @returns The app corresponding to the provided app name.
 *   If no app name is provided, the default app is returned.
 *
 * @public
 */
function getApp(name = DEFAULT_ENTRY_NAME) {
    const app = _apps.get(name);
    if (!app) {
        throw ERROR_FACTORY.create("no-app" /* NO_APP */, { appName: name });
    }
    return app;
}
/**
 * A (read-only) array of all initialized apps.
 * @public
 */
function getApps() {
    return Array.from(_apps.values());
}
/**
 * Renders this app unusable and frees the resources of all associated
 * services.
 *
 * @example
 * ```javascript
 * deleteApp(app)
 *   .then(function() {
 *     console.log("App deleted successfully");
 *   })
 *   .catch(function(error) {
 *     console.log("Error deleting app:", error);
 *   });
 * ```
 *
 * @public
 */
async function deleteApp(app) {
    const name = app.name;
    if (_apps.has(name)) {
        _apps.delete(name);
        await Promise.all(app.container
            .getProviders()
            .map(provider => provider.delete()));
        app.isDeleted = true;
    }
}
/**
 * Registers a library's name and version for platform logging purposes.
 * @param library - Name of 1p or 3p library (e.g. firestore, angularfire)
 * @param version - Current version of that library.
 * @param variant - Bundle variant, e.g., node, rn, etc.
 *
 * @public
 */
function registerVersion(libraryKeyOrName, version, variant) {
    var _a;
    // TODO: We can use this check to whitelist strings when/if we set up
    // a good whitelist system.
    let library = (_a = PLATFORM_LOG_STRING[libraryKeyOrName]) !== null && _a !== void 0 ? _a : libraryKeyOrName;
    if (variant) {
        library += `-${variant}`;
    }
    const libraryMismatch = library.match(/\s|\//);
    const versionMismatch = version.match(/\s|\//);
    if (libraryMismatch || versionMismatch) {
        const warning = [
            `Unable to register library "${library}" with version "${version}":`
        ];
        if (libraryMismatch) {
            warning.push(`library name "${library}" contains illegal characters (whitespace or "/")`);
        }
        if (libraryMismatch && versionMismatch) {
            warning.push('and');
        }
        if (versionMismatch) {
            warning.push(`version name "${version}" contains illegal characters (whitespace or "/")`);
        }
        logger.warn(warning.join(' '));
        return;
    }
    _registerComponent(new __vite_ssr_import_0__.Component(`${library}-version`, () => ({ library, version }), "VERSION" /* VERSION */));
}
/**
 * Sets log handler for all Firebase SDKs.
 * @param logCallback - An optional custom log handler that executes user code whenever
 * the Firebase SDK makes a logging call.
 *
 * @public
 */
function onLog(logCallback, options) {
    if (logCallback !== null && typeof logCallback !== 'function') {
        throw ERROR_FACTORY.create("invalid-log-argument" /* INVALID_LOG_ARGUMENT */);
    }
    __vite_ssr_import_1__.setUserLogHandler(logCallback, options);
}
/**
 * Sets log level for all Firebase SDKs.
 *
 * All of the log types above the current log level are captured (i.e. if
 * you set the log level to `info`, errors are logged, but `debug` and
 * `verbose` logs are not).
 *
 * @public
 */
function setLogLevel(logLevel) {
    __vite_ssr_import_1__.setLogLevel(logLevel);
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function registerCoreComponents(variant) {
    _registerComponent(new __vite_ssr_import_0__.Component('platform-logger', container => new PlatformLoggerServiceImpl(container), "PRIVATE" /* PRIVATE */));
    // Register `app` package.
    registerVersion(name$o, version$1, variant);
    // BUILD_TARGET will be replaced by values like esm5, esm2017, cjs5, etc during the compilation
    registerVersion(name$o, version$1, 'esm2017');
    // Register platform SDK identifier (no version).
    registerVersion('fire-js', '');
}

/**
 * Firebase App
 *
 * @remarks This package coordinates the communication between the different Firebase components
 * @packageDocumentation
 */
registerCoreComponents('');


Object.defineProperty(__vite_ssr_exports__, "SDK_VERSION", { enumerable: true, configurable: true, get(){ return SDK_VERSION }});
Object.defineProperty(__vite_ssr_exports__, "_DEFAULT_ENTRY_NAME", { enumerable: true, configurable: true, get(){ return DEFAULT_ENTRY_NAME }});
Object.defineProperty(__vite_ssr_exports__, "_addComponent", { enumerable: true, configurable: true, get(){ return _addComponent }});
Object.defineProperty(__vite_ssr_exports__, "_addOrOverwriteComponent", { enumerable: true, configurable: true, get(){ return _addOrOverwriteComponent }});
Object.defineProperty(__vite_ssr_exports__, "_apps", { enumerable: true, configurable: true, get(){ return _apps }});
Object.defineProperty(__vite_ssr_exports__, "_clearComponents", { enumerable: true, configurable: true, get(){ return _clearComponents }});
Object.defineProperty(__vite_ssr_exports__, "_components", { enumerable: true, configurable: true, get(){ return _components }});
Object.defineProperty(__vite_ssr_exports__, "_getProvider", { enumerable: true, configurable: true, get(){ return _getProvider }});
Object.defineProperty(__vite_ssr_exports__, "_registerComponent", { enumerable: true, configurable: true, get(){ return _registerComponent }});
Object.defineProperty(__vite_ssr_exports__, "_removeServiceInstance", { enumerable: true, configurable: true, get(){ return _removeServiceInstance }});
Object.defineProperty(__vite_ssr_exports__, "deleteApp", { enumerable: true, configurable: true, get(){ return deleteApp }});
Object.defineProperty(__vite_ssr_exports__, "getApp", { enumerable: true, configurable: true, get(){ return getApp }});
Object.defineProperty(__vite_ssr_exports__, "getApps", { enumerable: true, configurable: true, get(){ return getApps }});
Object.defineProperty(__vite_ssr_exports__, "initializeApp", { enumerable: true, configurable: true, get(){ return initializeApp }});
Object.defineProperty(__vite_ssr_exports__, "onLog", { enumerable: true, configurable: true, get(){ return onLog }});
Object.defineProperty(__vite_ssr_exports__, "registerVersion", { enumerable: true, configurable: true, get(){ return registerVersion }});
Object.defineProperty(__vite_ssr_exports__, "setLogLevel", { enumerable: true, configurable: true, get(){ return setLogLevel }});
//# sourceMappingURL=index.esm2017.js.map
;
}


// --------------------
// Request: /node_modules/@firebase/component/dist/esm/index.esm2017.js
// Parents: 
// - /node_modules/@firebase/app/dist/esm/index.esm2017.js ($id_2743050d)
// - /node_modules/@firebase/firestore/dist/lite/index.browser.esm2017.js ($id_479c3dfb)
// Dependencies: 
// - /node_modules/@firebase/util/dist/node-esm/index.node.esm.js ($id_5c1f24f9)
// --------------------
const $id_73b80f46 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@firebase/util/dist/node-esm/index.node.esm.js");


/**
 * Component for service name T, e.g. `auth`, `auth-internal`
 */
class Component {
    /**
     *
     * @param name The public service name, e.g. app, auth, firestore, database
     * @param instanceFactory Service factory responsible for creating the public interface
     * @param type whether the service provided by the component is public or private
     */
    constructor(name, instanceFactory, type) {
        this.name = name;
        this.instanceFactory = instanceFactory;
        this.type = type;
        this.multipleInstances = false;
        /**
         * Properties to be added to the service namespace
         */
        this.serviceProps = {};
        this.instantiationMode = "LAZY" /* LAZY */;
        this.onInstanceCreated = null;
    }
    setInstantiationMode(mode) {
        this.instantiationMode = mode;
        return this;
    }
    setMultipleInstances(multipleInstances) {
        this.multipleInstances = multipleInstances;
        return this;
    }
    setServiceProps(props) {
        this.serviceProps = props;
        return this;
    }
    setInstanceCreatedCallback(callback) {
        this.onInstanceCreated = callback;
        return this;
    }
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const DEFAULT_ENTRY_NAME = '[DEFAULT]';

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Provider for instance for service name T, e.g. 'auth', 'auth-internal'
 * NameServiceMapping[T] is an alias for the type of the instance
 */
class Provider {
    constructor(name, container) {
        this.name = name;
        this.container = container;
        this.component = null;
        this.instances = new Map();
        this.instancesDeferred = new Map();
        this.instancesOptions = new Map();
        this.onInitCallbacks = new Map();
    }
    /**
     * @param identifier A provider can provide mulitple instances of a service
     * if this.component.multipleInstances is true.
     */
    get(identifier) {
        // if multipleInstances is not supported, use the default name
        const normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
        if (!this.instancesDeferred.has(normalizedIdentifier)) {
            const deferred = new __vite_ssr_import_0__.Deferred();
            this.instancesDeferred.set(normalizedIdentifier, deferred);
            if (this.isInitialized(normalizedIdentifier) ||
                this.shouldAutoInitialize()) {
                // initialize the service if it can be auto-initialized
                try {
                    const instance = this.getOrInitializeService({
                        instanceIdentifier: normalizedIdentifier
                    });
                    if (instance) {
                        deferred.resolve(instance);
                    }
                }
                catch (e) {
                    // when the instance factory throws an exception during get(), it should not cause
                    // a fatal error. We just return the unresolved promise in this case.
                }
            }
        }
        return this.instancesDeferred.get(normalizedIdentifier).promise;
    }
    getImmediate(options) {
        var _a;
        // if multipleInstances is not supported, use the default name
        const normalizedIdentifier = this.normalizeInstanceIdentifier(options === null || options === void 0 ? void 0 : options.identifier);
        const optional = (_a = options === null || options === void 0 ? void 0 : options.optional) !== null && _a !== void 0 ? _a : false;
        if (this.isInitialized(normalizedIdentifier) ||
            this.shouldAutoInitialize()) {
            try {
                return this.getOrInitializeService({
                    instanceIdentifier: normalizedIdentifier
                });
            }
            catch (e) {
                if (optional) {
                    return null;
                }
                else {
                    throw e;
                }
            }
        }
        else {
            // In case a component is not initialized and should/can not be auto-initialized at the moment, return null if the optional flag is set, or throw
            if (optional) {
                return null;
            }
            else {
                throw Error(`Service ${this.name} is not available`);
            }
        }
    }
    getComponent() {
        return this.component;
    }
    setComponent(component) {
        if (component.name !== this.name) {
            throw Error(`Mismatching Component ${component.name} for Provider ${this.name}.`);
        }
        if (this.component) {
            throw Error(`Component for ${this.name} has already been provided`);
        }
        this.component = component;
        // return early without attempting to initialize the component if the component requires explicit initialization (calling `Provider.initialize()`)
        if (!this.shouldAutoInitialize()) {
            return;
        }
        // if the service is eager, initialize the default instance
        if (isComponentEager(component)) {
            try {
                this.getOrInitializeService({ instanceIdentifier: DEFAULT_ENTRY_NAME });
            }
            catch (e) {
                // when the instance factory for an eager Component throws an exception during the eager
                // initialization, it should not cause a fatal error.
                // TODO: Investigate if we need to make it configurable, because some component may want to cause
                // a fatal error in this case?
            }
        }
        // Create service instances for the pending promises and resolve them
        // NOTE: if this.multipleInstances is false, only the default instance will be created
        // and all promises with resolve with it regardless of the identifier.
        for (const [instanceIdentifier, instanceDeferred] of this.instancesDeferred.entries()) {
            const normalizedIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
            try {
                // `getOrInitializeService()` should always return a valid instance since a component is guaranteed. use ! to make typescript happy.
                const instance = this.getOrInitializeService({
                    instanceIdentifier: normalizedIdentifier
                });
                instanceDeferred.resolve(instance);
            }
            catch (e) {
                // when the instance factory throws an exception, it should not cause
                // a fatal error. We just leave the promise unresolved.
            }
        }
    }
    clearInstance(identifier = DEFAULT_ENTRY_NAME) {
        this.instancesDeferred.delete(identifier);
        this.instancesOptions.delete(identifier);
        this.instances.delete(identifier);
    }
    // app.delete() will call this method on every provider to delete the services
    // TODO: should we mark the provider as deleted?
    async delete() {
        const services = Array.from(this.instances.values());
        await Promise.all([
            ...services
                .filter(service => 'INTERNAL' in service) // legacy services
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                .map(service => service.INTERNAL.delete()),
            ...services
                .filter(service => '_delete' in service) // modularized services
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                .map(service => service._delete())
        ]);
    }
    isComponentSet() {
        return this.component != null;
    }
    isInitialized(identifier = DEFAULT_ENTRY_NAME) {
        return this.instances.has(identifier);
    }
    getOptions(identifier = DEFAULT_ENTRY_NAME) {
        return this.instancesOptions.get(identifier) || {};
    }
    initialize(opts = {}) {
        const { options = {} } = opts;
        const normalizedIdentifier = this.normalizeInstanceIdentifier(opts.instanceIdentifier);
        if (this.isInitialized(normalizedIdentifier)) {
            throw Error(`${this.name}(${normalizedIdentifier}) has already been initialized`);
        }
        if (!this.isComponentSet()) {
            throw Error(`Component ${this.name} has not been registered yet`);
        }
        const instance = this.getOrInitializeService({
            instanceIdentifier: normalizedIdentifier,
            options
        });
        // resolve any pending promise waiting for the service instance
        for (const [instanceIdentifier, instanceDeferred] of this.instancesDeferred.entries()) {
            const normalizedDeferredIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
            if (normalizedIdentifier === normalizedDeferredIdentifier) {
                instanceDeferred.resolve(instance);
            }
        }
        return instance;
    }
    /**
     *
     * @param callback - a function that will be invoked  after the provider has been initialized by calling provider.initialize().
     * The function is invoked SYNCHRONOUSLY, so it should not execute any longrunning tasks in order to not block the program.
     *
     * @param identifier An optional instance identifier
     * @returns a function to unregister the callback
     */
    onInit(callback, identifier) {
        var _a;
        const normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
        const existingCallbacks = (_a = this.onInitCallbacks.get(normalizedIdentifier)) !== null && _a !== void 0 ? _a : new Set();
        existingCallbacks.add(callback);
        this.onInitCallbacks.set(normalizedIdentifier, existingCallbacks);
        const existingInstance = this.instances.get(normalizedIdentifier);
        if (existingInstance) {
            callback(existingInstance, normalizedIdentifier);
        }
        return () => {
            existingCallbacks.delete(callback);
        };
    }
    /**
     * Invoke onInit callbacks synchronously
     * @param instance the service instance`
     */
    invokeOnInitCallbacks(instance, identifier) {
        const callbacks = this.onInitCallbacks.get(identifier);
        if (!callbacks) {
            return;
        }
        for (const callback of callbacks) {
            try {
                callback(instance, identifier);
            }
            catch (_a) {
                // ignore errors in the onInit callback
            }
        }
    }
    getOrInitializeService({ instanceIdentifier, options = {} }) {
        let instance = this.instances.get(instanceIdentifier);
        if (!instance && this.component) {
            instance = this.component.instanceFactory(this.container, {
                instanceIdentifier: normalizeIdentifierForFactory(instanceIdentifier),
                options
            });
            this.instances.set(instanceIdentifier, instance);
            this.instancesOptions.set(instanceIdentifier, options);
            /**
             * Invoke onInit listeners.
             * Note this.component.onInstanceCreated is different, which is used by the component creator,
             * while onInit listeners are registered by consumers of the provider.
             */
            this.invokeOnInitCallbacks(instance, instanceIdentifier);
            /**
             * Order is important
             * onInstanceCreated() should be called after this.instances.set(instanceIdentifier, instance); which
             * makes `isInitialized()` return true.
             */
            if (this.component.onInstanceCreated) {
                try {
                    this.component.onInstanceCreated(this.container, instanceIdentifier, instance);
                }
                catch (_a) {
                    // ignore errors in the onInstanceCreatedCallback
                }
            }
        }
        return instance || null;
    }
    normalizeInstanceIdentifier(identifier = DEFAULT_ENTRY_NAME) {
        if (this.component) {
            return this.component.multipleInstances ? identifier : DEFAULT_ENTRY_NAME;
        }
        else {
            return identifier; // assume multiple instances are supported before the component is provided.
        }
    }
    shouldAutoInitialize() {
        return (!!this.component &&
            this.component.instantiationMode !== "EXPLICIT" /* EXPLICIT */);
    }
}
// undefined should be passed to the service factory for the default instance
function normalizeIdentifierForFactory(identifier) {
    return identifier === DEFAULT_ENTRY_NAME ? undefined : identifier;
}
function isComponentEager(component) {
    return component.instantiationMode === "EAGER" /* EAGER */;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * ComponentContainer that provides Providers for service name T, e.g. `auth`, `auth-internal`
 */
class ComponentContainer {
    constructor(name) {
        this.name = name;
        this.providers = new Map();
    }
    /**
     *
     * @param component Component being added
     * @param overwrite When a component with the same name has already been registered,
     * if overwrite is true: overwrite the existing component with the new component and create a new
     * provider with the new component. It can be useful in tests where you want to use different mocks
     * for different tests.
     * if overwrite is false: throw an exception
     */
    addComponent(component) {
        const provider = this.getProvider(component.name);
        if (provider.isComponentSet()) {
            throw new Error(`Component ${component.name} has already been registered with ${this.name}`);
        }
        provider.setComponent(component);
    }
    addOrOverwriteComponent(component) {
        const provider = this.getProvider(component.name);
        if (provider.isComponentSet()) {
            // delete the existing provider from the container, so we can register the new component
            this.providers.delete(component.name);
        }
        this.addComponent(component);
    }
    /**
     * getProvider provides a type safe interface where it can only be called with a field name
     * present in NameServiceMapping interface.
     *
     * Firebase SDKs providing services should extend NameServiceMapping interface to register
     * themselves.
     */
    getProvider(name) {
        if (this.providers.has(name)) {
            return this.providers.get(name);
        }
        // create a Provider for a service that hasn't registered with Firebase
        const provider = new Provider(name, this);
        this.providers.set(name, provider);
        return provider;
    }
    getProviders() {
        return Array.from(this.providers.values());
    }
}


Object.defineProperty(__vite_ssr_exports__, "Component", { enumerable: true, configurable: true, get(){ return Component }});
Object.defineProperty(__vite_ssr_exports__, "ComponentContainer", { enumerable: true, configurable: true, get(){ return ComponentContainer }});
Object.defineProperty(__vite_ssr_exports__, "Provider", { enumerable: true, configurable: true, get(){ return Provider }});
//# sourceMappingURL=index.esm2017.js.map
;
}


// --------------------
// Request: /node_modules/@firebase/util/dist/node-esm/index.node.esm.js
// Parents: 
// - /node_modules/@firebase/component/dist/esm/index.esm2017.js ($id_73b80f46)
// - /node_modules/@firebase/app/dist/esm/index.esm2017.js ($id_2743050d)
// - /node_modules/@firebase/firestore/dist/lite/index.browser.esm2017.js ($id_479c3dfb)
// Dependencies: 

// --------------------
const $id_5c1f24f9 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview Firebase constants.  Some of these (@defines) can be overridden at compile-time.
 */
const CONSTANTS = {
    /**
     * @define {boolean} Whether this is the client Node.js SDK.
     */
    NODE_CLIENT: false,
    /**
     * @define {boolean} Whether this is the Admin Node.js SDK.
     */
    NODE_ADMIN: false,
    /**
     * Firebase SDK Version
     */
    SDK_VERSION: '${JSCORE_VERSION}'
};

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Throws an error if the provided assertion is falsy
 */
const assert = function (assertion, message) {
    if (!assertion) {
        throw assertionError(message);
    }
};
/**
 * Returns an Error object suitable for throwing.
 */
const assertionError = function (message) {
    return new Error('Firebase Database (' +
        CONSTANTS.SDK_VERSION +
        ') INTERNAL ASSERT FAILED: ' +
        message);
};

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const stringToByteArray$1 = function (str) {
    // TODO(user): Use native implementations if/when available
    const out = [];
    let p = 0;
    for (let i = 0; i < str.length; i++) {
        let c = str.charCodeAt(i);
        if (c < 128) {
            out[p++] = c;
        }
        else if (c < 2048) {
            out[p++] = (c >> 6) | 192;
            out[p++] = (c & 63) | 128;
        }
        else if ((c & 0xfc00) === 0xd800 &&
            i + 1 < str.length &&
            (str.charCodeAt(i + 1) & 0xfc00) === 0xdc00) {
            // Surrogate Pair
            c = 0x10000 + ((c & 0x03ff) << 10) + (str.charCodeAt(++i) & 0x03ff);
            out[p++] = (c >> 18) | 240;
            out[p++] = ((c >> 12) & 63) | 128;
            out[p++] = ((c >> 6) & 63) | 128;
            out[p++] = (c & 63) | 128;
        }
        else {
            out[p++] = (c >> 12) | 224;
            out[p++] = ((c >> 6) & 63) | 128;
            out[p++] = (c & 63) | 128;
        }
    }
    return out;
};
/**
 * Turns an array of numbers into the string given by the concatenation of the
 * characters to which the numbers correspond.
 * @param bytes Array of numbers representing characters.
 * @return Stringification of the array.
 */
const byteArrayToString = function (bytes) {
    // TODO(user): Use native implementations if/when available
    const out = [];
    let pos = 0, c = 0;
    while (pos < bytes.length) {
        const c1 = bytes[pos++];
        if (c1 < 128) {
            out[c++] = String.fromCharCode(c1);
        }
        else if (c1 > 191 && c1 < 224) {
            const c2 = bytes[pos++];
            out[c++] = String.fromCharCode(((c1 & 31) << 6) | (c2 & 63));
        }
        else if (c1 > 239 && c1 < 365) {
            // Surrogate Pair
            const c2 = bytes[pos++];
            const c3 = bytes[pos++];
            const c4 = bytes[pos++];
            const u = (((c1 & 7) << 18) | ((c2 & 63) << 12) | ((c3 & 63) << 6) | (c4 & 63)) -
                0x10000;
            out[c++] = String.fromCharCode(0xd800 + (u >> 10));
            out[c++] = String.fromCharCode(0xdc00 + (u & 1023));
        }
        else {
            const c2 = bytes[pos++];
            const c3 = bytes[pos++];
            out[c++] = String.fromCharCode(((c1 & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
        }
    }
    return out.join('');
};
// We define it as an object literal instead of a class because a class compiled down to es5 can't
// be treeshaked. https://github.com/rollup/rollup/issues/1691
// Static lookup maps, lazily populated by init_()
const base64 = {
    /**
     * Maps bytes to characters.
     */
    byteToCharMap_: null,
    /**
     * Maps characters to bytes.
     */
    charToByteMap_: null,
    /**
     * Maps bytes to websafe characters.
     * @private
     */
    byteToCharMapWebSafe_: null,
    /**
     * Maps websafe characters to bytes.
     * @private
     */
    charToByteMapWebSafe_: null,
    /**
     * Our default alphabet, shared between
     * ENCODED_VALS and ENCODED_VALS_WEBSAFE
     */
    ENCODED_VALS_BASE: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz' + '0123456789',
    /**
     * Our default alphabet. Value 64 (=) is special; it means "nothing."
     */
    get ENCODED_VALS() {
        return this.ENCODED_VALS_BASE + '+/=';
    },
    /**
     * Our websafe alphabet.
     */
    get ENCODED_VALS_WEBSAFE() {
        return this.ENCODED_VALS_BASE + '-_.';
    },
    /**
     * Whether this browser supports the atob and btoa functions. This extension
     * started at Mozilla but is now implemented by many browsers. We use the
     * ASSUME_* variables to avoid pulling in the full useragent detection library
     * but still allowing the standard per-browser compilations.
     *
     */
    HAS_NATIVE_SUPPORT: typeof atob === 'function',
    /**
     * Base64-encode an array of bytes.
     *
     * @param input An array of bytes (numbers with
     *     value in [0, 255]) to encode.
     * @param webSafe Boolean indicating we should use the
     *     alternative alphabet.
     * @return The base64 encoded string.
     */
    encodeByteArray(input, webSafe) {
        if (!Array.isArray(input)) {
            throw Error('encodeByteArray takes an array as a parameter');
        }
        this.init_();
        const byteToCharMap = webSafe
            ? this.byteToCharMapWebSafe_
            : this.byteToCharMap_;
        const output = [];
        for (let i = 0; i < input.length; i += 3) {
            const byte1 = input[i];
            const haveByte2 = i + 1 < input.length;
            const byte2 = haveByte2 ? input[i + 1] : 0;
            const haveByte3 = i + 2 < input.length;
            const byte3 = haveByte3 ? input[i + 2] : 0;
            const outByte1 = byte1 >> 2;
            const outByte2 = ((byte1 & 0x03) << 4) | (byte2 >> 4);
            let outByte3 = ((byte2 & 0x0f) << 2) | (byte3 >> 6);
            let outByte4 = byte3 & 0x3f;
            if (!haveByte3) {
                outByte4 = 64;
                if (!haveByte2) {
                    outByte3 = 64;
                }
            }
            output.push(byteToCharMap[outByte1], byteToCharMap[outByte2], byteToCharMap[outByte3], byteToCharMap[outByte4]);
        }
        return output.join('');
    },
    /**
     * Base64-encode a string.
     *
     * @param input A string to encode.
     * @param webSafe If true, we should use the
     *     alternative alphabet.
     * @return The base64 encoded string.
     */
    encodeString(input, webSafe) {
        // Shortcut for Mozilla browsers that implement
        // a native base64 encoder in the form of "btoa/atob"
        if (this.HAS_NATIVE_SUPPORT && !webSafe) {
            return btoa(input);
        }
        return this.encodeByteArray(stringToByteArray$1(input), webSafe);
    },
    /**
     * Base64-decode a string.
     *
     * @param input to decode.
     * @param webSafe True if we should use the
     *     alternative alphabet.
     * @return string representing the decoded value.
     */
    decodeString(input, webSafe) {
        // Shortcut for Mozilla browsers that implement
        // a native base64 encoder in the form of "btoa/atob"
        if (this.HAS_NATIVE_SUPPORT && !webSafe) {
            return atob(input);
        }
        return byteArrayToString(this.decodeStringToByteArray(input, webSafe));
    },
    /**
     * Base64-decode a string.
     *
     * In base-64 decoding, groups of four characters are converted into three
     * bytes.  If the encoder did not apply padding, the input length may not
     * be a multiple of 4.
     *
     * In this case, the last group will have fewer than 4 characters, and
     * padding will be inferred.  If the group has one or two characters, it decodes
     * to one byte.  If the group has three characters, it decodes to two bytes.
     *
     * @param input Input to decode.
     * @param webSafe True if we should use the web-safe alphabet.
     * @return bytes representing the decoded value.
     */
    decodeStringToByteArray(input, webSafe) {
        this.init_();
        const charToByteMap = webSafe
            ? this.charToByteMapWebSafe_
            : this.charToByteMap_;
        const output = [];
        for (let i = 0; i < input.length;) {
            const byte1 = charToByteMap[input.charAt(i++)];
            const haveByte2 = i < input.length;
            const byte2 = haveByte2 ? charToByteMap[input.charAt(i)] : 0;
            ++i;
            const haveByte3 = i < input.length;
            const byte3 = haveByte3 ? charToByteMap[input.charAt(i)] : 64;
            ++i;
            const haveByte4 = i < input.length;
            const byte4 = haveByte4 ? charToByteMap[input.charAt(i)] : 64;
            ++i;
            if (byte1 == null || byte2 == null || byte3 == null || byte4 == null) {
                throw Error();
            }
            const outByte1 = (byte1 << 2) | (byte2 >> 4);
            output.push(outByte1);
            if (byte3 !== 64) {
                const outByte2 = ((byte2 << 4) & 0xf0) | (byte3 >> 2);
                output.push(outByte2);
                if (byte4 !== 64) {
                    const outByte3 = ((byte3 << 6) & 0xc0) | byte4;
                    output.push(outByte3);
                }
            }
        }
        return output;
    },
    /**
     * Lazy static initialization function. Called before
     * accessing any of the static map variables.
     * @private
     */
    init_() {
        if (!this.byteToCharMap_) {
            this.byteToCharMap_ = {};
            this.charToByteMap_ = {};
            this.byteToCharMapWebSafe_ = {};
            this.charToByteMapWebSafe_ = {};
            // We want quick mappings back and forth, so we precompute two maps.
            for (let i = 0; i < this.ENCODED_VALS.length; i++) {
                this.byteToCharMap_[i] = this.ENCODED_VALS.charAt(i);
                this.charToByteMap_[this.byteToCharMap_[i]] = i;
                this.byteToCharMapWebSafe_[i] = this.ENCODED_VALS_WEBSAFE.charAt(i);
                this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]] = i;
                // Be forgiving when decoding and correctly decode both encodings.
                if (i >= this.ENCODED_VALS_BASE.length) {
                    this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)] = i;
                    this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)] = i;
                }
            }
        }
    }
};
/**
 * URL-safe base64 encoding
 */
const base64Encode = function (str) {
    const utf8Bytes = stringToByteArray$1(str);
    return base64.encodeByteArray(utf8Bytes, true);
};
/**
 * URL-safe base64 encoding (without "." padding in the end).
 * e.g. Used in JSON Web Token (JWT) parts.
 */
const base64urlEncodeWithoutPadding = function (str) {
    // Use base64url encoding and remove padding in the end (dot characters).
    return base64Encode(str).replace(/\./g, '');
};
/**
 * URL-safe base64 decoding
 *
 * NOTE: DO NOT use the global atob() function - it does NOT support the
 * base64Url variant encoding.
 *
 * @param str To be decoded
 * @return Decoded result, if possible
 */
const base64Decode = function (str) {
    try {
        return base64.decodeString(str, true);
    }
    catch (e) {
        console.error('base64Decode failed: ', e);
    }
    return null;
};

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Do a deep-copy of basic JavaScript Objects or Arrays.
 */
function deepCopy(value) {
    return deepExtend(undefined, value);
}
/**
 * Copy properties from source to target (recursively allows extension
 * of Objects and Arrays).  Scalar values in the target are over-written.
 * If target is undefined, an object of the appropriate type will be created
 * (and returned).
 *
 * We recursively copy all child properties of plain Objects in the source- so
 * that namespace- like dictionaries are merged.
 *
 * Note that the target can be a function, in which case the properties in
 * the source Object are copied onto it as static properties of the Function.
 *
 * Note: we don't merge __proto__ to prevent prototype pollution
 */
function deepExtend(target, source) {
    if (!(source instanceof Object)) {
        return source;
    }
    switch (source.constructor) {
        case Date:
            // Treat Dates like scalars; if the target date object had any child
            // properties - they will be lost!
            const dateValue = source;
            return new Date(dateValue.getTime());
        case Object:
            if (target === undefined) {
                target = {};
            }
            break;
        case Array:
            // Always copy the array source and overwrite the target.
            target = [];
            break;
        default:
            // Not a plain Object - treat it as a scalar.
            return source;
    }
    for (const prop in source) {
        // use isValidKey to guard against prototype pollution. See https://snyk.io/vuln/SNYK-JS-LODASH-450202
        if (!source.hasOwnProperty(prop) || !isValidKey(prop)) {
            continue;
        }
        target[prop] = deepExtend(target[prop], source[prop]);
    }
    return target;
}
function isValidKey(key) {
    return key !== '__proto__';
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Deferred {
    constructor() {
        this.reject = () => { };
        this.resolve = () => { };
        this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        });
    }
    /**
     * Our API internals are not promiseified and cannot because our callback APIs have subtle expectations around
     * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
     * and returns a node-style callback which will resolve or reject the Deferred's promise.
     */
    wrapCallback(callback) {
        return (error, value) => {
            if (error) {
                this.reject(error);
            }
            else {
                this.resolve(value);
            }
            if (typeof callback === 'function') {
                // Attaching noop handler just in case developer wasn't expecting
                // promises
                this.promise.catch(() => { });
                // Some of our callbacks don't expect a value and our own tests
                // assert that the parameter length is 1
                if (callback.length === 1) {
                    callback(error);
                }
                else {
                    callback(error, value);
                }
            }
        };
    }
}

/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function createMockUserToken(token, projectId) {
    if (token.uid) {
        throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');
    }
    // Unsecured JWTs use "none" as the algorithm.
    const header = {
        alg: 'none',
        type: 'JWT'
    };
    const project = projectId || 'demo-project';
    const iat = token.iat || 0;
    const sub = token.sub || token.user_id;
    if (!sub) {
        throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");
    }
    const payload = Object.assign({ 
        // Set all required fields to decent defaults
        iss: `https://securetoken.google.com/${project}`, aud: project, iat, exp: iat + 3600, auth_time: iat, sub, user_id: sub, firebase: {
            sign_in_provider: 'custom',
            identities: {}
        } }, token);
    // Unsecured JWTs use the empty string as a signature.
    const signature = '';
    return [
        base64urlEncodeWithoutPadding(JSON.stringify(header)),
        base64urlEncodeWithoutPadding(JSON.stringify(payload)),
        signature
    ].join('.');
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns navigator.userAgent string or '' if it's not defined.
 * @return user agent string
 */
function getUA() {
    if ("undefined" !== 'undefined' &&
        "undefined"['userAgent'] === 'string') {
        return navigator['userAgent'];
    }
    else {
        return '';
    }
}
/**
 * Detect Cordova / PhoneGap / Ionic frameworks on a mobile device.
 *
 * Deliberately does not rely on checking `file://` URLs (as this fails PhoneGap
 * in the Ripple emulator) nor Cordova `onDeviceReady`, which would normally
 * wait for a callback.
 */
function isMobileCordova() {
    return ("undefined" !== 'undefined' &&
        // @ts-ignore Setting up an broadly applicable index signature for Window
        // just to deal with this case would probably be a bad idea.
        !!(window['cordova'] || window['phonegap'] || window['PhoneGap']) &&
        /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(getUA()));
}
/**
 * Detect Node.js.
 *
 * @return true if Node.js environment is detected.
 */
// Node detection logic from: https://github.com/iliakan/detect-node/
function isNode() {
    try {
        return (Object.prototype.toString.call(global.process) === '[object process]');
    }
    catch (e) {
        return false;
    }
}
/**
 * Detect Browser Environment
 */
function isBrowser() {
    return typeof self === 'object' && self.self === self;
}
function isBrowserExtension() {
    const runtime = typeof chrome === 'object'
        ? chrome.runtime
        : typeof browser === 'object'
            ? browser.runtime
            : undefined;
    return typeof runtime === 'object' && runtime.id !== undefined;
}
/**
 * Detect React Native.
 *
 * @return true if ReactNative environment is detected.
 */
function isReactNative() {
    return ("undefined" === 'object' && navigator['product'] === 'ReactNative');
}
/** Detects Electron apps. */
function isElectron() {
    return getUA().indexOf('Electron/') >= 0;
}
/** Detects Internet Explorer. */
function isIE() {
    const ua = getUA();
    return ua.indexOf('MSIE ') >= 0 || ua.indexOf('Trident/') >= 0;
}
/** Detects Universal Windows Platform apps. */
function isUWP() {
    return getUA().indexOf('MSAppHost/') >= 0;
}
/**
 * Detect whether the current SDK build is the Node version.
 *
 * @return true if it's the Node SDK build.
 */
function isNodeSdk() {
    return CONSTANTS.NODE_CLIENT === true || CONSTANTS.NODE_ADMIN === true;
}
/** Returns true if we are running in Safari. */
function isSafari() {
    return (!isNode() &&
        navigator.userAgent.includes('Safari') &&
        !navigator.userAgent.includes('Chrome'));
}
/**
 * This method checks if indexedDB is supported by current browser/service worker context
 * @return true if indexedDB is supported by current browser/service worker context
 */
function isIndexedDBAvailable() {
    return typeof indexedDB === 'object';
}
/**
 * This method validates browser/sw context for indexedDB by opening a dummy indexedDB database and reject
 * if errors occur during the database open operation.
 *
 * @throws exception if current browser/sw context can't run idb.open (ex: Safari iframe, Firefox
 * private browsing)
 */
function validateIndexedDBOpenable() {
    return new Promise((resolve, reject) => {
        try {
            let preExist = true;
            const DB_CHECK_NAME = 'validate-browser-context-for-indexeddb-analytics-module';
            const request = self.indexedDB.open(DB_CHECK_NAME);
            request.onsuccess = () => {
                request.result.close();
                // delete database only when it doesn't pre-exist
                if (!preExist) {
                    self.indexedDB.deleteDatabase(DB_CHECK_NAME);
                }
                resolve(true);
            };
            request.onupgradeneeded = () => {
                preExist = false;
            };
            request.onerror = () => {
                var _a;
                reject(((_a = request.error) === null || _a === void 0 ? void 0 : _a.message) || '');
            };
        }
        catch (error) {
            reject(error);
        }
    });
}
/**
 *
 * This method checks whether cookie is enabled within current browser
 * @return true if cookie is enabled within current browser
 */
function areCookiesEnabled() {
    if ("undefined" === 'undefined' || !navigator.cookieEnabled) {
        return false;
    }
    return true;
}
/**
 * Polyfill for `globalThis` object.
 * @returns the `globalThis` object for the given environment.
 */
function getGlobal() {
    if (typeof self !== 'undefined') {
        return self;
    }
    if ("undefined" !== 'undefined') {
        return window;
    }
    if (typeof global !== 'undefined') {
        return global;
    }
    throw new Error('Unable to locate global object.');
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview Standardized Firebase Error.
 *
 * Usage:
 *
 *   // Typescript string literals for type-safe codes
 *   type Err =
 *     'unknown' |
 *     'object-not-found'
 *     ;
 *
 *   // Closure enum for type-safe error codes
 *   // at-enum {string}
 *   var Err = {
 *     UNKNOWN: 'unknown',
 *     OBJECT_NOT_FOUND: 'object-not-found',
 *   }
 *
 *   let errors: Map<Err, string> = {
 *     'generic-error': "Unknown error",
 *     'file-not-found': "Could not find file: {$file}",
 *   };
 *
 *   // Type-safe function - must pass a valid error code as param.
 *   let error = new ErrorFactory<Err>('service', 'Service', errors);
 *
 *   ...
 *   throw error.create(Err.GENERIC);
 *   ...
 *   throw error.create(Err.FILE_NOT_FOUND, {'file': fileName});
 *   ...
 *   // Service: Could not file file: foo.txt (service/file-not-found).
 *
 *   catch (e) {
 *     assert(e.message === "Could not find file: foo.txt.");
 *     if (e.code === 'service/file-not-found') {
 *       console.log("Could not read file: " + e['file']);
 *     }
 *   }
 */
const ERROR_NAME = 'FirebaseError';
// Based on code from:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Custom_Error_Types
class FirebaseError extends Error {
    constructor(
    /** The error code for this error. */
    code, message, 
    /** Custom data for this error. */
    customData) {
        super(message);
        this.code = code;
        this.customData = customData;
        /** The custom name for all FirebaseErrors. */
        this.name = ERROR_NAME;
        // Fix For ES5
        // https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
        Object.setPrototypeOf(this, FirebaseError.prototype);
        // Maintains proper stack trace for where our error was thrown.
        // Only available on V8.
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, ErrorFactory.prototype.create);
        }
    }
}
class ErrorFactory {
    constructor(service, serviceName, errors) {
        this.service = service;
        this.serviceName = serviceName;
        this.errors = errors;
    }
    create(code, ...data) {
        const customData = data[0] || {};
        const fullCode = `${this.service}/${code}`;
        const template = this.errors[code];
        const message = template ? replaceTemplate(template, customData) : 'Error';
        // Service Name: Error message (service/code).
        const fullMessage = `${this.serviceName}: ${message} (${fullCode}).`;
        const error = new FirebaseError(fullCode, fullMessage, customData);
        return error;
    }
}
function replaceTemplate(template, data) {
    return template.replace(PATTERN, (_, key) => {
        const value = data[key];
        return value != null ? String(value) : `<${key}?>`;
    });
}
const PATTERN = /\{\$([^}]+)}/g;

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Evaluates a JSON string into a javascript object.
 *
 * @param {string} str A string containing JSON.
 * @return {*} The javascript object representing the specified JSON.
 */
function jsonEval(str) {
    return JSON.parse(str);
}
/**
 * Returns JSON representing a javascript object.
 * @param {*} data Javascript object to be stringified.
 * @return {string} The JSON contents of the object.
 */
function stringify(data) {
    return JSON.stringify(data);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Decodes a Firebase auth. token into constituent parts.
 *
 * Notes:
 * - May return with invalid / incomplete claims if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
const decode = function (token) {
    let header = {}, claims = {}, data = {}, signature = '';
    try {
        const parts = token.split('.');
        header = jsonEval(base64Decode(parts[0]) || '');
        claims = jsonEval(base64Decode(parts[1]) || '');
        signature = parts[2];
        data = claims['d'] || {};
        delete claims['d'];
    }
    catch (e) { }
    return {
        header,
        claims,
        data,
        signature
    };
};
/**
 * Decodes a Firebase auth. token and checks the validity of its time-based claims. Will return true if the
 * token is within the time window authorized by the 'nbf' (not-before) and 'iat' (issued-at) claims.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
const isValidTimestamp = function (token) {
    const claims = decode(token).claims;
    const now = Math.floor(new Date().getTime() / 1000);
    let validSince = 0, validUntil = 0;
    if (typeof claims === 'object') {
        if (claims.hasOwnProperty('nbf')) {
            validSince = claims['nbf'];
        }
        else if (claims.hasOwnProperty('iat')) {
            validSince = claims['iat'];
        }
        if (claims.hasOwnProperty('exp')) {
            validUntil = claims['exp'];
        }
        else {
            // token will expire after 24h by default
            validUntil = validSince + 86400;
        }
    }
    return (!!now &&
        !!validSince &&
        !!validUntil &&
        now >= validSince &&
        now <= validUntil);
};
/**
 * Decodes a Firebase auth. token and returns its issued at time if valid, null otherwise.
 *
 * Notes:
 * - May return null if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
const issuedAtTime = function (token) {
    const claims = decode(token).claims;
    if (typeof claims === 'object' && claims.hasOwnProperty('iat')) {
        return claims['iat'];
    }
    return null;
};
/**
 * Decodes a Firebase auth. token and checks the validity of its format. Expects a valid issued-at time.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
const isValidFormat = function (token) {
    const decoded = decode(token), claims = decoded.claims;
    return !!claims && typeof claims === 'object' && claims.hasOwnProperty('iat');
};
/**
 * Attempts to peer into an auth token and determine if it's an admin auth token by looking at the claims portion.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
const isAdmin = function (token) {
    const claims = decode(token).claims;
    return typeof claims === 'object' && claims['admin'] === true;
};

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function contains(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
}
function safeGet(obj, key) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        return obj[key];
    }
    else {
        return undefined;
    }
}
function isEmpty(obj) {
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            return false;
        }
    }
    return true;
}
function map(obj, fn, contextObj) {
    const res = {};
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            res[key] = fn.call(contextObj, obj[key], key, obj);
        }
    }
    return res;
}
/**
 * Deep equal two objects. Support Arrays and Objects.
 */
function deepEqual(a, b) {
    if (a === b) {
        return true;
    }
    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);
    for (const k of aKeys) {
        if (!bKeys.includes(k)) {
            return false;
        }
        const aProp = a[k];
        const bProp = b[k];
        if (isObject(aProp) && isObject(bProp)) {
            if (!deepEqual(aProp, bProp)) {
                return false;
            }
        }
        else if (aProp !== bProp) {
            return false;
        }
    }
    for (const k of bKeys) {
        if (!aKeys.includes(k)) {
            return false;
        }
    }
    return true;
}
function isObject(thing) {
    return thing !== null && typeof thing === 'object';
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns a querystring-formatted string (e.g. &arg=val&arg2=val2) from a
 * params object (e.g. {arg: 'val', arg2: 'val2'})
 * Note: You must prepend it with ? when adding it to a URL.
 */
function querystring(querystringParams) {
    const params = [];
    for (const [key, value] of Object.entries(querystringParams)) {
        if (Array.isArray(value)) {
            value.forEach(arrayVal => {
                params.push(encodeURIComponent(key) + '=' + encodeURIComponent(arrayVal));
            });
        }
        else {
            params.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
        }
    }
    return params.length ? '&' + params.join('&') : '';
}
/**
 * Decodes a querystring (e.g. ?arg=val&arg2=val2) into a params object
 * (e.g. {arg: 'val', arg2: 'val2'})
 */
function querystringDecode(querystring) {
    const obj = {};
    const tokens = querystring.replace(/^\?/, '').split('&');
    tokens.forEach(token => {
        if (token) {
            const [key, value] = token.split('=');
            obj[decodeURIComponent(key)] = decodeURIComponent(value);
        }
    });
    return obj;
}
/**
 * Extract the query string part of a URL, including the leading question mark (if present).
 */
function extractQuerystring(url) {
    const queryStart = url.indexOf('?');
    if (!queryStart) {
        return '';
    }
    const fragmentStart = url.indexOf('#', queryStart);
    return url.substring(queryStart, fragmentStart > 0 ? fragmentStart : undefined);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview SHA-1 cryptographic hash.
 * Variable names follow the notation in FIPS PUB 180-3:
 * http://csrc.nist.gov/publications/fips/fips180-3/fips180-3_final.pdf.
 *
 * Usage:
 *   var sha1 = new sha1();
 *   sha1.update(bytes);
 *   var hash = sha1.digest();
 *
 * Performance:
 *   Chrome 23:   ~400 Mbit/s
 *   Firefox 16:  ~250 Mbit/s
 *
 */
/**
 * SHA-1 cryptographic hash constructor.
 *
 * The properties declared here are discussed in the above algorithm document.
 * @constructor
 * @final
 * @struct
 */
class Sha1 {
    constructor() {
        /**
         * Holds the previous values of accumulated variables a-e in the compress_
         * function.
         * @private
         */
        this.chain_ = [];
        /**
         * A buffer holding the partially computed hash result.
         * @private
         */
        this.buf_ = [];
        /**
         * An array of 80 bytes, each a part of the message to be hashed.  Referred to
         * as the message schedule in the docs.
         * @private
         */
        this.W_ = [];
        /**
         * Contains data needed to pad messages less than 64 bytes.
         * @private
         */
        this.pad_ = [];
        /**
         * @private {number}
         */
        this.inbuf_ = 0;
        /**
         * @private {number}
         */
        this.total_ = 0;
        this.blockSize = 512 / 8;
        this.pad_[0] = 128;
        for (let i = 1; i < this.blockSize; ++i) {
            this.pad_[i] = 0;
        }
        this.reset();
    }
    reset() {
        this.chain_[0] = 0x67452301;
        this.chain_[1] = 0xefcdab89;
        this.chain_[2] = 0x98badcfe;
        this.chain_[3] = 0x10325476;
        this.chain_[4] = 0xc3d2e1f0;
        this.inbuf_ = 0;
        this.total_ = 0;
    }
    /**
     * Internal compress helper function.
     * @param buf Block to compress.
     * @param offset Offset of the block in the buffer.
     * @private
     */
    compress_(buf, offset) {
        if (!offset) {
            offset = 0;
        }
        const W = this.W_;
        // get 16 big endian words
        if (typeof buf === 'string') {
            for (let i = 0; i < 16; i++) {
                // TODO(user): [bug 8140122] Recent versions of Safari for Mac OS and iOS
                // have a bug that turns the post-increment ++ operator into pre-increment
                // during JIT compilation.  We have code that depends heavily on SHA-1 for
                // correctness and which is affected by this bug, so I've removed all uses
                // of post-increment ++ in which the result value is used.  We can revert
                // this change once the Safari bug
                // (https://bugs.webkit.org/show_bug.cgi?id=109036) has been fixed and
                // most clients have been updated.
                W[i] =
                    (buf.charCodeAt(offset) << 24) |
                        (buf.charCodeAt(offset + 1) << 16) |
                        (buf.charCodeAt(offset + 2) << 8) |
                        buf.charCodeAt(offset + 3);
                offset += 4;
            }
        }
        else {
            for (let i = 0; i < 16; i++) {
                W[i] =
                    (buf[offset] << 24) |
                        (buf[offset + 1] << 16) |
                        (buf[offset + 2] << 8) |
                        buf[offset + 3];
                offset += 4;
            }
        }
        // expand to 80 words
        for (let i = 16; i < 80; i++) {
            const t = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
            W[i] = ((t << 1) | (t >>> 31)) & 0xffffffff;
        }
        let a = this.chain_[0];
        let b = this.chain_[1];
        let c = this.chain_[2];
        let d = this.chain_[3];
        let e = this.chain_[4];
        let f, k;
        // TODO(user): Try to unroll this loop to speed up the computation.
        for (let i = 0; i < 80; i++) {
            if (i < 40) {
                if (i < 20) {
                    f = d ^ (b & (c ^ d));
                    k = 0x5a827999;
                }
                else {
                    f = b ^ c ^ d;
                    k = 0x6ed9eba1;
                }
            }
            else {
                if (i < 60) {
                    f = (b & c) | (d & (b | c));
                    k = 0x8f1bbcdc;
                }
                else {
                    f = b ^ c ^ d;
                    k = 0xca62c1d6;
                }
            }
            const t = (((a << 5) | (a >>> 27)) + f + e + k + W[i]) & 0xffffffff;
            e = d;
            d = c;
            c = ((b << 30) | (b >>> 2)) & 0xffffffff;
            b = a;
            a = t;
        }
        this.chain_[0] = (this.chain_[0] + a) & 0xffffffff;
        this.chain_[1] = (this.chain_[1] + b) & 0xffffffff;
        this.chain_[2] = (this.chain_[2] + c) & 0xffffffff;
        this.chain_[3] = (this.chain_[3] + d) & 0xffffffff;
        this.chain_[4] = (this.chain_[4] + e) & 0xffffffff;
    }
    update(bytes, length) {
        // TODO(johnlenz): tighten the function signature and remove this check
        if (bytes == null) {
            return;
        }
        if (length === undefined) {
            length = bytes.length;
        }
        const lengthMinusBlock = length - this.blockSize;
        let n = 0;
        // Using local instead of member variables gives ~5% speedup on Firefox 16.
        const buf = this.buf_;
        let inbuf = this.inbuf_;
        // The outer while loop should execute at most twice.
        while (n < length) {
            // When we have no data in the block to top up, we can directly process the
            // input buffer (assuming it contains sufficient data). This gives ~25%
            // speedup on Chrome 23 and ~15% speedup on Firefox 16, but requires that
            // the data is provided in large chunks (or in multiples of 64 bytes).
            if (inbuf === 0) {
                while (n <= lengthMinusBlock) {
                    this.compress_(bytes, n);
                    n += this.blockSize;
                }
            }
            if (typeof bytes === 'string') {
                while (n < length) {
                    buf[inbuf] = bytes.charCodeAt(n);
                    ++inbuf;
                    ++n;
                    if (inbuf === this.blockSize) {
                        this.compress_(buf);
                        inbuf = 0;
                        // Jump to the outer loop so we use the full-block optimization.
                        break;
                    }
                }
            }
            else {
                while (n < length) {
                    buf[inbuf] = bytes[n];
                    ++inbuf;
                    ++n;
                    if (inbuf === this.blockSize) {
                        this.compress_(buf);
                        inbuf = 0;
                        // Jump to the outer loop so we use the full-block optimization.
                        break;
                    }
                }
            }
        }
        this.inbuf_ = inbuf;
        this.total_ += length;
    }
    /** @override */
    digest() {
        const digest = [];
        let totalBits = this.total_ * 8;
        // Add pad 0x80 0x00*.
        if (this.inbuf_ < 56) {
            this.update(this.pad_, 56 - this.inbuf_);
        }
        else {
            this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
        }
        // Add # bits.
        for (let i = this.blockSize - 1; i >= 56; i--) {
            this.buf_[i] = totalBits & 255;
            totalBits /= 256; // Don't use bit-shifting here!
        }
        this.compress_(this.buf_);
        let n = 0;
        for (let i = 0; i < 5; i++) {
            for (let j = 24; j >= 0; j -= 8) {
                digest[n] = (this.chain_[i] >> j) & 255;
                ++n;
            }
        }
        return digest;
    }
}

/**
 * Helper to make a Subscribe function (just like Promise helps make a
 * Thenable).
 *
 * @param executor Function which can make calls to a single Observer
 *     as a proxy.
 * @param onNoObservers Callback when count of Observers goes to zero.
 */
function createSubscribe(executor, onNoObservers) {
    const proxy = new ObserverProxy(executor, onNoObservers);
    return proxy.subscribe.bind(proxy);
}
/**
 * Implement fan-out for any number of Observers attached via a subscribe
 * function.
 */
class ObserverProxy {
    /**
     * @param executor Function which can make calls to a single Observer
     *     as a proxy.
     * @param onNoObservers Callback when count of Observers goes to zero.
     */
    constructor(executor, onNoObservers) {
        this.observers = [];
        this.unsubscribes = [];
        this.observerCount = 0;
        // Micro-task scheduling by calling task.then().
        this.task = Promise.resolve();
        this.finalized = false;
        this.onNoObservers = onNoObservers;
        // Call the executor asynchronously so subscribers that are called
        // synchronously after the creation of the subscribe function
        // can still receive the very first value generated in the executor.
        this.task
            .then(() => {
            executor(this);
        })
            .catch(e => {
            this.error(e);
        });
    }
    next(value) {
        this.forEachObserver((observer) => {
            observer.next(value);
        });
    }
    error(error) {
        this.forEachObserver((observer) => {
            observer.error(error);
        });
        this.close(error);
    }
    complete() {
        this.forEachObserver((observer) => {
            observer.complete();
        });
        this.close();
    }
    /**
     * Subscribe function that can be used to add an Observer to the fan-out list.
     *
     * - We require that no event is sent to a subscriber sychronously to their
     *   call to subscribe().
     */
    subscribe(nextOrObserver, error, complete) {
        let observer;
        if (nextOrObserver === undefined &&
            error === undefined &&
            complete === undefined) {
            throw new Error('Missing Observer.');
        }
        // Assemble an Observer object when passed as callback functions.
        if (implementsAnyMethods(nextOrObserver, [
            'next',
            'error',
            'complete'
        ])) {
            observer = nextOrObserver;
        }
        else {
            observer = {
                next: nextOrObserver,
                error,
                complete
            };
        }
        if (observer.next === undefined) {
            observer.next = noop;
        }
        if (observer.error === undefined) {
            observer.error = noop;
        }
        if (observer.complete === undefined) {
            observer.complete = noop;
        }
        const unsub = this.unsubscribeOne.bind(this, this.observers.length);
        // Attempt to subscribe to a terminated Observable - we
        // just respond to the Observer with the final error or complete
        // event.
        if (this.finalized) {
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            this.task.then(() => {
                try {
                    if (this.finalError) {
                        observer.error(this.finalError);
                    }
                    else {
                        observer.complete();
                    }
                }
                catch (e) {
                    // nothing
                }
                return;
            });
        }
        this.observers.push(observer);
        return unsub;
    }
    // Unsubscribe is synchronous - we guarantee that no events are sent to
    // any unsubscribed Observer.
    unsubscribeOne(i) {
        if (this.observers === undefined || this.observers[i] === undefined) {
            return;
        }
        delete this.observers[i];
        this.observerCount -= 1;
        if (this.observerCount === 0 && this.onNoObservers !== undefined) {
            this.onNoObservers(this);
        }
    }
    forEachObserver(fn) {
        if (this.finalized) {
            // Already closed by previous event....just eat the additional values.
            return;
        }
        // Since sendOne calls asynchronously - there is no chance that
        // this.observers will become undefined.
        for (let i = 0; i < this.observers.length; i++) {
            this.sendOne(i, fn);
        }
    }
    // Call the Observer via one of it's callback function. We are careful to
    // confirm that the observe has not been unsubscribed since this asynchronous
    // function had been queued.
    sendOne(i, fn) {
        // Execute the callback asynchronously
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.task.then(() => {
            if (this.observers !== undefined && this.observers[i] !== undefined) {
                try {
                    fn(this.observers[i]);
                }
                catch (e) {
                    // Ignore exceptions raised in Observers or missing methods of an
                    // Observer.
                    // Log error to console. b/31404806
                    if (typeof console !== 'undefined' && console.error) {
                        console.error(e);
                    }
                }
            }
        });
    }
    close(err) {
        if (this.finalized) {
            return;
        }
        this.finalized = true;
        if (err !== undefined) {
            this.finalError = err;
        }
        // Proxy is no longer needed - garbage collect references
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.task.then(() => {
            this.observers = undefined;
            this.onNoObservers = undefined;
        });
    }
}
/** Turn synchronous function into one called asynchronously. */
// eslint-disable-next-line @typescript-eslint/ban-types
function async(fn, onError) {
    return (...args) => {
        Promise.resolve(true)
            .then(() => {
            fn(...args);
        })
            .catch((error) => {
            if (onError) {
                onError(error);
            }
        });
    };
}
/**
 * Return true if the object passed in implements any of the named methods.
 */
function implementsAnyMethods(obj, methods) {
    if (typeof obj !== 'object' || obj === null) {
        return false;
    }
    for (const method of methods) {
        if (method in obj && typeof obj[method] === 'function') {
            return true;
        }
    }
    return false;
}
function noop() {
    // do nothing
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Check to make sure the appropriate number of arguments are provided for a public function.
 * Throws an error if it fails.
 *
 * @param fnName The function name
 * @param minCount The minimum number of arguments to allow for the function call
 * @param maxCount The maximum number of argument to allow for the function call
 * @param argCount The actual number of arguments provided.
 */
const validateArgCount = function (fnName, minCount, maxCount, argCount) {
    let argError;
    if (argCount < minCount) {
        argError = 'at least ' + minCount;
    }
    else if (argCount > maxCount) {
        argError = maxCount === 0 ? 'none' : 'no more than ' + maxCount;
    }
    if (argError) {
        const error = fnName +
            ' failed: Was called with ' +
            argCount +
            (argCount === 1 ? ' argument.' : ' arguments.') +
            ' Expects ' +
            argError +
            '.';
        throw new Error(error);
    }
};
/**
 * Generates a string to prefix an error message about failed argument validation
 *
 * @param fnName The function name
 * @param argName The name of the argument
 * @return The prefix to add to the error thrown for validation.
 */
function errorPrefix(fnName, argName) {
    return `${fnName} failed: ${argName} argument `;
}
/**
 * @param fnName
 * @param argumentNumber
 * @param namespace
 * @param optional
 */
function validateNamespace(fnName, namespace, optional) {
    if (optional && !namespace) {
        return;
    }
    if (typeof namespace !== 'string') {
        //TODO: I should do more validation here. We only allow certain chars in namespaces.
        throw new Error(errorPrefix(fnName, 'namespace') + 'must be a valid firebase namespace.');
    }
}
function validateCallback(fnName, argumentName, 
// eslint-disable-next-line @typescript-eslint/ban-types
callback, optional) {
    if (optional && !callback) {
        return;
    }
    if (typeof callback !== 'function') {
        throw new Error(errorPrefix(fnName, argumentName) + 'must be a valid function.');
    }
}
function validateContextObject(fnName, argumentName, context, optional) {
    if (optional && !context) {
        return;
    }
    if (typeof context !== 'object' || context === null) {
        throw new Error(errorPrefix(fnName, argumentName) + 'must be a valid context object.');
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Code originally came from goog.crypt.stringToUtf8ByteArray, but for some reason they
// automatically replaced '\r\n' with '\n', and they didn't handle surrogate pairs,
// so it's been modified.
// Note that not all Unicode characters appear as single characters in JavaScript strings.
// fromCharCode returns the UTF-16 encoding of a character - so some Unicode characters
// use 2 characters in Javascript.  All 4-byte UTF-8 characters begin with a first
// character in the range 0xD800 - 0xDBFF (the first character of a so-called surrogate
// pair).
// See http://www.ecma-international.org/ecma-262/5.1/#sec-15.1.3
/**
 * @param {string} str
 * @return {Array}
 */
const stringToByteArray = function (str) {
    const out = [];
    let p = 0;
    for (let i = 0; i < str.length; i++) {
        let c = str.charCodeAt(i);
        // Is this the lead surrogate in a surrogate pair?
        if (c >= 0xd800 && c <= 0xdbff) {
            const high = c - 0xd800; // the high 10 bits.
            i++;
            assert(i < str.length, 'Surrogate pair missing trail surrogate.');
            const low = str.charCodeAt(i) - 0xdc00; // the low 10 bits.
            c = 0x10000 + (high << 10) + low;
        }
        if (c < 128) {
            out[p++] = c;
        }
        else if (c < 2048) {
            out[p++] = (c >> 6) | 192;
            out[p++] = (c & 63) | 128;
        }
        else if (c < 65536) {
            out[p++] = (c >> 12) | 224;
            out[p++] = ((c >> 6) & 63) | 128;
            out[p++] = (c & 63) | 128;
        }
        else {
            out[p++] = (c >> 18) | 240;
            out[p++] = ((c >> 12) & 63) | 128;
            out[p++] = ((c >> 6) & 63) | 128;
            out[p++] = (c & 63) | 128;
        }
    }
    return out;
};
/**
 * Calculate length without actually converting; useful for doing cheaper validation.
 * @param {string} str
 * @return {number}
 */
const stringLength = function (str) {
    let p = 0;
    for (let i = 0; i < str.length; i++) {
        const c = str.charCodeAt(i);
        if (c < 128) {
            p++;
        }
        else if (c < 2048) {
            p += 2;
        }
        else if (c >= 0xd800 && c <= 0xdbff) {
            // Lead surrogate of a surrogate pair.  The pair together will take 4 bytes to represent.
            p += 4;
            i++; // skip trail surrogate.
        }
        else {
            p += 3;
        }
    }
    return p;
};

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * The amount of milliseconds to exponentially increase.
 */
const DEFAULT_INTERVAL_MILLIS = 1000;
/**
 * The factor to backoff by.
 * Should be a number greater than 1.
 */
const DEFAULT_BACKOFF_FACTOR = 2;
/**
 * The maximum milliseconds to increase to.
 *
 * <p>Visible for testing
 */
const MAX_VALUE_MILLIS = 4 * 60 * 60 * 1000; // Four hours, like iOS and Android.
/**
 * The percentage of backoff time to randomize by.
 * See
 * http://go/safe-client-behavior#step-1-determine-the-appropriate-retry-interval-to-handle-spike-traffic
 * for context.
 *
 * <p>Visible for testing
 */
const RANDOM_FACTOR = 0.5;
/**
 * Based on the backoff method from
 * https://github.com/google/closure-library/blob/master/closure/goog/math/exponentialbackoff.js.
 * Extracted here so we don't need to pass metadata and a stateful ExponentialBackoff object around.
 */
function calculateBackoffMillis(backoffCount, intervalMillis = DEFAULT_INTERVAL_MILLIS, backoffFactor = DEFAULT_BACKOFF_FACTOR) {
    // Calculates an exponentially increasing value.
    // Deviation: calculates value from count and a constant interval, so we only need to save value
    // and count to restore state.
    const currBaseValue = intervalMillis * Math.pow(backoffFactor, backoffCount);
    // A random "fuzz" to avoid waves of retries.
    // Deviation: randomFactor is required.
    const randomWait = Math.round(
    // A fraction of the backoff value to add/subtract.
    // Deviation: changes multiplication order to improve readability.
    RANDOM_FACTOR *
        currBaseValue *
        // A random float (rounded to int by Math.round above) in the range [-1, 1]. Determines
        // if we add or subtract.
        (Math.random() - 0.5) *
        2);
    // Limits backoff to max to avoid effectively permanent backoff.
    return Math.min(MAX_VALUE_MILLIS, currBaseValue + randomWait);
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Provide English ordinal letters after a number
 */
function ordinal(i) {
    if (!Number.isFinite(i)) {
        return `${i}`;
    }
    return i + indicator(i);
}
function indicator(i) {
    i = Math.abs(i);
    const cent = i % 100;
    if (cent >= 10 && cent <= 20) {
        return 'th';
    }
    const dec = i % 10;
    if (dec === 1) {
        return 'st';
    }
    if (dec === 2) {
        return 'nd';
    }
    if (dec === 3) {
        return 'rd';
    }
    return 'th';
}

/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function getModularInstance(service) {
    if (service && service._delegate) {
        return service._delegate;
    }
    else {
        return service;
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Overriding the constant (we should be the only ones doing this)
CONSTANTS.NODE_CLIENT = true;


Object.defineProperty(__vite_ssr_exports__, "CONSTANTS", { enumerable: true, configurable: true, get(){ return CONSTANTS }});
Object.defineProperty(__vite_ssr_exports__, "Deferred", { enumerable: true, configurable: true, get(){ return Deferred }});
Object.defineProperty(__vite_ssr_exports__, "ErrorFactory", { enumerable: true, configurable: true, get(){ return ErrorFactory }});
Object.defineProperty(__vite_ssr_exports__, "FirebaseError", { enumerable: true, configurable: true, get(){ return FirebaseError }});
Object.defineProperty(__vite_ssr_exports__, "MAX_VALUE_MILLIS", { enumerable: true, configurable: true, get(){ return MAX_VALUE_MILLIS }});
Object.defineProperty(__vite_ssr_exports__, "RANDOM_FACTOR", { enumerable: true, configurable: true, get(){ return RANDOM_FACTOR }});
Object.defineProperty(__vite_ssr_exports__, "Sha1", { enumerable: true, configurable: true, get(){ return Sha1 }});
Object.defineProperty(__vite_ssr_exports__, "areCookiesEnabled", { enumerable: true, configurable: true, get(){ return areCookiesEnabled }});
Object.defineProperty(__vite_ssr_exports__, "assert", { enumerable: true, configurable: true, get(){ return assert }});
Object.defineProperty(__vite_ssr_exports__, "assertionError", { enumerable: true, configurable: true, get(){ return assertionError }});
Object.defineProperty(__vite_ssr_exports__, "async", { enumerable: true, configurable: true, get(){ return async }});
Object.defineProperty(__vite_ssr_exports__, "base64", { enumerable: true, configurable: true, get(){ return base64 }});
Object.defineProperty(__vite_ssr_exports__, "base64Decode", { enumerable: true, configurable: true, get(){ return base64Decode }});
Object.defineProperty(__vite_ssr_exports__, "base64Encode", { enumerable: true, configurable: true, get(){ return base64Encode }});
Object.defineProperty(__vite_ssr_exports__, "base64urlEncodeWithoutPadding", { enumerable: true, configurable: true, get(){ return base64urlEncodeWithoutPadding }});
Object.defineProperty(__vite_ssr_exports__, "calculateBackoffMillis", { enumerable: true, configurable: true, get(){ return calculateBackoffMillis }});
Object.defineProperty(__vite_ssr_exports__, "contains", { enumerable: true, configurable: true, get(){ return contains }});
Object.defineProperty(__vite_ssr_exports__, "createMockUserToken", { enumerable: true, configurable: true, get(){ return createMockUserToken }});
Object.defineProperty(__vite_ssr_exports__, "createSubscribe", { enumerable: true, configurable: true, get(){ return createSubscribe }});
Object.defineProperty(__vite_ssr_exports__, "decode", { enumerable: true, configurable: true, get(){ return decode }});
Object.defineProperty(__vite_ssr_exports__, "deepCopy", { enumerable: true, configurable: true, get(){ return deepCopy }});
Object.defineProperty(__vite_ssr_exports__, "deepEqual", { enumerable: true, configurable: true, get(){ return deepEqual }});
Object.defineProperty(__vite_ssr_exports__, "deepExtend", { enumerable: true, configurable: true, get(){ return deepExtend }});
Object.defineProperty(__vite_ssr_exports__, "errorPrefix", { enumerable: true, configurable: true, get(){ return errorPrefix }});
Object.defineProperty(__vite_ssr_exports__, "extractQuerystring", { enumerable: true, configurable: true, get(){ return extractQuerystring }});
Object.defineProperty(__vite_ssr_exports__, "getGlobal", { enumerable: true, configurable: true, get(){ return getGlobal }});
Object.defineProperty(__vite_ssr_exports__, "getModularInstance", { enumerable: true, configurable: true, get(){ return getModularInstance }});
Object.defineProperty(__vite_ssr_exports__, "getUA", { enumerable: true, configurable: true, get(){ return getUA }});
Object.defineProperty(__vite_ssr_exports__, "isAdmin", { enumerable: true, configurable: true, get(){ return isAdmin }});
Object.defineProperty(__vite_ssr_exports__, "isBrowser", { enumerable: true, configurable: true, get(){ return isBrowser }});
Object.defineProperty(__vite_ssr_exports__, "isBrowserExtension", { enumerable: true, configurable: true, get(){ return isBrowserExtension }});
Object.defineProperty(__vite_ssr_exports__, "isElectron", { enumerable: true, configurable: true, get(){ return isElectron }});
Object.defineProperty(__vite_ssr_exports__, "isEmpty", { enumerable: true, configurable: true, get(){ return isEmpty }});
Object.defineProperty(__vite_ssr_exports__, "isIE", { enumerable: true, configurable: true, get(){ return isIE }});
Object.defineProperty(__vite_ssr_exports__, "isIndexedDBAvailable", { enumerable: true, configurable: true, get(){ return isIndexedDBAvailable }});
Object.defineProperty(__vite_ssr_exports__, "isMobileCordova", { enumerable: true, configurable: true, get(){ return isMobileCordova }});
Object.defineProperty(__vite_ssr_exports__, "isNode", { enumerable: true, configurable: true, get(){ return isNode }});
Object.defineProperty(__vite_ssr_exports__, "isNodeSdk", { enumerable: true, configurable: true, get(){ return isNodeSdk }});
Object.defineProperty(__vite_ssr_exports__, "isReactNative", { enumerable: true, configurable: true, get(){ return isReactNative }});
Object.defineProperty(__vite_ssr_exports__, "isSafari", { enumerable: true, configurable: true, get(){ return isSafari }});
Object.defineProperty(__vite_ssr_exports__, "isUWP", { enumerable: true, configurable: true, get(){ return isUWP }});
Object.defineProperty(__vite_ssr_exports__, "isValidFormat", { enumerable: true, configurable: true, get(){ return isValidFormat }});
Object.defineProperty(__vite_ssr_exports__, "isValidTimestamp", { enumerable: true, configurable: true, get(){ return isValidTimestamp }});
Object.defineProperty(__vite_ssr_exports__, "issuedAtTime", { enumerable: true, configurable: true, get(){ return issuedAtTime }});
Object.defineProperty(__vite_ssr_exports__, "jsonEval", { enumerable: true, configurable: true, get(){ return jsonEval }});
Object.defineProperty(__vite_ssr_exports__, "map", { enumerable: true, configurable: true, get(){ return map }});
Object.defineProperty(__vite_ssr_exports__, "ordinal", { enumerable: true, configurable: true, get(){ return ordinal }});
Object.defineProperty(__vite_ssr_exports__, "querystring", { enumerable: true, configurable: true, get(){ return querystring }});
Object.defineProperty(__vite_ssr_exports__, "querystringDecode", { enumerable: true, configurable: true, get(){ return querystringDecode }});
Object.defineProperty(__vite_ssr_exports__, "safeGet", { enumerable: true, configurable: true, get(){ return safeGet }});
Object.defineProperty(__vite_ssr_exports__, "stringLength", { enumerable: true, configurable: true, get(){ return stringLength }});
Object.defineProperty(__vite_ssr_exports__, "stringToByteArray", { enumerable: true, configurable: true, get(){ return stringToByteArray }});
Object.defineProperty(__vite_ssr_exports__, "stringify", { enumerable: true, configurable: true, get(){ return stringify }});
Object.defineProperty(__vite_ssr_exports__, "validateArgCount", { enumerable: true, configurable: true, get(){ return validateArgCount }});
Object.defineProperty(__vite_ssr_exports__, "validateCallback", { enumerable: true, configurable: true, get(){ return validateCallback }});
Object.defineProperty(__vite_ssr_exports__, "validateContextObject", { enumerable: true, configurable: true, get(){ return validateContextObject }});
Object.defineProperty(__vite_ssr_exports__, "validateIndexedDBOpenable", { enumerable: true, configurable: true, get(){ return validateIndexedDBOpenable }});
Object.defineProperty(__vite_ssr_exports__, "validateNamespace", { enumerable: true, configurable: true, get(){ return validateNamespace }});
//# sourceMappingURL=index.node.esm.js.map
;
}


// --------------------
// Request: /node_modules/@firebase/logger/dist/esm/index.esm2017.js
// Parents: 
// - /node_modules/@firebase/app/dist/esm/index.esm2017.js ($id_2743050d)
// - /node_modules/@firebase/firestore/dist/lite/index.browser.esm2017.js ($id_479c3dfb)
// Dependencies: 

// --------------------
const $id_c5215572 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A container for all of the Logger instances
 */
const instances = [];
/**
 * The JS SDK supports 5 log levels and also allows a user the ability to
 * silence the logs altogether.
 *
 * The order is a follows:
 * DEBUG < VERBOSE < INFO < WARN < ERROR
 *
 * All of the log types above the current log level will be captured (i.e. if
 * you set the log level to `INFO`, errors will still be logged, but `DEBUG` and
 * `VERBOSE` logs will not)
 */
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["DEBUG"] = 0] = "DEBUG";
    LogLevel[LogLevel["VERBOSE"] = 1] = "VERBOSE";
    LogLevel[LogLevel["INFO"] = 2] = "INFO";
    LogLevel[LogLevel["WARN"] = 3] = "WARN";
    LogLevel[LogLevel["ERROR"] = 4] = "ERROR";
    LogLevel[LogLevel["SILENT"] = 5] = "SILENT";
})(LogLevel || (LogLevel = {}));
const levelStringToEnum = {
    'debug': LogLevel.DEBUG,
    'verbose': LogLevel.VERBOSE,
    'info': LogLevel.INFO,
    'warn': LogLevel.WARN,
    'error': LogLevel.ERROR,
    'silent': LogLevel.SILENT
};
/**
 * The default log level
 */
const defaultLogLevel = LogLevel.INFO;
/**
 * By default, `console.debug` is not displayed in the developer console (in
 * chrome). To avoid forcing users to have to opt-in to these logs twice
 * (i.e. once for firebase, and once in the console), we are sending `DEBUG`
 * logs to the `console.log` function.
 */
const ConsoleMethod = {
    [LogLevel.DEBUG]: 'log',
    [LogLevel.VERBOSE]: 'log',
    [LogLevel.INFO]: 'info',
    [LogLevel.WARN]: 'warn',
    [LogLevel.ERROR]: 'error'
};
/**
 * The default log handler will forward DEBUG, VERBOSE, INFO, WARN, and ERROR
 * messages on to their corresponding console counterparts (if the log method
 * is supported by the current log level)
 */
const defaultLogHandler = (instance, logType, ...args) => {
    if (logType < instance.logLevel) {
        return;
    }
    const now = new Date().toISOString();
    const method = ConsoleMethod[logType];
    if (method) {
        console[method](`[${now}]  ${instance.name}:`, ...args);
    }
    else {
        throw new Error(`Attempted to log a message with an invalid logType (value: ${logType})`);
    }
};
class Logger {
    /**
     * Gives you an instance of a Logger to capture messages according to
     * Firebase's logging scheme.
     *
     * @param name The name that the logs will be associated with
     */
    constructor(name) {
        this.name = name;
        /**
         * The log level of the given Logger instance.
         */
        this._logLevel = defaultLogLevel;
        /**
         * The main (internal) log handler for the Logger instance.
         * Can be set to a new function in internal package code but not by user.
         */
        this._logHandler = defaultLogHandler;
        /**
         * The optional, additional, user-defined log handler for the Logger instance.
         */
        this._userLogHandler = null;
        /**
         * Capture the current instance for later use
         */
        instances.push(this);
    }
    get logLevel() {
        return this._logLevel;
    }
    set logLevel(val) {
        if (!(val in LogLevel)) {
            throw new TypeError(`Invalid value "${val}" assigned to \`logLevel\``);
        }
        this._logLevel = val;
    }
    // Workaround for setter/getter having to be the same type.
    setLogLevel(val) {
        this._logLevel = typeof val === 'string' ? levelStringToEnum[val] : val;
    }
    get logHandler() {
        return this._logHandler;
    }
    set logHandler(val) {
        if (typeof val !== 'function') {
            throw new TypeError('Value assigned to `logHandler` must be a function');
        }
        this._logHandler = val;
    }
    get userLogHandler() {
        return this._userLogHandler;
    }
    set userLogHandler(val) {
        this._userLogHandler = val;
    }
    /**
     * The functions below are all based on the `console` interface
     */
    debug(...args) {
        this._userLogHandler && this._userLogHandler(this, LogLevel.DEBUG, ...args);
        this._logHandler(this, LogLevel.DEBUG, ...args);
    }
    log(...args) {
        this._userLogHandler &&
            this._userLogHandler(this, LogLevel.VERBOSE, ...args);
        this._logHandler(this, LogLevel.VERBOSE, ...args);
    }
    info(...args) {
        this._userLogHandler && this._userLogHandler(this, LogLevel.INFO, ...args);
        this._logHandler(this, LogLevel.INFO, ...args);
    }
    warn(...args) {
        this._userLogHandler && this._userLogHandler(this, LogLevel.WARN, ...args);
        this._logHandler(this, LogLevel.WARN, ...args);
    }
    error(...args) {
        this._userLogHandler && this._userLogHandler(this, LogLevel.ERROR, ...args);
        this._logHandler(this, LogLevel.ERROR, ...args);
    }
}
function setLogLevel(level) {
    instances.forEach(inst => {
        inst.setLogLevel(level);
    });
}
function setUserLogHandler(logCallback, options) {
    for (const instance of instances) {
        let customLogLevel = null;
        if (options && options.level) {
            customLogLevel = levelStringToEnum[options.level];
        }
        if (logCallback === null) {
            instance.userLogHandler = null;
        }
        else {
            instance.userLogHandler = (instance, level, ...args) => {
                const message = args
                    .map(arg => {
                    if (arg == null) {
                        return null;
                    }
                    else if (typeof arg === 'string') {
                        return arg;
                    }
                    else if (typeof arg === 'number' || typeof arg === 'boolean') {
                        return arg.toString();
                    }
                    else if (arg instanceof Error) {
                        return arg.message;
                    }
                    else {
                        try {
                            return JSON.stringify(arg);
                        }
                        catch (ignored) {
                            return null;
                        }
                    }
                })
                    .filter(arg => arg)
                    .join(' ');
                if (level >= (customLogLevel !== null && customLogLevel !== void 0 ? customLogLevel : instance.logLevel)) {
                    logCallback({
                        level: LogLevel[level].toLowerCase(),
                        message,
                        args,
                        type: instance.name
                    });
                }
            };
        }
    }
}


Object.defineProperty(__vite_ssr_exports__, "LogLevel", { enumerable: true, configurable: true, get(){ return LogLevel }});
Object.defineProperty(__vite_ssr_exports__, "Logger", { enumerable: true, configurable: true, get(){ return Logger }});
Object.defineProperty(__vite_ssr_exports__, "setLogLevel", { enumerable: true, configurable: true, get(){ return setLogLevel }});
Object.defineProperty(__vite_ssr_exports__, "setUserLogHandler", { enumerable: true, configurable: true, get(){ return setUserLogHandler }});
//# sourceMappingURL=index.esm2017.js.map
;
}


// --------------------
// Request: /node_modules/firebase/auth/dist/index.esm.js
// Parents: 
// - /utils/auth.js ($id_0d5e52a5)
// Dependencies: 
// - /node_modules/@firebase/auth/dist/node-esm/index.js ($id_ad4b4642)
// --------------------
const $id_030ea2f2 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@firebase/auth/dist/node-esm/index.js");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
//# sourceMappingURL=index.esm.js.map
;
}


// --------------------
// Request: /node_modules/@firebase/auth/dist/node-esm/index.js
// Parents: 
// - /node_modules/firebase/auth/dist/index.esm.js ($id_030ea2f2)
// Dependencies: 

// --------------------
const $id_ad4b4642 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import("file:///C:/DEV/VUE/yes4nuxt/node_modules/@firebase/auth/dist/node-esm/index.js").then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error("[vite dev] Error loading external \"C:/DEV/VUE/yes4nuxt/node_modules/@firebase/auth/dist/node-esm/index.js\".") })


// --------------------
// Request: /utils/firestore.js
// Parents: 
// - /store/user.js ($id_6c3c060a)
// - /store/store.js ($id_fa1a709a)
// Dependencies: 
// - /node_modules/firebase/firestore/lite/dist/index.esm.js ($id_8de144de)
// - /store/store.js ($id_fa1a709a)
// --------------------
const $id_db0483a6 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/firebase/firestore/lite/dist/index.esm.js");


const __vite_ssr_import_1__ = await __vite_ssr_import__("/store/store.js");



async function set(db, col, id, data) {
  const store = __vite_ssr_import_1__.useStore()
  const docRef = __vite_ssr_import_0__.doc(db, col + '/' + store.nick + '/' + col + '/' + id)
  try {
    await __vite_ssr_import_0__.setDoc(docRef, data)
  } catch (e) {
    console.log(e)
    return
  }
  console.log('Success.')
}
Object.defineProperty(__vite_ssr_exports__, "set", { enumerable: true, configurable: true, get(){ return set }});
async function add(db, col, data) {
  const store = __vite_ssr_import_1__.useStore()
  const colRef = __vite_ssr_import_0__.collection(db, col + '/' + store.nick + '/' + col)
  try {
    await __vite_ssr_import_0__.setDoc(colRef, data)
  } catch (e) {
    console.log(e)
    return
  }
  console.log('Success.')
}
Object.defineProperty(__vite_ssr_exports__, "add", { enumerable: true, configurable: true, get(){ return add }});
async function get(db, col, id) {
  const store = __vite_ssr_import_1__.useStore()
  const docRef = doc(db, col + '/' + store.nick + '/' + col + '/' + id)
  try {
    const snapshot = await __vite_ssr_import_0__.getDoc(docRef)
    const doc = snapshot.data()
    if (!doc) {
      console.log('Document does not exist.')
      return
    }
    return doc
  } catch (e) {
    console.log(e)
  }
}
Object.defineProperty(__vite_ssr_exports__, "get", { enumerable: true, configurable: true, get(){ return get }});
async function remove(db, col, id) {
  const store = __vite_ssr_import_1__.useStore()
  const docRef = doc(db, col + '/' + store.nick + '/' + col + '/' + id)
  try {
    const snapshot = await deleteDoc(docRef)
    const doc = snapshot.data()
    if (!doc) {
      console.log('Document does not exist.')
      return
    }
    return doc
  } catch (e) {
    console.log(e)
  }
}
Object.defineProperty(__vite_ssr_exports__, "remove", { enumerable: true, configurable: true, get(){ return remove }});
async function list(db, col, args) {
  const store = __vite_ssr_import_1__.useStore()
  const constraints = []
  if (args.where)
    for (let w of args.where) {
      constraints.push(__vite_ssr_import_0__.where(...w))
    }
  if (args.order)
    for (let o of args.order) {
      constraints.push(order(...o))
    }
  if (args.limit)
    for (let l of args.limit) {
      constraints.push(limit(...l))
    }
  const q = __vite_ssr_import_0__.query(
    __vite_ssr_import_0__.collection(db, col + '/' + store.nick + '/' + col),
    ...constraints
  )
  const querySnapshot = await __vite_ssr_import_0__.getDocs(q)
  const docs = []
  querySnapshot.forEach((doc) => {
    let _doc = doc.data()
    _doc.id = doc.id
    docs.push(_doc)
  })
  return docs
}
Object.defineProperty(__vite_ssr_exports__, "list", { enumerable: true, configurable: true, get(){ return list }});

// // import axios from 'axios'
// import FireStoreParser from 'firestore-parser'
// export const fbApi = 'https://firestore.googleapis.com/v1/projects'
// export async function apiGet(collection, id, subcollection = null, nick = null) {
//   // const res = await useFetch(`${fbApi}/${fbCfg.projectId}/databases/(default)/documents/${collection}/${subcollection && store.nick ? `${store.nick}/${subcollection}/` : ''}${id}`)
//   const res = await useFetch(`${fbApi}/${fbCfg.projectId}/databases/(default)/documents/${collection}/${subcollection && store.nick ? `${store.nick}/${subcollection}/` : ''}${id}`)
//   return FireStoreParser(res.data.fields)
// }
;
}


// --------------------
// Request: /store/store.js
// Parents: 
// - /utils/firestore.js ($id_db0483a6)
// - /pages/login.vue?macro=true ($id_213baa8a)
// - /components/Forms/LoginForm.vue ($id_600babf2)
// - /components/Forms/Register.vue ($id_7dc4ae3d)
// - /pages/login.vue ($id_b0922173)
// - /plugins/persistedstate.js ($id_88d211c2)
// Dependencies: 
// - /node_modules/pinia/dist/pinia.mjs ($id_b1920624)
// - /utils/firestore.js ($id_db0483a6)
// --------------------
const $id_fa1a709a = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/pinia/dist/pinia.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/utils/firestore.js");

// NOTE ZEE: I refactored this to use a generic store ... do you think is any drawback in this approach?
const useStore = __vite_ssr_import_0__.defineStore('global', {
  state: () => ({
    counter: 0,
    items: [],
    posts: [],
    nick: ''
  }),
  actions: {
    increment() {
      this.counter++
      // this.$nuxt.$hello(`val: ${this.counter}`)
      // console.log('Clicked: ', $nuxt.$hello('zaza ene dee'));
    },
    decrement() {
      this.counter--
    },
    async list( collection, userId) {
      try {
        const data = await __vite_ssr_import_1__.list($nuxt.$firestoreDb, collection, 'userId', userId)
        this[collection] = data ? data: null
        this.error = null;
        return this[collection]
      } catch (e) {
        this.posts = []
        this.error = e;
        return false;
      }
    },
    async add(collection, payload) {
      console.log(collection, payload)
      try {
        const data = await __vite_ssr_import_1__.add($nuxt.$firestoreDb, collection, payload)
        this.error = null;
        console.log(data.id)
        return data.id;
      } catch (e) {
        this.error = e;
        return false;
      }
    },
    async get(collection, id) {
      try {
        const snap = await __vite_ssr_import_1__.get($nuxt.$firestoreDb, collection, id)
        this.error = null
        return snap.doc()
      } catch (e) {
        this.error = e;
        return false;
      }
    }
  },
  getters: {
    counterValue: (state) => state.counter
  }
})
Object.defineProperty(__vite_ssr_exports__, "useStore", { enumerable: true, configurable: true, get(){ return useStore }});

if (__vite_ssr_import_meta__.hot) {
  __vite_ssr_import_meta__.hot.accept(__vite_ssr_import_0__.acceptHMRUpdate(useStore, __vite_ssr_import_meta__.hot))
};
}


// --------------------
// Request: /node_modules/vue/server-renderer/index.js
// Parents: 
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /components/Tools/Loader.vue ($id_c71ecea5)
// - /components/Tools/ErrorMsg.vue ($id_faa89f61)
// - /components/reusable/AppFormField.vue ($id_def58cce)
// - /components/Forms/LoginForm.vue ($id_600babf2)
// - /components/Forms/Register.vue ($id_7dc4ae3d)
// - /pages/login.vue?macro=true ($id_213baa8a)
// - /pages/index.vue ($id_cca58e97)
// - /pages/login.vue ($id_b0922173)
// - /node_modules/nuxt3/dist/app/components/nuxt-root.vue ($id_f8564e04)
// - /components/Header/Header.vue ($id_73b23c04)
// - /app.vue ($id_2b46e842)
// Dependencies: 

// --------------------
const $id_b215fa1c = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import("file:///C:/DEV/VUE/yes4nuxt/node_modules/vue/server-renderer/index.js").then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error("[vite dev] Error loading external \"C:/DEV/VUE/yes4nuxt/node_modules/vue/server-renderer/index.js\".") })


// --------------------
// Request: /@id/plugin-vue:export-helper
// Parents: 
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /components/Tools/Loader.vue ($id_c71ecea5)
// - /components/Tools/ErrorMsg.vue ($id_faa89f61)
// - /components/reusable/AppFormField.vue ($id_def58cce)
// - /components/Forms/LoginForm.vue ($id_600babf2)
// - /components/Forms/Register.vue ($id_7dc4ae3d)
// - /pages/login.vue?macro=true ($id_213baa8a)
// - /pages/index.vue ($id_cca58e97)
// - /pages/login.vue ($id_b0922173)
// - /node_modules/nuxt3/dist/app/components/nuxt-root.vue ($id_f8564e04)
// - /components/Header/Header.vue ($id_73b23c04)
// - /app.vue ($id_2b46e842)
// Dependencies: 

// --------------------
const $id_bbb863c1 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

__vite_ssr_exports__.default = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
}
;
}


// --------------------
// Request: /pages/login.vue?macro=true
// Parents: 
// - /@id/__x00__virtual:C:/DEV/VUE/yes4nuxt/.nuxt/routes.mjs ($id_a67a8a7c)
// Dependencies: 
// - /store/store.js ($id_fa1a709a)
// - /components/Forms/LoginForm.vue ($id_600babf2)
// - /components/Forms/Register.vue ($id_7dc4ae3d)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_213baa8a = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

  const __vite_ssr_import_0__ = await __vite_ssr_import__("/store/store.js");

  const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/Forms/LoginForm.vue");

  const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/Forms/Register.vue");

  const _sfc_main = ({
    components: { LoginForm: __vite_ssr_import_1__.default, Register: __vite_ssr_import_2__.default },
    setup() {
      const store = __vite_ssr_import_0__.useStore();
      return {
        store,
      }
    }
  })

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_login_form = __vite_ssr_import_3__.resolveComponent("login-form")
  const _component_register = __vite_ssr_import_3__.resolveComponent("register")

  _push(`<!--[--><div class="container" style="${__vite_ssr_import_4__.ssrRenderStyle({"width":"540px"})}"><div class="container mt-5"><ul class="nav nav-tabs nav-fill justify-content-center" id="myTab" role="tablist"><li class="nav-item" role="presentation"><button class="nav-link active" id="login-tab" data-bs-toggle="tab" data-bs-target="#login" type="button" role="tab" aria-controls="login" aria-selected="true">Login</button></li><li class="nav-item" role="presentation"><button class="nav-link" id="signup-tab" data-bs-toggle="tab" data-bs-target="#signup" type="button" role="tab" aria-controls="signup" aria-selected="false">Register</button></li></ul><div class="tab-content" id="myTabContent"><div class="tab-pane fade show active" id="login" role="tabpanel" aria-labelledby="login-tab">`)
  _push(__vite_ssr_import_4__.ssrRenderComponent(_component_login_form, null, null, _parent))
  _push(`</div><div class="tab-pane fade" id="signup" role="tabpanel" aria-labelledby="signup-tab">`)
  _push(__vite_ssr_import_4__.ssrRenderComponent(_component_register, null, null, _parent))
  _push(`</div></div></div></div><h2 class="d-flex justify-content-center">${__vite_ssr_import_4__.ssrInterpolate($setup.store.counter)}</h2><div class="d-flex justify-content-center"><button type="button" class="btn btn-outline-primary">Add</button><button type="button" class="btn btn-outline-success">Subtract</button></div><!--]-->`)
}


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/login.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/DEV/VUE/yes4nuxt/pages/login.vue"]])
const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /components/Forms/LoginForm.vue
// Parents: 
// - /pages/login.vue?macro=true ($id_213baa8a)
// - /pages/login.vue ($id_b0922173)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// - /store/store.js ($id_fa1a709a)
// - /store/user.js ($id_6c3c060a)
// - /components/Tools/Loader.vue ($id_c71ecea5)
// - /components/Tools/ErrorMsg.vue ($id_faa89f61)
// - /components/reusable/AppFormField.vue ($id_def58cce)
// - /node_modules/vee-validate/dist/vee-validate.esm.js ($id_2387c42e)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_600babf2 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

  const __vite_ssr_import_2__ = await __vite_ssr_import__("/store/store.js");

  const __vite_ssr_import_3__ = await __vite_ssr_import__("/store/user.js");

  const __vite_ssr_import_4__ = await __vite_ssr_import__("/components/Tools/Loader.vue");

  const __vite_ssr_import_5__ = await __vite_ssr_import__("/components/Tools/ErrorMsg.vue");

  const __vite_ssr_import_6__ = await __vite_ssr_import__("/components/reusable/AppFormField.vue");

  const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/vee-validate/dist/vee-validate.esm.js");

  const _sfc_main = ({
    components: { Loader: __vite_ssr_import_4__.default, ErrorMsg: __vite_ssr_import_5__.default, Form: __vite_ssr_import_7__.Form, AppFormField: __vite_ssr_import_6__.default },
    setup() {
      const authStore = __vite_ssr_import_3__.useAuthStore();
      const { logInUser } = authStore;
      
      const store = __vite_ssr_import_2__.useStore();

      const isActive = __vite_ssr_import_0__.ref(false)
      const user = __vite_ssr_import_0__.reactive({
        email: '',
        password: ''
      })

      const loginWithEmail = async () => {
        isActive.value = true
        await logInUser(user.email, user.password)
        __vite_ssr_import_1__.navigateTo('/')
        isActive.value = false
      }

      return {
        isActive,
        store,
        user,
        authStore,
        loginWithEmail
      }
    }
  })

const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_9__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_loader = __vite_ssr_import_8__.resolveComponent("loader")
  const _component_Form = __vite_ssr_import_8__.resolveComponent("Form")
  const _component_AppFormField = __vite_ssr_import_8__.resolveComponent("AppFormField")

  _push(`<div${__vite_ssr_import_9__.ssrRenderAttrs(__vite_ssr_import_8__.mergeProps({ class: "container mt-4" }, _attrs))}>`)
  _push(__vite_ssr_import_9__.ssrRenderComponent(_component_loader, { isLoading: $setup.isActive }, null, _parent))
  _push(__vite_ssr_import_9__.ssrRenderComponent(_component_Form, null, {
    default: __vite_ssr_import_8__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(__vite_ssr_import_9__.ssrRenderComponent(_component_AppFormField, {
          label: "Email",
          name: "email",
          type: "email",
          modelValue: $setup.user.email,
          "onUpdate:modelValue": $event => (($setup.user.email) = $event),
          rules: "required|email"
        }, null, _parent, _scopeId))
        _push(__vite_ssr_import_9__.ssrRenderComponent(_component_AppFormField, {
          label: "Password",
          name: "password",
          type: "password",
          modelValue: $setup.user.password,
          "onUpdate:modelValue": $event => (($setup.user.password) = $event),
          rules: "required|min:6"
        }, null, _parent, _scopeId))
        _push(`<button type="submit" class="btn btn-primary" style="${
          __vite_ssr_import_9__.ssrRenderStyle({"width":"100%"})
        }"${
          _scopeId
        }>Login</button>`)
      } else {
        return [
          __vite_ssr_import_8__.createVNode(_component_AppFormField, {
            label: "Email",
            name: "email",
            type: "email",
            modelValue: $setup.user.email,
            "onUpdate:modelValue": $event => (($setup.user.email) = $event),
            rules: "required|email"
          }, null, 8 /* PROPS */, ["modelValue", "onUpdate:modelValue"]),
          __vite_ssr_import_8__.createVNode(_component_AppFormField, {
            label: "Password",
            name: "password",
            type: "password",
            modelValue: $setup.user.password,
            "onUpdate:modelValue": $event => (($setup.user.password) = $event),
            rules: "required|min:6"
          }, null, 8 /* PROPS */, ["modelValue", "onUpdate:modelValue"]),
          __vite_ssr_import_8__.createVNode("button", {
            type: "submit",
            class: "btn btn-primary",
            style: {"width":"100%"}
          }, "Login")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div>`)
}


const __vite_ssr_import_10__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_10__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Forms/LoginForm.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_11__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_11__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/DEV/VUE/yes4nuxt/components/Forms/LoginForm.vue"]]);
}


// --------------------
// Request: /components/Tools/Loader.vue
// Parents: 
// - /components/Forms/LoginForm.vue ($id_600babf2)
// - /components/Forms/Register.vue ($id_7dc4ae3d)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /components/Tools/Loader.vue?vue&type=style&index=0&lang.css ($id_418e9d87)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_c71ecea5 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


const _sfc_main = __vite_ssr_import_0__.defineComponent({
  props: {
    isLoading: Boolean,
  },
  setup() {

  }
})


const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if (_ctx.isLoading) {
    _push(`<div${__vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "loading" }, _attrs))}><div class="card"><div class="sk-chase"><div class="sk-chase-dot"></div><div class="sk-chase-dot"></div><div class="sk-chase-dot"></div><div class="sk-chase-dot"></div><div class="sk-chase-dot"></div><div class="sk-chase-dot"></div></div></div></div>`)
  } else {
    _push(`<!---->`)
  }
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/Tools/Loader.vue?vue&type=style&index=0&lang.css");


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Tools/Loader.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/DEV/VUE/yes4nuxt/components/Tools/Loader.vue"]]);
}


// --------------------
// Request: /components/Tools/Loader.vue?vue&type=style&index=0&lang.css
// Parents: 
// - /components/Tools/Loader.vue ($id_c71ecea5)
// Dependencies: 

// --------------------
const $id_418e9d87 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "\n.loading {\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\tright: 0;\r\n\tbottom: 0;\r\n\tleft: 0;\r\n\tbackground: rgba(#333, 0.4);\r\n\tz-index: 9999;\n}\n.card {\r\n  background: #fff;\r\n  width: 80px;\r\n  height: 80px;\r\n  text-align: center;\r\n  margin: 40vh auto 0;\r\n  border-radius: 3px;\r\n  box-shadow: 0 0 20px 0 rgba(#333, 0.5);\n}\n.fade-enter-active, .fade-leave-active {\r\n  transition: opacity .5s;\n}\n.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {\r\n  opacity: 0;\n}\n.sk-chase {\r\n  width: 40px;\r\n  height: 40px;\r\n  position: relative;\r\n  -webkit-animation: sk-chase 2.5s infinite linear both;\r\n          animation: sk-chase 2.5s infinite linear both;\n}\n.sk-chase-dot {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  -webkit-animation: sk-chase-dot 2.0s infinite ease-in-out both;\r\n          animation: sk-chase-dot 2.0s infinite ease-in-out both;\n}\n.sk-chase-dot:before {\r\n  content: '';\r\n  display: block;\r\n  width: 25%;\r\n  height: 25%;\r\n  background-color: rgba(#333, 0.4);\r\n  border-radius: 100%;\r\n  -webkit-animation: sk-chase-dot-before 2.0s infinite ease-in-out both;\r\n          animation: sk-chase-dot-before 2.0s infinite ease-in-out both;\n}\n.sk-chase-dot:nth-child(1) { -webkit-animation-delay: -1.1s; animation-delay: -1.1s;\n}\n.sk-chase-dot:nth-child(2) { -webkit-animation-delay: -1.0s; animation-delay: -1.0s;\n}\n.sk-chase-dot:nth-child(3) { -webkit-animation-delay: -0.9s; animation-delay: -0.9s;\n}\n.sk-chase-dot:nth-child(4) { -webkit-animation-delay: -0.8s; animation-delay: -0.8s;\n}\n.sk-chase-dot:nth-child(5) { -webkit-animation-delay: -0.7s; animation-delay: -0.7s;\n}\n.sk-chase-dot:nth-child(6) { -webkit-animation-delay: -0.6s; animation-delay: -0.6s;\n}\n.sk-chase-dot:nth-child(1):before { -webkit-animation-delay: -1.1s; animation-delay: -1.1s;\n}\n.sk-chase-dot:nth-child(2):before { -webkit-animation-delay: -1.0s; animation-delay: -1.0s;\n}\n.sk-chase-dot:nth-child(3):before { -webkit-animation-delay: -0.9s; animation-delay: -0.9s;\n}\n.sk-chase-dot:nth-child(4):before { -webkit-animation-delay: -0.8s; animation-delay: -0.8s;\n}\n.sk-chase-dot:nth-child(5):before { -webkit-animation-delay: -0.7s; animation-delay: -0.7s;\n}\n.sk-chase-dot:nth-child(6):before { -webkit-animation-delay: -0.6s; animation-delay: -0.6s;\n}\n@-webkit-keyframes sk-chase {\n100% { transform: rotate(360deg);\n}\n}\n@keyframes sk-chase {\n100% { transform: rotate(360deg);\n}\n}\n@-webkit-keyframes sk-chase-dot {\n80%, 100% { transform: rotate(360deg);\n}\n}\n@keyframes sk-chase-dot {\n80%, 100% { transform: rotate(360deg);\n}\n}\n@-webkit-keyframes sk-chase-dot-before {\n50% {\r\n    transform: scale(0.4);\n}\n100%, 0% {\r\n    transform: scale(1.0);\n}\n}\n@keyframes sk-chase-dot-before {\n50% {\r\n    transform: scale(0.4);\n}\n100%, 0% {\r\n    transform: scale(1.0);\n}\n}\r\n";
}


// --------------------
// Request: /components/Tools/ErrorMsg.vue
// Parents: 
// - /components/Forms/LoginForm.vue ($id_600babf2)
// - /components/Forms/Register.vue ($id_7dc4ae3d)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_faa89f61 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


const _sfc_main = __vite_ssr_import_0__.defineComponent({
  props: {
    header: String,
    errMessage: String
  },
  setup() {

  }
})

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if (!!_ctx.errMessage) {
    _push(`<div${
      __vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({
        class: "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative",
        role: "alert"
      }, _attrs))
    }><strong class="font-bold">${
      __vite_ssr_import_2__.ssrInterpolate(_ctx.header)
    }:</strong><span class="block sm:inline">${
      __vite_ssr_import_2__.ssrInterpolate(_ctx.errMessage)
    }</span></div>`)
  } else {
    _push(`<!---->`)
  }
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Tools/ErrorMsg.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/DEV/VUE/yes4nuxt/components/Tools/ErrorMsg.vue"]]);
}


// --------------------
// Request: /components/reusable/AppFormField.vue
// Parents: 
// - /components/Forms/LoginForm.vue ($id_600babf2)
// - /components/Forms/Register.vue ($id_7dc4ae3d)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vee-validate/dist/vee-validate.esm.js ($id_2387c42e)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_def58cce = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vee-validate/dist/vee-validate.esm.js");

const _sfc_main = __vite_ssr_import_0__.defineComponent({
  components: { Field: __vite_ssr_import_1__.Field, ErrorMessage: __vite_ssr_import_1__.ErrorMessage },
  inheritAttrs: false,
  props: {
    name: { type: String, required: true },
    label: { type: String, default: '' },
    modelValue: { type: String, default: '' }
  }
})

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Field = __vite_ssr_import_2__.resolveComponent("Field")
  const _component_ErrorMessage = __vite_ssr_import_2__.resolveComponent("ErrorMessage")

  _push(`<div${
    __vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({ class: "mb-3" }, _attrs))
  }><label class="form-text"${
    __vite_ssr_import_3__.ssrRenderAttr("for", _ctx.name)
  }>${
    __vite_ssr_import_3__.ssrInterpolate(_ctx.label)
  }</label>`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_Field, __vite_ssr_import_2__.mergeProps({
    name: _ctx.name,
    label: _ctx.label,
    modelValue: _ctx.modelValue,
    id: _ctx.name,
    class: "form-control"
  }, _ctx.$attrs), null, _parent))
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_ErrorMessage, {
    name: _ctx.name,
    class: "text-danger"
  }, null, _parent))
  _push(`</div>`)
}


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/reusable/AppFormField.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/DEV/VUE/yes4nuxt/components/reusable/AppFormField.vue"]]);
}


// --------------------
// Request: /node_modules/vee-validate/dist/vee-validate.esm.js
// Parents: 
// - /components/reusable/AppFormField.vue ($id_def58cce)
// - /components/Forms/LoginForm.vue ($id_600babf2)
// - /components/Forms/Register.vue ($id_7dc4ae3d)
// - /plugins/validate.js ($id_eb85e80e)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/@vue/devtools-api/lib/esm/index.js ($id_24b1ff15)
// --------------------
const $id_2387c42e = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
/**
  * vee-validate v4.5.9
  * (c) 2022 Abdelrahman Awad
  * @license MIT
  */
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/@vue/devtools-api/lib/esm/index.js");


function isCallable(fn) {
    return typeof fn === 'function';
}
function isNullOrUndefined(value) {
    return value === null || value === undefined;
}
const isObject = (obj) => obj !== null && !!obj && typeof obj === 'object' && !Array.isArray(obj);
function isIndex(value) {
    return Number(value) >= 0;
}
function toNumber(value) {
    const n = parseFloat(value);
    return isNaN(n) ? value : n;
}

const RULES = {};
/**
 * Adds a custom validator to the list of validation rules.
 */
function defineRule(id, validator) {
    // makes sure new rules are properly formatted.
    guardExtend(id, validator);
    RULES[id] = validator;
}
/**
 * Gets an already defined rule
 */
function resolveRule(id) {
    return RULES[id];
}
/**
 * Guards from extension violations.
 */
function guardExtend(id, validator) {
    if (isCallable(validator)) {
        return;
    }
    throw new Error(`Extension Error: The validator '${id}' must be a function.`);
}

const FormContextKey = Symbol('vee-validate-form');
const FieldContextKey = Symbol('vee-validate-field-instance');
const IS_ABSENT = Symbol('Default empty value');

function isLocator(value) {
    return isCallable(value) && !!value.__locatorRef;
}
/**
 * Checks if an tag name is a native HTML tag and not a Vue component
 */
function isHTMLTag(tag) {
    return ['input', 'textarea', 'select'].includes(tag);
}
/**
 * Checks if an input is of type file
 */
function isFileInputNode(tag, attrs) {
    return isHTMLTag(tag) && attrs.type === 'file';
}
function isYupValidator(value) {
    return !!value && isCallable(value.validate);
}
function hasCheckedAttr(type) {
    return type === 'checkbox' || type === 'radio';
}
function isContainerValue(value) {
    return isObject(value) || Array.isArray(value);
}
/**
 * True if the value is an empty object or array
 */
function isEmptyContainer(value) {
    if (Array.isArray(value)) {
        return value.length === 0;
    }
    return isObject(value) && Object.keys(value).length === 0;
}
/**
 * Checks if the path opted out of nested fields using `[fieldName]` syntax
 */
function isNotNestedPath(path) {
    return /^\[.+\]$/i.test(path);
}
/**
 * Checks if an element is a native HTML5 multi-select input element
 */
function isNativeMultiSelect(el) {
    return isNativeSelect(el) && el.multiple;
}
/**
 * Checks if an element is a native HTML5 select input element
 */
function isNativeSelect(el) {
    return el.tagName === 'SELECT';
}
/**
 * Checks if a tag name with attrs object will render a native multi-select element
 */
function isNativeMultiSelectNode(tag, attrs) {
    // The falsy value array is the values that Vue won't add the `multiple` prop if it has one of these values
    const hasTruthyBindingValue = ![false, null, undefined, 0].includes(attrs.multiple) && !Number.isNaN(attrs.multiple);
    return tag === 'select' && 'multiple' in attrs && hasTruthyBindingValue;
}
/**
 * Checks if a node should have a `:value` binding or not
 *
 * These nodes should not have a value binding
 * For files, because they are not reactive
 * For multi-selects because the value binding will reset the value
 */
function shouldHaveValueBinding(tag, attrs) {
    return isNativeMultiSelectNode(tag, attrs) || isFileInputNode(tag, attrs);
}
function isFormSubmitEvent(evt) {
    return isEvent(evt) && evt.target && 'submit' in evt.target;
}
function isEvent(evt) {
    if (!evt) {
        return false;
    }
    if (typeof Event !== 'undefined' && isCallable(Event) && evt instanceof Event) {
        return true;
    }
    // this is for IE and Cypress #3161
    /* istanbul ignore next */
    if (evt && evt.srcElement) {
        return true;
    }
    return false;
}
function isPropPresent(obj, prop) {
    return prop in obj && obj[prop] !== IS_ABSENT;
}

function cleanupNonNestedPath(path) {
    if (isNotNestedPath(path)) {
        return path.replace(/\[|\]/gi, '');
    }
    return path;
}
function getFromPath(object, path, fallback) {
    if (!object) {
        return fallback;
    }
    if (isNotNestedPath(path)) {
        return object[cleanupNonNestedPath(path)];
    }
    const resolvedValue = (path || '')
        .split(/\.|\[(\d+)\]/)
        .filter(Boolean)
        .reduce((acc, propKey) => {
        if (isContainerValue(acc) && propKey in acc) {
            return acc[propKey];
        }
        return fallback;
    }, object);
    return resolvedValue;
}
/**
 * Sets a nested property value in a path, creates the path properties if it doesn't exist
 */
function setInPath(object, path, value) {
    if (isNotNestedPath(path)) {
        object[cleanupNonNestedPath(path)] = value;
        return;
    }
    const keys = path.split(/\.|\[(\d+)\]/).filter(Boolean);
    let acc = object;
    for (let i = 0; i < keys.length; i++) {
        // Last key, set it
        if (i === keys.length - 1) {
            acc[keys[i]] = value;
            return;
        }
        // Key does not exist, create a container for it
        if (!(keys[i] in acc) || isNullOrUndefined(acc[keys[i]])) {
            // container can be either an object or an array depending on the next key if it exists
            acc[keys[i]] = isIndex(keys[i + 1]) ? [] : {};
        }
        acc = acc[keys[i]];
    }
}
function unset(object, key) {
    if (Array.isArray(object) && isIndex(key)) {
        object.splice(Number(key), 1);
        return;
    }
    if (isObject(object)) {
        delete object[key];
    }
}
/**
 * Removes a nested property from object
 */
function unsetPath(object, path) {
    if (isNotNestedPath(path)) {
        delete object[cleanupNonNestedPath(path)];
        return;
    }
    const keys = path.split(/\.|\[(\d+)\]/).filter(Boolean);
    let acc = object;
    for (let i = 0; i < keys.length; i++) {
        // Last key, unset it
        if (i === keys.length - 1) {
            unset(acc, keys[i]);
            break;
        }
        // Key does not exist, exit
        if (!(keys[i] in acc) || isNullOrUndefined(acc[keys[i]])) {
            break;
        }
        acc = acc[keys[i]];
    }
    const pathValues = keys.map((_, idx) => {
        return getFromPath(object, keys.slice(0, idx).join('.'));
    });
    for (let i = pathValues.length - 1; i >= 0; i--) {
        if (!isEmptyContainer(pathValues[i])) {
            continue;
        }
        if (i === 0) {
            unset(object, keys[0]);
            continue;
        }
        unset(pathValues[i - 1], keys[i - 1]);
    }
}
/**
 * A typed version of Object.keys
 */
function keysOf(record) {
    return Object.keys(record);
}
// Uses same component provide as its own injections
// Due to changes in https://github.com/vuejs/vue-next/pull/2424
function injectWithSelf(symbol, def = undefined) {
    const vm = __vite_ssr_import_0__.getCurrentInstance();
    return (vm === null || vm === void 0 ? void 0 : vm.provides[symbol]) || __vite_ssr_import_0__.inject(symbol, def);
}
function warn(message) {
    __vite_ssr_import_0__.warn(`[vee-validate]: ${message}`);
}
/**
 * Ensures we deal with a singular field value
 */
function normalizeField(field) {
    if (Array.isArray(field)) {
        return field[0];
    }
    return field;
}
function resolveNextCheckboxValue(currentValue, checkedValue, uncheckedValue) {
    if (Array.isArray(currentValue)) {
        const newVal = [...currentValue];
        const idx = newVal.indexOf(checkedValue);
        idx >= 0 ? newVal.splice(idx, 1) : newVal.push(checkedValue);
        return newVal;
    }
    return currentValue === checkedValue ? uncheckedValue : checkedValue;
}
/**
 * Creates a throttled function that only invokes the provided function (`func`) at most once per within a given number of milliseconds
 * (`limit`)
 */
function throttle(func, limit) {
    let inThrottle;
    let lastResult;
    return function (...args) {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const context = this;
        if (!inThrottle) {
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
            lastResult = func.apply(context, args);
        }
        return lastResult;
    };
}
function debounceAsync(inner, ms = 0) {
    let timer = null;
    let resolves = [];
    return function (...args) {
        // Run the function after a certain amount of time
        if (timer) {
            window.clearTimeout(timer);
        }
        timer = window.setTimeout(() => {
            // Get the result of the inner function, then apply it to the resolve function of
            // each promise that has been created since the last time the inner function was run
            const result = inner(...args);
            resolves.forEach(r => r(result));
            resolves = [];
        }, ms);
        return new Promise(resolve => resolves.push(resolve));
    };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const normalizeChildren = (tag, context, slotProps) => {
    if (!context.slots.default) {
        return context.slots.default;
    }
    if (typeof tag === 'string' || !tag) {
        return context.slots.default(slotProps());
    }
    return {
        default: () => { var _a, _b; return (_b = (_a = context.slots).default) === null || _b === void 0 ? void 0 : _b.call(_a, slotProps()); },
    };
};
/**
 * Vue adds a `_value` prop at the moment on the input elements to store the REAL value on them, real values are different than the `value` attribute
 * as they do not get casted to strings unlike `el.value` which preserves user-code behavior
 */
function getBoundValue(el) {
    if (hasValueBinding(el)) {
        return el._value;
    }
    return undefined;
}
/**
 * Vue adds a `_value` prop at the moment on the input elements to store the REAL value on them, real values are different than the `value` attribute
 * as they do not get casted to strings unlike `el.value` which preserves user-code behavior
 */
function hasValueBinding(el) {
    return '_value' in el;
}

function normalizeEventValue(value) {
    if (!isEvent(value)) {
        return value;
    }
    const input = value.target;
    // Vue sets the current bound value on `_value` prop
    // for checkboxes it it should fetch the value binding type as is (boolean instead of string)
    if (hasCheckedAttr(input.type) && hasValueBinding(input)) {
        return getBoundValue(input);
    }
    if (input.type === 'file' && input.files) {
        return Array.from(input.files);
    }
    if (isNativeMultiSelect(input)) {
        return Array.from(input.options)
            .filter(opt => opt.selected && !opt.disabled)
            .map(getBoundValue);
    }
    // makes sure we get the actual `option` bound value
    // #3440
    if (isNativeSelect(input)) {
        const selectedOption = Array.from(input.options).find(opt => opt.selected);
        return selectedOption ? getBoundValue(selectedOption) : input.value;
    }
    return input.value;
}

/**
 * Normalizes the given rules expression.
 */
function normalizeRules(rules) {
    const acc = {};
    Object.defineProperty(acc, '_$$isNormalized', {
        value: true,
        writable: false,
        enumerable: false,
        configurable: false,
    });
    if (!rules) {
        return acc;
    }
    // Object is already normalized, skip.
    if (isObject(rules) && rules._$$isNormalized) {
        return rules;
    }
    if (isObject(rules)) {
        return Object.keys(rules).reduce((prev, curr) => {
            const params = normalizeParams(rules[curr]);
            if (rules[curr] !== false) {
                prev[curr] = buildParams(params);
            }
            return prev;
        }, acc);
    }
    /* istanbul ignore if */
    if (typeof rules !== 'string') {
        return acc;
    }
    return rules.split('|').reduce((prev, rule) => {
        const parsedRule = parseRule(rule);
        if (!parsedRule.name) {
            return prev;
        }
        prev[parsedRule.name] = buildParams(parsedRule.params);
        return prev;
    }, acc);
}
/**
 * Normalizes a rule param.
 */
function normalizeParams(params) {
    if (params === true) {
        return [];
    }
    if (Array.isArray(params)) {
        return params;
    }
    if (isObject(params)) {
        return params;
    }
    return [params];
}
function buildParams(provided) {
    const mapValueToLocator = (value) => {
        // A target param using interpolation
        if (typeof value === 'string' && value[0] === '@') {
            return createLocator(value.slice(1));
        }
        return value;
    };
    if (Array.isArray(provided)) {
        return provided.map(mapValueToLocator);
    }
    // #3073
    if (provided instanceof RegExp) {
        return [provided];
    }
    return Object.keys(provided).reduce((prev, key) => {
        prev[key] = mapValueToLocator(provided[key]);
        return prev;
    }, {});
}
/**
 * Parses a rule string expression.
 */
const parseRule = (rule) => {
    let params = [];
    const name = rule.split(':')[0];
    if (rule.includes(':')) {
        params = rule.split(':').slice(1).join(':').split(',');
    }
    return { name, params };
};
function createLocator(value) {
    const locator = (crossTable) => {
        const val = getFromPath(crossTable, value) || crossTable[value];
        return val;
    };
    locator.__locatorRef = value;
    return locator;
}
function extractLocators(params) {
    if (Array.isArray(params)) {
        return params.filter(isLocator);
    }
    return keysOf(params)
        .filter(key => isLocator(params[key]))
        .map(key => params[key]);
}

const DEFAULT_CONFIG = {
    generateMessage: ({ field }) => `${field} is not valid.`,
    bails: true,
    validateOnBlur: true,
    validateOnChange: true,
    validateOnInput: false,
    validateOnModelUpdate: true,
};
let currentConfig = Object.assign({}, DEFAULT_CONFIG);
const getConfig = () => currentConfig;
const setConfig = (newConf) => {
    currentConfig = Object.assign(Object.assign({}, currentConfig), newConf);
};
const configure = setConfig;

/**
 * Validates a value against the rules.
 */
async function validate(value, rules, options = {}) {
    const shouldBail = options === null || options === void 0 ? void 0 : options.bails;
    const field = {
        name: (options === null || options === void 0 ? void 0 : options.name) || '{field}',
        rules,
        bails: shouldBail !== null && shouldBail !== void 0 ? shouldBail : true,
        formData: (options === null || options === void 0 ? void 0 : options.values) || {},
    };
    const result = await _validate(field, value);
    const errors = result.errors;
    return {
        errors,
        valid: !errors.length,
    };
}
/**
 * Starts the validation process.
 */
async function _validate(field, value) {
    if (isYupValidator(field.rules)) {
        return validateFieldWithYup(value, field.rules, { bails: field.bails });
    }
    // if a generic function, use it as the pipeline.
    if (isCallable(field.rules)) {
        const ctx = {
            field: field.name,
            form: field.formData,
            value: value,
        };
        const result = await field.rules(value, ctx);
        const isValid = typeof result !== 'string' && result;
        const message = typeof result === 'string' ? result : _generateFieldError(ctx);
        return {
            errors: !isValid ? [message] : [],
        };
    }
    const normalizedContext = Object.assign(Object.assign({}, field), { rules: normalizeRules(field.rules) });
    const errors = [];
    const rulesKeys = Object.keys(normalizedContext.rules);
    const length = rulesKeys.length;
    for (let i = 0; i < length; i++) {
        const rule = rulesKeys[i];
        const result = await _test(normalizedContext, value, {
            name: rule,
            params: normalizedContext.rules[rule],
        });
        if (result.error) {
            errors.push(result.error);
            if (field.bails) {
                return {
                    errors,
                };
            }
        }
    }
    return {
        errors,
    };
}
/**
 * Handles yup validation
 */
async function validateFieldWithYup(value, validator, opts) {
    var _a;
    const errors = await validator
        .validate(value, {
        abortEarly: (_a = opts.bails) !== null && _a !== void 0 ? _a : true,
    })
        .then(() => [])
        .catch((err) => {
        // Yup errors have a name prop one them.
        // https://github.com/jquense/yup#validationerrorerrors-string--arraystring-value-any-path-string
        if (err.name === 'ValidationError') {
            return err.errors;
        }
        // re-throw the error so we don't hide it
        throw err;
    });
    return {
        errors,
    };
}
/**
 * Tests a single input value against a rule.
 */
async function _test(field, value, rule) {
    const validator = resolveRule(rule.name);
    if (!validator) {
        throw new Error(`No such validator '${rule.name}' exists.`);
    }
    const params = fillTargetValues(rule.params, field.formData);
    const ctx = {
        field: field.name,
        value,
        form: field.formData,
        rule: Object.assign(Object.assign({}, rule), { params }),
    };
    const result = await validator(value, params, ctx);
    if (typeof result === 'string') {
        return {
            error: result,
        };
    }
    return {
        error: result ? undefined : _generateFieldError(ctx),
    };
}
/**
 * Generates error messages.
 */
function _generateFieldError(fieldCtx) {
    const message = getConfig().generateMessage;
    if (!message) {
        return 'Field is invalid';
    }
    return message(fieldCtx);
}
function fillTargetValues(params, crossTable) {
    const normalize = (value) => {
        if (isLocator(value)) {
            return value(crossTable);
        }
        return value;
    };
    if (Array.isArray(params)) {
        return params.map(normalize);
    }
    return Object.keys(params).reduce((acc, param) => {
        acc[param] = normalize(params[param]);
        return acc;
    }, {});
}
async function validateYupSchema(schema, values) {
    const errorObjects = await schema
        .validate(values, { abortEarly: false })
        .then(() => [])
        .catch((err) => {
        // Yup errors have a name prop one them.
        // https://github.com/jquense/yup#validationerrorerrors-string--arraystring-value-any-path-string
        if (err.name !== 'ValidationError') {
            throw err;
        }
        // list of aggregated errors
        return err.inner || [];
    });
    const results = {};
    const errors = {};
    for (const error of errorObjects) {
        const messages = error.errors;
        results[error.path] = { valid: !messages.length, errors: messages };
        if (messages.length) {
            errors[error.path] = messages[0];
        }
    }
    return {
        valid: !errorObjects.length,
        results,
        errors,
    };
}
async function validateObjectSchema(schema, values, opts) {
    const paths = keysOf(schema);
    const validations = paths.map(async (path) => {
        var _a, _b, _c;
        const fieldResult = await validate(getFromPath(values, path), schema[path], {
            name: ((_a = opts === null || opts === void 0 ? void 0 : opts.names) === null || _a === void 0 ? void 0 : _a[path]) || path,
            values: values,
            bails: (_c = (_b = opts === null || opts === void 0 ? void 0 : opts.bailsMap) === null || _b === void 0 ? void 0 : _b[path]) !== null && _c !== void 0 ? _c : true,
        });
        return Object.assign(Object.assign({}, fieldResult), { path });
    });
    let isAllValid = true;
    const validationResults = await Promise.all(validations);
    const results = {};
    const errors = {};
    for (const result of validationResults) {
        results[result.path] = {
            valid: result.valid,
            errors: result.errors,
        };
        if (!result.valid) {
            isAllValid = false;
            errors[result.path] = result.errors[0];
        }
    }
    return {
        valid: isAllValid,
        results,
        errors,
    };
}

function set(obj, key, val) {
	if (typeof val.value === 'object') val.value = klona(val.value);
	if (!val.enumerable || val.get || val.set || !val.configurable || !val.writable || key === '__proto__') {
		Object.defineProperty(obj, key, val);
	} else obj[key] = val.value;
}

function klona(x) {
	if (typeof x !== 'object') return x;

	var i=0, k, list, tmp, str=Object.prototype.toString.call(x);

	if (str === '[object Object]') {
		tmp = Object.create(x.__proto__ || null);
	} else if (str === '[object Array]') {
		tmp = Array(x.length);
	} else if (str === '[object Set]') {
		tmp = new Set;
		x.forEach(function (val) {
			tmp.add(klona(val));
		});
	} else if (str === '[object Map]') {
		tmp = new Map;
		x.forEach(function (val, key) {
			tmp.set(klona(key), klona(val));
		});
	} else if (str === '[object Date]') {
		tmp = new Date(+x);
	} else if (str === '[object RegExp]') {
		tmp = new RegExp(x.source, x.flags);
	} else if (str === '[object DataView]') {
		tmp = new x.constructor( klona(x.buffer) );
	} else if (str === '[object ArrayBuffer]') {
		tmp = x.slice(0);
	} else if (str.slice(-6) === 'Array]') {
		// ArrayBuffer.isView(x)
		// ~> `new` bcuz `Buffer.slice` => ref
		tmp = new x.constructor(x);
	}

	if (tmp) {
		for (list=Object.getOwnPropertySymbols(x); i < list.length; i++) {
			set(tmp, list[i], Object.getOwnPropertyDescriptor(x, list[i]));
		}

		for (i=0, list=Object.getOwnPropertyNames(x); i < list.length; i++) {
			if (Object.hasOwnProperty.call(tmp, k=list[i]) && tmp[k] === x[k]) continue;
			set(tmp, k, Object.getOwnPropertyDescriptor(x, k));
		}
	}

	return tmp || x;
}

var es6 = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }


    if ((a instanceof Map) && (b instanceof Map)) {
      if (a.size !== b.size) return false;
      for (i of a.entries())
        if (!b.has(i[0])) return false;
      for (i of a.entries())
        if (!equal(i[1], b.get(i[0]))) return false;
      return true;
    }

    if ((a instanceof Set) && (b instanceof Set)) {
      if (a.size !== b.size) return false;
      for (i of a.entries())
        if (!b.has(i[0])) return false;
      return true;
    }

    if (ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (a[i] !== b[i]) return false;
      return true;
    }


    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      var key = keys[i];

      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  // true if both NaN, false otherwise
  return a!==a && b!==b;
};

let ID_COUNTER = 0;
function useFieldState(path, init) {
    const { value, initialValue, setInitialValue } = _useFieldValue(path, init.modelValue, !init.standalone);
    const { errorMessage, errors, setErrors } = _useFieldErrors(path, !init.standalone);
    const meta = _useFieldMeta(value, initialValue, errors);
    const id = ID_COUNTER >= Number.MAX_SAFE_INTEGER ? 0 : ++ID_COUNTER;
    function setState(state) {
        var _a;
        if ('value' in state) {
            value.value = state.value;
        }
        if ('errors' in state) {
            setErrors(state.errors);
        }
        if ('touched' in state) {
            meta.touched = (_a = state.touched) !== null && _a !== void 0 ? _a : meta.touched;
        }
        if ('initialValue' in state) {
            setInitialValue(state.initialValue);
        }
    }
    return {
        id,
        path,
        value,
        initialValue,
        meta,
        errors,
        errorMessage,
        setState,
    };
}
/**
 * Creates the field value and resolves the initial value
 */
function _useFieldValue(path, modelValue, shouldInjectForm) {
    const form = shouldInjectForm ? injectWithSelf(FormContextKey, undefined) : undefined;
    const modelRef = __vite_ssr_import_0__.ref(__vite_ssr_import_0__.unref(modelValue));
    function resolveInitialValue() {
        if (!form) {
            return __vite_ssr_import_0__.unref(modelRef);
        }
        return getFromPath(form.meta.value.initialValues, __vite_ssr_import_0__.unref(path), __vite_ssr_import_0__.unref(modelRef));
    }
    function setInitialValue(value) {
        if (!form) {
            modelRef.value = value;
            return;
        }
        form.setFieldInitialValue(__vite_ssr_import_0__.unref(path), value);
    }
    const initialValue = __vite_ssr_import_0__.computed(resolveInitialValue);
    // if no form is associated, use a regular ref.
    if (!form) {
        const value = __vite_ssr_import_0__.ref(resolveInitialValue());
        return {
            value,
            initialValue,
            setInitialValue,
        };
    }
    // to set the initial value, first check if there is a current value, if there is then use it.
    // otherwise use the configured initial value if it exists.
    // prioritize model value over form values
    // #3429
    const currentValue = modelValue ? __vite_ssr_import_0__.unref(modelValue) : getFromPath(form.values, __vite_ssr_import_0__.unref(path), __vite_ssr_import_0__.unref(initialValue));
    form.stageInitialValue(__vite_ssr_import_0__.unref(path), currentValue);
    // otherwise use a computed setter that triggers the `setFieldValue`
    const value = __vite_ssr_import_0__.computed({
        get() {
            return getFromPath(form.values, __vite_ssr_import_0__.unref(path));
        },
        set(newVal) {
            form.setFieldValue(__vite_ssr_import_0__.unref(path), newVal);
        },
    });
    return {
        value,
        initialValue,
        setInitialValue,
    };
}
/**
 * Creates meta flags state and some associated effects with them
 */
function _useFieldMeta(currentValue, initialValue, errors) {
    const meta = __vite_ssr_import_0__.reactive({
        touched: false,
        pending: false,
        valid: true,
        validated: !!__vite_ssr_import_0__.unref(errors).length,
        initialValue: __vite_ssr_import_0__.computed(() => __vite_ssr_import_0__.unref(initialValue)),
        dirty: __vite_ssr_import_0__.computed(() => {
            return !es6(__vite_ssr_import_0__.unref(currentValue), __vite_ssr_import_0__.unref(initialValue));
        }),
    });
    __vite_ssr_import_0__.watch(errors, value => {
        meta.valid = !value.length;
    }, {
        immediate: true,
        flush: 'sync',
    });
    return meta;
}
/**
 * Creates the error message state for the field state
 */
function _useFieldErrors(path, shouldInjectForm) {
    const form = shouldInjectForm ? injectWithSelf(FormContextKey, undefined) : undefined;
    function normalizeErrors(messages) {
        if (!messages) {
            return [];
        }
        return Array.isArray(messages) ? messages : [messages];
    }
    if (!form) {
        const errors = __vite_ssr_import_0__.ref([]);
        return {
            errors,
            errorMessage: __vite_ssr_import_0__.computed(() => errors.value[0]),
            setErrors: (messages) => {
                errors.value = normalizeErrors(messages);
            },
        };
    }
    const errors = __vite_ssr_import_0__.computed(() => form.errorBag.value[__vite_ssr_import_0__.unref(path)] || []);
    return {
        errors,
        errorMessage: __vite_ssr_import_0__.computed(() => errors.value[0]),
        setErrors: (messages) => {
            form.setFieldErrorBag(__vite_ssr_import_0__.unref(path), normalizeErrors(messages));
        },
    };
}

function installDevtoolsPlugin(app) {
    if (("development" !== 'production')) {
        __vite_ssr_import_1__.setupDevtoolsPlugin({
            id: 'vee-validate-devtools-plugin',
            label: 'VeeValidate Plugin',
            packageName: 'vee-validate',
            homepage: 'https://vee-validate.logaretm.com/v4',
            app,
            logo: 'https://vee-validate.logaretm.com/v4/logo.png',
        }, setupApiHooks);
    }
}
const DEVTOOLS_FORMS = {};
const DEVTOOLS_FIELDS = {};
let API;
const refreshInspector = throttle(() => {
    setTimeout(async () => {
        await __vite_ssr_import_0__.nextTick();
        API === null || API === void 0 ? void 0 : API.sendInspectorState(INSPECTOR_ID);
        API === null || API === void 0 ? void 0 : API.sendInspectorTree(INSPECTOR_ID);
    }, 100);
}, 100);
function registerFormWithDevTools(form) {
    const vm = __vite_ssr_import_0__.getCurrentInstance();
    if (!API) {
        const app = vm === null || vm === void 0 ? void 0 : vm.appContext.app;
        if (!app) {
            return;
        }
        installDevtoolsPlugin(app);
    }
    DEVTOOLS_FORMS[form.formId] = Object.assign({}, form);
    DEVTOOLS_FORMS[form.formId]._vm = vm;
    __vite_ssr_import_0__.onUnmounted(() => {
        delete DEVTOOLS_FORMS[form.formId];
        refreshInspector();
    });
    refreshInspector();
}
function registerSingleFieldWithDevtools(field) {
    const vm = __vite_ssr_import_0__.getCurrentInstance();
    if (!API) {
        const app = vm === null || vm === void 0 ? void 0 : vm.appContext.app;
        if (!app) {
            return;
        }
        installDevtoolsPlugin(app);
    }
    DEVTOOLS_FIELDS[field.id] = Object.assign({}, field);
    DEVTOOLS_FIELDS[field.id]._vm = vm;
    __vite_ssr_import_0__.onUnmounted(() => {
        delete DEVTOOLS_FIELDS[field.id];
        refreshInspector();
    });
    refreshInspector();
}
const INSPECTOR_ID = 'vee-validate-inspector';
const COLORS = {
    error: 0xbd4b4b,
    success: 0x06d77b,
    unknown: 0x54436b,
    white: 0xffffff,
    black: 0x000000,
    blue: 0x035397,
    purple: 0xb980f0,
    orange: 0xf5a962,
    gray: 0xbbbfca,
};
let SELECTED_NODE = null;
function setupApiHooks(api) {
    API = api;
    api.addInspector({
        id: INSPECTOR_ID,
        icon: 'rule',
        label: 'vee-validate',
        noSelectionText: 'Select a vee-validate node to inspect',
        actions: [
            {
                icon: 'done_outline',
                tooltip: 'Validate selected item',
                action: async () => {
                    if (!SELECTED_NODE) {
                        console.error('There is not a valid selected vee-validate node or component');
                        return;
                    }
                    const result = await SELECTED_NODE.validate();
                    console.log(result);
                },
            },
            {
                icon: 'delete_sweep',
                tooltip: 'Clear validation state of the selected item',
                action: () => {
                    if (!SELECTED_NODE) {
                        console.error('There is not a valid selected vee-validate node or component');
                        return;
                    }
                    if ('id' in SELECTED_NODE) {
                        SELECTED_NODE.resetField();
                        return;
                    }
                    SELECTED_NODE.resetForm();
                },
            },
        ],
    });
    api.on.getInspectorTree(payload => {
        if (payload.inspectorId !== INSPECTOR_ID) {
            return;
        }
        const forms = Object.values(DEVTOOLS_FORMS);
        const fields = Object.values(DEVTOOLS_FIELDS);
        payload.rootNodes = [
            ...forms.map(mapFormForDevtoolsInspector),
            ...fields.map(field => mapFieldForDevtoolsInspector(field)),
        ];
    });
    api.on.getInspectorState((payload, ctx) => {
        if (payload.inspectorId !== INSPECTOR_ID || ctx.currentTab !== `custom-inspector:${INSPECTOR_ID}`) {
            return;
        }
        const { form, field, type } = decodeNodeId(payload.nodeId);
        if (form && type === 'form') {
            payload.state = buildFormState(form);
            SELECTED_NODE = form;
            return;
        }
        if (field && type === 'field') {
            payload.state = buildFieldState(field);
            SELECTED_NODE = field;
            return;
        }
        SELECTED_NODE = null;
    });
}
function mapFormForDevtoolsInspector(form) {
    const { textColor, bgColor } = getTagTheme(form);
    const formTreeNodes = {};
    Object.values(form.fieldsByPath.value).forEach(field => {
        const fieldInstance = Array.isArray(field) ? field[0] : field;
        if (!fieldInstance) {
            return;
        }
        setInPath(formTreeNodes, __vite_ssr_import_0__.unref(fieldInstance.name), mapFieldForDevtoolsInspector(fieldInstance, form));
    });
    function buildFormTree(tree, path = []) {
        const key = [...path].pop();
        if ('id' in tree) {
            return Object.assign(Object.assign({}, tree), { label: key || tree.label });
        }
        if (isObject(tree)) {
            return {
                id: `${path.join('.')}`,
                label: key || '',
                children: Object.keys(tree).map(key => buildFormTree(tree[key], [...path, key])),
            };
        }
        if (Array.isArray(tree)) {
            return {
                id: `${path.join('.')}`,
                label: `${key}[]`,
                children: tree.map((c, idx) => buildFormTree(c, [...path, String(idx)])),
            };
        }
        return { id: '', label: '', children: [] };
    }
    const { children } = buildFormTree(formTreeNodes);
    return {
        id: encodeNodeId(form),
        label: 'Form',
        children,
        tags: [
            {
                label: 'Form',
                textColor,
                backgroundColor: bgColor,
            },
            {
                label: `${Object.keys(form.fieldsByPath.value).length} fields`,
                textColor: COLORS.white,
                backgroundColor: COLORS.unknown,
            },
        ],
    };
}
function mapFieldForDevtoolsInspector(field, form) {
    const fieldInstance = normalizeField(field);
    const { textColor, bgColor } = getTagTheme(fieldInstance);
    const isGroup = Array.isArray(field) && field.length > 1;
    return {
        id: encodeNodeId(form, fieldInstance, !isGroup),
        label: __vite_ssr_import_0__.unref(fieldInstance.name),
        children: Array.isArray(field) ? field.map(fieldItem => mapFieldForDevtoolsInspector(fieldItem, form)) : undefined,
        tags: [
            isGroup
                ? undefined
                : {
                    label: 'Field',
                    textColor,
                    backgroundColor: bgColor,
                },
            !form
                ? {
                    label: 'Standalone',
                    textColor: COLORS.black,
                    backgroundColor: COLORS.gray,
                }
                : undefined,
            !isGroup && fieldInstance.type === 'checkbox'
                ? {
                    label: 'Checkbox',
                    textColor: COLORS.white,
                    backgroundColor: COLORS.blue,
                }
                : undefined,
            !isGroup && fieldInstance.type === 'radio'
                ? {
                    label: 'Radio',
                    textColor: COLORS.white,
                    backgroundColor: COLORS.purple,
                }
                : undefined,
            isGroup
                ? {
                    label: 'Group',
                    textColor: COLORS.black,
                    backgroundColor: COLORS.orange,
                }
                : undefined,
        ].filter(Boolean),
    };
}
function encodeNodeId(form, field, encodeIndex = true) {
    const fieldPath = form ? __vite_ssr_import_0__.unref(field === null || field === void 0 ? void 0 : field.name) : field === null || field === void 0 ? void 0 : field.id;
    const fieldGroup = fieldPath ? form === null || form === void 0 ? void 0 : form.fieldsByPath.value[fieldPath] : undefined;
    let idx;
    if (encodeIndex && field && Array.isArray(fieldGroup)) {
        idx = fieldGroup.indexOf(field);
    }
    const idObject = { f: form === null || form === void 0 ? void 0 : form.formId, ff: fieldPath, idx, type: field ? 'field' : 'form' };
    return btoa(JSON.stringify(idObject));
}
function decodeNodeId(nodeId) {
    try {
        const idObject = JSON.parse(atob(nodeId));
        const form = DEVTOOLS_FORMS[idObject.f];
        if (!form && idObject.ff) {
            const field = DEVTOOLS_FIELDS[idObject.ff];
            if (!field) {
                return {};
            }
            return {
                type: idObject.type,
                field,
            };
        }
        if (!form) {
            return {};
        }
        const fieldGroup = form.fieldsByPath.value[idObject.ff];
        return {
            type: idObject.type,
            form,
            field: Array.isArray(fieldGroup) ? fieldGroup[idObject.idx || 0] : fieldGroup,
        };
    }
    catch (err) {
        // console.error(`Devtools: [vee-validate] Failed to parse node id ${nodeId}`);
    }
    return {};
}
function buildFieldState(field) {
    const { errors, meta, value } = field;
    return {
        'Field state': [
            { key: 'errors', value: errors.value },
            {
                key: 'initialValue',
                value: meta.initialValue,
            },
            {
                key: 'currentValue',
                value: value.value,
            },
            {
                key: 'touched',
                value: meta.touched,
            },
            {
                key: 'dirty',
                value: meta.dirty,
            },
            {
                key: 'valid',
                value: meta.valid,
            },
        ],
    };
}
function buildFormState(form) {
    const { errorBag, meta, values, isSubmitting, submitCount } = form;
    return {
        'Form state': [
            {
                key: 'submitCount',
                value: submitCount.value,
            },
            {
                key: 'isSubmitting',
                value: isSubmitting.value,
            },
            {
                key: 'touched',
                value: meta.value.touched,
            },
            {
                key: 'dirty',
                value: meta.value.dirty,
            },
            {
                key: 'valid',
                value: meta.value.valid,
            },
            {
                key: 'initialValues',
                value: meta.value.initialValues,
            },
            {
                key: 'currentValues',
                value: values,
            },
            {
                key: 'errors',
                value: keysOf(errorBag.value).reduce((acc, key) => {
                    var _a;
                    const message = (_a = errorBag.value[key]) === null || _a === void 0 ? void 0 : _a[0];
                    if (message) {
                        acc[key] = message;
                    }
                    return acc;
                }, {}),
            },
        ],
    };
}
/**
 * Resolves the tag color based on the form state
 */
function getTagTheme(fieldOrForm) {
    // const fallbackColors = {
    //   bgColor: COLORS.unknown,
    //   textColor: COLORS.white,
    // };
    const isValid = 'id' in fieldOrForm ? fieldOrForm.meta.valid : fieldOrForm.meta.value.valid;
    return {
        bgColor: isValid ? COLORS.success : COLORS.error,
        textColor: isValid ? COLORS.black : COLORS.white,
    };
}

/**
 * Creates a field composite.
 */
function useField(name, rules, opts) {
    if (hasCheckedAttr(opts === null || opts === void 0 ? void 0 : opts.type)) {
        return useCheckboxField(name, rules, opts);
    }
    return _useField(name, rules, opts);
}
function _useField(name, rules, opts) {
    const { initialValue: modelValue, validateOnMount, bails, type, checkedValue, label, validateOnValueUpdate, uncheckedValue, standalone, } = normalizeOptions(__vite_ssr_import_0__.unref(name), opts);
    const form = !standalone ? injectWithSelf(FormContextKey) : undefined;
    const { id, value, initialValue, meta, setState, errors, errorMessage } = useFieldState(name, {
        modelValue,
        standalone,
    });
    /**
     * Handles common onBlur meta update
     */
    const handleBlur = () => {
        meta.touched = true;
    };
    const normalizedRules = __vite_ssr_import_0__.computed(() => {
        let rulesValue = __vite_ssr_import_0__.unref(rules);
        const schema = __vite_ssr_import_0__.unref(form === null || form === void 0 ? void 0 : form.schema);
        if (schema && !isYupValidator(schema)) {
            rulesValue = extractRuleFromSchema(schema, __vite_ssr_import_0__.unref(name)) || rulesValue;
        }
        if (isYupValidator(rulesValue) || isCallable(rulesValue)) {
            return rulesValue;
        }
        return normalizeRules(rulesValue);
    });
    async function validateCurrentValue(mode) {
        var _a, _b;
        if (form === null || form === void 0 ? void 0 : form.validateSchema) {
            return (_a = (await form.validateSchema(mode)).results[__vite_ssr_import_0__.unref(name)]) !== null && _a !== void 0 ? _a : { valid: true, errors: [] };
        }
        return validate(value.value, normalizedRules.value, {
            name: __vite_ssr_import_0__.unref(label) || __vite_ssr_import_0__.unref(name),
            values: (_b = form === null || form === void 0 ? void 0 : form.values) !== null && _b !== void 0 ? _b : {},
            bails,
        });
    }
    async function validateWithStateMutation() {
        meta.pending = true;
        meta.validated = true;
        const result = await validateCurrentValue('validated-only');
        setState({ errors: result.errors });
        meta.pending = false;
        return result;
    }
    async function validateValidStateOnly() {
        const result = await validateCurrentValue('silent');
        meta.valid = result.valid;
        return result;
    }
    function validate$1(opts) {
        if (!(opts === null || opts === void 0 ? void 0 : opts.mode) || (opts === null || opts === void 0 ? void 0 : opts.mode) === 'force') {
            return validateWithStateMutation();
        }
        if ((opts === null || opts === void 0 ? void 0 : opts.mode) === 'validated-only') {
            return validateWithStateMutation();
        }
        return validateValidStateOnly();
    }
    // Common input/change event handler
    const handleChange = (e, shouldValidate = true) => {
        const newValue = normalizeEventValue(e);
        value.value = newValue;
        if (!validateOnValueUpdate && shouldValidate) {
            validateWithStateMutation();
        }
    };
    // Runs the initial validation
    __vite_ssr_import_0__.onMounted(() => {
        if (validateOnMount) {
            return validateWithStateMutation();
        }
        // validate self initially if no form was handling this
        // forms should have their own initial silent validation run to make things more efficient
        if (!form || !form.validateSchema) {
            validateValidStateOnly();
        }
    });
    function setTouched(isTouched) {
        meta.touched = isTouched;
    }
    let unwatchValue;
    function watchValue() {
        unwatchValue = __vite_ssr_import_0__.watch(value, validateOnValueUpdate ? validateWithStateMutation : validateValidStateOnly, {
            deep: true,
        });
    }
    watchValue();
    function resetField(state) {
        var _a;
        unwatchValue === null || unwatchValue === void 0 ? void 0 : unwatchValue();
        const newValue = state && 'value' in state ? state.value : initialValue.value;
        setState({
            value: klona(newValue),
            initialValue: klona(newValue),
            touched: (_a = state === null || state === void 0 ? void 0 : state.touched) !== null && _a !== void 0 ? _a : false,
            errors: (state === null || state === void 0 ? void 0 : state.errors) || [],
        });
        meta.pending = false;
        meta.validated = false;
        validateValidStateOnly();
        // need to watch at next tick to avoid triggering the value watcher
        __vite_ssr_import_0__.nextTick(() => {
            watchValue();
        });
    }
    function setValue(newValue) {
        value.value = newValue;
    }
    function setErrors(errors) {
        setState({ errors: Array.isArray(errors) ? errors : [errors] });
    }
    const field = {
        id,
        name,
        label,
        value,
        meta,
        errors,
        errorMessage,
        type,
        checkedValue,
        uncheckedValue,
        bails,
        resetField,
        handleReset: () => resetField(),
        validate: validate$1,
        handleChange,
        handleBlur,
        setState,
        setTouched,
        setErrors,
        setValue,
    };
    __vite_ssr_import_0__.provide(FieldContextKey, field);
    if (__vite_ssr_import_0__.isRef(rules) && typeof __vite_ssr_import_0__.unref(rules) !== 'function') {
        __vite_ssr_import_0__.watch(rules, (value, oldValue) => {
            if (es6(value, oldValue)) {
                return;
            }
            meta.validated ? validateWithStateMutation() : validateValidStateOnly();
        }, {
            deep: true,
        });
    }
    if (("development" !== 'production')) {
        field._vm = __vite_ssr_import_0__.getCurrentInstance();
        __vite_ssr_import_0__.watch(() => (Object.assign(Object.assign({ errors: errors.value }, meta), { value: value.value })), refreshInspector, {
            deep: true,
        });
        if (!form) {
            registerSingleFieldWithDevtools(field);
        }
    }
    // if no associated form return the field API immediately
    if (!form) {
        return field;
    }
    // associate the field with the given form
    form.register(field);
    __vite_ssr_import_0__.onBeforeUnmount(() => {
        form.unregister(field);
    });
    // extract cross-field dependencies in a computed prop
    const dependencies = __vite_ssr_import_0__.computed(() => {
        const rulesVal = normalizedRules.value;
        // is falsy, a function schema or a yup schema
        if (!rulesVal || isCallable(rulesVal) || isYupValidator(rulesVal)) {
            return {};
        }
        return Object.keys(rulesVal).reduce((acc, rule) => {
            const deps = extractLocators(rulesVal[rule])
                .map((dep) => dep.__locatorRef)
                .reduce((depAcc, depName) => {
                const depValue = getFromPath(form.values, depName) || form.values[depName];
                if (depValue !== undefined) {
                    depAcc[depName] = depValue;
                }
                return depAcc;
            }, {});
            Object.assign(acc, deps);
            return acc;
        }, {});
    });
    // Adds a watcher that runs the validation whenever field dependencies change
    __vite_ssr_import_0__.watch(dependencies, (deps, oldDeps) => {
        // Skip if no dependencies or if the field wasn't manipulated
        if (!Object.keys(deps).length) {
            return;
        }
        const shouldValidate = !es6(deps, oldDeps);
        if (shouldValidate) {
            meta.validated ? validateWithStateMutation() : validateValidStateOnly();
        }
    });
    return field;
}
/**
 * Normalizes partial field options to include the full options
 */
function normalizeOptions(name, opts) {
    const defaults = () => ({
        initialValue: undefined,
        validateOnMount: false,
        bails: true,
        rules: '',
        label: name,
        validateOnValueUpdate: true,
        standalone: false,
    });
    if (!opts) {
        return defaults();
    }
    // TODO: Deprecate this in next major release
    const checkedValue = 'valueProp' in opts ? opts.valueProp : opts.checkedValue;
    return Object.assign(Object.assign(Object.assign({}, defaults()), (opts || {})), { checkedValue });
}
/**
 * Extracts the validation rules from a schema
 */
function extractRuleFromSchema(schema, fieldName) {
    // no schema at all
    if (!schema) {
        return undefined;
    }
    // there is a key on the schema object for this field
    return schema[fieldName];
}
function useCheckboxField(name, rules, opts) {
    const form = !(opts === null || opts === void 0 ? void 0 : opts.standalone) ? injectWithSelf(FormContextKey) : undefined;
    const checkedValue = opts === null || opts === void 0 ? void 0 : opts.checkedValue;
    const uncheckedValue = opts === null || opts === void 0 ? void 0 : opts.uncheckedValue;
    function patchCheckboxApi(field) {
        const handleChange = field.handleChange;
        const checked = __vite_ssr_import_0__.computed(() => {
            const currentValue = __vite_ssr_import_0__.unref(field.value);
            const checkedVal = __vite_ssr_import_0__.unref(checkedValue);
            return Array.isArray(currentValue) ? currentValue.includes(checkedVal) : checkedVal === currentValue;
        });
        function handleCheckboxChange(e, shouldValidate = true) {
            var _a, _b;
            if (checked.value === ((_b = (_a = e) === null || _a === void 0 ? void 0 : _a.target) === null || _b === void 0 ? void 0 : _b.checked)) {
                return;
            }
            let newValue = normalizeEventValue(e);
            // Single checkbox field without a form to toggle it's value
            if (!form) {
                newValue = resolveNextCheckboxValue(__vite_ssr_import_0__.unref(field.value), __vite_ssr_import_0__.unref(checkedValue), __vite_ssr_import_0__.unref(uncheckedValue));
            }
            handleChange(newValue, shouldValidate);
        }
        __vite_ssr_import_0__.onBeforeUnmount(() => {
            // toggles the checkbox value if it was checked
            if (checked.value) {
                handleCheckboxChange(__vite_ssr_import_0__.unref(checkedValue), false);
            }
        });
        return Object.assign(Object.assign({}, field), { checked,
            checkedValue,
            uncheckedValue, handleChange: handleCheckboxChange });
    }
    return patchCheckboxApi(_useField(name, rules, opts));
}

const FieldImpl = __vite_ssr_import_0__.defineComponent({
    name: 'Field',
    inheritAttrs: false,
    props: {
        as: {
            type: [String, Object],
            default: undefined,
        },
        name: {
            type: String,
            required: true,
        },
        rules: {
            type: [Object, String, Function],
            default: undefined,
        },
        validateOnMount: {
            type: Boolean,
            default: false,
        },
        validateOnBlur: {
            type: Boolean,
            default: undefined,
        },
        validateOnChange: {
            type: Boolean,
            default: undefined,
        },
        validateOnInput: {
            type: Boolean,
            default: undefined,
        },
        validateOnModelUpdate: {
            type: Boolean,
            default: undefined,
        },
        bails: {
            type: Boolean,
            default: () => getConfig().bails,
        },
        label: {
            type: String,
            default: undefined,
        },
        uncheckedValue: {
            type: null,
            default: undefined,
        },
        modelValue: {
            type: null,
            default: IS_ABSENT,
        },
        modelModifiers: {
            type: null,
            default: () => ({}),
        },
        'onUpdate:modelValue': {
            type: null,
            default: undefined,
        },
        standalone: {
            type: Boolean,
            default: false,
        },
    },
    setup(props, ctx) {
        const rules = __vite_ssr_import_0__.toRef(props, 'rules');
        const name = __vite_ssr_import_0__.toRef(props, 'name');
        const label = __vite_ssr_import_0__.toRef(props, 'label');
        const uncheckedValue = __vite_ssr_import_0__.toRef(props, 'uncheckedValue');
        const hasModelEvents = isPropPresent(props, 'onUpdate:modelValue');
        const { errors, value, errorMessage, validate: validateField, handleChange, handleBlur, setTouched, resetField, handleReset, meta, checked, setErrors, } = useField(name, rules, {
            validateOnMount: props.validateOnMount,
            bails: props.bails,
            standalone: props.standalone,
            type: ctx.attrs.type,
            initialValue: resolveInitialValue(props, ctx),
            // Only for checkboxes and radio buttons
            checkedValue: ctx.attrs.value,
            uncheckedValue,
            label,
            validateOnValueUpdate: false,
        });
        // If there is a v-model applied on the component we need to emit the `update:modelValue` whenever the value binding changes
        const onChangeHandler = hasModelEvents
            ? function handleChangeWithModel(e, shouldValidate = true) {
                handleChange(e, shouldValidate);
                ctx.emit('update:modelValue', value.value);
            }
            : handleChange;
        const handleInput = (e) => {
            if (!hasCheckedAttr(ctx.attrs.type)) {
                value.value = normalizeEventValue(e);
            }
        };
        const onInputHandler = hasModelEvents
            ? function handleInputWithModel(e) {
                handleInput(e);
                ctx.emit('update:modelValue', value.value);
            }
            : handleInput;
        const fieldProps = __vite_ssr_import_0__.computed(() => {
            const { validateOnInput, validateOnChange, validateOnBlur, validateOnModelUpdate } = resolveValidationTriggers(props);
            const baseOnBlur = [handleBlur, ctx.attrs.onBlur, validateOnBlur ? validateField : undefined].filter(Boolean);
            const baseOnInput = [(e) => onChangeHandler(e, validateOnInput), ctx.attrs.onInput].filter(Boolean);
            const baseOnChange = [(e) => onChangeHandler(e, validateOnChange), ctx.attrs.onChange].filter(Boolean);
            const attrs = {
                name: props.name,
                onBlur: baseOnBlur,
                onInput: baseOnInput,
                onChange: baseOnChange,
            };
            attrs['onUpdate:modelValue'] = e => onChangeHandler(e, validateOnModelUpdate);
            if (hasCheckedAttr(ctx.attrs.type) && checked) {
                attrs.checked = checked.value;
            }
            else {
                attrs.value = value.value;
            }
            const tag = resolveTag(props, ctx);
            if (shouldHaveValueBinding(tag, ctx.attrs)) {
                delete attrs.value;
            }
            return attrs;
        });
        const modelValue = __vite_ssr_import_0__.toRef(props, 'modelValue');
        __vite_ssr_import_0__.watch(modelValue, newModelValue => {
            // Don't attempt to sync absent values
            if (newModelValue === IS_ABSENT && value.value === undefined) {
                return;
            }
            if (newModelValue !== applyModifiers(value.value, props.modelModifiers)) {
                value.value = newModelValue === IS_ABSENT ? undefined : newModelValue;
                validateField();
            }
        });
        function slotProps() {
            return {
                field: fieldProps.value,
                value: value.value,
                meta,
                errors: errors.value,
                errorMessage: errorMessage.value,
                validate: validateField,
                resetField,
                handleChange: onChangeHandler,
                handleInput: onInputHandler,
                handleReset,
                handleBlur,
                setTouched,
                setErrors,
            };
        }
        ctx.expose({
            setErrors,
            setTouched,
            reset: resetField,
            validate: validateField,
            handleChange,
        });
        return () => {
            const tag = __vite_ssr_import_0__.resolveDynamicComponent(resolveTag(props, ctx));
            const children = normalizeChildren(tag, ctx, slotProps);
            if (tag) {
                return __vite_ssr_import_0__.h(tag, Object.assign(Object.assign({}, ctx.attrs), fieldProps.value), children);
            }
            return children;
        };
    },
});
function resolveTag(props, ctx) {
    let tag = props.as || '';
    if (!props.as && !ctx.slots.default) {
        tag = 'input';
    }
    return tag;
}
function resolveValidationTriggers(props) {
    var _a, _b, _c, _d;
    const { validateOnInput, validateOnChange, validateOnBlur, validateOnModelUpdate } = getConfig();
    return {
        validateOnInput: (_a = props.validateOnInput) !== null && _a !== void 0 ? _a : validateOnInput,
        validateOnChange: (_b = props.validateOnChange) !== null && _b !== void 0 ? _b : validateOnChange,
        validateOnBlur: (_c = props.validateOnBlur) !== null && _c !== void 0 ? _c : validateOnBlur,
        validateOnModelUpdate: (_d = props.validateOnModelUpdate) !== null && _d !== void 0 ? _d : validateOnModelUpdate,
    };
}
function applyModifiers(value, modifiers) {
    if (modifiers.number) {
        return toNumber(value);
    }
    return value;
}
function resolveInitialValue(props, ctx) {
    // Gets the initial value either from `value` prop/attr or `v-model` binding (modelValue)
    // For checkboxes and radio buttons it will always be the model value not the `value` attribute
    if (!hasCheckedAttr(ctx.attrs.type)) {
        return isPropPresent(props, 'modelValue') ? props.modelValue : ctx.attrs.value;
    }
    return isPropPresent(props, 'modelValue') ? props.modelValue : undefined;
}
const Field = FieldImpl;

let FORM_COUNTER = 0;
function useForm(opts) {
    const formId = FORM_COUNTER++;
    // Prevents fields from double resetting their values, which causes checkboxes to toggle their initial value
    // TODO: This won't be needed if we centralize all the state inside the `form` for form inputs
    let RESET_LOCK = false;
    // A lookup containing fields or field groups
    const fieldsByPath = __vite_ssr_import_0__.ref({});
    // If the form is currently submitting
    const isSubmitting = __vite_ssr_import_0__.ref(false);
    // The number of times the user tried to submit the form
    const submitCount = __vite_ssr_import_0__.ref(0);
    // dictionary for field arrays to receive various signals like reset
    const fieldArraysLookup = {};
    // a private ref for all form values
    const formValues = __vite_ssr_import_0__.reactive(klona(__vite_ssr_import_0__.unref(opts === null || opts === void 0 ? void 0 : opts.initialValues) || {}));
    // the source of errors for the form fields
    const { errorBag, setErrorBag, setFieldErrorBag } = useErrorBag(opts === null || opts === void 0 ? void 0 : opts.initialErrors);
    // Gets the first error of each field
    const errors = __vite_ssr_import_0__.computed(() => {
        return keysOf(errorBag.value).reduce((acc, key) => {
            const bag = errorBag.value[key];
            if (bag && bag.length) {
                acc[key] = bag[0];
            }
            return acc;
        }, {});
    });
    function getFirstFieldAtPath(path) {
        const fieldOrGroup = fieldsByPath.value[path];
        return Array.isArray(fieldOrGroup) ? fieldOrGroup[0] : fieldOrGroup;
    }
    function fieldExists(path) {
        return !!fieldsByPath.value[path];
    }
    /**
     * Holds a computed reference to all fields names and labels
     */
    const fieldNames = __vite_ssr_import_0__.computed(() => {
        return keysOf(fieldsByPath.value).reduce((names, path) => {
            const field = getFirstFieldAtPath(path);
            if (field) {
                names[path] = __vite_ssr_import_0__.unref(field.label || field.name) || '';
            }
            return names;
        }, {});
    });
    const fieldBailsMap = __vite_ssr_import_0__.computed(() => {
        return keysOf(fieldsByPath.value).reduce((map, path) => {
            var _a;
            const field = getFirstFieldAtPath(path);
            if (field) {
                map[path] = (_a = field.bails) !== null && _a !== void 0 ? _a : true;
            }
            return map;
        }, {});
    });
    // mutable non-reactive reference to initial errors
    // we need this to process initial errors then unset them
    const initialErrors = Object.assign({}, ((opts === null || opts === void 0 ? void 0 : opts.initialErrors) || {}));
    // initial form values
    const { initialValues, originalInitialValues, setInitialValues } = useFormInitialValues(fieldsByPath, formValues, opts === null || opts === void 0 ? void 0 : opts.initialValues);
    // form meta aggregations
    const meta = useFormMeta(fieldsByPath, formValues, initialValues, errors);
    const schema = opts === null || opts === void 0 ? void 0 : opts.validationSchema;
    const formCtx = {
        formId,
        fieldsByPath,
        values: formValues,
        errorBag,
        errors,
        schema,
        submitCount,
        meta,
        isSubmitting,
        fieldArraysLookup,
        validateSchema: __vite_ssr_import_0__.unref(schema) ? validateSchema : undefined,
        validate,
        register: registerField,
        unregister: unregisterField,
        setFieldErrorBag,
        validateField,
        setFieldValue,
        setValues,
        setErrors,
        setFieldError,
        setFieldTouched,
        setTouched,
        resetForm,
        handleSubmit,
        stageInitialValue,
        unsetInitialValue,
        setFieldInitialValue,
    };
    function isFieldGroup(fieldOrGroup) {
        return Array.isArray(fieldOrGroup);
    }
    function applyFieldMutation(fieldOrGroup, mutation) {
        if (Array.isArray(fieldOrGroup)) {
            return fieldOrGroup.forEach(mutation);
        }
        return mutation(fieldOrGroup);
    }
    function mutateAllFields(mutation) {
        Object.values(fieldsByPath.value).forEach(field => {
            if (!field) {
                return;
            }
            // avoid resetting the field values, because they should've been reset already.
            applyFieldMutation(field, mutation);
        });
    }
    /**
     * Manually sets an error message on a specific field
     */
    function setFieldError(field, message) {
        setFieldErrorBag(field, message);
    }
    /**
     * Sets errors for the fields specified in the object
     */
    function setErrors(fields) {
        setErrorBag(fields);
    }
    /**
     * Sets a single field value
     */
    function setFieldValue(field, value, { force } = { force: false }) {
        var _a;
        const fieldInstance = fieldsByPath.value[field];
        const clonedValue = klona(value);
        // field wasn't found, create a virtual field as a placeholder
        if (!fieldInstance) {
            setInPath(formValues, field, clonedValue);
            return;
        }
        if (isFieldGroup(fieldInstance) && ((_a = fieldInstance[0]) === null || _a === void 0 ? void 0 : _a.type) === 'checkbox' && !Array.isArray(value)) {
            // Multiple checkboxes, and only one of them got updated
            const newValue = klona(resolveNextCheckboxValue(getFromPath(formValues, field) || [], value, undefined));
            setInPath(formValues, field, newValue);
            return;
        }
        let newValue = value;
        // Single Checkbox: toggles the field value unless the field is being reset then force it
        if (!isFieldGroup(fieldInstance) && fieldInstance.type === 'checkbox' && !force && !RESET_LOCK) {
            newValue = klona(resolveNextCheckboxValue(getFromPath(formValues, field), value, __vite_ssr_import_0__.unref(fieldInstance.uncheckedValue)));
        }
        setInPath(formValues, field, newValue);
    }
    /**
     * Sets multiple fields values
     */
    function setValues(fields) {
        // clean up old values
        keysOf(formValues).forEach(key => {
            delete formValues[key];
        });
        // set up new values
        keysOf(fields).forEach(path => {
            setFieldValue(path, fields[path]);
        });
        // regenerate the arrays when the form values change
        Object.values(fieldArraysLookup).forEach(f => f && f.reset());
    }
    /**
     * Sets the touched meta state on a field
     */
    function setFieldTouched(field, isTouched) {
        const fieldInstance = fieldsByPath.value[field];
        if (fieldInstance) {
            applyFieldMutation(fieldInstance, f => f.setTouched(isTouched));
        }
    }
    /**
     * Sets the touched meta state on multiple fields
     */
    function setTouched(fields) {
        keysOf(fields).forEach(field => {
            setFieldTouched(field, !!fields[field]);
        });
    }
    /**
     * Resets all fields
     */
    function resetForm(state) {
        RESET_LOCK = true;
        // set initial values if provided
        if (state === null || state === void 0 ? void 0 : state.values) {
            setInitialValues(state.values);
            setValues(state === null || state === void 0 ? void 0 : state.values);
        }
        else {
            // clean up the initial values back to the original
            setInitialValues(originalInitialValues.value);
            // otherwise clean the current values
            setValues(originalInitialValues.value);
        }
        // avoid resetting the field values, because they should've been reset already.
        mutateAllFields(f => f.resetField());
        if (state === null || state === void 0 ? void 0 : state.touched) {
            setTouched(state.touched);
        }
        setErrors((state === null || state === void 0 ? void 0 : state.errors) || {});
        submitCount.value = (state === null || state === void 0 ? void 0 : state.submitCount) || 0;
        __vite_ssr_import_0__.nextTick(() => {
            RESET_LOCK = false;
        });
    }
    function insertFieldAtPath(field, path) {
        const rawField = __vite_ssr_import_0__.markRaw(field);
        const fieldPath = path;
        // first field at that path
        if (!fieldsByPath.value[fieldPath]) {
            fieldsByPath.value[fieldPath] = rawField;
            return;
        }
        const fieldAtPath = fieldsByPath.value[fieldPath];
        if (fieldAtPath && !Array.isArray(fieldAtPath)) {
            fieldsByPath.value[fieldPath] = [fieldAtPath];
        }
        // add the new array to that path
        fieldsByPath.value[fieldPath] = [...fieldsByPath.value[fieldPath], rawField];
    }
    function removeFieldFromPath(field, path) {
        const fieldPath = path;
        const fieldAtPath = fieldsByPath.value[fieldPath];
        if (!fieldAtPath) {
            return;
        }
        // same field at path
        if (!isFieldGroup(fieldAtPath) && field.id === fieldAtPath.id) {
            delete fieldsByPath.value[fieldPath];
            return;
        }
        if (isFieldGroup(fieldAtPath)) {
            const idx = fieldAtPath.findIndex(f => f.id === field.id);
            if (idx === -1) {
                return;
            }
            fieldAtPath.splice(idx, 1);
            if (fieldAtPath.length === 1) {
                fieldsByPath.value[fieldPath] = fieldAtPath[0];
                return;
            }
            if (!fieldAtPath.length) {
                delete fieldsByPath.value[fieldPath];
            }
        }
    }
    function registerField(field) {
        const fieldPath = __vite_ssr_import_0__.unref(field.name);
        insertFieldAtPath(field, fieldPath);
        if (__vite_ssr_import_0__.isRef(field.name)) {
            // ensures when a field's name was already taken that it preserves its same value
            // necessary for fields generated by loops
            __vite_ssr_import_0__.watch(field.name, async (newPath, oldPath) => {
                // cache the value
                await __vite_ssr_import_0__.nextTick();
                removeFieldFromPath(field, oldPath);
                insertFieldAtPath(field, newPath);
                // re-validate if either path had errors before
                if (errors.value[oldPath] || errors.value[newPath]) {
                    // clear up both paths errors
                    setFieldError(oldPath, undefined);
                    validateField(newPath);
                }
                // clean up the old path if no other field is sharing that name
                // #3325
                await __vite_ssr_import_0__.nextTick();
                if (!fieldExists(oldPath)) {
                    unsetPath(formValues, oldPath);
                }
            });
        }
        // if field already had errors (initial errors) that's not user-set, validate it again to ensure state is correct
        // the difference being that `initialErrors` will contain the error message while other errors (pre-validated schema) won't have them as initial errors
        // #3342
        const initialErrorMessage = __vite_ssr_import_0__.unref(field.errorMessage);
        if (initialErrorMessage && (initialErrors === null || initialErrors === void 0 ? void 0 : initialErrors[fieldPath]) !== initialErrorMessage) {
            validateField(fieldPath);
        }
        // marks the initial error as "consumed" so it won't be matched later with same non-initial error
        delete initialErrors[fieldPath];
    }
    function unregisterField(field) {
        const fieldName = __vite_ssr_import_0__.unref(field.name);
        removeFieldFromPath(field, fieldName);
        __vite_ssr_import_0__.nextTick(() => {
            // clears a field error on unmounted
            // we wait till next tick to make sure if the field is completely removed and doesn't have any siblings like checkboxes
            // #3384
            if (!fieldExists(fieldName)) {
                setFieldError(fieldName, undefined);
                unsetPath(formValues, fieldName);
            }
        });
    }
    async function validate(opts) {
        mutateAllFields(f => (f.meta.validated = true));
        if (formCtx.validateSchema) {
            return formCtx.validateSchema((opts === null || opts === void 0 ? void 0 : opts.mode) || 'force');
        }
        // No schema, each field is responsible to validate itself
        const validations = await Promise.all(Object.values(fieldsByPath.value).map(field => {
            const fieldInstance = Array.isArray(field) ? field[0] : field;
            if (!fieldInstance) {
                return Promise.resolve({ key: '', valid: true, errors: [] });
            }
            return fieldInstance.validate(opts).then((result) => {
                return {
                    key: __vite_ssr_import_0__.unref(fieldInstance.name),
                    valid: result.valid,
                    errors: result.errors,
                };
            });
        }));
        const results = {};
        const errors = {};
        for (const validation of validations) {
            results[validation.key] = {
                valid: validation.valid,
                errors: validation.errors,
            };
            if (validation.errors.length) {
                errors[validation.key] = validation.errors[0];
            }
        }
        return {
            valid: validations.every(r => r.valid),
            results,
            errors,
        };
    }
    async function validateField(field) {
        const fieldInstance = fieldsByPath.value[field];
        if (!fieldInstance) {
            __vite_ssr_import_0__.warn(`field with name ${field} was not found`);
            return Promise.resolve({ errors: [], valid: true });
        }
        if (Array.isArray(fieldInstance)) {
            return fieldInstance.map(f => f.validate())[0];
        }
        return fieldInstance.validate();
    }
    function handleSubmit(fn, onValidationError) {
        return function submissionHandler(e) {
            if (e instanceof Event) {
                e.preventDefault();
                e.stopPropagation();
            }
            // Touch all fields
            setTouched(keysOf(fieldsByPath.value).reduce((acc, field) => {
                acc[field] = true;
                return acc;
            }, {}));
            isSubmitting.value = true;
            submitCount.value++;
            return validate()
                .then(result => {
                if (result.valid && typeof fn === 'function') {
                    return fn(klona(formValues), {
                        evt: e,
                        setErrors,
                        setFieldError,
                        setTouched,
                        setFieldTouched,
                        setValues,
                        setFieldValue,
                        resetForm,
                    });
                }
                if (!result.valid && typeof onValidationError === 'function') {
                    onValidationError({
                        values: klona(formValues),
                        evt: e,
                        errors: result.errors,
                        results: result.results,
                    });
                }
            })
                .then(returnVal => {
                isSubmitting.value = false;
                return returnVal;
            }, err => {
                isSubmitting.value = false;
                // re-throw the err so it doesn't go silent
                throw err;
            });
        };
    }
    function setFieldInitialValue(path, value) {
        setInPath(initialValues.value, path, klona(value));
    }
    function unsetInitialValue(path) {
        unsetPath(initialValues.value, path);
    }
    /**
     * Sneaky function to set initial field values
     */
    function stageInitialValue(path, value) {
        setInPath(formValues, path, value);
        setFieldInitialValue(path, value);
    }
    async function _validateSchema() {
        const schemaValue = __vite_ssr_import_0__.unref(schema);
        if (!schemaValue) {
            return { valid: true, results: {}, errors: {} };
        }
        const formResult = isYupValidator(schemaValue)
            ? await validateYupSchema(schemaValue, formValues)
            : await validateObjectSchema(schemaValue, formValues, {
                names: fieldNames.value,
                bailsMap: fieldBailsMap.value,
            });
        return formResult;
    }
    /**
     * Batches validation runs in 5ms batches
     */
    const debouncedSchemaValidation = debounceAsync(_validateSchema, 5);
    async function validateSchema(mode) {
        const formResult = await debouncedSchemaValidation();
        // fields by id lookup
        const fieldsById = formCtx.fieldsByPath.value || {};
        // errors fields names, we need it to also check if custom errors are updated
        const currentErrorsPaths = keysOf(formCtx.errorBag.value);
        // collect all the keys from the schema and all fields
        // this ensures we have a complete keymap of all the fields
        const paths = [
            ...new Set([...keysOf(formResult.results), ...keysOf(fieldsById), ...currentErrorsPaths]),
        ];
        // aggregates the paths into a single result object while applying the results on the fields
        return paths.reduce((validation, path) => {
            const field = fieldsById[path];
            const messages = (formResult.results[path] || { errors: [] }).errors;
            const fieldResult = {
                errors: messages,
                valid: !messages.length,
            };
            validation.results[path] = fieldResult;
            if (!fieldResult.valid) {
                validation.errors[path] = fieldResult.errors[0];
            }
            // field not rendered
            if (!field) {
                setFieldError(path, messages);
                return validation;
            }
            // always update the valid flag regardless of the mode
            applyFieldMutation(field, f => (f.meta.valid = fieldResult.valid));
            if (mode === 'silent') {
                return validation;
            }
            const wasValidated = Array.isArray(field) ? field.some(f => f.meta.validated) : field.meta.validated;
            if (mode === 'validated-only' && !wasValidated) {
                return validation;
            }
            applyFieldMutation(field, f => f.setState({ errors: fieldResult.errors }));
            return validation;
        }, { valid: formResult.valid, results: {}, errors: {} });
    }
    const submitForm = handleSubmit((_, { evt }) => {
        if (isFormSubmitEvent(evt)) {
            evt.target.submit();
        }
    });
    // Trigger initial validation
    __vite_ssr_import_0__.onMounted(() => {
        if (opts === null || opts === void 0 ? void 0 : opts.initialErrors) {
            setErrors(opts.initialErrors);
        }
        if (opts === null || opts === void 0 ? void 0 : opts.initialTouched) {
            setTouched(opts.initialTouched);
        }
        // if validate on mount was enabled
        if (opts === null || opts === void 0 ? void 0 : opts.validateOnMount) {
            validate();
            return;
        }
        // otherwise run initial silent validation through schema if available
        // the useField should skip their own silent validation if a yup schema is present
        if (formCtx.validateSchema) {
            formCtx.validateSchema('silent');
        }
    });
    if (__vite_ssr_import_0__.isRef(schema)) {
        __vite_ssr_import_0__.watch(schema, () => {
            var _a;
            (_a = formCtx.validateSchema) === null || _a === void 0 ? void 0 : _a.call(formCtx, 'validated-only');
        });
    }
    // Provide injections
    __vite_ssr_import_0__.provide(FormContextKey, formCtx);
    if (("development" !== 'production')) {
        registerFormWithDevTools(formCtx);
        __vite_ssr_import_0__.watch(() => (Object.assign(Object.assign({ errors: errorBag.value }, meta.value), { values: formValues, isSubmitting: isSubmitting.value, submitCount: submitCount.value })), refreshInspector, {
            deep: true,
        });
    }
    return {
        errors,
        meta,
        values: formValues,
        isSubmitting,
        submitCount,
        validate,
        validateField,
        handleReset: () => resetForm(),
        resetForm,
        handleSubmit,
        submitForm,
        setFieldError,
        setErrors,
        setFieldValue,
        setValues,
        setFieldTouched,
        setTouched,
    };
}
/**
 * Manages form meta aggregation
 */
function useFormMeta(fieldsByPath, currentValues, initialValues, errors) {
    const MERGE_STRATEGIES = {
        touched: 'some',
        pending: 'some',
        valid: 'every',
    };
    const isDirty = __vite_ssr_import_0__.computed(() => {
        return !es6(currentValues, __vite_ssr_import_0__.unref(initialValues));
    });
    function calculateFlags() {
        const fields = Object.values(fieldsByPath.value).flat(1).filter(Boolean);
        return keysOf(MERGE_STRATEGIES).reduce((acc, flag) => {
            const mergeMethod = MERGE_STRATEGIES[flag];
            acc[flag] = fields[mergeMethod](field => field.meta[flag]);
            return acc;
        }, {});
    }
    const flags = __vite_ssr_import_0__.reactive(calculateFlags());
    __vite_ssr_import_0__.watchEffect(() => {
        const value = calculateFlags();
        flags.touched = value.touched;
        flags.valid = value.valid;
        flags.pending = value.pending;
    });
    return __vite_ssr_import_0__.computed(() => {
        return Object.assign(Object.assign({ initialValues: __vite_ssr_import_0__.unref(initialValues) }, flags), { valid: flags.valid && !keysOf(errors.value).length, dirty: isDirty.value });
    });
}
/**
 * Manages the initial values prop
 */
function useFormInitialValues(fields, formValues, providedValues) {
    // these are the mutable initial values as the fields are mounted/unmounted
    const initialValues = __vite_ssr_import_0__.ref(klona(__vite_ssr_import_0__.unref(providedValues)) || {});
    // these are the original initial value as provided by the user initially, they don't keep track of conditional fields
    // this is important because some conditional fields will overwrite the initial values for other fields who had the same name
    // like array fields, any push/insert operation will overwrite the initial values because they "create new fields"
    // so these are the values that the reset function should use
    // these only change when the user explicitly chanegs the initial values or when the user resets them with new values.
    const originalInitialValues = __vite_ssr_import_0__.ref(klona(__vite_ssr_import_0__.unref(providedValues)) || {});
    function setInitialValues(values, updateFields = false) {
        initialValues.value = klona(values);
        originalInitialValues.value = klona(values);
        if (!updateFields) {
            return;
        }
        // update the pristine non-touched fields
        // those are excluded because it's unlikely you want to change the form values using initial values
        // we mostly watch them for API population or newly inserted fields
        // if the user API is taking too much time before user interaction they should consider disabling or hiding their inputs until the values are ready
        keysOf(fields.value).forEach(fieldPath => {
            const field = fields.value[fieldPath];
            const wasTouched = Array.isArray(field) ? field.some(f => f.meta.touched) : field === null || field === void 0 ? void 0 : field.meta.touched;
            if (!field || wasTouched) {
                return;
            }
            const newValue = getFromPath(initialValues.value, fieldPath);
            setInPath(formValues, fieldPath, klona(newValue));
        });
    }
    if (__vite_ssr_import_0__.isRef(providedValues)) {
        __vite_ssr_import_0__.watch(providedValues, value => {
            setInitialValues(value, true);
        }, {
            deep: true,
        });
    }
    return {
        initialValues,
        originalInitialValues,
        setInitialValues,
    };
}
function useErrorBag(initialErrors) {
    const errorBag = __vite_ssr_import_0__.ref({});
    function normalizeErrorItem(message) {
        return Array.isArray(message) ? message : message ? [message] : [];
    }
    /**
     * Manually sets an error message on a specific field
     */
    function setFieldErrorBag(field, message) {
        if (!message) {
            delete errorBag.value[field];
            return;
        }
        errorBag.value[field] = normalizeErrorItem(message);
    }
    /**
     * Sets errors for the fields specified in the object
     */
    function setErrorBag(fields) {
        errorBag.value = keysOf(fields).reduce((acc, key) => {
            const message = fields[key];
            if (message) {
                acc[key] = normalizeErrorItem(message);
            }
            return acc;
        }, {});
    }
    if (initialErrors) {
        setErrorBag(initialErrors);
    }
    return {
        errorBag,
        setErrorBag,
        setFieldErrorBag,
    };
}

const FormImpl = __vite_ssr_import_0__.defineComponent({
    name: 'Form',
    inheritAttrs: false,
    props: {
        as: {
            type: String,
            default: 'form',
        },
        validationSchema: {
            type: Object,
            default: undefined,
        },
        initialValues: {
            type: Object,
            default: undefined,
        },
        initialErrors: {
            type: Object,
            default: undefined,
        },
        initialTouched: {
            type: Object,
            default: undefined,
        },
        validateOnMount: {
            type: Boolean,
            default: false,
        },
        onSubmit: {
            type: Function,
            default: undefined,
        },
        onInvalidSubmit: {
            type: Function,
            default: undefined,
        },
    },
    setup(props, ctx) {
        const initialValues = __vite_ssr_import_0__.toRef(props, 'initialValues');
        const validationSchema = __vite_ssr_import_0__.toRef(props, 'validationSchema');
        const { errors, values, meta, isSubmitting, submitCount, validate, validateField, handleReset, resetForm, handleSubmit, submitForm, setErrors, setFieldError, setFieldValue, setValues, setFieldTouched, setTouched, } = useForm({
            validationSchema: validationSchema.value ? validationSchema : undefined,
            initialValues,
            initialErrors: props.initialErrors,
            initialTouched: props.initialTouched,
            validateOnMount: props.validateOnMount,
        });
        const onSubmit = props.onSubmit ? handleSubmit(props.onSubmit, props.onInvalidSubmit) : submitForm;
        function handleFormReset(e) {
            if (isEvent(e)) {
                // Prevent default form reset behavior
                e.preventDefault();
            }
            handleReset();
            if (typeof ctx.attrs.onReset === 'function') {
                ctx.attrs.onReset();
            }
        }
        function handleScopedSlotSubmit(evt, onSubmit) {
            const onSuccess = typeof evt === 'function' && !onSubmit ? evt : onSubmit;
            return handleSubmit(onSuccess, props.onInvalidSubmit)(evt);
        }
        function slotProps() {
            return {
                meta: meta.value,
                errors: errors.value,
                values: values,
                isSubmitting: isSubmitting.value,
                submitCount: submitCount.value,
                validate,
                validateField,
                handleSubmit: handleScopedSlotSubmit,
                handleReset,
                submitForm,
                setErrors,
                setFieldError,
                setFieldValue,
                setValues,
                setFieldTouched,
                setTouched,
                resetForm,
            };
        }
        // expose these functions and methods as part of public API
        ctx.expose({
            setFieldError,
            setErrors,
            setFieldValue,
            setValues,
            setFieldTouched,
            setTouched,
            resetForm,
            validate,
            validateField,
        });
        return function renderForm() {
            // avoid resolving the form component as itself
            const tag = props.as === 'form' ? props.as : __vite_ssr_import_0__.resolveDynamicComponent(props.as);
            const children = normalizeChildren(tag, ctx, slotProps);
            if (!props.as) {
                return children;
            }
            // Attributes to add on a native `form` tag
            const formAttrs = props.as === 'form'
                ? {
                    // Disables native validation as vee-validate will handle it.
                    novalidate: true,
                }
                : {};
            return __vite_ssr_import_0__.h(tag, Object.assign(Object.assign(Object.assign({}, formAttrs), ctx.attrs), { onSubmit, onReset: handleFormReset }), children);
        };
    },
});
const Form = FormImpl;

let FIELD_ARRAY_COUNTER = 0;
function useFieldArray(arrayPath) {
    const id = FIELD_ARRAY_COUNTER++;
    const form = injectWithSelf(FormContextKey, undefined);
    const fields = __vite_ssr_import_0__.ref([]);
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const noOp = () => { };
    const noOpApi = {
        fields: __vite_ssr_import_0__.readonly(fields),
        remove: noOp,
        push: noOp,
        swap: noOp,
        insert: noOp,
        update: noOp,
        replace: noOp,
        prepend: noOp,
    };
    if (!form) {
        warn('FieldArray requires being a child of `<Form/>` or `useForm` being called before it. Array fields may not work correctly');
        return noOpApi;
    }
    if (!__vite_ssr_import_0__.unref(arrayPath)) {
        warn('FieldArray requires a field path to be provided, did you forget to pass the `name` prop?');
        return noOpApi;
    }
    let entryCounter = 0;
    function initFields() {
        const currentValues = getFromPath(form === null || form === void 0 ? void 0 : form.values, __vite_ssr_import_0__.unref(arrayPath), []);
        fields.value = currentValues.map(createEntry);
        updateEntryFlags();
    }
    initFields();
    function updateEntryFlags() {
        const fieldsLength = fields.value.length;
        for (let i = 0; i < fieldsLength; i++) {
            const entry = fields.value[i];
            entry.isFirst = i === 0;
            entry.isLast = i === fieldsLength - 1;
        }
    }
    function createEntry(value) {
        const key = entryCounter++;
        const entry = {
            key,
            value: __vite_ssr_import_0__.computed(() => {
                const currentValues = getFromPath(form === null || form === void 0 ? void 0 : form.values, __vite_ssr_import_0__.unref(arrayPath), []);
                const idx = fields.value.findIndex(e => e.key === key);
                return idx === -1 ? value : currentValues[idx];
            }),
            isFirst: false,
            isLast: false,
        };
        return entry;
    }
    function remove(idx) {
        const pathName = __vite_ssr_import_0__.unref(arrayPath);
        const pathValue = getFromPath(form === null || form === void 0 ? void 0 : form.values, pathName);
        if (!pathValue || !Array.isArray(pathValue)) {
            return;
        }
        const newValue = [...pathValue];
        newValue.splice(idx, 1);
        form === null || form === void 0 ? void 0 : form.unsetInitialValue(pathName + `[${idx}]`);
        form === null || form === void 0 ? void 0 : form.setFieldValue(pathName, newValue);
        fields.value.splice(idx, 1);
        updateEntryFlags();
    }
    function push(value) {
        const pathName = __vite_ssr_import_0__.unref(arrayPath);
        const pathValue = getFromPath(form === null || form === void 0 ? void 0 : form.values, pathName);
        const normalizedPathValue = isNullOrUndefined(pathValue) ? [] : pathValue;
        if (!Array.isArray(normalizedPathValue)) {
            return;
        }
        const newValue = [...normalizedPathValue];
        newValue.push(value);
        form === null || form === void 0 ? void 0 : form.stageInitialValue(pathName + `[${newValue.length - 1}]`, value);
        form === null || form === void 0 ? void 0 : form.setFieldValue(pathName, newValue);
        fields.value.push(createEntry(value));
        updateEntryFlags();
    }
    function swap(indexA, indexB) {
        const pathName = __vite_ssr_import_0__.unref(arrayPath);
        const pathValue = getFromPath(form === null || form === void 0 ? void 0 : form.values, pathName);
        if (!Array.isArray(pathValue) || !(indexA in pathValue) || !(indexB in pathValue)) {
            return;
        }
        const newValue = [...pathValue];
        const newFields = [...fields.value];
        // the old switcheroo
        const temp = newValue[indexA];
        newValue[indexA] = newValue[indexB];
        newValue[indexB] = temp;
        const tempEntry = newFields[indexA];
        newFields[indexA] = newFields[indexB];
        newFields[indexB] = tempEntry;
        form === null || form === void 0 ? void 0 : form.setFieldValue(pathName, newValue);
        fields.value = newFields;
        updateEntryFlags();
    }
    function insert(idx, value) {
        const pathName = __vite_ssr_import_0__.unref(arrayPath);
        const pathValue = getFromPath(form === null || form === void 0 ? void 0 : form.values, pathName);
        if (!Array.isArray(pathValue) || pathValue.length < idx) {
            return;
        }
        const newValue = [...pathValue];
        const newFields = [...fields.value];
        newValue.splice(idx, 0, value);
        newFields.splice(idx, 0, createEntry(value));
        form === null || form === void 0 ? void 0 : form.setFieldValue(pathName, newValue);
        fields.value = newFields;
        updateEntryFlags();
    }
    function replace(arr) {
        const pathName = __vite_ssr_import_0__.unref(arrayPath);
        form === null || form === void 0 ? void 0 : form.setFieldValue(pathName, arr);
        initFields();
    }
    function update(idx, value) {
        const pathName = __vite_ssr_import_0__.unref(arrayPath);
        const pathValue = getFromPath(form === null || form === void 0 ? void 0 : form.values, pathName);
        if (!Array.isArray(pathValue) || pathValue.length - 1 < idx) {
            return;
        }
        form === null || form === void 0 ? void 0 : form.setFieldValue(`${pathName}[${idx}]`, value);
    }
    function prepend(value) {
        const pathName = __vite_ssr_import_0__.unref(arrayPath);
        const pathValue = getFromPath(form === null || form === void 0 ? void 0 : form.values, pathName);
        const normalizedPathValue = isNullOrUndefined(pathValue) ? [] : pathValue;
        if (!Array.isArray(normalizedPathValue)) {
            return;
        }
        const newValue = [value, ...normalizedPathValue];
        form === null || form === void 0 ? void 0 : form.stageInitialValue(pathName + `[${newValue.length - 1}]`, value);
        form === null || form === void 0 ? void 0 : form.setFieldValue(pathName, newValue);
        fields.value.unshift(createEntry(value));
        updateEntryFlags();
    }
    form.fieldArraysLookup[id] = {
        reset: initFields,
    };
    __vite_ssr_import_0__.onBeforeUnmount(() => {
        delete form.fieldArraysLookup[id];
    });
    return {
        fields: __vite_ssr_import_0__.readonly(fields),
        remove,
        push,
        swap,
        insert,
        update,
        replace,
        prepend,
    };
}

const FieldArrayImpl = __vite_ssr_import_0__.defineComponent({
    name: 'FieldArray',
    inheritAttrs: false,
    props: {
        name: {
            type: String,
            required: true,
        },
    },
    setup(props, ctx) {
        const { push, remove, swap, insert, replace, update, prepend, fields } = useFieldArray(__vite_ssr_import_0__.toRef(props, 'name'));
        function slotProps() {
            return {
                fields: fields.value,
                push,
                remove,
                swap,
                insert,
                update,
                replace,
                prepend,
            };
        }
        ctx.expose({
            push,
            remove,
            swap,
            insert,
            update,
            replace,
            prepend,
        });
        return () => {
            const children = normalizeChildren(undefined, ctx, slotProps);
            return children;
        };
    },
});
const FieldArray = FieldArrayImpl;

const ErrorMessageImpl = __vite_ssr_import_0__.defineComponent({
    name: 'ErrorMessage',
    props: {
        as: {
            type: String,
            default: undefined,
        },
        name: {
            type: String,
            required: true,
        },
    },
    setup(props, ctx) {
        const form = __vite_ssr_import_0__.inject(FormContextKey, undefined);
        const message = __vite_ssr_import_0__.computed(() => {
            return form === null || form === void 0 ? void 0 : form.errors.value[props.name];
        });
        function slotProps() {
            return {
                message: message.value,
            };
        }
        return () => {
            // Renders nothing if there are no messages
            if (!message.value) {
                return undefined;
            }
            const tag = (props.as ? __vite_ssr_import_0__.resolveDynamicComponent(props.as) : props.as);
            const children = normalizeChildren(tag, ctx, slotProps);
            const attrs = Object.assign({ role: 'alert' }, ctx.attrs);
            // If no tag was specified and there are children
            // render the slot as is without wrapping it
            if (!tag && (Array.isArray(children) || !children) && (children === null || children === void 0 ? void 0 : children.length)) {
                return children;
            }
            // If no children in slot
            // render whatever specified and fallback to a <span> with the message in it's contents
            if ((Array.isArray(children) || !children) && !(children === null || children === void 0 ? void 0 : children.length)) {
                return __vite_ssr_import_0__.h(tag || 'span', attrs, message.value);
            }
            return __vite_ssr_import_0__.h(tag, attrs, children);
        };
    },
});
const ErrorMessage = ErrorMessageImpl;

function useResetForm() {
    const form = injectWithSelf(FormContextKey);
    if (!form) {
        warn('No vee-validate <Form /> or `useForm` was detected in the component tree');
    }
    return function resetForm(state) {
        if (!form) {
            return;
        }
        return form.resetForm(state);
    };
}

/**
 * If a field is dirty or not
 */
function useIsFieldDirty(path) {
    const form = injectWithSelf(FormContextKey);
    let field = path ? undefined : __vite_ssr_import_0__.inject(FieldContextKey);
    return __vite_ssr_import_0__.computed(() => {
        if (path) {
            field = normalizeField(form === null || form === void 0 ? void 0 : form.fieldsByPath.value[__vite_ssr_import_0__.unref(path)]);
        }
        if (!field) {
            warn(`field with name ${__vite_ssr_import_0__.unref(path)} was not found`);
            return false;
        }
        return field.meta.dirty;
    });
}

/**
 * If a field is touched or not
 */
function useIsFieldTouched(path) {
    const form = injectWithSelf(FormContextKey);
    let field = path ? undefined : __vite_ssr_import_0__.inject(FieldContextKey);
    return __vite_ssr_import_0__.computed(() => {
        if (path) {
            field = normalizeField(form === null || form === void 0 ? void 0 : form.fieldsByPath.value[__vite_ssr_import_0__.unref(path)]);
        }
        if (!field) {
            warn(`field with name ${__vite_ssr_import_0__.unref(path)} was not found`);
            return false;
        }
        return field.meta.touched;
    });
}

/**
 * If a field is validated and is valid
 */
function useIsFieldValid(path) {
    const form = injectWithSelf(FormContextKey);
    let field = path ? undefined : __vite_ssr_import_0__.inject(FieldContextKey);
    return __vite_ssr_import_0__.computed(() => {
        if (path) {
            field = normalizeField(form === null || form === void 0 ? void 0 : form.fieldsByPath.value[__vite_ssr_import_0__.unref(path)]);
        }
        if (!field) {
            warn(`field with name ${__vite_ssr_import_0__.unref(path)} was not found`);
            return false;
        }
        return field.meta.valid;
    });
}

/**
 * If the form is submitting or not
 */
function useIsSubmitting() {
    const form = injectWithSelf(FormContextKey);
    if (!form) {
        warn('No vee-validate <Form /> or `useForm` was detected in the component tree');
    }
    return __vite_ssr_import_0__.computed(() => {
        var _a;
        return (_a = form === null || form === void 0 ? void 0 : form.isSubmitting.value) !== null && _a !== void 0 ? _a : false;
    });
}

/**
 * Validates a single field
 */
function useValidateField(path) {
    const form = injectWithSelf(FormContextKey);
    let field = path ? undefined : __vite_ssr_import_0__.inject(FieldContextKey);
    return function validateField() {
        if (path) {
            field = normalizeField(form === null || form === void 0 ? void 0 : form.fieldsByPath.value[__vite_ssr_import_0__.unref(path)]);
        }
        if (!field) {
            warn(`field with name ${__vite_ssr_import_0__.unref(path)} was not found`);
            return Promise.resolve({
                errors: [],
                valid: true,
            });
        }
        return field.validate();
    };
}

/**
 * If the form is dirty or not
 */
function useIsFormDirty() {
    const form = injectWithSelf(FormContextKey);
    if (!form) {
        warn('No vee-validate <Form /> or `useForm` was detected in the component tree');
    }
    return __vite_ssr_import_0__.computed(() => {
        var _a;
        return (_a = form === null || form === void 0 ? void 0 : form.meta.value.dirty) !== null && _a !== void 0 ? _a : false;
    });
}

/**
 * If the form is touched or not
 */
function useIsFormTouched() {
    const form = injectWithSelf(FormContextKey);
    if (!form) {
        warn('No vee-validate <Form /> or `useForm` was detected in the component tree');
    }
    return __vite_ssr_import_0__.computed(() => {
        var _a;
        return (_a = form === null || form === void 0 ? void 0 : form.meta.value.touched) !== null && _a !== void 0 ? _a : false;
    });
}

/**
 * If the form has been validated and is valid
 */
function useIsFormValid() {
    const form = injectWithSelf(FormContextKey);
    if (!form) {
        warn('No vee-validate <Form /> or `useForm` was detected in the component tree');
    }
    return __vite_ssr_import_0__.computed(() => {
        var _a;
        return (_a = form === null || form === void 0 ? void 0 : form.meta.value.valid) !== null && _a !== void 0 ? _a : false;
    });
}

/**
 * Validate multiple fields
 */
function useValidateForm() {
    const form = injectWithSelf(FormContextKey);
    if (!form) {
        warn('No vee-validate <Form /> or `useForm` was detected in the component tree');
    }
    return function validateField() {
        if (!form) {
            return Promise.resolve({ results: {}, errors: {}, valid: true });
        }
        return form.validate();
    };
}

/**
 * The number of form's submission count
 */
function useSubmitCount() {
    const form = injectWithSelf(FormContextKey);
    if (!form) {
        warn('No vee-validate <Form /> or `useForm` was detected in the component tree');
    }
    return __vite_ssr_import_0__.computed(() => {
        var _a;
        return (_a = form === null || form === void 0 ? void 0 : form.submitCount.value) !== null && _a !== void 0 ? _a : 0;
    });
}

/**
 * Gives access to a field's current value
 */
function useFieldValue(path) {
    const form = injectWithSelf(FormContextKey);
    // We don't want to use self injected context as it doesn't make sense
    const field = path ? undefined : __vite_ssr_import_0__.inject(FieldContextKey);
    return __vite_ssr_import_0__.computed(() => {
        if (path) {
            return getFromPath(form === null || form === void 0 ? void 0 : form.values, __vite_ssr_import_0__.unref(path));
        }
        return __vite_ssr_import_0__.unref(field === null || field === void 0 ? void 0 : field.value);
    });
}

/**
 * Gives access to a form's values
 */
function useFormValues() {
    const form = injectWithSelf(FormContextKey);
    if (!form) {
        warn('No vee-validate <Form /> or `useForm` was detected in the component tree');
    }
    return __vite_ssr_import_0__.computed(() => {
        return (form === null || form === void 0 ? void 0 : form.values) || {};
    });
}

/**
 * Gives access to all form errors
 */
function useFormErrors() {
    const form = injectWithSelf(FormContextKey);
    if (!form) {
        warn('No vee-validate <Form /> or `useForm` was detected in the component tree');
    }
    return __vite_ssr_import_0__.computed(() => {
        return ((form === null || form === void 0 ? void 0 : form.errors.value) || {});
    });
}

/**
 * Gives access to a single field error
 */
function useFieldError(path) {
    const form = injectWithSelf(FormContextKey);
    // We don't want to use self injected context as it doesn't make sense
    const field = path ? undefined : __vite_ssr_import_0__.inject(FieldContextKey);
    return __vite_ssr_import_0__.computed(() => {
        if (path) {
            return form === null || form === void 0 ? void 0 : form.errors.value[__vite_ssr_import_0__.unref(path)];
        }
        return field === null || field === void 0 ? void 0 : field.errorMessage.value;
    });
}

function useSubmitForm(cb) {
    const form = injectWithSelf(FormContextKey);
    if (!form) {
        warn('No vee-validate <Form /> or `useForm` was detected in the component tree');
    }
    const onSubmit = form ? form.handleSubmit(cb) : undefined;
    return function submitForm(e) {
        if (!onSubmit) {
            return;
        }
        return onSubmit(e);
    };
}


Object.defineProperty(__vite_ssr_exports__, "ErrorMessage", { enumerable: true, configurable: true, get(){ return ErrorMessage }});
Object.defineProperty(__vite_ssr_exports__, "Field", { enumerable: true, configurable: true, get(){ return Field }});
Object.defineProperty(__vite_ssr_exports__, "FieldArray", { enumerable: true, configurable: true, get(){ return FieldArray }});
Object.defineProperty(__vite_ssr_exports__, "FieldContextKey", { enumerable: true, configurable: true, get(){ return FieldContextKey }});
Object.defineProperty(__vite_ssr_exports__, "Form", { enumerable: true, configurable: true, get(){ return Form }});
Object.defineProperty(__vite_ssr_exports__, "FormContextKey", { enumerable: true, configurable: true, get(){ return FormContextKey }});
Object.defineProperty(__vite_ssr_exports__, "configure", { enumerable: true, configurable: true, get(){ return configure }});
Object.defineProperty(__vite_ssr_exports__, "defineRule", { enumerable: true, configurable: true, get(){ return defineRule }});
Object.defineProperty(__vite_ssr_exports__, "useField", { enumerable: true, configurable: true, get(){ return useField }});
Object.defineProperty(__vite_ssr_exports__, "useFieldArray", { enumerable: true, configurable: true, get(){ return useFieldArray }});
Object.defineProperty(__vite_ssr_exports__, "useFieldError", { enumerable: true, configurable: true, get(){ return useFieldError }});
Object.defineProperty(__vite_ssr_exports__, "useFieldValue", { enumerable: true, configurable: true, get(){ return useFieldValue }});
Object.defineProperty(__vite_ssr_exports__, "useForm", { enumerable: true, configurable: true, get(){ return useForm }});
Object.defineProperty(__vite_ssr_exports__, "useFormErrors", { enumerable: true, configurable: true, get(){ return useFormErrors }});
Object.defineProperty(__vite_ssr_exports__, "useFormValues", { enumerable: true, configurable: true, get(){ return useFormValues }});
Object.defineProperty(__vite_ssr_exports__, "useIsFieldDirty", { enumerable: true, configurable: true, get(){ return useIsFieldDirty }});
Object.defineProperty(__vite_ssr_exports__, "useIsFieldTouched", { enumerable: true, configurable: true, get(){ return useIsFieldTouched }});
Object.defineProperty(__vite_ssr_exports__, "useIsFieldValid", { enumerable: true, configurable: true, get(){ return useIsFieldValid }});
Object.defineProperty(__vite_ssr_exports__, "useIsFormDirty", { enumerable: true, configurable: true, get(){ return useIsFormDirty }});
Object.defineProperty(__vite_ssr_exports__, "useIsFormTouched", { enumerable: true, configurable: true, get(){ return useIsFormTouched }});
Object.defineProperty(__vite_ssr_exports__, "useIsFormValid", { enumerable: true, configurable: true, get(){ return useIsFormValid }});
Object.defineProperty(__vite_ssr_exports__, "useIsSubmitting", { enumerable: true, configurable: true, get(){ return useIsSubmitting }});
Object.defineProperty(__vite_ssr_exports__, "useResetForm", { enumerable: true, configurable: true, get(){ return useResetForm }});
Object.defineProperty(__vite_ssr_exports__, "useSubmitCount", { enumerable: true, configurable: true, get(){ return useSubmitCount }});
Object.defineProperty(__vite_ssr_exports__, "useSubmitForm", { enumerable: true, configurable: true, get(){ return useSubmitForm }});
Object.defineProperty(__vite_ssr_exports__, "useValidateField", { enumerable: true, configurable: true, get(){ return useValidateField }});
Object.defineProperty(__vite_ssr_exports__, "useValidateForm", { enumerable: true, configurable: true, get(){ return useValidateForm }});
Object.defineProperty(__vite_ssr_exports__, "validate", { enumerable: true, configurable: true, get(){ return validate }});
;
}


// --------------------
// Request: /node_modules/@vue/devtools-api/lib/esm/index.js
// Parents: 
// - /node_modules/vee-validate/dist/vee-validate.esm.js ($id_2387c42e)
// Dependencies: 
// - /node_modules/@vue/devtools-api/lib/esm/env.js ($id_304a908e)
// - /node_modules/@vue/devtools-api/lib/esm/const.js ($id_8e00d2d1)
// - /node_modules/@vue/devtools-api/lib/esm/proxy.js ($id_c00b31f5)
// - /node_modules/@vue/devtools-api/lib/esm/api/index.js ($id_550ae022)
// - /node_modules/@vue/devtools-api/lib/esm/plugin.js ($id_674cbbbf)
// --------------------
const $id_24b1ff15 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@vue/devtools-api/lib/esm/env.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/@vue/devtools-api/lib/esm/const.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/@vue/devtools-api/lib/esm/proxy.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/@vue/devtools-api/lib/esm/api/index.js");
__vite_ssr_exportAll__(__vite_ssr_import_3__);
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/@vue/devtools-api/lib/esm/plugin.js");
__vite_ssr_exportAll__(__vite_ssr_import_4__);
function setupDevtoolsPlugin(pluginDescriptor, setupFn) {
    const descriptor = pluginDescriptor;
    const target = __vite_ssr_import_0__.getTarget();
    const hook = __vite_ssr_import_0__.getDevtoolsGlobalHook();
    const enableProxy = __vite_ssr_import_0__.isProxyAvailable && descriptor.enableEarlyProxy;
    if (hook && (target.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !enableProxy)) {
        hook.emit(__vite_ssr_import_1__.HOOK_SETUP, pluginDescriptor, setupFn);
    }
    else {
        const proxy = enableProxy ? new __vite_ssr_import_2__.ApiProxy(descriptor, hook) : null;
        const list = target.__VUE_DEVTOOLS_PLUGINS__ = target.__VUE_DEVTOOLS_PLUGINS__ || [];
        list.push({
            pluginDescriptor: descriptor,
            setupFn,
            proxy,
        });
        if (proxy)
            setupFn(proxy.proxiedTarget);
    }
}
Object.defineProperty(__vite_ssr_exports__, "setupDevtoolsPlugin", { enumerable: true, configurable: true, get(){ return setupDevtoolsPlugin }});
;
}


// --------------------
// Request: /node_modules/@vue/devtools-api/lib/esm/env.js
// Parents: 
// - /node_modules/@vue/devtools-api/lib/esm/index.js ($id_24b1ff15)
// Dependencies: 

// --------------------
const $id_304a908e = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
function getDevtoolsGlobalHook() {
    return getTarget().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
Object.defineProperty(__vite_ssr_exports__, "getDevtoolsGlobalHook", { enumerable: true, configurable: true, get(){ return getDevtoolsGlobalHook }});
function getTarget() {
    // @ts-ignore
    return ("undefined" !== 'undefined' && "undefined" !== 'undefined')
        ? window
        : typeof global !== 'undefined'
            ? global
            : {};
}
Object.defineProperty(__vite_ssr_exports__, "getTarget", { enumerable: true, configurable: true, get(){ return getTarget }});
const isProxyAvailable = typeof Proxy === 'function';
Object.defineProperty(__vite_ssr_exports__, "isProxyAvailable", { enumerable: true, configurable: true, get(){ return isProxyAvailable }});
;
}


// --------------------
// Request: /node_modules/@vue/devtools-api/lib/esm/const.js
// Parents: 
// - /node_modules/@vue/devtools-api/lib/esm/index.js ($id_24b1ff15)
// - /node_modules/@vue/devtools-api/lib/esm/proxy.js ($id_c00b31f5)
// Dependencies: 

// --------------------
const $id_8e00d2d1 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const HOOK_SETUP = 'devtools-plugin:setup';
Object.defineProperty(__vite_ssr_exports__, "HOOK_SETUP", { enumerable: true, configurable: true, get(){ return HOOK_SETUP }});
const HOOK_PLUGIN_SETTINGS_SET = 'plugin:settings:set';
Object.defineProperty(__vite_ssr_exports__, "HOOK_PLUGIN_SETTINGS_SET", { enumerable: true, configurable: true, get(){ return HOOK_PLUGIN_SETTINGS_SET }});
;
}


// --------------------
// Request: /node_modules/@vue/devtools-api/lib/esm/proxy.js
// Parents: 
// - /node_modules/@vue/devtools-api/lib/esm/index.js ($id_24b1ff15)
// Dependencies: 
// - /node_modules/@vue/devtools-api/lib/esm/const.js ($id_8e00d2d1)
// --------------------
const $id_c00b31f5 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@vue/devtools-api/lib/esm/const.js");

class ApiProxy {
    constructor(plugin, hook) {
        this.target = null;
        this.targetQueue = [];
        this.onQueue = [];
        this.plugin = plugin;
        this.hook = hook;
        const defaultSettings = {};
        if (plugin.settings) {
            for (const id in plugin.settings) {
                const item = plugin.settings[id];
                defaultSettings[id] = item.defaultValue;
            }
        }
        const localSettingsSaveId = `__vue-devtools-plugin-settings__${plugin.id}`;
        let currentSettings = Object.assign({}, defaultSettings);
        try {
            const raw = localStorage.getItem(localSettingsSaveId);
            const data = JSON.parse(raw);
            Object.assign(currentSettings, data);
        }
        catch (e) {
            // noop
        }
        this.fallbacks = {
            getSettings() {
                return currentSettings;
            },
            setSettings(value) {
                try {
                    localStorage.setItem(localSettingsSaveId, JSON.stringify(value));
                }
                catch (e) {
                    // noop
                }
                currentSettings = value;
            },
        };
        if (hook) {
            hook.on(__vite_ssr_import_0__.HOOK_PLUGIN_SETTINGS_SET, (pluginId, value) => {
                if (pluginId === this.plugin.id) {
                    this.fallbacks.setSettings(value);
                }
            });
        }
        this.proxiedOn = new Proxy({}, {
            get: (_target, prop) => {
                if (this.target) {
                    return this.target.on[prop];
                }
                else {
                    return (...args) => {
                        this.onQueue.push({
                            method: prop,
                            args,
                        });
                    };
                }
            },
        });
        this.proxiedTarget = new Proxy({}, {
            get: (_target, prop) => {
                if (this.target) {
                    return this.target[prop];
                }
                else if (prop === 'on') {
                    return this.proxiedOn;
                }
                else if (Object.keys(this.fallbacks).includes(prop)) {
                    return (...args) => {
                        this.targetQueue.push({
                            method: prop,
                            args,
                            resolve: () => { },
                        });
                        return this.fallbacks[prop](...args);
                    };
                }
                else {
                    return (...args) => {
                        return new Promise(resolve => {
                            this.targetQueue.push({
                                method: prop,
                                args,
                                resolve,
                            });
                        });
                    };
                }
            },
        });
    }
    async setRealTarget(target) {
        this.target = target;
        for (const item of this.onQueue) {
            this.target.on[item.method](...item.args);
        }
        for (const item of this.targetQueue) {
            item.resolve(await this.target[item.method](...item.args));
        }
    }
}
Object.defineProperty(__vite_ssr_exports__, "ApiProxy", { enumerable: true, configurable: true, get(){ return ApiProxy }});
;
}


// --------------------
// Request: /node_modules/@vue/devtools-api/lib/esm/api/index.js
// Parents: 
// - /node_modules/@vue/devtools-api/lib/esm/index.js ($id_24b1ff15)
// Dependencies: 
// - /node_modules/@vue/devtools-api/lib/esm/api/api.js ($id_92fae9b0)
// - /node_modules/@vue/devtools-api/lib/esm/api/app.js ($id_b65c5853)
// - /node_modules/@vue/devtools-api/lib/esm/api/component.js ($id_614015ea)
// - /node_modules/@vue/devtools-api/lib/esm/api/context.js ($id_2baadcfd)
// - /node_modules/@vue/devtools-api/lib/esm/api/hooks.js ($id_3aa5d48c)
// - /node_modules/@vue/devtools-api/lib/esm/api/util.js ($id_03011152)
// --------------------
const $id_550ae022 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@vue/devtools-api/lib/esm/api/api.js");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/@vue/devtools-api/lib/esm/api/app.js");
__vite_ssr_exportAll__(__vite_ssr_import_1__);
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/@vue/devtools-api/lib/esm/api/component.js");
__vite_ssr_exportAll__(__vite_ssr_import_2__);
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/@vue/devtools-api/lib/esm/api/context.js");
__vite_ssr_exportAll__(__vite_ssr_import_3__);
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/@vue/devtools-api/lib/esm/api/hooks.js");
__vite_ssr_exportAll__(__vite_ssr_import_4__);
const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/@vue/devtools-api/lib/esm/api/util.js");
__vite_ssr_exportAll__(__vite_ssr_import_5__);
;
}


// --------------------
// Request: /node_modules/@vue/devtools-api/lib/esm/api/api.js
// Parents: 
// - /node_modules/@vue/devtools-api/lib/esm/api/index.js ($id_550ae022)
// Dependencies: 

// --------------------
const $id_92fae9b0 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

;
}


// --------------------
// Request: /node_modules/@vue/devtools-api/lib/esm/api/app.js
// Parents: 
// - /node_modules/@vue/devtools-api/lib/esm/api/index.js ($id_550ae022)
// Dependencies: 

// --------------------
const $id_b65c5853 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

;
}


// --------------------
// Request: /node_modules/@vue/devtools-api/lib/esm/api/component.js
// Parents: 
// - /node_modules/@vue/devtools-api/lib/esm/api/index.js ($id_550ae022)
// Dependencies: 

// --------------------
const $id_614015ea = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

;
}


// --------------------
// Request: /node_modules/@vue/devtools-api/lib/esm/api/context.js
// Parents: 
// - /node_modules/@vue/devtools-api/lib/esm/api/index.js ($id_550ae022)
// Dependencies: 

// --------------------
const $id_2baadcfd = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

;
}


// --------------------
// Request: /node_modules/@vue/devtools-api/lib/esm/api/hooks.js
// Parents: 
// - /node_modules/@vue/devtools-api/lib/esm/api/index.js ($id_550ae022)
// Dependencies: 

// --------------------
const $id_3aa5d48c = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

;
}


// --------------------
// Request: /node_modules/@vue/devtools-api/lib/esm/api/util.js
// Parents: 
// - /node_modules/@vue/devtools-api/lib/esm/api/index.js ($id_550ae022)
// Dependencies: 

// --------------------
const $id_03011152 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

;
}


// --------------------
// Request: /node_modules/@vue/devtools-api/lib/esm/plugin.js
// Parents: 
// - /node_modules/@vue/devtools-api/lib/esm/index.js ($id_24b1ff15)
// Dependencies: 

// --------------------
const $id_674cbbbf = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

;
}


// --------------------
// Request: /components/Forms/Register.vue
// Parents: 
// - /pages/login.vue?macro=true ($id_213baa8a)
// - /pages/login.vue ($id_b0922173)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// - /store/store.js ($id_fa1a709a)
// - /store/user.js ($id_6c3c060a)
// - /components/Tools/Loader.vue ($id_c71ecea5)
// - /components/Tools/ErrorMsg.vue ($id_faa89f61)
// - /components/reusable/AppFormField.vue ($id_def58cce)
// - /node_modules/vee-validate/dist/vee-validate.esm.js ($id_2387c42e)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_7dc4ae3d = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

  const __vite_ssr_import_2__ = await __vite_ssr_import__("/store/store.js");

  const __vite_ssr_import_3__ = await __vite_ssr_import__("/store/user.js");

  const __vite_ssr_import_4__ = await __vite_ssr_import__("/components/Tools/Loader.vue");

  const __vite_ssr_import_5__ = await __vite_ssr_import__("/components/Tools/ErrorMsg.vue");

  const __vite_ssr_import_6__ = await __vite_ssr_import__("/components/reusable/AppFormField.vue");

  const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/vee-validate/dist/vee-validate.esm.js");

  const _sfc_main = ({
    components: { Loader: __vite_ssr_import_4__.default, ErrorMsg: __vite_ssr_import_5__.default, Form: __vite_ssr_import_7__.Form, AppFormField: __vite_ssr_import_6__.default },
    setup() {
      const authStore = __vite_ssr_import_3__.useAuthStore();
      const { createAccount } = authStore;
      const isValid = __vite_ssr_import_7__.useIsFormValid();
      const store = __vite_ssr_import_2__.useStore();

      const isActive = __vite_ssr_import_0__.ref(false)

      const userForm = __vite_ssr_import_0__.reactive({
        email: '',
        password: '',
        firstname: '',
        lastname: '',
        phone: '',
      });

      const signUpWithEmail = async () => {
        isActive.value = true
        await createAccount(userForm.email, userForm.password, userForm.firstname, userForm.lastname, userForm.phone);
        __vite_ssr_import_1__.navigateTo('/')
        isActive.value = false
      };
      return {
        userForm,
        isValid,
        signUpWithEmail,
        store,
        isActive
      };
    }
  })

const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_9__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_loader = __vite_ssr_import_8__.resolveComponent("loader")
  const _component_Form = __vite_ssr_import_8__.resolveComponent("Form")
  const _component_AppFormField = __vite_ssr_import_8__.resolveComponent("AppFormField")

  _push(`<div${__vite_ssr_import_9__.ssrRenderAttrs(__vite_ssr_import_8__.mergeProps({ class: "container mt-4" }, _attrs))}>`)
  _push(__vite_ssr_import_9__.ssrRenderComponent(_component_loader, { isLoading: $setup.isActive }, null, _parent))
  _push(__vite_ssr_import_9__.ssrRenderComponent(_component_Form, null, {
    default: __vite_ssr_import_8__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(__vite_ssr_import_9__.ssrRenderComponent(_component_AppFormField, {
          label: "Firstname",
          name: "firstname",
          type: "text",
          modelValue: $setup.userForm.firstname,
          "onUpdate:modelValue": $event => (($setup.userForm.firstname) = $event),
          rules: "required"
        }, null, _parent, _scopeId))
        _push(__vite_ssr_import_9__.ssrRenderComponent(_component_AppFormField, {
          label: "Lastname",
          name: "lastname",
          type: "text",
          modelValue: $setup.userForm.lastname,
          "onUpdate:modelValue": $event => (($setup.userForm.lastname) = $event),
          rules: "required"
        }, null, _parent, _scopeId))
        _push(__vite_ssr_import_9__.ssrRenderComponent(_component_AppFormField, {
          label: "Phone",
          name: "phone",
          type: "text",
          modelValue: $setup.userForm.phone,
          "onUpdate:modelValue": $event => (($setup.userForm.phone) = $event),
          rules: "required|min:8"
        }, null, _parent, _scopeId))
        _push(__vite_ssr_import_9__.ssrRenderComponent(_component_AppFormField, {
          label: "Email",
          name: "email",
          type: "email",
          modelValue: $setup.userForm.email,
          "onUpdate:modelValue": $event => (($setup.userForm.email) = $event),
          rules: "required|email"
        }, null, _parent, _scopeId))
        _push(__vite_ssr_import_9__.ssrRenderComponent(_component_AppFormField, {
          label: "Password",
          name: "password",
          type: "password",
          modelValue: $setup.userForm.password,
          "onUpdate:modelValue": $event => (($setup.userForm.password) = $event),
          rules: "required|min:6"
        }, null, _parent, _scopeId))
        _push(`<button type="submit"${
          (__vite_ssr_import_9__.ssrIncludeBooleanAttr(false)) ? " disabled" : ""
        } class="btn btn-primary" style="${
          __vite_ssr_import_9__.ssrRenderStyle({"width":"100%"})
        }"${
          _scopeId
        }>Register</button>`)
      } else {
        return [
          __vite_ssr_import_8__.createVNode(_component_AppFormField, {
            label: "Firstname",
            name: "firstname",
            type: "text",
            modelValue: $setup.userForm.firstname,
            "onUpdate:modelValue": $event => (($setup.userForm.firstname) = $event),
            rules: "required"
          }, null, 8 /* PROPS */, ["modelValue", "onUpdate:modelValue"]),
          __vite_ssr_import_8__.createVNode(_component_AppFormField, {
            label: "Lastname",
            name: "lastname",
            type: "text",
            modelValue: $setup.userForm.lastname,
            "onUpdate:modelValue": $event => (($setup.userForm.lastname) = $event),
            rules: "required"
          }, null, 8 /* PROPS */, ["modelValue", "onUpdate:modelValue"]),
          __vite_ssr_import_8__.createVNode(_component_AppFormField, {
            label: "Phone",
            name: "phone",
            type: "text",
            modelValue: $setup.userForm.phone,
            "onUpdate:modelValue": $event => (($setup.userForm.phone) = $event),
            rules: "required|min:8"
          }, null, 8 /* PROPS */, ["modelValue", "onUpdate:modelValue"]),
          __vite_ssr_import_8__.createVNode(_component_AppFormField, {
            label: "Email",
            name: "email",
            type: "email",
            modelValue: $setup.userForm.email,
            "onUpdate:modelValue": $event => (($setup.userForm.email) = $event),
            rules: "required|email"
          }, null, 8 /* PROPS */, ["modelValue", "onUpdate:modelValue"]),
          __vite_ssr_import_8__.createVNode(_component_AppFormField, {
            label: "Password",
            name: "password",
            type: "password",
            modelValue: $setup.userForm.password,
            "onUpdate:modelValue": $event => (($setup.userForm.password) = $event),
            rules: "required|min:6"
          }, null, 8 /* PROPS */, ["modelValue", "onUpdate:modelValue"]),
          __vite_ssr_import_8__.createVNode("button", {
            type: "submit",
            disabled: false,
            class: "btn btn-primary",
            style: {"width":"100%"}
          }, "Register")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div>`)
}


const __vite_ssr_import_10__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_10__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Forms/Register.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_11__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_11__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/DEV/VUE/yes4nuxt/components/Forms/Register.vue"]]);
}


// --------------------
// Request: /pages/index.vue
// Parents: 
// - /@id/__x00__virtual:C:/DEV/VUE/yes4nuxt/.nuxt/routes.mjs ($id_a67a8a7c)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// - /store/user.js ($id_6c3c060a)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_cca58e97 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");
const __vite_ssr_import_1__ = await __vite_ssr_import__("/store/user.js");


  
const _sfc_main = {
  setup(__props, { expose }) {
  expose();

  const authStore = __vite_ssr_import_1__.useAuthStore();
  const { logoutUser } = authStore;

  const logout = () => {
    logoutUser().then((res) => {
      if(res) {
        __vite_ssr_import_0__.navigateTo('/login')
      }
    })
  }



const __returned__ = { authStore, logoutUser, logout, useAuthStore: __vite_ssr_import_1__.useAuthStore }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Button = __vite_ssr_import_2__.resolveComponent("Button")

  _push(`<div${__vite_ssr_import_3__.ssrRenderAttrs(_attrs)}><h3>Home</h3><br><br>`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_Button, { label: "Logout" }, null, _parent))
  _push(`</div>`)
}


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/index.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/DEV/VUE/yes4nuxt/pages/index.vue"]]);
}


// --------------------
// Request: /pages/login.vue
// Parents: 
// - /@id/__x00__virtual:C:/DEV/VUE/yes4nuxt/.nuxt/routes.mjs ($id_a67a8a7c)
// Dependencies: 
// - /store/store.js ($id_fa1a709a)
// - /components/Forms/LoginForm.vue ($id_600babf2)
// - /components/Forms/Register.vue ($id_7dc4ae3d)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_b0922173 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

  const __vite_ssr_import_0__ = await __vite_ssr_import__("/store/store.js");

  const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/Forms/LoginForm.vue");

  const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/Forms/Register.vue");

  const _sfc_main = ({
    components: { LoginForm: __vite_ssr_import_1__.default, Register: __vite_ssr_import_2__.default },
    setup() {
      const store = __vite_ssr_import_0__.useStore();
      return {
        store,
      }
    }
  })

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_login_form = __vite_ssr_import_3__.resolveComponent("login-form")
  const _component_register = __vite_ssr_import_3__.resolveComponent("register")

  _push(`<!--[--><div class="container" style="${__vite_ssr_import_4__.ssrRenderStyle({"width":"540px"})}"><div class="container mt-5"><ul class="nav nav-tabs nav-fill justify-content-center" id="myTab" role="tablist"><li class="nav-item" role="presentation"><button class="nav-link active" id="login-tab" data-bs-toggle="tab" data-bs-target="#login" type="button" role="tab" aria-controls="login" aria-selected="true">Login</button></li><li class="nav-item" role="presentation"><button class="nav-link" id="signup-tab" data-bs-toggle="tab" data-bs-target="#signup" type="button" role="tab" aria-controls="signup" aria-selected="false">Register</button></li></ul><div class="tab-content" id="myTabContent"><div class="tab-pane fade show active" id="login" role="tabpanel" aria-labelledby="login-tab">`)
  _push(__vite_ssr_import_4__.ssrRenderComponent(_component_login_form, null, null, _parent))
  _push(`</div><div class="tab-pane fade" id="signup" role="tabpanel" aria-labelledby="signup-tab">`)
  _push(__vite_ssr_import_4__.ssrRenderComponent(_component_register, null, null, _parent))
  _push(`</div></div></div></div><h2 class="d-flex justify-content-center">${__vite_ssr_import_4__.ssrInterpolate($setup.store.counter)}</h2><div class="d-flex justify-content-center"><button type="button" class="btn btn-outline-primary">Add</button><button type="button" class="btn btn-outline-success">Subtract</button></div><!--]-->`)
}


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/login.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/DEV/VUE/yes4nuxt/pages/login.vue"]]);
}


// --------------------
// Request: /@id/__x00__virtual:C:/DEV/VUE/yes4nuxt/.nuxt/middleware.mjs
// Parents: 
// - /node_modules/nuxt3/dist/pages/runtime/router.mjs ($id_a4d6cb5b)
// Dependencies: 
// - /middleware/auth.js ($id_3fdca93e)
// --------------------
const $id_163a7712 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const globalMiddleware = []
Object.defineProperty(__vite_ssr_exports__, "globalMiddleware", { enumerable: true, configurable: true, get(){ return globalMiddleware }});
const namedMiddleware = {
  auth: () => __vite_ssr_dynamic_import__('/middleware/auth.js')
}
Object.defineProperty(__vite_ssr_exports__, "namedMiddleware", { enumerable: true, configurable: true, get(){ return namedMiddleware }});;
}


// --------------------
// Request: /middleware/auth.js
// Parents: 
// - /@id/__x00__virtual:C:/DEV/VUE/yes4nuxt/.nuxt/middleware.mjs ($id_163a7712)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// - /store/user.js ($id_6c3c060a)
// --------------------
const $id_3fdca93e = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");
const __vite_ssr_import_1__ = await __vite_ssr_import__("/store/user.js");


__vite_ssr_exports__.default = __vite_ssr_import_0__.defineNuxtRouteMiddleware((to, from) => {
  const store = __vite_ssr_import_1__.useAuthStore()
  console.log('LOGGED IN: ', store.isLoggedIn);
  if (to.name !== '/login' && !store.isLoggedIn) return __vite_ssr_import_0__.navigateTo('/login')
});
}


// --------------------
// Request: /@id/__x00__virtual:C:/DEV/VUE/yes4nuxt/.nuxt/dist.plugin.d8412656.mjs
// Parents: 
// - /@id/__x00__virtual:C:/DEV/VUE/yes4nuxt/.nuxt/plugins/server.mjs ($id_f92b9082)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt3/dist/app/compat/vue-demi.mjs ($id_132eda61)
// - /node_modules/pinia/dist/pinia.mjs ($id_b1920624)
// --------------------
const $id_052b8ccd = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/compat/vue-demi.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/pinia/dist/pinia.mjs");


if (__vite_ssr_import_1__.isVue2) {
  __vite_ssr_import_1__.install();
  const Vue = "default" in __vite_ssr_import_1__.Vue2 ? __vite_ssr_import_1__.Vue2.default : __vite_ssr_import_1__.Vue2;
  Vue.use(__vite_ssr_import_2__.PiniaVuePlugin);
}
const PiniaNuxtPlugin = (context, inject) => {
  const pinia = __vite_ssr_import_2__.createPinia();
  if (__vite_ssr_import_1__.isVue2) {
    context.app.pinia = pinia;
  } else {
    context.vueApp.use(pinia);
  }
  inject("pinia", pinia);
  context.pinia = pinia;
  __vite_ssr_import_2__.setActivePinia(pinia);
  pinia._p.push(({ store }) => {
    Object.defineProperty(store, "$nuxt", { value: context });
  });
  if (true) {
    if (__vite_ssr_import_1__.isVue2) {
      context.beforeNuxtRender(({ nuxtState }) => {
        nuxtState.pinia = pinia.state.value;
      });
    } else {
      context.nuxtState.pinia = pinia.state.value;
    }
  } else if (context.nuxtState && context.nuxtState.pinia) {
    pinia.state.value = context.nuxtState.pinia;
  }
};


Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return PiniaNuxtPlugin }});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/compat/vue-demi.mjs
// Parents: 
// - /@id/__x00__virtual:C:/DEV/VUE/yes4nuxt/.nuxt/dist.plugin.d8412656.mjs ($id_052b8ccd)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/compat/capi.mjs ($id_7674cc72)
// --------------------
const $id_132eda61 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/compat/capi.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
const Vue2 = void 0;
Object.defineProperty(__vite_ssr_exports__, "Vue2", { enumerable: true, configurable: true, get(){ return Vue2 }});
const isVue2 = false;
Object.defineProperty(__vite_ssr_exports__, "isVue2", { enumerable: true, configurable: true, get(){ return isVue2 }});
const isVue3 = true;
Object.defineProperty(__vite_ssr_exports__, "isVue3", { enumerable: true, configurable: true, get(){ return isVue3 }});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/compat/capi.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/compat/vue-demi.mjs ($id_132eda61)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_7674cc72 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
const install = () => {
};
Object.defineProperty(__vite_ssr_exports__, "install", { enumerable: true, configurable: true, get(){ return install }});
function set(target, key, val) {
  if (Array.isArray(target)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val;
  }
  target[key] = val;
  return val;
}
Object.defineProperty(__vite_ssr_exports__, "set", { enumerable: true, configurable: true, get(){ return set }});
function del(target, key) {
  if (Array.isArray(target)) {
    target.splice(key, 1);
    return;
  }
  delete target[key];
}
Object.defineProperty(__vite_ssr_exports__, "del", { enumerable: true, configurable: true, get(){ return del }});
;
}


// --------------------
// Request: /plugins/persistedstate.js
// Parents: 
// - /@id/__x00__virtual:C:/DEV/VUE/yes4nuxt/.nuxt/plugins/server.mjs ($id_f92b9082)
// Dependencies: 
// - /node_modules/pinia-plugin-persistedstate-2/dist/index.es.prod.mjs ($id_1975012f)
// - /node_modules/js-cookie/dist/js.cookie.mjs ($id_23bde2bf)
// - /node_modules/cookie/index.js ($id_01580015)
// - /store/store.js ($id_fa1a709a)
// --------------------
const $id_88d211c2 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/pinia-plugin-persistedstate-2/dist/index.es.prod.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/js-cookie/dist/js.cookie.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/cookie/index.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/store/store.js");

console.log('persistedsatate')
__vite_ssr_exports__.default = function ({ $pinia, ssrContext }) {

  if(true) {
    const theNick = getNick(ssrContext.req);
    const store = __vite_ssr_import_3__.useStore($pinia)
    console.log(true, theNick)
    store.$patch((state) => {
      state.nick = theNick.nick
    })
    // console.log(store)
  }

  $pinia.use(
    __vite_ssr_import_0__.createPersistedStatePlugin({
      storage: {
        getItem: (key) => {
          if (true) {
            const parsedCookies = __vite_ssr_import_2__.default.parse(ssrContext.req.headers.cookie)
            return parsedCookies[key]
          } else {
            return __vite_ssr_import_1__.default.get(key)
          }
        },
        setItem: (key, value) =>
          __vite_ssr_import_1__.default.set(key, value, { expires: 30, secure: false }),
        removeItem: (key) => __vite_ssr_import_1__.default.remove(key),
      },
    }),
  )
}


const getNick = req => {
  const originHost = `${(req.headers.referer || req.headers['x-forwarded-host'] || req.headers.host || null)}`
  const isLocal = originHost.indexOf('localhost') > 0 ? true : false
  let nick = originHost.replace('https://', '').replace('http://', '').split('.')[0] || 'yesmkt'
  if (nick.indexOf('localhost') > -1 || !nick || nick === 'null') nick = 'yesmkt'
  return { nick, originHost, isLocal }
}
;
}


// --------------------
// Request: /node_modules/pinia-plugin-persistedstate-2/dist/index.es.prod.mjs
// Parents: 
// - /plugins/persistedstate.js ($id_88d211c2)
// Dependencies: 

// --------------------
const $id_1975012f = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import("file:///C:/DEV/VUE/yes4nuxt/node_modules/pinia-plugin-persistedstate-2/dist/index.es.prod.mjs").then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error("[vite dev] Error loading external \"C:/DEV/VUE/yes4nuxt/node_modules/pinia-plugin-persistedstate-2/dist/index.es.prod.mjs\".") })


// --------------------
// Request: /node_modules/js-cookie/dist/js.cookie.mjs
// Parents: 
// - /plugins/persistedstate.js ($id_88d211c2)
// Dependencies: 

// --------------------
const $id_23bde2bf = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import("file:///C:/DEV/VUE/yes4nuxt/node_modules/js-cookie/dist/js.cookie.mjs").then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error("[vite dev] Error loading external \"C:/DEV/VUE/yes4nuxt/node_modules/js-cookie/dist/js.cookie.mjs\".") })


// --------------------
// Request: /node_modules/cookie/index.js
// Parents: 
// - /plugins/persistedstate.js ($id_88d211c2)
// Dependencies: 

// --------------------
const $id_01580015 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import("file:///C:/DEV/VUE/yes4nuxt/node_modules/cookie/index.js").then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error("[vite dev] Error loading external \"C:/DEV/VUE/yes4nuxt/node_modules/cookie/index.js\".") })


// --------------------
// Request: /plugins/primevue.ts
// Parents: 
// - /@id/__x00__virtual:C:/DEV/VUE/yes4nuxt/.nuxt/plugins/server.mjs ($id_f92b9082)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// - /node_modules/primevue/config/config.esm.js ($id_d31542f8)
// - /node_modules/primevue/button/button.esm.js ($id_9578581f)
// - /node_modules/primevue/menubar/menubar.esm.js ($id_1db5deaf)
// - /node_modules/primevue/inputtext/inputtext.esm.js ($id_743d0bd5)
// --------------------
const $id_934480b9 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/primevue/config/config.esm.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/primevue/button/button.esm.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/primevue/menubar/menubar.esm.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/primevue/inputtext/inputtext.esm.js");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(__vite_ssr_import_1__.default, { ripple: true });
  nuxtApp.vueApp.component("Button", __vite_ssr_import_2__.default);
  nuxtApp.vueApp.component("Menubar", __vite_ssr_import_3__.default);
  nuxtApp.vueApp.component("InputText", __vite_ssr_import_4__.default);
});
;
}


// --------------------
// Request: /node_modules/primevue/config/config.esm.js
// Parents: 
// - /plugins/primevue.ts ($id_934480b9)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/primevue/api/api.esm.js ($id_556c0162)
// --------------------
const $id_d31542f8 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/primevue/api/api.esm.js");


const defaultOptions = {
    ripple: false,
    inputStyle: 'outlined',
    locale: {
        startsWith: 'Starts with',
        contains: 'Contains',
        notContains: 'Not contains',
        endsWith: 'Ends with',
        equals: 'Equals',
        notEquals: 'Not equals',
        noFilter: 'No Filter',
        lt: 'Less than',
        lte: 'Less than or equal to',
        gt: 'Greater than',
        gte: 'Greater than or equal to',
        dateIs: 'Date is',
        dateIsNot: 'Date is not',
        dateBefore: 'Date is before',
        dateAfter: 'Date is after',
        clear: 'Clear',
        apply: 'Apply',
        matchAll: 'Match All',
        matchAny: 'Match Any',
        addRule: 'Add Rule',
        removeRule: 'Remove Rule',
        accept: 'Yes',
        reject: 'No',
        choose: 'Choose',
        upload: 'Upload',
        cancel: 'Cancel',
        dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        dayNamesMin: ["Su","Mo","Tu","We","Th","Fr","Sa"],
        monthNames: ["January","February","March","April","May","June","July","August","September","October","November","December"],
        monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        today: 'Today',
        weekHeader: 'Wk',
        firstDayOfWeek: 0,
        dateFormat: 'mm/dd/yy',
        weak: 'Weak',
        medium: 'Medium',
        strong: 'Strong',
        passwordPrompt: 'Enter a password',
        emptyFilterMessage: 'No results found',
        emptyMessage: 'No available options'
    },
    filterMatchModeOptions: {
        text: [
            __vite_ssr_import_1__.FilterMatchMode.STARTS_WITH,
            __vite_ssr_import_1__.FilterMatchMode.CONTAINS,
            __vite_ssr_import_1__.FilterMatchMode.NOT_CONTAINS,
            __vite_ssr_import_1__.FilterMatchMode.ENDS_WITH,
            __vite_ssr_import_1__.FilterMatchMode.EQUALS,
            __vite_ssr_import_1__.FilterMatchMode.NOT_EQUALS
        ],
        numeric: [
            __vite_ssr_import_1__.FilterMatchMode.EQUALS,
            __vite_ssr_import_1__.FilterMatchMode.NOT_EQUALS,
            __vite_ssr_import_1__.FilterMatchMode.LESS_THAN,
            __vite_ssr_import_1__.FilterMatchMode.LESS_THAN_OR_EQUAL_TO,
            __vite_ssr_import_1__.FilterMatchMode.GREATER_THAN,
            __vite_ssr_import_1__.FilterMatchMode.GREATER_THAN_OR_EQUAL_TO
        ],
        date: [
            __vite_ssr_import_1__.FilterMatchMode.DATE_IS,
            __vite_ssr_import_1__.FilterMatchMode.DATE_IS_NOT,
            __vite_ssr_import_1__.FilterMatchMode.DATE_BEFORE,
            __vite_ssr_import_1__.FilterMatchMode.DATE_AFTER
        ]
    },
    zIndex: {
        modal: 1100,
        overlay: 1000,
        menu: 1000,
        tooltip: 1100
    }
};

const PrimeVueSymbol = Symbol();

function usePrimeVue() {
    const PrimeVue = __vite_ssr_import_0__.inject(PrimeVueSymbol);
    if (!PrimeVue) {
        throw new Error('PrimeVue is not installed!');
    } 
    
    return PrimeVue;
}

var PrimeVue = {
    install: (app, options) => {
        let configOptions = options ? {...defaultOptions, ...options} : {...defaultOptions};
        const PrimeVue = {
            config: __vite_ssr_import_0__.reactive(configOptions)
        };
        app.config.globalProperties.$primevue = PrimeVue;
        app.provide(PrimeVueSymbol, PrimeVue);
    }
};


Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return PrimeVue }});
Object.defineProperty(__vite_ssr_exports__, "usePrimeVue", { enumerable: true, configurable: true, get(){ return usePrimeVue }});
;
}


// --------------------
// Request: /node_modules/primevue/api/api.esm.js
// Parents: 
// - /node_modules/primevue/config/config.esm.js ($id_d31542f8)
// Dependencies: 
// - /node_modules/primevue/utils/utils.esm.js ($id_27066acc)
// --------------------
const $id_556c0162 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/primevue/utils/utils.esm.js");


const FilterMatchMode = {
    STARTS_WITH : 'startsWith',
    CONTAINS : 'contains',
    NOT_CONTAINS : 'notContains',
    ENDS_WITH : 'endsWith',
    EQUALS : 'equals',
    NOT_EQUALS : 'notEquals',
    IN : 'in',
    LESS_THAN : 'lt',
    LESS_THAN_OR_EQUAL_TO : 'lte',
    GREATER_THAN : 'gt',
    GREATER_THAN_OR_EQUAL_TO : 'gte',
    BETWEEN : 'between',
    DATE_IS : 'dateIs',
    DATE_IS_NOT : 'dateIsNot',
    DATE_BEFORE : 'dateBefore',
    DATE_AFTER : 'dateAfter'
};

const FilterOperator = {
    AND: 'and',
    OR: 'or'
};

const FilterService = {
    filter(value, fields, filterValue, filterMatchMode, filterLocale) {
        let filteredItems = [];

        if (value) {
            for (let item of value) {
                for (let field of fields) {
                    let fieldValue = __vite_ssr_import_0__.ObjectUtils.resolveFieldData(item, field);

                    if (this.filters[filterMatchMode](fieldValue, filterValue, filterLocale)) {
                        filteredItems.push(item);
                        break;
                    }
                }
            }
        }

        return filteredItems;
    },
    filters: {
        startsWith(value, filter, filterLocale)  {
            if (filter === undefined || filter === null || filter.trim() === '') {
                return true;
            }
    
            if (value === undefined || value === null) {
                return false;
            }
    
            let filterValue = __vite_ssr_import_0__.ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
            let stringValue = __vite_ssr_import_0__.ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
    
            return stringValue.slice(0, filterValue.length) === filterValue;
        },
        contains(value, filter, filterLocale) {
            if (filter === undefined || filter === null || (typeof filter === 'string' && filter.trim() === '')) {
                return true;
            }
    
            if (value === undefined || value === null) {
                return false;
            }
    
            let filterValue = __vite_ssr_import_0__.ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
            let stringValue = __vite_ssr_import_0__.ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
    
            return stringValue.indexOf(filterValue) !== -1;
        },
        notContains(value, filter, filterLocale) {
            if (filter === undefined || filter === null || (typeof filter === 'string' && filter.trim() === '')) {
                return true;
            }
    
            if (value === undefined || value === null) {
                return false;
            }
    
            let filterValue = __vite_ssr_import_0__.ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
            let stringValue = __vite_ssr_import_0__.ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
    
            return stringValue.indexOf(filterValue) === -1;
        },
        endsWith(value, filter, filterLocale) {
            if (filter === undefined || filter === null || filter.trim() === '') {
                return true;
            }
    
            if (value === undefined || value === null) {
                return false;
            }
    
            let filterValue = __vite_ssr_import_0__.ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
            let stringValue = __vite_ssr_import_0__.ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
    
            return stringValue.indexOf(filterValue, stringValue.length - filterValue.length) !== -1;
        },
        equals(value, filter, filterLocale) {
            if (filter === undefined || filter === null || (typeof filter === 'string' && filter.trim() === '')) {
                return true;
            }
    
            if (value === undefined || value === null) {
                return false;
            }
    
            if (value.getTime && filter.getTime)
                return value.getTime() === filter.getTime();
            else
                return __vite_ssr_import_0__.ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale) == __vite_ssr_import_0__.ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
        },
        notEquals(value, filter, filterLocale) {
            if (filter === undefined || filter === null || (typeof filter === 'string' && filter.trim() === '')) {
                return false;
            }
    
            if (value === undefined || value === null) {
                return true;
            }
    
            if (value.getTime && filter.getTime)
                return value.getTime() !== filter.getTime();
            else
                return __vite_ssr_import_0__.ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale) != __vite_ssr_import_0__.ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
        },
        in(value, filter) {
            if (filter === undefined || filter === null || filter.length === 0) {
                return true;
            }
    
            for (let i = 0; i < filter.length; i++) {
                if (__vite_ssr_import_0__.ObjectUtils.equals(value, filter[i])) {
                    return true;
                }
            }
    
            return false;
        },
        between(value, filter) {
            if (filter == null || filter[0] == null || filter[1] == null) {
                return true;
            }
    
            if (value === undefined || value === null) {
                return false;
            }
    
            if (value.getTime)
            return filter[0].getTime() <= value.getTime() && value.getTime() <= filter[1].getTime();
            else
                return filter[0] <= value && value <= filter[1];
        },
        lt(value, filter) {
            if (filter === undefined || filter === null) {
                return true;
            }
    
            if (value === undefined || value === null) {
                return false;
            }
    
            if (value.getTime && filter.getTime)
                return value.getTime() < filter.getTime();
            else
                return value < filter;
        },
        lte(value, filter) {
            if (filter === undefined || filter === null) {
                return true;
            }
    
            if (value === undefined || value === null) {
                return false;
            }
    
            if (value.getTime && filter.getTime)
                return value.getTime() <= filter.getTime();
            else
                return value <= filter;
        },
        gt(value, filter) {
            if (filter === undefined || filter === null) {
                return true;
            }
    
            if (value === undefined || value === null) {
                return false;
            }
    
            if (value.getTime && filter.getTime)
                return value.getTime() > filter.getTime();
            else
                return value > filter;
        },
        gte(value, filter) {
            if (filter === undefined || filter === null) {
                return true;
            }
    
            if (value === undefined || value === null) {
                return false;
            }
    
            if (value.getTime && filter.getTime)
                return value.getTime() >= filter.getTime();
            else
                return value >= filter;
        },
        dateIs(value, filter) {
            if (filter === undefined || filter === null) {
                return true;
            }
    
            if (value === undefined || value === null) {
                return false;
            }

            return value.toDateString() === filter.toDateString();
        },
        dateIsNot(value, filter) {
            if (filter === undefined || filter === null) {
                return true;
            }
    
            if (value === undefined || value === null) {
                return false;
            }

            return value.toDateString() !== filter.toDateString();
        },
        dateBefore(value, filter) {
            if (filter === undefined || filter === null) {
                return true;
            }
    
            if (value === undefined || value === null) {
                return false;
            }

            return value.getTime() < filter.getTime();
        },
        dateAfter(value, filter) {
            if (filter === undefined || filter === null) {
                return true;
            }
    
            if (value === undefined || value === null) {
                return false;
            }

            return value.getTime() > filter.getTime();
        }
    },
    register(rule, fn) {
        this.filters[rule] = fn;
    }
};

const PrimeIcons = {
    ALIGN_CENTER:'pi pi-align-center',
    ALIGN_JUSTIFY:'pi pi-align-justify',
    ALIGN_LEFT:'pi pi-align-left',
    ALIGN_RIGHT:'pi pi-align-right',
    AMAZON:'pi pi-amazon',
    ANDROID:'pi pi-android',
    ANGLE_DOUBLE_DOWN:'pi pi-angle-double-down',
    ANGLE_DOUBLE_LEFT:'pi pi-angle-double-left',
    ANGLE_DOUBLE_RIGHT:'pi pi-angle-double-right',
    ANGLE_DOUBLE_UP:'pi pi-angle-double-up',
    ANGLE_DOWN:'pi pi-angle-down',
    ANGLE_LEFT:'pi pi-angle-left',
    ANGLE_RIGHT:'pi pi-angle-right',
    ANGLE_UP:'pi pi-angle-up',
    APPLE:'pi pi-apple',
    ARROW_CIRCLE_DOWN:'pi pi-arrow-circle-down',
    ARROW_CIRCLE_LEFT:'pi pi-arrow-circle-left',
    ARROW_CIRCLE_RIGHT:'pi pi-arrow-circle-right',
    ARROW_CIRCLE_UP:'pi pi-arrow-circle-up',
    ARROW_DOWN:'pi pi-arrow-down',
    ARROW_DOWN_LEFT:'pi pi-arrow-down-left',
    ARROW_DOWN_RIGHT:'pi pi-arrow-down-right',
    ARROW_LEFT:'pi pi-arrow-left',
    ARROW_RIGHT:'pi pi-arrow-right',
    ARROW_UP:'pi pi-arrow-up',
    ARROW_UP_LEFT:'pi pi-arrow-up-left',
    ARROW_UP_RIGHT:'pi pi-arrow-up-right',
    ARROW_H:'pi pi-arrow-h',
    ARROW_V:'pi pi-arrow-v',
    AT:'pi pi-at',
    BACKWARD:'pi pi-backward',
    BAN:'pi pi-ban',
    BARS:'pi pi-bars',
    BELL:'pi pi-bell',
    BOLT:'pi pi-bolt',
    BOOK:'pi pi-book',
    BOOKMARK:'pi pi-bookmark',
    BOOKMARK_FILL:'pi pi-bookmark-fill',
    BOX:'pi pi-box',
    BRIEFCASE:'pi pi-briefcase',
    BUILDING:'pi pi-building',
    CALENDAR:'pi pi-calendar',
    CALENDAR_MINUS:'pi pi-calendar-minus',
    CALENDAR_PLUS:'pi pi-calendar-plus',
    CALENDAR_TIMES:'pi pi-calendar-times',
    CAMERA:'pi pi-camera',
    CAR:'pi pi-car',
    CARET_DOWN:'pi pi-caret-down',
    CARET_LEFT:'pi pi-caret-left',
    CARET_RIGHT:'pi pi-caret-right',
    CARET_UP:'pi pi-caret-up',
    CHART_BAR:'pi pi-chart-bar',
    CHART_LINE:'pi pi-chart-line',
    CHART_PIE:'pi pi-chart-pie',
    CHECK:'pi pi-check',
    CHECK_CIRCLE:'pi pi-check-circle',
    CHECK_SQUARE:'pi pi-check-square',
    CHEVRON_CIRCLE_DOWN:'pi pi-chevron-circle-down',
    CHEVRON_CIRCLE_LEFT:'pi pi-chevron-circle-left',
    CHEVRON_CIRCLE_RIGHT:'pi pi-chevron-circle-right',
    CHEVRON_CIRCLE_UP:'pi pi-chevron-circle-up',
    CHEVRON_DOWN:'pi pi-chevron-down',
    CHEVRON_LEFT:'pi pi-chevron-left',
    CHEVRON_RIGHT:'pi pi-chevron-right',
    CHEVRON_UP:'pi pi-chevron-up',
    CIRCLE:'pi pi-circle',
    CIRCLE_FILL:'pi pi-circle-fill',
    CLOCK:'pi pi-clock',
    CLONE:'pi pi-clone',
    CLOUD:'pi pi-cloud',
    CLOUD_DOWNLOAD:'pi pi-cloud-download',
    CLOUD_UPLOAD:'pi pi-cloud-upload',
    CODE:'pi pi-code',
    COG:'pi pi-cog',
    COMMENT:'pi pi-comment',
    COMMENTS:'pi pi-comments',
    COMPASS:'pi pi-compass',
    COPY:'pi pi-copy',
    CREDIT_CARD:'pi pi-credit-card',
    DATABASE:'pi pi-database',
    DESKTOP:'pi pi-desktop',
    DIRECTIONS:'pi pi-directions',
    DIRECTIONS_ALT:'pi pi-directions-alt',
    DISCORD:'pi pi-discord',
    DOLLAR:'pi pi-dollar',
    DOWNLOAD:'pi pi-download',
    EJECT:'pi pi-eject',
    ELLIPSIS_H:'pi pi-ellipsis-h',
    ELLIPSIS_V:'pi pi-ellipsis-v',
    ENVELOPE:'pi pi-envelope',
    EURO:'pi pi-euro',
    EXCLAMATION_CIRCLE:'pi pi-exclamation-circle',
    EXCLAMATION_TRIANGLE :'pi pi-exclamation-triangle',
    EXTERNAL_LINK:'pi pi-external-link',
    EYE:'pi pi-eye',
    EYE_SLASH:'pi pi-eye-slash',
    FACEBOOK:'pi pi-facebook',
    FAST_BACKWARD:'pi pi-fast-backward',
    FAST_FORWARD:'pi pi-fast-forward',
    FILE:'pi pi-file',
    FILE_EXCEL:'pi pi-file-excel',
    FILE_PDF:'pi pi-file-pdf',
    FILTER:'pi pi-filter',
    FILTER_FILL:'pi pi-filter-fill',
    FILTER_SLASH:'pi pi-filter-slash',
    FLAG:'pi pi-flag',
    FLAG_FILL:'pi pi-flag-fill',
    FOLDER:'pi pi-folder',
    FOLDER_OPEN:'pi pi-folder-open',
    FORWARD:'pi pi-forward',
    GITHUB:'pi pi-github',
    GLOBE:'pi pi-globe',
    GOOGLE:'pi pi-google',
    HASHTAG:'pi pi-hashtag',
    HEART:'pi pi-heart',
    HEART_FILL:'pi pi-heart-fill',
    HISTORY:'pi pi-history',
    HOME:'pi pi-home',
    ID_CARD:'pi pi-id-card',
    IMAGE:'pi pi-image',
    IMAGES:'pi pi-images',
    INBOX:'pi pi-inbox',
    INFO:'pi pi-info',
    INFO_CIRCLE:'pi pi-info-circle',
    INSTAGRAM:'pi pi-instagram',
    KEY:'pi pi-key',
    LINK:'pi pi-link',
    LINKEDIN:'pi pi-linkedin',
    LIST:'pi pi-list',
    LOCK:'pi pi-lock',
    LOCK_OPEN:'pi pi-lock-open',
    MAP:'pi pi-map',
    MAP_MARKER:'pi pi-map-marker',
    MICROSOFT:'pi pi-microsoft',
    MINUS:'pi pi-minus',
    MINUS_CIRCLE:'pi pi-minus-circle',
    MOBILE:'pi pi-mobile',
    MONEY_BILL:'pi pi-money-bill',
    MOON:'pi pi-moon',
    PALETTE:'pi pi-palette',
    PAPERCLIP:'pi pi-paperclip',
    PAUSE:'pi pi-pause',
    PAYPAL:'pi pi-paypal',
    PENCIL:'pi pi-pencil',
    PERCENTAGE:'pi pi-percentage',
    PHONE:'pi pi-phone',
    PLAY:'pi pi-play',
    PLUS:'pi pi-plus',
    PLUS_CIRCLE:'pi pi-plus-circle',
    POUND:'pi pi-pound',
    POWER_OFF:'pi pi-power-off',
    PRIME:'pi pi-prime',
    PRINT:'pi pi-print',
    QRCODE:'pi pi-qrcode',
    QUESTION:'pi pi-question',
    QUESTION_CIRCLE:'pi pi-question-circle',
    REDDIT:'pi pi-reddit',
    REFRESH:'pi pi-refresh',
    REPLAY:'pi pi-replay',
    REPLY:'pi pi-reply',
    SAVE:'pi pi-save',
    SEARCH:'pi pi-search',
    SEARCH_MINUS:'pi pi-search-minus',
    SEARCH_PLUS:'pi pi-search-plus',
    SEND:'pi pi-send',
    SERVER:'pi pi-server',
    SHARE_ALT:'pi pi-share-alt',
    SHIELD:'pi pi-shield',
    SHOPPING_BAG:'pi pi-shopping-bag',
    SHOPPING_CART:'pi pi-shopping-cart',
    SIGN_IN:'pi pi-sign-in',
    SIGN_OUT:'pi pi-sign-out',
    SITEMAP:'pi pi-sitemap',
    SLACK:'pi pi-slack',
    SLIDERS_H:'pi pi-sliders-h',
    SLIDERS_V:'pi pi-sliders-v',
    SORT:'pi pi-sort',
    SORT_ALPHA_DOWN:'pi pi-sort-alpha-down',
    SORT_ALPHA_ALT_DOWN:'pi pi-sort-alpha-alt-down',
    SORT_ALPHA_UP:'pi pi-sort-alpha-up',
    SORT_ALPHA_ALT_UP:'pi pi-sort-alpha-alt-up',
    SORT_ALT:'pi pi-sort-alt',
    SORT_ALT_SLASH:'pi pi-sort-slash',
    SORT_AMOUNT_DOWN:'pi pi-sort-amount-down',
    SORT_AMOUNT_DOWN_ALT:'pi pi-sort-amount-down-alt',
    SORT_AMOUNT_UP:'pi pi-sort-amount-up',
    SORT_AMOUNT_UP_ALT:'pi pi-sort-amount-up-alt',
    SORT_DOWN:'pi pi-sort-down',
    SORT_NUMERIC_DOWN:'pi pi-sort-numeric-down',
    SORT_NUMERIC_ALT_DOWN:'pi pi-sort-numeric-alt-down',
    SORT_NUMERIC_UP:'pi pi-sort-numeric-up',
    SORT_NUMERIC_ALT_UP:'pi pi-sort-numeric-alt-up',
    SORT_UP:'pi pi-sort-up',
    SPINNER:'pi pi-spinner',
    STAR:'pi pi-star',
    STAR_FILL:'pi pi-star-fill',
    STEP_BACKWARD:'pi pi-step-backward',
    STEP_BACKWARD_ALT:'pi pi-step-backward-alt',
    STEP_FORWARD:'pi pi-step-forward',
    STEP_FORWARD_ALT:'pi pi-step-forward-alt',
    STOP:'pi pi-stop',
    STOP_CIRCLE:'pi pi-stop-circle',
    SUN:'pi pi-sun',
    SYNC:'pi pi-sync',
    TABLE:'pi pi-table',
    TABLET:'pi pi-tablet',
    TAG:'pi pi-tag',
    TAGS:'pi pi-tags',
    TELEGRAM:'pi pi-telegram',
    TH_LARGE:'pi pi-th-large',
    THUMBS_DOWN:'pi pi-thumbs-down',
    THUMBS_UP:'pi pi-thumbs-up',
    TICKET:'pi pi-ticket',
    TIMES:'pi pi-times',
    TIMES_CIRCLE:'pi pi-times-circle',
    TRASH:'pi pi-trash',
    TWITTER:'pi pi-twitter',
    UNDO:'pi pi-undo',
    UNLOCK:'pi pi-unlock',
    UPLOAD:'pi pi-upload',
    USER:'pi pi-user',
    USER_EDIT:'pi pi-user-edit',
    USER_MINUS:'pi pi-user-minus',
    USER_PLUS:'pi pi-user-plus',
    USERS:'pi pi-users',
    VIDEO:'pi pi-video',
    VIMEO:'pi pi-vimeo',
    VOLUME_DOWN:'pi pi-volume-down',
    VOLUME_OFF:'pi pi-volume-off',
    VOLUME_UP:'pi pi-volume-up',
    WALLET:'pi pi-wallet',
    WHATSAPP:'pi pi-whatsapp',
    WIFI:'pi pi-wifi',
    WINDOW_MAXIMIZE:'pi pi-window-maximize',
    WINDOW_MINIMIZE:'pi pi-window-minimize',
    YOUTUBE:'pi pi-youtube'
};

const ToastSeverities = {
    INFO: 'info',
    WARN: 'warn',
    ERROR: 'error',
    SUCCESS: 'success'
};


Object.defineProperty(__vite_ssr_exports__, "FilterMatchMode", { enumerable: true, configurable: true, get(){ return FilterMatchMode }});
Object.defineProperty(__vite_ssr_exports__, "FilterOperator", { enumerable: true, configurable: true, get(){ return FilterOperator }});
Object.defineProperty(__vite_ssr_exports__, "FilterService", { enumerable: true, configurable: true, get(){ return FilterService }});
Object.defineProperty(__vite_ssr_exports__, "PrimeIcons", { enumerable: true, configurable: true, get(){ return PrimeIcons }});
Object.defineProperty(__vite_ssr_exports__, "ToastSeverity", { enumerable: true, configurable: true, get(){ return ToastSeverities }});
;
}


// --------------------
// Request: /node_modules/primevue/utils/utils.esm.js
// Parents: 
// - /node_modules/primevue/api/api.esm.js ($id_556c0162)
// - /node_modules/primevue/ripple/ripple.esm.js ($id_eca4a5be)
// - /node_modules/primevue/menubar/menubar.esm.js ($id_1db5deaf)
// Dependencies: 

// --------------------
const $id_27066acc = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
var DomHandler = {

    innerWidth(el) {
        let width = el.offsetWidth;
        let style = getComputedStyle(el);

        width += parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
        return width;
    },

    width(el) {
        let width = el.offsetWidth;
        let style = getComputedStyle(el);

        width -= parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
        return width;
    },

    getWindowScrollTop() {
        let doc = document.documentElement;
        return (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    },

    getWindowScrollLeft() {
        let doc = document.documentElement;
        return (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
    },

    getOuterWidth(el, margin) {
        if (el) {
            let width = el.offsetWidth;

            if (margin) {
                let style = getComputedStyle(el);
                width += parseFloat(style.marginLeft) + parseFloat(style.marginRight);
            }

            return width;
        }
        else {
            return 0;
        }
    },

    getOuterHeight(el, margin) {
        if (el) {
            let height = el.offsetHeight;

            if (margin) {
                let style = getComputedStyle(el);
                height += parseFloat(style.marginTop) + parseFloat(style.marginBottom);
            }

            return height;
        }
        else {
            return 0;
        }
    },

    getClientHeight(el, margin) {
        if (el) {
            let height = el.clientHeight;

            if (margin) {
                let style = getComputedStyle(el);
                height += parseFloat(style.marginTop) + parseFloat(style.marginBottom);
            }

            return height;
        } else {
            return 0;
        }
    },

    getViewport() {
        let win = window,
            d = document,
            e = d.documentElement,
            g = d.getElementsByTagName('body')[0],
            w = win.innerWidth || e.clientWidth || g.clientWidth,
            h = win.innerHeight || e.clientHeight || g.clientHeight;

        return {width: w, height: h};
    },

    getOffset(el) {
        var rect = el.getBoundingClientRect();

        return {
            top: rect.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0),
            left: rect.left + (window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0),
        };
    },

    index(element) {
        let children = element.parentNode.childNodes;
        let num = 0;
        for (var i = 0; i < children.length; i++) {
            if (children[i] === element) return num;
            if (children[i].nodeType === 1) num++;
        }
        return -1;
    },

    addMultipleClasses(element, className) {
        if (element.classList) {
            let styles = className.split(' ');
            for (let i = 0; i < styles.length; i++) {
                element.classList.add(styles[i]);
            }

        }
        else {
            let styles = className.split(' ');
            for (let i = 0; i < styles.length; i++) {
                element.className += ' ' + styles[i];
            }
        }
    },

    addClass(element, className) {
        if (element.classList)
            element.classList.add(className);
        else
            element.className += ' ' + className;
    },

    removeClass(element, className) {
        if (element.classList)
            element.classList.remove(className);
        else
            element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    },

    hasClass(element, className) {
        if (element) {
            if (element.classList)
                return element.classList.contains(className);
            else
                return new RegExp('(^| )' + className + '( |$)', 'gi').test(element.className);
        }

        return false;
    },

    find(element, selector) {
        return element.querySelectorAll(selector);
    },

    findSingle(element, selector) {
        return element.querySelector(selector);
    },

    getHeight(el) {
        let height = el.offsetHeight;
        let style = getComputedStyle(el);

        height -= parseFloat(style.paddingTop) + parseFloat(style.paddingBottom) + parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);

        return height;
    },

    getWidth(el) {
        let width = el.offsetWidth;
        let style = getComputedStyle(el);

        width -= parseFloat(style.paddingLeft) + parseFloat(style.paddingRight) + parseFloat(style.borderLeftWidth) + parseFloat(style.borderRightWidth);

        return width;
    },

    absolutePosition(element, target) {
        let elementDimensions = element.offsetParent ? { width: element.offsetWidth, height: element.offsetHeight } : this.getHiddenElementDimensions(element);
        let elementOuterHeight = elementDimensions.height;
        let elementOuterWidth = elementDimensions.width;
        let targetOuterHeight = target.offsetHeight;
        let targetOuterWidth = target.offsetWidth;
        let targetOffset = target.getBoundingClientRect();
        let windowScrollTop = this.getWindowScrollTop();
        let windowScrollLeft = this.getWindowScrollLeft();
        let viewport = this.getViewport();
        let top, left;

        if (targetOffset.top + targetOuterHeight + elementOuterHeight > viewport.height) {
            top = targetOffset.top + windowScrollTop - elementOuterHeight;
            element.style.transformOrigin = 'bottom';

            if (top < 0) {
                top = windowScrollTop;
            }
        }
        else {
            top = targetOuterHeight + targetOffset.top + windowScrollTop;
            element.style.transformOrigin = 'top';
        }

        if (targetOffset.left + elementOuterWidth > viewport.width)
            left = Math.max(0, targetOffset.left + windowScrollLeft + targetOuterWidth - elementOuterWidth);
        else
            left = targetOffset.left + windowScrollLeft;

        element.style.top = top + 'px';
        element.style.left = left + 'px';
    },

    relativePosition(element, target) {
        let elementDimensions = element.offsetParent ? { width: element.offsetWidth, height: element.offsetHeight } : this.getHiddenElementDimensions(element);
        const targetHeight = target.offsetHeight;
        const targetOffset = target.getBoundingClientRect();
        const viewport = this.getViewport();
        let top, left;

        if ((targetOffset.top + targetHeight + elementDimensions.height) > viewport.height) {
            top = -1 * (elementDimensions.height);
            element.style.transformOrigin = 'bottom';
            if (targetOffset.top + top < 0) {
                top = -1 * targetOffset.top;
            }
        }
        else {
            top = targetHeight;
            element.style.transformOrigin = 'top';
        }

        if (elementDimensions.width > viewport.width) {
            // element wider then viewport and cannot fit on screen (align at left side of viewport)
            left = targetOffset.left * -1;
        }
        else if ((targetOffset.left + elementDimensions.width) > viewport.width) {
            // element wider then viewport but can be fit on screen (align at right side of viewport)
            left = (targetOffset.left + elementDimensions.width - viewport.width) * -1;
        }
        else {
            // element fits on screen (align with target)
            left = 0;
        }

        element.style.top = top + 'px';
        element.style.left = left + 'px';
    },

    getParents(element, parents = []) {
        return element['parentNode'] === null ? parents : this.getParents(element.parentNode, parents.concat([element.parentNode]));
    },

    getScrollableParents(element) {
        let scrollableParents = [];

        if (element) {
            let parents = this.getParents(element);
            const overflowRegex = /(auto|scroll)/;
            const overflowCheck = (node) => {
                let styleDeclaration = window['getComputedStyle'](node, null);
                return overflowRegex.test(styleDeclaration.getPropertyValue('overflow')) || overflowRegex.test(styleDeclaration.getPropertyValue('overflowX')) || overflowRegex.test(styleDeclaration.getPropertyValue('overflowY'));
            };

            for (let parent of parents) {
                let scrollSelectors = parent.nodeType === 1 && parent.dataset['scrollselectors'];
                if (scrollSelectors) {
                    let selectors = scrollSelectors.split(',');
                    for (let selector of selectors) {
                        let el = this.findSingle(parent, selector);
                        if (el && overflowCheck(el)) {
                            scrollableParents.push(el);
                        }
                    }
                }

                if (parent.nodeType !== 9 && overflowCheck(parent)) {
                    scrollableParents.push(parent);
                }
            }
        }

        return scrollableParents;
    },

    getHiddenElementOuterHeight(element) {
        element.style.visibility = 'hidden';
        element.style.display = 'block';
        let elementHeight = element.offsetHeight;
        element.style.display = 'none';
        element.style.visibility = 'visible';

        return elementHeight;
    },

    getHiddenElementOuterWidth(element) {
        element.style.visibility = 'hidden';
        element.style.display = 'block';
        let elementWidth = element.offsetWidth;
        element.style.display = 'none';
        element.style.visibility = 'visible';

        return elementWidth;
    },

    getHiddenElementDimensions(element) {
        var dimensions = {};
        element.style.visibility = 'hidden';
        element.style.display = 'block';
        dimensions.width = element.offsetWidth;
        dimensions.height = element.offsetHeight;
        element.style.display = 'none';
        element.style.visibility = 'visible';

        return dimensions;
    },

    fadeIn(element, duration) {
        element.style.opacity = 0;

        var last = +new Date();
        var opacity = 0;
        var tick = function () {
            opacity = +element.style.opacity + (new Date().getTime() - last) / duration;
            element.style.opacity = opacity;
            last = +new Date();

            if (+opacity < 1) {
                (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
            }
        };

        tick();
    },

    fadeOut(element, ms) {
        var opacity = 1,
            interval = 50,
            duration = ms,
            gap = interval / duration;

        let fading = setInterval(() => {
            opacity -= gap;

            if (opacity <= 0) {
                opacity = 0;
                clearInterval(fading);
            }

            element.style.opacity = opacity;
        }, interval);
    },

    getUserAgent() {
        return navigator.userAgent;
    },

    appendChild(element, target) {
        if(this.isElement(target))
            target.appendChild(element);
        else if(target.el && target.elElement)
            target.elElement.appendChild(element);
        else
            throw new Error('Cannot append ' + target + ' to ' + element);
    },

    scrollInView(container, item) {
        let borderTopValue = getComputedStyle(container).getPropertyValue('borderTopWidth');
        let borderTop = borderTopValue ? parseFloat(borderTopValue) : 0;
        let paddingTopValue = getComputedStyle(container).getPropertyValue('paddingTop');
        let paddingTop = paddingTopValue ? parseFloat(paddingTopValue) : 0;
        let containerRect = container.getBoundingClientRect();
        let itemRect = item.getBoundingClientRect();
        let offset = (itemRect.top + document.body.scrollTop) - (containerRect.top + document.body.scrollTop) - borderTop - paddingTop;
        let scroll = container.scrollTop;
        let elementHeight = container.clientHeight;
        let itemHeight = this.getOuterHeight(item);

        if (offset < 0) {
            container.scrollTop = scroll + offset;
        }
        else if ((offset + itemHeight) > elementHeight) {
            container.scrollTop = scroll + offset - elementHeight + itemHeight;
        }
    },

    clearSelection() {
        if(window.getSelection) {
            if(window.getSelection().empty) {
                window.getSelection().empty();
            } else if(window.getSelection().removeAllRanges && window.getSelection().rangeCount > 0 && window.getSelection().getRangeAt(0).getClientRects().length > 0) {
                window.getSelection().removeAllRanges();
            }
        }
        else if(document['selection'] && document['selection'].empty) {
            try {
                document['selection'].empty();
            } catch(error) {
                //ignore IE bug
            }
        }
    },

    calculateScrollbarWidth() {
        if(this.calculatedScrollbarWidth != null)
            return this.calculatedScrollbarWidth;

        let scrollDiv = document.createElement("div");
        scrollDiv.className = "p-scrollbar-measure";
        document.body.appendChild(scrollDiv);

        let scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        document.body.removeChild(scrollDiv);

        this.calculatedScrollbarWidth = scrollbarWidth;

        return scrollbarWidth;
    },

    getBrowser() {
        if(!this.browser) {
            let matched = this.resolveUserAgent();
            this.browser = {};

            if (matched.browser) {
                this.browser[matched.browser] = true;
                this.browser['version'] = matched.version;
            }

            if (this.browser['chrome']) {
                this.browser['webkit'] = true;
            } else if (this.browser['webkit']) {
                this.browser['safari'] = true;
            }
        }

        return this.browser;
    },

    resolveUserAgent() {
        let ua = navigator.userAgent.toLowerCase();
        let match = /(chrome)[ ]([\w.]+)/.exec(ua) ||
            /(webkit)[ ]([\w.]+)/.exec(ua) ||
            /(opera)(?:.*version|)[ ]([\w.]+)/.exec(ua) ||
            /(msie) ([\w.]+)/.exec(ua) ||
            (ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua)) ||
            [];

        return {
            browser: match[1] || "",
            version: match[2] || "0"
        };
    },

    isVisible(element) {
        return element.offsetParent != null;
    },

    invokeElementMethod(element, methodName, args) {
        (element)[methodName].apply(element, args);
    },

    getFocusableElements(element) {
        let focusableElements = this.find(element, `button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]),
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]),
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]), select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]),
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]), [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]),
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`
            );

        let visibleFocusableElements = [];
        for (let focusableElement of focusableElements) {
            if (getComputedStyle(focusableElement).display != "none" && getComputedStyle(focusableElement).visibility != "hidden")
                visibleFocusableElements.push(focusableElement);
        }

        return visibleFocusableElements;
    },

    getFirstFocusableElement(element) {
        const focusableElements = this.getFocusableElements(element);
        return focusableElements.length > 0 ? focusableElements[0] : null;
    },

    isClickable(element) {
        const targetNode = element.nodeName;
        const parentNode = element.parentElement && element.parentElement.nodeName;

        return (targetNode == 'INPUT' || targetNode == 'BUTTON' || targetNode == 'A' ||
                parentNode == 'INPUT' || parentNode == 'BUTTON' || parentNode == 'A' ||
                this.hasClass(element, 'p-button') || this.hasClass(element.parentElement, 'p-button') ||
                this.hasClass(element.parentElement, 'p-checkbox') || this.hasClass(element.parentElement, 'p-radiobutton')
        );
    },

    applyStyle(element, style) {
        if (typeof style === 'string') {
            element.style.cssText = style;
        }
        else {
            for (let prop in style) {
                element.style[prop] = style[prop];
            }
        }
    },

    isIOS() {
        return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window['MSStream'];
    },

    isAndroid() {
        return /(android)/i.test(navigator.userAgent);
    },

    isTouchDevice() {
        return (('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
    },

    exportCSV(csv, filename) {
        let blob = new Blob([csv], {
            type: 'application/csv;charset=utf-8;'
        });

        if (window.navigator.msSaveOrOpenBlob) {
            navigator.msSaveOrOpenBlob(blob, filename + '.csv');
        }
        else {
            let link = document.createElement("a");
            if (link.download !== undefined) {
                link.setAttribute('href', URL.createObjectURL(blob));
                link.setAttribute('download', filename + '.csv');
                link.style.display = 'none';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
            else {
                csv = 'data:text/csv;charset=utf-8,' + csv;
                window.open(encodeURI(csv));
            }
        }
    }
};

class ConnectedOverlayScrollHandler {

    constructor(element, listener = () => {}) {
        this.element = element;
        this.listener = listener;
    }

    bindScrollListener() {
        this.scrollableParents = DomHandler.getScrollableParents(this.element);
        for (let i = 0; i < this.scrollableParents.length; i++) {
            this.scrollableParents[i].addEventListener('scroll', this.listener);
        }
    }

    unbindScrollListener() {
        if (this.scrollableParents) {
            for (let i = 0; i < this.scrollableParents.length; i++) {
                this.scrollableParents[i].removeEventListener('scroll', this.listener);
            }
        }
    }

    destroy() {
        this.unbindScrollListener();
        this.element = null;
        this.listener = null;
        this.scrollableParents = null;
    }
}

var ObjectUtils = {

    equals(obj1, obj2, field) {
        if (field)
            return (this.resolveFieldData(obj1, field) === this.resolveFieldData(obj2, field));
        else
            return this.deepEquals(obj1, obj2);
    },

    deepEquals(a, b) {
        if (a === b) return true;

        if (a && b && typeof a == 'object' && typeof b == 'object') {
            var arrA = Array.isArray(a)
                , arrB = Array.isArray(b)
                , i
                , length
                , key;

            if (arrA && arrB) {
                length = a.length;
                if (length != b.length) return false;
                for (i = length; i-- !== 0;)
                    if (!this.deepEquals(a[i], b[i])) return false;
                return true;
            }

            if (arrA != arrB) return false;

            var dateA = a instanceof Date
                , dateB = b instanceof Date;
            if (dateA != dateB) return false;
            if (dateA && dateB) return a.getTime() == b.getTime();

            var regexpA = a instanceof RegExp
                , regexpB = b instanceof RegExp;
            if (regexpA != regexpB) return false;
            if (regexpA && regexpB) return a.toString() == b.toString();

            var keys = Object.keys(a);
            length = keys.length;

            if (length !== Object.keys(b).length)
                return false;

            for (i = length; i-- !== 0;)
                if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

            for (i = length; i-- !== 0;) {
                key = keys[i];
                if (!this.deepEquals(a[key], b[key])) return false;
            }

            return true;
        }

        return a !== a && b !== b;
    },

    resolveFieldData(data, field) {
        if (data && Object.keys(data).length && field) {
            if (this.isFunction(field)) {
                return field(data);
            }
            else if(field.indexOf('.') === -1) {
                return data[field];
            }
            else {
                let fields = field.split('.');
                let value = data;
                for(var i = 0, len = fields.length; i < len; ++i) {
                    if (value == null) {
                        return null;
                    }
                    value = value[fields[i]];
                }
                return value;
            }
        }
        else {
            return null;
        }
    },

    isFunction(obj) {
        return !!(obj && obj.constructor && obj.call && obj.apply);
    },

    filter(value, fields, filterValue) {
        var filteredItems = [];

        if (value) {
            for (let item of value) {
                for (let field of fields) {
                    if (String(this.resolveFieldData(item, field)).toLowerCase().indexOf(filterValue.toLowerCase()) > -1) {
                        filteredItems.push(item);
                        break;
                    }
                }
            }
        }

        return filteredItems;
    },

    reorderArray(value, from, to) {
        let target;
        if (value && (from !== to)) {
            if (to >= value.length) {
                target = to - value.length;
                while ((target--) + 1) {
                    value.push(undefined);
                }
            }
            value.splice(to, 0, value.splice(from, 1)[0]);
        }
    },

    findIndexInList(value, list) {
        let index = -1;

        if (list) {
            for (let i = 0; i < list.length; i++) {
                if (list[i] === value) {
                    index = i;
                    break;
                }
            }
        }

        return index;
    },

    contains(value, list) {
        if (value != null && list && list.length) {
            for (let val of list) {
                if (this.equals(value, val))
                    return true;
            }
        }

        return false;
    },

    insertIntoOrderedArray(item, index, arr, sourceArr) {
        if (arr.length > 0) {
            let injected = false;
            for (let i = 0; i < arr.length; i++) {
                let currentItemIndex = this.findIndexInList(arr[i], sourceArr);
                if (currentItemIndex > index) {
                    arr.splice(i, 0, item);
                    injected = true;
                    break;
                }
            }

            if (!injected) {
                arr.push(item);
            }
        }
        else {
            arr.push(item);
        }
    },

    removeAccents(str) {
        if (str && str.search(/[\xC0-\xFF]/g) > -1) {
            str = str
                    .replace(/[\xC0-\xC5]/g, "A")
                    .replace(/[\xC6]/g, "AE")
                    .replace(/[\xC7]/g, "C")
                    .replace(/[\xC8-\xCB]/g, "E")
                    .replace(/[\xCC-\xCF]/g, "I")
                    .replace(/[\xD0]/g, "D")
                    .replace(/[\xD1]/g, "N")
                    .replace(/[\xD2-\xD6\xD8]/g, "O")
                    .replace(/[\xD9-\xDC]/g, "U")
                    .replace(/[\xDD]/g, "Y")
                    .replace(/[\xDE]/g, "P")
                    .replace(/[\xE0-\xE5]/g, "a")
                    .replace(/[\xE6]/g, "ae")
                    .replace(/[\xE7]/g, "c")
                    .replace(/[\xE8-\xEB]/g, "e")
                    .replace(/[\xEC-\xEF]/g, "i")
                    .replace(/[\xF1]/g, "n")
                    .replace(/[\xF2-\xF6\xF8]/g, "o")
                    .replace(/[\xF9-\xFC]/g, "u")
                    .replace(/[\xFE]/g, "p")
                    .replace(/[\xFD\xFF]/g, "y");
        }

        return str;
    },

    getVNodeProp(vnode, prop) {
        let props = vnode.props;
        if (props) {
            let kebapProp = prop.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
            let propName = Object.prototype.hasOwnProperty.call(props, kebapProp) ? kebapProp : prop;

            return ((vnode.type.props[prop].type === Boolean && props[propName] === '') ? true : props[propName]);
        }

        return null;
    },

    isEmpty(value) {
        return (
            value === null || value === undefined || value === '' ||
            (Array.isArray(value) && value.length === 0) ||
            (!(value instanceof Date) && typeof value === 'object' && Object.keys(value).length === 0)
        );
    },

    isNotEmpty(value) {
        return !this.isEmpty(value);
    }

};

function handler() {
    let zIndexes = [];

    const generateZIndex = (key, baseZIndex) => {
        let lastZIndex = zIndexes.length > 0 ? zIndexes[zIndexes.length - 1] : { key, value: baseZIndex };
        let newZIndex = lastZIndex.value + (lastZIndex.key === key ? 0 : baseZIndex) + 1;

        zIndexes.push({ key, value: newZIndex });
        return newZIndex;
    };

    const revertZIndex = (zIndex) => {
        zIndexes = zIndexes.filter(obj => obj.value !== zIndex);
    };

    const getCurrentZIndex = () => {
        return zIndexes.length > 0 ? zIndexes[zIndexes.length - 1].value : 0;
    };

    const getZIndex = (el) => {
        return el ? parseInt(el.style.zIndex, 10) || 0 : 0
    };

    return {
        get: getZIndex,
        set: (key, el, baseZIndex) => {
            if (el) {
                el.style.zIndex = String(generateZIndex(key, baseZIndex));
            }
        },
        clear: (el) => {
            if (el) {
                revertZIndex(getZIndex(el));
                el.style.zIndex = '';
            }
        },
        getCurrent: () => getCurrentZIndex()
    };
}

var ZIndexUtils = handler();

var lastId = 0;

function UniqueComponentId (prefix = 'pv_id_') {
    lastId++;
    return `${prefix}${lastId}`;
}

function primebus() {
	const allHandlers = new Map();

	return {
		on(type, handler) {
			let handlers = allHandlers.get(type);
            if (!handlers)
                handlers = [handler];
            else
                handlers.push(handler);

            allHandlers.set(type, handlers);
		},

		off(type, handler) {
			let handlers = allHandlers.get(type);
			if (handlers) {
				handlers.splice(handlers.indexOf(handler) >>> 0, 1);
			}
		},

		emit(type, evt) {
            let handlers = allHandlers.get(type);
            if (handlers) {
                handlers.slice().map((handler) => { handler(evt);});
            }
		}
	};
}


Object.defineProperty(__vite_ssr_exports__, "ConnectedOverlayScrollHandler", { enumerable: true, configurable: true, get(){ return ConnectedOverlayScrollHandler }});
Object.defineProperty(__vite_ssr_exports__, "DomHandler", { enumerable: true, configurable: true, get(){ return DomHandler }});
Object.defineProperty(__vite_ssr_exports__, "EventBus", { enumerable: true, configurable: true, get(){ return primebus }});
Object.defineProperty(__vite_ssr_exports__, "ObjectUtils", { enumerable: true, configurable: true, get(){ return ObjectUtils }});
Object.defineProperty(__vite_ssr_exports__, "UniqueComponentId", { enumerable: true, configurable: true, get(){ return UniqueComponentId }});
Object.defineProperty(__vite_ssr_exports__, "ZIndexUtils", { enumerable: true, configurable: true, get(){ return ZIndexUtils }});
;
}


// --------------------
// Request: /node_modules/primevue/button/button.esm.js
// Parents: 
// - /plugins/primevue.ts ($id_934480b9)
// Dependencies: 
// - /node_modules/primevue/ripple/ripple.esm.js ($id_eca4a5be)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_9578581f = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/primevue/ripple/ripple.esm.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


var script = {
    name: 'Button',
    props: {
        label: {
            type: String
        },
        icon: {
            type: String
        },
        iconPos: {
            type: String,
            default: 'left'
        },
        badge: {
            type: String
        },
        badgeClass: {
            type: String,
            default: null
        },
        loading: {
            type: Boolean,
            default: false
        },
        loadingIcon: {
            type: String,
            default: 'pi pi-spinner pi-spin'
        }
    },
    computed: {
        buttonClass() {
            return {
                'p-button p-component': true,
                'p-button-icon-only': this.icon && !this.label,
                'p-button-vertical': (this.iconPos === 'top' || this.iconPos === 'bottom') && this.label,
                'p-disabled': this.$attrs.disabled || this.loading,
                'p-button-loading': this.loading,
                'p-button-loading-label-only': this.loading && !this.icon && this.label
            }
        },
        iconClass() {
            return [
                this.loading ? 'p-button-loading-icon ' + this.loadingIcon : this.icon,
                'p-button-icon',
                {
                    'p-button-icon-left': this.iconPos === 'left' && this.label,
                    'p-button-icon-right': this.iconPos === 'right' && this.label,
                    'p-button-icon-top': this.iconPos === 'top' && this.label,
                    'p-button-icon-bottom': this.iconPos === 'bottom' && this.label
                }
            ]
        },
        badgeStyleClass() {
            return [
                'p-badge p-component', this.badgeClass, {
                'p-badge-no-gutter': this.badge && String(this.badge).length === 1
            }]
        },
        disabled() {
            return this.$attrs.disabled || this.loading;
        }
    },
    directives: {
        'ripple': __vite_ssr_import_0__.default
    }
};

const _hoisted_1 = { class: "p-button-label" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_ripple = __vite_ssr_import_1__.resolveDirective("ripple");

  return __vite_ssr_import_1__.withDirectives((__vite_ssr_import_1__.openBlock(), __vite_ssr_import_1__.createBlock("button", {
    class: $options.buttonClass,
    type: "button",
    disabled: $options.disabled
  }, [
    __vite_ssr_import_1__.renderSlot(_ctx.$slots, "default", {}, () => [
      ($props.loading && !$props.icon)
        ? (__vite_ssr_import_1__.openBlock(), __vite_ssr_import_1__.createBlock("span", {
            key: 0,
            class: $options.iconClass
          }, null, 2))
        : __vite_ssr_import_1__.createCommentVNode("", true),
      ($props.icon)
        ? (__vite_ssr_import_1__.openBlock(), __vite_ssr_import_1__.createBlock("span", {
            key: 1,
            class: $options.iconClass
          }, null, 2))
        : __vite_ssr_import_1__.createCommentVNode("", true),
      __vite_ssr_import_1__.createVNode("span", _hoisted_1, __vite_ssr_import_1__.toDisplayString($props.label||' '), 1),
      ($props.badge)
        ? (__vite_ssr_import_1__.openBlock(), __vite_ssr_import_1__.createBlock("span", {
            key: 2,
            class: $options.badgeStyleClass
          }, __vite_ssr_import_1__.toDisplayString($props.badge), 3))
        : __vite_ssr_import_1__.createCommentVNode("", true)
    ])
  ], 10, ["disabled"])), [
    [_directive_ripple]
  ])
}

script.render = render;


Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return script }});
;
}


// --------------------
// Request: /node_modules/primevue/ripple/ripple.esm.js
// Parents: 
// - /node_modules/primevue/button/button.esm.js ($id_9578581f)
// - /node_modules/primevue/menubar/menubar.esm.js ($id_1db5deaf)
// Dependencies: 
// - /node_modules/primevue/utils/utils.esm.js ($id_27066acc)
// --------------------
const $id_eca4a5be = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/primevue/utils/utils.esm.js");


function bindEvents(el) {
    el.addEventListener('mousedown', onMouseDown);
}

function unbindEvents(el) {
    el.removeEventListener('mousedown', onMouseDown);
}

function create(el) {
    let ink = document.createElement('span');
    ink.className = 'p-ink';
    el.appendChild(ink);

    ink.addEventListener('animationend', onAnimationEnd);
}

function remove(el) {
    let ink = getInk(el);
    if (ink) {
        unbindEvents(el);
        ink.removeEventListener('animationend', onAnimationEnd);
        ink.remove();
    }
}

function onMouseDown(event) {
    let target = event.currentTarget;
    let ink = getInk(target);
    if (!ink || getComputedStyle(ink, null).display === 'none') {
        return;
    }

    __vite_ssr_import_0__.DomHandler.removeClass(ink, 'p-ink-active');
    if (!__vite_ssr_import_0__.DomHandler.getHeight(ink) && !__vite_ssr_import_0__.DomHandler.getWidth(ink)) {
        let d = Math.max(__vite_ssr_import_0__.DomHandler.getOuterWidth(target), __vite_ssr_import_0__.DomHandler.getOuterHeight(target));
        ink.style.height = d + 'px';
        ink.style.width = d + 'px';
    }

    let offset = __vite_ssr_import_0__.DomHandler.getOffset(target);
    let x = event.pageX - offset.left + document.body.scrollTop - __vite_ssr_import_0__.DomHandler.getWidth(ink) / 2;
    let y = event.pageY - offset.top + document.body.scrollLeft - __vite_ssr_import_0__.DomHandler.getHeight(ink) / 2;

    ink.style.top = y + 'px';
    ink.style.left = x + 'px';
    __vite_ssr_import_0__.DomHandler.addClass(ink, 'p-ink-active');
}

function onAnimationEnd(event) {
    __vite_ssr_import_0__.DomHandler.removeClass(event.currentTarget, 'p-ink-active');
}

function getInk(el) {
    for (let i = 0; i < el.children.length; i++) {
        if (typeof el.children[i].className === 'string' && el.children[i].className.indexOf('p-ink') !== -1) {
            return el.children[i];
        }
    }
    return null;
}

const Ripple = {
    mounted(el, binding) {
        if (binding.instance.$primevue && binding.instance.$primevue.config && binding.instance.$primevue.config.ripple) {
            create(el);
            bindEvents(el);
        }
    },
    unmounted(el) {
        remove(el);
    }
};


Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return Ripple }});
;
}


// --------------------
// Request: /node_modules/primevue/menubar/menubar.esm.js
// Parents: 
// - /plugins/primevue.ts ($id_934480b9)
// Dependencies: 
// - /node_modules/primevue/utils/utils.esm.js ($id_27066acc)
// - /node_modules/primevue/ripple/ripple.esm.js ($id_eca4a5be)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_1db5deaf = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/primevue/utils/utils.esm.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/primevue/ripple/ripple.esm.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


var script$1 = {
    name: 'MenubarSub',
    emits: ['keydown-item', 'leaf-click'],
    props: {
        model: {
            type: Array,
            default: null
        },
        root: {
            type: Boolean,
            default: false
        },
        popup: {
            type: Boolean,
            default: false
        },
        parentActive: {
            type: Boolean,
            default: false
        },
        mobileActive: {
            type: Boolean,
            default: false
        },
        template: {
            type: Function,
            default: null
        },
        exact: {
            type: Boolean,
            default: true
        }
    },
    documentClickListener: null,
    watch: {
        parentActive(newValue) {
            if (!newValue) {
                this.activeItem = null;
            }
        }
    },
    data() {
        return {
            activeItem: null
        }
    },
    updated() {
        if (this.root && this.activeItem) {
            this.bindDocumentClickListener();
        }
    },
    beforeUnmount() {
        this.unbindDocumentClickListener();
    },
    methods: {
        onItemMouseEnter(event, item) {
            if (this.disabled(item) || this.mobileActive) {
                event.preventDefault();
                return;
            }

            if (this.root) {
                if (this.activeItem || this.popup) {
                    this.activeItem = item;
                }
            }
            else {
                this.activeItem = item;
            }
        },
        onItemClick(event, item, navigate) {
            if (this.disabled(item)) {
                event.preventDefault();
                return;
            }

            if (item.command) {
                item.command({
                    originalEvent: event,
                    item: item
                });
            }

            if (item.items) {
                if (this.activeItem && item === this.activeItem)
                    this.activeItem = null;
                else
                   this.activeItem = item;
            }

            if (!item.items) {
                this.onLeafClick();
            }

            if (item.to && navigate) {
                navigate(event);
            }
        },
        onLeafClick() {
            this.activeItem = null;
            this.$emit('leaf-click');
        },
        onItemKeyDown(event, item) {
            let listItem = event.currentTarget.parentElement;

            switch(event.which) {
                //down
                case 40:
                    if (this.root) {
                        if (item.items) {
                            this.expandSubmenu(item, listItem);
                        }
                    }
                    else {
                        this.navigateToNextItem(listItem);
                    }

                    event.preventDefault();
                break;

                //up
                case 38:
                    if (!this.root) {
                        this.navigateToPrevItem(listItem);
                    }

                    event.preventDefault();
                break;

                //right
                case 39:
                    if (this.root) {
                        var nextItem = this.findNextItem(listItem);
                        if (nextItem) {
                            nextItem.children[0].focus();
                        }
                    }
                    else {
                        if (item.items) {
                            this.expandSubmenu(item, listItem);
                        }
                    }

                    event.preventDefault();
                break;

                //left
                case 37:
                    if (this.root) {
                        this.navigateToPrevItem(listItem);
                    }

                    event.preventDefault();
                break;
            }

            this.$emit('keydown-item', {
                originalEvent: event,
                element: listItem
            });
        },
        onChildItemKeyDown(event) {
            if (this.root) {
                //up
                if (event.originalEvent.which === 38 && event.element.previousElementSibling == null) {
                    this.collapseMenu(event.element);
                }
            }
            else {
                //left
                if (event.originalEvent.which === 37) {
                    this.collapseMenu(event.element);
                }
            }
        },
        findNextItem(item) {
            let nextItem = item.nextElementSibling;

            if (nextItem)
                return __vite_ssr_import_0__.DomHandler.hasClass(nextItem, 'p-disabled') || !__vite_ssr_import_0__.DomHandler.hasClass(nextItem, 'p-menuitem') ? this.findNextItem(nextItem) : nextItem;
            else
                return null;
        },
        findPrevItem(item) {
            let prevItem = item.previousElementSibling;

            if (prevItem)
                return __vite_ssr_import_0__.DomHandler.hasClass(prevItem, 'p-disabled') || !__vite_ssr_import_0__.DomHandler.hasClass(prevItem, 'p-menuitem') ? this.findPrevItem(prevItem) : prevItem;
            else
                return null;
        },
        expandSubmenu(item, listItem) {
            this.activeItem = item;

            setTimeout(() => {
                listItem.children[1].children[0].children[0].focus();
            }, 50);
        },
        collapseMenu(listItem) {
            this.activeItem = null;
            listItem.parentElement.previousElementSibling.focus();
        },
        navigateToNextItem(listItem) {
            var nextItem = this.findNextItem(listItem);
            if (nextItem) {
                nextItem.children[0].focus();
            }
        },
        navigateToPrevItem(listItem) {
            var prevItem = this.findPrevItem(listItem);
            if (prevItem) {
                prevItem.children[0].focus();
            }
        },
        getItemClass(item) {
            return [
                'p-menuitem', item.class, {
                    'p-menuitem-active': this.activeItem === item
                }
            ]
        },
        linkClass(item, routerProps) {
            return ['p-menuitem-link', {
                'p-disabled': this.disabled(item),
                'router-link-active': routerProps && routerProps.isActive,
                'router-link-active-exact': this.exact && routerProps && routerProps.isExactActive
            }];
        },
        bindDocumentClickListener() {
            if (!this.documentClickListener) {
                this.documentClickListener = (event) => {
                    if (this.$el && !this.$el.contains(event.target)) {
                        this.activeItem = null;
                        this.unbindDocumentClickListener();
                    }
                };

                document.addEventListener('click', this.documentClickListener);
            }
        },
        unbindDocumentClickListener() {
            if (this.documentClickListener) {
                document.removeEventListener('click', this.documentClickListener);
                this.documentClickListener = null;
            }
        },
        getSubmenuIcon() {
            return [
                'p-submenu-icon pi', {'pi-angle-right': !this.root, 'pi-angle-down': this.root}
            ];
        },
        visible(item) {
            return (typeof item.visible === 'function' ? item.visible() : item.visible !== false);
        },
        disabled(item) {
            return (typeof item.disabled === 'function' ? item.disabled() : item.disabled);
        },
        label(item) {
            return (typeof item.label === 'function' ? item.label() : item.label);
        }
    },
    computed: {
        containerClass() {
            return {'p-submenu-list': !this.root, 'p-menubar-root-list': this.root};
        }
    },
    directives: {
        'ripple': __vite_ssr_import_1__.default
    }
};

const _hoisted_1$1 = { class: "p-menuitem-text" };
const _hoisted_2$1 = { class: "p-menuitem-text" };

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = __vite_ssr_import_2__.resolveComponent("router-link");
  const _component_MenubarSub = __vite_ssr_import_2__.resolveComponent("MenubarSub", true);
  const _directive_ripple = __vite_ssr_import_2__.resolveDirective("ripple");

  return (__vite_ssr_import_2__.openBlock(), __vite_ssr_import_2__.createBlock("ul", {
    class: $options.containerClass,
    role: $props.root ? 'menubar' : 'menu'
  }, [
    (__vite_ssr_import_2__.openBlock(true), __vite_ssr_import_2__.createBlock(__vite_ssr_import_2__.Fragment, null, __vite_ssr_import_2__.renderList($props.model, (item, i) => {
      return (__vite_ssr_import_2__.openBlock(), __vite_ssr_import_2__.createBlock(__vite_ssr_import_2__.Fragment, {
        key: $options.label(item) + i.toString()
      }, [
        ($options.visible(item) && !item.separator)
          ? (__vite_ssr_import_2__.openBlock(), __vite_ssr_import_2__.createBlock("li", {
              key: 0,
              role: "none",
              class: $options.getItemClass(item),
              style: item.style,
              onMouseenter: $event => ($options.onItemMouseEnter($event, item))
            }, [
              (!$props.template)
                ? (__vite_ssr_import_2__.openBlock(), __vite_ssr_import_2__.createBlock(__vite_ssr_import_2__.Fragment, { key: 0 }, [
                    (item.to && !$options.disabled(item))
                      ? (__vite_ssr_import_2__.openBlock(), __vite_ssr_import_2__.createBlock(_component_router_link, {
                          key: 0,
                          to: item.to,
                          custom: ""
                        }, {
                          default: __vite_ssr_import_2__.withCtx(({navigate, href, isActive, isExactActive}) => [
                            __vite_ssr_import_2__.withDirectives(__vite_ssr_import_2__.createVNode("a", {
                              href: href,
                              onClick: $event => ($options.onItemClick($event, item, navigate)),
                              class: $options.linkClass(item, {isActive, isExactActive}),
                              onKeydown: $event => ($options.onItemKeyDown($event, item)),
                              role: "menuitem"
                            }, [
                              __vite_ssr_import_2__.createVNode("span", {
                                class: ['p-menuitem-icon', item.icon]
                              }, null, 2),
                              __vite_ssr_import_2__.createVNode("span", _hoisted_1$1, __vite_ssr_import_2__.toDisplayString($options.label(item)), 1)
                            ], 42, ["href", "onClick", "onKeydown"]), [
                              [_directive_ripple]
                            ])
                          ]),
                          _: 2
                        }, 1032, ["to"]))
                      : __vite_ssr_import_2__.withDirectives((__vite_ssr_import_2__.openBlock(), __vite_ssr_import_2__.createBlock("a", {
                          key: 1,
                          href: item.url,
                          class: $options.linkClass(item),
                          target: item.target,
                          "aria-haspopup": item.items != null,
                          "aria-expanded": item === $data.activeItem,
                          onClick: $event => ($options.onItemClick($event, item)),
                          onKeydown: $event => ($options.onItemKeyDown($event, item)),
                          role: "menuitem",
                          tabindex: $options.disabled(item) ? null : '0'
                        }, [
                          __vite_ssr_import_2__.createVNode("span", {
                            class: ['p-menuitem-icon', item.icon]
                          }, null, 2),
                          __vite_ssr_import_2__.createVNode("span", _hoisted_2$1, __vite_ssr_import_2__.toDisplayString($options.label(item)), 1),
                          (item.items)
                            ? (__vite_ssr_import_2__.openBlock(), __vite_ssr_import_2__.createBlock("span", {
                                key: 0,
                                class: $options.getSubmenuIcon()
                              }, null, 2))
                            : __vite_ssr_import_2__.createCommentVNode("", true)
                        ], 42, ["href", "target", "aria-haspopup", "aria-expanded", "onClick", "onKeydown", "tabindex"])), [
                          [_directive_ripple]
                        ])
                  ], 64))
                : (__vite_ssr_import_2__.openBlock(), __vite_ssr_import_2__.createBlock(__vite_ssr_import_2__.resolveDynamicComponent($props.template), {
                    key: 1,
                    item: item
                  }, null, 8, ["item"])),
              ($options.visible(item) && item.items)
                ? (__vite_ssr_import_2__.openBlock(), __vite_ssr_import_2__.createBlock(_component_MenubarSub, {
                    model: item.items,
                    key: $options.label(item) + '_sub_',
                    mobileActive: $props.mobileActive,
                    onLeafClick: $options.onLeafClick,
                    onKeydownItem: $options.onChildItemKeyDown,
                    parentActive: item === $data.activeItem,
                    template: $props.template,
                    exact: $props.exact
                  }, null, 8, ["model", "mobileActive", "onLeafClick", "onKeydownItem", "parentActive", "template", "exact"]))
                : __vite_ssr_import_2__.createCommentVNode("", true)
            ], 46, ["onMouseenter"]))
          : __vite_ssr_import_2__.createCommentVNode("", true),
        ($options.visible(item) && item.separator)
          ? (__vite_ssr_import_2__.openBlock(), __vite_ssr_import_2__.createBlock("li", {
              class: ['p-menu-separator', item.class],
              style: item.style,
              key: 'separator' + i.toString(),
              role: "separator"
            }, null, 6))
          : __vite_ssr_import_2__.createCommentVNode("", true)
      ], 64))
    }), 128))
  ], 10, ["role"]))
}

script$1.render = render$1;

var script = {
    name: 'Menubar',
    props: {
		model: {
            type: Array,
            default: null
        },
        exact: {
            type: Boolean,
            default: true
        }
    },
    outsideClickListener: null,
    data() {
        return {
            mobileActive: false
        }
    },
    beforeUnmount() {
        this.mobileActive = false;
        this.unbindOutsideClickListener();
        if (this.$refs.rootmenu && this.$refs.rootmenu.$el) {
            __vite_ssr_import_0__.ZIndexUtils.clear(this.$refs.rootmenu.$el);
        }
    },
    methods: {
        toggle(event) {
            if (this.mobileActive) {
                this.mobileActive = false;
                __vite_ssr_import_0__.ZIndexUtils.clear(this.$refs.rootmenu.$el);
            }
            else {
                this.mobileActive = true;
                __vite_ssr_import_0__.ZIndexUtils.set('menu', this.$refs.rootmenu.$el, this.$primevue.config.zIndex.menu);
            }

            this.bindOutsideClickListener();
            event.preventDefault();
        },
        bindOutsideClickListener() {
            if (!this.outsideClickListener) {
                this.outsideClickListener = (event) => {
                    if (this.mobileActive && this.$refs.rootmenu.$el !== event.target && !this.$refs.rootmenu.$el.contains(event.target)
                        && this.$refs.menubutton !== event.target && !this.$refs.menubutton.contains(event.target)) {
                        this.mobileActive = false;
                    }
                };
                document.addEventListener('click', this.outsideClickListener);
            }
        },
        unbindOutsideClickListener() {
            if (this.outsideClickListener) {
                document.removeEventListener('click', this.outsideClickListener);
                this.outsideClickListener = null;
            }
        },
        onLeafClick() {
            this.mobileActive = false;
        }
    },
    computed: {
        containerClass() {
            return ['p-menubar p-component', {'p-menubar-mobile-active': this.mobileActive}];
        }
    },
    components: {
        'MenubarSub': script$1
    }
};

const _hoisted_1 = {
  key: 0,
  class: "p-menubar-start"
};
const _hoisted_2 = /*#__PURE__*/__vite_ssr_import_2__.createVNode("i", { class: "pi pi-bars" }, null, -1);
const _hoisted_3 = {
  key: 1,
  class: "p-menubar-end"
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_MenubarSub = __vite_ssr_import_2__.resolveComponent("MenubarSub");

  return (__vite_ssr_import_2__.openBlock(), __vite_ssr_import_2__.createBlock("div", { class: $options.containerClass }, [
    (_ctx.$slots.start)
      ? (__vite_ssr_import_2__.openBlock(), __vite_ssr_import_2__.createBlock("div", _hoisted_1, [
          __vite_ssr_import_2__.renderSlot(_ctx.$slots, "start")
        ]))
      : __vite_ssr_import_2__.createCommentVNode("", true),
    __vite_ssr_import_2__.createVNode("a", {
      ref: "menubutton",
      tabindex: "0",
      class: "p-menubar-button",
      onClick: _cache[1] || (_cache[1] = $event => ($options.toggle($event)))
    }, [
      _hoisted_2
    ], 512),
    __vite_ssr_import_2__.createVNode(_component_MenubarSub, {
      ref: "rootmenu",
      model: $props.model,
      root: true,
      mobileActive: $data.mobileActive,
      onLeafClick: $options.onLeafClick,
      template: _ctx.$slots.item,
      exact: $props.exact
    }, null, 8, ["model", "mobileActive", "onLeafClick", "template", "exact"]),
    (_ctx.$slots.end)
      ? (__vite_ssr_import_2__.openBlock(), __vite_ssr_import_2__.createBlock("div", _hoisted_3, [
          __vite_ssr_import_2__.renderSlot(_ctx.$slots, "end")
        ]))
      : __vite_ssr_import_2__.createCommentVNode("", true)
  ], 2))
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || "undefined" === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "\n.p-menubar {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n.p-menubar ul {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\n.p-menubar .p-menuitem-link {\n    cursor: pointer;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    text-decoration: none;\n    overflow: hidden;\n    position: relative;\n}\n.p-menubar .p-menuitem-text {\n    line-height: 1;\n}\n.p-menubar .p-menuitem {\n    position: relative;\n}\n.p-menubar-root-list {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n.p-menubar-root-list > li ul {\n    display: none;\n    z-index: 1;\n}\n.p-menubar-root-list > .p-menuitem-active > .p-submenu-list {\n    display: block;\n}\n.p-menubar .p-submenu-list {\n    display: none;\n    position: absolute;\n    z-index: 1;\n}\n.p-menubar .p-submenu-list > .p-menuitem-active > .p-submenu-list  {\n    display: block;\n    left: 100%;\n    top: 0;\n}\n.p-menubar .p-submenu-list .p-menuitem-link .p-submenu-icon {\n    margin-left: auto;\n}\n.p-menubar .p-menubar-custom,\n.p-menubar .p-menubar-end {\n    margin-left: auto;\n    -ms-flex-item-align: center;\n        align-self: center;\n}\n.p-menubar-button {\n    display: none;\n    cursor: pointer;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    text-decoration: none;\n}\n";
styleInject(css_248z);

script.render = render;


Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return script }});
;
}


// --------------------
// Request: /node_modules/primevue/inputtext/inputtext.esm.js
// Parents: 
// - /plugins/primevue.ts ($id_934480b9)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_743d0bd5 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


var script = {
    name: 'InputText',
    emits: ['update:modelValue'],
    props: {
        modelValue: null
    },
    methods: {
        onInput(event) {
            this.$emit('update:modelValue', event.target.value);
        }
    },
    computed: {
        filled() {
            return (this.modelValue != null && this.modelValue.toString().length > 0)
        }
    }
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (__vite_ssr_import_0__.openBlock(), __vite_ssr_import_0__.createBlock("input", __vite_ssr_import_0__.mergeProps({
    class: ['p-inputtext p-component', {'p-filled': $options.filled}],
    value: $props.modelValue,
    onInput: _cache[1] || (_cache[1] = (...args) => ($options.onInput && $options.onInput(...args)))
  }, _ctx.$attrs), null, 16, ["value"]))
}

script.render = render;


Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return script }});
;
}


// --------------------
// Request: /plugins/validate.js
// Parents: 
// - /@id/__x00__virtual:C:/DEV/VUE/yes4nuxt/.nuxt/plugins/server.mjs ($id_f92b9082)
// Dependencies: 
// - /node_modules/vee-validate/dist/vee-validate.esm.js ($id_2387c42e)
// - /node_modules/@vee-validate/rules/dist/vee-validate-rules.esm.js ($id_c1357939)
// - /node_modules/@vee-validate/i18n/dist/vee-validate-i18n.esm.js ($id_0d8ddd77)
// --------------------
const $id_eb85e80e = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vee-validate/dist/vee-validate.esm.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/@vee-validate/rules/dist/vee-validate-rules.esm.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/@vee-validate/i18n/dist/vee-validate-i18n.esm.js");

// import firebase from '@/helpers/firebase'
__vite_ssr_exports__.default = () => {
  __vite_ssr_import_0__.defineRule('required', __vite_ssr_import_1__.required)
  __vite_ssr_import_0__.defineRule('email', __vite_ssr_import_1__.email)
  __vite_ssr_import_0__.defineRule('min', __vite_ssr_import_1__.min)
  __vite_ssr_import_0__.defineRule('url', __vite_ssr_import_1__.url)
  // defineRule('unique', async (value, args) => {
  //   let collection, field, excluding
  //   if (Array.isArray(args)) {
  //     [collection, field, excluding] = args
  //   } else {
  //     ({ collection, field, excluding } = args)
  //   }
  //   if (value === excluding) return true
  //   const querySnapshot = await firebase.firestore().collection(collection).where(field, '==', value).get()
  //   return querySnapshot.empty
  // })

  __vite_ssr_import_0__.configure({
    generateMessage: __vite_ssr_import_2__.localize('en', {
      messages: {
        required: '{field} is required',
        email: '{field} must be a valid email',
        min: '{field} must be a minimum of 0:{min} characters',
        unique: '{field} is already taken',
        url: '{field} must be a valid URL'
      }
    })
  })
};
}


// --------------------
// Request: /node_modules/@vee-validate/rules/dist/vee-validate-rules.esm.js
// Parents: 
// - /plugins/validate.js ($id_eb85e80e)
// Dependencies: 

// --------------------
const $id_c1357939 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
/**
  * vee-validate v4.5.9
  * (c) 2022 Abdelrahman Awad
  * @license MIT
  */
/* eslint-disable no-misleading-character-class */
/**
 * Some Alpha Regex helpers.
 * https://github.com/chriso/validator.js/blob/master/src/lib/alpha.js
 */
const alpha = {
    en: /^[A-Z]*$/i,
    cs: /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]*$/i,
    da: /^[A-ZÆØÅ]*$/i,
    de: /^[A-ZÄÖÜß]*$/i,
    es: /^[A-ZÁÉÍÑÓÚÜ]*$/i,
    fr: /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]*$/i,
    it: /^[A-Z\xC0-\xFF]*$/i,
    lt: /^[A-ZĄČĘĖĮŠŲŪŽ]*$/i,
    nl: /^[A-ZÉËÏÓÖÜ]*$/i,
    hu: /^[A-ZÁÉÍÓÖŐÚÜŰ]*$/i,
    pl: /^[A-ZĄĆĘŚŁŃÓŻŹ]*$/i,
    pt: /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]*$/i,
    ru: /^[А-ЯЁ]*$/i,
    sk: /^[A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ]*$/i,
    sr: /^[A-ZČĆŽŠĐ]*$/i,
    sv: /^[A-ZÅÄÖ]*$/i,
    tr: /^[A-ZÇĞİıÖŞÜ]*$/i,
    uk: /^[А-ЩЬЮЯЄІЇҐ]*$/i,
    ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]*$/,
    az: /^[A-ZÇƏĞİıÖŞÜ]*$/i,
    ug: /^[A-Zچۋېرتيۇڭوپھسداەىقكلزشغۈبنمژفگخجۆئ]*$/i,
};
const alphaSpaces = {
    en: /^[A-Z\s]*$/i,
    cs: /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ\s]*$/i,
    da: /^[A-ZÆØÅ\s]*$/i,
    de: /^[A-ZÄÖÜß\s]*$/i,
    es: /^[A-ZÁÉÍÑÓÚÜ\s]*$/i,
    fr: /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ\s]*$/i,
    it: /^[A-Z\xC0-\xFF\s]*$/i,
    lt: /^[A-ZĄČĘĖĮŠŲŪŽ\s]*$/i,
    nl: /^[A-ZÉËÏÓÖÜ\s]*$/i,
    hu: /^[A-ZÁÉÍÓÖŐÚÜŰ\s]*$/i,
    pl: /^[A-ZĄĆĘŚŁŃÓŻŹ\s]*$/i,
    pt: /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ\s]*$/i,
    ru: /^[А-ЯЁ\s]*$/i,
    sk: /^[A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ\s]*$/i,
    sr: /^[A-ZČĆŽŠĐ\s]*$/i,
    sv: /^[A-ZÅÄÖ\s]*$/i,
    tr: /^[A-ZÇĞİıÖŞÜ\s]*$/i,
    uk: /^[А-ЩЬЮЯЄІЇҐ\s]*$/i,
    ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ\s]*$/,
    az: /^[A-ZÇƏĞİıÖŞÜ\s]*$/i,
    ug: /^[A-Zچۋېرتيۇڭوپھسداەىقكلزشغۈبنمژفگخجۆئ\s]*$/i,
};
const alphanumeric = {
    en: /^[0-9A-Z]*$/i,
    cs: /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]*$/i,
    da: /^[0-9A-ZÆØÅ]$/i,
    de: /^[0-9A-ZÄÖÜß]*$/i,
    es: /^[0-9A-ZÁÉÍÑÓÚÜ]*$/i,
    fr: /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]*$/i,
    it: /^[0-9A-Z\xC0-\xFF]*$/i,
    lt: /^[0-9A-ZĄČĘĖĮŠŲŪŽ]*$/i,
    hu: /^[0-9A-ZÁÉÍÓÖŐÚÜŰ]*$/i,
    nl: /^[0-9A-ZÉËÏÓÖÜ]*$/i,
    pl: /^[0-9A-ZĄĆĘŚŁŃÓŻŹ]*$/i,
    pt: /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]*$/i,
    ru: /^[0-9А-ЯЁ]*$/i,
    sk: /^[0-9A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ]*$/i,
    sr: /^[0-9A-ZČĆŽŠĐ]*$/i,
    sv: /^[0-9A-ZÅÄÖ]*$/i,
    tr: /^[0-9A-ZÇĞİıÖŞÜ]*$/i,
    uk: /^[0-9А-ЩЬЮЯЄІЇҐ]*$/i,
    ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]*$/,
    az: /^[0-9A-ZÇƏĞİıÖŞÜ]*$/i,
    ug: /^[0-9A-Zچۋېرتيۇڭوپھسداەىقكلزشغۈبنمژفگخجۆئ]*$/i,
};
const alphaDash = {
    en: /^[0-9A-Z_-]*$/i,
    cs: /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ_-]*$/i,
    da: /^[0-9A-ZÆØÅ_-]*$/i,
    de: /^[0-9A-ZÄÖÜß_-]*$/i,
    es: /^[0-9A-ZÁÉÍÑÓÚÜ_-]*$/i,
    fr: /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ_-]*$/i,
    it: /^[0-9A-Z\xC0-\xFF_-]*$/i,
    lt: /^[0-9A-ZĄČĘĖĮŠŲŪŽ_-]*$/i,
    nl: /^[0-9A-ZÉËÏÓÖÜ_-]*$/i,
    hu: /^[0-9A-ZÁÉÍÓÖŐÚÜŰ_-]*$/i,
    pl: /^[0-9A-ZĄĆĘŚŁŃÓŻŹ_-]*$/i,
    pt: /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ_-]*$/i,
    ru: /^[0-9А-ЯЁ_-]*$/i,
    sk: /^[0-9A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ_-]*$/i,
    sr: /^[0-9A-ZČĆŽŠĐ_-]*$/i,
    sv: /^[0-9A-ZÅÄÖ_-]*$/i,
    tr: /^[0-9A-ZÇĞİıÖŞÜ_-]*$/i,
    uk: /^[0-9А-ЩЬЮЯЄІЇҐ_-]*$/i,
    ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ_-]*$/,
    az: /^[0-9A-ZÇƏĞİıÖŞÜ_-]*$/i,
    ug: /^[0-9A-Zچۋېرتيۇڭوپھسداەىقكلزشغۈبنمژفگخجۆئ_-]*$/i,
};
const getLocale = (params) => {
    if (!params) {
        return undefined;
    }
    return Array.isArray(params) ? params[0] : params.locale;
};

function getSingleParam(params, paramName) {
    return Array.isArray(params) ? params[0] : params[paramName];
}
function isEmpty(value) {
    if (value === null || value === undefined || value === '') {
        return true;
    }
    if (Array.isArray(value) && value.length === 0) {
        return true;
    }
    return false;
}

const alphaValidator = (value, params) => {
    if (isEmpty(value)) {
        return true;
    }
    const locale = getLocale(params);
    if (Array.isArray(value)) {
        return value.every(val => alphaValidator(val, { locale }));
    }
    const valueAsString = String(value);
    // Match at least one locale.
    if (!locale) {
        return Object.keys(alpha).some(loc => alpha[loc].test(valueAsString));
    }
    return (alpha[locale] || alpha.en).test(valueAsString);
};

const alphaDashValidator = (value, params) => {
    if (isEmpty(value)) {
        return true;
    }
    const locale = getLocale(params);
    if (Array.isArray(value)) {
        return value.every(val => alphaDashValidator(val, { locale }));
    }
    const valueAsString = String(value);
    // Match at least one locale.
    if (!locale) {
        return Object.keys(alphaDash).some(loc => alphaDash[loc].test(valueAsString));
    }
    return (alphaDash[locale] || alphaDash.en).test(valueAsString);
};

const alphaNumValidator = (value, params) => {
    if (isEmpty(value)) {
        return true;
    }
    const locale = getLocale(params);
    if (Array.isArray(value)) {
        return value.every(val => alphaNumValidator(val, { locale }));
    }
    const valueAsString = String(value);
    // Match at least one locale.
    if (!locale) {
        return Object.keys(alphanumeric).some(loc => alphanumeric[loc].test(valueAsString));
    }
    return (alphanumeric[locale] || alphanumeric.en).test(valueAsString);
};

const alphaSpacesValidator = (value, params) => {
    if (isEmpty(value)) {
        return true;
    }
    const locale = getLocale(params);
    if (Array.isArray(value)) {
        return value.every(val => alphaSpacesValidator(val, { locale }));
    }
    const valueAsString = String(value);
    // Match at least one locale.
    if (!locale) {
        return Object.keys(alphaSpaces).some(loc => alphaSpaces[loc].test(valueAsString));
    }
    return (alphaSpaces[locale] || alphaSpaces.en).test(valueAsString);
};

function getParams$1(params) {
    if (!params) {
        return {
            min: 0,
            max: 0,
        };
    }
    if (Array.isArray(params)) {
        return { min: params[0], max: params[1] };
    }
    return params;
}
const betweenValidator = (value, params) => {
    if (isEmpty(value)) {
        return true;
    }
    const { min, max } = getParams$1(params);
    if (Array.isArray(value)) {
        return value.every(val => !!betweenValidator(val, { min, max }));
    }
    const valueAsNumber = Number(value);
    return Number(min) <= valueAsNumber && Number(max) >= valueAsNumber;
};

const confirmedValidator = (value, params) => {
    const target = getSingleParam(params, 'target');
    return String(value) === String(target);
};

const digitsValidator = (value, params) => {
    if (isEmpty(value)) {
        return true;
    }
    const length = getSingleParam(params, 'length');
    if (Array.isArray(value)) {
        return value.every(val => digitsValidator(val, { length }));
    }
    const strVal = String(value);
    return /^[0-9]*$/.test(strVal) && strVal.length === Number(length);
};

const validateImage = (file, width, height) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const URL = window.URL || window.webkitURL;
    return new Promise(resolve => {
        const image = new Image();
        image.onerror = () => resolve(false);
        image.onload = () => resolve(image.width === width && image.height === height);
        image.src = URL.createObjectURL(file);
    });
};
function getParams(params) {
    if (!params) {
        return { width: 0, height: 0 };
    }
    if (Array.isArray(params)) {
        return { width: Number(params[0]), height: Number(params[1]) };
    }
    return {
        width: Number(params.width),
        height: Number(params.height),
    };
}
const dimensionsValidator = (files, params) => {
    if (isEmpty(files)) {
        return true;
    }
    const { width, height } = getParams(params);
    const list = [];
    const fileList = Array.isArray(files) ? files : [files];
    for (let i = 0; i < fileList.length; i++) {
        // if file is not an image, reject.
        if (!/\.(jpg|svg|jpeg|png|bmp|gif)$/i.test(fileList[i].name)) {
            return Promise.resolve(false);
        }
        list.push(fileList[i]);
    }
    return Promise.all(list.map(file => validateImage(file, width, height))).then(values => {
        return values.every(v => v);
    });
};

/* eslint-disable no-useless-escape */
const emailValidator = (value) => {
    if (isEmpty(value)) {
        return true;
    }
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (Array.isArray(value)) {
        return value.every(val => re.test(String(val)));
    }
    return re.test(String(value));
};

const extValidator = (files, extensions) => {
    if (isEmpty(files)) {
        return true;
    }
    if (!extensions) {
        extensions = [];
    }
    const regex = new RegExp(`.(${extensions.join('|')})$`, 'i');
    if (Array.isArray(files)) {
        return files.every(file => regex.test(file.name));
    }
    return regex.test(files.name);
};

const imageValidator = (files) => {
    if (isEmpty(files)) {
        return true;
    }
    const regex = /\.(jpg|svg|jpeg|png|bmp|gif|webp)$/i;
    if (Array.isArray(files)) {
        return files.every(file => regex.test(file.name));
    }
    return regex.test(files.name);
};

const integerValidator = (value) => {
    if (isEmpty(value)) {
        return true;
    }
    if (Array.isArray(value)) {
        return value.every(val => /^-?[0-9]+$/.test(String(val)));
    }
    return /^-?[0-9]+$/.test(String(value));
};

const isValidator = (value, params) => {
    const other = getSingleParam(params, 'other');
    return value === other;
};

const isNotValidator = (value, params) => {
    const other = getSingleParam(params, 'other');
    return value !== other;
};

function isNullOrUndefined(value) {
    return value === null || value === undefined;
}
function isEmptyArray(arr) {
    return Array.isArray(arr) && arr.length === 0;
}

const lengthValidator = (value, params) => {
    // Normalize the length value
    const length = getSingleParam(params, 'length');
    if (isNullOrUndefined(value)) {
        return false;
    }
    if (typeof value === 'number') {
        value = String(value);
    }
    if (!value.length) {
        value = Array.from(value);
    }
    return value.length === Number(length);
};

const maxLengthValidator = (value, params) => {
    if (isEmpty(value)) {
        return true;
    }
    const length = getSingleParam(params, 'length');
    if (Array.isArray(value)) {
        return value.every(val => maxLengthValidator(val, { length }));
    }
    return String(value).length <= Number(length);
};

const maxValueValidator = (value, params) => {
    if (isEmpty(value)) {
        return true;
    }
    const max = getSingleParam(params, 'max');
    if (Array.isArray(value)) {
        return value.length > 0 && value.every(val => maxValueValidator(val, { max }));
    }
    return Number(value) <= Number(max);
};

const mimesValidator = (files, mimes) => {
    if (isEmpty(files)) {
        return true;
    }
    if (!mimes) {
        mimes = [];
    }
    const regex = new RegExp(`${mimes.join('|').replace('*', '.+')}$`, 'i');
    if (Array.isArray(files)) {
        return files.every(file => regex.test(file.type));
    }
    return regex.test(files.type);
};

const minValidator = (value, params) => {
    if (isEmpty(value)) {
        return true;
    }
    const length = getSingleParam(params, 'length');
    if (Array.isArray(value)) {
        return value.every(val => minValidator(val, { length }));
    }
    return String(value).length >= Number(length);
};

const minValueValidator = (value, params) => {
    if (isEmpty(value)) {
        return true;
    }
    const min = getSingleParam(params, 'min');
    if (Array.isArray(value)) {
        return value.length > 0 && value.every(val => minValueValidator(val, { min }));
    }
    return Number(value) >= Number(min);
};

const oneOfValidator = (value, list) => {
    if (isEmpty(value)) {
        return true;
    }
    if (Array.isArray(value)) {
        return value.every(val => oneOfValidator(val, list));
    }
    return Array.from(list).some(item => {
        // eslint-disable-next-line
        return item == value;
    });
};

const excludedValidator = (value, list) => {
    if (isEmpty(value)) {
        return true;
    }
    return !oneOfValidator(value, list);
};

const ar = /^[٠١٢٣٤٥٦٧٨٩]+$/;
const en = /^[0-9]+$/;
const numericValidator = (value) => {
    if (isEmpty(value)) {
        return true;
    }
    const testValue = (val) => {
        const strValue = String(val);
        return en.test(strValue) || ar.test(strValue);
    };
    if (Array.isArray(value)) {
        return value.every(testValue);
    }
    return testValue(value);
};

const regexValidator = (value, params) => {
    if (isEmpty(value)) {
        return true;
    }
    let regex = getSingleParam(params, 'regex');
    if (typeof regex === 'string') {
        regex = new RegExp(regex);
    }
    if (Array.isArray(value)) {
        return value.every(val => regexValidator(val, { regex }));
    }
    return regex.test(String(value));
};

const requiredValidator = (value) => {
    if (isNullOrUndefined(value) || isEmptyArray(value) || value === false) {
        return false;
    }
    return !!String(value).trim().length;
};

const sizeValidator = (files, params) => {
    if (isEmpty(files)) {
        return true;
    }
    let size = getSingleParam(params, 'size');
    size = Number(size);
    if (isNaN(size)) {
        return false;
    }
    const nSize = size * 1024;
    if (!Array.isArray(files)) {
        return files.size <= nSize;
    }
    for (let i = 0; i < files.length; i++) {
        if (files[i].size > nSize) {
            return false;
        }
    }
    return true;
};

const urlValidator = (value, params) => {
    var _a;
    if (isEmpty(value)) {
        return true;
    }
    let pattern = getSingleParam(params, 'pattern');
    if (typeof pattern === 'string') {
        pattern = new RegExp(pattern);
    }
    try {
        // eslint-disable-next-line no-new
        new URL(value);
    }
    catch (_b) {
        return false;
    }
    return (_a = pattern === null || pattern === void 0 ? void 0 : pattern.test(value)) !== null && _a !== void 0 ? _a : true;
};

/* eslint-disable camelcase */
const all = {
    alpha_dash: alphaDashValidator,
    alpha_num: alphaNumValidator,
    alpha_spaces: alphaSpacesValidator,
    alpha: alphaValidator,
    between: betweenValidator,
    confirmed: confirmedValidator,
    digits: digitsValidator,
    dimensions: dimensionsValidator,
    email: emailValidator,
    ext: extValidator,
    image: imageValidator,
    integer: integerValidator,
    is_not: isNotValidator,
    is: isValidator,
    length: lengthValidator,
    max_value: maxValueValidator,
    max: maxLengthValidator,
    mimes: mimesValidator,
    min_value: minValueValidator,
    min: minValidator,
    not_one_of: excludedValidator,
    numeric: numericValidator,
    one_of: oneOfValidator,
    regex: regexValidator,
    required: requiredValidator,
    size: sizeValidator,
    url: urlValidator,
};


Object.defineProperty(__vite_ssr_exports__, "alpha", { enumerable: true, configurable: true, get(){ return alphaValidator }});
Object.defineProperty(__vite_ssr_exports__, "alpha_dash", { enumerable: true, configurable: true, get(){ return alphaDashValidator }});
Object.defineProperty(__vite_ssr_exports__, "alpha_num", { enumerable: true, configurable: true, get(){ return alphaNumValidator }});
Object.defineProperty(__vite_ssr_exports__, "alpha_spaces", { enumerable: true, configurable: true, get(){ return alphaSpacesValidator }});
Object.defineProperty(__vite_ssr_exports__, "between", { enumerable: true, configurable: true, get(){ return betweenValidator }});
Object.defineProperty(__vite_ssr_exports__, "confirmed", { enumerable: true, configurable: true, get(){ return confirmedValidator }});
Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return all }});
Object.defineProperty(__vite_ssr_exports__, "digits", { enumerable: true, configurable: true, get(){ return digitsValidator }});
Object.defineProperty(__vite_ssr_exports__, "dimensions", { enumerable: true, configurable: true, get(){ return dimensionsValidator }});
Object.defineProperty(__vite_ssr_exports__, "email", { enumerable: true, configurable: true, get(){ return emailValidator }});
Object.defineProperty(__vite_ssr_exports__, "ext", { enumerable: true, configurable: true, get(){ return extValidator }});
Object.defineProperty(__vite_ssr_exports__, "image", { enumerable: true, configurable: true, get(){ return imageValidator }});
Object.defineProperty(__vite_ssr_exports__, "integer", { enumerable: true, configurable: true, get(){ return integerValidator }});
Object.defineProperty(__vite_ssr_exports__, "is", { enumerable: true, configurable: true, get(){ return isValidator }});
Object.defineProperty(__vite_ssr_exports__, "is_not", { enumerable: true, configurable: true, get(){ return isNotValidator }});
Object.defineProperty(__vite_ssr_exports__, "length", { enumerable: true, configurable: true, get(){ return lengthValidator }});
Object.defineProperty(__vite_ssr_exports__, "max", { enumerable: true, configurable: true, get(){ return maxLengthValidator }});
Object.defineProperty(__vite_ssr_exports__, "max_value", { enumerable: true, configurable: true, get(){ return maxValueValidator }});
Object.defineProperty(__vite_ssr_exports__, "mimes", { enumerable: true, configurable: true, get(){ return mimesValidator }});
Object.defineProperty(__vite_ssr_exports__, "min", { enumerable: true, configurable: true, get(){ return minValidator }});
Object.defineProperty(__vite_ssr_exports__, "min_value", { enumerable: true, configurable: true, get(){ return minValueValidator }});
Object.defineProperty(__vite_ssr_exports__, "not_one_of", { enumerable: true, configurable: true, get(){ return excludedValidator }});
Object.defineProperty(__vite_ssr_exports__, "numeric", { enumerable: true, configurable: true, get(){ return numericValidator }});
Object.defineProperty(__vite_ssr_exports__, "one_of", { enumerable: true, configurable: true, get(){ return oneOfValidator }});
Object.defineProperty(__vite_ssr_exports__, "regex", { enumerable: true, configurable: true, get(){ return regexValidator }});
Object.defineProperty(__vite_ssr_exports__, "required", { enumerable: true, configurable: true, get(){ return requiredValidator }});
Object.defineProperty(__vite_ssr_exports__, "size", { enumerable: true, configurable: true, get(){ return sizeValidator }});
Object.defineProperty(__vite_ssr_exports__, "url", { enumerable: true, configurable: true, get(){ return urlValidator }});
;
}


// --------------------
// Request: /node_modules/@vee-validate/i18n/dist/vee-validate-i18n.esm.js
// Parents: 
// - /plugins/validate.js ($id_eb85e80e)
// Dependencies: 

// --------------------
const $id_0d8ddd77 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
/**
  * vee-validate v4.5.9
  * (c) 2022 Abdelrahman Awad
  * @license MIT
  */
function isCallable(fn) {
    return typeof fn === 'function';
}
const isObject = (obj) => obj !== null && !!obj && typeof obj === 'object' && !Array.isArray(obj);

/**
 * Replaces placeholder values in a string with their actual values
 */
function interpolate(template, values) {
    return template.replace(/(\d:)?{([^}]+)}/g, function (_, param, placeholder) {
        if (!param || !values.params) {
            return placeholder in values
                ? values[placeholder]
                : values.params && placeholder in values.params
                    ? values.params[placeholder]
                    : `{${placeholder}}`;
        }
        // Handles extended object params format
        if (!Array.isArray(values.params)) {
            return placeholder in values.params ? values.params[placeholder] : `{${placeholder}}`;
        }
        // Extended Params exit in the format of `paramIndex:{paramName}` where the index is optional
        const paramIndex = Number(param.replace(':', ''));
        return paramIndex in values.params ? values.params[paramIndex] : `${param}{${placeholder}}`;
    });
}
function merge(target, source) {
    Object.keys(source).forEach(key => {
        if (isObject(source[key])) {
            if (!target[key]) {
                target[key] = {};
            }
            merge(target[key], source[key]);
            return;
        }
        target[key] = source[key];
    });
    return target;
}

class Dictionary {
    constructor(locale, dictionary) {
        this.container = {};
        this.locale = locale;
        this.merge(dictionary);
    }
    resolve(ctx) {
        return this.format(this.locale, ctx);
    }
    getLocaleDefault(locale, field) {
        var _a, _b, _c, _d, _e;
        return ((_c = (_b = (_a = this.container[locale]) === null || _a === void 0 ? void 0 : _a.fields) === null || _b === void 0 ? void 0 : _b[field]) === null || _c === void 0 ? void 0 : _c._default) || ((_e = (_d = this.container[locale]) === null || _d === void 0 ? void 0 : _d.messages) === null || _e === void 0 ? void 0 : _e._default);
    }
    format(locale, ctx) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        let message;
        const { field, rule, form } = ctx;
        const fieldName = (_c = (_b = (_a = this.container[locale]) === null || _a === void 0 ? void 0 : _a.names) === null || _b === void 0 ? void 0 : _b[field]) !== null && _c !== void 0 ? _c : field;
        if (!rule) {
            message = this.getLocaleDefault(locale, field) || `${fieldName} is not valid`;
            return isCallable(message) ? message(ctx) : interpolate(message, Object.assign(Object.assign({}, form), { field: fieldName }));
        }
        // find if specific message for that field was specified.
        message = ((_f = (_e = (_d = this.container[locale]) === null || _d === void 0 ? void 0 : _d.fields) === null || _e === void 0 ? void 0 : _e[field]) === null || _f === void 0 ? void 0 : _f[rule.name]) || ((_h = (_g = this.container[locale]) === null || _g === void 0 ? void 0 : _g.messages) === null || _h === void 0 ? void 0 : _h[rule.name]);
        if (!message) {
            message = this.getLocaleDefault(locale, field) || `${fieldName} is not valid`;
        }
        return isCallable(message)
            ? message(ctx)
            : interpolate(message, Object.assign(Object.assign({}, form), { field: fieldName, params: rule.params }));
    }
    merge(dictionary) {
        merge(this.container, dictionary);
    }
}
let DICTIONARY;
function localize(locale, dictionary) {
    if (!DICTIONARY) {
        DICTIONARY = new Dictionary('en', {});
    }
    const generateMessage = ctx => {
        return DICTIONARY.resolve(ctx);
    };
    if (typeof locale === 'string') {
        DICTIONARY.locale = locale;
        if (dictionary) {
            DICTIONARY.merge({ [locale]: dictionary });
        }
        return generateMessage;
    }
    DICTIONARY.merge(locale);
    return generateMessage;
}
/**
 * Sets the locale
 */
function setLocale(locale) {
    DICTIONARY.locale = locale;
}
/**
 * Loads a locale file from URL and merges it with the current dictionary
 */
async function loadLocaleFromURL(url) {
    try {
        const locale = await fetch(url, {
            headers: {
                'content-type': 'application/json',
            },
        }).then(res => res.json());
        if (!locale.code) {
            console.error('Could not identify locale, ensure the locale file contains `code` field');
            return;
        }
        localize({ [locale.code]: locale });
    }
    catch (err) {
        console.error(`Failed to load locale `);
    }
}


Object.defineProperty(__vite_ssr_exports__, "loadLocaleFromURL", { enumerable: true, configurable: true, get(){ return loadLocaleFromURL }});
Object.defineProperty(__vite_ssr_exports__, "localize", { enumerable: true, configurable: true, get(){ return localize }});
Object.defineProperty(__vite_ssr_exports__, "setLocale", { enumerable: true, configurable: true, get(){ return setLocale }});
;
}


// --------------------
// Request: /node_modules/@nuxt/nitro/dist/runtime/app/nitro.client.mjs
// Parents: 
// - /@id/__x00__virtual:C:/DEV/VUE/yes4nuxt/.nuxt/plugins/server.mjs ($id_f92b9082)
// Dependencies: 
// - /node_modules/ohmyfetch/dist/index.mjs ($id_780217c4)
// --------------------
const $id_7b587af2 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/ohmyfetch/dist/index.mjs");


if (!globalThis.$fetch) {
  globalThis.$fetch = __vite_ssr_import_0__.$fetch
}

__vite_ssr_exports__.default = () => {}
;
}


// --------------------
// Request: /node_modules/ohmyfetch/dist/index.mjs
// Parents: 
// - /node_modules/@nuxt/nitro/dist/runtime/app/nitro.client.mjs ($id_7b587af2)
// Dependencies: 

// --------------------
const $id_780217c4 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import("file:///C:/DEV/VUE/yes4nuxt/node_modules/ohmyfetch/dist/index.mjs").then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error("[vite dev] Error loading external \"C:/DEV/VUE/yes4nuxt/node_modules/ohmyfetch/dist/index.mjs\".") })


// --------------------
// Request: /@id/__x00__virtual:C:/DEV/VUE/yes4nuxt/.nuxt/components.mjs
// Parents: 
// - /@id/__x00__virtual:C:/DEV/VUE/yes4nuxt/.nuxt/plugins/server.mjs ($id_f92b9082)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_5fe6b26c = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


const components = {}

__vite_ssr_exports__.default = function (nuxtApp) {
  for (const name in components) {
    nuxtApp.vueApp.component(name, components[name])
    nuxtApp.vueApp.component('Lazy' + name, components[name])
  }
}
;
}


// --------------------
// Request: /@id/__x00__virtual:C:/DEV/VUE/yes4nuxt/.nuxt/root-component.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/bootstrap.mjs ($id_fef466a9)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/components/nuxt-root.vue ($id_f8564e04)
// --------------------
const $id_74e163d3 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/components/nuxt-root.vue");

Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.default }});;
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/components/nuxt-root.vue
// Parents: 
// - /@id/__x00__virtual:C:/DEV/VUE/yes4nuxt/.nuxt/root-component.mjs ($id_74e163d3)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_f8564e04 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {


const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");


const _sfc_main = {
  setup () {
    const nuxtApp = __vite_ssr_import_0__.useNuxtApp()
    const results = nuxtApp.hooks.callHookWith(hooks => hooks.map(hook => hook()), 'vue:setup')
    if (true && results && results.some(i => i && 'then' in i)) {
      console.error('[nuxt] Error in `vue:setup`. Callbacks must be synchronous.')
    }
    return {
      onResolve: () => nuxtApp.callHook('app:suspense:resolve')
    }
  }
}

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_App = __vite_ssr_import_1__.resolveComponent("App")

  __vite_ssr_import_2__.ssrRenderSuspense(_push, {
    default: () => {
      _push(__vite_ssr_import_2__.ssrRenderComponent(_component_App, null, null, _parent))
    },
    _: 1 /* STABLE */
  })
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/nuxt3/dist/app/components/nuxt-root.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/DEV/VUE/yes4nuxt/node_modules/nuxt3/dist/app/components/nuxt-root.vue"]]);
}


// --------------------
// Request: /@id/__x00__virtual:C:/DEV/VUE/yes4nuxt/.nuxt/app-component.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/bootstrap.mjs ($id_fef466a9)
// Dependencies: 
// - /app.vue ($id_2b46e842)
// --------------------
const $id_f69acb79 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/app.vue");

Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.default }});;
}


// --------------------
// Request: /app.vue
// Parents: 
// - /@id/__x00__virtual:C:/DEV/VUE/yes4nuxt/.nuxt/app-component.mjs ($id_f69acb79)
// Dependencies: 
// - /components/Header/Header.vue ($id_73b23c04)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_2b46e842 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/Header/Header.vue");

const _sfc_main = {}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Header = __vite_ssr_import_0__.default
  const _component_NuxtPage = __vite_ssr_import_1__.resolveComponent("NuxtPage")

  _push(`<!--[-->`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_Header, null, null, _parent))
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_NuxtPage, null, null, _parent))
  _push(`<!--]-->`)
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("app.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/DEV/VUE/yes4nuxt/app.vue"]]);
}


// --------------------
// Request: /components/Header/Header.vue
// Parents: 
// - /app.vue ($id_2b46e842)
// Dependencies: 
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /assets/images/yes_logo.png ($id_66f3e6b7)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_73b23c04 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/assets/images/yes_logo.png");



function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${
    __vite_ssr_import_0__.ssrRenderAttrs(_attrs)
  }><nav class="navbar navbar-light bg-light"><div class="container-fluid"><a class="navbar-brand" href="#"><img${
    __vite_ssr_import_0__.ssrRenderAttr("src", __vite_ssr_import_1__.default)
  } alt="" width="72" height="36" class="d-inline-block align-text-top"> Yes4Mkt </a></div></nav></div>`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Header/Header.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/DEV/VUE/yes4nuxt/components/Header/Header.vue"]]);
}


// --------------------
// Request: /assets/images/yes_logo.png
// Parents: 
// - /components/Header/Header.vue ($id_73b23c04)
// Dependencies: 

// --------------------
const $id_66f3e6b7 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/_nuxt/assets/images/yes_logo.png";
}


const __modules__ = {
  "C:/DEV/VUE/yes4nuxt/node_modules/nuxt3/dist/app/entry": $id_96d255e5,
  "/node_modules/nuxt3/dist/app/bootstrap.mjs": $id_fef466a9,
  "/node_modules/vue/dist/vue.cjs.js": $id_60f0615f,
  "/node_modules/nuxt3/dist/app/index.mjs": $id_d8c2af0f,
  "/node_modules/nuxt3/dist/app/nuxt.mjs": $id_bf77ef36,
  "/node_modules/hookable/dist/index.mjs": $id_a2c811c4,
  "/node_modules/nuxt3/dist/app/compat/legacy-app.mjs": $id_75047751,
  "/node_modules/unenv/runtime/mock/proxy.mjs": $id_39e12da7,
  "/node_modules/nuxt3/dist/app/composables/index.mjs": $id_42ae3d5d,
  "/node_modules/nuxt3/dist/app/composables/component.mjs": $id_b47c3881,
  "/node_modules/vue-router/dist/vue-router.cjs.js": $id_f9a4a698,
  "/node_modules/nuxt3/dist/app/composables/asyncData.mjs": $id_a2ef143e,
  "/node_modules/nuxt3/dist/app/composables/hydrate.mjs": $id_43a772c2,
  "/node_modules/nuxt3/dist/app/composables/state.mjs": $id_d232db97,
  "/node_modules/nuxt3/dist/app/composables/fetch.mjs": $id_765a0ed7,
  "/node_modules/murmurhash-es/dist/index.mjs": $id_fbf6dac3,
  "/node_modules/nuxt3/dist/app/composables/cookie.mjs": $id_792d64c4,
  "/node_modules/cookie-es/dist/index.mjs": $id_f4975261,
  "/node_modules/h3/dist/index.mjs": $id_57d7ded6,
  "/node_modules/destr/dist/index.mjs": $id_03d15ecd,
  "/node_modules/nuxt3/dist/app/composables/ssr.mjs": $id_4d0dc923,
  "/node_modules/nuxt3/dist/app/composables/router.mjs": $id_541bda03,
  "/node_modules/nuxt3/dist/meta/runtime/index.mjs": $id_ea12a3fb,
  "/node_modules/nuxt3/dist/meta/runtime/composables.mjs": $id_ca9295be,
  "/node_modules/@vue/shared/dist/shared.cjs.js": $id_852b06a2,
  "/@id/__x00__virtual:C:/DEV/VUE/yes4nuxt/.nuxt/css.mjs": $id_a565eb3a,
  "/node_modules/primevue/resources/themes/saga-blue/theme.css": $id_4e9f8bcd,
  "/node_modules/primevue/resources/primevue.css": $id_736dcf3c,
  "/node_modules/primeicons/primeicons.css": $id_f890f676,
  "/@id/__x00__virtual:C:/DEV/VUE/yes4nuxt/.nuxt/plugins/server.mjs": $id_f92b9082,
  "/node_modules/nuxt3/dist/app/plugins/preload.server.mjs": $id_b9f3c557,
  "/node_modules/nuxt3/dist/meta/runtime/lib/vueuse-head.plugin.mjs": $id_cbe5172d,
  "/node_modules/@vueuse/head/dist/index.mjs": $id_c032264e,
  "/node_modules/nuxt3/dist/meta/runtime/plugin.mjs": $id_9fd5f35e,
  "/node_modules/nuxt3/dist/meta/runtime/components.mjs": $id_94744df3,
  "/@id/__x00__virtual:C:/DEV/VUE/yes4nuxt/.nuxt/meta.config.mjs": $id_ca2a413a,
  "/node_modules/nuxt3/dist/pages/runtime/router.mjs": $id_a4d6cb5b,
  "/node_modules/nuxt3/dist/pages/runtime/page.mjs": $id_485c89bf,
  "/node_modules/nuxt3/dist/pages/runtime/utils.mjs": $id_e1b210cc,
  "/node_modules/nuxt3/dist/pages/runtime/layout.mjs": $id_9b68c93f,
  "/@id/__x00__virtual:C:/DEV/VUE/yes4nuxt/.nuxt/layouts.mjs": $id_fe6968b4,
  "/@id/__x00__virtual:C:/DEV/VUE/yes4nuxt/.nuxt/routes.mjs": $id_a67a8a7c,
  "/pages/index.vue?macro=true": $id_5dd70240,
  "/store/user.js": $id_6c3c060a,
  "/node_modules/pinia/dist/pinia.mjs": $id_b1920624,
  "/utils/auth.js": $id_0d5e52a5,
  "/node_modules/firebase/firestore/lite/dist/index.esm.js": $id_8de144de,
  "/node_modules/@firebase/firestore/dist/lite/index.browser.esm2017.js": $id_479c3dfb,
  "/node_modules/@firebase/app/dist/esm/index.esm2017.js": $id_2743050d,
  "/node_modules/@firebase/component/dist/esm/index.esm2017.js": $id_73b80f46,
  "/node_modules/@firebase/util/dist/node-esm/index.node.esm.js": $id_5c1f24f9,
  "/node_modules/@firebase/logger/dist/esm/index.esm2017.js": $id_c5215572,
  "/node_modules/firebase/auth/dist/index.esm.js": $id_030ea2f2,
  "/node_modules/@firebase/auth/dist/node-esm/index.js": $id_ad4b4642,
  "/utils/firestore.js": $id_db0483a6,
  "/store/store.js": $id_fa1a709a,
  "/node_modules/vue/server-renderer/index.js": $id_b215fa1c,
  "/@id/plugin-vue:export-helper": $id_bbb863c1,
  "/pages/login.vue?macro=true": $id_213baa8a,
  "/components/Forms/LoginForm.vue": $id_600babf2,
  "/components/Tools/Loader.vue": $id_c71ecea5,
  "/components/Tools/Loader.vue?vue&type=style&index=0&lang.css": $id_418e9d87,
  "/components/Tools/ErrorMsg.vue": $id_faa89f61,
  "/components/reusable/AppFormField.vue": $id_def58cce,
  "/node_modules/vee-validate/dist/vee-validate.esm.js": $id_2387c42e,
  "/node_modules/@vue/devtools-api/lib/esm/index.js": $id_24b1ff15,
  "/node_modules/@vue/devtools-api/lib/esm/env.js": $id_304a908e,
  "/node_modules/@vue/devtools-api/lib/esm/const.js": $id_8e00d2d1,
  "/node_modules/@vue/devtools-api/lib/esm/proxy.js": $id_c00b31f5,
  "/node_modules/@vue/devtools-api/lib/esm/api/index.js": $id_550ae022,
  "/node_modules/@vue/devtools-api/lib/esm/api/api.js": $id_92fae9b0,
  "/node_modules/@vue/devtools-api/lib/esm/api/app.js": $id_b65c5853,
  "/node_modules/@vue/devtools-api/lib/esm/api/component.js": $id_614015ea,
  "/node_modules/@vue/devtools-api/lib/esm/api/context.js": $id_2baadcfd,
  "/node_modules/@vue/devtools-api/lib/esm/api/hooks.js": $id_3aa5d48c,
  "/node_modules/@vue/devtools-api/lib/esm/api/util.js": $id_03011152,
  "/node_modules/@vue/devtools-api/lib/esm/plugin.js": $id_674cbbbf,
  "/components/Forms/Register.vue": $id_7dc4ae3d,
  "/pages/index.vue": $id_cca58e97,
  "/pages/login.vue": $id_b0922173,
  "/@id/__x00__virtual:C:/DEV/VUE/yes4nuxt/.nuxt/middleware.mjs": $id_163a7712,
  "/middleware/auth.js": $id_3fdca93e,
  "/@id/__x00__virtual:C:/DEV/VUE/yes4nuxt/.nuxt/dist.plugin.d8412656.mjs": $id_052b8ccd,
  "/node_modules/nuxt3/dist/app/compat/vue-demi.mjs": $id_132eda61,
  "/node_modules/nuxt3/dist/app/compat/capi.mjs": $id_7674cc72,
  "/plugins/persistedstate.js": $id_88d211c2,
  "/node_modules/pinia-plugin-persistedstate-2/dist/index.es.prod.mjs": $id_1975012f,
  "/node_modules/js-cookie/dist/js.cookie.mjs": $id_23bde2bf,
  "/node_modules/cookie/index.js": $id_01580015,
  "/plugins/primevue.ts": $id_934480b9,
  "/node_modules/primevue/config/config.esm.js": $id_d31542f8,
  "/node_modules/primevue/api/api.esm.js": $id_556c0162,
  "/node_modules/primevue/utils/utils.esm.js": $id_27066acc,
  "/node_modules/primevue/button/button.esm.js": $id_9578581f,
  "/node_modules/primevue/ripple/ripple.esm.js": $id_eca4a5be,
  "/node_modules/primevue/menubar/menubar.esm.js": $id_1db5deaf,
  "/node_modules/primevue/inputtext/inputtext.esm.js": $id_743d0bd5,
  "/plugins/validate.js": $id_eb85e80e,
  "/node_modules/@vee-validate/rules/dist/vee-validate-rules.esm.js": $id_c1357939,
  "/node_modules/@vee-validate/i18n/dist/vee-validate-i18n.esm.js": $id_0d8ddd77,
  "/node_modules/@nuxt/nitro/dist/runtime/app/nitro.client.mjs": $id_7b587af2,
  "/node_modules/ohmyfetch/dist/index.mjs": $id_780217c4,
  "/@id/__x00__virtual:C:/DEV/VUE/yes4nuxt/.nuxt/components.mjs": $id_5fe6b26c,
  "/@id/__x00__virtual:C:/DEV/VUE/yes4nuxt/.nuxt/root-component.mjs": $id_74e163d3,
  "/node_modules/nuxt3/dist/app/components/nuxt-root.vue": $id_f8564e04,
  "/@id/__x00__virtual:C:/DEV/VUE/yes4nuxt/.nuxt/app-component.mjs": $id_f69acb79,
  "/app.vue": $id_2b46e842,
  "/components/Header/Header.vue": $id_73b23c04,
  "/assets/images/yes_logo.png": $id_66f3e6b7
}


const __pendingModules__ = new Map()
const __pendingImports__ = new Map()
const __ssrContext__ = { global: globalThis }

function __ssrLoadModule__(url, urlStack = []) {
  const pendingModule = __pendingModules__.get(url)
  if (pendingModule) { return pendingModule }
  const modulePromise = __instantiateModule__(url, urlStack)
  __pendingModules__.set(url, modulePromise)
  modulePromise.catch(() => { __pendingModules__.delete(url) })
         .finally(() => { __pendingModules__.delete(url) })
  return modulePromise
}

async function __instantiateModule__(url, urlStack) {
  const mod = __modules__[url]
  if (mod.stubModule) { return mod.stubModule }
  const stubModule = { [Symbol.toStringTag]: 'Module' }
  Object.defineProperty(stubModule, '__esModule', { value: true })
  mod.stubModule = stubModule
  // https://vitejs.dev/guide/api-hmr.html
  const importMeta = { url, hot: { accept() {}, prune() {}, dispose() {}, invalidate() {}, decline() {}, on() {} } }
  urlStack = urlStack.concat(url)
  const isCircular = url => urlStack.includes(url)
  const pendingDeps = []
  const ssrImport = async (dep) => {
    // TODO: Handle externals if dep[0] !== '.' | '/'
    if (!isCircular(dep) && !__pendingImports__.get(dep)?.some(isCircular)) {
      pendingDeps.push(dep)
      if (pendingDeps.length === 1) {
        __pendingImports__.set(url, pendingDeps)
      }
      await __ssrLoadModule__(dep, urlStack)
      if (pendingDeps.length === 1) {
        __pendingImports__.delete(url)
      } else {
        pendingDeps.splice(pendingDeps.indexOf(dep), 1)
      }
    }
    return __modules__[dep].stubModule
  }
  function ssrDynamicImport (dep) {
    // TODO: Handle dynamic import starting with . relative to url
    return ssrImport(dep)
  }

  function ssrExportAll(sourceModule) {
    for (const key in sourceModule) {
      if (key !== 'default') {
        try {
          Object.defineProperty(stubModule, key, {
            enumerable: true,
            configurable: true,
            get() { return sourceModule[key] }
          })
        } catch (_err) { }
      }
    }
  }

  await mod(
    __ssrContext__.global,
    stubModule,
    importMeta,
    ssrImport,
    ssrDynamicImport,
    ssrExportAll
  )

  return stubModule
}


export default await __ssrLoadModule__("C:/DEV/VUE/yes4nuxt/node_modules/nuxt3/dist/app/entry")