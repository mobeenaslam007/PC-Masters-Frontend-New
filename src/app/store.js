import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import productsReducer from "./slices/products";
import settingsReducer from "./slices/settings";
import userReducer from "./slices/user";

// export const store = configureStore({
//   reducer: {
//      products: productsReducer,
//      user: userReducer,
//      settings: settingsReducer
//   },
// });

const reducers = combineReducers({
  
    products: productsReducer,
    user: userReducer,
    settings: settingsReducer

});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

// export const store = configureStore({
//   reducer: persistedReducer,
//   // devTools: process.env.NODE_ENV !== 'production',
//   middleware: [thunk],
// });

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});



