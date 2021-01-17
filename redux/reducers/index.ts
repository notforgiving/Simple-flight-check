import { combineReducers } from "redux";
import photoReducer from './photoReducer'
import flightsReducer from './flightsReducer'
import authReducer from './authReducer'
import errorReducer from './errorReducer'
import favoritesReducer from './favoritesReducer'

const rootReducer = combineReducers({
  "photo":photoReducer,
  "flights":flightsReducer,
  "authorization":authReducer,
  "errors":errorReducer,
  "favorites":favoritesReducer
});

export default rootReducer;
