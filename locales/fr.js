import fr from 'vee-validate/dist/locale/fr'

export default async (context, locale) => {
  return {
    validation: fr.messages,
    email : "e-mail",
  };
}
