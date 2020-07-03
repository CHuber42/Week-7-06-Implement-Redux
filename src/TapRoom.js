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

  decrementPint(id){

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
