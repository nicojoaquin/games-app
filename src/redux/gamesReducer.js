import { createSlice } from "@reduxjs/toolkit";

export const gamesSlice = createSlice({
  name: "games",
  initialState: {
    list: []
  },
  reducers: {

   setGamesList: (state, action) => {
    state.list = action.payload
   }

  }
});

export const {setGamesList} = gamesSlice.actions; 

export default gamesSlice.reducer;
