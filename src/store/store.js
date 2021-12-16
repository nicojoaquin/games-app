import { configureStore } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import gamesReducer from '../redux/gamesReducer';
import wishReducer from '../redux/wishReducer';
import uiReducer from '../redux/uiReducer';

const persistConfig = {
  key: 'root',
  storage,
};

export const store = configureStore({
  reducer:{
    games: gamesReducer,
    wishList: persistReducer(persistConfig, wishReducer) ,
    ui: uiReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});