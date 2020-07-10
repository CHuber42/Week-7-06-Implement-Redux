import React from "react";
import Beverage from "./Beverage";
import PropTypes from "prop-types";
import {connect} from 'react-redux';

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
        pints={beverage.pints}/>
      )}
    </React.Fragment>
  );
}

Menu.propTypes = {
  currentMenu: PropTypes.object
}

const mapStateToProps = state => {
  return {
    currentMenu: state.currentMenu,
    viewBeverageDetails: state.viewBeverageDetails
  }
}
export default connect(mapStateToProps)(Menu);