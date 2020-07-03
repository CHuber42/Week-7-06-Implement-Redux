import React from 'react';
import Header from "./Header";
import Menu from "./Menu";
import BeverageForm from "./BeverageForm";
import {v4} from "uuid"; 
import Details from "./Details";

let DefaultMenu = [
  {
  name: "Root Beer",
  brand: "Washington Valley",
  alcontent: "0",
  price: "4.99",
  pints: 124,
  id: v4(),
  key: 0
  }
]

class TapRoom extends React.Component 
{
  constructor(){
    super();
    this.state = {
      currentMenu: DefaultMenu,
      addingBeverage: false,
      viewBeverageDetails: null,
    }
  }

  toggleView = () => {
    if(this.state.viewBeverageDetails)
    {
      this.setState({viewBeverageDetails: null, addingBeverage: false});
    }
    else if(this.state.addingBeverage){
      this.setState({addingBeverage: false});
    }
    else{
      this.setState({addingBeverage: true}); 
    }
  }

  addBeverage = (beverage) => {
    const newMenu = this.state.currentMenu.concat(beverage);
    this.setState({currentMenu: newMenu, addingBeverage: false});
  }

  toggleDetails = (bevID) => {
    this.setState({viewBeverageDetails: bevID, addingBeverage: false});
  }

  decrementPint = (bevID) =>{
    const targetBeverage = this.state.currentMenu.filter(beverage => beverage.id === bevID)[0];
    const newBeverage = {
      id: targetBeverage.id, 
      name: targetBeverage.name,
      price: targetBeverage.price, 
      alcontent: targetBeverage.alcontent, 
      brand: targetBeverage.brand, 
      pints: (targetBeverage.pints - 1),
      key: targetBeverage.key
    };
    if(newBeverage.pints > 0){
      const newMenu = this.state.currentMenu.filter(beverage => beverage.id !== bevID).concat(newBeverage);
      this.setState({currentMenu: newMenu.sort(function(a, b){
        return a.key - b.key;
      })});
    }
    else{
      const newMenu = this.state.currentMenu.filter(beverage => beverage.id !== bevID);
      this.setState({currentMenu: newMenu});
    }
  }

  render() {
    let activeFragment;
    let buttonText;
    if (this.state.viewBeverageDetails !== null)
    {
      const activeBeverage = this.state.currentMenu.filter(beverage => beverage.id === this.state.viewBeverageDetails)[0];
      activeFragment = <Details beverage={activeBeverage}/>
      buttonText = "Back to Menu";
    }
    else if (this.state.addingBeverage)
    {
      activeFragment = <BeverageForm formSubmit={this.addBeverage} bevKey={this.state.currentMenu.length}/>
      buttonText = "Back to Menu";
    }
    else 
    {
      activeFragment = <Menu masterMenu={this.state.currentMenu} decreaseAPint={this.decrementPint} viewDetails={this.toggleDetails}/>
      buttonText = "Add Beverage to Menu";
    }
    return (
      <React.Fragment>
        <Header/>
        {activeFragment}
        <button onClick={this.toggleView}>{buttonText}</button>
      </React.Fragment>
  )};
};

export default TapRoom;
