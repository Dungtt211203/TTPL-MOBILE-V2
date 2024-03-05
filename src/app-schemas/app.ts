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

export type InputAddRealmProduct = {
  data_product_promotion?: InputMaybe<Array<InputMaybe<TypeDataProduct>>>;
  data_product_sellings?: InputMaybe<Array<InputMaybe<TypeDataProduct>>>;
  data_product_suggestions?: InputMaybe<Array<InputMaybe<TypeDataProduct>>>;
};

export type InputCustomerInfo = {
  address?: InputMaybe<Scalars['String']['input']>;
  avatar?: InputMaybe<Scalars['String']['input']>;
  confirmation?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['String']['input']>;
  created_in?: InputMaybe<Scalars['String']['input']>;
  default_billing?: InputMaybe<Scalars['String']['input']>;
  default_shipping?: InputMaybe<Scalars['String']['input']>;
  disable_auto_group_change?: InputMaybe<Scalars['String']['input']>;
  dob?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  entity_id?: InputMaybe<Scalars['String']['input']>;
  failures_num?: InputMaybe<Scalars['String']['input']>;
  first_failure?: InputMaybe<Scalars['String']['input']>;
  firstname?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  group_id?: InputMaybe<Scalars['String']['input']>;
  increment_id?: InputMaybe<Scalars['String']['input']>;
  is_active?: InputMaybe<Scalars['String']['input']>;
  lastname?: InputMaybe<Scalars['String']['input']>;
  lock_expires?: InputMaybe<Scalars['String']['input']>;
  middlename?: InputMaybe<Scalars['String']['input']>;
  orders?: InputMaybe<Scalars['String']['input']>;
  password_hash?: InputMaybe<Scalars['String']['input']>;
  prefix?: InputMaybe<Scalars['String']['input']>;
  rp_token?: InputMaybe<Scalars['String']['input']>;
  rp_token_created_at?: InputMaybe<Scalars['String']['input']>;
  session_cutoff?: InputMaybe<Scalars['String']['input']>;
  store_id?: InputMaybe<Scalars['String']['input']>;
  suffix?: InputMaybe<Scalars['String']['input']>;
  taxvat?: InputMaybe<Scalars['String']['input']>;
  total_amount_owed?: InputMaybe<Scalars['String']['input']>;
  total_amount_paid?: InputMaybe<Scalars['String']['input']>;
  total_number_of_completed_orders?: InputMaybe<Scalars['String']['input']>;
  total_number_of_returned_orders?: InputMaybe<Scalars['String']['input']>;
  total_number_of_unfinished_orders?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
  website_id?: InputMaybe<Scalars['String']['input']>;
};

export type InputRealmAddUserInfo = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  background_image?: InputMaybe<Scalars['String']['input']>;
  customer_info?: InputMaybe<InputCustomerInfo>;
  email: Scalars['String']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  type_login?: InputMaybe<ThirdParty>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addRealmProduct: Scalars['Boolean']['output'];
  addRealmUserInfo: Scalars['Boolean']['output'];
};

export type MutationAddRealmProductArgs = {
  variable: InputAddRealmProduct;
};

export type MutationAddRealmUserInfoArgs = {
  variable: InputRealmAddUserInfo;
};

export type Query = {
  __typename?: 'Query';
  getRealmUserInfo?: Maybe<ResRealmUserInfo>;
};

export type QueryGetRealmUserInfoArgs = {
  isPass?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ResCustomerInfo = {
  __typename?: 'ResCustomerInfo';
  address?: Maybe<Scalars['String']['output']>;
  avatar?: Maybe<Scalars['String']['output']>;
  confirmation?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  created_in?: Maybe<Scalars['String']['output']>;
  default_billing?: Maybe<Scalars['String']['output']>;
  default_shipping?: Maybe<Scalars['String']['output']>;
  disable_auto_group_change?: Maybe<Scalars['String']['output']>;
  dob?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  entity_id?: Maybe<Scalars['String']['output']>;
  failures_num?: Maybe<Scalars['String']['output']>;
  first_failure?: Maybe<Scalars['String']['output']>;
  firstname?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Scalars['String']['output']>;
  group_id?: Maybe<Scalars['String']['output']>;
  increment_id?: Maybe<Scalars['String']['output']>;
  is_active?: Maybe<Scalars['String']['output']>;
  lastname?: Maybe<Scalars['String']['output']>;
  lock_expires?: Maybe<Scalars['String']['output']>;
  middlename?: Maybe<Scalars['String']['output']>;
  orders?: Maybe<Scalars['String']['output']>;
  password_hash?: Maybe<Scalars['String']['output']>;
  prefix?: Maybe<Scalars['String']['output']>;
  rp_token?: Maybe<Scalars['String']['output']>;
  rp_token_created_at?: Maybe<Scalars['String']['output']>;
  session_cutoff?: Maybe<Scalars['String']['output']>;
  store_id?: Maybe<Scalars['String']['output']>;
  suffix?: Maybe<Scalars['String']['output']>;
  taxvat?: Maybe<Scalars['String']['output']>;
  total_amount_owed?: Maybe<Scalars['String']['output']>;
  total_amount_paid?: Maybe<Scalars['String']['output']>;
  total_number_of_completed_orders?: Maybe<Scalars['String']['output']>;
  total_number_of_returned_orders?: Maybe<Scalars['String']['output']>;
  total_number_of_unfinished_orders?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  website_id?: Maybe<Scalars['String']['output']>;
};

export type ResRealmUserInfo = {
  __typename?: 'ResRealmUserInfo';
  avatar?: Maybe<Scalars['String']['output']>;
  background_image?: Maybe<Scalars['String']['output']>;
  customer_info?: Maybe<ResCustomerInfo>;
  email?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  type_login?: Maybe<Scalars['String']['output']>;
};

export enum ThirdParty {
  Apple = 'apple',
  Facebook = 'facebook',
  Google = 'google',
}

export type TypeDataProduct = {
  category?: InputMaybe<Scalars['String']['input']>;
  child_product?: InputMaybe<Scalars['String']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  ecial_price?: InputMaybe<Scalars['String']['input']>;
  final_price?: InputMaybe<Scalars['String']['input']>;
  gallery?: InputMaybe<Scalars['String']['input']>;
  group_id?: InputMaybe<Scalars['String']['input']>;
  instock?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  main_image?: InputMaybe<Scalars['String']['input']>;
  max_regular_amount?: InputMaybe<Scalars['String']['input']>;
  min_regular_amount?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['String']['input']>;
  product_id?: InputMaybe<Scalars['String']['input']>;
  qty?: InputMaybe<Scalars['String']['input']>;
  short_description?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['String']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  small_image?: InputMaybe<Scalars['String']['input']>;
  special_price?: InputMaybe<Scalars['String']['input']>;
  whole_sale?: InputMaybe<Scalars['String']['input']>;
  widget_id?: InputMaybe<Scalars['String']['input']>;
};

export type GetRealmUserInfoQueryVariables = Exact<{
  isPass?: InputMaybe<Scalars['Boolean']['input']>;
}>;

export type GetRealmUserInfoQuery = {
  __typename?: 'Query';
  query?: {
    __typename?: 'ResRealmUserInfo';
    email?: string | null;
    token?: string | null;
    type_login?: string | null;
    password?: string | null;
    avatar?: string | null;
    background_image?: string | null;
    customer_info?: {
      __typename?: 'ResCustomerInfo';
      entity_id?: string | null;
      website_id?: string | null;
      email?: string | null;
      group_id?: string | null;
      increment_id?: string | null;
      store_id?: string | null;
      created_at?: string | null;
      updated_at?: string | null;
      is_active?: string | null;
      disable_auto_group_change?: string | null;
      created_in?: string | null;
      prefix?: string | null;
      firstname?: string | null;
      middlename?: string | null;
      lastname?: string | null;
      suffix?: string | null;
      dob?: string | null;
      password_hash?: string | null;
      rp_token?: string | null;
      rp_token_created_at?: string | null;
      default_billing?: string | null;
      default_shipping?: string | null;
      taxvat?: string | null;
      confirmation?: string | null;
      gender?: string | null;
      failures_num?: string | null;
      first_failure?: string | null;
      lock_expires?: string | null;
      session_cutoff?: string | null;
      address?: string | null;
      avatar?: string | null;
      orders?: string | null;
      total_number_of_completed_orders?: string | null;
      total_number_of_unfinished_orders?: string | null;
      total_number_of_returned_orders?: string | null;
      total_amount_paid?: string | null;
      total_amount_owed?: string | null;
    } | null;
  } | null;
};

export type AddRealmUserInfoMutationVariables = Exact<{
  variable: InputRealmAddUserInfo;
}>;

export type AddRealmUserInfoMutation = {
  __typename?: 'Mutation';
  mutation: boolean;
};

export type AddRealmProductMutationVariables = Exact<{
  variable: InputAddRealmProduct;
}>;

export type AddRealmProductMutation = {
  __typename?: 'Mutation';
  mutation: boolean;
};
