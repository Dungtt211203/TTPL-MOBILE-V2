import Realm from 'realm';

export class Size extends Realm.Object<Size> {
  static schema = {
    name: 'Size',
    primaryKey: 'id',
    properties: {
      id: 'objectId',
      name: 'string',
      children: 'SizeChild[]',
    },
  };
}

export class SizeChild extends Realm.Object<SizeChild> {
  static schema = {
    name: 'SizeChild',
    primaryKey: 'id',
    properties: {
      id: 'objectId',
      name: 'string',
      parentId: 'objectId',
    },
  };
}
