import { initializeApp, getApps } from 'firebase/app'

export const fbCfg = {
  apiKey: 'AIzaSyCqSOQwtaED9QTOg_IqZxOKgF5N89zO2lQ',
  authDomain: 'yes4eutests.fbApp.com',
  projectId: 'yes4eutests',
  storageBucket: 'yes4eutests.appspot.com',
  messagingSenderId: '1062997613231',
  appId: '1:1062997613231:web:30229b76ad3ae11141125a',
  measurementId: 'G-8W2XRGLK5M',
}
const apps = getApps()
const fbApp = !apps.length ? initializeApp(fbCfg) : apps[0]

export { fbApp }
