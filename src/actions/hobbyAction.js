import * as types from './actionTypes';
import HobbyApi from '../api/hobbyApi';

export const loadHobbiesSuccess = hobbies => ({
  type: types.LOAD_HOBBIES_SUCCESS,
  hobbies
});

export const loadHobbiesFailure = hobbies => ({
  type: types.LOAD_HOBBIES_FAILURE,
  hobbies
});

export const loadHobbies = () => dispatch =>
  HobbyApi
    .getAllHobbies()
    .then(hobbies => dispatch(loadHobbiesSuccess(hobbies)))
    .catch(error => dispatch(loadHobbiesFailure(error)));
