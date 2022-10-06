import * as actionTypes from "../actions/actionTypes";

const initialState = {
  categories: [],
  images : [],
};

const MainReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_IMAGES:
      return {
        ...state,
        images: action.payload,
      };
      case actionTypes.SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
};

export default MainReducer;
