import { I18nProvider as RefineI18nProvider } from "@refinedev/core";
import i18n from "./context";

const i18nProvider: RefineI18nProvider = {
  translate: (key: string) => i18n.t(key),
  changeLocale: (lang: string) => i18n.changeLanguage(lang),
  getLocale: () => i18n.language,
};

export default i18nProvider;