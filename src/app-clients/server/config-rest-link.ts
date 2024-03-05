import {setContext} from '@apollo/client/link/context';
import ApolloLinkTimeout from 'apollo-link-timeout';
import * as _ from 'lodash';
import {onError} from '@apollo/client/link/error';
import {ServiceHeader} from '@app-services';
import {loadErrorMessages, loadDevMessages} from '@apollo/client/dev';
import {AppConfig} from '@app-config';

if (__DEV__) {
  // Adds messages only in a dev environment
  loadDevMessages();
  loadErrorMessages();
}

export const errorLink = () =>
  onError(({graphQLErrors, networkError}) => {
    if (
      networkError?.message ===
        'Response not successful: Received status code 401' &&
      AppConfig.getEmail()
    ) {
      AppConfig.reLogin();
    }
    if (graphQLErrors)
      graphQLErrors.forEach(({message, locations, path}) => {
        return console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
        );
      });
  });

export const authLink = () =>
  setContext(async (operation: any, {headers}) => {
    let user_token = undefined;
    try {
      user_token = await ServiceHeader.getHeaderUserTokens();
    } catch (err) {
      console.log('user_token', err);
    }
    const header_added = new Headers();
    const headers_keys = headers && Object.keys(headers);
    if (!_.isEmpty(headers_keys)) {
      headers_keys.map((key: any) => {
        header_added.append(key, headers[key]);
      });
    }
    if (user_token && headers?.Authorization === undefined) {
      header_added.append('Authorization', `Bearer ${user_token}`);
    }

    header_added.append('Access-Control-Allow-Origin', '*');
    return {headers: header_added};
  });

export const timeoutLink = new ApolloLinkTimeout(30000); // 30 second timeout
