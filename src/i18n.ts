import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        switchThemeBtn: 'Switch theme',
        switchLangBtn: 'Change Language',
      },
    },
    ru: {
      translation: {
        switchThemeBtn: 'Переключить тему',
        switchLangBtn: 'Сменить язык',
      },
    },
  },
  lng: 'en', // язык по умолчанию
  fallbackLng: 'en', // язык запасного варианта
  interpolation: {
    escapeValue: false, // React уже экранирует значения
  },
});

export default i18n;
