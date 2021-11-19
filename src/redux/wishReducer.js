import { createSlice } from "@reduxjs/toolkit";

export const wishSlice = createSlice({
  name: "games",
  initialState: {
    list: [],
  },
  reducers: {

   setWishList: (state, action) => {
    state.list = [...state.list, action.payload]
   }

  }
});

export const {setWishList} = wishSlice.actions; 

export default wishSlice.reducer;