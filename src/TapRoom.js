import React from 'react';
import Header from "./Header";
import Menu from "./Menu";
import BeverageForm from ".BeverageForm";
import {v4} from "uuid"; 

Menu = [
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
      menu: Menu
    }
  }

  toggleView(){

  }

  addBeverage(beverage){

  }

  decrementPints(id){

  }


  render() {
    return (
      <React.Fragment>

      </React.Fragment>
  )}
}

export default TapRoom;
