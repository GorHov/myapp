import axios from "axios";
import * as actionTypes from "./actionTypes";


export const getCategories = () => async (dispatch) => {

  try {
    const resp = await axios.get('https://api.thecatapi.com/v1/categories ');
    if (resp.status === 200) {
      dispatch({
        type: actionTypes.SET_CATEGORIES,
        payload: resp.data,
      });
    }
  } catch (err) {
    console.log('error');
  }
};

export const getImages = () => async (dispatch) => {

  try {
    const resp = await axios.get('https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=1 ');
    if (resp.status === 200) {
      dispatch({
        type: actionTypes.SET_IMAGES,
        payload: resp.data,
      });
    }
  } catch (err) {
    console.log('error');
  }
};

