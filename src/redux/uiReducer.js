import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
  name: "ui",
  initialState: {
    loader: false,
    inputValue: ''
  },
  reducers: {
    setLoader: (state, action) => {
      state.loader = action.payload;
    },
    setInput: (state, action) => {
      state.inputValue = action.payload;
    }
  }
});

export const {setLoader, setInput} = uiSlice.actions; 

export default uiSlice.reducer;