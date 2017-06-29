import * as types from '../actions/actionTypes';
import initialState from './initialState';
import { browserHistory } from 'react-router-dom';

const catReducer = (state = initialState.cats, action) => {
  console.log(action);
  switch(action.type) {
    case types.LOAD_CATS_SUCCESS:
      console.log(4);
      return action.cats;
    case types.UPDATE_CAT_SUCCESS:
      console.log(5);
      return [
        ...state.filter(cat => cat.id != action.cat.id),
        Object.assign({}, action.cat)
      ];
    case types.CREATE_CAT_SUCCESS:
      console.log(7)
      // browserHistory.push(`/cats/${action.cat.id}`);
      // const newState = state.concat(Object.assign({}, action.cat));
      // return newState;
      return [
        ...state.filter(cat => cat.id !== action.cat.id),
        Object.assign({}, action.cat)
      ]
    case types.DELETE_CAT_SUCCESS:
      return [...state.filter(cat => cat.id != action.cat.id)]
    default:
      console.log(6);
      return state;
  }
}

export default catReducer;
