import { createSlice } from "@reduxjs/toolkit";

export const wishSlice = createSlice({
  name: "games",
  initialState: {
    wishlist: [],
  },
  reducers: {

   setWishList: (state, action) => {
    state.wishlist.push(action.payload)
   }

  }
});

export const {setWishList} = wishSlice.actions; 

export default wishSlice.reducer;