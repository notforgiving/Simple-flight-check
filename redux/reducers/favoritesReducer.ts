import { actionsForFavorites } from "./../action/favorites";

const initialState: any[] = [];

const favoritesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionsForFavorites.INC_FAV:
      return [...state, action.payload];
    case actionsForFavorites.DEC_FAV:
      const newState = state.splice(state.indexOf(action.payload),1)
      return newState;
    default:
      return state;
  }
};

export default favoritesReducer;
