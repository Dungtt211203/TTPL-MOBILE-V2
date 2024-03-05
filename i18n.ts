import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';

const isProduct = !__DEV__;
const resources = {
  en: {
    translation: require('./i18n/en/resource.json'),
  },
  vi: {translation: require('./i18n/vi/resource.json')},
};

i18next.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources,
  lng: 'vi',
  fallbackLng: 'vi',
  interpolation: {
    escapeValue: false,
  },
  saveMissing: !isProduct,
});

export default i18next;
