import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { graphqlRequestBaseQuery } from "@rtk-query/graphql-request-base-query";
import { GraphQLClient } from "graphql-request";
import { getLoggedUser } from "../utils/functions";

const client = new GraphQLClient(`${process.env.REACT_APP_GRAPHQL_HOST}`);

export const api = createApi({
  baseQuery: graphqlRequestBaseQuery({
    client,
    prepareHeaders: (headers, { getState }) => {
      const currentUser = getLoggedUser();
      if (currentUser && currentUser.token) {
        headers.set("Authorization", `Bearer ${currentUser.token}`);
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
});
