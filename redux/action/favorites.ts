export enum actionsForFavorites {
  INC_FAV = "INC_FAV",
  DEC_FAV = "DEC_FAV"
}

export const setFavorites = (id:number):any => ({
  type: actionsForFavorites.INC_FAV,
  payload:id
});

export const delFavorites = (id:number):any => ({
  type: actionsForFavorites.DEC_FAV,
  payload:id
});

