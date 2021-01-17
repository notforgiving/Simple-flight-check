import {IActionObject,actionsForAuth} from '../action/auth'

const initialState = {
  login: localStorage.getItem("spaceName")
    ? JSON.parse(`${localStorage.getItem("auth")}`)
    : false,
  spaceName: localStorage.getItem("spaceName")
    ? localStorage.getItem("spaceName")
    : null,
};

const authReducer = (state = initialState, action:IActionObject) => {
  switch (action.type) {
    case actionsForAuth.LOG_IN:
      localStorage.setItem("auth", 'true');
      localStorage.setItem("spaceName", action.payload.space);
      return {
        ...state,
        login: action.payload.flag,
        spaceName: action.payload.space,
      };
    case actionsForAuth.LOG_OUT:
      localStorage.setItem("auth", 'false');
      localStorage.setItem("spaceName", 'null');
      return {
        ...state,
        login: action.payload.flag,
        spaceName: action.payload.space,
      };
    default:
      return state;
  }
};

export default authReducer;
