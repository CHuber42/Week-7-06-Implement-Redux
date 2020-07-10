import React from 'react';
import Header from "./Header";
import Menu from "./Menu";
import BeverageForm from "./BeverageForm";
import {v4} from "uuid"; 
import Details from "./Details";
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import * as actions from './actions/index'

let DefaultItem = 
  {
  name: "Root Beer",
  brand: "Washington Valley",
  alcontent: "0",
  price: "4.99",
  pints: 124,
  id: v4()
  }


class TapRoom extends React.Component 
{
  constructor(props){
    super();
    const {dispatch} = props;
    dispatch(actions.addBeverage(DefaultItem));
  }

  
  toggleForm(props){
    const {dispatch} = props;
    if(props.viewBeverageDetails){
      dispatch(actions.toggleDetailsOff());
    }
    else
    {
      dispatch(actions.toggleForm());
    }
  };
  
  render() {
    let activeFragment;
    let buttonText;
    if (this.props.viewBeverageDetails !== null)
    {
      activeFragment = <Details />
      buttonText = "Back to Menu";
    }
    else if (this.props.formVisible)
    {
      activeFragment = <BeverageForm />
      buttonText = "Back to Menu";
    }
    else 
    {
      activeFragment = <Menu />
      buttonText = "Add Beverage to Menu";
    }
    return (
      <React.Fragment>
        <Header/>
        {activeFragment}
        <button onClick={() => this.toggleForm(this.props)}>{buttonText}</button>
      </React.Fragment>
  )};
};

TapRoom.propTypes = {
  currentMenu: PropTypes.object,
  formVisible: PropTypes.bool,
  viewBeverageDetails: PropTypes.string
}

const mapStateToProps = state => {
  return {
    currentMenu: state.currentMenu,
    formVisible: state.toggleForm,
    viewBeverageDetails: state.viewBeverageDetails
  }
}

TapRoom = connect(mapStateToProps)(TapRoom);

export default TapRoom;

// decrementPint = (bevID) =>{
//   const targetBeverage = this.state.currentMenu.filter(beverage => beverage.id === bevID)[0];
//   const newBeverage = {
//     id: targetBeverage.id, 
//     name: targetBeverage.name,
//     price: targetBeverage.price, 
//     alcontent: targetBeverage.alcontent, 
//     brand: targetBeverage.brand, 
//     pints: (targetBeverage.pints - 1),
//     key: targetBeverage.key
//   };
//   if(newBeverage.pints > 0){
//     const newMenu = this.state.currentMenu.filter(beverage => beverage.id !== bevID).concat(newBeverage);
//     this.setState({currentMenu: newMenu.sort(function(a, b){
//       return a.key - b.key;
//     })});
//   }
//   else{
//     const newMenu = this.state.currentMenu.filter(beverage => beverage.id !== bevID);
//     this.setState({currentMenu: newMenu});
//   }
// }