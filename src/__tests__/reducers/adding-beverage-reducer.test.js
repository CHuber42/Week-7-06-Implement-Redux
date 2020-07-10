import toggleFormReducer from "../../reducers/adding-beverage-reducer";

describe("toggleFormReducer", () => {
  it("Should return default state null if no action is applied", () => {
    expect(toggleFormReducer(false, {type: null})).toEqual(false);
  });
  
  it("Should toggle form visiblility state to true", () => {
    expect(toggleFormReducer(false, {type: "TOGGLE_FORM"})).toEqual(true);
  });
});
    