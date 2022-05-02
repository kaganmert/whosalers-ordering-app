import * as Types from "../generated/graphql";

import { api } from "../app/api";
export type UserQueryVariables = Types.Exact<{ [key: string]: never }>;

export type UserQuery = {
  __typename?: "Query";
  user?: {
    __typename?: "User";
    createdAt?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    firebaseUserUid?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    mobileNumber?: string | null;
    points?: number | null;
    smsVerified?: boolean | null;
    uid?: string | null;
    addresses?: Array<{
      __typename?: "UserAddress";
      addressIconId?: number | null;
      addressLine1: string;
      addressLine2: string;
      adminWard: string;
      default: boolean;
      flatNumber: string;
      fullName: string;
      geoEnabled: boolean;
      id: number;
      lat: number;
      lon: number;
      postalCode: string;
      slugAdminWard: string;
      tips: string;
      title: string;
    } | null> | null;
    profilePicture?: {
      __typename?: "Picture";
      alt?: string | null;
      bundle: string;
      height: number;
      id: number;
      title?: string | null;
      url: string;
      width: number;
    } | null;
  } | null;
};

export const UserDocument = `
    query user {
  user {
    addresses {
      addressIconId
      addressLine1
      addressLine2
      adminWard
      default
      flatNumber
      fullName
      geoEnabled
      id
      lat
      lon
      postalCode
      slugAdminWard
      tips
      title
    }
    createdAt
    email
    emailVerified
    firebaseUserUid
    firstName
    lastName
    mobileNumber
    points
    profilePicture {
      alt
      bundle
      height
      id
      title
      url
      width
    }
    smsVerified
    uid
  }
}
    `;

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    user: build.query<UserQuery, UserQueryVariables | void>({
      query: (variables) => ({ document: UserDocument, variables }),
    }),
  }),
});

export { injectedRtkApi as userApi };
