

import { combineReducers } from 'redux'
import signupReducer from "./signup";
import signInReducer from "./signIn"; 
import todoReducer from "./todo";

const rootReducer = combineReducers({
  signUp: signupReducer,
  signIn: signInReducer,
  todo: todoReducer 
})

export default rootReducer;