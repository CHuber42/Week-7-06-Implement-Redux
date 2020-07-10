import currentMenuReducer from '../../reducers/current-menu-reducer';

describe("currentMenuReducer", () => {

  const testBeverage = {
    name: "Root Beer",
    brand: "Washington Valley",
    alcontent: "0",
    price: "4.99",
    pints: 124,
    id: "1234",
    key: 0
    }

  it("should return an empty/default state when no action applied", () => {
    expect(currentMenuReducer({}, {type: null})).toEqual({});
  });

  it("should return an updated menu when a keg is added via ADD_BEVERAGE", () => {
    expect(currentMenuReducer({}, {...testBeverage, type: "ADD_BEVERAGE"})).toEqual({"1234": testBeverage});
  });

  it("should delete a keg from the menu when supplied an ID and DELETE_BEVERAGE action type", () => {
    currentMenuReducer({}, {...testBeverage, type: "ADD_BEVERAGE"});
    expect(currentMenuReducer({}, {id: "1234", type: "DELETE_BEVERAGE"})).toEqual({});
  });
});