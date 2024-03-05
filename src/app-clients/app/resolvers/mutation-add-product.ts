import {DataProductObjectSchema, UserInfoObject} from '@app-database';
import {
  MutationAddRealmProductArgs,
  MutationAddRealmUserInfoArgs,
} from '@app-schemas/app';
import {AppConfig} from '@app-config';
import {UpdateMode} from 'realm';
import {variables} from 'native-base';

module.exports = async (_: any, args: MutationAddRealmProductArgs) => {
  const {
    data_product_promotion,
    data_product_sellings,
    data_product_suggestions,
  } = args.variable;

  const realm_user = AppConfig.getRealmUser();

  let dataProduct:
    | (DataProductObjectSchema & Realm.Object<DataProductObjectSchema>)
    | undefined
    | null;

  realm_user.write(() => {
    realm_user.create<DataProductObjectSchema>(
      DataProductObjectSchema,
      {
        data_product_promotion: data_product_promotion as any[],
        data_product_sellings: data_product_sellings as any[],
        data_product_suggestions: data_product_suggestions as any[],
      },
      UpdateMode.Modified,
    );
  });

  if (args.variable) {
    realm_user.write(() => {
      if (dataProduct?.data_product_sellings && data_product_sellings) {
        dataProduct.data_product_sellings = data_product_sellings as any[];
      }
      if (dataProduct?.data_product_promotion && data_product_promotion) {
        dataProduct.data_product_promotion = data_product_promotion as any[];
      }
      if (dataProduct?.data_product_suggestions) {
        dataProduct.data_product_suggestions =
          data_product_suggestions as any[];
      }
      UpdateMode.Modified;
    });
    return true;
  }

  return false;
};
