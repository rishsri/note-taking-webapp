// reducers.js

import { combineReducers } from '@reduxjs/toolkit'
import notesReducer from './notesSlice'
import userReducer from './userSlice'

export default combineReducers({
  notes: notesReducer,
  user: userReducer
})