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
  Upload: {input: any; output: any};
};

export type DataListDriver = {
  __typename?: 'DataListDriver';
  driver_id?: Maybe<Scalars['String']['output']>;
  license_plate?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phone_number?: Maybe<Scalars['String']['output']>;
  rating?: Maybe<Scalars['String']['output']>;
};

export type InputAddAddressFavourite = {
  description?: InputMaybe<Scalars['String']['input']>;
  latitude?: InputMaybe<Scalars['Int']['input']>;
  longitude?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type InputCustomer = {
  email?: InputMaybe<Scalars['String']['input']>;
  firstname?: InputMaybe<Scalars['String']['input']>;
  lastname?: InputMaybe<Scalars['String']['input']>;
  phone_number?: InputMaybe<Scalars['String']['input']>;
};

export type InputLogin = {
  password?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type InputRegister = {
  customer?: InputMaybe<InputCustomer>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type InputSearchForDriver = {
  address_from?: InputMaybe<Scalars['String']['input']>;
  address_to?: InputMaybe<Scalars['String']['input']>;
  latitude_from?: InputMaybe<Scalars['Int']['input']>;
  latitude_to?: InputMaybe<Scalars['Int']['input']>;
  longitude_from?: InputMaybe<Scalars['Int']['input']>;
  longitude_to?: InputMaybe<Scalars['Int']['input']>;
};

export type InputSelectSeller = {
  seller_id?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addAddressFavourite?: Maybe<ResAddAddressFavourite>;
  loginApp: Scalars['String']['output'];
  registerApp?: Maybe<ResRegister>;
  searchForDriver?: Maybe<ResSearchForDriver>;
  selectSeller?: Maybe<ResSelectSeller>;
};

export type MutationAddAddressFavouriteArgs = {
  input?: InputMaybe<InputAddAddressFavourite>;
};

export type MutationLoginAppArgs = {
  input?: InputMaybe<InputLogin>;
};

export type MutationRegisterAppArgs = {
  input?: InputMaybe<InputRegister>;
};

export type MutationSearchForDriverArgs = {
  input?: InputMaybe<InputSearchForDriver>;
};

export type MutationSelectSellerArgs = {
  input?: InputMaybe<InputSelectSeller>;
};

export type Query = {
  __typename?: 'Query';
  getDetailProduct?: Maybe<ResGetDetailProduct>;
  getListAddressFavourities?: Maybe<ResListAddressFavourities>;
  getListCategory?: Maybe<ResGetListCategory>;
  getListDriver?: Maybe<ResGetListDriver>;
  getListSellerOfCustomer?: Maybe<ResGetListSellerOfCustomer>;
  getListUsedCoupons?: Maybe<Scalars['String']['output']>;
  getProductByCategory?: Maybe<Array<Maybe<ResProductByCategory>>>;
  getSizeEndColorProduct?: Maybe<ResGetSizeEndColorProduct>;
};

export type QueryGetDetailProductArgs = {
  sku?: InputMaybe<Scalars['String']['input']>;
};

export type QueryGetListDriverArgs = {
  cur_page?: InputMaybe<Scalars['String']['input']>;
  page_size?: InputMaybe<Scalars['String']['input']>;
};

export type QueryGetListSellerOfCustomerArgs = {
  cur_page?: InputMaybe<Scalars['String']['input']>;
  page_size?: InputMaybe<Scalars['String']['input']>;
};

export type QueryGetProductByCategoryArgs = {
  category?: InputMaybe<Scalars['String']['input']>;
  cur_page?: InputMaybe<Scalars['String']['input']>;
  order_by?: InputMaybe<Scalars['String']['input']>;
  page_size?: InputMaybe<Scalars['String']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
};

export type QueryGetSizeEndColorProductArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type ResAddAddressFavourite = {
  __typename?: 'ResAddAddressFavourite';
  messenger?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
};

export type ResGetDetailProduct = {
  __typename?: 'ResGetDetailProduct';
  data?: Maybe<TypeDetailProduct>;
  messenger?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
};

export type ResGetListCategory = {
  __typename?: 'ResGetListCategory';
  children_data?: Maybe<Array<Maybe<TypeChildenData>>>;
  id?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  is_active?: Maybe<Scalars['Boolean']['output']>;
  level?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  parent_id?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['String']['output']>;
  product_count?: Maybe<Scalars['String']['output']>;
};

export type ResGetListDriver = {
  __typename?: 'ResGetListDriver';
  data?: Maybe<Array<Maybe<DataListDriver>>>;
  messenger?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
};

export type ResGetListSellerOfCustomer = {
  __typename?: 'ResGetListSellerOfCustomer';
  data?: Maybe<Array<Maybe<TypeListSellerOfCustomer>>>;
  messenger?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
};

export type ResGetSizeEndColorProduct = {
  __typename?: 'ResGetSizeEndColorProduct';
  data?: Maybe<Array<Maybe<TypeDataSizeEndColorProduct>>>;
  messenger?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
};

export type ResListAddressFavourities = {
  __typename?: 'ResListAddressFavourities';
  data?: Maybe<Array<Maybe<TypeListDataAddressFavourite>>>;
  messenger?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
};

export type ResProductByCategory = {
  __typename?: 'ResProductByCategory';
  add_product?: Maybe<Scalars['String']['output']>;
  allow_linking?: Maybe<Scalars['String']['output']>;
  approval?: Maybe<Scalars['String']['output']>;
  attribute_set_id?: Maybe<Scalars['String']['output']>;
  collaborator_selling_price?: Maybe<Scalars['String']['output']>;
  color?: Maybe<Scalars['String']['output']>;
  cost_price?: Maybe<Scalars['String']['output']>;
  cost_price_rate?: Maybe<Scalars['String']['output']>;
  cost_price_shipping?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  entity_id?: Maybe<Scalars['String']['output']>;
  expiry_date?: Maybe<Scalars['String']['output']>;
  gift_message_available?: Maybe<Scalars['String']['output']>;
  has_options?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  image_label?: Maybe<Scalars['String']['output']>;
  is_product_featured?: Maybe<Scalars['String']['output']>;
  lat?: Maybe<Scalars['String']['output']>;
  lng?: Maybe<Scalars['String']['output']>;
  meta_description?: Maybe<Scalars['String']['output']>;
  meta_keyword?: Maybe<Scalars['String']['output']>;
  meta_title?: Maybe<Scalars['String']['output']>;
  msrp_display_actual_price_type?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  name_ncc?: Maybe<Scalars['String']['output']>;
  options_container?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['String']['output']>;
  product_brand?: Maybe<Scalars['String']['output']>;
  product_origin?: Maybe<Scalars['String']['output']>;
  product_sold?: Maybe<Scalars['String']['output']>;
  product_types?: Maybe<Scalars['String']['output']>;
  products_appointment?: Maybe<Scalars['String']['output']>;
  qty?: Maybe<Scalars['String']['output']>;
  required_options?: Maybe<Scalars['String']['output']>;
  retail_price?: Maybe<Scalars['String']['output']>;
  reward_point?: Maybe<Scalars['String']['output']>;
  seller_approved?: Maybe<Scalars['String']['output']>;
  seller_id?: Maybe<Scalars['String']['output']>;
  short_description?: Maybe<Scalars['String']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
  sm_featured?: Maybe<Scalars['String']['output']>;
  small_image?: Maybe<Scalars['String']['output']>;
  small_image_label?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  store_id?: Maybe<Scalars['String']['output']>;
  tax_class_id?: Maybe<Scalars['String']['output']>;
  thumbnail?: Maybe<Scalars['String']['output']>;
  thumbnail_label?: Maybe<Scalars['String']['output']>;
  type_id?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  url_key?: Maybe<Scalars['String']['output']>;
  url_path?: Maybe<Scalars['String']['output']>;
  visibility?: Maybe<Scalars['String']['output']>;
};

export type ResRegister = {
  __typename?: 'ResRegister';
  messenger?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
};

export type ResSearchForDriver = {
  __typename?: 'ResSearchForDriver';
  data?: Maybe<Array<Maybe<TypeDataSearchForDriver>>>;
  messenger?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
};

export type ResSelectSeller = {
  __typename?: 'ResSelectSeller';
  messenger?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
};

export type TypeChildSizeEndColorProduct = {
  __typename?: 'TypeChildSizeEndColorProduct';
  qty?: Maybe<Scalars['String']['output']>;
  size_id?: Maybe<Scalars['String']['output']>;
  size_name?: Maybe<Scalars['String']['output']>;
  size_value?: Maybe<Scalars['String']['output']>;
};

export type TypeChildenData = {
  __typename?: 'TypeChildenData';
  children_data?: Maybe<Array<Maybe<TypeChildenData2>>>;
  id?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  is_active?: Maybe<Scalars['Boolean']['output']>;
  level?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  parent_id?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['String']['output']>;
  product_count?: Maybe<Scalars['String']['output']>;
};

export type TypeChildenData2 = {
  __typename?: 'TypeChildenData2';
  id?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  is_active?: Maybe<Scalars['Boolean']['output']>;
  level?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  parent_id?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['String']['output']>;
  product_count?: Maybe<Scalars['String']['output']>;
};

export type TypeDataSearchForDriver = {
  __typename?: 'TypeDataSearchForDriver';
  driver_id?: Maybe<Scalars['String']['output']>;
  license_plate?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phone_number?: Maybe<Scalars['String']['output']>;
  rating?: Maybe<Scalars['String']['output']>;
};

export type TypeDataSizeEndColorProduct = {
  __typename?: 'TypeDataSizeEndColorProduct';
  child?: Maybe<Array<Maybe<TypeChildSizeEndColorProduct>>>;
  color_id?: Maybe<Scalars['String']['output']>;
  color_name?: Maybe<Scalars['String']['output']>;
  color_value?: Maybe<Scalars['String']['output']>;
};

export type TypeDetailProduct = {
  __typename?: 'TypeDetailProduct';
  add_product?: Maybe<Scalars['String']['output']>;
  allow_linking?: Maybe<Scalars['String']['output']>;
  approval?: Maybe<Scalars['String']['output']>;
  attribute_set_id?: Maybe<Scalars['String']['output']>;
  brand_name?: Maybe<Scalars['String']['output']>;
  categories_name?: Maybe<Scalars['String']['output']>;
  category_ids?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  collaborator_selling_price?: Maybe<Scalars['String']['output']>;
  color?: Maybe<Scalars['String']['output']>;
  cost_price?: Maybe<Scalars['String']['output']>;
  cost_price_rate?: Maybe<Scalars['String']['output']>;
  cost_price_shipping?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  entity_id?: Maybe<Scalars['String']['output']>;
  expiry_date?: Maybe<Scalars['String']['output']>;
  gift_message_available?: Maybe<Scalars['String']['output']>;
  has_options?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  image_label?: Maybe<Scalars['String']['output']>;
  inventory?: Maybe<Scalars['String']['output']>;
  is_product_featured?: Maybe<Scalars['String']['output']>;
  lat?: Maybe<Scalars['String']['output']>;
  lng?: Maybe<Scalars['String']['output']>;
  meta_description?: Maybe<Scalars['String']['output']>;
  meta_keyword?: Maybe<Scalars['String']['output']>;
  meta_title?: Maybe<Scalars['String']['output']>;
  msrp_display_actual_price_type?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  name_ncc?: Maybe<Scalars['String']['output']>;
  options_container?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['String']['output']>;
  product_brand?: Maybe<Scalars['String']['output']>;
  product_origin?: Maybe<Scalars['String']['output']>;
  product_types?: Maybe<Scalars['String']['output']>;
  products_appointment?: Maybe<Scalars['String']['output']>;
  required_options?: Maybe<Scalars['String']['output']>;
  retail_price?: Maybe<Scalars['String']['output']>;
  reward_point?: Maybe<Scalars['String']['output']>;
  seller_approved?: Maybe<Scalars['String']['output']>;
  seller_id?: Maybe<Scalars['String']['output']>;
  short_description?: Maybe<Scalars['String']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
  sm_featured?: Maybe<Scalars['String']['output']>;
  small_image?: Maybe<Scalars['String']['output']>;
  small_image_label?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  store_id?: Maybe<Scalars['String']['output']>;
  tax_class_id?: Maybe<Scalars['String']['output']>;
  thumbnail?: Maybe<Scalars['String']['output']>;
  thumbnail_label?: Maybe<Scalars['String']['output']>;
  type_id?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  url_key?: Maybe<Scalars['String']['output']>;
  url_path?: Maybe<Scalars['String']['output']>;
  visibility?: Maybe<Scalars['String']['output']>;
};

export type TypeListDataAddressFavourite = {
  __typename?: 'TypeListDataAddressFavourite';
  created_at?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  latitude?: Maybe<Scalars['Int']['output']>;
  longitude?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type TypeListSellerOfCustomer = {
  __typename?: 'TypeListSellerOfCustomer';
  _first_store_id?: Maybe<Scalars['String']['output']>;
  address?: Maybe<Scalars['String']['output']>;
  background_width?: Maybe<Scalars['String']['output']>;
  banner_left?: Maybe<Scalars['String']['output']>;
  banner_pic?: Maybe<Scalars['String']['output']>;
  best_sale_id?: Maybe<Scalars['String']['output']>;
  category_ids?: Maybe<Scalars['String']['output']>;
  chat_id?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  city_id?: Maybe<Scalars['String']['output']>;
  close_time?: Maybe<Scalars['String']['output']>;
  collaborator_code?: Maybe<Scalars['String']['output']>;
  commission_id?: Maybe<Scalars['String']['output']>;
  company?: Maybe<Scalars['String']['output']>;
  company_description?: Maybe<Scalars['String']['output']>;
  company_locality?: Maybe<Scalars['String']['output']>;
  contact_number?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  country_pic?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  creation_time?: Maybe<Scalars['String']['output']>;
  customer_id?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  duration_of_vendor?: Maybe<Scalars['String']['output']>;
  electrical_bill?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  facebook_id?: Maybe<Scalars['String']['output']>;
  fb_active?: Maybe<Scalars['String']['output']>;
  gplus_active?: Maybe<Scalars['String']['output']>;
  gplus_id?: Maybe<Scalars['String']['output']>;
  group_id?: Maybe<Scalars['String']['output']>;
  hotline?: Maybe<Scalars['String']['output']>;
  identity_card_2?: Maybe<Scalars['String']['output']>;
  identity_card_String?: Maybe<Scalars['String']['output']>;
  identity_id?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  instagram_active?: Maybe<Scalars['String']['output']>;
  instagram_id?: Maybe<Scalars['String']['output']>;
  is_promotion?: Maybe<Scalars['String']['output']>;
  is_super_user?: Maybe<Scalars['String']['output']>;
  is_verified?: Maybe<Scalars['String']['output']>;
  lat?: Maybe<Scalars['String']['output']>;
  layout_update_xml?: Maybe<Scalars['String']['output']>;
  linkedin_active?: Maybe<Scalars['String']['output']>;
  linkedin_id?: Maybe<Scalars['String']['output']>;
  lng?: Maybe<Scalars['String']['output']>;
  logo?: Maybe<Scalars['String']['output']>;
  logo_pic?: Maybe<Scalars['String']['output']>;
  longest_gift_id?: Maybe<Scalars['String']['output']>;
  longest_gift_time?: Maybe<Scalars['String']['output']>;
  main_category?: Maybe<Scalars['String']['output']>;
  meta_description?: Maybe<Scalars['String']['output']>;
  meta_keyword?: Maybe<Scalars['String']['output']>;
  meta_keywords?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  opening_time?: Maybe<Scalars['String']['output']>;
  others_info?: Maybe<Scalars['String']['output']>;
  page_id?: Maybe<Scalars['String']['output']>;
  page_layout?: Maybe<Scalars['String']['output']>;
  page_title?: Maybe<Scalars['String']['output']>;
  payment_source?: Maybe<Scalars['String']['output']>;
  pinterest_active?: Maybe<Scalars['String']['output']>;
  pinterest_id?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['String']['output']>;
  postcode?: Maybe<Scalars['String']['output']>;
  product_count?: Maybe<Scalars['String']['output']>;
  region?: Maybe<Scalars['String']['output']>;
  region_id?: Maybe<Scalars['String']['output']>;
  return_policy?: Maybe<Scalars['String']['output']>;
  reward_points_status?: Maybe<Scalars['String']['output']>;
  reward_points_value?: Maybe<Scalars['String']['output']>;
  role_id?: Maybe<Scalars['String']['output']>;
  sale?: Maybe<Scalars['String']['output']>;
  seller_id?: Maybe<Scalars['String']['output']>;
  shipping_policy?: Maybe<Scalars['String']['output']>;
  shop_title?: Maybe<Scalars['String']['output']>;
  shop_url?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  status_banner_left?: Maybe<Scalars['String']['output']>;
  store?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  store_code?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  store_id?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  street?: Maybe<Scalars['String']['output']>;
  telephone?: Maybe<Scalars['String']['output']>;
  theme?: Maybe<Scalars['String']['output']>;
  thumbnail?: Maybe<Scalars['String']['output']>;
  total_sold?: Maybe<Scalars['String']['output']>;
  tw_active?: Maybe<Scalars['String']['output']>;
  twitter_id?: Maybe<Scalars['String']['output']>;
  type_of_seller?: Maybe<Scalars['String']['output']>;
  update_time?: Maybe<Scalars['String']['output']>;
  url_key?: Maybe<Scalars['String']['output']>;
  vimeo_active?: Maybe<Scalars['String']['output']>;
  vimeo_id?: Maybe<Scalars['String']['output']>;
  water_bill?: Maybe<Scalars['String']['output']>;
  youtube_active?: Maybe<Scalars['String']['output']>;
  youtube_id?: Maybe<Scalars['String']['output']>;
  zalo_link?: Maybe<Scalars['String']['output']>;
};

export type GetListUsedCouponsQueryVariables = Exact<{[key: string]: never}>;

export type GetListUsedCouponsQuery = {
  __typename?: 'Query';
  getListUsedCoupons?: string | null;
};

export type GetListAddressFavouritiesQueryVariables = Exact<{
  [key: string]: never;
}>;

export type GetListAddressFavouritiesQuery = {
  __typename?: 'Query';
  getListAddressFavourities?: {
    __typename?: 'ResListAddressFavourities';
    status?: boolean | null;
    messenger?: string | null;
    data?: Array<{
      __typename?: 'TypeListDataAddressFavourite';
      id?: string | null;
      latitude?: number | null;
      longitude?: number | null;
      title?: string | null;
      url?: string | null;
      description?: string | null;
      type?: string | null;
      created_by?: string | null;
      created_at?: string | null;
    } | null> | null;
  } | null;
};

export type GetListDriverQueryVariables = Exact<{
  cur_page?: InputMaybe<Scalars['String']['input']>;
  page_size?: InputMaybe<Scalars['String']['input']>;
}>;

export type GetListDriverQuery = {
  __typename?: 'Query';
  getListDriver?: {
    __typename?: 'ResGetListDriver';
    status?: boolean | null;
    messenger?: string | null;
    data?: Array<{
      __typename?: 'DataListDriver';
      driver_id?: string | null;
      name?: string | null;
      phone_number?: string | null;
      license_plate?: string | null;
      rating?: string | null;
    } | null> | null;
  } | null;
};

export type GetListSellerOfCustomerQueryVariables = Exact<{
  cur_page?: InputMaybe<Scalars['String']['input']>;
  page_size?: InputMaybe<Scalars['String']['input']>;
}>;

export type GetListSellerOfCustomerQuery = {
  __typename?: 'Query';
  getListSellerOfCustomer?: {
    __typename?: 'ResGetListSellerOfCustomer';
    status?: boolean | null;
    messenger?: string | null;
    data?: Array<{
      __typename?: 'TypeListSellerOfCustomer';
      seller_id?: string | null;
      name?: string | null;
      url_key?: string | null;
      description?: string | null;
      group_id?: string | null;
      sale?: string | null;
      commission_id?: string | null;
      image?: string | null;
      thumbnail?: string | null;
      page_title?: string | null;
      meta_keywords?: string | null;
      creation_time?: string | null;
      update_time?: string | null;
      page_layout?: string | null;
      address?: string | null;
      layout_update_xml?: string | null;
      status?: string | null;
      position?: string | null;
      customer_id?: string | null;
      email?: string | null;
      created_at?: string | null;
      payment_source?: string | null;
      twitter_id?: string | null;
      facebook_id?: string | null;
      gplus_id?: string | null;
      youtube_id?: string | null;
      vimeo_id?: string | null;
      instagram_id?: string | null;
      pinterest_id?: string | null;
      linkedin_id?: string | null;
      tw_active?: string | null;
      fb_active?: string | null;
      gplus_active?: string | null;
      youtube_active?: string | null;
      vimeo_active?: string | null;
      instagram_active?: string | null;
      pinterest_active?: string | null;
      linkedin_active?: string | null;
      others_info?: string | null;
      banner_pic?: string | null;
      shop_url?: string | null;
      shop_title?: string | null;
      logo_pic?: string | null;
      company_locality?: string | null;
      country_pic?: string | null;
      country?: string | null;
      company_description?: string | null;
      meta_keyword?: string | null;
      background_width?: string | null;
      meta_description?: string | null;
      store_id?: Array<string | null> | null;
      contact_number?: string | null;
      return_policy?: string | null;
      shipping_policy?: string | null;
      page_id?: string | null;
      company?: string | null;
      city?: string | null;
      region?: string | null;
      street?: string | null;
      product_count?: string | null;
      duration_of_vendor?: string | null;
      region_id?: string | null;
      postcode?: string | null;
      telephone?: string | null;
      total_sold?: string | null;
      lat?: string | null;
      lng?: string | null;
      opening_time?: string | null;
      city_id?: string | null;
      close_time?: string | null;
      theme?: string | null;
      chat_id?: string | null;
      logo?: string | null;
      category_ids?: string | null;
      status_banner_left?: string | null;
      banner_left?: string | null;
      zalo_link?: string | null;
      is_verified?: string | null;
      identity_id?: string | null;
      identity_card_String?: string | null;
      identity_card_2?: string | null;
      electrical_bill?: string | null;
      water_bill?: string | null;
      reward_points_status?: string | null;
      reward_points_value?: string | null;
      is_promotion?: string | null;
      type_of_seller?: string | null;
      main_category?: string | null;
      collaborator_code?: string | null;
      hotline?: string | null;
      longest_gift_id?: string | null;
      longest_gift_time?: string | null;
      best_sale_id?: string | null;
      role_id?: string | null;
      is_super_user?: string | null;
      _first_store_id?: string | null;
      store_code?: Array<string | null> | null;
      store?: Array<string | null> | null;
    } | null> | null;
  } | null;
};

export type GetListCategoryQueryVariables = Exact<{[key: string]: never}>;

export type GetListCategoryQuery = {
  __typename?: 'Query';
  getListCategory?: {
    __typename?: 'ResGetListCategory';
    id?: string | null;
    parent_id?: string | null;
    name?: string | null;
    is_active?: boolean | null;
    position?: string | null;
    level?: string | null;
    product_count?: string | null;
    image?: string | null;
    children_data?: Array<{
      __typename?: 'TypeChildenData';
      id?: string | null;
      parent_id?: string | null;
      name?: string | null;
      is_active?: boolean | null;
      position?: string | null;
      level?: string | null;
      product_count?: string | null;
      image?: string | null;
      children_data?: Array<{
        __typename?: 'TypeChildenData2';
        id?: string | null;
        parent_id?: string | null;
        name?: string | null;
        is_active?: boolean | null;
        position?: string | null;
        level?: string | null;
        product_count?: string | null;
        image?: string | null;
      } | null> | null;
    } | null> | null;
  } | null;
};

export type GetProductByCategoryQueryVariables = Exact<{
  cur_page?: InputMaybe<Scalars['String']['input']>;
  page_size?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  order_by?: InputMaybe<Scalars['String']['input']>;
}>;

export type GetProductByCategoryQuery = {
  __typename?: 'Query';
  getProductByCategory?: Array<{
    __typename?: 'ResProductByCategory';
    entity_id?: string | null;
    attribute_set_id?: string | null;
    type_id?: string | null;
    sku?: string | null;
    has_options?: string | null;
    required_options?: string | null;
    created_at?: string | null;
    updated_at?: string | null;
    seller_id?: string | null;
    approval?: string | null;
    lat?: string | null;
    lng?: string | null;
    qty?: string | null;
    name_ncc?: string | null;
    name?: string | null;
    meta_title?: string | null;
    meta_description?: string | null;
    image?: string | null;
    small_image?: string | null;
    thumbnail?: string | null;
    options_container?: string | null;
    image_label?: string | null;
    small_image_label?: string | null;
    thumbnail_label?: string | null;
    msrp_display_actual_price_type?: string | null;
    url_key?: string | null;
    url_path?: string | null;
    gift_message_available?: string | null;
    add_product?: string | null;
    reward_point?: string | null;
    cost_price?: string | null;
    allow_linking?: string | null;
    cost_price_rate?: string | null;
    product_brand?: string | null;
    description?: string | null;
    short_description?: string | null;
    meta_keyword?: string | null;
    price?: string | null;
    collaborator_selling_price?: string | null;
    retail_price?: string | null;
    cost_price_shipping?: string | null;
    expiry_date?: string | null;
    color?: string | null;
    status?: string | null;
    visibility?: string | null;
    tax_class_id?: string | null;
    sm_featured?: string | null;
    product_types?: string | null;
    product_origin?: string | null;
    products_appointment?: string | null;
    is_product_featured?: string | null;
    seller_approved?: string | null;
    store_id?: string | null;
    product_sold?: string | null;
  } | null> | null;
};

export type GetDetailProductQueryVariables = Exact<{
  sku?: InputMaybe<Scalars['String']['input']>;
}>;

export type GetDetailProductQuery = {
  __typename?: 'Query';
  getDetailProduct?: {
    __typename?: 'ResGetDetailProduct';
    status?: boolean | null;
    messenger?: string | null;
    data?: {
      __typename?: 'TypeDetailProduct';
      entity_id?: string | null;
      attribute_set_id?: string | null;
      type_id?: string | null;
      sku?: string | null;
      has_options?: string | null;
      required_options?: string | null;
      created_at?: string | null;
      updated_at?: string | null;
      seller_id?: string | null;
      approval?: string | null;
      lat?: string | null;
      lng?: string | null;
      name?: string | null;
      meta_title?: string | null;
      meta_description?: string | null;
      image?: string | null;
      small_image?: string | null;
      thumbnail?: string | null;
      options_container?: string | null;
      image_label?: string | null;
      small_image_label?: string | null;
      thumbnail_label?: string | null;
      msrp_display_actual_price_type?: string | null;
      url_key?: string | null;
      url_path?: string | null;
      gift_message_available?: string | null;
      add_product?: string | null;
      reward_point?: string | null;
      cost_price?: string | null;
      allow_linking?: string | null;
      cost_price_rate?: string | null;
      product_brand?: string | null;
      description?: string | null;
      short_description?: string | null;
      meta_keyword?: string | null;
      price?: string | null;
      collaborator_selling_price?: string | null;
      retail_price?: string | null;
      cost_price_shipping?: string | null;
      expiry_date?: string | null;
      color?: string | null;
      status?: string | null;
      visibility?: string | null;
      tax_class_id?: string | null;
      sm_featured?: string | null;
      product_types?: string | null;
      product_origin?: string | null;
      products_appointment?: string | null;
      is_product_featured?: string | null;
      seller_approved?: string | null;
      store_id?: string | null;
      name_ncc?: string | null;
      category_ids?: Array<number | null> | null;
      categories_name?: string | null;
      inventory?: string | null;
      brand_name?: string | null;
    } | null;
  } | null;
};

export type GetSizeEndColorProductQueryVariables = Exact<{
  id?: InputMaybe<Scalars['String']['input']>;
}>;

export type GetSizeEndColorProductQuery = {
  __typename?: 'Query';
  getSizeEndColorProduct?: {
    __typename?: 'ResGetSizeEndColorProduct';
    status?: boolean | null;
    messenger?: string | null;
    data?: Array<{
      __typename?: 'TypeDataSizeEndColorProduct';
      color_id?: string | null;
      color_name?: string | null;
      color_value?: string | null;
      child?: Array<{
        __typename?: 'TypeChildSizeEndColorProduct';
        size_id?: string | null;
        size_name?: string | null;
        size_value?: string | null;
        qty?: string | null;
      } | null> | null;
    } | null> | null;
  } | null;
};

export type RegisterAppMutationVariables = Exact<{
  input?: InputMaybe<InputRegister>;
}>;

export type RegisterAppMutation = {
  __typename?: 'Mutation';
  registerApp?: {
    __typename?: 'ResRegister';
    status?: boolean | null;
    messenger?: string | null;
  } | null;
};

export type LoginAppMutationVariables = Exact<{
  input?: InputMaybe<InputLogin>;
}>;

export type LoginAppMutation = {__typename?: 'Mutation'; loginApp: string};

export type AddAddressFavouriteMutationVariables = Exact<{
  input?: InputMaybe<InputAddAddressFavourite>;
}>;

export type AddAddressFavouriteMutation = {
  __typename?: 'Mutation';
  addAddressFavourite?: {
    __typename?: 'ResAddAddressFavourite';
    status?: boolean | null;
    messenger?: string | null;
  } | null;
};

export type SearchForDriverMutationVariables = Exact<{
  input?: InputMaybe<InputSearchForDriver>;
}>;

export type SearchForDriverMutation = {
  __typename?: 'Mutation';
  searchForDriver?: {
    __typename?: 'ResSearchForDriver';
    status?: boolean | null;
    messenger?: string | null;
    data?: Array<{
      __typename?: 'TypeDataSearchForDriver';
      driver_id?: string | null;
      name?: string | null;
      phone_number?: string | null;
      license_plate?: string | null;
      rating?: string | null;
    } | null> | null;
  } | null;
};

export type SelectSellerMutationVariables = Exact<{
  input?: InputMaybe<InputSelectSeller>;
}>;

export type SelectSellerMutation = {
  __typename?: 'Mutation';
  selectSeller?: {
    __typename?: 'ResSelectSeller';
    status?: boolean | null;
    messenger?: string | null;
  } | null;
};
