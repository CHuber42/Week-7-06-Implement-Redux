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

  toggleView(){

  }

  addBeverage(beverage){

  }

  decrementPints(id){

  }


  render() {
    let activeFragment;
    if (this.state.viewBeverageDetails !== null)
    {
      activeFragment = <Details/>
    }
    else if (this.state.addingBeverage)
    {
      activeFragment = <BeverageForm/>
    }
    else 
    {
      activeFragment = <Menu/>
    }
    return (
      <React.Fragment>
        <Header/>
        {activeFragment}
        <button onClick={this.toggleView}>New Beverage</button>
      </React.Fragment>
  )};
};

export default TapRoom;
