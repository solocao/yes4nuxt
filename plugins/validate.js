import { extend, configure } from "vee-validate";
import { required, email, alpha, min } from "vee-validate/dist/rules";

extend("required", required);
extend('email', email);
extend("alpha", alpha);
extend("min", min);

export default function VeeValidatePlugin({ app }) {
  configure({
    defaultMessage: (_, values) =>
      app.i18n.t(`validations.${values._rule_}`, values)
  });
}


// localize({
//   en: {
//     messages: `${en.messages} + zaza`,
//     names: {
//       email: "E-mail",
//       password: "Password"
//     },
//     fields: {
//       password: {
//         min: "{_field_} is too short, you want to get hacked?"
//       }
//     }
//   },
//   mn: {
//     messages: mn.messages,
//     names: {
//       email: "Имейл хаяг",
//       password: "Нууц үг"
//     },
//     fields: {
//       password: {
//         min: "{_field_} хэт богино байна."
//       }
//     }
//   },
// });
