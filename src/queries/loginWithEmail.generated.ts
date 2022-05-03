import { Cookies } from "react-cookie";

import * as Types from "../generated/graphql";
import { encrypt } from "../utils/crypter";
import { GlobalKeys } from "../utils/constants";

import { api } from "../app/api";

const cookies = new Cookies();
const expiresDate = new Date();

export type LoginWithEmailAndPasswordMutationVariables = Types.Exact<{
  [key: string]: never;
}>;

export type LoginWithEmailAndPasswordMutation = {
  __typename?: "Mutation";
  loginWithEmail?: { __typename?: "Token"; token?: string | null } | null;
};

export const LoginWithEmailAndPasswordDocument = (variables) => {
  return `
    mutation loginWithEmailAndPassword {
  loginWithEmail(email: "${variables.email}", password: "${variables.password}") {
    token
  }
}
    `;
};

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    loginWithEmailAndPassword: build.mutation<
      LoginWithEmailAndPasswordMutation,
      LoginWithEmailAndPasswordMutationVariables | void
    >({
      query: (variables) => ({
        document: LoginWithEmailAndPasswordDocument(variables),
        variables,
      }),
      onQueryStarted: async (arg: any, { dispatch, queryFulfilled }: any) => {
        await queryFulfilled
          .then((loginData: any) => {
            expiresDate.setMinutes(expiresDate.getMinutes() + 180);
            cookies.set(
              GlobalKeys.LoggedUserKey,
              encrypt(loginData.data.loginWithEmail),
              {
                expires: expiresDate,
              }
            );
          })
          .catch(() => {
            console.log("Error cookies.");
          });
      },
    }),
  }),
});

export { injectedRtkApi as loginWithEmailApi };
