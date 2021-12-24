import { createSlice } from "@reduxjs/toolkit";

export const authReducer = createSlice({
  name: "auth",
  initialState: {
    checkingLogin: false,
    CheckingRegister: false,
    uid: null,
    name: null
  },
  reducers: {
    setLogin: (state, action) => {
      state.uid = action.payload.uid
      state.name = action.payload.name
    },
    setCheckingLogin: (state, action) => {
      state.checkingLogin = action.payload;
    },
    setCheckingRegister: (state, action) => {
      state.CheckingRegister = action.payload;
    },
  }
});

export const {setLogin, setCheckingLogin, setCheckingRegister } = authReducer.actions; 

export default authReducer.reducer;