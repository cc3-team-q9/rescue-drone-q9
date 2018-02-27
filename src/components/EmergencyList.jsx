import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { goCreateFlightPlan } from '../actions/index';

export default class EmergencyList extends Component {
  async componentDidMount() {
    if (this.props.userMessages.length <= 0) {
      this.props.getEmergencyList();
    }
  }

  render() {
    return (
      <ul className="EmergencyList">
        {this.props.userMessages.map(eachMessage => (<li key={eachMessage.id} >{eachMessage.username}</li>))}
        <button onClick={() => this.props.goCreateFlightPlan()}>Create Flight Plan</button>
      </ul>
    );
  }
}

EmergencyList.propTypes = {
  userMessages: PropTypes.arrayOf(PropTypes.shape({
    username: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    longitude: PropTypes.number.isRequired,
    latitude: PropTypes.number.isRequired,
    calledAt: PropTypes.string.isRequired,
  })),
  getEmergencyList: PropTypes.func.isRequired,
};
