import {Account} from './Account';
import {Brand} from './Brand';
import {Category, ChildrenCategory} from './Category';
import {Customer} from './Customer';
import {Color, ColorChild} from './Color';
import ProductSchemas from './ProductSchemas';
import {Size, SizeChild} from './Size';
import {Supplier} from './Supplier';
import {HistorySearchSchemas, Location} from './HistorySearchSchemas';

const Schemas = [
  Category,
  ChildrenCategory,
  Customer,
  ...ProductSchemas,
  Supplier,
  Brand,
  Color,
  Size,
  ColorChild,
  SizeChild,
  Account,
  HistorySearchSchemas,
  Location,
];

export {Schemas};
