import React from "react";
import Beverage from "./Beverage";
import PropTypes from "prop-types";

function Menu(props){
  return(
    <React.Fragment>
      <Beverage decrementPint={props.decreaseAPint}/>
      <hr/>
    </React.Fragment>
  );
}

Menu.propTypes = {
  decreaseAPint: PropTypes.func
}


export default Menu;