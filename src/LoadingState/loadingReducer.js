import { loadingTypes } from "./LodingState";

export const loadingReducer = (state, action) => {
  switch (action.type) {
    case loadingTypes.LOADING_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      };
    case loadingTypes.LOADING_CONTINUE:
      return {
        ...state,
        error: false,
        loading: true,
      };
    case loadingTypes.LOADING_SUCCESSFULL:
      return {
        ...state,
        error: false,
        loading: false,
        people: action.payload,
      };
    default:
      return state;
  }
};
