export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type City = {
  __typename?: 'City';
  id: Scalars['Int'];
  name: Scalars['String'];
  slugName: Scalars['String'];
  timezone: Scalars['String'];
};

export type Country = {
  __typename?: 'Country';
  id: Scalars['Int'];
  isoCode: Scalars['String'];
  name: Scalars['String'];
  slugName: Scalars['String'];
};

export type DeliveryDriver = {
  __typename?: 'DeliveryDriver';
  avgScore?: Maybe<Scalars['Float']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  location?: Maybe<DeliveryDriverLocation>;
  mobileNumber?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['String']>;
};

export type DeliveryDriverLocation = {
  __typename?: 'DeliveryDriverLocation';
  createdAt?: Maybe<Scalars['String']>;
  lat?: Maybe<Scalars['Float']>;
  lon?: Maybe<Scalars['Float']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  loginWithEmail?: Maybe<Token>;
};


export type MutationLoginWithEmailArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type OpeningHour = {
  __typename?: 'OpeningHour';
  end_time: Scalars['String'];
  open: Scalars['Boolean'];
  start_time: Scalars['String'];
};

export type Order = {
  __typename?: 'Order';
  address?: Maybe<OrderAddress>;
  deliveryDriver?: Maybe<DeliveryDriver>;
  deliveryFee?: Maybe<Scalars['Float']>;
  deliveryTime?: Maybe<Scalars['Int']>;
  deliveryType?: Maybe<Scalars['String']>;
  earnedPoints?: Maybe<Scalars['Int']>;
  items?: Maybe<Array<Maybe<OrderItem>>>;
  orderCheckDeadline?: Maybe<Scalars['String']>;
  orderCompletedRewardPoints?: Maybe<Scalars['Int']>;
  orderDate?: Maybe<Scalars['String']>;
  orderDeclineReason?: Maybe<Scalars['String']>;
  orderDeliveryDeadline?: Maybe<Scalars['String']>;
  orderEarliestDeliveryDeadline?: Maybe<Scalars['String']>;
  orderEarliestPreparingDeadline?: Maybe<Scalars['String']>;
  orderLatestDeliveryDeadline?: Maybe<Scalars['String']>;
  orderLatestPreparingDeadline?: Maybe<Scalars['String']>;
  orderPreparingDeadline?: Maybe<Scalars['String']>;
  orderPreparingDelay?: Maybe<Scalars['Int']>;
  preOrder?: Maybe<Scalars['String']>;
  preparationTime?: Maybe<Scalars['Int']>;
  promoCode?: Maybe<PromoCode>;
  refund?: Maybe<OrderRefund>;
  restaurant?: Maybe<OrderRestaurant>;
  restaurantDeliveryType?: Maybe<Scalars['String']>;
  review?: Maybe<OrderReview>;
  smallAmountFee?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['String']>;
  subTotal?: Maybe<Scalars['Float']>;
  tip?: Maybe<OrderTip>;
  total?: Maybe<Scalars['Float']>;
  totalPromoCodeAmount?: Maybe<Scalars['Float']>;
  uid?: Maybe<Scalars['String']>;
  usedPoints?: Maybe<Scalars['Float']>;
  userCanCall?: Maybe<Scalars['Boolean']>;
  userCanRate?: Maybe<Scalars['Boolean']>;
  userCanReOrder?: Maybe<Scalars['Boolean']>;
  userCanTip?: Maybe<Scalars['Boolean']>;
};

export type OrderAddress = {
  __typename?: 'OrderAddress';
  addressLine1: Scalars['String'];
  addressLine2: Scalars['String'];
  city?: Maybe<City>;
  country?: Maybe<Country>;
  flatNumber: Scalars['String'];
  fullName: Scalars['String'];
  geoEnabled: Scalars['Boolean'];
  id: Scalars['Int'];
  lat: Scalars['Float'];
  lon: Scalars['Float'];
  postalCode: Scalars['String'];
  tips: Scalars['String'];
  title: Scalars['String'];
  userAddressId: Scalars['Int'];
};

export type OrderItem = {
  __typename?: 'OrderItem';
  amount?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  oldAmount?: Maybe<Scalars['Float']>;
  options?: Maybe<Array<Maybe<OrderItemOption>>>;
  quantity?: Maybe<Scalars['Int']>;
  totalAmount?: Maybe<Scalars['Float']>;
  types?: Maybe<Array<Maybe<OrderItemType>>>;
};

export type OrderItemOption = {
  __typename?: 'OrderItemOption';
  id?: Maybe<Scalars['Int']>;
  multipleSelection?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  values?: Maybe<Array<Maybe<OrderItemOptionValue>>>;
};

export type OrderItemOptionValue = {
  __typename?: 'OrderItemOptionValue';
  amount: Scalars['Float'];
  amountEffectType: Scalars['String'];
  description: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  quantity: Scalars['Int'];
  quantityAble: Scalars['Int'];
  selected: Scalars['Boolean'];
};

export type OrderItemType = {
  __typename?: 'OrderItemType';
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type OrderRefund = {
  __typename?: 'OrderRefund';
  amount?: Maybe<Scalars['Float']>;
};

export type OrderRestaurant = {
  __typename?: 'OrderRestaurant';
  address?: Maybe<RestaurantAddress>;
  contactMobileNumber: Scalars['String'];
  deliveryType: Scalars['String'];
  name: Scalars['String'];
  uid: Scalars['String'];
};

export type OrderReview = {
  __typename?: 'OrderReview';
  createdAt?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  pointsEarned: Scalars['Int'];
};

export type OrderTip = {
  __typename?: 'OrderTip';
  amount?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['String']>;
};

export type Picture = {
  __typename?: 'Picture';
  alt?: Maybe<Scalars['String']>;
  bundle: Scalars['String'];
  height: Scalars['Int'];
  id: Scalars['Int'];
  title?: Maybe<Scalars['String']>;
  url: Scalars['String'];
  width: Scalars['Int'];
};

export type PromoCode = {
  __typename?: 'PromoCode';
  afterGainAmount: Scalars['Float'];
  beforeGainAmount: Scalars['Float'];
  code: Scalars['String'];
  createdAt: Scalars['String'];
  description: Scalars['String'];
  expiryAt?: Maybe<Scalars['String']>;
  gainAmount: Scalars['Float'];
  gainStage: Scalars['String'];
  gainType: Scalars['String'];
  id: Scalars['Int'];
  minOrderAmount: Scalars['Float'];
  restaurantName?: Maybe<Scalars['String']>;
  restaurantUID?: Maybe<Scalars['String']>;
  restaurants?: Maybe<Array<Maybe<PromoCodeRestaurant>>>;
  shops?: Maybe<Array<Maybe<PromoCodeShop>>>;
  title: Scalars['String'];
  type: Scalars['String'];
  useAble?: Maybe<Scalars['Boolean']>;
  useAbleForRestaurant?: Maybe<Scalars['Boolean']>;
  usedAt?: Maybe<Scalars['String']>;
};

export type PromoCodeRestaurant = {
  __typename?: 'PromoCodeRestaurant';
  name?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['String']>;
};

export type PromoCodeShop = {
  __typename?: 'PromoCodeShop';
  name?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  deviceId?: Maybe<Scalars['String']>;
  order?: Maybe<Order>;
  pastOrders?: Maybe<Array<Maybe<Order>>>;
  restaurant?: Maybe<Restaurant>;
  restaurants?: Maybe<Array<Maybe<SearchRestaurant>>>;
  user?: Maybe<User>;
};


export type QueryOrderArgs = {
  orderUid: Scalars['String'];
};


export type QueryPastOrdersArgs = {
  index: Scalars['Int'];
  limit: Scalars['Int'];
};


export type QueryRestaurantArgs = {
  delivery: Scalars['Boolean'];
  lat?: InputMaybe<Scalars['Float']>;
  lon?: InputMaybe<Scalars['Float']>;
  restaurantUid?: InputMaybe<Scalars['String']>;
  userAddressId?: InputMaybe<Scalars['Int']>;
};


export type QueryRestaurantsArgs = {
  delivery: Scalars['Boolean'];
  index: Scalars['Int'];
  lat?: InputMaybe<Scalars['Float']>;
  limit: Scalars['Int'];
  lon?: InputMaybe<Scalars['Float']>;
  query?: InputMaybe<Scalars['String']>;
  userAddressId?: InputMaybe<Scalars['Int']>;
};

export type Restaurant = {
  __typename?: 'Restaurant';
  address?: Maybe<RestaurantAddress>;
  avgScore?: Maybe<Scalars['Float']>;
  contactMobileNumber?: Maybe<Scalars['String']>;
  deal?: Maybe<RestaurantDeal>;
  delivery?: Maybe<Scalars['Boolean']>;
  deliveryFee?: Maybe<RestaurantDeliveryFee>;
  deliveryReOpenDate?: Maybe<Scalars['String']>;
  deliveryType?: Maybe<Scalars['String']>;
  distance?: Maybe<Scalars['Float']>;
  freebie?: Maybe<RestaurantFreebie>;
  inDistance?: Maybe<Scalars['Boolean']>;
  info?: Maybe<Scalars['String']>;
  instagramUsername?: Maybe<Scalars['String']>;
  isClosingSoon?: Maybe<Scalars['Boolean']>;
  isFavorite?: Maybe<Scalars['Boolean']>;
  isNew?: Maybe<Scalars['Boolean']>;
  items?: Maybe<Array<Maybe<RestaurantItem>>>;
  menus?: Maybe<Array<Maybe<RestaurantMenu>>>;
  minOrderAmount?: Maybe<Scalars['Float']>;
  minOrderEnabled?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  nextOpeningDate?: Maybe<Scalars['String']>;
  open?: Maybe<Scalars['Boolean']>;
  openingHours?: Maybe<RestaurantOpeningHours>;
  pictures?: Maybe<Array<Maybe<Picture>>>;
  reOpenDate?: Maybe<Scalars['String']>;
  restaurantCollectionWorkingTimeStatus?: Maybe<Scalars['Boolean']>;
  restaurantDeliveryDriverStatus?: Maybe<Scalars['Boolean']>;
  restaurantDeliveryStatus?: Maybe<Scalars['Boolean']>;
  restaurantDeliveryWorkingTimeStatus?: Maybe<Scalars['Boolean']>;
  restaurantNextVacationEndDate?: Maybe<Scalars['String']>;
  restaurantNextVacationStartDate?: Maybe<Scalars['String']>;
  restaurantNextVacationStatus?: Maybe<Scalars['Boolean']>;
  restaurantOpenStatus?: Maybe<Scalars['Boolean']>;
  restaurantStatusCode: Scalars['Int'];
  restaurantStatusParams?: Maybe<Array<Maybe<Scalars['String']>>>;
  restaurantWorkingHourOpenTime?: Maybe<Scalars['Boolean']>;
  reviewCount?: Maybe<Scalars['Int']>;
  showWorkingHours?: Maybe<Scalars['Boolean']>;
  slugName?: Maybe<Scalars['String']>;
  timeFrames?: Maybe<Array<Maybe<TimeFrame>>>;
  types?: Maybe<Array<Maybe<RestaurantType>>>;
  uid?: Maybe<Scalars['String']>;
};

export type RestaurantAddress = {
  __typename?: 'RestaurantAddress';
  addressLine1: Scalars['String'];
  addressLine2: Scalars['String'];
  city?: Maybe<City>;
  country?: Maybe<Country>;
  flatNumber: Scalars['String'];
  geoEnabled: Scalars['Boolean'];
  id: Scalars['Int'];
  lat: Scalars['Float'];
  lon: Scalars['Float'];
  postalCode: Scalars['String'];
  slugAdminWard: Scalars['String'];
};

export type RestaurantDeal = {
  __typename?: 'RestaurantDeal';
  delivery: Scalars['Boolean'];
  id: Scalars['Int'];
  int: Scalars['Int'];
  min_spend_amount: Scalars['Float'];
  reward_percent: Scalars['Float'];
  time_frame_id: Scalars['Int'];
};

export type RestaurantDeliveryFee = {
  __typename?: 'RestaurantDeliveryFee';
  amount?: Maybe<Scalars['Float']>;
  freeDeliveryMoreThanAmount?: Maybe<Scalars['Float']>;
  freeDeliveryMoreThanEnabled?: Maybe<Scalars['Boolean']>;
};

export type RestaurantFreebie = {
  __typename?: 'RestaurantFreebie';
  id: Scalars['Int'];
  itemCount: Scalars['Int'];
  minSpendAmount: Scalars['Float'];
  tagName: Scalars['String'];
};

export type RestaurantItem = {
  __typename?: 'RestaurantItem';
  description: Scalars['String'];
  disabledUntil?: Maybe<Scalars['String']>;
  enabled: Scalars['Boolean'];
  freebie?: Maybe<RestaurantItemFreebie>;
  id: Scalars['Int'];
  menus?: Maybe<Array<Maybe<RestaurantMenuMap>>>;
  name: Scalars['String'];
  newAmount: Scalars['Float'];
  noteAble: Scalars['Boolean'];
  oldAmount: Scalars['Float'];
  options?: Maybe<Array<Maybe<RestaurantItemOption>>>;
  pictures?: Maybe<Array<Maybe<Picture>>>;
  preparationTime: Scalars['Int'];
  quantityAble: Scalars['Int'];
  types?: Maybe<Array<Maybe<RestaurantItemType>>>;
};

export type RestaurantItemFreebie = {
  __typename?: 'RestaurantItemFreebie';
  id: Scalars['Int'];
  minSpendAmount: Scalars['Float'];
};

export type RestaurantItemOption = {
  __typename?: 'RestaurantItemOption';
  enabled: Scalars['Boolean'];
  id: Scalars['Int'];
  minRequired: Scalars['Int'];
  multipleSelection: Scalars['Int'];
  name: Scalars['String'];
  required: Scalars['Boolean'];
  values?: Maybe<Array<Maybe<RestaurantItemOptionValue>>>;
};

export type RestaurantItemOptionValue = {
  __typename?: 'RestaurantItemOptionValue';
  amount?: Maybe<Scalars['Float']>;
  amountEffectType?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  disabledUntil?: Maybe<Scalars['String']>;
  enabled?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  quantityAble?: Maybe<Scalars['Int']>;
  selected?: Maybe<Scalars['Boolean']>;
};

export type RestaurantItemType = {
  __typename?: 'RestaurantItemType';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type RestaurantMenu = {
  __typename?: 'RestaurantMenu';
  description: Scalars['String'];
  id: Scalars['Int'];
  inRestaurantTimeFrameMap: Scalars['Boolean'];
  index: Scalars['Int'];
  name: Scalars['String'];
};

export type RestaurantMenuMap = {
  __typename?: 'RestaurantMenuMap';
  id: Scalars['Int'];
  index: Scalars['Int'];
  restaurantMenuId: Scalars['Int'];
};

export type RestaurantOpeningHours = {
  __typename?: 'RestaurantOpeningHours';
  fri?: Maybe<OpeningHour>;
  mon?: Maybe<OpeningHour>;
  sat?: Maybe<OpeningHour>;
  sun?: Maybe<OpeningHour>;
  thu?: Maybe<OpeningHour>;
  tue?: Maybe<OpeningHour>;
  wed?: Maybe<OpeningHour>;
};

export type RestaurantType = {
  __typename?: 'RestaurantType';
  iconId: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type SearchRestaurant = {
  __typename?: 'SearchRestaurant';
  avgScore?: Maybe<Scalars['Float']>;
  deal?: Maybe<RestaurantDeal>;
  delivery?: Maybe<Scalars['Boolean']>;
  deliveryFee?: Maybe<RestaurantDeliveryFee>;
  deliveryReOpenDate?: Maybe<Scalars['String']>;
  deliveryType?: Maybe<Scalars['String']>;
  distance?: Maybe<Scalars['Float']>;
  freebie?: Maybe<SearchRestaurantFreebie>;
  inDistance?: Maybe<Scalars['Boolean']>;
  isNew?: Maybe<Scalars['Boolean']>;
  minOrderAmount?: Maybe<Scalars['Float']>;
  minOrderEnabled?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  open?: Maybe<Scalars['Boolean']>;
  picture?: Maybe<Picture>;
  reOpenDate?: Maybe<Scalars['String']>;
  restaurantAddressPostalCode?: Maybe<Scalars['String']>;
  restaurantAddressSlugAdminWard?: Maybe<Scalars['String']>;
  restaurantAddressSlugCityName?: Maybe<Scalars['String']>;
  restaurantCollectionWorkingTimeStatus?: Maybe<Scalars['Boolean']>;
  restaurantDeliveryDriverStatus?: Maybe<Scalars['Boolean']>;
  restaurantDeliveryStatus?: Maybe<Scalars['Boolean']>;
  restaurantDeliveryWorkingTimeStatus?: Maybe<Scalars['Boolean']>;
  restaurantItemId?: Maybe<Scalars['Int']>;
  restaurantNextVacationEndDate?: Maybe<Scalars['String']>;
  restaurantNextVacationStartDate?: Maybe<Scalars['String']>;
  restaurantNextVacationStatus?: Maybe<Scalars['Boolean']>;
  restaurantOpenStatus?: Maybe<Scalars['Boolean']>;
  restaurantStatusCode: Scalars['Int'];
  restaurantStatusParams?: Maybe<Array<Maybe<Scalars['String']>>>;
  restaurantWorkingHourOpenTime?: Maybe<Scalars['Boolean']>;
  slugName?: Maybe<Scalars['String']>;
  types?: Maybe<Array<Maybe<RestaurantType>>>;
  uid?: Maybe<Scalars['String']>;
};

export type SearchRestaurantFreebie = {
  __typename?: 'SearchRestaurantFreebie';
  id: Scalars['Int'];
  itemCount: Scalars['Int'];
  minSpendAmount: Scalars['Float'];
  tagName: Scalars['String'];
};

export type TimeFrame = {
  __typename?: 'TimeFrame';
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type Token = {
  __typename?: 'Token';
  token?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  addresses?: Maybe<Array<Maybe<UserAddress>>>;
  createdAt?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['Boolean']>;
  firebaseUserUid?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  mobileNumber?: Maybe<Scalars['String']>;
  points?: Maybe<Scalars['Int']>;
  profilePicture?: Maybe<Picture>;
  smsVerified?: Maybe<Scalars['Boolean']>;
  uid?: Maybe<Scalars['String']>;
};

export type UserAddress = {
  __typename?: 'UserAddress';
  addressIconId?: Maybe<Scalars['Int']>;
  addressLine1: Scalars['String'];
  addressLine2: Scalars['String'];
  adminWard: Scalars['String'];
  city?: Maybe<City>;
  country?: Maybe<Country>;
  default: Scalars['Boolean'];
  flatNumber: Scalars['String'];
  fullName: Scalars['String'];
  geoEnabled: Scalars['Boolean'];
  id: Scalars['Int'];
  lat: Scalars['Float'];
  lon: Scalars['Float'];
  postalCode: Scalars['String'];
  slugAdminWard: Scalars['String'];
  tips: Scalars['String'];
  title: Scalars['String'];
};

export type LoginWithEmailAndPasswordMutationVariables = Exact<{ [key: string]: never; }>;


export type LoginWithEmailAndPasswordMutation = { __typename?: 'Mutation', loginWithEmail?: { __typename?: 'Token', token?: string | null } | null };

export type PastOrdersQueryVariables = Exact<{ [key: string]: never; }>;


export type PastOrdersQuery = { __typename?: 'Query', pastOrders?: Array<{ __typename?: 'Order', deliveryFee?: number | null, deliveryTime?: number | null, deliveryType?: string | null, earnedPoints?: number | null, orderCheckDeadline?: string | null, orderCompletedRewardPoints?: number | null, orderDate?: string | null, orderDeclineReason?: string | null, orderDeliveryDeadline?: string | null, orderEarliestDeliveryDeadline?: string | null, orderEarliestPreparingDeadline?: string | null, orderLatestDeliveryDeadline?: string | null, orderLatestPreparingDeadline?: string | null, orderPreparingDeadline?: string | null, orderPreparingDelay?: number | null, preOrder?: string | null, preparationTime?: number | null, restaurantDeliveryType?: string | null, smallAmountFee?: number | null, status?: string | null, subTotal?: number | null, total?: number | null, totalPromoCodeAmount?: number | null, uid?: string | null, usedPoints?: number | null, userCanCall?: boolean | null, userCanRate?: boolean | null, userCanReOrder?: boolean | null, userCanTip?: boolean | null, address?: { __typename?: 'OrderAddress', addressLine1: string, addressLine2: string, flatNumber: string, fullName: string, geoEnabled: boolean, id: number, lat: number, lon: number, postalCode: string, tips: string, title: string, userAddressId: number } | null, deliveryDriver?: { __typename?: 'DeliveryDriver', avgScore?: number | null, email?: string | null, firstName?: string | null, lastName?: string | null, mobileNumber?: string | null, uid?: string | null } | null, items?: Array<{ __typename?: 'OrderItem', amount?: number | null, description?: string | null, id?: number | null, name?: string | null, note?: string | null, oldAmount?: number | null, quantity?: number | null, totalAmount?: number | null } | null> | null, promoCode?: { __typename?: 'PromoCode', afterGainAmount: number, beforeGainAmount: number, code: string, createdAt: string, description: string, expiryAt?: string | null, gainAmount: number, gainStage: string, gainType: string, id: number, minOrderAmount: number, restaurantName?: string | null, restaurantUID?: string | null, title: string, type: string, useAble?: boolean | null, useAbleForRestaurant?: boolean | null, usedAt?: string | null } | null, refund?: { __typename?: 'OrderRefund', amount?: number | null } | null, restaurant?: { __typename?: 'OrderRestaurant', contactMobileNumber: string, deliveryType: string, name: string, uid: string } | null, review?: { __typename?: 'OrderReview', createdAt?: string | null, id: number, pointsEarned: number } | null, tip?: { __typename?: 'OrderTip', amount?: number | null, createdAt?: string | null } | null } | null> | null };

export type RestaurantsQueryVariables = Exact<{ [key: string]: never; }>;


export type RestaurantsQuery = { __typename?: 'Query', restaurants?: Array<{ __typename?: 'SearchRestaurant', uid?: string | null, name?: string | null } | null> | null };

export type UserQueryVariables = Exact<{ [key: string]: never; }>;


export type UserQuery = { __typename?: 'Query', user?: { __typename?: 'User', createdAt?: string | null, email?: string | null, emailVerified?: boolean | null, firebaseUserUid?: string | null, firstName?: string | null, lastName?: string | null, mobileNumber?: string | null, points?: number | null, smsVerified?: boolean | null, uid?: string | null, addresses?: Array<{ __typename?: 'UserAddress', addressIconId?: number | null, addressLine1: string, addressLine2: string, adminWard: string, default: boolean, flatNumber: string, fullName: string, geoEnabled: boolean, id: number, lat: number, lon: number, postalCode: string, slugAdminWard: string, tips: string, title: string } | null> | null, profilePicture?: { __typename?: 'Picture', alt?: string | null, bundle: string, height: number, id: number, title?: string | null, url: string, width: number } | null } | null };
