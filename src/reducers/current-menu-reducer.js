import * as actions from "../actions/ActionTypes";

export default (state = {}, action) => {
  const { name, brand, alcontent, price, pints, id, key } = action;
  switch (action.type) {
    case actions.ADD_BEVERAGE :
      return {...state,
        [id]: {
          name: name,
          brand: brand,
          alcontent: alcontent,
          price: price,
          pints: pints,
          id: id,
          key: key
        }};
    case actions.DELETE_BEVERAGE :
      const newState = { ...state };
      delete newState[id];
      return newState;
    default: 
      return state;
  }
}