import * as Types from "../generated/graphql";

import { api } from "../app/api";
export type LoginWithEmailAndPasswordMutationVariables = Types.Exact<{
  [key: string]: never;
}>;

export type LoginWithEmailAndPasswordMutation = {
  __typename?: "Mutation";
  loginWithEmail?: { __typename?: "Token"; token?: string | null } | null;
};

export const LoginWithEmailAndPasswordDocument = (variables) => {
  console.log(variables);
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
    }),
  }),
});

export { injectedRtkApi as api };
