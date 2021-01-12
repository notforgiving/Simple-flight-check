export enum actionsForPhoto {
  LOAD_PHOTO = "LOAD_PHOTO",
  GET_PHOTO = "GET_PHOTO"
}

export interface IActionPhotoObject{
  type:string,
  payload:object
}

export const getPhoto = (data:Array<Object>):IActionPhotoObject => ({
  type: actionsForPhoto.GET_PHOTO,
  payload: data
});

export const loadPhoto = () => {
  return {
    type: actionsForPhoto.LOAD_PHOTO,
  };
};
