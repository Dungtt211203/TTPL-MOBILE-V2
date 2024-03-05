import {Mutation, Query} from '@app-schemas/app';

export interface GQLResolver {
  Query: Query;
  Mutation: Mutation;
}

export default {
  Query: {
    getRealmUserInfo: require('./query-get-user-info'),
  },
  Mutation: {
    addRealmUserInfo: require('./mutation-add-user-info'),
    addRealmProduct: require('./mutation-add-product'),
  },
} as GQLResolver;
