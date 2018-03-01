import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HelpMessage extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  get currentView() {
    if (this.props.userLocation.length > 0) {
      return (
        <div className="help-message">
          <table className="help-message-table">
            <tr><td>Latitude:</td></tr>
            <tr><td>{this.props.userLocation[0].position.lat}</td></tr>
            <tr><td>Longitude:</td></tr>
            <tr><td>{this.props.userLocation[0].position.lng}</td></tr>
          </table>
          <form className="help-message-form" onSubmit={this.handleSubmit}>
            <label htmlFor="help-messsage-label">
              <textarea
                className="text-help"
                placeholder="Your Help Message is here:"
                onChange={this.handleChange}
              />
            </label>
            <input className="button help-message-button" type="submit" value="Send" />
          </form>
        </div>
      );
    }
    return (
      <div className="page-icon">
        <img src="./icon.png" alt="icon" />
      </div>
    );
  }

  handleChange(event) {
    this.props.writeHelpMessage(event.target.value);
  }

  handleSubmit(event) {
    event.preventDefault();
    if (!this.props.helpMsg.trim()) {
      return;
    }
    this.props.registerUserMessage(
      this.props.username,
      this.props.helpMsg,
      this.props.userLocation,
    );
    alert(`Your help message was submitted to the Rescue Drone Q9 Team:\n${this.props.helpMsg}`);
  }

  render() {
    return this.currentView;
  }
}

HelpMessage.propTypes = {
  helpMsg: PropTypes.string.isRequired,
  registerUserMessage: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  userLocation: PropTypes
    .arrayOf(PropTypes.objectOf(PropTypes.objectOf(PropTypes.number, PropTypes.number))).isRequired,
  writeHelpMessage: PropTypes.func.isRequired,
};

export default HelpMessage;
