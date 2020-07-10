import toggleFormReducer from './adding-beverage-reducer';
import currentMenuReducer from './current-menu-reducer';
import viewBeverageDetailsReducer from './view-beverage-details-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  viewBeverageDetails: viewBeverageDetailsReducer,
  currentMenu: currentMenuReducer,
  toggleForm: toggleFormReducer
});

export default rootReducer;