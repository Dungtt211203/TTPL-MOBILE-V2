import Realm from 'realm';

export class Color extends Realm.Object<Color> {
  static schema = {
    name: 'Color',
    primaryKey: 'id',
    properties: {
      id: 'objectId',
      name: 'string',
      code: 'string',
      children: 'ColorChild[]',
    },
  };
}

export class ColorChild extends Realm.Object<ColorChild> {
  static schema = {
    name: 'ColorChild',
    primaryKey: 'id',
    properties: {
      id: 'objectId',
      name: 'string',
      code: 'string',
      parentId: 'objectId',
    },
  };
}
