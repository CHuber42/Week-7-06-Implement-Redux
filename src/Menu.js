import React from "react";
import Beverage from "./Beverage";
import PropTypes from "prop-types";

function Menu(props){
  return(
    <React.Fragment>
      {props.masterMenu.map((beverage) => 
        <Beverage 
        decrementPint={props.decreaseAPint}
        id={beverage.id}
        name={beverage.name}
        price={beverage.price}
        alcontent={beverage.alcontent}
        brand={beverage.brand}
        pints={beverage.pints}
        bevDetails={props.viewDetails}
        key={beverage.key}/>
      )}
    </React.Fragment>
  );
}

Menu.propTypes = {
  decreaseAPint: PropTypes.func,
  masterMenu: PropTypes.array,
  viewDetails: PropTypes.func
}


export default Menu;