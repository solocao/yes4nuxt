import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = "auth"
declare module "/Users/zemunkh/Documents/yes4nuxt/node_modules/nuxt3/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}