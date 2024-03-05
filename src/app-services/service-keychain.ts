// import * as Keychain from 'react-native-keychain';

// export enum KEYCHAIN_SERVICE {
// 	REALM_WALLET_PASSWORD = 'RealmWalletPassword', // DO NOT MODIFY THIS. ITS IMPACT REALM Wallet PASSWORD
// 	REALM_SHARED_PASSWORD = 'RealmSharedPassword', // DO NOT MODIFY THIS. ITS IMPACT REALM SHARED PASSWORD
// 	WALLET_PASSWORD = 'WalletPassword', // DO NOT MODIFY THIS. This is the first user's password to encrypt RealmDB, SeendPhrase
// 	CURRENT_WALLET = 'CurrentWallet',
// 	USER_PASSWORD = 'UserPassword', // Password for login app
// }

// const options = {
// 	accessControl: Keychain.ACCESS_CONTROL.BIOMETRY_CURRENT_SET_OR_DEVICE_PASSCODE,
// 	accessible: Keychain.ACCESSIBLE.WHEN_UNLOCKED_THIS_DEVICE_ONLY,
// };

// class ServiceKeychain {
// 	public static async setPassword(identifier: string, password: string) {
// 		return this.setKeychainPassword(identifier, password);
// 	}

// 	public static async getPassword(identifier: string) {
// 		return this.getKeychainPassword(identifier);
// 	}

// 	public static async removePassword(identifier: string) {
// 		return Keychain.resetGenericPassword({ ...options, service: identifier });
// 	}

// 	public static async setUserPassword(password: string) {
// 		return this.setKeychainPassword(KEYCHAIN_SERVICE.USER_PASSWORD, password);
// 	}

// 	public static async getUserPassword() {
// 		return this.getKeychainPassword(KEYCHAIN_SERVICE.USER_PASSWORD);
// 	}

// 	public static async removeUserPassword() {
// 		return Keychain.resetGenericPassword({ ...options, service: KEYCHAIN_SERVICE.USER_PASSWORD });
// 	}

// 	public static async setCurrentWallet(identifier: string) {
// 		return this.setKeychainPassword(KEYCHAIN_SERVICE.CURRENT_WALLET, identifier);
// 	}

// 	public static async getCurrentWallet() {
// 		return this.getKeychainPassword(KEYCHAIN_SERVICE.CURRENT_WALLET);
// 	}

// 	public static async removeCurrentWallet() {
// 		return Keychain.resetGenericPassword({ ...options, service: KEYCHAIN_SERVICE.CURRENT_WALLET });
// 	}

// 	public static async clearAllItem() {
// 		await this.removeCurrentWallet();
// 		await this.removePassword(KEYCHAIN_SERVICE.REALM_WALLET_PASSWORD);
// 		await this.removePassword(KEYCHAIN_SERVICE.REALM_SHARED_PASSWORD);
// 		await this.removePassword(KEYCHAIN_SERVICE.WALLET_PASSWORD);
// 		await this.removeUserPassword();
// 	}

// 	private static async setKeychainPassword(service: string, passowrd: string) {
// 		return Keychain.setGenericPassword(service, passowrd, {
// 			...options,
// 			service: service,
// 		});
// 	}

// 	private static async getKeychainPassword(service: string) {
// 		try {
// 			const key = await Keychain.getGenericPassword({
// 				...options,
// 				service: service,
// 			});
// 			if (!key) {
// 				return '';
// 			}
// 			return key.password;
// 		} catch (err) {
// 			return '';
// 		}
// 	}
// }

// export default ServiceKeychain;
