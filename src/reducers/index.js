import toggleForm from './adding-beverage-reducer';
import currentMenu from './current-menu-reducer';
import viewBeverageDetails from './view-beverage-details-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  viewBeverageDetails: viewBeverageDetails,
  currentMenu: currentMenu,
  toggleForm: toggleForm
});

export default rootReducer;