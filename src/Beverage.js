import React from "react";
import PropTypes from "prop-types";
import BeverageForm from "./BeverageForm";

function Beverage(props){
  return(
    <React.Fragment>
      <div><p><b>Name</b>: {props.name}<br/>
              <b>Brand</b>: {props.brand}<br/>
              <b>Price</b>: {props.price}<br/>
              <b>Alcohol Content</b>: {props.alcontent}<br/>
              <b>Pints Remaining</b>: {props.pints}<br/>
              </p></div>
      <button onClick={() => props.decrementPint(props.id)}>Sold a Pint</button>
    </React.Fragment>
  );
}

Beverage.propTypes = {
  decrementPint: PropTypes.func,
  id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string,
  alcontent: PropTypes.string,
  brand: PropTypes.string,
  pints: PropTypes.number
}

export default Beverage;
