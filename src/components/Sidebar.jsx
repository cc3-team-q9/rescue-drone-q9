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
    this.props.getUserLocation();
  }

  render() {
    return (
      <div className="sidebar">
        <form className="help-form" onSubmit={this.handleSubmit}>
          <h3>Call for Help</h3>
          <input className="button help-button" type="submit" value="Help" />
        </form>
        <HelpMessage />
      </div>
    );
  }
}

Sidebar.propTypes = {
  getUserLocation: PropTypes.func.isRequired,
};

export default Sidebar;
