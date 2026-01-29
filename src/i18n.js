

import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import uzTranslation from "./Locals/uz.json";
import ruTranslation from "./Locals/ru.json";
import enTranslation from "./Locals/en.json";

i18next
  .use(initReactI18next)
  .init({
    resources: {
      uz: { translation: uzTranslation },
      ru: { translation: ruTranslation },
      en: { translation: enTranslation },
    },
    lng: "uz",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
