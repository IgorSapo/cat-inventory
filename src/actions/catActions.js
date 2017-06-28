import * as types from  './actionTypes';
import catApi from '../api/catApi';

export const loadCats = () => dispatch =>
  catApi
    .getAllCats()
    .then(cats => dispatch(loadCatsSuccess(cats)))
    .catch(error => dispatch(loadCatsFailure(error)));

export const loadCatsSuccess = (cats) => ({
  type: types.LOAD_CATS_SUCCESS,
  cats
});

export const loadCatsFailure = (error) => ({
  type: types.LOAD_CATS_FAILURE,
  error
});

export const updateCat = (cat) => dispatch =>
  catApi
    .updateCat(cat)
    .then(cat => dispatch(updateCatSuccess(cat)))
    .catch(error => dispatch(updateCatFailure(error)));

export const updateCatSuccess = (cat) => ({
  type: types.UPDATE_CAT_SUCCESS,
  cat
});

export const updateCatFailure = cat => ({
  type: types.UPDATE_CAT_FAILURE,
  error
})