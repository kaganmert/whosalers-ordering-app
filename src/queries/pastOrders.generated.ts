import * as Types from "../generated/graphql";

import { api } from "../app/api";

export type PastOrdersQueryVariables = Types.Exact<{ [key: string]: never }>;

export type PastOrdersQuery = {
  __typename?: "Query";
  pastOrders?: Array<{
    __typename?: "Order";
    deliveryFee?: number | null;
    deliveryTime?: number | null;
    deliveryType?: string | null;
    earnedPoints?: number | null;
    orderCheckDeadline?: string | null;
    orderCompletedRewardPoints?: number | null;
    orderDate?: string | null;
    orderDeclineReason?: string | null;
    orderDeliveryDeadline?: string | null;
    orderEarliestDeliveryDeadline?: string | null;
    orderEarliestPreparingDeadline?: string | null;
    orderLatestDeliveryDeadline?: string | null;
    orderLatestPreparingDeadline?: string | null;
    orderPreparingDeadline?: string | null;
    orderPreparingDelay?: number | null;
    preOrder?: string | null;
    preparationTime?: number | null;
    restaurantDeliveryType?: string | null;
    smallAmountFee?: number | null;
    status?: string | null;
    subTotal?: number | null;
    total?: number | null;
    totalPromoCodeAmount?: number | null;
    uid?: string | null;
    usedPoints?: number | null;
    userCanCall?: boolean | null;
    userCanRate?: boolean | null;
    userCanReOrder?: boolean | null;
    userCanTip?: boolean | null;
    address?: {
      __typename?: "OrderAddress";
      addressLine1: string;
      addressLine2: string;
      flatNumber: string;
      fullName: string;
      geoEnabled: boolean;
      id: number;
      lat: number;
      lon: number;
      postalCode: string;
      tips: string;
      title: string;
      userAddressId: number;
    } | null;
    deliveryDriver?: {
      __typename?: "DeliveryDriver";
      avgScore?: number | null;
      email?: string | null;
      firstName?: string | null;
      lastName?: string | null;
      mobileNumber?: string | null;
      uid?: string | null;
    } | null;
    items?: Array<{
      __typename?: "OrderItem";
      amount?: number | null;
      description?: string | null;
      id?: number | null;
      name?: string | null;
      note?: string | null;
      oldAmount?: number | null;
      quantity?: number | null;
      totalAmount?: number | null;
    } | null> | null;
    promoCode?: {
      __typename?: "PromoCode";
      afterGainAmount: number;
      beforeGainAmount: number;
      code: string;
      createdAt: string;
      description: string;
      expiryAt?: string | null;
      gainAmount: number;
      gainStage: string;
      gainType: string;
      id: number;
      minOrderAmount: number;
      restaurantName?: string | null;
      restaurantUID?: string | null;
      title: string;
      type: string;
      useAble?: boolean | null;
      useAbleForRestaurant?: boolean | null;
      usedAt?: string | null;
    } | null;
    refund?: { __typename?: "OrderRefund"; amount?: number | null } | null;
    restaurant?: {
      __typename?: "OrderRestaurant";
      contactMobileNumber: string;
      deliveryType: string;
      name: string;
      uid: string;
    } | null;
    review?: {
      __typename?: "OrderReview";
      createdAt?: string | null;
      id: number;
      pointsEarned: number;
    } | null;
    tip?: {
      __typename?: "OrderTip";
      amount?: number | null;
      createdAt?: string | null;
    } | null;
  } | null> | null;
};

export const PastOrdersDocument = `
    query pastOrders {
      pastOrders(limit: 50, index: 1) {
        address {
          addressLine1
          addressLine2
          flatNumber
          fullName
          geoEnabled
          id
          lat
          lon
          postalCode
          tips
          title
          userAddressId
        }
        deliveryDriver {
          avgScore
          email
          firstName
          lastName
          mobileNumber
          uid
        }
        deliveryFee
        deliveryTime
        deliveryType
        earnedPoints
        items {
          amount
          description
          id
          name
          note
          oldAmount
          quantity
          totalAmount
        }
        orderCheckDeadline
        orderCompletedRewardPoints
        orderDate
        orderDeclineReason
        orderDeliveryDeadline
        orderEarliestDeliveryDeadline
        orderEarliestPreparingDeadline
        orderLatestDeliveryDeadline
        orderLatestPreparingDeadline
        orderPreparingDeadline
        orderPreparingDelay
        preOrder
        preparationTime
        promoCode {
          afterGainAmount
          beforeGainAmount
          code
          createdAt
          description
          expiryAt
          gainAmount
          gainStage
          gainType
          id
          minOrderAmount
          restaurantName
          restaurantUID
          title
          type
          useAble
          useAbleForRestaurant
          usedAt
        }
        refund {
          amount
        }
        restaurant {
          contactMobileNumber
          deliveryType
          name
          uid
        }
        restaurantDeliveryType
        review {
          createdAt
          id
          pointsEarned
        }
        smallAmountFee
        status
        subTotal
        tip {
          amount
          createdAt
        }
        total
        totalPromoCodeAmount
        uid
        usedPoints
        userCanCall
        userCanRate
        userCanReOrder
        userCanTip
      }
    }
    
    `;

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    pastOrders: build.query<PastOrdersQuery, PastOrdersQueryVariables | void>({
      query: (variables) => ({ document: PastOrdersDocument, variables }),
    }),
  }),
});

export { injectedRtkApi as pastOrdersApi };
