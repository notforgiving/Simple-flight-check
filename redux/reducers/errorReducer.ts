import {IActionError} from '../action/interfaceType'
import {actionsForError} from './../action/error'

const initialState = '';

const errorReducer = (state = initialState, action:IActionError) => {
  switch (action.type) {
    case actionsForError.NEW_ERROR:
      return action.payload
    default:
      return state;
  }
};

export default errorReducer;
