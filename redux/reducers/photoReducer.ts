import {IActionPhotoObject} from '../action/loadingPhoto'
import { actionsForPhoto} from "../action/loadingPhoto";

const initialState = {
  data:[]
};

const photoReducer = (state = initialState, action:IActionPhotoObject) => {
  switch (action.type) {
    case actionsForPhoto.GET_PHOTO:
      return {
        ...state,
        data:action.payload,
      }
    default:
      return state;
  }
};

export default photoReducer;
