import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { loginWithEmailApi } from "../queries/loginWithEmail.generated";
import { pastOrdersApi } from "../queries/pastOrders.generated";
import { userApi } from "../queries/user.generated";

export const store = configureStore({
  reducer: {
    [loginWithEmailApi.reducerPath]: loginWithEmailApi.reducer,
    pastOrdersApi: pastOrdersApi.reducer,
    userApi: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loginWithEmailApi.middleware),
});

setupListeners(store.dispatch);
