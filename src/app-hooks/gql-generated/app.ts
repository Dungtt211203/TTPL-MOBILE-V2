import * as Types from '@app-schemas/app';

import {gql} from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;

export const GetRealmUserInfoDocument = gql`
  query GetRealmUserInfo($isPass: Boolean) {
    query: getRealmUserInfo(isPass: $isPass) @client {
      email
      token
      type_login
      password
      avatar
      background_image
      customer_info {
        entity_id
        website_id
        email
        group_id
        increment_id
        store_id
        created_at
        updated_at
        is_active
        disable_auto_group_change
        created_in
        prefix
        firstname
        middlename
        lastname
        suffix
        dob
        password_hash
        rp_token
        rp_token_created_at
        default_billing
        default_shipping
        taxvat
        confirmation
        gender
        failures_num
        first_failure
        lock_expires
        session_cutoff
        address
        avatar
        orders
        total_number_of_completed_orders
        total_number_of_unfinished_orders
        total_number_of_returned_orders
        total_amount_paid
        total_amount_owed
      }
    }
  }
`;

/**
 * __useGetRealmUserInfoQuery__
 *
 * To run a query within a React component, call `useGetRealmUserInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRealmUserInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRealmUserInfoQuery({
 *   variables: {
 *      isPass: // value for 'isPass'
 *   },
 * });
 */
export function useGetRealmUserInfoQuery(
  baseOptions?: Apollo.QueryHookOptions<
    Types.GetRealmUserInfoQuery,
    Types.GetRealmUserInfoQueryVariables
  >,
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useQuery<
    Types.GetRealmUserInfoQuery,
    Types.GetRealmUserInfoQueryVariables
  >(GetRealmUserInfoDocument, options);
}
export function useGetRealmUserInfoLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.GetRealmUserInfoQuery,
    Types.GetRealmUserInfoQueryVariables
  >,
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useLazyQuery<
    Types.GetRealmUserInfoQuery,
    Types.GetRealmUserInfoQueryVariables
  >(GetRealmUserInfoDocument, options);
}
export type GetRealmUserInfoQueryHookResult = ReturnType<
  typeof useGetRealmUserInfoQuery
>;
export type GetRealmUserInfoLazyQueryHookResult = ReturnType<
  typeof useGetRealmUserInfoLazyQuery
>;
export type GetRealmUserInfoQueryResult = Apollo.QueryResult<
  Types.GetRealmUserInfoQuery,
  Types.GetRealmUserInfoQueryVariables
>;
export const AddRealmUserInfoDocument = gql`
  mutation AddRealmUserInfo($variable: InputRealmAddUserInfo!) {
    mutation: addRealmUserInfo(variable: $variable) @client
  }
`;
export type AddRealmUserInfoMutationFn = Apollo.MutationFunction<
  Types.AddRealmUserInfoMutation,
  Types.AddRealmUserInfoMutationVariables
>;

/**
 * __useAddRealmUserInfoMutation__
 *
 * To run a mutation, you first call `useAddRealmUserInfoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddRealmUserInfoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addRealmUserInfoMutation, { data, loading, error }] = useAddRealmUserInfoMutation({
 *   variables: {
 *      variable: // value for 'variable'
 *   },
 * });
 */
export function useAddRealmUserInfoMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.AddRealmUserInfoMutation,
    Types.AddRealmUserInfoMutationVariables
  >,
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useMutation<
    Types.AddRealmUserInfoMutation,
    Types.AddRealmUserInfoMutationVariables
  >(AddRealmUserInfoDocument, options);
}
export type AddRealmUserInfoMutationHookResult = ReturnType<
  typeof useAddRealmUserInfoMutation
>;
export type AddRealmUserInfoMutationResult =
  Apollo.MutationResult<Types.AddRealmUserInfoMutation>;
export type AddRealmUserInfoMutationOptions = Apollo.BaseMutationOptions<
  Types.AddRealmUserInfoMutation,
  Types.AddRealmUserInfoMutationVariables
>;
export const AddRealmProductDocument = gql`
  mutation AddRealmProduct($variable: InputAddRealmProduct!) {
    mutation: addRealmProduct(variable: $variable) @client
  }
`;
export type AddRealmProductMutationFn = Apollo.MutationFunction<
  Types.AddRealmProductMutation,
  Types.AddRealmProductMutationVariables
>;

/**
 * __useAddRealmProductMutation__
 *
 * To run a mutation, you first call `useAddRealmProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddRealmProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addRealmProductMutation, { data, loading, error }] = useAddRealmProductMutation({
 *   variables: {
 *      variable: // value for 'variable'
 *   },
 * });
 */
export function useAddRealmProductMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.AddRealmProductMutation,
    Types.AddRealmProductMutationVariables
  >,
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useMutation<
    Types.AddRealmProductMutation,
    Types.AddRealmProductMutationVariables
  >(AddRealmProductDocument, options);
}
export type AddRealmProductMutationHookResult = ReturnType<
  typeof useAddRealmProductMutation
>;
export type AddRealmProductMutationResult =
  Apollo.MutationResult<Types.AddRealmProductMutation>;
export type AddRealmProductMutationOptions = Apollo.BaseMutationOptions<
  Types.AddRealmProductMutation,
  Types.AddRealmProductMutationVariables
>;
