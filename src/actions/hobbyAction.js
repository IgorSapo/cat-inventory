import * as types from './actionTypes';
import HobbyApi from '../api/hobbyApi';

export const loadHobbiesSuccess = hobbies => ({
  type: types.LOAD_HOBBIES_SUCCESS,
  hobbies
});

export const loadHobbiesFailure = error => ({
  type: types.LOAD_HOBBIES_FAILURE,
  error
});

export const loadHobbies = () => dispatch =>
  HobbyApi
    .getAllHobbies()
    .then(hobbies => dispatch(loadHobbiesSuccess(hobbies)))
    .catch(error => dispatch(loadHobbiesFailure(error)));
