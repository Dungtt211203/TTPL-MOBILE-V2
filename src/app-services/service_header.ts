import {ServiceStorage} from '@app-services';
import {KEY_STORAGE} from './service-storage';
class ServiceHeader {
  public getHeaderUserTokens() {
    return new Promise<string | undefined>(async (resolve, reject) => {
      try {
        const user_token = await ServiceStorage.getString(
          KEY_STORAGE.UserToken,
          undefined,
        );
        resolve(user_token);
      } catch (error) {
        reject(undefined);
      }
    });
  }

}

export default new ServiceHeader();
