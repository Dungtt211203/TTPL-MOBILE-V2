import {Realm} from '@realm/react';
import CustomerInfoObject from './CustomerInfoObject';

class UserInfoObject extends Realm.Object<UserInfoObject> {
  email!: string;
  token!: string;
  type_login?: string;
  password?: string;
  avatar?: string;
  background_image?: string;
  customer_info?: CustomerInfoObject;
  static schema = {
    name: 'UserInfoObject',
    primaryKey: 'email',
    properties: {
      email: 'string',
      token: 'string',
      type_login: 'string?',
      password: 'string?',
      avatar: 'string?',
      background_image: 'string?',
      customer_info: 'CustomerInfoObject',
    },
  };
}

export default UserInfoObject;
