import i18next from "i18next";
import { initReactI18next } from "react-i18next";

export const LANG_CODE = ['vi', 'tw'];

export enum Language {
    Tw = 'TW',
    Vi = 'VI',
  }

const isProduct = !__DEV__;

const resources = {
    [LANG_CODE[1]]: {
        translation: require('@i18n/en/resource.json'),
    },
    [LANG_CODE[0]]: { translation: require('@i18n/vi/resource.json') },
};

class AppLanguage {
    private language_code = LANG_CODE[1];

    public getLanguageCode = () => {
        return this.language_code.toLowerCase();
    };

    public init(lang: Language) {
        this.language_code = lang;
        i18next
            .use(initReactI18next)
            .init({
                compatibilityJSON: 'v3',
                resources,
                lng: lang.toLocaleLowerCase(),
                fallbackLng: LANG_CODE[1],
                interpolation: {
                    escapeValue: false,
                },
                saveMissing: !isProduct,
            });
    }
}

export default new AppLanguage()