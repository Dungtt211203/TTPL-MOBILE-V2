import * as Types from '@app-schemas/server';

import {gql} from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;

export const GetListUsedCouponsDocument = gql`
  query GetListUsedCoupons {
    getListUsedCoupons
      @rest(
        type: "getListUsedCoupons"
        method: GET
        path: "rest/V1/carts/mine/coupons"
      )
  }
`;

/**
 * __useGetListUsedCouponsQuery__
 *
 * To run a query within a React component, call `useGetListUsedCouponsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetListUsedCouponsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetListUsedCouponsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetListUsedCouponsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    Types.GetListUsedCouponsQuery,
    Types.GetListUsedCouponsQueryVariables
  >,
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useQuery<
    Types.GetListUsedCouponsQuery,
    Types.GetListUsedCouponsQueryVariables
  >(GetListUsedCouponsDocument, options);
}
export function useGetListUsedCouponsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.GetListUsedCouponsQuery,
    Types.GetListUsedCouponsQueryVariables
  >,
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useLazyQuery<
    Types.GetListUsedCouponsQuery,
    Types.GetListUsedCouponsQueryVariables
  >(GetListUsedCouponsDocument, options);
}
export type GetListUsedCouponsQueryHookResult = ReturnType<
  typeof useGetListUsedCouponsQuery
>;
export type GetListUsedCouponsLazyQueryHookResult = ReturnType<
  typeof useGetListUsedCouponsLazyQuery
>;
export type GetListUsedCouponsQueryResult = Apollo.QueryResult<
  Types.GetListUsedCouponsQuery,
  Types.GetListUsedCouponsQueryVariables
>;
export const GetListAddressFavouritiesDocument = gql`
  query GetListAddressFavourities {
    getListAddressFavourities
      @rest(
        type: "getListAddressFavourities"
        method: GET
        path: "magento_api/api/address"
      ) {
      status
      messenger
      data {
        id
        latitude
        longitude
        title
        url
        description
        type
        created_by
        created_at
      }
    }
  }
`;

/**
 * __useGetListAddressFavouritiesQuery__
 *
 * To run a query within a React component, call `useGetListAddressFavouritiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetListAddressFavouritiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetListAddressFavouritiesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetListAddressFavouritiesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    Types.GetListAddressFavouritiesQuery,
    Types.GetListAddressFavouritiesQueryVariables
  >,
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useQuery<
    Types.GetListAddressFavouritiesQuery,
    Types.GetListAddressFavouritiesQueryVariables
  >(GetListAddressFavouritiesDocument, options);
}
export function useGetListAddressFavouritiesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.GetListAddressFavouritiesQuery,
    Types.GetListAddressFavouritiesQueryVariables
  >,
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useLazyQuery<
    Types.GetListAddressFavouritiesQuery,
    Types.GetListAddressFavouritiesQueryVariables
  >(GetListAddressFavouritiesDocument, options);
}
export type GetListAddressFavouritiesQueryHookResult = ReturnType<
  typeof useGetListAddressFavouritiesQuery
>;
export type GetListAddressFavouritiesLazyQueryHookResult = ReturnType<
  typeof useGetListAddressFavouritiesLazyQuery
>;
export type GetListAddressFavouritiesQueryResult = Apollo.QueryResult<
  Types.GetListAddressFavouritiesQuery,
  Types.GetListAddressFavouritiesQueryVariables
>;
export const GetListDriverDocument = gql`
  query GetListDriver($cur_page: String, $page_size: String) {
    getListDriver(cur_page: $cur_page, page_size: $page_size)
      @rest(
        type: "getListDriver"
        method: GET
        path: "magento_api/api/list_driver?{args}"
      ) {
      status
      messenger
      data {
        driver_id
        name
        phone_number
        license_plate
        rating
      }
    }
  }
`;

/**
 * __useGetListDriverQuery__
 *
 * To run a query within a React component, call `useGetListDriverQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetListDriverQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetListDriverQuery({
 *   variables: {
 *      cur_page: // value for 'cur_page'
 *      page_size: // value for 'page_size'
 *   },
 * });
 */
export function useGetListDriverQuery(
  baseOptions?: Apollo.QueryHookOptions<
    Types.GetListDriverQuery,
    Types.GetListDriverQueryVariables
  >,
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useQuery<
    Types.GetListDriverQuery,
    Types.GetListDriverQueryVariables
  >(GetListDriverDocument, options);
}
export function useGetListDriverLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.GetListDriverQuery,
    Types.GetListDriverQueryVariables
  >,
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useLazyQuery<
    Types.GetListDriverQuery,
    Types.GetListDriverQueryVariables
  >(GetListDriverDocument, options);
}
export type GetListDriverQueryHookResult = ReturnType<
  typeof useGetListDriverQuery
>;
export type GetListDriverLazyQueryHookResult = ReturnType<
  typeof useGetListDriverLazyQuery
>;
export type GetListDriverQueryResult = Apollo.QueryResult<
  Types.GetListDriverQuery,
  Types.GetListDriverQueryVariables
>;
export const GetListSellerOfCustomerDocument = gql`
  query GetListSellerOfCustomer($cur_page: String, $page_size: String) {
    getListSellerOfCustomer(cur_page: $cur_page, page_size: $page_size)
      @rest(
        type: "getListSellerOfCustomer"
        method: GET
        path: "magento_api/api/seller_list?{args}"
      ) {
      status
      messenger
      data {
        seller_id
        name
        url_key
        description
        group_id
        sale
        commission_id
        image
        thumbnail
        page_title
        meta_keywords
        creation_time
        update_time
        page_layout
        address
        layout_update_xml
        status
        position
        customer_id
        email
        created_at
        payment_source
        twitter_id
        facebook_id
        gplus_id
        youtube_id
        vimeo_id
        instagram_id
        pinterest_id
        linkedin_id
        tw_active
        fb_active
        gplus_active
        youtube_active
        vimeo_active
        instagram_active
        pinterest_active
        linkedin_active
        others_info
        banner_pic
        shop_url
        shop_title
        logo_pic
        company_locality
        country_pic
        country
        company_description
        meta_keyword
        background_width
        meta_description
        store_id
        contact_number
        return_policy
        shipping_policy
        page_id
        company
        city
        region
        street
        product_count
        duration_of_vendor
        region_id
        postcode
        telephone
        total_sold
        lat
        lng
        opening_time
        city_id
        close_time
        theme
        chat_id
        logo
        category_ids
        status_banner_left
        banner_left
        zalo_link
        is_verified
        identity_id
        identity_card_String
        identity_card_2
        electrical_bill
        water_bill
        reward_points_status
        reward_points_value
        is_promotion
        type_of_seller
        main_category
        collaborator_code
        hotline
        longest_gift_id
        longest_gift_time
        best_sale_id
        role_id
        is_super_user
        _first_store_id
        store_code
        store
      }
    }
  }
`;

/**
 * __useGetListSellerOfCustomerQuery__
 *
 * To run a query within a React component, call `useGetListSellerOfCustomerQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetListSellerOfCustomerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetListSellerOfCustomerQuery({
 *   variables: {
 *      cur_page: // value for 'cur_page'
 *      page_size: // value for 'page_size'
 *   },
 * });
 */
export function useGetListSellerOfCustomerQuery(
  baseOptions?: Apollo.QueryHookOptions<
    Types.GetListSellerOfCustomerQuery,
    Types.GetListSellerOfCustomerQueryVariables
  >,
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useQuery<
    Types.GetListSellerOfCustomerQuery,
    Types.GetListSellerOfCustomerQueryVariables
  >(GetListSellerOfCustomerDocument, options);
}
export function useGetListSellerOfCustomerLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.GetListSellerOfCustomerQuery,
    Types.GetListSellerOfCustomerQueryVariables
  >,
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useLazyQuery<
    Types.GetListSellerOfCustomerQuery,
    Types.GetListSellerOfCustomerQueryVariables
  >(GetListSellerOfCustomerDocument, options);
}
export type GetListSellerOfCustomerQueryHookResult = ReturnType<
  typeof useGetListSellerOfCustomerQuery
>;
export type GetListSellerOfCustomerLazyQueryHookResult = ReturnType<
  typeof useGetListSellerOfCustomerLazyQuery
>;
export type GetListSellerOfCustomerQueryResult = Apollo.QueryResult<
  Types.GetListSellerOfCustomerQuery,
  Types.GetListSellerOfCustomerQueryVariables
>;
export const GetListCategoryDocument = gql`
  query GetListCategory {
    getListCategory
      @rest(
        type: "getListCategory"
        method: GET
        path: "rest/default/V1/custom/categories"
      ) {
      id
      parent_id
      name
      is_active
      position
      level
      product_count
      image
      children_data {
        id
        parent_id
        name
        is_active
        position
        level
        product_count
        image
        children_data {
          id
          parent_id
          name
          is_active
          position
          level
          product_count
          image
        }
      }
    }
  }
`;

/**
 * __useGetListCategoryQuery__
 *
 * To run a query within a React component, call `useGetListCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetListCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetListCategoryQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetListCategoryQuery(
  baseOptions?: Apollo.QueryHookOptions<
    Types.GetListCategoryQuery,
    Types.GetListCategoryQueryVariables
  >,
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useQuery<
    Types.GetListCategoryQuery,
    Types.GetListCategoryQueryVariables
  >(GetListCategoryDocument, options);
}
export function useGetListCategoryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.GetListCategoryQuery,
    Types.GetListCategoryQueryVariables
  >,
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useLazyQuery<
    Types.GetListCategoryQuery,
    Types.GetListCategoryQueryVariables
  >(GetListCategoryDocument, options);
}
export type GetListCategoryQueryHookResult = ReturnType<
  typeof useGetListCategoryQuery
>;
export type GetListCategoryLazyQueryHookResult = ReturnType<
  typeof useGetListCategoryLazyQuery
>;
export type GetListCategoryQueryResult = Apollo.QueryResult<
  Types.GetListCategoryQuery,
  Types.GetListCategoryQueryVariables
>;
export const GetProductByCategoryDocument = gql`
  query GetProductByCategory(
    $cur_page: String
    $page_size: String
    $category: String
    $sku: String
    $order_by: String
  ) {
    getProductByCategory(
      cur_page: $cur_page
      page_size: $page_size
      category: $category
      sku: $sku
      order_by: $order_by
    )
      @rest(
        type: "getProductByCategory"
        method: GET
        path: "magento_api/api/products_list?{args}"
      ) {
      entity_id
      attribute_set_id
      type_id
      sku
      has_options
      required_options
      created_at
      updated_at
      seller_id
      approval
      lat
      lng
      qty
      name_ncc
      name
      meta_title
      meta_description
      image
      small_image
      thumbnail
      options_container
      image_label
      small_image_label
      thumbnail_label
      msrp_display_actual_price_type
      url_key
      url_path
      gift_message_available
      add_product
      reward_point
      cost_price
      allow_linking
      cost_price_rate
      product_brand
      description
      short_description
      meta_keyword
      price
      collaborator_selling_price
      retail_price
      cost_price_shipping
      expiry_date
      color
      status
      visibility
      tax_class_id
      sm_featured
      product_types
      product_origin
      products_appointment
      is_product_featured
      seller_approved
      store_id
      product_sold
    }
  }
`;

/**
 * __useGetProductByCategoryQuery__
 *
 * To run a query within a React component, call `useGetProductByCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductByCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductByCategoryQuery({
 *   variables: {
 *      cur_page: // value for 'cur_page'
 *      page_size: // value for 'page_size'
 *      category: // value for 'category'
 *      sku: // value for 'sku'
 *      order_by: // value for 'order_by'
 *   },
 * });
 */
export function useGetProductByCategoryQuery(
  baseOptions?: Apollo.QueryHookOptions<
    Types.GetProductByCategoryQuery,
    Types.GetProductByCategoryQueryVariables
  >,
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useQuery<
    Types.GetProductByCategoryQuery,
    Types.GetProductByCategoryQueryVariables
  >(GetProductByCategoryDocument, options);
}
export function useGetProductByCategoryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.GetProductByCategoryQuery,
    Types.GetProductByCategoryQueryVariables
  >,
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useLazyQuery<
    Types.GetProductByCategoryQuery,
    Types.GetProductByCategoryQueryVariables
  >(GetProductByCategoryDocument, options);
}
export type GetProductByCategoryQueryHookResult = ReturnType<
  typeof useGetProductByCategoryQuery
>;
export type GetProductByCategoryLazyQueryHookResult = ReturnType<
  typeof useGetProductByCategoryLazyQuery
>;
export type GetProductByCategoryQueryResult = Apollo.QueryResult<
  Types.GetProductByCategoryQuery,
  Types.GetProductByCategoryQueryVariables
>;
export const GetDetailProductDocument = gql`
  query GetDetailProduct($sku: String) {
    getDetailProduct(sku: $sku)
      @rest(
        type: "getDetailProduct"
        method: GET
        path: "magento_api/api/product_details?{args}"
      ) {
      status
      messenger
      data {
        entity_id
        attribute_set_id
        type_id
        sku
        has_options
        required_options
        created_at
        updated_at
        seller_id
        approval
        lat
        lng
        name
        meta_title
        meta_description
        image
        small_image
        thumbnail
        options_container
        image_label
        small_image_label
        thumbnail_label
        msrp_display_actual_price_type
        url_key
        url_path
        gift_message_available
        add_product
        reward_point
        cost_price
        allow_linking
        cost_price_rate
        product_brand
        description
        short_description
        meta_keyword
        price
        collaborator_selling_price
        retail_price
        cost_price_shipping
        expiry_date
        color
        status
        visibility
        tax_class_id
        sm_featured
        product_types
        product_origin
        products_appointment
        is_product_featured
        seller_approved
        store_id
        name_ncc
        category_ids
        categories_name
        inventory
        brand_name
      }
    }
  }
`;

/**
 * __useGetDetailProductQuery__
 *
 * To run a query within a React component, call `useGetDetailProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDetailProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDetailProductQuery({
 *   variables: {
 *      sku: // value for 'sku'
 *   },
 * });
 */
export function useGetDetailProductQuery(
  baseOptions?: Apollo.QueryHookOptions<
    Types.GetDetailProductQuery,
    Types.GetDetailProductQueryVariables
  >,
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useQuery<
    Types.GetDetailProductQuery,
    Types.GetDetailProductQueryVariables
  >(GetDetailProductDocument, options);
}
export function useGetDetailProductLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.GetDetailProductQuery,
    Types.GetDetailProductQueryVariables
  >,
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useLazyQuery<
    Types.GetDetailProductQuery,
    Types.GetDetailProductQueryVariables
  >(GetDetailProductDocument, options);
}
export type GetDetailProductQueryHookResult = ReturnType<
  typeof useGetDetailProductQuery
>;
export type GetDetailProductLazyQueryHookResult = ReturnType<
  typeof useGetDetailProductLazyQuery
>;
export type GetDetailProductQueryResult = Apollo.QueryResult<
  Types.GetDetailProductQuery,
  Types.GetDetailProductQueryVariables
>;
export const GetSizeEndColorProductDocument = gql`
  query GetSizeEndColorProduct($id: String) {
    getSizeEndColorProduct(id: $id)
      @rest(
        type: "getSizeEndColorProduct"
        method: GET
        path: "magento_api/api/products_options?{args}"
      ) {
      status
      messenger
      data {
        color_id
        color_name
        color_value
        child {
          size_id
          size_name
          size_value
          qty
        }
      }
    }
  }
`;

/**
 * __useGetSizeEndColorProductQuery__
 *
 * To run a query within a React component, call `useGetSizeEndColorProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSizeEndColorProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSizeEndColorProductQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetSizeEndColorProductQuery(
  baseOptions?: Apollo.QueryHookOptions<
    Types.GetSizeEndColorProductQuery,
    Types.GetSizeEndColorProductQueryVariables
  >,
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useQuery<
    Types.GetSizeEndColorProductQuery,
    Types.GetSizeEndColorProductQueryVariables
  >(GetSizeEndColorProductDocument, options);
}
export function useGetSizeEndColorProductLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.GetSizeEndColorProductQuery,
    Types.GetSizeEndColorProductQueryVariables
  >,
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useLazyQuery<
    Types.GetSizeEndColorProductQuery,
    Types.GetSizeEndColorProductQueryVariables
  >(GetSizeEndColorProductDocument, options);
}
export type GetSizeEndColorProductQueryHookResult = ReturnType<
  typeof useGetSizeEndColorProductQuery
>;
export type GetSizeEndColorProductLazyQueryHookResult = ReturnType<
  typeof useGetSizeEndColorProductLazyQuery
>;
export type GetSizeEndColorProductQueryResult = Apollo.QueryResult<
  Types.GetSizeEndColorProductQuery,
  Types.GetSizeEndColorProductQueryVariables
>;
export const RegisterAppDocument = gql`
  mutation RegisterApp($input: InputRegister) {
    registerApp(input: $input)
      @rest(type: "registerApp", method: POST, path: "rest/V1/customers") {
      status
      messenger
    }
  }
`;
export type RegisterAppMutationFn = Apollo.MutationFunction<
  Types.RegisterAppMutation,
  Types.RegisterAppMutationVariables
>;

/**
 * __useRegisterAppMutation__
 *
 * To run a mutation, you first call `useRegisterAppMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterAppMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerAppMutation, { data, loading, error }] = useRegisterAppMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegisterAppMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.RegisterAppMutation,
    Types.RegisterAppMutationVariables
  >,
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useMutation<
    Types.RegisterAppMutation,
    Types.RegisterAppMutationVariables
  >(RegisterAppDocument, options);
}
export type RegisterAppMutationHookResult = ReturnType<
  typeof useRegisterAppMutation
>;
export type RegisterAppMutationResult =
  Apollo.MutationResult<Types.RegisterAppMutation>;
export type RegisterAppMutationOptions = Apollo.BaseMutationOptions<
  Types.RegisterAppMutation,
  Types.RegisterAppMutationVariables
>;
export const LoginAppDocument = gql`
  mutation LoginApp($input: InputLogin) {
    loginApp(input: $input)
      @rest(
        type: "loginApp"
        method: POST
        path: "rest/V1/integration/customer/token"
      )
  }
`;
export type LoginAppMutationFn = Apollo.MutationFunction<
  Types.LoginAppMutation,
  Types.LoginAppMutationVariables
>;

/**
 * __useLoginAppMutation__
 *
 * To run a mutation, you first call `useLoginAppMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginAppMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginAppMutation, { data, loading, error }] = useLoginAppMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginAppMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.LoginAppMutation,
    Types.LoginAppMutationVariables
  >,
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useMutation<
    Types.LoginAppMutation,
    Types.LoginAppMutationVariables
  >(LoginAppDocument, options);
}
export type LoginAppMutationHookResult = ReturnType<typeof useLoginAppMutation>;
export type LoginAppMutationResult =
  Apollo.MutationResult<Types.LoginAppMutation>;
export type LoginAppMutationOptions = Apollo.BaseMutationOptions<
  Types.LoginAppMutation,
  Types.LoginAppMutationVariables
>;
export const AddAddressFavouriteDocument = gql`
  mutation AddAddressFavourite($input: InputAddAddressFavourite) {
    addAddressFavourite(input: $input)
      @rest(
        type: "addAddressFavourite"
        method: "POST"
        path: "magento_api/api/save_address"
      ) {
      status
      messenger
    }
  }
`;
export type AddAddressFavouriteMutationFn = Apollo.MutationFunction<
  Types.AddAddressFavouriteMutation,
  Types.AddAddressFavouriteMutationVariables
>;

/**
 * __useAddAddressFavouriteMutation__
 *
 * To run a mutation, you first call `useAddAddressFavouriteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddAddressFavouriteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addAddressFavouriteMutation, { data, loading, error }] = useAddAddressFavouriteMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddAddressFavouriteMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.AddAddressFavouriteMutation,
    Types.AddAddressFavouriteMutationVariables
  >,
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useMutation<
    Types.AddAddressFavouriteMutation,
    Types.AddAddressFavouriteMutationVariables
  >(AddAddressFavouriteDocument, options);
}
export type AddAddressFavouriteMutationHookResult = ReturnType<
  typeof useAddAddressFavouriteMutation
>;
export type AddAddressFavouriteMutationResult =
  Apollo.MutationResult<Types.AddAddressFavouriteMutation>;
export type AddAddressFavouriteMutationOptions = Apollo.BaseMutationOptions<
  Types.AddAddressFavouriteMutation,
  Types.AddAddressFavouriteMutationVariables
>;
export const SearchForDriverDocument = gql`
  mutation SearchForDriver($input: InputSearchForDriver) {
    searchForDriver(input: $input)
      @rest(
        type: "searchForDriver"
        method: "POST"
        path: "magento_api/api/driver"
      ) {
      status
      messenger
      data {
        driver_id
        name
        phone_number
        license_plate
        rating
      }
    }
  }
`;
export type SearchForDriverMutationFn = Apollo.MutationFunction<
  Types.SearchForDriverMutation,
  Types.SearchForDriverMutationVariables
>;

/**
 * __useSearchForDriverMutation__
 *
 * To run a mutation, you first call `useSearchForDriverMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSearchForDriverMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [searchForDriverMutation, { data, loading, error }] = useSearchForDriverMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSearchForDriverMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.SearchForDriverMutation,
    Types.SearchForDriverMutationVariables
  >,
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useMutation<
    Types.SearchForDriverMutation,
    Types.SearchForDriverMutationVariables
  >(SearchForDriverDocument, options);
}
export type SearchForDriverMutationHookResult = ReturnType<
  typeof useSearchForDriverMutation
>;
export type SearchForDriverMutationResult =
  Apollo.MutationResult<Types.SearchForDriverMutation>;
export type SearchForDriverMutationOptions = Apollo.BaseMutationOptions<
  Types.SearchForDriverMutation,
  Types.SearchForDriverMutationVariables
>;
export const SelectSellerDocument = gql`
  mutation SelectSeller($input: InputSelectSeller) {
    selectSeller(input: $input)
      @rest(
        type: "selectSeller"
        method: POST
        path: "magento_api/api/choose_seller"
      ) {
      status
      messenger
    }
  }
`;
export type SelectSellerMutationFn = Apollo.MutationFunction<
  Types.SelectSellerMutation,
  Types.SelectSellerMutationVariables
>;

/**
 * __useSelectSellerMutation__
 *
 * To run a mutation, you first call `useSelectSellerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSelectSellerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [selectSellerMutation, { data, loading, error }] = useSelectSellerMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSelectSellerMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.SelectSellerMutation,
    Types.SelectSellerMutationVariables
  >,
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useMutation<
    Types.SelectSellerMutation,
    Types.SelectSellerMutationVariables
  >(SelectSellerDocument, options);
}
export type SelectSellerMutationHookResult = ReturnType<
  typeof useSelectSellerMutation
>;
export type SelectSellerMutationResult =
  Apollo.MutationResult<Types.SelectSellerMutation>;
export type SelectSellerMutationOptions = Apollo.BaseMutationOptions<
  Types.SelectSellerMutation,
  Types.SelectSellerMutationVariables
>;
