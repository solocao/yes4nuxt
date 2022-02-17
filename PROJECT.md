# yes4nuxt

- NOTE ZEE: we'll use this draft the overall project and identify next steps

## NEXT steps

- json-based forms [ZEE]

## PROJECT

coding style:

- methods should not exceed the max no of lines visible in the editor and lines should not exceed what is visible either
- therefore, don't use blank lines inside a method
- no need to terminate lines with ;

environment:
  Nuxt2
  Vue3
  Pinia
  Bootstrap
  BootstrapVue
  VeeValidate

boilerplate/starter features/modules:

- SSR with Firebase Functions [DONE]
- generic Firebase Firestore service (list, get, add, set, update, delete)
- Firebase authentication (login email/pwd and signup DONE, missing resetPassword)
- multi-tenant platform [NICK is captured, must use it to upload program stylesheet & fonts (serif & non-serif)]
- json-based forms (VeeValidate, <https://vee-validate.logaretm.com/v4/>)
  - first, stored in json files (assets/{nick || 'yes4web'}/forms/{collection})
  - after, stored in firestore (forms/{nick || 'yes4web'}/forms/{collection})
  - in either case, if a {nick} form exists it shall be used, otherwise a generic form will (stored with nick 'yes4web')
- generic components, following atomic design methodology, for pages with different templates/components:
  - grids
  - slide-shows
  - tables
  - tree-tables
  - trees
  - videos
  - posts
  - html editor
- navigation bar
- multi-language ([vue-i18n](https://kazupon.github.io/vue-i18n/))
- PWA (<https://pwa.nuxtjs.org/>)
- routing with lazy loading
- software versions update service
- role-based access control service
- menus generation service
- generic Firebase Storage service
- Analytics service
- SEO service
- Sendinblue interface service via API
- BulkSMS interface service via API
- push notifications service
- HTTP service for Firebase Functions based API
- Cart/Checkout service
- Stripe & Paypal service
- translation service
- Vuex or, better, Pinia store
- algolia or elasticsearch service / generic component
- Nuxt 3 upgrade, as stable release is launched
- deployment to Google Play & AppStore via Capacitor.
Example components for each of the above functionalities.
Concise & detailed documentation.
Provide training for the rest of the team on Vue/Nuxt related themes and, specifically, on the use of the boilerplate.
