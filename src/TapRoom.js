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
  alcontent: 0,
  price: "$4.99",
  pints: 124,
  id: v4()
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

  addBeverage(beverage){

  }

  decrementPint = (bevID) =>{
    const targetBeverage = this.state.currentMenu.filter(beverage => beverage.id === bevID)[0];
    const newBeverage = {
      id: targetBeverage.id, 
      name: targetBeverage.name,
      price: targetBeverage.price, 
      alcontent: targetBeverage.alcontent, 
      brand: targetBeverage.brand, 
      pints: (targetBeverage.pints - 1)
    };
    if(newBeverage.pints > 0){
      const newMenu = this.state.currentMenu.filter(beverage => beverage.id !== bevID).concat(newBeverage);
      this.setState({currentMenu: newMenu});
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
      activeFragment = <Details/>
      buttonText = "Back to Menu";
    }
    else if (this.state.addingBeverage)
    {
      activeFragment = <BeverageForm/>
      buttonText = "Back to Menu";
    }
    else 
    {
      activeFragment = <Menu masterMenu={this.state.currentMenu} decreaseAPint={this.decrementPint}/>
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
