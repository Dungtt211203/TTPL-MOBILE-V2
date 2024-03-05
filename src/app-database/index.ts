import {Realm} from '@realm/react';
import UserInfoObject from './models/UserInfoObject';
import CustomerInfoObject from './models/CustomerInfoObject';
import DataProductObjectSchema from './models/DataProductObjectSchema';
import DataProductSchema from './models/DataProductSchema';

const SCHEMA_VERSION = 1;

const Schema = [
  UserInfoObject,
  CustomerInfoObject,
  DataProductObjectSchema,
  DataProductSchema,
];

const getRealmDb = async (path: string, encryptKey?: string) => {
  console.log('====================================');
  console.log(path);
  console.log('====================================');
  return Realm.open({
    schema: Schema,
    schemaVersion: SCHEMA_VERSION,
    path,
    // encryptionKey: getRealmPassword(encryptKey),
  });
};

const getRealmPassword = (hex: string) => {
  const array = new Int8Array(hex.length);

  for (let i = 0; i < hex.length; i++) {
    array[i] = hex.charCodeAt(i);
  }

  return array;
};

export {getRealmDb, getRealmPassword, UserInfoObject, DataProductObjectSchema};
