import React from "react";
import {v4} from "uuid";
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import * as actions from './actions/';

function BeverageForm(props){




  return(
    <React.Fragment>
      <form onSubmit={(event) => addBeverage(event, props)}>
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

function addBeverage(event, props){
  event.preventDefault();
  const {dispatch} = props;
  const newBeverage = {   
    name: event.target.name.value,
    brand: event.target.brand.value,
    price: event.target.price.value,
    alcontent: event.target.alcontent.value,
    pints: parseInt(event.target.pints.value),
    id: v4()
  }
  dispatch(actions.addBeverage(newBeverage));
  dispatch(actions.toggleForm());
}



BeverageForm.propTypes = {
  currentMenu: PropTypes.object
}

const mapStateToProps = state => {
  return {
    currentMenu: state.currentMenu
  } 
}

export default connect(mapStateToProps)(BeverageForm);