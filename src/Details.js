import React from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux';

function Details(props){
  const thisBeverage = props.currentMenu[props.viewBeverageDetails];
  return(
    <React.Fragment>
      <h3>Details Page</h3>
      <p><b>Name</b>: {thisBeverage.name}<br/>
      <b>Brand</b>: {thisBeverage.brand}<br/>
      <b>Price</b>: {thisBeverage.price}<br/>
      <b>Alcohol Content</b>: {thisBeverage.alcontent}<br/>
      <b>Pints Remaining</b>: {thisBeverage.pints}<br/></p>
    </React.Fragment>
  );
}

Details.propTypes = {
  currentMenu: PropTypes.object,
  viewBeverageDetails: PropTypes.string
}

const mapStateToProps = state => {
  return {
    currentMenu: state.currentMenu,
    viewBeverageDetails: state.viewBeverageDetails
  }
}

export default connect(mapStateToProps)(Details);

