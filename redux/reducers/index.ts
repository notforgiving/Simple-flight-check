import { combineReducers } from "redux";
import photoReducer from './photoReducer'

const rootReducer = combineReducers({
  "photo":photoReducer
});

export default rootReducer;
