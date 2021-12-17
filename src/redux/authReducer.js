import { createSlice } from "@reduxjs/toolkit";

export const authReducer = createSlice({
  name: "ui",
  initialState: {
    checking: true,
    uid: null,
    name: null
  },
  reducers: {
    setChecking: (state, action) => {
      return state
    },
    setCheckingFinish: (state, atcion) => {
      return state
    },
    setStartLogin: (state, action) => {
      return state
    },
    setLogin: (state, action) => {
      state.checking = false
      state.uid = action.payload.uid
      state.name = action.payload.name
    },
    setStartRegister: (state, action) => {
      return state
    },
    setStartRenew: (state, action) => {
      return state
    },
    setLogout: (state, action) => {
      return state
    }
  }
});

export const {setLogin} = authReducer.actions; 

export default authReducer.reducer;