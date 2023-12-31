// I18n Imports
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";

// Resources Imports
import { resources } from "./resources";

export const locales = ["zh-CN", "en-US", "fr-FR"];

i18next
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    interpolation: { escapeValue: false },
    resources,
    ns: ["translation", "common", "button", "label"],
    defaultNS: "translation",
    fallbackNS: "common",
    // lng: "en-US",
    fallbackLng: "en",
  });
