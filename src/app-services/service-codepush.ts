import { Platform } from 'react-native';
import ServiceStorage from './service-storage';
import CodePush, { DownloadProgress } from 'react-native-code-push';
import { EventEmitter } from 'events';

const CODE_PUSH_KEY: any = {
	IOS_PRODUCTION: 'QWfkWYWIINTdNuVd5qSwYpKV9dQkH3Txo9JEE',
	IOS_DEVELOPMENT: 'IDrFoqO5lmOOlYnQyhrU05313Sl_NKX04EifD',

	ANDROID_PRODUCTION: 'S3LicH0qoPGvTuOs0uZE0VwGgVJCYHlvB8QiA',
	ANDROID_DEVELOPMENT: 'psflU2tUunwMuRpE_N7wp7hFhvqdoESZPNjxe',
};

enum CODE_PUSH_TYPE {
	PRODUCTION = 'production',
	DEVELOPMENT = 'development',
}

class ServiceCodePush {
	private type: CODE_PUSH_TYPE = CODE_PUSH_TYPE.PRODUCTION;
	private readonly STORAGE_KEY = 'ServiceCodePush';
	private event: EventEmitter;
	private status: CodePush.SyncStatus = CodePush.SyncStatus.UP_TO_DATE;

	constructor() {
		this.event = new EventEmitter();
	}

	public init = async () => {
		const type = (await ServiceStorage.getString(
			this.STORAGE_KEY,
		)) as CODE_PUSH_TYPE;

		if (type) {
			this.type = type;
		}
	};

	public getCodePushKey = () => {
		const key = [Platform.OS.toUpperCase(), this.type.toUpperCase()].join('_');
		return CODE_PUSH_KEY[key];
	};

	public getStatus = () => {
		return this.status;
	}

	public publishStatus = (status: CodePush.SyncStatus) => {
		this.status = status;
		this.event.emit('event_code_push_update', status);
	};

	public async getAppVersion() {
		return CodePush.getUpdateMetadata();
	}

	public changeMode = async (mode: CODE_PUSH_TYPE) => {
		await ServiceStorage.setString(this.STORAGE_KEY, mode);

		/**
		 * Restart App For Update
		 */
		this.restartApp();
	};

	public restartApp = () => {
		CodePush.allowRestart();
		CodePush.restartApp();
	};
	
	public onCodePushUpdate = (
		callback: (status: CodePush.SyncStatus) => void,
	) => {
		this.event.on('event_code_push_update', status => {
			typeof callback === 'function' && callback(status);
		});
	};

	public publishProgress = (process: DownloadProgress) => {
		this.event.emit('event_code_push_process', process);
	};

	public onProgressUpdate = (
		callback: (progress: DownloadProgress) => void,
	) => {
		this.event.on('event_code_push_process', (process: DownloadProgress) => {
			typeof callback === 'function' && callback(process);
		});
	};
}

export default new ServiceCodePush();
