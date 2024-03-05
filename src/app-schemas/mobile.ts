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
	Any: { input: any; output: any };
	Date: { input: any; output: any };
	JSON: { input: any; output: any };
	JSONObject: { input: any; output: any };
};

export enum Asset_Type {
	Bep20 = 'BEP20',
	Coin = 'COIN',
	Erc20 = 'ERC20',
	Polygon = 'POLYGON',
}

export type AcceptRequestData = {
	__typename?: 'AcceptRequestData';
	hash_id?: Maybe<Scalars['String']['output']>;
	request_id?: Maybe<Scalars['Int']['output']>;
};

export type AcceptRequestRes = {
	__typename?: 'AcceptRequestRes';
	data?: Maybe<AcceptRequestData>;
	status?: Maybe<Scalars['Int']['output']>;
};

export type AddTokenRes = {
	__typename?: 'AddTokenRes';
	data?: Maybe<Array<Maybe<TokenUser>>>;
	status?: Maybe<Scalars['Int']['output']>;
};

export type Application = {
	__typename?: 'Application';
	coin?: Maybe<Scalars['Int']['output']>;
	description?: Maybe<Scalars['String']['output']>;
	id?: Maybe<Scalars['String']['output']>;
	is_verify?: Maybe<Scalars['Boolean']['output']>;
	logo?: Maybe<Scalars['String']['output']>;
	name?: Maybe<Scalars['String']['output']>;
	url?: Maybe<Scalars['String']['output']>;
};

export type Applications = {
	__typename?: 'Applications';
	data?: Maybe<Array<Maybe<Application>>>;
	total?: Maybe<Scalars['String']['output']>;
};

export type Asset = {
	__typename?: 'Asset';
	decimals?: Maybe<Scalars['Int']['output']>;
	id: Scalars['String']['output'];
	logo?: Maybe<Scalars['String']['output']>;
	name: Scalars['String']['output'];
	symbol?: Maybe<Scalars['String']['output']>;
	type?: Maybe<Asset_Type>;
};

export type AssetPrice = {
	__typename?: 'AssetPrice';
	id: Scalars['String']['output'];
	percent_change_24h?: Maybe<Scalars['Float']['output']>;
	price?: Maybe<Scalars['Float']['output']>;
	source?: Maybe<Scalars['String']['output']>;
};

export type AssetPrices = {
	__typename?: 'AssetPrices';
	data?: Maybe<Array<Maybe<AssetPrice>>>;
};

export type Assets = {
	__typename?: 'Assets';
	data: Array<Maybe<Asset>>;
	total: Scalars['Int']['output'];
};

export type BlockChatRes = {
	__typename?: 'BlockChatRes';
	status?: Maybe<Scalars['Int']['output']>;
};

export type Body = {
	chain_id?: InputMaybe<Scalars['Int']['input']>;
	token?: InputMaybe<Scalars['String']['input']>;
	tx_hash?: InputMaybe<Scalars['String']['input']>;
};

export type CampaignAvailableByAddress = {
	__typename?: 'CampaignAvailableByAddress';
	count?: Maybe<Scalars['Int']['output']>;
	rows?: Maybe<Array<Maybe<CampaignDetail>>>;
};

export type CampaignBlacklist = {
	__typename?: 'CampaignBlacklist';
	address?: Maybe<Scalars['String']['output']>;
	created_at?: Maybe<Scalars['Date']['output']>;
	reason?: Maybe<Scalars['String']['output']>;
};

export type CampaignDetail = {
	__typename?: 'CampaignDetail';
	blacklists?: Maybe<Array<Maybe<CampaignBlacklist>>>;
	code?: Maybe<Scalars['String']['output']>;
	conditions?: Maybe<Scalars['JSONObject']['output']>;
	detail_uri?: Maybe<Scalars['String']['output']>;
	end_at?: Maybe<Scalars['Int']['output']>;
	id: Scalars['Int']['output'];
	language?: Maybe<Scalars['JSONObject']['output']>;
	rewards?: Maybe<Array<Maybe<CampaignReward>>>;
	sort?: Maybe<Scalars['Int']['output']>;
	start_at?: Maybe<Scalars['Int']['output']>;
	type?: Maybe<Scalars['String']['output']>;
};

export type CampaignReward = {
	__typename?: 'CampaignReward';
	language?: Maybe<Scalars['JSONObject']['output']>;
	quantity?: Maybe<Scalars['Float']['output']>;
	status?: Maybe<Scalars['Int']['output']>;
	type?: Maybe<Scalars['String']['output']>;
	unit?: Maybe<Scalars['String']['output']>;
};

export type CampaignRewardHistory = {
	__typename?: 'CampaignRewardHistory';
	address?: Maybe<Scalars['String']['output']>;
	created_at?: Maybe<Scalars['Date']['output']>;
	payload?: Maybe<PayloadRewardHistory>;
	status?: Maybe<Scalars['Int']['output']>;
};

export type CampaignRewardHistoryPaginate = {
	__typename?: 'CampaignRewardHistoryPaginate';
	data?: Maybe<Array<Maybe<CampaignRewardHistory>>>;
	total?: Maybe<Scalars['Int']['output']>;
};

export type Categories = {
	__typename?: 'Categories';
	data?: Maybe<Array<Maybe<Category>>>;
	total?: Maybe<Scalars['String']['output']>;
};

export type Category = {
	__typename?: 'Category';
	applications?: Maybe<Array<Maybe<Application>>>;
	id?: Maybe<Scalars['String']['output']>;
	name?: Maybe<Scalars['String']['output']>;
};

export type ChainExplorer = {
	__typename?: 'ChainExplorer';
	account_path?: Maybe<Scalars['String']['output']>;
	tx_path?: Maybe<Scalars['String']['output']>;
	url?: Maybe<Scalars['String']['output']>;
};

export type Channel = {
	__typename?: 'Channel';
	block_by?: Maybe<Scalars['String']['output']>;
	channel_hash?: Maybe<Scalars['String']['output']>;
	channel_message?: Maybe<Array<Maybe<Message>>>;
	channel_participant?: Maybe<Array<Maybe<ChannelParticipant>>>;
	created_at?: Maybe<Scalars['String']['output']>;
	id?: Maybe<Scalars['Int']['output']>;
	is_encrypt?: Maybe<Scalars['Boolean']['output']>;
	name?: Maybe<Scalars['String']['output']>;
	nickname?: Maybe<Scalars['JSONObject']['output']>;
	tx_id?: Maybe<Scalars['String']['output']>;
	user_read?: Maybe<Scalars['Boolean']['output']>;
};

export type ChannelMessageRes = {
	__typename?: 'ChannelMessageRes';
	channel_participant?: Maybe<Array<Maybe<ChannelParticipant>>>;
	count?: Maybe<Scalars['Int']['output']>;
	rows?: Maybe<Array<Maybe<Message>>>;
};

export type ChannelParticipant = {
	__typename?: 'ChannelParticipant';
	is_encrypt?: Maybe<Scalars['Boolean']['output']>;
	nickname?: Maybe<Scalars['String']['output']>;
	role?: Maybe<Scalars['String']['output']>;
	user_address?: Maybe<Scalars['String']['output']>;
};

export type ChatMessage = {
	__typename?: 'ChatMessage';
	channel_hash?: Maybe<Scalars['String']['output']>;
	created_at?: Maybe<Scalars['String']['output']>;
	message_hash?: Maybe<Scalars['String']['output']>;
	sender?: Maybe<Scalars['String']['output']>;
};

export type ChatUserReadRes = {
	__typename?: 'ChatUserReadRes';
	status?: Maybe<Scalars['Int']['output']>;
};

export type CheckRefCodeRes = {
	__typename?: 'CheckRefCodeRes';
	status?: Maybe<Scalars['Int']['output']>;
};

export type Collection = {
	__typename?: 'Collection';
	category?: Maybe<Scalars['String']['output']>;
	coin?: Maybe<Scalars['Int']['output']>;
	collection_id?: Maybe<Scalars['String']['output']>;
	contract_address?: Maybe<Scalars['String']['output']>;
	description?: Maybe<Scalars['String']['output']>;
	external_link?: Maybe<Scalars['String']['output']>;
	id?: Maybe<Scalars['String']['output']>;
	image_url?: Maybe<Scalars['String']['output']>;
	name?: Maybe<Scalars['String']['output']>;
	nft_version?: Maybe<Scalars['String']['output']>;
	original_source_url?: Maybe<CollectionImageSource>;
	preview_image_url?: Maybe<CollectionImageSource>;
	provider_link?: Maybe<Scalars['String']['output']>;
	token_id?: Maybe<Scalars['String']['output']>;
	type?: Maybe<Scalars['String']['output']>;
};

export type CollectionCategories = {
	__typename?: 'CollectionCategories';
	data: Array<Maybe<CollectionCategory>>;
	total: Scalars['Int']['output'];
};

export type CollectionCategory = {
	__typename?: 'CollectionCategory';
	address?: Maybe<Scalars['String']['output']>;
	coin?: Maybe<Scalars['Int']['output']>;
	description?: Maybe<Scalars['String']['output']>;
	external_link?: Maybe<Scalars['String']['output']>;
	id?: Maybe<Scalars['String']['output']>;
	image_url?: Maybe<Scalars['String']['output']>;
	name?: Maybe<Scalars['String']['output']>;
	original_source_url?: Maybe<CollectionImageSource>;
	preview_image_url?: Maybe<CollectionImageSource>;
	total?: Maybe<Scalars['Int']['output']>;
};

export type CollectionImageSource = {
	__typename?: 'CollectionImageSource';
	url?: Maybe<Scalars['String']['output']>;
};

export type Collections = {
	__typename?: 'Collections';
	data: Array<Maybe<Collection>>;
	total?: Maybe<Scalars['Int']['output']>;
};

export type CreateChannelRes = {
	__typename?: 'CreateChannelRes';
	status?: Maybe<Scalars['Int']['output']>;
};

export type CreateChannelV2Res = {
	__typename?: 'CreateChannelV2Res';
	status?: Maybe<Scalars['Int']['output']>;
};

export type DataInput = {
	app_url: Scalars['String']['input'];
	event_name: Event_Tracking_App;
	user_address: Scalars['String']['input'];
};

export type Device = {
	__typename?: 'Device';
	auth_token?: Maybe<Scalars['String']['output']>;
	device_id?: Maybe<Scalars['String']['output']>;
	id?: Maybe<Scalars['String']['output']>;
};

export enum Event_Tracking_App {
	ConnectWallet = 'CONNECT_WALLET',
}

export type EncryptMessageRes = {
	__typename?: 'EncryptMessageRes';
	status?: Maybe<Scalars['Int']['output']>;
};

export type FindUserRes = {
	__typename?: 'FindUserRes';
	channel?: Maybe<Array<Maybe<Channel>>>;
	public_key?: Maybe<Scalars['String']['output']>;
	user_address?: Maybe<Scalars['String']['output']>;
	username?: Maybe<Scalars['String']['output']>;
};

export type GetChatMessageRes = {
	__typename?: 'GetChatMessageRes';
	count?: Maybe<Scalars['Int']['output']>;
	rows?: Maybe<Array<Maybe<ChatMessage>>>;
};

export type GetListChannelV2Res = {
	__typename?: 'GetListChannelV2Res';
	count?: Maybe<Scalars['Int']['output']>;
	rows?: Maybe<Array<Maybe<UserConnect>>>;
};

export type InputAddToken = {
	contract_address: Scalars['String']['input'];
	decimals: Scalars['Int']['input'];
	logo?: InputMaybe<Scalars['String']['input']>;
	name: Scalars['String']['input'];
	network_id: Scalars['Int']['input'];
	ticker: Scalars['String']['input'];
};

export type InputAsset = {
	address: Scalars['String']['input'];
	coin: Scalars['Int']['input'];
};

export type InputCollectionCategory = {
	address?: InputMaybe<Scalars['String']['input']>;
	coin?: InputMaybe<Scalars['Int']['input']>;
};

export type InputQueryTokenList = {
	contract_address?: InputMaybe<Scalars['String']['input']>;
	network_id?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
	page?: InputMaybe<Scalars['Int']['input']>;
	page_size?: InputMaybe<Scalars['Int']['input']>;
	ticker?: InputMaybe<Scalars['String']['input']>;
	timestamp?: InputMaybe<Scalars['Int']['input']>;
	user_address: Scalars['String']['input'];
};

export type LeaderBoard = {
	__typename?: 'LeaderBoard';
	address?: Maybe<Scalars['String']['output']>;
	rank?: Maybe<Scalars['Int']['output']>;
	total_play?: Maybe<Scalars['Int']['output']>;
	total_score?: Maybe<Scalars['Int']['output']>;
	updated_at?: Maybe<Scalars['String']['output']>;
	week?: Maybe<Scalars['Int']['output']>;
};

export type ListChannelRes = {
	__typename?: 'ListChannelRes';
	count?: Maybe<Scalars['Int']['output']>;
	rows?: Maybe<Array<Maybe<Channel>>>;
};

export type Message = {
	__typename?: 'Message';
	created_at?: Maybe<Scalars['String']['output']>;
	id?: Maybe<Scalars['Int']['output']>;
	message_recipient?: Maybe<Scalars['String']['output']>;
	message_sender?: Maybe<Scalars['String']['output']>;
	sender?: Maybe<Scalars['String']['output']>;
	type?: Maybe<Scalars['Int']['output']>;
};

export type MobileCheckingCodeRes = {
	__typename?: 'MobileCheckingCodeRes';
	status?: Maybe<Scalars['Int']['output']>;
};

export type Mutation = {
	__typename?: 'Mutation';
	_?: Maybe<Scalars['String']['output']>;
	acceptRequestConnectChat?: Maybe<AcceptRequestRes>;
	addToken?: Maybe<AddTokenRes>;
	blockChat?: Maybe<BlockChatRes>;
	changeNickName?: Maybe<ChangeNickNameRes>;
	chatUserRead?: Maybe<ChatUserReadRes>;
	checkRefCode?: Maybe<CheckRefCodeRes>;
	createChannel?: Maybe<CreateChannelRes>;
	createChannelV2?: Maybe<CreateChannelV2Res>;
	encryptMessage?: Maybe<EncryptMessageRes>;
	markReadAll?: Maybe<Scalars['Int']['output']>;
	markReadById?: Maybe<Scalars['Int']['output']>;
	mobileChecking?: Maybe<MobileCheckingCodeRes>;
	pushMessageChat?: Maybe<PushMessageChatRes>;
	pushScore?: Maybe<PushScoreRes>;
	pushScore_v2?: Maybe<PushScoreRes>;
	registerDevice?: Maybe<Device>;
	requestConnectChat?: Maybe<RequestConnectChatRes>;
	sendMessage?: Maybe<SendMessageRes>;
	setUserRefAddress?: Maybe<UserRefAddress>;
};

export type MutationAcceptRequestConnectChatArgs = {
	id_request: Scalars['Int']['input'];
	public_key?: InputMaybe<Scalars['String']['input']>;
	status: Status_Request;
};

export type MutationAddTokenArgs = {
	token?: InputMaybe<Array<InputAddToken>>;
};

export type MutationBlockChatArgs = {
	tx_id: Scalars['String']['input'];
};

export type MutationChangeNickNameArgs = {
	address_change: Scalars['String']['input'];
	nickname: Scalars['String']['input'];
	tx_id: Scalars['String']['input'];
};

export type MutationChatUserReadArgs = {
	channel_id: Scalars['Int']['input'];
};

export type MutationCheckRefCodeArgs = {
	code: Scalars['String']['input'];
};

export type MutationCreateChannelArgs = {
	channel_id: Scalars['Int']['input'];
	nickname?: InputMaybe<Scalars['String']['input']>;
	recipient: Scalars['String']['input'];
	tx_id: Scalars['String']['input'];
};

export type MutationCreateChannelV2Args = {
	connect_id?: InputMaybe<Scalars['Int']['input']>;
};

export type MutationEncryptMessageArgs = {
	channel_id: Scalars['Int']['input'];
};

export type MutationMarkReadByIdArgs = {
	id: Scalars['Int']['input'];
};

export type MutationMobileCheckingArgs = {
	input: DataInput;
};

export type MutationPushMessageChatArgs = {
	message?: InputMaybe<Scalars['String']['input']>;
};

export type MutationPushScoreArgs = {
	game_id: Scalars['Int']['input'];
	score: Scalars['Int']['input'];
	signature: Scalars['String']['input'];
	time: Scalars['Int']['input'];
};

export type MutationPushScore_V2Args = {
	game_id: Scalars['Int']['input'];
	log_score_id: Scalars['Int']['input'];
	score: Scalars['Int']['input'];
};

export type MutationRegisterDeviceArgs = {
	device_id: Scalars['String']['input'];
	device_name: Scalars['String']['input'];
	device_token: Scalars['String']['input'];
};

export type MutationRequestConnectChatArgs = {
	recipient: Scalars['String']['input'];
};

export type MutationSendMessageArgs = {
	message_encrypt_recipient: Scalars['String']['input'];
	message_encrypt_sender: Scalars['String']['input'];
	timestamp?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationSetUserRefAddressArgs = {
	code: Scalars['String']['input'];
};

export type Notification = {
	__typename?: 'Notification';
	channel?: Maybe<Scalars['String']['output']>;
	content?: Maybe<Scalars['JSONObject']['output']>;
	created_at?: Maybe<Scalars['Date']['output']>;
	data?: Maybe<Scalars['JSONObject']['output']>;
	id?: Maybe<Scalars['Int']['output']>;
	is_read?: Maybe<Scalars['Int']['output']>;
};

export type Notifications = {
	__typename?: 'Notifications';
	data?: Maybe<Array<Maybe<Notification>>>;
	total?: Maybe<Scalars['Int']['output']>;
};

export enum Period_Type {
	All = 'ALL',
	Day = 'DAY',
	Hour = 'HOUR',
	Month = 'MONTH',
	Week = 'WEEK',
	Year = 'YEAR',
}

export type PayloadRewardHistory = {
	__typename?: 'PayloadRewardHistory';
	reward?: Maybe<Scalars['String']['output']>;
	service_name?: Maybe<Scalars['String']['output']>;
	timestamp?: Maybe<Scalars['Int']['output']>;
	transaction_id?: Maybe<Scalars['String']['output']>;
	type?: Maybe<Scalars['String']['output']>;
};

export type ProduceKafkaSyncOnchainHistoriesRes = {
	__typename?: 'ProduceKafkaSyncOnchainHistoriesRes';
	status?: Maybe<Scalars['Int']['output']>;
};

export type PublicKeyRes = {
	__typename?: 'PublicKeyRes';
	caller_public_key?: Maybe<Scalars['String']['output']>;
	finder_public_key?: Maybe<Scalars['String']['output']>;
};

export type PushMessageChatRes = {
	__typename?: 'PushMessageChatRes';
	data?: Maybe<Scalars['JSONObject']['output']>;
	status?: Maybe<Scalars['Int']['output']>;
};

export type Query = {
	__typename?: 'Query';
	GetOnchainHistories?: Maybe<DataRes>;
	GetOnchainHistoriesAdmin?: Maybe<DataAdminRes>;
	ProduceKafkaSyncOnchainHistories?: Maybe<ProduceKafkaSyncOnchainHistoriesRes>;
	_?: Maybe<Scalars['String']['output']>;
	applicationCategories?: Maybe<Categories>;
	applications?: Maybe<Applications>;
	assetByAddress: Assets;
	assetPrices?: Maybe<AssetPrices>;
	assets?: Maybe<Assets>;
	campaignDetail?: Maybe<CampaignDetail>;
	collectionCategories?: Maybe<CollectionCategories>;
	collections?: Maybe<Collections>;
	detailChannel?: Maybe<Channel>;
	detailRequestChat?: Maybe<RequestConnect>;
	findUser?: Maybe<FindUserRes>;
	gainerList?: Maybe<Tokens>;
	getChannelMessage?: Maybe<ChannelMessageRes>;
	getChatMessage?: Maybe<GetChatMessageRes>;
	getDetailChat?: Maybe<UserConnect>;
	getGameTurn?: Maybe<GetGameTurnRes>;
	getLeaderBoard?: Maybe<GetLeaderBoardRes>;
	getListChannel?: Maybe<ListChannelRes>;
	getListChat?: Maybe<GetListChannelV2Res>;
	getPublicKey?: Maybe<PublicKeyRes>;
	getRefAddress?: Maybe<RefAddress>;
	getRefCodeByAddress?: Maybe<RefCodeByAddress>;
	getSaveList?: Maybe<SaveListRes>;
	listCampaignAvailableByAddress?: Maybe<CampaignAvailableByAddress>;
	listCampaignRewardHistoryByAddress?: Maybe<CampaignRewardHistoryPaginate>;
	listChatRequest?: Maybe<ListChatRequestRes>;
	loserList?: Maybe<Tokens>;
	notificationInfo?: Maybe<Notification>;
	notifications?: Maybe<Notifications>;
	rates?: Maybe<Rates>;
	refStatistic?: Maybe<RefStatistic>;
	tokenCharts?: Maybe<TokenCharts>;
	tokenExtraData: TokenExtraData;
	tokenInfo?: Maybe<TokenInfo>;
	tokenList?: Maybe<TokenListRes>;
	tokens?: Maybe<Tokens>;
	tokensByIds?: Maybe<Tokens>;
	transactions?: Maybe<Transactions>;
	transactions_v2?: Maybe<Transactions_V2>;
	trendingList?: Maybe<Tokens>;
};

export type QueryGetOnchainHistoriesArgs = {
	body?: InputMaybe<Body>;
	page: Scalars['Int']['input'];
	page_size: Scalars['Int']['input'];
};

export type QueryGetOnchainHistoriesAdminArgs = {
	body?: InputMaybe<Body>;
	page: Scalars['Int']['input'];
	page_size: Scalars['Int']['input'];
};

export type QueryApplicationsArgs = {
	category_id?: InputMaybe<Scalars['String']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	text?: InputMaybe<Scalars['String']['input']>;
};

export type QueryAssetByAddressArgs = {
	assets: Array<InputAsset>;
};

export type QueryAssetPricesArgs = {
	asset_ids: Array<InputMaybe<Scalars['String']['input']>>;
};

export type QueryAssetsArgs = {
	coin?: InputMaybe<Scalars['Int']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	search: Scalars['String']['input'];
	start?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryCampaignDetailArgs = {
	id: Scalars['Int']['input'];
};

export type QueryCollectionCategoriesArgs = {
	coins: Array<InputCollectionCategory>;
};

export type QueryCollectionsArgs = {
	address: Scalars['String']['input'];
	coin: Scalars['Int']['input'];
	id: Scalars['String']['input'];
};

export type QueryDetailChannelArgs = {
	channel_id?: InputMaybe<Scalars['Int']['input']>;
	tx_id?: InputMaybe<Scalars['String']['input']>;
};

export type QueryDetailRequestChatArgs = {
	id_request?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryFindUserArgs = {
	address: Scalars['String']['input'];
};

export type QueryGetChannelMessageArgs = {
	last_seen?: InputMaybe<Scalars['String']['input']>;
	page?: InputMaybe<Scalars['Int']['input']>;
	page_size?: InputMaybe<Scalars['Int']['input']>;
	tx_id: Scalars['String']['input'];
};

export type QueryGetChatMessageArgs = {
	channel_hash?: InputMaybe<Scalars['String']['input']>;
	page?: InputMaybe<Scalars['Int']['input']>;
	page_size?: InputMaybe<Scalars['Int']['input']>;
	timestamp?: InputMaybe<Scalars['String']['input']>;
};

export type QueryGetDetailChatArgs = {
	id?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryGetGameTurnArgs = {
	game_id: Scalars['Int']['input'];
};

export type QueryGetLeaderBoardArgs = {
	address?: InputMaybe<Scalars['String']['input']>;
	game_id: Scalars['Int']['input'];
	page: Scalars['Int']['input'];
	page_size: Scalars['Int']['input'];
	week: Scalars['Int']['input'];
};

export type QueryGetListChannelArgs = {
	address?: InputMaybe<Scalars['String']['input']>;
	page?: InputMaybe<Scalars['Int']['input']>;
	page_size?: InputMaybe<Scalars['Int']['input']>;
	type?: InputMaybe<Type_Chat>;
};

export type QueryGetListChatArgs = {
	address_filter?: InputMaybe<Scalars['String']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
	page?: InputMaybe<Scalars['Int']['input']>;
	page_size?: InputMaybe<Scalars['Int']['input']>;
	state?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type QueryGetPublicKeyArgs = {
	address: Scalars['String']['input'];
};

export type QueryListCampaignRewardHistoryByAddressArgs = {
	page?: InputMaybe<Scalars['Int']['input']>;
	page_size?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryListChatRequestArgs = {
	address_filter?: InputMaybe<Scalars['String']['input']>;
	page?: InputMaybe<Scalars['Int']['input']>;
	page_size?: InputMaybe<Scalars['Int']['input']>;
	type: Status_List_Request;
};

export type QueryNotificationInfoArgs = {
	id: Scalars['Int']['input'];
};

export type QueryNotificationsArgs = {
	page?: InputMaybe<Scalars['Int']['input']>;
	page_size?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryTokenChartsArgs = {
	id: Scalars['String']['input'];
	period: Period_Type;
};

export type QueryTokenExtraDataArgs = {
	contract_address?: InputMaybe<Scalars['String']['input']>;
};

export type QueryTokenInfoArgs = {
	id: Scalars['String']['input'];
};

export type QueryTokenListArgs = {
	input?: InputMaybe<InputQueryTokenList>;
};

export type QueryTokensArgs = {
	limit?: InputMaybe<Scalars['Int']['input']>;
	search?: InputMaybe<Scalars['String']['input']>;
	sort?: InputMaybe<Token_Sort>;
	sort_type?: InputMaybe<Token_Sort_Type>;
	start?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryTokensByIdsArgs = {
	ids: Array<InputMaybe<Scalars['String']['input']>>;
};

export type QueryTransactionsArgs = {
	address: Scalars['String']['input'];
	asset_id: Scalars['String']['input'];
	since_created_at?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryTransactions_V2Args = {
	address: Scalars['String']['input'];
	contract?: InputMaybe<Scalars['String']['input']>;
	page?: InputMaybe<Scalars['Int']['input']>;
	page_size?: InputMaybe<Scalars['Int']['input']>;
};

export type Rate = {
	__typename?: 'Rate';
	price: Scalars['Float']['output'];
	symbol: Scalars['String']['output'];
};

export type Rates = {
	__typename?: 'Rates';
	data: Array<Maybe<Rate>>;
};

export type RefCodeByAddress = {
	__typename?: 'RefCodeByAddress';
	address: Scalars['String']['output'];
	ref_code: Scalars['String']['output'];
};

export type RefReward = {
	__typename?: 'RefReward';
	amount: Scalars['Float']['output'];
	unit: Scalars['String']['output'];
};

export type RefStatistic = {
	__typename?: 'RefStatistic';
	count: Scalars['Int']['output'];
	countSuccess: Scalars['Int']['output'];
	reward?: Maybe<RefReward>;
};

export type RequestConnect = {
	__typename?: 'RequestConnect';
	channel_id?: Maybe<Scalars['String']['output']>;
	created_at?: Maybe<Scalars['String']['output']>;
	friend_address?: Maybe<Scalars['String']['output']>;
	hash_id?: Maybe<Scalars['String']['output']>;
	id?: Maybe<Scalars['Int']['output']>;
	status?: Maybe<Scalars['Int']['output']>;
	user_address?: Maybe<Scalars['String']['output']>;
};

export type RequestConnectChatRes = {
	__typename?: 'RequestConnectChatRes';
	data?: Maybe<RequestConnect>;
	status?: Maybe<Scalars['Int']['output']>;
};

export type ResponseStatus = {
	__typename?: 'ResponseStatus';
	status: Scalars['Boolean']['output'];
};

export enum Status_List_Request {
	Received = 'RECEIVED',
	Send = 'SEND',
}

export enum Status_Request {
	Accept = 'ACCEPT',
	NotAccept = 'NOT_ACCEPT',
}

export type SaveListRes = {
	__typename?: 'SaveListRes';
	address?: Maybe<Scalars['String']['output']>;
	created_at?: Maybe<Scalars['String']['output']>;
	device_id?: Maybe<Scalars['String']['output']>;
	save_list?: Maybe<Scalars['String']['output']>;
	sender?: Maybe<Scalars['String']['output']>;
	updated_at?: Maybe<Scalars['String']['output']>;
};

export type SendMessageRes = {
	__typename?: 'SendMessageRes';
	status?: Maybe<Scalars['Int']['output']>;
};

export type Subscription = {
	__typename?: 'Subscription';
	_?: Maybe<Scalars['String']['output']>;
	price_changed?: Maybe<Token>;
};

export type SubscriptionPrice_ChangedArgs = {
	ids: Array<InputMaybe<Scalars['String']['input']>>;
};

export enum Token_Sort {
	PercentChange_24H = 'PERCENT_CHANGE_24H',
}

export enum Token_Sort_Type {
	Asc = 'ASC',
	Desc = 'DESC',
}

export enum Type_Chat {
	BlackList = 'BLACK_LIST',
	Friend = 'FRIEND',
}

export enum Type_Query {
	From = 'FROM',
	To = 'TO',
}

export type Token = {
	__typename?: 'Token';
	chart_7d?: Maybe<Scalars['String']['output']>;
	id: Scalars['String']['output'];
	logo: Scalars['String']['output'];
	name?: Maybe<Scalars['String']['output']>;
	percent_change_24h?: Maybe<Scalars['Float']['output']>;
	price?: Maybe<Scalars['Float']['output']>;
	symbol?: Maybe<Scalars['String']['output']>;
};

export type TokenBasic = {
	__typename?: 'TokenBasic';
	id?: Maybe<Scalars['String']['output']>;
	logo?: Maybe<Scalars['String']['output']>;
	name?: Maybe<Scalars['String']['output']>;
	symbol?: Maybe<Scalars['String']['output']>;
};

export type TokenChart = {
	__typename?: 'TokenChart';
	date?: Maybe<Scalars['String']['output']>;
	price?: Maybe<Scalars['Float']['output']>;
};

export type TokenCharts = {
	__typename?: 'TokenCharts';
	data?: Maybe<Array<Maybe<TokenChart>>>;
	last_updated?: Maybe<Scalars['Date']['output']>;
};

export type TokenExtraData = {
	__typename?: 'TokenExtraData';
	contract_address: Scalars['String']['output'];
	logo?: Maybe<Scalars['String']['output']>;
};

export type TokenInfo = {
	__typename?: 'TokenInfo';
	assets: Array<Maybe<Asset>>;
	circulating_supply?: Maybe<Scalars['Float']['output']>;
	description?: Maybe<Scalars['String']['output']>;
	id?: Maybe<Scalars['String']['output']>;
	logo?: Maybe<Scalars['String']['output']>;
	market_cap?: Maybe<Scalars['Float']['output']>;
	max_supply?: Maybe<Scalars['Float']['output']>;
	name?: Maybe<Scalars['String']['output']>;
	percent_change_24h?: Maybe<Scalars['Float']['output']>;
	price?: Maybe<Scalars['Float']['output']>;
	rank?: Maybe<Scalars['Float']['output']>;
	symbol?: Maybe<Scalars['String']['output']>;
	total_supply?: Maybe<Scalars['Float']['output']>;
	volume_24h?: Maybe<Scalars['Float']['output']>;
};

export type TokenListRes = {
	__typename?: 'TokenListRes';
	data?: Maybe<Array<Maybe<TokenUser>>>;
	total?: Maybe<Scalars['Int']['output']>;
};

export type TokenUser = {
	__typename?: 'TokenUser';
	address?: Maybe<Scalars['String']['output']>;
	contract_address?: Maybe<Scalars['String']['output']>;
	created_at?: Maybe<Scalars['String']['output']>;
	decimals?: Maybe<Scalars['Int']['output']>;
	id?: Maybe<Scalars['Int']['output']>;
	logo?: Maybe<Scalars['String']['output']>;
	name?: Maybe<Scalars['String']['output']>;
	network_id?: Maybe<Scalars['Int']['output']>;
	status?: Maybe<Scalars['Int']['output']>;
	ticker?: Maybe<Scalars['String']['output']>;
	updated_at?: Maybe<Scalars['String']['output']>;
};

export type Token_Info = {
	__typename?: 'Token_Info';
	decimals?: Maybe<Scalars['Int']['output']>;
	symbol?: Maybe<Scalars['String']['output']>;
	token_name?: Maybe<Scalars['String']['output']>;
};

export type Tokens = {
	__typename?: 'Tokens';
	data: Array<Maybe<Token>>;
	total: Scalars['Int']['output'];
};

export type Transaction = {
	__typename?: 'Transaction';
	block?: Maybe<Scalars['Int']['output']>;
	block_created_at?: Maybe<Scalars['Int']['output']>;
	created_at?: Maybe<Scalars['Int']['output']>;
	direction?: Maybe<Scalars['String']['output']>;
	fee?: Maybe<TransactionFee>;
	from?: Maybe<Scalars['String']['output']>;
	id?: Maybe<Scalars['String']['output']>;
	metadata?: Maybe<TransactionMetaData>;
	sequence?: Maybe<Scalars['Int']['output']>;
	status?: Maybe<Scalars['String']['output']>;
	to?: Maybe<Scalars['String']['output']>;
	type?: Maybe<Scalars['String']['output']>;
};

export type TransactionFee = {
	__typename?: 'TransactionFee';
	asset?: Maybe<Scalars['String']['output']>;
	value?: Maybe<Scalars['String']['output']>;
};

export type TransactionFee_V2 = {
	__typename?: 'TransactionFee_v2';
	asset?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
	value?: Maybe<Scalars['String']['output']>;
};

export type TransactionMetaData = {
	__typename?: 'TransactionMetaData';
	asset?: Maybe<Scalars['String']['output']>;
	from?: Maybe<TransactionMetaDataFromTo>;
	input?: Maybe<Scalars['String']['output']>;
	to?: Maybe<TransactionMetaDataFromTo>;
	value?: Maybe<Scalars['String']['output']>;
};

export type TransactionMetaDataFromTo = {
	__typename?: 'TransactionMetaDataFromTo';
	asset?: Maybe<Scalars['String']['output']>;
	input?: Maybe<Scalars['String']['output']>;
	value?: Maybe<Scalars['String']['output']>;
};

export type TransactionMetaData_V2 = {
	__typename?: 'TransactionMetaData_v2';
	asset?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
	input?: Maybe<Scalars['String']['output']>;
	value?: Maybe<Scalars['String']['output']>;
};

export type Transaction_V2 = {
	__typename?: 'Transaction_v2';
	block?: Maybe<Scalars['Int']['output']>;
	block_created_at?: Maybe<Scalars['Int']['output']>;
	created_at?: Maybe<Scalars['Int']['output']>;
	direction?: Maybe<Scalars['String']['output']>;
	fee?: Maybe<TransactionFee_V2>;
	from?: Maybe<Scalars['String']['output']>;
	id?: Maybe<Scalars['String']['output']>;
	metadata?: Maybe<TransactionMetaData_V2>;
	sequence?: Maybe<Scalars['Int']['output']>;
	status?: Maybe<Scalars['String']['output']>;
	to?: Maybe<Scalars['String']['output']>;
	type?: Maybe<Scalars['String']['output']>;
};

export type Transactions = {
	__typename?: 'Transactions';
	data: Array<Maybe<Transaction>>;
	total?: Maybe<Scalars['Int']['output']>;
};

export type Transactions_V2 = {
	__typename?: 'Transactions_v2';
	data: Array<Maybe<Transaction_V2>>;
	total?: Maybe<Scalars['Int']['output']>;
};

export type UpdatePublicKeyRes = {
	__typename?: 'UpdatePublicKeyRes';
	status?: Maybe<Scalars['Int']['output']>;
};

export type UserConnect = {
	__typename?: 'UserConnect';
	created_at?: Maybe<Scalars['String']['output']>;
	created_by?: Maybe<Scalars['String']['output']>;
	hash?: Maybe<Scalars['String']['output']>;
	id?: Maybe<Scalars['Int']['output']>;
	name?: Maybe<Scalars['String']['output']>;
	public_key_partner?: Maybe<Scalars['String']['output']>;
	public_key_user?: Maybe<Scalars['String']['output']>;
	state?: Maybe<Scalars['Int']['output']>;
	status?: Maybe<Scalars['Int']['output']>;
	updated_at?: Maybe<Scalars['String']['output']>;
};

export type UserRefAddress = {
	__typename?: 'UserRefAddress';
	status: Scalars['Boolean']['output'];
};

export type UserScore = {
	__typename?: 'UserScore';
	address?: Maybe<Scalars['String']['output']>;
	rank?: Maybe<Scalars['Int']['output']>;
	total_play?: Maybe<Scalars['Int']['output']>;
	total_score?: Maybe<Scalars['Int']['output']>;
	updated_at?: Maybe<Scalars['String']['output']>;
};

export type ChangeNickNameRes = {
	__typename?: 'changeNickNameRes';
	status?: Maybe<Scalars['Int']['output']>;
};

export type DataAdminRes = {
	__typename?: 'dataAdminRes';
	data?: Maybe<Array<Maybe<OnchainHistoryAdminRes>>>;
	status?: Maybe<Scalars['Int']['output']>;
};

export type DataRes = {
	__typename?: 'dataRes';
	data?: Maybe<Array<Maybe<OnchainHistoryRes>>>;
	status?: Maybe<Scalars['Int']['output']>;
};

export type GetGameTurnRes = {
	__typename?: 'getGameTurnRes';
	address?: Maybe<Scalars['String']['output']>;
	rank?: Maybe<Scalars['Int']['output']>;
	total_score?: Maybe<Scalars['Int']['output']>;
	turn?: Maybe<Scalars['Int']['output']>;
};

export type GetLeaderBoardRes = {
	__typename?: 'getLeaderBoardRes';
	count?: Maybe<Scalars['Int']['output']>;
	rows?: Maybe<Array<Maybe<LeaderBoard>>>;
	user_score?: Maybe<UserScore>;
};

export type ListChatRequestRes = {
	__typename?: 'listChatRequestRes';
	count?: Maybe<Scalars['Int']['output']>;
	rows?: Maybe<Array<Maybe<RequestConnect>>>;
};

export type OnchainHistoryAdminRes = {
	__typename?: 'onchainHistoryAdminRes';
	amount_hex?: Maybe<Scalars['String']['output']>;
	block_number?: Maybe<Scalars['Int']['output']>;
	chain_id?: Maybe<Scalars['Int']['output']>;
	created_at?: Maybe<Scalars['String']['output']>;
	data?: Maybe<Scalars['String']['output']>;
	fee_hex?: Maybe<Scalars['String']['output']>;
	from?: Maybe<Scalars['String']['output']>;
	gas_price_hex?: Maybe<Scalars['String']['output']>;
	gas_used_hex?: Maybe<Scalars['String']['output']>;
	id?: Maybe<Scalars['Int']['output']>;
	nonce?: Maybe<Scalars['Int']['output']>;
	timestamp?: Maybe<Scalars['Int']['output']>;
	to?: Maybe<Scalars['String']['output']>;
	token?: Maybe<Scalars['String']['output']>;
	token_info?: Maybe<Token_Info>;
	tx_hash?: Maybe<Scalars['String']['output']>;
	updated_at?: Maybe<Scalars['String']['output']>;
};

export type OnchainHistoryRes = {
	__typename?: 'onchainHistoryRes';
	amount_hex?: Maybe<Scalars['String']['output']>;
	block_number?: Maybe<Scalars['Int']['output']>;
	chain_id?: Maybe<Scalars['Int']['output']>;
	created_at?: Maybe<Scalars['String']['output']>;
	data?: Maybe<Scalars['String']['output']>;
	fee_hex?: Maybe<Scalars['String']['output']>;
	from?: Maybe<Scalars['String']['output']>;
	gas_price_hex?: Maybe<Scalars['String']['output']>;
	gas_used_hex?: Maybe<Scalars['String']['output']>;
	log_index?: Maybe<Scalars['Int']['output']>;
	nonce?: Maybe<Scalars['Int']['output']>;
	timestamp?: Maybe<Scalars['Float']['output']>;
	to?: Maybe<Scalars['String']['output']>;
	token?: Maybe<Scalars['String']['output']>;
	token_info?: Maybe<Token_Info>;
	tx_hash?: Maybe<Scalars['String']['output']>;
	updated_at?: Maybe<Scalars['String']['output']>;
};

export type PushScoreRes = {
	__typename?: 'pushScoreRes';
	status?: Maybe<Scalars['Int']['output']>;
};

export type RefAddress = {
	__typename?: 'refAddress';
	address: Scalars['String']['output'];
	ref_code?: Maybe<Scalars['String']['output']>;
};

export type AddTokenMutationVariables = Exact<{
	token?: InputMaybe<Array<InputAddToken> | InputAddToken>;
}>;

export type AddTokenMutation = {
	__typename?: 'Mutation';
	mutation?: {
		__typename?: 'AddTokenRes';
		status?: number | null;
		data?: Array<{
			__typename?: 'TokenUser';
			id?: number | null;
			address?: string | null;
			contract_address?: string | null;
			ticker?: string | null;
			name?: string | null;
			network_id?: number | null;
			decimals?: number | null;
			logo?: string | null;
			created_at?: string | null;
			updated_at?: string | null;
			status?: number | null;
		} | null> | null;
	} | null;
};

export type MobileCheckingMutationVariables = Exact<{
	user_address: Scalars['String']['input'];
	event_name: Event_Tracking_App;
	app_url: Scalars['String']['input'];
}>;

export type MobileCheckingMutation = {
	__typename?: 'Mutation';
	mutation?: { __typename?: 'MobileCheckingCodeRes'; status?: number | null } | null;
};

export type ApplicationCategoriesQueryVariables = Exact<{ [key: string]: never }>;

export type ApplicationCategoriesQuery = {
	__typename?: 'Query';
	query?: {
		__typename?: 'Categories';
		total?: string | null;
		data?: Array<{
			__typename?: 'Category';
			id?: string | null;
			name?: string | null;
			applications?: Array<{
				__typename?: 'Application';
				id?: string | null;
				name?: string | null;
				coin?: number | null;
				logo?: string | null;
				url?: string | null;
				description?: string | null;
				is_verify?: boolean | null;
			} | null> | null;
		} | null> | null;
	} | null;
};

export type ApplicationsQueryVariables = Exact<{
	category_id?: InputMaybe<Scalars['String']['input']>;
	text?: InputMaybe<Scalars['String']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
}>;

export type ApplicationsQuery = {
	__typename?: 'Query';
	query?: {
		__typename?: 'Applications';
		total?: string | null;
		data?: Array<{
			__typename?: 'Application';
			id?: string | null;
			name?: string | null;
			coin?: number | null;
			logo?: string | null;
			url?: string | null;
			description?: string | null;
			is_verify?: boolean | null;
		} | null> | null;
	} | null;
};

export type AssetByAddressQueryVariables = Exact<{
	assets: Array<InputAsset> | InputAsset;
}>;

export type AssetByAddressQuery = {
	__typename?: 'Query';
	query: {
		__typename?: 'Assets';
		total: number;
		data: Array<{
			__typename?: 'Asset';
			id: string;
			name: string;
			symbol?: string | null;
			type?: Asset_Type | null;
			decimals?: number | null;
		} | null>;
	};
};

export type AssetPricesQueryVariables = Exact<{
	asset_ids: Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>;
}>;

export type AssetPricesQuery = {
	__typename?: 'Query';
	query?: {
		__typename?: 'AssetPrices';
		data?: Array<{
			__typename?: 'AssetPrice';
			id: string;
			source?: string | null;
			price?: number | null;
			percent_change_24h?: number | null;
		} | null> | null;
	} | null;
};

export type AssetsQueryVariables = Exact<{
	search: Scalars['String']['input'];
	limit?: InputMaybe<Scalars['Int']['input']>;
	start?: InputMaybe<Scalars['Int']['input']>;
	coin?: InputMaybe<Scalars['Int']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
}>;

export type AssetsQuery = {
	__typename?: 'Query';
	query?: {
		__typename?: 'Assets';
		total: number;
		data: Array<{
			__typename?: 'Asset';
			id: string;
			name: string;
			logo?: string | null;
			symbol?: string | null;
			decimals?: number | null;
			type?: Asset_Type | null;
		} | null>;
	} | null;
};

export type CollectionCategoriesQueryVariables = Exact<{
	coins: Array<InputCollectionCategory> | InputCollectionCategory;
}>;

export type CollectionCategoriesQuery = {
	__typename?: 'Query';
	query?: {
		__typename?: 'CollectionCategories';
		total: number;
		data: Array<{
			__typename?: 'CollectionCategory';
			id?: string | null;
			address?: string | null;
			coin?: number | null;
			description?: string | null;
			external_link?: string | null;
			image_url?: string | null;
			name?: string | null;
			total?: number | null;
			original_source_url?: { __typename?: 'CollectionImageSource'; url?: string | null } | null;
			preview_image_url?: { __typename?: 'CollectionImageSource'; url?: string | null } | null;
		} | null>;
	} | null;
};

export type CollectionsQueryVariables = Exact<{
	coin: Scalars['Int']['input'];
	address: Scalars['String']['input'];
	id: Scalars['String']['input'];
}>;

export type CollectionsQuery = {
	__typename?: 'Query';
	query?: {
		__typename?: 'Collections';
		total?: number | null;
		data: Array<{
			__typename?: 'Collection';
			id?: string | null;
			name?: string | null;
			coin?: number | null;
			category?: string | null;
			collection_id?: string | null;
			contract_address?: string | null;
			description?: string | null;
			external_link?: string | null;
			image_url?: string | null;
			provider_link?: string | null;
			type?: string | null;
			token_id?: string | null;
			original_source_url?: { __typename?: 'CollectionImageSource'; url?: string | null } | null;
			preview_image_url?: { __typename?: 'CollectionImageSource'; url?: string | null } | null;
		} | null>;
	} | null;
};

export type GainerListQueryVariables = Exact<{ [key: string]: never }>;

export type GainerListQuery = {
	__typename?: 'Query';
	query?: {
		__typename?: 'Tokens';
		data: Array<{
			__typename?: 'Token';
			id: string;
			logo: string;
			name?: string | null;
			symbol?: string | null;
			price?: number | null;
			percent_change_24h?: number | null;
			chart_7d?: string | null;
		} | null>;
	} | null;
};

export type TokensQueryVariables = Exact<{
	start?: InputMaybe<Scalars['Int']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	search?: InputMaybe<Scalars['String']['input']>;
	sort?: InputMaybe<Token_Sort>;
	sort_type?: InputMaybe<Token_Sort_Type>;
}>;

export type TokensQuery = {
	__typename?: 'Query';
	query?: {
		__typename?: 'Tokens';
		total: number;
		data: Array<{
			__typename?: 'Token';
			id: string;
			logo: string;
			name?: string | null;
			symbol?: string | null;
			price?: number | null;
			percent_change_24h?: number | null;
			chart_7d?: string | null;
		} | null>;
	} | null;
};

export type GetTokenInfoQueryVariables = Exact<{
	id: Scalars['String']['input'];
}>;

export type GetTokenInfoQuery = {
	__typename?: 'Query';
	query?: {
		__typename?: 'TokenInfo';
		id?: string | null;
		logo?: string | null;
		name?: string | null;
		symbol?: string | null;
		price?: number | null;
		market_cap?: number | null;
		volume_24h?: number | null;
		total_supply?: number | null;
		circulating_supply?: number | null;
		percent_change_24h?: number | null;
		max_supply?: number | null;
		rank?: number | null;
		description?: string | null;
	} | null;
};

export type GetOnchainHistoriesQueryVariables = Exact<{
	body?: InputMaybe<Body>;
	page: Scalars['Int']['input'];
	page_size: Scalars['Int']['input'];
}>;

export type GetOnchainHistoriesQuery = {
	__typename?: 'Query';
	query?: {
		__typename?: 'dataRes';
		status?: number | null;
		data?: Array<{
			__typename?: 'onchainHistoryRes';
			token?: string | null;
			from?: string | null;
			to?: string | null;
			chain_id?: number | null;
			tx_hash?: string | null;
			fee_hex?: string | null;
			amount_hex?: string | null;
			gas_used_hex?: string | null;
			gas_price_hex?: string | null;
			timestamp?: number | null;
			data?: string | null;
			created_at?: string | null;
			updated_at?: string | null;
			nonce?: number | null;
			block_number?: number | null;
			token_info?: {
				__typename?: 'Token_Info';
				symbol?: string | null;
				decimals?: number | null;
				token_name?: string | null;
			} | null;
		} | null> | null;
	} | null;
};

export type LoserListQueryVariables = Exact<{ [key: string]: never }>;

export type LoserListQuery = {
	__typename?: 'Query';
	query?: {
		__typename?: 'Tokens';
		data: Array<{
			__typename?: 'Token';
			id: string;
			logo: string;
			name?: string | null;
			symbol?: string | null;
			price?: number | null;
			percent_change_24h?: number | null;
			chart_7d?: string | null;
		} | null>;
	} | null;
};

export type NotificationsQueryVariables = Exact<{
	page?: InputMaybe<Scalars['Int']['input']>;
	page_size?: InputMaybe<Scalars['Int']['input']>;
}>;

export type NotificationsQuery = {
	__typename?: 'Query';
	query?: {
		__typename?: 'Notifications';
		total?: number | null;
		data?: Array<{
			__typename?: 'Notification';
			id?: number | null;
			is_read?: number | null;
			content?: any | null;
			data?: any | null;
			created_at?: any | null;
		} | null> | null;
	} | null;
};

export type RatesQueryVariables = Exact<{ [key: string]: never }>;

export type RatesQuery = {
	__typename?: 'Query';
	query?: { __typename?: 'Rates'; data: Array<{ __typename?: 'Rate'; symbol: string; price: number } | null> } | null;
};

export type TokenChartsQueryVariables = Exact<{
	id: Scalars['String']['input'];
	period: Period_Type;
}>;

export type TokenChartsQuery = {
	__typename?: 'Query';
	query?: {
		__typename?: 'TokenCharts';
		data?: Array<{ __typename?: 'TokenChart'; date?: string | null; price?: number | null } | null> | null;
	} | null;
};

export type TokenExtraDataQueryVariables = Exact<{
	contract_address?: InputMaybe<Scalars['String']['input']>;
}>;

export type TokenExtraDataQuery = {
	__typename?: 'Query';
	query: { __typename?: 'TokenExtraData'; contract_address: string; logo?: string | null };
};

export type TokenListQueryVariables = Exact<{
	input?: InputMaybe<InputQueryTokenList>;
}>;

export type TokenListQuery = {
	__typename?: 'Query';
	query?: {
		__typename?: 'TokenListRes';
		total?: number | null;
		data?: Array<{
			__typename?: 'TokenUser';
			id?: number | null;
			address?: string | null;
			contract_address?: string | null;
			ticker?: string | null;
			name?: string | null;
			network_id?: number | null;
			logo?: string | null;
			created_at?: string | null;
			updated_at?: string | null;
			decimals?: number | null;
			status?: number | null;
		} | null> | null;
	} | null;
};

export type TokensByIdsQueryVariables = Exact<{
	ids: Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>;
}>;

export type TokensByIdsQuery = {
	__typename?: 'Query';
	query?: {
		__typename?: 'Tokens';
		data: Array<{
			__typename?: 'Token';
			id: string;
			logo: string;
			name?: string | null;
			symbol?: string | null;
			price?: number | null;
			percent_change_24h?: number | null;
			chart_7d?: string | null;
		} | null>;
	} | null;
};

export type TransactionsQueryVariables = Exact<{
	address: Scalars['String']['input'];
	asset_id: Scalars['String']['input'];
	since_created_at?: InputMaybe<Scalars['Int']['input']>;
}>;

export type TransactionsQuery = {
	__typename?: 'Query';
	query?: {
		__typename?: 'Transactions';
		total?: number | null;
		data: Array<{
			__typename?: 'Transaction';
			id?: string | null;
			from?: string | null;
			to?: string | null;
			block_created_at?: number | null;
			block?: number | null;
			status?: string | null;
			sequence?: number | null;
			type?: string | null;
			direction?: string | null;
			created_at?: number | null;
			fee?: { __typename?: 'TransactionFee'; asset?: string | null; value?: string | null } | null;
			metadata?: {
				__typename?: 'TransactionMetaData';
				asset?: string | null;
				value?: string | null;
				input?: string | null;
				from?: {
					__typename?: 'TransactionMetaDataFromTo';
					asset?: string | null;
					value?: string | null;
					input?: string | null;
				} | null;
				to?: {
					__typename?: 'TransactionMetaDataFromTo';
					asset?: string | null;
					value?: string | null;
					input?: string | null;
				} | null;
			} | null;
		} | null>;
	} | null;
};

export type TrendingListQueryVariables = Exact<{ [key: string]: never }>;

export type TrendingListQuery = {
	__typename?: 'Query';
	query?: {
		__typename?: 'Tokens';
		data: Array<{
			__typename?: 'Token';
			id: string;
			logo: string;
			name?: string | null;
			symbol?: string | null;
			price?: number | null;
			percent_change_24h?: number | null;
			chart_7d?: string | null;
		} | null>;
	} | null;
};

export type PriceChangedSubscriptionVariables = Exact<{
	ids: Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>;
}>;

export type PriceChangedSubscription = {
	__typename?: 'Subscription';
	subscription?: {
		__typename?: 'Token';
		id: string;
		price?: number | null;
		percent_change_24h?: number | null;
	} | null;
};

export type CreateChannelV2MutationVariables = Exact<{
	connect_id?: InputMaybe<Scalars['Int']['input']>;
}>;

export type CreateChannelV2Mutation = {
	__typename?: 'Mutation';
	mutation?: { __typename?: 'CreateChannelV2Res'; status?: number | null } | null;
};

export type PushMessageChatMutationVariables = Exact<{
	message?: InputMaybe<Scalars['String']['input']>;
}>;

export type PushMessageChatMutation = {
	__typename?: 'Mutation';
	mutation?: { __typename?: 'PushMessageChatRes'; status?: number | null; data?: any | null } | null;
};

export type DetailRequestChatQueryVariables = Exact<{
	id_request?: InputMaybe<Scalars['Int']['input']>;
}>;

export type DetailRequestChatQuery = {
	__typename?: 'Query';
	query?: {
		__typename?: 'RequestConnect';
		id?: number | null;
		user_address?: string | null;
		friend_address?: string | null;
		channel_id?: string | null;
		status?: number | null;
		hash_id?: string | null;
	} | null;
};

export type FindUserQueryVariables = Exact<{
	address: Scalars['String']['input'];
}>;

export type FindUserQuery = {
	__typename?: 'Query';
	query?: {
		__typename?: 'FindUserRes';
		user_address?: string | null;
		username?: string | null;
		public_key?: string | null;
		channel?: Array<{
			__typename?: 'Channel';
			tx_id?: string | null;
			name?: string | null;
			channel_participant?: Array<{
				__typename?: 'ChannelParticipant';
				user_address?: string | null;
			} | null> | null;
			channel_message?: Array<{
				__typename?: 'Message';
				sender?: string | null;
				message_sender?: string | null;
				message_recipient?: string | null;
				type?: number | null;
				created_at?: string | null;
			} | null> | null;
		} | null> | null;
	} | null;
};

export type GetChatMessageQueryVariables = Exact<{
	channel_hash?: InputMaybe<Scalars['String']['input']>;
	page?: InputMaybe<Scalars['Int']['input']>;
	page_size?: InputMaybe<Scalars['Int']['input']>;
	timestamp?: InputMaybe<Scalars['String']['input']>;
}>;

export type GetChatMessageQuery = {
	__typename?: 'Query';
	query?: {
		__typename?: 'GetChatMessageRes';
		count?: number | null;
		rows?: Array<{
			__typename?: 'ChatMessage';
			sender?: string | null;
			channel_hash?: string | null;
			message_hash?: string | null;
			created_at?: string | null;
		} | null> | null;
	} | null;
};

export type GetListChatQueryVariables = Exact<{
	state?: InputMaybe<Array<Scalars['Int']['input']> | Scalars['Int']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>> | InputMaybe<Scalars['Int']['input']>>;
	address_filter?: InputMaybe<Scalars['String']['input']>;
	page?: InputMaybe<Scalars['Int']['input']>;
	page_size?: InputMaybe<Scalars['Int']['input']>;
}>;

export type GetListChatQuery = {
	__typename?: 'Query';
	query?: {
		__typename?: 'GetListChannelV2Res';
		count?: number | null;
		rows?: Array<{
			__typename?: 'UserConnect';
			id?: number | null;
			public_key_user?: string | null;
			public_key_partner?: string | null;
			name?: string | null;
			state?: number | null;
			hash?: string | null;
			status?: number | null;
			created_by?: string | null;
			created_at?: string | null;
			updated_at?: string | null;
		} | null> | null;
	} | null;
};

export type GetSaveListQueryVariables = Exact<{ [key: string]: never }>;

export type GetSaveListQuery = {
	__typename?: 'Query';
	query?: {
		__typename?: 'SaveListRes';
		sender?: string | null;
		save_list?: string | null;
		device_id?: string | null;
		address?: string | null;
		created_at?: string | null;
		updated_at?: string | null;
	} | null;
};

export type CheckRefCodeMutationVariables = Exact<{
	code: Scalars['String']['input'];
}>;

export type CheckRefCodeMutation = {
	__typename?: 'Mutation';
	mutation?: { __typename?: 'CheckRefCodeRes'; status?: number | null } | null;
};

export type SetRefCodeByAddressMutationVariables = Exact<{
	code: Scalars['String']['input'];
}>;

export type SetRefCodeByAddressMutation = {
	__typename?: 'Mutation';
	mutation?: { __typename?: 'UserRefAddress'; status: boolean } | null;
};

export type CampaignDetailQueryVariables = Exact<{
	id: Scalars['Int']['input'];
}>;

export type CampaignDetailQuery = {
	__typename?: 'Query';
	query?: {
		__typename?: 'CampaignDetail';
		type?: string | null;
		id: number;
		code?: string | null;
		detail_uri?: string | null;
		start_at?: number | null;
		end_at?: number | null;
		conditions?: any | null;
		sort?: number | null;
		language?: any | null;
		blacklists?: Array<{
			__typename?: 'CampaignBlacklist';
			address?: string | null;
			reason?: string | null;
			created_at?: any | null;
		} | null> | null;
		rewards?: Array<{
			__typename?: 'CampaignReward';
			language?: any | null;
			quantity?: number | null;
			unit?: string | null;
			type?: string | null;
			status?: number | null;
		} | null> | null;
	} | null;
};

export type GetRefCodeByAddressQueryVariables = Exact<{ [key: string]: never }>;

export type GetRefCodeByAddressQuery = {
	__typename?: 'Query';
	query?: { __typename?: 'RefCodeByAddress'; address: string; ref_code: string } | null;
};

export type GetRefAddressQueryVariables = Exact<{ [key: string]: never }>;

export type GetRefAddressQuery = {
	__typename?: 'Query';
	query?: { __typename?: 'refAddress'; address: string; ref_code?: string | null } | null;
};

export type ListCampaignRewardHistoryByAddressQueryVariables = Exact<{
	page?: InputMaybe<Scalars['Int']['input']>;
	page_size?: InputMaybe<Scalars['Int']['input']>;
}>;

export type ListCampaignRewardHistoryByAddressQuery = {
	__typename?: 'Query';
	query?: {
		__typename?: 'CampaignRewardHistoryPaginate';
		total?: number | null;
		data?: Array<{
			__typename?: 'CampaignRewardHistory';
			address?: string | null;
			status?: number | null;
			created_at?: any | null;
			payload?: {
				__typename?: 'PayloadRewardHistory';
				type?: string | null;
				reward?: string | null;
				timestamp?: number | null;
				service_name?: string | null;
				transaction_id?: string | null;
			} | null;
		} | null> | null;
	} | null;
};

export type ListCampaignAvailableByAddressQueryVariables = Exact<{ [key: string]: never }>;

export type ListCampaignAvailableByAddressQuery = {
	__typename?: 'Query';
	query?: {
		__typename?: 'CampaignAvailableByAddress';
		count?: number | null;
		rows?: Array<{
			__typename?: 'CampaignDetail';
			id: number;
			type?: string | null;
			code?: string | null;
			detail_uri?: string | null;
			start_at?: number | null;
			end_at?: number | null;
			conditions?: any | null;
			sort?: number | null;
			language?: any | null;
			blacklists?: Array<{
				__typename?: 'CampaignBlacklist';
				address?: string | null;
				reason?: string | null;
				created_at?: any | null;
			} | null> | null;
			rewards?: Array<{
				__typename?: 'CampaignReward';
				language?: any | null;
				quantity?: number | null;
			} | null> | null;
		} | null> | null;
	} | null;
};

export type RefStatisticQueryVariables = Exact<{ [key: string]: never }>;

export type RefStatisticQuery = {
	__typename?: 'Query';
	query?: {
		__typename?: 'RefStatistic';
		count: number;
		countSuccess: number;
		reward?: { __typename?: 'RefReward'; amount: number; unit: string } | null;
	} | null;
};
