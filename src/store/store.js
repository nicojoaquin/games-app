import { configureStore } from '@reduxjs/toolkit'
import gamesReducer from '../redux/reducers/gamesReducer';
import wishReducer from '../redux/reducers/wishReducer';
import uiReducer from '../redux/reducers/uiReducer';
import authReducer from '../redux/reducers/authReducer';

export const store = configureStore({
  reducer:{
    games: gamesReducer,
    wishList: wishReducer,
    ui: uiReducer,
    auth: authReducer
  }
});