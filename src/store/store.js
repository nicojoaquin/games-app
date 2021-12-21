import { configureStore } from '@reduxjs/toolkit'
import gamesReducer from '../redux/gamesReducer';
import wishReducer from '../redux/wishReducer';
import uiReducer from '../redux/uiReducer';
import authReducer from '../redux/authReducer';

export const store = configureStore({
  reducer:{
    games: gamesReducer,
    wishList: wishReducer,
    ui: uiReducer,
    auth: authReducer
  }
});