import React from "react";
import PropTypes from "prop-types";
import BeverageForm from "./BeverageForm";

function Beverage(props){
  return(
    <React.Fragment>
      <div onClick={() => props.bevDetails(props.id)}>
        <p><b>Name</b>: {props.name}<br/>
        <b>Brand</b>: {props.brand}<br/>
        <b>Price</b>: {props.price}<br/>
        <b>Alcohol Content</b>: {props.alcontent}<br/>
        <b>Pints Remaining</b>: {props.pints}<br/>
        </p></div>  
      <button onClick={() => props.decrementPint(props.id)}>Sold a Pint</button>
      <hr/>
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
  pints: PropTypes.number,
  bevDetails: PropTypes.func
}

export default Beverage;
