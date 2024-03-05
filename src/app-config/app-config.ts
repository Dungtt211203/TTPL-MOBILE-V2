import AppClient from '@app-clients/app/app-client';
import ServerClient from '@app-clients/server/server-client';
import {getRealmDb} from '@app-database';
import {
  AddRealmUserInfoDocument,
  GetRealmUserInfoDocument,
} from '@app-hooks/gql-generated/app';
import {LoginWithPassWordDocument} from '@app-hooks/gql-generated/server';
import {
  MutationAddRealmUserInfoArgs,
  QueryGetRealmUserInfoArgs,
  ResRealmUserInfo,
} from '@app-schemas/app';
import {
  QueryGetCustomerInfoArgs,
  QueryLoginWithPassWordArgs,
  ResLoginWithPassWord,
} from '@app-schemas/server';
import {ServiceStorage} from '@app-services';
import {KEY_STORAGE} from '@app-services/service-storage';
import {Realm} from '@realm/react';
import {useToast} from 'native-base';
import {useTranslation} from 'react-i18next';
import * as RNFS from 'react-native-fs';

class AppConfig {
  private readonly realm_path;

  private realm_shared: Realm | undefined;
  private realm_user: Realm | undefined;
  private identifier: string = '';
  private email_user?: string;
  private token_user?: string;

  constructor() {
    const document = RNFS.DocumentDirectoryPath;
    this.realm_path = [document, 'realm'].join('/');
  }

  public async init() {
    if (!this.token_user) {
      this.token_user = await ServiceStorage.getString(
        KEY_STORAGE.UserToken,
        '',
      );
    }
    if (!this.email_user) {
      this.email_user = await ServiceStorage.getString(KEY_STORAGE.Email, '');
    }
    if (!(await RNFS.exists(this.realm_path))) {
      await RNFS.mkdir(this.realm_path);
    }
    if (!this.realm_shared || this.realm_shared.isClosed) {
      this.realm_shared = await getRealmDb(this.makeAppRealmPath('shared'));
    }
    if (this.email_user) {
      if (!this.realm_user || this.realm_user.isClosed) {
        this.realm_user = await getRealmDb(
          this.makeAppRealmPath(String(this.email_user)),
        );
      }
    }
  }

  public setEmail = (value: string) => {
    this.email_user = value;
  };

  public getToken = () => {
    return this.token_user;
  };

  public getEmail = () => {
    return this.email_user;
  };

  public removeData = async (identifier: string) => {
    let wallet_realm_path = this.makeAppRealmPath(identifier);
    let realm_lock = [this.realm_path, `${identifier}.realm.lock`].join('/');

    if (
      !(await RNFS.exists(wallet_realm_path)) ||
      !(await RNFS.exists(realm_lock))
    ) {
      return false;
    }

    await RNFS.unlink(wallet_realm_path);
    await RNFS.unlink(realm_lock);

    this.identifier = '';

    return true;
  };

  public getIdentifier = () => {
    return this.identifier;
  };

  public clearStore = async () => {
    this.email_user = '';
    this.token_user = '';
    await AppClient.refetchQueries({include: ['GetRealmUserInfo']});
    this.realm_user?.close();
  };

  public getRealmShared = () => {
    if (!this.realm_shared) {
      throw new Error('Can not init realm shared');
    }

    return this.realm_shared;
  };

  public reLogin = async () => {
    const resposne = await AppClient.query<
      {query: ResRealmUserInfo},
      QueryGetRealmUserInfoArgs
    >({
      query: GetRealmUserInfoDocument,
      variables: {isPass: true},
    });
    const {email, password} = resposne.data.query;
    if (email && password) {
      const resRelogin = await ServerClient.query<
        {query: ResLoginWithPassWord},
        QueryLoginWithPassWordArgs
      >({
        query: LoginWithPassWordDocument,
        variables: {
          username: email,
          password: password,
        },
        fetchPolicy: 'no-cache',
      });
      const {token} = resRelogin.data.query;
      if (token) {
        await AppClient.mutate<
          {mutation: boolean},
          MutationAddRealmUserInfoArgs
        >({
          mutation: AddRealmUserInfoDocument,
          variables: {
            variable: {email, token},
          },
          refetchQueries: ['GetRealmUserInfo'],
        });
      }
    }
  };
  
  public getRealmUser = () => {
    if (!this.realm_user) {
      throw new Error('Can not init realm user');
    }

    return this.realm_user;
  };

  private clearRealmUser = () => {
    if (this.realm_user) {
      if (!this.realm_user.isClosed) {
        this.realm_user.close();
        this.realm_user = undefined;
      }
    }
  };

  private makeAppRealmPath = (identifier: string) => {
    return [this.realm_path, `${identifier}.realm`].join('/');
  };
}

export default new AppConfig();
