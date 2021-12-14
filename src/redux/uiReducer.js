import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
  name: "ui",
  initialState: {
    loader: false
  },
  reducers: {
    setLoader: (state, action) => {
      state.loader = action.payload
    }
  }
});

export const {setLoader} = uiSlice.actions; 

export default uiSlice.reducer;