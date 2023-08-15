import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { useRouter } from "next/router";
const ar_home = require("./public/locales/ar/common.json");
const en_home = require("./public/locales/en/common.json");
const zh_home = require("./public/locales/zh/common.json");

const availableLanguages = ["ar", "en", "zh"]; // List of available languages

i18n.use(initReactI18next).init({
  fallbackLng: "ar",
  lng: "ar",
  false: false,
  whitelist: availableLanguages,
  interpolation: {
    escapeValue: false,
  },
  resources: {
    ar: {
      common: ar_home,
    },
    en: {
      common: en_home,
    },
    zh: {
      common: zh_home,
    },
  },
});

export default i18n;
