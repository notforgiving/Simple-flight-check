import { combineReducers } from "redux";
import photoReducer from './photoReducer'
import flightsReducer from './flightsReducer'
import authReducer from './authReducer'
import errorReducer from './errorReducer'

const rootReducer = combineReducers({
  "photo":photoReducer,
  "flights":flightsReducer,
  "authorization":authReducer,
  "errors":errorReducer
});

export default rootReducer;
