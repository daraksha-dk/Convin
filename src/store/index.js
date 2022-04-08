import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { logger } from "redux-logger";

import mainSlice from "./mainSlice";

const rootReducer = combineReducers({
  main: mainSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger),
  // devTools: process.env.NODE_ENV !== "production",
});
