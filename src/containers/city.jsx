import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import selectCity from '../actions/index';

class City extends Component {

  render() {
    return (
      <li
        className="list-group-item"
        onClick={this.props.selectCity(this.props.city)}
      >
        {this.props.city.name}
      </li>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectCity: selectCity },
    dispatch
  );
}

// function mapStateToProps(reduxState) {
//   return {
//     active_city: reduxState.city
//   };
// }

export default connect(null, mapDispatchToProps)(City);
