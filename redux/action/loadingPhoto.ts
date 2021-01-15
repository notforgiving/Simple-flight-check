import {IActionObject} from './interfaceType'

export enum actionsForPhoto {
  LOAD_PHOTO = "LOAD_PHOTO",
  GET_PHOTO = "GET_PHOTO"
}

export const getPhoto = (data:Array<Object>):IActionObject => ({
  type: actionsForPhoto.GET_PHOTO,
  payload: data
});

export const loadPhoto = () => {
  return {
    type: actionsForPhoto.LOAD_PHOTO,
  };
};
