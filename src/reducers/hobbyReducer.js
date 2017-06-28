import * as types from '../actions/actionTypes';
import initialState from './initialState';

const hobbies = (state = initialState.hobbies, action) => {
  switch(action.type) {
    case types.LOAD_HOBBIES_SUCCESS:
      return action.hobbies;
    default:
      return state;
  }
}

export default hobbies;
