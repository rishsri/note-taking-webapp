
import { createSlice } from "@reduxjs/toolkit";

const usersInitialState = {
  users: [],
  isSignUpProgress: false
}

export const signUpSlice = createSlice({
  name: "signUp",
  initialState: usersInitialState,
  reducers: {
    signUpLoading: (state,) => {
      state.isSignUpProgress = true;
      
    },
    signUpSuccess: (state, { payload }) => {
      state.isSignUpProgress = false;
     state.users.push(payload)
    },

    signUpFailure: (state) => {
      state.isSignUpProgress = false;
    },
  }
})

export const {
  signUpLoading,
  signUpSuccess,
  signUpFailure
} = signUpSlice.actions;

export default signUpSlice.reducer;