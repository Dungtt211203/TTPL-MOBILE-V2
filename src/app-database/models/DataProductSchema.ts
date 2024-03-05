import {BSON} from 'realm';

class DataProductSchema extends Realm.Object<DataProductSchema> {
  special_price?: string;
  product_id?: string;
  name?: string;
  category?: string;
  created_at?: string;
  qty?: string;
  main_image?: string;
  small_image?: string;
  gallery?: string;
  sku?: string;
  color?: string;
  size?: string;
  price?: string;
  instock?: string;
  whole_sale?: string;
  description?: string;
  short_description?: string;
  child_product?: string;
  group_id?: string;
  ecial_price?: string;
  final_price?: string;
  max_regular_amount?: string;
  min_regular_amount?: string;
  widget_id?: string;
  language?: string;
  static schema: Realm.ObjectSchema = {
    name: 'DataProduct',
    properties: {
      special_price: 'string',
      product_id: 'string',
      name: 'string',
      category: 'string',
      created_at: 'string',
      qty: 'string',
      main_image: 'string',
      small_image: 'string',
      gallery: 'string',
      sku: 'string',
      color: 'string',
      size: 'string',
      price: 'string',
      instock: 'string',
      whole_sale: 'string',
      description: 'string',
      short_description: 'string',
      child_product: 'string',
      group_id: 'string',
      ecial_price: 'string',
      final_price: 'string',
      max_regular_amount: 'string',
      min_regular_amount: 'string',
      widget_id: 'string',
      language: 'string',
    },
  };
}
export default DataProductSchema;
