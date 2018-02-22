import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HelpMessage extends Component {
  constructor(props) {
    super(props);
    this.input = null;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    if (!this.input.value.trim()) {
      return;
    }
    // this.props.registerUserMessage(input.value);
    alert('Your help message was submitted to the Rescue Drone Q9 Team:\n' + this.input.value);
  }

  renderEmpty() {
    return (
      <div>
      </div>
    );
  }

  renderHelpMessage() {
    return (
      <div>
        <div style={{ marginTop: '15px', marginBottom: '15px' }}>
          Longitude: {this.props.userLocation.position.lng}<br />
          Latitude: {this.props.userLocation.position.lat}<br />
        </div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              Your Help Message:
              <textarea className="textHelp" ref={node => {
                this.input = node;
              }} />
            </label>
          </div>
          <input className="button" type="submit" value="Send" />
        </form>
      </div>
    );
  }

  render() {
    if (this.props.userLocation.position.lat && this.props.userLocation.position.lat) {
      return this.renderHelpMessage();
    }
    return this.renderEmpty();
  }
}

HelpMessage.propTypes = {
  // registerUserMessage: PropTypes.func.isRequired,
};

export default HelpMessage;
