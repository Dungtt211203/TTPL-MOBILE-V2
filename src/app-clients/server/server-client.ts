import {ApolloClient, ApolloLink, InMemoryCache} from '@apollo/client';
import {RestLink} from 'apollo-link-rest';
import {authLink, errorLink, timeoutLink} from './config-rest-link';
import update from 'immutability-helper';
import _ from 'lodash';

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        getListOrder: {
          keyArgs: ['input', ['status']],
          merge: (existing, incoming) => {
            if (!existing) {
              return incoming;
            }
            if (incoming.data) {
              return update(existing, {
                page_number: {$set: incoming.page_number},
                data: {
                  $set: _.unionBy(existing.data, incoming.data, 'increment_id'),
                },
              });
            }
          },
        },
        filterProduct: {
          keyArgs: ['input', ['store_code']],
          merge: (existing, incoming) => {
            if (!existing) {
              return incoming;
            }

            if (incoming.data) {
              return update(existing, {
                page_number: {$set: incoming.page_number},
                data: {
                  $set: _.unionBy(existing.data, incoming.data, 'entity_id'),
                },
              });
            }
          },
        },
      },
    },
  },
});

const restLink = () => {
  return new RestLink({
    uri: 'https://nhvn.vugiasoftware.com/',
  });
};

const ServerClient = new ApolloClient({
  link: ApolloLink.from([
    errorLink(),
    authLink(),
    timeoutLink.concat(restLink()),
  ]),
  cache: cache,
});

export default ServerClient;
