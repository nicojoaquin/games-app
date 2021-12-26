import { createSlice } from "@reduxjs/toolkit";

export const wishSlice = createSlice({
  name: "wishList",
  initialState: {
    wishList: [],
  },
  reducers: {
   setWishList: (state, action) => {
    state.wishList = [action.payload, ...state.wishList];
   },
   setLoadWishList: (state, action) => {
    state.wishList = action.payload;
   },
   setUpdateWishList: (state, action) => {
     state.wishList = state.wishList.map(game => ( game.id === action.payload.id ) ? {...game, played: true} : game)
   },
   setDeleteWishList: (state, action) => {
     state.wishList = state.wishList.filter( game => game.id !== action.payload);
   }
  }
});

export const {setWishList, setLoadWishList, setUpdateWishList, setDeleteWishList} = wishSlice.actions; 

export default wishSlice.reducer;