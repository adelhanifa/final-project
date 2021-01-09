import { combineReducers } from 'redux';
import apiReducer from "./apiReducer";
import authReducer from './authReducer';
export default combineReducers({
  auth: authReducer,
  api:apiReducer
});