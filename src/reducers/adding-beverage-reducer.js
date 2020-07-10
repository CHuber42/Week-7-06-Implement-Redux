import * as actions from "../actions/ActionTypes";

export default (state = false, action) => {
  switch(action.type) {
    case actions.TOGGLE_FORM:
    return !state;
  default:
    return state;
}}