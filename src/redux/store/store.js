import { configureStore } from '@reduxjs/toolkit'
import gamesReducer from './../reducers/gamesReducer';
import wishReducer from './../reducers/wishReducer';
import uiReducer from './../reducers/uiReducer';
import authReducer from './../reducers/authReducer';

export const store = configureStore({
  reducer:{
    games: gamesReducer,
    wishList: wishReducer,
    ui: uiReducer,
    auth: authReducer
  }
});