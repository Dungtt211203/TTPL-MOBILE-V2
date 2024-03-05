// File Product.js
import Realm from 'realm';

// Đối tượng CategoryLink
class CategoryLink extends Realm.Object<CategoryLink> {
  static schema = {
    name: 'CategoryLink',
    properties: {
      position: 'int?',
      category_id: 'string?',
    },
  };
}

// Đối tượng ConfigurableProductOptionValue
class ConfigurableProductOptionValue extends Realm.Object<ConfigurableProductOptionValue> {
  static schema = {
    name: 'ConfigurableProductOptionValue',
    properties: {
      value_index: 'int?',
    },
  };
}

// Đối tượng ConfigurableProductOption
class ConfigurableProductOption extends Realm.Object<ConfigurableProductOption> {
  static schema = {
    name: 'ConfigurableProductOption',
    properties: {
      id: 'int?',
      attribute_id: 'string?',
      label: 'string?',
      position: 'int?',
      values: 'ConfigurableProductOptionValue[]',
      product_id: 'int?',
    },
  };
}

// Đối tượng ExtensionAttributes
class ExtensionAttributes extends Realm.Object<ExtensionAttributes> {
  static schema = {
    name: 'ExtensionAttributes',
    properties: {
      website_ids: 'int?[]',
      category_links: 'CategoryLink[]',
      configurable_product_options: 'ConfigurableProductOption[]',
      configurable_product_links: 'int?[]',
    },
  };
}

// Đối tượng MediaGalleryEntry
class MediaGalleryEntry extends Realm.Object<MediaGalleryEntry> {
  static schema = {
    name: 'MediaGalleryEntry',
    properties: {
      id: 'int?',
      media_type: 'string?',
      label: 'string?',
      position: 'int?',
      disabled: 'bool?',
      types: 'string?[]',
      file: 'string?',
    },
  };
}

// Đối tượng CustomAttribute
class CustomAttribute extends Realm.Object<CustomAttribute> {
  static schema = {
    name: 'CustomAttribute',
    properties: {
      attribute_code: 'string?',
      value: 'string?',
    },
  };
}

class Prices extends Realm.Object<Prices> {
  static schema = {
    name: 'Prices',
    properties: {
      import: 'string',
      wholesale: 'string',
      ntd: 'string',
      ctv: 'string',
      ship: 'string',
      sell: 'string',
    },
  };
}

// Đối tượng Product
class Product extends Realm.Object<Product> {
  static schema = {
    name: 'Product',
    primaryKey: 'id',
    properties: {
      id: 'objectId',
      sku: 'string?',
      name: 'string?',
      attribute_set_id: 'int?',
      status: 'int?',
      visibility: 'int?',
      type_id: 'string?',
      created_at: 'string?',
      updated_at: 'string?',
      extension_attributes: 'ExtensionAttributes?',
      product_links: 'int?[]',
      options: 'int?[]',
      media_gallery_entries: 'MediaGalleryEntry[]',
      tier_prices: 'int?[]',
      custom_attributes: 'CustomAttribute[]',
      category: 'Category?',
      supplier: 'Supplier?',
      brand: 'Brand?',
      prices: 'Prices?',
      colors: 'ColorChild[]',
      sizes: 'SizeChild[]',
    },
  };
}

class ProductList extends Realm.Object<ProductList> {
  static schema = {
    name: 'ProductList',
    properties: {
      title: 'string',
      items: 'Product[]',
    },
  };
}

// Mảng các schema
const ProductSchemas = [
  CategoryLink,
  ConfigurableProductOptionValue,
  ConfigurableProductOption,
  ExtensionAttributes,
  MediaGalleryEntry,
  CustomAttribute,
  Product,
  ProductList,
  Prices,
];

export default ProductSchemas;
