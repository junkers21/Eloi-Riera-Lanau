import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

const fallbackLng = 'en';
const availableLanguages = ['en', 'es-ES', 'fr-FR'];

i18n
  .use(Backend)
  .use(initReactI18next) // pass the i18n instance to react-i18next.
  .use(LanguageDetector) // detect user language
  .init({
    backend: {
      loadPath: "/assets/i18n/{{ns}}/{{lng}}.json",
    },
    fallbackLng: fallbackLng,
    detection: {
      order: ['querystring', 'navigator'],
      lookupQuerystring: 'lng',
      checkWhitelist: true, // options for language detection
    },
    ns: ["common", "home"],
    defaultNS: "common",
    debug: false,

    whitelist: availableLanguages,
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;