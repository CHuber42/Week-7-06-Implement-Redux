import React from "react";
import Beverage from "./Beverage";
import PropTypes from "prop-types";

function Menu(props){
  return(
    <React.Fragment>
      {Object.values(props.currentMenu).map((beverage) => 
        <Beverage 
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
  currentMenu: PropTypes.object
}

export default Menu;