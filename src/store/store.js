import { configureStore } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import contactsReducer from "../features/contact/contactsSlice";
import filterSlice from "features/filter/filterSlice";
import authSlice from '../features/auth/auth-slice'




const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};





export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authSlice),
    contacts: contactsReducer,
    filter: filterSlice,
    },
  middleware (getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
  devTools: process.env.NODE_ENV === 'development',
    
});


export const persistor = persistStore(store);

