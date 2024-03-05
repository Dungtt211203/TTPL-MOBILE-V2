export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends {[key: string]: unknown}> = {[K in keyof T]: T[K]};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<T extends {[key: string]: unknown}, K extends keyof T> = {
  [_ in K]?: never;
};
export type Incremental<T> =
  | T
  | {[P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: {input: string; output: string};
  String: {input: string; output: string};
  Boolean: {input: boolean; output: boolean};
  Int: {input: number; output: number};
  Float: {input: number; output: number};
};

export type FilterEqualTypeInput = {
  eq?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ProductAttributeFilterInput = {
  category_id?: InputMaybe<FilterEqualTypeInput>;
};

export type ProductAttributeSortInput = {
  name?: InputMaybe<SortEnum>;
};

export type Query = {
  __typename?: 'Query';
  products?: Maybe<TypeProductRes>;
};

export type QueryProductsArgs = {
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  filter?: InputMaybe<ProductAttributeFilterInput>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  products_collection_type?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<ProductAttributeSortInput>;
};

export enum SortEnum {
  Asc = 'ASC',
  Desc = 'DESC',
}

export type TypeAggregationsRes = {
  __typename?: 'TypeAggregationsRes';
  attribute_code?: Maybe<Scalars['String']['output']>;
  count?: Maybe<Scalars['Int']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  options?: Maybe<Array<Maybe<TypeOptionRes>>>;
  position?: Maybe<Scalars['String']['output']>;
};

export type TypeDiscountRes = {
  __typename?: 'TypeDiscountRes';
  amount_off?: Maybe<Scalars['Int']['output']>;
  percent_off?: Maybe<Scalars['Int']['output']>;
};

export type TypeImageRes = {
  __typename?: 'TypeImageRes';
  url?: Maybe<Scalars['String']['output']>;
};

export type TypeItemsRes = {
  __typename?: 'TypeItemsRes';
  image?: Maybe<TypeImageRes>;
  name?: Maybe<Scalars['String']['output']>;
  price_range?: Maybe<TypePriceRangeRes>;
  sku?: Maybe<Scalars['String']['output']>;
};

export type TypeMinimumPriceRes = {
  __typename?: 'TypeMinimumPriceRes';
  discount?: Maybe<TypeDiscountRes>;
  final_price?: Maybe<TypePriceRes>;
  regular_price?: Maybe<TypePriceRes>;
};

export type TypeOptionRes = {
  __typename?: 'TypeOptionRes';
  count?: Maybe<Scalars['Int']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type TypePageInfoRes = {
  __typename?: 'TypePageInfoRes';
  current_page?: Maybe<Scalars['Int']['output']>;
  page_size?: Maybe<Scalars['Int']['output']>;
};

export type TypePriceRangeRes = {
  __typename?: 'TypePriceRangeRes';
  minimum_price?: Maybe<TypeMinimumPriceRes>;
};

export type TypePriceRes = {
  __typename?: 'TypePriceRes';
  currency?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['Int']['output']>;
};

export type TypeProductRes = {
  __typename?: 'TypeProductRes';
  aggregations?: Maybe<Array<Maybe<TypeAggregationsRes>>>;
  items?: Maybe<Array<Maybe<TypeItemsRes>>>;
  page_info?: Maybe<TypePageInfoRes>;
};

export type ProductQueryVariables = Exact<{
  filter?: InputMaybe<ProductAttributeFilterInput>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<ProductAttributeSortInput>;
  products_collection_type?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
}>;

export type ProductQuery = {
  __typename?: 'Query';
  products?: {
    __typename?: 'TypeProductRes';
    aggregations?: Array<{
      __typename?: 'TypeAggregationsRes';
      attribute_code?: string | null;
      label?: string | null;
      count?: number | null;
      position?: string | null;
      options?: Array<{
        __typename?: 'TypeOptionRes';
        label?: string | null;
        value?: string | null;
        count?: number | null;
      } | null> | null;
    } | null> | null;
    items?: Array<{
      __typename?: 'TypeItemsRes';
      name?: string | null;
      sku?: string | null;
      price_range?: {
        __typename?: 'TypePriceRangeRes';
        minimum_price?: {
          __typename?: 'TypeMinimumPriceRes';
          regular_price?: {
            __typename?: 'TypePriceRes';
            value?: number | null;
            currency?: string | null;
          } | null;
          final_price?: {
            __typename?: 'TypePriceRes';
            value?: number | null;
            currency?: string | null;
          } | null;
          discount?: {
            __typename?: 'TypeDiscountRes';
            amount_off?: number | null;
            percent_off?: number | null;
          } | null;
        } | null;
      } | null;
      image?: {__typename?: 'TypeImageRes'; url?: string | null} | null;
    } | null> | null;
    page_info?: {
      __typename?: 'TypePageInfoRes';
      page_size?: number | null;
      current_page?: number | null;
    } | null;
  } | null;
};
