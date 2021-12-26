import { createSlice } from "@reduxjs/toolkit";

export const wishSlice = createSlice({
  name: "wishList",
  initialState: {
    wishList: [],
    wishListLoader: false
  },
  reducers: {
   setWishList: (state, action) => {
    state.wishList = [...state.wishList, action.payload];
   },
   setLoadWishList: (state, action) => {
    state.wishList = action.payload;
   },
   setUpdateWishList: (state, action) => {
     state.wishList = state.wishList.map(game => ( game.id === action.payload.id ) ? {...game, played: true} : game)
   },
   setDeleteWishList: (state, action) => {
     state.wishList = state.wishList.filter( game => game.id !== action.payload);
   },
   setWishListLoader: (state,action) => {
     state.wishListLoader = action.payload;
   }
  }
});

export const {setWishList, setLoadWishList, setUpdateWishList, setDeleteWishList, setWishListLoader} = wishSlice.actions; 

export default wishSlice.reducer;