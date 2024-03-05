import TouchID from 'react-native-touch-id';
// import ServiceKeychain, { KEYCHAIN_SERVICE } from './service-keychain';
import { t } from 'i18next';

type BiometryType = 'FaceID' | 'TouchID';
class ServiceSecure {
	private user_password: string = '';
	private biometryType: BiometryType | null = null;

	public async init() {
		try {
			const bio: any = await TouchID.isSupported();
			this.biometryType = bio;
		} catch (err) {}
	}

	public async authenticate(success?: () => void, error?: (error: any) => void) {
		if (this.biometryType) {
			try {
				const optionalConfigObject = {
					title: t('sercure.titleAuthAndroid', 'Use TouchID with Screehavin'), // Android
					imageColor: '#e00606', // Android
					imageErrorColor: '#ff0000', // Android
					sensorDescription: 'Touch sensor', // Android
					sensorErrorDescription: 'Failed', // Android
					cancelText: t('sercure.cancelTextAndroid', 'Cancel'), // Android
					fallbackLabel: 'Show Passcode', // iOS (if empty, then label is hidden)
					unifiedErrors: false, // use unified error messages (default false)
					passcodeFallback: false, // iOS - allows the device to fall back to using the passcode, if faceid/touch is not available. this does not mean that if touchid/faceid fails the first few times it will revert to passcode, rather that if the former are not enrolled, then it will use the passcode.
				};
				const authenticate = await TouchID.authenticate(
					t('sercure.reason', 'Login to Screehavin'),
					optionalConfigObject,
				);
				if (authenticate) {
					success?.();
				}
			} catch (err) {
				error?.(err);
			}
		} else {
			error?.(new Error('Not supported'));
		}
	}

	public getBiometryType(): BiometryType | null {
		return this.biometryType;
	}
	public getUserPassword() {
		return this.user_password;
	}
}

export default new ServiceSecure();
