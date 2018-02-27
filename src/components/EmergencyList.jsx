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
<<<<<<< HEAD
=======
    console.log(userMessage);
>>>>>>> master
    this.props.setUserMessage(userMessage);
    this.props.goCreateFlightPlan();
  }

  render() {
    return (
      <ul className="EmergencyList">
        {this.props.userMessages.map(eachMessage => (
          <li key={eachMessage.id} >
            {eachMessage.username}
            <button onClick={() => this.handleClick(eachMessage)}>Create Flight Plan</button>
          </li>        
        ))}
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
