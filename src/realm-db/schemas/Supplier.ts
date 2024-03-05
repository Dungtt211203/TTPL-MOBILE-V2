import Realm from 'realm';

export class Supplier extends Realm.Object<Supplier> {
  static schema = {
    name: 'Supplier',
    properties: {
      id: 'objectId',
      name: 'string',
      phoneNumber: 'string',
      address: 'string',
      inDebt: 'float',
      images: 'string[]',
    },
  };
}
