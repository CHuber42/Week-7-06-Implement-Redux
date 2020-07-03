import React from "react";
import {v4} from "uuid";
import PropTypes from "prop-types";

function BeverageForm(props){

  function addBeverage(event){
    event.preventDefault();
    props.formSubmit({
      name: event.target.name.value,
      brand: event.target.brand.value,
      price: event.target.price.value,
      alcontent: event.target.alcontent.value,
      pints: parseInt(event.target.pints.value),
      id: v4(),
      key: props.bevKey })
  }

  return(
    <React.Fragment>
      <form onSubmit={addBeverage}>
        <input
          type="text"
          name="name"
          placeholder="Beverage Name"/><br/>
        <input
          type="text"
          name="brand"
          placeholder="Brand"/><br/>
        <input
          type="text"
          name="price"
          placeholder="Price per pint"/><br/>
        <input
          type="text"
          name="alcontent"
          placeholder="Alcohol Content"/><br/>
        <input
          type="number"
          name="pints"
          placeholder="Pints in Keg"/><br/>
        <button type="submit">Add Beverage</button>
      </form>
      <hr/>
    </React.Fragment>
  );
}

BeverageForm.propTypes = {
  formSubmit: PropTypes.func,
  bevKey: PropTypes.number  
}


export default BeverageForm;