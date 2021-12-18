import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
  name: "ui",
  initialState: {
    loader: false,
    inputValue: '',
    open: false
  },
  reducers: {
    setLoader: (state, action) => {
      state.loader = action.payload;
    },
    setInput: (state, action) => {
      state.inputValue = action.payload;
    },
    setOpen: (state, action) => {
      state.open = action.payload
    }
  }
});

export const {setLoader, setInput, setOpen} = uiSlice.actions; 

export default uiSlice.reducer;