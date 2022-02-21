import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "/Users/zemunkh/Documents/GitHub/node_modules/nuxt3/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}