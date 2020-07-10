import viewBeverageDetailsReducer from "../../reducers/view-beverage-details-reducer";

describe("viewBeverageDetailsReducer", () => {

  it("should return default value null without any action applied", () => {
    expect(viewBeverageDetailsReducer(null, {type: null})).toEqual(null);
  });

  it("should return an id string when supplied a string and appropriate action type", () => {
    expect(viewBeverageDetailsReducer(null, {type: "TOGGLE_DETAILS_ON", id: "1234"})).toEqual("1234");
  });

  it("should return to null after being toggled on/off in succession", () => {
    viewBeverageDetailsReducer(null, {type: "TOGGLE_DETAILS_ON", id: "1234"});
    expect(viewBeverageDetailsReducer(null, {type: "TOGGLE_DETAILS_OFF"})).toEqual(null);
  });

});