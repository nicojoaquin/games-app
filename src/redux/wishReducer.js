import { createSlice } from "@reduxjs/toolkit";

export const wishSlice = createSlice({
  name: "wishList",
  initialState: {
    wishList: []
  },
  reducers: {
   setWishList: (state, action) => {
    state.wishList = [...state.wishList, action.payload]
   },
   setLoadWishList: (state, action) => {
    state.wishList = [...action.payload]      
   },
   setDeleteWishList: (state, action) => {
     state.wishList = state.wishList.filter( game => game.id !== action.payload);
   }
  }
});

export const {setWishList, setDeleteWishList, setLoadWishList} = wishSlice.actions; 

export default wishSlice.reducer;