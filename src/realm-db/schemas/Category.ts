import Realm, {ObjectSchema} from 'realm';

export class ChildrenCategory extends Realm.Object<ChildrenCategory> {
  id!: number;
  parent_id?: number;
  name!: string;
  is_active?: boolean;
  position?: number;
  level?: number;
  product_count?: number;
  image?: string;
  static schema: ObjectSchema = {
    name: 'ChildrenCategory',
    properties: {
      id: 'int',
      parent_id: 'int',
      name: 'string',
      is_active: 'bool?',
      position: 'int?',
      level: 'int?',
      product_count: 'int?',
      image: 'string?',
    },
    // primaryKey: '_id',
  };
}

export class Category extends Realm.Object<Category> {
  id!: number;
  parent_id?: number;
  name!: string;
  is_active?: boolean;
  position?: number;
  level?: number;
  product_count?: number;
  image?: string;
  children_data?: ChildrenCategory[];
  static schema: ObjectSchema = {
    name: 'Category',
    properties: {
      id: 'int',
      parent_id: 'int',
      name: 'string',
      is_active: 'bool?',
      position: 'int?',
      level: 'int?',
      product_count: 'int?',
      image: 'string?',
      children_data: 'ChildrenCategory[]',
    },
    // primaryKey: '_id',
  };
}
