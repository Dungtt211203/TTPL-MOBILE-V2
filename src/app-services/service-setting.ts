import { ServiceStorage } from '@app-services';
import { t } from 'i18next';
import * as _ from 'lodash';
import { KEY_STORAGE } from './service-storage';
import appLanguages, { Language } from '@app-languages';

class ServiceSetting {
	static SETTING_APP = 'SETTING_APP';

	// private theme: Theme = Theme.System;
	private language: Language = Language.Vi;
	// private currency: Currency = Currency.Usd;

	public init = async () => {
		const lang: any = await ServiceStorage.getString(KEY_STORAGE.LANGUAGE);
		if (lang) {
			this.language = lang;
		}
		// await this.initTheme();
		await this.initLanguage();
	};

	public initTheme() { }

	public initLanguage() {
		appLanguages.init(this.language)
	}
	public sync = async () => {
		await ServiceStorage.setString(KEY_STORAGE.LANGUAGE, this.language
		);
	};

	public getLanguage = () => {
		return this.language;
	};

	public setLanguage = async (language: Language) => {
		this.language = language;
		await this.sync();
		await this.initLanguage();
	};
}

export default new ServiceSetting();
