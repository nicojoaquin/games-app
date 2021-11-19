import { createSlice } from "@reduxjs/toolkit";

export const gamesSlice = createSlice({
  name: "games",
  initialState: {
    list: [],
    game: [],
    loader: false
  },
  reducers: {
   setGamesList: (state, action) => {
    state.list = action.payload
   },
   setGame: (state, action) => {
     state.game = action.payload
   },
   setLoader: (state, action) => {
     state.loader = action.payload
   }
  }
});

export const {setGamesList, setGame, setLoader} = gamesSlice.actions; 

export default gamesSlice.reducer;
