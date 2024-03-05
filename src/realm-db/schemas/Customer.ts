import Realm, {ObjectSchema} from 'realm';

export class Customer extends Realm.Object<Customer> {
  name!: string;
  address!: string;
  phoneNumber!: string;
  note?: string;
  gender!: string;
  avatar?: string;
  _id!: Realm.BSON.ObjectId;
  static schema: ObjectSchema = {
    name: 'Customer',
    primaryKey: '_id',
    properties: {
      _id: 'objectId',
      name: 'string',
      address: 'string',
      phoneNumber: 'string',
      note: 'string?',
      gender: 'string',
      avatar: 'string?',
    },
  };
}
