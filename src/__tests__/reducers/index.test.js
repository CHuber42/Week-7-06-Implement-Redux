import * as actions from "./../../actions";

describe("rootReducer", () => {

  const testBeverage = {
    name: "Root Beer",
    brand: "Washington Valley",
    alcontent: "0",
    price: "4.99",
    pints: 124,
    id: "1234",
    key: 0
    }

  it("should correctly convert actions.toggleForm() to a state change via reducer", () => {
    expect(actions.toggleForm()).toEqual({type: "TOGGLE_FORM"});
  });

  it("should correctly convert actions.addBeverage(beverage) to a state change via reducer", () => {
    expect(actions.addBeverage(testBeverage)).toEqual({...testBeverage, type: "ADD_BEVERAGE"});
  });

  it("should correctly convert actions.deleteBeverage(id) to a state change via reducer", () => {
    expect(actions.deleteBeverage("1234")).toEqual({id: "1234", type: "DELETE_BEVERAGE"});
  });

  it("should correctly convert actions.toggleDetailsOn(id) to a state change via reducer", () => {
    expect(actions.toggleDetailsOn("1234")).toEqual({type: "TOGGLE_DETAILS_ON", id: "1234"});
  });

  it("should correctly convert actions.toggleDetailsOff() to a state change via reducer", () => {
    expect(actions.toggleDetailsOff()).toEqual({type: "TOGGLE_DETAILS_OFF"});
  });
});
