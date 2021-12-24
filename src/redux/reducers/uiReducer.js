import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
  name: "ui",
  initialState: {
    loader: false,
    wishLoader: false,
    wishDeleteLoader : false,
    wishUpdateLoader: false,
    inputValue: '',
    open: false
  },
  reducers: {
    setLoader: (state, action) => {
      state.loader = action.payload;
    },
    setWishLoader: (state, action) => {
      state.wishLoader = action.payload;
    },
    setWishDeleteLoader: (state, action) => {
      state.wishDeleteLoader = action.payload;
    },
    setWishUpdateLoader: (state, action) => {
      state.wishUpdateLoader = action.payload;
    },
    setInput: (state, action) => {
      state.inputValue = action.payload;
    },
    setOpen: (state, action) => {
      state.open = action.payload
    }
  }
});

export const {setLoader, setInput, setOpen, setWishLoader, setWishDeleteLoader, setWishUpdateLoader } = uiSlice.actions; 

export default uiSlice.reducer;