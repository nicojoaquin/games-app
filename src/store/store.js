import { configureStore } from '@reduxjs/toolkit'
import gamesReducer from '../redux/gamesReducer';
import wishReducer from '../redux/wishReducer';

export const store = configureStore({
  reducer:{
    games: gamesReducer,
    wishList: wishReducer,
  }
});