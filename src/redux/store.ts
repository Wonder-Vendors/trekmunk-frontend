import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./reducers/counterSlice";
import userSlice from "./reducers/userSlice";
import userRequestReducer from "./reducers/userRequestReducer";
import {
    PERSIST,
    REGISTER,
    REHYDRATE,
    PAUSE,
    PURGE,
    FLUSH,
    persistReducer,
    persistStore,
  } from "redux-persist";

import { createPersistStorage } from "./storage";

const persistConfig = {
    key: "root",
    storage:createPersistStorage(),
    version: 1,
  };
const persistedReducer = persistReducer(persistConfig, userSlice);

export const store = configureStore({
    reducer:{
        counter:counterSlice,
        user:persistedReducer,
        userRequest:userRequestReducer        
    },
    middleware:(getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store)