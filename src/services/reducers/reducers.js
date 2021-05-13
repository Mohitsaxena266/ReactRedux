import {ADD_TO_CART} from '../constants';
const initialState = {
  carddata: [],
};

export default (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log('action value', action);
      return [...state, {carddata: action.data}];
    default:
      return state;
  }
};
