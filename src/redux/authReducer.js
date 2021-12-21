import { createSlice } from "@reduxjs/toolkit";

export const authReducer = createSlice({
  name: "auth",
  initialState: {
    checking: true,
    uid: null,
    name: null
  },
  reducers: {
    setChecking: (state) => {
      state.checking = false
    },
    setLogin: (state, action) => {
      state.checking = false
      state.uid = action.payload.uid
      state.name = action.payload.name
    },
    setLogout: (state) => {
      state.checking = false;
    }
  }
});

export const {setLogin, setChecking, setLogout} = authReducer.actions; 

export default authReducer.reducer;