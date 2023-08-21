import { ActionTypes } from "../ActionTypes";

const initialState = {
  loading: false,
  popularFilms: [],
  genres: [],
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_MOVIES:
      return {
        ...state,
        popularFilms: action.payload,
      };
    case ActionTypes.SET_GENRES:
      return {
        ...state,
        genres: action.payload,
      };
    default:
      return state;
  }
};
