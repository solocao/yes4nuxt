export const Counter = () => import('../../components/Counter.vue' /* webpackChunkName: "components/counter" */).then(c => wrapFunctional(c.default || c))
export const NavBar = () => import('../../components/NavBar/NavBar.vue' /* webpackChunkName: "components/nav-bar" */).then(c => wrapFunctional(c.default || c))
export const NavBarTailwind = () => import('../../components/NavBar/Tailwind.vue' /* webpackChunkName: "components/nav-bar-tailwind" */).then(c => wrapFunctional(c.default || c))
export const FormsLoadingButton = () => import('../../components/Forms/LoadingButton.vue' /* webpackChunkName: "components/forms-loading-button" */).then(c => wrapFunctional(c.default || c))
export const FormsLoginForm = () => import('../../components/Forms/LoginForm.vue' /* webpackChunkName: "components/forms-login-form" */).then(c => wrapFunctional(c.default || c))
export const FormsNewPost = () => import('../../components/Forms/NewPost.vue' /* webpackChunkName: "components/forms-new-post" */).then(c => wrapFunctional(c.default || c))
export const FormsSignupForm = () => import('../../components/Forms/SignupForm.vue' /* webpackChunkName: "components/forms-signup-form" */).then(c => wrapFunctional(c.default || c))
export const FormsTextInput = () => import('../../components/Forms/TextInput.vue' /* webpackChunkName: "components/forms-text-input" */).then(c => wrapFunctional(c.default || c))
export const ToolsErrorMsg = () => import('../../components/Tools/ErrorMsg.vue' /* webpackChunkName: "components/tools-error-msg" */).then(c => wrapFunctional(c.default || c))
export const ToolsLoader = () => import('../../components/Tools/Loader.vue' /* webpackChunkName: "components/tools-loader" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
