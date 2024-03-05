import Realm from 'realm';

export class Brand extends Realm.Object<Brand> {
  static schema = {
    name: 'Brand',
    primaryKey: 'id',
    properties: {
      id: 'objectId',
      name: 'string',
    },
  };
}
