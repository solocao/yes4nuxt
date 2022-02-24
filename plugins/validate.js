import { Form, Field, ErrorMessage, defineRule, configure } from 'vee-validate'
import { required, email, min, url } from '@vee-validate/rules'
import { localize } from '@vee-validate/i18n'
import en from '@vee-validate/i18n/dist/locale/en.json';
import pt from '@vee-validate/i18n/dist/locale/pt_PT.json';
import mn from '@vee-validate/i18n/dist/locale/mn.json';
// import firebase from '@/helpers/firebase'
export default () => {
  defineRule('required', required)
  defineRule('email', email)
  defineRule('min', min)
  defineRule('url', url)
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

  configure({
    generateMessage: localize({
      en,
      pt,
      mn,
    }),
  });


  // configure({
  //   generateMessage: localize('en', {
  //     messages: {
  //       required: '{field} is required',
  //       email: '{field} must be a valid email',
  //       min: '{field} must be a minimum of 0:{min} characters',
  //       unique: '{field} is already taken',
  //       url: '{field} must be a valid URL'
  //     }
  //   })
  // })
}