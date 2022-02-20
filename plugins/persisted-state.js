import { createPersistedStatePlugin } from 'pinia-plugin-persistedstate-2'
import Cookies from 'js-cookie'
import cookie from 'cookie'
import { useStore } from '~/store/store'
import { apiGet } from './firestore'


export default async function ({ $pinia, ssrContext }) {
  if (process.server) {
    const settings = await getSettings(ssrContext.req)
    const store = useStore($pinia)
    store.$patch((state) => {
      state.nick = settings.nick
      state.isLocal = settings.isLocal
      state.program = settings.program
    })
  }

  $pinia.use(
    createPersistedStatePlugin({
      storage: {
        getItem: (key) => {
          if (process.server) {
            const parsedCookies = cookie.parse(ssrContext.req.headers.cookie)
            return parsedCookies[key]
          } else {
            return Cookies.get(key)
          }
        },
        setItem: (key, value) =>
          Cookies.set(key, value, { expires: 30, secure: false }),
        removeItem: (key) => Cookies.remove(key),
      },
    })
  )
}

export async function getSettings (req) {
  let program = null
  const originHost = `${
    req.headers.referer ||
    req.headers['x-forwarded-host'] ||
    req.headers.host ||
    null
  }`
  const isLocal = originHost.indexOf('localhost') > 0 ? true : false
  let nick =
    originHost.replace('https://', '').replace('http://', '').split('.')[0] ||
    'yesmkt'
  if (nick.indexOf('localhost') > -1 || !nick || nick === 'null')
    nick = 'yesmkt'
  if (nick) {
    program = await apiGet('programs', nick)
  }
  return { nick, isLocal, program }
}
