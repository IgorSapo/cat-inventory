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

export const updateCatFailure = error => ({
  type: types.UPDATE_CAT_FAILURE,
  error
})

export const createCat = cat => dispatch =>
  catApi
    .createCat(cat)
    .then(cat => dispatch(createCatSuccess(cat)))
    .catch(error => {
      console.log('ERROR!');
      console.log(error);
      dispatch(createCatFailure(error));
    });

export const createCatSuccess = cat => ({
  type: types.CREATE_CAT_SUCCESS,
  cat
});

export const createCatFailure = error => ({
  type: types.CREATE_CAT_FAILURE,
  error
});

export const deleteCat = cat => dispatch =>
  catApi
    .deleteCat(cat)
    .then(cat => dispatch(deleteCatSuccess(cat)))
    .catch(error => {
      console.log('ERROR in deleteCat thunk!');
      console.log(error);
      dispatch(deleteCatFailure(error));
    });

export const deleteCatSuccess = cat => ({
  type: types.DELETE_CAT_SUCCESS,
  cat
});

export const deleteCatFailure = error => ({
  type: types.DELETE_CAT_FAILURE,
  error
});