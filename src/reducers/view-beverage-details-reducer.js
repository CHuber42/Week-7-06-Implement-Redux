import * as actions from "../actions/ActionTypes";

export default viewBeverageDetails = ( state = null, action ) => { 
  switch (action.type) {
    case actions.TOGGLE_DETAILS_ON:
      return state = action.id;
    case actions.TOGGLE_DETAILS_OFF:
      return state = null;
    default:
      return state;
  };
};