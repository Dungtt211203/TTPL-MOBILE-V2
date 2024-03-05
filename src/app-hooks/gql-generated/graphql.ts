import * as Types from '@app-schemas/graphql';

import {gql} from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;

export const ProductDocument = gql`
  query Product(
    $filter: ProductAttributeFilterInput
    $pageSize: Int
    $currentPage: Int
    $sort: ProductAttributeSortInput
    $products_collection_type: String
    $search: String
  ) {
    products(
      filter: $filter
      pageSize: $pageSize
      currentPage: $currentPage
      sort: $sort
      products_collection_type: $products_collection_type
      search: $search
    ) {
      aggregations {
        attribute_code
        label
        options {
          label
          value
          count
        }
        count
        position
      }
      items {
        name
        sku
        price_range {
          minimum_price {
            regular_price {
              value
              currency
            }
            final_price {
              value
              currency
            }
            discount {
              amount_off
              percent_off
            }
          }
        }
        image {
          url
        }
      }
      page_info {
        page_size
        current_page
      }
    }
  }
`;

/**
 * __useProductQuery__
 *
 * To run a query within a React component, call `useProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      pageSize: // value for 'pageSize'
 *      currentPage: // value for 'currentPage'
 *      sort: // value for 'sort'
 *      products_collection_type: // value for 'products_collection_type'
 *      search: // value for 'search'
 *   },
 * });
 */
export function useProductQuery(
  baseOptions?: Apollo.QueryHookOptions<
    Types.ProductQuery,
    Types.ProductQueryVariables
  >,
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useQuery<Types.ProductQuery, Types.ProductQueryVariables>(
    ProductDocument,
    options,
  );
}
export function useProductLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.ProductQuery,
    Types.ProductQueryVariables
  >,
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useLazyQuery<Types.ProductQuery, Types.ProductQueryVariables>(
    ProductDocument,
    options,
  );
}
export type ProductQueryHookResult = ReturnType<typeof useProductQuery>;
export type ProductLazyQueryHookResult = ReturnType<typeof useProductLazyQuery>;
export type ProductQueryResult = Apollo.QueryResult<
  Types.ProductQuery,
  Types.ProductQueryVariables
>;
