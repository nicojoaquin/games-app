import { createSlice } from "@reduxjs/toolkit";

export const gamesSlice = createSlice({
  name: "games",
  initialState: {
    list: [],
    game: {},
    filteredGames: [],
  },
  reducers: {
   setGamesList: (state, action) => {
    state.list = action.payload
    state.game = {};
   },
   setGame: (state, action) => {
     state.game = action.payload;
   },
   setSearch: (state, action) => {
     state.filteredGames = state.list.filter( game => game.title.toLowerCase().includes(action.payload.trim().toLowerCase()));
   }
  }
});

export const { setGamesList, setGame, setSearch } = gamesSlice.actions; 

export default gamesSlice.reducer;
