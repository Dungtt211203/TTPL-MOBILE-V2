import {Realm} from '@realm/react';
import DataProduct from './DataProductSchema';

class DataProductObjectSchema extends Realm.Object<DataProductObjectSchema> {
  data_product_promotion?: DataProduct[];
  data_product_sellings?: DataProduct[];
  data_product_suggestions?: DataProduct[];
  static schema = {
    name: 'DataProductObject',
    properties: {
      data_product_promotion: 'DataProduct?',
      data_product_sellings: 'DataProduct?',
      data_product_suggestions: 'DataProduct?',
    },
  };
}

export default DataProductObjectSchema;
