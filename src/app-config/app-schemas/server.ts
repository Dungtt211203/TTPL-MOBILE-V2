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

export type Gallery = {
  __typename?: 'Gallery';
  file_image?: Maybe<Scalars['Int']['output']>;
  position?: Maybe<Scalars['Int']['output']>;
};

export type InfoBuyRequest = {
  __typename?: 'InfoBuyRequest';
  action?: Maybe<Scalars['String']['output']>;
};

export type InputAddFavourite = {
  productId?: InputMaybe<Scalars['String']['input']>;
};

export type InputAddPaymentInformation = {
  billing_address?: InputMaybe<InputBillingAddress>;
  paymentMethod?: InputMaybe<InputMethod>;
};

export type InputAddShippingInformation = {
  addressInformation?: InputMaybe<InputAddressInformation>;
};

export type InputAddShippingMethods = {
  address?: InputMaybe<InputAddressShippingMethods>;
};

export type InputAddToBoard = {
  groupId?: InputMaybe<Scalars['String']['input']>;
  productId?: InputMaybe<Scalars['String']['input']>;
};

export type InputAddToCard = {
  cartItem?: InputMaybe<CartItem>;
};

export type InputAddToMainWishlist = {
  buyRequest?: InputMaybe<Scalars['String']['input']>;
  productId?: InputMaybe<Scalars['String']['input']>;
};

export type InputAddressInformation = {
  shipping_address?: InputMaybe<InputShippingAddress>;
  shipping_carrier_code?: InputMaybe<Scalars['String']['input']>;
  shipping_method_code?: InputMaybe<Scalars['String']['input']>;
};

export type InputAddressShippingMethods = {
  city?: InputMaybe<Scalars['String']['input']>;
  country_id?: InputMaybe<Scalars['String']['input']>;
  firstname?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  lastname?: InputMaybe<Scalars['String']['input']>;
  postcode?: InputMaybe<Scalars['String']['input']>;
  region?: InputMaybe<Scalars['String']['input']>;
  street?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  telephone?: InputMaybe<Scalars['String']['input']>;
};

export type InputAllProduct = {
  page?: InputMaybe<Scalars['String']['input']>;
  record?: InputMaybe<Scalars['String']['input']>;
  store_code?: InputMaybe<Scalars['String']['input']>;
};

export type InputBillingAddress = {
  city?: InputMaybe<Scalars['String']['input']>;
  country_id?: InputMaybe<Scalars['String']['input']>;
  firstname?: InputMaybe<Scalars['String']['input']>;
  lastname?: InputMaybe<Scalars['String']['input']>;
  postcode?: InputMaybe<Scalars['String']['input']>;
  region?: InputMaybe<Scalars['String']['input']>;
  street?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  telephone?: InputMaybe<Scalars['String']['input']>;
};

export type InputCanceledOrder = {
  orderId?: InputMaybe<Scalars['Int']['input']>;
};

export type InputCartItem = {
  item_id?: InputMaybe<Scalars['String']['input']>;
  qty?: InputMaybe<Scalars['String']['input']>;
};

export type InputChangePassWord = {
  currentPassword?: InputMaybe<Scalars['String']['input']>;
  newPassword?: InputMaybe<Scalars['String']['input']>;
};

export type InputCouponCode = {
  couponCode?: InputMaybe<Scalars['String']['input']>;
};

export type InputCoupons = {
  page?: InputMaybe<Scalars['String']['input']>;
  record?: InputMaybe<Scalars['String']['input']>;
};

export type InputCreateBoard = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type InputCustomer = {
  email?: InputMaybe<Scalars['String']['input']>;
  firstname?: InputMaybe<Scalars['String']['input']>;
  lastname?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<ThirdParty>;
};

export type InputCustomerRegister = {
  customer?: InputMaybe<InputTypeCustomer>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type InputDefaultShippingAddress = {
  address?: InputMaybe<InputTypeDefaultShippingAddress>;
};

export type InputDeleteProductFromBoard = {
  groupId?: InputMaybe<Scalars['String']['input']>;
  productId?: InputMaybe<Scalars['String']['input']>;
};

export type InputFilterProduct = {
  category?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  price_sort?: InputMaybe<Scalars['String']['input']>;
  product_sort?: InputMaybe<TypeSort>;
  record?: InputMaybe<Scalars['Int']['input']>;
  store_code?: InputMaybe<Scalars['String']['input']>;
};

export type InputGetCustomerToken = {
  password?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type InputGetListReview = {
  page?: InputMaybe<Scalars['String']['input']>;
  record?: InputMaybe<Scalars['String']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
};

export type InputLoginWithThirdParty = {
  customer?: InputMaybe<InputCustomer>;
};

export type InputMethod = {
  method?: InputMaybe<Scalars['String']['input']>;
};

export type InputPostReview = {
  review?: InputMaybe<InputReview>;
};

export type InputRating = {
  rating_name?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['Int']['input']>;
};

export type InputReview = {
  detail?: InputMaybe<Scalars['String']['input']>;
  entity_pk_value?: InputMaybe<Scalars['String']['input']>;
  nickname?: InputMaybe<Scalars['String']['input']>;
  ratings?: InputMaybe<Array<InputMaybe<InputRating>>>;
  review_entity?: InputMaybe<Scalars['String']['input']>;
  review_status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type InputSearchProduct = {
  name?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  product_id?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  record?: InputMaybe<Scalars['Int']['input']>;
  store_code?: InputMaybe<Scalars['String']['input']>;
};

export type InputShippingAddress = {
  address?: InputMaybe<InputTypeShippingAddress>;
  city?: InputMaybe<Scalars['String']['input']>;
  country_id?: InputMaybe<Scalars['String']['input']>;
  firstname?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  lastname?: InputMaybe<Scalars['String']['input']>;
  postcode?: InputMaybe<Scalars['String']['input']>;
  region?: InputMaybe<Scalars['String']['input']>;
  street?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  telephone?: InputMaybe<Scalars['String']['input']>;
};

export type InputTypeAddress = {
  city?: InputMaybe<Scalars['String']['input']>;
  country_id?: InputMaybe<Scalars['String']['input']>;
  default_billing?: InputMaybe<Scalars['Boolean']['input']>;
  default_shipping?: InputMaybe<Scalars['Boolean']['input']>;
  firstname?: InputMaybe<Scalars['String']['input']>;
  lastname?: InputMaybe<Scalars['String']['input']>;
  middlename?: InputMaybe<Scalars['String']['input']>;
  postcode?: InputMaybe<Scalars['String']['input']>;
  region?: InputMaybe<InputTypeRegion>;
  region_id?: InputMaybe<Scalars['Int']['input']>;
  street?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  telephone?: InputMaybe<Scalars['String']['input']>;
};

export type InputTypeCustomer = {
  dob?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstname?: InputMaybe<Scalars['String']['input']>;
  lastname?: InputMaybe<Scalars['String']['input']>;
};

export type InputTypeDefaultShippingAddress = {
  city?: InputMaybe<Scalars['String']['input']>;
  country_id?: InputMaybe<Scalars['String']['input']>;
  default_billing?: InputMaybe<Scalars['Boolean']['input']>;
  default_shipping?: InputMaybe<Scalars['Boolean']['input']>;
  entity_id?: InputMaybe<Scalars['String']['input']>;
  firstname?: InputMaybe<Scalars['String']['input']>;
  lastname?: InputMaybe<Scalars['String']['input']>;
  postcode?: InputMaybe<Scalars['String']['input']>;
  region?: InputMaybe<Scalars['String']['input']>;
  street?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  telephone?: InputMaybe<Scalars['String']['input']>;
};

export type InputTypeEditCustomer = {
  customer?: InputMaybe<InputTypeCustomer>;
};

export type InputTypeRegion = {
  region?: InputMaybe<Scalars['String']['input']>;
  region_code?: InputMaybe<Scalars['String']['input']>;
  region_id?: InputMaybe<Scalars['Int']['input']>;
};

export type InputTypeShippingAddress = {
  city?: InputMaybe<Scalars['String']['input']>;
  country_id?: InputMaybe<Scalars['String']['input']>;
  default_billing?: InputMaybe<Scalars['Boolean']['input']>;
  default_shipping?: InputMaybe<Scalars['Boolean']['input']>;
  firstname?: InputMaybe<Scalars['String']['input']>;
  lastname?: InputMaybe<Scalars['String']['input']>;
  postcode?: InputMaybe<Scalars['String']['input']>;
  region_code?: InputMaybe<Scalars['String']['input']>;
  street?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  telephone?: InputMaybe<Scalars['String']['input']>;
};

export type InputUpdateLanguageCart = {
  quote?: InputMaybe<QuoteLanguage>;
};

export type InputUpdateQuantityCart = {
  cartItem?: InputMaybe<InputCartItem>;
};

export type InputUploadAvatar = {
  avatar: Scalars['Upload']['input'];
};

export type InputUploadBackground = {
  background: Scalars['Upload']['input'];
};

export type InputgetListOrder = {
  page?: InputMaybe<Scalars['Int']['input']>;
  record?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addCoupons: Scalars['Boolean']['output'];
  addDefaultShippingAddress?: Maybe<Array<Maybe<ResAddShippingAddress>>>;
  addFavourite?: Maybe<ResAddFavourite>;
  addPaymentInformation: Scalars['Int']['output'];
  addShippingAddress?: Maybe<Array<Maybe<ResAddShippingAddress>>>;
  addShippingInformation?: Maybe<ResAddShippingInformation>;
  addShippingMethods?: Maybe<Array<Maybe<ResAddShippingMethods>>>;
  addToBoard?: Maybe<Array<Maybe<Array<Maybe<Array<Maybe<ResAddToBoard>>>>>>>;
  addToCard?: Maybe<ResAddToCard>;
  addToMainWishlist?: Maybe<ResGetWishlistForCustomer>;
  canceledOrder: Scalars['Boolean']['output'];
  changePassword: Scalars['Boolean']['output'];
  createBoard?: Maybe<ResDataWishlist>;
  customerRegister?: Maybe<ResUserInfoFail>;
  deleteAccount: Scalars['Boolean']['output'];
  deleteAddress?: Maybe<Array<Maybe<ResDeleteAddress>>>;
  deleteBoard: Scalars['Boolean']['output'];
  deleteCartItem: Scalars['Boolean']['output'];
  deleteFavourite?: Maybe<Array<Maybe<ResAddFavourite>>>;
  deleteProductFromBoard: Scalars['Boolean']['output'];
  editInformation?: Maybe<ResCustomerMe>;
  getFilterProduct?: Maybe<TypeResFilterProduct>;
  getSearchProducts?: Maybe<ResSearchProduct>;
  loginWithThirdParty?: Maybe<ResLoginWithThirdParty>;
  postReview?: Maybe<ResReview>;
  reOrder: Scalars['Boolean']['output'];
  removeAvatar?: Maybe<Array<Maybe<ResUploadImage>>>;
  removeBackground?: Maybe<Array<Maybe<ResUploadImage>>>;
  updateLanguageCart: Scalars['Boolean']['output'];
  updateQuantityCart?: Maybe<ResUpdateQuantityCart>;
  uploadAvatar?: Maybe<Array<Maybe<ResUploadImage>>>;
  uploadBackground?: Maybe<Array<Maybe<ResUploadImage>>>;
};

export type MutationAddCouponsArgs = {
  input?: InputMaybe<InputCouponCode>;
};

export type MutationAddDefaultShippingAddressArgs = {
  input?: InputMaybe<InputDefaultShippingAddress>;
};

export type MutationAddFavouriteArgs = {
  input?: InputMaybe<InputAddFavourite>;
};

export type MutationAddPaymentInformationArgs = {
  input?: InputMaybe<InputAddPaymentInformation>;
};

export type MutationAddShippingAddressArgs = {
  input?: InputMaybe<InputShippingAddress>;
};

export type MutationAddShippingInformationArgs = {
  input?: InputMaybe<InputAddShippingInformation>;
};

export type MutationAddShippingMethodsArgs = {
  input?: InputMaybe<InputAddShippingMethods>;
};

export type MutationAddToBoardArgs = {
  input?: InputMaybe<InputAddToBoard>;
};

export type MutationAddToCardArgs = {
  input?: InputMaybe<InputAddToCard>;
};

export type MutationAddToMainWishlistArgs = {
  input?: InputMaybe<InputAddToMainWishlist>;
};

export type MutationCanceledOrderArgs = {
  input?: InputMaybe<InputCanceledOrder>;
};

export type MutationChangePasswordArgs = {
  input?: InputMaybe<InputChangePassWord>;
};

export type MutationCreateBoardArgs = {
  input?: InputMaybe<InputCreateBoard>;
};

export type MutationCustomerRegisterArgs = {
  input?: InputMaybe<InputCustomerRegister>;
};

export type MutationDeleteAddressArgs = {
  addressId?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDeleteBoardArgs = {
  input?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDeleteCartItemArgs = {
  item_id?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDeleteFavouriteArgs = {
  input?: InputMaybe<InputAddFavourite>;
};

export type MutationDeleteProductFromBoardArgs = {
  input?: InputMaybe<InputDeleteProductFromBoard>;
};

export type MutationEditInformationArgs = {
  input?: InputMaybe<InputTypeEditCustomer>;
};

export type MutationGetFilterProductArgs = {
  input?: InputMaybe<InputFilterProduct>;
};

export type MutationGetSearchProductsArgs = {
  input?: InputMaybe<InputSearchProduct>;
};

export type MutationLoginWithThirdPartyArgs = {
  input?: InputMaybe<InputLoginWithThirdParty>;
};

export type MutationPostReviewArgs = {
  input?: InputMaybe<InputPostReview>;
};

export type MutationReOrderArgs = {
  input?: InputMaybe<InputCanceledOrder>;
};

export type MutationUpdateLanguageCartArgs = {
  input?: InputMaybe<InputUpdateLanguageCart>;
};

export type MutationUpdateQuantityCartArgs = {
  input?: InputMaybe<InputUpdateQuantityCart>;
};

export type MutationUploadAvatarArgs = {
  input?: InputMaybe<InputUploadAvatar>;
};

export type MutationUploadBackgroundArgs = {
  input?: InputMaybe<InputUploadBackground>;
};

export type Query = {
  __typename?: 'Query';
  filterProduct?: Maybe<TypeResFilterProduct>;
  getAllProduct?: Maybe<ResProductlist>;
  getAvatar?: Maybe<Array<Maybe<ResGetImage>>>;
  getBackground?: Maybe<Array<Maybe<ResGetImage>>>;
  getCategories?: Maybe<ResCategories>;
  getCustomerInfo?: Maybe<ResLoginWithPassWord>;
  getCustomerMe?: Maybe<ResCustomerMe>;
  getCustomerToken?: Maybe<ResCustomerToken>;
  getDataWishlist?: Maybe<ResGetWishlist>;
  getFavourite?: Maybe<ResDataFavourite>;
  getImageSlider?: Maybe<Array<Maybe<ResImageSlider>>>;
  getListAddress?: Maybe<Array<Maybe<ResGetListAddress>>>;
  getListCart?: Maybe<ResListCart>;
  getListCoupons?: Maybe<ResListDataCoupons>;
  getListOrder?: Maybe<ResListOrder>;
  getListRank?: Maybe<ResListDataRank>;
  getListReOrder?: Maybe<ResReOrder>;
  getListReview?: Maybe<ResDataListReview>;
  getListUsedCoupons?: Maybe<Scalars['String']['output']>;
  getProducts?: Maybe<ResProducts>;
  getRank?: Maybe<ResDataRank>;
  getShippingAddress?: Maybe<ResGetShippingAddress>;
  loginWithPassWord?: Maybe<ResLoginWithPassWord>;
};

export type QueryFilterProductArgs = {
  input?: InputMaybe<InputFilterProduct>;
};

export type QueryGetAllProductArgs = {
  input?: InputMaybe<InputAllProduct>;
};

export type QueryGetCategoriesArgs = {
  store_code?: InputMaybe<Scalars['String']['input']>;
};

export type QueryGetCustomerInfoArgs = {
  email: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type QueryGetCustomerTokenArgs = {
  password?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type QueryGetFavouriteArgs = {
  store_code?: InputMaybe<Scalars['String']['input']>;
};

export type QueryGetImageSliderArgs = {
  sliderId?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryGetListCartArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  record?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryGetListCouponsArgs = {
  input?: InputMaybe<InputCoupons>;
};

export type QueryGetListOrderArgs = {
  input?: InputMaybe<InputgetListOrder>;
};

export type QueryGetListReOrderArgs = {
  input?: InputMaybe<InputAllProduct>;
};

export type QueryGetListReviewArgs = {
  input?: InputMaybe<InputGetListReview>;
};

export type QueryGetProductsArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  store_code?: InputMaybe<Scalars['String']['input']>;
};

export type QueryLoginWithPassWordArgs = {
  password?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type ResAddFavourite = {
  __typename?: 'ResAddFavourite';
  status?: Maybe<Scalars['Boolean']['output']>;
};

export type ResAddShippingAddress = {
  __typename?: 'ResAddShippingAddress';
  status?: Maybe<Scalars['String']['output']>;
};

export type ResAddShippingInformation = {
  __typename?: 'ResAddShippingInformation';
  payment_methods?: Maybe<Array<Maybe<TypePaymentMethods>>>;
  totals?: Maybe<TypeTotalsPayment>;
};

export type ResAddShippingMethods = {
  __typename?: 'ResAddShippingMethods';
  amount?: Maybe<Scalars['String']['output']>;
  available?: Maybe<Scalars['Boolean']['output']>;
  base_amount?: Maybe<Scalars['String']['output']>;
  carrier_code?: Maybe<Scalars['String']['output']>;
  carrier_title?: Maybe<Scalars['String']['output']>;
  error_message?: Maybe<Scalars['String']['output']>;
  method_code?: Maybe<Scalars['String']['output']>;
  method_title?: Maybe<Scalars['String']['output']>;
  price_excl_tax?: Maybe<Scalars['String']['output']>;
  price_incl_tax?: Maybe<Scalars['String']['output']>;
};

export type ResAddToBoard = {
  __typename?: 'ResAddToBoard';
  added_at?: Maybe<Scalars['String']['output']>;
  check_send_reminder?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  product_id?: Maybe<Scalars['String']['output']>;
  qty?: Maybe<Scalars['String']['output']>;
  store_id?: Maybe<Scalars['String']['output']>;
  wishlist_id?: Maybe<Scalars['String']['output']>;
};

export type ResAddToCard = {
  __typename?: 'ResAddToCard';
  item_id?: Maybe<Scalars['Int']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  product_type?: Maybe<Scalars['String']['output']>;
  qty?: Maybe<Scalars['Int']['output']>;
  quote_id?: Maybe<Scalars['Int']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
};

export type ResCategories = {
  __typename?: 'ResCategories';
  children_data?: Maybe<Array<Maybe<TypeChildren>>>;
  id?: Maybe<Scalars['Int']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  is_active?: Maybe<Scalars['Boolean']['output']>;
  level?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  parent_id?: Maybe<Scalars['Int']['output']>;
  position?: Maybe<Scalars['Int']['output']>;
  product_count?: Maybe<Scalars['Int']['output']>;
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

export type ResCustomerMe = {
  __typename?: 'ResCustomerMe';
  addresses?: Maybe<Array<Maybe<TypeAddress>>>;
  created_at?: Maybe<Scalars['String']['output']>;
  created_in?: Maybe<Scalars['String']['output']>;
  custom_attributes?: Maybe<TypeCustTomAttributes>;
  disable_auto_group_change?: Maybe<Scalars['Int']['output']>;
  dob?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  extension_attributes?: Maybe<TypeExAttributes>;
  firstname?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Scalars['Int']['output']>;
  group_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  lastname?: Maybe<Scalars['String']['output']>;
  store_id?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  website_id?: Maybe<Scalars['Int']['output']>;
};

export type ResCustomerRegister = {
  __typename?: 'ResCustomerRegister';
  created_at?: Maybe<Scalars['String']['output']>;
  created_in?: Maybe<Scalars['String']['output']>;
  dob?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstname?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Scalars['Int']['output']>;
  group_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  lastname?: Maybe<Scalars['String']['output']>;
  store_id?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  website_id?: Maybe<Scalars['Int']['output']>;
};

export type ResCustomerToken = {
  __typename?: 'ResCustomerToken';
  customer_info?: Maybe<TypeCustomerInfo>;
  status?: Maybe<Scalars['Boolean']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};

export type ResDataFavourite = {
  __typename?: 'ResDataFavourite';
  data?: Maybe<Array<Maybe<TypeDataFavourite>>>;
  status?: Maybe<Scalars['String']['output']>;
};

export type ResDataListCart = {
  __typename?: 'ResDataListCart';
  address?: Maybe<Scalars['String']['output']>;
  applied_rule_ids?: Maybe<Scalars['String']['output']>;
  base_currency_code?: Maybe<Scalars['String']['output']>;
  base_grand_total?: Maybe<Scalars['String']['output']>;
  base_subtotal?: Maybe<Scalars['String']['output']>;
  base_subtotal_with_discount?: Maybe<Scalars['String']['output']>;
  base_to_global_rate?: Maybe<Scalars['String']['output']>;
  base_to_quote_rate?: Maybe<Scalars['String']['output']>;
  checkout_method?: Maybe<Scalars['String']['output']>;
  converted_at?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  customer_dob?: Maybe<Scalars['String']['output']>;
  customer_firstname?: Maybe<Scalars['String']['output']>;
  customer_gender?: Maybe<Scalars['String']['output']>;
  customer_group_id?: Maybe<Scalars['String']['output']>;
  customer_id?: Maybe<Scalars['String']['output']>;
  customer_is_guest?: Maybe<Scalars['String']['output']>;
  customer_lastname?: Maybe<Scalars['String']['output']>;
  customer_middlename?: Maybe<Scalars['String']['output']>;
  customer_note?: Maybe<Scalars['String']['output']>;
  customer_note_notify?: Maybe<Scalars['String']['output']>;
  customer_prefix?: Maybe<Scalars['String']['output']>;
  customer_suffix?: Maybe<Scalars['String']['output']>;
  customer_tax_class_id?: Maybe<Scalars['String']['output']>;
  customer_taxvat?: Maybe<Scalars['String']['output']>;
  entity_id?: Maybe<Scalars['String']['output']>;
  ext_shipping_info?: Maybe<Scalars['String']['output']>;
  gift_message_id?: Maybe<Scalars['String']['output']>;
  global_currency_code?: Maybe<Scalars['String']['output']>;
  grand_total?: Maybe<Scalars['String']['output']>;
  is_active?: Maybe<Scalars['String']['output']>;
  is_changed?: Maybe<Scalars['String']['output']>;
  is_multi_shipping?: Maybe<Scalars['String']['output']>;
  is_persistent?: Maybe<Scalars['String']['output']>;
  is_virtual?: Maybe<Scalars['String']['output']>;
  item?: Maybe<Scalars['String']['output']>;
  items_count?: Maybe<Scalars['String']['output']>;
  items_qty?: Maybe<Scalars['String']['output']>;
  orig_order_id?: Maybe<Scalars['String']['output']>;
  payment?: Maybe<Scalars['String']['output']>;
  quote_currency_code?: Maybe<Scalars['String']['output']>;
  remote_ip?: Maybe<Scalars['String']['output']>;
  reserved_order_id?: Maybe<Scalars['String']['output']>;
  store_currency_code?: Maybe<Scalars['String']['output']>;
  store_id?: Maybe<Scalars['String']['output']>;
  store_to_base_rate?: Maybe<Scalars['String']['output']>;
  store_to_quote_rate?: Maybe<Scalars['String']['output']>;
  subtotal?: Maybe<Scalars['String']['output']>;
  subtotal_with_discount?: Maybe<Scalars['String']['output']>;
  trigger_recollect?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
};

export type ResDataListReview = {
  __typename?: 'ResDataListReview';
  average_rating?: Maybe<Scalars['Int']['output']>;
  data_review?: Maybe<Array<Maybe<TypeDataReView>>>;
  qty_sold?: Maybe<Scalars['Int']['output']>;
  remaining_quantity?: Maybe<Scalars['Int']['output']>;
};

export type ResDataRank = {
  __typename?: 'ResDataRank';
  data_rank?: Maybe<TypeDataRank>;
  status?: Maybe<Scalars['Boolean']['output']>;
};

export type ResDataWishlist = {
  __typename?: 'ResDataWishlist';
  customer_id?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  product_ids?: Maybe<Array<Maybe<TypeDataProduct>>>;
  shared?: Maybe<Scalars['String']['output']>;
  sharing_code?: Maybe<Scalars['String']['output']>;
};

export type ResDeleteAddress = {
  __typename?: 'ResDeleteAddress';
  status?: Maybe<Scalars['String']['output']>;
};

export type ResGetImage = {
  __typename?: 'ResGetImage';
  src?: Maybe<Scalars['String']['output']>;
};

export type ResGetListAddress = {
  __typename?: 'ResGetListAddress';
  city?: Maybe<Scalars['String']['output']>;
  country_id?: Maybe<Scalars['String']['output']>;
  default_billing?: Maybe<Scalars['Boolean']['output']>;
  default_shipping?: Maybe<Scalars['Boolean']['output']>;
  firstname?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  lastname?: Maybe<Scalars['String']['output']>;
  postcode?: Maybe<Scalars['String']['output']>;
  region?: Maybe<Scalars['String']['output']>;
  street?: Maybe<Scalars['String']['output']>;
  telephone?: Maybe<Scalars['String']['output']>;
};

export type ResGetShippingAddress = {
  __typename?: 'ResGetShippingAddress';
  city?: Maybe<Scalars['String']['output']>;
  country_id?: Maybe<Scalars['String']['output']>;
  default_billing?: Maybe<Scalars['Boolean']['output']>;
  default_shipping?: Maybe<Scalars['Boolean']['output']>;
  firstname?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  lastname?: Maybe<Scalars['String']['output']>;
  postcode?: Maybe<Scalars['String']['output']>;
  region?: Maybe<Scalars['String']['output']>;
  street?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  telephone?: Maybe<Scalars['String']['output']>;
};

export type ResGetWishlist = {
  __typename?: 'ResGetWishlist';
  all_products?: Maybe<Array<Maybe<TypeDataProduct>>>;
  data_wishlist?: Maybe<Array<Maybe<ResDataWishlist>>>;
  status?: Maybe<Scalars['String']['output']>;
};

export type ResGetWishlistForCustomer = {
  __typename?: 'ResGetWishlistForCustomer';
  added_at?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  info_buyRequest?: Maybe<InfoBuyRequest>;
  product?: Maybe<Array<Maybe<TypeResProduct>>>;
  product_id?: Maybe<Scalars['String']['output']>;
  qty?: Maybe<Scalars['Int']['output']>;
  store_id?: Maybe<Scalars['String']['output']>;
  wishlist_id?: Maybe<Scalars['String']['output']>;
  wishlist_item_id?: Maybe<Scalars['String']['output']>;
};

export type ResImageSlider = {
  __typename?: 'ResImageSlider';
  link?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['String']['output']>;
};

export type ResListCart = {
  __typename?: 'ResListCart';
  customer_id?: Maybe<Scalars['Int']['output']>;
  data?: Maybe<Array<Maybe<ResDataListCart>>>;
  page_number?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type ResListDataCoupons = {
  __typename?: 'ResListDataCoupons';
  data_coupon?: Maybe<Array<Maybe<TypeListItemCoupons>>>;
  status?: Maybe<Scalars['Boolean']['output']>;
};

export type ResListDataRank = {
  __typename?: 'ResListDataRank';
  data_rank?: Maybe<Array<Maybe<TypeListDataRank>>>;
  status?: Maybe<Scalars['Boolean']['output']>;
};

export type ResListOrder = {
  __typename?: 'ResListOrder';
  customer_id?: Maybe<Scalars['Int']['output']>;
  data?: Maybe<Array<Maybe<TypeDataOrder>>>;
  page_number?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type ResLoginWithPassWord = {
  __typename?: 'ResLoginWithPassWord';
  customer_info?: Maybe<ResCustomerInfo>;
  status?: Maybe<Scalars['Boolean']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};

export type ResLoginWithThirdParty = {
  __typename?: 'ResLoginWithThirdParty';
  message?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};

export type ResProductlist = {
  __typename?: 'ResProductlist';
  data?: Maybe<TypeDataProduct>;
  page_number?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
};

export type ResProducts = {
  __typename?: 'ResProducts';
  data_product?: Maybe<TypeDataProduct>;
  status?: Maybe<Scalars['String']['output']>;
};

export type ResReOrder = {
  __typename?: 'ResReOrder';
  data?: Maybe<Array<Maybe<TypeResProduct>>>;
  page_number?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
};

export type ResReview = {
  __typename?: 'ResReview';
  id?: Maybe<Scalars['Int']['output']>;
};

export type ResSearchProduct = {
  __typename?: 'ResSearchProduct';
  data?: Maybe<Array<Maybe<TypeDataProduct>>>;
  page_number?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type ResUpdateQuantityCart = {
  __typename?: 'ResUpdateQuantityCart';
  item_id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Int']['output']>;
  product_type?: Maybe<Scalars['String']['output']>;
  qty?: Maybe<Scalars['Int']['output']>;
  quote_id?: Maybe<Scalars['String']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
};

export type ResUploadImage = {
  __typename?: 'ResUploadImage';
  status?: Maybe<Scalars['String']['output']>;
};

export type ResUserInfo = {
  __typename?: 'ResUserInfo';
  addresses?: Maybe<Array<Maybe<TypeAddress>>>;
  created_at?: Maybe<Scalars['String']['output']>;
  created_in?: Maybe<Scalars['String']['output']>;
  disable_auto_group_change?: Maybe<Scalars['Int']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  extension_attributes?: Maybe<TypeExAttributes>;
  firstname?: Maybe<Scalars['String']['output']>;
  group_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  lastname?: Maybe<Scalars['String']['output']>;
  store_id?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  website_id?: Maybe<Scalars['Int']['output']>;
};

export type ResUserInfoFail = {
  __typename?: 'ResUserInfoFail';
  message?: Maybe<Scalars['String']['output']>;
};

export enum ThirdParty {
  Apple = 'apple',
  Facebook = 'facebook',
  Google = 'google',
}

export type TypeAddress = {
  __typename?: 'TypeAddress';
  city?: Maybe<Scalars['String']['output']>;
  company?: Maybe<Scalars['String']['output']>;
  country_id?: Maybe<Scalars['String']['output']>;
  custom_attributes?: Maybe<Array<Maybe<TypeCustTomAttributes>>>;
  customer_id?: Maybe<Scalars['Int']['output']>;
  default_billing?: Maybe<Scalars['Boolean']['output']>;
  default_shipping?: Maybe<Scalars['Boolean']['output']>;
  extension_attributes?: Maybe<TypeExAttributes>;
  fax?: Maybe<Scalars['String']['output']>;
  firstname?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  lastname?: Maybe<Scalars['String']['output']>;
  middlename?: Maybe<Scalars['String']['output']>;
  postcode?: Maybe<Scalars['String']['output']>;
  prefix?: Maybe<Scalars['String']['output']>;
  region?: Maybe<TypeRegion>;
  region_id?: Maybe<Scalars['Int']['output']>;
  street?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  suffix?: Maybe<Scalars['String']['output']>;
  telephone?: Maybe<Scalars['String']['output']>;
  vat_id?: Maybe<Scalars['String']['output']>;
};

export type TypeChildren = {
  __typename?: 'TypeChildren';
  children_data?: Maybe<Array<Maybe<TypeChildrenn>>>;
  id?: Maybe<Scalars['Int']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  is_active?: Maybe<Scalars['Boolean']['output']>;
  level?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  parent_id?: Maybe<Scalars['Int']['output']>;
  position?: Maybe<Scalars['Int']['output']>;
  product_count?: Maybe<Scalars['Int']['output']>;
};

export type TypeChildrenn = {
  __typename?: 'TypeChildrenn';
  id?: Maybe<Scalars['Int']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  is_active?: Maybe<Scalars['Boolean']['output']>;
  level?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  parent_id?: Maybe<Scalars['Int']['output']>;
  position?: Maybe<Scalars['Int']['output']>;
  product_count?: Maybe<Scalars['Int']['output']>;
};

export type TypeCustTomAttributes = {
  __typename?: 'TypeCustTomAttributes';
  attribute_code?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type TypeCustomerInfo = {
  __typename?: 'TypeCustomerInfo';
  address?: Maybe<Scalars['String']['output']>;
  dob?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  entity_id?: Maybe<Scalars['Int']['output']>;
  firstname?: Maybe<Scalars['String']['output']>;
  lastname?: Maybe<Scalars['String']['output']>;
  orders?: Maybe<Scalars['String']['output']>;
};

export type TypeDataFavourite = {
  __typename?: 'TypeDataFavourite';
  category?: Maybe<Scalars['String']['output']>;
  child_product?: Maybe<Scalars['String']['output']>;
  color?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  final_price?: Maybe<Scalars['String']['output']>;
  gallery?: Maybe<Scalars['String']['output']>;
  instock?: Maybe<Scalars['String']['output']>;
  is_checked?: Maybe<Scalars['Boolean']['output']>;
  main_image?: Maybe<Scalars['String']['output']>;
  max_regular_amount?: Maybe<Scalars['String']['output']>;
  min_regular_amount?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['String']['output']>;
  product_id?: Maybe<Scalars['String']['output']>;
  qty?: Maybe<Scalars['String']['output']>;
  short_description?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['String']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
  small_image?: Maybe<Scalars['String']['output']>;
  special_price?: Maybe<Scalars['String']['output']>;
  whole_sale?: Maybe<Scalars['String']['output']>;
  wishlist_id?: Maybe<Scalars['String']['output']>;
  wishlist_item_id?: Maybe<Scalars['String']['output']>;
};

export type TypeDataOrder = {
  __typename?: 'TypeDataOrder';
  address?: Maybe<Scalars['String']['output']>;
  adjustment_negative?: Maybe<Scalars['String']['output']>;
  adjustment_positive?: Maybe<Scalars['String']['output']>;
  applied_rule_ids?: Maybe<Scalars['String']['output']>;
  base_adjustment_negative?: Maybe<Scalars['String']['output']>;
  base_adjustment_positive?: Maybe<Scalars['String']['output']>;
  base_currency_code?: Maybe<Scalars['String']['output']>;
  base_discount_amount?: Maybe<Scalars['String']['output']>;
  base_discount_canceled?: Maybe<Scalars['String']['output']>;
  base_discount_invoiced?: Maybe<Scalars['String']['output']>;
  base_discount_refunded?: Maybe<Scalars['String']['output']>;
  base_discount_tax_compensation_amount?: Maybe<Scalars['String']['output']>;
  base_discount_tax_compensation_invoiced?: Maybe<Scalars['String']['output']>;
  base_discount_tax_compensation_refunded?: Maybe<Scalars['String']['output']>;
  base_grand_total?: Maybe<Scalars['String']['output']>;
  base_shipping_amount?: Maybe<Scalars['String']['output']>;
  base_shipping_canceled?: Maybe<Scalars['String']['output']>;
  base_shipping_discount_amount?: Maybe<Scalars['String']['output']>;
  base_shipping_discount_tax_compensation_amnt?: Maybe<
    Scalars['String']['output']
  >;
  base_shipping_incl_tax?: Maybe<Scalars['String']['output']>;
  base_shipping_invoiced?: Maybe<Scalars['String']['output']>;
  base_shipping_refunded?: Maybe<Scalars['String']['output']>;
  base_shipping_tax_amount?: Maybe<Scalars['String']['output']>;
  base_shipping_tax_refunded?: Maybe<Scalars['String']['output']>;
  base_subtotal?: Maybe<Scalars['String']['output']>;
  base_subtotal_canceled?: Maybe<Scalars['String']['output']>;
  base_subtotal_incl_tax?: Maybe<Scalars['String']['output']>;
  base_subtotal_invoiced?: Maybe<Scalars['String']['output']>;
  base_subtotal_refunded?: Maybe<Scalars['String']['output']>;
  base_tax_amount?: Maybe<Scalars['String']['output']>;
  base_tax_canceled?: Maybe<Scalars['String']['output']>;
  base_tax_invoiced?: Maybe<Scalars['String']['output']>;
  base_tax_refunded?: Maybe<Scalars['String']['output']>;
  base_to_global_rate?: Maybe<Scalars['String']['output']>;
  base_to_order_rate?: Maybe<Scalars['String']['output']>;
  base_total_canceled?: Maybe<Scalars['String']['output']>;
  base_total_due?: Maybe<Scalars['String']['output']>;
  base_total_invoiced?: Maybe<Scalars['String']['output']>;
  base_total_invoiced_cost?: Maybe<Scalars['String']['output']>;
  base_total_offline_refunded?: Maybe<Scalars['String']['output']>;
  base_total_online_refunded?: Maybe<Scalars['String']['output']>;
  base_total_paid?: Maybe<Scalars['String']['output']>;
  base_total_qty_ordered?: Maybe<Scalars['String']['output']>;
  base_total_refunded?: Maybe<Scalars['String']['output']>;
  billing_address_id?: Maybe<Scalars['String']['output']>;
  can_ship_partially?: Maybe<Scalars['String']['output']>;
  can_ship_partially_item?: Maybe<Scalars['String']['output']>;
  coupon_code?: Maybe<Scalars['String']['output']>;
  coupon_rule_name?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  customer_dob?: Maybe<Scalars['String']['output']>;
  customer_email?: Maybe<Scalars['String']['output']>;
  customer_firstname?: Maybe<Scalars['String']['output']>;
  customer_gender?: Maybe<Scalars['String']['output']>;
  customer_group_id?: Maybe<Scalars['String']['output']>;
  customer_id?: Maybe<Scalars['String']['output']>;
  customer_is_guest?: Maybe<Scalars['String']['output']>;
  customer_lastname?: Maybe<Scalars['String']['output']>;
  customer_middlename?: Maybe<Scalars['String']['output']>;
  customer_note?: Maybe<Scalars['String']['output']>;
  customer_note_notify?: Maybe<Scalars['String']['output']>;
  customer_prefix?: Maybe<Scalars['String']['output']>;
  customer_suffix?: Maybe<Scalars['String']['output']>;
  customer_taxvat?: Maybe<Scalars['String']['output']>;
  discount_amount?: Maybe<Scalars['String']['output']>;
  discount_canceled?: Maybe<Scalars['String']['output']>;
  discount_description?: Maybe<Scalars['String']['output']>;
  discount_invoiced?: Maybe<Scalars['String']['output']>;
  discount_refunded?: Maybe<Scalars['String']['output']>;
  discount_tax_compensation_amount?: Maybe<Scalars['String']['output']>;
  discount_tax_compensation_invoiced?: Maybe<Scalars['String']['output']>;
  discount_tax_compensation_refunded?: Maybe<Scalars['String']['output']>;
  edit_increment?: Maybe<Scalars['String']['output']>;
  email_sent?: Maybe<Scalars['String']['output']>;
  entity_id?: Maybe<Scalars['String']['output']>;
  ext_customer_id?: Maybe<Scalars['String']['output']>;
  ext_order_id?: Maybe<Scalars['String']['output']>;
  forced_shipment_with_invoice?: Maybe<Scalars['String']['output']>;
  gift_message_id?: Maybe<Scalars['String']['output']>;
  global_currency_code?: Maybe<Scalars['String']['output']>;
  grand_total?: Maybe<Scalars['String']['output']>;
  hold_before_state?: Maybe<Scalars['String']['output']>;
  hold_before_status?: Maybe<Scalars['String']['output']>;
  increment_id?: Maybe<Scalars['String']['output']>;
  is_virtual?: Maybe<Scalars['String']['output']>;
  item?: Maybe<Scalars['String']['output']>;
  order_currency_code?: Maybe<Scalars['String']['output']>;
  original_increment_id?: Maybe<Scalars['String']['output']>;
  payment_auth_expiration?: Maybe<Scalars['String']['output']>;
  payment_authorization_amount?: Maybe<Scalars['String']['output']>;
  paypal_ipn_customer_notified?: Maybe<Scalars['String']['output']>;
  protect_code?: Maybe<Scalars['String']['output']>;
  quote_address_id?: Maybe<Scalars['String']['output']>;
  quote_id?: Maybe<Scalars['String']['output']>;
  relation_child_id?: Maybe<Scalars['String']['output']>;
  relation_child_real_id?: Maybe<Scalars['String']['output']>;
  relation_parent_id?: Maybe<Scalars['String']['output']>;
  relation_parent_real_id?: Maybe<Scalars['String']['output']>;
  remote_ip?: Maybe<Scalars['String']['output']>;
  send_email?: Maybe<Scalars['String']['output']>;
  shipping_address_id?: Maybe<Scalars['String']['output']>;
  shipping_amount?: Maybe<Scalars['String']['output']>;
  shipping_canceled?: Maybe<Scalars['String']['output']>;
  shipping_description?: Maybe<Scalars['String']['output']>;
  shipping_discount_amount?: Maybe<Scalars['String']['output']>;
  shipping_discount_tax_compensation_amount?: Maybe<
    Scalars['String']['output']
  >;
  shipping_incl_tax?: Maybe<Scalars['String']['output']>;
  shipping_invoiced?: Maybe<Scalars['String']['output']>;
  shipping_method?: Maybe<Scalars['String']['output']>;
  shipping_refunded?: Maybe<Scalars['String']['output']>;
  shipping_tax_amount?: Maybe<Scalars['String']['output']>;
  shipping_tax_refunded?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  store_currency_code?: Maybe<Scalars['String']['output']>;
  store_id?: Maybe<Scalars['String']['output']>;
  store_name?: Maybe<Scalars['String']['output']>;
  store_to_base_rate?: Maybe<Scalars['String']['output']>;
  store_to_order_rate?: Maybe<Scalars['String']['output']>;
  subtotal?: Maybe<Scalars['String']['output']>;
  subtotal_canceled?: Maybe<Scalars['String']['output']>;
  subtotal_incl_tax?: Maybe<Scalars['String']['output']>;
  subtotal_invoiced?: Maybe<Scalars['String']['output']>;
  subtotal_refunded?: Maybe<Scalars['String']['output']>;
  tax_amount?: Maybe<Scalars['String']['output']>;
  tax_canceled?: Maybe<Scalars['String']['output']>;
  tax_invoiced?: Maybe<Scalars['String']['output']>;
  tax_refunded?: Maybe<Scalars['String']['output']>;
  total_canceled?: Maybe<Scalars['String']['output']>;
  total_due?: Maybe<Scalars['String']['output']>;
  total_invoiced?: Maybe<Scalars['String']['output']>;
  total_item_count?: Maybe<Scalars['String']['output']>;
  total_offline_refunded?: Maybe<Scalars['String']['output']>;
  total_online_refunded?: Maybe<Scalars['String']['output']>;
  total_paid?: Maybe<Scalars['String']['output']>;
  total_qty_ordered?: Maybe<Scalars['String']['output']>;
  total_refunded?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  weight?: Maybe<Scalars['String']['output']>;
  x_forwarded_for?: Maybe<Scalars['String']['output']>;
};

export type TypeDataProduct = {
  __typename?: 'TypeDataProduct';
  category?: Maybe<Scalars['String']['output']>;
  child_product?: Maybe<Scalars['String']['output']>;
  color?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  ecial_price?: Maybe<Scalars['String']['output']>;
  final_price?: Maybe<Scalars['String']['output']>;
  gallery?: Maybe<Scalars['String']['output']>;
  group_id?: Maybe<Scalars['String']['output']>;
  instock?: Maybe<Scalars['String']['output']>;
  language?: Maybe<Scalars['String']['output']>;
  main_image?: Maybe<Scalars['String']['output']>;
  max_regular_amount?: Maybe<Scalars['String']['output']>;
  min_regular_amount?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['String']['output']>;
  product_id?: Maybe<Scalars['String']['output']>;
  qty?: Maybe<Scalars['String']['output']>;
  short_description?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['String']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
  small_image?: Maybe<Scalars['String']['output']>;
  special_price?: Maybe<Scalars['String']['output']>;
  whole_sale?: Maybe<Scalars['String']['output']>;
  widget_id?: Maybe<Scalars['String']['output']>;
};

export type TypeDataRank = {
  __typename?: 'TypeDataRank';
  background?: Maybe<Scalars['String']['output']>;
  count_ordered?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  order?: Maybe<Scalars['String']['output']>;
  total?: Maybe<Scalars['String']['output']>;
  total_ordered?: Maybe<Scalars['String']['output']>;
};

export type TypeDataReView = {
  __typename?: 'TypeDataReView';
  created_at?: Maybe<Scalars['String']['output']>;
  detail?: Maybe<Scalars['String']['output']>;
  nickname?: Maybe<Scalars['String']['output']>;
  ratting?: Maybe<Scalars['Int']['output']>;
  review_id?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type TypeExAttributes = {
  __typename?: 'TypeExAttributes';
  is_subscribed?: Maybe<Scalars['Boolean']['output']>;
};

export type TypeGallery = {
  __typename?: 'TypeGallery';
  file_image?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['String']['output']>;
};

export type TypeItemsPayment = {
  __typename?: 'TypeItemsPayment';
  base_discount_amount?: Maybe<Scalars['String']['output']>;
  base_price?: Maybe<Scalars['String']['output']>;
  base_price_incl_tax?: Maybe<Scalars['String']['output']>;
  base_row_total?: Maybe<Scalars['String']['output']>;
  base_row_total_incl_tax?: Maybe<Scalars['String']['output']>;
  base_tax_amount?: Maybe<Scalars['String']['output']>;
  discount_amount?: Maybe<Scalars['String']['output']>;
  discount_percent?: Maybe<Scalars['String']['output']>;
  item_id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  options?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['String']['output']>;
  price_incl_tax?: Maybe<Scalars['String']['output']>;
  qty?: Maybe<Scalars['String']['output']>;
  row_total?: Maybe<Scalars['String']['output']>;
  row_total_incl_tax?: Maybe<Scalars['String']['output']>;
  row_total_with_discount?: Maybe<Scalars['String']['output']>;
  tax_amount?: Maybe<Scalars['String']['output']>;
  tax_percent?: Maybe<Scalars['String']['output']>;
  weee_tax_applied?: Maybe<Scalars['String']['output']>;
  weee_tax_applied_amount?: Maybe<Scalars['String']['output']>;
};

export type TypeListDataRank = {
  __typename?: 'TypeListDataRank';
  background?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  entity_id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  order?: Maybe<Scalars['String']['output']>;
  total?: Maybe<Scalars['String']['output']>;
};

export type TypeListItemCoupons = {
  __typename?: 'TypeListItemCoupons';
  actions_serialized?: Maybe<Scalars['String']['output']>;
  apply_to_shipping?: Maybe<Scalars['String']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  conditions_serialized?: Maybe<Scalars['String']['output']>;
  coupon_id?: Maybe<Scalars['String']['output']>;
  coupon_type?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  discount_amount?: Maybe<Scalars['String']['output']>;
  discount_qty?: Maybe<Scalars['String']['output']>;
  discount_step?: Maybe<Scalars['String']['output']>;
  expiration_date?: Maybe<Scalars['String']['output']>;
  from_date?: Maybe<Scalars['String']['output']>;
  is_active?: Maybe<Scalars['String']['output']>;
  is_advanced?: Maybe<Scalars['String']['output']>;
  is_primary?: Maybe<Scalars['String']['output']>;
  is_rss?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  product_ids?: Maybe<Scalars['String']['output']>;
  rule_id?: Maybe<Scalars['String']['output']>;
  simple_action?: Maybe<Scalars['String']['output']>;
  simple_free_shipping?: Maybe<Scalars['String']['output']>;
  sort_order?: Maybe<Scalars['String']['output']>;
  stop_rules_processing?: Maybe<Scalars['String']['output']>;
  times_used?: Maybe<Scalars['String']['output']>;
  to_date?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  usage_limit?: Maybe<Scalars['String']['output']>;
  usage_per_customer?: Maybe<Scalars['String']['output']>;
  use_auto_generation?: Maybe<Scalars['String']['output']>;
  uses_per_coupon?: Maybe<Scalars['String']['output']>;
  uses_per_customer?: Maybe<Scalars['String']['output']>;
};

export type TypePaymentMethods = {
  __typename?: 'TypePaymentMethods';
  code?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type TypeRegion = {
  __typename?: 'TypeRegion';
  extension_attributes?: Maybe<TypeExAttributes>;
  region?: Maybe<Scalars['String']['output']>;
  region_code?: Maybe<Scalars['String']['output']>;
  region_id?: Maybe<Scalars['Int']['output']>;
};

export type TypeResFilterProduct = {
  __typename?: 'TypeResFilterProduct';
  data?: Maybe<Array<Maybe<TypeResProduct>>>;
  page_number?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type TypeResProduct = {
  __typename?: 'TypeResProduct';
  category?: Maybe<Scalars['String']['output']>;
  child_product?: Maybe<Scalars['String']['output']>;
  color?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  entity_id?: Maybe<Scalars['String']['output']>;
  final_price?: Maybe<Scalars['String']['output']>;
  gallery?: Maybe<Array<Maybe<TypeGallery>>>;
  instock?: Maybe<Scalars['String']['output']>;
  language?: Maybe<Scalars['String']['output']>;
  main_image?: Maybe<Scalars['String']['output']>;
  max_regular_amount?: Maybe<Scalars['String']['output']>;
  min_regular_amount?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['String']['output']>;
  product_id?: Maybe<Scalars['String']['output']>;
  qty?: Maybe<Scalars['String']['output']>;
  short_description?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['String']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
  small_image?: Maybe<Scalars['String']['output']>;
  special_price?: Maybe<Scalars['String']['output']>;
  store?: Maybe<Scalars['String']['output']>;
  whole_sale?: Maybe<Scalars['String']['output']>;
};

export enum TypeSort {
  Asc = 'ASC',
  Desc = 'DESC',
}

export type TypeTotalSegments = {
  __typename?: 'TypeTotalSegments';
  code?: Maybe<Scalars['String']['output']>;
  extension_attributes?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type TypeTotalsPayment = {
  __typename?: 'TypeTotalsPayment';
  base_currency_code?: Maybe<Scalars['String']['output']>;
  base_discount_amount?: Maybe<Scalars['String']['output']>;
  base_grand_total?: Maybe<Scalars['String']['output']>;
  base_shipping_amount?: Maybe<Scalars['String']['output']>;
  base_shipping_discount_amount?: Maybe<Scalars['String']['output']>;
  base_shipping_incl_tax?: Maybe<Scalars['String']['output']>;
  base_shipping_tax_amount?: Maybe<Scalars['String']['output']>;
  base_subtotal?: Maybe<Scalars['String']['output']>;
  base_subtotal_incl_tax?: Maybe<Scalars['String']['output']>;
  base_subtotal_with_discount?: Maybe<Scalars['String']['output']>;
  base_tax_amount?: Maybe<Scalars['String']['output']>;
  discount_amount?: Maybe<Scalars['String']['output']>;
  grand_total?: Maybe<Scalars['String']['output']>;
  items?: Maybe<Array<Maybe<TypeItemsPayment>>>;
  items_qty?: Maybe<Scalars['String']['output']>;
  quote_currency_code?: Maybe<Scalars['String']['output']>;
  shipping_amount?: Maybe<Scalars['String']['output']>;
  shipping_discount_amount?: Maybe<Scalars['String']['output']>;
  shipping_incl_tax?: Maybe<Scalars['String']['output']>;
  shipping_tax_amount?: Maybe<Scalars['String']['output']>;
  subtotal?: Maybe<Scalars['String']['output']>;
  subtotal_incl_tax?: Maybe<Scalars['String']['output']>;
  subtotal_with_discount?: Maybe<Scalars['String']['output']>;
  tax_amount?: Maybe<Scalars['String']['output']>;
  total_segments?: Maybe<Array<Maybe<TypeTotalSegments>>>;
  weee_tax_applied_amount?: Maybe<Scalars['String']['output']>;
};

export type CartItem = {
  qty?: InputMaybe<Scalars['Int']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
};

export type CustomerLanguage = {
  email?: InputMaybe<Scalars['String']['input']>;
  firstname?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  lastname?: InputMaybe<Scalars['String']['input']>;
};

export type QuoteLanguage = {
  customer?: InputMaybe<CustomerLanguage>;
  id?: InputMaybe<Scalars['String']['input']>;
  store_id?: InputMaybe<Scalars['Int']['input']>;
};

export type GetCustomerTokenQueryVariables = Exact<{
  username?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
}>;

export type GetCustomerTokenQuery = {
  __typename?: 'Query';
  query?: {
    __typename?: 'ResCustomerToken';
    status?: boolean | null;
    token?: string | null;
    customer_info?: {
      __typename?: 'TypeCustomerInfo';
      entity_id?: number | null;
      email?: string | null;
      firstname?: string | null;
      lastname?: string | null;
      dob?: string | null;
      address?: string | null;
      orders?: string | null;
    } | null;
  } | null;
};

export type GetAllProductQueryVariables = Exact<{
  input?: InputMaybe<InputAllProduct>;
}>;

export type GetAllProductQuery = {
  __typename?: 'Query';
  query?: {
    __typename?: 'ResProductlist';
    status?: boolean | null;
    page_number?: string | null;
    data?: {
      __typename?: 'TypeDataProduct';
      product_id?: string | null;
      name?: string | null;
      category?: string | null;
      created_at?: string | null;
      qty?: string | null;
      main_image?: string | null;
      small_image?: string | null;
      gallery?: string | null;
      sku?: string | null;
      color?: string | null;
      size?: string | null;
      price?: string | null;
      instock?: string | null;
      whole_sale?: string | null;
      description?: string | null;
      short_description?: string | null;
      child_product?: string | null;
      group_id?: string | null;
      special_price?: string | null;
      final_price?: string | null;
      max_regular_amount?: string | null;
      min_regular_amount?: string | null;
      widget_id?: string | null;
      language?: string | null;
    } | null;
  } | null;
};

export type GetCategoriesQueryVariables = Exact<{
  store_code?: InputMaybe<Scalars['String']['input']>;
}>;

export type GetCategoriesQuery = {
  __typename?: 'Query';
  getCategories?: {
    __typename?: 'ResCategories';
    id?: number | null;
    parent_id?: number | null;
    name?: string | null;
    is_active?: boolean | null;
    position?: number | null;
    level?: number | null;
    product_count?: number | null;
    image?: string | null;
    children_data?: Array<{
      __typename?: 'TypeChildren';
      id?: number | null;
      parent_id?: number | null;
      name?: string | null;
      is_active?: boolean | null;
      position?: number | null;
      level?: number | null;
      product_count?: number | null;
      image?: string | null;
      children_data?: Array<{
        __typename?: 'TypeChildrenn';
        id?: number | null;
        parent_id?: number | null;
        name?: string | null;
        is_active?: boolean | null;
        position?: number | null;
        level?: number | null;
        product_count?: number | null;
        image?: string | null;
      } | null> | null;
    } | null> | null;
  } | null;
};

export type GetListCartQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']['input']>;
  record?: InputMaybe<Scalars['Int']['input']>;
}>;

export type GetListCartQuery = {
  __typename?: 'Query';
  query?: {
    __typename?: 'ResListCart';
    status?: string | null;
    page_number?: number | null;
    customer_id?: number | null;
    data?: Array<{
      __typename?: 'ResDataListCart';
      entity_id?: string | null;
      store_id?: string | null;
      created_at?: string | null;
      updated_at?: string | null;
      converted_at?: string | null;
      is_active?: string | null;
      is_virtual?: string | null;
      is_multi_shipping?: string | null;
      items_count?: string | null;
      items_qty?: string | null;
      orig_order_id?: string | null;
      store_to_base_rate?: string | null;
      store_to_quote_rate?: string | null;
      base_currency_code?: string | null;
      store_currency_code?: string | null;
      quote_currency_code?: string | null;
      grand_total?: string | null;
      base_grand_total?: string | null;
      checkout_method?: string | null;
      customer_id?: string | null;
      customer_tax_class_id?: string | null;
      customer_group_id?: string | null;
      customer_prefix?: string | null;
      customer_firstname?: string | null;
      customer_middlename?: string | null;
      customer_lastname?: string | null;
      customer_suffix?: string | null;
      global_currency_code?: string | null;
      customer_dob?: string | null;
      customer_note?: string | null;
      customer_note_notify?: string | null;
      customer_is_guest?: string | null;
      remote_ip?: string | null;
      applied_rule_ids?: string | null;
      reserved_order_id?: string | null;
      base_to_global_rate?: string | null;
      base_to_quote_rate?: string | null;
      customer_taxvat?: string | null;
      customer_gender?: string | null;
      subtotal?: string | null;
      base_subtotal?: string | null;
      subtotal_with_discount?: string | null;
      base_subtotal_with_discount?: string | null;
      is_changed?: string | null;
      trigger_recollect?: string | null;
      ext_shipping_info?: string | null;
      gift_message_id?: string | null;
      is_persistent?: string | null;
      item?: string | null;
      address?: string | null;
      payment?: string | null;
    } | null> | null;
  } | null;
};

export type GetProductsQueryVariables = Exact<{
  id?: InputMaybe<Scalars['Int']['input']>;
  store_code?: InputMaybe<Scalars['String']['input']>;
}>;

export type GetProductsQuery = {
  __typename?: 'Query';
  query?: {
    __typename?: 'ResProducts';
    data_product?: {
      __typename?: 'TypeDataProduct';
      product_id?: string | null;
      name?: string | null;
      category?: string | null;
      created_at?: string | null;
      qty?: string | null;
      main_image?: string | null;
      small_image?: string | null;
      gallery?: string | null;
      sku?: string | null;
      color?: string | null;
      size?: string | null;
      price?: string | null;
      instock?: string | null;
      whole_sale?: string | null;
      description?: string | null;
      short_description?: string | null;
      child_product?: string | null;
      group_id?: string | null;
      special_price?: string | null;
      final_price?: string | null;
      max_regular_amount?: string | null;
      min_regular_amount?: string | null;
      widget_id?: string | null;
      language?: string | null;
    } | null;
  } | null;
};

export type GetDataWishlistQueryVariables = Exact<{[key: string]: never}>;

export type GetDataWishlistQuery = {
  __typename?: 'Query';
  getDataWishlist?: {
    __typename?: 'ResGetWishlist';
    status?: string | null;
    all_products?: Array<{
      __typename?: 'TypeDataProduct';
      product_id?: string | null;
      name?: string | null;
      category?: string | null;
      created_at?: string | null;
      qty?: string | null;
      main_image?: string | null;
      small_image?: string | null;
      gallery?: string | null;
      sku?: string | null;
      color?: string | null;
      size?: string | null;
      price?: string | null;
      instock?: string | null;
      whole_sale?: string | null;
      description?: string | null;
      short_description?: string | null;
      child_product?: string | null;
      group_id?: string | null;
    } | null> | null;
    data_wishlist?: Array<{
      __typename?: 'ResDataWishlist';
      id?: string | null;
      name?: string | null;
      customer_id?: string | null;
      shared?: string | null;
      sharing_code?: string | null;
      product_ids?: Array<{
        __typename?: 'TypeDataProduct';
        product_id?: string | null;
        name?: string | null;
        category?: string | null;
        created_at?: string | null;
        qty?: string | null;
        main_image?: string | null;
        small_image?: string | null;
        gallery?: string | null;
        sku?: string | null;
        color?: string | null;
        size?: string | null;
        price?: string | null;
        instock?: string | null;
        whole_sale?: string | null;
        description?: string | null;
        short_description?: string | null;
        child_product?: string | null;
        group_id?: string | null;
        max_regular_amount?: string | null;
        min_regular_amount?: string | null;
      } | null> | null;
    } | null> | null;
  } | null;
};

export type GetListAddressQueryVariables = Exact<{[key: string]: never}>;

export type GetListAddressQuery = {
  __typename?: 'Query';
  query?: Array<{
    __typename?: 'ResGetListAddress';
    id?: string | null;
    street?: string | null;
    country_id?: string | null;
    telephone?: string | null;
    postcode?: string | null;
    city?: string | null;
    firstname?: string | null;
    lastname?: string | null;
    default_shipping?: boolean | null;
    default_billing?: boolean | null;
  } | null> | null;
};

export type GetImageSliderQueryVariables = Exact<{
  sliderId?: InputMaybe<Scalars['Int']['input']>;
}>;

export type GetImageSliderQuery = {
  __typename?: 'Query';
  query?: Array<{
    __typename?: 'ResImageSlider';
    link?: string | null;
    position?: string | null;
  } | null> | null;
};

export type GetListReviewQueryVariables = Exact<{
  input?: InputMaybe<InputGetListReview>;
}>;

export type GetListReviewQuery = {
  __typename?: 'Query';
  getListReview?: {
    __typename?: 'ResDataListReview';
    average_rating?: number | null;
    qty_sold?: number | null;
    remaining_quantity?: number | null;
    data_review?: Array<{
      __typename?: 'TypeDataReView';
      review_id?: string | null;
      title?: string | null;
      nickname?: string | null;
      detail?: string | null;
      ratting?: number | null;
      created_at?: string | null;
    } | null> | null;
  } | null;
};

export type GetListOrderQueryVariables = Exact<{
  input?: InputMaybe<InputgetListOrder>;
}>;

export type GetListOrderQuery = {
  __typename?: 'Query';
  getListOrder?: {
    __typename?: 'ResListOrder';
    status?: string | null;
    page_number?: string | null;
    customer_id?: number | null;
    data?: Array<{
      __typename?: 'TypeDataOrder';
      entity_id?: string | null;
      state?: string | null;
      status?: string | null;
      coupon_code?: string | null;
      protect_code?: string | null;
      shipping_description?: string | null;
      is_virtual?: string | null;
      store_id?: string | null;
      customer_id?: string | null;
      base_discount_amount?: string | null;
      base_discount_canceled?: string | null;
      base_discount_invoiced?: string | null;
      base_discount_refunded?: string | null;
      base_grand_total?: string | null;
      base_shipping_amount?: string | null;
      base_shipping_canceled?: string | null;
      base_shipping_invoiced?: string | null;
      base_shipping_refunded?: string | null;
      base_shipping_tax_amount?: string | null;
      base_shipping_tax_refunded?: string | null;
      base_subtotal?: string | null;
      base_subtotal_canceled?: string | null;
      base_subtotal_invoiced?: string | null;
      base_subtotal_refunded?: string | null;
      base_tax_amount?: string | null;
      base_tax_canceled?: string | null;
      base_tax_invoiced?: string | null;
      base_tax_refunded?: string | null;
      base_to_global_rate?: string | null;
      base_to_order_rate?: string | null;
      base_total_canceled?: string | null;
      base_total_invoiced?: string | null;
      base_total_invoiced_cost?: string | null;
      base_total_offline_refunded?: string | null;
      base_total_online_refunded?: string | null;
      base_total_paid?: string | null;
      base_total_qty_ordered?: string | null;
      base_total_refunded?: string | null;
      discount_amount?: string | null;
      discount_canceled?: string | null;
      discount_invoiced?: string | null;
      discount_refunded?: string | null;
      grand_total?: string | null;
      shipping_amount?: string | null;
      shipping_canceled?: string | null;
      shipping_invoiced?: string | null;
      shipping_refunded?: string | null;
      shipping_tax_amount?: string | null;
      shipping_tax_refunded?: string | null;
      store_to_base_rate?: string | null;
      store_to_order_rate?: string | null;
      subtotal?: string | null;
      subtotal_canceled?: string | null;
      subtotal_invoiced?: string | null;
      subtotal_refunded?: string | null;
      tax_amount?: string | null;
      tax_canceled?: string | null;
      tax_invoiced?: string | null;
      tax_refunded?: string | null;
      total_canceled?: string | null;
      total_invoiced?: string | null;
      total_offline_refunded?: string | null;
      total_online_refunded?: string | null;
      total_paid?: string | null;
      total_qty_ordered?: string | null;
      total_refunded?: string | null;
      can_ship_partially?: string | null;
      can_ship_partially_item?: string | null;
      customer_is_guest?: string | null;
      customer_note_notify?: string | null;
      billing_address_id?: string | null;
      customer_group_id?: string | null;
      edit_increment?: string | null;
      email_sent?: string | null;
      send_email?: string | null;
      forced_shipment_with_invoice?: string | null;
      payment_auth_expiration?: string | null;
      quote_address_id?: string | null;
      quote_id?: string | null;
      shipping_address_id?: string | null;
      adjustment_negative?: string | null;
      adjustment_positive?: string | null;
      base_adjustment_negative?: string | null;
      base_adjustment_positive?: string | null;
      base_shipping_discount_amount?: string | null;
      base_subtotal_incl_tax?: string | null;
      base_total_due?: string | null;
      payment_authorization_amount?: string | null;
      shipping_discount_amount?: string | null;
      subtotal_incl_tax?: string | null;
      total_due?: string | null;
      weight?: string | null;
      customer_dob?: string | null;
      increment_id?: string | null;
      applied_rule_ids?: string | null;
      base_currency_code?: string | null;
      customer_email?: string | null;
      customer_firstname?: string | null;
      customer_lastname?: string | null;
      customer_middlename?: string | null;
      customer_prefix?: string | null;
      customer_suffix?: string | null;
      customer_taxvat?: string | null;
      discount_description?: string | null;
      ext_customer_id?: string | null;
      ext_order_id?: string | null;
      global_currency_code?: string | null;
      hold_before_state?: string | null;
      hold_before_status?: string | null;
      order_currency_code?: string | null;
      original_increment_id?: string | null;
      relation_child_id?: string | null;
      relation_child_real_id?: string | null;
      relation_parent_id?: string | null;
      relation_parent_real_id?: string | null;
      remote_ip?: string | null;
      shipping_method?: string | null;
      store_currency_code?: string | null;
      store_name?: string | null;
      x_forwarded_for?: string | null;
      customer_note?: string | null;
      created_at?: string | null;
      updated_at?: string | null;
      total_item_count?: string | null;
      customer_gender?: string | null;
      discount_tax_compensation_amount?: string | null;
      base_discount_tax_compensation_amount?: string | null;
      shipping_discount_tax_compensation_amount?: string | null;
      base_shipping_discount_tax_compensation_amnt?: string | null;
      discount_tax_compensation_invoiced?: string | null;
      base_discount_tax_compensation_invoiced?: string | null;
      discount_tax_compensation_refunded?: string | null;
      base_discount_tax_compensation_refunded?: string | null;
      shipping_incl_tax?: string | null;
      base_shipping_incl_tax?: string | null;
      coupon_rule_name?: string | null;
      gift_message_id?: string | null;
      paypal_ipn_customer_notified?: string | null;
      item?: string | null;
      address?: string | null;
    } | null> | null;
  } | null;
};

export type GetBackgroundQueryVariables = Exact<{[key: string]: never}>;

export type GetBackgroundQuery = {
  __typename?: 'Query';
  getBackground?: Array<{
    __typename?: 'ResGetImage';
    src?: string | null;
  } | null> | null;
};

export type GetAvatarQueryVariables = Exact<{[key: string]: never}>;

export type GetAvatarQuery = {
  __typename?: 'Query';
  getAvatar?: Array<{
    __typename?: 'ResGetImage';
    src?: string | null;
  } | null> | null;
};

export type GetCustomerMeQueryVariables = Exact<{[key: string]: never}>;

export type GetCustomerMeQuery = {
  __typename?: 'Query';
  query?: {
    __typename?: 'ResCustomerMe';
    id?: number | null;
    group_id?: number | null;
    created_at?: string | null;
    updated_at?: string | null;
    created_in?: string | null;
    dob?: string | null;
    email?: string | null;
    firstname?: string | null;
    lastname?: string | null;
    gender?: number | null;
    store_id?: number | null;
    website_id?: number | null;
    disable_auto_group_change?: number | null;
    addresses?: Array<{
      __typename?: 'TypeAddress';
      id?: string | null;
      street?: Array<string | null> | null;
      country_id?: string | null;
      telephone?: string | null;
      postcode?: string | null;
      city?: string | null;
      firstname?: string | null;
      lastname?: string | null;
      region?: {
        __typename?: 'TypeRegion';
        region_code?: string | null;
        region?: string | null;
        region_id?: number | null;
      } | null;
    } | null> | null;
    extension_attributes?: {
      __typename?: 'TypeExAttributes';
      is_subscribed?: boolean | null;
    } | null;
    custom_attributes?: {
      __typename?: 'TypeCustTomAttributes';
      attribute_code?: string | null;
      value?: string | null;
    } | null;
  } | null;
};

export type GetShippingAddressQueryVariables = Exact<{[key: string]: never}>;

export type GetShippingAddressQuery = {
  __typename?: 'Query';
  query?: {
    __typename?: 'ResGetShippingAddress';
    id?: string | null;
    street?: Array<string | null> | null;
    country_id?: string | null;
    telephone?: string | null;
    postcode?: string | null;
    city?: string | null;
    firstname?: string | null;
    lastname?: string | null;
    default_shipping?: boolean | null;
    default_billing?: boolean | null;
  } | null;
};

export type GetFavouriteQueryVariables = Exact<{
  store_code?: InputMaybe<Scalars['String']['input']>;
}>;

export type GetFavouriteQuery = {
  __typename?: 'Query';
  getFavourite?: {
    __typename?: 'ResDataFavourite';
    status?: string | null;
    data?: Array<{
      __typename?: 'TypeDataFavourite';
      is_checked?: boolean | null;
      wishlist_item_id?: string | null;
      wishlist_id?: string | null;
      product_id?: string | null;
      name?: string | null;
      category?: string | null;
      created_at?: string | null;
      qty?: string | null;
      main_image?: string | null;
      small_image?: string | null;
      gallery?: string | null;
      sku?: string | null;
      color?: string | null;
      size?: string | null;
      price?: string | null;
      instock?: string | null;
      whole_sale?: string | null;
      description?: string | null;
      short_description?: string | null;
      child_product?: string | null;
      special_price?: string | null;
      final_price?: string | null;
      max_regular_amount?: string | null;
      min_regular_amount?: string | null;
    } | null> | null;
  } | null;
};

export type LoginWithPassWordQueryVariables = Exact<{
  username?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
}>;

export type LoginWithPassWordQuery = {
  __typename?: 'Query';
  query?: {
    __typename?: 'ResLoginWithPassWord';
    status?: boolean | null;
    token?: string | null;
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

export type GetCustomerInfoQueryVariables = Exact<{
  token: Scalars['String']['input'];
  email: Scalars['String']['input'];
}>;

export type GetCustomerInfoQuery = {
  __typename?: 'Query';
  query?: {
    __typename?: 'ResLoginWithPassWord';
    status?: boolean | null;
    token?: string | null;
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

export type GetRankQueryVariables = Exact<{[key: string]: never}>;

export type GetRankQuery = {
  __typename?: 'Query';
  getRank?: {
    __typename?: 'ResDataRank';
    status?: boolean | null;
    data_rank?: {
      __typename?: 'TypeDataRank';
      id?: string | null;
      name?: string | null;
      order?: string | null;
      total?: string | null;
      background?: string | null;
      count_ordered?: string | null;
      total_ordered?: string | null;
    } | null;
  } | null;
};

export type GetListRankQueryVariables = Exact<{[key: string]: never}>;

export type GetListRankQuery = {
  __typename?: 'Query';
  getListRank?: {
    __typename?: 'ResListDataRank';
    status?: boolean | null;
    data_rank?: Array<{
      __typename?: 'TypeListDataRank';
      entity_id?: string | null;
      name?: string | null;
      background?: string | null;
      order?: string | null;
      total?: string | null;
      created_at?: string | null;
    } | null> | null;
  } | null;
};

export type FilterProductQueryVariables = Exact<{
  input?: InputMaybe<InputFilterProduct>;
}>;

export type FilterProductQuery = {
  __typename?: 'Query';
  query?: {
    __typename?: 'TypeResFilterProduct';
    status?: string | null;
    page_number?: number | null;
    data?: Array<{
      __typename?: 'TypeResProduct';
      entity_id?: string | null;
      product_id?: string | null;
      name?: string | null;
      category?: string | null;
      created_at?: string | null;
      qty?: string | null;
      main_image?: string | null;
      small_image?: string | null;
      sku?: string | null;
      color?: string | null;
      size?: string | null;
      price?: string | null;
      instock?: string | null;
      whole_sale?: string | null;
      description?: string | null;
      short_description?: string | null;
      child_product?: string | null;
      store?: string | null;
      language?: string | null;
      special_price?: string | null;
      final_price?: string | null;
      max_regular_amount?: string | null;
      min_regular_amount?: string | null;
      gallery?: Array<{
        __typename?: 'TypeGallery';
        file_image?: string | null;
        position?: string | null;
      } | null> | null;
    } | null> | null;
  } | null;
};

export type GetListCouponsQueryVariables = Exact<{
  input?: InputMaybe<InputCoupons>;
}>;

export type GetListCouponsQuery = {
  __typename?: 'Query';
  getListCoupons?: {
    __typename?: 'ResListDataCoupons';
    status?: boolean | null;
    data_coupon?: Array<{
      __typename?: 'TypeListItemCoupons';
      coupon_id?: string | null;
      rule_id?: string | null;
      code?: string | null;
      usage_limit?: string | null;
      usage_per_customer?: string | null;
      times_used?: string | null;
      expiration_date?: string | null;
      is_primary?: string | null;
      created_at?: string | null;
      type?: string | null;
      name?: string | null;
      description?: string | null;
      from_date?: string | null;
      to_date?: string | null;
      uses_per_customer?: string | null;
      is_active?: string | null;
      conditions_serialized?: string | null;
      actions_serialized?: string | null;
      stop_rules_processing?: string | null;
      is_advanced?: string | null;
      product_ids?: string | null;
      sort_order?: string | null;
      simple_action?: string | null;
      discount_amount?: string | null;
      discount_qty?: string | null;
      discount_step?: string | null;
      apply_to_shipping?: string | null;
      is_rss?: string | null;
      coupon_type?: string | null;
      use_auto_generation?: string | null;
      uses_per_coupon?: string | null;
      simple_free_shipping?: string | null;
    } | null> | null;
  } | null;
};

export type GetListReOrderQueryVariables = Exact<{
  input?: InputMaybe<InputAllProduct>;
}>;

export type GetListReOrderQuery = {
  __typename?: 'Query';
  getListReOrder?: {
    __typename?: 'ResReOrder';
    status?: boolean | null;
    page_number?: string | null;
    data?: Array<{
      __typename?: 'TypeResProduct';
      entity_id?: string | null;
      product_id?: string | null;
      name?: string | null;
      category?: string | null;
      created_at?: string | null;
      qty?: string | null;
      main_image?: string | null;
      small_image?: string | null;
      sku?: string | null;
      color?: string | null;
      size?: string | null;
      price?: string | null;
      instock?: string | null;
      whole_sale?: string | null;
      description?: string | null;
      short_description?: string | null;
      child_product?: string | null;
      store?: string | null;
      language?: string | null;
      special_price?: string | null;
      final_price?: string | null;
      max_regular_amount?: string | null;
      min_regular_amount?: string | null;
      gallery?: Array<{
        __typename?: 'TypeGallery';
        file_image?: string | null;
        position?: string | null;
      } | null> | null;
    } | null> | null;
  } | null;
};

export type GetListUsedCouponsQueryVariables = Exact<{[key: string]: never}>;

export type GetListUsedCouponsQuery = {
  __typename?: 'Query';
  getListUsedCoupons?: string | null;
};

export type LoginWithThirdPartyMutationVariables = Exact<{
  input?: InputMaybe<InputLoginWithThirdParty>;
}>;

export type LoginWithThirdPartyMutation = {
  __typename?: 'Mutation';
  mutation?: {
    __typename?: 'ResLoginWithThirdParty';
    token?: string | null;
    status?: boolean | null;
    password?: string | null;
    message?: string | null;
  } | null;
};

export type GetFilterProductMutationVariables = Exact<{
  input?: InputMaybe<InputFilterProduct>;
}>;

export type GetFilterProductMutation = {
  __typename?: 'Mutation';
  getFilterProduct?: {
    __typename?: 'TypeResFilterProduct';
    status?: string | null;
    page_number?: number | null;
    data?: Array<{
      __typename?: 'TypeResProduct';
      entity_id?: string | null;
      product_id?: string | null;
      name?: string | null;
      category?: string | null;
      created_at?: string | null;
      qty?: string | null;
      main_image?: string | null;
      small_image?: string | null;
      sku?: string | null;
      color?: string | null;
      size?: string | null;
      price?: string | null;
      instock?: string | null;
      whole_sale?: string | null;
      description?: string | null;
      short_description?: string | null;
      child_product?: string | null;
      store?: string | null;
      language?: string | null;
      special_price?: string | null;
      final_price?: string | null;
      max_regular_amount?: string | null;
      min_regular_amount?: string | null;
      gallery?: Array<{
        __typename?: 'TypeGallery';
        file_image?: string | null;
        position?: string | null;
      } | null> | null;
    } | null> | null;
  } | null;
};

export type ReOderMutationVariables = Exact<{
  input?: InputMaybe<InputCanceledOrder>;
}>;

export type ReOderMutation = {__typename?: 'Mutation'; reOrder: boolean};

export type CanceledOderMutationVariables = Exact<{
  input?: InputMaybe<InputCanceledOrder>;
}>;

export type CanceledOderMutation = {
  __typename?: 'Mutation';
  canceledOrder: boolean;
};

export type UpdateQuantityCartMutationVariables = Exact<{
  input?: InputMaybe<InputUpdateQuantityCart>;
}>;

export type UpdateQuantityCartMutation = {
  __typename?: 'Mutation';
  updateQuantityCart?: {
    __typename?: 'ResUpdateQuantityCart';
    item_id?: number | null;
    sku?: string | null;
    qty?: number | null;
    quote_id?: string | null;
  } | null;
};

export type DeleteCartItemMutationVariables = Exact<{
  item_id?: InputMaybe<Scalars['String']['input']>;
}>;

export type DeleteCartItemMutation = {
  __typename?: 'Mutation';
  deleteCartItem: boolean;
};

export type AddShippingAddressMutationVariables = Exact<{
  input?: InputMaybe<InputShippingAddress>;
}>;

export type AddShippingAddressMutation = {
  __typename?: 'Mutation';
  addShippingAddress?: Array<{
    __typename?: 'ResAddShippingAddress';
    status?: string | null;
  } | null> | null;
};

export type GetSearchProductsMutationVariables = Exact<{
  input?: InputMaybe<InputSearchProduct>;
}>;

export type GetSearchProductsMutation = {
  __typename?: 'Mutation';
  getSearchProducts?: {
    __typename?: 'ResSearchProduct';
    status?: string | null;
    page_number?: string | null;
    data?: Array<{
      __typename?: 'TypeDataProduct';
      product_id?: string | null;
      name?: string | null;
      category?: string | null;
      created_at?: string | null;
      qty?: string | null;
      main_image?: string | null;
      small_image?: string | null;
      gallery?: string | null;
      sku?: string | null;
      color?: string | null;
      size?: string | null;
      price?: string | null;
      instock?: string | null;
      whole_sale?: string | null;
      description?: string | null;
      short_description?: string | null;
      child_product?: string | null;
      group_id?: string | null;
      special_price?: string | null;
      final_price?: string | null;
      max_regular_amount?: string | null;
      min_regular_amount?: string | null;
      widget_id?: string | null;
      language?: string | null;
    } | null> | null;
  } | null;
};

export type AddToCardMutationVariables = Exact<{
  input?: InputMaybe<InputAddToCard>;
}>;

export type AddToCardMutation = {
  __typename?: 'Mutation';
  addToCard?: {
    __typename?: 'ResAddToCard';
    item_id?: number | null;
    sku?: string | null;
    qty?: number | null;
    name?: string | null;
    product_type?: string | null;
    quote_id?: number | null;
    message?: string | null;
  } | null;
};

export type EditInformationMutationVariables = Exact<{
  input: InputTypeEditCustomer;
}>;

export type EditInformationMutation = {
  __typename?: 'Mutation';
  editInformation?: {
    __typename?: 'ResCustomerMe';
    id?: number | null;
    group_id?: number | null;
    created_at?: string | null;
    updated_at?: string | null;
    created_in?: string | null;
    dob?: string | null;
    email?: string | null;
    firstname?: string | null;
    lastname?: string | null;
    gender?: number | null;
    store_id?: number | null;
    website_id?: number | null;
    disable_auto_group_change?: number | null;
    addresses?: Array<{
      __typename?: 'TypeAddress';
      id?: string | null;
      street?: Array<string | null> | null;
      country_id?: string | null;
      telephone?: string | null;
      postcode?: string | null;
      city?: string | null;
      firstname?: string | null;
      lastname?: string | null;
      region?: {
        __typename?: 'TypeRegion';
        region_code?: string | null;
        region?: string | null;
        region_id?: number | null;
      } | null;
    } | null> | null;
    extension_attributes?: {
      __typename?: 'TypeExAttributes';
      is_subscribed?: boolean | null;
    } | null;
    custom_attributes?: {
      __typename?: 'TypeCustTomAttributes';
      attribute_code?: string | null;
      value?: string | null;
    } | null;
  } | null;
};

export type CreateBoardMutationVariables = Exact<{
  input?: InputMaybe<InputCreateBoard>;
}>;

export type CreateBoardMutation = {
  __typename?: 'Mutation';
  createBoard?: {
    __typename?: 'ResDataWishlist';
    id?: string | null;
    name?: string | null;
    customer_id?: string | null;
    shared?: string | null;
    sharing_code?: string | null;
  } | null;
};

export type DeleteBoardMutationVariables = Exact<{
  groupId?: InputMaybe<Scalars['String']['input']>;
}>;

export type DeleteBoardMutation = {
  __typename?: 'Mutation';
  deleteBoard: boolean;
};

export type AddToBoardMutationVariables = Exact<{
  input?: InputMaybe<InputAddToBoard>;
}>;

export type AddToBoardMutation = {
  __typename?: 'Mutation';
  addToBoard?: Array<Array<Array<{
    __typename?: 'ResAddToBoard';
    id?: string | null;
    wishlist_id?: string | null;
    product_id?: string | null;
    store_id?: string | null;
    added_at?: string | null;
    description?: string | null;
    qty?: string | null;
    check_send_reminder?: string | null;
  } | null> | null> | null> | null;
};

export type AddToMainWishlistMutationVariables = Exact<{
  input?: InputMaybe<InputAddToMainWishlist>;
}>;

export type AddToMainWishlistMutation = {
  __typename?: 'Mutation';
  addToMainWishlist?: {
    __typename?: 'ResGetWishlistForCustomer';
    wishlist_item_id?: string | null;
    wishlist_id?: string | null;
    product_id?: string | null;
    store_id?: string | null;
    added_at?: string | null;
    description?: string | null;
    qty?: number | null;
    info_buyRequest?: {
      __typename?: 'InfoBuyRequest';
      action?: string | null;
    } | null;
    product?: Array<{
      __typename?: 'TypeResProduct';
      product_id?: string | null;
      name?: string | null;
      category?: string | null;
      created_at?: string | null;
      qty?: string | null;
      main_image?: string | null;
      small_image?: string | null;
      sku?: string | null;
      color?: string | null;
      size?: string | null;
      price?: string | null;
      instock?: string | null;
      whole_sale?: string | null;
      description?: string | null;
      short_description?: string | null;
      gallery?: Array<{
        __typename?: 'TypeGallery';
        file_image?: string | null;
        position?: string | null;
      } | null> | null;
    } | null> | null;
  } | null;
};

export type DeleteProductFromBoardMutationVariables = Exact<{
  input?: InputMaybe<InputDeleteProductFromBoard>;
}>;

export type DeleteProductFromBoardMutation = {
  __typename?: 'Mutation';
  deleteProductFromBoard: boolean;
};

export type UploadAvatarMutationVariables = Exact<{
  input?: InputMaybe<InputUploadAvatar>;
}>;

export type UploadAvatarMutation = {
  __typename?: 'Mutation';
  uploadAvatar?: Array<{
    __typename?: 'ResUploadImage';
    status?: string | null;
  } | null> | null;
};

export type RemoveAvatarMutationVariables = Exact<{[key: string]: never}>;

export type RemoveAvatarMutation = {
  __typename?: 'Mutation';
  removeAvatar?: Array<{
    __typename?: 'ResUploadImage';
    status?: string | null;
  } | null> | null;
};

export type UploadBackgroundMutationVariables = Exact<{
  input?: InputMaybe<InputUploadBackground>;
}>;

export type UploadBackgroundMutation = {
  __typename?: 'Mutation';
  uploadBackground?: Array<{
    __typename?: 'ResUploadImage';
    status?: string | null;
  } | null> | null;
};

export type RemoveBackgroundMutationVariables = Exact<{[key: string]: never}>;

export type RemoveBackgroundMutation = {
  __typename?: 'Mutation';
  removeBackground?: Array<{
    __typename?: 'ResUploadImage';
    status?: string | null;
  } | null> | null;
};

export type DeleteAccountMutationVariables = Exact<{[key: string]: never}>;

export type DeleteAccountMutation = {
  __typename?: 'Mutation';
  deleteAccount: boolean;
};

export type ChangePasswordMutationVariables = Exact<{
  input?: InputMaybe<InputChangePassWord>;
}>;

export type ChangePasswordMutation = {
  __typename?: 'Mutation';
  changePassword: boolean;
};

export type AddDefaultShippingAddressMutationVariables = Exact<{
  input?: InputMaybe<InputDefaultShippingAddress>;
}>;

export type AddDefaultShippingAddressMutation = {
  __typename?: 'Mutation';
  addDefaultShippingAddress?: Array<{
    __typename?: 'ResAddShippingAddress';
    status?: string | null;
  } | null> | null;
};

export type DeleteAddressMutationVariables = Exact<{
  addressId?: InputMaybe<Scalars['String']['input']>;
}>;

export type DeleteAddressMutation = {
  __typename?: 'Mutation';
  deleteAddress?: Array<{
    __typename?: 'ResDeleteAddress';
    status?: string | null;
  } | null> | null;
};

export type AddShippingMethodsMutationVariables = Exact<{
  input?: InputMaybe<InputAddShippingMethods>;
}>;

export type AddShippingMethodsMutation = {
  __typename?: 'Mutation';
  addShippingMethods?: Array<{
    __typename?: 'ResAddShippingMethods';
    carrier_code?: string | null;
    method_code?: string | null;
    carrier_title?: string | null;
    method_title?: string | null;
    amount?: string | null;
    base_amount?: string | null;
    available?: boolean | null;
    error_message?: string | null;
    price_excl_tax?: string | null;
    price_incl_tax?: string | null;
  } | null> | null;
};

export type AddShippingInformationMutationVariables = Exact<{
  input?: InputMaybe<InputAddShippingInformation>;
}>;

export type AddShippingInformationMutation = {
  __typename?: 'Mutation';
  addShippingInformation?: {
    __typename?: 'ResAddShippingInformation';
    payment_methods?: Array<{
      __typename?: 'TypePaymentMethods';
      code?: string | null;
      title?: string | null;
    } | null> | null;
    totals?: {
      __typename?: 'TypeTotalsPayment';
      grand_total?: string | null;
      base_grand_total?: string | null;
      subtotal?: string | null;
      base_subtotal?: string | null;
      discount_amount?: string | null;
      base_discount_amount?: string | null;
      subtotal_with_discount?: string | null;
      base_subtotal_with_discount?: string | null;
      shipping_amount?: string | null;
      base_shipping_amount?: string | null;
      shipping_discount_amount?: string | null;
      base_shipping_discount_amount?: string | null;
      tax_amount?: string | null;
      base_tax_amount?: string | null;
      weee_tax_applied_amount?: string | null;
      shipping_tax_amount?: string | null;
      base_shipping_tax_amount?: string | null;
      subtotal_incl_tax?: string | null;
      base_subtotal_incl_tax?: string | null;
      shipping_incl_tax?: string | null;
      base_shipping_incl_tax?: string | null;
      base_currency_code?: string | null;
      quote_currency_code?: string | null;
      items_qty?: string | null;
      items?: Array<{
        __typename?: 'TypeItemsPayment';
        item_id?: string | null;
        price?: string | null;
        base_price?: string | null;
        qty?: string | null;
        row_total?: string | null;
        base_row_total?: string | null;
        row_total_with_discount?: string | null;
        tax_amount?: string | null;
        base_tax_amount?: string | null;
        tax_percent?: string | null;
        discount_amount?: string | null;
        base_discount_amount?: string | null;
        discount_percent?: string | null;
        price_incl_tax?: string | null;
        base_price_incl_tax?: string | null;
        row_total_incl_tax?: string | null;
        base_row_total_incl_tax?: string | null;
        options?: string | null;
        weee_tax_applied_amount?: string | null;
        weee_tax_applied?: string | null;
        name?: string | null;
      } | null> | null;
      total_segments?: Array<{
        __typename?: 'TypeTotalSegments';
        code?: string | null;
        title?: string | null;
        value?: string | null;
        extension_attributes?: string | null;
      } | null> | null;
    } | null;
  } | null;
};

export type AddPaymentInformationMutationVariables = Exact<{
  input?: InputMaybe<InputAddPaymentInformation>;
}>;

export type AddPaymentInformationMutation = {
  __typename?: 'Mutation';
  addPaymentInformation: number;
};

export type AddFavouriteMutationVariables = Exact<{
  input?: InputMaybe<InputAddFavourite>;
}>;

export type AddFavouriteMutation = {
  __typename?: 'Mutation';
  addFavourite?: {
    __typename?: 'ResAddFavourite';
    status?: boolean | null;
  } | null;
};

export type DeleteFavouriteMutationVariables = Exact<{
  input?: InputMaybe<InputAddFavourite>;
}>;

export type DeleteFavouriteMutation = {
  __typename?: 'Mutation';
  deleteFavourite?: Array<{
    __typename?: 'ResAddFavourite';
    status?: boolean | null;
  } | null> | null;
};

export type CustomerRegisterMutationVariables = Exact<{
  input?: InputMaybe<InputCustomerRegister>;
}>;

export type CustomerRegisterMutation = {
  __typename?: 'Mutation';
  query?: {__typename?: 'ResUserInfoFail'; message?: string | null} | null;
};

export type PostReviewMutationVariables = Exact<{
  input?: InputMaybe<InputPostReview>;
}>;

export type PostReviewMutation = {
  __typename?: 'Mutation';
  postReview?: {__typename?: 'ResReview'; id?: number | null} | null;
};

export type AddCouponsMutationVariables = Exact<{
  input?: InputMaybe<InputCouponCode>;
}>;

export type AddCouponsMutation = {__typename?: 'Mutation'; addCoupons: boolean};

export type UpdateLanguageCartMutationVariables = Exact<{
  input?: InputMaybe<InputUpdateLanguageCart>;
}>;

export type UpdateLanguageCartMutation = {
  __typename?: 'Mutation';
  updateLanguageCart: boolean;
};
