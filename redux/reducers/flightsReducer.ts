import {IActionObject} from '../action/interfaceType'
import { actionsForFlight} from "../action/loadingflights";

const initialState = {
  data:[]
};

const flightsReducer = (state = initialState, action:IActionObject) => {
  switch (action.type) {
    case actionsForFlight.GET_FLIGHTS:
      return {
        ...state,
        data:action.payload,
      }
    default:
      return state;
  }
};

export default flightsReducer;
