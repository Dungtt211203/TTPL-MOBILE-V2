import { UserInfoObject } from '@app-database';
import { MutationAddRealmUserInfoArgs } from '@app-schemas/app';
import { AppConfig } from '@app-config';
import { UpdateMode } from 'realm';
import { variables } from 'native-base';
import { ServiceStorage } from '@app-services';
import { KEY_STORAGE } from '@app-services/service-storage';

module.exports = async (_: any, args: MutationAddRealmUserInfoArgs) => {
  
  const { email, token, customer_info, type_login, password, avatar, background_image } = args.variable;

  const realm_user = AppConfig.getRealmUser();

  let userInfo:
    | (UserInfoObject & Realm.Object<UserInfoObject>)
    | undefined
    | null;
  if (email && realm_user) {
    try {
      userInfo = realm_user.objectForPrimaryKey<UserInfoObject>(
        UserInfoObject,
        email,
      );
    } catch (e) {}
  }

  if (!userInfo) {
    realm_user.write(() => {
      realm_user.create<UserInfoObject>(
        UserInfoObject,
        {
          email: email || '',
          token: token || '',
          type_login: type_login || '',
          password: password || '',
          avatar: avatar || '',
          background_image: background_image || '',
          customer_info: customer_info as any,
        },
        UpdateMode.Modified,
      );
    });
    return true;
  }

  if (args.variable) {
    realm_user.write(() => {
      if (userInfo?.avatar) {
        userInfo.avatar = avatar || '';
      }
      if (userInfo?.background_image) {
        userInfo.background_image = background_image || '';
      }
      if (customer_info && userInfo) {
        userInfo.customer_info = customer_info as any;
      }
      if (password && userInfo) {
        userInfo.password = password;
      }
      if (type_login && userInfo) {
        userInfo.type_login = type_login;
      }
      if (token && userInfo) {
        ServiceStorage.setString(KEY_STORAGE.UserToken, token)
        userInfo.token = token
      }
      UpdateMode.Modified;
    });

    return true;
  }

  return false;
};
