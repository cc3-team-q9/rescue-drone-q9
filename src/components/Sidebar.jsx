import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HelpMessage from '../containers/HelpMessage';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    // this.props.registerUserLocation();
    this.props.getUserLocation();
  }

  render() {
    return (
      <div className="sidebar">
        <form onSubmit={this.handleSubmit}>
          <h3>Call for Help</h3>
          <input className="button" type="submit" value="Help" />
        </form>
        <HelpMessage />
      </div>
    );
  }
}

Sidebar.propTypes = {
  getUserLocation: PropTypes.func.isRequired,
  // registerUserLocation: PropTypes.func.isRequired,
};

export default Sidebar;