import React from "react";
import PropTypes from "prop-types";

function Details(props){
  return(
    <React.Fragment>
      <h3>Details Page</h3>
      <p><b>Name</b>: {props.beverage.name}<br/>
      <b>Brand</b>: {props.beverage.brand}<br/>
      <b>Price</b>: {props.beverage.price}<br/>
      <b>Alcohol Content</b>: {props.beverage.alcontent}<br/>
      <b>Pints Remaining</b>: {props.beverage.pints}<br/></p>
    </React.Fragment>
  );
}

Details.propTypes = {
  beverage: PropTypes.object
}

export default Details;

