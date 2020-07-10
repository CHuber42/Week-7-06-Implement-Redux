import * as actions from "../actions/ActionTypes";

export default ( state = null, id ) => { 
  switch (action.type) {
    case actions.TOGGLE_DETAILS_ON:
      return state = id;
    case actions.TOGGLE_DETAILS_OFF:
      return state = null;
    default:
      return state;
  };
};