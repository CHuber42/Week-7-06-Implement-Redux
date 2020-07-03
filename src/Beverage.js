import React from "react";
import PropTypes from "prop-types";
import BeverageForm from "./BeverageForm";

function Beverage(props){
  return(
    <React.Fragment>
      <div><p>This is a Beverage.</p></div>
      <button onClick={props.decreaseAPint}>Sold a Pint</button>
    </React.Fragment>
  );
}

Beverage.propTypes = {
  decreaseAPint: PropTypes.func
}

export default Beverage;