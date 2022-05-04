import * as Types from "../generated/graphql";

import { api } from "../app/api";
export type RestaurantsQueryVariables = Types.Exact<{ [key: string]: never }>;

export type RestaurantsQuery = {
  __typename?: "Query";
  restaurants?: Array<{
    __typename?: "SearchRestaurant";
    uid?: string | null;
    name?: string | null;
  } | null> | null;
};

export const RestaurantsDocument = `
    query restaurants {
  restaurants(index: 0, limit: 10, lat: 51.46179, lon: -0.143524, delivery: true) {
    uid
    name
  }
}
    `;

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    restaurants: build.query<
      RestaurantsQuery,
      RestaurantsQueryVariables | void
    >({
      query: (variables) => ({ document: RestaurantsDocument, variables }),
    }),
  }),
});

export { injectedRtkApi as restaurantsApi };
