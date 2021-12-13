import { createSlice } from "@reduxjs/toolkit";

export const wishSlice = createSlice({
  name: "games",
  initialState: {
    list: [],
  },
  reducers: {
   setWishList: (state, action) => {
    const exist = state.list.find( (game) => game.id === action.payload.id )

    if(exist) {
      return alert('Ya existe este juego en tu lista');
    }

    state.list = [...state.list, action.payload]
   }
  }
});

export const {setWishList} = wishSlice.actions; 

export default wishSlice.reducer;