import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class EmergencyList extends Component {
  async componentDidMount() {
    if (this.props.userMessages.length <= 0) {
      this.props.getEmergencyList();
    }
  }

  render() {
    console.log(this.props.userMessages);
    return (
      <ul className="EmergencyList">
        {this.props.userMessages.map(eachMessage => (<li>{eachMessage.username}</li>))}
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
    calledAt: PropTypes.instanceOf(Date).isRequired,
  })),
  getEmergencyList: PropTypes.func.isRequired,
};
