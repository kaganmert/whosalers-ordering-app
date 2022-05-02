import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { pastOrdersApi } from "../queries/pastOrders.generated";
import { loginWithEmailApi } from "../queries/loginWithEmail.generated";

export const store = configureStore({
  reducer: {
    [loginWithEmailApi.reducerPath]: loginWithEmailApi.reducer,
    pastOrdersApi: pastOrdersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loginWithEmailApi.middleware),
});

setupListeners(store.dispatch);
