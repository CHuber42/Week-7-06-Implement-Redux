import React from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import * as actions from './actions/';

function Beverage(props){
  console.log(props);
  return(
    <React.Fragment>
      <div>
        <p><b>Name</b>: {props.name}<br/>
        <b>Brand</b>: {props.brand}<br/>
        <b>Price</b>: {props.price}<br/>
        <b>Alcohol Content</b>: {props.alcontent}<br/>
        <b>Pints Remaining</b>: {props.pints}<br/>
        </p></div>  
      <button onClick={() => decrementPint(props)}>Sold a Pint</button>
      <hr/>
    </React.Fragment>
  );
}

function decrementPint(props){
  const {dispatch} = props;
  const newBeverage = {id: props.id, name: props.name, brand: props.brand, price: props.price, alcontent: props.alcontent, pints: (props.pints-1), key: props.key};
  dispatch(actions.addBeverage(newBeverage));
}

Beverage.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string,
  alcontent: PropTypes.string,
  brand: PropTypes.string,
  pints: PropTypes.number,
  viewBeverageDetails: PropTypes.string,
  currentMenu: PropTypes.object
}

const mapStateToProps = state => {
  return {
    currentMenu: state.currentMenu,
    viewBeverageDetails: state.viewBeverageDetails
  }
}

export default connect(mapStateToProps)(Beverage);;
