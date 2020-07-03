import React from 'react';
import Header from "./Header";
import Menu from "./Menu";
import BeverageForm from "./BeverageForm";
import {v4} from "uuid"; 

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
      addingBeverage: false
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
        <Header/>
        <Menu/>
        <BeverageForm/>
        <button onClick={this.toggleView}>New Beverage</button>
      </React.Fragment>
  )};
};

export default TapRoom;
