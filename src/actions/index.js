import * as actions from "./ActionTypes";

export const toggleForm = () => ({
  type: actions.TOGGLE_FORM
});

export const addBeverage = (beverage) => {
  const {name, brand, alcontent, pints, id, price, key} = beverage;
  return {
    type: actions.ADD_BEVERAGE,
    id: id,
    name: name,
    brand: brand,
    alcontent: alcontent,
    pints: pints,
    price: price,
    key: key
  }
};

export const deleteBeverage = id => ({
  type: actions.DELETE_BEVERAGE,
  id
});

export const toggleDetailsOff = () => ({
  type: actions.TOGGLE_DETAILS_OFF
});

export const toggleDetailsOn = id => ({
  type: actions.TOGGLE_DETAILS_ON,
  id
})