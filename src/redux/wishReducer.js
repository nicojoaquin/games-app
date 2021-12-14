import { createSlice } from "@reduxjs/toolkit";
import { addAlert } from "../components/assets/alert";

export const wishSlice = createSlice({
  name: "games",
  initialState: {
    list: [],
  },
  reducers: {
   setWishList: (state, action) => {
    const exist = state.list.find( (game) => game.id === action.payload.id )

    if(exist) {
      return addAlert("It's already on your wishlist!", "error");
    }

    state.list = [...state.list, action.payload]
    addAlert("Added to wishlist!", "success");
   }
  }
});

export const {setWishList} = wishSlice.actions; 

export default wishSlice.reducer;