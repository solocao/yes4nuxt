import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "C:/DEV/VUE/yes4nuxt/node_modules/nuxt3/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}