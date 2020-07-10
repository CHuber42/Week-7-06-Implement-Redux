import * as actions from "../actions/ActionTypes";

export default currentMenu = (state = {}, action) => {
  const { name, brand, alcontent, price, pints, id, key } = action;
  switch (action.type) {
    case actions.ADD_BEVERAGE :
      return {...state,
        [id]: {
          name: action.name,
          brand: action.brand,
          alcontent: action.alcontent,
          price: action.price,
          pints: action.pints,
          id: action.id,
          key: action.key
        }};
    case actions.DELETE_BEVERAGE :
      const newState = { ...state };
      delete newState[id];
      return newState;
    default: 
      return state;
  }
}