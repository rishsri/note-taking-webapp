
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    email: '',
    password: ''
  },
  isSignInProgress: false
}

export const signInSlice = createSlice({
  name: "signIn",
  initialState: initialState,
  reducers: {
    signInLoading: (state,) => {
      state.isSignInProgress = true;
      
    },
    signInSuccess: (state, { payload }) => {
      state.isSignInProgress = false;
     state.user = payload
    },

    signInFailure: (state) => {
      state.isSignInProgress = false;
    },
  }
})

export const {
  signInLoading,
  signInSuccess,
  signInFailure
} = signInSlice.actions;

export default signInSlice.reducer;