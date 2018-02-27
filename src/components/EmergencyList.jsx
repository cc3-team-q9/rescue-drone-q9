import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { goCreateFlightPlan } from '../actions/index';

export default class EmergencyList extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  async componentDidMount() {
    if (this.props.userMessages.length <= 0) {
      this.props.getEmergencyList();
    }
  }

  handleClick(userMessage) {
    this.props.setUserMessage(userMessage);
    this.props.goCreateFlightPlan();
  }

  render() {
    return (
      <table className="EmergencyList">
        <tr>
          <th>Name</th>
          <th>Message</th>
          <th>Longitude</th>
          <th>Latitude</th>
          <th>Called at</th>
        </tr>
        {this.props.userMessages.map(eachMessage => (
          <tr key={eachMessage.id} >
            <td>{eachMessage.username}</td>
            <td>{eachMessage.message}</td>
            <td>{eachMessage.longitude}</td>
            <td>{eachMessage.latitude}</td>
            <td>{eachMessage.calledAt}</td>
            <button onClick={() => this.handleClick(eachMessage)}>Create Flight Plan</button>
          </tr>
        ))}
      </table>
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
