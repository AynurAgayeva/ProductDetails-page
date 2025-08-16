import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    az: {
      translation: {
        home: "Ana Səhifə",
        products: "Məhsullar",
        contact: "Əlaqə",
        about: "Haqqımızda",
        darkMode: "🌙 Dark Mode",
        lightMode: "🌞 Light Mode",
        changeLang: "Dili dəyiş",
     
      }
    },
    en: {
      translation: {
        home: "Home",
        products: "Products",
        contact: "Contact",
        about: "About",
        darkMode: "Dark Mode",
        lightMode: "Light Mode",
        changeLang: "Change Language"
      }
    }
  },
  lng: "az", // default dil
  fallbackLng: "az",
  interpolation: { escapeValue: false }
});

export default i18n;
