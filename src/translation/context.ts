import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from './locales/en.json'
import ph from './locales/ph.json'
import fr from './locales/fr.json'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en
      },
      ph: {
        translation: ph,
      },
      fr: {
        translation: fr,
      },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;