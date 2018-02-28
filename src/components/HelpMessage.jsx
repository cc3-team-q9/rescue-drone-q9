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
        <div>
          <div style={{ marginTop: '15px', marginBottom: '15px' }}>
            Longitude: {this.props.userLocation[0].position.lng}<br />
            Latitude: {this.props.userLocation[0].position.lat}<br />
          </div>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="helpMsg">
                Your Help Message:
                <textarea className="textHelp" onChange={this.handleChange} />
              </label>
            </div>
            <input className="button" type="submit" value="Send" />
          </form>
        </div>
      );
    }
    return <div />;
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
    .arrayOf(PropTypes.objectOf(PropTypes.number, PropTypes.number)).isRequired,
  writeHelpMessage: PropTypes.func.isRequired,
};

export default HelpMessage;
