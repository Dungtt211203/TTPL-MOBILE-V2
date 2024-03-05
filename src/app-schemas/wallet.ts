export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: { input: string; output: string };
	String: { input: string; output: string };
	Boolean: { input: boolean; output: boolean };
	Int: { input: number; output: number };
	Float: { input: number; output: number };
};

export enum Action_Service {
	ChatRoom = 'ChatRoom',
	AdsDetail = 'ads_detail',
	BidNft = 'bid_nft',
	BuyCrypto = 'buy_crypto',
	Dapp = 'dapp',
	DetailHistory = 'detail_history',
	DetailMarketToken = 'detail_market_token',
	DetailNft = 'detail_nft',
	DetailOrder = 'detail_order',
	DetailToken = 'detail_token',
	GameDetail = 'game_detail',
	GamesList = 'games_list',
	HistoryBuyFiat = 'history_buy_fiat',
	ListDapp = 'list_dapp',
	MarketCoin = 'market_coin',
	MarketNft = 'market_nft',
	MyAssets = 'my_assets',
	MyBids = 'my_bids',
	MyWallet = 'my_wallet',
	Swap = 'swap',
}

export type Asset = {
	__typename?: 'Asset';
	balance?: Maybe<Scalars['Float']['output']>;
	decimals?: Maybe<Scalars['Int']['output']>;
	id: Scalars['String']['output'];
	logo?: Maybe<Scalars['String']['output']>;
	name: Scalars['String']['output'];
	symbol?: Maybe<Scalars['String']['output']>;
	type: Scalars['String']['output'];
};

export type AssetTransaction = {
	__typename?: 'AssetTransaction';
	asset_id?: Maybe<Scalars['String']['output']>;
	created_at?: Maybe<Scalars['Int']['output']>;
	direction?: Maybe<Scalars['String']['output']>;
	fee?: Maybe<Scalars['Float']['output']>;
	from?: Maybe<Scalars['String']['output']>;
	id?: Maybe<Scalars['String']['output']>;
	inputs?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
	nonce?: Maybe<Scalars['Float']['output']>;
	outputs?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
	status?: Maybe<Scalars['String']['output']>;
	to?: Maybe<Scalars['String']['output']>;
	type?: Maybe<Scalars['String']['output']>;
	value?: Maybe<Scalars['Float']['output']>;
};

export type AssetTransactions = {
	__typename?: 'AssetTransactions';
	count: Scalars['Int']['output'];
	data: Array<Maybe<AssetTransaction>>;
};

export type Assets = {
	__typename?: 'Assets';
	data: Array<Maybe<Asset>>;
	total: Scalars['Int']['output'];
};

export enum Banner_Action_Mode {
	Detail = 'DETAIL',
	Navigate = 'NAVIGATE',
	SendRequestChat = 'SEND_REQUEST_CHAT',
	Webview = 'WEBVIEW',
}

export type Banner = {
	__typename?: 'Banner';
	data?: Maybe<BannerRows>;
	error_code?: Maybe<Scalars['Int']['output']>;
	message?: Maybe<Scalars['String']['output']>;
};

export type BannerInterface = {
	__typename?: 'BannerInterface';
	content?: Maybe<Scalars['String']['output']>;
	contentEN?: Maybe<Scalars['String']['output']>;
	contentVI?: Maybe<Scalars['String']['output']>;
	id?: Maybe<Scalars['String']['output']>;
	image?: Maybe<Scalars['String']['output']>;
	index?: Maybe<Scalars['String']['output']>;
	isActive?: Maybe<Scalars['String']['output']>;
	mode?: Maybe<Banner_Action_Mode>;
	params?: Maybe<Scalars['String']['output']>;
	screen?: Maybe<Action_Service>;
	title?: Maybe<Scalars['String']['output']>;
	titleEN?: Maybe<Scalars['String']['output']>;
	titleVI?: Maybe<Scalars['String']['output']>;
	url?: Maybe<Scalars['String']['output']>;
};

export type BannerRows = {
	__typename?: 'BannerRows';
	rows?: Maybe<Array<Maybe<BannerInterface>>>;
};

export type BodyHistory = {
	coin: Scalars['Int']['input'];
	token_address: Scalars['String']['input'];
	tx_hash?: InputMaybe<Scalars['String']['input']>;
};

export enum Currency {
	Usd = 'USD',
	Vnd = 'VND',
}

export type CurrentAccount = {
	__typename?: 'CurrentAccount';
	data?: Maybe<Array<Maybe<InfoCurrentAccount>>>;
};

export type CurrentWallet = {
	__typename?: 'CurrentWallet';
	balance?: Maybe<Scalars['Float']['output']>;
	color: Scalars['String']['output'];
	id: Scalars['String']['output'];
	is_verify?: Maybe<Scalars['Boolean']['output']>;
	name: Scalars['String']['output'];
	type?: Maybe<Import_Type>;
};

export type DataPayment = {
	__typename?: 'DataPayment';
	data?: Maybe<Scalars['String']['output']>;
	tx_no?: Maybe<Scalars['String']['output']>;
};

export type DataPaymentPending = {
	__typename?: 'DataPaymentPending';
	data?: Maybe<Array<DataPayment>>;
	error_code?: Maybe<Scalars['Int']['output']>;
	message?: Maybe<Scalars['String']['output']>;
};

export type DataWalletRequest = {
	__typename?: 'DataWalletRequest';
	data?: Maybe<DataPayment>;
	error_code?: Maybe<Scalars['Int']['output']>;
	message?: Maybe<Scalars['String']['output']>;
};

export type DetailNotification = {
	__typename?: 'DetailNotification';
	data?: Maybe<NotificationInterface>;
};

export enum Filter_Trans_Type {
	All = 'all',
	Pending = 'pending',
	Receive = 'receive',
	Send = 'send',
}

export enum Import_Type {
	Json = 'JSON',
	Mnemonic = 'MNEMONIC',
	Private = 'PRIVATE',
}

export type Info = {
	__typename?: 'Info';
	avatar?: Maybe<Scalars['String']['output']>;
	bio?: Maybe<Scalars['String']['output']>;
	maker_release_time_avg?: Maybe<Scalars['Float']['output']>;
	nickname?: Maybe<Scalars['String']['output']>;
	success_count?: Maybe<Scalars['Int']['output']>;
	success_rate?: Maybe<Scalars['Float']['output']>;
	taker_release_time_avg?: Maybe<Scalars['Float']['output']>;
	verified?: Maybe<Verified>;
};

export type InfoCurrentAccount = {
	__typename?: 'InfoCurrentAccount';
	address?: Maybe<Scalars['String']['output']>;
	coin?: Maybe<Scalars['Int']['output']>;
	publicKey?: Maybe<Scalars['String']['output']>;
};

export enum Language {
	En = 'EN',
	Vi = 'VI',
}

export type Mutation = {
	__typename?: 'Mutation';
	addCustomWalletAsset: Scalars['Boolean']['output'];
	addWalletAsset: Scalars['Boolean']['output'];
	exportMnemonic: Scalars['String']['output'];
	importFromMnemonic: Scalars['Boolean']['output'];
	importJSON: Scalars['Boolean']['output'];
	importPrivateKey: Scalars['Boolean']['output'];
	removeWallet: Scalars['Boolean']['output'];
	setWallet: Scalars['Boolean']['output'];
	syncAssetBalance: Scalars['Boolean']['output'];
	syncBalance: Scalars['Boolean']['output'];
	syncCollectionCategories: Scalars['Boolean']['output'];
	syncCollections: Scalars['Boolean']['output'];
	syncHistoryTransaction: Scalars['Boolean']['output'];
	syncMyInfo: Scalars['Boolean']['output'];
	syncPrice: Scalars['Boolean']['output'];
	syncTransaction: Scalars['Boolean']['output'];
	updateMyInfo: Scalars['Boolean']['output'];
	updateWallet: Scalars['Boolean']['output'];
	updateWalletAsset: Scalars['Boolean']['output'];
};

export type MutationAddCustomWalletAssetArgs = {
	asset_id: Scalars['String']['input'];
	balance: Scalars['Int']['input'];
	decimals: Scalars['Int']['input'];
	name: Scalars['String']['input'];
	symbol: Scalars['String']['input'];
	type: Scalars['String']['input'];
};

export type MutationAddWalletAssetArgs = {
	asset_id: Scalars['String']['input'];
	decimals: Scalars['Int']['input'];
	name: Scalars['String']['input'];
	symbol: Scalars['String']['input'];
	type: Scalars['String']['input'];
};

export type MutationImportFromMnemonicArgs = {
	coins: Array<Scalars['Int']['input']>;
	is_verify: Scalars['Boolean']['input'];
	mnemonic?: InputMaybe<Scalars['String']['input']>;
	name: Scalars['String']['input'];
};

export type MutationImportJsonArgs = {
	coins: Array<Scalars['Int']['input']>;
	json: Scalars['String']['input'];
	name: Scalars['String']['input'];
	password: Scalars['String']['input'];
};

export type MutationImportPrivateKeyArgs = {
	coin: Scalars['Int']['input'];
	name: Scalars['String']['input'];
	privateKey: Scalars['String']['input'];
};

export type MutationRemoveWalletArgs = {
	id: Scalars['String']['input'];
};

export type MutationSetWalletArgs = {
	id: Scalars['String']['input'];
};

export type MutationSyncAssetBalanceArgs = {
	id: Scalars['String']['input'];
};

export type MutationSyncHistoryTransactionArgs = {
	body: BodyHistory;
	page?: InputMaybe<Scalars['Int']['input']>;
	page_size?: InputMaybe<Scalars['Int']['input']>;
};

export type MutationSyncMyInfoArgs = {
	coin?: InputMaybe<Scalars['Int']['input']>;
};

export type MutationSyncTransactionArgs = {
	asset_id: Scalars['String']['input'];
	coin: Scalars['Int']['input'];
};

export type MutationUpdateMyInfoArgs = {
	input: NewMyInfo;
};

export type MutationUpdateWalletArgs = {
	is_verify: Scalars['Boolean']['input'];
	name?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUpdateWalletAssetArgs = {
	assets: Array<UpdateWalletAsset>;
};

export type NewInfo = {
	avatar?: InputMaybe<Scalars['String']['input']>;
	bio?: InputMaybe<Scalars['String']['input']>;
	nickname?: InputMaybe<Scalars['String']['input']>;
	verified?: InputMaybe<NewVerified>;
};

export type NewMyInfo = {
	address: Scalars['String']['input'];
	coin: Scalars['Int']['input'];
	info?: InputMaybe<NewInfo>;
	totp_established?: InputMaybe<Scalars['Boolean']['input']>;
};

export type NewVerified = {
	email?: InputMaybe<Scalars['Boolean']['input']>;
	sms?: InputMaybe<Scalars['Boolean']['input']>;
};

export type NotificationData = {
	__typename?: 'NotificationData';
	content?: Maybe<Scalars['String']['output']>;
	en_content?: Maybe<Scalars['String']['output']>;
	en_title?: Maybe<Scalars['String']['output']>;
	id?: Maybe<Scalars['String']['output']>;
	image?: Maybe<Scalars['String']['output']>;
	index?: Maybe<Scalars['String']['output']>;
	isActive?: Maybe<Scalars['String']['output']>;
	mode?: Maybe<Banner_Action_Mode>;
	params?: Maybe<Scalars['String']['output']>;
	screen?: Maybe<Action_Service>;
	title?: Maybe<Scalars['String']['output']>;
	url?: Maybe<Scalars['String']['output']>;
	vi_content?: Maybe<Scalars['String']['output']>;
	vi_title?: Maybe<Scalars['String']['output']>;
};

export type NotificationInterface = {
	__typename?: 'NotificationInterface';
	created_at?: Maybe<Scalars['String']['output']>;
	data?: Maybe<NotificationData>;
	id?: Maybe<Scalars['String']['output']>;
	updated_at?: Maybe<Scalars['String']['output']>;
};

export type Query = {
	__typename?: 'Query';
	allWallets?: Maybe<Wallets>;
	currentAccount?: Maybe<CurrentAccount>;
	listTokens: Array<Maybe<Asset>>;
	myInfo?: Maybe<UserInfo>;
	queryBannerList?: Maybe<Banner>;
	wallet?: Maybe<CurrentWallet>;
	walletAsset?: Maybe<WalletAsset>;
	walletAssetTransactions?: Maybe<AssetTransactions>;
	walletAssets?: Maybe<WalletAssets>;
	walletCollectionCategories?: Maybe<WalletCollectionCategories>;
	walletCollections?: Maybe<WalletCollections>;
	walletHistorySwap?: Maybe<AssetTransactions>;
};

export type QueryListTokensArgs = {
	coin?: InputMaybe<Scalars['Int']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	search: Scalars['String']['input'];
	start?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryMyInfoArgs = {
	address: Scalars['String']['input'];
};

export type QueryWalletAssetArgs = {
	id: Scalars['String']['input'];
};

export type QueryWalletAssetTransactionsArgs = {
	asset_id: Scalars['String']['input'];
	page?: InputMaybe<Scalars['Int']['input']>;
	page_size?: InputMaybe<Scalars['Int']['input']>;
	type?: InputMaybe<Filter_Trans_Type>;
};

export type QueryWalletAssetsArgs = {
	is_active?: InputMaybe<Scalars['Boolean']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	search?: InputMaybe<Scalars['String']['input']>;
};

export enum Theme {
	Dark = 'DARK',
	Light = 'LIGHT',
	System = 'SYSTEM',
}

export enum Type_Query {
	From = 'FROM',
	To = 'TO',
}

export type UpdateWalletAsset = {
	asset_id: Scalars['String']['input'];
	is_active?: InputMaybe<Scalars['Boolean']['input']>;
	order?: InputMaybe<Scalars['Int']['input']>;
};

export type UserInfo = {
	__typename?: 'UserInfo';
	address: Scalars['String']['output'];
	info?: Maybe<Info>;
	totp_established?: Maybe<Scalars['Boolean']['output']>;
};

export type Verified = {
	__typename?: 'Verified';
	email?: Maybe<Scalars['Boolean']['output']>;
	maker_verified?: Maybe<Scalars['Boolean']['output']>;
	sms?: Maybe<Scalars['Boolean']['output']>;
};

export type Wallet = {
	__typename?: 'Wallet';
	address_ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
	color: Scalars['String']['output'];
	id: Scalars['String']['output'];
	is_main_wallet: Scalars['Boolean']['output'];
	is_verify: Scalars['Boolean']['output'];
	name: Scalars['String']['output'];
};

export type WalletAsset = {
	__typename?: 'WalletAsset';
	balance?: Maybe<Scalars['Float']['output']>;
	coin?: Maybe<Scalars['Int']['output']>;
	decimals?: Maybe<Scalars['Int']['output']>;
	id: Scalars['String']['output'];
	is_active?: Maybe<Scalars['Boolean']['output']>;
	logo?: Maybe<Scalars['String']['output']>;
	name?: Maybe<Scalars['String']['output']>;
	order?: Maybe<Scalars['Int']['output']>;
	percent_change_24h?: Maybe<Scalars['Float']['output']>;
	price?: Maybe<Scalars['Float']['output']>;
	symbol?: Maybe<Scalars['String']['output']>;
	type?: Maybe<Scalars['String']['output']>;
};

export type WalletAssets = {
	__typename?: 'WalletAssets';
	data: Array<Maybe<WalletAsset>>;
	total?: Maybe<Scalars['Int']['output']>;
};

export type WalletCollection = {
	__typename?: 'WalletCollection';
	coin?: Maybe<Scalars['Int']['output']>;
	contract_address?: Maybe<Scalars['String']['output']>;
	id?: Maybe<Scalars['String']['output']>;
	image_url?: Maybe<Scalars['String']['output']>;
	name?: Maybe<Scalars['String']['output']>;
	token_id?: Maybe<Scalars['String']['output']>;
	type?: Maybe<Scalars['String']['output']>;
};

export type WalletCollectionCategories = {
	__typename?: 'WalletCollectionCategories';
	data: Array<Maybe<WalletCollectionCategory>>;
};

export type WalletCollectionCategory = {
	__typename?: 'WalletCollectionCategory';
	description?: Maybe<Scalars['String']['output']>;
	id?: Maybe<Scalars['String']['output']>;
	image_url?: Maybe<Scalars['String']['output']>;
	name?: Maybe<Scalars['String']['output']>;
	total?: Maybe<Scalars['String']['output']>;
};

export type WalletCollections = {
	__typename?: 'WalletCollections';
	data: Array<Maybe<WalletCollection>>;
};

export type Wallets = {
	__typename?: 'Wallets';
	data: Array<Maybe<Wallet>>;
};

export type CurrentAccountQueryVariables = Exact<{ [key: string]: never }>;

export type CurrentAccountQuery = {
	__typename?: 'Query';
	query?: {
		__typename?: 'CurrentAccount';
		data?: Array<{
			__typename?: 'InfoCurrentAccount';
			address?: string | null;
			coin?: number | null;
			publicKey?: string | null;
		} | null> | null;
	} | null;
};

export type AllWalletsQueryVariables = Exact<{ [key: string]: never }>;

export type AllWalletsQuery = {
	__typename?: 'Query';
	query?: {
		__typename?: 'Wallets';
		data: Array<{
			__typename?: 'Wallet';
			id: string;
			name: string;
			is_main_wallet: boolean;
			color: string;
			is_verify: boolean;
			address_ids?: Array<string | null> | null;
		} | null>;
	} | null;
};

export type WalletQueryVariables = Exact<{ [key: string]: never }>;

export type WalletQuery = {
	__typename?: 'Query';
	query?: {
		__typename?: 'CurrentWallet';
		id: string;
		name: string;
		balance?: number | null;
		type?: Import_Type | null;
		is_verify?: boolean | null;
		color: string;
	} | null;
};

export type WalletAssetsQueryVariables = Exact<{
	is_active?: InputMaybe<Scalars['Boolean']['input']>;
	search?: InputMaybe<Scalars['String']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
}>;

export type WalletAssetsQuery = {
	__typename?: 'Query';
	query?: {
		__typename?: 'WalletAssets';
		total?: number | null;
		data: Array<{
			__typename?: 'WalletAsset';
			id: string;
			balance?: number | null;
			is_active?: boolean | null;
			logo?: string | null;
			name?: string | null;
			symbol?: string | null;
			type?: string | null;
			price?: number | null;
			coin?: number | null;
			decimals?: number | null;
			percent_change_24h?: number | null;
			order?: number | null;
		} | null>;
	} | null;
};

export type WalletAssetQueryVariables = Exact<{
	id: Scalars['String']['input'];
}>;

export type WalletAssetQuery = {
	__typename?: 'Query';
	query?: {
		__typename?: 'WalletAsset';
		id: string;
		balance?: number | null;
		is_active?: boolean | null;
		logo?: string | null;
		name?: string | null;
		symbol?: string | null;
		type?: string | null;
		price?: number | null;
		coin?: number | null;
		decimals?: number | null;
		percent_change_24h?: number | null;
		order?: number | null;
	} | null;
};

export type ImportFromMnemonicMutationVariables = Exact<{
	mnemonic: Scalars['String']['input'];
	name: Scalars['String']['input'];
	coins: Array<Scalars['Int']['input']> | Scalars['Int']['input'];
	is_verify: Scalars['Boolean']['input'];
}>;

export type ImportFromMnemonicMutation = { __typename?: 'Mutation'; mutation: boolean };
