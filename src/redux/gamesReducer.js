import { createSlice } from "@reduxjs/toolkit";

export const gamesSlice = createSlice({
  name: "games",
  initialState: {
    list: [],
    game: {},
  },
  reducers: {
   setGamesList: (state, action) => {
    state.list = action.payload
    state.game = {};
   },
   setGame: (state, action) => {
     state.game = action.payload
   }
  }
});

export const { setGamesList, setGame } = gamesSlice.actions; 

export default gamesSlice.reducer;
