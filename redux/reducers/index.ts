import { combineReducers } from "redux";
import photoReducer from './photoReducer'
import flightsReducer from './flightsReducer'

const rootReducer = combineReducers({
  "photo":photoReducer,
  "flights":flightsReducer
});

export default rootReducer;
