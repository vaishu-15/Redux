const {combineReducers} = require('@reduxjs/toolkit');
import authReducer from './authSlice'

const reducers = combineReducers({
  auth: authReducer,
});

export default reducers;