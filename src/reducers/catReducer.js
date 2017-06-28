import * as types from '../actions/actionTypes';
import initialState from './initialState';

const catReducer = (state = initialState.cats, action) => {
  switch(action.type) {
    case types.LOAD_CATS_SUCCESS:
      return action.cats;
    case types.UPDATE_CAT_SUCCESS:
      return [
        ...state.filter(cat => cat.id != action.cat.id),
        Object.assign({}, action.cat)
      ];
    default:
      return state;
  }
}

export default catReducer;
